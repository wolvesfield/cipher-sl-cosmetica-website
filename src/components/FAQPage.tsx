import { useState, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { CaretDown, Drop, Atom, Shield, Leaf, Globe, Package, Clock, ChartLineUp } from '@phosphor-icons/react'
import { Button } from './ui/button'
import { Card } from './ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
import { Slider } from './ui/slider'
import { faqClusters, type FAQItem, type FAQCluster } from '@/lib/faqData'

const iconMap: Record<string, React.ReactNode> = {
  protocols: <Drop weight="duotone" className="w-6 h-6" />,
  ingredients: <Atom weight="duotone" className="w-6 h-6" />,
  results: <Shield weight="duotone" className="w-6 h-6" />,
  ethics: <Leaf weight="duotone" className="w-6 h-6" />,
  orders: <Package weight="duotone" className="w-6 h-6" />
}

function RoutineRingVerification() {
  const [selectedSlot, setSelectedSlot] = useState<string>('am')

  return (
    <Card className="p-6 bg-gradient-to-br from-[oklch(0.99_0.002_240)] to-[oklch(0.97_0.005_230)] border border-primary/10">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-teal-deep" />
        <h4 className="font-semibold text-slate-dark">Routine Compatibility Checker</h4>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Drag products into AM or PM slots to check compatibility and see layering recommendations.
      </p>
      <Tabs value={selectedSlot} onValueChange={setSelectedSlot} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="am">Morning ☀️</TabsTrigger>
          <TabsTrigger value="pm">Evening 🌙</TabsTrigger>
        </TabsList>
        <TabsContent value="am" className="mt-4">
          <div className="h-32 border-2 border-dashed border-primary/20 rounded-lg flex items-center justify-center text-sm text-muted-foreground">
            Drop products here for AM routine
          </div>
        </TabsContent>
        <TabsContent value="pm" className="mt-4">
          <div className="h-32 border-2 border-dashed border-primary/20 rounded-lg flex items-center justify-center text-sm text-muted-foreground">
            Drop products here for PM routine
          </div>
        </TabsContent>
      </Tabs>
      <div className="mt-4 text-xs text-muted-foreground">
        💡 Interactive version allows product drag-and-drop with real-time compatibility scoring
      </div>
    </Card>
  )
}



function TimelineSliderVerification() {
  const [week, setWeek] = useState([0])

  const getResultsForWeek = (weekNum: number) => {
    if (weekNum < 1) return 'Starting point - no visible changes yet'
    if (weekNum <= 2) return 'Hydration improves, skin feels smoother'
    if (weekNum <= 4) return 'Texture refines, minor tone improvements'
    if (weekNum <= 8) return 'Fine lines soften, radiance increases'
    return 'Collagen remodeling visible, firmness improves'
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-[oklch(0.99_0.002_240)] to-[oklch(0.97_0.005_230)] border border-primary/10">
      <div className="flex items-center gap-2 mb-4">
        <ChartLineUp className="w-5 h-5 text-terracotta" />
        <h4 className="font-semibold text-slate-dark">Results Timeline</h4>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Drag the slider to see expected results at different timepoints.
      </p>
      <div className="space-y-4">
        <div className="flex justify-between text-xs text-muted-foreground mb-2">
          <span>Week 0</span>
          <span>Week 12</span>
        </div>
        <Slider
          value={week}
          onValueChange={setWeek}
          max={12}
          step={1}
          className="w-full"
        />
        <div className="text-center">
          <div className="text-2xl font-semibold text-primary mb-2">Week {week[0]}</div>
          <div className="text-sm text-slate-dark">{getResultsForWeek(week[0])}</div>
        </div>
      </div>
      <div className="mt-4 text-xs text-muted-foreground">
        💡 Interactive version includes before/after photos and measurement data
      </div>
    </Card>
  )
}

function EthicsStatusBarVerification() {
  return (
    <Card className="p-6 bg-gradient-to-br from-[oklch(0.99_0.002_240)] to-[oklch(0.97_0.005_230)] border border-primary/10">
      <div className="flex items-center gap-2 mb-4">
        <Leaf className="w-5 h-5 text-green-600" />
        <h4 className="font-semibold text-slate-dark">Sustainability Status</h4>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Real-time verification of ethical commitments for each product.
      </p>
      <div className="space-y-3">
        {[
          { label: 'Cruelty-Free', value: 100, color: '#10b981' },
          { label: 'Vegan', value: 85, color: '#3b82f6' },
          { label: 'Recyclable Packaging', value: 100, color: '#8b5cf6' },
          { label: 'Carbon Neutral Shipping', value: 100, color: '#f59e0b' }
        ].map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-slate-dark font-medium">{item.label}</span>
              <span className="text-muted-foreground">{item.value}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${item.value}%`,
                  backgroundColor: item.color
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-muted-foreground">
        💡 Click any bar to view detailed verification documents and certifications
      </div>
    </Card>
  )
}

function ShippingGlobeVerification() {
  const [selectedRegion, setSelectedRegion] = useState('North America')

  const regions = [
    { name: 'North America', delivery: '3-5 days', duties: 'Included' },
    { name: 'Latin America', delivery: '5-8 days', duties: 'Varies' },
    { name: 'Europe', delivery: '4-7 days', duties: 'Included' },
    { name: 'Asia-Pacific', delivery: '6-10 days', duties: 'Collected on delivery' }
  ]

  return (
    <Card className="p-6 bg-gradient-to-br from-[oklch(0.99_0.002_240)] to-[oklch(0.97_0.005_230)] border border-primary/10">
      <div className="flex items-center gap-2 mb-4">
        <Globe className="w-5 h-5 text-primary" />
        <h4 className="font-semibold text-slate-dark">Shipping Estimator</h4>
      </div>
      <p className="text-sm text-muted-foreground mb-4">
        Select your region to see delivery estimates and customs information.
      </p>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {regions.map((region) => (
          <button
            key={region.name}
            onClick={() => setSelectedRegion(region.name)}
            className={`p-3 rounded-lg border text-left transition-all ${
              selectedRegion === region.name
                ? 'border-primary bg-primary/5 text-primary'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="font-medium text-sm">{region.name}</div>
          </button>
        ))}
      </div>
      {selectedRegion && (
        <div className="p-4 bg-background rounded-lg border border-border space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Delivery Time:</span>
            <span className="font-medium text-slate-dark">
              {regions.find((r) => r.name === selectedRegion)?.delivery}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Customs Duties:</span>
            <span className="font-medium text-slate-dark">
              {regions.find((r) => r.name === selectedRegion)?.duties}
            </span>
          </div>
        </div>
      )}
      <div className="mt-4 text-xs text-muted-foreground">
        💡 Interactive 3D globe shows exact delivery times and CBD import regulations by country
      </div>
    </Card>
  )
}

