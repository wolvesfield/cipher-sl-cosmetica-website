import { Globe } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export const supportedLanguages = [
  { code: 'en', label: 'English', gtCode: 'en' },
  { code: 'es', label: 'Español', gtCode: 'es' },
  { code: 'fr', label: 'Français', gtCode: 'fr' },
  { code: 'de', label: 'Deutsch', gtCode: 'de' },
  { code: 'it', label: 'Italiano', gtCode: 'it' },
  { code: 'pl', label: 'Polski', gtCode: 'pl' },
  { code: 'nl', label: 'Nederlands', gtCode: 'nl' }
]

export function LanguageToggle() {
  const [currentLang, setCurrentLang] = useState('en')

  useEffect(() => {
    // Poll the google translate hidden combo to keep sync
    const interval = setInterval(() => {
      const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement
      if (combo && combo.value && combo.value !== currentLang) {
        if (combo.value !== '') {
          setCurrentLang(combo.value)
        } else {
          setCurrentLang('en') // default to en if empty
        }
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [currentLang])

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (combo) {
      combo.value = langCode === 'en' ? '' : langCode // For default language it sometimes expects empty string
      combo.dispatchEvent(new Event('change'))
    }
  }

  const activeLang = supportedLanguages.find(l => l.gtCode === currentLang) || supportedLanguages[0]

  return (
    <div className="relative notranslate flex-shrink-0" translate="no">
      <Select value={currentLang} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[100px] sm:w-[110px] md:w-[130px] border-border bg-background text-slate-dark hover:bg-muted transition-colors text-[11px] sm:text-xs md:text-sm h-8 sm:h-9">
          <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-none">
            <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-dark/70" weight="duotone" />
            <SelectValue>
              {activeLang.label}
            </SelectValue>
          </div>
        </SelectTrigger>
        <SelectContent className="bg-white/95 backdrop-blur-xl border-border z-50">
          {supportedLanguages.map(l => (
            <SelectItem
              key={l.code}
              value={l.gtCode}
              className="text-slate-dark focus:bg-muted focus:text-slate-dark text-xs sm:text-sm"
            >
              {l.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export function LanguageSelect() {
  const [currentLang, setCurrentLang] = useState('en')

  useEffect(() => {
    const interval = setInterval(() => {
      const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement
      if (combo && combo.value && combo.value !== currentLang) {
        if (combo.value !== '') {
          setCurrentLang(combo.value)
        } else {
          setCurrentLang('en')
        }
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [currentLang])

  const handleLanguageChange = (langCode: string) => {
    setCurrentLang(langCode)
    const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement
    if (combo) {
      combo.value = langCode === 'en' ? '' : langCode
      combo.dispatchEvent(new Event('change'))
    }
  }

  return (
    <div className="flex items-center gap-2 w-full notranslate" translate="no">
      <Globe size={16} weight="duotone" className="flex-shrink-0 text-slate-dark/70" />
      <select
        value={currentLang}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="w-full text-sm bg-transparent border border-border rounded-md px-2 py-1.5 text-slate-dark focus:outline-none focus:ring-1 focus:ring-primary/30 cursor-pointer"
      >
        {supportedLanguages.map(l => (
          <option key={l.code} value={l.gtCode}>{l.label}</option>
        ))}
      </select>
    </div>
  )
}
