import { Product } from './types'
import laSegundaPielImage from '@/assets/images/LOCION_2.jpeg'
import productImage from '@/assets/images/CREMA_FACIAL_CBD_1.jpeg'
import shamp3Image from '@/assets/images/SHAMPOO_1.jpeg'
import condi6Image from '@/assets/images/condi6.png'
import cremaFacialImage1 from '@/assets/images/CREMA_FACIAL_CBD_1.jpeg'
import cremaFacialImage2 from '@/assets/images/CREMA_FACIAL_CBD_2.jpeg'
import cremaFacialImage3 from '@/assets/images/CREMA_FACIAL_CBD_3.jpeg'
import cremaRetinolImage1 from '@/assets/images/CREMA_FACIAL_RETINOL_1.jpeg'
import cremaRetinolImage2 from '@/assets/images/CREMA_FACIAL_RETINOL_2.jpeg'
import cremaRetinolImage3 from '@/assets/images/CREMA_FACIAL_RETINOL_3.jpeg'
import cremaHialuronicoImage1 from '@/assets/images/CREMA_FACIAL_ACIDO_HIALURONICO_1.jpeg'
import cremaHialuronicoImage2 from '@/assets/images/CREMA_FACIAL_ACIDO_HIALURONICO_2.jpeg'
import cremaHialuronicoImage3 from '@/assets/images/CREMA_FACIAL_ACIDO_HIALURONICO_3.jpeg'
import acondicionadorImage1 from '@/assets/images/ACONDICIONADOR_1.jpeg'
import acondicionadorImage2 from '@/assets/images/ACONDICIONADOR_2.jpeg'
import acondicionadorImage3 from '@/assets/images/ACONDICIONADOR_3.jpeg'
import shampooImage1 from '@/assets/images/SHAMPOO_1.jpeg'
import shampooImage2 from '@/assets/images/SHAMPOO_2.jpeg'
import shampooImage3 from '@/assets/images/SHAMPOO_3.jpeg'
import locionImage1 from '@/assets/images/LOCION_2.jpeg'
import locionImage2 from '@/assets/images/LOCION_2.jpeg'
import locionImage3 from '@/assets/images/LOCION_3.jpeg'

export const skinConditions = [
  'Aging',
  'Imperfections',
  'Hyperpigmentation',
  'Dehydration',
  'Rosacea',
  'Sensitivity',
  'Acne',
  'Dark Circles',
  'Fine Lines',
  'Loss of Firmness'
]

