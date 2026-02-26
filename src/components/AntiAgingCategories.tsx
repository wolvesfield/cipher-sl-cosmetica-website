import { motion } from 'framer-motion'
import { mockProducts } from '@/lib/mockData'
import { Product } from '@/lib/types'
import { useApp } from '@/lib/AppContext'
import { ProductThumbnailCard } from './ProductThumbnailCard'

interface AntiAgingCategoriesProps {
  onProductClick?: (product: Product) => void
  onExploreAllFacial?: () => void
}

export function AntiAgingCategories({ onProductClick, onExploreAllFacial }: AntiAgingCategoriesProps) {
  const { language } = useApp()

  const faceProducts = mockProducts
    .filter(p => p.category === 'anti-aging-facial-cream')
    .filter(p => p.id !== 'mtrx-004' && p.id !== 'mtrx-005')
    .slice(0, 3)
  const bodyProducts = mockProducts.filter(p => p.category === 'anti-aging-body-care')
  const hairProducts = mockProducts.filter(p => p.category === 'anti-aging-hair-scalp-care')

  const categories = [
    {
      title: { en: 'Face', es: 'Rostro' },
      products: faceProducts,
      gradient: 'from-[oklch(0.72_0.06_210)] to-[oklch(0.68_0.08_200)]',
      gradientColor: 'oklch(0.70 0.07 205)'
    },
    {
      title: { en: 'Body', es: 'Cuerpo' },
      products: bodyProducts,
      gradient: 'from-[oklch(0.75_0.05_220)] to-[oklch(0.70_0.07_210)]',
      gradientColor: 'oklch(0.72 0.06 215)'
    },
    {
      title: { en: 'Hair', es: 'Cabello' },
      products: hairProducts,
      gradient: 'from-[oklch(0.70_0.08_200)] to-[oklch(0.68_0.09_195)]',
      gradientColor: 'oklch(0.69 0.085 197)'
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, oklch(0.45 0.15 260) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-slate-dark mb-2 sm:mb-3 tracking-tight">
            {language === 'en' ? 'Anti Aging -' : 'Anti Envejecimiento -'}
          </h2>
          <p className="text-sm sm:text-base text-gray-medium/80 max-w-2xl mx-auto px-4 font-light">
            {language === 'en' 
              ? 'Holistic anti-aging solutions for comprehensive care'
              : 'Soluciones anti-envejecimiento holísticas para cuidado integral'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.title.en}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
              className="group"
            >
              <div className="bg-gradient-to-b from-white to-[oklch(0.98_0.01_210)] rounded-2xl overflow-hidden border border-[oklch(0.88_0.02_210)]/40 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.12)] transition-all duration-500 backdrop-blur-sm">
                <div className={`bg-gradient-to-br ${category.gradient} p-4 text-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-[0.07]" 
                    style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  <h3 className="text-xl sm:text-2xl font-light text-white/95 mb-1.5 relative tracking-wide uppercase" style={{ letterSpacing: '0.15em' }}>
                    {language === 'en' ? category.title.en : category.title.es}
                  </h3>
                  <div className="h-px w-10 bg-white/40 mx-auto rounded-full relative" />
                </div>

                <div className="p-5 space-y-2.5">
                  {category.products.length > 0 ? (
                    category.products.map((product, index) => (
                      <ProductThumbnailCard
                        key={product.id}
                        imageSrc={product.image}
                        imageAlt={language === 'en' ? product.name.en : product.name.es}
                        name={language === 'en' ? product.name.en : product.name.es}
                        tagline={product.subtitle ? (language === 'en' ? product.subtitle.en : product.subtitle.es) : undefined}
                        onClick={() => onProductClick?.(product)}
                        gradient={category.gradientColor}
                        index={index}
                        isNew={product.isNew}
                        comingSoon={product.comingSoon}
                      />
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-medium text-sm">
                      {language === 'en' ? 'Products coming soon' : 'Productos próximamente'}
                    </div>
                  )}
                </div>

                {category.products.length > 0 && category.title.en === 'Face' && (
                  <div className="px-5 pb-5">
                    <button
                      onClick={() => {
                        if (onExploreAllFacial) {
                          onExploreAllFacial()
                        }
                      }}
                      className={`w-full py-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white text-sm font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`}
                    >
                      {language === 'en' ? 'Explore All' : 'Explorar Todo'}
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
