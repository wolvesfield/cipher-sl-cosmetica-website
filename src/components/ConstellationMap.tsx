import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkle, Atom } from '@phosphor-icons/react'
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
  category: 'active' | 'base' | 'enhancer'
}

export function ConstellationMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | undefined>(undefined)
  const [hoveredNode, setHoveredNode] = useState<IngredientNode | null>(null)
  const [selectedNode, setSelectedNode] = useState<IngredientNode | null>(null)
  const [stars, setStars] = useState<Star[]>([])
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([])
  const [ingredientNodes, setIngredientNodes] = useState<IngredientNode[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const ingredientMap = new Map<string, Product[]>()
    
    mockProducts.forEach(product => {
      product.ingredients.forEach(ingredient => {
        if (!ingredientMap.has(ingredient)) {
          ingredientMap.set(ingredient, [])
        }
        ingredientMap.get(ingredient)!.push(product)
      })
    })

    // Generate a deterministic seed from ingredient name for consistent positioning
    const hashString = (str: string) => {
      let hash = 0
      for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash
      }
      return Math.abs(hash)
    }

    const seededRandom = (seed: number) => {
      const x = Math.sin(seed) * 10000
      return x - Math.floor(x)
    }

    const updateNodes = () => {
      const nodes: IngredientNode[] = []
      const entries = Array.from(ingredientMap.entries())
      const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 800
      const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 400
      const radius = typeof window !== 'undefined' ? Math.min(window.innerWidth, window.innerHeight) * 0.35 : 300

      entries.forEach(([ingredient, products], index) => {
        const angle = (index / entries.length) * Math.PI * 2
        const seed = hashString(ingredient)
        const randomOffset = (seededRandom(seed) - 0.5) * 100
        const distance = radius + randomOffset
        
        let category: 'active' | 'base' | 'enhancer' = 'base'
        if (ingredient.includes('CBD') || ingredient.includes('Retinol') || ingredient.includes('Vitamin')) {
          category = 'active'
        } else if (ingredient.includes('Acid') || ingredient.includes('Peptide') || ingredient.includes('CoQ10')) {
          category = 'enhancer'
        }

        nodes.push({
          id: `node-${index}`,
          name: ingredient,
          x: centerX + Math.cos(angle) * distance,
          y: centerY + Math.sin(angle) * distance,
          products,
          category
        })
      })

      setIngredientNodes(nodes)
    }

    updateNodes()

    // Debounce resize handler to prevent excessive recalculations
    let resizeTimeout: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(updateNodes, 150)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimeout)
    }
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

    const starCount = 800
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
      gradient.addColorStop(0, 'rgba(25, 15, 45, 0.8)')
      gradient.addColorStop(0.5, 'rgba(15, 10, 30, 0.6)')
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
              if (distance < 400) {
                const opacity = Math.max(0, 1 - distance / 400) * 0.15
                ctx.strokeStyle = `rgba(120, 150, 200, ${opacity})`
                ctx.lineWidth = 1
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
        
        let color = 'rgba(150, 180, 220, 0.6)'
        let glowColor = 'rgba(150, 180, 220, 0.3)'
        if (node.category === 'active') {
          color = 'rgba(100, 180, 255, 0.8)'
          glowColor = 'rgba(100, 180, 255, 0.4)'
        } else if (node.category === 'enhancer') {
          color = 'rgba(200, 150, 255, 0.7)'
          glowColor = 'rgba(200, 150, 255, 0.35)'
        }

        const size = (isHovered || isSelected) ? 12 : 8
        const glowSize = (isHovered || isSelected) ? 24 : 16

        ctx.fillStyle = glowColor
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)'
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
      return distance < 20
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
      return distance < 20
    })

    setHoveredNode(hoveredNode || null)
  }

  return (
    <div className="relative w-full h-screen bg-[oklch(0.05_0.02_250)] overflow-hidden">
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        onMouseMove={handleCanvasMouseMove}
        className="absolute inset-0 cursor-crosshair"
      />

      <div className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center gap-2 sm:gap-3 justify-center mb-2">
            <Sparkle size={24} weight="fill" className="text-[oklch(0.60_0.10_200)] sm:w-8 sm:h-8" />
            <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-white">
              Ingredient Constellation
            </h2>
            <Atom size={24} weight="fill" className="text-[oklch(0.60_0.10_200)] sm:w-8 sm:h-8" />
          </div>
          <p className="text-white/70 text-xs sm:text-sm">
            Explore the cosmic connections between MTRX ingredients
          </p>
        </motion.div>
      </div>

      <div className="absolute top-4 sm:top-8 right-4 sm:right-8 z-10">
        <Card className="bg-slate-dark/90 backdrop-blur-md border-primary/20 p-3 sm:p-4">
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[oklch(0.63_0.16_240)] border-2 border-white" />
              <span className="text-white/90 text-[10px] sm:text-xs">Active Ingredients</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[oklch(0.65_0.12_280)] border-2 border-white" />
              <span className="text-white/90 text-[10px] sm:text-xs">Enhancers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[oklch(0.60_0.05_220)] border-2 border-white" />
              <span className="text-white/90 text-[10px] sm:text-xs">Base Formula</span>
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
              left: Math.min(mousePos.x + 20, window.innerWidth - 200),
              top: Math.max(20, Math.min(mousePos.y - 20, window.innerHeight - 100)),
              pointerEvents: 'none'
            }}
            className="z-20"
          >
            <Card className="bg-slate-dark/95 backdrop-blur-lg border-primary/30 p-2 sm:p-3 max-w-[180px] sm:max-w-xs">
              <p className="text-white font-semibold text-xs sm:text-sm line-clamp-2">{hoveredNode.name}</p>
              <p className="text-white/60 text-[10px] sm:text-xs mt-1">
                Found in {hoveredNode.products.length} product{hoveredNode.products.length !== 1 ? 's' : ''}
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
            className="fixed inset-0 flex items-center justify-center z-30 p-3 sm:p-4"
            onClick={() => setSelectedNode(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <Card 
              className="relative bg-gradient-to-br from-slate-dark via-[oklch(0.18_0.02_250)] to-slate-dark border-primary/30 p-4 sm:p-6 max-w-2xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/70 hover:text-white h-8 w-8 sm:h-10 sm:w-10"
                onClick={() => setSelectedNode(null)}
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </Button>

              <div className="mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3 mb-2">
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${
                    selectedNode.category === 'active' 
                      ? 'bg-[oklch(0.63_0.16_240)]' 
                      : selectedNode.category === 'enhancer'
                      ? 'bg-[oklch(0.65_0.12_280)]'
                      : 'bg-[oklch(0.60_0.05_220)]'
                  } border-2 border-white`} />
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white">
                    {selectedNode.name}
                  </h3>
                </div>
                <p className="text-white/70 text-xs sm:text-sm">
                  {selectedNode.category === 'active' && 'Primary therapeutic compound'}
                  {selectedNode.category === 'enhancer' && 'Synergistic enhancement molecule'}
                  {selectedNode.category === 'base' && 'Essential foundation ingredient'}
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
                  Featured in {selectedNode.products.length} Product{selectedNode.products.length !== 1 ? 's' : ''}:
                </h4>
                <div className="space-y-2 sm:space-y-3">
                  {selectedNode.products.map(product => (
                    <div 
                      key={product.id}
                      className="bg-white/5 rounded-lg p-3 sm:p-4 border border-white/10 hover:border-accent/30 transition-colors"
                    >
                      <p className="text-white font-semibold text-xs sm:text-sm">
                        {product.name.en}
                      </p>
                      <p className="text-white/60 text-[10px] sm:text-xs mt-1 line-clamp-2">
                        {product.description.en}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mt-2">
                        {product.skinConditions.map(condition => (
                          <span 
                            key={condition}
                            className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 sm:py-1 bg-accent/20 text-accent rounded-full"
                          >
                            {condition}
                          </span>
                        ))}
                      </div>
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
