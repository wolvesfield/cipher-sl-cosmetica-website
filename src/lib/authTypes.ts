export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  createdAt: Date
  addresses?: SavedAddress[]
  preferences?: UserPreferences
}

export interface SavedAddress {
  id: string
  label: string
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  postalCode: string
  country: string
  phone: string
  isDefault?: boolean
}

export interface UserPreferences {
  newsletter: boolean
  smsUpdates: boolean
  language: 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr'
  currency: 'COP' | 'CAD' | 'USD' | 'BRL' | 'MXN'
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isGuest: boolean
}
