import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { FeaturedReview } from './FeaturedReview'
import { useApp } from '@/lib/AppContext'
import { mockReviews, getAllReviewStats } from '@/lib/reviewData'

export function CustomerTestimonials() {
  const { language } = useApp()
  const stats = getAllReviewStats()
  
  const featuredReviews = mockReviews
    .filter(review => review.rating === 5 && review.verifiedPurchase)
    .sort((a, b) => b.helpful - a.helpful)
    .slice(0, 3)

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-deep/10 border border-teal-deep/20 mb-4">
            <Star className="w-4 h-4 fill-teal-deep text-teal-deep" />
            <span className="text-sm font-semibold text-teal-deep">
              {stats.averageRating.toFixed(1)} {language === 'en' ? 'out of 5 stars' : 'de 5 estrellas'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-dark mb-4 font-playfair">
            {language === 'en' 
              ? 'Loved by Thousands' 
              : 'Amado por Miles'}
          </h2>
          
          <p className="text-base sm:text-lg text-gray-medium max-w-2xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Real results from real people. Join thousands of satisfied customers who have transformed their skin with MTRX.'
              : 'Resultados reales de personas reales. Únete a miles de clientes satisfechos que han transformado su piel con MTRX.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-dark mb-1">
                {stats.totalReviews}+
              </div>
              <div className="text-sm text-gray-medium">
                {language === 'en' ? 'Reviews' : 'Reseñas'}
              </div>
            </div>
            
            <div className="w-px h-12 bg-border hidden sm:block" />
            
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-dark mb-1">
                {stats.verifiedPurchasePercentage.toFixed(0)}%
              </div>
              <div className="text-sm text-gray-medium">
                {language === 'en' ? 'Verified Purchases' : 'Compras Verificadas'}
              </div>
            </div>
            
            <div className="w-px h-12 bg-border hidden sm:block" />
            
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-dark mb-1">
                {((stats.ratingDistribution[5] / stats.totalReviews) * 100).toFixed(0)}%
              </div>
              <div className="text-sm text-gray-medium">
                {language === 'en' ? '5-Star Reviews' : 'Reseñas 5 Estrellas'}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {featuredReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <FeaturedReview review={review} language={language} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm text-gray-medium mb-4">
            {language === 'en' 
              ? 'See what our customers are saying about their transformation journey' 
              : 'Vea lo que nuestros clientes dicen sobre su viaje de transformación'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
