import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'
import { ReactNode } from 'react'
import { useHoverTrail } from '@/hooks/use-hover-trail'
import { TrailEffect } from './TrailEffect'

interface BubbleOfferCardProps {
  icon: ReactNode
  title: string
  subtitle: string
  discountLabel: string
  gradient: string
  glowColor: string
  onClick?: () => void
  buttonText: string
}

function extractBaseColor(gradient: string): string {
  const match = gradient.match(/#[0-9A-Fa-f]{6}/)
  return match ? match[0] : '#419AC1'
}

export function BubbleOfferCard({
  icon,
  title,
  subtitle,
  discountLabel,
  gradient,
  glowColor,
  onClick,
  buttonText
}: BubbleOfferCardProps) {
  const hoverGradient = gradient.replace('90deg', '95deg')
  const baseColor = extractBaseColor(gradient)
  const borderColor = `${baseColor}80`
  const trail = useHoverTrail<HTMLDivElement>(baseColor)
  
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -6,
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className="relative group cursor-pointer"
      ref={trail.containerRef}
      {...trail.handlers}
    >
      <div 
        className="absolute inset-0 rounded-[40px] blur-[40px] opacity-0 group-hover:opacity-60 transition-all duration-700"
        style={{
          background: glowColor,
          transform: 'translateY(16px)'
        }}
      />
      
      <motion.div 
        className="relative rounded-[36px] p-5 overflow-hidden border border-white/30 backdrop-blur-md shadow-[0_20px_50px_rgba(31,24,18,0.18)] hover:shadow-[0_24px_60px_rgba(31,24,18,0.22)] transition-all duration-500"
        style={{
          background: `${gradient}, url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`
        }}
        whileHover={{
          background: `${hoverGradient}, url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`
        }}
      >
        <TrailEffect particles={trail.particles} color={trail.color} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative flex items-center gap-4">
          <motion.div
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center flex-shrink-0 shadow-lg relative overflow-hidden"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 0 20px ${glowColor}, inset 0 0 10px rgba(255,255,255,0.2)`,
              border: `1px solid ${borderColor}`
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%)'
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="relative z-10">
              {icon}
            </div>
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5 font-[family-name:var(--font-serif)] leading-tight tracking-tight drop-shadow-md">
              {title}
            </h3>
            <p className="text-white/90 text-[11px] sm:text-xs tracking-wide font-light drop-shadow-sm">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0">
            <motion.div
              className="bg-white/25 backdrop-blur-md px-3.5 py-2 rounded-full shadow-lg"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.4)'
              }}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.35)",
                boxShadow: `0 4px 20px ${glowColor}`,
                border: `1px solid ${borderColor}`
              }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-white font-bold text-sm sm:text-base whitespace-nowrap drop-shadow-md">
                {discountLabel}
              </span>
            </motion.div>

            <motion.div
              className="hidden sm:flex items-center gap-2 text-white bg-white/15 backdrop-blur-md px-3.5 py-2 rounded-full overflow-hidden relative"
              style={{
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              whileHover={{ 
                gap: "0.625rem",
                backgroundColor: "rgba(255,255,255,0)",
                borderColor: borderColor,
                boxShadow: `0 0 15px ${glowColor}, inset 0 0 10px rgba(255,255,255,0.1)`
              }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute inset-0 border-2 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  borderImage: `linear-gradient(45deg, transparent, ${borderColor}, transparent) 1`,
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <span className="text-xs font-medium relative z-10 drop-shadow-sm">
                {buttonText}
              </span>
              <ArrowRight size={14} weight="bold" className="relative z-10" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
