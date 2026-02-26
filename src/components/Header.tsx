import { useState } from 'react'
import { Globe, ShoppingCart, Search, Menu, Home, Package, User, LogOut, ChevronDown, Star, Award, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useApp } from '@/lib/AppContext'
import { useAuth } from '@/lib/AuthContext'
import { useLanguage } from '@/lib/LanguageContext'
import { useLoyalty } from '@/lib/LoyaltyContext'
import { Currency, Product } from '@/lib/types'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Badge } from '@/components/ui/badge'
import { CartDrawer } from '@/components/CartDrawer'
import { AuthModal } from './AuthModal'
import { LanguageToggle, LanguageSelect } from './LanguageToggle'
import { mockProducts } from '@/lib/mockData'
import logoImage from '@/assets/images/logo1.png'

export function Header({ onCheckout, onHome, onSubscriptions, onProductClick, onExploreAllProducts }: {
  onCheckout?: () => void
  onHome?: () => void
  onSubscriptions?: () => void
  onProductClick?: (product: Product) => void
  onExploreAllProducts?: () => void
}) {
  const { currency, setCurrency, cart } = useApp()
  const { user, isAuthenticated, signOut } = useAuth()
  const { t, resolveText, language } = useLanguage()
  const { profile } = useLoyalty()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showProductsMenu, setShowProductsMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [showMobileSearch, setShowMobileSearch] = useState(false)

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const normalizedQuery = searchQuery.toLowerCase()

  const searchResults = searchQuery.trim().length > 0
    ? mockProducts.filter(product =>
        resolveText(product.name).toLowerCase().includes(normalizedQuery) ||
        (product.name.en ?? '').toLowerCase().includes(normalizedQuery) ||
        resolveText(product.subtitle).toLowerCase().includes(normalizedQuery) ||
        product.category?.toLowerCase().includes(normalizedQuery)
      ).slice(0, 5)
    : []

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'bronze':
        return 'from-orange-400 to-orange-600'
      case 'silver':
        return 'from-gray-300 to-gray-500'
      case 'gold':
        return 'from-yellow-400 to-yellow-600'
      case 'platinum':
        return 'from-purple-400 to-purple-600'
      default:
        return 'from-primary to-accent'
    }
  }

  const getTierIcon = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return <Award className="w-4 h-4" />
      default:
        return <Star className="w-4 h-4" />
    }
  }

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout()
    }
  }

  const handleHome = () => {
    if (onHome) {
      onHome()
    }
  }

  const handleSubscriptions = () => {
    if (onSubscriptions) {
      onSubscriptions()
    }
  }

  const handleProductNameClick = (productName: string) => {
    const product = mockProducts.find(p => p.name.en === productName)
    if (product && onProductClick) {
      onProductClick(product)
      setShowProductsMenu(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-primary/10 shadow-sm">
      {isAuthenticated && profile && (
        <div className={`bg-gradient-to-r ${getTierColor(profile.tier)} text-white py-1.5 px-3 sm:px-4 md:px-6 lg:px-8`}>
          <div className="container mx-auto flex items-center justify-between text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              {getTierIcon(profile.tier)}
              <span className="font-semibold capitalize">{profile.tier} Tier</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-white" />
                <span className="font-bold">{profile.points.toLocaleString()}</span>
                <span className="hidden sm:inline text-white/90">points</span>
              </div>
              <div className="hidden md:flex items-center gap-1.5 text-white/90">
                <span className="text-[11px]">{profile.nextTierPoints} to next tier</span>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
            <button 
              onClick={handleHome}
              className="cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <img 
                src={logoImage} 
                alt="SL Cosmetica" 
                className="h-12 sm:h-14 md:h-20 w-auto object-contain"
              />
            </button>
            
            <div 
              className="hidden lg:block relative"
              onMouseEnter={() => setShowProductsMenu(true)}
              onMouseLeave={() => setShowProductsMenu(false)}
            >
              <button className="flex items-center gap-1.5 text-sm font-medium text-slate-dark hover:text-primary transition-colors px-3 py-2">
                {t('nav.products').toUpperCase()}
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {showProductsMenu && (
                <div className="absolute left-0 top-full mt-2 w-[320px] bg-white/98 backdrop-blur-xl border border-border rounded-lg shadow-lg p-6 z-50">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-bold text-slate-dark mb-3 uppercase tracking-wider">
                        {t('footer.antiFacial')}
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-dark/70">
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative"
                          onClick={() => handleProductNameClick('The Great Harmonizer')}
                        >
                          {t('product.mtrx001')}
                        </li>
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative"
                          onClick={() => handleProductNameClick('The Paradox')}
                        >
                          {t('product.mtrx002')}
                        </li>
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative group"
                          onClick={() => handleProductNameClick('The Sun Catcher')}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span>{t('product.mtrx003')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                            <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                          </div>
                        </li>
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative group"
                          onClick={() => handleProductNameClick('The Sculptor')}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span>{t('product.mtrx004')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                            <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                          </div>
                        </li>
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative group"
                          onClick={() => handleProductNameClick('Sunscreen')}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span>{t('product.mtrx005')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                            <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                          </div>
                        </li>
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative group"
                          onClick={() => handleProductNameClick('The Spark')}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span>{t('product.mtrx006')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                            <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                          </div>
                        </li>
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative group"
                          onClick={() => handleProductNameClick("Nature's Whisper")}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span>{t('product.mtrx008')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                            <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                          </div>
                        </li>
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative group"
                          onClick={() => handleProductNameClick('The Immortal')}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span>{t('product.mtrx009')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                            <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                          </div>
                        </li>
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative"
                          onClick={() => handleProductNameClick('The Rainmaker')}
                        >
                          {t('product.mtrx010')}
                        </li>
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative group"
                          onClick={() => handleProductNameClick('The Mason')}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <span>{t('product.mtrx011')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                            <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-bold text-slate-dark mb-3 uppercase tracking-wider">
                        {t('footer.antiBody')}
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-dark/70">
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative"
                          onClick={() => handleProductNameClick('The Second Skin')}
                        >
                          {t('product.mtrx012')}
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-bold text-slate-dark mb-3 uppercase tracking-wider">
                        {t('footer.antiHair')}
                      </h3>
                      <ul className="space-y-2 text-sm text-slate-dark/70">
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative"
                          onClick={() => handleProductNameClick('The Root of Power')}
                        >
                          {t('product.mtrx013')}
                        </li>
                        <li 
                          className="hover:text-primary transition-colors cursor-pointer relative"
                          onClick={() => handleProductNameClick('The Crown Jewel')}
                        >
                          {t('product.mtrx014')}
                        </li>
                      </ul>
                    </div>
                    
                    <div className="pt-3 border-t border-border">
                      <button
                        onClick={() => {
                          if (onExploreAllProducts) {
                            onExploreAllProducts()
                            setShowProductsMenu(false)
                          }
                        }}
                        className="w-full text-center text-sm font-bold text-primary hover:text-accent transition-colors py-2 px-3 rounded-md hover:bg-muted"
                      >
                        {t('footer.exploreAll')} →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-medium" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setShowSearchResults(true)
                }}
                onFocus={() => setShowSearchResults(true)}
                onBlur={() => setTimeout(() => setShowSearchResults(false), 200)}
                className="w-full bg-background border border-border rounded-full pl-11 pr-4 py-2.5 text-sm text-slate-dark placeholder:text-gray-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white/98 backdrop-blur-xl border border-border rounded-lg shadow-lg z-50 overflow-hidden">
                  {searchResults.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => {
                        if (onProductClick) {
                          onProductClick(product)
                        }
                        setSearchQuery('')
                        setShowSearchResults(false)
                      }}
                      className="w-full flex items-center gap-3 p-3 hover:bg-muted transition-colors text-left"
                    >
                      <img
                        src={product.image}
                        alt={resolveText(product.name)}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-dark truncate">
                          {resolveText(product.name)}
                        </p>
                        {product.subtitle && (
                          <p className="text-xs text-muted-foreground truncate">
                            {resolveText(product.subtitle)}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
              {showSearchResults && searchQuery.trim().length > 0 && searchResults.length === 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white/98 backdrop-blur-xl border border-border rounded-lg shadow-lg z-50 p-4 text-center text-sm text-muted-foreground">
                  No products found
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleHome}
              className="hidden sm:flex items-center gap-1.5 sm:gap-2 text-slate-dark hover:bg-muted transition-colors px-2 sm:px-3 h-9"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm font-medium">Home</span>
            </Button>

            <Button 
              variant="ghost" 
              size="sm"
              onClick={handleSubscriptions}
              className="hidden md:flex items-center gap-1.5 sm:gap-2 text-slate-dark hover:bg-muted transition-colors px-2 sm:px-3 h-9"
            >
              <Package className="w-4 h-4" />
              <span className="text-sm font-medium">
                {t('nav.subscriptions') || 'Subscriptions'}
              </span>
            </Button>

            <LanguageToggle />

            <Select value={currency} onValueChange={(value) => setCurrency(value as Currency)}>
              <SelectTrigger className="w-[75px] sm:w-[90px] md:w-[110px] border-border bg-background text-slate-dark hover:bg-muted transition-colors text-[11px] sm:text-xs md:text-sm h-8 sm:h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-white/95 backdrop-blur-xl border-border">
                <SelectItem value="COP" className="text-slate-dark focus:bg-muted focus:text-slate-dark text-xs sm:text-sm">COP ($)</SelectItem>
                <SelectItem value="USD" className="text-slate-dark focus:bg-muted focus:text-slate-dark text-xs sm:text-sm">USD ($)</SelectItem>
                <SelectItem value="CAD" className="text-slate-dark focus:bg-muted focus:text-slate-dark text-xs sm:text-sm">CAD ($)</SelectItem>
                <SelectItem value="BRL" className="text-slate-dark focus:bg-muted focus:text-slate-dark text-xs sm:text-sm">BRL (R$)</SelectItem>
                <SelectItem value="MXN" className="text-slate-dark focus:bg-muted focus:text-slate-dark text-xs sm:text-sm">MXN ($)</SelectItem>
              </SelectContent>
            </Select>

            <Button 
              variant="ghost" 
              size="icon" 
              className="sm:hidden text-slate-dark hover:bg-muted h-9 w-9 flex-shrink-0"
              onClick={handleHome}
            >
              <Home className="w-4 h-4" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-slate-dark hover:bg-muted lg:hidden h-9 w-9 flex-shrink-0"
              onClick={() => setShowMobileSearch(true)}
            >
              <Search className="w-4 h-4" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-slate-dark hover:bg-muted h-9 w-9 flex-shrink-0"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              {totalItems > 0 && (
                <Badge className="absolute -top-0.5 -right-0.5 h-[18px] min-w-[18px] px-1 flex items-center justify-center bg-gradient-to-r from-primary to-accent text-white text-[10px] font-bold border-2 border-white rounded-full">
                  {totalItems}
                </Badge>
              )}
            </Button>

            {isAuthenticated && user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="relative text-slate-dark hover:bg-muted rounded-full h-9 w-9 flex-shrink-0"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold text-xs">
                      {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-white/95 backdrop-blur-xl border-border">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium text-slate-dark">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={handleSubscriptions}
                    className="text-slate-dark focus:bg-muted focus:text-slate-dark cursor-pointer"
                  >
                    <Package className="mr-2 h-4 w-4" />
                    {t('nav.subscriptions') || 'My Subscriptions'}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    onClick={signOut}
                    className="text-destructive focus:bg-destructive/10 focus:text-destructive cursor-pointer"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {t('nav.signOut') || 'Sign Out'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowAuthModal(true)}
                className="hidden sm:flex items-center gap-1.5 border-primary/20 text-slate-dark hover:bg-secondary/50 text-sm h-9 px-3"
              >
                <User className="w-4 h-4" />
                <span className="font-medium">
                  {t('nav.signIn') || 'Sign In'}
                </span>
              </Button>
            )}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-slate-dark hover:bg-muted h-9 w-9 flex-shrink-0">
                  <Menu className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 max-h-[80vh] overflow-y-auto bg-white/98 backdrop-blur-xl border-border">
                <DropdownMenuLabel className="text-xs font-bold uppercase tracking-wider text-slate-dark">
                  {t('footer.antiFacial')}
                </DropdownMenuLabel>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm"
                  onClick={() => handleProductNameClick('The Great Harmonizer')}
                >
                  {t('product.mtrx001')}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm"
                  onClick={() => handleProductNameClick('The Paradox')}
                >
                  {t('product.mtrx002')}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm relative"
                  onClick={() => handleProductNameClick('The Sun Catcher')}
                >
                  <div className="flex items-start justify-between gap-2 w-full">
                    <span>{t('product.mtrx003')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                    <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm relative"
                  onClick={() => handleProductNameClick('The Sculptor')}
                >
                  <div className="flex items-start justify-between gap-2 w-full">
                    <span>{t('product.mtrx004')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                    <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm relative"
                  onClick={() => handleProductNameClick('Sunscreen')}
                >
                  <div className="flex items-start justify-between gap-2 w-full">
                    <span>{t('product.mtrx005')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                    <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm relative"
                  onClick={() => handleProductNameClick('The Spark')}
                >
                  <div className="flex items-start justify-between gap-2 w-full">
                    <span>{t('product.mtrx006')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                    <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm relative"
                  onClick={() => handleProductNameClick("Nature's Whisper")}
                >
                  <div className="flex items-start justify-between gap-2 w-full">
                    <span>{t('product.mtrx008')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                    <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm relative"
                  onClick={() => handleProductNameClick('The Immortal')}
                >
                  <div className="flex items-start justify-between gap-2 w-full">
                    <span>{t('product.mtrx009')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                    <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm"
                  onClick={() => handleProductNameClick('The Rainmaker')}
                >
                  {t('product.mtrx010')}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm relative"
                  onClick={() => handleProductNameClick('The Mason')}
                >
                  <div className="flex items-start justify-between gap-2 w-full">
                    <span>{t('product.mtrx011')} <span className="text-xs text-muted-foreground">({t('product.preOrder')})</span></span>
                    <Badge className="bg-accent text-accent-foreground text-[9px] px-1.5 py-0 h-4 shrink-0">{t('product.comingSoon')}</Badge>
                  </div>
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuLabel className="text-xs font-bold uppercase tracking-wider text-slate-dark">
                  {t('footer.antiBody')}
                </DropdownMenuLabel>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm"
                  onClick={() => handleProductNameClick('The Second Skin')}
                >
                  {t('product.mtrx012')}
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuLabel className="text-xs font-bold uppercase tracking-wider text-slate-dark">
                  {t('footer.antiHair')}
                </DropdownMenuLabel>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm"
                  onClick={() => handleProductNameClick('The Root of Power')}
                >
                  {t('product.mtrx013')}
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-slate-dark/70 focus:bg-muted focus:text-primary cursor-pointer text-sm"
                  onClick={() => handleProductNameClick('The Crown Jewel')}
                >
                  {t('product.mtrx014')}
                </DropdownMenuItem>
                
                <DropdownMenuSeparator />
                
                <DropdownMenuItem
                  className="text-primary font-bold focus:bg-primary/10 focus:text-primary cursor-pointer text-sm"
                  onClick={() => {
                    if (onExploreAllProducts) {
                      onExploreAllProducts()
                    }
                  }}
                >
                  {t('footer.exploreAll')} →
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuLabel className="text-xs font-bold uppercase tracking-wider text-slate-dark">
                  Language & Currency
                </DropdownMenuLabel>
                <div className="px-2 py-1.5">
                  <LanguageSelect />
                </div>
                <div className="px-2 py-1.5">
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value as Currency)}
                    className="w-full text-sm bg-transparent border border-border rounded-md px-2 py-1.5 text-slate-dark focus:outline-none focus:ring-1 focus:ring-primary/30 cursor-pointer"
                  >
                    <option value="COP">COP ($)</option>
                    <option value="USD">USD ($)</option>
                    <option value="CAD">CAD ($)</option>
                    <option value="BRL">BRL (R$)</option>
                    <option value="MXN">MXN ($)</option>
                  </select>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      
      <CartDrawer open={isCartOpen} onOpenChange={setIsCartOpen} onCheckout={handleCheckout} />
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)}
      />

      {/* Mobile Search Sheet */}
      <Sheet open={showMobileSearch} onOpenChange={setShowMobileSearch}>
        <SheetContent side="top" className="h-auto">
          <SheetHeader>
            <SheetTitle className="text-left">{t('nav.products')}</SheetTitle>
          </SheetHeader>
          <div className="mt-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-medium" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-background border border-border rounded-full pl-11 pr-4 py-3 text-sm text-slate-dark placeholder:text-gray-medium focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            {searchQuery.trim().length > 0 && searchResults.length > 0 && (
              <div className="space-y-2 max-h-[60vh] overflow-y-auto">
                {searchResults.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      if (onProductClick) {
                        onProductClick(product)
                      }
                      setSearchQuery('')
                      setShowMobileSearch(false)
                    }}
                    className="w-full flex items-center gap-3 p-3 hover:bg-muted transition-colors text-left rounded-lg border border-border"
                  >
                    <img
                      src={product.image}
                      alt={resolveText(product.name)}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-dark truncate">
                        {resolveText(product.name)}
                      </p>
                      {product.subtitle && (
                        <p className="text-xs text-muted-foreground truncate">
                          {resolveText(product.subtitle)}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
            {searchQuery.trim().length > 0 && searchResults.length === 0 && (
              <div className="text-center py-8 text-muted-foreground">
                No products found
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
