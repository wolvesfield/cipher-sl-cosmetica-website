import { motion } from 'framer-motion'
import { useApp } from '@/lib/AppContext'
import { Sparkles, Droplet, Shield, Zap, Leaf, Lock, FlaskConical } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

export function FacialCreamCategory() {
  const { language } = useApp()

  const benefits = [
    {
      icon: Shield,
      title: { en: 'DEJ Reinforcement', es: 'Refuerzo DEJ' },
      description: { 
        en: 'Supports collagen and laminin-5 to keep the dermal-epidermal junction "wavy" and compact, delaying laxity and early sagging',
        es: 'Apoya el colágeno y la laminina-5 para mantener la unión dermoepidérmica "ondulada" y compacta, retrasando la flacidez prematura'
      }
    },
    {
      icon: Sparkles,
      title: { en: 'Inflammaging Control', es: 'Control de Inflamación' },
      description: { 
        en: 'Calms inflammaging with CBD, reducing micro-inflammation triggered by pollution, stress, and blue light',
        es: 'Calma la inflamación con CBD, reduciendo la micro-inflamación provocada por contaminación, estrés y luz azul'
      }
    },
    {
      icon: Lock,
      title: { en: 'Barrier Restoration', es: 'Restauración de Barrera' },
      description: { 
        en: 'Restores barrier lipids with ceramides so young, stressed skin can tolerate daily actives without sensitivity',
        es: 'Restaura los lípidos de barrera con ceramidas para que la piel joven y estresada tolere activos diarios sin sensibilidad'
      }
    }
  ]

  const signatureIngredients = [
    {
      icon: FlaskConical,
      name: { en: 'Hexapeptide-10', es: 'Hexapéptido-10' },
      nickname: { en: '"Structural Architect"', es: '"Arquitecto Estructural"' },
      benefit: { 
        en: 'Reinforces adhesion between dermis and epidermis, improving compactness and smoothness with consistent use',
        es: 'Refuerza la adhesión entre dermis y epidermis, mejorando la compacidad y suavidad con uso constante'
      }
    },
    {
      icon: Leaf,
      name: { en: 'CBD Isolate', es: 'CBD Aislado' },
      nickname: { en: '"Skin Adaptogen"', es: '"Adaptógeno Cutáneo"' },
      benefit: { 
        en: 'Acts as an adaptogen for skin homeostasis—balancing sebum, reducing reactivity, linking radiance with stress relief',
        es: 'Actúa como adaptógeno para la homeostasis cutánea—balanceando el sebo, reduciendo la reactividad, vinculando el brillo con el alivio del estrés'
      }
    },
    {
      icon: Droplet,
      name: { en: 'Ceramides + Multi-Weight HA', es: 'Ceramidas + HA Multi-Peso' },
      nickname: { en: '"Long-Term Hydration"', es: '"Hidratación a Largo Plazo"' },
      benefit: { 
        en: 'Provides long-term hydration and resilience rather than short-term plumping alone, using Ceramides NP/AP/EOP',
        es: 'Proporciona hidratación y resistencia a largo plazo en lugar de solo relleno a corto plazo, usando Ceramidas NP/AP/EOP'
      }
    }
  ]

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, oklch(0.45 0.15 260) 1px, transparent 1px),
              linear-gradient(to bottom, oklch(0.45 0.15 260) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              scale: 0 
            }}
            animate={{ 
              x: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%'
              ],
              y: [
                Math.random() * 100 + '%',
                Math.random() * 100 + '%',
                Math.random() * 100 + '%'
              ],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="px-6 py-2 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-full border border-primary/20">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                {language === 'en' ? 'Category' : 'Categoría'}
              </p>
            </div>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-dark via-primary to-slate-dark bg-clip-text text-transparent">
              {language === 'en' ? 'ANTI AGING FACIAL CREAM' : 'CREMA FACIAL ANTI-ENVEJECIMIENTO'}
            </span>
          </h2>

          <motion.p 
            className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-accent mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {language === 'en' ? 'The Foundation of Youth' : 'La Base de la Juventud'}
          </motion.p>

          <div className="max-w-4xl mx-auto">
            <motion.p 
              className="text-lg sm:text-xl text-gray-medium leading-relaxed mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {language === 'en' 
                ? 'This category is the skin-first core of the line, built for 18–35 year‑olds who practice prejuvenation instead of waiting for visible damage. Formulas combine CBD with Hexapeptide‑10, Matrixyl‑type peptides, ceramides, and stabilized antioxidants to reinforce the dermal‑epidermal junction and preserve firmness in high‑UV, high‑stress Latin American environments.'
                : 'Esta categoría es el núcleo centrado en la piel de la línea, construida para personas de 18 a 35 años que practican la prejuvenación en lugar de esperar daños visibles. Las fórmulas combinan CBD con Hexapéptido-10, péptidos tipo Matrixyl, ceramidas y antioxidantes estabilizados para reforzar la unión dermoepidérmica y preservar la firmeza en ambientes latinoamericanos de alto UV y alto estrés.'}
            </motion.p>
          </div>
        </motion.div>

        {/* What It Does Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4">
              {language === 'en' ? 'What It Does' : 'Qué Hace'}
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="h-full group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="mb-6"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500">
                          <Icon className="w-8 h-8 text-primary" strokeWidth={2} />
                        </div>
                      </motion.div>
                      
                      <h4 className="text-xl font-bold text-slate-dark mb-4 text-center">
                        {language === 'en' ? benefit.title.en : benefit.title.es}
                      </h4>
                      
                      <p className="text-gray-medium leading-relaxed text-center">
                        {language === 'en' ? benefit.description.en : benefit.description.es}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Formulation Signature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4">
              {language === 'en' ? 'Formulation Signature' : 'Firma de Formulación'}
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {signatureIngredients.map((ingredient, index) => {
              const Icon = ingredient.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                >
                  <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-accent/50 bg-gradient-to-br from-card via-card to-secondary/5">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 200, duration: 0.8 }}
                          className="flex-shrink-0"
                        >
                          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                            <Icon className="w-10 h-10 text-accent" strokeWidth={2} />
                          </div>
                        </motion.div>

                        <div className="flex-1">
                          <div className="flex flex-wrap items-baseline gap-3 mb-3">
                            <h4 className="text-2xl font-bold text-slate-dark">
                              {language === 'en' ? ingredient.name.en : ingredient.name.es}
                            </h4>
                            <span className="text-lg font-serif italic text-accent">
                              {language === 'en' ? ingredient.nickname.en : ingredient.nickname.es}
                            </span>
                          </div>
                          
                          <p className="text-gray-medium leading-relaxed text-lg">
                            {language === 'en' ? ingredient.benefit.en : ingredient.benefit.es}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Emotional Hook */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Card className="overflow-hidden border-2 border-primary/30 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 shadow-2xl">
            <CardContent className="p-10 sm:p-14 text-center relative">
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-primary/20 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-accent/20 rounded-br-3xl" />

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mb-6"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Zap className="w-10 h-10 text-primary" strokeWidth={2.5} />
                </div>
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-dark mb-6">
                {language === 'en' ? 'For The Skintellectual' : 'Para El Skintelectual'}
              </h3>

              <p className="text-lg sm:text-xl text-gray-medium leading-relaxed max-w-4xl mx-auto">
                {language === 'en'
                  ? 'These are the creams for the Skintellectual who reads INCI lists, expects receipts, and wants their night routine to work like "Baby Botox in a jar" without needles, burnout, or barrier damage.'
                  : 'Estas son las cremas para el Skintelectual que lee listas INCI, espera comprobantes y quiere que su rutina nocturna funcione como "Baby Botox en un frasco" sin agujas, agotamiento o daño de barrera.'}
              </p>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-semibold shadow-lg">
                  <Sparkles className="w-5 h-5" />
                  <span>{language === 'en' ? 'Science-Backed Beauty' : 'Belleza Respaldada por la Ciencia'}</span>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Visual Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: { en: 'Target Age', es: 'Edad Objetivo' }, value: '18-35' },
            { label: { en: 'MTRX-CBD', es: 'MTRX-CBD' }, value: '8.0%' },
            { label: { en: 'Key Peptide', es: 'Péptido Clave' }, value: 'Hex-10' },
            { label: { en: 'Approach', es: 'Enfoque' }, value: { en: 'Prevention', es: 'Prevención' } }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-card to-secondary/10 border border-border shadow-lg"
            >
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {typeof stat.value === 'object' 
                  ? (language === 'en' ? stat.value.en : stat.value.es)
                  : stat.value}
              </p>
              <p className="text-sm text-gray-medium uppercase tracking-wider">
                {language === 'en' ? stat.label.en : stat.label.es}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
