import { motion } from 'framer-motion'
import { 
  Package, 
  Gift, 
  Truck, 
  Calendar, 
  ArrowsClockwise,
  PauseCircle,
  ShieldCheck,
  Percent
} from '@phosphor-icons/react'
import { useApp } from '@/lib/AppContext'
import { Card } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

export function SubscriptionInfoPage() {
  const { language } = useApp()

  const features = [
    {
      icon: Percent,
      title: language === 'en' ? 'Save Up to 15%' : 'Ahorra Hasta 15%',
      description: language === 'en' 
        ? 'Enjoy automatic discounts on every delivery based on your frequency'
        : 'Disfruta descuentos automáticos en cada entrega según tu frecuencia',
      color: 'text-green-600 bg-green-100'
    },
    {
      icon: Truck,
      title: language === 'en' ? 'Free Shipping Always' : 'Envío Gratis Siempre',
      description: language === 'en' 
        ? 'All subscription orders ship free, no minimum purchase required'
        : 'Todos los pedidos de suscripción envían gratis, sin compra mínima requerida',
      color: 'text-blue-600 bg-blue-100'
    },
    {
      icon: Calendar,
      title: language === 'en' ? 'Flexible Schedule' : 'Horario Flexible',
      description: language === 'en' 
        ? 'Choose delivery every 30, 60, or 90 days - whatever works for you'
        : 'Elige entregas cada 30, 60 o 90 días - lo que funcione para ti',
      color: 'text-purple-600 bg-purple-100'
    },
    {
      icon: PauseCircle,
      title: language === 'en' ? 'Pause or Skip Anytime' : 'Pausa u Omite Cuando Quieras',
      description: language === 'en' 
        ? 'Need a break? Pause or skip any delivery with one click'
        : '¿Necesitas un descanso? Pausa u omite cualquier entrega con un clic',
      color: 'text-yellow-600 bg-yellow-100'
    },
    {
      icon: ArrowsClockwise,
      title: language === 'en' ? 'Easy Changes' : 'Cambios Fáciles',
      description: language === 'en' 
        ? 'Update products, frequency, or quantities at any time'
        : 'Actualiza productos, frecuencia o cantidades en cualquier momento',
      color: 'text-teal-600 bg-teal-100'
    },
    {
      icon: ShieldCheck,
      title: language === 'en' ? 'No Commitment' : 'Sin Compromiso',
      description: language === 'en' 
        ? 'Cancel anytime, no questions asked. We believe in earning your trust'
        : 'Cancela cuando quieras, sin preguntas. Creemos en ganar tu confianza',
      color: 'text-red-600 bg-red-100'
    },
  ]

  const savingsBreakdown = [
    {
      frequency: language === 'en' ? 'Every 30 Days' : 'Cada 30 Días',
      discount: '15%',
      description: language === 'en' ? 'Best value for daily users' : 'Mejor valor para usuarios diarios'
    },
    {
      frequency: language === 'en' ? 'Every 60 Days' : 'Cada 60 Días',
      discount: '12%',
      description: language === 'en' ? 'Perfect for moderate use' : 'Perfecto para uso moderado'
    },
    {
      frequency: language === 'en' ? 'Every 90 Days' : 'Cada 90 Días',
      discount: '10%',
      description: language === 'en' ? 'Great for occasional users' : 'Genial para usuarios ocasionales'
    },
  ]

  const faqs = [
    {
      question: language === 'en' ? 'How do I start a subscription?' : '¿Cómo inicio una suscripción?',
      answer: language === 'en' 
        ? 'Simply select your desired delivery frequency on any product page before adding to cart. You can also convert any one-time purchase to a subscription during checkout.'
        : 'Simplemente selecciona tu frecuencia de entrega deseada en cualquier página de producto antes de agregar al carrito. También puedes convertir cualquier compra única en suscripción durante el checkout.'
    },
    {
      question: language === 'en' ? 'Can I change my subscription?' : '¿Puedo cambiar mi suscripción?',
      answer: language === 'en' 
        ? 'Yes! You can modify your delivery frequency, swap products, adjust quantities, or pause/cancel at any time from your subscription dashboard.'
        : '¡Sí! Puedes modificar tu frecuencia de entrega, cambiar productos, ajustar cantidades o pausar/cancelar en cualquier momento desde tu panel de suscripciones.'
    },
    {
      question: language === 'en' ? 'When will I be charged?' : '¿Cuándo se me cobrará?',
      answer: language === 'en' 
        ? 'You\'ll be charged when each order ships. We\'ll send you a reminder email 3 days before your next delivery so you can make any changes if needed.'
        : 'Se te cobrará cuando cada pedido sea enviado. Te enviaremos un correo recordatorio 3 días antes de tu próxima entrega para que puedas hacer cambios si es necesario.'
    },
    {
      question: language === 'en' ? 'What if I need to cancel?' : '¿Qué pasa si necesito cancelar?',
      answer: language === 'en' 
        ? 'You can cancel your subscription at any time with no penalties or fees. We want you to love your routine, not feel locked in.'
        : 'Puedes cancelar tu suscripción en cualquier momento sin penalidades o tarifas. Queremos que ames tu rutina, no que te sientas atrapado.'
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-6">
            <Package className="w-10 h-10 text-white" weight="duotone" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4 font-playfair">
            {language === 'en' ? 'Subscribe & Save' : 'Suscríbete y Ahorra'}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'en' 
              ? 'Never run out of your favorite products. Enjoy exclusive discounts, free shipping, and complete flexibility.'
              : 'Nunca te quedes sin tus productos favoritos. Disfruta descuentos exclusivos, envío gratis y flexibilidad completa.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" weight="duotone" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-playfair">
            {language === 'en' ? 'Savings Breakdown' : 'Desglose de Ahorros'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {savingsBreakdown.map((item) => (
              <Card 
                key={item.frequency}
                className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-2"
              >
                <Badge className="mb-4 text-lg px-4 py-2 bg-gradient-to-r from-primary to-accent">
                  {item.discount}
                </Badge>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {item.frequency}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center font-playfair">
            {language === 'en' ? 'Frequently Asked Questions' : 'Preguntas Frecuentes'}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Card className="p-12 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
            <Gift className="w-16 h-16 text-primary mx-auto mb-6" weight="duotone" />
            <h2 className="text-3xl font-bold text-foreground mb-4 font-playfair">
              {language === 'en' ? 'Ready to Start Saving?' : '¿Listo para Empezar a Ahorrar?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Choose any product and select your preferred delivery frequency to unlock exclusive subscription savings.'
                : 'Elige cualquier producto y selecciona tu frecuencia de entrega preferida para desbloquear ahorros exclusivos de suscripción.'}
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-white text-lg px-8"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              {language === 'en' ? 'Shop Now' : 'Comprar Ahora'}
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
