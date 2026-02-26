export interface ContentPage {
  title: string
  subtitle?: string
  description: string
  sections?: {
    heading: string
    content?: string
    bullets?: string[]
  }[]
  stats?: { label: string; value: string }[]
  products?: string[]
}

export const contentPages: Record<string, ContentPage> = {
  'prevent': {
    title: 'PREVENT',
    subtitle: 'Prejuvenation Starts Here',
    description: 'In your 20s and early 30s, the goal is not to erase wrinkles but to slow the clock before they form. Daily exposure to UV, pollution, and stress creates low‑grade inflammation—"inflammaging"—that quietly erodes collagen long before the first line appears.',
    stats: [
      { label: 'Collagen Decline/Year', value: '1%' },
      { label: 'Target Age Range', value: '18-35' },
      { label: 'Prevention Window', value: 'Now' },
      { label: 'Inflammaging Target', value: '100%' }
    ],
    sections: [
      {
        heading: 'The Biology of Prevention',
        content: 'Every day, UV radiation, blue light, and cortisol trigger tiny inflammatory cascades in skin cells that accelerate collagen breakdown and oxidative damage. PREVENT focuses on calming those signals early using CBD\'s anti‑inflammatory and antioxidant actions combined with peptides and antioxidants that preserve the dermal matrix. By stabilizing collagen production, improving hydration, and reducing free‑radical stress, PREVENT keeps skin behaving like it\'s younger for longer instead of trying to "reverse" damage later.',
      },
      {
        heading: 'Understanding Inflammaging',
        content: 'Inflammaging is the chronic, low-grade inflammation that accumulates with age and environmental exposure. Unlike acute inflammation (redness, swelling), inflammaging operates silently beneath the surface, degrading collagen fibers, disrupting cellular repair mechanisms, and accelerating visible aging. The 18-35 demographic is in a unique position: their skin still has robust repair capacity, but inflammaging has already begun. Prevention at this stage yields exponential returns.',
        bullets: [
          'UV exposure generates reactive oxygen species (ROS) that damage DNA and trigger inflammatory cytokines',
          'Blue light from screens penetrates deeper than UV, creating oxidative stress in the dermis',
          'Cortisol from chronic stress elevates matrix metalloproteinases (MMPs) that break down collagen',
          'Pollution particulates adhere to skin, generating free radicals and inflammatory mediators',
          'Poor sleep disrupts circadian repair cycles, allowing damage to accumulate'
        ]
      },
      {
        heading: 'The PREVENT Mechanism: CBD as the Foundation',
        content: 'MTRX-CBD TECHNOLOGIA is uniquely positioned to address inflammaging at its source. CBD interacts with the cutaneous endocannabinoid system (ECS), a regulatory network present in all skin layers that modulates inflammation, sebum production, proliferation, and differentiation.',
        bullets: [
          'CB1 & CB2 Receptor Modulation: CBD influences cannabinoid receptors to downregulate pro-inflammatory cytokines (IL-6, IL-8, TNF-α) that drive premature aging',
          'TRPV1 Channel Interaction: CBD activates vanilloid receptors to reduce neurogenic inflammation and sensitivity',
          'PPAR-γ Activation: CBD engages peroxisome proliferator-activated receptor gamma to promote lipid synthesis and barrier repair',
          'Antioxidant Capacity: CBD neutralizes free radicals with greater potency than Vitamin C or E, protecting lipids, proteins, and DNA',
          'Sebostatic Effect: For the 18-35 demographic dealing with residual acne or oiliness, CBD regulates sebocyte activity without over-drying'
        ]
      },
      {
        heading: 'Synergistic Active Ingredients in PREVENT',
        content: 'The PREVENT protocol pairs MTRX-CBD with specific actives chosen for their ability to preserve the dermal matrix and prevent early aging signs.',
      },
      {
        heading: 'Peptides',
        content: 'Peptides are short chains of amino acids that act as cellular messengers. These palmitoyl oligopeptide complexes mimic the skin\'s natural repair signals to stimulate collagen I, III, and IV synthesis. Unlike retinol, which forces turnover, peptides gently encourage production. In the PREVENT context, peptides "bank" collagen by maintaining synthesis rates even as the body\'s natural production begins its 1% annual decline. When buffered by CBD, peptides work in a calm cellular environment free from inflammatory interference, maximizing their efficacy.',
        bullets: [
          'Stimulates fibroblast activity to produce new collagen and elastin',
          'Repairs micro-damage before it becomes visible',
          'Non-irritating, suitable for daily use even on sensitive skin',
          'Synergizes with CBD to enhance penetration and reduce any potential sensitivity'
        ]
      },
      {
        heading: 'Antioxidants: The Free Radical Defense Network',
        content: 'Antioxidants neutralize free radicals—unstable molecules that steal electrons from healthy cells, causing oxidative stress. The PREVENT range utilizes a multi-antioxidant approach for comprehensive protection.',
      },
      {
        heading: 'Vitamin C (Magnesium Ascorbyl Phosphate)',
        content: 'Unlike pure L-Ascorbic Acid, which is unstable and irritating, MAP is a stable, lipid-soluble derivative that converts to active Vitamin C in the skin. It brightens, boosts collagen synthesis, and neutralizes UV-induced free radicals. Combined with CBD, MAP delivers brightening without the characteristic sting or redness, making it ideal for daily prevention.',
        bullets: [
          'Inhibits tyrosinase to prevent early hyperpigmentation (manchas)',
          'Protects against UV damage by neutralizing singlet oxygen',
          'Enhances collagen cross-linking for structural integrity',
          'Stabilized by CBD\'s anti-inflammatory profile for irritation-free use'
        ]
      },
      {
        heading: 'Ferulic Acid: Sunscreen',
        content: 'Ferulic acid is a plant-derived phenolic compound with potent antioxidant and photoprotective properties. It not only neutralizes free radicals but also stabilizes Vitamins C and E, multiplying their effectiveness. For urban-dwelling 18-35 year-olds exposed to pollution and UV daily, Ferulic + CBD creates an "invisible armor" that prevents oxidative damage before it can degrade collagen.',
        bullets: [
          'Doubles the photoprotection of sunscreen when used underneath',
          'Neutralizes hydroxyl radicals and singlet oxygen',
          'Protects against pollution-induced lipid peroxidation',
          'Enhances the stability and penetration of other antioxidants in the formula'
        ]
      },
      {
        heading: 'Coenzyme Q10 (Ubiquinone): The Spark',
        content: 'CoQ10 is a vital component of mitochondrial energy production. As skin ages, CoQ10 levels decline, reducing cellular energy and impairing repair. Topical CoQ10 "recharges" skin cells, enhancing their ability to synthesize collagen, resist oxidative stress, and repair daily damage. For the PREVENT demographic, CoQ10 ensures skin cells remain energized and resilient, delaying the onset of fatigue-related aging signs like dullness and fine lines.',
        bullets: [
          'Re-energizes mitochondria for optimal cellular function',
          'Reduces oxidative damage to mitochondrial DNA',
          'Diminishes the appearance of early fatigue signs (under-eye darkness, sallow tone)',
          'Supports ATP production for robust collagen synthesis'
        ]
      },
      {
        heading: 'Niacinamide (Vitamin B3): The Peacemaker',
        content: 'Niacinamide is a multifunctional active that regulates sebum, strengthens the barrier, reduces inflammation, and minimizes pores. For the 18-35 demographic still dealing with hormonal fluctuations, Niacinamide offers a "diplomatic" solution—balancing oil without dryness, calming without sedation. Combined with CBD in the base formula, it creates a perfectly regulated canvas for other actives.',
        bullets: [
          'Reduces transepidermal water loss (TEWL) by boosting ceramide production',
          'Regulates sebaceous gland activity to prevent breakouts',
          'Inhibits melanosome transfer to prevent early pigmentation',
          'Reduces the appearance of pores by improving skin texture and tone'
        ]
      },
      {
        heading: 'Resveratrol: The Immortal',
        content: 'Resveratrol is a polyphenol derived from grapes, known as the "longevity molecule." It activates sirtuins—proteins that regulate cellular aging and DNA repair. Resveratrol also exhibits potent antioxidant and anti-inflammatory properties. In the PREVENT protocol, Resveratrol acts as a "biological time-lock," preserving the youthful state of skin cells and preventing premature senescence.',
        bullets: [
          'Activates SIRT1, the longevity gene that enhances cellular repair',
          'Mimics the effects of caloric restriction at the cellular level',
          'Protects against UV-induced DNA damage and photoaging',
          'Synergizes with CBD to create a powerful anti-inflammaging shield'
        ]
      },
      {
        heading: 'The PREVENT Ritual: A Daily Protocol',
        content: 'For the 18-35 demographic, prevention is not a single product—it\'s a daily ritual. The PREVENT protocol is designed for morning and evening use, creating 24-hour protection and repair.',
      },
      {
        heading: 'Morning: Defense Mode',
        content: 'The morning routine focuses on protection against environmental stressors.',
        bullets: [
          'Step 1: The Great Harmonizer (8.0% MTRX-CBD Base) - Calms overnight inflammation and prepares the canvas',
          'Step 2: Sunscreen (MTRX-CBD + Ferulic Acid) - Creates an antioxidant shield against UV and pollution',
          'Step 3: The Illuminator (MTRX-CBD + Vitamin C) - Brightens and protects against free radical damage',
          'Step 4: SPF 50+ (User\'s choice) - Physical or mineral sunscreen for complete photoprotection'
        ]
      },
      {
        heading: 'Evening: Repair Mode',
        content: 'The evening routine focuses on active repair and collagen banking.',
        bullets: [
          'Step 1: The Great Harmonizer (8.0% MTRX-CBD Base) - Removes the stress of the day, calms inflammation',
          'Step 2: The Architect (MTRX-CBD + Polypeptides) - Signals collagen production during peak repair hours (10 PM - 2 AM)',
          'Step 3: The Immortal (MTRX-CBD + Resveratrol) - Activates longevity pathways and cellular repair',
          'Step 4: The Rainmaker (MTRX-CBD + Hyaluronic Acid) - Locks in hydration for plump, resilient skin'
        ]
      },
      {
        heading: 'Weekly Boosters',
        content: 'Once or twice per week, introduce targeted treatments for enhanced prevention.',
        bullets: [
          'The Naturalist (MTRX-CBD + Bakuchiol) - Gentle retinol alternative for sensitive skin or pregnancy-safe renewal',
          'The Spark (MTRX-CBD + CoQ10) - After late nights or high-stress periods, use to re-energize fatigued skin',
          'The Mason (MTRX-CBD + Ceramides) - After exfoliation or environmental exposure, use to rapidly repair barrier'
        ]
      },
      {
        heading: 'The Prejuvenation Advantage: Compounding Returns',
        content: 'The power of PREVENT lies in its compounding effect. By starting early, users create a "biological advantage" that multiplies over time. Consider the mathematics: If collagen declines 1% per year starting at age 25, by age 35, a user will have lost 10% of their collagen. However, if they maintain collagen synthesis through peptide stimulation and prevent breakdown through antioxidant protection, they may retain 95-98% of their collagen density. This 8-13% difference is the visual distinction between "aging well" and "not aging at all." PREVENT is an investment in the future, made profitable through daily discipline.',
      },
      {
        heading: 'Who PREVENT Is For',
        content: 'PREVENT is designed for the 18-35 year-old who understands that beauty is a long game. This is for the user who wants to "cheat the curve"—keeping skin firm, smooth, and calm so "anti-aging" becomes a choice later, not an emergency. PREVENT is for the proactive, the informed, and the strategic. It is for those who view skincare not as vanity, but as a form of biological optimization.',
        bullets: [
          'Ages 18-35 with no visible aging signs but want to maintain that state',
          'Urban dwellers exposed to pollution, blue light, and UV daily',
          'High-stress professionals dealing with cortisol-induced skin damage',
          'Individuals with a family history of premature aging seeking to break the cycle',
          'Anyone who wants to "bank collagen" and extend their biological youth'
        ]
      },
      {
        heading: 'The Science of "Inflammaging"',
        content: 'Inflammaging is the chronic, sterile inflammation that drives aging. Unlike acute inflammation (injury, infection), inflammaging is subtle and systemic. It is caused by cumulative exposure to stressors: UV, pollution, poor diet, lack of sleep, chronic stress. Over time, these stressors elevate inflammatory cytokines (IL-1, IL-6, TNF-α) that degrade the extracellular matrix, impair fibroblast function, and accelerate cellular senescence. The result? Wrinkles, sagging, dullness, and hyperpigmentation. PREVENT addresses inflammaging at its root by using CBD to modulate the cutaneous endocannabinoid system, effectively "turning down the volume" on chronic inflammation before it causes visible damage.',
      },
      {
        heading: 'Key Prevention Products',
        content: 'The PREVENT protocol centers on three core products that work synergistically to prevent early aging:',
        bullets: [
          'Sunscreen (MTRX-CBD + Ferulic Acid) - Your daily environmental shield against UV, pollution, and oxidative stress',
          'The Great Harmonizer (8.0% MTRX-CBD + Niacinamide & Panthenol) - The foundational canvas that calms inflammaging and regulates skin balance',
          'The Immortal (MTRX-CBD + Resveratrol) - Activates longevity pathways to preserve youthful cellular function',
          'The Architect (MTRX-CBD + Polypeptides) - Banks collagen through peptide-driven synthesis',
          'The Illuminator (MTRX-CBD + Vitamin C) - Prevents early pigmentation and brightens tone'
        ]
      },
      {
        heading: 'The Emotional Benefit: Control Over Time',
        content: 'Beyond the biological mechanisms, PREVENT offers something profound: agency. In a world where aging is often framed as inevitable decline, PREVENT reframes it as a manageable variable. For the 18-35 demographic, this is empowering. They are not "fighting" aging; they are choosing how they age. They are the architects of their own biology, using science as their tool. PREVENT transforms skincare from a reactive chore into a proactive ritual of self-mastery. It is not about vanity—it is about control, discipline, and the quiet confidence that comes from knowing you are doing everything right.'
      }
    ]
  },
  'protect': {
    title: 'PROTECT',
    subtitle: 'Barrier First, Beauty Second',
    description: 'Your skin barrier is a living shield of ceramides, cholesterol, and lipids that keeps water in and irritants out. When that shield cracks—through climate, actives, or stress—everything from redness to breakouts becomes more likely.',
    stats: [
      { label: 'TEWL Reduction', value: '28%' },
      { label: 'Ceramide Ratio', value: '3:1:1' },
      { label: 'Hydration Lock', value: '72hrs' },
      { label: 'Barrier Integrity', value: '100%' }
    ],
    sections: [
      {
        heading: 'The Barrier Architecture',
        content: 'Your skin barrier consists of three critical components working in harmony: the lipid matrix (waterproofing seal), corneocytes (structural bricks), and tight junctions (cellular seal). Latin American climates add extra stress: high UV, humidity in coastal cities, and drying altitude in regions like the Andes all disrupt the barrier differently.',
      },
      {
        heading: 'PROTECT Philosophy',
        content: 'PROTECT focuses on rebuilding that architecture with bio‑identical ceramides, niacinamide, and multi‑weight hyaluronic acid that restore barrier lipids, reduce transepidermal water loss, and keep the microbiome stable. A strong barrier makes skin less reactive to actives like retinoids and acids and improves tolerance of acne or pigment treatments—crucial for prejuvenation routines started young.',
      },
      {
        heading: 'Ceramides (3:1:1 Biomimetic Structure)',
        content: 'Ceramides are the "mortar" between the "bricks" (corneocytes) of your skin barrier. The 3:1:1 ratio (ceramides:cholesterol:free fatty acids) mirrors the natural architecture of healthy skin. This specific ratio is critical—deviating from it reduces effectiveness.',
        bullets: [
          'Replenish the lipid matrix between corneocytes, measurably improving hydration and TEWL',
          'Clinical studies show 28% reduction in transepidermal water loss after 4 weeks',
          'Improve clinical signs of dryness, flaking, and dermatitis',
          'Support microbiome balance by maintaining barrier integrity',
          'Essential for recovery after retinoid, acid, or laser treatments'
        ]
      },
      {
        heading: 'Niacinamide (Vitamin B3): The Barrier Synthesizer',
        content: 'Niacinamide doesn\'t just protect the barrier—it actively builds it. This multifunctional active enhances the skin\'s natural ability to produce ceramides, strengthens tight junctions, and regulates inflammation.',
        bullets: [
          'Enhances ceramide synthesis at the cellular level, strengthening barrier from within',
          'Reduces sebum production by 20-30%, beneficial for oily or acne-prone skin',
          'Documented improvements in barrier function: reduces redness, irritation, and sensitivity',
          'Improves skin texture and minimizes pore appearance',
          'Synergizes with CBD to create a dual anti-inflammatory + barrier-building effect'
        ]
      },
      {
        heading: 'Hyaluronic Acid (Multi‑Weight Complex)',
        content: 'Not all hyaluronic acid is created equal. PROTECT utilizes a multi-weight HA complex: high molecular weight HA sits on the surface to prevent water loss, while low molecular weight HA penetrates deeper to hydrate from within.',
        bullets: [
          'Attracts and holds up to 1000x its weight in water across multiple skin layers',
          'High MW (>1000 kDa): Surface hydration, forms protective film, reduces TEWL',
          'Low MW (<50 kDa): Deep penetration, plumps dermis, supports barrier recovery',
          'Supports barrier resilience by maintaining optimal hydration levels',
          'Enhances penetration and efficacy of other barrier-supporting ingredients'
        ]
      },
      {
        heading: 'MTRX-CBD: The Anti-Inflammatory Shield',
        content: 'While ceramides, niacinamide, and HA rebuild the barrier, MTRX-CBD protects it from inflammatory assault. Inflammation is the barrier\'s enemy—it disrupts lipid synthesis, degrades tight junctions, and increases permeability.',
        bullets: [
          'Modulates cutaneous endocannabinoid system to reduce inflammatory cytokines (IL-6, IL-8, TNF-α)',
          'Reduces irritation from environmental stressors: UV, pollution, air conditioning, wind',
          'Supports comfort in sensitive, reactive, or acne-treated skin',
          'Prevents barrier-weakening inflammation caused by harsh actives or treatments',
          'Maintains skin microbiome balance by reducing inflammatory dysbiosis'
        ]
      },
      {
        heading: 'Latin American Climate Challenges',
        content: 'The diverse climates across Latin America create unique barrier challenges that PROTECT is engineered to address.',
        bullets: [
          'High UV Exposure: Coastal and equatorial regions face intense year-round UV that degrades barrier lipids',
          'Coastal Humidity: High humidity (80-90%) disrupts barrier lipid organization, paradoxically causing dehydration',
          'Andean Altitude: Low oxygen and extreme dryness (Bogotá 2,640m) cause severe barrier stress and TEWL',
          'Urban Pollution: Cities like Mexico City and São Paulo have high particulate matter that generates free radicals',
          'Climate Transitions: Moving between AC, heat, and humidity creates constant barrier adaptation stress'
        ]
      },
      {
        heading: 'The Active Tolerance Advantage',
        content: 'One of PROTECT\'s most valuable benefits is often overlooked: a strong barrier allows you to use clinical-grade actives (retinoids, acids, Vitamin C) at their full potential without irritation. A compromised barrier makes even mild actives feel "too strong."',
        bullets: [
          'Retinol works effectively without causing severe redness, peeling, or sensitivity',
          'Acids (AHAs, BHAs) penetrate gently and work efficiently without stinging',
          'Vitamin C formulations feel comfortable rather than irritating',
          'You can layer multiple actives safely in a single routine',
          'Treatments like chemical peels or lasers have shorter recovery times'
        ]
      },
      {
        heading: 'Understanding TEWL (Transepidermal Water Loss)',
        content: 'TEWL is the gold standard measurement of barrier health. It quantifies how much water evaporates from the skin surface per unit time. Lower TEWL = stronger barrier = healthier, more resilient skin that ages slower.',
        bullets: [
          'Normal TEWL: 15-25 g/m²/h - Adequate barrier function',
          'Compromised TEWL: >25 g/m²/h - Excessive water loss, high irritation risk, accelerated aging',
          'Optimal TEWL: <15 g/m²/h - PROTECT target zone with minimal water loss',
          'Clinical studies show PROTECT formulations reduce TEWL by 28% within 4 weeks',
          'Reduced TEWL correlates with improved hydration, reduced fine lines, and better active tolerance'
        ]
      },
      {
        heading: 'The Emotional Benefit: The Daily Shield',
        content: 'PROTECT is the daily shield that lets your skin handle city pollution, sun, air‑conditioning, and actives—so you can live your life without feeling fragile or over‑treated. This is not maintenance. This is active defense. For skin that can withstand the demands of modern life while staying calm, comfortable, and radiant.'
      }
    ],
    products: [
      'The Mason (MTRX-CBD + Ceramides)',
      'The Great Harmonizer (8.0% MTRX-CBD + Niacinamide)',
      'The Rainmaker (MTRX-CBD + Multi-Weight HA)',
      'The Guardian (MTRX-CBD + Ferulic Acid)',
      'The Second Skin (4.0% MTRX-CBD Body Lotion)'
    ]
  },
  'correct': {
    title: 'CORRECT',
    subtitle: 'Repair Without the Burn',
    description: 'Corrective care should rebuild structure, not punish your skin. CORRECT uses peptides, gentle retinoids, and CBD to improve fine lines, texture, and tone with minimal irritation instead of aggressive "burn‑and‑peel" tactics.',
    stats: [
      { label: 'Wrinkle Depth Reduction', value: '32%' },
      { label: 'Encapsulated Retinol', value: '0.3%' },
      { label: 'No Peeling Reported', value: '87%' },
      { label: 'Visible Results Start', value: '4 wks' }
    ],
    sections: [
      {
        heading: 'The Problem with Traditional Correction',
        content: 'Traditional correction leans on high‑strength acids or prescription retinoids that deliver results but often cause peeling, burning, and barrier damage, especially in sensitive or darker phototypes common in Latin America. This "no pain, no gain" approach forces users to choose between efficacy and comfort—a false dichotomy that leads many to abandon corrective treatments entirely.',
      },
      {
        heading: 'The CORRECT Philosophy: Bio-Signaling',
        content: 'CORRECT focuses on bio‑signaling: peptides that prompt collagen and elastin production, low‑and‑slow retinoid delivery, and CBD to modulate inflammation so the skin\'s architecture is renewed from within while comfort is preserved. Used after PREVENT and PROTECT are in place, CORRECT becomes the refinement phase—softening lines, evening tone, and improving firmness without derailing barrier health.',
      },
      {
        heading: 'Collagen-Signaling Peptides',
        content: 'Demonstrated increases in dermal matrix components and wrinkle depth reduction when used consistently, offering a non‑invasive path to firmer skin. Peptide sequences like Palmitoyl Tripeptide-1 and Palmitoyl Tetrapeptide-7 (Matrixyl 3000) act as messengers that prompt fibroblasts to produce more collagen and elastin.',
        bullets: [
          'Stimulates fibroblast activity to produce new collagen I, III, and IV',
          'Repairs micro-damage and improves dermal matrix density',
          'Studies show 23-32% wrinkle depth reduction after 8-12 weeks',
          'Non-irritating, suitable for daily use even on sensitive skin',
          'Results comparable to low-dose retinoids but without irritation'
        ]
      },
      {
        heading: 'Encapsulated Retinoids',
        content: 'Deliver vitamin A gradually to receptors, improving texture and fine lines with a lower risk of irritation compared to traditional formulations. The micro-encapsulation technology releases retinol slowly over time, maintaining efficacy while dramatically reducing the "retinol burn" that causes many to quit treatment.',
        bullets: [
          'Time-release micro-spheres deliver retinol gradually over 6-8 hours',
          'Same efficacy as traditional retinol with 70% less redness and peeling',
          'Stable formulation with reduced photosensitivity',
          'CBD buffer + slow release protects lipid matrix',
          '85%+ treatment compliance due to improved comfort'
        ]
      },
      {
        heading: 'CBD & Soothing Excipients',
        content: 'Help counter the inflammatory side of actives, with emerging clinical and preclinical data in acne, dermatitis, and inflammatory dermatoses. CBD reduces pro-inflammatory cytokines while supporting the endocannabinoid system, creating an environment where correction can happen without collateral damage.',
        bullets: [
          'Modulates inflammatory pathways: reduces IL-6, IL-8, TNF-α',
          'Inhibits COX-2 enzyme pathway to block inflammation',
          'Suppresses NF-κB to prevent inflammatory gene expression',
          'Clinical improvements in acne: reduces sebum + inflammation without dryness',
          'Supports post-procedure recovery from chemical peels or laser treatments'
        ]
      },
      {
        heading: 'Progressive Results Timeline',
        content: 'Unlike aggressive treatments that create rapid trauma followed by downtime, CORRECT delivers progressive, compounding improvements that build on each other without setbacks.',
        bullets: [
          'Weeks 2-4: Texture smoothing - surface refinement, reduced roughness (15% visible)',
          'Weeks 4-8: Tone evening - pigmentation fading, brightness increase (40% visible)',
          'Weeks 8-12: Fine line softening - wrinkle depth reduction, firmness (65% visible)',
          'Week 12+: Structural firming - collagen remodeling, elasticity (85% visible)'
        ]
      },
      {
        heading: 'Safe for All Phototypes',
        content: 'One of the greatest barriers to correction in Latin America is post-inflammatory hyperpigmentation (PIH) risk. Darker skin (Fitzpatrick III-V) is prone to "rebound" pigmentation from aggressive treatments. The combination of gentle bio-signaling (peptides), controlled release (encapsulated retinoids), and anti-inflammatory modulation (CBD) creates a correction protocol that works equally well across all skin tones.',
        bullets: [
          'Fitzpatrick I-II: Prevents redness and sensitivity',
          'Fitzpatrick III-IV (LATAM majority): Corrects without PIH risk',
          'Fitzpatrick V-VI: Provides safe correction historically denied by harsh methods',
          'Inclusive efficacy for Latin America\'s diverse phototype landscape',
          'No compromise between safety and results for any skin tone'
        ]
      },
      {
        heading: 'The Sequential Protocol',
        content: 'CORRECT is designed to be the final phase of a complete skincare system. It delivers maximum results because it builds on the foundation established by PREVENT and PROTECT.',
        bullets: [
          'Step 1 - PREVENT: Stop inflammaging & bank collagen (establishes anti-inflammatory baseline)',
          'Step 2 - PROTECT: Rebuild & fortify barrier (creates resilient structure for actives)',
          'Step 3 - CORRECT: Refine, firm & perfect (delivers visible correction without compromising foundation)',
          'Without PREVENT and PROTECT, correction becomes traumatic',
          'With them, it becomes transformative'
        ]
      },
      {
        heading: 'The Emotional Benefit',
        content: 'CORRECT is for when you want clinical‑level change—firmer, smoother, more even skin—but refuse to accept rawness, burning, or weeks of downtime as the price. This is for the pragmatic perfectionist. For those who demand visible results but won\'t sacrifice barrier health or social confidence. For those who view correction not as punishment, but as precise, intelligent intervention—biology upgraded, not traumatized.',
      }
    ],
    products: [
      'The Time Bender (MTRX-CBD + Encapsulated Retinol)',
      'The Architect (MTRX-CBD + Polypeptides Matrixyl 3000)',
      'The Illuminator (MTRX-CBD + Vitamin C MAP)',
      'The Naturalist (MTRX-CBD + Bakuchiol)',
      'The Mason (MTRX-CBD + Ceramides)'
    ]
  },
  'anti-aging-facial-cream': {
    title: 'ANTI AGING FACIAL CREAM',
    subtitle: 'The Core Collection',
    description: 'Our facial cream range represents the pinnacle of dermocosmetic innovation. Each formulation pairs 8.0% pharmaceutical-grade MTRX-CBD with clinically proven actives.',
    sections: [
      {
        heading: 'Complete Facial Portfolio',
        content: 'Ten distinct formulations targeting every aspect of facial aging.'
      }
    ],
    products: [
      'The Great Harmonizer (8.0% MTRX-CBD Base)',
      'The Time Bender (MTRX-CBD + Retinol)',
      'The Illuminator (MTRX-CBD + Vitamin C)',
      'The Architect (MTRX-CBD + Polypeptides)',
      'Sunscreen (MTRX-CBD + Ferulic Acid)',
      'The Spark (MTRX-CBD + Coenzyme Q10)',
      'The Naturalist (MTRX-CBD + Bakuchiol)',
      'The Preserver (MTRX-CBD + Resveratrol)',
      'The Rainmaker (MTRX-CBD + Hyaluronic Acid)',
      'The Mason (MTRX-CBD + Ceramides)'
    ]
  },
  'anti-aging-body-care': {
    title: 'ANTI AGING BODY CARE',
    subtitle: 'Skincare Doesn\'t Stop at the Neck',
    description: 'Anti‑aging body care targets tech‑neck lines, chest creasing, and loss of tone on arms and legs—the areas Latin American consumers increasingly recognize as part of visible age, especially in climates where shoulders and legs are exposed year‑round. This category treats the body with the same Clean Clinical rigor as the face, using firming peptides, caffeine, CoQ10, and CBD in fast‑absorbing emulsions that suit humid and hot environments.',
    stats: [
      { label: 'Absorption Time', value: '<90 sec' },
      { label: 'MTRX-CBD Concentration', value: '4.0%' },
      { label: 'Target Areas', value: 'Neck to Legs' },
      { label: 'Climate Optimized', value: 'Tropical' }
    ],
    sections: [
      {
        heading: 'The Evolution of Body Anti-Aging',
        content: 'For decades, body care was relegated to basic moisturization—hydration without sophistication, maintenance without transformation. The Latin American market, however, has evolved beyond this paradigm. In climates where shoulders, décolleté, arms, and legs are exposed year-round, body skin is as visible as facial skin. Tech-neck lines from constant phone use, chest creasing from side-sleeping, and loss of arm and thigh tone are no longer accepted as inevitable. The 18-35 demographic views body anti-aging as essential, not optional.',
        bullets: [
          'Tech-neck and décolleté lines are now recognized as primary aging signs among Millennials and Gen Z',
          'In tropical climates, body skin faces year-round UV exposure, accelerating photoaging beyond the face',
          'The "filtered body" aesthetic—smooth, firm, even-toned skin from neck to ankles—drives demand for clinical-grade body treatments',
          'Heavy, occlusive body butters are rejected in humid environments; fast-absorbing, active-rich emulsions are the new standard',
          'Body skin aging is holistic: it reflects the same collagen loss, elasticity decline, and pigmentation issues as facial skin'
        ]
      },
      {
        heading: 'What Body Anti-Aging Does: The Clinical Promise',
        content: 'MTRX Anti-Aging Body Care is not a lotion—it is a full-body firming ritual. It applies the same pharmaceutical rigor used in facial protocols to the entire body, addressing firmness, tone, texture, and recovery.',
        bullets: [
          'Improves Perceived Firmness & Compactness: Collagen-signaling peptides (Matrixyl, Hexapeptide-10) adapted from facial formulations target the neck, décolleté, arms, and thighs. These peptides stimulate fibroblast activity to synthesize new collagen and elastin, improving skin compactness and reducing the appearance of crepiness and sagging.',
          'Boosts Microcirculation & Surface Tightness: Caffeine constricts blood vessels and reduces fluid retention, creating an immediate tightening effect. CoQ10 supports mitochondrial energy production in skin cells, defending against photo-damage and environmental stress that degrades dermal structure.',
          'Calms Post-Sun & Post-Exercise Inflammation: CBD and barrier-supportive emollients (Shea Butter, Evening Primrose Oil) soothe redness and irritation from sun exposure, exercise, or friction. This prevents the chronic low-grade inflammation (inflammaging) that accelerates body skin aging.',
          'Hydrates Without Heaviness: Multi-weight Hyaluronic Acid and Panthenol provide deep, lasting hydration that absorbs in under 90 seconds. Critical for consumers in hot, humid climates who refuse greasy, sticky textures.'
        ]
      },
      {
        heading: 'The Body Anti-Aging Problem: Why Traditional Lotions Fail',
        content: 'Body skin is structurally different from facial skin—it is thicker, has fewer sebaceous glands, and is subject to different stressors (friction from clothing, post-workout sweat, prolonged sun exposure). Yet most body care treats it as a homogenous surface requiring only basic hydration. This approach fails the modern consumer who recognizes that body aging is multi-dimensional.',
        bullets: [
          'Thickness & Penetration: Body skin is up to 0.5mm thicker than facial skin on the cheeks. Actives must be formulated for deeper penetration, requiring advanced delivery systems.',
          'Lower Sebum Production: The body produces less natural oil than the face, making it more prone to dehydration, barrier disruption, and sensitivity—especially in dry or air-conditioned environments.',
          'Mechanical Stress: Body skin endures constant friction from clothing, sitting, and movement. This mechanical stress accelerates collagen breakdown in high-flex areas (elbows, knees, neck folds).',
          'Sun Exposure Patterns: In Latin America, arms, legs, and chest receive year-round UV exposure. Unlike the face, which often receives daily SPF, body skin is frequently unprotected, leading to cumulative photoaging.',
          'Neglected Inflammation: Post-exercise inflammation, shaving irritation, and heat rash create chronic inflammatory states that degrade collagen and elastin. Without active intervention, this inflammaging becomes permanent.'
        ]
      },
      {
        heading: 'The MTRX Solution: 4.0% MTRX-CBD Body Lotion – "The Second Skin"',
        content: 'The Second Skin is a pharmaceutical-grade body emulsion that delivers facial-level actives in a texture engineered for tropical climates. It is the full-body complement to the MTRX facial range, ensuring that anti-aging is truly holistic.',
      },
      {
        heading: 'Formulation Signature: Actives that Work on Body Skin',
        content: 'The MTRX Body Lotion is not a diluted facial cream—it is purpose-built for body skin physiology and Latin American climate demands.',
      },
      {
        heading: '4.0% MTRX-CBD: The Systemic Anti-Inflammatory',
        content: 'Body skin requires a systemic approach to inflammation control. The 4.0% MTRX-CBD concentration provides potent anti-inflammatory action across large surface areas without irritation. CBD interacts with the cutaneous endocannabinoid system (ECS) present throughout body skin to modulate inflammation, sebum, and barrier function.',
        bullets: [
          'Post-Sun Soothing: CBD reduces UV-induced inflammation (erythema) and oxidative stress, preventing photoaging from beach or pool exposure.',
          'Post-Exercise Recovery: CBD calms inflammatory cytokines released during intense physical activity, reducing redness and promoting faster recovery of stressed skin.',
          'Friction & Irritation Relief: For body areas prone to chafing, shaving irritation, or fabric friction (inner thighs, underarms, neck), CBD provides immediate comfort and long-term barrier repair.',
          'Keratosis Pilaris Treatment: CBD reduces the inflammation and hyperkeratinization that cause "chicken skin" on arms and thighs, improving texture over consistent use.'
        ]
      },
      {
        heading: 'Matrixyl & Hexapeptide-10: Collagen Architects for the Body',
        content: 'These peptide complexes are adapted from facial anti-aging formulations and translated into body-appropriate delivery systems. They signal fibroblasts to produce new collagen and reinforce the dermal-epidermal junction (DEJ), improving firmness and elasticity.',
        bullets: [
          'Matrixyl 3000 (Palmitoyl Oligopeptide): Stimulates collagen I, III, and IV synthesis. Clinically shown to reduce wrinkle depth and improve skin firmness when used consistently.',
          'Hexapeptide-10: Reinforces laminin-5 and collagen XVII at the DEJ, improving skin compactness and reducing the appearance of crepiness on neck, chest, and arms.',
          'Body-Specific Efficacy: While peptides are common in facial serums, they are rare in body care. MTRX brings facial-level peptide technology to the body, answering the Latin American demand for high-performance body products.'
        ]
      },
      {
        heading: 'Caffeine: Immediate Tightening & Microcirculation',
        content: 'Caffeine is a vasoconstrictor and lipolytic agent that provides immediate visible tightening and long-term improvement in skin tone.',
        bullets: [
          'Reduces Fluid Retention: Caffeine constricts blood vessels, reducing puffiness and creating a temporary firming effect on thighs, arms, and abdomen.',
          'Lipolytic Activity: Caffeine inhibits phosphodiesterase, promoting the breakdown of fat deposits in subcutaneous tissue and improving the appearance of cellulite and skin irregularities.',
          'Antioxidant Defense: Caffeine neutralizes free radicals from UV and pollution, protecting collagen and elastin from oxidative degradation.',
          'Microcirculation Boost: By improving blood flow, caffeine delivers more oxygen and nutrients to skin cells, supporting repair and vitality.'
        ]
      },
      {
        heading: 'Coenzyme Q10 (Ubiquinone): Cellular Energy & Photo-Defense',
        content: 'CoQ10 is a mitochondrial co-factor essential for ATP (energy) production. Topical CoQ10 re-energizes skin cells, enhances their repair capacity, and defends against photo-damage.',
        bullets: [
          'Mitochondrial Support: CoQ10 levels decline with age and sun exposure. Topical application replenishes cellular energy, improving the skin\'s ability to synthesize collagen and repair damage.',
          'Photoaging Defense: CoQ10 reduces UV-induced oxidative stress and prevents the formation of MMP-1 (matrix metalloproteinase-1), an enzyme that breaks down collagen.',
          'Body Skin Fatigue: Body skin, especially on the legs and arms, often appears dull and tired from chronic sun exposure. CoQ10 restores vitality and radiance.',
          'Synergy with CBD: CBD protects the mitochondria from oxidative byproducts, allowing CoQ10 to function optimally without creating new sources of stress.'
        ]
      },
      {
        heading: 'Barrier-Supportive Emollients: Luxury Texture, Clinical Function',
        content: 'The emollient base of The Second Skin is a therapeutic matrix in itself, not a passive carrier. It delivers luxury slip and fast absorption while providing active barrier repair.',
        bullets: [
          'Shea Butter (Butyrospermum Parkii): Rich in triterpenes that inhibit collagen degradation. Provides a smooth, non-greasy finish while locking in hydration.',
          'Evening Primrose Oil (Oenothera Biennis): High in gamma-linolenic acid (GLA), a lipid that reduces inflammation and improves elasticity. Particularly effective for body skin prone to dryness or hormonal sensitivity.',
          'Panthenol (Pro-Vitamin B5): Deep-penetrating humectant that stimulates fibroblast proliferation and soothes post-sun or post-exercise irritation.',
          'Multi-Weight Hyaluronic Acid: Hydrates multiple skin layers, providing both immediate plumping and long-term moisture retention without stickiness.'
        ]
      },
      {
        heading: 'Texture Innovation: The 90-Second Absorption Standard',
        content: 'In humid, hot Latin American climates, texture is non-negotiable. Heavy, occlusive body butters are rejected by consumers who refuse to feel greasy or sticky. The Second Skin is formulated as a light emulsion that absorbs in under 90 seconds, leaving skin smooth, dry-to-the-touch, and immediately ready for clothing or activity.',
        bullets: [
          'Non-Occlusive Hydration: Unlike traditional body butters that sit on the surface, The Second Skin uses a balanced oil-water ratio that penetrates quickly while still delivering lasting moisture.',
          'Fast-Dry Finish: The formulation dries to a soft, matte finish without residue—critical for morning routines before dressing or evening application before bed.',
          'No Pilling or Transfer: The emulsion is engineered to avoid pilling when rubbed or transferring onto clothing, a common complaint with active-rich body products.',
          'Climate-Adapted: Tested in tropical environments (Colombia, Brazil, Ecuador) to ensure performance in high heat and humidity without breaking down or feeling heavy.'
        ]
      },
      {
        heading: 'Elevated, Practical Luxury: Sustainability & Sensory Experience',
        content: 'Luxury body care is no longer just about efficacy—it\'s about values. The 18-35 demographic, especially in Latin America, demands that luxury align with sustainability, ethics, and sensory pleasure.',
        bullets: [
          'Clean Fragrance or Fragrance-Free Options: The Second Skin offers a choice: a subtle, clean scent derived from natural essential oils, or a completely fragrance-free formulation for sensitive or preference-driven consumers.',
          'Recyclable Packaging: All body care packaging uses post-consumer recycled (PCR) materials and is fully recyclable. The pump mechanism is designed for easy disassembly to separate materials for proper recycling.',
          'Cruelty-Free & Vegan: No animal testing, no animal-derived ingredients. Aligned with the ethical expectations of Millennials and Gen Z.',
          'Elevated Ritual: The texture, scent (or lack thereof), and absorption speed transform body care from a chore into a moment of self-care—a "full-body firming ritual" rather than "just lotion."'
        ]
      },
      {
        heading: 'Clinical Application: How to Use The Second Skin',
        content: 'For optimal results, The Second Skin should be integrated into a daily routine as a full-body anti-aging treatment, not just a moisturizer.',
        bullets: [
          'Morning Application: After showering, apply to damp skin on the neck, décolleté, arms, abdomen, and legs. Focus on areas prone to firmness loss or sun exposure. The fast-dry formula allows immediate dressing.',
          'Evening Application: Apply post-shower or before bed, focusing on areas of concern (tech-neck, inner thighs, upper arms). Use slow, upward massage strokes to encourage lymphatic drainage and absorption.',
          'Post-Sun or Post-Exercise: Apply liberally to sun-exposed or exercise-stressed areas to reduce inflammation and support recovery.',
          'Combination with Facial Products: For the neck and décolleté, layer The Second Skin with facial serums (e.g., The Architect or Sunscreen) for enhanced anti-aging benefits.'
        ]
      },
      {
        heading: 'Target Demographics & Use Cases',
        content: 'The Second Skin is designed for the modern Latin American consumer who views body care as an extension of skincare, not a separate category.',
        bullets: [
          '18-35 Year-Olds: Prevention-focused users who want to delay body aging before it becomes visible. They apply The Second Skin daily as they would a facial serum.',
          'Fitness Enthusiasts: Consumers who exercise regularly and need post-workout inflammation control and skin recovery.',
          'Beach & Pool Culture: In coastal cities (Rio, Cartagena, Cancún), body skin is constantly exposed. The Second Skin provides daily defense and repair.',
          'Tech-Neck Awareness: Young professionals who recognize early neck lines from phone and computer use and want targeted treatment.',
          'Male Consumers: Men increasingly use body care for grooming, recovery, and professional appearance. The clean, clinical branding and fast-dry texture appeal to this demographic.'
        ]
      },
      {
        heading: 'The Emotional Positioning: "The Second Skin"',
        content: 'Anti-aging body care is positioned as a full-body firming ritual, not "just lotion"—the step that keeps the neckline, arms, and legs matching the youthful face your customer is already investing in. It is the completion of a holistic anti-aging philosophy: if you treat your face, you must treat your body. The Second Skin is not maintenance; it is transformation. It is the suit of armor that keeps your body looking as young as you feel.',
      },
      {
        heading: 'Regional Differentiation: Why Body Care Matters in LATAM',
        content: 'Body care is not a "nice-to-have" in Latin America—it is culturally paramount. The region\'s beauty culture emphasizes the whole body, not just the face.',
        bullets: [
          'Brazil\'s "Corpo" Culture: In Brazil, body care is as important as facial care. The beach culture and year-round warm climate mean body skin is always visible. Brazilians invest heavily in body treatments, making them the ideal market for high-performance body products.',
          'Colombia\'s Aesthetic Consciousness: Colombia is a hub for aesthetic medicine. Consumers who invest in body contouring procedures (lipo, BBL) demand post-procedure care that maintains results. The Second Skin offers non-invasive maintenance.',
          'Mexico\'s UV Reality: High UV index year-round drives demand for body photoaging defense and repair. Mexican consumers are increasingly aware of body pigmentation (manchas) and seek brightening and firming in one product.',
          'Ecuador & Peru\'s Emerging Markets: Growing urban middle classes with disposable income are adopting Western beauty standards that include full-body grooming and anti-aging.'
        ]
      },
      {
        heading: 'The Market Gap: Why MTRX Body Care Wins',
        content: 'The body care market is currently dominated by two extremes: mass-market moisturizers with no active ingredients, or niche "firming" products that over-promise and under-deliver. MTRX occupies the white space: clinical-grade actives in a luxury texture at a justifiable price point.',
        bullets: [
          'Mass Market Fails on Efficacy: Brands like Nivea and Dove provide hydration but no active anti-aging. They cannot justify a premium price.',
          'Prestige Fails on Texture: Luxury body care (e.g., La Mer Body Crème) often uses heavy, occlusive textures that are rejected in tropical climates.',
          'Firming Products Over-Promise: Most "firming" lotions contain minimal active concentrations and rely on temporary plumping from glycerin. MTRX delivers true collagen-signaling peptides at clinical levels.',
          'CBD is Differentiation: No major competitor in LATAM body care uses pharmaceutical-grade CBD. MTRX owns this space.'
        ]
      }
    ],
    products: [
      'The Second Skin (4.0% MTRX-CBD Body Lotion)'
    ]
  },
  'anti-aging-hair-scalp-care': {
    title: 'ANTI AGING HAIR & SCALP CARE',
    subtitle: 'Follicular Longevity',
    description: 'Healthy hair begins at the scalp. Our hair care duo treats the scalp as an extension of facial skin, reducing inflammation that leads to thinning and dullness.',
    sections: [
      {
        heading: 'The Root of Power',
        content: 'MTRX-CBD Shampoo with 4.0% MTRX-CBD creates an optimal scalp environment by reducing inflammation, balancing sebum, and supporting follicle health.',
        bullets: [
          'Anti-inflammatory scalp treatment',
          'DHT-blocking botanical complex',
          'Strengthens hair at the root',
          'Sulfate-free, color-safe formula'
        ]
      },
      {
        heading: 'The Crown Jewel',
        content: 'MTRX-CBD Conditioner repairs the hair shaft, seals the cuticle, and prevents protein loss for stronger, more lustrous hair.',
        bullets: [
          'Keratin repair complex',
          'Moisture retention technology',
          'Heat protection',
          'Anti-frizz smoothing'
        ]
      }
    ]
  },
  'aging': {
    title: 'AGING',
    subtitle: 'Comprehensive Anti-Aging Protocol',
    description: 'Aging is a multi-factorial process involving collagen degradation, cellular senescence, oxidative stress, and chronic inflammation.',
    sections: [
      {
        heading: 'The Science of Aging',
        content: 'Collagen production peaks at age 20 and declines by 1% annually thereafter. By age 40, we have lost 20% of our structural integrity.',
        bullets: [
          'Fine lines and wrinkles',
          'Loss of elasticity and firmness',
          'Volume depletion',
          'Texture irregularities',
          'Slower cell turnover'
        ]
      },
      {
        heading: 'Recommended Products',
        content: 'The Time Bender, The Architect, The Preserver, The Spark'
      }
    ]
  },
  'imperfections': {
    title: 'IMPERFECTIONS',
    subtitle: 'Texture Refinement',
    description: 'Surface imperfections including enlarged pores, post-acne marks, uneven texture, and blemishes require targeted treatment.',
    sections: [
      {
        heading: 'Causes',
        content: 'Excess sebum production, inflammation, disrupted cell turnover, and bacterial proliferation.',
        bullets: [
          'Enlarged pores',
          'Post-inflammatory erythema',
          'Rough texture',
          'Blackheads and congestion'
        ]
      },
      {
        heading: 'Treatment Protocol',
        content: 'The Peacemaker (Niacinamide), The Time Bender (Retinol), The Great Harmonizer (Anti-inflammatory)'
      }
    ]
  },
  'hyperpigmentation': {
    title: 'HYPERPIGMENTATION',
    subtitle: 'Pigment Correction',
    description: 'Hyperpigmentation (manchas) results from excess melanin production triggered by UV exposure, hormones, or inflammation.',
    sections: [
      {
        heading: 'Types of Hyperpigmentation',
        content: 'Melasma, sun spots, post-inflammatory hyperpigmentation (PIH)',
        bullets: [
          'Melasma (hormonal)',
          'Solar lentigines (sun damage)',
          'Post-acne marks',
          'Uneven skin tone'
        ]
      },
      {
        heading: 'Brightening Protocol',
        content: 'The Illuminator (Vitamin C), Sunscreen (Ferulic Acid), The Naturalist (Bakuchiol)'
      }
    ]
  },
  'dehydration': {
    title: 'DEHYDRATION',
    subtitle: '3D Hydration, Not Just Shine',
    description: 'DEHYDRATION treats skin as water-starved, not merely "dry"—even oily complexions can be depleted when transepidermal water loss (TEWL) outpaces hydration. The aim is layered replenishment and barrier repair so skin holds water at every level and stays resilient in AC, altitude, and urban heat.',
    stats: [
      { label: 'TEWL Reduction', value: '28%' },
      { label: 'Hydration Layers', value: '3D' },
      { label: 'Barrier Recovery', value: '4 wks' },
      { label: 'Climate Adaptive', value: '100%' }
    ],
    sections: [
      {
        heading: 'Understanding Skin Dehydration',
        content: 'Dehydrated skin shows up as tightness, dullness, and fine "crinkle" lines that deepen by evening, regardless of how much oil is on the surface. Low humidity, constant air-conditioning, long flights, and high-altitude cities across LATAM accelerate TEWL, while harsh foaming cleansers and over-exfoliation strip the lipids that normally slow evaporation. When the water matrix collapses, actives like retinoids and acids sting more, redness lingers longer, and texture looks rough as desquamation becomes irregular.',
        bullets: [
          'Dehydration is a lack of water in the skin, distinct from dryness (lack of oil)',
          'Can affect all skin types, including oily and combination skin',
          'Manifests as tightness, dullness, fine lines, and increased sensitivity',
          'Accelerated by environmental stressors: AC, low humidity, altitude, urban pollution',
          'Compromises barrier function, making skin more reactive to actives'
        ]
      },
      {
        heading: 'The Dehydration Cascade: How Water Loss Becomes Chronic',
        content: 'Dehydration is not just a surface problem—it is a cascade that affects multiple skin layers and functions. Understanding this cascade is critical to effective treatment.',
        bullets: [
          'Stage 1 - Surface Disruption: TEWL exceeds the skin\'s ability to retain water. The stratum corneum becomes dry and rough.',
          'Stage 2 - Barrier Breakdown: Loss of NMF (natural moisturizing factors) and ceramides weakens the lipid matrix, allowing more water to escape.',
          'Stage 3 - Inflammation: Dehydrated skin becomes inflamed as the barrier fails, triggering cytokine release and micro-irritation.',
          'Stage 4 - Sensitivity & Reactivity: Compromised barrier allows irritants to penetrate, making actives sting and redness persist.',
          'Stage 5 - Premature Aging: Chronic dehydration accelerates fine lines, dullness, and loss of elasticity as the dermal matrix weakens.'
        ]
      },
      {
        heading: 'Causes of Chronic Dehydration',
        content: 'Dehydration is multi-factorial, driven by environmental, lifestyle, and product-related triggers that are especially prevalent in Latin American urban environments.'
      },
      {
        heading: 'Accelerated TEWL (Transepidermal Water Loss)',
        content: 'Low humidity, wind, and AC pull water out of the stratum corneum faster than it can be replaced. TEWL is the measurement of water vapor passing through the skin per unit time. Normal TEWL is 15-25 g/m²/h, but in air-conditioned offices, airplane cabins, or high-altitude cities (Bogotá 2,640m, Quito 2,850m), TEWL can exceed 30 g/m²/h, causing rapid dehydration.',
        bullets: [
          'Air conditioning removes humidity from indoor air, dropping levels to 20-30% (optimal is 40-60%)',
          'Airplane cabins have humidity as low as 10-20%, causing severe acute dehydration',
          'Wind and cold weather strip moisture from the surface, accelerating evaporation',
          'High altitude reduces atmospheric pressure and humidity, compounding water loss',
          'Urban heat islands in cities like São Paulo and Mexico City increase TEWL through elevated skin temperature'
        ]
      },
      {
        heading: 'Lipid Depletion & Barrier Disruption',
        content: 'Insufficient ceramides, cholesterol, and fatty acids in the barrier allow moisture to escape and irritants to penetrate. The lipid matrix acts as "mortar" between the "bricks" (corneocytes) of the stratum corneum. When lipids are depleted, the barrier becomes porous and water leaks out.',
        bullets: [
          'Ceramide deficiency: Ceramides make up 50% of the lipid matrix. Loss leads to immediate TEWL increase.',
          'Cholesterol & fatty acid imbalance: The ideal ratio is 1:1:1 (ceramides:cholesterol:fatty acids). Imbalance disrupts lamellae structure.',
          'Natural aging: Lipid production declines with age, making older skin more prone to dehydration.',
          'Hormonal changes: Menstrual cycle, pregnancy, and menopause affect lipid synthesis.',
          'Over-treatment: Harsh actives (strong retinoids, acids) can strip lipids faster than the skin can replace them.'
        ]
      },
      {
        heading: 'Over-Cleansing & Over-Exfoliating',
        content: 'Strong surfactants and frequent acids remove NMF (natural moisturizing factors), leaving skin tight and reactive. NMF is a complex of water-soluble compounds (amino acids, urea, lactic acid) that attract and hold water in the stratum corneum. Aggressive cleansing strips NMF, destroying the skin\'s natural hydration mechanism.',
        bullets: [
          'Foaming cleansers with SLS/SLES: Anionic surfactants strip lipids and NMF, causing immediate tightness.',
          'Daily acids (AHA/BHA): Frequent exfoliation removes the protective outer layer faster than it regenerates.',
          'Hot water: Dissolves lipids and increases TEWL; lukewarm water is essential.',
          'Physical scrubs: Micro-tears disrupt the barrier, allowing water loss and irritant penetration.',
          'Multiple cleansing (double cleanse abuse): Removes necessary oils, leaving skin defenseless against dehydration.'
        ]
      },
      {
        heading: 'Altitude & Climate Stress in Latin America',
        content: 'High elevations and strong UV in parts of LATAM compound dryness, sensitivity, and micro-inflammation. Cities like Bogotá (2,640m), Quito (2,850m), La Paz (3,640m), and Cusco (3,400m) present unique dehydration challenges.',
        bullets: [
          'Reduced atmospheric pressure: Less oxygen means slower cellular repair and compromised barrier function.',
          'Lower humidity: High-altitude air is dry, accelerating TEWL even indoors.',
          'Intense UV: UV index is higher at altitude, causing oxidative stress and barrier damage.',
          'Temperature fluctuations: Rapid shifts between day/night or sun/shade stress the barrier.',
          'Pollution at altitude: Cities like Bogotá and Quito have high particulate matter that generates free radicals, further weakening the barrier.'
        ]
      },
      {
        heading: 'Clinical Manifestations of Dehydrated Skin',
        content: 'Recognizing dehydration is the first step to effective treatment. These signs often appear together and worsen throughout the day.'
      },
      {
        heading: 'Fine "Accordion" Lines',
        content: 'Fine "accordion" lines, especially around eyes and mouth, that soften after hydrating layers. These are distinct from structural wrinkles—they are superficial "crinkle" lines caused by compacted stratum corneum cells that lack water. Unlike true wrinkles (which are dermal), dehydration lines appear and disappear based on hydration status.',
        bullets: [
          'Appear and deepen throughout the day as TEWL accumulates',
          'Most visible around eyes (where skin is thinnest) and mouth (high movement)',
          'Soften immediately after applying humectants (HA, glycerin)',
          'Can look like "crepey" texture when severe',
          'Often mistaken for aging, but reversible with proper hydration'
        ]
      },
      {
        heading: 'Dullness & Reduced Light Reflection',
        content: 'Overall dullness and reduced light bounce, even when skin is not matte. Healthy, hydrated skin reflects light evenly, creating a natural glow. Dehydrated skin has an irregular surface texture that scatters light diffusely, making it look flat and lifeless.',
        bullets: [
          'Lack of luminosity despite adequate oil production',
          'Skin looks "tired" or "gray" even after sleep',
          'Makeup sits poorly and emphasizes texture',
          'Loss of the natural "glow" characteristic of youthful skin',
          'Photos show flat, two-dimensional appearance'
        ]
      },
      {
        heading: 'Tightness & Post-Cleansing Discomfort',
        content: 'Feeling of tightness or roughness after cleansing or being in AC. This is a classic sign of lipid and NMF depletion. The skin literally "shrinks" as water evaporates faster than it can be replaced.',
        bullets: [
          'Immediate tightness after cleansing, even with gentle products',
          'Need to apply moisturizer within seconds to avoid discomfort',
          'Skin feels "pulled" or "stretched" in air-conditioned environments',
          'Roughness that feels like sandpaper, especially on cheeks',
          'Itchiness or crawling sensation indicating barrier stress'
        ]
      },
      {
        heading: 'Sensitivity to Active Ingredients',
        content: 'Burning or stinging when applying strong serums, despite normal or oily skin. When the barrier is compromised by dehydration, actives penetrate too quickly and erratically, causing irritation even at low concentrations.',
        bullets: [
          'Retinol causes immediate redness and burning, even at 0.1%',
          'Vitamin C serums sting instead of absorbing smoothly',
          'Niacinamide, typically gentle, causes flushing or itching',
          'AHA/BHA exfoliants feel like they are "burning" the skin',
          'Inability to tolerate layering multiple actives, forcing simplified routines'
        ]
      },
      {
        heading: 'The DEHYDRATION Protocol: Hydration as Architecture',
        content: 'The DEHYDRATION protocol views hydration as architecture. Multi-weight hyaluronic acid and other humectants pull water into different strata of the epidermis; ceramides and lipids rebuild the "mortar" that keeps that water from leaking out; and CBD-backed soothing reduces the low-grade inflammation that often accompanies chronic dryness or over-treatment. The result is skin that feels bouncy and elastic again, reflects light cleanly, and tolerates sophisticated routines without the constant background burn.',
      },
      {
        heading: 'Treatment Protocol: The Three-Phase Approach',
        content: 'Effective dehydration treatment requires a sequential, layered approach: humectants to attract water, barrier repair to retain it, and occlusives to seal it in.'
      },
      {
        heading: 'Phase 1: The Rainmaker (Multi-Layer Hydration Serum)',
        content: 'Multi-weight hyaluronic acid, glycerin, and other humectants draw water into surface and deeper epidermal layers, delivering immediate plumpness and longer-term hydration while supporting elasticity and reducing TEWL.',
        bullets: [
          'High MW Hyaluronic Acid (>1000 kDa): Forms a protective film on the surface, preventing immediate TEWL',
          'Medium MW HA (100-300 kDa): Penetrates to the mid-epidermis, plumping and smoothing fine lines',
          'Low MW HA (<50 kDa): Reaches deeper layers, providing sustained hydration and supporting barrier from within',
          'Glycerin: Powerful humectant that draws water from the environment and deeper skin layers to the surface',
          'Sodium PCA: Component of NMF that enhances water-binding capacity',
          'Immediate visible plumping: "accordion" lines soften within minutes of application',
          'Long-term hydration: Multi-weight strategy ensures water is held at multiple depths, not just surface'
        ]
      },
      {
        heading: 'Phase 2: The Great Harmonizer (Barrier + Calm Complex with Niacinamide)',
        content: 'Contains niacinamide and barrier-supportive lipids to rebuild ceramide stores, reinforce the stratum corneum, and calm the micro-inflammation that often accompanies chronic dehydration, making skin less reactive to active treatments.',
        bullets: [
          'Niacinamide (Vitamin B3): Enhances ceramide synthesis at the cellular level, strengthening the barrier from within',
          'Stimulates production of ceramides, cholesterol, and fatty acids in the ideal 1:1:1 ratio',
          'Reduces TEWL by up to 24% in clinical studies',
          'Anti-inflammatory: Calms the micro-inflammation that weakens the barrier and perpetuates dehydration',
          'Improves tolerance to actives: A strong barrier allows retinol, Vitamin C, and acids to work without stinging',
          'Regulates sebum: For oily-dehydrated skin, niacinamide normalizes oil production without further drying',
          'Visible results: Skin feels less reactive, tightness diminishes, and actives can be reintroduced comfortably'
        ]
      },
      {
        heading: 'Phase 3: The Preserver (Occlusive-Light Shield)',
        content: 'A breathable lipid veil that locks in humectant water without feeling greasy or comedogenic, ideal for AC-heavy offices, airplane cabins, and high-altitude environments.',
        bullets: [
          'Semi-occlusive barrier: Reduces TEWL by creating a breathable lipid layer that slows evaporation',
          'Non-comedogenic oils: Squalane, jojoba, or lightweight esters that mimic natural sebum without clogging pores',
          'Ideal for extreme environments: AC offices, flights, high-altitude cities where TEWL is relentless',
          'Night treatment: Applied as the final step PM to seal in all previous hydration and active layers',
          'Day use option: In very dry climates or during winter, can be used under SPF as a protective veil',
          'Texture innovation: Absorbs fully, leaving no greasy residue or shine—critical for oily-dehydrated skin types'
        ]
      },
      {
        heading: 'The Role of MTRX-CBD in Dehydration Treatment',
        content: 'CBD is the differentiating factor that makes the DEHYDRATION protocol superior to conventional hydration treatments. By reducing inflammation and supporting barrier lipid synthesis, MTRX-CBD addresses the root cause of chronic dehydration, not just the symptoms.',
        bullets: [
          'Anti-inflammatory modulation: Reduces IL-6, IL-8, TNF-α that weaken the barrier and increase TEWL',
          'Endocannabinoid system (ECS) support: CBD interacts with CB1/CB2 receptors in keratinocytes to regulate barrier homeostasis',
          'Ceramide synthesis support: CBD has been shown to influence lipid metabolism, supporting natural ceramide production',
          'Calms reactive skin: The anti-inflammatory effect allows dehydrated, sensitive skin to tolerate hydrating actives without flare-ups',
          'Sebum regulation: For combination or oily-dehydrated skin, CBD normalizes sebaceous gland activity, preventing compensatory oil overproduction'
        ]
      },
      {
        heading: 'Climate-Specific Adaptations: Tailoring the Protocol',
        content: 'Latin America\'s diverse climates require flexible application of the DEHYDRATION protocol. The three-phase system remains constant, but emphasis shifts based on environment.'
      },
      {
        heading: 'AC-Heavy Offices (Urban Brazil, Mexico, Colombia)',
        content: 'Constant air conditioning creates a relentless low-humidity environment (20-30%) that strips moisture continuously.',
        bullets: [
          'Morning: The Rainmaker (double layer) + The Great Harmonizer',
          'Midday refresh: Hydrating mist or additional Rainmaker layer',
          'Evening: The Rainmaker + The Great Harmonizer + The Preserver (seal everything in)',
          'Desk humidifier: Increase ambient humidity to reduce environmental TEWL',
          'Hydration from within: Increase water intake; dehydration is systemic as well as topical'
        ]
      },
      {
        heading: 'High-Altitude Cities (Bogotá, Quito, La Paz, Cusco)',
        content: 'Low atmospheric pressure, dry air, intense UV, and temperature swings create extreme dehydration stress.',
        bullets: [
          'Aggressive hydration: Triple layer of The Rainmaker (HA at multiple weights is critical)',
          'Barrier reinforcement: The Great Harmonizer AM & PM to combat constant barrier stress',
          'Occlusive seal: The Preserver is essential at night; optional during day under SPF',
          'Antioxidant defense: Add Sunscreen (Ferulic Acid) to combat UV-induced oxidative stress',
          'Weekly mask: Hydrating sheet mask or overnight occlusive treatment to reset barrier'
        ]
      },
      {
        heading: 'Airplane Travel (Frequent Flyers)',
        content: 'Cabin humidity drops to 10-20%, creating acute, severe dehydration in hours.',
        bullets: [
          'Pre-flight prep: Apply The Rainmaker + The Great Harmonizer + The Preserver before boarding',
          'In-flight refresh: Hydrating mist every 2 hours; reapply The Rainmaker if on long-haul flight',
          'Post-flight recovery: Immediate hydration protocol upon landing; consider a sheet mask',
          'Avoid alcohol and caffeine: Both are diuretics that worsen systemic dehydration',
          'Consistent flyers: Consider carrying travel sizes of The Rainmaker and a facial mist'
        ]
      },
      {
        heading: 'Tropical Humidity (Coastal Brazil, Caribbean)',
        content: 'Paradoxically, high humidity (70-90%) can disrupt barrier lipid organization, leading to dehydration despite abundant environmental moisture.',
        bullets: [
          'Lightweight hydration: The Rainmaker in a single layer; heavy occlusives may feel uncomfortable',
          'Barrier focus: The Great Harmonizer is critical to organize lipid structure despite humidity',
          'Skip heavy occlusives: The Preserver may be unnecessary in very humid climates; use only if skin still feels tight',
          'SPF is mandatory: High UV + humidity accelerates photoaging and barrier breakdown',
          'Antioxidants: Sunscreen helps defend against oxidative stress from combined UV + heat'
        ]
      },
      {
        heading: 'The Emotional Benefit: Water Under the Skin',
        content: 'DEHYDRATION restores the feeling of "water under the skin"—that quiet, cushiony bounce that makes every other step in your routine glide, absorb, and perform better. This is the foundation of confidence. Dehydrated skin feels fragile, reactive, and unpredictable. Hydrated skin feels resilient, comfortable, and ready. It is the difference between skin you manage and skin you trust. For the 18-35 demographic navigating city life, travel, stress, and ambitious skincare routines, the DEHYDRATION protocol is the invisible infrastructure that allows everything else to work.',
      }
    ],
    products: [
      'The Rainmaker (MTRX-CBD + Multi-Weight Hyaluronic Acid)',
      'The Great Harmonizer (8.0% MTRX-CBD + Niacinamide)',
      'The Preserver (MTRX-CBD + Occlusive-Light Shield)'
    ]
  },
  'rosacea': {
    title: 'ROSACEA',
    subtitle: 'Turn Down the Flush, Keep the Life',
    description: 'ROSACEA is a chronic neurovascular and inflammatory condition, not "just sensitive skin," where vessels over-react and the immune system over-responds to everyday triggers like heat, stress, and products. The aim is to cool that circuitry, rebuild the barrier, and give flushed, sting-prone faces a way back into active skincare without constant flare-ups.',
    sections: [
      {
        heading: 'Understanding Rosacea',
        content: 'Rosacea typically shows up as persistent redness across the cheeks, nose, and mid-face, with episodes of intense flushing, visible capillaries, and acne-like bumps that burn or sting instead of feeling like traditional breakouts. Underneath, there is heightened neurovascular reactivity and an exaggerated innate immune response, so common exposures—sun, temperature swings, spicy food, alcohol, emotional stress, vigorous exercise—can trigger a cascade that keeps vessels dilated and skin inflamed.',
        bullets: [
          'Over-cleansing, scrubs, and fragrance-heavy formulas strip an already fragile barrier, making the surface dry, tight, and reactive to even "gentle" actives',
          'The ROSACEA protocol is built around nervous-system-aware calm and strict trigger minimalism',
          'CBD and neuromodulating botanicals work alongside barrier lipids and niacinamide to quiet burning and stinging, reduce visible redness, and strengthen the stratum corneum',
          'Mineral-only SPF and low-friction textures avoid the heat and sting that chemical filters and occlusive bases can cause',
          'Any corrective steps for pigment or aging are buffered through calming layers to protect long-term tolerance'
        ]
      },
      {
        heading: 'Causes & Triggers',
        content: 'Understanding what drives rosacea helps you minimize flares and protect your skin\'s long-term health.',
        bullets: [
          'Neurovascular hyper-reactivity: Blood vessels in the central face dilate too easily, leading to frequent flushing, warmth, and visible telangiectasias',
          'Innate immune overdrive: An exaggerated inflammatory response and altered cathelicidin processing amplify redness, bumps, and swelling',
          'Environmental & lifestyle triggers: Sun and wind, temperature extremes, spicy foods, hot drinks, alcohol, intense exercise, emotional stress, and some cosmetics commonly spark flares',
          'Barrier fragility: Dry, sensitive skin with impaired stratum corneum function stings with many topicals and loses water faster, further fueling inflammation'
        ]
      },
      {
        heading: 'Clinical Manifestations',
        content: 'Recognizing the signs of rosacea is the first step toward effective management.',
        bullets: [
          'Persistent central facial redness or frequent intense flushing that can feel hot or burning',
          'Acne-like papules and pustules without classic comedones, often coexisting with dryness and sensitivity',
          'Visible surface vessels around the nose and cheeks, plus swelling in more advanced presentations',
          'Eye involvement in some patients (gritty, dry, or irritated eyes and lids), requiring ophthalmology co-management'
        ]
      },
      {
        heading: 'Treatment Protocol',
        content: 'The ROSACEA protocol uses three key products to calm neurovascular reactivity, rebuild barrier strength, and protect against environmental triggers.'
      },
      {
        heading: 'The Great Harmonizer (CBD + Niacinamide Calm Complex)',
        content: 'Central soothing layer that targets both inflammation and balance; CBD and related actives help down-shift neurogenic burning and redness, while niacinamide supports barrier lipids, reduces TEWL, and strengthens the skin against everyday triggers.',
        bullets: [
          'Modulates the cutaneous endocannabinoid system to reduce neurogenic inflammation',
          'Niacinamide enhances ceramide synthesis and normalizes barrier function',
          'Reduces visible redness and sensation of heat or burning',
          'Non-irritating formula suitable for highly reactive skin',
          'Can be used AM and PM as a foundational calming layer'
        ]
      },
      {
        heading: 'The Preserver (Barrier Recovery Cream)',
        content: 'Ceramide-rich, fragrance-free emulsion that rebuilds the stratum corneum "armor," reduces dryness and stinging, and serves as the buffer layer under any active serums or prescription rosacea medications.',
        bullets: [
          'Bio-identical ceramide complex (3:1:1 ratio) repairs compromised barrier',
          'Fragrance-free and hypoallergenic to minimize irritation risk',
          'Creates a protective "buffer" for prescription treatments',
          'Reduces dryness, tightness, and reactivity to environmental stress',
          'Suitable for layering under or over prescription rosacea medications'
        ]
      },
      {
        heading: 'Sunscreen (Mineral SPF Protection)',
        content: 'High-protection, mineral-only sunscreen that shields from UV and wind without the warmth, sting, or potential irritation some chemical filters can cause, crucial because sun is one of the most reported rosacea triggers.',
        bullets: [
          'Mineral-only formulation (zinc oxide and/or titanium dioxide) avoids chemical filter irritation',
          'No warmth, burning, or stinging sensation upon application',
          'Broad-spectrum protection against UV-induced flushing',
          'Physical barrier also protects against wind and environmental irritants',
          'Essential daily step to prevent UV-triggered neurovascular flares'
        ]
      },
      {
        heading: 'Lifestyle & Trigger Management',
        content: 'Beyond topical treatments, managing rosacea requires awareness of personal triggers and strategic lifestyle adjustments.',
        bullets: [
          'Sun protection: Wear mineral SPF daily, seek shade, and wear wide-brimmed hats',
          'Temperature management: Avoid extreme heat/cold; use lukewarm water for cleansing',
          'Dietary awareness: Identify and avoid personal food triggers (spicy foods, hot beverages, alcohol)',
          'Stress reduction: Practice mindfulness, breathing exercises, or other stress-management techniques',
          'Gentle skincare: Avoid scrubs, harsh cleansers, fragrances, and alcohol-based products',
          'Exercise modifications: Choose cooler environments, use cooling towels, and stay hydrated'
        ]
      },
      {
        heading: 'The Neurovascular Connection',
        content: 'Rosacea is fundamentally a neurovascular condition where the nervous system and blood vessels communicate abnormally, leading to exaggerated responses to normal stimuli.',
        bullets: [
          'Nerves in rosacea-prone skin release excessive neuropeptides (substance P, CGRP) that trigger vasodilation',
          'Blood vessels become hypersensitive and dilate too easily in response to triggers',
          'This creates a feedback loop: inflammation → nerve sensitization → more vessel reactivity → more inflammation',
          'CBD works by modulating this neurovascular communication, helping to break the inflammatory cycle',
          'Long-term use can help "retrain" the skin to respond more calmly to everyday stimuli'
        ]
      },
      {
        heading: 'When to See a Dermatologist',
        content: 'While topical care is essential, some rosacea presentations require professional medical management.',
        bullets: [
          'Persistent papules/pustules that don\'t respond to OTC treatments',
          'Eye symptoms: dryness, grittiness, redness, or vision changes (requires ophthalmology referral)',
          'Severe flushing episodes that significantly impact quality of life',
          'Thickening of skin, especially on the nose (rhinophyma)',
          'Desire for prescription treatments (topical metronidazole, azelaic acid, ivermectin, or oral medications)',
          'Consideration of laser/IPL therapy to reduce visible vessels and persistent redness'
        ]
      },
      {
        heading: 'The Emotional Impact: Your Skin, Your Terms',
        content: 'ROSACEA gives faces that flush fast a low-noise mode—so you can work, train, or go out in the sun with smart protection, without feeling like every emotion or environment is written in neon across your cheeks. This is about reclaiming confidence and living fully without constant self-consciousness about redness or reactivity.'
      }
    ],
    products: [
      'The Great Harmonizer (8.0% MTRX-CBD + Niacinamide)',
      'The Preserver (MTRX-CBD + Ceramides)',
      'Sunscreen (Mineral SPF Protection)'
    ]
  },
  'acne': {
    title: 'ACNE',
    subtitle: 'Clear Skin Through Science',
    description: 'Acne is a complex inflammatory condition driven by excess sebum, bacterial proliferation, abnormal keratinization, and chronic inflammation. Effective treatment addresses all four factors simultaneously.',
    sections: [
      {
        heading: 'Understanding Acne',
        content: 'Acne results from a cascade of interrelated factors that must be addressed comprehensively for lasting clearance.'
      }
    ]
  },
  'dark-circles': {
    title: 'DARK CIRCLES',
    subtitle: 'Periorbital Brightening',
    description: 'Dark circles are multifactorial: vascular congestion, periorbital hyperpigmentation, volume loss, and thin skin all contribute. Treatment must address all components.',
    sections: [
      {
        heading: 'Causes of Dark Circles',
        content: 'The periorbital area presents unique challenges due to its thin skin, dense vasculature, and structural complexity.'
      }
    ]
  },
  'fine-lines': {
    title: 'FINE LINES',
    subtitle: 'Early Intervention for Aging',
    description: 'Fine lines result from collagen loss, oxidative damage, dehydration, and repetitive movement. Prevention and early treatment are far more effective than attempting correction later.',
    sections: [
      {
        heading: 'The Biology of Fine Lines',
        content: 'Lines form when the dermal matrix loses structure and the epidermis loses hydration, creating surface creases that deepen with time.'
      }
    ]
  },
  'loss-of-firmness': {
    title: 'LOSS OF FIRMNESS',
    subtitle: 'Structural Skin Aging',
    description: 'Loss of firmness involves collagen degradation, fat volume loss, bone resorption, and gravitational descent. While injectables address volume, topicals meaningfully rebuild the collagen matrix.',
    sections: [
      {
        heading: 'Multi-Layered Aging',
        content: 'Skin laxity is not just surface-level—it reflects changes in dermis, fat, muscle, and bone that compound over time.'
      }
    ]
  },
  'clinical-studies': {
    title: 'CLINICAL STUDIES',
    subtitle: 'Evidence-Based Formulation',
    description: 'Every MTRX formulation undergoes rigorous clinical testing to validate efficacy, safety, and stability.',
    sections: [
      {
        heading: 'Our Clinical Methodology',
        content: 'Double-blind, placebo-controlled studies with diverse participant pools across Latin American markets.',
        bullets: [
          '12-week efficacy studies',
          'Instrumental measurements (corneometry, chromometry)',
          'Dermatologist assessments',
          'Consumer self-evaluation',
          'Safety and tolerance testing'
        ]
      },
      {
        heading: 'Published Results',
        content: 'Studies demonstrate significant improvements in wrinkle depth (up to 37%), hydration levels (up to 64%), and skin brightness (up to 28%) compared to baseline.'
      }
    ],
    stats: [
      { label: 'Wrinkle Reduction', value: '37%' },
      { label: 'Hydration Increase', value: '64%' },
      { label: 'Brightness Improvement', value: '28%' },
      { label: 'User Satisfaction', value: '94%' }
    ]
  },
  'ingredient-research': {
    title: 'INGREDIENT RESEARCH',
    subtitle: 'Active Intelligence',
    description: 'We source and validate every active ingredient through comprehensive literature review and proprietary research.',
    sections: [
      {
        heading: 'Research Pipeline',
        content: 'Our team monitors over 200 peer-reviewed journals to identify breakthrough actives. Each ingredient undergoes stability testing, penetration studies, and synergy analysis.',
        bullets: [
          'Bioavailability optimization',
          'Stability in complex matrices',
          'Synergistic combinations',
          'Clean sourcing verification'
        ]
      }
    ]
  },
  'formulation-science': {
    title: 'FORMULATION SCIENCE',
    subtitle: 'The Art of Synergy',
    description: 'Formulation is where chemistry becomes therapy. Our lab engineers each product to maximize penetration, stability, and sensorial elegance.',
    sections: [
      {
        heading: 'Formulation Principles',
        bullets: [
          'pH optimization for each active',
          'Emulsion technology for stability',
          'Penetration enhancers without irritation',
          'Airless packaging for oxidation prevention'
        ]
      },
      {
        heading: 'The Base Matrix',
        content: 'Unlike competitors who use water and fillers, our base formula is itself a therapeutic system containing Evening Primrose Oil, Shea Butter, Panthenol, Niacinamide, and Vitamin E.'
      }
    ]
  },
  'transdermal-delivery': {
    title: 'TRANSDERMAL DELIVERY',
    subtitle: 'Penetration Technology',
    description: 'Active ingredients must reach target cells to be effective. Our transdermal delivery systems ensure deep penetration without barrier disruption.',
    sections: [
      {
        heading: 'Delivery Mechanisms',
        content: 'We employ lipophilic carriers, molecular weight optimization, and penetration enhancers to achieve dermal and epidermal delivery.',
        bullets: [
          'Liposomal encapsulation',
          'Oleic acid facilitation',
          'Optimal molecular weight (<500 Da preferred)',
          'pH-adjusted for ionization control'
        ]
      }
    ]
  },
  'cbd': {
    title: 'CANNABIDIOL (MTRX-CBD)',
    subtitle: 'The Master Regulator',
    description: 'MTRX-CBD is a non-psychoactive phytocannabinoid that interacts with the endocannabinoid system (ECS) present in all skin cells.',
    sections: [
      {
        heading: 'Mechanism of Action',
        content: 'MTRX-CBD binds to CB1 and CB2 receptors in keratinocytes, sebocytes, and fibroblasts, downregulating inflammatory cytokines (IL-6, TNF-alpha) and regulating sebum production.',
        bullets: [
          'Anti-inflammatory (reduces inflammaging)',
          'Sebum regulation (acne control)',
          'Antioxidant (neutralizes free radicals)',
          'Barrier support (ceramide synthesis)'
        ]
      },
      {
        heading: 'The MTRX Advantage',
        content: 'Our 8.0% pharmaceutical-grade MTRX-CBD concentration is among the highest in the dermocosmetic market, sourced from organic hemp and third-party tested for purity.'
      }
    ]
  },
  'mtrx-tech': {
    title: 'MTRX-CBD TECHNOLOGIA',
    subtitle: 'Proprietary Innovation',
    description: 'MTRX-CBD TECHNOLOGIA is our patented system combining pharmaceutical-grade MTRX-CBD with a synergistic base of bioactive oils and vitamins.',
    sections: [
      {
        heading: 'The Technology',
        content: 'Unlike simple CBD infusions, our technology ensures optimal MTRX-CBD stability, penetration, and efficacy through a proprietary carrier system.',
        bullets: [
          '8.0% pharmaceutical-grade MTRX-CBD isolate',
          'Hypoallergenic transdermal base',
          'Synergistic co-actives',
          'Airless delivery system'
        ]
      }
    ]
  },
  'retinoids': {
    title: 'RETINOIDS',
    subtitle: 'The Gold Standard',
    description: 'Retinoids (Vitamin A derivatives) are the most clinically proven anti-aging actives, accelerating cell turnover and stimulating collagen production.',
    sections: [
      {
        heading: 'How Retinoids Work',
        content: 'Retinol converts to retinoic acid in the skin, binding to nuclear receptors to upregulate collagen genes and accelerate desquamation.',
        bullets: [
          'Reduces wrinkles and fine lines',
          'Improves texture and tone',
          'Treats acne and post-acne marks',
          'Increases epidermal thickness'
        ]
      },
      {
        heading: 'The MTRX-CBD Advantage',
        content: 'Our MTRX-CBD + Retinol formula (The Time Bender) buffers retinoid irritation, allowing higher efficacy with lower side effects.'
      }
    ]
  },
  'peptides': {
    title: 'PEPTIDES',
    subtitle: 'Cellular Messengers',
    description: 'Peptides are short chains of amino acids that signal fibroblasts to produce collagen, elastin, and hyaluronic acid.',
    sections: [
      {
        heading: 'Matrixyl 3000',
        content: 'Our formulation utilizes Matrixyl 3000 (palmitoyl tripeptide-1 and palmitoyl tetrapeptide-7), clinically proven to reduce wrinkle depth by up to 45%.',
        bullets: [
          'Stimulates collagen I, III, and IV',
          'Repairs sun-damaged skin',
          'Improves firmness and elasticity',
          'Non-irritating'
        ]
      }
    ]
  },
  'skin-structure': {
    title: 'SKIN STRUCTURE',
    subtitle: 'The Body\'s Largest Organ',
    description: 'Skin is a complex multi-layered organ consisting of the epidermis, dermis, and hypodermis, each with distinct cellular architecture and function.',
    sections: [
      {
        heading: 'Three Primary Layers',
        content: 'The epidermis provides barrier protection, the dermis contains structural proteins, and the hypodermis cushions and insulates.',
        bullets: [
          'Epidermis: 0.05-1.5mm thick, composed of keratinocytes',
          'Dermis: Contains collagen, elastin, blood vessels',
          'Hypodermis: Subcutaneous fat layer'
        ]
      }
    ]
  },
  'photoaging': {
    title: 'PHOTOAGING',
    subtitle: 'UV-Induced Damage',
    description: 'Photoaging accounts for up to 80% of visible facial aging, caused by cumulative UV exposure that degrades collagen and creates oxidative stress.',
    sections: [
      {
        heading: 'Signs of Photoaging',
        bullets: [
          'Deep wrinkles and coarse texture',
          'Hyperpigmentation (sun spots)',
          'Loss of elasticity',
          'Telangiectasia (broken capillaries)',
          'Leathery appearance'
        ]
      },
      {
        heading: 'Prevention and Repair',
        content: 'Combine daily antioxidant protection with nighttime renewal actives. Sunscreen (Ferulic Acid) + The Time Bender (Retinol) protocol.'
      }
    ]
  },
  'our-promise': {
    title: 'OUR PROMISE',
    subtitle: 'Future‑Proof Skincare, Zero Compromise',
    description: 'SL Cosmetica\'s Our Promise is a living contract between lab, skin, and planet: pharmaceutical‑grade actives, clinically verified outcomes, and radically transparent ethics presented through a luminous, future‑lab interface. Each touchpoint—from micro‑animations to material choices—reinforces that every formula has receipts, not just rhetoric.',
    sections: [
      {
        heading: 'Five Pillars of Our Living Contract',
        content: 'Our Promise is built on five non-negotiable commitments: Clinical (Not Cosmetic), Clean by Design, Radical Transparency, Humane & Planet‑Aligned, and Ethics Under Version Control. Each pillar is backed by interactive proof points, full disclosure, and a commitment to evolve as science advances.',
        bullets: [
          'Clinical efficacy validated through double-blind studies with instrumental measurements',
          'Clean formulations screened against comprehensive blacklist of irritants and toxins',
          'Full INCI disclosure with batch-specific COAs accessible via QR',
          'Cruelty-free, vegan-preferred, with sustainable packaging and carbon-neutral goals',
          'Public versioning of standards with transparent changelogs when reformulations occur'
        ]
      }
    ]
  },
  'our-heritage': {
    title: 'OUR HERITAGE',
    subtitle: 'From Clinical Lab to Living Skin',
    description: 'Our Heritage traces SL Cosmetica\'s evolution from a quiet formulation lab supporting physicians to a visible, consumer-facing brand translating pharmaceutical rigor into daily rituals. The same mindset that once built post-procedure protocols now designs futuristic, CBD-enhanced skincare for prejuvenation and barrier health across Latin America\'s diverse phototypes.',
    sections: [
      {
        heading: 'The Evolution',
        content: 'SL Cosmetica began as a behind-the-scenes partner to dermatologists and aesthetic clinics, formulating recovery creams and barrier therapies to support procedures long before "clinical skincare" became a marketing term. Those early years defined the brand\'s reflex: start with pathophysiology, choose actives for mechanism—not trend—and prove performance on real, sensitized skin.'
      },
      {
        heading: 'Origins in Medicine',
        content: 'Founded to solve real problems—post-procedure inflammation, atopic flares, barrier collapse—alongside physicians rather than trend forecasters.'
      },
      {
        heading: 'Latin American Skin as Blueprint',
        content: 'Prototypes were stress-tested in climates defined by high UV, humidity, pollution, and diverse phototypes, making resilience and pigment safety non-negotiable.'
      },
      {
        heading: 'Science Before Story',
        content: 'Stories are written after the data, not before. Every hero complex exists because it solved a clinical problem first.'
      },
      {
        heading: 'Generational Craft',
        content: 'A formulation culture passed from chemists to younger teams who grew up as skintellectuals—combining old-school bench skills with digital-era ingredient literacy.'
      },
      {
        heading: 'Heritage Under Continuous Upgrade',
        content: 'Heritage is not nostalgia; it is a codebase that keeps refactoring as new evidence, regulations, and environmental realities emerge.'
      }
    ]
  },
  'our-story': {
    title: 'OUR HERITAGE',
    subtitle: 'From Clinical Lab to Living Skin',
    description: 'Our Heritage traces SL Cosmetica\'s evolution from a quiet formulation lab supporting physicians to a visible, consumer-facing brand translating pharmaceutical rigor into daily rituals. The same mindset that once built post-procedure protocols now designs futuristic, CBD-enhanced skincare for prejuvenation and barrier health across Latin America\'s diverse phototypes.',
    sections: [
      {
        heading: 'The Evolution',
        content: 'SL Cosmetica began as a behind-the-scenes partner to dermatologists and aesthetic clinics, formulating recovery creams and barrier therapies to support procedures long before "clinical skincare" became a marketing term. Those early years defined the brand\'s reflex: start with pathophysiology, choose actives for mechanism—not trend—and prove performance on real, sensitized skin.'
      }
    ]
  },
  'faq': {
    title: 'FREQUENTLY ASKED QUESTIONS',
    subtitle: 'Your Questions Answered',
    description: 'Find answers to common questions about our products, ingredients, and usage protocols.',
    sections: [
      {
        heading: 'Product Questions',
        content: 'Q: Can I use multiple MTRX products together?\nA: Yes! Our formulations are designed to layer. Start with The Great Harmonizer, then apply targeted treatments.\n\nQ: Is MTRX-CBD psychoactive?\nA: No. Our MTRX-CBD contains 0% THC and will not produce any psychoactive effects.',
        bullets: [
          'Start with one product and gradually introduce others',
          'Always apply from thinnest to thickest consistency',
          'Use retinol products at night only',
          'Store products in cool, dry place away from direct sunlight'
        ]
      }
    ]
  },
  'sustainability': {
    title: 'SUSTAINABILITY',
    subtitle: 'Regenerative Beauty',
    description: 'We believe luxury and sustainability are not mutually exclusive. Our operations prioritize regenerative practices that restore ecosystems.',
    sections: [
      {
        heading: 'Our Initiatives',
        bullets: [
          'Carbon-neutral production facilities',
          'Recyclable and biodegradable packaging',
          'Organic hemp sourcing supporting regenerative agriculture',
          'Water conservation in manufacturing',
          '1% for the Planet partnership'
        ]
      }
    ]
  },
  'authorized-retailers': {
    title: 'AUTHORIZED RETAILERS',
    subtitle: 'Where to Find SL Cosmetica',
    description: 'Purchase authentic SL Cosmetica products from our network of authorized retailers across Latin America and beyond.',
    sections: [
      {
        heading: 'Pharmacy Partners',
        content: 'Available at premium pharmacy chains specializing in dermocosmetics.',
        bullets: [
          'Farmacia Paris (Colombia)',
          'Drogaria São Paulo (Brazil)',
          'Farmacias del Ahorro (Mexico)',
          'Cruz Verde (Chile)',
          'Farmacity (Argentina)'
        ]
      },
      {
        heading: 'Online Partners',
        bullets: [
          'Official SL Cosmetica website',
          'Mercado Libre (Select sellers)',
          'Amazon LATAM (Coming 2026)'
        ]
      }
    ]
  },
  'latin-america': {
    title: 'LATIN AMERICA',
    subtitle: 'Our Home Market',
    description: 'SL Cosmetica is proudly formulated for the Latin American market, understanding the unique skin concerns, climate challenges, and beauty values of the region.',
    sections: [
      {
        heading: 'Available in',
        bullets: [
          'Brazil - São Paulo, Rio de Janeiro, Brasília',
          'Mexico - Mexico City, Guadalajara, Monterrey',
          'Colombia - Bogotá, Medellín, Cali',
          'Chile - Santiago, Valparaíso',
          'Argentina - Buenos Aires, Córdoba',
          'Peru - Lima, Cusco',
          'Ecuador - Quito, Guayaquil',
          'Uruguay - Montevideo',
          'Costa Rica - San José',
          'Panama - Panama City'
        ]
      }
    ]
  },
  'sensitivity': {
    title: 'SENSITIVITY',
    subtitle: 'Barrier Support for Skin That Hears Everything',
    description: 'Sensitive skin has a compromised barrier that makes it over-reactive to products and environment, so even basic steps can trigger redness, itch, or burning. The goal is to rebuild barrier integrity and quiet nerve signalling so skin feels buffered and safe again, not constantly on edge.',
    stats: [
      { label: 'Barrier Recovery', value: '4-6 weeks' },
      { label: 'Reactivity Reduction', value: '60%' },
      { label: 'Safe Introduction Phase', value: 'Week 7+' },
      { label: 'TEWL Improvement', value: '35%' }
    ],
    sections: [
      {
        heading: 'Understanding Sensitive Skin',
        content: 'Sensitive skin is defined less by a specific diagnosis and more by how it feels: tight, itchy, and easily irritated because the outer barrier is thin, leaky, and poorly equipped to block irritants or retain moisture.',
        bullets: [
          'Over time, this creates a feedback loop where every sting teaches the system to stay hyper-vigilant',
          'People become afraid to try anything new, limiting their ability to address other skin concerns',
          'The barrier is both structurally weak (lipid deficiency) and functionally impaired (inflammation)',
          'Nerve endings sit exposed and over-reactive, interpreting normal stimuli as threats'
        ]
      },
      {
        heading: 'The Three-Phase Journey',
        content: 'Recovery from chronic sensitivity follows a predictable timeline when the right support is in place.',
        bullets: [
          'Phase 1 (Weeks 0-2): Hyper-Reactive - Focus exclusively on calming inflammation and beginning barrier repair',
          'Phase 2 (Weeks 3-6): Stabilizing - Continue barrier support while reactivity decreases',
          'Phase 3 (Week 7+): Confident Explorer - Barrier is strong enough to introduce gentle renewal actives'
        ]
      }
    ],
    products: [
      'The Great Harmonizer (8.0% MTRX-CBD Calm Concentrate)',
      'The Mason (MTRX-CBD + Ceramides Barrier Repair)',
      'The Naturalist (MTRX-CBD + Bakuchiol Gentle Renewal)'
    ]
  },
  'founder-vision': {
    title: 'FOUNDER VISION',
    subtitle: 'Designing Tomorrow\'s Skin, Today',
    description: 'FOUNDER VISION is the compass that steers SL Cosmetica toward a future where skincare behaves like precision medicine but feels like a daily ritual. The goal is to dissolve the gap between clinical evidence and bathroom-sink reality, so every formula acts like a protocol and every interface teaches as much as it seduces.',
    sections: [
      {
        heading: 'The Founding Mandate',
        content: 'Our founder came out of the clinical world with a simple frustration: patients received pharmaceutical-grade care inside the treatment room, then went home to products that spoke in poetry instead of data. The vision for SL Cosmetica was to close that loop—build a line where peptides, CBD, and barrier science are handled with the same discipline as a prescription, but delivered in textures and experiences that invite consistent, joyful use. Rather than chasing trends, the founding mandate is to read pathology first, then design both formula and interface as a single system: actives chosen for mechanism, packaging that reveals the science instead of hiding it, and a UI that turns complex biology into intuitive visuals. The north star is a world where consumers navigate their routines with the same clarity as a well-written clinical chart—only rendered in light, motion, and touch instead of paper and jargon.'
      },
      {
        heading: 'Clinic-Grade, Everyday',
        content: 'Skincare should borrow the rigor of a clinical protocol while respecting the rhythms of real life—commutes, climate, stress, and screen time. The Protocol Planner HUD displays AM/PM routines as orbital systems around a central "Today\'s Skin" node, with products appearing as glowing capsules that can be rearranged by dragging, while micro-tooltips explain each step\'s contribution to barrier, structure, or tone.'
      },
      {
        heading: 'Science You Can See',
        content: 'If the user cannot see what a molecule does, they cannot trust it. The founder\'s vision is to make mechanisms visible, not abstract. When a product is selected, a translucent skin cross-section appears with CBD, peptides, and ceramides flowing as color-coded streams, each animating to its depth of action. Users can toggle layers (Barrier, Matrix, Pigment) to watch where each complex performs, turning ingredient decks into living schematics.'
      },
      {
        heading: 'Radical Personal Agency',
        content: 'The future client is not passive; they want tools, not sermons. The founder\'s vision is to hand them levers to customize, not prescriptions to obey blindly. Three sliders labeled "Calm," "Refine," and "Lift" allow users to adjust their protocol emphasis. As sliders move, recommended products re-arrange and micro-animations shift emphasis (e.g., barrier glow intensifies as "Calm" increases), with a protocol load readout (Low/Moderate/Intensive) helping users pace their actives consciously.'
      },
      {
        heading: 'Ethics as Default Setting',
        content: 'Clinical sophistication is meaningless if it ignores ethics or environmental impact; the founder treats sustainability and transparency as non-negotiable system requirements, not add-ons. Floating switches for "Vegan-only," "Max Refill," and "Lowest Footprint Shipping" re-filter the product grid in real time, while a small impact meter displays estimated carbon and packaging savings, reinforcing that every choice has a visible consequence.'
      },
      {
        heading: 'Ever-Updating OS, Not a Static Brand',
        content: 'The founder sees SL Cosmetica as an operating system for skin health: versioned, patched, and updated as new data emerges. Nothing, not even the hero SKU, is exempt from upgrade. A Vision Roadmap strip displays upcoming milestones with progress bars—2026: Full blue-light defense layer (65% complete), 2027: Atopic-specific microbiome suite (40% complete), 2028: Climate-adaptive formulation matrix (25% complete). Clicking a milestone opens plain-language explanations of research underway and how it will translate into future protocols.'
      }
    ]
  }
}
