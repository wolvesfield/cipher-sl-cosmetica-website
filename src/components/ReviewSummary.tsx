import { Star } from 'lucide-react'
import { ReviewStats } from '@/lib/types'

interface ReviewSummaryProps {
  stats: ReviewStats
  compact?: boolean
  className?: string
}

export function ReviewSummary({ stats, compact = false, className = '' }: ReviewSummaryProps) {
  if (stats.totalReviews === 0) return null

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${compact ? 'w-3 h-3' : 'w-4 h-4'} ${
              star <= Math.round(stats.averageRating)
                ? 'fill-teal-deep text-teal-deep'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className={`font-medium text-slate-dark ${compact ? 'text-xs' : 'text-sm'}`}>
        {stats.averageRating.toFixed(1)}
      </span>
      <span className={`text-gray-medium ${compact ? 'text-xs' : 'text-sm'}`}>
        ({stats.totalReviews})
      </span>
    </div>
  )
}
