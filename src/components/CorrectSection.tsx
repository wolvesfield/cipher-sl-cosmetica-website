import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Lightning, Drop, FirstAidKit, Fire, TrendUp, Sparkle, Flask } from '@phosphor-icons/react'

export function CorrectSection() {
  const mechanisms = [
    {
      icon: Flask,
      title: 'Collagen-Signaling Peptides',
      subtitle: 'The Architects',
      description: 'Demonstrated increases in dermal matrix components and wrinkle depth reduction when used consistently, offering a non‑invasive path to firmer skin. Peptide sequences like Palmitoyl Tripeptide-1 and Palmitoyl Tetrapeptide-7 (Matrixyl 3000) act as messengers that prompt fibroblasts to produce more collagen and elastin.',
      color: 'from-primary/10 to-primary/5'
    },
    {
      icon: Lightning,
      title: 'Encapsulated Retinoids',
      subtitle: 'The Gradual Transformer',
      description: 'Deliver vitamin A gradually to receptors, improving texture and fine lines with a lower risk of irritation compared to traditional formulations. The micro-encapsulation technology releases retinol slowly over time, maintaining efficacy while dramatically reducing the "retinol burn" that causes many to quit treatment.',
      color: 'from-accent/10 to-accent/5'
    },
    {
      icon: FirstAidKit,
      title: 'CBD & Soothing Excipients',
      subtitle: 'The Inflammation Modulators',
      description: 'Help counter the inflammatory side of actives, with emerging clinical and preclinical data in acne, dermatitis, and inflammatory dermatoses. CBD reduces pro-inflammatory cytokines while supporting the endocannabinoid system, creating an environment where correction can happen without collateral damage.',
      color: 'from-teal-deep/10 to-teal-light/5'
    }
  ]

  const aggressiveCorrectionRisks = [
    { label: 'High-Strength Acids', impact: 40, description: 'Rapid results but severe peeling & barrier damage', risk: 'High' },
    { label: 'Prescription Retinoids', impact: 35, description: 'Effective but intense irritation & photosensitivity', risk: 'High' },
    { label: 'Aggressive Peels', impact: 25, description: 'Downtime & pigmentation risk in darker phototypes', risk: 'Very High' }
  ]

  const correctVsAggressive = [
    {
      aspect: 'Approach',
      aggressive: 'Burn-and-peel tactics',
      correct: 'Bio-signaling & gradual renewal',
      advantage: 'No downtime or barrier damage'
    },
    {
      aspect: 'Inflammation',
      aggressive: 'High inflammatory burden',
      correct: 'CBD-modulated, anti-inflammatory',
      advantage: 'Comfortable, sustainable correction'
    },
    {
      aspect: 'Phototype Safety',
      aggressive: 'Risk of PIH in darker skin',
      correct: 'Safe for all Fitzpatrick types',
      advantage: 'Inclusive efficacy for LATAM diversity'
    },
    {
      aspect: 'Barrier Impact',
      aggressive: 'Strips and weakens',
      correct: 'Preserves and strengthens',
      advantage: 'Can layer with other actives'
    },
    {
      aspect: 'Speed',
      aggressive: 'Fast but traumatic',
      correct: 'Steady, compounding gains',
      advantage: 'Results that last without rebound'
    }
  ]

  const correctTimeline = [
    { week: '2-4', change: 'Texture Smoothing', description: 'Surface refinement, reduced roughness', visible: '15%' },
    { week: '4-8', change: 'Tone Evening', description: 'Pigmentation fading, brightness increase', visible: '40%' },
    { week: '8-12', change: 'Fine Line Softening', description: 'Wrinkle depth reduction, firmness', visible: '65%' },
    { week: '12+', change: 'Structural Firming', description: 'Collagen remodeling, elasticity', visible: '85%' }
  ]

  const peptideTypes = [
    {
      type: 'Signal Peptides',
      example: 'Matrixyl 3000',
      mechanism: 'Mimic wound-healing messengers to trigger collagen production',
      benefit: 'Increase Type I & III collagen, reduce wrinkle depth'
    },
    {
      type: 'Carrier Peptides',
      example: 'Copper Peptides',
      mechanism: 'Deliver trace elements (Cu) essential for enzyme cofactors',
      benefit: 'Support lysyl oxidase for collagen cross-linking'
    },
    {
      type: 'Neurotransmitter-Inhibiting',
      example: 'Argireline',
      mechanism: 'Gently reduce muscle contraction (topical "relaxer")',
      benefit: 'Soften expression lines without injections'
    }
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
          { value: '32%', label: 'Wrinkle Depth Reduction', subtitle: 'Peptide studies, 12 weeks' },
          { value: '0.3%', label: 'Encapsulated Retinol', subtitle: 'Efficacy without irritation' },
          { value: '87%', label: 'No Peeling Reported', subtitle: 'Comfortable correction' },
          { value: '4 wks', label: 'Visible Results Start', subtitle: 'Progressive improvement' }
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
          <CardTitle className="text-3xl text-center">Repair Without the Burn</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg text-center text-gray-medium leading-relaxed max-w-3xl mx-auto">
            Corrective care should <span className="font-semibold text-primary">rebuild structure, not punish your skin</span>. CORRECT uses peptides, gentle retinoids, and CBD to improve fine lines, texture, and tone with minimal irritation instead of aggressive "burn‑and‑peel" tactics.
          </p>
          
          {/* The Problem with Traditional Correction */}
          <div className="mt-8 p-6 bg-gradient-to-br from-destructive/5 to-destructive/10 border-l-4 border-destructive rounded-lg">
            <h4 className="font-bold text-destructive mb-3 flex items-center gap-2">
              <Fire size={24} weight="duotone" />
              The Traditional Correction Problem
            </h4>
            <p className="text-slate-dark leading-relaxed mb-4">
              Traditional correction leans on <span className="font-semibold">high‑strength acids or prescription retinoids</span> that deliver results but often cause peeling, burning, and barrier damage, especially in sensitive or darker phototypes common in Latin America.
            </p>
            <p className="text-slate-dark leading-relaxed">
              This "no pain, no gain" approach forces users to choose between <span className="italic">efficacy</span> and <span className="italic">comfort</span>—a false dichotomy that leads many to abandon corrective treatments entirely.
            </p>
          </div>

          {/* The CORRECT Philosophy */}
          <div className="mt-6 p-6 bg-gradient-to-br from-teal-light/10 to-teal-deep/5 border-l-4 border-teal-deep rounded-lg">
            <h4 className="font-bold text-teal-deep mb-3 flex items-center gap-2">
              <Sparkle size={24} weight="duotone" />
              The CORRECT Philosophy: Bio-Signaling
            </h4>
            <p className="text-slate-dark leading-relaxed mb-4">
              CORRECT focuses on <span className="font-semibold text-primary">bio‑signaling</span>: peptides that prompt collagen and elastin production, low‑and‑slow retinoid delivery, and CBD to modulate inflammation so the skin's architecture is renewed from within while comfort is preserved.
            </p>
            <p className="text-slate-dark leading-relaxed">
              Used after PREVENT and PROTECT are in place, CORRECT becomes the <span className="font-semibold">refinement phase</span>—softening lines, evening tone, and improving firmness without derailing barrier health.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Aggressive vs CORRECT Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <TrendUp className="text-primary" size={28} weight="duotone" />
            Traditional Correction vs. CORRECT Protocol
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-3 px-4 font-semibold text-slate-dark">Aspect</th>
                  <th className="text-left py-3 px-4 font-semibold text-destructive">Aggressive Correction</th>
                  <th className="text-left py-3 px-4 font-semibold text-teal-deep">CORRECT Approach</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">CORRECT Advantage</th>
                </tr>
              </thead>
              <tbody>
                {correctVsAggressive.map((row, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="border-b border-primary/10 hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-4 px-4 font-semibold text-slate-dark">{row.aspect}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.aggressive}</td>
                    <td className="py-4 px-4 text-teal-deep font-medium">{row.correct}</td>
                    <td className="py-4 px-4 text-sm text-primary">{row.advantage}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Risk Visualization */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold text-slate-dark mb-4 uppercase tracking-wider">Risks of Aggressive Correction</h4>
            <div className="space-y-4">
              {aggressiveCorrectionRisks.map((factor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + idx * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-dark">{factor.label}</span>
                    <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                      factor.risk === 'Very High' ? 'bg-destructive/20 text-destructive' : 'bg-destructive/10 text-destructive'
                    }`}>
                      {factor.risk} Risk
                    </span>
                  </div>
                  <div className="relative h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${factor.impact}%` }}
                      transition={{ delay: 1.2 + idx * 0.1, duration: 0.8, ease: 'easeOut' }}
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-destructive to-destructive/60 rounded-full"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{factor.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Results Timeline */}
      <Card className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <CardHeader>
          <CardTitle className="text-2xl text-center">The CORRECT Results Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-medium mb-8 leading-relaxed max-w-2xl mx-auto">
            Unlike aggressive treatments that create rapid trauma followed by downtime, CORRECT delivers <span className="font-semibold text-primary">progressive, compounding improvements</span> that build on each other without setbacks.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {correctTimeline.map((stage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + idx * 0.15 }}
                className="relative"
              >
                <Card className="h-full bg-gradient-to-br from-white to-muted/30 border-primary/20 hover:border-primary/40 transition-all">
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-primary mb-1">{stage.week}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider">Weeks</div>
                    </div>
                    <div className="text-center mb-3">
                      <div className="font-bold text-slate-dark mb-1">{stage.change}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">{stage.description}</div>
                    </div>
                    <div className="mt-4">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-muted-foreground">Visible</span>
                        <span className="text-xs font-bold text-primary">{stage.visible}</span>
                      </div>
                      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: stage.visible }}
                          transition={{ delay: 1.6 + idx * 0.15, duration: 1, ease: 'easeOut' }}
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {idx < correctTimeline.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/40 to-transparent -translate-x-2 -translate-y-1/2 z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Mechanism Cards */}
      <div>
        <h3 className="text-3xl font-bold text-slate-dark text-center mb-8">The CORRECT Mechanism</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mechanisms.map((mech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8 + idx * 0.15 }}
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

      {/* Peptide Science Deep Dive */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Flask className="text-primary" size={28} weight="duotone" />
            Understanding Peptide Technology
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-medium mb-6 leading-relaxed">
            Peptides are short chains of amino acids that act as <span className="font-semibold text-primary">biological messengers</span>. Different peptide structures perform different functions in the skin, from signaling collagen production to delivering essential minerals.
          </p>

          <div className="space-y-4">
            {peptideTypes.map((peptide, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + idx * 0.1 }}
                className="p-5 border border-primary/20 rounded-lg hover:border-primary/40 transition-all hover:shadow-md bg-gradient-to-br from-background to-muted/30"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-slate-dark">{peptide.type}</h4>
                      <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded">
                        {peptide.example}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                      <span className="font-semibold text-slate-dark">Mechanism:</span> {peptide.mechanism}
                    </p>
                    <p className="text-sm text-teal-deep font-medium">
                      <span className="font-semibold">Benefit:</span> {peptide.benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 p-5 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg">
            <h4 className="font-bold text-slate-dark mb-2 flex items-center gap-2">
              <Sparkle size={20} className="text-primary" weight="duotone" />
              Clinical Evidence
            </h4>
            <p className="text-sm text-slate-dark leading-relaxed">
              Studies on palmitoyl peptides (Matrixyl 3000) show <span className="font-semibold text-primary">statistically significant increases</span> in collagen I, collagen III, and fibronectin production after 2 months of twice-daily use. Wrinkle depth reductions of 23-32% have been documented in placebo-controlled trials, with results comparable to low-dose retinoids but without irritation.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Encapsulated Retinoid Technology */}
      <Card className="bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Lightning className="text-primary" size={28} weight="duotone" />
            Encapsulated Retinoid Technology
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-slate-dark mb-3 flex items-center gap-2">
                <span className="text-destructive text-2xl">⚠️</span>
                Traditional Retinol
              </h4>
              <ul className="space-y-3 text-sm text-slate-dark">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  <span><span className="font-semibold">Immediate Release:</span> Full concentration hits skin at once, overwhelming cellular receptors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  <span><span className="font-semibold">High Irritation:</span> "Retinization" period with redness, peeling, sensitivity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  <span><span className="font-semibold">Photosensitivity:</span> Increased sun damage risk, must use only at night</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  <span><span className="font-semibold">Barrier Damage:</span> Strips protective lipids, weakens defense</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-0.5">•</span>
                  <span><span className="font-semibold">High Abandonment:</span> 40-60% quit due to discomfort</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-teal-deep mb-3 flex items-center gap-2">
                <span className="text-teal-deep text-2xl">✓</span>
                Encapsulated Retinol
              </h4>
              <ul className="space-y-3 text-sm text-slate-dark">
                <li className="flex items-start gap-2">
                  <span className="text-teal-deep mt-0.5">•</span>
                  <span><span className="font-semibold">Time-Release:</span> Micro-spheres release gradually over 6-8 hours, gentle on receptors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-deep mt-0.5">•</span>
                  <span><span className="font-semibold">Minimal Irritation:</span> Same efficacy with 70% less redness and peeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-deep mt-0.5">•</span>
                  <span><span className="font-semibold">Reduced Photosensitivity:</span> Stable formulation, safer for daytime use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-deep mt-0.5">•</span>
                  <span><span className="font-semibold">Barrier Preservation:</span> CBD buffer + slow release protects lipid matrix</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-deep mt-0.5">•</span>
                  <span><span className="font-semibold">High Compliance:</span> 85%+ continue treatment due to comfort</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-5 bg-white border-2 border-primary/20 rounded-lg">
            <h4 className="font-bold text-primary mb-2">The CORRECT Advantage</h4>
            <p className="text-sm text-slate-dark leading-relaxed">
              By combining <span className="font-semibold">encapsulated retinoids + CBD</span>, CORRECT creates a "double buffer" system. The encapsulation controls release rate, while CBD simultaneously modulates the inflammatory response. This allows use of clinically effective retinol concentrations (0.3-0.5%) without the traditional trauma, making correction accessible to sensitive skin and darker phototypes that often cannot tolerate aggressive retinoids.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* CBD's Role in Correction */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <FirstAidKit className="text-primary" size={28} weight="duotone" />
            CBD's Critical Role in Gentle Correction
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-medium mb-6 leading-relaxed">
            CBD doesn't just "soothe" irritation—it actively <span className="font-semibold text-primary">modulates the inflammatory pathways</span> that aggressive correction triggers, creating an environment where cellular renewal can proceed without collateral damage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-bold text-slate-dark">Anti-Inflammatory Mechanisms</h4>
              <ul className="space-y-2 text-sm text-slate-dark">
                <li className="flex items-start gap-2">
                  <Drop size={16} className="text-primary mt-1" weight="fill" />
                  <span><span className="font-semibold">Cytokine Modulation:</span> Reduces IL-6, IL-8, TNF-α (key inflammatory messengers)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Drop size={16} className="text-primary mt-1" weight="fill" />
                  <span><span className="font-semibold">COX-2 Inhibition:</span> Blocks pro-inflammatory enzyme pathway</span>
                </li>
                <li className="flex items-start gap-2">
                  <Drop size={16} className="text-primary mt-1" weight="fill" />
                  <span><span className="font-semibold">NF-κB Suppression:</span> Prevents activation of inflammatory gene expression</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-slate-dark">Clinical Applications</h4>
              <ul className="space-y-2 text-sm text-slate-dark">
                <li className="flex items-start gap-2">
                  <Sparkle size={16} className="text-primary mt-1" weight="fill" />
                  <span><span className="font-semibold">Acne:</span> Reduces sebum + inflammation without dryness</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkle size={16} className="text-primary mt-1" weight="fill" />
                  <span><span className="font-semibold">Dermatitis:</span> Soothes eczema and contact irritation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkle size={16} className="text-primary mt-1" weight="fill" />
                  <span><span className="font-semibold">Post-Procedure:</span> Accelerates recovery from chemical peels or laser</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-5 bg-gradient-to-br from-teal-light/10 to-teal-deep/5 border-l-4 border-teal-deep rounded-lg">
            <h4 className="font-bold text-teal-deep mb-2">Emerging Research</h4>
            <p className="text-sm text-slate-dark leading-relaxed">
              Preclinical studies show CBD's interaction with CB1 and CB2 receptors in skin may influence keratinocyte proliferation and sebocyte function. Clinical trials in acne vulgaris demonstrated significant improvements in lesion count and sebum production with topical CBD application. The anti-inflammatory profile makes it an ideal partner for correction protocols that would otherwise trigger reactive inflammation.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Phototype Inclusivity */}
      <Card className="bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Safe for All Latin American Phototypes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-medium mb-8 leading-relaxed max-w-3xl mx-auto">
            One of the greatest barriers to correction in Latin America is <span className="font-semibold text-primary">post-inflammatory hyperpigmentation (PIH)</span> risk. Darker skin (Fitzpatrick III-V) is prone to "rebound" pigmentation from aggressive treatments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6 }}
              className="p-6 bg-white border-2 border-primary/20 rounded-lg text-center"
            >
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="font-bold text-slate-dark mb-2">Fitzpatrick I-II</h4>
              <p className="text-sm text-muted-foreground">Fair to light skin. CORRECT prevents redness and sensitivity.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7 }}
              className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-primary/30 rounded-lg text-center"
            >
              <div className="text-4xl mb-3">✨</div>
              <h4 className="font-bold text-primary mb-2">Fitzpatrick III-IV</h4>
              <p className="text-sm text-slate-dark font-medium">Medium to olive skin (LATAM majority). CORRECT corrects without PIH risk.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8 }}
              className="p-6 bg-white border-2 border-primary/20 rounded-lg text-center"
            >
              <div className="text-4xl mb-3">💎</div>
              <h4 className="font-bold text-slate-dark mb-2">Fitzpatrick V-VI</h4>
              <p className="text-sm text-muted-foreground">Deep skin. CORRECT provides safe correction historically denied by harsh methods.</p>
            </motion.div>
          </div>

          <div className="mt-8 p-6 bg-gradient-to-br from-teal-deep/10 to-teal-light/5 border-l-4 border-teal-deep rounded-lg">
            <h4 className="font-bold text-teal-deep mb-2">Inclusive Efficacy</h4>
            <p className="text-sm text-slate-dark leading-relaxed">
              The combination of gentle bio-signaling (peptides), controlled release (encapsulated retinoids), and anti-inflammatory modulation (CBD) creates a correction protocol that works <span className="font-semibold">equally well across all skin tones</span>. This is critical for LATAM, where phototype diversity demands inclusive formulation strategies that don't force darker skin to choose between efficacy and safety.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Emotional Benefit */}
      <Card className="bg-gradient-to-br from-slate-dark to-primary text-white">
        <CardContent className="py-12 px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-3xl font-bold">Who CORRECT Is For</h3>
            <p className="text-lg leading-relaxed opacity-90">
              CORRECT is for when you want <span className="font-bold">clinical‑level change</span>—firmer, smoother, more even skin—but refuse to accept rawness, burning, or weeks of downtime as the price.
            </p>
            <p className="text-base leading-relaxed opacity-80">
              This is for the <span className="font-semibold">pragmatic perfectionist</span>. For those who demand visible results but won't sacrifice barrier health or social confidence. For those who view correction not as punishment, but as precise, intelligent intervention—biology upgraded, not traumatized.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Key Products */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Key Correction Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'The Time Bender', detail: 'MTRX-CBD + Encapsulated Retinol', purpose: 'Accelerated renewal without retinol burn' },
              { name: 'The Architect', detail: 'MTRX-CBD + Polypeptides (Matrixyl 3000)', purpose: 'Collagen signaling & structural firming' },
              { name: 'The Illuminator', detail: 'MTRX-CBD + Vitamin C (MAP)', purpose: 'Tone evening & pigmentation fade' },
              { name: 'The Naturalist', detail: 'MTRX-CBD + Bakuchiol', purpose: 'Gentle, pregnancy-safe correction' },
              { name: 'The Mason', detail: 'MTRX-CBD + Ceramides', purpose: 'Barrier repair for post-correction recovery' }
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.9 + idx * 0.1 }}
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

      {/* The Sequential Protocol */}
      <Card className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5">
        <CardHeader>
          <CardTitle className="text-2xl text-center">The Sequential Protocol: PREVENT → PROTECT → CORRECT</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-medium mb-8 leading-relaxed max-w-3xl mx-auto">
            CORRECT is designed to be the <span className="font-semibold text-primary">final phase</span> of a complete skincare system. It delivers maximum results because it builds on the foundation established by PREVENT and PROTECT.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg border-2 border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">1</div>
              <h4 className="font-bold text-slate-dark mb-2">PREVENT</h4>
              <p className="text-sm text-muted-foreground mb-3">Stop inflammaging & bank collagen</p>
              <p className="text-xs text-slate-dark leading-relaxed">Establishes an anti-inflammatory baseline and prevents new damage</p>
            </div>

            <div className="p-6 bg-white rounded-lg border-2 border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <h4 className="font-bold text-slate-dark mb-2">PROTECT</h4>
              <p className="text-sm text-muted-foreground mb-3">Rebuild & fortify barrier</p>
              <p className="text-xs text-slate-dark leading-relaxed">Creates the resilient structure needed to tolerate correction actives</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border-2 border-primary/40 shadow-lg">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <h4 className="font-bold text-primary mb-2">CORRECT</h4>
              <p className="text-sm text-slate-dark font-semibold mb-3">Refine, firm & perfect</p>
              <p className="text-xs text-slate-dark leading-relaxed">Delivers visible correction without compromising the foundation</p>
            </div>
          </div>

          <p className="text-sm text-center text-muted-foreground italic mt-8">
            Without PREVENT and PROTECT, correction becomes traumatic. With them, it becomes transformative.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
