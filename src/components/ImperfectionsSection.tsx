import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Drop, Flame, Wind, Virus, CheckCircle, ArrowsClockwise, ShieldCheck, Sparkle, ChartLine } from '@phosphor-icons/react'
import { useState } from 'react'
import { mockProducts } from '@/lib/mockData'
import { Product } from '@/lib/types'
import { useLanguage } from '@/lib/LanguageContext'

interface ImperfectionsSectionProps {
  onProductClick?: (product: Product) => void
}

export function ImperfectionsSection({ onProductClick }: ImperfectionsSectionProps) {
  const { language } = useLanguage()
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [hoveredCause, setHoveredCause] = useState<string | null>(null)

  const causes = [
    {
      id: 'sebum',
      icon: <Drop className="w-8 h-8" />,
      title: 'Excess Sebum Production',
      description: 'Hormonal shifts and humidity increase oil, which oxidizes inside pores and stretches them over time.',
      details: 'Sebaceous glands respond to androgens, cortisol, and environmental humidity by ramping up lipid production. When sebum sits in a follicle, it oxidizes (turns into "blackheads"), and the mechanical pressure physically dilates the pore opening. Over months and years, chronic distention makes pores appear larger and more visible.',
      impact: 'High',
      color: 'from-[oklch(0.60_0.15_180)] to-[oklch(0.50_0.12_200)]'
    },
    {
      id: 'inflammation',
      icon: <Flame className="w-8 h-8" />,
      title: 'Inflammation',
      description: 'Each papule or pustule triggers a micro-injury; repeated flares degrade collagen around the pore, making it appear larger and leaving erythema behind.',
      details: 'Every breakout is a localized inflammatory event. Neutrophils and cytokines flood the area, releasing enzymes (matrix metalloproteinases) that digest collagen and elastin. This weakens the structural support around the follicle, causing permanent pore enlargement and post-inflammatory marks (PIE/PIH) that can persist for months.',
      impact: 'Critical',
      color: 'from-[oklch(0.65_0.20_30)] to-[oklch(0.55_0.18_20)]'
    },
    {
      id: 'turnover',
      icon: <ArrowsClockwise className="w-8 h-8" />,
      title: 'Disrupted Cell Turnover',
      description: 'Slower desquamation causes compacted stratum corneum, rough patches, and stubborn "closed comedones" that never quite surface.',
      details: 'Healthy skin sheds about 30,000-40,000 dead cells per minute. When this process slows (due to age, genetics, or poor product choices), dead cells pile up, forming a thick, uneven surface. This compaction traps sebum and debris underneath, creating closed comedones (whiteheads) and giving skin a rough, "orange peel" texture.',
      impact: 'High',
      color: 'from-[oklch(0.70_0.12_280)] to-[oklch(0.60_0.14_270)]'
    },
    {
      id: 'bacterial',
      icon: <Virus className="w-8 h-8" />,
      title: 'Bacterial Proliferation',
      description: 'Imbalanced microbiome and trapped sebum enable breakout-causing bacteria to thrive, fueling more inflammation.',
      details: 'C. acnes (now P. acnes) is a normal skin resident, but when the follicle becomes anaerobic (oxygen-depleted due to sebum plugs), these bacteria multiply rapidly. They produce inflammatory byproducts that trigger immune responses, creating a vicious cycle: more bacteria → more inflammation → more barrier damage → more bacteria.',
      impact: 'High',
      color: 'from-[oklch(0.55_0.15_340)] to-[oklch(0.65_0.12_350)]'
    }
  ]

  const manifestations = [
    'Enlarged pores, especially in the T-zone',
    'Post-inflammatory erythema (PIE) and early post-inflammatory hyperpigmentation (PIH)',
    'Rough, uneven texture and "orange peel" appearance',
    'Blackheads, whiteheads, and generalized congestion',
    'Recurrent breakouts in the same areas',
    'Surface dullness from compacted dead cells'
  ]

  const treatmentProtocol = [
    {
      id: 'rainmaker',
      name: 'The Rainmaker',
      active: 'Hyaluronic Acid',
      formula: '8.0% MTRX-CBD + Multi-Weight Hyaluronic Acid',
      role: 'Hydrating Humectant Complex',
      description: 'Multi-weight humectants that keep clarifying routines from over-drying, preventing the barrier stress that worsens texture and breakouts.',
      mechanism: [
        'Creates a deep moisture reservoir with multi-weight HA molecules (high, medium, low)',
        'Prevents the "flash drying" effect that makes skin overproduce sebum',
        'Keeps barrier supple and comfortable during retinoid or acid use',
        'Supports texture refinement by maintaining optimal hydration in the stratum corneum',
        'Plumps dehydration lines that can make pores look more prominent',
        'MTRX-CBD ensures hydration does not trigger sensitivity or inflammation'
      ],
      usage: 'AM & PM, applied after cleansing and before heavier treatments',
      gradient: 'from-[oklch(0.65_0.12_200)] to-[oklch(0.75_0.08_210)]'
    },
    {
      id: 'timebender',
      name: 'The Time Bender',
      active: 'Retinol',
      formula: '8.0% MTRX-CBD + Retinol',
      role: 'Turnover Accelerator & Texture Refinement',
      description: 'Nightly or alternate-night treatment to speed turnover, dissolve micro-comedones, and promote smoother, more uniform texture over time.',
      mechanism: [
        'Accelerates epidermal turnover from 28+ days down to 21-24 days',
        'Normalizes keratinization to prevent follicular plugging',
        'Dissolves existing micro-comedones (bumps under the surface)',
        'Stimulates collagen production to improve pore structure',
        'Refines texture and creates smoother light reflection',
        'MTRX-CBD buffers the "retinoid reaction" (redness, peeling, sensitivity)'
      ],
      usage: 'PM only, start 2-3x/week, build to nightly as tolerated',
      gradient: 'from-[oklch(0.65_0.18_280)] to-[oklch(0.55_0.15_270)]'
    },
    {
      id: 'harmonizer',
      name: 'The Great Harmonizer',
      active: 'Anti-inflammatory + Balancing Complex',
      formula: '8.0% MTRX-CBD + Niacinamide',
      role: 'Calming + Sebum Balancing + Barrier Reinforcement',
      description: 'Combines calming CBD-style anti-inflammatory effects with sebum balancing, pore refinement, and barrier reinforcement to create a peaceful equilibrium.',
      mechanism: [
        'Modulates endocannabinoid receptors (CB1/CB2) to downregulate inflammation',
        'Reduces IL-6, IL-8, and TNF-α cytokines that drive redness and PIE/PIH',
        'Normalizes and moderates sebum production by 30-50% through regulation of sebaceous gland activity',
        'Refines the look of enlarged pores by improving skin texture and elasticity',
        'Strengthens the barrier and supports ceramide synthesis for resilience',
        'Helps reduce post-blemish redness and the risk of post-inflammatory hyperpigmentation',
        'Soothes irritation from retinoids, acids, and environmental stress',
        'Supports skin homeostasis and microbiome balance',
        'Safe for sensitive skin and can be used during active breakouts'
      ],
      usage: 'AM & PM, can be layered with other actives or used as final step',
      gradient: 'from-[oklch(0.60_0.12_150)] to-[oklch(0.70_0.10_170)]'
    }
  ]

  const beforeAfterData = [
    { week: 0, poreSize: 100, texture: 100, redness: 100 },
    { week: 2, poreSize: 85, texture: 80, redness: 65 },
    { week: 4, poreSize: 70, texture: 60, redness: 40 },
    { week: 8, poreSize: 55, texture: 40, redness: 25 },
    { week: 12, poreSize: 45, texture: 30, redness: 15 }
  ]

  return (
    <div className="bg-gradient-to-br from-background via-[oklch(0.96_0.01_230)] to-[oklch(0.94_0.02_240)] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 text-sm px-4 py-1.5 bg-primary/10 text-primary border-primary/20">
              SKIN CONDITION
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-dark mb-6">
              IMPERFECTIONS
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-6">
              Texture Refinement, Zero Over-Stripping
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-gray-medium leading-relaxed mb-8">
                IMPERFECTIONS focuses on surface texture, enlarged pores, and post-acne marks as a combined 
                ecosystem problem—oil flow, inflammation, and sluggish turnover working against a stressed barrier. 
                The goal is to <strong className="text-slate-dark">refine, not erase</strong>: clearer texture, 
                smoother light reflection, and calmer skin that still feels intact.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-[oklch(0.98_0.005_230)] to-[oklch(0.96_0.01_240)] border-primary/20 shadow-lg">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-dark mb-6">
                  The Ecosystem of Imperfection
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-sm sm:text-base md:text-lg text-gray-medium leading-relaxed mb-6">
                    Surface imperfections including enlarged pores, post-acne marks, uneven texture, and recurrent 
                    blemishes rarely come from a single cause. Excess sebum mixes with pollution and dead cells to 
                    clog follicles; inflammation from each breakout leaves behind lingering redness or brown marks; 
                    disrupted cell turnover makes the surface feel rough and highlights every pore edge.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-medium leading-relaxed mb-6">
                    When the barrier is compromised by harsh scrubs or high-alcohol toners, skin fights back with 
                    more oil and more sensitivity, creating a loop of <strong>flare → dry-out → flare again</strong>.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-medium leading-relaxed mb-6">
                    <strong className="text-slate-dark">The IMPERFECTIONS protocol treats this as a calibration issue, not a war.</strong> 
                    The Rainmaker delivers multi-weight hydration that prevents clarifying routines from over-drying and 
                    supports barrier comfort. The Time Bender nudges cell turnover back into a healthy rhythm, smoothing 
                    micro-bumps and softening post-blemish irregularities.
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-gray-medium leading-relaxed">
                    The Great Harmonizer combines anti-inflammatory CBD with niacinamide to balance sebum production, refine 
                    the look of enlarged pores, strengthen the barrier, and reduce post-blemish redness—buffering the 
                    irritation that actives can cause so users can stay consistent long enough to see true texture change 
                    instead of quitting at the first purge.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-dark mb-4">
                Root Causes: The Four Pillars of Imperfection
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-medium">
                Understanding what drives texture, congestion, and post-acne marks
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {causes.map((cause, index) => (
                <motion.div
                  key={cause.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  onMouseEnter={() => setHoveredCause(cause.id)}
                  onMouseLeave={() => setHoveredCause(null)}
                >
                  <Card 
                    className={`group relative overflow-hidden border-2 transition-all duration-300 h-full ${
                      hoveredCause === cause.id 
                        ? 'border-primary shadow-2xl ring-4 ring-primary/20 scale-105' 
                        : 'border-primary/20 hover:border-primary/40 hover:shadow-xl'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${cause.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <CardContent className="relative p-6 md:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${cause.color} flex items-center justify-center text-white shadow-lg`}>
                          {cause.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-dark">
                              {cause.title}
                            </h3>
                            <Badge 
                              variant={cause.impact === 'Critical' ? 'destructive' : 'secondary'}
                              className="text-xs"
                            >
                              {cause.impact}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-sm sm:text-base text-gray-medium leading-relaxed mb-4">
                        {cause.description}
                      </p>

                      <motion.div
                        initial={false}
                        animate={{
                          height: hoveredCause === cause.id ? 'auto' : 0,
                          opacity: hoveredCause === cause.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-primary/10">
                          <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-4">
                            <h4 className="font-semibold text-slate-dark mb-2 text-xs sm:text-sm uppercase tracking-wide">
                              Deep Dive:
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-dark/80 leading-relaxed italic">
                              {cause.details}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <div className="mt-4 text-xs sm:text-sm text-primary/60 font-medium">
                        {hoveredCause === cause.id ? 'Hover away to collapse' : 'Hover for details'}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-[oklch(0.98_0.005_240)] to-[oklch(0.96_0.01_250)] border-primary/20">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-dark">
                    Clinical Manifestations
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {manifestations.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
                      className="flex items-start gap-3 bg-white/60 rounded-lg p-4 border border-primary/10"
                    >
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                      <span className="text-sm sm:text-base text-slate-dark leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-dark mb-4">
                Progressive Results Timeline
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-medium max-w-3xl mx-auto">
                Clinical improvements observed with consistent IMPERFECTIONS protocol adherence
              </p>
            </div>

            <Card className="bg-gradient-to-br from-white to-[oklch(0.98_0.005_240)] border-primary/20 shadow-lg overflow-hidden">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="space-y-6">
                  {beforeAfterData.map((data, index) => (
                    <motion.div
                      key={data.week}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="relative"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-4">
                        <div className="flex-shrink-0">
                          <Badge variant="outline" className="text-base sm:text-lg px-4 py-2 font-bold border-2 border-primary">
                            Week {data.week}
                          </Badge>
                        </div>
                        
                        <div className="flex-1 space-y-3">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs sm:text-sm font-semibold text-slate-dark">Pore Size</span>
                              <span className="text-xs sm:text-sm font-bold text-primary">{100 - data.poreSize}% reduction</span>
                            </div>
                            <div className="h-3 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: '100%' }}
                                animate={{ width: `${data.poreSize}%` }}
                                transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                                className="h-full bg-gradient-to-r from-[oklch(0.65_0.15_30)] to-[oklch(0.55_0.12_20)] rounded-full"
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs sm:text-sm font-semibold text-slate-dark">Texture Roughness</span>
                              <span className="text-xs sm:text-sm font-bold text-primary">{100 - data.texture}% smoother</span>
                            </div>
                            <div className="h-3 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: '100%' }}
                                animate={{ width: `${data.texture}%` }}
                                transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                                className="h-full bg-gradient-to-r from-[oklch(0.60_0.12_280)] to-[oklch(0.70_0.10_270)] rounded-full"
                              />
                            </div>
                          </div>

                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs sm:text-sm font-semibold text-slate-dark">Redness / PIE</span>
                              <span className="text-xs sm:text-sm font-bold text-primary">{100 - data.redness}% calmer</span>
                            </div>
                            <div className="h-3 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: '100%' }}
                                animate={{ width: `${data.redness}%` }}
                                transition={{ duration: 1, delay: 0.9 + index * 0.1 }}
                                className="h-full bg-gradient-to-r from-[oklch(0.60_0.15_150)] to-[oklch(0.70_0.12_170)] rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-primary/10">
                  <p className="text-xs sm:text-sm text-gray-medium text-center italic">
                    Individual results may vary. Based on clinical observations and user-reported outcomes 
                    with consistent twice-daily application of complete protocol.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-dark mb-4">
                Treatment Protocol: Calibration, Not Combat
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-medium max-w-3xl mx-auto">
                The three-pillar approach to refined, balanced, clear-textured skin
              </p>
            </div>

            <div className="space-y-6">
              {treatmentProtocol.map((treatment, index) => (
                <motion.div
                  key={treatment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.15 }}
                >
                  <Card 
                    className={`group relative overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                      expandedCard === treatment.id 
                        ? 'border-primary shadow-2xl ring-4 ring-primary/20' 
                        : 'border-primary/20 hover:border-primary/40 hover:shadow-xl'
                    }`}
                    onClick={() => setExpandedCard(expandedCard === treatment.id ? null : treatment.id)}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${treatment.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <CardContent className="relative p-6 sm:p-8 md:p-10">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-4">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${treatment.gradient} flex items-center justify-center text-white shadow-lg`}>
                          {index === 0 && <Drop className="w-8 h-8" />}
                          {index === 1 && <Wind className="w-8 h-8" />}
                          {index === 2 && <ShieldCheck className="w-8 h-8" />}
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-3">
                            <div>
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-dark mb-1">
                                {treatment.name}
                              </h3>
                              <p className="text-sm sm:text-base text-primary font-semibold">
                                {treatment.role}
                              </p>
                            </div>
                            <motion.div
                              animate={{ rotate: expandedCard === treatment.id ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChartLine className={`w-6 h-6 sm:w-7 sm:h-7 ${expandedCard === treatment.id ? 'text-primary' : 'text-muted-foreground'}`} />
                            </motion.div>
                          </div>
                          
                          <Badge variant="secondary" className="text-xs sm:text-sm font-mono mb-4">
                            {treatment.formula}
                          </Badge>
                          
                          <p className="text-sm sm:text-base text-gray-medium leading-relaxed">
                            {treatment.description}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedCard === treatment.id ? 'auto' : 0,
                          opacity: expandedCard === treatment.id ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-primary/10">
                          <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-4 sm:p-6 mb-4">
                            <h4 className="font-semibold text-slate-dark mb-4 text-xs sm:text-sm uppercase tracking-wide flex items-center gap-2">
                              <Sparkle className="w-4 h-4 text-primary" />
                              Molecular Mechanisms:
                            </h4>
                            <ul className="space-y-3">
                              {treatment.mechanism.map((item, idx) => (
                                <motion.li 
                                  key={idx} 
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                                  className="flex items-start gap-3 text-xs sm:text-sm"
                                >
                                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
                                  <span className="text-slate-dark/80 leading-relaxed">{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                            <h4 className="font-semibold text-slate-dark mb-2 text-xs sm:text-sm uppercase tracking-wide">
                              Usage Protocol:
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-dark/80 leading-relaxed">
                              {treatment.usage}
                            </p>
                          </div>
                        </div>
                      </motion.div>

                      <div className="mt-4 text-xs sm:text-sm text-primary/60 font-medium">
                        {expandedCard === treatment.id ? 'Click to collapse' : 'Click to expand protocol details'}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <Sparkle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-dark text-center">
                    Emotional Benefit
                  </h2>
                  <Sparkle className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl text-center text-gray-medium leading-relaxed max-w-4xl mx-auto">
                  IMPERFECTIONS is the quiet, disciplined reset that turns "problem skin" into skin that 
                  looks <strong className="text-slate-dark">close-up smooth</strong> and feels 
                  <strong className="text-slate-dark"> balanced</strong>—no chalky dryness, no tightness, 
                  just <strong className="text-primary">refined texture and clearer tone</strong>.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-dark mb-4">
                {language === 'es' ? 'Protocolo Claro y Calmo – MTRX-CBD para Imperfecciones' : 'Clear & Calm Protocol – MTRX-CBD for Imperfections'}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-medium max-w-4xl mx-auto leading-relaxed">
                {language === 'es' 
                  ? 'Combina calma CBD, renovación con retinol, vitamina C MAP iluminadora y defensa antioxidante para ayudar a mejorar la apariencia de imperfecciones sin comprometer la barrera.'
                  : 'Pair CBD‑calm, retinol renewal, brightening MAP vitamin C, and antioxidant defense to help improve the look of imperfections without compromising the barrier.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  productId: 'mtrx-001',
                  title: language === 'es' ? 'El Gran Armonizador' : 'The Great Harmonizer',
                  subtitle: '8.0% MTRX‑CBD',
                  copy: language === 'es' 
                    ? 'Ayuda a calmar la inflamación visible, apoyar la reparación de la barrera y equilibrar el aceite para que la piel propensa a brotes pueda tolerar mejor los activos.'
                    : 'Helps calm visible inflammation, support barrier repair, and balance oil so breakout‑prone skin can better tolerate actives.',
                  tags: language === 'es' 
                    ? ['Calmante', 'Balance de Aceite', 'Soporte de Barrera']
                    : ['Calming', 'Oil Balance', 'Barrier Support']
                },
                {
                  productId: 'mtrx-002',
                  title: language === 'es' ? 'La Paradoja / Doblador del Tiempo' : 'The Paradox / Time Bender',
                  subtitle: 'CBD + Retinol',
                  copy: language === 'es'
                    ? 'Renovación potenciada con retinol que ayuda a refinar la textura, destapar la apariencia de los poros y desvanecer las marcas post-imperfecciones.'
                    : 'Retinol-powered renewal that helps refine texture, unclog the look of pores, and fade the appearance of post‑blemish marks.',
                  tags: language === 'es'
                    ? ['Textura', 'Poros', 'Marcas Post-Imperfecciones']
                    : ['Texture', 'Pores', 'Post‑Blemish Marks']
                },
                {
                  productId: 'mtrx-003',
                  title: language === 'es' ? 'El Capturador de Luz' : 'The Sun Catcher',
                  subtitle: 'CBD + Vitamin C (MAP)',
                  copy: language === 'es'
                    ? 'Derivado estabilizado de vitamina C que ayuda a iluminar manchas post-inflamatorias y emparejar la apariencia del tono sin aspereza.'
                    : 'Stabilized Vitamin C derivative that helps brighten post‑inflammatory manchas and even the look of tone without harshness.',
                  tags: language === 'es'
                    ? ['Iluminante', 'Manchas', 'Tono']
                    : ['Brightening', 'Manchas', 'Tone']
                },
                {
                  productId: 'mtrx-009',
                  title: language === 'es' ? 'El Inmortal' : 'The Immortal',
                  subtitle: 'CBD + Resveratrol',
                  copy: language === 'es'
                    ? 'Escudo antioxidante que ayuda a proteger contra factores estresantes ambientales vinculados a la congestión mientras apoya la claridad cutánea a largo plazo.'
                    : 'Antioxidant shield that helps protect against environmental stressors linked to congestion while supporting long‑term skin clarity.',
                  tags: language === 'es'
                    ? ['Antioxidante', 'Defensa contra Polución', 'Claridad']
                    : ['Antioxidant', 'Pollution Defense', 'Clarity']
                }
              ].map((item, index) => {
                const product = mockProducts.find(p => p.id === item.productId)
                if (!product) return null

                return (
                  <motion.div
                    key={item.productId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  >
                    <Card 
                      className="group relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 h-full cursor-pointer"
                      onClick={() => onProductClick?.(product)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <CardContent className="relative p-6 flex flex-col h-full">
                        <div className="mb-4">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-dark mb-1 leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-sm text-primary font-semibold">
                            {item.subtitle}
                          </p>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-medium leading-relaxed mb-4 flex-grow">
                          {item.copy}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, idx) => (
                            <Badge 
                              key={idx}
                              variant="secondary" 
                              className="text-xs px-2 py-1 bg-primary/10 text-slate-dark border-primary/20"
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
          </motion.div>

        </div>
      </div>
    </div>
  )
}
