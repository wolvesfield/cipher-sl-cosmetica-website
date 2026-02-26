export type Language = 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr'

export interface SectionContent {
  [key: string]: string | string[] | SectionContent
}

export const sectionTranslations: Record<Language, SectionContent> = {
  en: {
    // PREVENT Section
    prevent: {
      title: 'PREVENT',
      subtitle: 'Prejuvenation Starts Here',
      description: 'In your 20s and early 30s, the goal is not to erase wrinkles but to slow the clock before they form. Daily exposure to UV, pollution, and stress creates low‑grade inflammation—"inflammaging"—that quietly erodes collagen long before the first line appears.',
      stats: {
        collagenDecline: 'Collagen Decline/Year',
        collagenValue: '1%+',
        ageRange: 'Target Age Range',
        ageValue: '18-35+',
        inflammaging: 'Inflammaging Target',
        inflammagingValue: '100%+',
        defense: 'Defense Active',
        defenseValue: '24/7+',
      },
      mechanisms: {
        cbd: {
          title: 'CBD Isolate',
          subtitle: 'The Foundation',
          description: 'Modulates the cutaneous endocannabinoid system and down‑regulates key inflammatory cytokines (IL‑6, IL‑8, TNF‑α), helping to keep inflammaging under control.',
        },
        peptides: {
          title: 'Peptides',
          subtitle: 'Matrixyl‑Type Complexes',
          description: 'Mimic the skin\'s own repair messengers to support collagen synthesis without peeling or irritation. Banks collagen before natural decline begins.',
        },
        antioxidants: {
          title: 'Antioxidants',
          subtitle: 'Vitamin C, Ferulic, CoQ10',
          description: 'Neutralize UV‑ and pollution‑induced free radicals that drive early pigment change and texture loss. Creates a multi-layered defense shield.',
        },
      },
    },

    // PROTECT Section
    protect: {
      title: 'PROTECT',
      subtitle: 'Barrier Defense',
      description: 'A strong barrier is your first line of defense against environmental stressors and maintains the foundation for healthy, resilient skin.',
      stats: {
        tewl: 'TEWL Reduction',
        tewlValue: '28%+',
        ceramideRatio: 'Ceramide Ratio',
        ceramideValue: '3:1:1+',
        hydration: 'Hydration Lock',
        hydrationValue: '72hrs+',
        barrier: 'Barrier Integrity',
        barrierValue: '100%+',
      },
      mechanisms: {
        ceramides: {
          title: 'Ceramides (3:1:1)',
          subtitle: 'The Mortar',
          description: 'Replenish the lipid "mortar" between corneocytes, measurably improving hydration, TEWL (transepidermal water loss), and clinical signs of dryness and dermatitis. The 3:1:1 ratio mirrors skin\'s natural architecture.',
        },
        niacinamide: {
          title: 'Niacinamide',
          subtitle: 'The Barrier Enhancer',
          description: 'Enhances ceramide synthesis at the cellular level, reduces sebum production, and shows documented improvements in barrier function and redness when used in moisturizers. Critical for post-treatment recovery.',
        },
        hyaluronicAcid: {
          title: 'Hyaluronic Acid',
          subtitle: 'Multi-Weight Hydration',
          description: 'Attracts and holds water in multiple layers of the stratum corneum, supporting barrier recovery and resilience. Different molecular weights target different skin depths for comprehensive hydration.',
        },
        cbd: {
          title: 'MTRX-CBD',
          subtitle: 'The Anti-Inflammatory Shield',
          description: 'Adds an extra anti‑inflammatory layer, helping to reduce irritation from environmental stress and supporting comfort in sensitive or acne‑treated skin. Prevents barrier-weakening inflammation.',
        },
      },
    },

    // CORRECT Section
    correct: {
      title: 'CORRECT',
      subtitle: 'Active Intervention',
      description: 'When visible signs have appeared—pigmentation, texture irregularities, loss of elasticity—targeted correction is required.',
    },

    // AGING Section
    aging: {
      title: 'Aging',
      subtitle: 'Understanding Skin Aging',
      description: 'Comprehensive approach to address the multiple mechanisms of skin aging through scientifically validated active ingredients.',
      mechanisms: {
        retinol: {
          title: 'Retinoids/Bakuchiol',
          subtitle: 'Cellular Renewal Engine',
          description: 'Accelerate keratinocyte turnover, stimulate collagen I/III synthesis, and refine pores and texture while CBD reduces the irritation cascade.',
        },
        peptides: {
          title: 'Peptides (Matrixyl 3000)',
          subtitle: 'Structural Architects',
          description: 'Signal fibroblasts to rebuild collagen and elastin networks, improving firmness and snap‑back over time.',
        },
        antioxidants: {
          title: 'Antioxidants',
          subtitle: 'Vitamin C / Resveratrol',
          description: 'Neutralize free radicals that drive collagen fragmentation and pigment clustering.',
        },
        barrier: {
          title: 'Barrier Support',
          subtitle: 'Ceramides & Hyaluronic Acid',
          description: 'Keep the barrier resilient so anti‑aging actives can be used regularly without chronic micro‑damage.',
        },
      },
    },

    // OUR PROMISE Section
    ourPromise: {
      title: 'Our Promise',
      subtitle: 'Clinical Luxury, Transparent Science',
      description: 'We combine pharmaceutical-grade formulation with transparent communication, ensuring every claim is backed by published science.',
    },

    // FOUNDER VISION Section
    founderVision: {
      title: 'Founder Vision',
      subtitle: 'The Future of Skincare',
      description: 'Our commitment to innovation, sustainability, and personalized skincare solutions.',
    },

    // IMPERFECTIONS Section
    imperfections: {
      title: 'Imperfections',
      subtitle: 'Targeted Solutions',
      description: 'Address blemishes, uneven texture, and skin irregularities with precision formulations.',
    },

    // HYPERPIGMENTATION Section
    hyperpigmentation: {
      title: 'Hyperpigmentation',
      subtitle: 'Even Tone, Bright Complexion',
      description: 'Combat dark spots, melasma, and uneven pigmentation with clinically proven ingredients.',
    },

    // DEHYDRATION Section
    dehydration: {
      title: 'Dehydration',
      subtitle: 'Deep Hydration',
      description: 'Restore moisture balance and plump skin from within.',
    },

    // ROSACEA Section
    rosacea: {
      title: 'Rosacea',
      subtitle: 'Calm Redness',
      description: 'Soothe inflammation and reduce visible redness with gentle, effective formulations.',
    },

    // SENSITIVITY Section
    sensitivity: {
      title: 'Sensitivity',
      subtitle: 'Gentle Protection',
      description: 'Strengthen skin resilience and reduce reactivity to environmental triggers.',
    },

    // ACNE Section
    acne: {
      title: 'Acne',
      subtitle: 'Clear Complexion',
      description: 'Combat breakouts while maintaining skin barrier health.',
    },

    // DARK CIRCLES Section
    darkCircles: {
      title: 'Dark Circles',
      subtitle: 'Bright Eyes',
      description: 'Reduce under-eye shadows and puffiness for a refreshed appearance.',
    },

    // FINE LINES Section
    fineLines: {
      title: 'Fine Lines',
      subtitle: 'Smooth Texture',
      description: 'Minimize the appearance of fine lines and wrinkles.',
    },

    // LOSS OF FIRMNESS Section
    lossOfFirmness: {
      title: 'Loss of Firmness',
      subtitle: 'Lift & Sculpt',
      description: 'Restore skin elasticity and contour definition.',
    },
  },

  es: {
    // PREVENT Section
    prevent: {
      title: 'PREVENIR',
      subtitle: 'El Prejuvenecimiento Comienza Aquí',
      description: 'En tus 20 y principios de los 30, el objetivo no es borrar las arrugas sino ralentizar el reloj antes de que se formen. La exposición diaria a los rayos UV, la contaminación y el estrés crea una inflamación de bajo grado—"inflamación del envejecimiento"—que erosiona silenciosamente el colágeno mucho antes de que aparezca la primera línea.',
      stats: {
        collagenDecline: 'Disminución de Colágeno/Año',
        collagenValue: '1%+',
        ageRange: 'Rango de Edad Objetivo',
        ageValue: '18-35+',
        inflammaging: 'Objetivo de Inflamación',
        inflammagingValue: '100%+',
        defense: 'Defensa Activa',
        defenseValue: '24/7+',
      },
      mechanisms: {
        cbd: {
          title: 'Aislado de CBD',
          subtitle: 'La Base',
          description: 'Modula el sistema endocannabinoide cutáneo y regula a la baja las citocinas inflamatorias clave (IL-6, IL-8, TNF-α), ayudando a mantener bajo control la inflamación del envejecimiento.',
        },
        peptides: {
          title: 'Péptidos',
          subtitle: 'Complejos Tipo Matrixyl',
          description: 'Imitan los mensajeros de reparación propios de la piel para apoyar la síntesis de colágeno sin peeling ni irritación. Acumula colágeno antes de que comience el declive natural.',
        },
        antioxidants: {
          title: 'Antioxidantes',
          subtitle: 'Vitamina C, Ferúlico, CoQ10',
          description: 'Neutralizan los radicales libres inducidos por los rayos UV y la contaminación que impulsan el cambio temprano de pigmento y la pérdida de textura. Crea un escudo de defensa multicapa.',
        },
      },
    },

    // PROTECT Section
    protect: {
      title: 'PROTEGER',
      subtitle: 'Defensa de Barrera',
      description: 'Una barrera fuerte es tu primera línea de defensa contra los factores estresantes ambientales y mantiene la base para una piel sana y resistente.',
      stats: {
        tewl: 'Reducción de TEWL',
        tewlValue: '28%+',
        ceramideRatio: 'Proporción de Ceramidas',
        ceramideValue: '3:1:1+',
        hydration: 'Bloqueo de Hidratación',
        hydrationValue: '72hrs+',
        barrier: 'Integridad de Barrera',
        barrierValue: '100%+',
      },
      mechanisms: {
        ceramides: {
          title: 'Ceramidas (3:1:1)',
          subtitle: 'El Mortero',
          description: 'Reponen el "mortero" lipídico entre los corneocitos, mejorando mediblemente la hidratación, TEWL (pérdida de agua transepidérmica) y los signos clínicos de sequedad y dermatitis. La proporción 3:1:1 refleja la arquitectura natural de la piel.',
        },
        niacinamide: {
          title: 'Niacinamida',
          subtitle: 'El Potenciador de Barrera',
          description: 'Mejora la síntesis de ceramidas a nivel celular, reduce la producción de sebo y muestra mejoras documentadas en la función de barrera y enrojecimiento cuando se usa en hidratantes. Crítico para la recuperación post-tratamiento.',
        },
        hyaluronicAcid: {
          title: 'Ácido Hialurónico',
          subtitle: 'Hidratación Multi-Peso',
          description: 'Atrae y retiene agua en múltiples capas del estrato córneo, apoyando la recuperación y resistencia de la barrera. Diferentes pesos moleculares se dirigen a diferentes profundidades de la piel para una hidratación integral.',
        },
        cbd: {
          title: 'MTRX-CBD',
          subtitle: 'El Escudo Antiinflamatorio',
          description: 'Agrega una capa antiinflamatoria adicional, ayudando a reducir la irritación del estrés ambiental y apoyando la comodidad en la piel sensible o tratada por acné. Previene la inflamación que debilita la barrera.',
        },
      },
    },

    // CORRECT Section
    correct: {
      title: 'CORREGIR',
      subtitle: 'Intervención Activa',
      description: 'Cuando han aparecido signos visibles—pigmentación, irregularidades de textura, pérdida de elasticidad—se requiere corrección dirigida.',
    },

    // AGING Section
    aging: {
      title: 'Envejecimiento',
      subtitle: 'Entendiendo el Envejecimiento de la Piel',
      description: 'Enfoque integral para abordar los múltiples mecanismos del envejecimiento de la piel a través de ingredientes activos científicamente validados.',
      mechanisms: {
        retinol: {
          title: 'Retinoides/Bakuchiol',
          subtitle: 'Motor de Renovación Celular',
          description: 'Aceleran la renovación de queratinocitos, estimulan la síntesis de colágeno I/III y refinan los poros y la textura mientras el CBD reduce la cascada de irritación.',
        },
        peptides: {
          title: 'Péptidos (Matrixyl 3000)',
          subtitle: 'Arquitectos Estructurales',
          description: 'Señalan a los fibroblastos para reconstruir las redes de colágeno y elastina, mejorando la firmeza y la elasticidad con el tiempo.',
        },
        antioxidants: {
          title: 'Antioxidantes',
          subtitle: 'Vitamina C / Resveratrol',
          description: 'Neutralizan los radicales libres que impulsan la fragmentación del colágeno y la agrupación de pigmentos.',
        },
        barrier: {
          title: 'Soporte de Barrera',
          subtitle: 'Ceramidas y Ácido Hialurónico',
          description: 'Mantienen la barrera resistente para que los activos antiedad puedan usarse regularmente sin micro-daño crónico.',
        },
      },
    },

    // OUR PROMISE Section
    ourPromise: {
      title: 'Nuestra Promesa',
      subtitle: 'Lujo Clínico, Ciencia Transparente',
      description: 'Combinamos formulación de grado farmacéutico con comunicación transparente, asegurando que cada afirmación esté respaldada por ciencia publicada.',
    },

    // FOUNDER VISION Section
    founderVision: {
      title: 'Visión del Fundador',
      subtitle: 'El Futuro del Cuidado de la Piel',
      description: 'Nuestro compromiso con la innovación, la sostenibilidad y las soluciones personalizadas de cuidado de la piel.',
    },

    // IMPERFECTIONS Section
    imperfections: {
      title: 'Imperfecciones',
      subtitle: 'Soluciones Dirigidas',
      description: 'Aborda imperfecciones, textura irregular e irregularidades de la piel con formulaciones de precisión.',
    },

    // HYPERPIGMENTATION Section
    hyperpigmentation: {
      title: 'Hiperpigmentación',
      subtitle: 'Tono Uniforme, Complexión Luminosa',
      description: 'Combate manchas oscuras, melasma y pigmentación desigual con ingredientes clínicamente probados.',
    },

    // DEHYDRATION Section
    dehydration: {
      title: 'Deshidratación',
      subtitle: 'Hidratación Profunda',
      description: 'Restaura el equilibrio de humedad y rellena la piel desde dentro.',
    },

    // ROSACEA Section
    rosacea: {
      title: 'Rosácea',
      subtitle: 'Calma el Enrojecimiento',
      description: 'Calma la inflamación y reduce el enrojecimiento visible con formulaciones suaves y efectivas.',
    },

    // SENSITIVITY Section
    sensitivity: {
      title: 'Sensibilidad',
      subtitle: 'Protección Suave',
      description: 'Fortalece la resistencia de la piel y reduce la reactividad a los desencadenantes ambientales.',
    },

    // ACNE Section
    acne: {
      title: 'Acné',
      subtitle: 'Complexión Clara',
      description: 'Combate los brotes mientras mantiene la salud de la barrera cutánea.',
    },

    // DARK CIRCLES Section
    darkCircles: {
      title: 'Ojeras',
      subtitle: 'Ojos Brillantes',
      description: 'Reduce las sombras debajo de los ojos y la hinchazón para una apariencia renovada.',
    },

    // FINE LINES Section
    fineLines: {
      title: 'Líneas Finas',
      subtitle: 'Textura Suave',
      description: 'Minimiza la apariencia de líneas finas y arrugas.',
    },

    // LOSS OF FIRMNESS Section
    lossOfFirmness: {
      title: 'Pérdida de Firmeza',
      subtitle: 'Levantar y Esculpir',
      description: 'Restaura la elasticidad de la piel y la definición del contorno.',
    },
  },
}

export function getSectionTranslation(
  language: Language,
  sectionKey: string,
  path: string
): string {
  const keys = path.split('.')
  let current: Record<string, unknown> | string | string[] = sectionTranslations[language]?.[sectionKey]
  
  if (!current && language !== 'en') {
    current = sectionTranslations['en']?.[sectionKey]
  }
  
  for (const key of keys) {
    if (current && typeof current === 'object' && !Array.isArray(current)) {
      current = current[key] as Record<string, unknown> | string | string[]
    } else {
      return path
    }
  }
  
  return typeof current === 'string' ? current : path
}
