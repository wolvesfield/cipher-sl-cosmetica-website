import { useApp } from '@/lib/AppContext'
import { useLanguage } from '@/lib/LanguageContext'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet'
import { Minus, Plus, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'sonner'

interface CartDrawerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onCheckout: () => void
}

export function CartDrawer({ open, onOpenChange, onCheckout }: CartDrawerProps) {
  const { language, cart, updateQuantity, removeFromCart, clearCart, convertPrice, formatPrice } = useApp()
  const { resolveText } = useLanguage()

  const subtotal = cart.reduce((sum, item) => {
    const itemPrice = convertPrice(item.product.price.COP)
    return sum + itemPrice * item.quantity
  }, 0)

  const formattedSubtotal = formatPrice(subtotal)

  const handleCheckout = () => {
    onOpenChange(false)
    onCheckout()
  }

  const handleClearCart = () => {
    clearCart()
    toast.info(
      language === 'en' ? 'Cart cleared' : 'Carrito vaciado'
    )
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col bg-white p-0">
        <SheetHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 border-b border-border">
          <SheetTitle className="text-xl sm:text-2xl font-playfair text-slate-dark">
            {language === 'en' ? 'Shopping Cart' : 'Carrito de Compras'}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 sm:py-6 px-4 sm:px-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-2">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="w-24 h-24 sm:w-32 sm:h-32 bg-muted rounded-full flex items-center justify-center mb-3 sm:mb-4"
              >
                <span className="text-5xl sm:text-6xl">🛒</span>
              </motion.div>
              <h3 className="text-lg sm:text-xl font-semibold text-slate-dark mb-2">
                {language === 'en' ? 'Your cart is empty' : 'Tu carrito está vacío'}
              </h3>
              <p className="text-sm sm:text-base text-gray-medium mb-4 sm:mb-6">
                {language === 'en' 
                  ? 'Start adding some products to get started' 
                  : 'Comienza agregando algunos productos'}
              </p>
              <Button 
                onClick={() => onOpenChange(false)}
                className="bg-teal-deep hover:bg-teal-light text-white touch-manipulation"
                size="lg"
              >
                {language === 'en' ? 'Continue Shopping' : 'Continuar Comprando'}
              </Button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {cart.map((item) => {
                const convertedPrice = convertPrice(item.product.price.COP)
                const itemPrice = formatPrice(convertedPrice)
                const itemTotal = formatPrice(convertedPrice * item.quantity)

                return (
                  <motion.div
                    key={item.product.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-background rounded-lg border border-border"
                  >
                    <img
                      src={item.product.image}
                      alt={resolveText(item.product.name)}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md flex-shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <div className="flex-1 min-w-0 pr-2">
                          <h4 className="font-semibold text-slate-dark text-xs sm:text-sm line-clamp-2 leading-tight">
                            {resolveText(item.product.name)}
                          </h4>
                          {item.product.subtitle && (
                            <p className="text-[10px] sm:text-xs text-primary/70 line-clamp-1">
                              {resolveText(item.product.subtitle)}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                          className="h-6 w-6 text-gray-medium hover:text-destructive flex-shrink-0 touch-manipulation"
                        >
                          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-gray-medium mb-2 sm:mb-3">{itemPrice}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 sm:gap-2 bg-secondary/50 rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="h-7 w-7 sm:h-8 sm:w-8 hover:bg-white touch-manipulation"
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="text-xs sm:text-sm font-semibold text-slate-dark w-7 sm:w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="h-7 w-7 sm:h-8 sm:w-8 hover:bg-white touch-manipulation"
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        
                        <span className="font-bold text-slate-dark text-sm sm:text-base">{itemTotal}</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}

              <Button
                variant="ghost"
                onClick={handleClearCart}
                className="w-full text-destructive hover:text-destructive hover:bg-destructive/10 text-sm touch-manipulation"
                size="sm"
              >
                {language === 'en' ? 'Clear Cart' : 'Vaciar Carrito'}
              </Button>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <SheetFooter className="border-t border-border pt-4 sm:pt-6 pb-4 sm:pb-6 px-4 sm:px-6 flex-col space-y-3 sm:space-y-4">
            <div className="space-y-2 w-full">
              <div className="flex justify-between text-base sm:text-lg">
                <span className="text-gray-medium">
                  {language === 'en' ? 'Subtotal' : 'Subtotal'}
                </span>
                <span className="font-bold text-slate-dark">{formattedSubtotal}</span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-medium text-center">
                {language === 'en' 
                  ? 'Shipping and taxes calculated at checkout' 
                  : 'Envío e impuestos calculados al finalizar'}
              </p>
            </div>
            
            <Button
              onClick={handleCheckout}
              className="w-full bg-teal-deep hover:bg-teal-light text-white text-base sm:text-lg h-11 sm:h-12 touch-manipulation"
            >
              {language === 'en' ? 'Proceed to Checkout' : 'Proceder al Pago'}
            </Button>
            
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="w-full text-sm touch-manipulation"
              size="sm"
            >
              {language === 'en' ? 'Continue Shopping' : 'Continuar Comprando'}
            </Button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  )
}
