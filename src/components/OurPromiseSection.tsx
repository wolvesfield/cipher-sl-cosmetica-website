import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  Flask, 
  Leaf, 
  Eye, 
  Heart, 
  GitBranch,
  ArrowRight,
  CheckCircle,
  TrendUp,
  Shield,
  Sparkle,
  MagnifyingGlass,
  Recycle
} from '@phosphor-icons/react'

interface PillarProps {
  icon: React.ReactNode
  number: number
  title: string
  commitment: string
  microHeadline: string
  description: string
  features: string[]
  uiElements: {
    type: string
    title: string
    description: string
  }[]
}

function DataRailChip({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex-shrink-0 px-6 py-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer group"
    >
      <div className="text-xs uppercase tracking-wider text-primary/70 mb-1 font-semibold">{label}</div>
      <div className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">{value}</div>
      <motion.div
        className="h-1 w-full bg-gradient-to-r from-primary/50 to-accent/50 rounded-full mt-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: delay + 0.3, duration: 0.7 }}
      />
    </motion.div>
  )
}

function MoleculeGate({ isExcluded }: { isExcluded: boolean }) {
  const molecules = isExcluded 
    ? ['Parabens', 'Phthalates', 'Sulfates', 'Formaldehyde', 'Volatile Irritants']
    : ['Ceramides', 'Peptides', 'CBD', 'Antioxidants', 'Hyaluronic Acid']
    
  return (
    <div className="space-y-3">
      {molecules.map((molecule, idx) => (
        <motion.div
          key={molecule}
          initial={{ x: isExcluded ? 20 : -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: idx * 0.1, duration: 0.5 }}
          className={`px-4 py-3 rounded-xl border backdrop-blur-sm ${
            isExcluded 
              ? 'bg-destructive/5 border-destructive/30 text-destructive' 
              : 'bg-primary/5 border-primary/30 text-primary'
          } flex items-center justify-between group hover:scale-102 transition-transform`}
        >
          <span className="text-sm font-medium">{molecule}</span>
          {isExcluded ? (
            <span className="text-xs opacity-70">Excluded</span>
          ) : (
            <CheckCircle className="opacity-70 group-hover:opacity-100 transition-opacity" weight="fill" size={16} />
          )}
        </motion.div>
      ))}
    </div>
  )
}

