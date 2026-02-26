import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkle, FlowerLotus, Drop, ShieldCheck } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { mockProducts } from '@/lib/mockData'
import { Product } from '@/lib/types'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinkleOffset: number
}

interface ShootingStar {
  id: number
  x: number
  y: number
  angle: number
  speed: number
  length: number
}

interface IngredientNode {
  id: string
  name: string
  x: number
  y: number
  products: Product[]
  category: 'cbd' | 'keratin' | 'nourishing' | 'vitamin'
  description: string
}

const ingredientDescriptions: Record<string, { category: 'cbd' | 'keratin' | 'nourishing' | 'vitamin', description: string }> = {
  '4.0% MTRX-CBD': {
    category: 'cbd',
    description: 'Reduces scalp inflammation, creates optimal follicle environment, and maintains moisture balance in hair fiber'
  },
  'Keratin Builders': {
    category: 'keratin',
    description: 'Rebuilds hair structure from within, strengthens damaged hair shaft, and improves elasticity'
  },
  'Keratin': {
    category: 'keratin',
    description: 'Repairs damaged cuticles, seals split ends, and reinforces the structural integrity of each strand'
  },
  'Panthenol': {
    category: 'vitamin',
    description: 'Pro-Vitamin B5 deeply penetrates hair shaft, improves moisture retention, and adds thickness and shine'
  },
  'Biotin': {
    category: 'vitamin',
    description: 'Vitamin B7 supports keratin infrastructure, promotes hair thickness, and strengthens follicle anchoring'
  },
  'Argan Oil': {
    category: 'nourishing',
    description: 'Rich in fatty acids and vitamin E, seals cuticle, adds brilliant shine, and protects against heat damage'
  },
  'Gentle Cleansing System': {
    category: 'nourishing',
    description: 'Sulfate-free formula cleanses without stripping natural oils, maintains scalp pH balance'
  },
  'Emollient System': {
    category: 'nourishing',
    description: 'Provides slip for detangling, locks in moisture, and creates protective coating around each strand'
  }
}

