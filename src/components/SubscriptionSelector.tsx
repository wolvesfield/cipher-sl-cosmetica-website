import { motion } from 'framer-motion'
import { Check, Package, Calendar, Gift } from '@phosphor-icons/react'
import { SubscriptionFrequency } from '@/lib/types'
import { 
  getSubscriptionDiscount, 
  calculateSubscriptionPrice, 
  SUBSCRIPTION_LABELS 
} from '@/lib/subscriptionUtils'
import { useApp } from '@/lib/AppContext'
import { cn } from '@/lib/utils'

interface SubscriptionSelectorProps {
  basePrice: number
  selectedFrequency: SubscriptionFrequency
  onFrequencyChange: (frequency: SubscriptionFrequency) => void
  className?: string
}

export function SubscriptionSelector({
  basePrice,
  selectedFrequency,
  onFrequencyChange,
  className,
}: SubscriptionSelectorProps) {
  const { language, currency, convertPrice, formatPrice, lt, lta } = useApp()

  const frequencies: SubscriptionFrequency[] = ['30', '60', '90', 'none']

  const getDiscountText = (frequency: SubscriptionFrequency) => {
    if (frequency === 'none') return null
    const discount = getSubscriptionDiscount(frequency) * 100
    return language === 'en' ? `Save ${discount}%` : `Ahorra ${discount}%`
  }

  const convertedBasePrice = convertPrice(basePrice)

  return (
    <div className={cn('space-y-4', className)} data-subscription-selector>
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
          <Package className="w-5 h-5 text-primary" weight="duotone" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-foreground">
            {language === 'en' ? 'Delivery Schedule' : 'Frecuencia de Entrega'}
          </h3>
          <p className="text-xs text-muted-foreground">
            {language === 'en' ? 'Subscribe and save up to 15%' : 'Suscríbete y ahorra hasta 15%'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {frequencies.map((frequency) => {
          const isSelected = selectedFrequency === frequency
          const discount = getSubscriptionDiscount(frequency)
          const price = calculateSubscriptionPrice(convertedBasePrice, frequency)
          const discountText = getDiscountText(frequency)
          const isSubscription = frequency !== 'none'

          return (
            <motion.button
              key={frequency}
              onClick={() => onFrequencyChange(frequency)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={cn(
                'relative p-4 rounded-xl border-2 text-left transition-all duration-300',
                'focus:outline-none focus:ring-2 focus:ring-primary/20',
                isSelected
                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                  : 'border-border bg-card hover:border-primary/50 hover:bg-primary/5'
              )}
            >
              {discountText && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-accent to-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <Gift className="w-3 h-3" weight="fill" />
                  {discountText}
                </div>
              )}

              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    {isSubscription && (
                      <Calendar className="w-4 h-4 text-primary" weight="duotone" />
                    )}
                    <span className="font-semibold text-sm text-foreground">
                      {lt(SUBSCRIPTION_LABELS)[frequency]}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="text-lg font-bold text-primary">
                      {formatPrice(price, currency)}
                    </div>
                    {discount > 0 && (
                      <div className="text-xs text-muted-foreground line-through">
                        {formatPrice(convertedBasePrice, currency)}
                      </div>
                    )}
                  </div>

                  {isSubscription && (
                    <div className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Auto-delivery' : 'Entrega automática'}
                    </div>
                  )}
                </div>

                <div
                  className={cn(
                    'flex items-center justify-center w-6 h-6 rounded-full border-2 transition-all duration-300',
                    isSelected
                      ? 'bg-primary border-primary'
                      : 'border-border bg-background'
                  )}
                >
                  {isSelected && <Check className="w-4 h-4 text-white" weight="bold" />}
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>

      {selectedFrequency !== 'none' && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20 rounded-xl p-4 space-y-2"
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Package className="w-4 h-4 text-accent" weight="fill" />
            {language === 'en' ? 'Subscription Benefits' : 'Beneficios de Suscripción'}
          </div>
          <ul className="space-y-1.5 text-xs text-muted-foreground">
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" weight="bold" />
              <span>{language === 'en' ? 'Free shipping on all orders' : 'Envío gratis en todos los pedidos'}</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" weight="bold" />
              <span>{language === 'en' ? 'Pause, skip, or cancel anytime' : 'Pausa, omite o cancela en cualquier momento'}</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" weight="bold" />
              <span>{language === 'en' ? 'Never run out of your essentials' : 'Nunca te quedes sin lo esencial'}</span>
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  )
}
