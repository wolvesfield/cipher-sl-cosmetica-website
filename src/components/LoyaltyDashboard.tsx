import { useEffect } from 'react'
import { ArrowLeft, Gift, Star, TrendUp, Trophy, Copy, ClockCounterClockwise } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Progress } from './ui/progress'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Separator } from './ui/separator'
import { useLanguage } from '@/lib/LanguageContext'
import { useLoyalty } from '@/lib/LoyaltyContext'
import { useAuth } from '@/lib/AuthContext'
import { TIER_BENEFITS, LOYALTY_REWARDS } from '@/lib/loyaltyData'
import { LoyaltyReward } from '@/lib/loyaltyTypes'
import { toast } from 'sonner'
import { motion, AnimatePresence } from 'framer-motion'

interface LoyaltyDashboardProps {
  onBack: () => void
}

export function LoyaltyDashboard({ onBack }: LoyaltyDashboardProps) {
  const { t, language } = useLanguage()
  const { user } = useAuth()
  const {
    profile,
    isLoading,
    earnPoints,
    redeemReward,
    getTransactionHistory,
    getTierProgress,
    initializeProfile
  } = useLoyalty()

  useEffect(() => {
    if (user && !profile) {
      initializeProfile(user.id)
    }
  }, [user, profile, initializeProfile])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
          <p className="text-lg text-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[oklch(0.97_0.005_230)] via-[oklch(0.95_0.01_240)] to-[oklch(0.93_0.015_250)] py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button variant="ghost" onClick={onBack} className="mb-6">
            <ArrowLeft className="mr-2" />
            {language === 'en' ? 'Back' : 'Volver'}
          </Button>
          
          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Sign In Required' : 'Inicio de Sesión Requerido'}</CardTitle>
              <CardDescription>
                {language === 'en' 
                  ? 'Please sign in to access your loyalty rewards'
                  : 'Por favor inicia sesión para acceder a tus recompensas de lealtad'}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    )
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[oklch(0.97_0.005_230)] via-[oklch(0.95_0.01_240)] to-[oklch(0.93_0.015_250)] py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button variant="ghost" onClick={onBack} className="mb-6">
            <ArrowLeft className="mr-2" />
            {language === 'en' ? 'Back' : 'Volver'}
          </Button>
          
          <Card>
            <CardHeader>
              <CardTitle>{language === 'en' ? 'Welcome!' : '¡Bienvenido!'}</CardTitle>
              <CardDescription>
                {language === 'en' 
                  ? 'Initializing your loyalty profile...'
                  : 'Inicializando tu perfil de lealtad...'}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    )
  }

  const currentTierInfo = TIER_BENEFITS.find(t => t.tier === profile?.tier) || TIER_BENEFITS[0]
  const nextTierInfo = TIER_BENEFITS.find(t => t.pointsRequired > (profile?.lifetimePoints || 0))
  const tierProgress = getTierProgress()

  const handleRedeemReward = (reward: LoyaltyReward) => {
    const success = redeemReward(reward.id, reward.pointsCost)
    if (success) {
      toast.success(
        language === 'en' 
          ? `Successfully redeemed ${reward.name.en}!`
          : `¡${reward.name.es} canjeado con éxito!`
      )
    } else {
      toast.error(
        language === 'en' 
          ? 'Insufficient points'
          : 'Puntos insuficientes'
      )
    }
  }

  const copyReferralCode = () => {
    navigator.clipboard.writeText(profile.referralCode)
    toast.success(language === 'en' ? 'Referral code copied!' : '¡Código de referido copiado!')
  }

  const transactions = getTransactionHistory()

  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(0.97_0.005_230)] via-[oklch(0.95_0.01_240)] to-[oklch(0.93_0.015_250)] py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <ArrowLeft className="mr-2" />
          {language === 'en' ? 'Back' : 'Volver'}
        </Button>

        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-dark mb-2">
            {language === 'en' ? 'Loyalty Rewards' : 'Recompensas de Lealtad'}
          </h1>
          <p className="text-lg text-muted-foreground">
            {language === 'en' 
              ? 'Earn points with every purchase and unlock exclusive benefits'
              : 'Gana puntos con cada compra y desbloquea beneficios exclusivos'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-white to-sand-light border-primary/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Star className="text-primary" size={24} weight="fill" />
                <Badge style={{ backgroundColor: currentTierInfo.color }} className="text-white">
                  {currentTierInfo.name[language as 'en' | 'es'] || currentTierInfo.name.en}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-dark mb-1">
                {profile.points.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Available Points' : 'Puntos Disponibles'}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-teal-light/20 border-teal-deep/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <TrendUp className="text-teal-deep" size={24} />
                <Trophy className="text-teal-deep" size={20} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-dark mb-1">
                {profile.lifetimePoints.toLocaleString()}
              </div>
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Lifetime Points' : 'Puntos Totales'}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-skin-rose/30 border-terracotta/20">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <Gift className="text-terracotta" size={24} />
                <span className="text-xs font-medium text-terracotta">
                  {currentTierInfo.multiplier}x
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-slate-dark mb-1">
                {profile.redeemedRewards.length}
              </div>
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Rewards Redeemed' : 'Recompensas Canjeadas'}
              </p>
            </CardContent>
          </Card>
        </div>

        {nextTierInfo && (
          <Card className="mb-8 border-primary/30">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Trophy size={20} />
                {language === 'en' ? 'Progress to Next Tier' : 'Progreso al Siguiente Nivel'}
              </CardTitle>
              <CardDescription>
                {language === 'en' 
                  ? `${profile.nextTierPoints} more points to unlock ${nextTierInfo.name.en}`
                  : `${profile.nextTierPoints} puntos más para desbloquear ${nextTierInfo.name.es}`}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={tierProgress} className="h-3 mb-4" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>{currentTierInfo.name[language as 'en' | 'es'] || currentTierInfo.name.en}</span>
                <span>{nextTierInfo.name[language as 'en' | 'es'] || nextTierInfo.name.en}</span>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="rewards" className="mb-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="rewards">
              {language === 'en' ? 'Rewards' : 'Recompensas'}
            </TabsTrigger>
            <TabsTrigger value="benefits">
              {language === 'en' ? 'Tier Benefits' : 'Beneficios'}
            </TabsTrigger>
            <TabsTrigger value="history">
              {language === 'en' ? 'History' : 'Historial'}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="rewards" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence>
                {LOYALTY_REWARDS.filter(r => r.isAvailable).map((reward, index) => (
                  <motion.div
                    key={reward.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <Gift size={28} className="text-primary" weight="duotone" />
                          <Badge variant={profile.points >= reward.pointsCost ? 'default' : 'secondary'}>
                            {reward.pointsCost} {language === 'en' ? 'pts' : 'ptos'}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{reward.name[language as 'en' | 'es'] || reward.name.en}</CardTitle>
                        <CardDescription className="text-sm">
                          {reward.description[language as 'en' | 'es'] || reward.description.en}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1 flex items-end">
                        <Button 
                          onClick={() => handleRedeemReward(reward)}
                          disabled={profile.points < reward.pointsCost || profile.redeemedRewards.includes(reward.id)}
                          className="w-full"
                        >
                          {profile.redeemedRewards.includes(reward.id)
                            ? (language === 'en' ? 'Redeemed' : 'Canjeado')
                            : (language === 'en' ? 'Redeem' : 'Canjear')}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </TabsContent>

          <TabsContent value="benefits" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {TIER_BENEFITS.map((tier) => (
                <Card 
                  key={tier.tier}
                  className={tier.tier === profile.tier ? 'border-primary border-2' : ''}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{tier.icon}</span>
                        <CardTitle className="text-xl">{tier.name[language as 'en' | 'es'] || tier.name.en}</CardTitle>
                      </div>
                      {tier.tier === profile.tier && (
                        <Badge>{language === 'en' ? 'Current' : 'Actual'}</Badge>
                      )}
                    </div>
                    <CardDescription>
                      {language === 'en' ? 'Requires' : 'Requiere'} {tier.pointsRequired} {language === 'en' ? 'points' : 'puntos'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {(tier.benefits[language as 'en' | 'es'] || tier.benefits.en).map((benefit: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Star size={16} className="text-primary mt-0.5 flex-shrink-0" weight="fill" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ClockCounterClockwise size={20} />
                  {language === 'en' ? 'Transaction History' : 'Historial de Transacciones'}
                </CardTitle>
                <CardDescription>
                  {language === 'en' 
                    ? 'View all your points earned and redeemed'
                    : 'Ver todos tus puntos ganados y canjeados'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {transactions.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">
                    {language === 'en' ? 'No transactions yet' : 'Aún no hay transacciones'}
                  </p>
                ) : (
                  <div className="space-y-4">
                    {transactions.slice(0, 10).map((transaction, index) => (
                      <div key={transaction.id}>
                        <div className="flex items-center justify-between py-2">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{transaction.description[language as 'en' | 'es'] || transaction.description.en}</p>
                            <p className="text-xs text-muted-foreground">
                              {new Date(transaction.date).toLocaleDateString(language === 'en' ? 'en-US' : 'es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </p>
                          </div>
                          <div className={`font-bold ${transaction.type === 'earned' ? 'text-teal-deep' : 'text-terracotta'}`}>
                            {transaction.type === 'earned' ? '+' : '-'}{Math.abs(transaction.points)}
                          </div>
                        </div>
                        {index < transactions.slice(0, 10).length - 1 && <Separator />}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">
              {language === 'en' ? 'Refer a Friend' : 'Refiere un Amigo'}
            </CardTitle>
            <CardDescription>
              {language === 'en' 
                ? 'Share your referral code and earn bonus points'
                : 'Comparte tu código de referido y gana puntos extra'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-white px-4 py-3 rounded-lg border font-mono text-lg font-bold text-primary">
                {profile.referralCode}
              </div>
              <Button onClick={copyReferralCode} variant="outline" size="icon">
                <Copy size={20} />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              {language === 'en' 
                ? `You've referred ${profile.referralCount} ${profile.referralCount === 1 ? 'friend' : 'friends'}`
                : `Has referido ${profile.referralCount} ${profile.referralCount === 1 ? 'amigo' : 'amigos'}`}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
