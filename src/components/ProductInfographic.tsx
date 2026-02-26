import { motion } from 'framer-motion'
import { Shield, Zap, Sparkles, TrendingUp, Droplets, Heart } from 'lucide-react'
import { Product } from '@/lib/types'
import { useApp } from '@/lib/AppContext'

interface ProductInfographicProps {
  product: Product
}

export function ProductInfographic({ product }: ProductInfographicProps) {
  const { language, lt, lta } = useApp()

  const getInfographicData = () => {
    const categoryData = {
      'mtrx-001': {
        icon: Heart,
        title: { en: 'Foundation & Balance', es: 'Base y Equilibrio' },
        stats: [
          { label: { en: 'Inflammation Reduction', es: 'Reducción de Inflamación' }, value: 72, icon: Shield },
          { label: { en: 'Barrier Strength', es: 'Fuerza de Barrera' }, value: 65, icon: Shield },
          { label: { en: 'Skin Calm', es: 'Calma Cutánea' }, value: 81, icon: Heart }
        ]
      },
      'mtrx-002': {
        icon: Zap,
        title: { en: 'Renewal Power', es: 'Poder de Renovación' },
        stats: [
          { label: { en: 'Wrinkle Reduction', es: 'Reducción de Arrugas' }, value: 58, icon: TrendingUp },
          { label: { en: 'Cell Turnover', es: 'Renovación Celular' }, value: 64, icon: Zap },
          { label: { en: 'Retinol Tolerance', es: 'Tolerancia al Retinol' }, value: 89, icon: Shield }
        ]
      },
      'mtrx-003': {
        icon: Sparkles,
        title: { en: 'Brightening & Clarity', es: 'Iluminación y Claridad' },
        stats: [
          { label: { en: 'Pigmentation Reduction', es: 'Reducción de Pigmentación' }, value: 71, icon: Sparkles },
          { label: { en: 'Radiance Boost', es: 'Aumento de Luminosidad' }, value: 78, icon: Sparkles },
          { label: { en: 'Even Tone', es: 'Tono Uniforme' }, value: 69, icon: TrendingUp }
        ]
      },
      'mtrx-004': {
        icon: TrendingUp,
        title: { en: 'Structural Support', es: 'Soporte Estructural' },
        stats: [
          { label: { en: 'Collagen Density', es: 'Densidad de Colágeno' }, value: 62, icon: TrendingUp },
          { label: { en: 'Skin Firmness', es: 'Firmeza Cutánea' }, value: 67, icon: TrendingUp },
          { label: { en: 'Lift & Contour', es: 'Levantamiento' }, value: 54, icon: TrendingUp }
        ]
      },
      'mtrx-010': {
        icon: Droplets,
        title: { en: 'Hydration System', es: 'Sistema de Hidratación' },
        stats: [
          { label: { en: 'Hydration Increase', es: 'Aumento de Hidratación' }, value: 92, icon: Droplets },
          { label: { en: 'Plumpness', es: 'Relleno' }, value: 79, icon: Droplets },
          { label: { en: 'Moisture Lock', es: 'Retención de Humedad' }, value: 86, icon: Shield }
        ]
      }
    }

    return categoryData[product.id as keyof typeof categoryData] || categoryData['mtrx-001']
  }

  const data = getInfographicData()
  const Icon = data.icon

  return (
    <div className="relative bg-gradient-to-br from-background via-secondary/10 to-accent/5 rounded-2xl p-8 border border-primary/10 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-teal-deep/5 to-teal-light/5 rounded-full blur-3xl -ml-32 -mb-32" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="p-4 bg-gradient-to-br from-primary to-teal-deep rounded-full">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-foreground">{lt(data.title)}</h3>
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'Clinical Performance Metrics' : 'Métricas de Rendimiento Clínico'}
            </p>
          </div>
        </div>

        <div className="grid gap-6">
          {data.stats.map((stat, idx) => {
            const StatIcon = stat.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.15 }}
                className="relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <StatIcon className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">{lt(stat.label)}</span>
                  </div>
                  <span className="text-3xl font-bold text-primary">{stat.value}%</span>
                </div>
                
                <div className="relative h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${stat.value}%` }}
                    transition={{ duration: 1.5, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-teal-deep to-teal-light rounded-full"
                  />
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '400%' }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                      delay: idx * 0.15 
                    }}
                    className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />
                </div>

                <p className="text-xs text-muted-foreground mt-1">
                  {language === 'en' ? 'Measured at 4 weeks' : 'Medido a las 4 semanas'}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-8 p-4 bg-gradient-to-r from-teal-deep/10 to-teal-light/10 rounded-lg border border-teal-deep/20">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-teal-deep/20 rounded-full flex-shrink-0">
              <Sparkles className="w-5 h-5 text-teal-deep" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-foreground mb-1">
                {language === 'en' ? 'The MTRX Advantage' : 'La Ventaja MTRX'}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {language === 'en'
                  ? 'The 8.0% MTRX-CBD base acts as an anti-inflammatory buffer, allowing potent actives to work without irritation. This is why our tolerance scores exceed 85% while maintaining high efficacy.'
                  : 'La base de 8.0% MTRX-CBD actúa como amortiguador antiinflamatorio, permitiendo que activos potentes funcionen sin irritación. Por esto nuestras puntuaciones de tolerancia exceden 85% mientras mantienen alta eficacia.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
