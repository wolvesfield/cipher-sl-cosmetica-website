import { useState, useMemo } from 'react'
import { mockProducts, skinConditions as skinConditionsData } from '@/lib/mockData'
import { Product } from '@/lib/types'
import { ProductCard } from './ProductCard'
import { ProductComparison } from './ProductComparison'
import { IngredientJourney } from './IngredientJourney'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useApp } from '@/lib/AppContext'
import { SlidersHorizontal, Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export function ProductGrid({ onProductClick }: { onProductClick?: (product: Product) => void }) {
  const { language } = useApp()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedConditions, setSelectedConditions] = useState<string[]>([])
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'face' | 'body' | 'hair'>('all')
  const [sortBy, setSortBy] = useState<'default' | 'price-low' | 'price-high' | 'newest' | 'rating'>('default')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [showComparison, setShowComparison] = useState(false)

  const skinConditions = skinConditionsData

  const allIngredients = useMemo(() => {
    const ingredientSet = new Set<string>()
    mockProducts.forEach(product => {
      product.ingredients.forEach(ingredient => {
        ingredientSet.add(ingredient)
      })
    })
    return Array.from(ingredientSet).sort()
  }, [])

  const toggleCondition = (condition: string) => {
    setSelectedConditions((current) =>
      current.includes(condition)
        ? current.filter(c => c !== condition)
        : [...current, condition]
    )
  }

  const toggleIngredient = (ingredient: string) => {
    setSelectedIngredients((current) =>
      current.includes(ingredient)
        ? current.filter(i => i !== ingredient)
        : [...current, ingredient]
    )
  }

  const clearAllFilters = () => {
    setSearchQuery('')
    setSelectedConditions([])
    setSelectedIngredients([])
    setCategoryFilter('all')
    setSortBy('default')
  }

  const activeFilterCount = selectedConditions.length + selectedIngredients.length + (searchQuery ? 1 : 0) + (categoryFilter !== 'all' ? 1 : 0)

  const filteredProducts = useMemo(() => {
    let products = [...mockProducts]

    if (categoryFilter !== 'all') {
      products = products.filter(product => {
        const productName = product.name.en.toLowerCase()
        if (categoryFilter === 'body') {
          return productName.includes('body') || productName.includes('lotion')
        } else if (categoryFilter === 'hair') {
          return productName.includes('shampoo') || productName.includes('conditioner') || productName.includes('hair')
        } else if (categoryFilter === 'face') {
          return !productName.includes('body') && !productName.includes('lotion') && 
                 !productName.includes('shampoo') && !productName.includes('conditioner') && 
                 !productName.includes('hair')
        }
        return true
      })
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      products = products.filter(product => {
        const nameMatch = product.name.en.toLowerCase().includes(query) || 
                         product.name.es.toLowerCase().includes(query)
        const ingredientMatch = product.ingredients.some(ing => 
          ing.toLowerCase().includes(query)
        )
        return nameMatch || ingredientMatch
      })
    }

    if (selectedConditions.length > 0) {
      products = products.filter(product =>
        product.skinConditions.some(condition => selectedConditions.includes(condition))
      )
    }

    if (selectedIngredients.length > 0) {
      products = products.filter(product =>
        selectedIngredients.every(selectedIng =>
          product.ingredients.some(productIng =>
            productIng.toLowerCase().includes(selectedIng.toLowerCase())
          )
        )
      )
    }

    if (sortBy === 'price-low') {
      products.sort((a, b) => a.price.COP - b.price.COP)
    } else if (sortBy === 'price-high') {
      products.sort((a, b) => b.price.COP - a.price.COP)
    } else if (sortBy === 'newest') {
      products.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    }

    return products
  }, [searchQuery, selectedConditions, selectedIngredients, sortBy, categoryFilter])

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-4 text-slate-dark">
          {language === 'en' ? 'Skin Conditions' : 'Condiciones de Piel'}
        </h3>
        <div className="space-y-3">
          {skinConditions.map((condition) => (
            <div key={condition} className="flex items-center space-x-2">
              <Checkbox
                id={`condition-${condition}`}
                checked={selectedConditions.includes(condition)}
                onCheckedChange={() => toggleCondition(condition)}
              />
              <Label
                htmlFor={`condition-${condition}`}
                className="text-sm font-normal cursor-pointer"
              >
                {condition}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h3 className="font-semibold mb-4 text-slate-dark">
          {language === 'en' ? 'Key Ingredients' : 'Ingredientes Clave'}
        </h3>
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
          {allIngredients.map((ingredient) => (
            <div key={ingredient} className="flex items-center space-x-2">
              <Checkbox
                id={`ingredient-${ingredient}`}
                checked={selectedIngredients.includes(ingredient)}
                onCheckedChange={() => toggleIngredient(ingredient)}
              />
              <Label
                htmlFor={`ingredient-${ingredient}`}
                className="text-sm font-normal cursor-pointer leading-tight"
              >
                {ingredient}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <>
          <Separator />
          <Button
            variant="outline"
            onClick={clearAllFilters}
            className="w-full text-teal-deep border-teal-deep hover:bg-teal-deep/10"
          >
            {language === 'en' ? 'Clear All Filters' : 'Limpiar Todos los Filtros'}
          </Button>
        </>
      )}
    </div>
  )

  return (
    <section className="py-8 sm:py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 flex items-start justify-between gap-3 sm:gap-4 flex-wrap">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-dark mb-1 sm:mb-2">
              {language === 'en' ? 'Featured Products' : 'Productos Destacados'}
            </h2>
            <motion.p 
              className="text-sm sm:text-base text-gray-medium"
              key={filteredProducts.length}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {language === 'en'
                ? `${filteredProducts.length} products available`
                : `${filteredProducts.length} productos disponibles`}
            </motion.p>
          </motion.div>
          <div className="flex flex-wrap gap-2 sm:gap-3 w-full sm:w-auto">
            <IngredientJourney language={language} />
            <Button
              variant="outline"
              onClick={() => setShowComparison(true)}
              className="border-primary/30 hover:border-primary hover:bg-primary/5"
            >
              {language === 'en' ? 'Compare Products' : 'Comparar Productos'}
            </Button>
          </div>
        </div>

        <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
          <div className="relative">
            <Search className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-medium" />
            <Input
              type="text"
              placeholder={language === 'en' ? 'Search by product name or ingredient...' : 'Buscar por nombre o ingrediente...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 sm:pl-10 pr-9 sm:pr-10 h-10 sm:h-12 text-sm sm:text-base"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 text-gray-medium hover:text-slate-dark transition-colors"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2 flex-1 min-w-0 sm:min-w-[200px]">
              <Select value={sortBy} onValueChange={(value: 'default' | 'price-low' | 'price-high' | 'newest' | 'rating') => setSortBy(value)}>
                <SelectTrigger className="w-full sm:w-[200px] h-10 text-sm sm:text-base">
                  <SelectValue placeholder={language === 'en' ? 'Sort by' : 'Ordenar por'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default" className="text-sm sm:text-base">
                    {language === 'en' ? 'Default' : 'Predeterminado'}
                  </SelectItem>
                  <SelectItem value="price-low" className="text-sm sm:text-base">
                    {language === 'en' ? 'Price: Low to High' : 'Precio: Menor a Mayor'}
                  </SelectItem>
                  <SelectItem value="price-high" className="text-sm sm:text-base">
                    {language === 'en' ? 'Price: High to Low' : 'Precio: Mayor a Menor'}
                  </SelectItem>
                  <SelectItem value="newest" className="text-sm sm:text-base">
                    {language === 'en' ? 'Newest' : 'Más Reciente'}
                  </SelectItem>
                </SelectContent>
              </Select>

              <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="relative h-10 text-sm sm:text-base flex-shrink-0">
                    <SlidersHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                    {language === 'en' ? 'Filters' : 'Filtros'}
                    <AnimatePresence>
                      {activeFilterCount > 0 && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                          <Badge className="ml-1.5 sm:ml-2 bg-teal-deep text-white h-4 sm:h-5 min-w-4 sm:min-w-5 px-1 sm:px-1.5 text-[10px] sm:text-xs">
                            {activeFilterCount}
                          </Badge>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:max-w-md overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle className="text-base sm:text-lg">{language === 'en' ? 'Filters' : 'Filtros'}</SheetTitle>
                    <SheetDescription className="text-xs sm:text-sm">
                      {language === 'en'
                        ? 'Filter products by skin concerns and ingredients'
                        : 'Filtra productos por preocupaciones e ingredientes'}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-4 sm:mt-6">
                    <FilterContent />
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {activeFilterCount > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="sm:flex-shrink-0"
              >
                <Button
                  variant="ghost"
                  onClick={clearAllFilters}
                  className="text-xs sm:text-sm text-teal-deep hover:text-teal-deep hover:bg-teal-deep/10 h-10"
                >
                  <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1" />
                  {language === 'en' ? 'Clear all' : 'Limpiar todo'}
                </Button>
              </motion.div>
            )}
          </div>

          {activeFilterCount > 0 && (
            <motion.div 
              layout
              className="flex flex-wrap gap-1.5 sm:gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {searchQuery && (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant="secondary" className="pl-3 pr-2 py-1.5">
                    {language === 'en' ? 'Search' : 'Búsqueda'}: "{searchQuery}"
                    <button
                      onClick={() => setSearchQuery('')}
                      className="ml-1.5 hover:text-slate-dark"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                </motion.div>
              )}
              {selectedConditions.map(condition => (
                <motion.div
                  key={condition}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant="secondary" className="pl-2 sm:pl-3 pr-1.5 sm:pr-2 py-1 sm:py-1.5 text-xs">
                    {condition}
                    <button
                      onClick={() => toggleCondition(condition)}
                      className="ml-1 sm:ml-1.5 hover:text-slate-dark"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                </motion.div>
              ))}
              {selectedIngredients.map(ingredient => (
                <motion.div
                  key={ingredient}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Badge variant="secondary" className="pl-2 sm:pl-3 pr-1.5 sm:pr-2 py-1 sm:py-1.5 text-xs">
                    {ingredient}
                    <button
                      onClick={() => toggleIngredient(ingredient)}
                      className="ml-1 sm:ml-1.5 hover:text-slate-dark"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {filteredProducts.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="text-center py-12 sm:py-16 bg-secondary/30 rounded-lg px-4"
          >
            <p className="text-lg sm:text-xl text-slate-dark font-medium mb-2">
              {language === 'en' ? 'No products found' : 'No se encontraron productos'}
            </p>
            <p className="text-sm sm:text-base text-gray-medium mb-4 sm:mb-6">
              {language === 'en' 
                ? 'Try adjusting your search or filters' 
                : 'Intenta ajustar tu búsqueda o filtros'}
            </p>
            <Button
              onClick={clearAllFilters}
              className="bg-teal-deep text-white hover:bg-teal-deep/90 text-sm sm:text-base h-10 sm:h-11 px-4 sm:px-6"
            >
              {language === 'en' ? 'Clear All Filters' : 'Limpiar Todos los Filtros'}
            </Button>
          </motion.div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  index={index}
                  onProductClick={onProductClick}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {showComparison && (
          <ProductComparison
            onClose={() => setShowComparison(false)}
            onProductClick={(product) => {
              setShowComparison(false)
              if (onProductClick) {
                onProductClick(product)
              }
            }}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
