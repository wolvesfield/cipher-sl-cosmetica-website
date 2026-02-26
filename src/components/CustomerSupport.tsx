import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Flask, Package, ArrowLeft, CaretRight, CreditCard, Cube, Atom, ShieldCheck, Phone, ChatCircleDots, EnvelopeSimple, ClockCounterClockwise } from '@phosphor-icons/react'
import { Card } from './ui/card'
import { Button } from './ui/button'

export type SupportWing = 'home' | 'customer' | 'product'

interface FAQSection {
  id: string
  title: string
  icon: React.ReactNode
  color: string
  questions: {
    question: string
    shortAnswer: string
    details: string
  }[]
}

const customerSupportSections: FAQSection[] = [
  {
    id: 'orders',
    title: 'Orders & Shipping',
    icon: <Package className="w-5 h-5" />,
    color: 'text-primary',
    questions: [
      {
        question: 'Where is my order?',
        shortAnswer: 'Enter your order number in the Order Tracker below to see real-time status.',
        details: 'Orders typically move through five stages: Processed, Packed, In Transit, Out for Delivery, Delivered. Once shipped, you will receive a tracking link via email. Most orders arrive within 3-7 business days depending on your region.'
      },
      {
        question: 'Which regions do you ship to?',
        shortAnswer: 'We ship to 40+ countries. CBD regulations vary by region.',
        details: 'SL Cosmetica ships globally, but CBD content may affect customs clearance in certain countries. Our formulas comply with cosmetic regulations. Use the regional selector to see specific delivery times and customs guidance for your area.'
      },
      {
        question: 'How long does shipping take?',
        shortAnswer: 'LATAM: 5-7 days, North America: 3-5 days, Europe: 7-10 days, Asia: 10-14 days.',
        details: 'Standard shipping times from dispatch vary by region. Colombia 3-5 days, Brazil 5-7 days, Mexico 4-6 days, USA/Canada 3-5 days, Europe 7-10 days, Asia 10-14 days. Express options available at checkout.'
      },
      {
        question: 'What if my package arrives damaged?',
        shortAnswer: 'Contact us within 48 hours with photos. We will send a replacement immediately.',
        details: 'If your order arrives damaged or incomplete, email support@slcosmetica.com within 48 hours with your order number and clear photos. We will process a replacement shipment within 1 business day at no additional cost.'
      }
    ]
  },
  {
    id: 'returns',
    title: 'Returns, Refunds & Exchanges',
    icon: <ClockCounterClockwise className="w-5 h-5" />,
    color: 'text-terracotta',
    questions: [
      {
        question: 'What is your return policy?',
        shortAnswer: '30-day return window for unopened products. Opened products eligible if adverse reaction occurs.',
        details: 'You may return unopened products within 30 days of delivery for a full refund. If you experience an adverse reaction, opened products are also eligible. Items must be in original packaging. Refunds process within 5-7 business days after we receive your return.'
      },
      {
        question: 'How do I start a return?',
        shortAnswer: 'Use the Return Flow Diagram below to select your reason and generate a return label.',
        details: 'Choose your return reason: Changed Mind, Ordered Wrong Product, or Allergic Reaction. The system will generate a prepaid return label for eligible regions and provide step-by-step instructions.'
      },
      {
        question: 'When will I see my refund?',
        shortAnswer: '5-7 business days after we receive and inspect your return.',
        details: 'Once your return arrives at our facility, we inspect it within 1-2 business days. Approved refunds are issued to your original payment method and typically appear in 5-7 business days.'
      }
    ]
  },
  {
    id: 'account',
    title: 'Account, Payments & Subscriptions',
    icon: <CreditCard className="w-5 h-5" />,
    color: 'text-accent',
    questions: [
      {
        question: 'How do I manage my subscription?',
        shortAnswer: 'Go to My Subscriptions in your account dashboard. All changes take effect immediately.',
        details: 'Navigate to the header menu and select My Subscriptions. You can pause up to 3 months, skip the next delivery, change frequency to 30/60/90 days, or cancel anytime with no penalties. You will receive a confirmation email for all modifications.'
      },
      {
        question: 'What payment methods are accepted?',
        shortAnswer: 'Credit/debit cards globally. Regional methods include PSE, PIX, OXXO, Efecty, Nequi, and Daviplata.',
        details: 'We accept Visa, Mastercard, and American Express worldwide. Regional payment methods: Colombia offers PSE bank transfer, Efecty cash, Nequi/Daviplata mobile wallet. Brazil offers PIX instant transfer. Mexico offers OXXO cash payment. All transactions are encrypted and PCI-compliant.'
      },
      {
        question: 'How are installments handled?',
        shortAnswer: 'Installment options appear at checkout for eligible regions.',
        details: 'In Colombia, you can split purchases into 3, 6, or 12 monthly installments at checkout with supported cards. Brazil offers PIX for instant payment or card installments. Mexico supports OXXO cash payment voucher valid 3 days.'
      }
    ]
  }
]

