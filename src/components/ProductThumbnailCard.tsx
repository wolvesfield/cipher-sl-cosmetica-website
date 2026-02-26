import { motion } from 'framer-motion'
import { useHoverTrail } from '@/hooks/use-hover-trail'
import { TrailEffect } from './TrailEffect'

interface ProductThumbnailCardProps {
  imageSrc: string
  imageAlt: string
  name: string
  tagline?: string
  onClick?: () => void
  gradient: string
  index?: number
  isNew?: boolean
  comingSoon?: boolean
}

function extractColorFromGradient(gradient: string): string {
  const match = gradient.match(/oklch\([^)]+\)/)
  if (!match) return '#419AC1'
  
  const oklchStr = match[0]
  const values = oklchStr.match(/[\d.]+/g)
  if (!values || values.length < 3) return '#419AC1'
  
  const l = parseFloat(values[0])
  const c = parseFloat(values[1])
  const h = parseFloat(values[2])
  
  const a = c * Math.cos(h * Math.PI / 180)
  const b = c * Math.sin(h * Math.PI / 180)
  
  let y = (l + 16) / 116
  let x = a / 500 + y
  let z = y - b / 200
  
  x = 0.95047 * ((x * x * x > 0.008856) ? x * x * x : (x - 16/116) / 7.787)
  y = 1.00000 * ((y * y * y > 0.008856) ? y * y * y : (y - 16/116) / 7.787)
  z = 1.08883 * ((z * z * z > 0.008856) ? z * z * z : (z - 16/116) / 7.787)
  
  let r = x *  3.2406 + y * -1.5372 + z * -0.4986
  let g = x * -0.9689 + y *  1.8758 + z *  0.0415
  let bl = x *  0.0557 + y * -0.2040 + z *  1.0570
  
  r = (r > 0.0031308) ? (1.055 * Math.pow(r, 1/2.4) - 0.055) : 12.92 * r
  g = (g > 0.0031308) ? (1.055 * Math.pow(g, 1/2.4) - 0.055) : 12.92 * g
  bl = (bl > 0.0031308) ? (1.055 * Math.pow(bl, 1/2.4) - 0.055) : 12.92 * bl
  
  const toHex = (n: number) => {
    const val = Math.max(0, Math.min(255, Math.round(n * 255)))
    return val.toString(16).padStart(2, '0')
  }
  
  return `#${toHex(r)}${toHex(g)}${toHex(bl)}`
}

export function ProductThumbnailCard({ 
  imageSrc, 
  imageAlt, 
  name, 
  tagline, 
  onClick, 
  gradient,
  index = 0,
  isNew = false,
  comingSoon = false
}: ProductThumbnailCardProps) {
  const trailColor = extractColorFromGradient(gradient)
  const trail = useHoverTrail<HTMLButtonElement>(trailColor)
  
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ 
        scale: 1.01,
        boxShadow: `0 4px 16px -2px ${gradient.match(/oklch\([^)]+\)/)?.[0] || 'rgba(0,0,0,0.08)'}22`
      }}
      whileTap={{ scale: 0.99 }}
      className="w-full flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 text-left group/card border border-[oklch(0.90_0.01_210)]/50 hover:border-[oklch(0.88_0.02_210)]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] relative overflow-hidden"
      style={{
        '--hover-gradient': `linear-gradient(90deg, ${gradient.match(/oklch\([^)]+\)/g)?.[0] || 'transparent'}08, transparent)`,
      } as React.CSSProperties}
      ref={trail.containerRef}
      {...trail.handlers}
    >
      <TrailEffect particles={trail.particles} color={trail.color} />
      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-r opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(90deg, ${gradient.match(/oklch\([^)]+\)/g)?.[0] || 'transparent'}, transparent)`
          }}
        />
      </div>

      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-sm ring-1 ring-black/[0.03] group-hover/card:ring-black/[0.06] transition-all duration-300">
        <img 
          src={imageSrc} 
          alt={imageAlt}
          className={`w-full h-full object-cover group-hover/card:scale-105 group-hover/card:brightness-105 transition-all duration-500 ${comingSoon ? 'blur-sm' : ''}`}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/[0.02] group-hover/card:to-black/[0.04] transition-colors duration-300" />
      </div>

      <div className="flex-1 min-w-0 relative z-10">
        <h4 className="font-medium text-slate-dark text-[13px] leading-snug group-hover/card:text-primary transition-colors duration-200 line-clamp-1 tracking-tight">
          {name}
        </h4>
        {tagline && (
          <p className="text-[10.5px] text-muted-foreground/80 mt-0.5 line-clamp-1 leading-tight tracking-tight font-light">
            {tagline}
          </p>
        )}
        {comingSoon ? (
          <span className="inline-block mt-1 text-[8.5px] font-medium text-accent px-1.5 py-0.5 bg-accent/10 rounded uppercase tracking-wider">
            Coming Soon
          </span>
        ) : isNew && (
          <span className="inline-block mt-1 text-[8.5px] font-medium text-accent px-1.5 py-0.5 bg-accent/10 rounded uppercase tracking-wider">
            New
          </span>
        )}
      </div>

      <div className="opacity-0 group-hover/card:opacity-60 transition-opacity duration-200 ml-1">
        <svg 
          width="14" 
          height="14" 
          viewBox="0 0 16 16" 
          fill="none" 
          className="text-muted-foreground"
        >
          <path 
            d="M6 3L11 8L6 13" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.button>
  )
}
