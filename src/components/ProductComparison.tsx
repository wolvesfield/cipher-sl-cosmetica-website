import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Plus, ArrowLeft, Check } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { ScrollArea } from './ui/scroll-area'
import { Product } from '@/lib/types'
import { mockProducts } from '@/lib/mockData'
import { useApp } from '@/lib/AppContext'
import { toast } from 'sonner'
import { useLanguage } from '@/lib/LanguageContext'

interface ProductComparisonProps {
  initialProducts?: Product[]
  onClose: () => void
  onProductClick?: (product: Product) => void
}

export function ProductComparison({ initialProducts = [], onClose, onProductClick }: ProductComparisonProps) {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>(initialProducts)
  const [availableProducts, setAvailableProducts] = useState<Product[]>([])
  const [showAddPanel, setShowAddPanel] = useState(false)
  const { language, addToCart, currency, convertPrice, formatPrice, lt, lta } = useApp()
  const { resolveText } = useLanguage()

  useEffect(() => {
    const available = mockProducts.filter(
      p => !selectedProducts.some(sp => sp.id === p.id)
    )
    setAvailableProducts(available)
  }, [selectedProducts])

  const getProductName = (product: Product) => resolveText(product.name)

  const handleAddProduct = (product: Product) => {
    if (selectedProducts.length >= 4) {
      toast.error(language === 'en' ? 'Maximum 4 products can be compared' : 'Se pueden comparar un máximo de 4 productos')
      return
    }
    setSelectedProducts([...selectedProducts, product])
    setShowAddPanel(false)
    toast.success(language === 'en' ? `${product.name.en} added to comparison` : `${product.name.es} agregado a la comparación`)
  }

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(selectedProducts.filter(p => p.id !== productId))
  }

  const handleAddToCart = (product: Product) => {
    addToCart(product)
    toast.success(language === 'en' ? `${product.name.en} added to cart` : `${product.name.es} agregado al carrito`)
  }

  const comparisonRows = [
    { key: 'price', label: { en: 'Price', es: 'Precio' } },
    { key: 'category', label: { en: 'Category', es: 'Categoría' } },
    { key: 'skinConditions', label: { en: 'Skin Conditions', es: 'Condiciones de Piel' } },
    { key: 'keyIngredients', label: { en: 'Key Ingredients', es: 'Ingredientes Clave' } },
    { key: 'benefits', label: { en: 'Benefits', es: 'Beneficios' } },
    { key: 'clinicalData', label: { en: 'Clinical Results', es: 'Resultados Clínicos' } },
  ]

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, { en: string; es: string }> = {
      'anti-aging-facial-cream': { en: 'Facial Cream', es: 'Crema Facial' },
      'anti-aging-body-care': { en: 'Body Care', es: 'Cuidado Corporal' },
      'anti-aging-hair-scalp-care': { en: 'Hair & Scalp', es: 'Cabello y Cuero Cabelludo' }
    }
    return labels[category]?.[language] || labels[category]?.['en'] || category
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 overflow-hidden"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className="absolute inset-x-0 bottom-0 top-0 md:top-12 bg-background rounded-t-3xl md:rounded-t-2xl shadow-2xl overflow-hidden flex flex-col"
      >
        <div className="sticky top-0 z-10 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 border-b border-border/50 px-3 md:px-8 py-3 md:py-6">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="h-9 w-9 md:h-10 md:w-10 rounded-full hover:bg-primary/10 flex-shrink-0"
              >
                <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
              </Button>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-serif font-bold text-slate-dark truncate">
                  {language === 'en' ? 'Product Comparison' : 'Comparación de Productos'}
                </h2>
                <p className="text-xs md:text-sm text-muted-foreground mt-0.5 md:mt-1 truncate">
                  {language === 'en' 
                    ? `Compare up to 4 products side-by-side (${selectedProducts.length}/4)` 
                    : `Compara hasta 4 productos lado a lado (${selectedProducts.length}/4)`}
                </p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-9 w-9 md:h-10 md:w-10 rounded-full hover:bg-destructive/10 text-destructive hidden md:flex flex-shrink-0"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {selectedProducts.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Plus className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-xl font-serif font-semibold text-slate-dark mb-2">
              {language === 'en' ? 'Start Your Comparison' : 'Comienza tu Comparación'}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {language === 'en'
                ? 'Select products to compare their features, ingredients, and benefits side-by-side'
                : 'Selecciona productos para comparar sus características, ingredientes y beneficios lado a lado'}
            </p>
            <Button
              onClick={() => setShowAddPanel(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Plus className="mr-2 h-4 w-4" />
              {language === 'en' ? 'Add Products' : 'Agregar Productos'}
            </Button>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto overscroll-contain" style={{ maxHeight: 'calc(100vh - 120px)' }}>
            <div className="p-3 md:p-8 max-w-7xl mx-auto">
              <div className="overflow-x-auto -mx-3 md:mx-0 px-3 md:px-0">
                <table className="w-full border-collapse min-w-full">
                  <thead>
                    <tr>
                      <th className="sticky left-0 z-20 bg-background w-32 md:w-48 lg:w-56 p-2 md:p-4 align-top border-b-2 border-primary/20">
                        <div className="flex flex-col items-start">
                          <span className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            {language === 'en' ? 'Features' : 'Características'}
                          </span>
                          {selectedProducts.length < 4 && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setShowAddPanel(true)}
                              className="mt-2 md:mt-3 w-full text-xs md:text-sm h-8 md:h-9 border-dashed border-primary/30 hover:border-primary hover:bg-primary/5"
                            >
                              <Plus className="mr-1 md:mr-2 h-3 w-3" />
                              {language === 'en' ? 'Add' : 'Agregar'}
                            </Button>
                          )}
                        </div>
                      </th>
                      {selectedProducts.map((product) => (
                        <th
                          key={product.id}
                          className="min-w-[240px] md:min-w-[280px] max-w-[260px] md:max-w-[320px] p-2 md:p-4 align-top border-b-2 border-primary/20"
                        >
                          <Card className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 bg-gradient-to-br from-card via-card to-primary/5">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleRemoveProduct(product.id)}
                              className="absolute top-1.5 right-1.5 md:top-2 md:right-2 h-7 w-7 md:h-8 md:w-8 rounded-full bg-background/80 hover:bg-destructive/10 hover:text-destructive z-10 touch-manipulation"
                            >
                              <X className="h-3.5 w-3.5 md:h-4 md:w-4" />
                            </Button>
                            <div className="p-3 md:p-4">
                              <div className="relative w-full h-32 md:h-40 rounded-lg overflow-hidden mb-3 md:mb-4 bg-muted">
                                <img
                                  src={product.image}
                                  alt={getProductName(product)}
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="text-left">
                                <h3 className="font-serif font-bold text-base md:text-lg text-slate-dark mb-1 line-clamp-2">
                                  {getProductName(product)}
                                </h3>
                                {product.subtitle && (
                                  <p className="text-[10px] md:text-xs text-muted-foreground mb-2 md:mb-3 line-clamp-2">
                                    {resolveText(product.subtitle)}
                                  </p>
                                )}
                                {product.isNew && (
                                  <Badge variant="secondary" className="mb-2 text-xs">
                                    {language === 'en' ? 'New' : 'Nuevo'}
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </Card>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, rowIndex) => (
                      <tr key={row.key} className="group">
                        <td className="sticky left-0 z-20 bg-background w-32 md:w-48 lg:w-56 p-2 md:p-4 align-top border-b border-border/50 group-hover:bg-muted/30 transition-colors">
                          <div className="font-medium text-xs md:text-sm text-slate-dark">
                            {lt(row.label)}
                          </div>
                        </td>
                        {selectedProducts.map((product) => (
                          <td
                            key={product.id}
                            className="min-w-[240px] md:min-w-[280px] max-w-[260px] md:max-w-[320px] p-2 md:p-4 align-top border-b border-border/50 group-hover:bg-muted/20 transition-colors"
                          >
                            <div className="text-xs md:text-sm text-foreground">
                              {row.key === 'price' && (
                                <div>
                                  <div className="text-xl md:text-2xl font-bold text-primary mb-2">
                                    {formatPrice(convertPrice(product.price.COP))}
                                  </div>
                                  <Button
                                    size="sm"
                                    onClick={() => handleAddToCart(product)}
                                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-xs md:text-sm h-8 md:h-9 touch-manipulation"
                                  >
                                    <Plus className="mr-1 md:mr-2 h-3 w-3" />
                                    {language === 'en' ? 'Add to Cart' : 'Agregar'}
                                  </Button>
                                  {onProductClick && (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => onProductClick(product)}
                                      className="w-full mt-2 text-xs md:text-sm h-8 md:h-9 touch-manipulation"
                                    >
                                      {language === 'en' ? 'View Details' : 'Ver Detalles'}
                                    </Button>
                                  )}
                                </div>
                              )}
                              {row.key === 'category' && (
                                <Badge variant="outline" className="text-[10px] md:text-xs">
                                  {getCategoryLabel(product.category)}
                                </Badge>
                              )}
                              {row.key === 'skinConditions' && (
                                <div className="flex flex-wrap gap-1 md:gap-1.5">
                                  {product.skinConditions.slice(0, 4).map((condition) => (
                                    <Badge
                                      key={condition}
                                      variant="secondary"
                                      className="text-[10px] md:text-xs bg-teal-light/20 text-teal-deep border-teal-deep/20"
                                    >
                                      {condition}
                                    </Badge>
                                  ))}
                                  {product.skinConditions.length > 4 && (
                                    <Badge variant="secondary" className="text-[10px] md:text-xs">
                                      +{product.skinConditions.length - 4}
                                    </Badge>
                                  )}
                                </div>
                              )}
                              {row.key === 'keyIngredients' && (
                                <ul className="space-y-1.5 md:space-y-2">
                                  {product.ingredients.slice(0, 3).map((ingredient, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5 md:gap-2">
                                      <Check className="h-3 w-3 md:h-4 md:w-4 text-primary mt-0.5 flex-shrink-0" />
                                      <span className="text-[10px] md:text-xs">{ingredient}</span>
                                    </li>
                                  ))}
                                  {product.ingredients.length > 3 && (
                                    <li className="text-[10px] md:text-xs text-muted-foreground italic">
                                      +{product.ingredients.length - 3} {language === 'en' ? 'more' : 'más'}
                                    </li>
                                  )}
                                </ul>
                              )}
                              {row.key === 'benefits' && (
                                <ul className="space-y-1.5 md:space-y-2">
                                  {lta(product.benefits).slice(0, 3).map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-1.5 md:gap-2">
                                      <Check className="h-3 w-3 md:h-4 md:w-4 text-accent mt-0.5 flex-shrink-0" />
                                      <span className="text-[10px] md:text-xs">{benefit}</span>
                                    </li>
                                  ))}
                                  {lta(product.benefits).length > 3 && (
                                    <li className="text-[10px] md:text-xs text-muted-foreground italic">
                                      +{lta(product.benefits).length - 3} {language === 'en' ? 'more' : 'más'}
                                    </li>
                                  )}
                                </ul>
                              )}
                              {row.key === 'clinicalData' && (
                                <div className="space-y-2 md:space-y-3">
                                  {product.clinicalData && product.clinicalData.length > 0 ? (
                                    product.clinicalData.map((data, idx) => (
                                      <div key={idx} className="space-y-1">
                                        <div className="flex justify-between items-center text-[10px] md:text-xs">
                                          <span className="text-muted-foreground">
                                            {lt(data.metric)}
                                          </span>
                                          <span className="font-semibold text-primary">
                                            +{data.improvement}%
                                          </span>
                                        </div>
                                        <div className="h-1.5 md:h-2 bg-muted rounded-full overflow-hidden">
                                          <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${data.improvement}%` }}
                                            transition={{ duration: 1, delay: rowIndex * 0.1 }}
                                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                          />
                                        </div>
                                      </div>
                                    ))
                                  ) : (
                                    <span className="text-[10px] md:text-xs text-muted-foreground italic">
                                      {language === 'en' ? 'No clinical data available' : 'Sin datos clínicos'}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        <AnimatePresence>
          {showAddPanel && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm z-30"
                onClick={() => setShowAddPanel(false)}
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="absolute right-0 top-0 bottom-0 w-full md:w-96 bg-background border-l border-border shadow-2xl z-40 flex flex-col overflow-hidden"
              >
                <div className="p-3 md:p-4 lg:p-6 border-b border-border">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg md:text-xl font-serif font-semibold text-slate-dark flex-1 min-w-0">
                      {language === 'en' ? 'Add Products' : 'Agregar Productos'}
                    </h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setShowAddPanel(false)}
                      className="h-8 w-8 rounded-full flex-shrink-0 touch-manipulation"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground mt-2">
                    {language === 'en'
                      ? `Select from ${availableProducts.length} available products`
                      : `Selecciona de ${availableProducts.length} productos disponibles`}
                  </p>
                </div>
                <ScrollArea className="flex-1">
                  <div className="p-3 md:p-4 lg:p-6 space-y-2 md:space-y-3">
                    {availableProducts.map((product) => (
                      <Card
                        key={product.id}
                        className="p-3 md:p-4 hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer group touch-manipulation active:scale-[0.98]"
                        onClick={() => handleAddProduct(product)}
                      >
                        <div className="flex gap-2 md:gap-3">
                          <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                            <img
                              src={product.image}
                              alt={getProductName(product)}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-xs md:text-sm text-slate-dark mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                              {getProductName(product)}
                            </h4>
                            {product.subtitle && (
                              <p className="text-[10px] md:text-xs text-muted-foreground mb-1.5 md:mb-2 line-clamp-1">
                                {resolveText(product.subtitle)}
                              </p>
                            )}
                            <Badge variant="outline" className="text-[10px] md:text-xs">
                              {getCategoryLabel(product.category)}
                            </Badge>
                          </div>
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 md:h-9 md:w-9 rounded-full flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors touch-manipulation"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleAddProduct(product)
                            }}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
