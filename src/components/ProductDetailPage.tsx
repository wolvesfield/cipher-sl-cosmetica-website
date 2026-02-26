import { useState, useEffect, useRef } from 'react'
import { Product, SubscriptionFrequency } from '@/lib/types'
import { useApp } from '@/lib/AppContext'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { ShoppingCart, ArrowLeft, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import { Bottle3DViewer } from './Bottle3DViewer'
import { ClinicalDataChart } from './ClinicalDataChart'
import { ProductComparison } from './ProductComparison'
import { SubscriptionSelector } from './SubscriptionSelector'
import { ProductScienceDetail } from './ProductScienceDetail'
import { ProductInfographic } from './ProductInfographic'
import { ProductReviews } from './ProductReviews'
import { ReviewSummary } from './ReviewSummary'
import { calculateSubscriptionPrice } from '@/lib/subscriptionUtils'
import { getReviewStats } from '@/lib/reviewData'
import { useLanguage } from '@/lib/LanguageContext'

interface ProductDetailPageProps {
  product: Product
  onBack: () => void
}

export function ProductDetailPage({ product, onBack }: ProductDetailPageProps) {
  const { language, currency, addToCart, convertPrice, formatPrice, lt, lta } = useApp()
  const { resolveText } = useLanguage()
  const [isAdded, setIsAdded] = useState(false)
  const [showStickyFooter, setShowStickyFooter] = useState(false)
  const [showComparison, setShowComparison] = useState(false)
  const [subscriptionFrequency, setSubscriptionFrequency] = useState<SubscriptionFrequency>('none')
  const [showFlyingIcon, setShowFlyingIcon] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const reviewStats = getReviewStats(product.id)
  const productName = resolveText(product.name)
  const productSubtitle = resolveText(product.subtitle)
  const productDescription = resolveText(product.description)
  const productBenefits = lta(product.benefits)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 600
      setShowStickyFooter(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleAddToCart = () => {
    setShowFlyingIcon(true)
    addToCart(product)
    setIsAdded(true)
    toast.success(
      language === 'en' ? 'Added to cart!' : '¡Agregado al carrito!',
      {
        description: productName
      }
    )
    setTimeout(() => {
      setShowFlyingIcon(false)
      setIsAdded(false)
    }, 2000)
  }

  const convertedPrice = convertPrice(product.price.COP)
  const displayPrice = subscriptionFrequency !== 'none' 
    ? calculateSubscriptionPrice(convertedPrice, subscriptionFrequency)
    : convertedPrice
  const formattedPrice = formatPrice(displayPrice)
  const formattedFreeShipping = formatPrice(convertPrice(150000))

  return (
    <div className="min-h-screen bg-background">
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
            <div className="bg-teal-deep text-white rounded-full p-4 shadow-2xl">
              <ShoppingCart className="w-8 h-8" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-4 sm:mb-6 text-gray-medium hover:text-slate-dark -ml-2 sm:-ml-0 touch-manipulation"
          size="sm"
        >
          <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
          <span className="text-sm sm:text-base">{language === 'en' ? 'Back to Shop' : 'Volver a Tienda'}</span>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <Bottle3DViewer productImage={product.image} gallery={product.gallery} comingSoon={product.comingSoon} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col px-1 sm:px-0"
          >
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {product.skinConditions.map((condition) => (
                <Badge
                  key={condition}
                  variant="outline"
                  className="text-[10px] sm:text-xs text-gray-medium border-gray-medium/30 px-2 py-0.5"
                >
                  {condition}
                </Badge>
              ))}
              {product.isNew && (
                <Badge className="bg-terracotta text-white text-[10px] sm:text-xs px-2 py-0.5">
                  {language === 'en' ? 'NEW' : 'NUEVO'}
                </Badge>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-dark mb-2 leading-tight">
              {productName}
            </h1>

            {reviewStats.totalReviews > 0 && (
              <div className="mb-3">
                <ReviewSummary stats={reviewStats} />
              </div>
            )}

            {product.subtitle && (
              <p className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4 leading-snug">
                {productSubtitle}
              </p>
            )}

            <p className="text-sm sm:text-base lg:text-lg text-gray-medium mb-4 sm:mb-6 leading-relaxed">
              {productDescription}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-slate-dark">
                  {formattedPrice}
                </span>
                {subscriptionFrequency !== 'none' && (
                  <span className="text-xs sm:text-sm text-muted-foreground line-through">
                    {formatPrice(convertedPrice)}
                  </span>
                )}
              </div>
              <span className="text-xs sm:text-sm text-gray-medium">
                {language === 'en' ? 'Free shipping over' : 'Envío gratis sobre'}{' '}
                {formattedFreeShipping}
              </span>
            </div>

            <SubscriptionSelector
              basePrice={product.price.COP}
              selectedFrequency={subscriptionFrequency}
              onFrequencyChange={setSubscriptionFrequency}
              className="mb-6 sm:mb-8"
            />

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <h3 className="font-semibold text-slate-dark text-base sm:text-lg">
                {language === 'en' ? 'Key Ingredients' : 'Ingredientes Clave'}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {product.ingredients.map((ingredient) => (
                  <span
                    key={ingredient}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-secondary/50 text-slate-dark text-xs sm:text-sm rounded-md border border-border"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:gap-3 mb-3 sm:mb-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  ref={buttonRef}
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="w-full bg-teal-deep hover:bg-teal-light text-white text-base sm:text-lg h-12 sm:h-14 relative overflow-hidden touch-manipulation"
                >
                  <AnimatePresence mode="wait">
                    {isAdded ? (
                      <motion.div
                        key="check"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        exit={{ scale: 0, rotate: 180 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="flex items-center"
                      >
                        <Check className="w-5 h-5 mr-2" />
                        {language === 'en' ? 'Added!' : '¡Agregado!'}
                      </motion.div>
                    ) : (
                      <motion.div
                        key="cart"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="flex items-center"
                      >
                        <ShoppingCart className="w-5 h-5 mr-2" />
                        {product.comingSoon 
                          ? (language === 'en' ? 'Pre-Order' : 'Pre-Orden')
                          : (language === 'en' ? 'Add to Cart' : 'Agregar al Carrito')
                        }
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {isAdded && (
                    <>
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-white rounded-md"
                      />
                      <motion.div
                        className="absolute inset-0 bg-white/30"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                    </>
                  )}
                </Button>
              </motion.div>
            </div>
            
            <div className="flex justify-center mt-2 sm:mt-3 mb-3 sm:mb-4">
              <Button
                variant="outline"
                onClick={() => setShowComparison(true)}
                className="border-primary/30 hover:border-primary hover:bg-primary/5"
              >
                {language === 'en' ? 'Compare with Similar Products' : 'Comparar con Productos Similares'}
              </Button>
            </div>

            {!product.inStock && (
              <p className="text-center text-sm sm:text-base text-gray-medium">
                {language === 'en' ? 'Currently out of stock' : 'Actualmente agotado'}
              </p>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8 sm:mb-12 px-1 sm:px-0"
        >
          <ProductInfographic product={product} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="px-1 sm:px-0"
        >
          <Tabs defaultValue="benefits" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 mb-6 sm:mb-8 bg-secondary/50 h-auto">
              <TabsTrigger value="benefits" className="data-[state=active]:bg-teal-deep data-[state=active]:text-white text-xs sm:text-sm py-2.5 sm:py-3">
                {language === 'en' ? 'Benefits' : 'Beneficios'}
              </TabsTrigger>
              <TabsTrigger value="actives" className="data-[state=active]:bg-teal-deep data-[state=active]:text-white text-xs sm:text-sm py-2.5 sm:py-3">
                {language === 'en' ? 'Actives' : 'Activos'}
              </TabsTrigger>
              <TabsTrigger value="science" className="data-[state=active]:bg-teal-deep data-[state=active]:text-white text-xs sm:text-sm py-2.5 sm:py-3">
                {language === 'en' ? 'Science' : 'Ciencia'}
              </TabsTrigger>
              <TabsTrigger value="clinical" className="data-[state=active]:bg-teal-deep data-[state=active]:text-white text-xs sm:text-sm py-2.5 sm:py-3">
                {language === 'en' ? 'Clinical' : 'Clínico'}
              </TabsTrigger>
              <TabsTrigger value="reviews" className="data-[state=active]:bg-teal-deep data-[state=active]:text-white text-xs sm:text-sm py-2.5 sm:py-3 relative">
                {language === 'en' ? 'Reviews' : 'Reseñas'}
                {reviewStats.totalReviews > 0 && (
                  <span className="ml-1.5 px-1.5 py-0.5 bg-teal-deep text-white text-[10px] rounded-full">
                    {reviewStats.totalReviews}
                  </span>
                )}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="benefits" className="space-y-4">
              <Card className="p-4 sm:p-6 lg:p-8 border-none bg-card">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-dark mb-4 sm:mb-6">
                  {language === 'en' ? 'Visible Benefits' : 'Beneficios Visibles'}
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  {productBenefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-deep/10 flex items-center justify-center mt-0.5 sm:mt-1">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-teal-deep" />
                      </span>
                      <span className="text-sm sm:text-base text-gray-medium leading-relaxed">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </TabsContent>

            <TabsContent value="actives" className="space-y-4">
              <Card className="p-4 sm:p-6 lg:p-8 border-none bg-card">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-dark mb-4 sm:mb-6">
                  {language === 'en' ? 'Active Ingredients Deep Dive' : 'Ingredientes Activos'}
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {product.ingredients.map((ingredient, index) => (
                    <motion.div
                      key={ingredient}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="pb-4 sm:pb-6 border-b border-border last:border-0"
                    >
                      <h4 className="font-semibold text-slate-dark text-base sm:text-lg mb-2">
                        {ingredient}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-medium leading-relaxed">
                        {language === 'en'
                          ? 'A clinically-proven active ingredient that delivers targeted results through advanced formulation technology.'
                          : 'Un ingrediente activo clínicamente probado que ofrece resultados específicos mediante tecnología de formulación avanzada.'}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="science" className="space-y-4">
              <ProductScienceDetail product={product} />
            </TabsContent>

            <TabsContent value="clinical" className="space-y-4">
              <Card className="p-4 sm:p-6 lg:p-8 border-none bg-card">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-dark mb-4 sm:mb-6">
                  {product.id === 'mtrx-014' 
                    ? (language === 'en' ? 'Foundation & Balance' : 'Fundación y Equilibrio')
                    : (language === 'en' ? 'May See Results Starting At' : 'Puede Ver Resultados A Partir De')
                  }
                </h3>
                {product.id === 'mtrx-014' && (
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                    {language === 'en' ? 'Clinical Performance Metrics' : 'Métricas de Rendimiento Clínico'}
                  </p>
                )}
                {product.id !== 'mtrx-014' && (
                  <p className="text-sm sm:text-base text-gray-medium mb-6 sm:mb-8 leading-relaxed">
                    {language === 'en'
                      ? 'Results from rigorous clinical studies with participants aged 18-65. Most metrics show improvement within 4 weeks of consistent use.'
                      : 'Resultados de estudios clínicos rigurosos con participantes de 18-65 años. La mayoría de las métricas muestran mejoría dentro de 4 semanas de uso consistente.'}
                  </p>
                )}
                {product.clinicalData && (
                  <ClinicalDataChart data={product.clinicalData} language={language} productId={product.id} />
                )}
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              <ProductReviews 
                productId={product.id} 
                variant="full"
              />
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      <AnimatePresence>
        {showStickyFooter && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border py-3 sm:py-4 px-3 sm:px-6 z-40 lg:hidden shadow-lg"
          >
            <div className="container mx-auto flex items-center justify-between gap-2 sm:gap-4 max-w-screen-xl">
              <div className="flex-1 min-w-0">
                <p className="text-xl sm:text-2xl font-bold text-slate-dark">{formattedPrice}</p>
                <p className="text-xs sm:text-sm text-gray-medium truncate">{productName}</p>
              </div>
              <Button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="bg-teal-deep hover:bg-teal-light text-white h-10 sm:h-12 px-4 sm:px-6 touch-manipulation flex-shrink-0"
                size="sm"
              >
                <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                <span className="text-sm sm:text-base">
                  {product.comingSoon 
                    ? (language === 'en' ? 'Pre-Order' : 'Pre-Orden')
                    : (language === 'en' ? 'Add' : 'Agregar')
                  }
                </span>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showComparison && (
          <ProductComparison
            initialProducts={[product]}
            onClose={() => setShowComparison(false)}
            onProductClick={(p) => {
              setShowComparison(false)
              if (p.id !== product.id) {
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
