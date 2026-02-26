export type RewardTier = 'bronze' | 'silver' | 'gold' | 'platinum'

export interface LoyaltyReward {
  id: string
  name: { en: string; es: string }
  description: { en: string; es: string }
  pointsCost: number
  type: 'discount' | 'product' | 'shipping' | 'exclusive'
  value: number
  image?: string
  isAvailable: boolean
  expiresAt?: Date
}

export interface LoyaltyTransaction {
  id: string
  type: 'earned' | 'redeemed' | 'expired'
  points: number
  description: { en: string; es: string }
  date: Date
  orderId?: string
  rewardId?: string
}

export interface LoyaltyProfile {
  userId: string
  points: number
  lifetimePoints: number
  tier: RewardTier
  joinDate: Date
  transactions: LoyaltyTransaction[]
  redeemedRewards: string[]
  nextTierPoints: number
  referralCode: string
  referralCount: number
}

export interface TierBenefits {
  tier: RewardTier
  name: { en: string; es: string }
  pointsRequired: number
  benefits: { en: string[]; es: string[] }
  multiplier: number
  color: string
  icon: string
}
