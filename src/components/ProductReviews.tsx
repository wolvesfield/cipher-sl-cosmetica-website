import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ThumbsUp, ThumbsDown, Share, Camera, Check, CaretDown } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Badge } from './ui/badge'
import { reviewsByProduct, productRatings } from '@/lib/comprehensiveReviewData'
import { useLanguage } from '@/lib/LanguageContext'
import { cn } from '@/lib/utils'

interface ProductReviewsProps {
  productId: string
  variant?: 'full' | 'mini'
  className?: string
}

type SortOption = 'helpful' | 'recent' | 'highest' | 'lowest'

export function ProductReviews({ productId, variant = 'full', className }: ProductReviewsProps) {
  const { language, t } = useLanguage()
  const lt = (obj: Record<string, any> | undefined | null): string => {
    if (!obj) return ''
    return (obj[language] ?? obj['en'] ?? obj['es'] ?? Object.values(obj)[0] ?? '') as string
  }
  const [sortBy, setSortBy] = useState<SortOption>('helpful')
  const [filterVerified, setFilterVerified] = useState(false)
  const [filterWithPhotos, setFilterWithPhotos] = useState(false)
  const [visibleReviews, setVisibleReviews] = useState(variant === 'full' ? 8 : 3)
  const [expandedReviews, setExpandedReviews] = useState<Set<string>>(new Set())

  const productRating = productRatings[productId]

  const filteredAndSortedReviews = useMemo(() => {
    const allReviews = reviewsByProduct[productId] || []
    let filtered = [...allReviews]

    if (filterVerified) {
      filtered = filtered.filter(r => r.verifiedPurchase)
    }

    if (filterWithPhotos) {
      filtered = filtered.filter(r => r.images && r.images.length > 0)
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'helpful':
          return b.helpful - a.helpful
        case 'recent':
          return new Date(b.date).getTime() - new Date(a.date).getTime()
        case 'highest':
          return b.rating - a.rating
        case 'lowest':
          return a.rating - b.rating
        default:
          return 0
      }
    })

    return filtered
  }, [productId, sortBy, filterVerified, filterWithPhotos, reviewsByProduct])

  const displayedReviews = filteredAndSortedReviews.slice(0, visibleReviews)

  const toggleExpanded = (reviewId: string) => {
    const newExpanded = new Set(expandedReviews)
    if (newExpanded.has(reviewId)) {
      newExpanded.delete(reviewId)
    } else {
      newExpanded.add(reviewId)
    }
    setExpandedReviews(newExpanded)
  }

  if (!productRating) return null

  if (variant === 'mini') {
    return (
      <div className={cn('space-y-3', className)}>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                weight={star <= Math.round(productRating.averageRating) ? 'fill' : 'regular'}
                className={cn(
                  'w-4 h-4',
                  star <= Math.round(productRating.averageRating)
                    ? 'text-[#8B9E7E]'
                    : 'text-[#C9ADA7]/30'
                )}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-[#5A4A42]">
            {productRating.averageRating.toFixed(2)}
          </span>
          <span className="text-xs text-[#8B9E7E]/60">
            ({productRating.totalReviews.toLocaleString()} reviews)
          </span>
        </div>
      </div>
    )
  }

  return (
    <div className={cn('space-y-8', className)}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#5A4A42] mb-2">
              {t('product.reviews')}
            </h2>
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex items-center gap-1"
              >
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    weight={star <= Math.round(productRating.averageRating) ? 'fill' : 'regular'}
                    className={cn(
                      'w-6 h-6 sm:w-7 sm:h-7',
                      star <= Math.round(productRating.averageRating)
                        ? 'text-[#8B9E7E]'
                        : 'text-[#C9ADA7]/30'
                    )}
                  />
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="text-2xl sm:text-3xl font-bold text-[#5A4A42]">
                  {productRating.averageRating.toFixed(2)}
                </span>
                <span className="text-sm text-[#8B9E7E]/70 ml-2">{t('review.outOf')} 5</span>
              </motion.div>
            </div>
            <p className="text-sm text-[#8B9E7E]/70 mt-1">
              {t('review.basedOn')} {productRating.totalReviews.toLocaleString()} {t('review.reviews')}
            </p>
          </div>

          {/* Write a Review button disabled as per requirement */}
        </div>

        <Card className="p-6 bg-[#F5F3F0]/50 border-[#C9ADA7]/20">
          <div className="space-y-3">
            {[5, 4, 3, 2, 1].map((rating, index) => {
              const percentage = productRating.ratingDistribution[rating as keyof typeof productRating.ratingDistribution]
              return (
                <motion.div
                  key={rating}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="flex items-center gap-3"
                >
                  <div className="flex items-center gap-1 w-16">
                    <span className="text-sm font-medium text-[#5A4A42]">{rating}</span>
                    <Star weight="fill" className="w-4 h-4 text-[#8B9E7E]" />
                  </div>
                  <div className="flex-1 h-2.5 bg-[#C9ADA7]/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.8, delay: 0.5 + index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="h-full bg-gradient-to-r from-[#8B9E7E] to-[#7A8D6D] rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium text-[#5A4A42] w-12 text-right">
                    {percentage}%
                  </span>
                </motion.div>
              )
            })}
          </div>
        </Card>
      </motion.div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilterVerified(!filterVerified)}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                filterVerified
                  ? 'bg-[#8B9E7E] text-white shadow-sm'
                  : 'bg-[#F5F3F0] text-[#5A4A42] hover:bg-[#C9ADA7]/20'
              )}
            >
              <Check className={cn('w-4 h-4', filterVerified ? 'opacity-100' : 'opacity-0')} />
              {t('review.verifiedOnly')}
            </button>
            <button
              onClick={() => setFilterWithPhotos(!filterWithPhotos)}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                filterWithPhotos
                  ? 'bg-[#8B9E7E] text-white shadow-sm'
                  : 'bg-[#F5F3F0] text-[#5A4A42] hover:bg-[#C9ADA7]/20'
              )}
            >
              <Camera className={cn('w-4 h-4', filterWithPhotos ? 'opacity-100' : 'opacity-0')} />
              {t('review.withPhotos')}
            </button>
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="appearance-none bg-[#F5F3F0] text-[#5A4A42] px-4 py-2 pr-10 rounded-lg text-sm font-medium cursor-pointer hover:bg-[#C9ADA7]/20 transition-all duration-300 border border-[#C9ADA7]/20 focus:outline-none focus:ring-2 focus:ring-[#8B9E7E]/50"
            >
              <option value="helpful">{t('review.filterMostHelpful')}</option>
              <option value="recent">{t('review.filterRecent')}</option>
              <option value="highest">{t('review.filterHighest')}</option>
              <option value="lowest">{t('review.filterLowest')}</option>
            </select>
            <CaretDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A4A42] pointer-events-none" />
          </div>
        </div>

        <motion.div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {displayedReviews.map((review, index) => {
              const isExpanded = expandedReviews.has(review.id)
              const reviewText = lt(review.comment) || review.comment.en
              const reviewTitle = lt(review.title) || review.title.en
              const userName = lt(review.userName) || review.userName.en
              const shouldTruncate = reviewText.length > 300

              return (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Card className="p-5 sm:p-6 bg-white border-[#C9ADA7]/20 hover:shadow-md transition-shadow duration-300">
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-[#5A4A42]">{userName}</span>
                            {review.verifiedPurchase && (
                              <Badge className="bg-[#8B9E7E]/10 text-[#8B9E7E] border-[#8B9E7E]/20 text-xs px-2 py-0.5">
                                <Check className="w-3 h-3 mr-1" />
                                {t('review.verifiedPurchase')}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-0.5">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  weight={star <= review.rating ? 'fill' : 'regular'}
                                  className={cn(
                                    'w-4 h-4',
                                    star <= review.rating ? 'text-[#8B9E7E]' : 'text-[#C9ADA7]/30'
                                  )}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-[#8B9E7E]/60">
                              {new Date(review.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                        </div>
                      </div>

                      {review.title && (
                        <h4 className="font-semibold text-[#5A4A42]">{reviewTitle}</h4>
                      )}

                      <div className="text-[#5A4A42]/80 leading-relaxed">
                        {shouldTruncate && !isExpanded ? (
                          <>
                            {reviewText.slice(0, 300)}...
                            <button
                              onClick={() => toggleExpanded(review.id)}
                              className="ml-2 text-[#8B9E7E] font-medium hover:underline"
                            >
                              {language === 'es' ? 'Leer más' : 'Read more'}
                            </button>
                          </>
                        ) : (
                          <>
                            {reviewText}
                            {shouldTruncate && (
                              <button
                                onClick={() => toggleExpanded(review.id)}
                                className="ml-2 text-[#8B9E7E] font-medium hover:underline"
                              >
                                {language === 'es' ? 'Mostrar menos' : 'Show less'}
                              </button>
                            )}
                          </>
                        )}
                      </div>

                      {review.benefitTags && review.benefitTags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {review.benefitTags.map((tag, idx) => (
                            <Badge
                              key={idx}
                              className="bg-[#F5F3F0] text-[#5A4A42] border-[#C9ADA7]/20 px-3 py-1 text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}

                      {review.images && review.images.length > 0 && (
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {review.images.map((image, idx) => (
                            <img
                              key={idx}
                              src={image}
                              alt={`Review photo ${idx + 1}`}
                              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-[#C9ADA7]/20"
                            />
                          ))}
                        </div>
                      )}

                      <div className="flex items-center gap-4 pt-2 border-t border-[#C9ADA7]/20">
                        <button className="inline-flex items-center gap-2 text-sm text-[#5A4A42]/70 hover:text-[#8B9E7E] transition-colors duration-300">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{review.helpful}</span>
                        </button>
                        <button className="inline-flex items-center gap-2 text-sm text-[#5A4A42]/70 hover:text-[#8B9E7E] transition-colors duration-300">
                          <ThumbsDown className="w-4 h-4" />
                          <span>{review.notHelpful || 2}</span>
                        </button>
                        <button className="inline-flex items-center gap-2 text-sm text-[#5A4A42]/70 hover:text-[#8B9E7E] transition-colors duration-300 ml-auto">
                          <Share className="w-4 h-4" />
                          <span className="hidden sm:inline">{t('review.share')}</span>
                        </button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {filteredAndSortedReviews.length > visibleReviews && (
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setVisibleReviews(prev => prev + 8)}
              variant="outline"
              className="px-8 py-2.5 border-[#8B9E7E] text-[#8B9E7E] hover:bg-[#8B9E7E] hover:text-white transition-all duration-300"
            >
              {t('review.loadMore')}
            </Button>
          </div>
        )}

        {filteredAndSortedReviews.length === 0 && (
          <Card className="p-12 text-center bg-[#F5F3F0]/50 border-[#C9ADA7]/20">
            <p className="text-[#5A4A42]/60">
              {language === 'es' ? 'No hay reseñas que coincidan con tus filtros.' : 'No reviews match your filters.'}
            </p>
          </Card>
        )}
      </div>
    </div>
  )
}
