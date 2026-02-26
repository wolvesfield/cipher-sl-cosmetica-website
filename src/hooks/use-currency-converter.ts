import { useState, useEffect } from 'react'
import { Currency } from '@/lib/types'

export interface ExchangeRates {
  COP: number
  CAD: number
  USD: number
  BRL: number
  MXN: number
  lastUpdated: number
}

const CACHE_DURATION = 60 * 60 * 1000

export function useCurrencyConverter() {
  const [rates, setRates] = useState<ExchangeRates | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchExchangeRates()
  }, [])

  const fetchExchangeRates = async () => {
    try {
      setIsLoading(true)
      const cachedData = localStorage.getItem('sl-exchange-rates')
      
      if (cachedData) {
        const parsed = JSON.parse(cachedData)
        if (Date.now() - parsed.lastUpdated < CACHE_DURATION) {
          setRates(parsed)
          setIsLoading(false)
          return
        }
      }

      const response = await fetch('https://api.exchangerate-api.com/v4/latest/COP')
      if (!response.ok) throw new Error('Failed to fetch rates')
      
      const data = await response.json()
      
      const exchangeRates: ExchangeRates = {
        COP: 1,
        CAD: data.rates.CAD,
        USD: data.rates.USD,
        BRL: data.rates.BRL,
        MXN: data.rates.MXN,
        lastUpdated: Date.now()
      }

      setRates(exchangeRates)
      localStorage.setItem('sl-exchange-rates', JSON.stringify(exchangeRates))
      setError(null)
    } catch (err) {
      console.error('Error fetching exchange rates:', err)
      setError('Failed to load exchange rates')
      setRates({
        COP: 1,
        CAD: 0.00032,
        USD: 0.00024,
        BRL: 0.00082,
        MXN: 0.0048,
        lastUpdated: Date.now()
      })
    } finally {
      setIsLoading(false)
    }
  }

  const convertPrice = (copPrice: number, targetCurrency: Currency): number => {
    if (!rates) return copPrice
    
    if (targetCurrency === 'COP') return copPrice
    if (targetCurrency === 'CAD') return copPrice * rates.CAD
    if (targetCurrency === 'USD') return copPrice * rates.USD
    if (targetCurrency === 'BRL') return copPrice * rates.BRL
    if (targetCurrency === 'MXN') return copPrice * rates.MXN
    
    return copPrice
  }

  const formatPrice = (amount: number, currency: Currency): string => {
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

  return {
    rates,
    isLoading,
    error,
    convertPrice,
    formatPrice,
    refreshRates: fetchExchangeRates
  }
}
