import { useState, useEffect, useRef } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { useAuth } from '@/lib/AuthContext'
import { motion } from 'framer-motion'
import { UserPlus, LogIn, ShoppingBag, Mail, Lock, User, Phone } from 'lucide-react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
  thickness: number
  color: { r: number; g: number; b: number }
}

function AuthModalBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let stars: Star[] = []
    const shootingStars: ShootingStar[] = []
    let time = 0

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
      initStars()
    }

    const initStars = () => {
      stars = []
      const starCount = Math.floor((canvas.width * canvas.height) / 3000)
      
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.8 + 0.4,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.03 + 0.01,
          twinklePhase: Math.random() * Math.PI * 2
        })
      }
    }

    const createShootingStar = () => {
      const startFromTop = Math.random() > 0.4
      const colorVariant = Math.random()
      
      let color = { r: 255, g: 255, b: 255 }
      if (colorVariant < 0.25) {
        color = { r: 170, g: 190, b: 255 }
      } else if (colorVariant < 0.5) {
        color = { r: 190, g: 170, b: 255 }
      } else if (colorVariant < 0.75) {
        color = { r: 140, g: 210, b: 255 }
      }

      shootingStars.push({
        x: startFromTop ? Math.random() * canvas.width : canvas.width,
        y: startFromTop ? 0 : Math.random() * canvas.height * 0.4,
        length: Math.random() * 100 + 80,
        speed: Math.random() * 8 + 12,
        angle: startFromTop ? Math.PI / 4 + Math.random() * 0.35 : Math.PI / 3 + Math.random() * 0.25,
        opacity: 1,
        thickness: Math.random() * 2 + 1.2,
        color
      })
    }

    const drawStars = () => {
      stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.35 + 0.65
        const alpha = star.opacity * twinkle

        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        
        const brightness = 200 + (55 * twinkle)
        ctx.fillStyle = `rgba(${brightness}, ${brightness}, ${Math.min(255, brightness + 40)}, ${alpha})`
        ctx.fill()

        if (star.size > 1.3 && Math.random() > 0.995) {
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3.5)
          gradient.addColorStop(0, `rgba(220, 230, 255, ${alpha * 0.5})`)
          gradient.addColorStop(0.5, `rgba(180, 200, 255, ${alpha * 0.25})`)
          gradient.addColorStop(1, 'rgba(150, 180, 255, 0)')
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 3.5, 0, Math.PI * 2)
          ctx.fill()
        }
      })
    }

    const drawShootingStars = () => {
      shootingStars.forEach((star, index) => {
        const tailLength = star.length * (1 - (1 - star.opacity) * 0.5)
        
        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - Math.cos(star.angle) * tailLength,
          star.y - Math.sin(star.angle) * tailLength
        )
        
        gradient.addColorStop(0, `rgba(${star.color.r + 55}, ${star.color.g + 55}, ${star.color.b}, ${star.opacity})`)
        gradient.addColorStop(0.1, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${star.opacity * 0.9})`)
        gradient.addColorStop(0.4, `rgba(${star.color.r - 30}, ${star.color.g - 20}, ${star.color.b}, ${star.opacity * 0.6})`)
        gradient.addColorStop(0.7, `rgba(${star.color.r - 50}, ${star.color.g - 40}, ${star.color.b - 20}, ${star.opacity * 0.3})`)
        gradient.addColorStop(1, 'rgba(100, 120, 180, 0)')

        ctx.save()
        ctx.shadowBlur = 15
        ctx.shadowColor = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0.8)`
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = star.thickness
        ctx.lineCap = 'round'

        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(
          star.x - Math.cos(star.angle) * tailLength,
          star.y - Math.sin(star.angle) * tailLength
        )
        ctx.stroke()

        const coreGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.thickness * 2.5)
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`)
        coreGradient.addColorStop(0.5, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${star.opacity * 0.5})`)
        coreGradient.addColorStop(1, 'rgba(200, 220, 255, 0)')
        
        ctx.fillStyle = coreGradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.thickness * 2.5, 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()

        star.x -= Math.cos(star.angle) * star.speed
        star.y -= Math.sin(star.angle) * star.speed
        star.opacity -= 0.01

        if (star.opacity <= 0 || star.x < -star.length || star.y > canvas.height + star.length) {
          shootingStars.splice(index, 1)
        }
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      time++
      
      drawStars()
      drawShootingStars()

      if (Math.random() > 0.97) {
        createShootingStar()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ mixBlendMode: 'normal' }}
    />
  )
}

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
  mode?: 'signin' | 'signup'
}

