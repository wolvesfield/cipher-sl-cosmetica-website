import { Product } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useApp } from '@/lib/AppContext'
import { useLanguage } from '@/lib/LanguageContext'
import { ShoppingCart, Sparkles, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import { useState, useRef } from 'react'
import { ProductReviews } from './ProductReviews'
import { useHoverTrail } from '@/hooks/use-hover-trail'
import { TrailEffect } from './TrailEffect'

interface ProductCardProps {
  product: Product
  index?: number
  onProductClick?: (product: Product) => void
  isSelected?: boolean
  onSelect?: (product: Product) => void
  selectionMode?: boolean
}

export function ProductCard({ 
  product, 
  index = 0, 
  onProductClick, 
  isSelected = false,
  onSelect,
  selectionMode = false
}: ProductCardProps) {
  const { addToCart, convertPrice, formatPrice } = useApp()
  const { language, resolveText } = useLanguage()
  const [isAddingToCart, setIsAddingToCart] = useState(false)
  const [showFlyingIcon, setShowFlyingIcon] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const productName = resolveText(product.name)
  const productSubtitle = resolveText(product.subtitle)
  const productDescription = resolveText(product.description)
  
  const primaryColor = product.category === 'anti-aging-body-care' 
    ? '#00A3AF' 
    : product.category === 'anti-aging-hair-scalp-care' 
    ? '#8B4789' 
    : '#419AC1'
  
  const trail = useHoverTrail<HTMLDivElement>(primaryColor)

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsAddingToCart(true)
    setShowFlyingIcon(true)
    
    addToCart(product)
    toast.success(
      language === 'en' ? 'Added to cart!' : '¡Agregado al carrito!',
      {
        description: productName
      }
    )
    
    await new Promise(resolve => setTimeout(resolve, 800))
    setShowFlyingIcon(false)
    setIsAddingToCart(false)
  }

  const handleCardClick = () => {
    if (selectionMode && onSelect) {
      onSelect(product)
    } else if (onProductClick) {
      onProductClick(product)
    }
  }

  const convertedPrice = convertPrice(product.price.COP)
  const displayPrice = formatPrice(convertedPrice)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.05,
        layout: { duration: 0.3 }
      }}
    >
      <AnimatePresence>
        {showFlyingIcon && buttonRef.current && (
          <motion.div
            initial={{ 
              position: 'fixed',
              left: buttonRef.current.getBoundingClientRect().left + buttonRef.current.offsetWidth / 2,
              top: buttonRef.current.getBoundingClientRect().top + buttonRef.current.offsetHeight / 2,
              scale: 1,
              opacity: 1,
              zIndex: 9999
            }}
            animate={{ 
              left: window.innerWidth - 100,
              top: 20,
              scale: 0.5,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.8,
              ease: [0.34, 1.56, 0.64, 1]
            }}
            className="pointer-events-none"
          >
            <div className="bg-primary text-white rounded-full p-3 shadow-2xl">
              <ShoppingCart className="w-6 h-6" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-full"
        ref={trail.containerRef}
        {...trail.handlers}
      >
        <Card 
          className={`group overflow-hidden border-2 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer relative h-full flex flex-col ${
            isSelected 
              ? 'border-primary shadow-lg shadow-primary/20 ring-2 ring-primary/20' 
              : 'border-border/50 hover:border-primary/30 hover:shadow-primary/10'
          }`}
          onClick={handleCardClick}
        >
          <TrailEffect particles={trail.particles} color={trail.color} />
          <AnimatePresence>
            {isSelected && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
                className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20 bg-primary text-white rounded-full p-1.5 sm:p-2 shadow-lg"
              >
                <Check className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-teal-deep/5 pointer-events-none"
            animate={{ opacity: isSelected ? 0.3 : 0 }}
            transition={{ duration: 0.5 }}
          />
        
          <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-gradient-to-br from-secondary/50 to-muted/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(120,119,198,0.1),_transparent)]" />
            <motion.img
              src={product.image}
              alt={productName}
              className={`w-full h-full object-contain sm:object-cover ${product.comingSoon ? 'blur-sm' : ''}`}
              animate={{ scale: isSelected ? 1.05 : 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            />
            {product.comingSoon ? (
              <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-accent to-accent/80 text-white border-none shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                {language === 'en' ? 'COMING SOON' : 'PRÓXIMAMENTE'}
              </Badge>
            ) : product.isNew && (
              <Badge className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-gradient-to-r from-primary to-teal-deep text-white border-none shadow-lg text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                {language === 'en' ? 'NEW' : 'NUEVO'}
              </Badge>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center">
                <span className="text-slate-dark font-semibold text-sm sm:text-lg">
                  {language === 'en' ? 'Out of Stock' : 'Agotado'}
                </span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
          </div>

          <div className="p-3 sm:p-6 relative flex-1 flex flex-col">
            <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3">
              {product.skinConditions.slice(0, 2).map((condition) => (
                <Badge
                  key={condition}
                  variant="outline"
                  className="text-[9px] sm:text-xs text-muted-foreground border-border/60 bg-muted/30 px-1.5 sm:px-2 py-0 sm:py-0.5"
                >
                  {condition}
                </Badge>
              ))}
            </div>

            <motion.h3 
              className="font-playfair text-sm sm:text-xl font-bold mb-0.5 sm:mb-1 text-slate-dark group-hover:text-primary transition-colors line-clamp-2"
              animate={{ color: isSelected ? 'var(--primary)' : 'var(--slate-dark)' }}
            >
               {productName}
            </motion.h3>

            {product.subtitle && (
              <p className="text-[10px] sm:text-xs font-semibold text-primary/80 mb-1 sm:mb-2 line-clamp-1">
                {productSubtitle}
              </p>
            )}

            <div className="mb-2 sm:mb-3">
              <ProductReviews productId={product.id} variant="mini" />
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-5 line-clamp-2 leading-relaxed hidden sm:block">
              {productDescription}
            </p>

            <div className="flex items-center justify-between pt-2 sm:pt-4 border-t border-border/50 gap-2 sm:gap-3 mt-auto">
              <div className="flex flex-col min-w-0 flex-1">
                <div className="text-[9px] sm:text-xs text-muted-foreground mb-0.5 sm:mb-1">
                  {language === 'en' ? 'Price' : 'Precio'}
                </div>
                <span className="text-base sm:text-2xl font-bold text-slate-dark bg-gradient-to-r from-slate-dark to-primary bg-clip-text leading-none truncate">
                  {displayPrice}
                </span>
              </div>

              {!selectionMode && (
                <motion.div
                  animate={{ 
                    scale: isAddingToCart ? [1, 0.95, 1.05, 1] : 1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0"
                >
                  <Button
                    ref={buttonRef}
                    size="sm"
                    onClick={handleAddToCart}
                    disabled={!product.inStock || isAddingToCart}
                    className="bg-gradient-to-r from-primary to-teal-deep hover:from-primary/90 hover:to-teal-deep/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap relative overflow-hidden h-8 sm:h-10 text-xs sm:text-sm px-2 sm:px-4"
                  >
                    <AnimatePresence mode="wait">
                      {isAddingToCart ? (
                        <motion.div
                          key="adding"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center"
                        >
                          <Check className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                          <span className="hidden sm:inline">{language === 'en' ? 'Added!' : '¡Agregado!'}</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="add"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-center"
                        >
                          <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                          <span className="hidden sm:inline">
                            {product.comingSoon 
                              ? (language === 'en' ? 'Pre-Order' : 'Pre-Orden')
                              : (language === 'en' ? 'Add' : 'Agregar')
                            }
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {isAddingToCart && (
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    )}
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  )
}
