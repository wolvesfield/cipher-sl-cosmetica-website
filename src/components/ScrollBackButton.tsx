import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { useScrollMemory } from '@/hooks/use-scroll-memory'
import { useLanguage } from '@/lib/LanguageContext'

interface ScrollBackButtonProps {
  currentView: string
  onScrollBack?: () => void
}

export function ScrollBackButton({ currentView, onScrollBack }: ScrollBackButtonProps) {
  const { t } = useLanguage()
  const { getLastScrollPosition, scrollToSavedPosition, saveScrollPosition } = useScrollMemory()
  const [isVisible, setIsVisible] = useState(false)
  const [lastPosition, setLastPosition] = useState<{ path: string; position: number } | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        const savedPosition = getLastScrollPosition(currentView)
        if (savedPosition && savedPosition.position > 100) {
          setLastPosition(savedPosition)
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      } else {
        setIsVisible(false)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentView, getLastScrollPosition])

  useEffect(() => {
    const handleBeforeUnload = () => {
      saveScrollPosition(currentView)
    }

    return () => {
      handleBeforeUnload()
    }
  }, [currentView, saveScrollPosition])

  const handleClick = () => {
    if (lastPosition) {
      scrollToSavedPosition(lastPosition.position)
      setIsVisible(false)
      onScrollBack?.()
    }
  }

  return (
    <AnimatePresence>
      {isVisible && lastPosition && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="fixed left-4 bottom-24 z-50 touch-manipulation group"
        >
          <Button
            onClick={handleClick}
            size="lg"
            className="shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-14 h-14 p-0 bg-primary hover:bg-primary/90 text-primary-foreground"
            aria-label={t('scrollBack.label') || 'Return to previous position'}
          >
            <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform" weight="bold" />
          </Button>
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-slate-dark text-white px-3 py-1.5 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {t('scrollBack.tooltip') || 'Back to previous position'}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
