import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { RotateCw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useApp } from '@/lib/AppContext'

interface Bottle3DViewerProps {
  productImage: string
  gallery?: string[]
  comingSoon?: boolean
}

export function Bottle3DViewer({ productImage, gallery, comingSoon = false }: Bottle3DViewerProps) {
  const { language } = useApp()
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  
  const images = gallery && gallery.length > 0 ? gallery : [productImage]
  const currentImage = images[selectedImageIndex]

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const deltaX = e.clientX - startX
    setRotation((prev) => prev + deltaX * 0.5)
    setStartX(e.clientX)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const deltaX = e.touches[0].clientX - startX
    setRotation((prev) => prev + deltaX * 0.5)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const resetRotation = () => {
    setRotation(0)
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    document.addEventListener('mouseup', handleGlobalMouseUp)
    document.addEventListener('touchend', handleGlobalMouseUp)

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp)
      document.removeEventListener('touchend', handleGlobalMouseUp)
    }
  }, [])

  return (
    <div className="relative w-full">
      <div className="aspect-square bg-secondary/30 rounded-lg overflow-hidden relative shadow-md">
        <div
          ref={containerRef}
          className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <motion.div
            className="relative w-full h-full"
            style={{
              transform: `perspective(1000px) rotateY(${rotation}deg)`,
              transformStyle: 'preserve-3d'
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20
            }}
          >
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            {imageError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-medium p-8 text-center">
                <div className="w-32 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <p className="text-sm">{language === 'en' ? 'Product Image' : 'Imagen del Producto'}</p>
              </div>
            )}
            <img
              src={currentImage}
              alt="Product bottle"
              className={`w-full h-full object-contain p-8 sm:p-12 pointer-events-none transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'} ${comingSoon ? 'blur-sm' : ''}`}
              draggable={false}
              onLoad={() => setImageLoaded(true)}
              onError={() => {
                setImageError(true)
                setImageLoaded(false)
              }}
            />
          </motion.div>
        </div>

        <div className="absolute top-4 right-4">
          <Button
            size="icon"
            variant="secondary"
            onClick={resetRotation}
            className="bg-background/80 backdrop-blur hover:bg-background"
          >
            <RotateCw className="w-4 h-4" />
          </Button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur px-4 py-2 rounded-full">
          <p className="text-xs text-gray-medium font-medium">
            {language === 'en' ? 'Drag to rotate' : 'Arrastra para rotar'}
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setSelectedImageIndex(index)
              setRotation(0)
              setImageLoaded(false)
            }}
            className={`flex-1 h-16 bg-secondary/30 rounded-md hover:bg-secondary/50 transition-colors border-2 ${
              selectedImageIndex === index ? 'border-teal-deep' : 'border-transparent hover:border-teal-deep/30'
            }`}
          >
            <img
              src={image}
              alt={`View ${index + 1}`}
              className={`w-full h-full object-contain p-2 opacity-60 hover:opacity-100 transition-opacity ${comingSoon ? 'blur-sm' : ''}`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}
