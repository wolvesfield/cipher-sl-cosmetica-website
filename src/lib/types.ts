export type Language = 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr'

export type Currency = 'COP' | 'CAD' | 'USD' | 'BRL' | 'MXN'

export type ProductConcern = 'anti-aging' | 'acne' | 'hydration' | 'brightening' | 'sensitivity'

export type ProductCategory = 'anti-aging-facial-cream' | 'anti-aging-body-care' | 'anti-aging-hair-scalp-care'

export interface Price {
  COP: number
  BRL?: number
  MXN?: number
  CAD?: number
  USD?: number
}

export interface Product {
  id: string
  name: { en: string; es: string }
  subtitle?: { en: string; es: string }
  description: { en: string; es: string }
  price: Price
  image: string
  gallery?: string[]
  category: ProductCategory
  skinConditions: string[]
  ingredients: string[]
  benefits: { en: string[]; es: string[] }
  clinicalData?: {
    metric: { en: string; es: string }
    improvement: number
  }[]
  beforeAfterImages?: {
    before: string
    after: string
  }
  isNew?: boolean
  comingSoon?: boolean
  inStock: boolean
  isBundle?: boolean
}

export type SubscriptionFrequency = '30' | '60' | '90' | 'none'

export interface SubscriptionDetails {
  frequency: SubscriptionFrequency
  discount: number
  nextDelivery?: Date
}

export interface CartItem {
  product: Product
  quantity: number
  subscription?: SubscriptionDetails
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: { en: string; es: string }
  userLocation: { en: string; es: string }
  rating: number
  title: { en: string; es: string }
  comment: { en: string; es: string }
  images?: string[]
  verifiedPurchase: boolean
  helpful: number
  date: Date
  skinType?: string
  ageRange?: string
  useCase?: string
}

export interface ReviewStats {
  averageRating: number
  totalReviews: number
  ratingDistribution: {
    5: number
    4: number
    3: number
    2: number
    1: number
  }
  verifiedPurchasePercentage: number
}
