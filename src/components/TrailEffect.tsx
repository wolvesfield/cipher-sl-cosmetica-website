import { motion, AnimatePresence } from 'framer-motion'

interface TrailParticle {
  id: number
  x: number
  y: number
  timestamp: number
}

interface TrailEffectProps {
  particles: TrailParticle[]
  color: string
}

export function TrailEffect({ particles, color }: TrailEffectProps) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {particles.map((particle, index) => {
          const age = Date.now() - particle.timestamp
          const normalizedAge = age / 800
          const size = 24 - normalizedAge * 12
          
          return (
            <motion.div
              key={particle.id}
              initial={{ 
                opacity: 0.6,
                scale: 0.8
              }}
              animate={{ 
                opacity: 0,
                scale: 1.5,
                x: particle.x - size / 2,
                y: particle.y - size / 2
              }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.8,
                ease: "easeOut"
              }}
              className="absolute rounded-full blur-sm"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, ${color}60 0%, ${color}20 50%, transparent 100%)`,
                left: particle.x - size / 2,
                top: particle.y - size / 2,
                zIndex: particles.length - index
              }}
            />
          )
        })}
      </AnimatePresence>
    </div>
  )
}
