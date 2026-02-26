import { useState, useEffect } from 'react'
import { AppProvider } from './lib/AppContext'
import { AuthProvider } from './lib/AuthContext'
import { LanguageProvider, useLanguage } from './lib/LanguageContext'
import { LoyaltyProvider } from './lib/LoyaltyContext'
import { Header } from './components/Header'
import { FuturisticNav } from './components/FuturisticNav'
import { Hero } from './components/Hero'
import { LaunchSpecials } from './components/LaunchSpecials'
import { AntiAgingCategories } from './components/AntiAgingCategories'

import { ScienceSection } from './components/ScienceSection'
import { ProductGrid } from './components/ProductGrid'
import { BuildYourDuoPage } from './components/BuildYourDuoPage'
import { CompleteCrownKitPage } from './components/CompleteCrownKitPage'
import { MTRXCBDTechnology } from './components/MTRXCBDTechnology'
import { ProductDetailPage } from './components/ProductDetailPage'
import { ContentPage } from './components/ContentPage'
import { CheckoutFlow } from './components/CheckoutFlow'
import { SubscriptionManagement } from './components/SubscriptionManagement'
import { FacialCreamExploreAll } from './components/FacialCreamExploreAll'
import { FloatingCartButton } from './components/FloatingCartButton'
import { CartDrawer } from './components/CartDrawer'
import { FAQPage } from './components/FAQPage'
import { CustomerSupport } from './components/CustomerSupport'
import { ExploreAllProducts } from './components/ExploreAllProducts'
import { CertificationModal } from './components/CertificationModal'
import { ScrollBackButton } from './components/ScrollBackButton'
import { ScrollToTopButton } from './components/ScrollToTopButton'
import { LoyaltyDashboard } from './components/LoyaltyDashboard'
import { Toaster } from './components/ui/sonner'
import { Product } from './lib/types'
import { mockProducts } from './lib/mockData'
import { AnimatePresence, motion } from 'framer-motion'
import { useScrollMemory } from './hooks/use-scroll-memory'

type View = 'home' | 'content' | 'checkout' | 'subscriptions' | 'build-duo' | 'crown-kit' | 'facial-cream-explore' | 'faq' | 'customer-service' | 'product-support' | 'mtrx-cbd' | 'explore-all-products' | 'loyalty'