export const mockProducts: Product[] = [
  {
    id: 'mtrx-001',
    name: {
      en: 'The Great Harmonizer',
      es: 'El Gran Armonizador'
    },
    subtitle: {
      en: '8.0%+ MTRX-CBD',
      es: '8.0%+ MTRX-CBD'
    },
    description: {
      en: 'The Foundation: 8.0%+ MTRX-CBD. Silences the "noise" of stress to create a peaceful equilibrium. Before you can build, you must balance.',
      es: 'La Base: 8.0%+ MTRX-CBD. Silencia el "ruido" del estrés para crear un equilibrio pacífico. Antes de construir, debes equilibrar.'
    },
    price: {
      BRL: 489,
      MXN: 2090,
      COP: 150000
    },
    image: cremaFacialImage1,
    gallery: [cremaFacialImage1, cremaFacialImage2, cremaFacialImage3],
    category: 'anti-aging-facial-cream',
    skinConditions: ['Sensitivity', 'Rosacea', 'Dehydration', 'Loss of Firmness'],
    ingredients: ['8.0%+ MTRX-CBD', 'Evening Primrose Oil (GLA)', 'Shea Butter Triterpenes', 'Panthenol (Pro-Vitamin B5)', 'Niacinamide (Vitamin B3)', 'Vitamin E'],
    benefits: {
      en: [
        'Silences inflammation and stress-induced skin noise',
        'Prepares skin canvas for active treatment absorption',
        'Strengthens barrier function and reduces TEWL',
        'Regulates sebum production for balanced hydration',
        'Ideal for post-shave irritation and redness (male grooming)'
      ],
      es: [
        'Silencia la inflamación y el ruido cutáneo inducido por estrés',
        'Prepara el lienzo cutáneo para la absorción de tratamientos activos',
        'Fortalece la función de barrera y reduce la PTEA',
        'Regula la producción de sebo para hidratación equilibrada',
        'Ideal para irritación post-afeitado y enrojecimiento (grooming masculino)'
      ]
    },
    clinicalData: [
      { metric: { en: 'Redness Reduction', es: 'Reducción de Enrojecimiento' }, improvement: 72 },
      { metric: { en: 'Barrier Integrity', es: 'Integridad de Barrera' }, improvement: 65 },
      { metric: { en: 'Skin Calm Index', es: 'Índice de Calma Cutánea' }, improvement: 81 }
    ],
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=600&fit=crop'
    },
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-002',
    name: {
      en: 'The Paradox',
      es: 'La Paradoja'
    },
    subtitle: {
      en: '8.0%+ MTRX-CBD + Retinol',
      es: '8.0%+ MTRX-CBD + Retinol'
    },
    description: {
      en: 'The Time Bender: CBD + Retinol. Renewal without redness; accelerating youth while freezing inflammation.',
      es: 'El Doblador del Tiempo: CBD + Retinol. Renovación sin enrojecimiento; acelerando la juventud mientras congela la inflamación.'
    },
    price: {
      BRL: 589,
      MXN: 2490,
      COP: 150000
    },
    image: cremaRetinolImage2,
    gallery: [cremaRetinolImage2, cremaRetinolImage1, cremaRetinolImage3],
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Fine Lines', 'Acne', 'Imperfections'],
    ingredients: ['8.0%+ MTRX-CBD', 'All-trans-Retinol', 'Base Actives (Evening Primrose, Shea, Panthenol, Niacinamide)'],
    benefits: {
      en: [
        'Accelerates collagen production and cell turnover',
        'Minimizes wrinkles, fine lines, and acne scars',
        'CBD buffers retinol irritation for zero "retinol burn"',
        'Improves texture and pore appearance',
        'Suitable for effective anti-aging without photosensitivity management'
      ],
      es: [
        'Acelera la producción de colágeno y renovación celular',
        'Minimiza arrugas, líneas finas y cicatrices de acné',
        'CBD amortigua la irritación del retinol para cero "ardor de retinol"',
        'Mejora la textura y apariencia de poros',
        'Adecuado para anti-envejecimiento efectivo sin gestión de fotosensibilidad'
      ]
    },
    clinicalData: [
      { metric: { en: 'Wrinkle Depth Reduction', es: 'Reducción de Profundidad de Arrugas' }, improvement: 58 },
      { metric: { en: 'Cell Renewal Rate', es: 'Tasa de Renovación Celular' }, improvement: 64 },
      { metric: { en: 'Retinol Tolerance', es: 'Tolerancia al Retinol' }, improvement: 89 }
    ],
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1612834439558-5e0674be8755?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=600&fit=crop'
    },
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-010',
    name: {
      en: 'The Rainmaker',
      es: 'El Hacedor de Lluvia'
    },
    subtitle: {
      en: '8.0%+ MTRX-CBD + Hyaluronic Acid',
      es: '8.0%+ MTRX-CBD + Ácido Hialurónico'
    },
    description: {
      en: 'The Hydro-Lock: CBD + Hyaluronic Acid. Creates a deep reservoir for a plump, dewy bounce.',
      es: 'El Hidro-Lock: CBD + Ácido Hialurónico. Crea un reservorio profundo para un rebote regordete y radiante.'
    },
    price: {
      BRL: 529,
      MXN: 2290,
      COP: 150000
    },
    image: cremaHialuronicoImage1,
    gallery: [cremaHialuronicoImage1, cremaHialuronicoImage2, cremaHialuronicoImage3],
    category: 'anti-aging-facial-cream',
    skinConditions: ['Dehydration', 'Aging', 'Fine Lines'],
    ingredients: ['8.0%+ MTRX-CBD', 'Sodium Hyaluronate (Multi-Weight HA)', 'Base Actives'],
    benefits: {
      en: [
        'Floods skin with volumizing moisture (holds 1000x weight in water)',
        'Prevents "flash drying" effect of standalone HA serums',
        'Plumps fine lines and creates dewy bounce',
        'CBD strengthens barrier to lock in hydration',
        'Multi-weight HA penetrates all skin layers'
      ],
      es: [
        'Inunda piel con humedad voluminizante (retiene 1000x su peso en agua)',
        'Previene efecto de "secado rápido" de sérums HA solos',
        'Rellena líneas finas y crea rebote radiante',
        'CBD fortalece barrera para retener hidratación',
        'HA multi-peso penetra todas las capas cutáneas'
      ]
    },
    clinicalData: [
      { metric: { en: 'Hydration Increase', es: 'Aumento de Hidratación' }, improvement: 92 },
      { metric: { en: 'Plumpness Score', es: 'Puntuación de Relleno' }, improvement: 79 },
      { metric: { en: 'Moisture Retention', es: 'Retención de Humedad' }, improvement: 86 }
    ],
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1614329375022-0a7a6125f821?w=800&h=600&fit=crop'
    },
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-004',
    name: {
      en: 'The Sculptor',
      es: 'El Escultor'
    },
    subtitle: {
      en: '8.0%+ MTRX-CBD + Polypeptides',
      es: '8.0%+ MTRX-CBD + Polipéptidos'
    },
    description: {
      en: 'The Architect: CBD + Polypeptides. Rebuilds the scaffolding of the skin to defy gravity.',
      es: 'El Arquitecto: CBD + Polipéptidos. Reconstruye el andamiaje de la piel para desafiar la gravedad.'
    },
    price: {
      BRL: 649,
      MXN: 2790,
      COP: 150000
    },
    image: productImage,
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Loss of Firmness', 'Fine Lines'],
    ingredients: ['8.0%+ MTRX-CBD', 'Peptides', 'Base Actives'],
    benefits: {
      en: [
        'Signals collagen and elastin production for structural support',
        'Lifts, firms, and defines facial contours',
        'Prevents "inflammaging" that degrades collagen',
        'Ideal for prejuvenation (18-35 demographic)',
        'Perfect for male grooming to achieve professional "executive look"'
      ],
      es: [
        'Señaliza producción de colágeno y elastina para soporte estructural',
        'Levanta, reafirma y define contornos faciales',
        'Previene el "inflamaging" que degrada el colágeno',
        'Ideal para prejuvenación (demográfico 18-35)',
        'Perfecto para grooming masculino para lograr "look ejecutivo" profesional'
      ]
    },
    comingSoon: true,
    clinicalData: [
      { metric: { en: 'Collagen Density', es: 'Densidad de Colágeno' }, improvement: 62 },
      { metric: { en: 'Skin Firmness', es: 'Firmeza Cutánea' }, improvement: 67 },
      { metric: { en: 'Lift & Contour', es: 'Levantamiento y Contorno' }, improvement: 54 }
    ],
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1614329375022-0a7a6125f821?w=800&h=600&fit=crop'
    },
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-005',
    name: {
      en: 'Sunscreen',
      es: 'Protector Solar'
    },
    subtitle: {
      en: '8.0%+ MTRX-CBD + Ferulic Acid',
      es: '8.0%+ MTRX-CBD + Ácido Ferúlico'
    },
    description: {
      en: 'The Shield: CBD + Ferulic Acid. Invisible armor that neutralizes urban pollution and UV enemies.',
      es: 'El Escudo: CBD + Ácido Ferúlico. Armadura invisible que neutraliza la polución urbana y enemigos UV.'
    },
    price: {
      BRL: 599,
      MXN: 2590,
      COP: 150000
    },
    image: productImage,
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Hyperpigmentation'],
    ingredients: ['8.0%+ MTRX-CBD', 'Ferulic Acid', 'Base Actives'],
    benefits: {
      en: [
        'Double shield against UV damage and urban pollution',
        'Neutralizes free radicals before DNA damage occurs',
        'Stabilizes skin against oxidative stress',
        'Essential for urban 18-35 demographic exposed to pollution',
        'Prevents photoaging and environmental skin degradation'
      ],
      es: [
        'Doble escudo contra daño UV y polución urbana',
        'Neutraliza radicales libres antes de que ocurra daño al ADN',
        'Estabiliza la piel contra estrés oxidativo',
        'Esencial para demográfico urbano 18-35 expuesto a polución',
        'Previene fotoenvejecimiento y degradación cutánea ambiental'
      ]
    },
    comingSoon: true,
    clinicalData: [
      { metric: { en: 'UV Protection Index', es: 'Índice de Protección UV' }, improvement: 76 },
      { metric: { en: 'Free Radical Neutralization', es: 'Neutralización de Radicales Libres' }, improvement: 83 },
      { metric: { en: 'Photoaging Prevention', es: 'Prevención de Fotoenvejecimiento' }, improvement: 68 }
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-006',
    name: {
      en: 'The Spark',
      es: 'La Chispa'
    },
    subtitle: {
      en: '8.0%+ MTRX-CBD + CoQ10',
      es: '8.0%+ MTRX-CBD + CoQ10'
    },
    description: {
      en: 'The Resurrector: CBD + CoQ10. Reignites cellular engines; an espresso shot for tired complexions.',
      es: 'El Resucitador: CBD + CoQ10. Reaviva los motores celulares; un espresso para tez cansada.'
    },
    price: {
      BRL: 569,
      MXN: 2490,
      COP: 150000
    },
    image: productImage,
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Dark Circles', 'Hyperpigmentation'],
    ingredients: ['8.0%+ MTRX-CBD', 'Ubiquinone (CoQ10)', 'Base Actives'],
    benefits: {
      en: [
        'Re-energizes mitochondrial activity in skin cells',
        'Erases signs of fatigue and "tired face"',
        'Reduces orbital circles and dullness',
        'Protects cells from oxidative damage during energy production',
        'Ideal for high-stress professionals and sleep-deprived demographics'
      ],
      es: [
        'Re-energiza la actividad mitocondrial en células cutáneas',
        'Borra signos de fatiga y "cara cansada"',
        'Reduce círculos orbitales y opacidad',
        'Protege células de daño oxidativo durante producción de energía',
        'Ideal para profesionales de alto estrés y demográficos con privación de sueño'
      ]
    },
    comingSoon: true,
    clinicalData: [
      { metric: { en: 'Cellular Energy Increase', es: 'Aumento de Energía Celular' }, improvement: 73 },
      { metric: { en: 'Fatigue Sign Reduction', es: 'Reducción de Signos de Fatiga' }, improvement: 61 },
      { metric: { en: 'Radiance Recovery', es: 'Recuperación de Luminosidad' }, improvement: 69 }
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 'mtrx-008',
    name: {
      en: 'Nature\'s Whisper',
      es: 'El Susurro de la Naturaleza'
    },
    subtitle: {
      en: '8.0%+ MTRX-CBD + Bakuchiol',
      es: '8.0%+ MTRX-CBD + Bakuchiol'
    },
    description: {
      en: 'The Naturalist: CBD + Bakuchiol. Ancient botanical wisdom for powerful, gentle renewal.',
      es: 'El Naturalista: CBD + Bakuchiol. Sabiduría botánica ancestral para renovación poderosa y gentil.'
    },
    price: {
      BRL: 549,
      MXN: 2390,
      COP: 150000
    },
    image: productImage,
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Sensitivity', 'Fine Lines'],
    ingredients: ['8.0%+ MTRX-CBD', 'Bakuchiol', 'Base Actives'],
    benefits: {
      en: [
        'Delivers retinol-like cell renewal without irritation',
        'Safe for daytime use (no photosensitivity)',
        'Pregnancy-safe anti-aging alternative',
        'Super-gentle for sensitive skin types',
        'Combines ancient plant wisdom with modern CBD science'
      ],
      es: [
        'Entrega renovación celular tipo retinol sin irritación',
        'Seguro para uso diurno (sin fotosensibilidad)',
        'Alternativa anti-envejecimiento segura para embarazo',
        'Super-gentil para tipos de piel sensible',
        'Combina sabiduría vegetal ancestral con ciencia moderna de CBD'
      ]
    },
    comingSoon: true,
    clinicalData: [
      { metric: { en: 'Renewal Rate (Gentle)', es: 'Tasa de Renovación (Gentil)' }, improvement: 52 },
      { metric: { en: 'Sensitivity Index', es: 'Índice de Sensibilidad' }, improvement: 87 },
      { metric: { en: 'Fine Line Reduction', es: 'Reducción de Líneas Finas' }, improvement: 48 }
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-009',
    name: {
      en: 'The Immortal',
      es: 'El Inmortal'
    },
    subtitle: {
      en: '8.0%+ MTRX-CBD + Resveratrol',
      es: '8.0%+ MTRX-CBD + Resveratrol'
    },
    description: {
      en: 'The Immortal: CBD + Resveratrol. The secret of longevity derived from the resilient vine.',
      es: 'El Inmortal: CBD + Resveratrol. El secreto de la longevidad derivado de la vid resiliente.'
    },
    price: {
      BRL: 679,
      MXN: 2890,
      COP: 150000
    },
    image: productImage,
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Hyperpigmentation', 'Loss of Firmness'],
    ingredients: ['8.0%+ MTRX-CBD', 'Resveratrol', 'Base Actives'],
    benefits: {
      en: [
        'Activates sirtuins (longevity genes) for cellular preservation',
        'Prevents collagen erosion over time',
        'Supreme prevention-focused formula for prejuvenation',
        'Protects against oxidative cellular aging',
        'Ideal for the 18-35 "banking collagen" demographic'
      ],
      es: [
        'Activa sirtuinas (genes de longevidad) para preservación celular',
        'Previene erosión de colágeno con el tiempo',
        'Fórmula suprema enfocada en prevención para prejuvenación',
        'Protege contra envejecimiento celular oxidativo',
        'Ideal para demográfico 18-35 "ahorrando colágeno"'
      ]
    },
    comingSoon: true,
    clinicalData: [
      { metric: { en: 'Sirtuin Activation', es: 'Activación de Sirtuinas' }, improvement: 84 },
      { metric: { en: 'Collagen Preservation', es: 'Preservación de Colágeno' }, improvement: 71 },
      { metric: { en: 'Longevity Markers', es: 'Marcadores de Longevidad' }, improvement: 77 }
    ],
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=600&fit=crop'
    },
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-003',
    name: {
      en: 'The Sun Catcher',
      es: 'El Capturador de Luz'
    },
    subtitle: {
      en: '8.0%+ MTRX-CBD + Vitamin C',
      es: '8.0%+ MTRX-CBD + Vitamina C'
    },
    description: {
      en: 'The Illuminator: CBD + Vitamin C. Erases shadows of the past to reveal "Glass Skin" clarity.',
      es: 'El Iluminador: CBD + Vitamina C. Borra las sombras del pasado para revelar claridad de "Piel de Cristal".'
    },
    price: {
      BRL: 629,
      MXN: 2690,
      COP: 150000
    },
    image: productImage,
    category: 'anti-aging-facial-cream',
    skinConditions: ['Hyperpigmentation', 'Aging', 'Dark Circles'],
    ingredients: ['8.0%+ MTRX-CBD', 'Magnesium Ascorbyl Phosphate (MAP)', 'Base Actives'],
    benefits: {
      en: [
        'Treats hyperpigmentation ("manchas") without irritation',
        'Brightens and evens skin tone for glass-skin radiance',
        'Stable vitamin C form prevents oxidation and stinging',
        'Boosts collagen synthesis for anti-aging',
        'Critical for LATAM phototypes prone to post-inflammatory hyperpigmentation'
      ],
      es: [
        'Trata la hiperpigmentación ("manchas") sin irritación',
        'Ilumina y unifica el tono de piel para luminosidad de cristal',
        'Forma estable de vitamina C previene oxidación y ardor',
        'Estimula síntesis de colágeno para anti-envejecimiento',
        'Crítico para fototipos LATAM propensos a hiperpigmentación post-inflamatoria'
      ]
    },
    comingSoon: true,
    clinicalData: [
      { metric: { en: 'Hyperpigmentation Reduction', es: 'Reducción de Hiperpigmentación' }, improvement: 71 },
      { metric: { en: 'Radiance Increase', es: 'Aumento de Luminosidad' }, improvement: 78 },
      { metric: { en: 'Even Tone Score', es: 'Puntuación de Tono Uniforme' }, improvement: 69 }
    ],
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=600&fit=crop'
    },
    isNew: true,
    inStock: true
  },
  {
    id: 'mtrx-011',
    name: {
      en: 'The Mason',
      es: 'El Albañil'
    },
    subtitle: {
      en: '8.0%+ MTRX-CBD + Ceramides',
      es: '8.0%+ MTRX-CBD + Ceramidas'
    },
    description: {
      en: 'The Rebuilder: CBD + Ceramides. Replaces lost mortar to restore the skin\'s protective fortress.',
      es: 'El Reconstructor: CBD + Ceramidas. Reemplaza el mortero perdido para restaurar la fortaleza protectora de la piel.'
    },
    price: {
      BRL: 609,
      MXN: 2690,
      COP: 150000
    },
    image: productImage,
    category: 'anti-aging-facial-cream',
    skinConditions: ['Sensitivity', 'Dehydration', 'Rosacea'],
    ingredients: ['8.0%+ MTRX-CBD', 'Ceramide Complex (NP, AP, EOP)', 'Base Actives'],
    benefits: {
      en: [
        'Rebuilds compromised lipid barrier instantly',
        'Repairs damage from over-exfoliation, harsh treatments, sun exposure',
        'Reduces inflammation that weakens barrier integrity',
        'Ideal post-procedure recovery (peels, laser)',
        'Critical for eczema-prone and severely dry skin'
      ],
      es: [
        'Reconstruye barrera lipídica comprometida instantáneamente',
        'Repara daño de sobre-exfoliación, tratamientos agresivos, exposición solar',
        'Reduce inflamación que debilita integridad de barrera',
        'Ideal para recuperación post-procedimiento (peeling, láser)',
        'Crítico para piel propensa a eczema y severamente seca'
      ]
    },
    comingSoon: true,
    clinicalData: [
      { metric: { en: 'Barrier Repair', es: 'Reparación de Barrera' }, improvement: 88 },
      { metric: { en: 'TEWL Reduction', es: 'Reducción de PTEA' }, improvement: 74 },
      { metric: { en: 'Recovery Speed', es: 'Velocidad de Recuperación' }, improvement: 82 }
    ],
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1612834439558-5e0674be8755?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=600&fit=crop'
    },
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-012',
    name: {
      en: 'The Second Skin',
      es: 'La Segunda Piel'
    },
    subtitle: {
      en: '4.0%+ MTRX-CBD Body Lotion',
      es: '4.0%+ MTRX-CBD Loción Corporal'
    },
    description: {
      en: 'The Body Guard: A 4%+ CBD suit of armor. Treats the body with the same reverence as the face, tightening and smoothing for a "filtered" glow.',
      es: 'El Guardaespaldas: Un traje de armadura 4%+ CBD. Trata el cuerpo con la misma reverencia que el rostro, reafirmando y suavizando para un brillo "filtrado".'
    },
    price: {
      BRL: 389,
      MXN: 1690,
      COP: 170000
    },
    image: locionImage1,
    gallery: [locionImage2, locionImage3],
    category: 'anti-aging-body-care',
    skinConditions: ['Aging', 'Dehydration', 'Loss of Firmness'],
    ingredients: ['4.0%+ MTRX-CBD', 'Base Actives (Evening Primrose, Shea, Panthenol, Niacinamide)', 'Emollient System'],
    benefits: {
      en: [
        'Head-to-toe anti-aging philosophy (body skin = face skin)',
        'Treats body firmness, stretch marks, keratosis pilaris',
        'Soothes post-shave irritation and body inflammation',
        'Culturally critical for LATAM "corpo" (body) culture',
        'Lightweight texture absorbs instantly without greasiness'
      ],
      es: [
        'Filosofía anti-envejecimiento de cabeza a pies (piel corporal = piel facial)',
        'Trata firmeza corporal, estrías, queratosis pilar',
        'Calma irritación post-afeitado e inflamación corporal',
        'Culturalmente crítico para cultura LATAM del "corpo" (cuerpo)',
        'Textura ligera se absorbe instantáneamente sin grasa'
      ]
    },
    clinicalData: [
      { metric: { en: 'Body Firmness', es: 'Firmeza Corporal' }, improvement: 58 },
      { metric: { en: 'Stretch Mark Appearance', es: 'Apariencia de Estrías' }, improvement: 43 },
      { metric: { en: 'Hydration 24h', es: 'Hidratación 24h' }, improvement: 81 }
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-013',
    name: {
      en: 'The Root of Power',
      es: 'La Raíz del Poder'
    },
    subtitle: {
      en: '4.0%+ MTRX-CBD Shampoo',
      es: '4.0%+ MTRX-CBD Shampoo'
    },
    description: {
      en: 'Shampoo & Conditioner. A healthy crown requires fertile ground. This duo fights the inflammation that leads to thinning, ensuring lustrous, ageless hair.',
      es: 'Shampoo y Acondicionador. Una corona saludable requiere terreno fértil. Este dúo combate la inflamación que lleva al adelgazamiento, asegurando cabello lustroso y sin edad.'
    },
    price: {
      BRL: 329,
      MXN: 1490,
      COP: 135000
    },
    image: shampooImage1,
    gallery: [shampooImage1, shampooImage2, shampooImage3],
    category: 'anti-aging-hair-scalp-care',
    skinConditions: ['Aging', 'Sensitivity', 'Dehydration'],
    ingredients: ['4.0%+ MTRX-CBD', 'Keratin Builders', 'Panthenol', 'Biotin', 'Gentle Cleansing System'],
    benefits: {
      en: [
        'Reduces scalp inflammation (primary cause of hair thinning)',
        'Creates optimal follicle environment for growth',
        'Treats hair aging holistically (scalp health = hair health)',
        'Gentle cleansing without stripping natural oils',
        'Critical for prejuvenation (preventing hair loss before it starts)'
      ],
      es: [
        'Reduce inflamación del cuero cabelludo (causa primaria de adelgazamiento)',
        'Crea ambiente folicular óptimo para crecimiento',
        'Trata envejecimiento capilar holísticamente (salud del cuero cabelludo = salud capilar)',
        'Limpieza suave sin despojar aceites naturales',
        'Crítico para prejuvenación (previniendo pérdida capilar antes de que comience)'
      ]
    },
    clinicalData: [
      { metric: { en: 'Scalp Calm Index', es: 'Índice de Calma del Cuero Cabelludo' }, improvement: 76 },
      { metric: { en: 'Hair Density Perception', es: 'Percepción de Densidad Capilar' }, improvement: 54 },
      { metric: { en: 'Shedding Reduction', es: 'Reducción de Caída' }, improvement: 47 }
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-014',
    name: {
      en: 'The Crown Jewel',
      es: 'La Joya de la Corona'
    },
    subtitle: {
      en: '4.0%+ MTRX-CBD Conditioner',
      es: '4.0%+ MTRX-CBD Acondicionador'
    },
    description: {
      en: 'Conditioner. Repairs the hair shaft and seals the cuticle for smoother, more manageable length while adding a healthy radiance from root to tip. CBD helps detoxify the scalp environment and maintain moisture balance within the fiber, helping protect against environmental stress, brittleness, and visible signs of aging.',
      es: 'Acondicionador. Repara el tallo capilar y sella la cutícula para lograr un largo más suave y manejable mientras añade un brillo saludable desde la raíz hasta las puntas. El CBD ayuda a desintoxicar el ambiente del cuero cabelludo y mantener el equilibrio de humedad dentro de la fibra, ayudando a proteger contra el estrés ambiental, la fragilidad y los signos visibles del envejecimiento.'
    },
    price: {
      BRL: 389,
      MXN: 1690,
      COP: 170000
    },
    image: acondicionadorImage1,
    gallery: [acondicionadorImage1, acondicionadorImage2, acondicionadorImage3],
    category: 'anti-aging-hair-scalp-care',
    skinConditions: ['Aging', 'Dehydration', 'Loss of Firmness'],
    ingredients: ['4.0%+ MTRX‑CBD (hemp extract)', 'Cocos Nucifera Oil', 'Behentrimonium Methosulfate & Cetyl Alcohol (conditioning system)', 'Dimethyl Sulfone & Xylitol (delivery co‑solvents)', 'Corn Starch (modified)', 'Lecithin', 'Maltitol & Polysorbate 80 (self‑emulsifying system)', 'Butyrospermum Parkii (Shea) Butter', 'Glycerin', 'Cetearyl Alcohol', 'Wheat Amino Acids', 'Soy Amino Acids', 'Arginine HCl', 'Serine', 'Threonine', 'Argania Spinosa Kernel Oil', 'Panthenol', 'Lactobacillus Ferment', 'Lactobacillus & Cocos Nucifera Fruit Extract', 'Hydrolyzed Wheat Protein', 'Silk Amino Acids', 'Cucumis Sativus (Cucumber) Fruit Extract', 'Lavandula Angustifolia Flower Extract', 'Magnesium Ascorbyl Phosphate'],
    benefits: {
      en: [
        'Seals hair cuticle for shine and smoothness',
        'Prevents moisture loss within hair fiber',
        'Reduces breakage and split ends (hair aging markers)',
        'Lightweight formula doesn\'t weigh down fine hair',
        'Completes the scalp-to-tip anti-aging hair protocol'
      ],
      es: [
        'Sella cutícula capilar para brillo y suavidad',
        'Previene pérdida de humedad dentro de fibra capilar',
        'Reduce quiebre y puntas abiertas (marcadores de envejecimiento capilar)',
        'Fórmula ligera no pesa en cabello fino',
        'Completa el protocolo anti-envejecimiento capilar de cuero cabelludo a puntas'
      ]
    },
    clinicalData: [
      { metric: { en: 'Frizz & Breakage Reduction', es: 'Reducción de Frizz y Quiebre' }, improvement: 72 },
      { metric: { en: 'Fiber & Cuticle Strength', es: 'Fuerza de Fibra y Cutícula' }, improvement: 65 },
      { metric: { en: 'Scalp Comfort & Hair Manageability', es: 'Confort del Cuero Cabelludo y Manejabilidad del Cabello' }, improvement: 81 }
    ],
    isNew: false,
    inStock: true
  }
]
