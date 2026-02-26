import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sparkle, ArrowLeft, ShoppingCart, CheckCircle } from '@phosphor-icons/react'
import { useApp } from '@/lib/AppContext'
import { Product } from '@/lib/types'
import { mockProducts } from '@/lib/mockData'
import { cn } from '@/lib/utils'
import { toast } from 'sonner'
import { useLanguage } from '@/lib/LanguageContext'

interface ProductSuggestionProps {
  onBack: () => void
  onProductClick: (product: Product) => void
}

interface SkinProfile {
  skinType: string
  concerns: string[]
  age: string
  currentRoutine: string
}

interface SuggestionResult {
  products: Product[]
  reasoning: string
  routine: {
    morning: string[]
    evening: string[]
  }
}

export function ProductSuggestion({ onBack, onProductClick }: ProductSuggestionProps) {
  const { language, addToCart } = useApp()
  const { resolveText } = useLanguage()
  const [step, setStep] = useState<'profile' | 'loading' | 'results'>('profile')
  const [profile, setProfile] = useState<SkinProfile>({
    skinType: '',
    concerns: [],
    age: '',
    currentRoutine: ''
  })
  const [suggestions, setSuggestions] = useState<SuggestionResult | null>(null)
  const [addedProducts, setAddedProducts] = useState<Set<string>>(new Set())

  const skinTypes = [
    { value: 'dry', label: { en: 'Dry', es: 'Seca' } },
    { value: 'oily', label: { en: 'Oily', es: 'Grasa' } },
    { value: 'combination', label: { en: 'Combination', es: 'Mixta' } },
    { value: 'normal', label: { en: 'Normal', es: 'Normal' } },
    { value: 'sensitive', label: { en: 'Sensitive', es: 'Sensible' } }
  ]

  const concerns = [
    { value: 'aging', label: { en: 'Aging', es: 'Envejecimiento' } },
    { value: 'acne', label: { en: 'Acne', es: 'Acné' } },
    { value: 'hyperpigmentation', label: { en: 'Dark Spots', es: 'Manchas' } },
    { value: 'dehydration', label: { en: 'Dehydration', es: 'Deshidratación' } },
    { value: 'sensitivity', label: { en: 'Sensitivity', es: 'Sensibilidad' } },
    { value: 'rosacea', label: { en: 'Rosacea', es: 'Rosácea' } },
    { value: 'fine-lines', label: { en: 'Fine Lines', es: 'Líneas Finas' } },
    { value: 'dark-circles', label: { en: 'Dark Circles', es: 'Ojeras' } }
  ]

  const ageRanges = [
    { value: '18-25', label: '18-25' },
    { value: '26-35', label: '26-35' },
    { value: '36-45', label: '36-45' },
    { value: '46-55', label: '46-55' },
    { value: '55+', label: '55+' }
  ]

  const toggleConcern = (concern: string) => {
    setProfile(prev => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter(c => c !== concern)
        : [...prev.concerns, concern]
    }))
  }

  const generateSuggestions = async () => {
    if (!profile.skinType || profile.concerns.length === 0 || !profile.age) {
      toast.error(language === 'en' ? 'Please complete your profile' : 'Por favor completa tu perfil')
      return
    }

    setStep('loading')

    try {
      const productList = mockProducts.map(p => ({
        id: p.id,
        name: p.name.en,
        subtitle: p.subtitle?.en || '',
        category: p.category,
        skinConditions: p.skinConditions,
        ingredients: p.ingredients.slice(0, 3),
        benefits: p.benefits.en.slice(0, 3)
      }))

      const prompt = `You are an expert skincare consultant for SL Cosmetica, a luxury clinical skincare brand.

User Profile:
- Skin Type: ${profile.skinType}
- Primary Concerns: ${profile.concerns.join(', ')}
- Age Range: ${profile.age}
- Current Routine: ${profile.currentRoutine || 'None specified'}

Available Products:
${JSON.stringify(productList, null, 2)}

Task: Recommend 3-5 products from the available list that best address this user's concerns. Return a JSON object with:
1. productIds: array of product IDs to recommend (use exact IDs from the product list)
2. reasoning: a brief, personalized explanation (2-3 sentences) of why these products work together
3. morningRoutine: array of product names for AM use (in order of application)
4. eveningRoutine: array of product names for PM use (in order of application)

Important:
- Only recommend products that exist in the available products list
- Prioritize products that match the user's specific concerns
- Consider ingredient synergies
- Keep recommendations realistic (3-5 products max)
- Use cosmetic-safe language only

Return valid JSON only, no additional text.`

      const response = await window.spark.llm(prompt, 'gpt-4o', true)
      const result = JSON.parse(response)

      const recommendedProducts = mockProducts.filter(p => 
        result.productIds.includes(p.id)
      )

      setSuggestions({
        products: recommendedProducts,
        reasoning: result.reasoning,
        routine: {
          morning: result.morningRoutine || [],
          evening: result.eveningRoutine || []
        }
      })

      setStep('results')
    } catch (error) {
      console.error('Error generating suggestions:', error)
      toast.error(language === 'en' 
        ? 'Unable to generate suggestions. Please try again.' 
        : 'No se pudieron generar sugerencias. Inténtalo de nuevo.'
      )
      setStep('profile')
    }
  }

  const handleAddToCart = (product: Product) => {
    if (addToCart) {
      addToCart(product)
      setAddedProducts(prev => new Set(prev).add(product.id))
      toast.success(
        language === 'en' 
          ? `${product.name.en} added to cart` 
          : `${product.name.es} agregado al carrito`
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(0.97_0.005_230)] via-[oklch(0.95_0.015_240)] to-[oklch(0.93_0.025_250)]">
      <div className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2" />
          {language === 'en' ? 'Back' : 'Volver'}
        </Button>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 'profile' && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                    <Sparkle size={32} weight="fill" className="text-white" />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-playfair text-slate-dark mb-3">
                    {language === 'en' ? 'Personalized Recommendations' : 'Recomendaciones Personalizadas'}
                  </h1>
                  <p className="text-lg text-slate-dark/70">
                    {language === 'en' 
                      ? 'Tell us about your skin and we\'ll suggest the perfect products for you' 
                      : 'Cuéntanos sobre tu piel y te sugeriremos los productos perfectos'}
                  </p>
                </div>

                <Card className="shadow-lg border-primary/10">
                  <CardHeader>
                    <CardTitle className="text-2xl font-playfair">
                      {language === 'en' ? 'Your Skin Profile' : 'Tu Perfil de Piel'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'en' 
                        ? 'Answer a few questions to get started' 
                        : 'Responde algunas preguntas para comenzar'}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div>
                      <label className="block text-sm font-semibold text-slate-dark mb-3">
                        {language === 'en' ? 'Skin Type' : 'Tipo de Piel'}
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {skinTypes.map(type => (
                          <Button
                            key={type.value}
                            variant={profile.skinType === type.value ? 'default' : 'outline'}
                            onClick={() => setProfile(prev => ({ ...prev, skinType: type.value }))}
                            className="h-auto py-3"
                          >
                            {resolveText(type.label)}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-dark mb-3">
                        {language === 'en' ? 'Skin Concerns (Select all that apply)' : 'Preocupaciones de la Piel (Selecciona todas las que apliquen)'}
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {concerns.map(concern => (
                          <Button
                            key={concern.value}
                            variant={profile.concerns.includes(concern.value) ? 'default' : 'outline'}
                            onClick={() => toggleConcern(concern.value)}
                            className="h-auto py-3"
                          >
                            {resolveText(concern.label)}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-dark mb-3">
                        {language === 'en' ? 'Age Range' : 'Rango de Edad'}
                      </label>
                      <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                        {ageRanges.map(range => (
                          <Button
                            key={range.value}
                            variant={profile.age === range.value ? 'default' : 'outline'}
                            onClick={() => setProfile(prev => ({ ...prev, age: range.value }))}
                            className="h-auto py-3"
                          >
                            {range.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-dark mb-3">
                        {language === 'en' ? 'Current Routine (Optional)' : 'Rutina Actual (Opcional)'}
                      </label>
                      <textarea
                        value={profile.currentRoutine}
                        onChange={(e) => setProfile(prev => ({ ...prev, currentRoutine: e.target.value }))}
                        placeholder={language === 'en' 
                          ? 'Describe your current skincare routine...' 
                          : 'Describe tu rutina actual de cuidado de la piel...'}
                        className="w-full px-4 py-3 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                      />
                    </div>

                    <Button
                      onClick={generateSuggestions}
                      disabled={!profile.skinType || profile.concerns.length === 0 || !profile.age}
                      className="w-full py-6 text-lg"
                    >
                      <Sparkle className="mr-2" weight="fill" />
                      {language === 'en' ? 'Get My Recommendations' : 'Obtener Mis Recomendaciones'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {step === 'loading' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="relative">
                  <div className="w-24 h-24 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                  <Sparkle 
                    size={40} 
                    weight="fill" 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary animate-pulse" 
                  />
                </div>
                <p className="mt-6 text-xl text-slate-dark/70">
                  {language === 'en' 
                    ? 'Analyzing your skin profile...' 
                    : 'Analizando tu perfil de piel...'}
                </p>
              </motion.div>
            )}

            {step === 'results' && suggestions && (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-playfair text-slate-dark mb-3">
                    {language === 'en' ? 'Your Personalized Routine' : 'Tu Rutina Personalizada'}
                  </h1>
                  <p className="text-lg text-slate-dark/70 max-w-2xl mx-auto">
                    {suggestions.reasoning}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="shadow-md border-primary/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl font-playfair">
                        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                          ☀️
                        </div>
                        {language === 'en' ? 'Morning Routine' : 'Rutina Matutina'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-2">
                        {suggestions.routine.morning.map((product, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-semibold">
                              {idx + 1}
                            </span>
                            <span className="text-slate-dark/80">{product}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>

                  <Card className="shadow-md border-primary/10">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-xl font-playfair">
                        <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                          🌙
                        </div>
                        {language === 'en' ? 'Evening Routine' : 'Rutina Nocturna'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="space-y-2">
                        {suggestions.routine.evening.map((product, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs flex items-center justify-center font-semibold">
                              {idx + 1}
                            </span>
                            <span className="text-slate-dark/80">{product}</span>
                          </li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-playfair text-slate-dark mb-4">
                    {language === 'en' ? 'Recommended Products' : 'Productos Recomendados'}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {suggestions.products.map((product) => (
                      <Card 
                        key={product.id} 
                        className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-primary/10"
                      >
                        <div onClick={() => onProductClick(product)}>
                          <div className="aspect-square overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/5 to-accent/5">
                            <img
                              src={product.image}
                              alt={resolveText(product.name)}
                              className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${product.comingSoon ? 'blur-sm' : ''}`}
                            />
                          </div>
                          <CardHeader>
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex-1">
                                <CardTitle className="text-lg font-playfair line-clamp-2">
                                  {resolveText(product.name)}
                                </CardTitle>
                                {product.subtitle && (
                                  <CardDescription className="mt-1 line-clamp-1">
                                    {resolveText(product.subtitle)}
                                  </CardDescription>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-3">
                              {product.skinConditions.slice(0, 2).map(condition => (
                                <Badge key={condition} variant="secondary" className="text-xs">
                                  {condition}
                                </Badge>
                              ))}
                            </div>
                          </CardHeader>
                        </div>
                        <CardContent>
                          <Button
                            onClick={() => handleAddToCart(product)}
                            className={cn(
                              "w-full transition-all duration-300",
                              addedProducts.has(product.id) && "bg-green-600 hover:bg-green-700"
                            )}
                          >
                            {addedProducts.has(product.id) ? (
                              <>
                                <CheckCircle className="mr-2" weight="fill" />
                                {language === 'en' ? 'Added' : 'Agregado'}
                              </>
                            ) : (
                              <>
                                <ShoppingCart className="mr-2" />
                                {language === 'en' ? 'Add to Cart' : 'Agregar al Carrito'}
                              </>
                            )}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setStep('profile')
                      setSuggestions(null)
                      setAddedProducts(new Set())
                    }}
                    className="px-8"
                  >
                    {language === 'en' ? 'Start Over' : 'Comenzar de Nuevo'}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
