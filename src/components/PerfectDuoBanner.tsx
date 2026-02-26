import { motion, AnimatePresence } from 'framer-motion'
import { Sparkle, ArrowRight } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { useApp } from '@/lib/AppContext'
import { useState } from 'react'

interface PerfectDuoBannerProps {
  onBuildDuo: () => void
}

export function PerfectDuoBanner({ onBuildDuo }: PerfectDuoBannerProps) {
  const { language } = useApp()
  const [isHovered, setIsHovered] = useState(false)

  const content = {
    en: {
      badge: 'EXCLUSIVE DUO OFFER',
      title: 'Build Your Perfect Duo',
      subtitle: 'Any 2 Facial Creams',
      description: 'Curate your personalized skincare ritual and enjoy 20% off when you select any 2 facial creams. Create your unique anti-aging protocol.',
      savings: 'Save 60.000 COP',
      buildNow: 'Build Your Duo',
      learnMore: 'Learn More'
    },
    es: {
      badge: 'OFERTA EXCLUSIVA DE DÚO',
      title: 'Construye Tu Dúo Perfecto',
      subtitle: 'Cualquier 2 Cremas Faciales',
      description: 'Personaliza tu ritual de cuidado de la piel y disfruta de un 20% de descuento al seleccionar 2 cremas faciales. Crea tu protocolo anti-envejecimiento único.',
      savings: 'Ahorra 60.000 COP',
      buildNow: 'Construye Tu Dúo',
      learnMore: 'Más Información'
    }
  }

  const t = content[language] || content['en']

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden rounded-2xl my-8 group cursor-pointer"
    >
      <motion.div
        className="relative overflow-hidden"
        animate={{
          height: isHovered ? 'auto' : '120px'
        }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.55_0.12_240)] via-[oklch(0.50_0.15_260)] to-[oklch(0.45_0.18_280)]" />
        
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.65_0.10_220_/_0.15),transparent_60%)]" />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{
            x: ['-100%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut"
          }}
        />

        <div className="relative z-10 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: isHovered ? 180 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkle size={28} weight="duotone" className="text-white" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-serif)]">
                  {t.title}
                </h3>
                <p className="text-white/80 text-sm">{t.subtitle}</p>
              </div>
            </div>
            
            <motion.div
              className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white font-bold text-sm">20% OFF</span>
            </motion.div>
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-4 pt-4 border-t border-white/20"
              >
                <p className="text-white/90 text-sm leading-relaxed">
                  {t.description}
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                    <div className="text-white/70 text-xs mb-1">
                      {language === 'en' ? 'Regular Price' : 'Precio Regular'}
                    </div>
                    <div className="text-white line-through text-xl font-bold">
                      300.000 COP
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-4 border border-white/30">
                    <div className="text-white/90 text-xs mb-1">
                      {language === 'en' ? 'Duo Price' : 'Precio del Dúo'}
                    </div>
                    <div className="text-white text-2xl font-bold">
                      240.000 COP
                    </div>
                  </div>
                </div>

                <motion.div
                  className="bg-gradient-to-r from-[oklch(0.65_0.25_15)] to-[oklch(0.70_0.20_30)] rounded-xl p-4 text-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-white text-lg font-bold">{t.savings}</div>
                  <div className="text-white/80 text-xs">20% {language === 'en' ? 'Discount' : 'Descuento'}</div>
                </motion.div>

                <Button
                  onClick={onBuildDuo}
                  className="w-full bg-white text-[oklch(0.45_0.15_260)] hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
                  size="lg"
                >
                  <span>{t.buildNow}</span>
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {!isHovered && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center pt-2"
            >
              <span className="text-white/60 text-xs">{t.learnMore}</span>
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} className="ml-1 text-white/60 rotate-90" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
