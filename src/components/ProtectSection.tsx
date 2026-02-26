import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ShieldCheck, Drop, FirstAid, Lightning, Sparkle, Pulse } from '@phosphor-icons/react'
import { useLanguage } from '@/lib/LanguageContext'
import { getSectionTranslation } from '@/lib/sectionTranslations'

export function ProtectSection() {
  const { language } = useLanguage()
  
  const t = (path: string) => getSectionTranslation(language, 'protect', path)

  const mechanisms = [
    {
      icon: FirstAid,
      title: t('mechanisms.ceramides.title'),
      subtitle: t('mechanisms.ceramides.subtitle'),
      description: t('mechanisms.ceramides.description'),
      color: 'from-primary/10 to-primary/5'
    },
    {
      icon: Pulse,
      title: t('mechanisms.niacinamide.title'),
      subtitle: t('mechanisms.niacinamide.subtitle'),
      description: t('mechanisms.niacinamide.description'),
      color: 'from-accent/10 to-accent/5'
    },
    {
      icon: Drop,
      title: t('mechanisms.hyaluronicAcid.title'),
      subtitle: t('mechanisms.hyaluronicAcid.subtitle'),
      description: t('mechanisms.hyaluronicAcid.description'),
      color: 'from-teal-deep/10 to-teal-light/5'
    },
    {
      icon: ShieldCheck,
      title: t('mechanisms.cbd.title'),
      subtitle: t('mechanisms.cbd.subtitle'),
      description: t('mechanisms.cbd.description'),
      color: 'from-primary/10 to-accent/5'
    }
  ]

  const barrierStressors = [
    { label: 'High UV Exposure', impact: 30, description: 'Degrades lipid barrier, increases TEWL' },
    { label: 'Coastal Humidity', impact: 25, description: 'Disrupts barrier lipid organization' },
    { label: 'Andean Altitude', impact: 20, description: 'Low oxygen, severe dehydration stress' },
    { label: 'Active Treatments', impact: 25, description: 'Retinoids & acids compromise barrier' }
  ]

  const barrierLayers = [
    { 
      layer: 'Lipid Matrix', 
      components: 'Ceramides, Cholesterol, Free Fatty Acids', 
      role: 'Waterproofing seal',
      status: 'Protected by MTRX formulation'
    },
    { 
      layer: 'Corneocytes', 
      components: 'Keratin, Natural Moisturizing Factor', 
      role: 'Structural bricks',
      status: 'Strengthened by Niacinamide'
    },
    { 
      layer: 'Tight Junctions', 
      components: 'Claudins, Occludins', 
      role: 'Cellular seal',
      status: 'Stabilized by CBD'
    }
  ]

  const climateComparison = [
    { city: 'Bogotá', altitude: '2,640m', humidity: '65%', challenge: 'Extreme altitude dryness', solution: 'Multi-weight HA + Ceramides' },
    { city: 'Cartagena', altitude: 'Sea level', humidity: '85%', challenge: 'High heat + humidity', solution: 'Barrier lipids + CBD control' },
    { city: 'Medellín', altitude: '1,495m', humidity: '70%', challenge: 'Moderate stress + pollution', solution: 'Complete barrier support' }
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
          { value: t('stats.tewlValue'), label: t('stats.tewl'), subtitle: 'Measured improvement' },
          { value: t('stats.ceramideValue'), label: t('stats.ceramideRatio'), subtitle: 'Biomimetic structure' },
          { value: t('stats.hydrationValue'), label: t('stats.hydration'), subtitle: 'Sustained moisture' },
          { value: t('stats.barrierValue'), label: t('stats.barrier'), subtitle: 'Complete protection' }
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
          <CardTitle className="text-3xl text-center">Barrier First, Beauty Second</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-center text-gray-medium leading-relaxed max-w-3xl mx-auto">
            Your skin barrier is a <span className="font-semibold text-primary">living shield</span> of ceramides, cholesterol, and lipids that keeps water in and irritants out. When that shield cracks—through climate, actives, or stress—everything from redness to breakouts becomes more likely.
          </p>
          
          {/* Barrier Structure Visualization */}
          <div className="mt-8">
            <h4 className="text-center text-sm font-semibold text-slate-dark mb-6 uppercase tracking-wider">The Barrier Architecture</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {barrierLayers.map((layer, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="relative p-5 border-2 border-primary/20 rounded-lg bg-gradient-to-br from-white to-muted/30"
                >
                  <div className="text-center">
                    <div className="font-bold text-slate-dark mb-2 text-lg">
                      {layer.layer}
                    </div>
                    <div className="text-xs text-muted-foreground mb-3 italic">
                      {layer.components}
                    </div>
                    <div className="text-sm text-primary font-semibold mb-2">
                      {layer.role}
                    </div>
                    <div className="text-xs text-teal-deep bg-teal-light/20 px-2 py-1 rounded">
                      {layer.status}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Latin American Climate Challenge */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Lightning className="text-primary" size={28} weight="duotone" />
            The Latin American Climate Challenge
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-medium leading-relaxed">
            Latin American climates add extra stress: <span className="font-semibold text-slate-dark">high UV, humidity in coastal cities, and drying altitude</span> in regions like the Andes all disrupt the barrier differently. PROTECT is engineered to handle these extreme conditions.
          </p>
          
          {/* Climate Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-3 px-4 font-semibold text-slate-dark">City</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-dark">Altitude</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-dark">Humidity</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-dark">Challenge</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-dark">PROTECT Solution</th>
                </tr>
              </thead>
              <tbody>
                {climateComparison.map((location, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + idx * 0.1 }}
                    className="border-b border-primary/10 hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-3 px-4 font-semibold text-slate-dark">{location.city}</td>
                    <td className="py-3 px-4 text-muted-foreground">{location.altitude}</td>
                    <td className="py-3 px-4 text-muted-foreground">{location.humidity}</td>
                    <td className="py-3 px-4 text-sm">{location.challenge}</td>
                    <td className="py-3 px-4 text-sm text-primary font-medium">{location.solution}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Barrier Stressors Chart */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-slate-dark mb-4 uppercase tracking-wider">Barrier Disruption Factors</h4>
            <div className="space-y-4">
              {barrierStressors.map((factor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + idx * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-dark">{factor.label}</span>
                    <span className="text-sm text-primary font-bold">{factor.impact}% Impact</span>
                  </div>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${factor.impact}%` }}
                      transition={{ delay: 1.4 + idx * 0.1, duration: 0.8, ease: 'easeOut' }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{factor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mechanism Cards */}
      <div>
        <h3 className="text-3xl font-bold text-slate-dark text-center mb-8">The PROTECT Mechanism</h3>
        <p className="text-center text-gray-medium mb-8 max-w-3xl mx-auto leading-relaxed">
          PROTECT focuses on rebuilding barrier architecture with <span className="font-semibold text-primary">bio‑identical ceramides, niacinamide, and multi‑weight hyaluronic acid</span> that restore barrier lipids, reduce transepidermal water loss, and keep the microbiome stable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mechanisms.map((mech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + idx * 0.15 }}
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

      {/* The Retinoid Tolerance Advantage */}
      <Card className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <CardHeader>
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-3">
            <Sparkle className="text-primary" size={28} weight="duotone" />
            The Active Tolerance Advantage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-center text-gray-medium leading-relaxed">
              A strong barrier makes skin <span className="font-semibold text-primary">less reactive to actives</span> like retinoids and acids and improves tolerance of acne or pigment treatments—crucial for prejuvenation routines started young.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="p-5 border border-destructive/30 rounded-lg bg-destructive/5">
                <h4 className="font-bold text-destructive mb-2 flex items-center gap-2">
                  <span className="text-2xl">⚠️</span>
                  Compromised Barrier
                </h4>
                <ul className="space-y-2 text-sm text-slate-dark">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Retinol causes severe redness and peeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Acids trigger stinging and sensitivity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Products feel "too strong" or irritating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-0.5">•</span>
                    <span>Must discontinue effective treatments</span>
                  </li>
                </ul>
              </div>

              <div className="p-5 border border-teal-deep/30 rounded-lg bg-teal-light/10">
                <h4 className="font-bold text-teal-deep mb-2 flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  Protected Barrier
                </h4>
                <ul className="space-y-2 text-sm text-slate-dark">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-deep mt-0.5">•</span>
                    <span>Retinol works without irritation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-deep mt-0.5">•</span>
                    <span>Acids penetrate effectively but gently</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-deep mt-0.5">•</span>
                    <span>Products feel comfortable on skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-deep mt-0.5">•</span>
                    <span>Can layer multiple actives safely</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-center text-muted-foreground italic mt-6">
              PROTECT creates the foundation that allows you to use clinical-grade actives at their full potential without compromising skin comfort or health.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* TEWL Measurement Infographic */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Understanding TEWL (Transepidermal Water Loss)</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-medium mb-6 leading-relaxed">
            TEWL is the gold standard measurement of barrier function. It quantifies how much water evaporates from the skin surface. Lower TEWL = stronger barrier = healthier, more resilient skin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 }}
              className="text-center p-6 bg-gradient-to-br from-destructive/10 to-destructive/5 rounded-lg border-2 border-destructive/20"
            >
              <div className="text-4xl font-bold text-destructive mb-2">&gt; 25</div>
              <div className="text-sm font-semibold text-slate-dark mb-2">Compromised Barrier</div>
              <div className="text-xs text-muted-foreground">Excessive water loss, high irritation risk</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.1 }}
              className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border-2 border-primary/20"
            >
              <div className="text-4xl font-bold text-primary mb-2">15-25</div>
              <div className="text-sm font-semibold text-slate-dark mb-2">Normal Barrier</div>
              <div className="text-xs text-muted-foreground">Adequate function, room for improvement</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.2 }}
              className="text-center p-6 bg-gradient-to-br from-teal-light/20 to-teal-deep/10 rounded-lg border-2 border-teal-deep/30"
            >
              <div className="text-4xl font-bold text-teal-deep mb-2">&lt; 15</div>
              <div className="text-sm font-semibold text-slate-dark mb-2">Optimal Barrier</div>
              <div className="text-xs text-muted-foreground">PROTECT target: minimal water loss</div>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Emotional Benefit */}
      <Card className="bg-gradient-to-br from-slate-dark to-primary text-white">
        <CardContent className="py-12 px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-3xl font-bold">The Daily Shield</h3>
            <p className="text-lg leading-relaxed opacity-90">
              PROTECT is the <span className="font-bold">daily shield</span> that lets your skin handle city pollution, sun, air‑conditioning, and actives—so you can live your life without feeling fragile or over‑treated.
            </p>
            <p className="text-base leading-relaxed opacity-80">
              This is not maintenance. This is <span className="font-semibold">active defense</span>. For skin that can withstand the demands of modern life while staying calm, comfortable, and radiant. For those who refuse to choose between efficacy and comfort.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Products */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Key Protection Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'The Mason', detail: 'MTRX-CBD + Ceramides (3:1:1)', purpose: 'Rebuilds lipid barrier structure' },
              { name: 'The Great Harmonizer', detail: '8.0% MTRX-CBD + Niacinamide', purpose: 'Enhances barrier synthesis & calms inflammation' },
              { name: 'The Rainmaker', detail: 'MTRX-CBD + Multi-Weight HA', purpose: 'Multi-layer hydration & moisture retention' },
              { name: 'The Guardian', detail: 'MTRX-CBD + Ferulic Acid', purpose: 'Environmental protection shield' },
              { name: 'The Second Skin', detail: '4.0% MTRX-CBD Body Lotion', purpose: 'Full-body barrier support' }
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4 + idx * 0.1 }}
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
