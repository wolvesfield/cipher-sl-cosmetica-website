import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Eye, Moon, Drop, Circuitry, Sparkle, Leaf, Lightning } from '@phosphor-icons/react'
import { useState } from 'react'
import { useLanguage } from '@/lib/LanguageContext'
import { mockProducts } from '@/lib/mockData'

interface DarkCirclesSectionProps {
  onProductClick?: (product: typeof import('@/lib/mockData').mockProducts[0]) => void
}

export function DarkCirclesSection({ onProductClick }: DarkCirclesSectionProps = {}) {
  const { language } = useLanguage()
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const protocolProducts = [
    {
      id: 'mtrx-001',
      product: mockProducts.find(p => p.id === 'mtrx-001')!,
      title: language === 'es' ? 'El Gran Armonizador' : 'The Great Harmonizer',
      shortDescription: language === 'es' 
        ? 'Calma la inflamación visible, reduce el enrojecimiento y refuerza la barrera para que el contorno de ojos tolere mejor activos potentes.'
        : 'Calms visible inflammation, reduces redness, and reinforces the barrier so the under-eye can better tolerate stronger actives.',
      tags: language === 'es' 
        ? ['Soporte de Barrera', 'Enrojecimiento', 'Sensibilidad']
        : ['Barrier Support', 'Redness', 'Sensitivity']
    },
    {
      id: 'mtrx-006',
      product: mockProducts.find(p => p.id === 'mtrx-006')!,
      title: language === 'es' ? 'La Chispa' : 'The Spark',
      shortDescription: language === 'es'
        ? 'Complejo anti-fatiga que apoya la energía mitocondrial para un contorno de ojos más descansado y despierto.'
        : 'Anti-fatigue complex that supports mitochondrial energy for a more rested, awake-looking under-eye.',
      tags: language === 'es'
        ? ['Anti-Fatiga', 'Ojos Cansados', 'Opacidad']
        : ['Anti-Fatigue', 'Tired Eyes', 'Dullness']
    },
    {
      id: 'mtrx-003',
      product: mockProducts.find(p => p.id === 'mtrx-003')!,
      title: language === 'es' ? 'El Capturador de Luz' : 'The Sun Catcher',
      shortDescription: language === 'es'
        ? 'Derivado estabilizado de Vitamina C para iluminar y controlar manchas, dirigido a tono irregular y círculos oscuros de origen pigmentario.'
        : 'Stabilized Vitamin C derivative for brightening and manchas control, targeting uneven tone and pigment-driven dark circles.',
      tags: language === 'es'
        ? ['Iluminación', 'Manchas', 'Corrección de Tono']
        : ['Brightening', 'Manchas', 'Tone Correction']
    }
  ]

  const causes = [
    {
      id: 'vascular',
      icon: <Circuitry className="w-8 h-8" />,
      title: 'Vascular Congestion',
      subtitle: 'Blood Pooling & Leakage',
      description: 'The periorbital area has extremely thin skin (0.5mm vs 2mm on the rest of face) with dense capillary networks. Poor microcirculation causes blood pooling, visible as blue-purple shadows.',
      details: 'The skin under the eyes is the thinnest on the body, making underlying blood vessels highly visible. When circulation slows—due to fatigue, dehydration, or aging—blood pools in periorbital capillaries. Hemoglobin breakdown releases hemosiderin (iron), causing brown discoloration. The combination creates the characteristic blue-brown darkness.',
      mechanism: [
        'Thin periorbital skin (0.3-0.5mm) makes vascular networks visible',
        'Slow microcirculation causes venous congestion and blood pooling',
        'Hemoglobin oxidation creates blue-purple undertones',
        'Chronic congestion leads to capillary leakage and hemosiderin deposition',
        'Iron deposits create persistent brown discoloration'
      ],
      gradient: 'from-[oklch(0.55_0.15_280)] to-[oklch(0.45_0.12_270)]'
    },
    {
      id: 'pigmentation',
      icon: <Eye className="w-8 h-8" />,
      title: 'Periorbital Hyperpigmentation',
      subtitle: 'Melanin Accumulation',
      description: 'Chronic sun exposure, genetics, and inflammation trigger melanin overproduction in the delicate under-eye area, creating persistent brown discoloration.',
      details: 'Periorbital hyperpigmentation is especially common in Fitzpatrick skin types III-V, prevalent in Latin America. UV exposure, eye rubbing, and inflammatory conditions activate melanocytes in this already pigment-prone area. The thin skin provides little protection, making the darkening more visible than elsewhere on the face.',
      mechanism: [
        'Genetic predisposition in darker skin tones (constitutional pigmentation)',
        'UV exposure activates melanocytes with minimal protection from thin skin',
        'Chronic eye rubbing triggers post-inflammatory hyperpigmentation',
        'Allergies and atopic dermatitis cause persistent low-grade inflammation',
        'Hormonal fluctuations can trigger melasma-like pigmentation'
      ],
      gradient: 'from-[oklch(0.60_0.14_40)] to-[oklch(0.50_0.12_30)]'
    },
    {
      id: 'volume-loss',
      icon: <Drop className="w-8 h-8" />,
      title: 'Volume Loss & Hollowing',
      subtitle: 'Structural Aging',
      description: 'Age-related fat pad atrophy and collagen degradation create a hollowed tear trough, casting shadows that appear as darkness under the eyes.',
      details: 'The infraorbital fat pad sits beneath the orbicularis oculi muscle, providing volume and smooth contours. With age, this fat pad atrophies and descends, creating a hollow "tear trough" deformity. Collagen loss in the already thin periorbital skin worsens the problem. The resulting shadows are structural, not just vascular or pigmentary.',
      mechanism: [
        'Orbital fat pad atrophy creates volume loss and hollowing',
        'Collagen degradation thins already-thin periorbital skin',
        'Loss of bone density in orbital rim deepens the trough',
        'Gravitational descent of facial fat creates shadowing',
        'Elastin loss causes skin to drape rather than stretch, emphasizing hollows'
      ],
      gradient: 'from-[oklch(0.70_0.12_200)] to-[oklch(0.60_0.10_210)]'
    },
    {
      id: 'lifestyle',
      icon: <Moon className="w-8 h-8" />,
      title: 'Lifestyle & Fatigue Factors',
      subtitle: 'Cumulative Stress',
      description: 'Chronic sleep deprivation, dehydration, stress, and excessive screen time all exacerbate vascular congestion and inflammation, darkening circles.',
      details: 'While lifestyle factors don\'t create dark circles from nothing, they dramatically worsen existing vascular and pigmentary issues. Poor sleep increases cortisol, dilating blood vessels and causing fluid retention. Dehydration makes skin appear more translucent, emphasizing vessels. Blue light from screens strains periorbital muscles, increasing congestion.',
      mechanism: [
        'Sleep deprivation elevates cortisol, causing vasodilation and fluid retention',
        'Dehydration makes thin periorbital skin more translucent',
        'Excessive sodium causes fluid accumulation and puffiness',
        'Screen strain increases blood flow to periorbital area',
        'Chronic stress triggers inflammatory cytokines that worsen pigmentation'
      ],
      gradient: 'from-[oklch(0.50_0.10_260)] to-[oklch(0.40_0.08_250)]'
    }
  ]

  const treatmentApproaches = [
    {
      id: 'cbd-caffeine',
      icon: <Leaf className="w-8 h-8" />,
      title: 'CBD + Caffeine: Vascular Decongestion',
      description: 'CBD reduces periorbital inflammation while caffeine constricts blood vessels, reducing pooling and visible darkness.',
      details: 'This combination addresses the vascular component of dark circles. Caffeine is a vasoconstrictor that reduces blood vessel diameter, decreasing congestion and the blue-purple undertone. CBD calms inflammation that contributes to vascular leakage while providing antioxidant protection against hemosiderin formation.',
      mechanisms: [
        'Caffeine constricts dilated capillaries, reducing blood pooling and blue tones',
        'Lipolytic effects help drain accumulated fluid and reduce puffiness',
        'CBD anti-inflammatory action reduces capillary permeability and leakage',
        'Antioxidants prevent hemoglobin oxidation and hemosiderin deposition',
        'Combined approach addresses both acute congestion and chronic damage'
      ],
      gradient: 'from-[oklch(0.60_0.12_150)] to-[oklch(0.50_0.10_170)]'
    },
    {
      id: 'vitamin-c',
      icon: <Sparkle className="w-8 h-8" />,
      title: 'Vitamin C: Brightening & Collagen Support',
      description: 'Stabilized Vitamin C inhibits melanin production while stimulating collagen synthesis to thicken periorbital skin and reduce transparency.',
      details: 'Magnesium Ascorbyl Phosphate (MAP) is ideal for the sensitive eye area—stable, non-irritating, and effective. It addresses both pigmentary and structural components: inhibiting tyrosinase to fade brown discoloration while boosting collagen production to thicken thin periorbital skin, making underlying vessels less visible.',
      mechanisms: [
        'Tyrosinase inhibition reduces melanin production and fades hyperpigmentation',
        'Stimulates collagen I and III synthesis to thicken periorbital skin',
        'Antioxidant action neutralizes free radicals that trigger pigmentation',
        'Improves microcirculation for better nutrient delivery',
        'Stable MAP formulation prevents irritation in sensitive eye area'
      ],
      gradient: 'from-[oklch(0.75_0.15_60)] to-[oklch(0.65_0.13_50)]'
    },
    {
      id: 'peptides',
      icon: <Lightning className="w-8 h-8" />,
      title: 'Eye-Specific Peptides: Structural Reinforcement',
      description: 'Specialized peptides (Eyeliss, Haloxyl, Matrixyl) target dark circles through multiple mechanisms: reducing fluid accumulation, clearing hemosiderin, and rebuilding collagen.',
      details: 'Eye peptides are engineered to address the unique biology of periorbital skin. Eyeliss reduces capillary permeability and lymphatic drainage improves fluid clearance. Haloxyl chelates iron deposits from hemoglobin breakdown. Matrixyl stimulates collagen and hyaluronic acid production to plump hollows and thicken skin.',
      mechanisms: [
        'Eyeliss: Reduces capillary permeability and improves lymphatic drainage (-70% fluid retention)',
        'Haloxyl: Chelates iron deposits (hemosiderin) to clear brown pigmentation',
        'Matrixyl 3000: Stimulates collagen synthesis to thicken periorbital skin',
        'Argireline: Relaxes periorbital muscles to reduce strain-induced congestion',
        'Hyaluronic acid fillers: Low-weight HA plumps hollows from within'
      ],
      gradient: 'from-[oklch(0.65_0.16_320)] to-[oklch(0.55_0.14_310)]'
    },
    {
      id: 'retinol',
      icon: <Sparkle className="w-8 h-8" />,
      title: 'Gentle Retinol: Cellular Renewal',
      description: 'Ultra-low dose, encapsulated retinol accelerates cell turnover and collagen production without the irritation that can worsen dark circles.',
      details: 'Retinol is powerful but must be used cautiously around eyes. Micro-encapsulation delivers retinol slowly, preventing irritation that could trigger inflammation and worsen pigmentation. By normalizing cell turnover and stimulating collagen, retinol both fades discoloration and thickens skin to hide underlying vessels.',
      mechanisms: [
        'Accelerates epidermal turnover to fade superficial pigmentation',
        'Stimulates dermal collagen production to thicken thin periorbital skin',
        'Improves skin texture and reduces fine lines that emphasize darkness',
        'Encapsulation prevents irritation that could trigger post-inflammatory pigmentation',
        'CBD buffer further reduces any potential sensitivity'
      ],
      gradient: 'from-[oklch(0.70_0.14_290)] to-[oklch(0.60_0.18_270)]'
    }
  ]

  const protocolTimeline = [
    {
      week: 'Week 1-2',
      title: 'Decongestion Phase',
      description: 'Caffeine constricts vessels, CBD reduces inflammation, immediate reduction in puffiness and blue-purple tones.',
      percentage: 25
    },
    {
      week: 'Week 3-6',
      title: 'Brightening Phase',
      description: 'Vitamin C inhibits melanin production, peptides begin clearing hemosiderin deposits, brown discoloration starts fading.',
      percentage: 45
    },
    {
      week: 'Week 6-12',
      title: 'Structural Phase',
      description: 'Collagen production increases, periorbital skin thickens, hollows begin to fill, overall darkness visibly reduced.',
      percentage: 70
    },
    {
      week: 'Week 12+',
      title: 'Maintenance & Optimization',
      description: 'Continued improvement in tone, texture, and volume. Maintenance protocol prevents regression.',
      percentage: 90
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(0.97_0.005_230)] via-[oklch(0.96_0.008_240)] to-[oklch(0.95_0.010_250)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20">
              PERIORBITAL CARE
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-dark mb-6">
              Dark Circles
            </h1>
            <p className="text-lg sm:text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Dark circles are multifactorial: vascular congestion, pigmentation, volume loss, and thin skin all contribute. Effective treatment must address all components—not just apply a "brightening" cream.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {causes.map((cause, idx) => (
              <motion.div
                key={cause.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card 
                  className={`h-full cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
                    expandedCard === cause.id ? 'border-primary/40' : 'border-transparent'
                  }`}
                  onClick={() => setExpandedCard(expandedCard === cause.id ? null : cause.id)}
                >
                  <CardContent className="p-6 sm:p-8">
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${cause.gradient} text-white mb-4`}>
                      {cause.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-dark mb-2">
                      {cause.title}
                    </h3>
                    <p className="text-sm text-primary font-semibold mb-3">
                      {cause.subtitle}
                    </p>
                    <p className="text-gray-medium mb-4 leading-relaxed">
                      {cause.description}
                    </p>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedCard === cause.id ? 'auto' : 0,
                        opacity: expandedCard === cause.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm text-slate-dark/80 mb-4 leading-relaxed">
                          {cause.details}
                        </p>
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                            Key Mechanisms:
                          </p>
                          {cause.mechanism.map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <p className="text-xs text-gray-medium leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-6 text-center">
                  Comprehensive Dark Circle Protocol
                </h2>
                <p className="text-center text-gray-medium mb-8 max-w-3xl mx-auto">
                  Our multi-targeted approach addresses vascular congestion, pigmentation, volume loss, and structural thinning simultaneously for visible, sustained results.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {treatmentApproaches.map((approach, idx) => (
                    <motion.div
                      key={approach.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${approach.gradient} text-white mb-4`}>
                            {approach.icon}
                          </div>
                          <h3 className="text-lg font-bold text-slate-dark mb-2">
                            {approach.title}
                          </h3>
                          <p className="text-sm text-gray-medium mb-4 leading-relaxed">
                            {approach.description}
                          </p>
                          <p className="text-xs text-slate-dark/70 mb-4 leading-relaxed">
                            {approach.details}
                          </p>
                          <div className="space-y-2">
                            {approach.mechanisms.map((mech, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <div className="w-1 h-1 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                                <p className="text-xs text-gray-medium leading-relaxed">{mech}</p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-8 text-center">
                  {language === 'es' ? 'Línea de Tiempo del Tratamiento' : 'Treatment Timeline'}
                </h2>
                <div className="space-y-6">
                  {protocolTimeline.map((phase, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1, duration: 0.4 }}
                      className="relative"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-24 sm:w-32">
                          <Badge className="bg-gradient-to-r from-primary to-accent text-white border-0">
                            {phase.week}
                          </Badge>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-dark mb-2">
                            {phase.title}
                          </h3>
                          <p className="text-sm text-gray-medium mb-3">
                            {phase.description}
                          </p>
                          <div className="w-full bg-muted rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${phase.percentage}%` }}
                              transition={{ delay: 1 + idx * 0.1, duration: 0.8 }}
                              className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-br from-[oklch(0.98_0.005_230)] to-[oklch(0.97_0.008_240)] border-2 border-primary/10 shadow-xl">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-dark mb-4">
                    {language === 'es' 
                      ? 'Protocolo Clínico de Círculos Oscuros' 
                      : 'Clinical Dark Circle Protocol'}
                  </h2>
                  <div className="inline-block">
                    <Badge className="mb-4 bg-gradient-to-r from-primary to-accent text-white border-0 px-4 py-2 text-sm">
                      {language === 'es' 
                        ? 'Potenciado por MTRX-CBD TECHNOLOGIA' 
                        : 'Powered by MTRX-CBD TECHNOLOGIA'}
                    </Badge>
                  </div>
                  <p className="text-base sm:text-lg text-gray-medium max-w-4xl mx-auto mt-6 leading-relaxed">
                    {language === 'es'
                      ? 'Combina soporte de barrera, energía anti-fatiga e iluminación dirigida para abordar los principales impulsores visibles de los círculos oscuros.'
                      : 'Combine barrier support, anti-fatigue energy, and targeted brightening to address the main visible drivers of dark circles.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                  {protocolProducts.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4 + idx * 0.15, duration: 0.5 }}
                    >
                      <Card 
                        className="h-full bg-white hover:shadow-2xl transition-all duration-300 border-border hover:border-primary/30 group cursor-pointer"
                        onClick={() => onProductClick?.(item.product)}
                      >
                        <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                          <div className="mb-4">
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-dark mb-2 group-hover:text-primary transition-colors">
                              {language === 'es' ? item.product.subtitle?.es : item.product.subtitle?.en}
                            </h3>
                            <p className="text-lg font-semibold text-primary/80 mb-1">
                              {item.title}
                            </p>
                          </div>

                          <p className="text-sm text-gray-medium leading-relaxed mb-6 flex-grow">
                            {item.shortDescription}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, i) => (
                              <Badge 
                                key={i} 
                                variant="outline" 
                                className="text-xs bg-secondary/50 text-secondary-foreground border-secondary/30"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <p className="text-xs sm:text-sm text-gray-medium/80 max-w-3xl mx-auto leading-relaxed">
                    {language === 'es'
                      ? '* Los resultados individuales pueden variar. Los productos ayudan a mejorar la apariencia de círculos oscuros mediante el apoyo de la función de barrera cutánea, la energía celular y el tono de la piel. No están destinados a diagnosticar, tratar, curar o prevenir ninguna enfermedad.'
                      : '* Individual results may vary. Products help support the appearance of dark circles by supporting skin barrier function, cellular energy, and skin tone. Not intended to diagnose, treat, cure, or prevent any disease.'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
