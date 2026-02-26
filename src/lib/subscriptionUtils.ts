import { SubscriptionFrequency } from './types'

export const SUBSCRIPTION_DISCOUNTS: Record<Exclude<SubscriptionFrequency, 'none'>, number> = {
  '30': 0.15,
  '60': 0.12,
  '90': 0.10,
}

export const SUBSCRIPTION_LABELS = {
  en: {
    '30': 'Every 30 Days',
    '60': 'Every 60 Days',
    '90': 'Every 90 Days',
    'none': 'One-Time Purchase',
  },
  es: {
    '30': 'Cada 30 Días',
    '60': 'Cada 60 Días',
    '90': 'Cada 90 Días',
    'none': 'Compra Única',
  },
}

export const SUBSCRIPTION_BENEFITS = {
  en: [
    'Save up to 15% on every order',
    'Never run out of your favorites',
    'Free shipping on all subscription orders',
    'Pause, skip, or cancel anytime',
    'Adjust delivery schedule as needed',
  ],
  es: [
    'Ahorra hasta 15% en cada pedido',
    'Nunca te quedes sin tus favoritos',
    'Envío gratis en todos los pedidos de suscripción',
    'Pausa, omite o cancela en cualquier momento',
    'Ajusta tu horario de entrega según necesites',
  ],
}

export function getSubscriptionDiscount(frequency: SubscriptionFrequency): number {
  if (frequency === 'none') return 0
  return SUBSCRIPTION_DISCOUNTS[frequency]
}

export function calculateSubscriptionPrice(basePrice: number, frequency: SubscriptionFrequency): number {
  const discount = getSubscriptionDiscount(frequency)
  return basePrice * (1 - discount)
}

export function getNextDeliveryDate(frequency: SubscriptionFrequency): Date | undefined {
  if (frequency === 'none') return undefined
  
  const today = new Date()
  const daysToAdd = parseInt(frequency)
  const nextDate = new Date(today)
  nextDate.setDate(today.getDate() + daysToAdd)
  
  return nextDate
}

export function formatDeliveryDate(date: Date | undefined, language: string): string {
  if (!date) return ''
  
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  
  const locale = language === 'es' ? 'es-ES' : 'en-US'
  return date.toLocaleDateString(locale, options)
}
