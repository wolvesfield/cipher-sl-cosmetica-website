import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { useState } from 'react'
import { ChevronRight, Microscope, Globe, Beaker, Users, RefreshCw } from 'lucide-react'

const latamCities = [
  { name: 'São Paulo', uv: 'High', humidity: '75%', pollution: 'Moderate', note: 'Why our SPF is never optional' },
  { name: 'Mexico City', uv: 'Very High', humidity: '45%', pollution: 'High', note: 'Why barrier support is baked into every protocol' },
  { name: 'Bogotá', uv: 'Extreme', humidity: '60%', pollution: 'Moderate', note: 'High altitude demands superior protection' },
  { name: 'Buenos Aires', uv: 'High', humidity: '70%', pollution: 'Low', note: 'Diverse phototypes require inclusive formulation' }
]

const formulaCards = [
  { 
    complex: 'Hexapeptide-10', 
    year: 2014, 
    originalUse: 'Post-laser erythema',
    currentUse: 'Daily redness control',
    icon: Beaker
  },
  { 
    complex: 'CBD Complex', 
    year: 2018, 
    originalUse: 'Atopic barrier repair',
    currentUse: 'Sensitivity-safe prejuvenation',
    icon: Microscope
  },
  { 
    complex: 'Ceramide Matrix', 
    year: 2012, 
    originalUse: 'Post-procedure recovery',
    currentUse: 'Daily barrier fortification',
    icon: RefreshCw
  }
]

const labLineage = [
  { role: 'Founding Chemist', achievement: 'Pioneered ceramide-rich post-procedure balm', year: '2008' },
  { role: 'Clinical Liaison', achievement: 'Led CBD regulatory navigation in Southern Cone', year: '2016' },
  { role: 'Next-Gen Formulator', achievement: 'Developed MTRX-CBD delivery system', year: '2022' }
]

const heritageOS = [
  { tile: 'Barrier Science', status: 'Active Study', color: 'bg-teal-deep/10 border-teal-deep' },
  { tile: 'CBD Research', status: 'Reformulation in Progress', color: 'bg-primary/10 border-primary' },
  { tile: 'Climate Impact', status: 'Standard Updated 2026', color: 'bg-accent/10 border-accent' }
]

