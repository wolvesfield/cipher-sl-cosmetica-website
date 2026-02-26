import { motion } from 'framer-motion'
import { useApp } from '@/lib/AppContext'
import { Drop, Lightning, Shield, Clock, Sparkle, Target } from '@phosphor-icons/react'

// Generate random particle properties once outside the component to satisfy purity rules
const particleProps = [...Array(15)].map(() => ({
  initialX: Math.random() * 100 + '%',
  initialY: Math.random() * 100 + '%',
  scale: Math.random() * 0.5 + 0.5,
  animateY: Math.random() * -100 - 50 + '%',
  duration: Math.random() * 10 + 10
}))

export function BodyCareSection() {
  const { language } = useApp()

  const benefits = [
    {
      icon: Target,
      title: { en: 'Targeted Firmness', es: 'Firmeza Dirigida' },
      desc: { 
        en: 'Collagen-signaling peptides improve neck, décolleté, arms & thighs', 
        es: 'Péptidos que mejoran cuello, escote, brazos y muslos' 
      },
      color: 'oklch(0.60 0.10 200)'
    },
    {
      icon: Lightning,
      title: { en: 'Microcirculation Boost', es: 'Impulso de Microcirculación' },
      desc: { 
        en: 'Caffeine + CoQ10 tighten surface & defend against photo-damage', 
        es: 'Cafeína + CoQ10 tensan la piel y defienden contra el fotodaño' 
      },
      color: 'oklch(0.55 0.20 280)'
    },
    {
      icon: Shield,
      title: { en: 'Inflammation Control', es: 'Control de Inflamación' },
      desc: { 
        en: 'CBD + emollients calm post-sun & post-exercise redness', 
        es: 'CBD + emolientes calman enrojecimiento post-sol y ejercicio' 
      },
      color: 'oklch(0.45 0.15 260)'
    },
    {
      icon: Clock,
      title: { en: '<90 Sec Absorption', es: '<90 Seg Absorción' },
      desc: { 
        en: 'Fast-absorbing emulsion perfect for humid tropical climates', 
        es: 'Emulsión de rápida absorción perfecta para climas tropicales' 
      },
      color: 'oklch(0.50 0.12 240)'
    }
  ]

  const targetAreas = [
    { en: 'Tech-neck lines', es: 'Líneas de tech-neck' },
    { en: 'Chest creasing', es: 'Arrugas en el pecho' },
    { en: 'Arm & thigh tone loss', es: 'Pérdida de tono en brazos y muslos' },
    { en: 'Stretch marks', es: 'Estrías' },
    { en: 'Keratosis pilaris', es: 'Queratosis pilar' }
  ]

  const keyIngredients = [
    {
      name: '4.0% MTRX-CBD',
      role: { en: 'Systemic Anti-Inflammatory', es: 'Antiinflamatorio Sistémico' },
      benefit: { 
        en: 'Modulates inflammation, calms post-sun stress', 
        es: 'Modula inflamación, calma estrés post-solar' 
      }
    },
    {
      name: 'Matrixyl + Hexapeptide-10',
      role: { en: 'Collagen Architects', es: 'Arquitectos de Colágeno' },
      benefit: { 
        en: 'Stimulate collagen synthesis for firmer body skin', 
        es: 'Estimulan síntesis de colágeno para piel corporal más firme' 
      }
    },
    {
      name: 'Caffeine',
      role: { en: 'Tightening Agent', es: 'Agente Tensor' },
      benefit: { 
        en: 'Constricts vessels, reduces fluid retention', 
        es: 'Contrae vasos, reduce retención de líquidos' 
      }
    },
    {
      name: 'Coenzyme Q10',
      role: { en: 'Cellular Energy', es: 'Energía Celular' },
      benefit: { 
        en: 'Recharges mitochondria, defends against photoaging', 
        es: 'Recarga mitocondrias, defiende contra fotoenvejecimiento' 
      }
    }
  ]

  return (
    <section className="py-20 sm:py-32 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              oklch(0.45 0.15 260) 2px,
              oklch(0.45 0.15 260) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              oklch(0.45 0.15 260) 2px,
              oklch(0.45 0.15 260) 4px
            )`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particleProps.map((props, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            initial={{ 
              x: props.initialX, 
              y: props.initialY,
              scale: props.scale
            }}
            animate={{
              y: [null, props.animateY],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: props.duration,
              repeat: Infinity,
              ease: 'linear'
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
            className="inline-block mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Drop size={48} weight="duotone" className="text-primary mx-auto" />
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-dark mb-4">
            {language === 'en' ? 'ANTI AGING BODY CARE' : 'CUIDADO CORPORAL ANTI ENVEJECIMIENTO'}
          </h2>
          
          <p className="text-2xl sm:text-3xl text-primary font-semibold mb-6">
            {language === 'en' ? 'Skincare Doesn\'t Stop at the Neck' : 'El Cuidado No Se Detiene en el Cuello'}
          </p>
          
          <p className="text-lg text-gray-medium max-w-4xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Anti‑aging body care targets tech‑neck lines, chest creasing, and loss of tone on arms and legs—the areas Latin American consumers increasingly recognize as part of visible age, especially in climates where shoulders and legs are exposed year‑round. This category treats the body with the same Clean Clinical rigor as the face, using firming peptides, caffeine, CoQ10, and CBD in fast‑absorbing emulsions that suit humid and hot environments.'
              : 'El cuidado corporal anti‑envejecimiento se dirige a líneas de tech‑neck, arrugas en el pecho y pérdida de tono en brazos y piernas—las áreas que los consumidores latinoamericanos reconocen cada vez más como parte del envejecimiento visible, especialmente en climas donde hombros y piernas están expuestos todo el año. Esta categoría trata el cuerpo con el mismo rigor Clínico Limpio que el rostro, usando péptidos reafirmantes, cafeína, CoQ10 y CBD en emulsiones de rápida absorción ideales para ambientes húmedos y calurosos.'}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { label: { en: 'Absorption Time', es: 'Tiempo de Absorción' }, value: '<90 sec' },
            { label: { en: 'MTRX-CBD', es: 'MTRX-CBD' }, value: '4.0%' },
            { label: { en: 'Target Areas', es: 'Áreas Objetivo' }, value: { en: 'Neck to Legs', es: 'Cuello a Piernas' } },
            { label: { en: 'Climate', es: 'Clima' }, value: { en: 'Tropical', es: 'Tropical' } }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-card border border-border rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                {typeof stat.value === 'string' ? stat.value : (language === 'en' ? stat.value.en : stat.value.es)}
              </div>
              <div className="text-sm text-gray-medium font-medium">
                {language === 'en' ? stat.label.en : stat.label.es}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-dark text-center mb-12">
            {language === 'en' ? 'What It Does' : 'Lo Que Hace'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-6">
                    <div 
                      className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${benefit.color}15` }}
                    >
                      <Icon size={32} weight="duotone" style={{ color: benefit.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-dark mb-2">
                        {language === 'en' ? benefit.title.en : benefit.title.es}
                      </h4>
                      <p className="text-gray-medium leading-relaxed">
                        {language === 'en' ? benefit.desc.en : benefit.desc.es}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Target Areas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 sm:p-12 mb-20 border border-primary/10"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Target size={36} weight="duotone" className="text-primary" />
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-dark">
              {language === 'en' ? 'Target Areas' : 'Áreas Objetivo'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {targetAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-xl p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-border"
              >
                <Sparkle size={24} weight="duotone" className="text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-slate-dark">
                  {language === 'en' ? area.en : area.es}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Ingredients - Futuristic Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-dark text-center mb-12">
            {language === 'en' ? 'Formulation Signature' : 'Firma de Formulación'}
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {keyIngredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                
                <div className="relative bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-accent" />
                    <h4 className="text-xl font-bold text-slate-dark">
                      {ingredient.name}
                    </h4>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                      {language === 'en' ? ingredient.role.en : ingredient.role.es}
                    </span>
                  </div>
                  
                  <p className="text-gray-medium leading-relaxed">
                    {language === 'en' ? ingredient.benefit.en : ingredient.benefit.es}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emotional Hook - Hero Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-dark via-primary to-accent opacity-90" />
          
          <div className="relative z-10 p-12 sm:p-16 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="mb-6"
            >
              <Sparkle size={56} weight="duotone" className="text-white mx-auto" />
            </motion.div>
            
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {language === 'en' ? 'The Second Skin' : 'La Segunda Piel'}
            </h3>
            
            <p className="text-lg sm:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Anti-aging body care is positioned as a full-body firming ritual, not "just lotion"—the step that keeps the neckline, arms, and legs matching the youthful face your customer is already investing in. This is not maintenance; it is transformation.'
                : 'El cuidado corporal anti-envejecimiento se posiciona como un ritual de reafirmación corporal completo, no "solo una loción"—el paso que mantiene el cuello, brazos y piernas a la par del rostro juvenil en el que tu cliente ya está invirtiendo. Esto no es mantenimiento; es transformación.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
