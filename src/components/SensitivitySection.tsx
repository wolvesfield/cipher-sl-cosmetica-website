import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { 
  Bell, 
  ShieldCheck, 
  Lightning, 
  Wind, 
  Sparkle,
  Heart,
  Warning,
  CheckCircle,
  XCircle
} from '@phosphor-icons/react'
import { mockProducts } from '@/lib/mockData'
import { Product } from '@/lib/types'

interface SensitivitySectionProps {
  onProductClick?: (product: Product) => void
}

export function SensitivitySection({ onProductClick }: SensitivitySectionProps) {
  const [activeProduct, setActiveProduct] = useState<string | null>(null)
  const [nerveState, setNerveState] = useState<'reactive' | 'calm'>('reactive')
  const [timelinePhase, setTimelinePhase] = useState<'hyper' | 'stabilizing' | 'confident'>('hyper')

  const products = [
    {
      id: 'harmonizer',
      productId: 'mtrx-001',
      name: 'The Great Harmonizer',
      subtitle: 'Calm Concentrate',
      description: 'Core soothing layer that targets reactivity and redness; neuromodulating and anti-inflammatory actives help dial down burning and stinging while niacinamide supports barrier lipids and reduces background irritation.',
      mechanism: 'Neuromodulation + anti-inflammatory signaling',
      benefit: 'Reduces nerve reactivity and immediate stinging response',
      icon: ShieldCheck,
      color: 'from-blue-500/10 to-teal-500/10',
      ringColor: 'ring-blue-500/30',
      hoverColor: 'hover:from-blue-500/20 hover:to-teal-500/20'
    },
    {
      id: 'mason',
      productId: 'mtrx-011',
      name: 'The Mason',
      subtitle: 'Barrier Repair',
      description: 'Ceramide- and fatty-acid-rich repair cream focused on barrier support; rebuilds the stratum corneum "brickwork," reduces transepidermal water loss, and adds a soft, protective cushion between skin and environment.',
      mechanism: 'Ceramide replenishment + lipid architecture restoration',
      benefit: 'Strengthens barrier integrity and reduces water loss',
      icon: ShieldCheck,
      color: 'from-violet-500/10 to-purple-500/10',
      ringColor: 'ring-violet-500/30',
      hoverColor: 'hover:from-violet-500/20 hover:to-purple-500/20'
    },
    {
      id: 'naturalist',
      productId: 'mtrx-008',
      name: 'The Naturalist',
      subtitle: 'Gentle Alternative to Retinol',
      description: 'Low-irritation renewal step designed for sensitive or previously over-treated skin; offers slow, controlled improvement in texture and tone without the classic retinoid side-effects of peeling, intense dryness, or flare-ups.',
      mechanism: 'Gentle cellular renewal without barrier disruption',
      benefit: 'Progressive texture refinement once skin is stable',
      icon: Sparkle,
      color: 'from-emerald-500/10 to-teal-500/10',
      ringColor: 'ring-emerald-500/30',
      hoverColor: 'hover:from-emerald-500/20 hover:to-teal-500/20',
      phaseRequired: 'confident'
    }
  ]

  const handleProductCardClick = (productId: string) => {
    const product = mockProducts.find(p => p.id === productId)
    if (product && onProductClick) {
      onProductClick(product)
    }
  }

  const characteristics = [
    {
      id: 'burning',
      text: 'Reacts to new products with burning, stinging, or immediate prickling rather than a mild, brief tingle',
      icon: Lightning,
      severity: 'high'
    },
    {
      id: 'tight',
      text: 'Frequently feels tight or itchy, especially after cleansing, hot showers, air-conditioning, or wind exposure',
      icon: Wind,
      severity: 'medium'
    },
    {
      id: 'redness',
      text: 'Prone to diffuse redness or blotchy patches even from low-level triggers like rubbing, fabrics, or simple fragrance',
      icon: Warning,
      severity: 'medium'
    },
    {
      id: 'thin',
      text: 'Often appears thin or slightly transparent, with veins or color variation more visible through the surface',
      icon: Heart,
      severity: 'low'
    }
  ]

  const getTimelineData = () => {
    switch (timelinePhase) {
      case 'hyper':
        return {
          skinColor: '#fecaca',
          barrierThickness: 20,
          activeProducts: [],
          description: 'Skin over-reacts to even mild products and environmental triggers'
        }
      case 'stabilizing':
        return {
          skinColor: '#fed7aa',
          barrierThickness: 40,
          activeProducts: ['harmonizer', 'mason'],
          description: 'Barrier rebuilding in progress, reactivity decreasing'
        }
      case 'confident':
        return {
          skinColor: '#d9f99d',
          barrierThickness: 60,
          activeProducts: ['harmonizer', 'mason', 'naturalist'],
          description: 'Stable barrier, ready to explore gentle actives'
        }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-teal-50 to-violet-50 border-b border-blue-200/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.08),transparent_50%)]" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
              }}
              animate={{
                y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-blue-500/10 text-blue-700 border-blue-500/30 px-6 py-2 text-sm font-semibold">
              SKIN CONDITION
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-dark mb-6 tracking-tight">
              SENSITIVITY
            </h1>
            
            <p className="text-2xl md:text-3xl text-blue-700 font-semibold mb-8">
              Barrier Support for Skin That Hears Everything
            </p>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-slate-dark/80 leading-relaxed mb-6">
                Sensitive skin has a compromised barrier that makes it over-reactive to products and environment, so even basic steps can trigger redness, itch, or burning. The goal is to rebuild barrier integrity and quiet nerve signalling so skin feels buffered and safe again, not constantly on edge.
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
              Understanding Sensitivity
            </h2>
            
            <div className="prose prose-lg max-w-none text-slate-dark/80 space-y-6">
              <p className="text-lg leading-relaxed">
                Sensitive skin is defined less by a specific diagnosis and more by how it feels: tight, itchy, and easily irritated because the outer barrier is thin, leaky, and poorly equipped to block irritants or retain moisture. When this barrier is compromised—by genetics, over-exfoliation, harsh cleansers, pollution, or climate stress—nerve endings sit closer to the surface and react intensely to ingredients, temperature changes, and friction that would be harmless on resilient skin.
              </p>

              <p className="text-lg leading-relaxed">
                Over time, this creates a feedback loop where every sting teaches the system to stay hyper-vigilant, making people afraid to try anything new. The SENSITIVITY protocol treats calm and protection as primary actives. Barrier-strengthening lipids and ceramides restore the "brick and mortar" architecture that keeps water in and irritants out, while soothing agents like niacinamide and CBD-style complexes help reduce redness and discomfort.
              </p>

              <p className="text-lg leading-relaxed">
                Once this buffer is rebuilt, a gentle alternative to retinol can slowly introduce controlled renewal, improving long-term skin quality without re-triggering the cycle of burning and peeling.
              </p>
            </div>
          </motion.div>

          {/* Characteristics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              Key Characteristics
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {characteristics.map((char, idx) => (
                <motion.div
                  key={char.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="bg-gradient-to-br from-white to-blue-50/30 border-blue-200/40 hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${
                          char.severity === 'high' ? 'bg-red-100' :
                          char.severity === 'medium' ? 'bg-amber-100' :
                          'bg-blue-100'
                        }`}>
                          <char.icon 
                            size={28} 
                            weight="duotone" 
                            className={
                              char.severity === 'high' ? 'text-red-600' :
                              char.severity === 'medium' ? 'text-amber-600' :
                              'text-blue-600'
                            }
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-dark/80 leading-relaxed">
                            {char.text}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Barrier Status HUD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              Barrier Status HUD
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-200/40 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="relative aspect-square max-w-md mx-auto">
                      <svg viewBox="0 0 300 300" className="w-full h-full">
                        <defs>
                          <linearGradient id="barrierGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                          </linearGradient>
                          <linearGradient id="hydrationGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#14b8a6" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                          <linearGradient id="reactivityGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="100%" stopColor="#f97316" />
                          </linearGradient>
                        </defs>

                        {/* Face silhouette */}
                        <ellipse 
                          cx="150" 
                          cy="150" 
                          rx="60" 
                          ry="75" 
                          fill="none" 
                          stroke="#94a3b8" 
                          strokeWidth="1" 
                          strokeDasharray="3 3" 
                        />

                        {/* Barrier Arc (bottom-left) */}
                        <motion.path
                          d="M 90,210 A 90,90 0 0,1 75,135"
                          fill="none"
                          stroke={activeProduct === 'mason' ? 'url(#barrierGrad)' : '#ef4444'}
                          strokeWidth="12"
                          strokeLinecap="round"
                          initial={{ pathLength: 0.3, opacity: 0.5 }}
                          animate={{ 
                            pathLength: activeProduct === 'mason' ? 0.85 : 0.3,
                            opacity: activeProduct === 'mason' ? 1 : 0.5
                          }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                        <text x="60" y="175" fill="#64748b" fontSize="11" fontWeight="600">
                          Barrier
                        </text>

                        {/* Hydration Arc (bottom-right) */}
                        <motion.path
                          d="M 210,210 A 90,90 0 0,0 225,135"
                          fill="none"
                          stroke={activeProduct === 'mason' ? 'url(#hydrationGrad)' : '#ef4444'}
                          strokeWidth="12"
                          strokeLinecap="round"
                          initial={{ pathLength: 0.3, opacity: 0.5 }}
                          animate={{ 
                            pathLength: activeProduct === 'mason' ? 0.85 : 0.3,
                            opacity: activeProduct === 'mason' ? 1 : 0.5
                          }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
                        />
                        <text x="205" y="175" fill="#64748b" fontSize="11" fontWeight="600">
                          Hydration
                        </text>

                        {/* Reactivity Arc (top) */}
                        <motion.path
                          d="M 75,135 A 90,90 0 0,1 225,135"
                          fill="none"
                          stroke={activeProduct === 'harmonizer' ? '#8b5cf6' : 'url(#reactivityGrad)'}
                          strokeWidth="12"
                          strokeLinecap="round"
                          initial={{ pathLength: 0.8, opacity: 1 }}
                          animate={{ 
                            pathLength: activeProduct === 'harmonizer' ? 0.2 : 0.8,
                            opacity: activeProduct === 'harmonizer' ? 0.4 : 1
                          }}
                          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
                        />
                        <text x="125" y="70" fill="#64748b" fontSize="11" fontWeight="600">
                          Reactivity
                        </text>

                        {/* Status text */}
                        <text x="150" y="155" fill="#0f172a" fontSize="14" fontWeight="700" textAnchor="middle">
                          {activeProduct ? 'Protected' : 'Compromised'}
                        </text>
                        <text x="150" y="170" fill="#64748b" fontSize="10" textAnchor="middle">
                          Barrier Status
                        </text>
                      </svg>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <p className="text-sm text-slate-600">
                        {activeProduct === 'mason' 
                          ? 'Barrier and Hydration strengthened, Reactivity reduced'
                          : 'Baseline: Weak barrier, low hydration, high reactivity'
                        }
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <div className="text-center lg:text-left mb-6">
                  <p className="text-slate-600 italic">
                    Hover over products to see how they affect barrier status
                  </p>
                </div>

                {products.filter(p => p.id !== 'naturalist').map((product, idx) => (
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
                          : `bg-white ${product.hoverColor} border border-slate-200`
                      }`}
                      onMouseEnter={() => setActiveProduct(product.id)}
                      onMouseLeave={() => setActiveProduct(null)}
                      onClick={() => handleProductCardClick(product.productId)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${
                            activeProduct === product.id 
                              ? 'bg-white/70' 
                              : 'bg-gradient-to-br from-blue-100 to-violet-100'
                          }`}>
                            <product.icon 
                              size={28} 
                              weight="duotone" 
                              className={activeProduct === product.id ? 'text-blue-600' : 'text-slate-600'} 
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-bold text-slate-dark mb-1">
                              {product.name}
                            </h4>
                            <p className="text-sm text-primary font-medium mb-2">
                              {product.subtitle}
                            </p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-2">
                              {product.description}
                            </p>
                            {activeProduct === product.id && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-3 pt-3 border-t border-slate-200"
                              >
                                <p className="text-xs text-slate-500 mb-1 font-semibold">
                                  Mechanism:
                                </p>
                                <p className="text-xs text-slate-600">
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

          {/* Nerve-Calm Overlay */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              Nerve-Calm Overlay
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <Card className="bg-gradient-to-br from-white to-blue-50/30 border-blue-200/40">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold text-slate-dark mb-4">
                      How It Works
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-2">
                          Before Treatment:
                        </p>
                        <ul className="space-y-1 text-sm text-slate-600">
                          <li className="flex items-start gap-2">
                            <XCircle size={16} weight="fill" className="text-red-500 mt-0.5 flex-shrink-0" />
                            <span>Nerve endings reach close to surface</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle size={16} weight="fill" className="text-red-500 mt-0.5 flex-shrink-0" />
                            <span>Thin, compromised barrier allows irritant penetration</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <XCircle size={16} weight="fill" className="text-red-500 mt-0.5 flex-shrink-0" />
                            <span>Nerves pulse rapidly with high-intensity signals</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <p className="text-sm font-semibold text-slate-700 mb-2">
                          After Protocol:
                        </p>
                        <ul className="space-y-1 text-sm text-slate-600">
                          <li className="flex items-start gap-2">
                            <CheckCircle size={16} weight="fill" className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Barrier thickens and strengthens</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle size={16} weight="fill" className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Irritant particles blocked at surface</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle size={16} weight="fill" className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Nerve signaling slows to calm, controlled pulses</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex gap-4">
                  <Button
                    variant={nerveState === 'reactive' ? 'default' : 'outline'}
                    onClick={() => setNerveState('reactive')}
                    className="flex-1"
                  >
                    Before
                  </Button>
                  <Button
                    variant={nerveState === 'calm' ? 'default' : 'outline'}
                    onClick={() => setNerveState('calm')}
                    className="flex-1"
                  >
                    After Harmonizer
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2 relative">
                <Card className="bg-gradient-to-br from-slate-50 to-blue-50 border-blue-200/40 overflow-hidden">
                  <CardContent className="p-8">
                    <div className="relative aspect-[4/3]">
                      <svg viewBox="0 0 400 300" className="w-full h-full">
                        <defs>
                          <linearGradient id="barrierThin" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fecaca" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#fca5a5" stopOpacity="0.8" />
                          </linearGradient>
                          <linearGradient id="barrierThick" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.8" />
                          </linearGradient>
                        </defs>

                        {/* Epidermis cross-section */}
                        <rect x="0" y="150" width="400" height="150" fill="#f1f5f9" />
                        
                        {/* Barrier layer */}
                        <AnimatePresence mode="wait">
                          {nerveState === 'reactive' ? (
                            <motion.rect
                              key="thin-barrier"
                              x="0"
                              y="130"
                              width="400"
                              height="20"
                              fill="url(#barrierThin)"
                              initial={{ y: 130, height: 20 }}
                              animate={{ y: 130, height: 20 }}
                              exit={{ opacity: 0 }}
                            />
                          ) : (
                            <motion.rect
                              key="thick-barrier"
                              x="0"
                              y="110"
                              width="400"
                              height="40"
                              fill="url(#barrierThick)"
                              initial={{ y: 130, height: 20, opacity: 0 }}
                              animate={{ y: 110, height: 40, opacity: 1 }}
                              transition={{ duration: 0.8 }}
                            />
                          )}
                        </AnimatePresence>

                        {/* Irritant particles (only visible in reactive state) */}
                        {nerveState === 'reactive' && (
                          <>
                            {[...Array(8)].map((_, i) => (
                              <motion.circle
                                key={`irritant-${i}`}
                                cx={50 + i * 45}
                                cy={80}
                                r="4"
                                fill="#ef4444"
                                initial={{ cy: 20 }}
                                animate={{ cy: [20, 80, 140, 160] }}
                                transition={{
                                  duration: 2,
                                  delay: i * 0.2,
                                  repeat: Infinity,
                                  repeatDelay: 1
                                }}
                              />
                            ))}
                          </>
                        )}

                        {/* Nerve endings */}
                        {[...Array(6)].map((_, i) => {
                          const x = 50 + i * 60
                          const yBase = nerveState === 'reactive' ? 160 : 180
                          const yEnd = nerveState === 'reactive' ? 140 : 145
                          
                          return (
                            <g key={`nerve-${i}`}>
                              <motion.path
                                d={`M ${x} ${yBase} Q ${x + 5} ${(yBase + yEnd) / 2} ${x} ${yEnd}`}
                                stroke={nerveState === 'reactive' ? '#ef4444' : '#8b5cf6'}
                                strokeWidth="2"
                                fill="none"
                                initial={{ opacity: 0.8 }}
                                animate={{ 
                                  opacity: nerveState === 'reactive' ? [0.8, 1, 0.8] : 0.4
                                }}
                                transition={{ 
                                  duration: nerveState === 'reactive' ? 0.6 : 2,
                                  delay: i * 0.1,
                                  repeat: Infinity 
                                }}
                              />
                              <motion.circle
                                cx={x}
                                cy={yEnd}
                                r={nerveState === 'reactive' ? 5 : 3}
                                fill={nerveState === 'reactive' ? '#ef4444' : '#8b5cf6'}
                                initial={{ scale: 1 }}
                                animate={{ 
                                  scale: nerveState === 'reactive' ? [1, 1.5, 1] : 1,
                                  opacity: nerveState === 'reactive' ? [0.8, 1, 0.8] : 0.5
                                }}
                                transition={{ 
                                  duration: nerveState === 'reactive' ? 0.6 : 2,
                                  delay: i * 0.1,
                                  repeat: Infinity 
                                }}
                              />
                            </g>
                          )
                        })}

                        {/* Labels */}
                        <text x="20" y="125" fill="#64748b" fontSize="12" fontWeight="600">
                          Surface
                        </text>
                        <text x="20" y="180" fill="#64748b" fontSize="12" fontWeight="600">
                          Epidermis
                        </text>
                        <text x="20" y="270" fill="#64748b" fontSize="12" fontWeight="600">
                          Dermis
                        </text>
                      </svg>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <p className="text-sm text-slate-600">
                        {nerveState === 'reactive' 
                          ? 'Reactive State: Thin barrier, exposed nerves, rapid signaling'
                          : 'Calm State: Strong barrier, protected nerves, slow signaling'
                        }
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Stimulus Response Graph */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              Stimulus Response Graph
            </h3>
            
            <Card className="bg-gradient-to-br from-white to-violet-50/30 border-violet-200/40 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="relative aspect-[16/10]">
                  <svg viewBox="0 0 600 400" className="w-full h-full">
                    {/* Grid lines */}
                    {[...Array(5)].map((_, i) => (
                      <line
                        key={`grid-h-${i}`}
                        x1="60"
                        y1={80 + i * 60}
                        x2="560"
                        y2={80 + i * 60}
                        stroke="#e2e8f0"
                        strokeWidth="1"
                      />
                    ))}
                    {[...Array(6)].map((_, i) => (
                      <line
                        key={`grid-v-${i}`}
                        x1={60 + i * 100}
                        y1="80"
                        x2={60 + i * 100}
                        y2="320"
                        stroke="#e2e8f0"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Axes */}
                    <line x1="60" y1="320" x2="560" y2="320" stroke="#475569" strokeWidth="2" />
                    <line x1="60" y1="80" x2="60" y2="320" stroke="#475569" strokeWidth="2" />

                    {/* Y-axis label */}
                    <text x="30" y="200" fill="#475569" fontSize="12" fontWeight="600" textAnchor="middle" transform="rotate(-90 30 200)">
                      Perceived Irritation
                    </text>

                    {/* X-axis label */}
                    <text x="310" y="360" fill="#475569" fontSize="12" fontWeight="600" textAnchor="middle">
                      Product Strength / Environmental Stress
                    </text>

                    {/* Y-axis markers */}
                    {['High', 'Med-High', 'Medium', 'Low', 'None'].map((label, i) => (
                      <text key={label} x="50" y={90 + i * 60} fill="#64748b" fontSize="10" textAnchor="end">
                        {label}
                      </text>
                    ))}

                    {/* X-axis markers */}
                    {['Low', 'Med', 'High', 'V.High', 'Extreme'].map((label, i) => (
                      <text key={label} x={60 + i * 100} y="340" fill="#64748b" fontSize="10" textAnchor="middle">
                        {label}
                      </text>
                    ))}

                    {/* Before curve (steep) */}
                    <motion.path
                      d="M 60,300 Q 160,250 260,150 T 460,85 Q 510,80 560,80"
                      fill="none"
                      stroke="#ef4444"
                      strokeWidth="3"
                      strokeDasharray="6 4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.8 }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />

                    {/* After curve (flat) */}
                    <motion.path
                      d="M 60,290 Q 160,280 260,260 T 460,240 Q 510,235 560,230"
                      fill="none"
                      stroke="#8b5cf6"
                      strokeWidth="3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                    />

                    {/* Legend */}
                    <g transform="translate(400, 100)">
                      <line x1="0" y1="0" x2="30" y2="0" stroke="#ef4444" strokeWidth="3" strokeDasharray="6 4" />
                      <text x="40" y="5" fill="#475569" fontSize="12">
                        Before Protocol
                      </text>
                      
                      <line x1="0" y1="25" x2="30" y2="25" stroke="#8b5cf6" strokeWidth="3" />
                      <text x="40" y="30" fill="#475569" fontSize="12">
                        On SENSITIVITY Protocol
                      </text>
                    </g>
                  </svg>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <strong>Key Insight:</strong> Before the protocol, even mild products trigger strong irritation responses (steep red curve). After barrier repair and nerve calming, the same stimuli produce minimal discomfort (flat purple curve), allowing confident exploration of effective ingredients.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Texture & Tolerance Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              Texture & Tolerance Timeline
            </h3>
            
            <Card className="bg-gradient-to-br from-white to-emerald-50/30 border-emerald-200/40 max-w-5xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-8">
                  {/* Timeline selector */}
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      {(['hyper', 'stabilizing', 'confident'] as const).map((phase, idx) => (
                        <button
                          key={phase}
                          onClick={() => setTimelinePhase(phase)}
                          className={`relative flex-1 py-4 px-6 text-center transition-all duration-300 ${
                            timelinePhase === phase
                              ? 'bg-gradient-to-r from-blue-500/20 to-violet-500/20 shadow-lg'
                              : 'bg-white hover:bg-slate-50'
                          } ${
                            idx === 0 ? 'rounded-l-xl' :
                            idx === 2 ? 'rounded-r-xl' :
                            ''
                          } border-2 ${
                            timelinePhase === phase ? 'border-blue-500' : 'border-slate-200'
                          }`}
                        >
                          <div className="text-sm font-bold text-slate-dark mb-1">
                            {phase === 'hyper' ? 'Hyper-Reactive' :
                             phase === 'stabilizing' ? 'Stabilizing' :
                             'Confident Explorer'}
                          </div>
                          <div className="text-xs text-slate-600">
                            {phase === 'hyper' ? 'Weeks 0-2' :
                             phase === 'stabilizing' ? 'Weeks 3-6' :
                             'Week 7+'}
                          </div>
                        </button>
                      ))}
                    </div>

                    {/* Progress bar */}
                    <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute h-full bg-gradient-to-r from-blue-500 to-violet-500"
                        initial={{ width: '0%' }}
                        animate={{ 
                          width: timelinePhase === 'hyper' ? '33%' :
                                 timelinePhase === 'stabilizing' ? '66%' :
                                 '100%'
                        }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative aspect-square">
                      <svg viewBox="0 0 300 300" className="w-full h-full">
                        {/* Face illustration */}
                        <ellipse cx="150" cy="140" rx="80" ry="100" fill={getTimelineData().skinColor} opacity="0.6" />
                        
                        {/* Barrier thickness indicator */}
                        <motion.circle
                          cx="150"
                          cy="140"
                          r="85"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth={getTimelineData().barrierThickness / 3}
                          opacity="0.4"
                          initial={{ strokeWidth: 5 }}
                          animate={{ strokeWidth: getTimelineData().barrierThickness / 3 }}
                          transition={{ duration: 0.8 }}
                        />

                        {/* Reflectivity sparkles (only show in confident phase) */}
                        {timelinePhase === 'confident' && (
                          <>
                            {[...Array(12)].map((_, i) => {
                              const angle = (i * 30) * Math.PI / 180
                              const r = 70
                              const cx = 150 + r * Math.cos(angle)
                              const cy = 140 + r * Math.sin(angle)
                              
                              return (
                                <motion.circle
                                  key={`sparkle-${i}`}
                                  cx={cx}
                                  cy={cy}
                                  r="2"
                                  fill="#fbbf24"
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ 
                                    scale: [0, 1.5, 0],
                                    opacity: [0, 1, 0]
                                  }}
                                  transition={{
                                    duration: 2,
                                    delay: i * 0.15,
                                    repeat: Infinity,
                                    repeatDelay: 1
                                  }}
                                />
                              )
                            })}
                          </>
                        )}

                        {/* Status label */}
                        <text x="150" y="260" fill="#475569" fontSize="14" fontWeight="700" textAnchor="middle">
                          {getTimelineData().description}
                        </text>
                      </svg>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl font-bold text-slate-dark mb-4">
                          Active Protocol
                        </h4>
                        
                        <div className="space-y-3">
                          {products.map((product) => {
                            const isActive = getTimelineData().activeProducts.includes(product.id)
                            const isLocked = product.phaseRequired === 'confident' && timelinePhase !== 'confident'
                            
                            return (
                              <div
                                key={product.id}
                                className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                                  isActive 
                                    ? `${product.color} ${product.ringColor}` 
                                    : isLocked
                                    ? 'bg-slate-100 border-slate-300 opacity-50'
                                    : 'bg-white border-slate-200'
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  {isActive ? (
                                    <CheckCircle size={24} weight="fill" className="text-green-600 flex-shrink-0" />
                                  ) : isLocked ? (
                                    <Warning size={24} weight="fill" className="text-slate-400 flex-shrink-0" />
                                  ) : (
                                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex-shrink-0" />
                                  )}
                                  <div className="flex-1">
                                    <p className="font-semibold text-slate-dark text-sm">
                                      {product.name}
                                    </p>
                                    <p className="text-xs text-slate-600">
                                      {product.subtitle}
                                    </p>
                                  </div>
                                </div>
                                {isLocked && (
                                  <p className="text-xs text-slate-500 mt-2 italic">
                                    Introduced once barrier is stable
                                  </p>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>

                      <div className="p-4 bg-gradient-to-r from-blue-50 to-violet-50 rounded-lg">
                        <p className="text-sm text-slate-700">
                          <strong>Phase Goal:</strong>{' '}
                          {timelinePhase === 'hyper' 
                            ? 'Focus on calming inflammation and beginning barrier repair. Avoid all exfoliants and actives.'
                            : timelinePhase === 'stabilizing'
                            ? 'Continue barrier support while reactivity decreases. Skin becoming more tolerant.'
                            : 'Barrier is strong. Ready to introduce gentle renewal for texture improvement.'
                          }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Treatment Protocol Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-slate-dark mb-12 text-center">
              Complete Treatment Protocol
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card 
                    className={`bg-gradient-to-br from-white to-blue-50/30 border-blue-200/40 hover:shadow-xl transition-all duration-300 h-full cursor-pointer ${product.hoverColor}`}
                    onClick={() => handleProductCardClick(product.productId)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-violet-100">
                          <product.icon size={28} weight="duotone" className="text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-slate-dark">
                            {product.name}
                          </h4>
                          <p className="text-sm text-primary font-medium">
                            {product.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {product.description}
                      </p>
                      
                      <div className="space-y-3 pt-3 border-t border-slate-200">
                        <div>
                          <p className="text-xs font-semibold text-slate-700 mb-1">
                            Mechanism:
                          </p>
                          <p className="text-xs text-slate-600">
                            {product.mechanism}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-xs font-semibold text-slate-700 mb-1">
                            Key Benefit:
                          </p>
                          <p className="text-xs text-slate-600">
                            {product.benefit}
                          </p>
                        </div>

                        {product.phaseRequired && (
                          <Badge className="bg-amber-100 text-amber-800 border-amber-300">
                            Week 7+ Only
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Emotional Benefit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-blue-50 via-violet-50 to-teal-50 border-blue-300/50 shadow-xl">
              <CardContent className="p-12 text-center">
                <Bell size={48} weight="duotone" className="text-blue-600 mx-auto mb-6" />
                <h3 className="text-2xl md:text-3xl font-bold text-slate-dark mb-6">
                  Your Skin's Safe Channel
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed max-w-3xl mx-auto italic">
                  SENSITIVITY is the safe channel for skin that "hears everything"—a place where the barrier is rebuilt, the noise in your nerves is turned down, and you can finally explore skincare again without bracing for the sting.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
