import { useState, useMemo, useEffect, useRef } from 'react'
import { useApp } from '@/lib/AppContext'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Alert, AlertDescription } from './ui/alert'
import { ShoppingCart, Check, Sparkle, Warning, Info, CaretDown, CaretUp } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { mockProducts } from '@/lib/mockData'
import { Product } from '@/lib/types'
import { toast } from 'sonner'
import { checkProductCompatibility, CompatibilityResult } from '@/lib/productCompatibility'
import { useLanguage } from '@/lib/LanguageContext'

export function FacialCreamBundleOffer() {
  const { language, addToCart, convertPrice, formatPrice: formatPriceUtil, lt, lta } = useApp()
  const { resolveText } = useLanguage()
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([])
  const [compatibility, setCompatibility] = useState<CompatibilityResult | null>(null)
  const [isCompatibilityExpanded, setIsCompatibilityExpanded] = useState(false)
  const [showFlyingIcon, setShowFlyingIcon] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const facialCreams = useMemo(
    () => mockProducts.filter((p) => p.category === 'anti-aging-facial-cream' && p.inStock),
    []
  )

  useEffect(() => {
    if (selectedProducts.length === 2) {
      const result = checkProductCompatibility(selectedProducts[0].id, selectedProducts[1].id)
      setCompatibility(result)
    } else {
      setCompatibility(null)
    }
  }, [selectedProducts])

  const getProductName = (product: Product) => resolveText(product.name)

  const handleProductSelect = (product: Product) => {
    if (selectedProducts.find((p) => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter((p) => p.id !== product.id))
    } else {
      if (selectedProducts.length < 2) {
        setSelectedProducts([...selectedProducts, product])
      } else {
        setSelectedProducts([selectedProducts[1], product])
      }
    }
  }

  const calculateTotal = () => {
    if (selectedProducts.length !== 2) return 0
    const subtotal = selectedProducts.reduce((sum, p) => sum + convertPrice(p.price.COP), 0)
    const discount = subtotal * 0.2
    return subtotal - discount
  }

  const calculateSavings = () => {
    if (selectedProducts.length !== 2) return 0
    const subtotal = selectedProducts.reduce((sum, p) => sum + convertPrice(p.price.COP), 0)
    return subtotal * 0.2
  }

  const formatPrice = (price: number) => {
    return formatPriceUtil(price)
  }

  const handleAddToCart = () => {
    if (selectedProducts.length === 2) {
      setShowFlyingIcon(true)
      selectedProducts.forEach(product => addToCart(product))
      toast.success(
        language === 'en'
          ? '🎉 Your personalized duo has been added to cart with 20% savings!'
          : '🎉 ¡Tu dúo personalizado ha sido agregado al carrito con 20% de ahorro!'
      )
      setTimeout(() => {
        setShowFlyingIcon(false)
        setSelectedProducts([])
      }, 1000)
    }
  }

  const translations = {
    title: {
      en: 'Build Your Perfect Duo',
      es: 'Construye Tu Dúo Perfecto'
    },
    subtitle: {
      en: 'Curate your personalized skincare ritual and enjoy 20% off when you select any 2 facial creams',
      es: 'Personaliza tu ritual de cuidado de la piel y disfruta de un 20% de descuento al seleccionar 2 cremas faciales'
    },
    selectPrompt: {
      en: 'Choose 2 complementary formulas to unlock your exclusive bundle savings',
      es: 'Elige 2 fórmulas complementarias para desbloquear tu descuento exclusivo'
    },
    selected: {
      en: 'Selected',
      es: 'Seleccionado'
    },
    subtotal: {
      en: 'Subtotal',
      es: 'Subtotal'
    },
    discount: {
      en: 'Duo Savings (20% Off)',
      es: 'Ahorro del Dúo (20% de descuento)'
    },
    total: {
      en: 'Your Investment',
      es: 'Tu Inversión'
    },
    savings: {
      en: 'You Save',
      es: 'Ahorras'
    },
    addToCart: {
      en: 'Complete Your Duo',
      es: 'Completa Tu Dúo'
    },
    selectTwo: {
      en: 'Select 2 Products to Continue',
      es: 'Selecciona 2 Productos para Continuar'
    },
    yourBundle: {
      en: 'Your Bundle',
      es: 'Tu Paquete'
    },
    productsSelected: {
      en: 'products selected',
      es: 'productos seleccionados'
    }
  }

  const isSelected = (productId: string) => selectedProducts.find((p) => p.id === productId)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            <div className="bg-gradient-to-r from-[oklch(0.45_0.15_260)] to-[oklch(0.60_0.10_200)] text-white rounded-full p-4 shadow-2xl">
              <ShoppingCart size={24} weight="fill" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-[oklch(0.45_0.15_260)] to-[oklch(0.60_0.10_200)] text-white border-0 text-sm px-4 py-1.5">
            <Sparkle size={16} weight="fill" className="mr-2" />
            {language === 'en' ? 'EXCLUSIVE DUO OFFER' : 'OFERTA EXCLUSIVA DE DÚO'}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[oklch(0.45_0.15_260)] to-[oklch(0.60_0.10_200)] bg-clip-text text-transparent">
            {lt(translations.title)}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {lt(translations.subtitle)}
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-4">
            {facialCreams.map((product, index) => {
              const selected = isSelected(product.id)
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.05,
                    layout: { duration: 0.3 }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card
                      className={`cursor-pointer transition-all duration-300 hover:shadow-lg relative overflow-hidden ${
                        selected
                          ? 'ring-2 ring-primary shadow-xl shadow-primary/20'
                          : 'hover:shadow-primary/10'
                      }`}
                      onClick={() => handleProductSelect(product)}
                    >
                      <AnimatePresence>
                        {selected && (
                          <>
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              exit={{ scale: 0, rotate: 180 }}
                              transition={{ 
                                type: "spring", 
                                stiffness: 300, 
                                damping: 20 
                              }}
                              className="absolute top-3 right-3 z-10 bg-primary text-primary-foreground rounded-full p-2 shadow-lg"
                            >
                              <Check size={20} weight="bold" />
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none"
                            />
                          </>
                        )}
                      </AnimatePresence>
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <motion.img
                          src={product.image}
                          alt={getProductName(product)}
                          className="w-full h-full object-cover"
                          animate={{ 
                            scale: selected ? 1.1 : 1,
                            filter: selected ? 'brightness(1.05)' : 'brightness(1)'
                          }}
                          transition={{ duration: 0.4 }}
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                          animate={{ opacity: selected ? 0.6 : 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <motion.div
                          animate={{ 
                            color: selected ? 'var(--primary)' : 'inherit'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardTitle className="text-lg line-clamp-1">
                            {getProductName(product)}
                          </CardTitle>
                          {product.subtitle && (
                            <p className="text-xs font-semibold text-primary/80 mt-1">
                              {resolveText(product.subtitle)}
                            </p>
                          )}
                        </motion.div>
                        <div className="flex items-center justify-between pt-2">
                          <motion.span 
                            className="text-xl font-bold text-primary"
                            animate={{ scale: selected ? [1, 1.1, 1] : 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            {formatPrice(convertPrice(product.price.COP))}
                          </motion.span>
                          {product.isNew && (
                            <Badge variant="secondary" className="text-xs">
                              {language === 'en' ? 'NEW' : 'NUEVO'}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="sticky top-24"
          >
            <Card className="bg-gradient-to-br from-background via-background to-accent/5 border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {lt(translations.yourBundle)}
                </CardTitle>
                <CardDescription className="text-base">
                  {selectedProducts.length}/2 {lt(translations.productsSelected)}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {selectedProducts.length === 0 ? (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="py-8 text-center text-muted-foreground"
                    >
                      <Sparkle size={48} weight="duotone" className="mx-auto mb-3 opacity-50" />
                      <p className="text-sm">{lt(translations.selectPrompt)}</p>
                    </motion.div>
                  ) : (
                    selectedProducts.map((product) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                      >
                        <img
                          src={product.image}
                          alt={getProductName(product)}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm line-clamp-1 leading-tight mb-0.5">{getProductName(product)}</p>
                          {product.subtitle && (
                            <p className="text-xs text-primary/70 line-clamp-1 mb-0.5">{resolveText(product.subtitle)}</p>
                          )}
                          <p className="text-sm text-muted-foreground">
                            {formatPrice(convertPrice(product.price.COP))}
                          </p>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>

                {selectedProducts.length === 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3 pt-4 border-t"
                  >
                    {compatibility && compatibility.level !== 'complementary' && (
                      <AnimatePresence mode="wait">
                        {!isCompatibilityExpanded ? (
                          <motion.div
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <Alert 
                              className={`mb-4 cursor-pointer ${
                                compatibility.level === 'caution' 
                                  ? 'border-[oklch(0.65_0.25_15)] bg-[oklch(0.65_0.25_15)]/5 hover:bg-[oklch(0.65_0.25_15)]/10' 
                                  : 'border-[oklch(0.60_0.10_200)] bg-[oklch(0.60_0.10_200)]/5 hover:bg-[oklch(0.60_0.10_200)]/10'
                              } transition-colors`}
                              onClick={() => setIsCompatibilityExpanded(true)}
                            >
                              <div className="flex flex-col gap-2 w-full">
                                <div className="flex gap-3 items-start w-full">
                                  {compatibility.level === 'caution' ? (
                                    <Warning size={22} weight="fill" className="text-[oklch(0.65_0.25_15)] shrink-0 mt-0.5" />
                                  ) : (
                                    <Info size={22} weight="fill" className="text-[oklch(0.60_0.10_200)] shrink-0 mt-0.5" />
                                  )}
                                  <div className="flex-1 min-w-0 space-y-1.5">
                                    {compatibility.level === 'caution' && (
                                      <p className="font-semibold text-[oklch(0.65_0.25_15)] text-xs uppercase tracking-wider">
                                        {language === 'en' ? 'Layering Caution' : 'Precaución de Capas'}
                                      </p>
                                    )}
                                    <AlertDescription className="text-sm leading-normal text-foreground/90">
                                      <p className="line-clamp-3 pr-2">{lt(compatibility.message)}</p>
                                    </AlertDescription>
                                  </div>
                                </div>
                                <motion.div 
                                  className="flex justify-center items-center pt-1 border-t border-current/20"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <motion.div
                                    animate={{ y: [0, 3, 0] }}
                                    transition={{ 
                                      duration: 1.5, 
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  >
                                    <CaretDown size={20} weight="bold" className="text-muted-foreground" />
                                  </motion.div>
                                </motion.div>
                              </div>
                            </Alert>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="expanded"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="mb-4"
                          >
                            <Card className={`${
                              compatibility.level === 'caution' 
                                ? 'border-[oklch(0.65_0.25_15)] bg-[oklch(0.65_0.25_15)]/5' 
                                : 'border-[oklch(0.60_0.10_200)] bg-[oklch(0.60_0.10_200)]/5'
                            } border-2`}>
                              <CardHeader className="pb-3">
                                <div className="flex items-start gap-3">
                                  {compatibility.level === 'caution' ? (
                                    <Warning size={28} weight="fill" className="text-[oklch(0.65_0.25_15)] shrink-0" />
                                  ) : (
                                    <Info size={28} weight="fill" className="text-[oklch(0.60_0.10_200)] shrink-0" />
                                  )}
                                  <div className="flex-1">
                                    <CardTitle className="text-lg">
                                      {compatibility.level === 'caution' 
                                        ? (language === 'en' ? 'Layering Caution' : 'Precaución de Capas')
                                        : (language === 'en' ? 'Usage Recommendation' : 'Recomendación de Uso')
                                      }
                                    </CardTitle>
                                    {compatibility.level === 'caution' && (
                                      <CardDescription className="mt-1">
                                        {language === 'en' 
                                          ? 'Both formulas in this selection contain actives that require careful usage'
                                          : 'Ambas fórmulas en esta selección contienen activos que requieren uso cuidadoso'
                                        }
                                      </CardDescription>
                                    )}
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsCompatibilityExpanded(false)}
                                    className="shrink-0 -mr-2"
                                  >
                                    <CaretUp size={20} weight="bold" />
                                  </Button>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm leading-relaxed text-foreground/90">
                                  {lt(compatibility.message)}
                                </p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    {compatibility && compatibility.level === 'complementary' && (
                      <AnimatePresence mode="wait">
                        {!isCompatibilityExpanded ? (
                          <motion.div
                            key="collapsed-complementary"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <Alert 
                              className="mb-4 border-[oklch(0.45_0.15_260)] bg-[oklch(0.45_0.15_260)]/5 hover:bg-[oklch(0.45_0.15_260)]/10 transition-colors cursor-pointer"
                              onClick={() => setIsCompatibilityExpanded(true)}
                            >
                              <div className="flex flex-col gap-2 w-full">
                                <div className="flex gap-3 items-start w-full">
                                  <Check size={22} weight="bold" className="text-[oklch(0.45_0.15_260)] shrink-0 mt-0.5" />
                                  <div className="flex-1 min-w-0 space-y-1.5">
                                    <p className="font-semibold text-[oklch(0.45_0.15_260)] text-xs uppercase tracking-wider">
                                      {language === 'en' ? 'Perfect Pairing' : 'Combinación Perfecta'}
                                    </p>
                                    <AlertDescription className="text-sm leading-normal text-foreground/90">
                                      <p className="line-clamp-3 pr-2">{lt(compatibility.message)}</p>
                                    </AlertDescription>
                                  </div>
                                </div>
                                <motion.div 
                                  className="flex justify-center items-center pt-1 border-t border-current/20"
                                  whileHover={{ scale: 1.1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <motion.div
                                    animate={{ y: [0, 3, 0] }}
                                    transition={{ 
                                      duration: 1.5, 
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    }}
                                  >
                                    <CaretDown size={20} weight="bold" className="text-muted-foreground" />
                                  </motion.div>
                                </motion.div>
                              </div>
                            </Alert>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="expanded-complementary"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="mb-4"
                          >
                            <Card className="border-[oklch(0.45_0.15_260)] bg-[oklch(0.45_0.15_260)]/5 border-2">
                              <CardHeader className="pb-3">
                                <div className="flex items-start gap-3">
                                  <Check size={28} weight="bold" className="text-[oklch(0.45_0.15_260)] shrink-0" />
                                  <div className="flex-1">
                                    <CardTitle className="text-lg">
                                      {language === 'en' ? 'Perfect Pairing' : 'Combinación Perfecta'}
                                    </CardTitle>
                                    <CardDescription className="mt-1">
                                      {language === 'en' 
                                        ? 'These formulas work synergistically for optimal results'
                                        : 'Estas fórmulas trabajan sinérgicamente para resultados óptimos'
                                      }
                                    </CardDescription>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => setIsCompatibilityExpanded(false)}
                                    className="shrink-0 -mr-2"
                                  >
                                    <CaretUp size={20} weight="bold" />
                                  </Button>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <p className="text-sm leading-relaxed text-foreground/90">
                                  {lt(compatibility.message)}
                                </p>
                              </CardContent>
                            </Card>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}

                    <div className="flex justify-between text-sm text-foreground">
                      <span className="font-medium">{lt(translations.subtotal)}</span>
                      <span className="font-semibold">
                        {formatPrice(
                          selectedProducts.reduce((sum, p) => sum + convertPrice(p.price.COP), 0)
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-semibold text-accent">
                      <span>{lt(translations.discount)}</span>
                      <span>-{formatPrice(calculateSavings())}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold pt-3 border-t-2 border-primary/20">
                      <span>{lt(translations.total)}</span>
                      <span className="text-primary">{formatPrice(calculateTotal())}</span>
                    </div>
                    <Badge className="w-full justify-center py-2.5 bg-gradient-to-r from-[oklch(0.60_0.10_200)] to-[oklch(0.45_0.15_260)] text-white border-0 text-sm">
                      <Sparkle size={16} weight="fill" className="mr-2" />
                      {lt(translations.savings)}: {formatPrice(calculateSavings())}
                    </Badge>
                  </motion.div>
                )}

                <Button
                  ref={buttonRef}
                  onClick={handleAddToCart}
                  disabled={selectedProducts.length !== 2}
                  className="w-full gap-2 bg-gradient-to-r from-[oklch(0.45_0.15_260)] to-[oklch(0.60_0.10_200)] hover:from-[oklch(0.40_0.15_260)] hover:to-[oklch(0.55_0.10_200)] text-white relative overflow-hidden"
                  size="lg"
                >
                  <ShoppingCart size={20} weight="fill" />
                  {selectedProducts.length === 2
                    ? lt(translations.addToCart)
                    : lt(translations.selectTwo)}
                  
                  {showFlyingIcon && (
                    <motion.div
                      className="absolute inset-0 bg-white/30"
                      initial={{ x: '-100%' }}
                      animate={{ x: '100%' }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
