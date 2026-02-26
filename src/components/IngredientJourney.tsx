import { useState, useEffect } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Drop, 
  Sparkle, 
  Shield, 
  Lightning, 
  Leaf, 
  Atom,
  ArrowRight,
  Play,
  Pause
} from '@phosphor-icons/react'

interface IngredientStep {
  id: string
  name: string
  icon: typeof Drop
  color: string
  description: { en: string; es: string }
  action: { en: string; es: string }
  position: number
}

const journeySteps: IngredientStep[] = [
  {
    id: 'penetration',
    name: 'CBD',
    icon: Atom,
    color: 'oklch(0.45 0.15 260)',
    description: {
      en: 'CBD accesses the Endocannabinoid System (ECS), creating a calm cellular environment',
      es: 'El CBD accede al Sistema Endocannabinoide (SEC), creando un ambiente celular calmado'
    },
    action: {
      en: 'Silences Inflammation',
      es: 'Silencia la Inflamación'
    },
    position: 0
  },
  {
    id: 'barrier',
    name: 'Evening Primrose Oil',
    icon: Drop,
    color: 'oklch(0.56 0.08 220)',
    description: {
      en: 'Gamma-Linolenic Acid (GLA) modulates inflammatory cascade and strengthens barrier',
      es: 'El Ácido Gamma-Linolénico (GLA) modula la cascada inflamatoria y fortalece la barrera'
    },
    action: {
      en: 'Repairs Barrier',
      es: 'Repara la Barrera'
    },
    position: 1
  },
  {
    id: 'hydration',
    name: 'Panthenol',
    icon: Drop,
    color: 'oklch(0.60 0.10 200)',
    description: {
      en: 'Pro-Vitamin B5 penetrates deeply, stimulating fibroblast proliferation',
      es: 'La Pro-Vitamina B5 penetra profundamente, estimulando la proliferación de fibroblastos'
    },
    action: {
      en: 'Deep Hydration',
      es: 'Hidratación Profunda'
    },
    position: 2
  },
  {
    id: 'regulation',
    name: 'Niacinamide',
    icon: Sparkle,
    color: 'oklch(0.67 0.06 220)',
    description: {
      en: 'Vitamin B3 regulates sebum, brightens tone, strengthens ceramide barrier',
      es: 'La Vitamina B3 regula el sebo, ilumina el tono, fortalece la barrera de ceramidas'
    },
    action: {
      en: 'Balances & Brightens',
      es: 'Equilibra e Ilumina'
    },
    position: 3
  },
  {
    id: 'protection',
    name: 'Vitamin E',
    icon: Shield,
    color: 'oklch(0.52 0.08 40)',
    description: {
      en: 'Tocopherol protects cell membranes from lipid peroxidation and oxidative stress',
      es: 'El Tocoferol protege las membranas celulares de la peroxidación lipídica y el estrés oxidativo'
    },
    action: {
      en: 'Antioxidant Shield',
      es: 'Escudo Antioxidante'
    },
    position: 4
  },
  {
    id: 'synergy',
    name: 'Synergy Complete',
    icon: Lightning,
    color: 'oklch(0.45 0.15 260)',
    description: {
      en: 'All compounds work together to create balanced, healthy, resilient skin',
      es: 'Todos los compuestos trabajan juntos para crear piel equilibrada, saludable y resistente'
    },
    action: {
      en: 'Skin Transformed',
      es: 'Piel Transformada'
    },
    position: 5
  }
]

interface IngredientJourneyProps {
  language: 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr'
}

