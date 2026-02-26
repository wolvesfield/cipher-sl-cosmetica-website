import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Sun, Wind, Pulse, TrendDown, Sparkle, Lightning, Shield } from '@phosphor-icons/react'
import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { mockProducts } from '../lib/mockData'

interface FineLinesSectionProps {
  onProductClick?: (product: typeof import('@/lib/mockData').mockProducts[0]) => void
}

export function FineLinesSection({ onProductClick }: FineLinesSectionProps) {
  useLanguage()
  const [expandedCard, setExpandedCard] = useState<string | null>(null)

  const causes = [
    {
      id: 'collagen-loss',
      icon: <TrendDown className="w-8 h-8" />,
      title: 'Collagen & Elastin Degradation',
      subtitle: 'The Foundation Weakens',
      description: 'Starting in your mid-20s, collagen production drops ~1% per year while matrix metalloproteinases (MMPs) break down existing fibers. Skin loses structure, resilience, and "snap-back"—fine lines are the first visible sign.',
      details: 'Collagen types I and III form the dermal scaffold that keeps skin plump and smooth. Elastin provides resilience. With age, fibroblast activity declines while MMPs (enzymes that degrade matrix) increase due to UV, inflammation, and hormonal shifts. The result: thinner dermis, reduced hydration capacity, and surface "crinkles" that deepen into static wrinkles.',
      mechanism: [
        'Collagen I production declines ~1% annually after age 25',
        'Elastin fragmentation reduces skin\'s ability to "bounce back" after expression',
        'MMPs (especially MMP-1) break down existing collagen faster than it\'s replaced',
        'Glycation (sugar-protein bonds) stiffens collagen, reducing flexibility',
        'Cumulative loss creates a thinner, less resilient dermis that creases easily'
      ],
      gradient: 'from-[oklch(0.65_0.14_30)] to-[oklch(0.55_0.12_20)]'
    },
    {
      id: 'uv-damage',
      icon: <Sun className="w-8 h-8" />,
      title: 'Photoaging & Oxidative Stress',
      subtitle: 'UV as the Primary Aggressor',
      description: 'Up to 80% of visible facial aging is attributed to chronic UV exposure. UVA penetrates deep, generating free radicals that fragment collagen and trigger MMP activation.',
      details: 'UVA radiation (320-400nm) penetrates through clouds, windows, and into the dermis where it generates reactive oxygen species (ROS). These free radicals oxidize lipids, proteins, and DNA, directly damaging collagen fibers and triggering inflammatory pathways that upregulate MMPs. The result is "photoaging": premature fine lines, rough texture, and loss of elasticity.',
      mechanism: [
        'UVA penetrates to dermis, generating ROS that damage collagen and elastin',
        'Oxidative stress activates AP-1 transcription factor → MMP upregulation',
        'MMPs degrade collagen I, III, and elastin at accelerated rates',
        'Chronic inflammation from UV creates persistent low-grade matrix breakdown',
        'Cumulative damage manifests as fine lines, roughness, and laxity'
      ],
      gradient: 'from-[oklch(0.75_0.16_60)] to-[oklch(0.65_0.14_50)]'
    },
    {
      id: 'dehydration',
      icon: <Wind className="w-8 h-8" />,
      title: 'Dehydration & Barrier Loss',
      subtitle: 'Surface Crinkles',
      description: 'When the stratum corneum loses water, cells shrink and compact, creating fine "accordion" lines. These are distinct from structural wrinkles but become permanent with chronic dehydration.',
      details: 'Dehydration lines are superficial, appearing in the stratum corneum and upper epidermis. They form when transepidermal water loss (TEWL) exceeds the skin\'s hydration capacity, causing corneocytes to contract. Initially reversible with hydration, chronic dehydration damages the barrier, making lines persist and eventually etching deeper as dermal support weakens.',
      mechanism: [
        'Elevated TEWL from compromised barrier accelerates water loss',
        'Dehydrated corneocytes shrink, creating surface "crinkles"',
        'Loss of natural moisturizing factors (NMF) reduces water-binding capacity',
        'Chronic dehydration triggers inflammation that degrades dermal matrix',
        'Superficial lines become structural as underlying support weakens'
      ],
      gradient: 'from-[oklch(0.70_0.12_200)] to-[oklch(0.60_0.10_210)]'
    },
    {
      id: 'repetitive-movement',
      icon: <Pulse className="w-8 h-8" />,
      title: 'Repetitive Muscle Contraction',
      subtitle: 'Expression Lines Become Permanent',
      description: 'Every smile, squint, and frown creates temporary creases. With time and collagen loss, these dynamic lines become static—visible even at rest.',
      details: 'Facial muscles contract thousands of times daily, folding the overlying skin. Young, collagen-rich skin rebounds immediately. But as collagen declines and elastin fragments, the "memory" of these folds persists. Areas of high expression (forehead, eyes, mouth) develop static lines first: crow\'s feet, glabellar lines (11s), nasolabial folds.',
      mechanism: [
        'Repetitive muscle contractions create temporary folds in overlying skin',
        'Collagen-rich skin rebounds; aged skin retains creases',
        'Elastin fragmentation reduces "snap-back," making folds persist longer',
        'High-expression areas (periorbital, forehead) show lines first',
        'Dynamic (expression-dependent) lines become static (always visible) with age'
      ],
      gradient: 'from-[oklch(0.60_0.14_270)] to-[oklch(0.50_0.12_260)]'
    }
  ]

  const treatmentApproaches = [
    {
      id: 'retinoids',
      icon: <Pulse className="w-8 h-8" />,
      title: 'Retinoids: Collagen Induction',
      description: 'Retinoids are the gold standard for fine lines. They normalize cell turnover, stimulate collagen production, and reduce MMP activity—addressing the root cause of line formation.',
      details: 'Retinoids (retinol, retinaldehyde, retinoic acid) bind to nuclear retinoic acid receptors (RARs) to upregulate genes responsible for collagen I and III synthesis. They simultaneously inhibit MMP-1, protecting existing collagen. By accelerating turnover, they also improve texture and reduce superficial dehydration lines. Encapsulation + CBD buffering delivers efficacy without irritation.',
      mechanisms: [
        'Upregulates collagen I and III gene expression in fibroblasts',
        'Inhibits MMP-1 (collagenase) to protect existing matrix',
        'Normalizes keratinocyte differentiation, improving texture',
        'Increases epidermal thickness, making skin more resilient',
        'CBD buffer reduces retinoid irritation, allowing consistent use'
      ],
      gradient: 'from-[oklch(0.65_0.12_200)] to-[oklch(0.50_0.12_230)]'
    },
    {
      id: 'peptides',
      icon: <Lightning className="w-8 h-8" />,
      title: 'Signal Peptides: Gentle Collagen Boost',
      description: 'Peptides mimic skin\'s natural repair signals, prompting fibroblasts to synthesize collagen without the irritation of retinoids.',
      details: 'These peptides (palmitoyl oligopeptide + palmitoyl tetrapeptide-7) are the most studied anti-aging peptide complex. These short amino acid chains mimic collagen breakdown fragments, "tricking" fibroblasts into believing damage has occurred. The cells respond by ramping up collagen I, III, IV, elastin, and hyaluronic acid production—rebuilding the matrix gently and consistently.',
      mechanisms: [
        'Mimics collagen breakdown fragments to trigger repair response',
        'Increases collagen I production by up to 350% in vitro',
        'Boosts elastin and hyaluronic acid for comprehensive rejuvenation',
        'Reduces IL-6 (inflammatory cytokine) that degrades collagen',
        'Suitable for sensitive skin unable to tolerate retinoids'
      ],
      gradient: 'from-[oklch(0.70_0.14_290)] to-[oklch(0.60_0.18_270)]'
    },
    {
      id: 'antioxidants',
      icon: <Shield className="w-8 h-8" />,
      title: 'Antioxidants: Preventive Defense',
      description: 'Vitamin C, E, ferulic acid, and CBD neutralize free radicals, preventing the oxidative damage that triggers collagen breakdown and line formation.',
      details: 'Antioxidants don\'t reverse existing lines, but they prevent new damage. Vitamin C (MAP) inhibits MMP-1 while stimulating collagen synthesis. Ferulic acid stabilizes C and E, multiplying photoprotection. CBD provides potent antioxidant activity while calming inflammation. Together, they create a defensive network that protects against the daily oxidative assault driving aging.',
      mechanisms: [
        'Vitamin C neutralizes ROS, inhibits MMP-1, and stimulates procollagen',
        'Ferulic acid stabilizes Vitamins C & E, doubling UV protection',
        'CBD antioxidant potency exceeds Vitamins C & E, protecting lipids and proteins',
        'Combined antioxidants provide broad-spectrum free radical defense',
        'Prevents oxidative damage that triggers MMP activation and collagen loss'
      ],
      gradient: 'from-[oklch(0.75_0.15_50)] to-[oklch(0.65_0.13_40)]'
    },
    {
      id: 'hydration',
      icon: <Sparkle className="w-8 h-8" />,
      title: 'Multi-Layer Hydration: Plumping from Within',
      description: 'Multi-weight hyaluronic acid, glycerin, and barrier lipids address dehydration lines by restoring water at every epidermal level.',
      details: 'Dehydration lines are the easiest to address—and the first to respond. Multi-weight HA delivers hydration at surface (high MW), mid-epidermis (medium MW), and deep layers (low MW). Glycerin draws water from environment and dermis. Ceramides seal everything in. The result: immediate plumping that smooths fine lines and creates a hydrated foundation for deeper treatments.',
      mechanisms: [
        'High MW HA (>1000 kDa) forms surface film, preventing TEWL',
        'Medium MW HA (100-300 kDa) plumps mid-epidermis, smoothing lines',
        'Low MW HA (<50 kDa) penetrates deep, providing sustained hydration',
        'Glycerin and sodium PCA attract and bind water',
        'Ceramides seal barrier, locking in hydration and preventing dehydration recurrence'
      ],
      gradient: 'from-[oklch(0.60_0.12_150)] to-[oklch(0.50_0.10_170)]'
    }
  ]

  const timeline = [
    {
      week: 'Week 2-4',
      title: 'Surface Smoothing',
      description: 'Hydration plumps superficial lines, retinoids begin accelerating turnover, texture refines.',
      percentage: 25
    },
    {
      week: 'Week 4-8',
      title: 'Collagen Activation',
      description: 'Retinoids and peptides stimulate fibroblast activity, MMP inhibition protects existing matrix.',
      percentage: 45
    },
    {
      week: 'Week 8-12',
      title: 'Structural Improvement',
      description: 'New collagen deposition becomes visible, fine lines soften, skin regains "bounce."',
      percentage: 70
    },
    {
      week: 'Week 12+',
      title: 'Remodeling & Prevention',
      description: 'Continued collagen synthesis, antioxidants prevent new damage, results compound over time.',
      percentage: 90
    }
  ]

  const protocolProducts = [
    {
      productId: 'mtrx-002',
      name: 'CBD + Retinol',
      subtitle: 'The Paradox / Time Bender',
      description: 'Retinol-powered renewal for visibly smoother fine lines and improved texture, buffered by MTRX‑CBD for better tolerability.',
      tags: ['Retinol Renewal', 'Texture', 'Fine Lines']
    },
    {
      productId: 'mtrx-004',
      name: 'CBD + Polypeptides',
      subtitle: 'The Sculptor',
      description: 'Peptide complex that supports collagen and elastin, helping skin look firmer and fine lines appear less etched.',
      tags: ['Collagen Support', 'Firmness', 'Early Wrinkles']
    },
    {
      productId: 'mtrx-010',
      name: 'CBD + Hyaluronic Acid',
      subtitle: 'The Rainmaker',
      description: 'Intense hydration and plumping to immediately soften the look of dehydration-driven fine lines.',
      tags: ['Deep Hydration', 'Plumping', 'Dehydration Lines']
    },
    {
      productId: 'mtrx-001',
      name: '8.0% MTRX‑CBD Base Cream',
      subtitle: 'The Great Harmonizer',
      description: 'Calms visible irritation, supports barrier repair, and reduces TEWL to create a stable base for nightly actives like Retinol and peptides.',
      tags: ['Barrier Support', 'Calming', 'TEWL Control']
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
              ANTI-AGING
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-dark mb-6">
              Fine Lines
            </h1>
            <p className="text-lg sm:text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Fine lines result from collagen loss, oxidative damage, dehydration, and repetitive movement. Effective treatment requires stimulating new collagen, protecting against damage, and maintaining hydration—not just "filling" from the outside.
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
                  Multi-Modal Fine Line Treatment
                </h2>
                <p className="text-center text-gray-medium mb-8 max-w-3xl mx-auto">
                  Our protocol combines collagen induction, antioxidant protection, and deep hydration to address all causes of fine lines simultaneously.
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
            <Card className="bg-gradient-to-br from-[oklch(0.99_0.002_240)] to-[oklch(0.97_0.005_230)] border-primary/10">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4">
                    Fine Line Renewal Protocol – MTRX-CBD Synergy
                  </h2>
                  <p className="text-base sm:text-lg text-gray-medium max-w-4xl mx-auto leading-relaxed">
                    Layer targeted renewal, collagen support, and deep hydration over a stabilized barrier to address the main visible drivers of fine lines.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {protocolProducts.map((product, idx) => {
                    const fullProduct = mockProducts.find(p => p.id === product.productId)
                    
                    return (
                      <motion.div
                        key={product.productId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + idx * 0.1, duration: 0.5 }}
                      >
                        <Card 
                          className="h-full hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white/80 backdrop-blur-sm cursor-pointer"
                          onClick={() => fullProduct && onProductClick?.(fullProduct)}
                        >
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <h3 className="text-lg font-bold text-slate-dark mb-1">
                                {product.name}
                              </h3>
                              <p className="text-sm text-primary/80 font-semibold mb-3">
                                {product.subtitle}
                              </p>
                              <p className="text-sm text-gray-medium leading-relaxed mb-4">
                                {product.description}
                              </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                              {product.tags.map((tag, tagIdx) => (
                                <Badge 
                                  key={tagIdx}
                                  variant="secondary" 
                                  className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
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

                <div className="text-center mt-8">
                  <p className="text-xs text-gray-medium/80 max-w-3xl mx-auto">
                    All claims are cosmetic in nature. Products help improve the appearance of skin concerns and support skin health. They do not treat, cure, or prevent any medical condition.
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
