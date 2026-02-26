import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Package, 
  Calendar, 
  PauseCircle, 
  PlayCircle, 
  XCircle, 
  ArrowLeft,
  Gift,
  Truck,
  Clock
} from '@phosphor-icons/react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { useApp } from '@/lib/AppContext'
import { Product, SubscriptionDetails, SubscriptionFrequency } from '@/lib/types'
import { 
  formatDeliveryDate, 
  SUBSCRIPTION_LABELS,
  getSubscriptionDiscount,
  calculateSubscriptionPrice,
  getNextDeliveryDate
} from '@/lib/subscriptionUtils'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { Separator } from './ui/separator'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'

interface SubscriptionItem {
  id: string
  product: Product
  quantity: number
  subscription: SubscriptionDetails
  status: 'active' | 'paused' | 'cancelled'
  createdAt: Date
}

interface SubscriptionManagementProps {
  onBack: () => void
}

export function SubscriptionManagement({ onBack }: SubscriptionManagementProps) {
  const { language, lt, lta } = useApp()
  const { resolveText } = useLanguage()
  const [subscriptions, setSubscriptions] = useLocalStorage<SubscriptionItem[]>('user-subscriptions', [])
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const handlePauseSubscription = (id: string) => {
    setSubscriptions((current) => 
      (current || []).map(sub => 
        sub.id === id ? { ...sub, status: 'paused' as const } : sub
      )
    )
    toast.success(
      language === 'en' 
        ? 'Subscription paused successfully' 
        : 'Suscripción pausada exitosamente'
    )
  }

  const handleResumeSubscription = (id: string) => {
    setSubscriptions((current) => 
      (current || []).map(sub => 
        sub.id === id ? { ...sub, status: 'active' as const } : sub
      )
    )
    toast.success(
      language === 'en' 
        ? 'Subscription resumed successfully' 
        : 'Suscripción reanudada exitosamente'
    )
  }

  const handleCancelSubscription = (id: string) => {
    setSubscriptions((current) => 
      (current || []).map(sub => 
        sub.id === id ? { ...sub, status: 'cancelled' as const } : sub
      )
    )
    toast.success(
      language === 'en' 
        ? 'Subscription cancelled successfully' 
        : 'Suscripción cancelada exitosamente'
    )
  }

  const handleUpdateFrequency = (id: string, newFrequency: SubscriptionFrequency) => {
    if (newFrequency === 'none') return
    
    setSubscriptions((current) => 
      (current || []).map(sub => 
        sub.id === id 
          ? { 
              ...sub, 
              subscription: {
                ...sub.subscription,
                frequency: newFrequency,
                discount: getSubscriptionDiscount(newFrequency),
                nextDelivery: getNextDeliveryDate(newFrequency)
              }
            } 
          : sub
      )
    )
    toast.success(
      language === 'en' 
        ? 'Delivery frequency updated' 
        : 'Frecuencia de entrega actualizada'
    )
  }

  const activeSubscriptions = (subscriptions || []).filter(sub => sub.status === 'active')
  const pausedSubscriptions = (subscriptions || []).filter(sub => sub.status === 'paused')
  const cancelledSubscriptions = (subscriptions || []).filter(sub => sub.status === 'cancelled')

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          {language === 'en' ? 'Back to Shop' : 'Volver a la Tienda'}
        </Button>

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4"
            >
              <Package className="w-8 h-8 text-white" weight="duotone" />
            </motion.div>
            <h1 className="text-4xl font-bold text-foreground font-playfair">
              {language === 'en' ? 'My Subscriptions' : 'Mis Suscripciones'}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Manage your automatic deliveries and never run out of your favorite products'
                : 'Gestiona tus entregas automáticas y nunca te quedes sin tus productos favoritos'}
            </p>
          </div>

          {activeSubscriptions.length === 0 && pausedSubscriptions.length === 0 && cancelledSubscriptions.length === 0 && (
            <Card className="p-12 text-center">
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" weight="duotone" />
              <h3 className="text-xl font-semibold mb-2">
                {language === 'en' ? 'No Subscriptions Yet' : 'Aún No Tienes Suscripciones'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {language === 'en' 
                  ? 'Subscribe to your favorite products and save up to 15%'
                  : 'Suscríbete a tus productos favoritos y ahorra hasta 15%'}
              </p>
              <Button onClick={onBack}>
                {language === 'en' ? 'Start Shopping' : 'Comenzar a Comprar'}
              </Button>
            </Card>
          )}

          {activeSubscriptions.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <PlayCircle className="w-6 h-6 text-green-600" weight="fill" />
                {language === 'en' ? 'Active Subscriptions' : 'Suscripciones Activas'}
              </h2>
              {activeSubscriptions.map((subscription) => (
                <SubscriptionCard
                  key={subscription.id}
                  subscription={subscription}
                  onPause={handlePauseSubscription}
                  onResume={handleResumeSubscription}
                  onCancel={handleCancelSubscription}
                  onUpdateFrequency={handleUpdateFrequency}
                  isExpanded={expandedId === subscription.id}
                  onToggleExpand={() => setExpandedId(expandedId === subscription.id ? null : subscription.id)}
                />
              ))}
            </div>
          )}

          {pausedSubscriptions.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                <PauseCircle className="w-6 h-6 text-yellow-600" weight="fill" />
                {language === 'en' ? 'Paused Subscriptions' : 'Suscripciones Pausadas'}
              </h2>
              {pausedSubscriptions.map((subscription) => (
                <SubscriptionCard
                  key={subscription.id}
                  subscription={subscription}
                  onPause={handlePauseSubscription}
                  onResume={handleResumeSubscription}
                  onCancel={handleCancelSubscription}
                  onUpdateFrequency={handleUpdateFrequency}
                  isExpanded={expandedId === subscription.id}
                  onToggleExpand={() => setExpandedId(expandedId === subscription.id ? null : subscription.id)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

interface SubscriptionCardProps {
  subscription: SubscriptionItem
  onPause: (id: string) => void
  onResume: (id: string) => void
  onCancel: (id: string) => void
  onUpdateFrequency: (id: string, frequency: SubscriptionFrequency) => void
  isExpanded: boolean
  onToggleExpand: () => void
}

function SubscriptionCard({
  subscription,
  onPause,
  onResume,
  onCancel,
  onUpdateFrequency,
  isExpanded,
  onToggleExpand,
}: SubscriptionCardProps) {
  const { language, currency, convertPrice, formatPrice, lt, lta } = useApp()
  const { resolveText } = useLanguage()
  const { product, quantity, subscription: subDetails, status } = subscription

  const basePrice = convertPrice(product.price.COP) * quantity
  const discountedPrice = calculateSubscriptionPrice(basePrice, subDetails.frequency)
  const savings = basePrice - discountedPrice

  const frequencies: Exclude<SubscriptionFrequency, 'none'>[] = ['30', '60', '90']

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <Card className={cn(
        'overflow-hidden transition-all duration-300',
        status === 'active' && 'border-green-200 bg-green-50/50',
        status === 'paused' && 'border-yellow-200 bg-yellow-50/50',
        status === 'cancelled' && 'border-red-200 bg-red-50/50 opacity-60'
      )}>
        <div className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="relative w-full lg:w-32 h-32 rounded-xl overflow-hidden bg-muted flex-shrink-0">
              <img
                src={product.image}
                alt={resolveText(product.name)}
                className="w-full h-full object-cover"
              />
              <Badge 
                className={cn(
                  'absolute top-2 right-2',
                  status === 'active' && 'bg-green-600',
                  status === 'paused' && 'bg-yellow-600',
                  status === 'cancelled' && 'bg-red-600'
                )}
              >
                {status === 'active' && (language === 'en' ? 'Active' : 'Activa')}
                {status === 'paused' && (language === 'en' ? 'Paused' : 'Pausada')}
                {status === 'cancelled' && (language === 'en' ? 'Cancelled' : 'Cancelada')}
              </Badge>
            </div>

              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {resolveText(product.name)}
                  </h3>
                <p className="text-sm text-muted-foreground">
                  {language === 'en' ? 'Quantity' : 'Cantidad'}: {quantity}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary" weight="duotone" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Frequency' : 'Frecuencia'}
                    </div>
                    <div className="text-sm font-semibold">
                      {lt(SUBSCRIPTION_LABELS)[subDetails.frequency]}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-accent" weight="duotone" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      {language === 'en' ? 'You Save' : 'Ahorras'}
                    </div>
                    <div className="text-sm font-semibold text-accent">
                      {formatPrice(savings, currency)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Truck className="w-5 h-5 text-green-600" weight="duotone" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Next Delivery' : 'Próxima Entrega'}
                    </div>
                    <div className="text-sm font-semibold">
                      {formatDeliveryDate(subDetails.nextDelivery, language)}
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="flex flex-wrap gap-2">
                {status === 'active' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPause(subscription.id)}
                  >
                    <PauseCircle className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Pause' : 'Pausar'}
                  </Button>
                )}
                
                {status === 'paused' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onResume(subscription.id)}
                  >
                    <PlayCircle className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Resume' : 'Reanudar'}
                  </Button>
                )}

                {status !== 'cancelled' && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onToggleExpand}
                    >
                      <Clock className="w-4 h-4 mr-2" />
                      {language === 'en' ? 'Change Frequency' : 'Cambiar Frecuencia'}
                    </Button>
                    
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onCancel(subscription.id)}
                    >
                      <XCircle className="w-4 h-4 mr-2" />
                      {language === 'en' ? 'Cancel' : 'Cancelar'}
                    </Button>
                  </>
                )}
              </div>

              <AnimatePresence>
                {isExpanded && status !== 'cancelled' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3 pt-4"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {language === 'en' ? 'Select New Frequency:' : 'Selecciona Nueva Frecuencia:'}
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {frequencies.map((freq) => {
                        const discount = getSubscriptionDiscount(freq) * 100
                        return (
                          <Button
                            key={freq}
                            variant={subDetails.frequency === freq ? 'default' : 'outline'}
                            size="sm"
                            onClick={() => onUpdateFrequency(subscription.id, freq)}
                            className="flex flex-col h-auto py-3"
                          >
                            <span className="text-xs">{lt(SUBSCRIPTION_LABELS)[freq]}</span>
                            <span className="text-xs font-bold text-accent">-{discount}%</span>
                          </Button>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="lg:text-right space-y-2">
              <div className="text-2xl font-bold text-primary">
                {formatPrice(discountedPrice, currency)}
              </div>
              <div className="text-sm text-muted-foreground line-through">
                {formatPrice(basePrice, currency)}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
