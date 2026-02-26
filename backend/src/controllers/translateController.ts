import { Request, Response } from 'express'

const GOOGLE_TRANSLATE_API_URL = 'https://translate.googleapis.com/translate_a/single'

const translationCache: Record<string, string> = {}

function getCacheKey(lang: string, text: string): string {
  return `${lang}:${text}`
}

async function translateSingle(targetLang: string, text: string): Promise<string> {
  const cacheKey = getCacheKey(targetLang, text)
  if (translationCache[cacheKey]) return translationCache[cacheKey]

  const params = new URLSearchParams({
    client: 'gtx',
    sl: 'en',
    tl: targetLang,
    dt: 't',
    q: text
  })

  const response = await fetch(`${GOOGLE_TRANSLATE_API_URL}?${params.toString()}`)
  if (!response.ok) {
    throw new Error(`Google Translate request failed: ${response.status}`)
  }

  const data = await response.json()
  if (!Array.isArray(data) || !Array.isArray(data[0])) {
    return text
  }

  const translated = data[0]
    .filter((segment: unknown) => Array.isArray(segment) && segment.length > 0)
    .map((segment: unknown[]) => (typeof segment[0] === 'string' ? segment[0] : ''))
    .join('')

  if (translated) {
    translationCache[cacheKey] = translated
  }

  return translated || text
}

async function translateBatch(targetLang: string, texts: string[]): Promise<string[]> {
  const CONCURRENCY = 5
  const results: string[] = new Array(texts.length)

  for (let i = 0; i < texts.length; i += CONCURRENCY) {
    const chunk = texts.slice(i, i + CONCURRENCY)
    const promises = chunk.map(async (text, j) => {
      const idx = i + j
      if (!text || text.trim() === '') {
        results[idx] = text
        return
      }
      try {
        results[idx] = await translateSingle(targetLang, text)
      } catch (error) {
        results[idx] = text
      }
    })
    await Promise.all(promises)
  }

  return results
}

export const TranslateController = {
  async translate(req: Request, res: Response) {
    try {
      const { targetLang, texts } = req.body as { targetLang?: string; texts?: string[] }

      if (!targetLang || !Array.isArray(texts) || texts.length === 0) {
        return res.status(400).json({ error: 'targetLang and texts are required' })
      }

      const translations = await translateBatch(targetLang, texts)
      res.json({ translations })
    } catch (error) {
      console.error('TranslateController.translate error', error)
      res.status(502).json({ error: 'Unable to translate at this time' })
    }
  }
}
