import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { X, Star, Upload } from '@phosphor-icons/react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

interface ReviewFormModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  productId: string
}

export function ReviewFormModal({ open, onOpenChange }: ReviewFormModalProps) {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [review, setReview] = useState('')
  const [recommend, setRecommend] = useState<'yes' | 'no' | 'not-sure'>('yes')
  const [photos, setPhotos] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handlePhotoUpload = useCallback((files: FileList | null) => {
    if (!files) return
    
    const newPhotos = Array.from(files).slice(0, 3 - photos.length)
    setPhotos(prev => [...prev, ...newPhotos])
  }, [photos.length])

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    handlePhotoUpload(e.dataTransfer.files)
  }, [handlePhotoUpload])

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (rating === 0) {
      toast.error('Please select a rating')
      return
    }

    if (review.length < 20) {
      toast.error('Review must be at least 20 characters')
      return
    }

    if (review.length > 500) {
      toast.error('Review must be no more than 500 characters')
      return
    }

    setIsSubmitting(true)

    await new Promise(resolve => setTimeout(resolve, 1500))

    toast.success('Review submitted for moderation', {
      description: 'Thank you for your feedback! Your review will be published after approval.'
    })

    setRating(0)
    setName('')
    setEmail('')
    setTitle('')
    setReview('')
    setRecommend('yes')
    setPhotos([])
    setIsSubmitting(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#F5F3F0] border-[#C9ADA7]/30"
        aria-describedby="review-form-description"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-[#5A4A42]">
            Write a Review
          </DialogTitle>
        </DialogHeader>
        <p id="review-form-description" className="text-sm text-[#8B9E7E]/70 -mt-2">
          Share your experience with this product
        </p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          onSubmit={handleSubmit}
          className="space-y-6 mt-4"
        >
          <div className="space-y-2">
            <Label htmlFor="rating" className="text-[#5A4A42] font-medium">
              Rating <span className="text-red-500">*</span>
            </Label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="transition-transform duration-200 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#8B9E7E]/50 rounded p-1"
                  aria-label={`Rate ${star} stars`}
                >
                  <Star
                    weight={(hoverRating || rating) >= star ? 'fill' : 'regular'}
                    className={cn(
                      'w-8 h-8 transition-colors duration-200',
                      (hoverRating || rating) >= star ? 'text-[#8B9E7E]' : 'text-[#C9ADA7]/40'
                    )}
                  />
                </button>
              ))}
              {rating > 0 && (
                <span className="text-sm text-[#5A4A42] ml-2">
                  {rating} {rating === 1 ? 'star' : 'stars'}
                </span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#5A4A42] font-medium">
                Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white border-[#C9ADA7]/30 focus:border-[#8B9E7E] focus:ring-[#8B9E7E]/50"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#5A4A42] font-medium">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white border-[#C9ADA7]/30 focus:border-[#8B9E7E] focus:ring-[#8B9E7E]/50"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title" className="text-[#5A4A42] font-medium">
              Review Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-white border-[#C9ADA7]/30 focus:border-[#8B9E7E] focus:ring-[#8B9E7E]/50"
              placeholder="Summarize your experience"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="review" className="text-[#5A4A42] font-medium">
              Your Review <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              required
              minLength={20}
              maxLength={500}
              rows={5}
              className="bg-white border-[#C9ADA7]/30 focus:border-[#8B9E7E] focus:ring-[#8B9E7E]/50 resize-none"
              placeholder="Share your experience with this product (20-500 characters)"
            />
            <div className="text-xs text-[#8B9E7E]/60 text-right">
              {review.length}/500 characters
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[#5A4A42] font-medium">
              Would you recommend this product?
            </Label>
            <RadioGroup value={recommend} onValueChange={(value) => setRecommend(value as typeof recommend)}>
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" className="border-[#8B9E7E] text-[#8B9E7E]" />
                  <Label htmlFor="yes" className="text-[#5A4A42] font-normal cursor-pointer">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" className="border-[#8B9E7E] text-[#8B9E7E]" />
                  <Label htmlFor="no" className="text-[#5A4A42] font-normal cursor-pointer">No</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-sure" id="not-sure" className="border-[#8B9E7E] text-[#8B9E7E]" />
                  <Label htmlFor="not-sure" className="text-[#5A4A42] font-normal cursor-pointer">Not Sure</Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label className="text-[#5A4A42] font-medium">
              Add Photos (optional, max 3)
            </Label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={cn(
                'border-2 border-dashed rounded-lg p-6 text-center transition-all duration-300',
                isDragging
                  ? 'border-[#8B9E7E] bg-[#8B9E7E]/5'
                  : 'border-[#C9ADA7]/40 bg-white hover:border-[#8B9E7E]/60'
              )}
            >
              <input
                type="file"
                id="photo-upload"
                accept="image/*"
                multiple
                onChange={(e) => handlePhotoUpload(e.target.files)}
                className="hidden"
                disabled={photos.length >= 3}
              />
              <label
                htmlFor="photo-upload"
                className={cn(
                  'cursor-pointer flex flex-col items-center gap-2',
                  photos.length >= 3 && 'opacity-50 cursor-not-allowed'
                )}
              >
                <Upload className="w-8 h-8 text-[#8B9E7E]" />
                <p className="text-sm text-[#5A4A42]">
                  {photos.length >= 3
                    ? 'Maximum 3 photos reached'
                    : 'Drag and drop photos here, or click to browse'}
                </p>
                <p className="text-xs text-[#8B9E7E]/60">
                  PNG, JPG up to 5MB
                </p>
              </label>
            </div>

            {photos.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-3">
                {photos.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt={`Upload ${index + 1}`}
                      className="w-20 h-20 object-cover rounded-lg border border-[#C9ADA7]/30"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      aria-label="Remove photo"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-3 pt-4 border-t border-[#C9ADA7]/20">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1 border-[#C9ADA7]/40 text-[#5A4A42] hover:bg-[#C9ADA7]/10"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-[#8B9E7E] hover:bg-[#7A8D6D] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Submitting...
                </span>
              ) : (
                'Submit Review'
              )}
            </Button>
          </div>
        </motion.form>
      </DialogContent>
    </Dialog>
  )
}
