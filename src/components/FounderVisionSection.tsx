import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'

export function FounderVisionSection() {
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
            Designing Tomorrow's Skin, Today
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-dark mb-6">
            Founder Vision
          </h1>
          <p className="text-lg md:text-xl text-gray-medium leading-relaxed mb-4">
            FOUNDER VISION is the compass that steers SL Cosmetica toward a future where skincare behaves 
            like precision medicine but feels like a daily ritual.
          </p>
          <p className="text-base md:text-lg text-gray-medium/80">
            The goal is to dissolve the gap between clinical evidence and bathroom-sink reality, so every 
            formula acts like a protocol and every interface teaches as much as it seduces.
          </p>
        </motion.div>

        {/* Core Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto mb-20"
        >
          <Card className="border-primary/10 bg-white/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-dark mb-6">The Founding Mandate</h2>
                
                <p className="text-gray-medium leading-relaxed mb-6">
                  Our founder came out of the clinical world with a simple frustration: patients received 
                  pharmaceutical-grade care inside the treatment room, then went home to products that spoke 
                  in poetry instead of data. The vision for SL Cosmetica was to close that loop—build a line 
                  where peptides, CBD, and barrier science are handled with the same discipline as a prescription, 
                  but delivered in textures and experiences that invite consistent, joyful use.
                </p>

                <p className="text-gray-medium leading-relaxed">
                  Rather than chasing trends, the founding mandate is to read pathology first, then design both 
                  formula and interface as a single system: actives chosen for mechanism, packaging that reveals 
                  the science instead of hiding it, and a UI that turns complex biology into intuitive visuals. 
                  The north star is a world where consumers navigate their routines with the same clarity as a 
                  well-written clinical chart—only rendered in light, motion, and touch instead of paper and jargon.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

      </div>
    </div>
  )
}
