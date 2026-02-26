import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Review } from '@/lib/types'
import { Language } from '@/lib/types'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

interface FeaturedReviewProps {
  review: Review
  language: Language
}

export function FeaturedReview({ review, language }: FeaturedReviewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="relative overflow-hidden p-6 sm:p-8 bg-gradient-to-br from-background via-secondary/20 to-background border-primary/20 hover:shadow-xl transition-shadow duration-300">
        <div className="absolute top-4 right-4 opacity-10">
          <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-primary" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 sm:w-5 sm:h-5 ${
                  star <= review.rating
                    ? 'fill-teal-deep text-teal-deep'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>

          <h4 className="text-lg sm:text-xl font-bold text-slate-dark mb-2">
            {review.title[language] || review.title['en']}
          </h4>

          <p className="text-sm sm:text-base text-gray-medium leading-relaxed mb-4">
            {(() => { const c = review.comment[language] || review.comment['en'] || ''; return c.length > 200 ? c.slice(0, 200) + '...' : c; })()}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-teal-deep flex items-center justify-center text-white font-bold">
                {(review.userName[language] || review.userName['en'] || 'U').charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-slate-dark text-sm">
                  {review.userName[language] || review.userName['en']}
                </p>
                <p className="text-xs text-muted-foreground">
                  {review.userLocation[language] || review.userLocation['en']}
                </p>
              </div>
            </div>

            {review.verifiedPurchase && (
              <Badge variant="secondary" className="gap-1.5">
                <Star className="w-3 h-3 fill-teal-deep text-teal-deep" />
                {language === 'en' ? 'Verified Purchase' : 'Compra Verificada'}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
            <span className="text-xs text-muted-foreground">
              {format(review.date, 'MMMM d, yyyy', { 
                locale: language === 'es' ? es : undefined 
              })}
            </span>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