const productSupportSections: FAQSection[] = [
  {
    id: 'routine',
    title: 'Routine Builder & Optimization',
    icon: <Cube className="w-5 h-5" />,
    color: 'text-teal-deep',
    questions: [
      {
        question: 'Help me build a routine for my skin concern',
        shortAnswer: 'Use the Routine Builder below to select your primary concern and skin sensitivity level.',
        details: 'Start with one concern at a time. For AGING: The Great Harmonizer AM and The Time Bender PM. For IMPERFECTIONS: The Architect AM and The Naturalist PM. For HYPERPIGMENTATION: The Illuminator AM and The Time Bender PM. Always introduce one new active every 2 weeks to monitor tolerance.'
      },
      {
        question: 'Can I combine multiple protocols?',
        shortAnswer: 'Yes, but phase them in. Start with one protocol, stabilize for 4 weeks, then layer a second.',
        details: 'Combining protocols is effective but requires gradual introduction. Example: Begin with AGING protocol for 4 weeks. Once skin adjusts, add HYPERPIGMENTATION booster The Illuminator AM only. Use the Routine Intensity Meter to ensure you are not overloading actives.'
      },
      {
        question: 'Which products for sensitive skin?',
        shortAnswer: 'Begin with barrier-first formulas: The Great Harmonizer and The Rainmaker. No retinoids initially.',
        details: 'Sensitive skin requires a fortified barrier before introducing actives. Week 1-4: The Great Harmonizer with ceramides and niacinamide plus The Rainmaker with hyaluronic acid. Week 5+: Add The Architect low-dose peptides if tolerance is good.'
      }
    ]
  },
  {
    id: 'reactions',
    title: 'Reaction & Safety Triage',
    icon: <ShieldCheck className="w-5 h-5" />,
    color: 'text-destructive',
    questions: [
      {
        question: 'Is this purging or irritation?',
        shortAnswer: 'Purging is normal with retinoids. Burning or swelling is irritation - stop use.',
        details: 'PURGING: Tiny whiteheads or pustules in areas where you normally break out, appearing 1-2 weeks after starting retinoids or acids. Lasts 4-6 weeks. Continue use if tolerable. IRRITATION: Burning, stinging, widespread redness, hives, or swelling. Stop all actives immediately and use only barrier products.'
      },
      {
        question: 'What if I experience burning or hives?',
        shortAnswer: 'Stop all SL products immediately. Wash face with cool water. Apply plain moisturizer. Seek medical care if swelling worsens.',
        details: 'This indicates a possible allergic reaction or severe sensitivity. Discontinue all SL Cosmetica products. Rinse skin with lukewarm water. Apply a plain, fragrance-free moisturizer. If swelling, difficulty breathing, or systemic symptoms occur, seek emergency medical care. Contact our Product Support team to identify the potential trigger ingredient.'
      },
      {
        question: 'Can I use these with prescriptions or during pregnancy?',
        shortAnswer: 'Always consult your physician before combining with prescriptions or using during pregnancy or nursing.',
        details: 'SL Cosmetica formulas are designed for skin health, but interactions are possible. If you use tretinoin, hydroquinone, or other prescription actives, consult your dermatologist before layering our products. For pregnancy or breastfeeding, we recommend avoiding retinoids and high-dose vitamin C. Always clear with your doctor first.'
      }
    ]
  },
  {
    id: 'ingredients',
    title: 'Ingredient & Product Matching',
    icon: <Atom className="w-5 h-5" />,
    color: 'text-accent',
    questions: [
      {
        question: 'Which products contain fragrance?',
        shortAnswer: 'All SL Cosmetica facial products are fragrance-free. Body care contains natural preservatives only.',
        details: 'Our ANTI-AGING FACIAL CREAM line contains zero synthetic fragrance or essential oils. ANTI-AGING BODY CARE uses naturally derived preservatives but no added scent. HAIR & SCALP CARE contains botanical extracts but no fragrance masking agents.'
      },
      {
        question: 'Which formulas are best for rosacea-prone skin?',
        shortAnswer: 'Look for Barrier-First and CBD-High tags. Recommended: Great Harmonizer, Rainmaker, Preserver.',
        details: 'For compromised barrier conditions like rosacea or eczema-prone skin, prioritize formulas with high CBD for anti-inflammatory effects, ceramides for barrier repair, and zero irritants. Safest picks are The Great Harmonizer with 8% MTRX-CBD, The Rainmaker with hyaluronic acid, and The Preserver with CBD and evening primrose oil.'
      },
      {
        question: 'Where can I see CBD content?',
        shortAnswer: 'Hover over any product card to see CBD percentage and type. All formulas use broad-spectrum CBD with 0% THC.',
        details: 'SL Cosmetica uses MTRX-CBD, a proprietary broad-spectrum cannabidiol extract with 0% THC. FACIAL CREAMS contain 8.0% MTRX-CBD. BODY CARE contains 4.0% MTRX-CBD. HAIR CARE contains 4.0% MTRX-CBD. Lab reports are available on each product page under Clinical Data.'
      }
    ]
  }
]

