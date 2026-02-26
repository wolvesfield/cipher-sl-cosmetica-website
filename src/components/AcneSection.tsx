import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Virus, Drop, Flame, ShieldCheck, Pulse, Leaf, ArrowsClockwise } from '@phosphor-icons/react'
import { useState } from 'react'
import { mockProducts } from '../lib/mockData'
import { Product } from '../lib/types'

interface AcneSectionProps {
  onProductClick?: (product: Product) => void
}

export function AcneSection({ onProductClick }: AcneSectionProps) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const acneCauses = [
    {
      id: 'sebum',
      icon: <Drop className="w-8 h-8" />,
      title: 'Excess Sebum Production',
      subtitle: 'Hormonal Trigger',
      description: 'Androgens, cortisol, and humidity stimulate sebaceous glands, flooding follicles with lipid-rich oil that becomes a perfect bacterial breeding ground.',
      details: 'Sebaceous glands contain androgen receptors that respond to testosterone, DHT, and stress hormones by upregulating lipogenesis. This excess sebum not only clogs pores but also provides nutrients for C. acnes bacteria, creating an inflammatory cascade. The sebum\'s fatty acid composition changes under oxidative stress, becoming more comedogenic and pro-inflammatory.',
      mechanism: [
        'Androgen receptor activation increases sebocyte proliferation and lipid synthesis',
        'Cortisol from chronic stress elevates sebum production by 20-40%',
        'Humidity and heat trigger increased oil output as a protective response',
        'Oxidized sebum (squalene peroxide) becomes directly inflammatory',
        'Excess sebum physically dilates pores, trapping debris and bacteria'
      ],
      gradient: 'from-[oklch(0.60_0.15_180)] to-[oklch(0.50_0.12_200)]'
    },
    {
      id: 'inflammation',
      icon: <Flame className="w-8 h-8" />,
      title: 'Inflammatory Cascade',
      subtitle: 'The Vicious Cycle',
      description: 'Each breakout is a localized immune assault. Neutrophils release enzymes that damage surrounding tissue, perpetuating inflammation and creating post-inflammatory marks.',
      details: 'Acne is fundamentally an inflammatory disease. When C. acnes proliferates in an oxygen-depleted follicle, it produces inflammatory mediators that trigger toll-like receptor 2 (TLR2) activation. This summons neutrophils and macrophages that release reactive oxygen species (ROS) and matrix metalloproteinases (MMPs), causing collateral damage to the follicle wall and surrounding dermis.',
      mechanism: [
        'TLR2 activation by C. acnes triggers pro-inflammatory cytokine release (IL-1β, IL-8, TNF-α)',
        'Neutrophil infiltration releases ROS and proteases that rupture follicle walls',
        'Follicle rupture spreads bacteria and lipids into dermis, creating cysts and nodules',
        'Chronic inflammation degrades collagen, leaving atrophic scars',
        'Post-inflammatory hyperpigmentation (PIH) persists for months in darker skin'
      ],
      gradient: 'from-[oklch(0.65_0.20_30)] to-[oklch(0.55_0.18_20)]'
    },
    {
      id: 'bacterial',
      icon: <Virus className="w-8 h-8" />,
      title: 'Cutibacterium acnes Proliferation',
      subtitle: 'Microbiome Imbalance',
      description: 'When follicles become anaerobic due to sebum plugs, C. acnes bacteria multiply rapidly, producing inflammatory byproducts and perpetuating the cycle.',
      details: 'C. acnes is a normal skin commensal, but certain strains become pathogenic when follicular conditions favor their overgrowth. In anaerobic, lipid-rich environments (blocked pores), these bacteria ferment sebum triglycerides into pro-inflammatory free fatty acids while producing porphyrins that generate reactive oxygen species.',
      mechanism: [
        'Anaerobic environment created by sebum plugs allows C. acnes to flourish',
        'Bacterial lipases break down triglycerides into inflammatory free fatty acids',
        'Porphyrin production generates ROS under light exposure, damaging tissue',
        'Biofilm formation makes bacterial colonies resistant to topical treatments',
        'Immune system responds with chronic inflammation rather than elimination'
      ],
      gradient: 'from-[oklch(0.55_0.15_340)] to-[oklch(0.65_0.12_350)]'
    },
    {
      id: 'keratinization',
      icon: <ArrowsClockwise className="w-8 h-8" />,
      title: 'Abnormal Keratinization',
      subtitle: 'Follicular Plugging',
      description: 'Keratinocytes lining follicles fail to shed normally, creating sticky "plugs" that trap sebum and bacteria, forming comedones and setting the stage for inflammatory lesions.',
      details: 'Healthy follicles continuously shed dead cells into the sebum stream, which carries them to the surface. In acne-prone skin, follicular keratinocytes become "sticky" due to altered desmosome breakdown and increased corneocyte cohesion. This creates a plug (microcomedone) that blocks sebum flow, creating the oxygen-depleted environment where C. acnes thrives.',
      mechanism: [
        'Altered keratinocyte differentiation leads to increased corneocyte cohesion',
        'Desmosomal proteins fail to break down, preventing normal cell shedding',
        'Keratin plugs physically block the follicular opening (comedone formation)',
        'Trapped sebum and keratin debris create anaerobic conditions',
        'Microcomedones are the precursor lesions to all inflammatory acne'
      ],
      gradient: 'from-[oklch(0.70_0.12_280)] to-[oklch(0.60_0.14_270)]'
    }
  ]

  const treatmentStrategies = [
    {
      id: 'cbd',
      icon: <Leaf className="w-8 h-8" />,
      title: 'MTRX-CBD: Anti-Inflammatory Foundation',
      description: 'CBD modulates the cutaneous endocannabinoid system to reduce inflammation, regulate sebum production, and calm the immune overreaction that drives acne.',
      details: 'MTRX-CBD targets acne through multiple pathways: it acts as a sebostatic agent by inhibiting lipogenesis in sebocytes, reduces inflammatory cytokine production, and modulates keratinocyte proliferation to prevent microcomedone formation. Clinical studies show CBD reduces sebum production by up to 45% while simultaneously calming inflammation.',
      mechanisms: [
        'CB2 receptor activation in sebocytes reduces lipid synthesis and sebum output',
        'Inhibits NF-κB signaling to block pro-inflammatory gene expression',
        'Reduces IL-6, IL-8, and TNF-α levels in inflamed skin',
        'Normalizes keratinocyte differentiation to prevent follicular plugging',
        'Powerful antioxidant action neutralizes ROS that damage follicle walls'
      ],
      gradient: 'from-[oklch(0.60_0.12_150)] to-[oklch(0.50_0.10_170)]'
    },
    {
      id: 'retinoids',
      icon: <Pulse className="w-8 h-8" />,
      title: 'Retinoids: Comedolytic & Normalizing',
      description: 'Retinoids normalize follicular keratinization, prevent microcomedone formation, and accelerate cell turnover to clear existing blockages.',
      details: 'Retinoids bind to retinoic acid receptors (RARs) in keratinocytes, normalizing their differentiation and preventing the "stickiness" that causes comedones. By accelerating epidermal turnover and reducing corneocyte cohesion, retinoids both treat existing acne and prevent new lesions. When combined with CBD, retinoid irritation is significantly reduced.',
      mechanisms: [
        'Normalizes keratinocyte differentiation to prevent comedone formation',
        'Reduces corneocyte cohesion, allowing normal follicular shedding',
        'Accelerates epidermal turnover to expel existing plugs',
        'Anti-inflammatory effects reduce lesion severity',
        'CBD buffering allows higher efficacy with minimal irritation'
      ],
      gradient: 'from-[oklch(0.65_0.12_200)] to-[oklch(0.50_0.12_230)]'
    },
    {
      id: 'niacinamide',
      icon: <ShieldCheck className="w-8 h-8" />,
      title: 'Niacinamide: Barrier & Sebum Regulator',
      description: 'Niacinamide reduces sebum production, strengthens the barrier, and provides anti-inflammatory benefits without irritation.',
      details: 'Niacinamide (Vitamin B3) is clinically proven to reduce sebum production by 20-30% within 4 weeks, making it ideal for oily, acne-prone skin. It also strengthens the barrier, reduces inflammation, and improves post-inflammatory hyperpigmentation—addressing multiple acne-related concerns simultaneously.',
      mechanisms: [
        'Reduces sebum excretion rate by inhibiting sebocyte lipid synthesis',
        'Strengthens barrier by enhancing ceramide production',
        'Anti-inflammatory: reduces IL-8 and other inflammatory mediators',
        'Fades PIH by inhibiting melanosome transfer to keratinocytes',
        'Improves overall skin texture and minimizes pore appearance'
      ],
      gradient: 'from-[oklch(0.70_0.14_290)] to-[oklch(0.60_0.18_270)]'
    }

  ]

  const timeline = [
    {
      week: 'Weeks 1-2',
      title: 'Inflammation Reduction',
      description: 'CBD begins modulating inflammatory pathways, reducing redness and active lesion tenderness.',
      percentage: 20
    },
    {
      week: 'Weeks 2-4',
      title: 'Sebum Normalization',
      description: 'Oil production decreases by 20-30% as CBD and niacinamide regulate sebocyte activity.',
      percentage: 40
    },
    {
      week: 'Weeks 4-8',
      title: 'Comedone Clearance',
      description: 'Retinoids normalize keratinization, clearing existing comedones and preventing new formation.',
      percentage: 65
    },
    {
      week: 'Weeks 8-12',
      title: 'Texture & Tone Improvement',
      description: 'Post-inflammatory marks fade, texture smooths, and new breakouts become rare.',
      percentage: 85
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
              ACNE TREATMENT
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-dark mb-6">
              Acne
            </h1>
            <p className="text-lg sm:text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Acne is a multifactorial inflammatory condition driven by excess sebum, bacterial overgrowth, abnormal keratinization, and chronic inflammation. Effective treatment requires addressing all four factors simultaneously—not just "drying out" the skin.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {acneCauses.map((cause, idx) => (
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
                  The SL Cosmetica Acne Protocol
                </h2>
                <p className="text-center text-gray-medium mb-8 max-w-3xl mx-auto">
                  Our approach addresses all four acne drivers simultaneously: reduce inflammation with CBD, normalize keratinization with retinoids, regulate sebum with niacinamide, and inhibit bacterial growth—all while protecting the barrier.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {treatmentStrategies.map((strategy, idx) => (
                    <motion.div
                      key={strategy.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${strategy.gradient} text-white mb-4`}>
                            {strategy.icon}
                          </div>
                          <h3 className="text-lg font-bold text-slate-dark mb-2">
                            {strategy.title}
                          </h3>
                          <p className="text-sm text-gray-medium mb-4 leading-relaxed">
                            {strategy.description}
                          </p>
                          <p className="text-xs text-slate-dark/70 mb-4 leading-relaxed">
                            {strategy.details}
                          </p>
                          <div className="space-y-2">
                            {strategy.mechanisms.map((mech, i) => (
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
                  Treatment Timeline
                </h2>
                <div className="space-y-6">
                  {timeline.map((phase, idx) => (
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12"
          >
            <Card className="bg-gradient-to-br from-[oklch(0.98_0.005_230)] to-[oklch(0.97_0.008_240)] border-primary/20">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4">
                    Clear & Calm Protocol – MTRX-CBD for Imperfections
                  </h2>
                  <p className="text-base sm:text-lg text-gray-medium max-w-4xl mx-auto leading-relaxed">
                    Pair CBD‑calm, retinol renewal, brightening MAP vitamin C, and antioxidant defense to help improve the look of imperfections without compromising the barrier.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      id: 'mtrx-001',
                      name: '8.0% MTRX‑CBD Base Cream',
                      subtitle: 'The Great Harmonizer',
                      copy: 'Helps calm visible inflammation, support barrier repair, and balance oil so breakout‑prone skin can better tolerate actives.',
                      tags: ['Calming', 'Oil Balance', 'Barrier Support']
                    },
                    {
                      id: 'mtrx-002',
                      name: 'CBD + Retinol',
                      subtitle: 'The Paradox / Time Bender',
                      copy: 'Retinol-powered renewal that helps refine texture, unclog the look of pores, and fade the appearance of post‑blemish marks.',
                      tags: ['Texture', 'Pores', 'Post‑Blemish Marks']
                    },
                    {
                      id: 'mtrx-003',
                      name: 'CBD + Vitamin C (MAP)',
                      subtitle: 'The Sun Catcher',
                      copy: 'Stabilized Vitamin C derivative that helps brighten post‑inflammatory manchas and even the look of tone without harshness.',
                      tags: ['Brightening', 'Manchas', 'Tone']
                    },
                    {
                      id: 'mtrx-009',
                      name: 'CBD + Resveratrol',
                      subtitle: 'The Immortal',
                      copy: 'Antioxidant shield that helps protect against environmental stressors linked to congestion while supporting long‑term skin clarity.',
                      tags: ['Antioxidant', 'Pollution Defense', 'Clarity']
                    }
                  ].map((item, idx) => {
                    const product = mockProducts.find(p => p.id === item.id)
                    
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + idx * 0.1, duration: 0.5 }}
                        onClick={() => product && onProductClick?.(product)}
                        className="cursor-pointer group"
                      >
                        <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border-2 border-transparent hover:border-primary/30">
                          <CardContent className="p-6">
                            <div className="mb-4">
                              <h3 className="text-lg font-bold text-slate-dark mb-1 group-hover:text-primary transition-colors">
                                {item.name}
                              </h3>
                              <p className="text-sm text-primary font-semibold italic">
                                {item.subtitle}
                              </p>
                            </div>
                            
                            <p className="text-sm text-gray-medium mb-4 leading-relaxed">
                              {item.copy}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <Badge 
                                  key={tag}
                                  variant="secondary"
                                  className="text-xs bg-accent/10 text-slate-dark border-accent/20"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
