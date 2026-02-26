import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  Atom,
  Shield,
  Lightbulb,
  Check,
  Drop,
  Brain,
  Sparkle,
  Leaf
} from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface MTRXCBDTechnologyProps {
  onBack: () => void
}

interface MechanismSection {
  id: string
  title: string
  icon: typeof Atom
  color: string
  plainLanguage: string
  scienceDetail: string
  cosmeticOutcome: string[]
  uiNote: string
}

export function MTRXCBDTechnology({ onBack }: MTRXCBDTechnologyProps) {
  const [expandedMechanism, setExpandedMechanism] = useState<string | null>(null)
  const [activeVisualization, setActiveVisualization] = useState<string | null>(null)

  const mechanismSections: MechanismSection[] = [
    {
      id: 'cbd',
      title: 'Cannabidiol (CBD)',
      icon: Brain,
      color: 'from-teal-deep to-teal-light',
      plainLanguage: 'Modulates scalp inflammation and soothes sensitivity without irritation.',
      scienceDetail: 'CBD interacts with cannabinoid receptors in the scalp to help reduce inflammatory signals and calm reactive skin, creating an optimal environment for hair growth and scalp health.',
      cosmeticOutcome: [
        'Helps calm visible scalp irritation',
        'Supports a more comfortable scalp feel',
        'Assists in reducing scalp sensitivity'
      ],
      uiNote: 'CBD molecules interacting with scalp receptors, creating a calming halo effect across the scalp surface.'
    },
    {
      id: 'msm',
      title: 'Dimethyl Sulfone (MSM)',
      icon: Sparkle,
      color: 'from-amber-500 to-orange-400',
      plainLanguage: '"Organic Sulfur" donor that strengthens keratin bonds and supports structural integrity.',
      scienceDetail: 'MSM provides bio-available organic sulfur essential for keratin synthesis. This sulfur compound helps fortify hair structure from within, supporting strength, elasticity, and overall hair integrity.',
      cosmeticOutcome: [
        'Helps strengthen hair shaft structure',
        'Supports keratin bond formation',
        'Assists in improving hair resilience',
        'Contributes to overall hair quality'
      ],
      uiNote: 'Sulfur molecules weaving through keratin bonds in the hair shaft, reinforcing the structural matrix with golden threads.'
    },
    {
      id: 'surfactants',
      title: 'Amino-Acid Surfactants (Sodium Cocoyl Glutamate)',
      icon: Drop,
      color: 'from-cyan-500 to-blue-400',
      plainLanguage: 'Ultra-mild, high-performance cleansing agents that respect the skin\'s pH and lipid barrier.',
      scienceDetail: 'Derived from coconut and glutamate amino acids, these surfactants selectively remove impurities while preserving the hydrolipidic film. Unlike harsh sulfates (SLS/SLES), they maintain the scalp\'s natural pH and don\'t strip beneficial oils or disrupt the microbiome.',
      cosmeticOutcome: [
        'Helps cleanse without stripping',
        'Supports natural pH balance',
        'Maintains hydrolipidic film integrity',
        'Preserves scalp microbiome health'
      ],
      uiNote: 'Gentle wave of cleansing molecules flowing across scalp, selectively lifting impurities while protective barrier remains intact.'
    },
    {
      id: 'probiotics',
      title: 'Lactobacillus Ferment',
      icon: Atom,
      color: 'from-purple-500 to-indigo-400',
      plainLanguage: 'Probiotic technology that balances the scalp microbiome and strengthens natural defenses.',
      scienceDetail: 'Probiotic ferments help regulate the scalp\'s immune response and maintain a healthy microbial ecosystem. This creates an environment that supports scalp health while protecting against irritation and imbalance.',
      cosmeticOutcome: [
        'Helps balance scalp microbiome',
        'Supports natural immune function',
        'Assists in maintaining scalp health',
        'Strengthens scalp defense mechanisms'
      ],
      uiNote: 'Probiotic organisms forming protective colonies across the scalp landscape, creating a balanced ecosystem with glowing defense nodes.'
    },
    {
      id: 'argan',
      title: 'Argania Spinosa (Argan Oil)',
      icon: Shield,
      color: 'from-green-500 to-emerald-400',
      plainLanguage: 'Delivers biomimetic lipids and Vitamin E to restore elasticity and hydration.',
      scienceDetail: 'Argan oil provides essential fatty acids and antioxidants that mirror the scalp\'s natural lipid structure. Rich in Vitamin E, it helps protect against oxidative stress while deeply nourishing both scalp and hair.',
      cosmeticOutcome: [
        'Helps restore scalp hydration',
        'Supports hair elasticity',
        'Assists in protecting against oxidative damage',
        'Contributes to overall hair health and shine'
      ],
      uiNote: 'Golden oil droplets merging with hair shaft structure, creating a lustrous protective coating while vitamin E shields against environmental stress.'
    },
    {
      id: 'botanicals',
      title: 'Cucumis Sativus (Cucumber) & Lavender',
      icon: Leaf,
      color: 'from-rose-500 to-pink-400',
      plainLanguage: 'Synergistic botanical complex to cool, soothe, and reduce oxidative stress.',
      scienceDetail: 'Cucumber extract provides cooling hydration and soothing compounds, while lavender offers calming aromatic benefits and antioxidant protection. Together, they create a sensory and functional experience that reduces scalp tension and environmental damage.',
      cosmeticOutcome: [
        'Helps cool and soothe the scalp',
        'Supports comfort during application',
        'Assists in reducing oxidative stress',
        'Creates a calming sensory experience'
      ],
      uiNote: 'Cool botanical mist descending on scalp surface, with lavender aromatics creating calming waves and cucumber droplets providing instant cooling relief.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
            <Button
              onClick={onBack}
              variant="ghost"
              className="gap-1.5 sm:gap-2 text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-9 md:h-10"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </div>

          <motion.div
            className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Badge className="mb-3 sm:mb-4 px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 text-[9px] sm:text-[10px] md:text-xs font-mono bg-primary/10 text-primary border-primary/20">
              BIO-RESTORATIVE • SCALP TREATMENT • THERAPEUTIC DELIVERY
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-playfair font-bold text-slate-dark mb-2 sm:mb-3 md:mb-4 px-2">
              MTRX-CBD Shampoo Technology
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary font-medium mb-2 sm:mb-3 md:mb-4 px-2">
              Bio-Restorative Scalp Treatment
            </p>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-foreground/70 max-w-4xl mx-auto leading-relaxed px-4">
              MTRX-CBD SHAMPOO is not a standard detergent; it is a bio-restorative scalp treatment. Unlike commercial shampoos that rely on harsh sulfates (SLS/SLES) which strip the microbiome, this formula utilizes a Bio-Compatible Amino-Acid Matrix.
            </p>
          </motion.div>

          <Card className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-teal-deep/5 via-card to-primary/5 border-2 border-primary/20 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-teal-deep to-teal-light flex items-center justify-center shadow-lg">
                <Atom className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-slate-dark mb-3 sm:mb-4">
                  The Formula
                </h2>
                <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base lg:text-lg text-foreground/80 leading-relaxed">
                  <p>
                    The cleansing agents—derived from coconut and glutamate amino acids—selectively remove impurities while preserving the hydrolipidic film essential for a healthy scalp barrier.
                  </p>
                  <p>
                    The formula goes beyond simple cleansing by incorporating a <span className="font-semibold text-slate-dark">"Therapeutic Delivery System."</span> It anchors Cannabidiol (CBD) within a complex of Dimethyl Sulfone (MSM)—a bio-available organic sulfur essential for keratin synthesis—and Probiotic Ferments to regulate the scalp's immune response.
                  </p>
                  <div className="mt-4 sm:mt-5 md:mt-6 p-4 sm:p-5 md:p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-primary/20">
                    <p className="text-xs sm:text-sm md:text-base font-medium text-slate-dark mb-2">
                      Dual-Action Mechanism:
                    </p>
                    <p className="text-[10px] sm:text-xs md:text-sm text-foreground/80">
                      This creates a dual-action mechanism: it soothes neurogenic inflammation (ideal for sensitive scalps) while structurally reinforcing the hair shaft from the root. Enriched with botanical extracts like Cucumber and Lavender, this is a precision-engineered formula where every rinse deposits active nutrients rather than stripping them away.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-slate-dark mb-2 sm:mb-3 px-2">
                Base Formula: Active Architecture
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-foreground/70 max-w-3xl mx-auto px-4">
                Every ingredient serves a precise function in this bio-restorative scalp treatment system.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6">
              {mechanismSections.map((mechanism, index) => {
                const Icon = mechanism.icon
                const isExpanded = expandedMechanism === mechanism.id

                return (
                  <motion.div
                    key={mechanism.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className={cn(
                        "p-4 sm:p-5 md:p-6 lg:p-8 border-2 transition-all duration-300 cursor-pointer",
                        isExpanded 
                          ? "border-primary/60 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 shadow-xl" 
                          : "border-primary/20 hover:border-primary/40 hover:shadow-lg"
                      )}
                      onClick={() => setExpandedMechanism(isExpanded ? null : mechanism.id)}
                    >
                      <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                        <div className={cn(
                          "flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center bg-gradient-to-br shadow-lg",
                          mechanism.color
                        )}>
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" weight="duotone" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-playfair font-bold text-slate-dark mb-1.5 sm:mb-2 leading-tight">
                            {mechanism.title}
                          </h3>
                          <p className="text-[11px] sm:text-xs md:text-sm lg:text-base text-foreground/70 leading-relaxed">
                            {mechanism.plainLanguage}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex-shrink-0"
                        >
                          <ArrowLeft className={cn("w-4 h-4 sm:w-5 sm:h-5 text-primary transform rotate-[-90deg]")} />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="mt-4 sm:mt-5 md:mt-6 pt-4 sm:pt-5 md:pt-6 border-t border-primary/20 space-y-4 sm:space-y-5 md:space-y-6">
                              <div>
                                <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                                  The Science
                                </p>
                                <p className="text-[10px] sm:text-xs md:text-sm text-foreground/80 leading-relaxed">
                                  {mechanism.scienceDetail}
                                </p>
                              </div>

                              <div className="bg-gradient-to-br from-teal-deep/10 to-teal-light/10 rounded-xl p-3 sm:p-4 md:p-5 border border-teal-deep/20">
                                <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-teal-deep mb-2 sm:mb-3 flex items-center gap-2">
                                  <Check className="w-3 h-3 sm:w-4 sm:h-4" />
                                  Cosmetic Outcomes
                                </p>
                                <ul className="space-y-1.5 sm:space-y-2">
                                  {mechanism.cosmeticOutcome.map((outcome, idx) => (
                                    <li key={idx} className="text-[10px] sm:text-xs md:text-sm text-foreground/80 flex items-start gap-1.5 sm:gap-2">
                                      <span className="text-teal-deep mt-0.5 sm:mt-1">•</span>
                                      <span>{outcome}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div 
                                className={cn(
                                  "bg-gradient-to-br from-slate-dark/5 to-slate-dark/10 rounded-xl p-3 sm:p-4 md:p-5 border border-slate-dark/20",
                                  "hover:from-slate-dark/10 hover:to-slate-dark/15 transition-all duration-300 cursor-pointer"
                                )}
                                onClick={(e) => {
                                  e.stopPropagation()
                                  setActiveVisualization(activeVisualization === mechanism.id ? null : mechanism.id)
                                }}
                              >
                                <p className="text-[9px] sm:text-[10px] md:text-xs font-mono font-semibold text-primary mb-1.5 sm:mb-2 uppercase tracking-wider flex items-center gap-1.5 sm:gap-2">
                                  <Lightbulb className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                  UI Visualization Concept
                                </p>
                                <p className="text-[9px] sm:text-[10px] md:text-xs text-foreground/70 italic leading-relaxed">
                                  {mechanism.uiNote}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          <Card className="max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-accent/5 via-primary/5 to-teal-deep/5 border-2 border-primary/30 shadow-2xl">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-primary to-teal-deep flex items-center justify-center shadow-lg">
                <Sparkle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" weight="duotone" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-slate-dark mb-2 sm:mb-3 md:mb-4">
                  Precision-Engineered Formula
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/80 leading-relaxed italic">
                  This is a precision-engineered formula where <strong className="text-slate-dark">every rinse deposits active nutrients rather than stripping them away</strong>. A true bio-restorative treatment that transforms the scalp care ritual.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
