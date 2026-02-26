import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Sun, Sparkle, ChartLine, Eye, MapPin } from '@phosphor-icons/react'
import { useState } from 'react'
import { Product } from '@/lib/types'
import { mockProducts } from '@/lib/mockData'

interface HyperpigmentationSectionProps {
  onProductClick?: (product: Product) => void
}

export function HyperpigmentationSection({ onProductClick }: HyperpigmentationSectionProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [spotTimelinePosition, setSpotTimelinePosition] = useState(0)

  const mechanismCards = [
    {
      id: 'harmonizer',
      icon: <Sparkle className="w-8 h-8" />,
      title: 'The Great Harmonizer',
      subtitle: 'Anti-inflammatory + Balancing Complex',
      description: 'Calms the inflammatory micro‑environment that keeps PIH smoldering, uses niacinamide to reduce melanin transfer to keratinocytes, support ceramides, and soften redness.',
      details: 'Post-inflammatory hyperpigmentation (PIH) is not merely residual pigment—it\'s an active inflammatory response. Each acne lesion, insect bite, or friction injury triggers a cascade where melanocytes over-produce melanin as a "protective" response. The Great Harmonizer works on multiple fronts: CBD modulates the endocannabinoid system to downregulate inflammatory cytokines (IL-1α, IL-6, TNF-α) that signal melanocytes to produce excess pigment. Niacinamide (Vitamin B3) at 4-5% inhibits melanosome transfer from melanocytes to keratinocytes—the pigment stays in the factory instead of spreading across the surface.',
      mechanism: [
        'CBD reduces IL-1α and TNF-α that trigger melanocyte hyperactivity after inflammation',
        'Niacinamide blocks melanosome transfer by 35-68% in clinical studies',
        'Strengthens ceramide synthesis, preventing barrier damage that worsens PIH',
        'Reduces accompanying erythema (redness) that often borders dark patches',
        'Regulates sebum production to prevent new breakouts that cause more PIH',
        'Calms neurogenic inflammation that can darken existing spots under stress'
      ],
      gradient: 'from-[oklch(0.65_0.12_200)] to-[oklch(0.50_0.12_230)]',
      hexEffect: 'cool-inflammation'
    },
    {
      id: 'timebender',
      icon: <ChartLine className="w-8 h-8" />,
      title: 'The Time Bender',
      subtitle: 'Retinol for Even Turnover',
      description: 'Retinoid step that accelerates even turnover, helping pigment‑rich keratinocytes rise and shed in a controlled, uniform way.',
      details: 'Hyperpigmented skin has two layers of darkness: surface pigment trapped in dead keratinocytes, and deeper melanin in the basal layer. Retinol (Vitamin A) addresses both. By accelerating cell turnover from 28 days down to 21-24 days, retinol brings pigmented cells to the surface faster where they shed naturally. Simultaneously, it suppresses tyrosinase (the enzyme that creates melanin) and normalizes melanocyte activity, preventing new pigment formation. In LATAM skin (Fitzpatrick III-V), retinol must be introduced gradually—hence the CBD buffer in MTRX formulations prevents the irritation that would paradoxically trigger more PIH.',
      mechanism: [
        'Accelerates keratinocyte turnover, shedding pigmented cells 25-30% faster',
        'Downregulates tyrosinase activity by binding to retinoic acid receptors (RARs)',
        'Disperses melanin clusters for more uniform distribution',
        'Improves light reflection by smoothing the stratum corneum surface',
        'Stimulates collagen to improve how light bounces off deeper layers',
        'CBD co-treatment prevents irritation-induced melanogenesis during adjustment'
      ],
      gradient: 'from-[oklch(0.70_0.14_290)] to-[oklch(0.60_0.18_270)]',
      hexEffect: 'turnover-sweep'
    },
    {
      id: 'illuminator',
      icon: <Sun className="w-8 h-8" />,
      title: 'The Illuminator',
      subtitle: 'Stabilized Vitamin C (MAP)',
      description: 'Daily brightening serum that targets oxidative stress, gently fades visible spots, and boosts overall luminosity with lower irritation.',
      details: 'Magnesium Ascorbyl Phosphate (MAP) is the gold standard Vitamin C derivative for melanin-rich skin. Unlike L-Ascorbic Acid, which is notoriously unstable and irritating (often causing redness that triggers more pigment in darker skin), MAP is stable, pH-friendly, and converts to active Vitamin C inside skin cells. It works through multiple pathways: inhibiting tyrosinase to prevent new melanin formation, interrupting the oxidation of existing melanin (turning dark eumelanin into lighter pheomelanin), and boosting collagen synthesis to improve overall skin architecture and light reflection.',
      mechanism: [
        'Inhibits tyrosinase at the copper-binding site, reducing melanin synthesis by up to 60%',
        'Converts dopaquinone back to dopa, reversing melanin formation mid-pathway',
        'Neutralizes singlet oxygen and hydroxyl radicals that darken existing pigment',
        'Enhances collagen synthesis, improving how light reflects off skin surface',
        'Non-irritating formulation prevents inflammation-induced darkening',
        'Stable formula maintains potency in high-UV LATAM climates'
      ],
      gradient: 'from-[oklch(0.75_0.15_40)] to-[oklch(0.65_0.12_20)]',
      hexEffect: 'desaturate-glow'
    }
  ]

  const spotJourneyStages = [
    {
      position: 0,
      stage: 'Fresh Inflammation',
      description: 'Harmonizer calms the flare and slows pigment deposit.',
      spotOpacity: 1,
      spotSize: 120
    },
    {
      position: 33,
      stage: 'Active Pigment',
      description: 'Time Bender + Illuminator accelerate even fade-out.',
      spotOpacity: 0.7,
      spotSize: 100
    },
    {
      position: 66,
      stage: 'Fading',
      description: 'Continued actives + barrier support maintain momentum.',
      spotOpacity: 0.4,
      spotSize: 80
    },
    {
      position: 100,
      stage: 'Blended',
      description: 'Sunscreen prevents re-trigger from new UV hits.',
      spotOpacity: 0.1,
      spotSize: 60
    }
  ]

  const getCurrentStage = () => {
    return spotJourneyStages.reduce((prev, curr) => {
      return Math.abs(curr.position - spotTimelinePosition) < Math.abs(prev.position - spotTimelinePosition)
        ? curr
        : prev
    })
  }

  const clinicalManifestations = [
    'Manchas and patchy uneven tone on cheeks, forehead, upper lip',
    'Post-inflammatory hyperpigmentation after acne or bites',
    'Melasma-like symmetric patches triggered by sun or hormones',
    'Dull, low-contrast skin where contours look "flat" in photos'
  ]

  const causes = [
    {
      title: 'UV and visible light overload',
      description: 'High, year‑round indices stimulate tyrosinase and deepen existing pigment grids.'
    },
    {
      title: 'Hormonal flux',
      description: 'Pregnancy, contraception, and endocrine changes sensitize melanocytes, especially in melasma‑prone patterns.'
    },
    {
      title: 'Inflammation & injury',
      description: 'Acne, procedures, or friction leave behind PIH because melanocytes "over‑protect" healing tissue.'
    },
    {
      title: 'Heat & pollution',
      description: 'Thermal spikes and particulate matter amplify oxidative stress, making pigment pathways more reactive over time.'
    }
  ]

  const recommendedProducts = [
    {
      id: 'mtrx-001',
      name: 'The Great Harmonizer',
      formula: '8.0% MTRX-CBD + Niacinamide',
      benefit: 'Calms inflammation, blocks melanin transfer, and strengthens barrier to prevent PIH triggers.'
    },
    {
      id: 'mtrx-002',
      name: 'The Time Bender',
      formula: '8.0% MTRX-CBD + Retinol',
      benefit: 'Accelerates pigment-cell turnover and normalizes melanocyte activity for even tone.'
    },
    {
      id: 'mtrx-003',
      name: 'The Illuminator',
      formula: '8.0% MTRX-CBD + Vitamin C (MAP)',
      benefit: 'Stable brightening that fades spots and prevents new pigment formation without irritation.'
    }
  ]

  return (
    <div className="bg-white py-16 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, oklch(0.50 0.12 200) 0px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, oklch(0.50 0.12 200) 0px, transparent 1px, transparent 20px)
          `
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 text-sm px-4 py-1.5 bg-[oklch(0.65_0.12_200)]/20 text-[oklch(0.50_0.12_230)] border-[oklch(0.65_0.12_200)]/30">
              SKIN CONDITION
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-dark mb-6">
              HYPERPIGMENTATION
            </h1>
            <p className="text-2xl md:text-3xl text-[oklch(0.50_0.12_230)] font-semibold mb-6">
              Precision Light, Zero Bleach
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-[oklch(0.35_0.03_240)] leading-relaxed mb-4">
                HYPERPIGMENTATION focuses on manchas, melasma, and post‑inflammatory dark marks as signal‑driven 
                responses from melanocytes—not "stains" to erase. The aim is targeted quieting of excess pigment 
                pathways while keeping the barrier strong and your undertone intact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <Card className="bg-white/80 border-[oklch(0.65_0.12_200)]/30 shadow-2xl backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-6">
                  The Biology of Pigment Dysregulation
                </h2>
                <div className="space-y-6 text-[oklch(0.35_0.03_240)] leading-relaxed">
                  <p className="text-base md:text-lg">
                    In LATAM skin, high UV indices, heat, hormones, and inflammation all team up to over‑activate 
                    melanocytes, sending melanin upward in dense clusters that read as patches, spots, or shadowy 
                    haloing around old breakouts. Aggressive peels and harsh "whitening" cocktails can inflame the 
                    dermis, damage the barrier, and paradoxically deepen pigment—especially in Fitzpatrick III–V 
                    phototypes where PIH risk is already elevated.
                  </p>
                  <p className="text-base md:text-lg">
                    Sustainable brightening means shielding skin from daily triggers, modulating melanin production 
                    and transfer, and exfoliating in micro‑doses that respect long‑term tolerance. The HYPERPIGMENTATION 
                    protocol treats tone as a dynamic system: not a stain to bleach, but a biological response to calm, 
                    redirect, and protect.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-[oklch(0.97_0.005_230)] p-6 rounded-lg border border-[oklch(0.65_0.12_200)]/20">
                      <h3 className="text-xl font-semibold text-[oklch(0.50_0.12_230)] mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        Why LATAM Skin Is Different
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-[oklch(0.65_0.12_200)] mt-1">▪</span>
                          <span>UV index regularly 10+ year-round in equatorial zones</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[oklch(0.65_0.12_200)] mt-1">▪</span>
                          <span>High melanin density = more reactive melanocyte response</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[oklch(0.65_0.12_200)] mt-1">▪</span>
                          <span>Visible light (blue/violet) penetrates deeper, reactivates spots</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[oklch(0.65_0.12_200)] mt-1">▪</span>
                          <span>Heat + humidity trigger inflammatory cascades</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-[oklch(0.97_0.005_230)] p-6 rounded-lg border border-[oklch(0.65_0.12_200)]/20">
                      <h3 className="text-xl font-semibold text-[oklch(0.50_0.12_230)] mb-4 flex items-center gap-2">
                        <Eye className="w-5 h-5" />
                        The Vicious Cycle
                      </h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-[oklch(0.75_0.15_40)] mt-1">1.</span>
                          <span>UV/inflammation triggers melanocyte activation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[oklch(0.75_0.15_40)] mt-1">2.</span>
                          <span>Excess melanin transfers to surrounding keratinocytes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[oklch(0.75_0.15_40)] mt-1">3.</span>
                          <span>Harsh treatments cause barrier damage + more inflammation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[oklch(0.75_0.15_40)] mt-1">4.</span>
                          <span>Inflammation signals MORE pigment production (PIH loop)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-8 text-center">
              Spot Journey Timeline
              <span className="block text-lg text-[oklch(0.50_0.12_230)] font-normal mt-2">
                Drag to see how a dark spot fades over the treatment journey
              </span>
            </h2>

            <Card className="bg-white/80 border-[oklch(0.65_0.12_200)]/30 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="mb-8">
                  <div className="relative h-[200px] flex items-center justify-center">
                    <motion.div
                      className="rounded-full bg-gradient-radial from-[oklch(0.25_0.06_30)] to-[oklch(0.35_0.08_30)]"
                      animate={{
                        width: `${getCurrentStage().spotSize}px`,
                        height: `${getCurrentStage().spotSize}px`,
                        opacity: getCurrentStage().spotOpacity,
                      }}
                      transition={{ duration: 0.5 }}
                      style={{
                        filter: `blur(${getCurrentStage().spotOpacity * 4}px)`,
                        boxShadow: `0 0 ${getCurrentStage().spotSize / 2}px oklch(0.25 0.06 30 / ${getCurrentStage().spotOpacity})`
                      }}
                    />
                  </div>
                </div>

                <div className="relative mb-6">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={spotTimelinePosition}
                    onChange={(e) => setSpotTimelinePosition(Number(e.target.value))}
                    className="w-full h-2 bg-[oklch(0.92_0.015_240)] rounded-lg appearance-none cursor-pointer accent-[oklch(0.65_0.12_200)]"
                    style={{
                      background: `linear-gradient(to right, oklch(0.65 0.12 200) 0%, oklch(0.65 0.12 200) ${spotTimelinePosition}%, oklch(0.92 0.015 240) ${spotTimelinePosition}%, oklch(0.92 0.015 240) 100%)`
                    }}
                  />
                  <div className="flex justify-between mt-4 text-xs text-[oklch(0.35_0.03_240)]">
                    {spotJourneyStages.map((stage, idx) => (
                      <div key={idx} className="text-center" style={{ width: '22%' }}>
                        <div className="font-semibold text-[oklch(0.50_0.12_230)]">
                          {stage.stage}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={getCurrentStage().stage}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="bg-[oklch(0.97_0.005_230)] p-6 rounded-lg border border-[oklch(0.65_0.12_200)]/20"
                  >
                    <p className="text-base text-[oklch(0.35_0.03_240)] text-center">
                      <span className="text-[oklch(0.50_0.12_230)] font-semibold">
                        {getCurrentStage().stage}:
                      </span>{' '}
                      {getCurrentStage().description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-8 text-center">
              Clinical Mechanisms Deep Dive
            </h2>
            
            <div className="space-y-6">
              {mechanismCards.map((card, idx) => (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                >
                  <Card 
                    className="bg-white/80 border-[oklch(0.65_0.12_200)]/30 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:border-[oklch(0.65_0.12_200)]/50 hover:shadow-lg"
                    onClick={() => setExpandedCard(expandedCard === card.id ? null : card.id)}
                  >
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-lg bg-gradient-to-br ${card.gradient}`}>
                          <div className="text-white">
                            {card.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-dark mb-2">
                            {card.title}
                          </h3>
                          <p className="text-[oklch(0.50_0.12_230)] font-semibold mb-3">
                            {card.subtitle}
                          </p>
                          <p className="text-[oklch(0.35_0.03_240)] leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedCard === card.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 pt-6 border-t border-[oklch(0.65_0.12_200)]/20"
                          >
                            <p className="text-[oklch(0.35_0.03_240)] leading-relaxed mb-6">
                              {card.details}
                            </p>
                            
                            <div className="bg-[oklch(0.97_0.005_230)] p-6 rounded-lg border border-[oklch(0.65_0.12_200)]/20">
                              <h4 className="text-lg font-semibold text-[oklch(0.50_0.12_230)] mb-4">
                                Mechanism of Action:
                              </h4>
                              <ul className="space-y-3">
                                {card.mechanism.map((item, itemIdx) => (
                                  <motion.li
                                    key={itemIdx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * itemIdx }}
                                    className="flex items-start gap-3"
                                  >
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.12_200)] mt-2" />
                                    <span className="text-[oklch(0.35_0.03_240)] text-sm">{item}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="mt-4 text-center">
                        <button className="text-[oklch(0.65_0.12_200)] text-sm font-semibold hover:text-[oklch(0.50_0.12_230)] transition-colors">
                          {expandedCard === card.id ? '− Show Less' : '+ Show More'}
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-white/80 border-[oklch(0.65_0.12_200)]/30 backdrop-blur-sm h-full shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-dark mb-6">
                    Root Causes
                  </h3>
                  <div className="space-y-4">
                    {causes.map((cause, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="bg-[oklch(0.97_0.005_230)] p-4 rounded-lg border border-[oklch(0.65_0.12_200)]/20"
                      >
                        <h4 className="text-[oklch(0.50_0.12_230)] font-semibold mb-2">
                          {cause.title}
                        </h4>
                        <p className="text-sm text-[oklch(0.35_0.03_240)]">
                          {cause.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-white/80 border-[oklch(0.65_0.12_200)]/30 backdrop-blur-sm h-full shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-dark mb-6">
                    Clinical Manifestations
                  </h3>
                  <ul className="space-y-3">
                    {clinicalManifestations.map((manifestation, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-start gap-3"
                      >
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.12_200)] mt-2" />
                        <span className="text-[oklch(0.35_0.03_240)]">{manifestation}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="bg-gradient-to-br from-[oklch(0.97_0.005_230)] to-[oklch(0.95_0.01_240)] border-[oklch(0.65_0.12_200)]/40 backdrop-blur-sm shadow-lg">
              <CardContent className="p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-6 text-center">
                  Recommended Protocol
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {recommendedProducts.map((product, idx) => {
                    const fullProduct = mockProducts.find(p => p.id === product.id)
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        onClick={() => fullProduct && onProductClick?.(fullProduct)}
                        className="bg-white p-6 rounded-lg border border-[oklch(0.65_0.12_200)]/30 hover:border-[oklch(0.65_0.12_200)]/60 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer hover:scale-[1.02]"
                      >
                        <h3 className="text-xl font-bold text-slate-dark mb-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-[oklch(0.50_0.12_230)] font-mono mb-3">
                          {product.formula}
                        </p>
                        <p className="text-sm text-[oklch(0.35_0.03_240)] leading-relaxed">
                          {product.benefit}
                        </p>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Card className="bg-white/70 border-[oklch(0.65_0.12_200)]/30 backdrop-blur-sm shadow-md">
              <CardContent className="p-8">
                <p className="text-lg md:text-xl text-[oklch(0.35_0.03_240)] leading-relaxed italic">
                  "HYPERPIGMENTATION is about editing the noise in your tone map—so freckles, warmth, and depth 
                  remain uniquely yours while hotspots of pigment slowly fade into a smoother, more luminous field."
                </p>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
