import { Currency, Price } from './types'

export function getProductPriceInCOP(price: Price): number {
  return price.COP
}

export function formatCurrency(amount: number, currency: Currency): string {
  const currencySymbols: Record<Currency, string> = {
    COP: '$',
    CAD: 'CA$',
    USD: 'US$',
    BRL: 'R$',
    MXN: 'MX$'
  }

  const decimals = currency === 'COP' ? 0 : 2
  const formattedAmount = amount.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })

  return `${currencySymbols[currency]} ${formattedAmount}`
}
