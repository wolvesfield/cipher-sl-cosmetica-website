import { useApp } from '@/lib/AppContext'
import { motion } from 'framer-motion'
import { Microscope, Sparkles, Shield, Atom } from 'lucide-react'

export function ScienceSection() {
  const { language, lt, lta } = useApp()

  const features = [
    {
      icon: Microscope,
      title: { en: 'Clinical Testing', es: 'Pruebas Clínicas' },
      description: {
        en: 'All products undergo rigorous clinical trials to prove efficacy',
        es: 'Todos los productos pasan por pruebas clínicas rigurosas'
      }
    },
    {
      icon: Atom,
      title: { en: 'Molecular Science', es: 'Ciencia Molecular' },
      description: {
        en: 'Advanced formulations targeting skin at the cellular level',
        es: 'Formulaciones avanzadas dirigidas a la piel a nivel celular'
      }
    },
    {
      icon: Sparkles,
      title: { en: 'High-Potency Actives', es: 'Activos de Alta Potencia' },
      description: {
        en: 'Medical-grade formulations with proven concentrations',
        es: 'Formulaciones de grado médico con concentraciones probadas'
      }
    },
    {
      icon: Shield,
      title: { en: 'Dermatologist Approved', es: 'Aprobado por Dermatólogos' },
      description: {
        en: 'Developed and tested by leading skin experts',
        es: 'Desarrollado y probado por expertos líderes en piel'
      }
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 50px, oklch(0.45 0.15 260) 50px, oklch(0.45 0.15 260) 51px),
              repeating-linear-gradient(90deg, transparent, transparent 50px, oklch(0.45 0.15 260) 50px, oklch(0.45 0.15 260) 51px)
            `
          }} 
        />
      </div>

      <div className="absolute top-20 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-teal-deep/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-2 mb-6">
            <Atom className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium tracking-wide uppercase">
              {language === 'en' ? 'Our Technology' : 'Nuestra Tecnología'}
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-dark mb-6">
            {language === 'en' ? 'The Science of Beauty' : 'La Ciencia de la Belleza'}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {language === 'en'
              ? 'Harnessing breakthrough biotechnology and advanced molecular research to deliver transformative skincare solutions that work at the deepest cellular level'
              : 'Aprovechando la biotecnología revolucionaria y la investigación molecular avanzada para ofrecer soluciones transformadoras que funcionan a nivel celular'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-teal-deep/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/10 to-teal-deep/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-dark mb-3 group-hover:text-primary transition-colors">
                  {lt(feature.title)}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {lt(feature.description)}
                </p>
              </div>

              <motion.div
                className="absolute -bottom-1 -right-1 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
              />
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  )
}
