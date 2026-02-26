import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  z: number
  size: number
  velocity: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
  thickness: number
  color: { r: number; g: number; b: number }
}

export function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []
    const shootingStars: ShootingStar[] = []
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      const starCount = Math.floor((canvas.width * canvas.height) / 2500)
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          size: Math.random() * 2.5 + 0.5,
          velocity: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.6 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2
        })
      }
    }

    const createShootingStar = () => {
      const startFromTop = Math.random() > 0.5
      const colorVariant = Math.random()
      
      let color = { r: 255, g: 255, b: 255 }
      if (colorVariant < 0.3) {
        color = { r: 180, g: 200, b: 255 }
      } else if (colorVariant < 0.6) {
        color = { r: 200, g: 180, b: 255 }
      } else if (colorVariant < 0.8) {
        color = { r: 150, g: 220, b: 255 }
      }

      shootingStars.push({
        x: startFromTop ? Math.random() * canvas.width : canvas.width,
        y: startFromTop ? 0 : Math.random() * canvas.height * 0.5,
        length: Math.random() * 120 + 100,
        speed: Math.random() * 10 + 14,
        angle: startFromTop ? Math.PI / 4 + Math.random() * 0.4 : Math.PI / 3 + Math.random() * 0.3,
        opacity: 1,
        thickness: Math.random() * 2.5 + 1.5,
        color
      })
    }

    const drawStars = () => {
      stars.forEach(star => {
        const scale = (1000 - star.z) / 1000
        const parallaxX = (star.x - canvas.width / 2) * scale * 0.05
        const parallaxY = (star.y - canvas.height / 2) * scale * 0.05
        const x = star.x + parallaxX
        const y = star.y + parallaxY
        const size = star.size * scale
        
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7
        const alpha = star.opacity * scale * twinkle

        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        
        const brightness = 80 + (120 * scale)
        ctx.fillStyle = `rgba(${brightness}, ${brightness}, ${Math.min(255, brightness + 50)}, ${alpha})`
        ctx.fill()

        if (scale > 0.7 && Math.random() > 0.992) {
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 4)
          gradient.addColorStop(0, `rgba(200, 210, 255, ${alpha * 0.6})`)
          gradient.addColorStop(0.5, `rgba(150, 180, 255, ${alpha * 0.3})`)
          gradient.addColorStop(1, 'rgba(120, 150, 255, 0)')
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(x, y, size * 4, 0, Math.PI * 2)
          ctx.fill()
        }

        star.z -= star.velocity
        if (star.z <= 0) {
          star.z = 1000
          star.x = Math.random() * canvas.width
          star.y = Math.random() * canvas.height
        }
      })
    }

    const drawShootingStars = () => {
      shootingStars.forEach((star, index) => {
        const tailLength = star.length * (1 - (1 - star.opacity) * 0.5)
        
        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - Math.cos(star.angle) * tailLength,
          star.y - Math.sin(star.angle) * tailLength
        )
        
        gradient.addColorStop(0, `rgba(${star.color.r + 55}, ${star.color.g + 55}, ${star.color.b}, ${star.opacity})`)
        gradient.addColorStop(0.1, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${star.opacity * 0.9})`)
        gradient.addColorStop(0.4, `rgba(${star.color.r - 30}, ${star.color.g - 20}, ${star.color.b}, ${star.opacity * 0.6})`)
        gradient.addColorStop(0.7, `rgba(${star.color.r - 50}, ${star.color.g - 40}, ${star.color.b - 20}, ${star.opacity * 0.3})`)
        gradient.addColorStop(1, 'rgba(120, 140, 200, 0)')

        ctx.save()
        ctx.shadowBlur = 20
        ctx.shadowColor = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0.9)`
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = star.thickness
        ctx.lineCap = 'round'

        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(
          star.x - Math.cos(star.angle) * tailLength,
          star.y - Math.sin(star.angle) * tailLength
        )
        ctx.stroke()

        const coreGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.thickness * 3)
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        coreGradient.addColorStop(0.5, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${star.opacity * 0.5})`)
        coreGradient.addColorStop(1, 'rgba(200, 220, 255, 0)')
        
        ctx.fillStyle = coreGradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.thickness * 3, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()

        star.x -= Math.cos(star.angle) * star.speed
        star.y -= Math.sin(star.angle) * star.speed
        star.opacity -= 0.008

        if (star.opacity <= 0 || star.x < -star.length || star.y > canvas.height + star.length) {
          shootingStars.splice(index, 1)
        }
      })
    }

    const drawNebula = () => {
      const nebulae = [
        { x: 0.25, y: 0.25, size: 0.6, colors: ['180, 150, 255', '150, 180, 255'] },
        { x: 0.75, y: 0.6, size: 0.5, colors: ['200, 180, 255', '180, 200, 255'] },
        { x: 0.5, y: 0.8, size: 0.4, colors: ['160, 200, 255', '200, 220, 255'] }
      ]

      nebulae.forEach((nebula, i) => {
        const offsetX = Math.sin(time * 0.0003 + i) * 50
        const offsetY = Math.cos(time * 0.0002 + i) * 30
        
        const nebulaGradient = ctx.createRadialGradient(
          canvas.width * nebula.x + offsetX,
          canvas.height * nebula.y + offsetY,
          0,
          canvas.width * nebula.x + offsetX,
          canvas.height * nebula.y + offsetY,
          canvas.width * nebula.size
        )
        nebulaGradient.addColorStop(0, `rgba(${nebula.colors[0]}, 0.04)`)
        nebulaGradient.addColorStop(0.3, `rgba(${nebula.colors[1]}, 0.025)`)
        nebulaGradient.addColorStop(0.6, `rgba(${nebula.colors[0]}, 0.015)`)
        nebulaGradient.addColorStop(1, 'rgba(200, 200, 255, 0)')

        ctx.fillStyle = nebulaGradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      time++
      
      drawNebula()
      drawStars()
      drawShootingStars()

      if (Math.random() > 0.985) {
        createShootingStar()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'normal' }}
    />
  )
}