function PillarCard({ pillar, index }: { pillar: PillarProps; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <Card className="relative overflow-hidden group hover:shadow-2xl transition-shadow duration-500 bg-gradient-to-br from-card via-card to-primary/5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardContent className="p-8 relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <motion.div 
                className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                {pillar.icon}
              </motion.div>
              <div>
                <Badge className="mb-2 bg-primary/10 text-primary border-primary/30">
                  Pillar {pillar.number}
                </Badge>
                <h3 className="text-2xl font-bold text-slate-dark">{pillar.title}</h3>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <p className="text-sm uppercase tracking-wider text-primary font-semibold">
              {pillar.microHeadline}
            </p>
            <p className="text-base font-semibold text-slate-dark/90">
              {pillar.commitment}
            </p>
            <p className="text-slate-dark/70 leading-relaxed">
              {pillar.description}
            </p>
          </div>

          <Button
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full justify-between text-primary hover:bg-primary/10 group/btn"
          >
            <span className="font-semibold">
              {isExpanded ? 'Hide Details' : 'Explore Interactive Features'}
            </span>
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={20} weight="bold" />
            </motion.div>
          </Button>

          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-6 space-y-6 pt-6 border-t border-primary/20"
            >
              {/* Key Features */}
              <div>
                <h4 className="text-lg font-bold text-slate-dark mb-4 flex items-center gap-2">
                  <Sparkle className="text-primary" size={20} weight="duotone" />
                  Key Commitments
                </h4>
                <ul className="space-y-3">
                  {pillar.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-sm text-slate-dark/80"
                    >
                      <CheckCircle className="flex-shrink-0 mt-0.5 text-primary" size={16} weight="fill" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* UI Interactive Elements */}
              <div>
                <h4 className="text-lg font-bold text-slate-dark mb-4 flex items-center gap-2">
                  <Shield className="text-accent" size={20} weight="duotone" />
                  Interactive Visualization
                </h4>
                <div className="space-y-4">
                  {pillar.uiElements.map((element, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.1 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-secondary/30 to-accent/10 border border-primary/10"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        <h5 className="font-semibold text-sm text-slate-dark">{element.title}</h5>
                      </div>
                      <p className="text-xs text-slate-dark/70 leading-relaxed">
                        {element.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Render Special UI Components for specific pillars */}
              {pillar.number === 1 && (
                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-slate-dark mb-3 flex items-center gap-2">
                    <TrendUp className="text-primary" size={16} />
                    Clinical Data Rail
                  </h5>
                  <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                    <DataRailChip label="Redness Reduction" value="-32%" delay={0} />
                    <DataRailChip label="Study Duration" value="8 wks" delay={0.1} />
                    <DataRailChip label="Elasticity Improvement" value="+28%" delay={0.2} />
                    <DataRailChip label="Participant Satisfaction" value="94%" delay={0.3} />
                  </div>
                </div>
              )}

              {pillar.number === 2 && (
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-semibold text-destructive/90 mb-3 flex items-center gap-2">
                      Excluded Components
                    </h5>
                    <MoleculeGate isExcluded={true} />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                      Approved Actives
                    </h5>
                    <MoleculeGate isExcluded={false} />
                  </div>
                </div>
              )}

              {pillar.number === 3 && (
                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-slate-dark mb-3 flex items-center gap-2">
                    <MagnifyingGlass className="text-primary" size={16} />
                    Ingredient Transparency Lens
                  </h5>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border border-primary/20">
                    <div className="grid grid-cols-3 gap-3">
                      {['Actives', 'Vehicle', 'Stabilizers'].map((category, idx) => (
                        <motion.div
                          key={category}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.15 }}
                          className="text-center p-3 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/30 transition-colors cursor-pointer"
                        >
                          <div className={`w-12 h-12 mx-auto mb-2 rounded-full ${
                            idx === 0 ? 'bg-primary/20' : idx === 1 ? 'bg-accent/20' : 'bg-secondary/30'
                          } flex items-center justify-center`}>
                            <Flask className="text-slate-dark" size={24} />
                          </div>
                          <p className="text-xs font-semibold text-slate-dark">{category}</p>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary/20 text-center"
                    >
                      <CheckCircle className="inline-block text-primary mb-1" size={20} weight="fill" />
                      <p className="text-xs text-slate-dark/80">COA Available: Batch-Specific Certificate</p>
                    </motion.div>
                  </div>
                </div>
              )}

              {pillar.number === 4 && (
                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-slate-dark mb-3 flex items-center gap-2">
                    <Recycle className="text-primary" size={16} />
                    Planet-Aligned Lifecycle
                  </h5>
                  <div className="relative">
                    <motion.div 
                      className="w-full h-2 bg-gradient-to-r from-primary/20 via-accent/30 to-primary/20 rounded-full overflow-hidden"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.5, delay: 0.3 }}
                    >
                      <motion.div 
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      {['Cruelty-Free', 'Vegan', 'Bio-Actives', 'Refillable'].map((label, idx) => (
                        <motion.div
                          key={label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="text-center p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer"
                        >
                          <Heart className="mx-auto mb-1 text-primary" size={20} weight="duotone" />
                          <p className="text-[10px] font-semibold text-slate-dark">{label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {pillar.number === 5 && (
                <div className="mt-6">
                  <h5 className="text-sm font-semibold text-slate-dark mb-3 flex items-center gap-2">
                    <GitBranch className="text-primary" size={16} />
                    Promise Changelog
                  </h5>
                  <div className="space-y-3">
                    {[
                      { version: 'v2.0', change: 'Added endocrine-disruptor screening to all new raw materials', date: '2026' },
                      { version: 'v1.2', change: 'Microplastics fully phased out', date: '2025' },
                      { version: 'v1.0', change: 'Initial formulation standards established', date: '2024' }
                    ].map((log, idx) => (
                      <motion.div
                        key={log.version}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.15 }}
                        className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/40 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">
                            {log.version}
                          </Badge>
                          <span className="text-xs text-slate-dark/60">{log.date}</span>
                        </div>
                        <p className="text-sm text-slate-dark">{log.change}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function OurPromiseSection() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true })

  const pillars: PillarProps[] = [
    {
      icon: <Flask size={32} weight="duotone" />,
      number: 1,
      title: 'Clinical, Not Cosmetic',
      microHeadline: 'Pharmaceutical-Grade Validation',
      commitment: 'Pharmaceutical‑grade efficacy validated through controlled studies, in‑house testing, or peer‑reviewed ingredient data.',
      description: 'Every formulation undergoes rigorous clinical validation using pharmaceutical-grade actives. Our 8.0% MTRX-CBD concentration is among the highest in dermocosmetics, paired with proven actives like retinoids, peptides, and stabilized antioxidants. Results are documented through double-blind studies with instrumental measurements, not just subjective assessment.',
      features: [
        'Double-blind, placebo-controlled clinical trials with diverse participant pools',
        'Instrumental measurements: corneometry (hydration), chromometry (pigmentation), wrinkle depth analysis',
        'Third-party dermatologist validation and peer review',
        'Published efficacy data: wrinkle reduction up to 37%, hydration increase up to 64%',
        'Concentration transparency: exact percentages disclosed for all key actives'
      ],
      uiElements: [
        {
          type: 'data-rail',
          title: 'Data Rail Visualization',
          description: 'A horizontally scrolling "Data Rail" with glowing chips labeled with metrics like "Texture," "Redness," "Elasticity," each displaying percentage improvements from clinical trials. Tapping opens a glassmorphism card with micro-charts and plain-language summaries of study protocols.'
        },
        {
          type: 'clinical-summary',
          title: 'Study Protocol Cards',
          description: 'Each metric expands to show: "Double-blind split-face trial, n=32, peptide + CBD complex vs. base vehicle" with visual data representation.'
        }
      ]
    },
    {
      icon: <Leaf size={32} weight="duotone" />,
      number: 2,
      title: 'Clean by Design, Not by Marketing',
      microHeadline: 'Formulation Integrity',
      commitment: 'Formulations free from parabens, phthalates, formaldehyde donors, and volatile irritants; fragrance kept low or skipped where sensitivity risk is high.',
      description: 'Clean formulation is embedded in our development process, not a marketing afterthought. Every ingredient is screened against a comprehensive blacklist of endocrine disruptors, irritants, and environmental toxins. Our base formula itself is therapeutic—packed with active ingredients like Evening Primrose Oil, Shea Butter, and Panthenol—not water and cheap fillers.',
      features: [
        'Comprehensive blacklist: parabens, phthalates, formaldehyde donors, PEGs, sulfates',
        'Endocrine-disruptor screening for all raw materials',
        'Low or no fragrance in sensitivity-focused formulations',
        'Hypoallergenic testing on all finished products',
        'Active base formula: therapeutic matrix, not passive carrier',
        'pH-optimized for each active to maximize efficacy and minimize irritation'
      ],
      uiElements: [
        {
          type: 'molecule-gate',
          title: 'Molecule Gate Visualization',
          description: 'Dual-column interactive display: left column shows muted icons sliding into a grey vault labeled "Excluded" with hover reasons like "Endocrine concern." Right column shows softly glowing molecules drifting into a crystal chamber labeled "Approved" with safety dossier tags.'
        },
        {
          type: 'formulation-diagram',
          title: 'Base Formula Matrix',
          description: 'Interactive breakdown showing how the base itself contains therapeutic actives (Niacinamide, Panthenol, Vitamin E) rather than just water and fillers, justifying premium positioning.'
        }
      ]
    },
    {
      icon: <Eye size={32} weight="duotone" />,
      number: 3,
      title: 'Radical Transparency',
      microHeadline: 'Full Disclosure Standard',
      commitment: 'Full disclosure of ingredient origin, function, and concentration bands, plus third‑party CBD certificates of analysis accessible via QR.',
      description: 'Transparency is not a trend—it\'s our operating principle. Every product includes full INCI disclosure with concentration ranges for key actives. QR codes on packaging link to batch-specific Certificates of Analysis (COA) for our MTRX-CBD, showing purity, THC content (<0.3%), and third-party lab verification. We disclose what ingredients do, where they come from, and why they\'re included.',
      features: [
        'Full INCI disclosure with ingredient function explanations',
        'Concentration bands for all key actives (e.g., "8.0% MTRX-CBD," "0.3% Retinol")',
        'Batch-specific COAs accessible via QR code on packaging',
        'Third-party lab testing: purity, heavy metals, microbial contamination',
        'Ingredient origin transparency: sourcing from certified organic or biotech suppliers',
        'No "proprietary blend" hiding—every ingredient disclosed'
      ],
      uiElements: [
        {
          type: 'ingredient-lens',
          title: 'Interactive Ingredient Lens',
          description: 'Users drag a magnifier over product images; beneath the lens, zones reveal stacked, color-coded molecules (Actives in blue, Vehicle in green, Stabilizers in grey) with short tags like "Hexapeptide-10 – structural signal," "CBD isolate – homeostasis," "Ceramides – barrier matrix."'
        },
        {
          type: 'verification-badge',
          title: 'COA Verification Panel',
          description: 'Side panel animates a verification badge when batch-specific Certificate of Analysis is accessed, showing third-party lab seal and key metrics (purity %, THC content, heavy metals).'
        }
      ]
    },
    {
      icon: <Heart size={32} weight="duotone" />,
      number: 4,
      title: 'Humane & Planet‑Aligned',
      microHeadline: 'Ethical Supply Chain',
      commitment: 'Cruelty‑free, vegan whenever scientifically equivalent options exist, with a preference for biotechnological or upcycled sources. Recyclable or refillable packaging and a roadmap toward climate‑neutral operations.',
      description: 'Luxury beauty should not come at the cost of animal welfare or planetary health. We are certified cruelty-free (no animal testing at any stage) and formulate vegan options when science allows. Our MTRX-CBD is sourced from organic hemp grown using regenerative agriculture. Packaging uses post-consumer recycled materials and is designed for full recyclability. We offer refill options on hero products and are working toward carbon-neutral operations across our supply chain.',
      features: [
        'Certified cruelty-free: no animal testing at any production stage',
        'Vegan formulations where scientifically equivalent actives exist',
        'Organic hemp sourcing supporting regenerative agriculture practices',
        'Biotechnological actives (e.g., fermented peptides) reduce environmental impact',
        'Post-consumer recycled (PCR) packaging materials',
        'Refillable systems for hero products to reduce waste',
        'Carbon-neutral shipping options and supply chain optimization',
        '1% for the Planet partnership commitment'
      ],
      uiElements: [
        {
          type: 'globe-orbital',
          title: '3D Globe with Value Orbits',
          description: 'Rotating 3D line-art globe with orbital icons for "No Animal Testing," "Vegan," "Bio-engineered actives," and "Refill-Ready." Icons light up per product as users hover, creating a constellation of values.'
        },
        {
          type: 'lifecycle-bar',
          title: 'Lifecycle Impact Progress Bar',
          description: 'Slim progress bar labeled "Lifecycle Impact" that fills from grey to soft teal as user toggles refills, bulk sizes, or low-impact shipping, visualizing immediate sustainability choices.'
        }
      ]
    },
    {
      icon: <GitBranch size={32} weight="duotone" />,
      number: 5,
      title: 'Ethics Under Version Control',
      microHeadline: 'Living Standards',
      commitment: 'Public versioning of standards—when science evolves, the blacklist and benchmarks update, and changelogs are visible to users.',
      description: 'Our ethical standards are not static—they evolve as science advances. We treat our formulation ethics like software: versioned, documented, and publicly updated. When new research identifies a concerning ingredient or a better alternative emerges, we update our blacklist and reformulate if necessary. Every change is documented in our public Promise Changelog, showing which SKUs were affected and why. This living contract ensures we stay at the forefront of clean, ethical beauty science.',
      features: [
        'Public versioning system (v1.0, v1.2, v2.0) for ethical standards',
        'Promise Changelog published on website with time-stamped updates',
        'Reformulation transparency: SKUs affected and rationale disclosed',
        'Community input: users can suggest ingredients for review',
        'Annual third-party audit of compliance with stated standards',
        'Forward-looking: standards anticipate emerging science, not just react'
      ],
      uiElements: [
        {
          type: 'changelog-timeline',
          title: 'Promise Changelog Timeline',
          description: 'Timeline with time-stamped cards (v1.0, v1.1, v2.0) that slide into view with soft neon outlines. Each card shows concise notes like "v1.2 – Microplastics fully phased out," "v2.0 – Added endocrine-disruptor screening to all new raw materials."'
        },
        {
          type: 'sku-impact',
          title: 'SKU Impact Expansion',
          description: 'Users can expand cards to see which specific products were reformulated and why, with before/after ingredient comparisons, reinforcing the sense of a living, auditable standard.'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-primary/5 to-background">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background border-b border-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(65,154,193,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,163,175,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/40 text-sm px-4 py-1">
              Our Promise
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-dark mb-6">
              Future‑Proof Skincare,
              <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Zero Compromise
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-dark/80 leading-relaxed mb-8">
              SL Cosmetica's <strong>Our Promise</strong> is a living contract between lab, skin, and planet: 
              pharmaceutical‑grade actives, clinically verified outcomes, and radically transparent ethics 
              presented through a luminous, future‑lab interface.
            </p>

            <p className="text-base md:text-lg text-slate-dark/70 leading-relaxed max-w-3xl mx-auto">
              Each touchpoint—from micro‑animations to material choices—reinforces that every formula has 
              receipts, not just rhetoric.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Idea Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-card to-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-dark mb-6">
                The Promise Equation
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-dark/80 leading-relaxed mb-4">
                  Our Promise is built on a simple equation: <strong>if an ingredient does not improve skin 
                  health, formula stability, or environmental impact, it does not make it into the bottle.</strong>
                </p>
                <p className="text-slate-dark/80 leading-relaxed mb-4">
                  Clinical‑grade actives are selected on the same criteria used in pharmaceutical development—mechanism, 
                  dose, stability, and real‑world outcomes—then woven into clean vehicles that honor barrier biology 
                  and diverse LATAM phototypes.
                </p>
                <p className="text-slate-dark/80 leading-relaxed">
                  Every product carries a visible data trail. Dynamic labels surface key trial metrics, 
                  dermatologist‑reviewed endpoints, and full INCI breakdowns via scannable codes, transforming 
                  packaging into an interactive dossier rather than a static box. The result is a line that feels 
                  luxurious on contact yet behaves like a rigorously documented protocol: 
                  <strong> measurable improvement, minimal noise, and no ingredient theater.</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* The Five Pillars */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">
            Five Pillars of Our Living Contract
          </h2>
          <p className="text-lg text-slate-dark/70 max-w-3xl mx-auto">
            Each pillar represents a non-negotiable commitment, backed by transparency, 
            data, and interactive proof points that put control in your hands.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.number} pillar={pillar} index={index} />
          ))}
        </div>
      </div>

      {/* Closing Statement */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Card className="bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 border-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(65,154,193,0.1),transparent_70%)]" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <Sparkle className="mx-auto mb-6 text-primary" size={48} weight="duotone" />
              <h3 className="text-2xl md:text-3xl font-bold text-slate-dark mb-6">
                A Promise That Evolves
              </h3>
              <p className="text-lg text-slate-dark/80 leading-relaxed mb-6">
                This is not a static declaration—it's a living contract that grows with science, 
                responds to new research, and adapts to your feedback. Every version is documented, 
                every change is explained, and every product carries the full weight of these commitments.
              </p>
              <p className="text-base text-slate-dark/70 leading-relaxed">
                When you choose SL Cosmetica, you're not just buying skincare. You're investing in a 
                system of accountability, a tradition of clinical rigor, and a future where beauty 
                respects both biology and the planet.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
