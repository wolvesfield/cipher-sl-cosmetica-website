import { motion } from 'framer-motion'
import { Language } from '@/lib/types'
import { Heart } from 'lucide-react'

interface ClinicalDataChartProps {
  data: {
    metric: { en: string; es: string }
    improvement: number
    description?: { en: string; es: string }
  }[]
  language: Language
  productId?: string
}

export function ClinicalDataChart({ data, language, productId }: ClinicalDataChartProps) {
  const lt = (obj: Record<string, any> | undefined | null): string => {
    if (!obj) return ''
    return (obj[language] ?? obj['en'] ?? obj['es'] ?? Object.values(obj)[0] ?? '') as string
  }
  const getMetricDescription = (metricName: string): { en: string; es: string } | undefined => {
    if (productId === 'mtrx-014') {
      const descriptions: Record<string, { en: string; es: string }> = {
        'Frizz & Breakage Reduction': {
          en: 'Measured after 4 weeks of use in hair prone to dryness and environmental stress, showing a visible decrease in frizz and snapped ends.',
          es: 'Medido después de 4 semanas de uso en cabello propenso a sequedad y estrés ambiental, mostrando una disminución visible en frizz y puntas quebradas.'
        },
        'Fiber & Cuticle Strength': {
          en: 'Measured at 4 weeks, reflecting improvement in combability, resistance to mechanical damage, and smoother cuticle alignment.',
          es: 'Medido a las 4 semanas, reflejando mejora en peinabilidad, resistencia a daño mecánico y alineación de cutícula más suave.'
        },
        'Scalp Comfort & Hair Manageability': {
          en: 'Measured at 4 weeks, indicating a high perception of scalp comfort, easier detangling, and more manageable, radiant lengths.',
          es: 'Medido a las 4 semanas, indicando una alta percepción de confort del cuero cabelludo, desenredado más fácil y largos más manejables y radiantes.'
        }
      }
      return descriptions[metricName]
    }
    return undefined
  }

  const getMtrxAdvantage = (): { en: string; es: string } | undefined => {
    if (productId === 'mtrx-014') {
      return {
        en: 'The 4.0%+ MTRX‑CBD™ conditioner combines an amino‑acid–keratin system, argan and coconut oils, and a clinical emollient base to help seal the cuticle, balance moisture, and buffer everyday environmental stress—supporting stronger, shinier, more manageable hair from root to tip.',
        es: 'El acondicionador MTRX‑CBD™ 4.0%+ combina un sistema de aminoácidos-queratina, aceites de argán y coco, y una base emoliente clínica para ayudar a sellar la cutícula, equilibrar la humedad y amortiguar el estrés ambiental cotidiano—apoyando cabello más fuerte, brillante y manejable desde la raíz hasta las puntas.'
      }
    }
    return undefined
  }

  const mtrxAdvantage = getMtrxAdvantage()

  return (
    <div className="space-y-6">
      {data.map((item, index) => {
        const description = item.description || getMetricDescription(item.metric.en)
        return (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-baseline">
              <span className="text-sm font-medium text-slate-dark">
                {lt(item.metric)}
              </span>
              <span className="text-lg font-bold text-teal-deep">
                {item.improvement}%+
              </span>
            </div>
            <div className="relative h-8 bg-secondary/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.improvement}%` }}
                transition={{
                  duration: 1,
                  delay: index * 0.2,
                  ease: 'easeOut'
                }}
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-teal-deep to-teal-light rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.5 }}
                  className="text-xs font-semibold text-slate-dark mix-blend-difference"
                >
                  {item.improvement}%+ {language === 'en' ? 'improvement' : 'mejora'}
                </motion.span>
              </div>
            </div>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.3 }}
                className="text-xs sm:text-sm text-muted-foreground leading-relaxed mt-2"
              >
                {lt(description)}
              </motion.p>
            )}
          </div>
        )
      })}
      
      {mtrxAdvantage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: data.length * 0.2 + 0.5 }}
          className="mt-8 p-4 sm:p-6 bg-gradient-to-br from-teal-deep/5 to-teal-light/5 rounded-lg border border-teal-deep/20"
        >
          <div className="flex items-start gap-3 mb-3">
            <div className="p-2 rounded-full bg-teal-deep/10">
              <Heart className="w-5 h-5 text-teal-deep" />
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-slate-dark">
              {language === 'en' ? 'The MTRX Advantage' : 'La Ventaja MTRX'}
            </h4>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {lt(mtrxAdvantage)}
          </p>
        </motion.div>
      )}
    </div>
  )
}
