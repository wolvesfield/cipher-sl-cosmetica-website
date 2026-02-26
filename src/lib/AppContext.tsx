import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { Language, Currency, CartItem, Product } from '@/lib/types'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useCurrencyConverter } from '@/hooks/use-currency-converter'
import { useLanguage } from '@/lib/LanguageContext'

interface AppContextType {
  language: Language
  setLanguage: (lang: Language) => void
  currency: Currency
  setCurrency: (curr: Currency) => void
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  convertPrice: (copPrice: number) => number
  formatPrice: (amount: number, curr?: Currency) => string
  isLoadingRates: boolean
  isReady: boolean
  lt: (obj: Record<string, any> | undefined | null) => string
  lta: (obj: Record<string, any> | undefined | null) => string[]
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode}) {
  const { language: langFromCtx, setLanguage: setLangCtx } = useLanguage()
  const language = langFromCtx || 'en'
  const setLanguage = (lang: Language) => setLangCtx(lang)
  
  const [currencyLS, setCurrencyLS] = useLocalStorage<Currency>('user-currency', 'USD')
  const currency = currencyLS || 'USD'
  const setCurrency = (curr: Currency) => setCurrencyLS(curr)
  
  const [cart, setCart] = useLocalStorage<CartItem[]>('sl-cart', [])
  const [isReady, setIsReady] = useState(false)
  const { convertPrice: convertFromCOP, formatPrice: formatCurrency, isLoading: isLoadingRates } = useCurrencyConverter()

  useEffect(() => {
    setIsReady(true)
  }, [])

  const addToCart = (product: Product) => {
    setCart((currentCart) => {
      const safeCart = currentCart || []
      const existingItem = safeCart.find(item => item.product.id === product.id)
      if (existingItem) {
        return safeCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...safeCart, { product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((currentCart) => {
      const safeCart = currentCart || []
      return safeCart.filter(item => item.product.id !== productId)
    })
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    setCart((currentCart) => {
      const safeCart = currentCart || []
      return safeCart.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    })
  }

  const clearCart = () => {
    setCart([])
  }

  const convertPrice = (copPrice: number): number => {
    return convertFromCOP(copPrice, currency)
  }

  const formatPrice = (amount: number, curr?: Currency): string => {
    return formatCurrency(amount, curr || currency)
  }

  const lt = (obj: Record<string, any> | undefined | null): string => {
    if (!obj) return ''
    return (obj[language] ?? obj['en'] ?? obj['es'] ?? Object.values(obj)[0] ?? '') as string
  }

  const lta = (obj: Record<string, any> | undefined | null): string[] => {
    if (!obj) return []
    const val = obj[language] ?? obj['en'] ?? obj['es'] ?? Object.values(obj)[0] ?? []
    return Array.isArray(val) ? val : []
  }

  if (!isReady) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        cart: cart || [],
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        convertPrice,
        formatPrice,
        isLoadingRates,
        isReady,
        lt,
        lta
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
