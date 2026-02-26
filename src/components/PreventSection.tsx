import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Shield, Sparkle, TrendDown, Lightning, Drop, Star } from '@phosphor-icons/react'
import { useLanguage } from '@/lib/LanguageContext'
import { getSectionTranslation } from '@/lib/sectionTranslations'

export function PreventSection() {
  const { language } = useLanguage()
  
  const t = (path: string) => getSectionTranslation(language, 'prevent', path)

  const mechanisms = [
    {
      icon: Shield,
      title: t('mechanisms.cbd.title'),
      subtitle: t('mechanisms.cbd.subtitle'),
      description: t('mechanisms.cbd.description'),
      color: 'from-primary/10 to-primary/5'
    },
    {
      icon: Sparkle,
      title: t('mechanisms.peptides.title'),
      subtitle: t('mechanisms.peptides.subtitle'),
      description: t('mechanisms.peptides.description'),
      color: 'from-accent/10 to-accent/5'
    },
    {
      icon: Lightning,
      title: t('mechanisms.antioxidants.title'),
      subtitle: t('mechanisms.antioxidants.subtitle'),
      description: t('mechanisms.antioxidants.description'),
      color: 'from-teal-deep/10 to-teal-light/5'
    }
  ]

  const inflammagingFactors = [
    { label: 'UV Radiation', impact: 35, description: 'Generates ROS and inflammatory cytokines' },
    { label: 'Blue Light', impact: 20, description: 'Penetrates deeper, creates oxidative stress' },
    { label: 'Pollution', impact: 25, description: 'Particulates trigger free radical cascade' },
    { label: 'Cortisol/Stress', impact: 20, description: 'Elevates collagen-degrading enzymes' }
  ]

  const timeline = [
    { age: '18-22+', status: 'Peak Collagen', description: 'Maximum production & density', color: 'bg-teal-deep' },
    { age: '23-27+', status: 'Early Decline', description: '1%+ annual reduction begins', color: 'bg-teal-light' },
    { age: '28-32+', status: 'Prevention Window', description: 'Critical intervention period', color: 'bg-accent' },
    { age: '33-35+', status: 'Visible Changes', description: 'First signs may appear', color: 'bg-primary/60' }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { value: t('stats.collagenValue'), label: t('stats.collagenDecline'), subtitle: 'Starting at age 25' },
          { value: t('stats.ageValue'), label: t('stats.ageRange'), subtitle: 'Peak prevention window' },
          { value: t('stats.inflammagingValue'), label: t('stats.inflammaging'), subtitle: 'Complete control' },
          { value: t('stats.defenseValue'), label: t('stats.defense'), subtitle: 'Continuous protection' }
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:border-primary/40 transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-dark font-medium mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.subtitle}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Core Concept */}
      <Card className="bg-gradient-to-br from-slate-dark/5 via-primary/5 to-accent/5 border-primary/20">
        <CardHeader>
          <CardTitle className="text-3xl text-center">The Prejuvenation Advantage</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-center text-gray-medium leading-relaxed max-w-3xl mx-auto">
            In your 20s and early 30s, the goal is not to erase wrinkles but to <span className="font-semibold text-primary">slow the clock before they form</span>. Daily exposure to UV, pollution, and stress creates low‑grade inflammation—"inflammaging"—that quietly erodes collagen long before the first line appears.
          </p>
          
          {/* Visual Timeline */}
          <div className="mt-8">
            <h4 className="text-center text-sm font-semibold text-slate-dark mb-6 uppercase tracking-wider">The Collagen Timeline</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {timeline.map((stage, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="relative"
                >
                  <div className="text-center">
                    <div className={`${stage.color} text-white font-bold py-3 px-4 rounded-lg mb-2`}>
                      {stage.age}
                    </div>
                    <div className="text-sm font-semibold text-slate-dark mb-1">
                      {stage.status}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stage.description}
                    </div>
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent -translate-x-2" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Inflammaging Factors Infographic */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <TrendDown className="text-primary" size={28} weight="duotone" />
            Understanding Inflammaging
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-medium leading-relaxed">
            Every day, UV radiation, blue light, and cortisol trigger tiny inflammatory cascades in skin cells that accelerate collagen breakdown and oxidative damage. PREVENT focuses on calming those signals early using CBD's anti‑inflammatory and antioxidant actions.
          </p>
          
          <div className="space-y-4 mt-6">
            {inflammagingFactors.map((factor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-dark">{factor.label}</span>
                  <span className="text-sm text-primary font-bold">{factor.impact}%+ Impact</span>
                </div>
                <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${factor.impact}%` }}
                    transition={{ delay: 1 + idx * 0.1, duration: 0.8, ease: 'easeOut' }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
                <p className="text-xs text-muted-foreground">{factor.description}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mechanism Cards */}
      <div>
        <h3 className="text-3xl font-bold text-slate-dark text-center mb-8">The PREVENT Mechanism</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mechanisms.map((mech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + idx * 0.15 }}
            >
              <Card className={`h-full bg-gradient-to-br ${mech.color} border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <mech.icon size={32} className="text-primary" weight="duotone" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1">{mech.title}</CardTitle>
                      <p className="text-xs text-primary font-semibold uppercase tracking-wide">
                        {mech.subtitle}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-dark leading-relaxed">
                    {mech.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Synergy Visualization */}
      <Card className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <CardHeader>
          <CardTitle className="text-2xl text-center">The Synergy Engine</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Central CBD Circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5, type: 'spring' }}
                className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg relative z-10"
              >
                <div className="text-center">
                  <div className="text-white font-bold text-sm">8.0%+</div>
                  <div className="text-white text-xs">MTRX-CBD</div>
                </div>
              </motion.div>

              {/* Orbiting Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {[
                  { label: 'Peptides', angle: 0, icon: Sparkle },
                  { label: 'Vitamin C', angle: 60, icon: Star },
                  { label: 'Ferulic', angle: 120, icon: Shield },
                  { label: 'CoQ10', angle: 180, icon: Lightning },
                  { label: 'Niacinamide', angle: 240, icon: Drop },
                  { label: 'Resveratrol', angle: 300, icon: Star }
                ].map((item, idx) => {
                  const radius = 140
                  const x = Math.cos((item.angle * Math.PI) / 180) * radius
                  const y = Math.sin((item.angle * Math.PI) / 180) * radius
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.7 + idx * 0.1 }}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                      }}
                    >
                      <div className="bg-white border-2 border-primary/20 rounded-full p-3 shadow-md hover:shadow-lg transition-shadow">
                        <item.icon size={20} className="text-primary" weight="duotone" />
                      </div>
                      <div className="text-xs text-center mt-2 font-semibold text-slate-dark whitespace-nowrap">
                        {item.label}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <p className="text-center text-sm text-gray-medium mt-32 leading-relaxed">
              By stabilizing collagen production, improving hydration, and reducing free‑radical stress, PREVENT keeps skin behaving like it's younger for longer instead of trying to "reverse" damage later.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Emotional Benefit */}
      <Card className="bg-gradient-to-br from-slate-dark to-primary text-white">
        <CardContent className="py-12 px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-3xl font-bold">Who PREVENT Is For</h3>
            <p className="text-lg leading-relaxed opacity-90">
              PREVENT is for the <span className="font-bold">18–35+ year‑old</span> who wants to cheat the curve—keeping skin firm, smooth, and calm so "anti‑aging" becomes a choice later, not an emergency.
            </p>
            <p className="text-base leading-relaxed opacity-80">
              This is for the proactive, the informed, and the strategic. For those who view skincare not as vanity, but as a form of biological optimization. For those who understand that prevention is not just smart—it's essential.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Products */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Key Prevention Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'The Guardian', detail: 'MTRX-CBD + Ferulic Acid', purpose: 'Environmental shield against UV & pollution' },
              { name: 'The Great Harmonizer', detail: '8.0% MTRX-CBD + Niacinamide', purpose: 'Calms inflammaging & regulates balance' },
              { name: 'The Preserver', detail: 'MTRX-CBD + Resveratrol', purpose: 'Activates longevity pathways' },
              { name: 'The Architect', detail: 'MTRX-CBD + Polypeptides', purpose: 'Banks collagen through synthesis' },
              { name: 'The Illuminator', detail: 'MTRX-CBD + Vitamin C', purpose: 'Prevents pigmentation & brightens' }
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2 + idx * 0.1 }}
                className="p-4 border border-primary/20 rounded-lg hover:border-primary/40 transition-all hover:shadow-md bg-gradient-to-br from-background to-muted/30"
              >
                <h4 className="font-bold text-slate-dark mb-1">{product.name}</h4>
                <p className="text-sm text-primary font-semibold mb-2">{product.detail}</p>
                <p className="text-xs text-muted-foreground">{product.purpose}</p>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