export function HairScalpConstellationMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const [hoveredNode, setHoveredNode] = useState<IngredientNode | null>(null)
  const [selectedNode, setSelectedNode] = useState<IngredientNode | null>(null)
  const [stars, setStars] = useState<Star[]>([])
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([])
  const [ingredientNodes, setIngredientNodes] = useState<IngredientNode[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const hairProducts = mockProducts.filter(p => p.category === 'anti-aging-hair-scalp-care')
    const ingredientMap = new Map<string, Product[]>()
    
    hairProducts.forEach(product => {
      product.ingredients.forEach(ingredient => {
        if (!ingredientMap.has(ingredient)) {
          ingredientMap.set(ingredient, [])
        }
        ingredientMap.get(ingredient)!.push(product)
      })
    })

    const nodes: IngredientNode[] = []
    const entries = Array.from(ingredientMap.entries())
    const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 800
    const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 400
    const radius = typeof window !== 'undefined' ? Math.min(window.innerWidth, window.innerHeight) * 0.3 : 250

    entries.forEach(([ingredient, products], index) => {
      const angle = (index / entries.length) * Math.PI * 2 - Math.PI / 2
      const variance = (Math.random() - 0.5) * 60
      const distance = radius + variance
      
      const ingredientInfo = ingredientDescriptions[ingredient] || {
        category: 'nourishing' as const,
        description: 'Essential ingredient for hair and scalp health'
      }

      nodes.push({
        id: `node-${index}`,
        name: ingredient,
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        products,
        category: ingredientInfo.category,
        description: ingredientInfo.description
      })
    })

    setIngredientNodes(nodes)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const starCount = 600
    const newStars: Star[] = []
    for (let i = 0; i < starCount; i++) {
      newStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinkleOffset: Math.random() * Math.PI * 2
      })
    }
    setStars(newStars)

    const spawnShootingStar = () => {
      const newStar: ShootingStar = {
        id: Date.now() + Math.random(),
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.5,
        speed: 8 + Math.random() * 4,
        length: 100 + Math.random() * 100
      }
      setShootingStars(prev => [...prev, newStar])

      setTimeout(() => {
        setShootingStars(prev => prev.filter(s => s.id !== newStar.id))
      }, 2000)
    }

    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        spawnShootingStar()
      }
    }, 2000)

    let time = 0
    const animate = () => {
      ctx.fillStyle = 'rgba(5, 8, 20, 1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width / 2
      )
      gradient.addColorStop(0, 'rgba(30, 20, 50, 0.9)')
      gradient.addColorStop(0.5, 'rgba(15, 10, 35, 0.7)')
      gradient.addColorStop(1, 'rgba(5, 8, 20, 1)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset)
        const opacity = star.opacity * (0.5 + twinkle * 0.5)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        if (star.size > 1.5) {
          ctx.fillStyle = `rgba(200, 220, 255, ${opacity * 0.3})`
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      shootingStars.forEach(shootingStar => {
        const dx = Math.cos(shootingStar.angle) * shootingStar.speed
        const dy = Math.sin(shootingStar.angle) * shootingStar.speed
        
        const gradient = ctx.createLinearGradient(
          shootingStar.x, shootingStar.y,
          shootingStar.x - dx * shootingStar.length / shootingStar.speed,
          shootingStar.y - dy * shootingStar.length / shootingStar.speed
        )
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)')
        gradient.addColorStop(0.3, 'rgba(200, 220, 255, 0.6)')
        gradient.addColorStop(1, 'rgba(100, 150, 255, 0)')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(shootingStar.x, shootingStar.y)
        ctx.lineTo(
          shootingStar.x - dx * shootingStar.length / shootingStar.speed,
          shootingStar.y - dy * shootingStar.length / shootingStar.speed
        )
        ctx.stroke()

        shootingStar.x += dx
        shootingStar.y += dy
      })

      ingredientNodes.forEach((node, index) => {
        ingredientNodes.forEach((otherNode, otherIndex) => {
          if (index < otherIndex) {
            const sharedProducts = node.products.filter(p => 
              otherNode.products.some(op => op.id === p.id)
            )
            if (sharedProducts.length > 0) {
              const distance = Math.hypot(node.x - otherNode.x, node.y - otherNode.y)
              if (distance < 500) {
                const opacity = Math.max(0, 1 - distance / 500) * 0.2
                
                let color = 'rgba(150, 200, 255, '
                if (node.category === 'cbd' || otherNode.category === 'cbd') {
                  color = 'rgba(120, 180, 255, '
                }
                
                ctx.strokeStyle = color + opacity + ')'
                ctx.lineWidth = 1.5
                ctx.beginPath()
                ctx.moveTo(node.x, node.y)
                ctx.lineTo(otherNode.x, otherNode.y)
                ctx.stroke()
              }
            }
          }
        })
      })

      ingredientNodes.forEach(node => {
        const isHovered = hoveredNode?.id === node.id
        const isSelected = selectedNode?.id === node.id
        
        let color = 'rgba(150, 180, 220, 0.7)'
        let glowColor = 'rgba(150, 180, 220, 0.35)'
        let pulseIntensity = 1
        
        if (node.category === 'cbd') {
          color = 'rgba(100, 180, 255, 0.9)'
          glowColor = 'rgba(100, 180, 255, 0.5)'
          pulseIntensity = 1.2
        } else if (node.category === 'keratin') {
          color = 'rgba(200, 150, 255, 0.8)'
          glowColor = 'rgba(200, 150, 255, 0.4)'
        } else if (node.category === 'vitamin') {
          color = 'rgba(255, 200, 100, 0.8)'
          glowColor = 'rgba(255, 200, 100, 0.4)'
        } else {
          color = 'rgba(150, 220, 180, 0.75)'
          glowColor = 'rgba(150, 220, 180, 0.35)'
        }

        const pulse = Math.sin(time * 0.02) * 0.3 + 0.7
        const size = ((isHovered || isSelected) ? 14 : 10) * (node.category === 'cbd' ? pulse * pulseIntensity : 1)
        const glowSize = ((isHovered || isSelected) ? 28 : 20) * (node.category === 'cbd' ? pulse * pulseIntensity : 1)

        ctx.fillStyle = glowColor
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        if (node.category === 'cbd') {
          const outerGlow = ctx.createRadialGradient(
            node.x, node.y, size,
            node.x, node.y, glowSize * 1.5
          )
          outerGlow.addColorStop(0, 'rgba(100, 180, 255, 0.3)')
          outerGlow.addColorStop(1, 'rgba(100, 180, 255, 0)')
          ctx.fillStyle = outerGlow
          ctx.beginPath()
          ctx.arc(node.x, node.y, glowSize * 1.5, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
        ctx.stroke()
      })

      time++
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      clearInterval(shootingStarInterval)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [stars, shootingStars, ingredientNodes, hoveredNode, selectedNode])

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const clickedNode = ingredientNodes.find(node => {
      const distance = Math.hypot(node.x - x, node.y - y)
      return distance < 25
    })

    setSelectedNode(clickedNode || null)
  }

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePos({ x: e.clientX, y: e.clientY })

    const hoveredNode = ingredientNodes.find(node => {
      const distance = Math.hypot(node.x - x, node.y - y)
      return distance < 25
    })

    setHoveredNode(hoveredNode || null)
  }

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'cbd': return <ShieldCheck size={24} weight="fill" className="text-[oklch(0.63_0.16_240)]" />
      case 'keratin': return <FlowerLotus size={24} weight="fill" className="text-[oklch(0.65_0.12_280)]" />
      case 'vitamin': return <Sparkle size={24} weight="fill" className="text-[oklch(0.75_0.15_80)]" />
      default: return <Drop size={24} weight="fill" className="text-[oklch(0.60_0.08_160)]" />
    }
  }

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'cbd': return 'CBD Technology'
      case 'keratin': return 'Structural Proteins'
      case 'vitamin': return 'Vitamins & Bioactives'
      default: return 'Nourishing Agents'
    }
  }

  return (
    <div className="relative w-full h-screen bg-[oklch(0.05_0.02_250)] overflow-hidden">
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        onMouseMove={handleCanvasMouseMove}
        className="absolute inset-0 cursor-crosshair"
      />

      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center gap-3 justify-center mb-2">
            <FlowerLotus size={36} weight="fill" className="text-[oklch(0.60_0.10_200)]" />
            <h2 className="font-playfair text-4xl font-bold text-white">
              Hair & Scalp Care Constellation
            </h2>
            <Sparkle size={36} weight="fill" className="text-[oklch(0.60_0.10_200)]" />
          </div>
          <p className="text-white/70 text-sm max-w-2xl">
            Explore the synergistic network of ingredients that create The Root of Power and The Crown Jewel
          </p>
        </motion.div>
      </div>

      <div className="absolute top-8 right-8 z-10">
        <Card className="bg-slate-dark/90 backdrop-blur-md border-primary/20 p-4">
          <h3 className="text-white font-semibold text-sm mb-3">Ingredient Categories</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[oklch(0.63_0.16_240)] border-2 border-white" />
              <span className="text-white/90 text-xs">CBD Technology</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[oklch(0.65_0.12_280)] border-2 border-white" />
              <span className="text-white/90 text-xs">Structural Proteins</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[oklch(0.75_0.15_80)] border-2 border-white" />
              <span className="text-white/90 text-xs">Vitamins & Bioactives</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[oklch(0.60_0.08_160)] border-2 border-white" />
              <span className="text-white/90 text-xs">Nourishing Agents</span>
            </div>
          </div>
        </Card>
      </div>

      <AnimatePresence>
        {hoveredNode && !selectedNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            style={{
              position: 'fixed',
              left: mousePos.x + 20,
              top: mousePos.y - 20,
              pointerEvents: 'none'
            }}
            className="z-20"
          >
            <Card className="bg-slate-dark/95 backdrop-blur-lg border-primary/30 p-3 max-w-xs">
              <div className="flex items-center gap-2 mb-1">
                {getCategoryIcon(hoveredNode.category)}
                <p className="text-white font-semibold text-sm">{hoveredNode.name}</p>
              </div>
              <p className="text-white/60 text-xs">
                {getCategoryLabel(hoveredNode.category)} · {hoveredNode.products.length} product{hoveredNode.products.length !== 1 ? 's' : ''}
              </p>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedNode && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 flex items-center justify-center z-30 p-4"
            onClick={() => setSelectedNode(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <Card 
              className="relative bg-gradient-to-br from-slate-dark via-[oklch(0.18_0.02_250)] to-slate-dark border-primary/30 p-6 max-w-3xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white/70 hover:text-white"
                onClick={() => setSelectedNode(null)}
              >
                <X size={24} />
              </Button>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  {getCategoryIcon(selectedNode.category)}
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-white">
                      {selectedNode.name}
                    </h3>
                    <p className="text-accent text-sm mt-0.5">
                      {getCategoryLabel(selectedNode.category)}
                    </p>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 mb-4">
                  <p className="text-white/90 text-sm leading-relaxed">
                    {selectedNode.description}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                  <FlowerLotus size={20} weight="duotone" />
                  Featured in {selectedNode.products.length} Product{selectedNode.products.length !== 1 ? 's' : ''}:
                </h4>
                <div className="space-y-3">
                  {selectedNode.products.map(product => (
                    <div 
                      key={product.id}
                      className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-accent/30 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <p className="text-white font-semibold text-base mb-1">
                            {product.name.en}
                          </p>
                          <p className="text-accent text-xs font-medium mb-2">
                            {product.subtitle?.en}
                          </p>
                          <p className="text-white/70 text-sm leading-relaxed">
                            {product.description.en}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-white font-bold text-lg">
                            {product.price.COP.toLocaleString()} COP
                          </p>
                        </div>
                      </div>
                      
                      {product.benefits && (
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <p className="text-white/60 text-xs font-semibold mb-2">KEY BENEFITS:</p>
                          <ul className="space-y-1">
                            {product.benefits.en.slice(0, 3).map((benefit, idx) => (
                              <li key={idx} className="text-white/70 text-xs flex items-start gap-2">
                                <span className="text-accent mt-0.5">•</span>
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
