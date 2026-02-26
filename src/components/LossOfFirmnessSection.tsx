import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { TrendDown, Drop, Sun, ArrowsDownUp, Sparkle, Lightning, Shield, Leaf } from '@phosphor-icons/react'
import { useState } from 'react'
import { useLanguage } from '../lib/LanguageContext'
import { mockProducts } from '../lib/mockData'

export function LossOfFirmnessSection({ onProductClick }: { onProductClick?: (product: typeof import('@/lib/mockData').mockProducts[0]) => void } = {}) {
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const { t } = useLanguage()

  const protocolProducts = [
    {
      id: 'mtrx-004',
      technicalName: 'CBD + Polypéptidos',
      narrativeName: t('product.mtrx004'),
      shortCopy: {
        en: 'Peptide complex that helps support collagen and elastin, so skin looks more lifted and firm.',
        es: 'Complejo de péptidos que ayuda a apoyar el colágeno y la elastina, para que la piel se vea más levantada y firme.'
      },
      tags: [
        { en: 'Collagen Support', es: 'Soporte de Colágeno' },
        { en: 'Firmness', es: 'Firmeza' },
        { en: 'Contour', es: 'Contorno' }
      ]
    },
    {
      id: 'mtrx-002',
      technicalName: 'CBD + Retinol',
      narrativeName: t('product.mtrx002'),
      shortCopy: {
        en: 'Retinol-powered renewal that helps improve texture and supports visible skin tightening over time.',
        es: 'Renovación impulsada por retinol que ayuda a mejorar la textura y favorece el tensado visible de la piel con el tiempo.'
      },
      tags: [
        { en: 'Retinol Renewal', es: 'Renovación con Retinol' },
        { en: 'Texture', es: 'Textura' },
        { en: 'Fine Lines', es: 'Líneas Finas' }
      ]
    },
    {
      id: 'mtrx-010',
      technicalName: 'CBD + Ácido Hialurónico',
      narrativeName: t('product.mtrx010'),
      shortCopy: {
        en: 'Intense hydration and plumping to reduce the look of laxity and fine lines linked to dehydration.',
        es: 'Hidratación intensa y efecto voluminizador para reducir la apariencia de laxitud y líneas finas relacionadas con la deshidratación.'
      },
      tags: [
        { en: 'Deep Hydration', es: 'Hidratación Profunda' },
        { en: 'Plumping', es: 'Voluminizador' },
        { en: 'Elasticity', es: 'Elasticidad' }
      ]
    },
    {
      id: 'mtrx-001',
      technicalName: 'Crema Base MTRX-CBD 8.0%',
      narrativeName: t('product.mtrx001'),
      shortCopy: {
        en: 'Calms the look of irritation and supports barrier repair, creating a stable base for nightly firming actives.',
        es: 'Calma la apariencia de irritación y apoya la reparación de la barrera, creando una base estable para activos reafirmantes nocturnos.'
      },
      tags: [
        { en: 'Barrier Support', es: 'Soporte de Barrera' },
        { en: 'Calming', es: 'Calmante' },
        { en: 'TEWL Control', es: 'Control TEWL' }
      ]
    }
  ]

  const causes = [
    {
      id: 'collagen-loss',
      icon: <TrendDown className="w-8 h-8" />,
      title: 'Collagen & Elastin Network Collapse',
      subtitle: 'The Scaffold Weakens',
      description: 'Collagen and elastin form the three-dimensional support structure of skin. As production declines and enzymatic degradation accelerates, this scaffold weakens—skin sags, jowls form, and contours blur.',
      details: 'Collagen I provides tensile strength; collagen III provides elasticity; elastin allows recoil. Together they form a complex network that keeps skin taut and lifted. Starting in the late 20s, fibroblast activity slows while matrix metalloproteinases (MMPs) ramp up, breaking down the matrix faster than it\'s replaced. The dermal architecture literally collapses, creating laxity, sagging, and loss of definition.',
      mechanism: [
        'Collagen I and III production declines 1-1.5% per year after age 25',
        'Elastin fragmentation reduces skin\'s ability to snap back after movement',
        'MMPs (especially MMP-1, MMP-3) degrade existing matrix faster than it\'s rebuilt',
        'Loss of dermal thickness: dermis thins by ~6% per decade',
        'Three-dimensional scaffold collapse leads to gravitational descent and sagging'
      ],
      gradient: 'from-[oklch(0.65_0.14_30)] to-[oklch(0.55_0.12_20)]'
    },
    {
      id: 'fat-volume-loss',
      icon: <Drop className="w-8 h-8" />,
      title: 'Subcutaneous Volume Depletion',
      subtitle: 'The Padding Disappears',
      description: 'Facial fat pads provide volume and support that keep skin taut. With age, these pads atrophy and descend, creating hollows, jowls, and a deflated appearance.',
      details: 'The face contains distinct fat compartments: malar (cheek), buccal (mid-face), nasolabial, and others. These aren\'t uniformly distributed—they\'re architectural, providing strategic volume and support. With aging, fat pads shrink (lipoatrophy) and shift downward due to gravity and ligament laxity. The result: volume loss in upper face (temples, cheeks) and accumulation in lower face (jowls, under chin).',
      mechanism: [
        'Facial fat compartments atrophy at different rates, disrupting balance',
        'Deep fat loss creates skeletal appearance; superficial fat descent creates jowls',
        'Temple and cheek hollowing makes upper face appear gaunt',
        'Fat accumulation in lower face (jowls, marionette lines) from gravitational descent',
        'Loss of structural support allows skin to drape rather than stretch taut'
      ],
      gradient: 'from-[oklch(0.70_0.12_200)] to-[oklch(0.60_0.10_210)]'
    },
    {
      id: 'bone-resorption',
      icon: <ArrowsDownUp className="w-8 h-8" />,
      title: 'Bone Resorption & Structural Loss',
      subtitle: 'The Foundation Erodes',
      description: 'Facial bones are the foundation for all soft tissue. Bone resorption—especially in the maxilla, mandible, and orbital rim—removes the structural platform that keeps skin lifted.',
      details: 'Bone isn\'t static. The facial skeleton undergoes continuous remodeling, and with age, resorption outpaces formation. The maxilla (upper jaw) retracts, the mandible (lower jaw) shortens, orbital apertures enlarge, and the pyriform aperture (nose opening) expands. These changes remove the bony support that once kept skin taut, causing it to drape and sag.',
      mechanism: [
        'Maxillary resorption causes mid-face volume loss and nasolabial deepening',
        'Mandibular resorption shortens lower face, creating jowls and loss of jawline',
        'Orbital rim expansion creates periorbital hollowing and under-eye bags',
        'Pyriform aperture enlargement contributes to nasolabial fold deepening',
        'Loss of bony support means skin has less foundation to stretch over'
      ],
      gradient: 'from-[oklch(0.60_0.14_270)] to-[oklch(0.50_0.12_260)]'
    },
    {
      id: 'gravity-oxidation',
      icon: <Sun className="w-8 h-8" />,
      title: 'Gravity & Oxidative Damage',
      subtitle: 'The Relentless Pull',
      description: 'Gravity pulls continuously on aging skin. When collagen and elastin are robust, skin resists. When weakened by oxidative stress and UV damage, skin surrenders—sagging becomes inevitable.',
      details: 'Gravity exerts constant downward force. Young skin\'s robust matrix resists this pull. But as UV exposure generates free radicals, oxidative stress triggers MMP activation and collagen fragmentation. Inflammation from sun damage, pollution, and lifestyle factors compounds the problem. The weakened matrix can no longer resist gravity—tissue descends, creating jowls, neck laxity, and blurred contours.',
      mechanism: [
        'UV-generated ROS fragment collagen and elastin fibers',
        'Oxidative stress upregulates MMPs that degrade structural proteins',
        'Chronic inflammation (inflammaging) accelerates matrix breakdown',
        'Weakened matrix loses tensile strength, yielding to gravitational pull',
        'Cumulative damage creates progressive descent and laxity'
      ],
      gradient: 'from-[oklch(0.75_0.16_60)] to-[oklch(0.65_0.14_50)]'
    }
  ]

  const treatmentStrategies = [
    {
      id: 'peptides',
      icon: <Lightning className="w-8 h-8" />,
      title: 'Matrixyl 3000: Matrix Reconstruction',
      description: 'This peptide complex mimics collagen breakdown fragments, signaling fibroblasts to ramp up collagen I, III, IV, elastin, and hyaluronic acid production.',
      details: 'Matrixyl 3000 (palmitoyl oligopeptide + palmitoyl tetrapeptide-7) is the most clinically validated peptide for firmness. By mimicking matrix degradation signals, it "tricks" fibroblasts into repair mode. Studies show significant increases in collagen production, elastin synthesis, and hyaluronic acid—all critical for restoring dermal density and skin tautness.',
      mechanisms: [
        'Mimics collagen breakdown to activate fibroblast repair response',
        'Increases collagen I production by up to 350% (in vitro studies)',
        'Boosts collagen III, IV, and elastin for comprehensive matrix reinforcement',
        'Stimulates glycosaminoglycan (GAG) synthesis, including hyaluronic acid',
        'Reduces IL-6 inflammation that degrades newly formed collagen',
        'Clinical studies: 23-32% improvement in wrinkle depth and skin tone'
      ],
      gradient: 'from-[oklch(0.70_0.14_290)] to-[oklch(0.60_0.18_270)]'
    },
    {
      id: 'retinoids',
      icon: <Sparkle className="w-8 h-8" />,
      title: 'Retinoids: Collagen Upregulation',
      description: 'Retinoids are the most evidence-backed topical for firmness. They upregulate collagen genes, inhibit MMPs, and improve dermal thickness.',
      details: 'Retinoids (retinol, retinaldehyde, retinoic acid) bind to nuclear retinoic acid receptors (RARs) to activate genes responsible for collagen synthesis while suppressing MMP-1 (the primary collagen-degrading enzyme). This dual action—building new matrix while protecting existing structure—makes retinoids unmatched for improving firmness. Encapsulation + CBD buffering ensures tolerance.',
      mechanisms: [
        'Upregulates collagen I and III gene expression via RAR activation',
        'Inhibits MMP-1 (collagenase) to protect existing collagen matrix',
        'Increases dermal thickness by stimulating fibroblast proliferation',
        'Normalizes elastic fiber formation, improving skin elasticity',
        'CBD + encapsulation reduces irritation, allowing consistent high-dose use',
        'Visible firming at 12 weeks; continued improvement over 6-12 months'
      ],
      gradient: 'from-[oklch(0.65_0.12_200)] to-[oklch(0.50_0.12_230)]'
    },
    {
      id: 'antioxidants',
      icon: <Shield className="w-8 h-8" />,
      title: 'CBD + Antioxidant Shield',
      description: 'MTRX-CBD, Vitamin C, ferulic acid, and resveratrol form a protective network that prevents the oxidative damage driving collagen loss and sagging.',
      details: 'You can\'t out-build oxidative damage. Antioxidants are essential for preventing the free radical cascade that upregulates MMPs and fragments collagen. CBD provides potent antioxidant activity while modulating inflammation. Vitamin C inhibits MMPs and boosts collagen synthesis. Ferulic acid stabilizes both, multiplying photoprotection. Together, they preserve the matrix you\'re rebuilding.',
      mechanisms: [
        'CBD neutralizes ROS with greater potency than Vitamins C or E',
        'Vitamin C inhibits MMP-1 and stimulates procollagen synthesis',
        'Ferulic acid stabilizes C and E, doubling photoprotection',
        'Resveratrol activates sirtuins (longevity proteins) that enhance fibroblast function',
        'Combined antioxidants prevent UV-induced MMP upregulation',
        'Protects newly synthesized collagen from immediate oxidative degradation'
      ],
      gradient: 'from-[oklch(0.75_0.15_50)] to-[oklch(0.65_0.13_40)]'
    },
    {
      id: 'growth-factors',
      icon: <Leaf className="w-8 h-8" />,
      title: 'Plant Stem Cells & Growth Factors',
      description: 'Bio-engineered growth factors and plant stem cell extracts stimulate fibroblast activity and enhance skin\'s intrinsic repair mechanisms.',
      details: 'Growth factors (EGF, TGF-β, VEGF) are signaling proteins that regulate cellular behavior. Topical application—especially when combined with plant stem cell extracts rich in metabolites—can stimulate fibroblast proliferation, collagen synthesis, and angiogenesis. While less potent than prescription treatments, they provide gentle, sustained support for firmness improvement.',
      mechanisms: [
        'EGF (epidermal growth factor) stimulates keratinocyte and fibroblast proliferation',
        'TGF-β enhances collagen and elastin production',
        'Plant stem cells provide metabolites that protect skin stem cells',
        'Supports endogenous repair mechanisms and cellular longevity',
        'Gentle approach suitable for sensitive skin unable to tolerate retinoids',
        'Best combined with peptides for comprehensive matrix support'
      ],
      gradient: 'from-[oklch(0.60_0.12_150)] to-[oklch(0.50_0.10_170)]'
    }
  ]

  const timeline = [
    {
      week: 'Week 2-4',
      title: 'Inflammation Reduction & Barrier Strengthening',
      description: 'CBD calms inflammation, antioxidants begin neutralizing daily oxidative stress, skin feels more resilient.',
      percentage: 20
    },
    {
      week: 'Week 4-8',
      title: 'Matrix Activation Phase',
      description: 'Retinoids and peptides activate fibroblasts, collagen gene expression increases, MMP activity decreases.',
      percentage: 40
    },
    {
      week: 'Week 8-16',
      title: 'Structural Deposition',
      description: 'New collagen, elastin, and GAGs deposit in dermis, skin begins feeling firmer, subtle lift becomes visible.',
      percentage: 65
    },
    {
      week: 'Week 16+',
      title: 'Remodeling & Continued Improvement',
      description: 'Ongoing matrix remodeling, jawline definition improves, jowls soften, results compound over 6-12 months.',
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
              STRUCTURAL AGING
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-dark mb-6">
              Loss of Firmness
            </h1>
            <p className="text-lg sm:text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Loss of firmness is multi-layered: collagen degradation, fat volume loss, bone resorption, and gravitational descent all contribute. Topical treatments address the collagen layer—the most accessible and responsive to intervention.
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
                  Topical Firming Protocol
                </h2>
                <p className="text-center text-gray-medium mb-8 max-w-3xl mx-auto">
                  While injectables address volume and bone loss, topical treatments can meaningfully rebuild the collagen-elastin matrix. Our protocol combines the most evidence-backed actives for measurable firmness improvement.
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
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-br from-white to-sand-light border-border shadow-lg">
              <CardContent className="p-8 sm:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4">
                    {t('language') === 'es' 
                      ? 'Protocolo de Firmeza y Elevación – Soporte Estructural MTRX-CBD'
                      : 'Firmness & Lift Protocol – MTRX-CBD Structural Support'}
                  </h2>
                  <p className="text-gray-medium max-w-4xl mx-auto leading-relaxed">
                    {t('language') === 'es'
                      ? 'Combine el soporte estructural impulsado por péptidos, la renovación con retinol y la hidratación profunda sobre una barrera estabilizada para abordar los impulsores visibles de la pérdida de firmeza.'
                      : 'Combine peptide-driven structural support, retinol renewal, and deep hydration on a stabilized barrier to address the visible drivers of loss of firmness.'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {protocolProducts.map((product, idx) => {
                    const fullProduct = mockProducts.find(p => p.id === product.id)
                    
                    return (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + idx * 0.1, duration: 0.4 }}
                      >
                        <Card 
                          className="h-full hover:shadow-xl transition-all duration-300 border-border bg-white cursor-pointer hover:border-primary/30"
                          onClick={() => fullProduct && onProductClick?.(fullProduct)}
                        >
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="mb-4">
                              <h3 className="text-lg font-bold text-slate-dark mb-1">
                                {product.narrativeName}
                              </h3>
                              <p className="text-xs text-primary font-semibold">
                                {product.technicalName}
                              </p>
                            </div>
                            
                            <p className="text-sm text-gray-medium leading-relaxed mb-4 flex-grow">
                              {t('language') === 'es' ? product.shortCopy.es : product.shortCopy.en}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                              {product.tags.map((tag, i) => (
                                <Badge 
                                  key={i}
                                  variant="secondary"
                                  className="text-xs bg-secondary/50 text-secondary-foreground hover:bg-secondary/70"
                                >
                                  {t('language') === 'es' ? tag.es : tag.en}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Card>
              <CardContent className="p-8 sm:p-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-8 text-center">
                  Firming Timeline
                </h2>
                <p className="text-center text-gray-medium mb-8 text-sm max-w-2xl mx-auto">
                  Firmness improvement is gradual—collagen synthesis takes time. Patience and consistency are essential. Results become visible at 8-12 weeks and continue improving for 6-12 months.
                </p>
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
        </motion.div>
      </div>
    </div>
  )
}