const verificationComponents: Record<string, React.ReactNode> = {
  protocols: <RoutineRingVerification />,
  results: <TimelineSliderVerification />,
  ethics: <EthicsStatusBarVerification />,
  orders: <ShippingGlobeVerification />
}

interface FAQTileProps {
  question: FAQItem
  cluster: FAQCluster
  index: number
  isOpen: boolean
  onClick: () => void
}

function FAQTile({ question, cluster, index, isOpen, onClick }: FAQTileProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 15
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 15
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const x = (e.clientX - centerX) / (rect.width / 2)
    const y = (e.clientY - centerY) / (rect.height / 2)
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        rotateX: isOpen ? 0 : rotateX,
        rotateY: isOpen ? 0 : rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`cursor-pointer ${isOpen ? 'col-span-full' : ''}`}
    >
      <Card
        className={`relative overflow-hidden transition-all duration-300 ${
          isOpen
            ? 'border-2 border-primary shadow-2xl'
            : 'border border-border hover:border-primary/50 hover:shadow-xl'
        }`}
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, oklch(0.99 0.002 240) 0%, oklch(0.97 0.005 230) 100%)'
            : 'oklch(0.99 0.002 240)'
        }}
      >
        <div
          className="absolute top-0 left-0 w-1 h-full"
          style={{ backgroundColor: cluster.color.replace(/_/g, ' ') }}
        />
        <div className={`p-6 ${isOpen ? 'pb-8' : ''}`}>
          <div className="flex items-start gap-3 mb-2">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ 
                backgroundColor: `${cluster.color.replace(/_/g, ' ')}15`, 
                color: cluster.color.replace(/_/g, ' ')
              }}
            >
              {iconMap[cluster.id]}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-slate-dark text-base leading-tight">
                {question.question}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <CaretDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="mt-4 space-y-4">
                  <div>
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      Short Answer
                    </div>
                    <p className="text-sm text-slate-dark leading-relaxed">
                      {question.shortAnswer}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                      How It Works
                    </div>
                    <p className="text-sm text-slate-dark leading-relaxed">
                      {question.howItWorks}
                    </p>
                  </div>

                  <div className="p-4 bg-muted/30 rounded-lg border border-border">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Visual Diagram
                    </div>
                    <p className="text-xs text-muted-foreground italic">
                      {question.designNote}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Card>
    </motion.div>
  )
}

