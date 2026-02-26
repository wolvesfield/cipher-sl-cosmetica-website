import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from '@phosphor-icons/react'

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ 
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="w-full flex justify-center py-8 relative"
        >
          <button
            onClick={scrollToTop}
            className="group relative w-16 h-16 rounded-full bg-transparent border-2 border-primary/30 hover:border-primary/50 transition-all duration-500 touch-manipulation backdrop-blur-sm"
            aria-label="Scroll to top"
            style={{
              boxShadow: '0 0 20px rgba(var(--color-primary) / 0.2), inset 0 0 20px rgba(var(--color-primary) / 0.1)'
            }}
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px oklch(0.50 0.12 230 / 0.3), inset 0 0 20px oklch(0.50 0.12 230 / 0.15)',
                  '0 0 35px oklch(0.50 0.12 230 / 0.5), inset 0 0 30px oklch(0.50 0.12 230 / 0.25)',
                  '0 0 20px oklch(0.50 0.12 230 / 0.3), inset 0 0 20px oklch(0.50 0.12 230 / 0.15)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full"
            />
            
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative z-10 flex items-center justify-center h-full"
            >
              <ArrowUp 
                className="w-7 h-7 text-primary group-hover:text-primary transition-colors duration-300" 
                weight="bold"
                style={{
                  filter: 'drop-shadow(0 0 8px oklch(0.50 0.12 230 / 0.6))'
                }}
              />
            </motion.div>

            <motion.div
              className="absolute inset-0 rounded-full bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
