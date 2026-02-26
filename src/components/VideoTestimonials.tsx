import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Play, X, MapPin, Calendar } from '@phosphor-icons/react'

interface Testimonial {
  id: string
  name: string
  age: number
  location: string
  country: string
  product: string
  duration: string
  concern: string
  results: string
  videoThumbnail: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'María Fernanda García',
    age: 28,
    location: 'Bogotá',
    country: 'Colombia',
    product: 'The Time Bender + The Illuminator',
    duration: '12 weeks',
    concern: 'Hyperpigmentation & Early Fine Lines',
    results: 'My manchas have faded by 70% and my skin texture is incredibly smooth. The best part? No irritation, even with the retinol.',
    videoThumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
    quote: 'Finally, correction without the burn. My skin glows like never before.'
  },
  {
    id: 'test-2',
    name: 'Camila Rojas',
    age: 32,
    location: 'São Paulo',
    country: 'Brazil',
    product: 'The Architect + The Guardian',
    duration: '16 weeks',
    concern: 'Loss of Firmness & Pollution Damage',
    results: 'Living in São Paulo, pollution was destroying my skin. After 4 months with The Guardian and The Architect, my skin is firmer and my pores are refined.',
    videoThumbnail: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80',
    quote: 'The peptides worked like magic. My face has structure again.'
  },
  {
    id: 'test-3',
    name: 'Valentina Morales',
    age: 25,
    location: 'Mexico City',
    country: 'Mexico',
    product: 'The Great Harmonizer + The Naturalist',
    duration: '8 weeks',
    concern: 'Sensitive Skin & Redness',
    results: 'I have always had reactive skin that turned red with any active ingredient. The CBD base calmed everything, and Bakuchiol gave me gentle renewal.',
    videoThumbnail: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80',
    quote: 'Prejuvenation that actually works for sensitive skin. No more redness!'
  },
  {
    id: 'test-4',
    name: 'Sofia Ramírez',
    age: 30,
    location: 'Lima',
    country: 'Peru',
    product: 'The Time Bender + The Mason',
    duration: '14 weeks',
    concern: 'Acne Scarring & Barrier Damage',
    results: 'Years of harsh treatments left my barrier destroyed. The Mason repaired it, then The Time Bender smoothed my scars. My skin looks reborn.',
    videoThumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80',
    quote: 'Correction that rebuilds instead of destroys. This is the future.'
  },
  {
    id: 'test-5',
    name: 'Isabella Torres',
    age: 27,
    location: 'Buenos Aires',
    country: 'Argentina',
    product: 'The Spark + The Illuminator',
    duration: '10 weeks',
    concern: 'Fatigue & Dullness',
    results: 'Working night shifts left my skin looking exhausted. The Spark brought back my glow and The Illuminator evened my tone. I look rested now.',
    videoThumbnail: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80',
    quote: 'The cellular energy boost is real. My skin woke up!'
  },
  {
    id: 'test-6',
    name: 'Lucía Mendoza',
    age: 34,
    location: 'Santiago',
    country: 'Chile',
    product: 'The Architect + The Preserver',
    duration: '18 weeks',
    concern: 'Volume Loss & Structural Aging',
    results: 'At 34, I was starting to see sagging. The peptides in The Architect rebuilt my collagen, and The Preserver is keeping it that way. Clinical luxury is real.',
    videoThumbnail: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
    quote: 'My skin has architecture again. The scaffolding is back.'
  }
]

export function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<Testimonial | null>(null)

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-dark mb-4">
            Real Correction Journeys
          </h2>
          <p className="text-lg text-gray-medium max-w-3xl mx-auto leading-relaxed">
            Meet Latin American users who achieved <span className="font-semibold text-primary">clinical-level results</span> with CORRECT—firmer, smoother, more radiant skin without burning, peeling, or downtime.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="group h-full bg-white border-primary/20 hover:border-primary/40 hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Video Thumbnail */}
                <div 
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedVideo(testimonial)}
                >
                  <img
                    src={testimonial.videoThumbnail}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/80 via-slate-dark/40 to-transparent flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg"
                    >
                      <Play size={28} weight="fill" className="text-white ml-1" />
                    </motion.div>
                  </div>
                  {/* Country Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-slate-dark shadow-md">
                    {testimonial.country}
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary/95 backdrop-blur-sm rounded-full text-xs font-semibold text-white shadow-md flex items-center gap-1">
                    <Calendar size={14} weight="bold" />
                    {testimonial.duration}
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 space-y-4">
                  {/* Name & Location */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-dark mb-1">
                      {testimonial.name}, {testimonial.age}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin size={14} weight="fill" />
                      <span>{testimonial.location}, {testimonial.country}</span>
                    </div>
                  </div>

                  {/* Products Used */}
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                      Products Used
                    </div>
                    <div className="text-sm font-medium text-slate-dark">
                      {testimonial.product}
                    </div>
                  </div>

                  {/* Concern */}
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider text-primary font-semibold">
                      Concern
                    </div>
                    <div className="text-sm text-slate-dark">
                      {testimonial.concern}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm italic text-gray-medium leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Watch Button */}
                  <Button
                    onClick={() => setSelectedVideo(testimonial)}
                    className="w-full mt-4"
                    variant="outline"
                  >
                    <Play size={16} weight="fill" className="mr-2" />
                    Watch Journey
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-dark/95 backdrop-blur-md"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 25 }}
                className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white backdrop-blur-sm flex items-center justify-center shadow-lg transition-all"
                >
                  <X size={24} weight="bold" className="text-slate-dark" />
                </button>

                {/* Video Section */}
                <div className="relative aspect-video bg-slate-dark">
                  <img
                    src={selectedVideo.videoThumbnail}
                    alt={selectedVideo.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-dark/40">
                    <div className="text-center text-white space-y-3">
                      <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-lg mx-auto">
                        <Play size={40} weight="fill" className="text-white ml-1" />
                      </div>
                      <p className="text-sm opacity-90">Video testimonials coming soon</p>
                    </div>
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-8 space-y-6">
                  {/* Header */}
                  <div className="border-b border-border pb-6">
                    <h3 className="text-2xl font-bold text-slate-dark mb-2">
                      {selectedVideo.name}, {selectedVideo.age}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <MapPin size={16} weight="fill" />
                      <span>{selectedVideo.location}, {selectedVideo.country}</span>
                      <span className="mx-2">•</span>
                      <Calendar size={16} weight="fill" />
                      <span>{selectedVideo.duration} Journey</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-sm font-semibold text-primary">
                      {selectedVideo.product}
                    </div>
                  </div>

                  {/* Concern & Results */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                        Primary Concern
                      </h4>
                      <p className="text-slate-dark font-medium">
                        {selectedVideo.concern}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">
                        Results Achieved
                      </h4>
                      <p className="text-slate-dark leading-relaxed text-sm">
                        {selectedVideo.results}
                      </p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-lg border-l-4 border-primary">
                    <p className="text-lg italic text-slate-dark leading-relaxed">
                      "{selectedVideo.quote}"
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
