export type CheckoutStep = 'shipping' | 'payment' | 'confirmation'

export type PaymentMethod = 'credit-card' | 'pse' | 'efecty' | 'nequi' | 'pix' | 'oxxo'

export interface ShippingInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface BillingInfo {
  sameAsShipping: boolean
  firstName: string
  lastName: string
  address: string
  city: string
  state: string
  postalCode: string
  country: string
}
