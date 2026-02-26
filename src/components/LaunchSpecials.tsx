import { motion } from 'framer-motion'
import { Sparkle, Crown } from '@phosphor-icons/react'
import { useApp } from '@/lib/AppContext'
import { BubbleOfferCard } from './BubbleOfferCard'
import { Product } from '@/lib/types'

interface LaunchSpecialsProps {
  onBuildDuo?: () => void
  onCrownKit?: () => void
  onProductClick?: (product: Product) => void
}

export function LaunchSpecials({ onBuildDuo, onCrownKit }: LaunchSpecialsProps) {
  const { language } = useApp()

  const content = {
    en: {
      badge: 'LAUNCH SPECIALS',
      title: 'Exclusive Launch Offers',
      duoTitle: 'Build Your Perfect Duo',
      duoSubtitle: 'Any 2 Facial Creams',
      duoDiscount: '20% OFF',
      duoButton: 'Learn More',
      kitTitle: 'Complete Crown Kit',
      kitSubtitle: 'Shampoo + Conditioner',
      kitDiscount: '18% OFF',
      kitButton: 'Learn More'
    },
    es: {
      badge: 'OFERTAS DE LANZAMIENTO',
      title: 'Ofertas Exclusivas de Lanzamiento',
      duoTitle: 'Construye Tu Dúo Perfecto',
      duoSubtitle: 'Cualquier 2 Cremas Faciales',
      duoDiscount: '20% DESC',
      duoButton: 'Saber Más',
      kitTitle: 'Kit Corona Completo',
      kitSubtitle: 'Champú + Acondicionador',
      kitDiscount: '18% DESC',
      kitButton: 'Saber Más'
    }
  }

  const t = content[language] || content['en']

  const handleDuoClick = () => {
    if (onBuildDuo) {
      onBuildDuo()
    }
  }

  const handleKitClick = () => {
    if (onCrownKit) {
      onCrownKit()
    }
  }

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-background via-[#fdfeff] to-background">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-full px-5 py-2.5 mb-5"
          >
            <Sparkle className="w-4 h-4 text-primary" weight="fill" />
            <span className="text-sm text-primary font-semibold tracking-wider uppercase">
              {t.badge}
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-dark font-[family-name:var(--font-serif)]">
            {t.title}
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-5">
          <BubbleOfferCard
            icon={<Sparkle size={24} weight="fill" className="text-white" />}
            title={t.duoTitle}
            subtitle={t.duoSubtitle}
            discountLabel={t.duoDiscount}
            gradient="linear-gradient(90deg, #419AC1 0%, #5FB3D7 50%, #8ACBE6 100%)"
            glowColor="rgba(65, 154, 193, 0.28)"
            onClick={handleDuoClick}
            buttonText={t.duoButton}
          />

          <BubbleOfferCard
            icon={<Crown size={24} weight="fill" className="text-white" />}
            title={t.kitTitle}
            subtitle={t.kitSubtitle}
            discountLabel={t.kitDiscount}
            gradient="linear-gradient(90deg, #00A3AF 0%, #27B8BF 50%, #63D1CF 100%)"
            glowColor="rgba(0, 163, 175, 0.28)"
            onClick={handleKitClick}
            buttonText={t.kitButton}
          />
        </div>
      </div>
    </section>
  )
}
