import { Product } from './types'

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
      en: 'Chapter 1: The Great Harmonizer',
      es: 'Capítulo 1: El Gran Armonizador'
    },
    description: {
      en: 'The Foundation: 8.0% MTRX-CBD. Silences the "noise" of stress to create a peaceful equilibrium. Before you can build, you must balance. This is the blank canvas where true beauty can flourish.',
      es: 'La Base: 8.0% MTRX-CBD. Silencia el "ruido" del estrés para crear un equilibrio pacífico. Antes de construir, debes equilibrar. Este es el lienzo en blanco donde puede florecer la verdadera belleza.'
    },
    price: {
      BRL: 489,
      MXN: 2090,
      COP: 150000
    },
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop',
    category: 'anti-aging-facial-cream',
    skinConditions: ['Sensitivity', 'Rosacea', 'Dehydration', 'Loss of Firmness'],
    ingredients: ['8.0% MTRX-CBD', 'Evening Primrose Oil (GLA)', 'Shea Butter Triterpenes', 'Panthenol (Pro-Vitamin B5)', 'Niacinamide (Vitamin B3)', 'Vitamin E'],
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
      en: 'Chapter 2: The Paradox (The Time Bender)',
      es: 'Capítulo 2: La Paradoja (El Doblador del Tiempo)'
    },
    description: {
      en: 'CBD + Retinol. Renewal without redness; accelerating youth while freezing inflammation. Power without pain. This serum bends time by defying the old law that "beauty is pain."',
      es: 'CBD + Retinol. Renovación sin enrojecimiento; acelerando la juventud mientras congela la inflamación. Poder sin dolor. Este sérum dobla el tiempo desafiando la vieja ley de que "la belleza duele."'
    },
    price: {
      BRL: 589,
      MXN: 2490,
      COP: 150000
    },
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=500&fit=crop',
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Fine Lines', 'Acne', 'Imperfections'],
    ingredients: ['8.0% MTRX-CBD', 'All-trans-Retinol', 'Base Actives (Evening Primrose, Shea, Panthenol, Niacinamide)'],
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
        'Minimiza arrugas, líneas finas y cicatr ices de acné',
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
    id: 'mtrx-003',
    name: {
      en: 'Chapter 3: The Sun Catcher (The Illuminator)',
      es: 'Capítulo 3: El Capturador de Luz (El Iluminador)'
    },
    description: {
      en: 'CBD + Vitamin C. Erases shadows of the past to reveal "Glass Skin" clarity. It captures the light but rejects the damage, treating "manchas" (hyperpigmentation) without the sting.',
      es: 'CBD + Vitamina C. Borra las sombras del pasado para revelar claridad de "Piel de Cristal". Captura la luz pero rechaza el daño, tratando "manchas" (hiperpigmentación) sin ardor.'
    },
    price: {
      BRL: 629,
      MXN: 2690,
      COP: 150000
    },
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop',
    category: 'anti-aging-facial-cream',
    skinConditions: ['Hyperpigmentation', 'Aging', 'Dark Circles'],
    ingredients: ['8.0% MTRX-CBD', 'Magnesium Ascorbyl Phosphate (MAP)', 'Base Actives'],
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
    id: 'mtrx-004',
    name: {
      en: 'Chapter 4: The Sculptor (The Architect)',
      es: 'Capítulo 4: El Escultor (El Arquitecto)'
    },
    description: {
      en: 'CBD + Polypeptides. Rebuilds the scaffolding of the skin to defy gravity. Gravity is a suggestion, not a law. Matrixyl 3000 peptides knit collagen fibers to lift, firm, and define.',
      es: 'CBD + Polipéptidos. Reconstruye el andamiaje de la piel para desafiar la gravedad. La gravedad es una sugerencia, no una ley. Los péptidos Matrixyl 3000 tejen fibras de colágeno para levantar, reafirmar y definir.'
    },
    price: {
      BRL: 649,
      MXN: 2790,
      COP: 150000
    },
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=500&fit=crop',
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Loss of Firmness', 'Fine Lines'],
    ingredients: ['8.0% MTRX-CBD', 'Matrixyl 3000 Peptide Complex', 'Base Actives'],
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
      en: 'Chapter 5: The Guardian',
      es: 'Capítulo 5: El Guardián'
    },
    description: {
      en: 'CBD + Ferulic Acid. Invisible armor that neutralizes urban pollution and UV enemies. The modern world is a battlefield—The Guardian neutralizes free radicals before they touch your DNA.',
      es: 'CBD + Ácido Ferúlico. Armadura invisible que neutraliza la polución urbana y enemigos UV. El mundo moderno es un campo de batalla—El Guardián neutraliza radicales libres antes de que toquen tu ADN.'
    },
    price: {
      BRL: 599,
      MXN: 2590,
      COP: 150000
    },
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=500&fit=crop',
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Hyperpigmentation'],
    ingredients: ['8.0% MTRX-CBD', 'Ferulic Acid', 'Base Actives'],
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
      en: 'Chapter 6: The Spark (The Resurrector)',
      es: 'Capítulo 6: La Chispa (El Resucitador)'
    },
    description: {
      en: 'CBD + CoQ10. Reignites cellular engines; an espresso shot for tired complexions. Fatigue fades your inner light—The Spark reignites mitochondrial power to erase signs of sleepless nights.',
      es: 'CBD + CoQ10. Reaviva los motores celulares; un espresso para tez cansada. La fatiga apaga tu luz interior—La Chispa reaviva el poder mitocondrial para borrar signos de noches sin sueño.'
    },
    price: {
      BRL: 569,
      MXN: 2490,
      COP: 150000
    },
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=500&fit=crop',
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Dark Circles', 'Hyperpigmentation'],
    ingredients: ['8.0% MTRX-CBD', 'Ubiquinone (CoQ10)', 'Base Actives'],
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
    clinicalData: [
      { metric: { en: 'Cellular Energy Increase', es: 'Aumento de Energía Celular' }, improvement: 73 },
      { metric: { en: 'Fatigue Sign Reduction', es: 'Reducción de Signos de Fatiga' }, improvement: 61 },
      { metric: { en: 'Radiance Recovery', es: 'Recuperación de Luminosidad' }, improvement: 69 }
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 'mtrx-007',
    name: {
      en: 'Chapter 7: Nature\'s Whisper (The Naturalist)',
      es: 'Capítulo 7: El Susurro de la Naturaleza (El Naturalista)'
    },
    description: {
      en: 'CBD + Bakuchiol. Ancient botanical wisdom for powerful, gentle renewal. For those who prefer a gentle touch, the ancient Babchi plant delivers retinol-like power without photosensitivity.',
      es: 'CBD + Bakuchiol. Sabiduría botánica ancestral para renovación poderosa y gentil. Para quienes prefieren un toque suave, la planta Babchi ancestral entrega poder tipo retinol sin fotosensibilidad.'
    },
    price: {
      BRL: 549,
      MXN: 2390,
      COP: 150000
    },
    image: 'https://images.unsplash.com/photo-1556229010-aa9dc8a85d75?w=400&h=500&fit=crop',
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Sensitivity', 'Fine Lines'],
    ingredients: ['8.0% MTRX-CBD', 'Bakuchiol', 'Base Actives'],
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
    clinicalData: [
      { metric: { en: 'Renewal Rate (Gentle)', es: 'Tasa de Renovación (Gentil)' }, improvement: 52 },
      { metric: { en: 'Sensitivity Index', es: 'Índice de Sensibilidad' }, improvement: 87 },
      { metric: { en: 'Fine Line Reduction', es: 'Reducción de Líneas Finas' }, improvement: 48 }
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-008',
    name: {
      en: 'Chapter 8: The Peacemaker (The Diplomat)',
      es: 'Capítulo 8: El Pacificador (El Diplomático)'
    },
    description: {
      en: 'CBD + Niacinamide. Negotiates with pores to broker a matte, refined peace treaty. It regulates oil production and texture, creating a flawless, balanced complexion.',
      es: 'CBD + Niacinamida. Negocia con los poros para negociar un tratado de paz mate y refinado. Regula la producción de aceite y textura, creando una tez impecable y equilibrada.'
    },
    price: {
      BRL: 579,
      MXN: 2490,
      COP: 150000
    },
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=500&fit=crop',
    category: 'anti-aging-facial-cream',
    skinConditions: ['Imperfections', 'Acne', 'Hyperpigmentation'],
    ingredients: ['8.0% MTRX-CBD', 'Niacinamide (Vitamin B3)', 'Base Actives'],
    benefits: {
      en: [
        'Regulates sebum production for oil control',
        'Minimizes pore appearance and refines texture',
        'Brightens skin tone and reduces hyperpigmentation',
        'Strengthens ceramide barrier for protection',
        'Creates matte, flawless finish without dryness'
      ],
      es: [
        'Regula producción de sebo para control de aceite',
        'Minimiza apariencia de poros y refina textura',
        'Ilumina tono de piel y reduce hiperpigmentación',
        'Fortalece barrera de ceramidas para protección',
        'Crea acabado mate e impecable sin resequedad'
      ]
    },
    clinicalData: [
      { metric: { en: 'Pore Size Reduction', es: 'Reducción de Tamaño de Poros' }, improvement: 64 },
      { metric: { en: 'Oil Control', es: 'Control de Aceite' }, improvement: 78 },
      { metric: { en: 'Texture Refinement', es: 'Refinamiento de Textura' }, improvement: 71 }
    ],
    isNew: false,
    inStock: true
  },
  {
    id: 'mtrx-009',
    name: {
      en: 'Chapter 9: The Immortal (The Preserver)',
      es: 'Capítulo 9: El Inmortal (El Preservador)'
    },
    description: {
      en: 'CBD + Resveratrol. The secret of longevity derived from the resilient vine. Activates sirtuins (longevity genes) while CBD protects the cell membrane for deep cellular preservation.',
      es: 'CBD + Resveratrol. El secreto de la longevidad derivado de la vid resiliente. Activa sirtuinas (genes de longevidad) mientras el CBD protege la membrana celular para preservación celular profunda.'
    },
    price: {
      BRL: 679,
      MXN: 2890,
      COP: 150000
    },
    image: 'https://images.unsplash.com/photo-1556229010-aa9dc8a85d75?w=400&h=500&fit=crop',
    category: 'anti-aging-facial-cream',
    skinConditions: ['Aging', 'Hyperpigmentation', 'Loss of Firmness'],
    ingredients: ['8.0% MTRX-CBD', 'Resveratrol', 'Base Actives'],
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
    clinicalData: [
      { metric: { en: 'Sirtuin Activation', es: 'Activación de Sirtuinas' }, improvement: 84 },
      { metric: { en: 'Collagen Preservation', es: 'Preservación de Colágeno' }, improvement: 71 },
      { metric: { en: 'Longevity Markers', es: 'Marcadores de Longevidad' }, improvement: 77 }
    ],
    beforeAfterImages: {
      before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&h=600&fit=crop'
    },
    isNew: true,
    inStock: true
  },
  {
    id: 'mtrx-010',
    name: {
      en: 'Chapter 10: The Rainmaker',
      es: 'Capítulo 10: El Hacedor de Lluvia'
    },
    description: {
      en: 'CBD + Hyaluronic Acid. Creates a deep reservoir for a plump, dewy bounce. Floods the skin with moisture and locks the gates—volumizing hydration that lasts all day.',
      es: 'CBD + Ácido Hialurónico. Crea un reservorio profundo para un rebote regordete y radiante. Inunda la piel con humedad y cierra las compuertas—hidratación voluminizante que dura todo el día.'
    },
    price: {
      BRL: 529,
      MXN: 2290,
      COP: 150000
    },
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=500&fit=crop',
    category: 'anti-aging-facial-cream',
    skinConditions: ['Dehydration', 'Aging', 'Fine Lines'],
    ingredients: ['8.0% MTRX-CBD', 'Sodium Hyaluronate (Multi-Weight HA)', 'Base Actives'],
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
    id: 'mtrx-011',
    name: {
      en: 'Chapter 11: The Mason (The Rebuilder)',
      es: 'Capítulo 11: El Albañil (El Reconstructor)'
    },
    description: {
      en: 'CBD + Ceramides. Replaces lost mortar to restore the skin\'s protective fortress. When the wall is breached, the Mason repairs—rapid recovery for damaged, over-exfoliated skin.',
      es: 'CBD + Ceramidas. Reemplaza el mortero perdido para restaurar la fortaleza protectora de la piel. Cuando el muro está violado, el Albañil repara—recuperación rápida para piel dañada y sobre-exfoliada.'
    },
    price: {
      BRL: 609,
      MXN: 2690,
      COP: 150000
    },
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=400&h=500&fit=crop',
    category: 'anti-aging-facial-cream',
    skinConditions: ['Sensitivity', 'Dehydration', 'Rosacea'],
    ingredients: ['8.0% MTRX-CBD', 'Ceramide Complex (NP, AP, EOP)', 'Base Actives'],
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
      en: 'Chapter 12: The Second Skin (The Body Guard)',
      es: 'Capítulo 12: La Segunda Piel (El Guardaespaldas)'
    },
    description: {
      en: 'A 4% CBD suit of armor. Treats the body with the same reverence as the face, tightening and smoothing for a "filtered" glow. Anti-aging doesn\'t stop at the chin.',
      es: 'Un traje de armadura 4% CBD. Trata el cuerpo con la misma reverencia que el rostro, reafirmando y suavizando para un brillo "filtrado". El anti-envejecimiento no termina en la barbilla.'
    },
    price: {
      BRL: 389,
      MXN: 1690,
      COP: 170000
    },
    image: 'https://images.unsplash.com/photo-1556229010-aa9dc8a85d75?w=400&h=500&fit=crop',
    category: 'anti-aging-body-care',
    skinConditions: ['Aging', 'Dehydration', 'Loss of Firmness'],
    ingredients: ['4.0% MTRX-CBD', 'Base Actives (Evening Primrose, Shea, Panthenol, Niacinamide)', 'Emollient System'],
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
      en: 'Chapter 13: The Root of Power (Shampoo)',
      es: 'Capítulo 13: La Raíz del Poder (Shampoo)'
    },
    description: {
      en: 'A healthy crown requires fertile ground. This duo fights the inflammation that leads to thinning, ensuring lustrous, ageless hair. Anti-aging for hair starts at the scalp.',
      es: 'Una corona saludable requiere terreno fértil. Este dúo combate la inflamación que lleva al adelgazamiento, asegurando cabello lustroso y sin edad. Anti-envejecimiento para cabello comienza en el cuero cabelludo.'
    },
    price: {
      BRL: 329,
      MXN: 1490,
      COP: 135000
    },
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=400&h=500&fit=crop',
    category: 'anti-aging-hair-scalp-care',
    skinConditions: ['Aging', 'Sensitivity', 'Dehydration'],
    ingredients: ['4.0% MTRX-CBD', 'Keratin Builders', 'Panthenol', 'Biotin', 'Gentle Cleansing System'],
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
    isNew: true,
    inStock: true
  },
  {
    id: 'mtrx-014',
    name: {
      en: 'Chapter 13: The Crown Jewel (Conditioner)',
      es: 'Capítulo 13: La Joya de la Corona (Acondicionador)'
    },
    description: {
      en: 'Repairs the hair shaft and seals the cuticle. CBD maintains moisture balance within the fiber, preventing brittleness and aging. The final step to lustrous, ageless hair.',
      es: 'Repara el tallo capilar y sella la cutícula. El CBD mantiene el equilibrio de humedad dentro de la fibra, previniendo fragilidad y envejecimiento. El paso final hacia cabello lustroso y sin edad.'
    },
    price: {
      BRL: 389,
      MXN: 1690,
      COP: 170000
    },
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=500&fit=crop',
    category: 'anti-aging-hair-scalp-care',
    skinConditions: ['Aging', 'Dehydration', 'Loss of Firmness'],
    ingredients: ['4.0% MTRX-CBD', 'Keratin', 'Panthenol', 'Argan Oil', 'Emollient System'],
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
      { metric: { en: 'Hair Strength', es: 'Fuerza Capilar' }, improvement: 68 },
      { metric: { en: 'Shine Index', es: 'Índice de Brillo' }, improvement: 79 },
      { metric: { en: 'Breakage Reduction', es: 'Reducción de Quiebre' }, improvement: 61 }
    ],
    isNew: true,
    inStock: true
  },
  {
    id: 'mtrx-015',
    name: {
      en: 'The Complete Crown - Shampoo & Conditioner Kit',
      es: 'La Corona Completa - Kit Shampoo y Acondicionador'
    },
    description: {
      en: 'The complete anti-aging hair ritual. Root of Power Shampoo cleanses and calms the scalp, while Crown Jewel Conditioner seals and strengthens. Save when you invest in the full protocol.',
      es: 'El ritual completo anti-envejecimiento capilar. El Shampoo Raíz del Poder limpia y calma el cuero cabelludo, mientras el Acondicionador Joya de la Corona sella y fortalece. Ahorra al invertir en el protocolo completo.'
    },
    price: {
      BRL: 599,
      MXN: 2690,
      COP: 250000
    },
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=500&fit=crop',
    category: 'anti-aging-hair-scalp-care',
    skinConditions: ['Aging', 'Sensitivity', 'Dehydration', 'Loss of Firmness'],
    ingredients: ['4.0% MTRX-CBD', 'Keratin Builders', 'Panthenol', 'Biotin', 'Argan Oil', 'Emollient System'],
    benefits: {
      en: [
        'Complete scalp-to-tip anti-aging hair system',
        'Reduces scalp inflammation and hair thinning',
        'Strengthens hair fiber and prevents breakage',
        'Provides optimal environment for healthy hair growth',
        'Bundle savings on the full hair care protocol'
      ],
      es: [
        'Sistema completo anti-envejecimiento capilar de cuero cabelludo a puntas',
        'Reduce inflamación del cuero cabelludo y adelgazamiento',
        'Fortalece fibra capilar y previene quiebre',
        'Proporciona ambiente óptimo para crecimiento capilar saludable',
        'Ahorro en paquete para el protocolo completo de cuidado capilar'
      ]
    },
    clinicalData: [
      { metric: { en: 'Complete Hair Health', es: 'Salud Capilar Completa' }, improvement: 72 },
      { metric: { en: 'System Synergy', es: 'Sinergia del Sistema' }, improvement: 81 },
      { metric: { en: 'Value Score', es: 'Puntuación de Valor' }, improvement: 88 }
    ],
    isNew: true,
    inStock: true,
    isBundle: true
  }
]
