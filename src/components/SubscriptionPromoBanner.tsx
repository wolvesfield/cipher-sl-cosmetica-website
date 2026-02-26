import { motion } from 'framer-motion'
import { Package, Gift, Truck, X } from '@phosphor-icons/react'
import { useState } from 'react'
import { useApp } from '@/lib/AppContext'
import { Button } from './ui/button'

export function SubscriptionPromoBanner() {
  const { language } = useApp()
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-gradient-x overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm">
              <Package className="w-6 h-6 text-white" weight="duotone" />
            </div>
            
            <div className="text-white">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Gift className="w-5 h-5" weight="fill" />
                {language === 'en' 
                  ? 'Subscribe & Save Up to 15%' 
                  : 'Suscríbete y Ahorra hasta 15%'}
              </h3>
              <p className="text-sm text-white/90 flex items-center gap-2">
                <Truck className="w-4 h-4" weight="duotone" />
                {language === 'en' 
                  ? 'Free shipping • Skip or cancel anytime • Never run out' 
                  : 'Envío gratis • Omite o cancela cuando quieras • Nunca te quedes sin productos'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              onClick={() => {
                const element = document.querySelector('[data-subscription-selector]')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'center' })
                }
              }}
            >
              {language === 'en' ? 'Learn More' : 'Más Información'}
            </Button>

            <button
              onClick={() => setIsVisible(false)}
              className="p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5 text-white" weight="bold" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </motion.div>
  )
}
