import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Flame, ThermometerHot, Drop, Wind, Wine, Barbell, Brain, Flask, ShieldCheck } from '@phosphor-icons/react'
import { Product } from '@/lib/types'

interface RosaceaSectionProps {
  onProductClick?: (product: Product) => void
}

export function RosaceaSection({ onProductClick }: RosaceaSectionProps) {
  const [activeTrigger, setActiveTrigger] = useState<string | null>(null)
  const [activeProduct, setActiveProduct] = useState<string | null>(null)

  const triggers = [
    { id: 'sun', name: 'Sun', icon: ThermometerHot, effect: 'instant flush via vasodilation' },
    { id: 'heat', name: 'Heat', icon: Flame, effect: 'vessels over-dilate, prolonged redness' },
    { id: 'cold', name: 'Cold', icon: Wind, effect: 'reactive flush on re-warming' },
    { id: 'spicy', name: 'Spicy Food', icon: Flask, effect: 'internal heat spike triggers cascade' },
    { id: 'alcohol', name: 'Alcohol', icon: Wine, effect: 'systemic vasodilation, lingering warmth' },
    { id: 'exercise', name: 'Exercise', icon: Barbell, effect: 'increased blood flow, flushing' },
    { id: 'stress', name: 'Stress', icon: Brain, effect: 'neurogenic inflammation amplification' },
    { id: 'products', name: 'Products', icon: Drop, effect: 'barrier breach, stinging & burning' }
  ]

  const products = [
    {
      id: 'harmonizer',
      productId: 'mtrx-001',
      name: 'The Great Harmonizer',
      subtitle: 'CBD + Niacinamide Calm Complex',
      description: 'Central soothing layer that targets both inflammation and balance; CBD and related actives help down-shift neurogenic burning and redness, while niacinamide supports barrier lipids, reduces TEWL, and strengthens the skin against everyday triggers.',
      mechanism: 'Neuromodulation + barrier reinforcement',
      icon: ShieldCheck,
      color: 'from-violet-500/20 to-blue-500/20',
      ringColor: 'ring-violet-500/30'
    },
    {
      id: 'immortal',
      productId: 'mtrx-009',
      name: 'The Immortal',
      subtitle: 'Barrier Recovery Cream',
      description: 'Ceramide-rich, fragrance-free emulsion that rebuilds the stratum corneum "armor," reduces dryness and stinging, and serves as the buffer layer under any active serums or prescription rosacea medications.',
      mechanism: 'Rebuilds compromised barrier integrity',
      icon: ShieldCheck,
      color: 'from-teal-500/20 to-emerald-500/20',
      ringColor: 'ring-teal-500/30'
    }
  ]

  const handleProductCardClick = (productId: string | null) => {
    if (!productId || !onProductClick) return
    
    import('@/lib/mockData').then(({ mockProducts }) => {
      const product = mockProducts.find(p => p.id === productId)
      if (product) {
        onProductClick(product)
      }
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-blue-50 to-teal-50 border-b border-violet-200/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-violet-500/10 text-violet-700 border-violet-500/30 px-6 py-2 text-sm font-semibold">
              SKIN CONDITION
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-dark mb-6 tracking-tight">
              ROSACEA
            </h1>
            
            <p className="text-2xl md:text-3xl text-violet-700 font-semibold mb-8">
              Turn Down the Flush, Keep the Life
            </p>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-slate-dark/80 leading-relaxed mb-6">
                ROSACEA is a chronic neurovascular and inflammatory condition, not "just sensitive skin," where vessels over-react and the immune system over-responds to everyday triggers like heat, stress, and products. The aim is to cool that circuitry, rebuild the barrier, and give flushed, sting-prone faces a way back into active skincare without constant flare-ups.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Understanding Section */}
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
              Understanding Rosacea
            </h2>
            
            <div className="prose prose-lg max-w-none text-slate-dark/80 space-y-6">
              <p className="text-lg leading-relaxed">
                Rosacea typically shows up as persistent redness across the cheeks, nose, and mid-face, with episodes of intense flushing, visible capillaries, and acne-like bumps that burn or sting instead of feeling like traditional breakouts. Underneath, there is heightened neurovascular reactivity and an exaggerated innate immune response, so common exposures—sun, temperature swings, spicy food, alcohol, emotional stress, vigorous exercise—can trigger a cascade that keeps vessels dilated and skin inflamed.
              </p>

              <p className="text-lg leading-relaxed">
                Over-cleansing, scrubs, and fragrance-heavy formulas then strip an already fragile barrier, making the surface dry, tight, and reactive to even "gentle" actives. The ROSACEA protocol is built around nervous-system-aware calm and strict trigger minimalism. CBD and other neuromodulating botanicals work alongside barrier lipids and niacinamide to quiet burning and stinging, reduce visible redness, and strengthen the stratum corneum so it stops over-reacting to every new product.
              </p>

              <p className="text-lg leading-relaxed">
                Mineral-only SPF and low-friction textures avoid the heat and sting that chemical filters and occlusive bases can cause, while any corrective steps for pigment or aging are buffered through these calming layers to protect long-term tolerance.
              </p>
            </div>
          </motion.div>

          {/* Neurovascular Circuit Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              Neurovascular Circuit Map
            </h3>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-violet-500/30 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="relative aspect-square">
                      <svg viewBox="0 0 300 300" className="w-full h-full">
                        <defs>
                          <linearGradient id="vesselGradHot" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="100%" stopColor="#f97316" />
                          </linearGradient>
                          <linearGradient id="vesselGradCool" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8b5cf6" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>

                        <ellipse cx="150" cy="140" rx="80" ry="100" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="3 3" />

                        <AnimatePresence mode="wait">
                          {!activeProduct ? (
                            <g key="inflamed">
                              <motion.path
                                d="M 110 80 Q 130 100 150 90 T 190 80"
                                stroke="url(#vesselGradHot)"
                                strokeWidth="3"
                                fill="none"
                                initial={{ pathLength: 0 }}
                                animate={{ 
                                  pathLength: 1,
                                  opacity: [0.8, 1, 0.8]
                                }}
                                transition={{ 
                                  pathLength: { duration: 1 },
                                  opacity: { duration: 1.5, repeat: Infinity }
                                }}
                              />
                              <motion.path
                                d="M 100 120 Q 120 130 140 125 T 180 130 Q 190 125 200 120"
                                stroke="url(#vesselGradHot)"
                                strokeWidth="3"
                                fill="none"
                                animate={{ 
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ duration: 1.8, repeat: Infinity }}
                              />
                              <motion.path
                                d="M 90 160 Q 110 170 130 165 T 170 165 Q 190 170 210 160"
                                stroke="url(#vesselGradHot)"
                                strokeWidth="3"
                                fill="none"
                                animate={{ 
                                  opacity: [0.6, 1, 0.6]
                                }}
                                transition={{ duration: 2.1, repeat: Infinity }}
                              />

                              {[{x: 120, y: 90}, {x: 180, y: 85}, {x: 110, y: 130}, {x: 190, y: 135}].map((pos, i) => (
                                <motion.circle
                                  key={`node-${i}`}
                                  cx={pos.x}
                                  cy={pos.y}
                                  r="5"
                                  fill="#ef4444"
                                  initial={{ scale: 0.8 }}
                                  animate={{ 
                                    scale: [1, 1.4, 1],
                                    opacity: [0.8, 1, 0.8]
                                  }}
                                  transition={{ 
                                    duration: 1.5,
                                    delay: i * 0.3,
                                    repeat: Infinity
                                  }}
                                />
                              ))}
                            </g>
                          ) : (
                            <g key="calmed">
                              <motion.path
                                d="M 110 80 Q 130 100 150 90 T 190 80"
                                stroke="url(#vesselGradCool)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ 
                                  pathLength: 1,
                                  opacity: 0.6
                                }}
                                transition={{ duration: 1.2 }}
                              />
                              <motion.path
                                d="M 100 120 Q 120 130 140 125 T 180 130 Q 190 125 200 120"
                                stroke="url(#vesselGradCool)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ duration: 1.2, delay: 0.2 }}
                              />
                              <motion.path
                                d="M 90 160 Q 110 170 130 165 T 170 165 Q 190 170 210 160"
                                stroke="url(#vesselGradCool)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                transition={{ duration: 1.2, delay: 0.4 }}
                              />

                              {[{x: 120, y: 90}, {x: 180, y: 85}, {x: 110, y: 130}, {x: 190, y: 135}].map((pos, i) => (
                                <motion.circle
                                  key={`node-calm-${i}`}
                                  cx={pos.x}
                                  cy={pos.y}
                                  r="3"
                                  fill="#8b5cf6"
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ 
                                    scale: 1,
                                    opacity: 0.5
                                  }}
                                  transition={{ 
                                    duration: 0.6,
                                    delay: i * 0.15
                                  }}
                                />
                              ))}
                            </g>
                          )}
                        </AnimatePresence>

                        <text x="150" y="250" fill="#94a3b8" fontSize="12" textAnchor="middle">
                          {activeProduct ? 'Calmed Neurovascular State' : 'Reactive Neurovascular State'}
                        </text>
                      </svg>
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
                      className={`transition-all duration-300 hover:shadow-xl ${
                        activeProduct === product.id 
                          ? `bg-gradient-to-r ${product.color} border-2 ${product.ringColor} shadow-lg` 
                          : 'bg-white hover:bg-slate-50'
                      } ${product.productId ? 'cursor-pointer' : ''}`}
                      onMouseEnter={() => setActiveProduct(product.id)}
                      onMouseLeave={() => setActiveProduct(null)}
                      onClick={() => handleProductCardClick(product.productId)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${activeProduct === product.id ? 'bg-white/50' : 'bg-gradient-to-br from-violet-100 to-blue-100'}`}>
                            <product.icon size={28} weight="duotone" className={activeProduct === product.id ? 'text-violet-600' : 'text-slate-600'} />
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
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Trigger Heatboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-8 text-center">
              Trigger Heatboard
            </h3>
            <p className="text-center text-slate-dark/70 mb-12 max-w-2xl mx-auto">
              Hover over each trigger to see how it impacts rosacea-prone skin
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {triggers.map((trigger, idx) => (
                <motion.div
                  key={trigger.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <Card
                    className={`cursor-pointer transition-all duration-300 ${
                      activeTrigger === trigger.id
                        ? 'bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/40 shadow-lg'
                        : 'bg-white hover:bg-slate-50'
                    }`}
                    onMouseEnter={() => setActiveTrigger(trigger.id)}
                    onMouseLeave={() => setActiveTrigger(null)}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                        activeTrigger === trigger.id ? 'bg-red-500/20' : 'bg-slate-100'
                      }`}>
                        <trigger.icon size={24} weight="duotone" className={activeTrigger === trigger.id ? 'text-red-600' : 'text-slate-600'} />
                      </div>
                      <h4 className="font-semibold text-slate-dark mb-1">{trigger.name}</h4>
                      {activeTrigger === trigger.id && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-xs text-slate-dark/70 mt-2"
                        >
                          {trigger.effect}
                        </motion.p>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Causes & Manifestations */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-violet-50 to-blue-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-dark mb-6">Causes & Triggers</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2" />
                      <div>
                        <strong className="text-slate-dark">Neurovascular hyper-reactivity:</strong>
                        <span className="text-slate-dark/70"> Blood vessels in the central face dilate too easily, leading to frequent flushing, warmth, and visible telangiectasias.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2" />
                      <div>
                        <strong className="text-slate-dark">Innate immune overdrive:</strong>
                        <span className="text-slate-dark/70"> An exaggerated inflammatory response and altered cathelicidin processing amplify redness, bumps, and swelling.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2" />
                      <div>
                        <strong className="text-slate-dark">Environmental & lifestyle triggers:</strong>
                        <span className="text-slate-dark/70"> Sun and wind, temperature extremes, spicy foods, hot drinks, alcohol, intense exercise, emotional stress, and some cosmetics commonly spark flares.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-2" />
                      <div>
                        <strong className="text-slate-dark">Barrier fragility:</strong>
                        <span className="text-slate-dark/70"> Dry, sensitive skin with impaired stratum corneum function stings with many topicals and loses water faster, further fueling inflammation.</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full bg-gradient-to-br from-teal-50 to-emerald-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-dark mb-6">Clinical Manifestations</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2" />
                      <span className="text-slate-dark/70">Persistent central facial redness or frequent intense flushing that can feel hot or burning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2" />
                      <span className="text-slate-dark/70">Acne-like papules and pustules without classic comedones, often coexisting with dryness and sensitivity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2" />
                      <span className="text-slate-dark/70">Visible surface vessels around the nose and cheeks, plus swelling in more advanced presentations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-teal-500 mt-2" />
                      <span className="text-slate-dark/70">Eye involvement in some patients (gritty, dry, or irritated eyes and lids), requiring ophthalmology co-management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Emotional Benefit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-teal-500/10 border-violet-300/30">
              <CardContent className="p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-dark mb-4">
                  Your Skin, Your Terms
                </h3>
                <p className="text-lg md:text-xl text-slate-dark/80 leading-relaxed max-w-3xl mx-auto">
                  ROSACEA gives faces that flush fast a low-noise mode—so you can work, train, or go out in the sun with smart protection, without feeling like every emotion or environment is written in neon across your cheeks.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
