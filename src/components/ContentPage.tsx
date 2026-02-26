import { motion } from 'framer-motion'
import { contentPages } from '@/lib/contentData'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { PreventSection } from './PreventSection'
import { ProtectSection } from './ProtectSection'
import { CorrectSection } from './CorrectSection'
import { VideoTestimonials } from './VideoTestimonials'
import { BodyCareSection } from './BodyCareSection'
import { FacialCreamCategory } from './FacialCreamCategory'
import { HairScalpCareSection } from './HairScalpCareSection'
import { AgingSection } from './AgingSection'
import { ImperfectionsSection } from './ImperfectionsSection'
import { HyperpigmentationSection } from './HyperpigmentationSection'
import { DehydrationSection } from './DehydrationSection'
import { RosaceaSection } from './RosaceaSection'
import { SensitivitySection } from './SensitivitySection'
import { OurPromiseSection } from './OurPromiseSection'
import { OurHeritageSection } from './OurHeritageSection'
import { FounderVisionSection } from './FounderVisionSection'
import { AcneSection } from './AcneSection'
import { DarkCirclesSection } from './DarkCirclesSection'
import { FineLinesSection } from './FineLinesSection'
import { LossOfFirmnessSection } from './LossOfFirmnessSection'
import { useLanguage } from '@/lib/LanguageContext'
import { getSectionTranslation } from '@/lib/sectionTranslations'

interface ContentPageProps {
  pageKey: string
  onProductClick?: (product: typeof import('@/lib/mockData').mockProducts[0]) => void
}

export function ContentPage({ pageKey, onProductClick }: ContentPageProps) {
  const { language } = useLanguage()
  const page = contentPages[pageKey]
  
  const getTranslatedTitle = (key: string) => {
    return getSectionTranslation(language, key, 'title')
  }
  
  const getTranslatedSubtitle = (key: string) => {
    return getSectionTranslation(language, key, 'subtitle')
  }
  
  const getTranslatedDescription = (key: string) => {
    return getSectionTranslation(language, key, 'description')
  }
  
  if (!page) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">{language === 'es' ? 'Contenido aún no disponible. Por favor, vuelva más tarde.' : 'Content not yet available. Please check back soon.'}</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (pageKey === 'prevent') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-dark mb-4">
              {getTranslatedTitle('prevent')}
            </h1>
            <p className="text-xl text-primary font-semibold mb-6">
              {getTranslatedSubtitle('prevent')}
            </p>
            <p className="text-lg text-gray-medium leading-relaxed">
              {getTranslatedDescription('prevent')}
            </p>
          </div>
          
          <PreventSection />
        </div>
      </motion.div>
    )
  }

  if (pageKey === 'aging') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AgingSection onProductClick={onProductClick} />
      </motion.div>
    )
  }

  if (pageKey === 'imperfections') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ImperfectionsSection onProductClick={onProductClick} />
      </motion.div>
    )
  }

  if (pageKey === 'hyperpigmentation') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HyperpigmentationSection onProductClick={onProductClick} />
      </motion.div>
    )
  }

  if (pageKey === 'dehydration') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DehydrationSection onProductClick={onProductClick} />
      </motion.div>
    )
  }

  if (pageKey === 'rosacea') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <RosaceaSection onProductClick={onProductClick} />
      </motion.div>
    )
  }

  if (pageKey === 'sensitivity') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SensitivitySection onProductClick={onProductClick} />
      </motion.div>
    )
  }

  if (pageKey === 'acne') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AcneSection onProductClick={onProductClick} />
      </motion.div>
    )
  }

  if (pageKey === 'dark-circles') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <DarkCirclesSection onProductClick={onProductClick} />
      </motion.div>
    )
  }

  if (pageKey === 'fine-lines') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FineLinesSection onProductClick={onProductClick} />
      </motion.div>
    )
  }

  if (pageKey === 'loss-of-firmness') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LossOfFirmnessSection onProductClick={onProductClick} />
      </motion.div>
    )
  }

  if (pageKey === 'protect') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-dark mb-4">
              {getTranslatedTitle('protect')}
            </h1>
            <p className="text-xl text-primary font-semibold mb-6">
              {getTranslatedSubtitle('protect')}
            </p>
            <p className="text-lg text-gray-medium leading-relaxed">
              {getTranslatedDescription('protect')}
            </p>
          </div>
          
          <ProtectSection />
        </div>
      </motion.div>
    )
  }

  if (pageKey === 'correct') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-slate-dark mb-4">
                {getTranslatedTitle('correct')}
              </h1>
              <p className="text-xl text-primary font-semibold mb-6">
                {getTranslatedSubtitle('correct')}
              </p>
              <p className="text-lg text-gray-medium leading-relaxed">
                {getTranslatedDescription('correct')}
              </p>
            </div>
            
            <CorrectSection />
          </div>
        </div>
        
        <VideoTestimonials />
      </motion.div>
    )
  }

  if (pageKey === 'anti-aging-body-care') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BodyCareSection />
      </motion.div>
    )
  }

  if (pageKey === 'anti-aging-facial-cream') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FacialCreamCategory />
      </motion.div>
    )
  }

  if (pageKey === 'anti-aging-hair-scalp-care') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HairScalpCareSection />
      </motion.div>
    )
  }

  if (pageKey === 'our-promise') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <OurPromiseSection />
      </motion.div>
    )
  }

  if (pageKey === 'our-story' || pageKey === 'our-heritage') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <OurHeritageSection />
      </motion.div>
    )
  }

  if (pageKey === 'founder-vision') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FounderVisionSection />
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-dark mb-4">
            {page.title}
          </h1>
          {page.subtitle && (
            <p className="text-xl text-primary font-semibold mb-6">
              {page.subtitle}
            </p>
          )}
          <p className="text-lg text-gray-medium leading-relaxed">
            {page.description}
          </p>
        </div>

        {page.stats && page.stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {page.stats.map((stat, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-dark font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {page.sections && page.sections.map((section, idx) => (
          <Card key={idx} className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">{section.heading}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.content && (
                <p className="text-gray-medium leading-relaxed">
                  {section.content}
                </p>
              )}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-3 mt-4">
                  {section.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      <span className="text-slate-dark">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}

        {page.products && page.products.length > 0 && (
          <Card className="bg-gradient-to-br from-muted/50 to-background">
            <CardHeader>
              <CardTitle>Featured Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {page.products.map((product, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm py-2 px-4">
                    {product}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </motion.div>
  )
}
