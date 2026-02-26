import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { LoyaltyProfile, LoyaltyTransaction, RewardTier } from './loyaltyTypes'
import { calculateTier, calculatePointsToNextTier, generateReferralCode, getTierBenefits, TIER_BENEFITS } from './loyaltyData'

interface LoyaltyContextType {
  profile: LoyaltyProfile | null
  isLoading: boolean
  earnPoints: (points: number, description: { en: string; es: string }, orderId?: string) => void
  redeemReward: (rewardId: string, pointsCost: number) => boolean
  getTransactionHistory: () => LoyaltyTransaction[]
  getCurrentTier: () => RewardTier
  getPointsToNextTier: () => number
  getTierProgress: () => number
  initializeProfile: (userId: string) => void
}

const LoyaltyContext = createContext<LoyaltyContextType | undefined>(undefined)

export function LoyaltyProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useLocalStorage<LoyaltyProfile | null>('loyalty-profile', null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  const initializeProfile = (userId: string) => {
    if (!profile) {
      const newProfile: LoyaltyProfile = {
        userId,
        points: 0,
        lifetimePoints: 0,
        tier: 'bronze',
        joinDate: new Date(),
        transactions: [],
        redeemedRewards: [],
        nextTierPoints: TIER_BENEFITS[1].pointsRequired,
        referralCode: generateReferralCode(userId),
        referralCount: 0
      }
      setProfile(newProfile)
    }
  }

  const earnPoints = (points: number, description: { en: string; es: string }, orderId?: string) => {
    setProfile((current) => {
      if (!current) return null

      const currentTier = calculateTier(current.lifetimePoints)
      const tierInfo = getTierBenefits(currentTier)
      const multipliedPoints = Math.floor(points * tierInfo.multiplier)

      const transaction: LoyaltyTransaction = {
        id: `txn-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        type: 'earned',
        points: multipliedPoints,
        description,
        date: new Date(),
        orderId
      }

      const newLifetimePoints = current.lifetimePoints + multipliedPoints
      const newTier = calculateTier(newLifetimePoints)

      return {
        ...current,
        points: current.points + multipliedPoints,
        lifetimePoints: newLifetimePoints,
        tier: newTier,
        nextTierPoints: calculatePointsToNextTier(newLifetimePoints),
        transactions: [transaction, ...current.transactions]
      }
    })
  }

  const redeemReward = (rewardId: string, pointsCost: number): boolean => {
    if (!profile || profile.points < pointsCost) {
      return false
    }

    setProfile((current) => {
      if (!current || current.points < pointsCost) return null

      const transaction: LoyaltyTransaction = {
        id: `txn-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        type: 'redeemed',
        points: -pointsCost,
        description: {
          en: `Redeemed reward: ${rewardId}`,
          es: `Recompensa canjeada: ${rewardId}`
        },
        date: new Date(),
        rewardId
      }

      return {
        ...current,
        points: current.points - pointsCost,
        redeemedRewards: [...current.redeemedRewards, rewardId],
        transactions: [transaction, ...current.transactions]
      }
    })

    return true
  }

  const getTransactionHistory = (): LoyaltyTransaction[] => {
    return profile?.transactions || []
  }

  const getCurrentTier = (): RewardTier => {
    return profile?.tier || 'bronze'
  }

  const getPointsToNextTier = (): number => {
    return profile?.nextTierPoints || TIER_BENEFITS[1].pointsRequired
  }

  const getTierProgress = (): number => {
    if (!profile) return 0
    
    const currentTierName = calculateTier(profile.lifetimePoints)
    const currentTierInfo = getTierBenefits(currentTierName)
    const currentIndex = TIER_BENEFITS.findIndex(t => t.tier === currentTierName)
    
    if (currentIndex === TIER_BENEFITS.length - 1) return 100
    
    const nextTier = TIER_BENEFITS[currentIndex + 1]
    const currentTierPoints = currentTierInfo.pointsRequired
    const nextTierPoints = nextTier.pointsRequired
    const pointsInCurrentTier = profile.lifetimePoints - currentTierPoints
    const pointsNeededForNextTier = nextTierPoints - currentTierPoints
    
    return (pointsInCurrentTier / pointsNeededForNextTier) * 100
  }

  return (
    <LoyaltyContext.Provider
      value={{
        profile: profile || null,
        isLoading,
        earnPoints,
        redeemReward,
        getTransactionHistory,
        getCurrentTier,
        getPointsToNextTier,
        getTierProgress,
        initializeProfile
      }}
    >
      {children}
    </LoyaltyContext.Provider>
  )
}

export function useLoyalty() {
  const context = useContext(LoyaltyContext)
  if (context === undefined) {
    throw new Error('useLoyalty must be used within a LoyaltyProvider')
  }
  return context
}
