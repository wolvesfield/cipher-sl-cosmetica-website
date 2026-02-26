import { createContext, useContext, ReactNode, useState } from 'react'

export type Language = 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr'

export interface LanguageOption {
  code: Language
  label: string
}

export const supportedLanguages: LanguageOption[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'it', label: 'Italiano' },
  { code: 'nl', label: 'Nederlands' },
  { code: 'pl', label: 'Polski' },
]

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  resolveText: <T extends Record<string, string> | undefined>(
    value: T,
    fallbackLang?: Language
  ) => string
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const englishTranslations: Record<string, string> = {
  'site.title': 'SL - Clinical Luxury Skincare',
  'nav.home': 'Home',
  'nav.products': 'Products',
  'nav.support': 'Support',
  'nav.about': 'About',
  'nav.subscriptions': 'Subscriptions',
  'nav.signIn': 'Sign In',
  'nav.signOut': 'Sign Out',
  'hero.title': 'Redefine Your Skin',
  'hero.subtitle': 'Clinical luxury meets cutting-edge science',
  'hero.cta': 'Explore All Products',
  'product.addToCart': 'Add to Cart',
  'product.viewDetails': 'View Details',
  'product.outOfStock': 'Out of Stock',
  'product.inStock': 'In Stock',
  'product.price': 'Price',
  'product.description': 'Description',
  'product.ingredients': 'Ingredients',
  'product.howToUse': 'How to Use',
  'product.benefits': 'Benefits',
  'product.reviews': 'Reviews',
  'product.writeReview': 'Write a Review',
  'cart.title': 'Shopping Cart',
  'cart.empty': 'Your cart is empty',
  'cart.checkout': 'Proceed to Checkout',
  'cart.continueShopping': 'Continue Shopping',
  'cart.subtotal': 'Subtotal',
  'cart.total': 'Total',
  'cart.remove': 'Remove',
  'footer.products': 'PRODUCTS',
  'footer.skinConditions': 'SKIN CONDITIONS',
  'footer.getToKnowUs': 'GET TO KNOW US',
  'footer.support': 'SUPPORT',
  'footer.exploreAll': 'Explore All Products',
  'footer.antiFacial': 'Anti Aging Facial Cream',
  'footer.antiBody': 'Anti Aging Body Care',
  'footer.antiHair': 'Anti Aging Hair & Scalp Care',
  'footer.faq': 'FAQ',
  'footer.contact': 'Contact Us',
  'footer.customerService': 'Customer Service',
  'footer.productSupport': 'Product Support',
  'footer.ourPromise': 'Our Promise',
  'footer.founderVision': 'Founder Vision',
  'footer.trust': 'Trust & Certifications',
  'footer.copyright': '© 2026 SL Cosmetica. All rights reserved. Developed in partnership with Wolvesfield Inc, Gen X Intel, and Legacy Foundation.',
  'footer.siteMap': 'Site map',
  'footer.terms': 'Terms of use',
  'footer.careers': 'Careers',
  'category.all': 'All Products',
  'category.facial': 'Anti Aging Facial Cream',
  'category.body': 'Anti Aging Body Care',
  'category.hair': 'Anti Aging Hair & Scalp Care',
  'condition.aging': 'Aging',
  'condition.imperfections': 'Imperfections',
  'condition.hyperpigmentation': 'Hyperpigmentation',
  'condition.dehydration': 'Dehydration',
  'condition.rosacea': 'Rosacea',
  'condition.sensitivity': 'Sensitivity',
  'condition.acne': 'Acne',
  'condition.darkCircles': 'Dark Circles',
  'condition.fineLines': 'Fine Lines',
  'condition.lossOfFirmness': 'Loss of Firmness',
  'review.verifiedPurchase': 'Verified Purchase',
  'review.helpful': 'Helpful',
  'review.notHelpful': 'Not Helpful',
  'review.share': 'Share',
  'review.loadMore': 'Load More Reviews',
  'review.filterMostHelpful': 'Most Helpful',
  'review.filterRecent': 'Most Recent',
  'review.filterHighest': 'Highest Rating',
  'review.filterLowest': 'Lowest Rating',
  'review.withPhotos': 'With Photos',
  'review.verifiedOnly': 'Verified Only',
  'review.outOf': 'out of',
  'review.stars': 'stars',
  'review.basedOn': 'Based on',
  'review.reviews': 'reviews',
  'review.rating': 'Rating',
  'review.writeTitle': 'Write a Review',
  'review.name': 'Name',
  'review.email': 'Email',
  'review.reviewTitle': 'Review Title',
  'review.reviewBody': 'Your Review',
  'review.recommend': 'Would you recommend this product?',
  'review.yes': 'Yes',
  'review.no': 'No',
  'review.notSure': 'Not Sure',
  'review.uploadPhotos': 'Upload Photos (Optional)',
  'review.submit': 'Submit Review',
  'review.cancel': 'Cancel',
  'review.submitted': 'Review submitted for moderation',
  'review.thankyou': 'Thank you for your review!',
  'cert.fdaRegistered': 'FDA Registered',
  'cert.gmpCertified': 'GMP Certified',
  'cert.dermatologistApproved': 'Dermatologist\nApproved',
  'cert.crueltyFree': 'Cruelty Free',
  'cert.ecoFriendly': 'Eco-Friendly',
  'cert.securePayment': 'Secure\nPayment',
  'checkout.title': 'Checkout',
  'checkout.shipping': 'Shipping Information',
  'checkout.payment': 'Payment Information',
  'checkout.review': 'Review Order',
  'checkout.placeOrder': 'Place Order',
  'checkout.back': 'Back',
  'language.english': 'English',
  'language.spanish': 'Spanish',
  'language.select': 'Select Language',
  'product.mtrx001': 'The Great Harmonizer',
  'product.mtrx002': 'The Paradox',
  'product.mtrx003': 'The Sun Catcher',
  'product.mtrx004': 'The Sculptor',
  'product.mtrx005': 'Sunscreen',
  'product.mtrx006': 'The Spark',
  'product.mtrx008': "Nature's Whisper",
  'product.mtrx009': 'The Immortal',
  'product.mtrx010': 'The Rainmaker',
  'product.mtrx011': 'The Mason',
  'product.mtrx012': 'The Second Skin',
  'product.mtrx013': 'The Root of Power',
  'product.mtrx014': 'The Crown Jewel',
  'nav.philosophy': 'PHILOSOPHY',
  'nav.category': 'CATEGORY',
  'nav.skinCondition': 'SKIN CONDITION',
  'nav.getToKnowUs': 'GET TO KNOW US',
  'nav.prevent': 'PREVENT',
  'nav.protect': 'PROTECT',
  'nav.correct': 'CORRECT',
  'nav.mtrxCbd': 'MTRX-CBD TECHNOLOGY',
  'nav.antiFacialCream': 'ANTI AGING FACIAL CREAM',
  'nav.antiBodyCare': 'ANTI AGING BODY CARE',
  'nav.antiHairCare': 'ANTI AGING HAIR & SCALP CARE',
  'nav.aging': 'AGING',
  'nav.imperfections': 'IMPERFECTIONS',
  'nav.hyperpigmentation': 'HYPERPIGMENTATION',
  'nav.dehydration': 'DEHYDRATION',
  'nav.rosacea': 'ROSACEA',
  'nav.sensitivity': 'SENSITIVITY',
  'nav.acne': 'ACNE',
  'nav.darkCircles': 'DARK CIRCLES',
  'nav.fineLines': 'FINE LINES',
  'nav.lossOfFirmness': 'LOSS OF FIRMNESS',
  'nav.ourPromise': 'OUR PROMISE',
  'nav.founderVision': 'FOUNDER VISION',
  'nav.faq': 'FAQ',
  'nav.customerService': 'CUSTOMER SERVICE',
  'nav.productSupport': 'PRODUCT SUPPORT',
  'product.preOrder': 'Pre-Order',
  'product.comingSoon': 'Coming Soon',
  'common.viewProtocol': 'View Protocol',
  'scrollBack.label': 'Return to previous position',
  'scrollBack.tooltip': 'Back to previous position',
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return englishTranslations[key] ?? key
  }

  const resolveText = <T extends Record<string, string> | undefined>(
    value: T,
    fallbackLang: Language = 'en'
  ): string => {
    if (!value) return ''
    return value[language] ?? value[fallbackLang] ?? value['en'] ?? Object.values(value)[0] ?? ''
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, resolveText }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
