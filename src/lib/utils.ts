import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBilingualText(obj: { en: string; es: string } | undefined, lang: string): string {
  if (!obj) return ''
  if (lang === 'es' && obj.es) return obj.es
  return obj.en || ''
}

export function getBilingualArray(obj: { en: string[]; es: string[] } | undefined, lang: string): string[] {
  if (!obj) return []
  if (lang === 'es' && obj.es) return obj.es
  return obj.en || []
}
