import { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { Sparkle, Drop, Sun, Package } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

type ProductCategory = 'all' | 'face' | 'body' | 'hair'

interface IngredientFilterPanelProps {
  onFilterChange: (category: ProductCategory, ingredients: string[]) => void
  language: 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr'
}

const categoryLabels: Record<string, { all: string; face: string; body: string; hair: string }> = {
  en: {
    all: 'All Products',
    face: 'Face',
    body: 'Body',
    hair: 'Hair'
  },
  es: {
    all: 'Todos los Productos',
    face: 'Rostro',
    body: 'Cuerpo',
    hair: 'Cabello'
  }
}

const ingredientsByCategory = {
  face: [
    { name: 'Retinol', icon: Sparkle, color: 'from-[oklch(0.45_0.15_260)] to-[oklch(0.60_0.10_200)]' },
    { name: 'Vitamin C', icon: Sun, color: 'from-[oklch(0.60_0.10_200)] to-[oklch(0.67_0.06_220)]' },
    { name: 'Hyaluronic Acid', icon: Drop, color: 'from-[oklch(0.56_0.08_220)] to-[oklch(0.67_0.06_220)]' },
    { name: 'Ferulic Acid', icon: Sparkle, color: 'from-[oklch(0.45_0.15_260)] to-[oklch(0.55_0.20_280)]' },
    { name: 'Coenzyme Q10', icon: Sparkle, color: 'from-[oklch(0.52_0.08_40)] to-[oklch(0.60_0.10_200)]' },
    { name: 'Bakuchiol', icon: Package, color: 'from-[oklch(0.55_0.20_280)] to-[oklch(0.50_0.12_240)]' },
    { name: 'Resveratrol', icon: Sparkle, color: 'from-[oklch(0.50_0.12_240)] to-[oklch(0.65_0.15_300)]' },
    { name: 'Ceramides', icon: Package, color: 'from-[oklch(0.45_0.15_260)] to-[oklch(0.56_0.08_220)]' },
    { name: 'Polypeptides', icon: Sparkle, color: 'from-[oklch(0.60_0.10_200)] to-[oklch(0.55_0.20_280)]' },
    { name: 'Niacinamide', icon: Sun, color: 'from-[oklch(0.67_0.06_220)] to-[oklch(0.45_0.15_260)]' }
  ],
  body: [
    { name: '4% MTRX-CBD', icon: Sparkle, color: 'from-[oklch(0.45_0.15_260)] to-[oklch(0.60_0.10_200)]' },
    { name: 'Evening Primrose Oil', icon: Drop, color: 'from-[oklch(0.56_0.08_220)] to-[oklch(0.67_0.06_220)]' },
    { name: 'Shea Butter', icon: Package, color: 'from-[oklch(0.52_0.08_40)] to-[oklch(0.60_0.10_200)]' },
    { name: 'Panthenol', icon: Drop, color: 'from-[oklch(0.60_0.10_200)] to-[oklch(0.67_0.06_220)]' }
  ],
  hair: [
    { name: '4% MTRX-CBD', icon: Sparkle, color: 'from-[oklch(0.45_0.15_260)] to-[oklch(0.60_0.10_200)]' },
    { name: 'Keratin', icon: Package, color: 'from-[oklch(0.55_0.20_280)] to-[oklch(0.50_0.12_240)]' },
    { name: 'Biotin', icon: Sparkle, color: 'from-[oklch(0.60_0.10_200)] to-[oklch(0.67_0.06_220)]' },
    { name: 'Argan Oil', icon: Drop, color: 'from-[oklch(0.56_0.08_220)] to-[oklch(0.67_0.06_220)]' },
    { name: 'Panthenol', icon: Drop, color: 'from-[oklch(0.60_0.10_200)] to-[oklch(0.67_0.06_220)]' }
  ]
}

export function IngredientFilterPanel({ onFilterChange, language }: IngredientFilterPanelProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all')
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([])

  const handleCategoryChange = (category: ProductCategory) => {
    setSelectedCategory(category)
    setSelectedIngredients([])
    onFilterChange(category, [])
  }

  const toggleIngredient = (ingredient: string) => {
    const newSelection = selectedIngredients.includes(ingredient)
      ? selectedIngredients.filter(i => i !== ingredient)
      : [...selectedIngredients, ingredient]
    
    setSelectedIngredients(newSelection)
    onFilterChange(selectedCategory, newSelection)
  }

  const clearFilters = () => {
    setSelectedIngredients([])
    onFilterChange(selectedCategory, [])
  }

  const getCurrentIngredients = () => {
    if (selectedCategory === 'all') {
      return [...ingredientsByCategory.face, ...ingredientsByCategory.body, ...ingredientsByCategory.hair]
    }
    return ingredientsByCategory[selectedCategory] || []
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-white to-[oklch(0.98_0.003_270)] border-[oklch(0.88_0.01_270)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-dark">
          {language === 'en' ? 'Filter by Ingredients' : 'Filtrar por Ingredientes'}
        </h3>
        {selectedIngredients.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            {language === 'en' ? 'Clear All' : 'Limpiar'}
          </Button>
        )}
      </div>

      <Tabs value={selectedCategory} onValueChange={(v) => handleCategoryChange(v as ProductCategory)} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="all">{(categoryLabels[language] || categoryLabels['en']).all}</TabsTrigger>
          <TabsTrigger value="face">{(categoryLabels[language] || categoryLabels['en']).face}</TabsTrigger>
          <TabsTrigger value="body">{(categoryLabels[language] || categoryLabels['en']).body}</TabsTrigger>
          <TabsTrigger value="hair">{(categoryLabels[language] || categoryLabels['en']).hair}</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedCategory} className="space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {getCurrentIngredients().map((ingredient, index) => {
                const Icon = ingredient.icon
                const isSelected = selectedIngredients.includes(ingredient.name)
                
                return (
                  <motion.div
                    key={ingredient.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2, delay: index * 0.03 }}
                  >
                    <Badge
                      onClick={() => toggleIngredient(ingredient.name)}
                      className={`cursor-pointer px-3 py-2 transition-all duration-200 ${
                        isSelected
                          ? `bg-gradient-to-r ${ingredient.color} text-white shadow-md scale-105`
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      <Icon size={14} weight="fill" className="mr-1.5" />
                      {ingredient.name}
                    </Badge>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {selectedIngredients.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t border-border"
            >
              <p className="text-sm text-muted-foreground">
                {language === 'en' ? 'Active filters:' : 'Filtros activos:'} {selectedIngredients.length}
              </p>
            </motion.div>
          )}
        </TabsContent>
      </Tabs>
    </Card>
  )
}
