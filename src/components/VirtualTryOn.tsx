import { useState, useRef, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Camera, X, Sparkle, ArrowCounterClockwise, Download, CircleNotch } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'
import { toast } from 'sonner'
import { Slider } from '@/components/ui/slider'
import { Product } from '@/lib/types'
import { useApp } from '@/lib/AppContext'
import { useLanguage } from '@/lib/LanguageContext'

interface VirtualTryOnProps {
  product: Product
  isOpen: boolean
  onClose: () => void
}

type Effect = 'glow' | 'smooth' | 'brighten' | 'hydrate'

interface EffectSettings {
  glow: number
  smooth: number
  brighten: number
  hydrate: number
}

export function VirtualTryOn({ product, isOpen, onClose }: VirtualTryOnProps) {
  const { language, lt, lta } = useApp()
  const { resolveText } = useLanguage()
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [effectsApplied, setEffectsApplied] = useState(false)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const animationFrameRef = useRef<number | null>(null)
  
  const [effects, setEffects] = useState<EffectSettings>({
    glow: 30,
    smooth: 25,
    brighten: 20,
    hydrate: 35
  })

  const startCamera = useCallback(async () => {
    setIsLoading(true)
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: 'user'
        },
        audio: false
      })
      
      setStream(mediaStream)
      
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play()
          setIsLoading(false)
        }
      }
    } catch (error) {
      console.error('Error accessing camera:', error)
      toast.error(
        language === 'en' 
          ? 'Unable to access camera. Please check permissions.' 
          : 'No se puede acceder a la cámara. Verifique los permisos.'
      )
      setIsLoading(false)
    }
  }, [language])

  const stopCamera = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current)
    }
    
    if (stream) {
      stream.getTracks().forEach(track => track.stop())
      setStream(null)
    }
    
    if (videoRef.current) {
      videoRef.current.srcObject = null
    }
    
    setEffectsApplied(false)
    setCapturedImage(null)
  }, [stream])

  useEffect(() => {
    if (isOpen) {
      startCamera()
    } else {
      stopCamera()
    }

    return () => {
      stopCamera()
    }
  }, [isOpen, startCamera, stopCamera])

  useEffect(() => {
    if (effectsApplied && videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d', { willReadFrequently: true })
      
      if (!ctx) return

      canvas.width = video.videoWidth
      canvas.height = video.videoHeight

      const applyFrame = () => {
        if (!video.paused && !video.ended) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
          
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const data = imageData.data

          const glowFactor = effects.glow / 100
          const smoothFactor = effects.smooth / 100
          const brightenFactor = effects.brighten / 100
          const hydrateFactor = effects.hydrate / 100

          for (let i = 0; i < data.length; i += 4) {
            const r = data[i]
            const g = data[i + 1]
            const b = data[i + 2]

            data[i] = Math.min(255, r + (brightenFactor * 30) + (glowFactor * 15))
            data[i + 1] = Math.min(255, g + (brightenFactor * 25) + (hydrateFactor * 20))
            data[i + 2] = Math.min(255, b + (brightenFactor * 20) + (glowFactor * 10))
          }

          if (smoothFactor > 0) {
            ctx.filter = `blur(${smoothFactor * 0.5}px)`
          }

          ctx.putImageData(imageData, 0, 0)

          if (hydrateFactor > 0) {
            ctx.globalAlpha = hydrateFactor * 0.15
            ctx.fillStyle = 'rgba(200, 230, 255, 0.1)'
            ctx.fillRect(0, 0, canvas.width, canvas.height)
            ctx.globalAlpha = 1
          }

          animationFrameRef.current = requestAnimationFrame(applyFrame)
        }
      }

      applyFrame()
    }
  }, [effects, effectsApplied])

  const toggleEffects = () => {
    if (effectsApplied) {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
      setEffectsApplied(false)
    } else {
      setEffectsApplied(true)
      toast.success(
        language === 'en' 
          ? `Applying ${product.name.en} effects...` 
          : `Aplicando efectos de ${product.name.es}...`
      )
    }
  }

  const capturePhoto = () => {
    if (!canvasRef.current && !videoRef.current) return

    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    if (!ctx) return

    if (effectsApplied && canvasRef.current) {
      canvas.width = canvasRef.current.width
      canvas.height = canvasRef.current.height
      ctx.drawImage(canvasRef.current, 0, 0)
    } else if (videoRef.current) {
      canvas.width = videoRef.current.videoWidth
      canvas.height = videoRef.current.videoHeight
      ctx.drawImage(videoRef.current, 0, 0)
    }

    const dataUrl = canvas.toDataURL('image/png')
    setCapturedImage(dataUrl)
    
    toast.success(
      language === 'en' ? 'Photo captured!' : '¡Foto capturada!'
    )
  }

  const downloadPhoto = () => {
    if (!capturedImage) return

    const link = document.createElement('a')
    link.href = capturedImage
    link.download = `SL-VirtualTryOn-${Date.now()}.png`
    link.click()

    toast.success(
      language === 'en' ? 'Photo downloaded!' : '¡Foto descargada!'
    )
  }

  const resetEffects = () => {
    setEffects({
      glow: 30,
      smooth: 25,
      brighten: 20,
      hydrate: 35
    })
  }

  const effectLabels = {
    glow: { en: 'Radiance', es: 'Radiancia' },
    smooth: { en: 'Smoothness', es: 'Suavidad' },
    brighten: { en: 'Brightness', es: 'Brillo' },
    hydrate: { en: 'Hydration', es: 'Hidratación' }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 flex items-center justify-center"
          >
            <Card className="w-full h-full bg-background/95 backdrop-blur-md border-primary/20 shadow-2xl overflow-hidden flex flex-col">
              <CardHeader className="border-b border-primary/10 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                      <Camera size={24} className="text-primary" weight="fill" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-playfair">
                        {language === 'en' ? 'Virtual Try-On' : 'Prueba Virtual'}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">
                        {resolveText(product.name)}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={onClose}
                    className="hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X size={24} />
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="flex-1 overflow-auto p-4 md:p-6">
                <div className="grid lg:grid-cols-[1fr_300px] gap-6 h-full">
                  <div className="flex flex-col gap-4">
                    <div className="relative aspect-video bg-slate-dark/5 rounded-xl overflow-hidden border-2 border-primary/10">
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
                          <div className="flex flex-col items-center gap-3">
                            <CircleNotch size={48} className="text-primary animate-spin" weight="bold" />
                            <p className="text-sm text-muted-foreground">
                              {language === 'en' ? 'Starting camera...' : 'Iniciando cámara...'}
                            </p>
                          </div>
                        </div>
                      )}

                      {capturedImage ? (
                        <img 
                          src={capturedImage} 
                          alt="Captured" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <>
                          <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className={`w-full h-full object-cover ${effectsApplied ? 'hidden' : 'block'}`}
                            style={{ transform: 'scaleX(-1)' }}
                          />
                          <canvas
                            ref={canvasRef}
                            className={`w-full h-full object-cover ${effectsApplied ? 'block' : 'hidden'}`}
                            style={{ transform: 'scaleX(-1)' }}
                          />
                        </>
                      )}

                      {effectsApplied && !capturedImage && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute top-4 right-4 z-10"
                        >
                          <Badge className="bg-primary text-primary-foreground gap-2 shadow-lg">
                            <Sparkle size={16} weight="fill" />
                            {language === 'en' ? 'Effects Active' : 'Efectos Activos'}
                          </Badge>
                        </motion.div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {!capturedImage ? (
                        <>
                          <Button
                            onClick={toggleEffects}
                            disabled={!stream || isLoading}
                            className={effectsApplied 
                              ? 'bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90' 
                              : 'bg-primary hover:bg-primary/90'
                            }
                            size="lg"
                          >
                            <Sparkle size={20} weight={effectsApplied ? 'fill' : 'regular'} />
                            {effectsApplied
                              ? (language === 'en' ? 'Remove Effects' : 'Quitar Efectos')
                              : (language === 'en' ? 'Apply Effects' : 'Aplicar Efectos')
                            }
                          </Button>

                          <Button
                            onClick={capturePhoto}
                            disabled={!stream || isLoading}
                            variant="outline"
                            size="lg"
                          >
                            <Camera size={20} weight="bold" />
                            {language === 'en' ? 'Capture' : 'Capturar'}
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            onClick={downloadPhoto}
                            className="bg-primary hover:bg-primary/90"
                            size="lg"
                          >
                            <Download size={20} weight="bold" />
                            {language === 'en' ? 'Download' : 'Descargar'}
                          </Button>

                          <Button
                            onClick={() => setCapturedImage(null)}
                            variant="outline"
                            size="lg"
                          >
                            <ArrowCounterClockwise size={20} />
                            {language === 'en' ? 'Retake' : 'Repetir'}
                          </Button>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base font-semibold">
                            {language === 'en' ? 'Effect Controls' : 'Control de Efectos'}
                          </CardTitle>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={resetEffects}
                            disabled={!effectsApplied}
                          >
                            <ArrowCounterClockwise size={16} />
                            {language === 'en' ? 'Reset' : 'Restablecer'}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {(Object.keys(effects) as Effect[]).map((effect) => (
                          <div key={effect} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <label className="text-sm font-medium capitalize">
                                {lt(effectLabels[effect])}
                              </label>
                              <span className="text-sm text-muted-foreground font-mono">
                                {effects[effect]}%
                              </span>
                            </div>
                            <Slider
                              value={[effects[effect]]}
                              onValueChange={(value) => 
                                setEffects(prev => ({ ...prev, [effect]: value[0] }))
                              }
                              min={0}
                              max={100}
                              step={1}
                              disabled={!effectsApplied}
                              className="cursor-pointer"
                            />
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="bg-accent/5 border-accent/20">
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-accent-foreground">
                            {language === 'en' ? 'How it works:' : 'Cómo funciona:'}
                          </h4>
                          <ul className="space-y-2 text-xs text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-0.5">1.</span>
                              <span>
                                {language === 'en' 
                                  ? 'Position your face in the camera view' 
                                  : 'Posiciona tu rostro en la vista de la cámara'}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-0.5">2.</span>
                              <span>
                                {language === 'en' 
                                  ? 'Click "Apply Effects" to see the transformation' 
                                  : 'Haz clic en "Aplicar Efectos" para ver la transformación'}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-0.5">3.</span>
                              <span>
                                {language === 'en' 
                                  ? 'Adjust sliders to customize the effect intensity' 
                                  : 'Ajusta los controles para personalizar la intensidad'}
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-accent mt-0.5">4.</span>
                              <span>
                                {language === 'en' 
                                  ? 'Capture and download your result' 
                                  : 'Captura y descarga tu resultado'}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
