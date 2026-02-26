import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useApp } from '@/lib/AppContext'
import { useLanguage } from '@/lib/LanguageContext'
import { cn } from '@/lib/utils'

type MainTab = 'PHILOSOPHY' | 'CATEGORY' | 'SKIN CONDITION' | 'GET TO KNOW US'

interface FuturisticNavProps {
  onSubTabClick?: (value: string) => void
}

interface SubTabItem {
  label: string
  value: string
  translationKey: string
}

interface SubTabSection {
  title: string
  items: SubTabItem[]
}

export function FuturisticNav({ onSubTabClick }: FuturisticNavProps) {
  useApp()
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<MainTab | null>(null)
  const [activeSubTab, setActiveSubTab] = useState<string>('products')

  const handleMainTabClick = (tab: MainTab) => {
    if (activeTab === tab) {
      setActiveTab(null)
    } else {
      setActiveTab(tab)
    }
  }

  const handleSubTabClick = (value: string) => {
    setActiveSubTab(value)
    if (onSubTabClick) {
      onSubTabClick(value)
    }
  }

  const mainTabs: MainTab[] = [
    'PHILOSOPHY',
    'CATEGORY',
    'SKIN CONDITION',
    'GET TO KNOW US'
  ]

  const mainTabTranslationKeys: Record<MainTab, string> = {
    'PHILOSOPHY': 'nav.philosophy',
    'CATEGORY': 'nav.category',
    'SKIN CONDITION': 'nav.skinCondition',
    'GET TO KNOW US': 'nav.getToKnowUs'
  }

  const getTabColor = (tab: MainTab): string => {
    switch (tab) {
      case 'PHILOSOPHY':
        return '#00A3AF'
      case 'CATEGORY':
        return '#6B7280'
      case 'SKIN CONDITION':
        return '#8B5CF6'
      case 'GET TO KNOW US':
        return '#F59E0B'
      default:
        return '#6B7280'
    }
  }

  const subTabsConfig: Record<string, SubTabSection[]> = {
    PHILOSOPHY: [
      {
        title: '',
        items: [
          { label: 'PREVENT', value: 'prevent', translationKey: 'nav.prevent' },
          { label: 'PROTECT', value: 'protect', translationKey: 'nav.protect' },
          { label: 'CORRECT', value: 'correct', translationKey: 'nav.correct' },
          { label: 'MTRX-CBD TECHNOLOGY', value: 'mtrx-cbd', translationKey: 'nav.mtrxCbd' }
        ]
      }
    ],
    CATEGORY: [
      {
        title: '',
        items: [
          { label: 'ANTI AGING FACIAL CREAM', value: 'anti-aging-facial-cream', translationKey: 'nav.antiFacialCream' },
          { label: 'ANTI AGING BODY CARE', value: 'anti-aging-body-care', translationKey: 'nav.antiBodyCare' },
          { label: 'ANTI AGING HAIR & SCALP CARE', value: 'anti-aging-hair-scalp-care', translationKey: 'nav.antiHairCare' }
        ]
      }
    ],
    'SKIN CONDITION': [
      {
        title: '',
        items: [
          { label: 'AGING', value: 'aging', translationKey: 'nav.aging' },
          { label: 'IMPERFECTIONS', value: 'imperfections', translationKey: 'nav.imperfections' },
          { label: 'HYPERPIGMENTATION', value: 'hyperpigmentation', translationKey: 'nav.hyperpigmentation' },
          { label: 'DEHYDRATION', value: 'dehydration', translationKey: 'nav.dehydration' },
          { label: 'ROSACEA', value: 'rosacea', translationKey: 'nav.rosacea' },
          { label: 'SENSITIVITY', value: 'sensitivity', translationKey: 'nav.sensitivity' },
          { label: 'ACNE', value: 'acne', translationKey: 'nav.acne' },
          { label: 'DARK CIRCLES', value: 'dark-circles', translationKey: 'nav.darkCircles' },
          { label: 'FINE LINES', value: 'fine-lines', translationKey: 'nav.fineLines' },
          { label: 'LOSS OF FIRMNESS', value: 'loss-of-firmness', translationKey: 'nav.lossOfFirmness' }
        ]
      }
    ],
    'GET TO KNOW US': [
      {
        title: '',
        items: [
          { label: 'OUR PROMISE', value: 'our-promise', translationKey: 'nav.ourPromise' },
          { label: 'FOUNDER VISION', value: 'founder-vision', translationKey: 'nav.founderVision' },
          { label: 'FAQ', value: 'faq', translationKey: 'nav.faq' },
          { label: 'CUSTOMER SERVICE', value: 'customer-service', translationKey: 'nav.customerService' },
          { label: 'PRODUCT SUPPORT', value: 'product-support', translationKey: 'nav.productSupport' }
        ]
      }
    ]
  }

  const currentSubTabs = activeTab ? subTabsConfig[activeTab] || [] : []

  return (
    <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-b border-slate-200 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 py-3">
          {mainTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleMainTabClick(tab)}
              className={cn(
                "relative px-2 sm:px-3 md:px-4 py-2 text-[10px] sm:text-xs md:text-sm font-semibold tracking-wider transition-all duration-300",
                activeTab === tab
                  ? "text-primary"
                  : "text-slate-600 hover:text-slate-900"
              )}
              style={{
                color: activeTab === tab ? getTabColor(tab) : undefined
              }}
            >
              {t(mainTabTranslationKeys[tab])}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-current"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {activeTab && currentSubTabs.length > 0 && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-slate-200"
            >
              <div className={cn(
                "grid gap-6 py-4",
                currentSubTabs.length === 1
                  ? "grid-cols-1"
                  : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              )}>
                {currentSubTabs.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="space-y-2">
                    {section.title && (
                      <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
                        {section.title}
                      </h4>
                    )}
                    <div className="flex flex-wrap gap-2">
                      {section.items.map((item) => (
                        <button
                          key={item.value}
                          onClick={() => handleSubTabClick(item.value)}
                          className={cn(
                            "text-[10px] sm:text-xs px-3 py-1.5 rounded-full border transition-all duration-200",
                            currentSubTabs.length === 1
                              ? "text-center px-4 sm:px-5"
                              : "",
                            activeSubTab === item.value
                              ? "bg-primary text-primary-foreground border-primary font-semibold"
                              : "text-slate-dark hover:text-primary hover:border-primary border-slate-300 bg-white"
                          )}
                        >
                          {t(item.translationKey)}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
