import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, MagnifyingGlass, Funnel, X, SortAscending } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { mockProducts, skinConditions } from '@/lib/mockData'
import { Product } from '@/lib/types'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/LanguageContext'
import { useApp } from '@/lib/AppContext'

interface ExploreAllProductsProps {
  onBack: () => void
  onProductClick: (product: Product) => void
}

type CategoryFilter = 'all' | 'anti-aging-facial-cream' | 'anti-aging-body-care' | 'anti-aging-hair-scalp-care'
type SortOption = 'recommended' | 'newest' | 'price-low' | 'price-high' | 'name'

export function ExploreAllProducts({ onBack, onProductClick }: ExploreAllProductsProps) {
  const { language, t, resolveText } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all')
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  const [sortBy, setSortBy] = useState<SortOption>('recommended')
  const [showFilters, setShowFilters] = useState(false)

  const toggleCondition = (condition: string) => {
    setSelectedConditions(prev =>
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setCategoryFilter('all')
    setSelectedConditions([])
    setSortBy('recommended')
  }

  const hasActiveFilters = searchQuery || categoryFilter !== 'all' || selectedConditions.length > 0 || sortBy !== 'recommended'

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...mockProducts]

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(product =>
        resolveText(product.name).toLowerCase().includes(query) ||
        (product.name.en ?? '').toLowerCase().includes(query) ||
        (product.name.es ?? '').toLowerCase().includes(query) ||
        resolveText(product.subtitle).toLowerCase().includes(query) ||
        resolveText(product.description).toLowerCase().includes(query) ||
        product.ingredients.some(ing => ing.toLowerCase().includes(query))
      )
    }

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(product => product.category === categoryFilter)
    }

    if (selectedConditions.length > 0) {
      filtered = filtered.filter(product =>
        selectedConditions.some(condition =>
          product.skinConditions.includes(condition)
        )
      )
    }

    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      case 'price-low':
        filtered.sort((a, b) => (a.price.USD || a.price.COP) - (b.price.USD || b.price.COP))
        break
      case 'price-high':
        filtered.sort((a, b) => (b.price.USD || b.price.COP) - (a.price.USD || a.price.COP))
        break
      case 'name':
        filtered.sort((a, b) => resolveText(a.name).localeCompare(resolveText(b.name)))
        break
      default:
        break
    }

    return filtered
  }, [searchQuery, categoryFilter, selectedConditions, sortBy, language])

  const categoryLabels = {
    'all': t('category.all'),
    'anti-aging-facial-cream': t('category.facial'),
    'anti-aging-body-care': t('category.body'),
    'anti-aging-hair-scalp-care': t('category.hair')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(0.97_0.005_230)] via-[oklch(0.96_0.008_235)] to-[oklch(0.95_0.01_240)]">
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={onBack}
              className="shrink-0"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl sm:text-3xl font-serif font-bold text-slate-dark">{t('footer.exploreAll')}</h1>
              <p className="text-sm text-muted-foreground">{filteredAndSortedProducts.length} {language === 'en' ? 'products available' : 'productos disponibles'}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MagnifyingGlass className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={language === 'en' ? 'Search products, ingredients, or benefits...' : 'Buscar productos, ingredientes o beneficios...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              )}
            </div>

            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="shrink-0"
            >
              <Funnel className="h-4 w-4 mr-2" />
              {language === 'en' ? 'Filters' : 'Filtros'}
              {(selectedConditions.length > 0 || categoryFilter !== 'all') && (
                <Badge variant="secondary" className="ml-2 h-5 min-w-5 px-1">
                  {selectedConditions.length + (categoryFilter !== 'all' ? 1 : 0)}
                </Badge>
              )}
            </Button>

            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SortAscending className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">{language === 'en' ? 'Recommended' : 'Recomendado'}</SelectItem>
                <SelectItem value="newest">{language === 'en' ? 'Newest First' : 'Más Recientes'}</SelectItem>
                <SelectItem value="price-low">{language === 'en' ? 'Price: Low to High' : 'Precio: Menor a Mayor'}</SelectItem>
                <SelectItem value="price-high">{language === 'en' ? 'Price: High to Low' : 'Precio: Mayor a Menor'}</SelectItem>
                <SelectItem value="name">{language === 'en' ? 'Name: A to Z' : 'Nombre: A a Z'}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-dark mb-2">{language === 'en' ? 'Category' : 'Categoría'}</h3>
                    <div className="flex flex-wrap gap-2">
                      {(Object.keys(categoryLabels) as CategoryFilter[]).map((cat) => (
                        <Badge
                          key={cat}
                          variant={categoryFilter === cat ? 'default' : 'outline'}
                          className={cn(
                            'cursor-pointer transition-all',
                            categoryFilter === cat && 'bg-primary text-primary-foreground'
                          )}
                          onClick={() => setCategoryFilter(cat)}
                        >
                          {categoryLabels[cat]}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-dark mb-2">{language === 'en' ? 'Skin Conditions' : 'Condiciones de la Piel'}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skinConditions.map((condition) => (
                        <Badge
                          key={condition}
                          variant={selectedConditions.includes(condition) ? 'default' : 'outline'}
                          className={cn(
                            'cursor-pointer transition-all',
                            selectedConditions.includes(condition) && 'bg-accent text-accent-foreground'
                          )}
                          onClick={() => toggleCondition(condition)}
                        >
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="w-full sm:w-auto"
                    >
                      <X className="h-4 w-4 mr-2" />
                      {language === 'en' ? 'Clear All Filters' : 'Limpiar Todos los Filtros'}
                    </Button>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredAndSortedProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
              <MagnifyingGlass className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-slate-dark mb-2">{language === 'en' ? 'No products found' : 'No se encontraron productos'}</h3>
            <p className="text-muted-foreground mb-4">{language === 'en' ? 'Try adjusting your search or filters' : 'Intenta ajustar tu búsqueda o filtros'}</p>
            <Button onClick={clearFilters} variant="outline">
              {language === 'en' ? 'Clear Filters' : 'Limpiar Filtros'}
            </Button>
          </motion.div>
        ) : (
          <>
            {categoryFilter === 'all' ? (
              <div className="space-y-12">
                <CategorySection
                  title={t('category.facial')}
                  products={filteredAndSortedProducts.filter(p => p.category === 'anti-aging-facial-cream')}
                  onProductClick={onProductClick}
                />
                <CategorySection
                  title={t('category.body')}
                  products={filteredAndSortedProducts.filter(p => p.category === 'anti-aging-body-care')}
                  onProductClick={onProductClick}
                />
                <CategorySection
                  title={t('category.hair')}
                  products={filteredAndSortedProducts.filter(p => p.category === 'anti-aging-hair-scalp-care')}
                  onProductClick={onProductClick}
                />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    onProductClick={onProductClick}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

interface CategorySectionProps {
  title: string
  products: Product[]
  onProductClick: (product: Product) => void
}

function CategorySection({ title, products, onProductClick }: CategorySectionProps) {
  if (products.length === 0) return null

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-slate-dark mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            product={product}
            index={index}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  )
}

interface ProductCardProps {
  product: Product
  index: number
  onProductClick: (product: Product) => void
}

function ProductCard({ product, index, onProductClick }: ProductCardProps) {
  const { language, resolveText } = useLanguage()
  const { convertPrice, formatPrice } = useApp()
  
  const convertedPrice = convertPrice(product.price.COP)
  const displayPrice = formatPrice(convertedPrice)
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="flex h-full"
    >
      <Card
        className="group overflow-hidden cursor-pointer w-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-primary/10"
        onClick={() => onProductClick(product)}
      >
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-secondary/30 to-accent/20">
          <img
            src={product.image}
            alt={resolveText(product.name)}
            className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-110 ${product.comingSoon ? 'blur-sm' : ''}`}
          />
          {product.comingSoon && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
              {language === 'en' ? 'Coming Soon' : 'Próximamente'}
            </Badge>
          )}
          {product.isNew && !product.comingSoon && (
            <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground">
              {language === 'en' ? 'New' : 'Nuevo'}
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center">
              <Badge variant="secondary">{language === 'en' ? 'Out of Stock' : 'Agotado'}</Badge>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-5 flex flex-col flex-1">
          <div className="mb-3">
            <h3 className="font-serif font-bold text-base sm:text-lg text-slate-dark group-hover:text-primary transition-colors line-clamp-2 min-h-[2.5rem] sm:min-h-[2.75rem]">
              {resolveText(product.name)}
              {product.comingSoon && (
                <span className="text-sm font-normal text-muted-foreground ml-2">
                  ({language === 'en' ? 'Pre-Order' : 'Pre-Orden'})
                </span>
              )}
            </h3>
            <div className="min-h-[1.25rem] mt-1.5">
              {product.subtitle && (
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide line-clamp-1">
                  {resolveText(product.subtitle)}
                </p>
              )}
            </div>
          </div>

          <p className="text-sm text-slate-dark/70 line-clamp-2 mb-3 min-h-[2.5rem]">
            {resolveText(product.description)}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4 min-h-[1.75rem]">
            {product.skinConditions.slice(0, 3).map((condition) => (
              <Badge
                key={condition}
                variant="outline"
                className="text-xs border-primary/20 text-primary/80 h-fit"
              >
                {condition}
              </Badge>
            ))}
            {product.skinConditions.length > 3 && (
              <Badge variant="outline" className="text-xs border-primary/20 text-primary/80 h-fit">
                +{product.skinConditions.length - 3}
              </Badge>
            )}
          </div>

          <div className="pt-3 border-t border-border mt-auto">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0 flex-1">
                <span className="text-xs text-muted-foreground block">{language === 'en' ? 'From' : 'Desde'}</span>
                <p className="text-lg sm:text-xl font-bold text-primary truncate">
                  {displayPrice}
                </p>
              </div>
              <Button
                size="sm"
                className="group-hover:bg-primary group-hover:text-primary-foreground shrink-0"
              >
                {language === 'en' ? 'View Details' : 'Ver Detalles'}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
