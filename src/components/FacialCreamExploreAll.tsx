import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { mockProducts } from '@/lib/mockData'
import { Product } from '@/lib/types'
import { useApp } from '@/lib/AppContext'
import { ArrowLeft, Sparkles, Clock, ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

interface FacialCreamExploreAllProps {
  onBack: () => void
  onProductClick: (product: Product) => void
}

export function FacialCreamExploreAll({ onBack, onProductClick }: FacialCreamExploreAllProps) {
  const { language, convertPrice, formatPrice } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const allFacialCreams = mockProducts.filter(p => p.category === 'anti-aging-facial-cream')

  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-[oklch(0.98_0.005_230)] via-[oklch(0.96_0.008_240)] to-[oklch(0.94_0.012_250)] relative overflow-hidden">
      {/* Animated Galaxy Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Shooting Stars */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-accent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 4px 2px rgba(101, 163, 173, 0.4)',
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 + 100],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Hyper-realistic Galaxy Stars */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`galaxy-star-${i}`}
            className="absolute rounded-full bg-primary"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 3px rgba(77, 115, 140, 0.5)',
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Nebula Clouds with Parallax */}
        <motion.div
          className="absolute inset-0"
          style={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
        >
          <div 
            className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 rounded-full blur-[120px] opacity-10"
            style={{
              background: 'radial-gradient(circle, oklch(0.65 0.12 200) 0%, transparent 70%)',
            }}
          />
          <div 
            className="absolute top-1/2 right-1/4 w-80 h-80 sm:w-[500px] sm:h-[500px] rounded-full blur-[150px] opacity-10"
            style={{
              background: 'radial-gradient(circle, oklch(0.50 0.12 230) 0%, transparent 70%)',
            }}
          />
        </motion.div>
      </div>

      {/* Header */}
      <div className="relative z-10 sticky top-0 backdrop-blur-md bg-white/80 border-b border-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            onClick={onBack}
            variant="ghost"
            className="text-slate-dark hover:text-primary hover:bg-primary/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === 'en' ? 'Back' : 'Volver'}
          </Button>
        </div>
      </div>

      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative z-10 py-16 sm:py-24 md:py-32"
        style={{ opacity, scale }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-accent/10 text-accent border-accent/30 px-6 py-2 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              {language === 'en' ? 'Limited Availability' : 'Disponibilidad Limitada'}
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-dark mb-6 leading-tight">
              {language === 'en' ? (
                <>
                  The Future of <br />
                  <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    Anti-Aging Science
                  </span>
                </>
              ) : (
                <>
                  El Futuro de la <br />
                  <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                    Ciencia Anti-Envejecimiento
                  </span>
                </>
              )}
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-dark/70 max-w-3xl mx-auto mb-8 leading-relaxed">
              {language === 'en' 
                ? 'Experience the next generation of clinical luxury skincare. Each formula represents years of research and innovation in dermal matrix technology.'
                : 'Experimenta la próxima generación de cuidado de la piel de lujo clínico. Cada fórmula representa años de investigación e innovación en tecnología de matriz dérmica.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-slate-dark/60 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                <span>{language === 'en' ? 'Pre-Order Now' : 'Pre-Orden Ahora'}</span>
              </div>
              <div className="w-px h-6 bg-slate-dark/20" />
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span>{language === 'en' ? 'Ships in 2-4 weeks' : 'Envío en 2-4 semanas'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Products Grid with Parallax */}
      <div className="relative z-10 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            style={{ y: y2 }}
          >
            {allFacialCreams.map((product, index) => (
              <ProductCard 
                key={product.id}
                product={product}
                index={index}
                language={language}
                convertPrice={convertPrice}
                formatPrice={formatPrice}
                onProductClick={onProductClick}
              />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="relative z-10 py-16 sm:py-20"
        style={{ y: y3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary/5 to-accent/5 backdrop-blur-sm border border-primary/15 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-dark mb-4">
              {language === 'en' ? 'Join the Revolution' : 'Únete a la Revolución'}
            </h2>
            <p className="text-slate-dark/70 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Be among the first to experience the transformative power of MTRX-CBD Technology. Limited quantities available for pre-order.'
                : 'Sé uno de los primeros en experimentar el poder transformador de la Tecnología MTRX-CBD. Cantidades limitadas disponibles para pre-orden.'}
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-primary text-white hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 px-8 py-6 text-lg"
              onClick={onBack}
            >
              {language === 'en' ? 'Explore Collection' : 'Explorar Colección'}
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

interface ProductCardProps {
  product: Product
  index: number
  language: 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr'
  formatPrice: (amount: number) => string
  convertPrice: (copPrice: number) => number
  onProductClick: (product: Product) => void
}

function ProductCard({ product, index, language, convertPrice, formatPrice, onProductClick }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const price = convertPrice(product.price.COP || 0)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative bg-white/90 backdrop-blur-md border border-primary/15 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
        {/* Glow Effect on Hover */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-all duration-500 pointer-events-none"
          animate={isHovered ? {
            boxShadow: '0 0 60px rgba(101, 163, 173, 0.15)',
          } : {}}
        />

        {/* Status Badge */}
        {product.comingSoon && (
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-accent text-white border-none backdrop-blur-sm px-3 py-1 text-xs font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {language === 'en' ? 'COMING SOON' : 'PRÓXIMAMENTE'}
            </Badge>
          </div>
        )}

        {/* Product Image */}
        <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-gradient-to-br from-sand-light to-background">
          <motion.img
            src={product.image}
            alt={language === 'en' ? product.name.en : product.name.es}
            className={`w-full h-full object-contain sm:object-cover ${product.comingSoon ? 'blur-sm' : ''}`}
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
        </div>

        {/* Product Info */}
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-dark mb-2 line-clamp-2">
            {language === 'en' ? product.name.en : product.name.es}
          </h3>
          {product.subtitle && (
            <p className="text-accent text-sm font-medium mb-3">
              {language === 'en' ? product.subtitle.en : product.subtitle.es}
            </p>
          )}
          <p className="text-slate-dark/60 text-sm mb-4 line-clamp-3">
            {language === 'en' ? product.description.en : product.description.es}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-slate-dark/50 text-xs mb-1">
                {language === 'en' ? 'Pre-Order Price' : 'Precio Pre-Orden'}
              </p>
              <p className="text-2xl font-bold text-slate-dark">
                {formatPrice(price)}
              </p>
            </div>
          </div>

          {/* Action Button */}
          <Button
            onClick={() => onProductClick(product)}
            className="w-full bg-gradient-to-r from-accent to-primary text-white hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 group/btn"
          >
            <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            {language === 'en' ? 'View Details' : 'Ver Detalles'}
          </Button>

          {/* Limited Stock Indicator */}
          {!['mtrx-001', 'mtrx-002', 'mtrx-010'].includes(product.id) && (
            <motion.div 
              className="mt-3 flex items-center justify-center gap-2 text-xs text-accent"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-3 h-3" />
              <span>{language === 'en' ? 'Limited quantities available' : 'Cantidades limitadas'}</span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