export function AuthModal({ isOpen, onClose, onSuccess, mode = 'signin' }: AuthModalProps) {
  const { signIn, signUp, continueAsGuest } = useAuth()
  const [activeTab, setActiveTab] = useState(mode)
  const [isLoading, setIsLoading] = useState(false)

  const [signInData, setSignInData] = useState({
    email: '',
    password: ''
  })

  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  })

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const success = await signIn(signInData.email, signInData.password)
    setIsLoading(false)

    if (success) {
      onClose()
      onSuccess?.()
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()

    if (signUpData.password !== signUpData.confirmPassword) {
      return
    }

    if (!signUpData.agreeToTerms) {
      return
    }

    setIsLoading(true)

    const success = await signUp(
      signUpData.email,
      signUpData.password,
      signUpData.firstName,
      signUpData.lastName,
      signUpData.phone
    )

    setIsLoading(false)

    if (success) {
      onClose()
      onSuccess?.()
    }
  }

  const handleGuestCheckout = () => {
    continueAsGuest()
    onClose()
    onSuccess?.()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-[500px] relative overflow-hidden border-primary/20 bg-gradient-to-br from-[oklch(0.15_0.08_260)] via-[oklch(0.20_0.10_270)] to-[oklch(0.18_0.12_250)] max-h-[90vh] overflow-y-auto">
        <AuthModalBackground />
        
        <div className="relative z-10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-playfair text-white drop-shadow-lg">Welcome to SL Cosmetica</DialogTitle>
          <DialogDescription className="text-white/80">
            Sign in to your account or create a new one to enjoy personalized experiences
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'signin' | 'signup')} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-white/10 border border-white/20">
            <TabsTrigger 
              value="signin" 
              className="gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
            >
              <LogIn className="w-4 h-4" />
              Sign In
            </TabsTrigger>
            <TabsTrigger 
              value="signup" 
              className="gap-2 data-[state=active]:bg-white/20 data-[state=active]:text-white text-white/70"
            >
              <UserPlus className="w-4 h-4" />
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSignIn}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="signin-email" className="text-white/90">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-white/50" />
                  <Input
                    id="signin-email"
                    type="email"
                    placeholder="your@email.com"
                    value={signInData.email}
                    onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-white/40"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signin-password" className="text-white/90">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-white/50" />
                  <Input
                    id="signin-password"
                    type="password"
                    placeholder="••••••••"
                    value={signInData.password}
                    onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-white/40"
                    required
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-white/90 hover:bg-white text-[oklch(0.18_0.10_260)] font-semibold shadow-lg"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </motion.form>
          </TabsContent>

          <TabsContent value="signup">
            <motion.form
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleSignUp}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-firstname" className="text-white/90">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-white/50" />
                    <Input
                      id="signup-firstname"
                      placeholder="John"
                      value={signUpData.firstName}
                      onChange={(e) => setSignUpData({ ...signUpData, firstName: e.target.value })}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-white/40"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="signup-lastname" className="text-white/90">Last Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-white/50" />
                    <Input
                      id="signup-lastname"
                      placeholder="Doe"
                      value={signUpData.lastName}
                      onChange={(e) => setSignUpData({ ...signUpData, lastName: e.target.value })}
                      className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-white/40"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-email" className="text-white/90">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-white/50" />
                  <Input
                    id="signup-email"
                    type="email"
                    placeholder="your@email.com"
                    value={signUpData.email}
                    onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-white/40"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-phone" className="text-white/90">Phone (Optional)</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-white/50" />
                  <Input
                    id="signup-phone"
                    type="tel"
                    placeholder="+57 300 123 4567"
                    value={signUpData.phone}
                    onChange={(e) => setSignUpData({ ...signUpData, phone: e.target.value })}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-white/40"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password" className="text-white/90">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-white/50" />
                  <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                    value={signUpData.password}
                    onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-white/40"
                    minLength={8}
                    required
                  />
                </div>
                <p className="text-xs text-white/60">Must be at least 8 characters</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-confirm-password" className="text-white/90">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-white/50" />
                  <Input
                    id="signup-confirm-password"
                    type="password"
                    placeholder="••••••••"
                    value={signUpData.confirmPassword}
                    onChange={(e) => setSignUpData({ ...signUpData, confirmPassword: e.target.value })}
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15 focus:border-white/40"
                    required
                  />
                </div>
                {signUpData.password && signUpData.confirmPassword && signUpData.password !== signUpData.confirmPassword && (
                  <p className="text-xs text-red-300">Passwords do not match</p>
                )}
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={signUpData.agreeToTerms}
                  onCheckedChange={(checked) => setSignUpData({ ...signUpData, agreeToTerms: checked as boolean })}
                  className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-[oklch(0.18_0.10_260)]"
                />
                <label htmlFor="terms" className="text-sm text-white/70 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  I agree to the Terms of Service and Privacy Policy
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-white/90 hover:bg-white text-[oklch(0.18_0.10_260)] font-semibold shadow-lg"
                disabled={isLoading || signUpData.password !== signUpData.confirmPassword || !signUpData.agreeToTerms}
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </motion.form>
          </TabsContent>
        </Tabs>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/20" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[oklch(0.18_0.10_260)] px-2 text-white/70">Or</span>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={handleGuestCheckout}
          className="w-full gap-2 border-white/30 bg-white/10 hover:bg-white/20 text-white"
        >
          <ShoppingBag className="w-4 h-4" />
          Continue as Guest
        </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