function HumanSupportButton() {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <motion.button
        animate={{
          width: expanded ? 'auto' : '56px',
          paddingRight: expanded ? '20px' : '0px'
        }}
        className="flex items-center gap-3 h-14 bg-primary text-white rounded-full shadow-xl hover:shadow-2xl transition-shadow overflow-hidden"
      >
        <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
          <ChatCircleDots className="w-6 h-6" />
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="whitespace-nowrap pr-2"
            >
              <p className="text-sm font-semibold">Need a Human?</p>
              <p className="text-xs opacity-90">We are here to help</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  )
}

export function CustomerSupport({ onBack, initialWing = 'home' }: { onBack: () => void; initialWing?: SupportWing }) {
  const [currentWing, setCurrentWing] = useState<SupportWing>(initialWing)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[oklch(0.97_0.005_230)] via-[oklch(0.95_0.01_240)] to-[oklch(0.93_0.015_250)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, oklch(0.50 0.12 230) 0px, transparent 1px, transparent 20px),
            repeating-linear-gradient(90deg, oklch(0.50 0.12 230) 0px, transparent 1px, transparent 20px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="mb-6 gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>

        <AnimatePresence mode="wait">
          {currentWing === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-5xl mx-auto"
            >
              <div className="text-center mb-12">
                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl md:text-5xl font-bold text-slate-dark mb-4"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Support Lab Console
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                  Choose the panel that matches what you need right now. The system guides you step-by-step, and a human can join at any point.
                </motion.p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02, rotateY: 2 }}
                  style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                >
                  <Card
                    className="p-8 cursor-pointer border-2 hover:border-primary/50 hover:shadow-2xl transition-all h-full bg-gradient-to-br from-white to-primary/5"
                    onClick={() => setCurrentWing('customer')}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <ShoppingBag className="w-10 h-10 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-dark" style={{ fontFamily: 'var(--font-serif)' }}>
                        Customer Support
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Orders, shipping, returns, payments, subscriptions
                      </p>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm mt-4">
                        Enter Console <CaretRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02, rotateY: -2 }}
                  style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                >
                  <Card
                    className="p-8 cursor-pointer border-2 hover:border-accent/50 hover:shadow-2xl transition-all h-full bg-gradient-to-br from-white to-accent/5"
                    onClick={() => setCurrentWing('product')}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                        <Flask className="w-10 h-10 text-accent" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-dark" style={{ fontFamily: 'var(--font-serif)' }}>
                        Product Support
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Routine design, reactions, ingredient questions, safety
                      </p>
                      <div className="flex items-center gap-2 text-accent font-medium text-sm mt-4">
                        Enter Console <CaretRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 max-w-3xl mx-auto"
              >
                <Card className="p-8 bg-gradient-to-br from-white to-slate-dark/5 border-slate-dark/10">
                  <h3 className="text-xl font-bold text-slate-dark mb-4 flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Direct Contact Channels
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50">
                      <ChatCircleDots className="w-6 h-6 text-primary mb-2" />
                      <p className="text-sm font-medium text-slate-dark">Live Chat</p>
                      <p className="text-xs text-muted-foreground mt-1">Mon-Fri, 8AM-8PM COT</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50">
                      <EnvelopeSimple className="w-6 h-6 text-accent mb-2" />
                      <p className="text-sm font-medium text-slate-dark">Email</p>
                      <p className="text-xs text-muted-foreground mt-1">support@slcosmetica.com</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-4 rounded-lg bg-background/50">
                      <Phone className="w-6 h-6 text-teal-deep mb-2" />
                      <p className="text-sm font-medium text-slate-dark">Phone</p>
                      <p className="text-xs text-muted-foreground mt-1">+57 1 234 5678</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Average response time: within 24 hours on business days
                  </p>
                </Card>
              </motion.div>
            </motion.div>
          )}

          {currentWing === 'customer' && (
            <motion.div
              key="customer"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <div className="max-w-6xl mx-auto">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentWing('home')}
                  className="mb-6 gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Console
                </Button>

                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-dark mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Customer Support Wing
                  </h1>
                  <p className="text-muted-foreground">
                    Commerce, logistics, and account management
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  {customerSupportSections.map((section) => (
                    <Card
                      key={section.id}
                      className={`p-6 cursor-pointer transition-all ${
                        expandedSection === section.id
                          ? 'border-2 border-primary shadow-xl'
                          : 'border hover:border-primary/30'
                      }`}
                      onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`${section.color}`}>{section.icon}</div>
                        <h3 className="font-semibold text-slate-dark">{section.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        {section.questions.length} common questions
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        {expandedSection === section.id ? 'Collapse' : 'Expand'} <CaretRight className="w-4 h-4" />
                      </div>
                    </Card>
                  ))}
                </div>

                {expandedSection && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid lg:grid-cols-2 gap-6">
                      {customerSupportSections
                        .find(s => s.id === expandedSection)
                        ?.questions.map((q, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Card
                              className={`p-5 cursor-pointer transition-all ${
                                expandedQuestion === `${expandedSection}-${i}`
                                  ? 'border-2 border-primary shadow-lg'
                                  : 'border hover:shadow-md'
                              }`}
                              onClick={() =>
                                setExpandedQuestion(
                                  expandedQuestion === `${expandedSection}-${i}`
                                    ? null
                                    : `${expandedSection}-${i}`
                                )
                              }
                            >
                              <h4 className="font-semibold text-slate-dark mb-2 text-sm">
                                {q.question}
                              </h4>
                              <p className="text-xs text-primary font-medium mb-2">
                                {q.shortAnswer}
                              </p>
                              {expandedQuestion === `${expandedSection}-${i}` && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="mt-3 pt-3 border-t"
                                >
                                  <p className="text-sm text-slate-dark leading-relaxed">
                                    {q.details}
                                  </p>
                                </motion.div>
                              )}
                            </Card>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {currentWing === 'product' && (
            <motion.div
              key="product"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
            >
              <div className="max-w-6xl mx-auto">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentWing('home')}
                  className="mb-6 gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Console
                </Button>

                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-dark mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                    Product Support Wing
                  </h1>
                  <p className="text-muted-foreground">
                    Routine design, skin safety, and ingredient guidance
                  </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 mb-8">
                  {productSupportSections.map((section) => (
                    <Card
                      key={section.id}
                      className={`p-6 cursor-pointer transition-all ${
                        expandedSection === section.id
                          ? 'border-2 border-accent shadow-xl'
                          : 'border hover:border-accent/30'
                      }`}
                      onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`${section.color}`}>{section.icon}</div>
                        <h3 className="font-semibold text-slate-dark">{section.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">
                        {section.questions.length} guidance topics
                      </p>
                      <div className="flex items-center gap-2 text-accent text-sm font-medium">
                        {expandedSection === section.id ? 'Collapse' : 'Expand'} <CaretRight className="w-4 h-4" />
                      </div>
                    </Card>
                  ))}
                </div>

                {expandedSection && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid lg:grid-cols-2 gap-6">
                      {productSupportSections
                        .find(s => s.id === expandedSection)
                        ?.questions.map((q, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <Card
                              className={`p-5 cursor-pointer transition-all ${
                                expandedQuestion === `${expandedSection}-${i}`
                                  ? 'border-2 border-accent shadow-lg'
                                  : 'border hover:shadow-md'
                              }` }
                              onClick={() =>
                                setExpandedQuestion(
                                  expandedQuestion === `${expandedSection}-${i}`
                                    ? null
                                    : `${expandedSection}-${i}`
                                )
                              }
                            >
                              <h4 className="font-semibold text-slate-dark mb-2 text-sm">
                                {q.question}
                              </h4>
                              <p className="text-xs text-accent font-medium mb-2">
                                {q.shortAnswer}
                              </p>
                              {expandedQuestion === `${expandedSection}-${i}` && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="mt-3 pt-3 border-t"
                                >
                                  <p className="text-sm text-slate-dark leading-relaxed">
                                    {q.details}
                                  </p>
                                </motion.div>
                              )}
                            </Card>
                          </motion.div>
                        ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <HumanSupportButton />
    </div>
  )
}
