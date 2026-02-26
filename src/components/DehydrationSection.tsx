import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Drop, Wind, Gauge, AirplaneTilt, Buildings, Sun, Mountains, Sparkle, Lightning, ShieldCheck } from '@phosphor-icons/react'
import { Product } from '@/lib/types'
import { mockProducts } from '@/lib/mockData'

interface DehydrationSectionProps {
  onProductClick?: (product: Product) => void
}

export function DehydrationSection({ onProductClick }: DehydrationSectionProps) {
  const [activeProduct, setActiveProduct] = useState<string | null>(null)
  const [activeClimate, setActiveClimate] = useState<string | null>(null)
  const [showTEWL, setShowTEWL] = useState(false)

  const products = [
    {
      id: 'mtrx-010',
      name: 'The Rainmaker',
      subtitle: 'Multi-Layer Hydration Serum',
      description: 'Multi-weight hyaluronic acid, glycerin, and other humectants draw water into surface and deeper epidermal layers, delivering immediate plumpness and longer-term hydration while supporting elasticity and reducing TEWL.',
      mechanism: 'Creates 3D hydration architecture across all epidermal strata',
      icon: Drop,
      color: 'from-cyan-500/20 to-blue-500/20',
      ringColor: 'ring-cyan-500/30'
    },
    {
      id: 'mtrx-001',
      name: 'The Great Harmonizer',
      subtitle: 'Barrier + Calm Complex with Niacinamide',
      description: 'Contains niacinamide and barrier-supportive lipids to rebuild ceramide stores, reinforce the stratum corneum, and calm the micro-inflammation that often accompanies chronic dehydration.',
      mechanism: 'Rebuilds lipid mortar and reduces barrier-weakening inflammation',
      icon: ShieldCheck,
      color: 'from-teal-500/20 to-emerald-500/20',
      ringColor: 'ring-teal-500/30'
    },
    {
      id: 'mtrx-012',
      name: 'The Immortal',
      subtitle: 'Occlusive-Light Shield',
      description: 'A breathable lipid veil that locks in humectant water without feeling greasy or comedogenic, ideal for AC-heavy offices, airplane cabins, and high-altitude environments.',
      mechanism: 'Seals moisture barrier while maintaining breathability',
      icon: ShieldCheck,
      color: 'from-indigo-500/20 to-purple-500/20',
      ringColor: 'ring-indigo-500/30'
    }
  ]

  const handleProductClick = (productId: string) => {
    if (onProductClick) {
      const product = mockProducts.find(p => p.id === productId)
      if (product) {
        onProductClick(product)
      }
    }
  }

  const climateStressors = [
    { id: 'ac', name: 'AC Office', icon: Buildings, description: 'Increase Rainmaker layers + The Immortal at night' },
    { id: 'altitude', name: 'Altitude Flight', icon: AirplaneTilt, description: 'Triple hydration protocol + occlusive barrier' },
    { id: 'urban', name: 'Urban Heat', icon: Sun, description: 'Lightweight humectants + barrier reinforcement' },
    { id: 'dry', name: 'Dry Season', icon: Wind, description: 'Maximum ceramides + multi-weight HA' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="relative overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 border-b border-cyan-200/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-700 border-cyan-500/30 px-6 py-2 text-sm font-semibold">
              SKIN CONDITION
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-dark mb-6 tracking-tight">
              DEHYDRATION
            </h1>
            
            <p className="text-2xl md:text-3xl text-cyan-700 font-semibold mb-8">
              3D Hydration, Not Just Shine
            </p>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-slate-dark/80 leading-relaxed mb-6">
                DEHYDRATION treats skin as water-starved, not merely "dry"—even oily complexions can be depleted when transepidermal water loss (TEWL) outpaces hydration. The aim is layered replenishment and barrier repair so skin holds water at every level and stays resilient in AC, altitude, and urban heat.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-dark mb-8 text-center">
              Understanding Dehydration
            </h2>
            
            <div className="prose prose-lg max-w-none text-slate-dark/80 space-y-6">
              <p className="text-lg leading-relaxed">
                Dehydrated skin shows up as tightness, dullness, and fine "crinkle" lines that deepen by evening, regardless of how much oil is on the surface. Low humidity, constant air-conditioning, long flights, and high-altitude cities across LATAM accelerate TEWL, while harsh foaming cleansers and over-exfoliation strip the lipids that normally slow evaporation. When the water matrix collapses, actives like retinoids and acids sting more, redness lingers longer, and texture looks rough as desquamation becomes irregular.
              </p>

              <p className="text-lg leading-relaxed">
                The DEHYDRATION protocol views hydration as architecture. Multi-weight hyaluronic acid and other humectants pull water into different strata of the epidermis; ceramides and lipids rebuild the "mortar" that keeps that water from leaking out; and CBD-backed soothing reduces the low-grade inflammation that often accompanies chronic dryness or over-treatment. The result is skin that feels bouncy and elastic again, reflects light cleanly, and tolerates sophisticated routines without the constant background burn.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              Hydration Cross-Section Scanner
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/30 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="relative aspect-square">
                      <svg viewBox="0 0 300 300" className="w-full h-full">
                        <defs>
                          <linearGradient id="dehydratedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#64748b" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#475569" stopOpacity="0.6" />
                          </linearGradient>
                          <linearGradient id="hydratedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.9" />
                          </linearGradient>
                        </defs>

                        <AnimatePresence mode="wait">
                          {!activeProduct ? (
                            <g key="dehydrated">
                              <motion.circle
                                cx="150" cy="70" r="50"
                                fill="url(#dehydratedGrad)"
                                stroke="#94a3b8" strokeWidth="2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              />
                              <motion.path
                                d="M 130 70 L 120 50 M 150 70 L 150 45 M 170 70 L 180 50"
                                stroke="#ef4444"
                                strokeWidth="2"
                                strokeDasharray="4 2"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ 
                                  pathLength: 1, 
                                  opacity: [0.5, 1, 0.5],
                                  y: [-5, 0, -5]
                                }}
                                transition={{ 
                                  pathLength: { duration: 1 },
                                  opacity: { duration: 2, repeat: Infinity },
                                  y: { duration: 2, repeat: Infinity }
                                }}
                              />
                              <text x="150" y="35" fill="#94a3b8" fontSize="10" textAnchor="middle">TEWL ↑</text>

                              <motion.circle
                                cx="150" cy="150" r="60"
                                fill="url(#dehydratedGrad)"
                                stroke="#94a3b8" strokeWidth="2"
                                strokeDasharray="5 5"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              />

                              <motion.circle
                                cx="150" cy="230" r="55"
                                fill="url(#dehydratedGrad)"
                                stroke="#94a3b8" strokeWidth="2"
                                strokeDasharray="8 8"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                              />

                              <text x="20" y="75" fill="#94a3b8" fontSize="11">Surface</text>
                              <text x="20" y="155" fill="#94a3b8" fontSize="11">Mid</text>
                              <text x="20" y="235" fill="#94a3b8" fontSize="11">Deep</text>
                            </g>
                          ) : (
                            <g key="hydrated">
                              <motion.circle
                                cx="150" cy="70" r="50"
                                fill="url(#hydratedGrad)"
                                stroke="#06b6d4" strokeWidth="2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, type: "spring" }}
                              />
                              
                              {[...Array(8)].map((_, i) => (
                                <motion.circle
                                  key={`drop-${i}`}
                                  cx={150 + (i % 3 - 1) * 15}
                                  cy={30}
                                  r="3"
                                  fill="#06b6d4"
                                  initial={{ y: -20, opacity: 0 }}
                                  animate={{ 
                                    y: [0, 40, 80, 120, 160],
                                    opacity: [0, 1, 1, 1, 0]
                                  }}
                                  transition={{ 
                                    duration: 2,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                    repeatDelay: 1
                                  }}
                                />
                              ))}

                              <motion.circle
                                cx="150" cy="150" r="60"
                                fill="url(#hydratedGrad)"
                                stroke="#06b6d4" strokeWidth="2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                              />

                              <motion.circle
                                cx="150" cy="230" r="55"
                                fill="url(#hydratedGrad)"
                                stroke="#06b6d4" strokeWidth="2"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
                              />

                              <text x="20" y="75" fill="#06b6d4" fontSize="11" fontWeight="600">Surface</text>
                              <text x="20" y="155" fill="#06b6d4" fontSize="11" fontWeight="600">Mid</text>
                              <text x="20" y="235" fill="#06b6d4" fontSize="11" fontWeight="600">Deep</text>
                            </g>
                          )}
                        </AnimatePresence>
                      </svg>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-cyan-400 text-sm font-medium">
                        {activeProduct ? '3D Hydration Active' : 'Dehydrated State - TEWL Active'}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                {products.map((product, idx) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Card 
                      className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                        activeProduct === product.id 
                          ? `bg-gradient-to-r ${product.color} border-2 ${product.ringColor} shadow-lg` 
                          : 'bg-white hover:bg-slate-50'
                      }`}
                      onMouseEnter={() => setActiveProduct(product.id)}
                      onMouseLeave={() => setActiveProduct(null)}
                      onClick={() => handleProductClick(product.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${activeProduct === product.id ? 'bg-white/50' : 'bg-gradient-to-br from-cyan-100 to-blue-100'}`}>
                            <product.icon size={28} weight="duotone" className={activeProduct === product.id ? 'text-cyan-600' : 'text-slate-600'} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-slate-dark mb-1">
                              {product.name}
                            </h4>
                            <p className="text-sm text-primary font-medium mb-2">
                              {product.subtitle}
                            </p>
                            <p className="text-sm text-slate-dark/70 leading-relaxed">
                              {product.description}
                            </p>
                            {activeProduct === product.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-3 pt-3 border-t border-cyan-200"
                              >
                                <p className="text-xs text-cyan-700 font-medium">
                                  <Sparkle size={14} weight="duotone" className="inline mr-1" />
                                  {product.mechanism}
                                </p>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              Causes of Dehydration
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Accelerated TEWL',
                  description: 'Low humidity, wind, and AC pull water out of the stratum corneum faster than it can be replaced.',
                  icon: Wind,
                  color: 'from-cyan-500 to-blue-500'
                },
                {
                  title: 'Lipid Depletion',
                  description: 'Insufficient ceramides, cholesterol, and fatty acids in the barrier allow moisture to escape and irritants to penetrate.',
                  icon: ShieldCheck,
                  color: 'from-teal-500 to-emerald-500'
                },
                {
                  title: 'Over-Cleansing & Over-Exfoliating',
                  description: 'Strong surfactants and frequent acids remove NMF (natural moisturizing factors), leaving skin tight and reactive.',
                  icon: Lightning,
                  color: 'from-orange-500 to-red-500'
                },
                {
                  title: 'Altitude & Climate Stress',
                  description: 'High elevations and strong UV in parts of LATAM compound dryness, sensitivity, and micro-inflammation.',
                  icon: Mountains,
                  color: 'from-purple-500 to-indigo-500'
                }
              ].map((cause, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-white to-slate-50 hover:shadow-xl transition-all duration-300 border-slate-200">
                    <CardContent className="p-6">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${cause.color} mb-4`}>
                        <cause.icon size={28} weight="duotone" className="text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-dark mb-3">
                        {cause.title}
                      </h4>
                      <p className="text-slate-dark/70 leading-relaxed">
                        {cause.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              Clinical Manifestations
            </h3>
            
            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {[
                    'Fine "accordion" lines, especially around eyes and mouth, that soften after hydrating layers',
                    'Overall dullness and reduced light bounce, even when skin is not matte',
                    'Feeling of tightness or roughness after cleansing or being in AC',
                    'Burning or stinging when applying strong serums, despite normal or oily skin'
                  ].map((manifestation, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 p-1 rounded-full bg-cyan-500/20">
                        <Drop size={16} weight="fill" className="text-cyan-600" />
                      </div>
                      <p className="text-slate-dark/80 leading-relaxed flex-1">
                        {manifestation}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              Climate Stress Dashboard
            </h3>
            
            <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/30">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {climateStressors.map((climate) => (
                    <Button
                      key={climate.id}
                      variant={activeClimate === climate.id ? "default" : "outline"}
                      className={`h-auto py-4 flex-col gap-2 ${
                        activeClimate === climate.id 
                          ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                      onClick={() => setActiveClimate(activeClimate === climate.id ? null : climate.id)}
                    >
                      <climate.icon size={24} weight="duotone" />
                      <span className="text-xs font-medium">{climate.name}</span>
                    </Button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {activeClimate && (
                    <motion.div
                      key={activeClimate}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="bg-slate-800/50 rounded-xl p-6 border border-cyan-500/30"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-cyan-500/20">
                          {(() => {
                            const ClimateIcon = climateStressors.find(c => c.id === activeClimate)?.icon
                            return ClimateIcon ? <ClimateIcon size={32} weight="duotone" className="text-cyan-400" /> : null
                          })()}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-cyan-400 mb-2">
                            Protocol Adaptation
                          </h4>
                          <p className="text-slate-300 leading-relaxed">
                            {climateStressors.find(c => c.id === activeClimate)?.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {!activeClimate && (
                  <p className="text-center text-slate-400 text-sm">
                    Select a climate condition to see protocol recommendations
                  </p>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              TEWL Speedometer
            </h3>
            
            <div className="max-w-2xl mx-auto">
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-cyan-500/30">
                <CardContent className="p-12">
                  <div className="relative aspect-square max-w-md mx-auto">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <linearGradient id="gaugeRed" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#ef4444" />
                          <stop offset="100%" stopColor="#f97316" />
                        </linearGradient>
                        <linearGradient id="gaugeGreen" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#10b981" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>

                      <motion.path
                        d="M 30 150 A 70 70 0 0 1 170 150"
                        fill="none"
                        stroke={showTEWL ? "url(#gaugeGreen)" : "url(#gaugeRed)"}
                        strokeWidth="20"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />

                      <motion.line
                        x1="100" y1="100"
                        x2="100" y2="40"
                        stroke="#94a3b8"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ rotate: showTEWL ? 0 : -60 }}
                        animate={{ rotate: showTEWL ? 60 : -60 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ transformOrigin: '100px 100px' }}
                      />

                      <circle cx="100" cy="100" r="8" fill="#f1f5f9" />

                      <text x="30" y="170" fill="#ef4444" fontSize="12" fontWeight="600">High</text>
                      <text x="160" y="170" fill="#10b981" fontSize="12" fontWeight="600" textAnchor="end">Balanced</text>
                    </svg>
                  </div>

                  <div className="text-center mt-8 space-y-4">
                    <motion.p
                      key={showTEWL ? 'controlled' : 'high'}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-2xl font-bold ${showTEWL ? 'text-green-400' : 'text-red-400'}`}
                    >
                      {showTEWL ? 'Controlled TEWL' : 'High TEWL'}
                    </motion.p>

                    <Button
                      onClick={() => setShowTEWL(!showTEWL)}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white"
                    >
                      <Gauge size={18} weight="duotone" className="mr-2" />
                      {showTEWL ? 'Reset Protocol' : 'Activate Protocol'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-200">
              <CardContent className="p-8 md:p-12 text-center">
                <Sparkle size={48} weight="duotone" className="text-cyan-600 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-dark mb-4">
                  The Water Under the Skin
                </h3>
                <p className="text-lg text-slate-dark/80 leading-relaxed max-w-3xl mx-auto">
                  DEHYDRATION restores the feeling of "water under the skin"—that quiet, cushiony bounce that makes every other step in your routine glide, absorb, and perform better.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
