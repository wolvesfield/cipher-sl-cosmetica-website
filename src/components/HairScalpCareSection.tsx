import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkle, Drop, ShieldCheck, Brain, Leaf, Flask, TrendUp, Heart, Atom } from '@phosphor-icons/react'
import { useApp } from '@/lib/AppContext'
import { Button } from './ui/button'
import { HairScalpConstellationMap } from './HairScalpConstellationMap'

export function HairScalpCareSection() {
  const { language } = useApp()
  const [showConstellation, setShowConstellation] = useState(false)

  const benefits = [
    {
      icon: ShieldCheck,
      title: { 
        en: 'Calms Scalp Inflammation', 
        es: 'Calma la Inflamación del Cuero Cabelludo' 
      },
      description: { 
        en: 'Reduces micro-irritation from styling, pollution, and stress with CBD, creating a healthier environment for long-term hair retention', 
        es: 'Reduce la micro-irritación del peinado, la contaminación y el estrés con CBD, creando un ambiente más saludable para la retención del cabello a largo plazo' 
      },
      gradient: 'from-[oklch(0.55_0.20_280)] to-[oklch(0.60_0.10_200)]'
    },
    {
      icon: TrendUp,
      title: { 
        en: 'Supports Follicle Anchoring', 
        es: 'Soporta el Anclaje del Folículo' 
      },
      description: { 
        en: 'Uses peptides at the follicle level to support anchoring structures and help reduce premature shedding in younger consumers experiencing stress- or lifestyle-related thinning', 
        es: 'Utiliza péptidos a nivel folicular para apoyar las estructuras de anclaje y ayudar a reducir la caída prematura en consumidores jóvenes que experimentan adelgazamiento relacionado con el estrés o el estilo de vida' 
      },
      gradient: 'from-[oklch(0.60_0.10_200)] to-[oklch(0.45_0.15_260)]'
    },
    {
      icon: Sparkle,
      title: { 
        en: 'Repairs Fiber Damage', 
        es: 'Repara el Daño de la Fibra' 
      },
      description: { 
        en: 'Restores hair with keratin, amino acids, and lightweight oils, aligning with the regional shift away from harsh straightening toward healthy natural texture', 
        es: 'Restaura el cabello con queratina, aminoácidos y aceites ligeros, alineándose con el cambio regional de alisados agresivos hacia una textura natural saludable' 
      },
      gradient: 'from-[oklch(0.45_0.15_260)] to-[oklch(0.55_0.08_220)]'
    }
  ]

  const formulations = [
    {
      icon: Drop,
      title: { 
        en: 'Sulfate-Free Cleansers', 
        es: 'Limpiadores Sin Sulfatos' 
      },
      description: { 
        en: 'Low-foam cleansers that respect the scalp barrier, mirroring dermocosmetic facial cleansers for a gentle yet effective clean', 
        es: 'Limpiadores de baja espuma que respetan la barrera del cuero cabelludo, reflejando los limpiadores faciales dermocosméticos para una limpieza suave pero efectiva' 
      }
    },
    {
      icon: Flask,
      title: { 
        en: 'Peptide + CBD Complexes', 
        es: 'Complejos de Péptidos + CBD' 
      },
      description: { 
        en: 'Leave-on or rinse-off treatments marketed as topical, non-invasive alternatives that complement or delay more aggressive hair-loss interventions', 
        es: 'Tratamientos sin enjuague o con enjuague comercializados como alternativas tópicas no invasivas que complementan o retrasan intervenciones más agresivas contra la caída del cabello' 
      }
    },
    {
      icon: Leaf,
      title: { 
        en: 'Climate-Optimized Textures', 
        es: 'Texturas Optimizadas para el Clima' 
      },
      description: { 
        en: 'Clean-rinsing formulas designed for frequent use in hot, humid climates that do not weigh down curls or fine hair', 
        es: 'Fórmulas de enjuague limpio diseñadas para uso frecuente en climas cálidos y húmedos que no pesan los rizos o el cabello fino' 
      }
    }
  ]

  const sciencePoints = [
    {
      title: { en: '4.0% MTRX-CBD Technology', es: '4.0% Tecnología MTRX-CBD' },
      description: { 
        en: 'Our proprietary CBD complex modulates the cutaneous endocannabinoid system in the scalp, down-regulating inflammatory cytokines (IL-6, IL-8, TNF-α) that contribute to follicle miniaturization and premature hair loss', 
        es: 'Nuestro complejo patentado de CBD modula el sistema endocannabinoide cutáneo en el cuero cabelludo, regulando a la baja las citoquinas inflamatorias (IL-6, IL-8, TNF-α) que contribuyen a la miniaturización del folículo y la pérdida prematura del cabello' 
      }
    },
    {
      title: { en: 'Bioactive Peptide Matrix', es: 'Matriz de Péptidos Bioactivos' },
      description: { 
        en: 'Specialized peptides signal follicle stem cells to maintain their anchoring to the dermal papilla, the "root" of hair growth, helping to extend the anagen (growth) phase and reduce telogen effluvium', 
        es: 'Los péptidos especializados señalan a las células madre foliculares para mantener su anclaje a la papila dérmica, la "raíz" del crecimiento del cabello, ayudando a extender la fase anágena (crecimiento) y reducir el efluvio telógeno' 
      }
    },
    {
      title: { en: 'Keratin Reconstruction', es: 'Reconstrucción de Queratina' },
      description: { 
        en: 'Hydrolyzed keratin and amino acid complexes penetrate the hair shaft to fill structural gaps, improving tensile strength by up to 40% and reducing breakage from heat styling and environmental stress', 
        es: 'La queratina hidrolizada y los complejos de aminoácidos penetran en el tallo del cabello para llenar huecos estructurales, mejorando la resistencia a la tracción hasta en un 40% y reduciendo la rotura por el peinado con calor y el estrés ambiental' 
      }
    },
    {
      title: { en: 'Scalp Microbiome Support', es: 'Soporte del Microbioma del Cuero Cabelludo' },
      description: { 
        en: 'Panthenol and Evening Primrose Oil work synergistically to maintain optimal scalp pH and lipid balance, supporting a healthy microbiome that reduces dandruff, itching, and seborrheic conditions', 
        es: 'El pantenol y el aceite de onagra trabajan sinérgicamente para mantener el pH óptimo del cuero cabelludo y el equilibrio lipídico, apoyando un microbioma saludable que reduce la caspa, la picazón y las condiciones seborreicas' 
      }
    }
  ]

  const regionalContext = [
    {
      icon: Heart,
      stat: '78%',
      label: { 
        en: 'of LATAM consumers consider hair central to identity', 
        es: 'de los consumidores de LATAM consideran el cabello central para la identidad' 
      }
    },
    {
      icon: Brain,
      stat: '64%',
      label: { 
        en: 'prefer natural texture over chemical straightening (2024)', 
        es: 'prefieren textura natural sobre alisado químico (2024)' 
      }
    },
    {
      icon: TrendUp,
      stat: '2.3x',
      label: { 
        en: 'growth in scalp care market vs. traditional haircare', 
        es: 'crecimiento en el mercado de cuidado del cuero cabelludo vs. cuidado capilar tradicional' 
      }
    }
  ]

  return (
    <>
      <AnimatePresence>
        {showConstellation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50"
          >
            <HairScalpConstellationMap />
            <Button
              onClick={() => setShowConstellation(false)}
              className="fixed top-8 left-8 z-[60] bg-slate-dark/90 hover:bg-slate-dark text-white"
              size="lg"
            >
              {language === 'en' ? 'Back to Section' : 'Volver a la Sección'}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="py-20 sm:py-32 bg-gradient-to-br from-background via-[oklch(0.97_0.01_270)] to-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, oklch(0.55 0.20 280) 0px, transparent 1px, transparent 60px),
            repeating-linear-gradient(90deg, oklch(0.55 0.20 280) 0px, transparent 1px, transparent 60px)
          `,
        }}
      />

      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-radial from-[oklch(0.55_0.20_280)]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-radial from-[oklch(0.60_0.10_200)]/10 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[oklch(0.55_0.20_280)]/10 to-[oklch(0.60_0.10_200)]/10 rounded-full border border-[oklch(0.55_0.20_280)]/20 mb-6"
          >
            <Sparkle className="text-[oklch(0.55_0.20_280)]" size={20} weight="fill" />
            <span className="text-sm font-medium text-[oklch(0.55_0.20_280)] uppercase tracking-wider">
              {language === 'en' ? 'Anti Aging Hair & Scalp Care' : 'Cuidado Anti-Envejecimiento Capilar y del Cuero Cabelludo'}
            </span>
          </motion.div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-dark mb-6 leading-tight">
            {language === 'en' ? 'The Root of Longevity' : 'La Raíz de la Longevidad'}
          </h2>

          <p className="text-xl sm:text-2xl text-gray-medium max-w-4xl mx-auto leading-relaxed mb-4">
            {language === 'en' 
              ? 'This category applies the same prejuvenation logic to the scalp, tapping into the skinification of hair and the cultural centrality of hair as identity in Brazil, Colombia, and the wider region.'
              : 'Esta categoría aplica la misma lógica de prejuvenación al cuero cabelludo, aprovechando la "skinificación" del cabello y la centralidad cultural del cabello como identidad en Brasil, Colombia y la región más amplia.'}
          </p>

          <p className="text-lg text-gray-medium max-w-4xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'CBD, peptides, and keratin-based actives focus on follicle health, density preservation, and scalp comfort rather than only cosmetic shine.'
              : 'Los activos basados en CBD, péptidos y queratina se centran en la salud del folículo, la preservación de la densidad y la comodidad del cuero cabelludo en lugar de solo el brillo cosmético.'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20"
        >
          {regionalContext.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:border-[oklch(0.55_0.20_280)]/40"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[oklch(0.55_0.20_280)] to-[oklch(0.60_0.10_200)] mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-white" size={28} weight="fill" />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-[oklch(0.55_0.20_280)] mb-2">{item.stat}</div>
              <p className="text-sm text-gray-medium leading-relaxed">
                {language === 'en' ? item.label.en : item.label.es}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-12 text-center">
            {language === 'en' ? 'What It Does' : 'Lo Que Hace'}
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="group relative"
              >
                <div className="bg-card rounded-3xl p-8 border border-border shadow-lg hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="text-white" size={32} weight="duotone" />
                  </div>

                  <h4 className="text-xl font-bold text-slate-dark mb-4 group-hover:text-[oklch(0.55_0.20_280)] transition-colors duration-300">
                    {language === 'en' ? benefit.title.en : benefit.title.es}
                  </h4>

                  <p className="text-gray-medium leading-relaxed">
                    {language === 'en' ? benefit.description.en : benefit.description.es}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-dark mb-4 text-center">
            {language === 'en' ? 'Formulation Signature' : 'Firma de Formulación'}
          </h3>
          <p className="text-lg text-gray-medium text-center mb-12 max-w-3xl mx-auto">
            {language === 'en' 
              ? 'Advanced delivery systems optimized for the unique physiology of the scalp'
              : 'Sistemas avanzados de entrega optimizados para la fisiología única del cuero cabelludo'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formulations.map((formula, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-gradient-to-br from-card to-secondary/5 rounded-2xl p-6 border border-border hover:border-[oklch(0.55_0.20_280)]/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[oklch(0.55_0.20_280)] to-[oklch(0.60_0.10_200)] flex items-center justify-center">
                    <formula.icon className="text-white" size={24} weight="duotone" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-dark mb-2">
                      {language === 'en' ? formula.title.en : formula.title.es}
                    </h4>
                    <p className="text-sm text-gray-medium leading-relaxed">
                      {language === 'en' ? formula.description.en : formula.description.es}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-20 text-center"
        >
          <Button
            onClick={() => setShowConstellation(true)}
            size="lg"
            className="bg-gradient-to-r from-[oklch(0.55_0.20_280)] to-[oklch(0.60_0.10_200)] hover:from-[oklch(0.50_0.22_280)] hover:to-[oklch(0.55_0.12_200)] text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg group"
          >
            <Atom className="mr-3 group-hover:rotate-180 transition-transform duration-500" size={24} weight="duotone" />
            {language === 'en' ? 'Explore Ingredient Constellation' : 'Explorar Constelación de Ingredientes'}
            <Sparkle className="ml-3 group-hover:scale-125 transition-transform duration-300" size={24} weight="fill" />
          </Button>
          <p className="text-sm text-gray-medium mt-4 max-w-xl mx-auto">
            {language === 'en' 
              ? 'Discover the synergistic network of ingredients that power our Hair & Scalp Care formulations'
              : 'Descubre la red sinérgica de ingredientes que potencian nuestras formulaciones de Cuidado Capilar y del Cuero Cabelludo'}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-dark via-[oklch(0.20_0.02_250)] to-[oklch(0.18_0.025_240)] rounded-3xl p-10 sm:p-14 border border-[oklch(0.55_0.20_280)]/20 shadow-2xl relative overflow-hidden mb-20"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-[oklch(0.55_0.20_280)]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-[oklch(0.60_0.10_200)]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              {language === 'en' ? 'The Science Behind The System' : 'La Ciencia Detrás del Sistema'}
            </h3>

            <div className="space-y-8">
              {sciencePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[oklch(0.55_0.20_280)]/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-br from-[oklch(0.55_0.20_280)] to-[oklch(0.60_0.10_200)] mt-2" />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-3">
                        {language === 'en' ? point.title.en : point.title.es}
                      </h4>
                      <p className="text-white/70 leading-relaxed">
                        {language === 'en' ? point.description.en : point.description.es}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-br from-[oklch(0.55_0.20_280)]/5 to-[oklch(0.60_0.10_200)]/5 rounded-3xl p-10 sm:p-14 border border-[oklch(0.55_0.20_280)]/20 text-center"
        >
          <Sparkle className="text-[oklch(0.55_0.20_280)] mx-auto mb-6" size={48} weight="fill" />
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-dark mb-4">
            {language === 'en' ? 'The Emotional Hook' : 'El Gancho Emocional'}
          </h3>
          <p className="text-lg sm:text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Anti-aging hair & scalp care is framed as future-proofing your hairline—protecting density, shine, and scalp comfort now, so the "Latina glow" includes healthy, strong hair well into later decades.'
              : 'El cuidado anti-envejecimiento del cabello y el cuero cabelludo se enmarca como protección de tu línea del cabello para el futuro: protegiendo la densidad, el brillo y la comodidad del cuero cabelludo ahora, para que el "brillo latino" incluya cabello saludable y fuerte hasta las décadas posteriores.'}
          </p>
        </motion.div>
      </div>
    </section>
    </>
  )
}