function AppContent() {
  const { t } = useLanguage()
  const { saveScrollPosition, getLastScrollPosition, scrollToSavedPosition } = useScrollMemory()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [currentView, setCurrentView] = useState<View>('home')
  const [selectedContent, setSelectedContent] = useState<string>('')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null)
  const [isCertificationModalOpen, setIsCertificationModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialized(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.title = t('site.title')
  }, [t])

  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent mb-4"></div>
          <p className="text-lg text-foreground">Loading SL Cosmetica...</p>
        </div>
      </div>
    )
  }

  const handleProductClick = (product: Product) => {
    saveScrollPosition(currentView)
    setSelectedProduct(product)
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackToShop = () => {
    saveScrollPosition('product-detail')
    setSelectedProduct(null)
    setCurrentView('home')
    
    const lastPosition = getLastScrollPosition('product-detail')
    if (lastPosition && lastPosition.position > 0) {
      scrollToSavedPosition(lastPosition.position)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubTabClick = (value: string) => {
    saveScrollPosition(currentView)
    if (value === 'faq') {
      setCurrentView('faq')
      setSelectedContent('')
      setSelectedProduct(null)
    } else if (value === 'customer-service' || value === 'product-support') {
      setCurrentView(value as View)
      setSelectedContent('')
      setSelectedProduct(null)
    } else if (value === 'mtrx-cbd') {
      setCurrentView('mtrx-cbd')
      setSelectedContent('')
      setSelectedProduct(null)
    } else {
      setSelectedContent(value)
      setCurrentView('content')
      setSelectedProduct(null)
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCheckoutClick = () => {
    saveScrollPosition(currentView)
    setCurrentView('checkout')
    setSelectedProduct(null)
    setIsCartOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubscriptionsClick = () => {
    saveScrollPosition(currentView)
    setCurrentView('subscriptions')
    setSelectedProduct(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCheckoutComplete = () => {
    saveScrollPosition('checkout')
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBackFromCheckout = () => {
    saveScrollPosition('checkout')
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleGoHome = () => {
    saveScrollPosition(currentView)
    setSelectedProduct(null)
    setSelectedContent('')
    setCurrentView('home')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBuildDuoClick = () => {
    saveScrollPosition(currentView)
    setCurrentView('build-duo')
    setSelectedProduct(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCrownKitClick = () => {
    saveScrollPosition(currentView)
    setCurrentView('crown-kit')
    setSelectedProduct(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleFacialCreamExploreClick = () => {
    saveScrollPosition(currentView)
    setCurrentView('facial-cream-explore')
    setSelectedProduct(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleExploreAllProducts = () => {
    saveScrollPosition(currentView)
    setCurrentView('explore-all-products')
    setSelectedProduct(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLoyaltyClick = () => {
    saveScrollPosition(currentView)
    setCurrentView('loyalty')
    setSelectedProduct(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleCertificationClick = (certificationId: string) => {
    setSelectedCertification(certificationId)
    setIsCertificationModalOpen(true)
  }

  return (
    <AuthProvider>
      <LoyaltyProvider>
        <AppProvider>
          <div className="min-h-screen bg-background">
          {currentView !== 'checkout' && currentView !== 'subscriptions' && currentView !== 'build-duo' && currentView !== 'facial-cream-explore' && currentView !== 'faq' && currentView !== 'customer-service' && currentView !== 'product-support' && currentView !== 'mtrx-cbd' && currentView !== 'explore-all-products' && currentView !== 'loyalty' && (
            <>
              <Header 
                onCheckout={handleCheckoutClick} 
                onHome={handleGoHome}
                onSubscriptions={handleSubscriptionsClick}
                onProductClick={handleProductClick}
                onExploreAllProducts={handleExploreAllProducts}
              />
              <FuturisticNav onSubTabClick={handleSubTabClick} />
            </>
          )}
        
        <AnimatePresence mode="wait">
          {currentView === 'explore-all-products' ? (
            <motion.div
              key="explore-all-products"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <ExploreAllProducts 
                onBack={handleGoHome}
                onProductClick={handleProductClick}
              />
            </motion.div>
          ) : currentView === 'loyalty' ? (
            <motion.div
              key="loyalty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <LoyaltyDashboard onBack={handleGoHome} />
            </motion.div>
          ) : currentView === 'mtrx-cbd' ? (
            <motion.div
              key="mtrx-cbd"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <MTRXCBDTechnology onBack={handleGoHome} />
            </motion.div>
          ) : currentView === 'customer-service' || currentView === 'product-support' ? (
            <motion.div
              key="customer-support"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <CustomerSupport onBack={handleGoHome} initialWing={currentView === 'product-support' ? 'product' : 'customer'} />
            </motion.div>
          ) : currentView === 'faq' ? (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <FAQPage onBack={handleGoHome} />
            </motion.div>
          ) : currentView === 'facial-cream-explore' ? (
            <motion.div
              key="facial-cream-explore"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <FacialCreamExploreAll 
                onBack={handleGoHome}
                onProductClick={handleProductClick}
              />
            </motion.div>
          ) : currentView === 'build-duo' ? (
            <motion.div
              key="build-duo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <BuildYourDuoPage onBack={handleGoHome} />
            </motion.div>
          ) : currentView === 'crown-kit' ? (
            <motion.div
              key="crown-kit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <CompleteCrownKitPage onBack={handleGoHome} />
            </motion.div>
          ) : currentView === 'subscriptions' ? (
            <motion.div
              key="subscriptions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <SubscriptionManagement onBack={handleGoHome} />
            </motion.div>
          ) : currentView === 'checkout' ? (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <CheckoutFlow 
                onBack={handleBackFromCheckout}
                onComplete={handleCheckoutComplete}
              />
            </motion.div>
          ) : currentView === 'content' ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <ContentPage pageKey={selectedContent} onProductClick={handleProductClick} />
            </motion.div>
          ) : selectedProduct ? (
            <motion.div
              key={`product-${selectedProduct.id}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <ProductDetailPage 
                product={selectedProduct} 
                onBack={handleBackToShop}
              />
            </motion.div>
          ) : (
            <motion.main
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            >
              <Hero onExploreAllProducts={handleExploreAllProducts} />
              <LaunchSpecials 
                onBuildDuo={handleBuildDuoClick}
                onCrownKit={handleCrownKitClick}
                onProductClick={handleProductClick}
              />
              <AntiAgingCategories 
                onProductClick={handleProductClick} 
                onExploreAllFacial={handleFacialCreamExploreClick}
              />
              <ProductGrid onProductClick={handleProductClick} />
              <ScienceSection />
            </motion.main>
          )}
        </AnimatePresence>
        {currentView !== 'checkout' && currentView !== 'subscriptions' && currentView !== 'build-duo' && currentView !== 'crown-kit' && currentView !== 'facial-cream-explore' && currentView !== 'faq' && currentView !== 'customer-service' && currentView !== 'product-support' && currentView !== 'mtrx-cbd' && currentView !== 'explore-all-products' && (
          <>
            <ScrollToTopButton />
            <footer className="bg-gradient-to-br from-[oklch(0.94_0.02_230)] via-[oklch(0.92_0.025_240)] to-[oklch(0.90_0.03_250)] border-t border-primary/15 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">
              <div>
                <h4 className="font-semibold text-slate-dark mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wider">{t('footer.products')}</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-dark/60">
                  <li className="font-semibold text-primary/90 pb-1">
                    <button onClick={handleExploreAllProducts} className="hover:text-primary active:text-primary transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">
                      {t('footer.exploreAll')} →
                    </button>
                  </li>
                  <li className="font-semibold text-slate-dark/80 pt-1">{t('footer.antiFacial')}</li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-001')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx001')}</button></li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-002')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx002')}</button></li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-003')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx003')}</button></li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-004')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx004')}</button></li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-005')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx005')}</button></li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-006')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx006')}</button></li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-008')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx008')}</button></li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-009')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx009')}</button></li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-010')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx010')}</button></li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-011')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx011')}</button></li>
                  <li className="font-semibold text-slate-dark/80 pt-2 sm:pt-3">{t('footer.antiBody')}</li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-012')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx012')}</button></li>
                  <li className="font-semibold text-slate-dark/80 pt-2 sm:pt-3">{t('footer.antiHair')}</li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-013')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx013')}</button></li>
                  <li><button onClick={() => handleProductClick(mockProducts.find(p => p.id === 'mtrx-014')!)} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('product.mtrx014')}</button></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-dark mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wider">{t('footer.skinConditions')}</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-dark/60">
                  <li><button onClick={() => handleSubTabClick('aging')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('condition.aging')}</button></li>
                  <li><button onClick={() => handleSubTabClick('imperfections')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('condition.imperfections')}</button></li>
                  <li><button onClick={() => handleSubTabClick('hyperpigmentation')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('condition.hyperpigmentation')}</button></li>
                  <li><button onClick={() => handleSubTabClick('dehydration')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('condition.dehydration')}</button></li>
                  <li><button onClick={() => handleSubTabClick('rosacea')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('condition.rosacea')}</button></li>
                  <li><button onClick={() => handleSubTabClick('sensitivity')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('condition.sensitivity')}</button></li>
                  <li><button onClick={() => handleSubTabClick('acne')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('condition.acne')}</button></li>
                  <li><button onClick={() => handleSubTabClick('dark-circles')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('condition.darkCircles')}</button></li>
                  <li><button onClick={() => handleSubTabClick('fine-lines')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('condition.fineLines')}</button></li>
                  <li><button onClick={() => handleSubTabClick('loss-of-firmness')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('condition.lossOfFirmness')}</button></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-dark mb-3 sm:mb-4 uppercase text-xs sm:text-sm tracking-wider">{t('footer.getToKnowUs')}</h4>
                <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-dark/60">
                  <li><button onClick={() => handleSubTabClick('our-promise')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('footer.ourPromise')}</button></li>
                  <li><button onClick={() => handleSubTabClick('founder-vision')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('footer.founderVision')}</button></li>
                  <li className="pt-3 sm:pt-4">
                    <h5 className="font-semibold text-slate-dark mb-2 uppercase text-xs sm:text-sm tracking-wider">{t('footer.support')}</h5>
                  </li>
                  <li><button onClick={() => handleSubTabClick('faq')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('footer.faq')}</button></li>
                  <li><button onClick={() => handleSubTabClick('customer-service')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('footer.contact')}</button></li>
                  <li><button onClick={() => handleSubTabClick('customer-service')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('footer.customerService')}</button></li>
                  <li><button onClick={() => handleSubTabClick('product-support')} className="hover:text-slate-dark active:text-slate-dark transition-colors text-left w-full py-1 -ml-0.5 px-0.5 rounded touch-manipulation">{t('footer.productSupport')}</button></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-slate-dark/15">
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                  <h5 className="text-xs sm:text-sm font-semibold text-slate-dark/70 uppercase tracking-wider text-center">
                    {t('footer.trust')}
                  </h5>
                  <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    <button 
                      onClick={() => handleCertificationClick('fda-registered')}
                      className="flex flex-col items-center gap-1.5 group cursor-pointer touch-manipulation"
                      aria-label={t('cert.fdaRegistered')}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-slate-dark/10 transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-primary/30 active:scale-100">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-deep" fill="currentColor">
                          <path d="M12 2L3 7v4c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5zm-1 16h2v2h-2v-2zm0-10h2v8h-2V8z"/>
                        </svg>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-slate-dark/60 font-medium text-center group-hover:text-primary transition-colors">{t('cert.fdaRegistered')}</span>
                    </button>

                    <button 
                      onClick={() => handleCertificationClick('gmp-certified')}
                      className="flex flex-col items-center gap-1.5 group cursor-pointer touch-manipulation"
                      aria-label={t('cert.gmpCertified')}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-slate-dark/10 transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-primary/30 active:scale-100">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-deep" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-slate-dark/60 font-medium text-center group-hover:text-primary transition-colors">{t('cert.gmpCertified')}</span>
                    </button>

                    <button 
                      onClick={() => handleCertificationClick('dermatologist-approved')}
                      className="flex flex-col items-center gap-1.5 group cursor-pointer touch-manipulation"
                      aria-label={t('cert.dermatologistApproved')}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-slate-dark/10 transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-primary/30 active:scale-100">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-deep" fill="currentColor">
                          <path d="M19.5 3.09L15 5.5 12 3 9 5.5 4.5 3.09V17.5l4.5 2.41L12 22l3-2.09 4.5 2.41V3.09zM12 13.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-slate-dark/60 font-medium text-center group-hover:text-primary transition-colors whitespace-pre-line">{t('cert.dermatologistApproved')}</span>
                    </button>

                    <button 
                      onClick={() => handleCertificationClick('cruelty-free')}
                      className="flex flex-col items-center gap-1.5 group cursor-pointer touch-manipulation"
                      aria-label={t('cert.crueltyFree')}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-slate-dark/10 transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-primary/30 active:scale-100">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-deep" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                        </svg>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-slate-dark/60 font-medium text-center group-hover:text-primary transition-colors">{t('cert.crueltyFree')}</span>
                    </button>

                    <button 
                      onClick={() => handleCertificationClick('eco-friendly')}
                      className="flex flex-col items-center gap-1.5 group cursor-pointer touch-manipulation"
                      aria-label={t('cert.ecoFriendly')}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-slate-dark/10 transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-primary/30 active:scale-100">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-deep" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                        </svg>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-slate-dark/60 font-medium text-center group-hover:text-primary transition-colors">{t('cert.ecoFriendly')}</span>
                    </button>

                    <button 
                      onClick={() => handleCertificationClick('secure-payment')}
                      className="flex flex-col items-center gap-1.5 group cursor-pointer touch-manipulation"
                      aria-label={t('cert.securePayment')}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-sm border border-slate-dark/10 transition-all duration-300 hover:shadow-md hover:scale-105 hover:border-primary/30 active:scale-100">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-teal-deep" fill="currentColor">
                          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
                        </svg>
                      </div>
                      <span className="text-[9px] sm:text-[10px] text-slate-dark/60 font-medium text-center group-hover:text-primary transition-colors whitespace-pre-line">{t('cert.securePayment')}</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-[10px] sm:text-xs text-slate-dark/50 leading-relaxed border-t border-slate-dark/10 pt-6 sm:pt-8">
                <p className="mb-3 sm:mb-4">
                  <span className="font-semibold text-slate-dark/70">SL Cosmetica International:</span>
                  <br className="sm:hidden" />
                  <span className="inline-block mt-1 text-[10px] sm:text-xs">
                    Austria | Australia | Belgium | Brazil | Canada | Czech Republic | Chili | Mainland China | Colombia | Denmark | France | Germany | Greece | Hong Kong SAR | Hongrie | Italy | Korea | Lebanon | Malta | Netherlands | Norway | Mexico | Peru | Portugal | Russia | Sweden | South Africa | Spain | Singapore | Switzerland | Türkiye | United Kingdom | Vietnam | United States SHOP
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4 text-slate-dark/50 mb-3 sm:mb-4 text-[10px] sm:text-xs">
                  <button onClick={handleGoHome} className="hover:text-slate-dark active:text-slate-dark transition-colors py-1 px-1 -ml-1 rounded touch-manipulation">{t('footer.siteMap')}</button>
                  <span className="hidden sm:inline">|</span>
                  <button onClick={() => handleSubTabClick('terms-of-use')} className="hover:text-slate-dark active:text-slate-dark transition-colors py-1 px-1 -ml-1 rounded touch-manipulation">{t('footer.terms')}</button>
                  <span className="hidden sm:inline">|</span>
                  <button onClick={() => handleSubTabClick('careers')} className="hover:text-slate-dark active:text-slate-dark transition-colors py-1 px-1 -ml-1 rounded touch-manipulation">{t('footer.careers')}</button>
                  <span className="hidden sm:inline">|</span>
                  <button onClick={() => handleSubTabClick('terms-colombia')} className="hover:text-slate-dark active:text-slate-dark transition-colors py-1 px-1 -ml-1 rounded touch-manipulation">T&Cs SL Cosmetica Colombia</button>
                </div>
                <p className="text-slate-dark/60 text-[10px] sm:text-xs">
                  {t('footer.copyright')}
                </p>
              </div>
            </div>
          </div>
        </footer>
          </>
        )}
        
        {currentView !== 'checkout' && currentView !== 'subscriptions' && currentView !== 'crown-kit' && currentView !== 'explore-all-products' && (
          <>
            <FloatingCartButton onClick={() => setIsCartOpen(true)} />
            <CartDrawer 
              open={isCartOpen} 
              onOpenChange={setIsCartOpen} 
              onCheckout={handleCheckoutClick} 
            />
            <ScrollBackButton currentView={currentView} />
          </>
        )}
        
        <CertificationModal 
          certificationId={selectedCertification}
          open={isCertificationModalOpen}
          onOpenChange={setIsCertificationModalOpen}
        />
        
        <Toaster />
      </div>
    </AppProvider>
    </LoyaltyProvider>
    </AuthProvider>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App