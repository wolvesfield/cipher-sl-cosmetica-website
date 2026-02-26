import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/LanguageContext'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Microphone } from '@phosphor-icons/react'
import { GalaxyCanvas } from './GalaxyCanvas'
import { useState } from 'react'
import { toast } from 'sonner'
import asset1Img from '@/assets/images/Header_1.png'
import mobileHeaderImg from '@/assets/images/Header_3.jpg'

interface HeroProps {
  onExploreAllProducts?: () => void
}

export function Hero({ onExploreAllProducts }: HeroProps) {
  const { language } = useLanguage()
  const [isListening, setIsListening] = useState(false)

  const handleVoiceClick = () => {
    setIsListening(!isListening)
    if (!isListening) {
      toast.info(language === 'en' ? 'Voice assistant activated...' : 'Asistente de voz activado...')
    } else {
      toast.success(language === 'en' ? 'Voice assistant stopped' : 'Asistente de voz detenido')
    }
  }

  const smoothEase = [0.25, 0.46, 0.45, 0.94] as const

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f8f9ff] via-[#fdfeff] to-[#f0f4ff] min-h-[85vh] flex items-center">
      <GalaxyCanvas />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.7,
                ease: smoothEase,
                delay: 0.1
              }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-primary/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 shadow-lg shadow-primary/10"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: smoothEase
                }}
              >
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
              </motion.div>
              <span className="text-xs sm:text-sm text-slate-dark/90 font-medium tracking-wide">
                {language === 'en' ? 'Next-Generation Skincare Technology' : 'Tecnología de Cuidado de Próxima Generación'}
              </span>
            </motion.div>

            <div className="mb-4 sm:mb-6 lg:hidden">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.8,
                  ease: smoothEase,
                  delay: 0.2
                }}
                className="relative w-full aspect-[16/10] sm:aspect-video overflow-hidden rounded-2xl shadow-lg"
              >
                <motion.img 
                  src={mobileHeaderImg} 
                  alt="Radiant Colombian Beauty" 
                  className="w-full h-full object-contain"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4, ease: smoothEase }}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7,
                ease: smoothEase,
                delay: 0.25
              }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-[1.1] sm:leading-[1.05]">
                <motion.span 
                  style={{ color: 'oklch(0.72 0.08 50)' }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6,
                    ease: smoothEase,
                    delay: 0.35
                  }}
                >
                  {language === 'en' ? 'Skin' : 'Transformación'}
                </motion.span>
                <br />
                <motion.span 
                  className="bg-gradient-to-r from-primary via-[#8B7BF5] to-accent bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.6,
                    ease: smoothEase,
                    delay: 0.45
                  }}
                >
                  {language === 'en' ? 'Transformation' : 'de la Piel'}
                </motion.span>
              </h1>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-medium mb-6 sm:mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7,
                ease: smoothEase,
                delay: 0.5
              }}
            >
              {language === 'en'
                ? 'Experience breakthrough technology revolutionizing clinical skincare through advanced molecular science. Visible results backed by rigorous testing and real clinical data.'
                : 'Experimenta tecnología innovadora que revoluciona el cuidado clínico de la piel a través de ciencia molecular avanzada. Resultados visibles respaldados por pruebas rigurosas y datos clínicos reales.'}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7,
                ease: smoothEase,
                delay: 0.6
              }}
            >
              <Button 
                size="lg" 
                onClick={onExploreAllProducts}
                className="bg-gradient-to-r from-primary to-[#8B7BF5] text-white hover:shadow-xl hover:shadow-primary/30 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold uppercase tracking-wider group transition-all duration-300 w-full sm:w-auto"
              >
                {language === 'en' ? 'Explore Products' : 'Explorar Productos'}
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-teal-deep/40 bg-gradient-to-r from-teal-deep/10 to-teal-light/10 backdrop-blur-sm text-teal-deep hover:bg-teal-deep/20 hover:border-teal-deep/60 px-4 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold uppercase tracking-wider transition-all duration-300 flex-1 sm:flex-initial"
                >
                  {language === 'en' ? 'Learn More' : 'Saber Más'}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={handleVoiceClick}
                  className={`border-teal-deep/40 backdrop-blur-sm hover:bg-teal-deep/20 hover:border-teal-deep/60 px-4 sm:px-6 py-5 sm:py-6 transition-all duration-300 flex-shrink-0 ${
                    isListening 
                      ? 'bg-gradient-to-r from-accent/30 to-primary/30 text-primary animate-pulse' 
                      : 'bg-gradient-to-r from-teal-deep/10 to-teal-light/10 text-teal-deep'
                  }`}
                >
                  <Microphone 
                    className="w-4 h-4 sm:w-5 sm:h-5" 
                    weight={isListening ? 'fill' : 'regular'}
                  />
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block h-[85vh] -mr-4 sm:-mr-6 lg:-mr-8"
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ 
              duration: 0.9,
              ease: smoothEase,
              delay: 0.3
            }}
          >
            <motion.div 
              className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-primary/30 border-2 border-white/80"
              whileHover={{ 
                scale: 1.02,
                rotateY: 2,
                rotateX: -2
              }}
              transition={{ 
                duration: 0.5,
                ease: smoothEase
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: 1000
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10"
                animate={{
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: smoothEase
                }}
              />
              
              <motion.img 
                src={asset1Img} 
                alt="Radiant Colombian Beauty" 
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: smoothEase
                }}
              />
            </motion.div>

            <motion.div 
              className="absolute -left-8 top-1/4 w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4],
                x: [-10, 10, -10],
                y: [-10, 10, -10]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: smoothEase
              }}
            />
            <motion.div 
              className="absolute -right-8 bottom-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 blur-3xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
                x: [10, -10, 10],
                y: [10, -10, 10]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: smoothEase,
                delay: 1
              }}
            />
          </motion.div>
        </div>
      </div>


    </section>
  )
}