export function FAQPage({ onBack }: { onBack: () => void }) {
  const [selectedCluster, setSelectedCluster] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleQuestionClick = (questionId: string) => {
    setOpenQuestion(openQuestion === questionId ? null : questionId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(0.97_0.005_230)] via-[oklch(0.95_0.01_240)] to-[oklch(0.93_0.015_250)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, oklch(0.50 0.12 230 / 0.03) 0px, transparent 1px, transparent 2px, oklch(0.50 0.12 230 / 0.03) 3px),
              repeating-linear-gradient(90deg, oklch(0.50 0.12 230 / 0.03) 0px, transparent 1px, transparent 2px, oklch(0.50 0.12 230 / 0.03) 3px)
            `,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex items-center justify-between mb-8">
            <Button
              onClick={onBack}
              variant="ghost"
              className="group"
            >
              <motion.span
                className="inline-block"
                whileHover={{ x: -4 }}
                transition={{ duration: 0.2 }}
              >
                ←
              </motion.span>
              <span className="ml-2">Back</span>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-dark mb-4">
              Knowledge Lab
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navigate our 3D knowledge space. Each question floats in its own dimension—hover, explore, discover.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {faqClusters.map((cluster, index) => (
              <motion.button
                key={cluster.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setSelectedCluster(selectedCluster === cluster.id ? null : cluster.id)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                  selectedCluster === cluster.id
                    ? 'border-primary shadow-lg scale-105'
                    : 'border-border hover:border-primary/50 hover:shadow-md'
                }`}
                style={{
                  backgroundColor: selectedCluster === cluster.id 
                    ? `${cluster.color.replace(/_/g, ' ')}10` 
                    : 'oklch(0.99 0.002 240)'
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                  style={{ 
                    backgroundColor: `${cluster.color.replace(/_/g, ' ')}20`, 
                    color: cluster.color.replace(/_/g, ' ')
                  }}
                >
                  {iconMap[cluster.id]}
                </div>
                <h3 className="font-semibold text-slate-dark text-sm mb-1">{cluster.title}</h3>
                <p className="text-xs text-muted-foreground">{cluster.questions.length} questions</p>
              </motion.button>
            ))}
          </div>

          <div ref={containerRef} className="space-y-16">
            {faqClusters
              .filter((cluster) => !selectedCluster || cluster.id === selectedCluster)
              .map((cluster) => (
                <motion.div
                  key={cluster.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ 
                        backgroundColor: `${cluster.color.replace(/_/g, ' ')}20`, 
                        color: cluster.color.replace(/_/g, ' ')
                      }}
                    >
                      {iconMap[cluster.id]}
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-slate-dark">{cluster.title}</h2>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                    {cluster.questions.map((question, index) => (
                      <FAQTile
                        key={question.id}
                        question={question}
                        cluster={cluster}
                        index={index}
                        isOpen={openQuestion === question.id}
                        onClick={() => handleQuestionClick(question.id)}
                      />
                    ))}
                  </div>

                  <div className="mt-8">{verificationComponents[cluster.id]}</div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