export function OurHeritageSection() {
  const [selectedCity, setSelectedCity] = useState<typeof latamCities[0] | null>(null)
  const [flippedCard, setFlippedCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-sand-light/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-20"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm">
            From Clinical Lab to Living Skin
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-dark mb-6">
            Our Heritage
          </h1>
          <p className="text-lg md:text-xl text-gray-medium leading-relaxed mb-4">
            Our Heritage traces SL Cosmetica's evolution from a quiet formulation lab supporting physicians 
            to a visible, consumer-facing brand translating pharmaceutical rigor into daily rituals.
          </p>
          <p className="text-base md:text-lg text-gray-medium/80">
            The same mindset that once built post-procedure protocols now designs futuristic, CBD-enhanced 
            skincare for prejuvenation and barrier health across Latin America's diverse phototypes.
          </p>
        </motion.div>

        {/* Origins Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <Card className="border-primary/10 bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-dark mb-6">The Evolution</h2>
                
                <p className="text-gray-medium leading-relaxed mb-6">
                  SL Cosmetica began as a behind-the-scenes partner to dermatologists and aesthetic clinics, 
                  formulating recovery creams and barrier therapies to support procedures long before 
                  "clinical skincare" became a marketing term. Those early years defined the brand's reflex: 
                  start with pathophysiology, choose actives for mechanism—not trend—and prove performance 
                  on real, sensitized skin.
                </p>

                <p className="text-gray-medium leading-relaxed">
                  As the Latin American beauty market matured into a hub for high-performance, ingredient-literate 
                  consumers, SL Cosmetica moved from the treatment room into everyday bathrooms without diluting 
                  its standards. The same R&D culture that once built invisible white-label formulas now powers 
                  a named line that merges regulatory-aware CBD science, next-generation peptides, and ceramide 
                  architecture into Clean Clinical Luxury accessible beyond the clinic.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pillar 2: Latin American Skin Atlas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">
              Latin American Skin as Blueprint
            </h2>
            <p className="text-lg text-gray-medium max-w-3xl mx-auto">
              Prototypes were stress-tested in climates defined by high UV, humidity, pollution, and diverse 
              phototypes, making resilience and pigment safety non-negotiable.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Map visual */}
            <Card className="border-primary/10 bg-gradient-to-br from-teal-deep/5 to-primary/5 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <Globe className="w-20 h-20 text-teal-deep opacity-80" />
                </div>
                <h3 className="text-2xl font-bold text-slate-dark text-center mb-6">
                  LATAM Skin Atlas
                </h3>
                <div className="space-y-3">
                  {latamCities.map((city) => (
                    <motion.button
                      key={city.name}
                      onClick={() => setSelectedCity(city)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`
                        w-full p-4 rounded-lg border-2 text-left transition-all
                        ${selectedCity?.name === city.name
                          ? 'border-teal-deep bg-teal-deep/10 shadow-md'
                          : 'border-border hover:border-teal-deep/50 bg-white/50'
                        }
                      `}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-slate-dark">{city.name}</span>
                        <ChevronRight className={`
                          w-5 h-5 transition-transform
                          ${selectedCity?.name === city.name ? 'rotate-90 text-teal-deep' : 'text-gray-medium'}
                        `} />
                      </div>
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* City details */}
            <Card className="border-primary/10 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                {selectedCity ? (
                  <motion.div
                    key={selectedCity.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Badge className="mb-4 bg-teal-deep/10 text-teal-deep border-teal-deep/20">
                      Environmental Profile
                    </Badge>
                    <h3 className="text-2xl font-bold text-slate-dark mb-6">{selectedCity.name}</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center p-3 bg-sand-light/50 rounded-lg">
                        <span className="text-sm font-medium text-gray-medium">UV Index</span>
                        <span className="text-sm font-bold text-slate-dark">{selectedCity.uv}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-sand-light/50 rounded-lg">
                        <span className="text-sm font-medium text-gray-medium">Humidity</span>
                        <span className="text-sm font-bold text-slate-dark">{selectedCity.humidity}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-sand-light/50 rounded-lg">
                        <span className="text-sm font-medium text-gray-medium">Pollution</span>
                        <span className="text-sm font-bold text-slate-dark">{selectedCity.pollution}</span>
                      </div>
                    </div>

                    <div className="p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
                      <p className="text-sm font-medium text-slate-dark italic">
                        "{selectedCity.note}"
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full flex items-center justify-center text-center">
                    <div>
                      <Globe className="w-16 h-16 text-gray-medium/30 mx-auto mb-4" />
                      <p className="text-gray-medium">Select a city to view its environmental stressors</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Pillar 3: Science Before Story - Formula Provenance Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">
              Science Before Story
            </h2>
            <p className="text-lg text-gray-medium max-w-3xl mx-auto">
              Stories are written after the data, not before. Every hero complex exists because it solved 
              a clinical problem first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {formulaCards.map((card) => {
              const Icon = card.icon
              const isFlipped = flippedCard === card.complex

              return (
                <motion.div
                  key={card.complex}
                  className="perspective-1000"
                  onClick={() => setFlippedCard(isFlipped ? null : card.complex)}
                >
                  <motion.div
                    className="relative h-80 cursor-pointer"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Front */}
                    <Card className={`
                      absolute inset-0 border-primary/20 bg-white/90 backdrop-blur-sm
                      ${isFlipped ? 'invisible' : 'visible'}
                    `}
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <CardContent className="p-8 h-full flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-dark mb-3">{card.complex}</h3>
                        <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                          First Used: {card.year}
                        </Badge>
                        <p className="text-sm text-gray-medium">Click to reveal provenance</p>
                      </CardContent>
                    </Card>

                    {/* Back */}
                    <Card className={`
                      absolute inset-0 border-primary/20 bg-gradient-to-br from-primary/5 to-teal-deep/5
                      ${isFlipped ? 'visible' : 'invisible'}
                    `}
                      style={{ 
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                      }}
                    >
                      <CardContent className="p-8 h-full flex flex-col justify-center">
                        <Badge className="mb-4 bg-teal-deep/10 text-teal-deep border-teal-deep/20 self-start">
                          Clinical Origins
                        </Badge>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-medium uppercase mb-2">
                              Original Indication
                            </h4>
                            <p className="text-base font-medium text-slate-dark">{card.originalUse}</p>
                          </div>
                          
                          <div className="h-px bg-primary/20" />
                          
                          <div>
                            <h4 className="text-sm font-semibold text-gray-medium uppercase mb-2">
                              Today's Consumer Use
                            </h4>
                            <p className="text-base font-medium text-slate-dark">{card.currentUse}</p>
                          </div>
                        </div>

                        <p className="text-xs text-gray-medium mt-6 italic">
                          Click again to flip back
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Pillar 4: Generational Craft - Lab Lineage */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">
              Generational Craft
            </h2>
            <p className="text-lg text-gray-medium max-w-3xl mx-auto">
              A formulation culture passed from chemists to younger teams who grew up as skintellectuals—combining 
              old-school bench skills with digital-era ingredient literacy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-primary/10 bg-gradient-to-br from-primary/5 via-white to-accent/5 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="relative">
                  {/* DNA strand visual */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-teal-deep to-accent rounded-full hidden md:block" />
                  
                  <div className="space-y-8 md:pl-12">
                    {labLineage.map((member, index) => (
                      <motion.div
                        key={member.role}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className="relative"
                      >
                        {/* Node connector */}
                        <div className="absolute left-[-3.25rem] top-1/2 w-8 h-px bg-primary/30 hidden md:block" />
                        <div className="absolute left-[-3.5rem] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary border-4 border-white shadow-md hidden md:block" />
                        
                        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-primary/10 hover:border-primary/30 transition-all hover:shadow-md">
                          <div className="flex items-center gap-3 mb-2">
                            <Users className="w-5 h-5 text-primary" />
                            <h3 className="text-lg font-bold text-slate-dark">{member.role}</h3>
                            <Badge variant="outline" className="ml-auto">{member.year}</Badge>
                          </div>
                          <p className="text-sm text-gray-medium">{member.achievement}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Pillar 5: Heritage Under Continuous Upgrade */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-dark mb-4">
              Heritage Under Continuous Upgrade
            </h2>
            <p className="text-lg text-gray-medium max-w-3xl mx-auto">
              Heritage is not nostalgia; it is a codebase that keeps refactoring as new evidence, regulations, 
              and environmental realities emerge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {heritageOS.map((item, index) => (
              <motion.div
                key={item.tile}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <Card className={`
                  border-2 ${item.color} transition-all duration-300
                  hover:shadow-lg hover:scale-105 cursor-pointer
                  bg-white/90 backdrop-blur-sm
                `}>
                  <CardContent className="p-6 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-bold text-slate-dark">{item.tile}</h3>
                      <div className={`
                        w-3 h-3 rounded-full animate-pulse
                        ${item.status.includes('Active') ? 'bg-teal-deep' : ''}
                        ${item.status.includes('Progress') ? 'bg-primary' : ''}
                        ${item.status.includes('Updated') ? 'bg-accent' : ''}
                      `} />
                    </div>
                    <Badge className="text-xs" variant="outline">
                      {item.status}
                    </Badge>
                    <p className="text-sm text-gray-medium mt-4">
                      {item.status.includes('Active') && 'Currently under clinical investigation with ongoing trials.'}
                      {item.status.includes('Progress') && 'Formula optimization in progress based on new research data.'}
                      {item.status.includes('Updated') && 'Latest regulatory standards implemented across all formulations.'}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
