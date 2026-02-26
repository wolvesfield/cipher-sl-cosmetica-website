import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useApp } from '@/lib/AppContext'

interface BeforeAfterSliderProps {
  beforeImage?: string
  afterImage?: string
}

export function BeforeAfterSlider({ 
  beforeImage = 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop',
  afterImage = 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=600&fit=crop'
}: BeforeAfterSliderProps) {
  const { language } = useApp()
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-2">
          {language === 'en' ? 'Visible Results' : 'Resultados Visibles'}
        </h2>
        <p className="text-gray-medium">
          {language === 'en'
            ? 'See the transformation after 12 weeks of consistent use'
            : 'Vea la transformación después de 12 semanas de uso constante'}
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-lg overflow-hidden cursor-ew-resize select-none shadow-lg"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="absolute inset-0">
          <img
            src={afterImage}
            alt={language === 'en' ? 'After 12 weeks' : 'Después de 12 semanas'}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        <motion.div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
          }}
        >
          <img
            src={beforeImage}
            alt={language === 'en' ? 'Before' : 'Antes'}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>

        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)'
          }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-gray-medium rounded-full"></div>
              <div className="w-0.5 h-4 bg-gray-medium rounded-full"></div>
            </div>
          </div>
        </motion.div>

        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1.5 rounded-md">
          <span className="text-sm font-semibold text-slate-dark">
            {language === 'en' ? 'BEFORE' : 'ANTES'}
          </span>
        </div>

        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur px-3 py-1.5 rounded-md">
          <span className="text-sm font-semibold text-slate-dark">
            {language === 'en' ? 'AFTER' : 'DESPUÉS'}
          </span>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur px-4 py-2 rounded-full">
          <p className="text-xs text-gray-medium font-medium whitespace-nowrap">
            {language === 'en' ? 'Drag to compare' : 'Arrastra para comparar'}
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-secondary/30 rounded-lg p-4">
          <p className="text-3xl font-bold text-terracotta mb-1">-47%</p>
          <p className="text-sm text-gray-medium">
            {language === 'en' ? 'Fine Lines' : 'Líneas Finas'}
          </p>
        </div>
        <div className="bg-secondary/30 rounded-lg p-4">
          <p className="text-3xl font-bold text-teal-deep mb-1">+62%</p>
          <p className="text-sm text-gray-medium">
            {language === 'en' ? 'Radiance' : 'Luminosidad'}
          </p>
        </div>
      </div>
    </div>
  )
}
