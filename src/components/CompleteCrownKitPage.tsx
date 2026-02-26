import { useState, useMemo, useRef } from 'react'
import { useApp } from '@/lib/AppContext'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { ArrowLeft, ShoppingCart, Crown, Check, Sparkle } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { mockProducts } from '@/lib/mockData'
import { toast } from 'sonner'
import duo1Image from '@/assets/images/duo1.png'

interface CompleteCrownKitPageProps {
  onBack: () => void
}

export function CompleteCrownKitPage({ onBack }: CompleteCrownKitPageProps) {
  const { language, addToCart, convertPrice, formatPrice: formatPriceUtil, lt, lta } = useApp()
  const [showFlyingIcon, setShowFlyingIcon] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const shampoo = useMemo(
    () => mockProducts.find((p) => p.id === 'mtrx-013'),
    []
  )

  const conditioner = useMemo(
    () => mockProducts.find((p) => p.id === 'mtrx-014'),
    []
  )

  const calculateTotal = () => {
    if (!shampoo || !conditioner) return 0
    const subtotal = convertPrice(shampoo.price.COP) + convertPrice(conditioner.price.COP)
    const discount = subtotal * 0.18
    return subtotal - discount
  }

  const calculateSavings = () => {
    if (!shampoo || !conditioner) return 0
    const subtotal = convertPrice(shampoo.price.COP) + convertPrice(conditioner.price.COP)
    return subtotal * 0.18
  }

  const calculateRegularTotal = () => {
    if (!shampoo || !conditioner) return 0
    return convertPrice(shampoo.price.COP) + convertPrice(conditioner.price.COP)
  }

  const formatPrice = (price: number) => {
    return formatPriceUtil(price)
  }

  const handleAddToCart = () => {
    if (shampoo && conditioner) {
      setShowFlyingIcon(true)
      addToCart(shampoo)
      addToCart(conditioner)
      toast.success(
        language === 'en'
          ? '🎉 Complete Crown Kit added to cart with 18% savings!'
          : '🎉 ¡Kit Corona Completa agregado al carrito con 18% de ahorro!'
      )
      setTimeout(() => {
        setShowFlyingIcon(false)
      }, 1000)
    }
  }

  const translations = {
    title: {
      en: 'Complete Crown Kit',
      es: 'Kit Corona Completa'
    },
    subtitle: {
      en: 'The complete anti-aging hair ritual. Save 18% when you invest in the full protocol.',
      es: 'El ritual completo anti-envejecimiento capilar. Ahorra 18% al invertir en el protocolo completo.'
    },
    included: {
      en: 'Included in Your Kit',
      es: 'Incluido en Tu Kit'
    },
    regularPrice: {
      en: 'Regular Price',
      es: 'Precio Regular'
    },
    kitPrice: {
      en: 'Kit Price',
      es: 'Precio del Kit'
    },
    savings: {
      en: 'Your Savings',
      es: 'Tu Ahorro'
    },
    addToCart: {
      en: 'Add Kit to Cart',
      es: 'Agregar Kit al Carrito'
    },
    back: {
      en: 'Back to Shop',
      es: 'Volver a la Tienda'
    },
    benefits: {
      en: 'Complete Hair Anti-Aging Protocol',
      es: 'Protocolo Completo Anti-Envejecimiento Capilar'
    },
    benefit1: {
      en: 'Reduces scalp inflammation (primary cause of hair thinning)',
      es: 'Reduce inflamación del cuero cabelludo (causa primaria de adelgazamiento)'
    },
    benefit2: {
      en: 'Creates optimal follicle environment for growth',
      es: 'Crea ambiente folicular óptimo para crecimiento'
    },
    benefit3: {
      en: 'Seals hair cuticle for shine and prevents moisture loss',
      es: 'Sella cutícula capilar para brillo y previene pérdida de humedad'
    },
    benefit4: {
      en: 'Reduces breakage and split ends (hair aging markers)',
      es: 'Reduce quiebre y puntas abiertas (marcadores de envejecimiento capilar)'
    },
    benefit5: {
      en: 'Lightweight formulas that don\'t weigh down fine hair',
      es: 'Fórmulas ligeras que no pesan en cabello fino'
    },
    whyTogether: {
      en: 'Why This Duo Works',
      es: 'Por Qué Este Dúo Funciona'
    },
    whyText: {
      en: 'A healthy crown requires fertile ground. The Root of Power cleanses and creates an anti-inflammatory foundation, while The Crown Jewel seals in moisture and repairs the hair shaft. Together, they fight the inflammation that leads to thinning, ensuring lustrous, ageless hair from scalp to tip.',
      es: 'Una corona saludable requiere terreno fértil. La Raíz del Poder limpia y crea una base antiinflamatoria, mientras que La Joya de la Corona sella la humedad y repara el tallo capilar. Juntos, combaten la inflamación que lleva al adelgazamiento, asegurando cabello lustroso y sin edad desde el cuero cabelludo hasta las puntas.'
    }
  }

  const t = translations

  if (!shampoo || !conditioner) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-lg text-foreground">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[oklch(0.98_0.005_230)] to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <Button
          onClick={onBack}
          variant="ghost"
          className="mb-6 group hover:bg-primary/5"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
          {lt(t.back)}
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[oklch(0.50_0.15_280)]/10 to-[oklch(0.45_0.18_260)]/10 backdrop-blur-sm border border-[oklch(0.50_0.15_280)]/20 rounded-full px-5 py-2.5 mb-5"
            >
              <Crown className="w-5 h-5 text-[oklch(0.50_0.15_280)]" weight="fill" />
              <span className="text-sm text-[oklch(0.50_0.15_280)] font-semibold tracking-wider uppercase">
                {language === 'en' ? 'LAUNCH SPECIAL' : 'OFERTA DE LANZAMIENTO'}
              </span>
              <Badge className="bg-gradient-to-r from-[oklch(0.65_0.25_15)] to-[oklch(0.70_0.20_30)] text-white border-0">
                18% OFF
              </Badge>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-dark mb-4 font-[family-name:var(--font-serif)]">
              {lt(t.title)}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {lt(t.subtitle)}
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <Card className="overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
                <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden bg-gradient-to-br from-teal-deep/5 to-primary/5">
                  <img
                    src={duo1Image}
                    alt={lt(t.title)}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-serif)]">
                        {lt(shampoo.name)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {lt(shampoo.subtitle) || ''}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {lt(shampoo.description)}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--font-serif)]">
                        {lt(conditioner.name)}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {lt(conditioner.subtitle) || ''}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {lt(conditioner.description)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-2 gap-8 mb-12"
            >
              <Card className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Sparkle className="text-accent" weight="fill" />
                    {lt(t.whyTogether)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {lt(t.whyText)}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-teal-deep/30 bg-gradient-to-br from-teal-deep/5 to-transparent">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Check className="text-teal-deep" weight="bold" />
                    {lt(t.benefits)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {[t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="text-teal-deep mt-0.5 flex-shrink-0" size={16} weight="bold" />
                        <span>{lt(benefit)}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-background shadow-2xl sticky bottom-4 z-10">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex-1 w-full">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">{lt(t.regularPrice)}</p>
                          <p className="text-xl font-bold line-through text-muted-foreground">
                            {formatPrice(calculateRegularTotal())}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">{lt(t.kitPrice)}</p>
                          <p className="text-3xl font-bold text-primary">
                            {formatPrice(calculateTotal())}
                          </p>
                        </div>

                        <div className="space-y-1">
                          <p className="text-sm text-muted-foreground">{lt(t.savings)}</p>
                          <p className="text-xl font-bold text-accent">
                            {formatPrice(calculateSavings())}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-auto">
                      <Button
                        ref={buttonRef}
                        onClick={handleAddToCart}
                        size="lg"
                        className="w-full lg:w-auto bg-gradient-to-r from-primary to-teal-deep hover:from-primary/90 hover:to-teal-deep/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group px-8 py-6 text-lg"
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: '100%' }}
                          transition={{ duration: 0.5 }}
                        />
                        <ShoppingCart className="mr-2 relative z-10" weight="fill" />
                        <span className="relative z-10">{lt(t.addToCart)}</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {showFlyingIcon && buttonRef.current && (
        <motion.div
          className="fixed z-50 pointer-events-none"
          initial={{
            x: buttonRef.current.getBoundingClientRect().left + 20,
            y: buttonRef.current.getBoundingClientRect().top + 20,
            scale: 1,
            opacity: 1,
          }}
          animate={{
            x: window.innerWidth - 100,
            y: 20,
            scale: 0.5,
            opacity: 0,
          }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <ShoppingCart size={32} className="text-primary" weight="fill" />
        </motion.div>
      )}
    </div>
  )
}
