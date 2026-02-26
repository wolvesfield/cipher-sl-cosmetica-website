import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useApp } from '@/lib/AppContext'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

interface FloatingCartButtonProps {
  onClick: () => void
}

export function FloatingCartButton({ onClick }: FloatingCartButtonProps) {
  const { cart, language, formatPrice, convertPrice } = useApp()
  const [isVisible, setIsVisible] = useState(false)
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const subtotal = cart.reduce((sum, item) => {
    const itemPrice = convertPrice(item.product.price.COP)
    return sum + itemPrice * item.quantity
  }, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (totalItems === 0) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Button
            onClick={onClick}
            className="relative bg-gradient-to-br from-teal-deep via-primary to-accent hover:from-teal-light hover:via-primary/90 hover:to-accent/90 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 rounded-2xl px-6 py-6 h-auto group"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ShoppingCart className="w-6 h-6" />
                </motion.div>
                
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-destructive text-white text-xs font-bold border-2 border-white animate-bounce">
                  {totalItems}
                </Badge>
              </div>
              
              <div className="flex flex-col items-start">
                <span className="text-xs font-medium opacity-90">
                  {totalItems} {language === 'en' ? 'item(s)' : 'artículo(s)'}
                </span>
                <span className="text-lg font-bold">
                  {formatPrice(subtotal)}
                </span>
              </div>
            </div>

            <motion.div
              className="absolute inset-0 rounded-2xl bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Button>

          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-teal-deep/20 via-primary/20 to-accent/20 rounded-3xl blur-2xl -z-10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