export function IngredientJourney({ language }: IngredientJourneyProps) {
  const lt = (obj: Record<string, any> | undefined | null): string => {
    if (!obj) return ''
    return (obj[language] ?? obj['en'] ?? obj['es'] ?? Object.values(obj)[0] ?? '') as string
  }
  const [isOpen, setIsOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!isPlaying || currentStep >= journeySteps.length - 1) {
      return
    }

    const timer = setTimeout(() => {
      setCurrentStep(prev => Math.min(prev + 1, journeySteps.length - 1))
    }, 2500)

    return () => clearTimeout(timer)
  }, [isPlaying, currentStep])

  const handlePlay = () => {
    if (currentStep >= journeySteps.length - 1) {
      setCurrentStep(0)
    }
    setIsPlaying(true)
  }

  const handlePause = () => {
    setIsPlaying(false)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setIsPlaying(false)
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-[oklch(0.45_0.15_260)] to-[oklch(0.60_0.10_200)] hover:from-[oklch(0.40_0.15_260)] hover:to-[oklch(0.55_0.10_200)] text-white shadow-lg gap-2"
        size="lg"
      >
        <Leaf size={20} weight="fill" />
        {language === 'en' ? 'Ingredient Journey' : 'Viaje de Ingredientes'}
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[95vw] sm:max-w-3xl md:max-w-4xl lg:max-w-5xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-playfair">
              {language === 'en' 
                ? 'The Alchemist\'s Journey: How Compounds Work Together' 
                : 'El Viaje del Alquimista: Cómo Trabajan Juntos los Compuestos'}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 sm:space-y-6 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button
                onClick={isPlaying ? handlePause : handlePlay}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[oklch(0.45_0.15_260)] to-[oklch(0.60_0.10_200)] hover:from-[oklch(0.40_0.15_260)] hover:to-[oklch(0.55_0.10_200)] text-white"
              >
                {isPlaying ? <Pause size={20} weight="fill" /> : <Play size={20} weight="fill" />}
                <span className="ml-2">
                  {isPlaying 
                    ? (language === 'en' ? 'Pause' : 'Pausar')
                    : (language === 'en' ? 'Play Journey' : 'Reproducir Viaje')}
                </span>
              </Button>
              
              <Button
                onClick={handleReset}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                {language === 'en' ? 'Reset' : 'Reiniciar'}
              </Button>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[oklch(0.45_0.15_260)] via-[oklch(0.60_0.10_200)] to-[oklch(0.67_0.06_220)] opacity-20 -translate-y-1/2" />
              
              <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
                {journeySteps.map((step, index) => {
                  const Icon = step.icon
                  const isActive = index <= currentStep
                  const isCurrent = index === currentStep
                  
                  return (
                    <div key={step.id} className="relative">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ 
                          scale: isCurrent ? 1.1 : isActive ? 1 : 0.8,
                          opacity: isActive ? 1 : 0.3
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center cursor-pointer"
                        onClick={() => {
                          setCurrentStep(index)
                          setIsPlaying(false)
                        }}
                      >
                        <motion.div
                          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 relative"
                          style={{ 
                            backgroundColor: isActive ? step.color : 'oklch(0.92 0.01 270)',
                            boxShadow: isCurrent ? `0 0 20px ${step.color}` : 'none'
                          }}
                          animate={{
                            scale: isCurrent ? [1, 1.05, 1] : 1
                          }}
                          transition={{
                            duration: 1,
                            repeat: isCurrent ? Infinity : 0,
                            repeatType: 'reverse'
                          }}
                        >
                          <Icon 
                            size={24}
                            weight="fill" 
                            className={`sm:w-6 sm:h-6 md:w-7 md:h-7 ${isActive ? 'text-white' : 'text-muted-foreground'}`}
                          />
                          
                          {isCurrent && (
                            <motion.div
                              className="absolute inset-0 rounded-full border-2"
                              style={{ borderColor: step.color }}
                              initial={{ scale: 1, opacity: 1 }}
                              animate={{ scale: 1.5, opacity: 0 }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            />
                          )}
                        </motion.div>

                        <Badge
                          variant="outline"
                          className={`text-[10px] sm:text-xs text-center whitespace-normal break-words max-w-full px-1.5 py-0.5 leading-tight transition-all ${
                            isActive ? 'border-primary text-primary font-semibold' : 'text-muted-foreground'
                          }`}
                        >
                          {step.name}
                        </Badge>
                      </motion.div>

                      {index < journeySteps.length - 1 && (
                        <motion.div
                          className="absolute top-6 sm:top-7 md:top-8 left-[calc(100%)] w-full h-0.5 hidden md:block"
                          style={{ 
                            background: `linear-gradient(to right, ${step.color}, ${journeySteps[index + 1].color})`,
                            transformOrigin: 'left'
                          }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: index < currentStep ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-4 sm:p-6 bg-gradient-to-br from-white to-[oklch(0.98_0.003_270)]">
                  <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    {(() => {
                      const Icon = journeySteps[currentStep].icon
                      return (
                        <div
                          className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl flex items-center justify-center shrink-0"
                          style={{ backgroundColor: journeySteps[currentStep].color }}
                        >
                          <Icon size={32} weight="fill" className="text-white sm:w-9 sm:h-9" />
                        </div>
                      )
                    })()}
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-dark mb-2">
                        {lt(journeySteps[currentStep].action)}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {lt(journeySteps[currentStep].description)}
                      </p>
                      
                      <div className="mt-3 sm:mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <div 
                            className="w-3 h-3 rounded-full flex-shrink-0"
                            style={{ backgroundColor: journeySteps[currentStep].color }}
                          />
                          <span className="truncate">{journeySteps[currentStep].name}</span>
                        </div>
                        
                        {currentStep < journeySteps.length - 1 && (
                          <>
                            <ArrowRight size={16} weight="bold" className="flex-shrink-0" />
                            <div className="flex items-center gap-1">
                              <div 
                                className="w-3 h-3 rounded-full flex-shrink-0"
                                style={{ backgroundColor: journeySteps[currentStep + 1].color }}
                              />
                              <span className="truncate">{journeySteps[currentStep + 1].name}</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center pt-4 border-t border-border">
              <span className="text-sm text-muted-foreground">
                {language === 'en' ? 'Step' : 'Paso'} {currentStep + 1} {language === 'en' ? 'of' : 'de'} {journeySteps.length}
              </span>
              
              <div className="flex gap-1">
                {journeySteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentStep 
                        ? 'bg-primary w-8' 
                        : index < currentStep 
                          ? 'bg-primary/50' 
                          : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
