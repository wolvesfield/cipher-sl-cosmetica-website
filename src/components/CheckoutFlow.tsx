import { useState, useEffect, useCallback } from 'react'
import { useApp } from '@/lib/AppContext'
import { useAuth } from '@/lib/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  CreditCard, 
  MapPin, 
  User, 
  CheckCircle2, 
  ArrowLeft,
  Banknote,
  Building2,
  Smartphone,
  Home,
  UserCircle,
  ShoppingBag
} from 'lucide-react'
import { toast } from 'sonner'
import { CheckoutStep, ShippingInfo, PaymentMethod } from '@/lib/checkoutTypes'
import { COUNTRY_LIST, getStatesForCountry, getPostalCodeInfo } from '@/lib/locationData'
import { AuthModal } from './AuthModal'
import { SavedAddress } from '@/lib/authTypes'
import { useLanguage } from '@/lib/LanguageContext'

interface CheckoutFlowProps {
  onBack: () => void
  onComplete: () => void
}

type ExtendedCheckoutStep = 'auth' | CheckoutStep

export function CheckoutFlow({ onBack, onComplete }: CheckoutFlowProps) {
  const { language, currency, cart, convertPrice, formatPrice } = useApp()
  const { user, isAuthenticated, isGuest, continueAsGuest } = useAuth()
  const { resolveText } = useLanguage()
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [currentStep, setCurrentStep] = useState<ExtendedCheckoutStep>('auth')
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'Colombia'
  })
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit-card')
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const checkoutAvailable = false

  if (!checkoutAvailable) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 flex items-center justify-center px-3 sm:px-6 py-12">
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          onSuccess={() => setShowAuthModal(false)}
        />
        <div className="w-full max-w-3xl bg-white/90 border border-border/60 rounded-3xl shadow-2xl p-6 sm:p-8 text-center space-y-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mx-auto">
            <ShoppingBag className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-dark px-2">
            {language === 'en' ? 'Checkout Coming Soon' : 'Checkout Próximamente'}
          </h1>
          <p className="text-sm sm:text-base text-slate-dark/70 max-w-2xl mx-auto leading-relaxed px-2">
            {language === 'en'
              ? 'We are finalizing the shopper experience. Sign in to be notified the moment checkout opens.'
              : 'Estamos afinando la experiencia de compra. Inicia sesión para recibir una notificación cuando el checkout esté disponible.'}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-2">
            <Button variant="outline" onClick={onBack} className="w-full sm:w-auto px-6 py-3 h-12">
              {language === 'en' ? 'Continue Shopping' : 'Seguir Comprando'}
            </Button>
            <Button onClick={() => setShowAuthModal(true)} className="w-full sm:w-auto px-6 py-3 h-12">
              {language === 'en' ? 'Notify Me' : 'Avisarme'}
            </Button>
          </div>
        </div>
      </div>
    )
  }

  const loadAddress = useCallback((address: SavedAddress) => {
    setShippingInfo(prev => ({
      firstName: address.firstName,
      lastName: address.lastName,
      email: prev.email || user?.email || '',
      phone: address.phone,
      address: address.address,
      city: address.city,
      state: address.state,
      postalCode: address.postalCode,
      country: address.country
    }))
    setSelectedAddressId(address.id)
  }, [user?.email])

  useEffect(() => {
    if (isAuthenticated && user) {
      setShippingInfo({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email,
        phone: user.phone || '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        country: 'Colombia'
      })

      const defaultAddress = user.addresses?.find(addr => addr.isDefault)
      if (defaultAddress) {
        loadAddress(defaultAddress)
      }
      
      setCurrentStep('shipping')
    } else if (isGuest) {
      setCurrentStep('shipping')
    }
  }, [isAuthenticated, isGuest, user, loadAddress])

  const subtotal = cart.reduce((sum, item) => {
    const convertedPrice = convertPrice(item.product.price.COP)
    return sum + convertedPrice * item.quantity
  }, 0)
  const shipping = convertPrice(15000)
  const tax = subtotal * 0.19
  const total = subtotal + shipping + tax

  const formatCurrency = (amount: number) => {
    return formatPrice(amount)
  }

  const validateShipping = () => {
    const required = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'postalCode', 'country']
    return required.every(field => shippingInfo[field as keyof ShippingInfo])
  }
  
  const handleCountryChange = (country: string) => {
    setShippingInfo({
      ...shippingInfo,
      country,
      state: '',
      postalCode: ''
    })
  }
  
  const availableStates = getStatesForCountry(shippingInfo.country)
  const postalCodeInfo = getPostalCodeInfo(shippingInfo.country)

  const validatePayment = () => {
    if (paymentMethod === 'credit-card') {
      return cardInfo.cardNumber && cardInfo.cardName && cardInfo.expiryDate && cardInfo.cvv
    }
    return true
  }

  const handleShippingSubmit = () => {
    if (!validateShipping()) {
      toast.error(
        language === 'en' ? 'Please fill in all required fields' : 'Por favor complete todos los campos requeridos'
      )
      return
    }
    setCurrentStep('payment')
  }

  const handlePaymentSubmit = async () => {
    if (!validatePayment()) {
      toast.error(
        language === 'en' ? 'Please fill in all payment details' : 'Por favor complete todos los detalles de pago'
      )
      return
    }

    setIsProcessing(true)

    await new Promise(resolve => setTimeout(resolve, 2500))

    setIsProcessing(false)
    setCurrentStep('confirmation')
    
    setTimeout(() => {
      onComplete()
    }, 3000)
  }

  const steps = [
    { id: 'auth' as ExtendedCheckoutStep, label: language === 'en' ? 'Account' : 'Cuenta', icon: UserCircle },
    { id: 'shipping' as ExtendedCheckoutStep, label: language === 'en' ? 'Shipping' : 'Envío', icon: MapPin },
    { id: 'payment' as ExtendedCheckoutStep, label: language === 'en' ? 'Payment' : 'Pago', icon: CreditCard },
    { id: 'confirmation' as ExtendedCheckoutStep, label: language === 'en' ? 'Confirmation' : 'Confirmación', icon: CheckCircle2 }
  ]

  const currentStepIndex = steps.findIndex(s => s.id === currentStep)

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/10 py-6 sm:py-12 px-3 sm:px-4">
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
        onSuccess={() => setCurrentStep('shipping')}
      />
      
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Button
            variant="ghost"
            onClick={onBack}
            className="text-slate-dark hover:text-primary -ml-2 sm:-ml-0 touch-manipulation"
            size="sm"
          >
            <ArrowLeft className="mr-1 sm:mr-2 h-4 w-4" />
            <span className="text-sm">{language === 'en' ? 'Back to Cart' : 'Volver al Carrito'}</span>
          </Button>
          
          <Separator orientation="vertical" className="h-6 hidden sm:block" />
          
          <Button
            variant="ghost"
            onClick={onComplete}
            className="text-slate-dark hover:text-primary -ml-2 sm:-ml-0 touch-manipulation"
            size="sm"
          >
            <Home className="mr-1 sm:mr-2 h-4 w-4" />
            <span className="text-sm">{language === 'en' ? 'Home' : 'Inicio'}</span>
          </Button>
        </div>

        <div className="mb-6 sm:mb-8">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-slate-dark mb-3 sm:mb-4">
            {language === 'en' ? 'Checkout' : 'Pagar'}
          </h1>
          
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 overflow-x-auto pb-2 -mx-3 px-3 sm:mx-0 sm:px-0">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStepIndex === index
              const isCompleted = currentStepIndex > index
              
              return (
                <div key={step.id} className="flex items-center flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                        isCompleted
                          ? 'bg-accent text-white'
                          : isActive
                          ? 'bg-primary text-white'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      ) : (
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      )}
                    </div>
                    <span
                      className={`hidden sm:block text-xs sm:text-sm font-medium truncate ${
                        isActive ? 'text-primary' : isCompleted ? 'text-accent' : 'text-muted-foreground'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <Separator
                      className={`flex-1 mx-1 sm:mx-2 ${isCompleted ? 'bg-accent' : 'bg-muted'}`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {currentStep === 'auth' && (
                <motion.div
                  key="auth"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-border shadow-lg">
                    <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
                      <CardTitle className="font-playfair text-xl sm:text-2xl text-slate-dark flex items-center gap-2">
                        <UserCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        <span className="text-base sm:text-2xl">{language === 'en' ? 'Sign In or Continue as Guest' : 'Iniciar Sesión o Continuar como Invitado'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="text-center py-4 sm:py-8">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                          <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-slate-dark mb-2">
                          {language === 'en' ? 'Ready to Complete Your Order?' : '¿Listo para Completar tu Pedido?'}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto mb-6 sm:mb-8 px-2">
                          {language === 'en' 
                            ? 'Sign in to access saved addresses and faster checkout, or continue as a guest.'
                            : 'Inicia sesión para acceder a direcciones guardadas y un checkout más rápido, o continúa como invitado.'
                          }
                        </p>

                        <div className="space-y-3 sm:space-y-4 max-w-md mx-auto">
                          <Button
                            onClick={() => setShowAuthModal(true)}
                            className="w-full bg-primary hover:bg-primary/90 text-white h-11 sm:h-12 text-base sm:text-lg gap-2 touch-manipulation"
                          >
                            <User className="w-4 h-4 sm:w-5 sm:h-5" />
                            {language === 'en' ? 'Sign In to Your Account' : 'Iniciar Sesión'}
                          </Button>

                          <div className="relative my-4 sm:my-6">
                            <div className="absolute inset-0 flex items-center">
                              <span className="w-full border-t" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                              <span className="bg-card px-2 text-muted-foreground">
                                {language === 'en' ? 'Or' : 'O'}
                              </span>
                            </div>
                          </div>

                          <Button
                            onClick={() => {
                              continueAsGuest()
                              setCurrentStep('shipping')
                            }}
                            variant="outline"
                            className="w-full h-11 sm:h-12 text-base sm:text-lg gap-2 border-primary/20 hover:bg-secondary/50 touch-manipulation"
                          >
                            <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                            {language === 'en' ? 'Continue as Guest' : 'Continuar como Invitado'}
                          </Button>
                        </div>

                        <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-muted/30 rounded-lg">
                          <h4 className="font-semibold text-xs sm:text-sm mb-2 text-slate-dark">
                            {language === 'en' ? 'Benefits of Creating an Account:' : 'Beneficios de Crear una Cuenta:'}
                          </h4>
                          <ul className="text-[11px] sm:text-xs text-muted-foreground space-y-1 text-left">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                              <span>{language === 'en' ? 'Save addresses for faster checkout' : 'Guardar direcciones para checkout rápido'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                              <span>{language === 'en' ? 'Track your orders easily' : 'Rastrear tus pedidos fácilmente'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                              <span>{language === 'en' ? 'Exclusive offers and early access' : 'Ofertas exclusivas y acceso temprano'}</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" />
                              <span>{language === 'en' ? 'Personalized recommendations' : 'Recomendaciones personalizadas'}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 'shipping' && (
                <motion.div
                  key="shipping"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-border shadow-lg">
                    <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
                      <CardTitle className="font-playfair text-xl sm:text-2xl text-slate-dark flex items-center gap-2">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                        <span>{language === 'en' ? 'Shipping Information' : 'Información de Envío'}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6 pb-4 sm:pb-6">
                      {isAuthenticated && user && user.addresses && user.addresses.length > 0 && (
                        <div className="space-y-3 p-3 sm:p-4 bg-secondary/30 rounded-lg border border-border">
                          <Label className="text-sm sm:text-base font-semibold">
                            {language === 'en' ? 'Saved Addresses' : 'Direcciones Guardadas'}
                          </Label>
                          <RadioGroup value={selectedAddressId || ''} onValueChange={(value) => {
                            const address = user.addresses?.find(a => a.id === value)
                            if (address) loadAddress(address)
                          }}>
                            {user.addresses.map((address) => (
                              <div key={address.id} className="flex items-start space-x-3 p-3 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer bg-background">
                                <RadioGroupItem value={address.id} id={address.id} className="mt-1" />
                                <Label htmlFor={address.id} className="cursor-pointer flex-1">
                                  <div className="font-medium text-slate-dark">{address.label}</div>
                                  <div className="text-sm text-muted-foreground">
                                    {address.firstName} {address.lastName}
                                  </div>
                                  <div className="text-sm text-muted-foreground">
                                    {address.address}, {address.city}, {address.state} {address.postalCode}
                                  </div>
                                  <div className="text-sm text-muted-foreground">{address.country}</div>
                                  {address.isDefault && (
                                    <span className="inline-block mt-1 text-xs bg-accent/20 text-accent px-2 py-0.5 rounded">
                                      {language === 'en' ? 'Default' : 'Predeterminada'}
                                    </span>
                                  )}
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setSelectedAddressId(null)
                              setShippingInfo({
                                firstName: user.firstName,
                                lastName: user.lastName,
                                email: user.email,
                                phone: user.phone || '',
                                address: '',
                                city: '',
                                state: '',
                                postalCode: '',
                                country: 'Colombia'
                              })
                            }}
                            className="w-full"
                          >
                            {language === 'en' ? 'Use a New Address' : 'Usar una Nueva Dirección'}
                          </Button>
                        </div>
                      )}
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">
                            {language === 'en' ? 'First Name' : 'Nombre'} *
                          </Label>
                          <Input
                            id="firstName"
                            value={shippingInfo.firstName}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                            placeholder={language === 'en' ? 'John' : 'Juan'}
                            className="border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">
                            {language === 'en' ? 'Last Name' : 'Apellido'} *
                          </Label>
                          <Input
                            id="lastName"
                            value={shippingInfo.lastName}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                            placeholder={language === 'en' ? 'Doe' : 'García'}
                            className="border-border"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            {language === 'en' ? 'Email' : 'Correo Electrónico'} *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={shippingInfo.email}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                            placeholder="john@example.com"
                            className="border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            {language === 'en' ? 'Phone' : 'Teléfono'} *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={shippingInfo.phone}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                            placeholder="+57 300 123 4567"
                            className="border-border"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">
                          {language === 'en' ? 'Address' : 'Dirección'} *
                        </Label>
                        <Input
                          id="address"
                          value={shippingInfo.address}
                          onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                          placeholder={language === 'en' ? 'Street address' : 'Calle y número'}
                          className="border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">
                          {language === 'en' ? 'Country' : 'País'} *
                        </Label>
                        <Select value={shippingInfo.country} onValueChange={handleCountryChange}>
                          <SelectTrigger id="country" className="border-border">
                            <SelectValue placeholder={language === 'en' ? 'Select country' : 'Seleccionar país'} />
                          </SelectTrigger>
                          <SelectContent>
                            {COUNTRY_LIST.map((country) => (
                              <SelectItem key={country} value={country}>
                                {country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="city">
                            {language === 'en' ? 'City' : 'Ciudad'} *
                          </Label>
                          <Input
                            id="city"
                            value={shippingInfo.city}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                            placeholder={language === 'en' ? 'City' : 'Ciudad'}
                            className="border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="state">
                            {language === 'en' ? 'State/Province' : 'Departamento'} *
                          </Label>
                          <Select 
                            value={shippingInfo.state} 
                            onValueChange={(value) => setShippingInfo({ ...shippingInfo, state: value })}
                            disabled={!shippingInfo.country || availableStates.length === 0}
                          >
                            <SelectTrigger id="state" className="border-border">
                              <SelectValue placeholder={language === 'en' ? 'Select state' : 'Seleccionar departamento'} />
                            </SelectTrigger>
                            <SelectContent>
                              {availableStates.map((state) => (
                                <SelectItem key={state} value={state}>
                                  {state}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postalCode">
                            {language === 'en' ? 'Postal Code' : 'Código Postal'} *
                          </Label>
                          <Input
                            id="postalCode"
                            value={shippingInfo.postalCode}
                            onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
                            placeholder={postalCodeInfo.placeholder}
                            className="border-border"
                          />
                        </div>
                      </div>

                      <Button
                        onClick={handleShippingSubmit}
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        size="lg"
                      >
                        {language === 'en' ? 'Continue to Payment' : 'Continuar al Pago'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 'payment' && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-border shadow-lg">
                    <CardHeader>
                      <CardTitle className="font-playfair text-2xl text-slate-dark flex items-center gap-2">
                        <CreditCard className="w-6 h-6 text-primary" />
                        {language === 'en' ? 'Payment Method' : 'Método de Pago'}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <RadioGroup value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as PaymentMethod)}>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                            <RadioGroupItem value="credit-card" id="credit-card" />
                            <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer flex-1">
                              <CreditCard className="w-5 h-5 text-accent" />
                              <span>{language === 'en' ? 'Credit/Debit Card' : 'Tarjeta de Crédito/Débito'}</span>
                              <div className="ml-auto flex gap-2">
                                <span className="text-xs bg-muted px-2 py-1 rounded">Visa</span>
                                <span className="text-xs bg-muted px-2 py-1 rounded">Mastercard</span>
                              </div>
                            </Label>
                          </div>

                          {currency === 'COP' && (
                            <>
                              <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                                <RadioGroupItem value="pse" id="pse" />
                                <Label htmlFor="pse" className="flex items-center gap-2 cursor-pointer flex-1">
                                  <Building2 className="w-5 h-5 text-teal-deep" />
                                  <span>PSE</span>
                                  <span className="text-xs text-muted-foreground ml-auto">
                                    {language === 'en' ? 'Bank Transfer (Colombia)' : 'Transferencia Bancaria'}
                                  </span>
                                </Label>
                              </div>

                              <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                                <RadioGroupItem value="efecty" id="efecty" />
                                <Label htmlFor="efecty" className="flex items-center gap-2 cursor-pointer flex-1">
                                  <Banknote className="w-5 h-5 text-terracotta" />
                                  <span>Efecty</span>
                                  <span className="text-xs text-muted-foreground ml-auto">
                                    {language === 'en' ? 'Cash Payment' : 'Pago en Efectivo'}
                                  </span>
                                </Label>
                              </div>

                              <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                                <RadioGroupItem value="nequi" id="nequi" />
                                <Label htmlFor="nequi" className="flex items-center gap-2 cursor-pointer flex-1">
                                  <Smartphone className="w-5 h-5 text-primary" />
                                  <span>Nequi/Daviplata</span>
                                  <span className="text-xs text-muted-foreground ml-auto">
                                    {language === 'en' ? 'Mobile Wallet' : 'Billetera Digital'}
                                  </span>
                                </Label>
                              </div>
                            </>
                          )}

                          {currency === 'BRL' && (
                            <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                              <RadioGroupItem value="pix" id="pix" />
                              <Label htmlFor="pix" className="flex items-center gap-2 cursor-pointer flex-1">
                                <Banknote className="w-5 h-5 text-accent" />
                                <span>PIX</span>
                                <span className="text-xs text-muted-foreground ml-auto">
                                  {language === 'en' ? 'Instant Transfer (Brazil)' : 'Transferencia Instantánea'}
                                </span>
                              </Label>
                            </div>
                          )}

                          {currency === 'MXN' && (
                            <div className="flex items-center space-x-3 p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                              <RadioGroupItem value="oxxo" id="oxxo" />
                              <Label htmlFor="oxxo" className="flex items-center gap-2 cursor-pointer flex-1">
                                <Banknote className="w-5 h-5 text-terracotta" />
                                <span>OXXO</span>
                                <span className="text-xs text-muted-foreground ml-auto">
                                  {language === 'en' ? 'Cash Payment (Mexico)' : 'Pago en Efectivo'}
                                </span>
                              </Label>
                            </div>
                          )}
                        </div>
                      </RadioGroup>

                      {paymentMethod === 'credit-card' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 pt-4 border-t border-border"
                        >
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">
                              {language === 'en' ? 'Card Number' : 'Número de Tarjeta'} *
                            </Label>
                            <Input
                              id="cardNumber"
                              value={cardInfo.cardNumber}
                              onChange={(e) => setCardInfo({ ...cardInfo, cardNumber: e.target.value })}
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                              className="border-border"
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="cardName">
                              {language === 'en' ? 'Cardholder Name' : 'Nombre del Titular'} *
                            </Label>
                            <Input
                              id="cardName"
                              value={cardInfo.cardName}
                              onChange={(e) => setCardInfo({ ...cardInfo, cardName: e.target.value })}
                              placeholder={language === 'en' ? 'Name as it appears on card' : 'Nombre como aparece en la tarjeta'}
                              className="border-border"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiryDate">
                                {language === 'en' ? 'Expiry Date' : 'Fecha de Vencimiento'} *
                              </Label>
                              <Input
                                id="expiryDate"
                                value={cardInfo.expiryDate}
                                onChange={(e) => setCardInfo({ ...cardInfo, expiryDate: e.target.value })}
                                placeholder="MM/YY"
                                maxLength={5}
                                className="border-border"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV *</Label>
                              <Input
                                id="cvv"
                                value={cardInfo.cvv}
                                onChange={(e) => setCardInfo({ ...cardInfo, cvv: e.target.value })}
                                placeholder="123"
                                maxLength={4}
                                type="password"
                                className="border-border"
                              />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          onClick={() => setCurrentStep('shipping')}
                          className="flex-1"
                        >
                          {language === 'en' ? 'Back' : 'Atrás'}
                        </Button>
                        <Button
                          onClick={handlePaymentSubmit}
                          disabled={isProcessing}
                          className="flex-1 bg-accent hover:bg-accent/90 text-white"
                          size="lg"
                        >
                          {isProcessing
                            ? (language === 'en' ? 'Processing...' : 'Procesando...')
                            : (language === 'en' ? 'Complete Purchase' : 'Completar Compra')
                          }
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {currentStep === 'confirmation' && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="border-border shadow-lg">
                    <CardContent className="py-12 text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle2 className="w-12 h-12 text-accent" />
                      </motion.div>
                      <h2 className="font-playfair text-3xl text-slate-dark mb-3">
                        {language === 'en' ? 'Order Confirmed!' : '¡Pedido Confirmado!'}
                      </h2>
                      <p className="text-gray-medium mb-6 max-w-md mx-auto">
                        {language === 'en'
                          ? 'Thank you for your purchase! You will receive a confirmation email shortly.'
                          : '¡Gracias por tu compra! Recibirás un correo de confirmación en breve.'
                        }
                      </p>
                      <div className="bg-muted/50 rounded-lg p-6 max-w-sm mx-auto">
                        <p className="text-sm text-muted-foreground mb-2">
                          {language === 'en' ? 'Order Number' : 'Número de Pedido'}
                        </p>
                        <p className="font-mono text-lg font-semibold text-slate-dark">
                          SL-{Date.now().toString().slice(-8)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:col-span-1">
            <Card className="border-border shadow-lg sticky top-6">
              <CardHeader>
                <CardTitle className="font-playfair text-xl text-slate-dark">
                  {language === 'en' ? 'Order Summary' : 'Resumen del Pedido'}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.product.id} className="flex gap-3">
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🧴</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-dark line-clamp-1">
                          {resolveText(item.product.name)}
                        </p>
                        {item.product.subtitle && (
                          <p className="text-xs text-primary/70 line-clamp-1">
                            {resolveText(item.product.subtitle)}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                          {language === 'en' ? 'Qty' : 'Cant'}: {item.quantity}
                        </p>
                        <p className="text-sm font-semibold text-accent">
                          {formatCurrency(convertPrice(item.product.price.COP) * item.quantity)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator />

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{language === 'en' ? 'Subtotal' : 'Subtotal'}</span>
                    <span className="font-medium">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">{language === 'en' ? 'Shipping' : 'Envío'}</span>
                    <span className="font-medium">{formatCurrency(shipping)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {language === 'en' ? 'Tax (19%)' : 'IVA (19%)'}
                    </span>
                    <span className="font-medium">{formatCurrency(tax)}</span>
                  </div>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-slate-dark">{language === 'en' ? 'Total' : 'Total'}</span>
                  <span className="text-accent">{formatCurrency(total)}</span>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>{language === 'en' ? 'Secure checkout' : 'Pago seguro'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>{language === 'en' ? 'Free returns within 30 days' : 'Devoluciones gratis en 30 días'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
