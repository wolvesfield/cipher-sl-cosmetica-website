import { useState, useCallback, useRef, useEffect } from 'react'

interface TrailParticle {
  id: number
  x: number
  y: number
  timestamp: number
}

export function useHoverTrail<T extends HTMLElement = HTMLElement>(color: string = '#419AC1') {
  const [particles, setParticles] = useState<TrailParticle[]>([])
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<T>(null)
  const lastPositionRef = useRef({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<T>) => {
    if (!containerRef.current || !isHovering) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const dx = x - lastPositionRef.current.x
    const dy = y - lastPositionRef.current.y
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (distance > 10) {
      const newParticle: TrailParticle = {
        id: Date.now() + Math.random(),
        x,
        y,
        timestamp: Date.now()
      }

      setParticles(prev => [...prev.slice(-12), newParticle])
      lastPositionRef.current = { x, y }
    }
  }, [isHovering])

  const handleMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false)
    setParticles([])
  }, [])

  useEffect(() => {
    if (particles.length === 0) return

    const intervalId = setInterval(() => {
      const now = Date.now()
      setParticles(prev => prev.filter(p => now - p.timestamp < 800))
    }, 100)

    return () => {
      clearInterval(intervalId)
    }
  }, [particles.length])

  return {
    containerRef,
    particles,
    isHovering,
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    },
    color
  }
}
