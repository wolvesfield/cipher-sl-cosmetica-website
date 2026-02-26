export type Language = 'en' | 'es' | 'de' | 'pl' | 'nl' | 'it' | 'fr'

export interface DetailedSectionTranslations {
  [key: string]: Record<string, unknown>
}

export const detailedSectionTranslations: Record<Language, DetailedSectionTranslations> = {
  en: {
    aging: {
      badge: 'SKIN CONDITION',
      title: 'AGING',
      subtitle: 'Rewrite Time, Don\'t Fight It',
      intro: 'Aging is a cumulative systems change in skin—collagen loss, elastin fatigue, slower turnover, and chronic micro‑inflammation—not just "wrinkles on the surface." Supporting the matrix early means preserving structure, not chasing damage later.',
      biologyTitle: 'The Biology of Structural Aging',
      biologyP1: 'Collagen production peaks in the early 20s and then declines by roughly 1% per year, so by 40 many people have lost around a fifth of their dermal support. Micro‑movements, UV exposure, pollution, and sugar‑driven glycation gradually stiffen collagen and thin the dermis, leading to etched expression lines, laxity, and visible fatigue.',
      biologyP2: 'Prejuvenation for the 24–35 cohort means intervening while the architecture is still responsive: supporting fibroblasts, defending against oxidative stress, and smoothing early texture changes before they evolve into fixed folds.',
      biologyP3: 'MTRX\'s anti‑aging axis combines retinoids and bakuchiol for turnover and collagen signaling, peptides for structural reinforcement, and MTRX-CBD to buffer the inflammatory "cost" of these strong actives so users can stay consistent without peeling, burning, or dropping the routine.',
      timelineTitle: 'The Collagen Decline Timeline',
      timelineSubtitle: 'Understanding when and why intervention matters most',
      timeline: [
        { age: '20s', collagen: '100%', description: 'Peak collagen production, optimal skin resilience and regeneration' },
        { age: '25', collagen: '95%', description: 'Collagen decline begins (~1% per year), still highly responsive to intervention' },
        { age: '30', collagen: '90%', description: 'First subtle signs may appear, prevention strategies show maximum ROI' },
        { age: '35', collagen: '85%', description: 'Early lines may become visible, transition from prevention to correction' },
        { age: '40', collagen: '80%', description: 'Loss of 20% structural support, visible changes in firmness and texture' }
      ],
      mechanismsTitle: 'Mechanism Call-outs',
      mechanismsSubtitle: 'How MTRX addresses aging at the cellular and molecular level',
      mechanismsLabel: 'Molecular Mechanisms:',
      expandText: 'Click to expand',
      collapseText: 'Click to collapse',
      mechanisms: [
        {
          id: 'retinol',
          title: 'Retinoids/Bakuchiol',
          subtitle: 'Cellular Renewal Engine',
          description: 'Accelerate keratinocyte turnover, stimulate collagen I/III synthesis, and refine pores and texture while CBD reduces the irritation cascade.',
          details: 'Retinoids bind to nuclear retinoic acid receptors (RARs) to upregulate genes responsible for collagen production and cell differentiation. By accelerating the 28-day epidermal turnover cycle, they effectively "resurface" skin from within, revealing fresher, younger cells while improving texture and tone. Bakuchiol offers a gentler alternative through different pathways, activating collagen synthesis without the photosensitivity or irritation typical of retinoids.',
          mechanism: [
            'Upregulates collagen I and III gene expression in dermal fibroblasts',
            'Inhibits matrix metalloproteinases (MMPs) that degrade collagen',
            'Normalizes keratinization to refine texture and minimize pores',
            'Reduces hyperpigmentation by inhibiting tyrosinase activity',
            'MTRX-CBD buffers irritation, allowing consistent use for maximum results'
          ]
        },
        {
          id: 'peptides',
          title: 'Peptides',
          subtitle: 'Structural Architects',
          description: 'Signal fibroblasts to rebuild collagen and elastin networks, improving firmness and snap‑back over time.',
          details: 'These peptides are a synergistic blend of palmitoyl oligopeptide and palmitoyl tetrapeptide-7. These short-chain peptides mimic the breakdown fragments of collagen and elastin, "tricking" fibroblasts into believing the matrix is damaged. This triggers a repair response, boosting production of collagen types I, III, and IV, as well as elastin and hyaluronic acid.',
          mechanism: [
            'Mimics natural skin repair signals to activate fibroblast synthesis',
            'Increases collagen I production by up to 350% in controlled studies',
            'Boosts collagen III and IV for comprehensive matrix reinforcement',
            'Enhances elastin synthesis for improved skin resilience and "bounce"',
            'Reduces micro-inflammation (IL-6) that degrades newly formed collagen',
            'Works synergistically with CBD to create an optimal repair environment'
          ]
        },
        {
          id: 'antioxidants',
          title: 'Antioxidants',
          subtitle: 'Vitamin C / Resveratrol',
          description: 'Neutralize free radicals that drive collagen fragmentation and pigment clustering.',
          details: 'Free radicals are unstable molecules generated by UV exposure, pollution, and metabolic stress. They steal electrons from healthy cells, causing oxidative damage to lipids, proteins, and DNA. This oxidative stress is a primary driver of collagen degradation, hyperpigmentation, and cellular aging.',
          mechanism: [
            'Vitamin C (MAP): Stable, non-irritating form that brightens and boosts collagen synthesis',
            'Neutralizes singlet oxygen and hydroxyl radicals generated by UV exposure',
            'Inhibits tyrosinase to prevent melanin formation and reduce manchas',
            'Resveratrol: Activates SIRT1 longevity genes for cellular preservation',
            'Protects against lipid peroxidation that causes membrane damage',
            'Works synergistically: antioxidants enhance each other\'s stability and penetration'
          ]
        },
        {
          id: 'barrier',
          title: 'Barrier Support',
          subtitle: 'Ceramides & Hyaluronic Acid',
          description: 'Keep the barrier resilient so anti‑aging actives can be used regularly without chronic micro‑damage.',
          details: 'A strong barrier is the foundation of effective anti-aging. Without it, even the best actives can cause irritation, inflammation, and paradoxical damage. Ceramides and HA work together to maintain barrier integrity while ensuring optimal hydration.',
          mechanism: [
            'Ceramides 3:1:1 ratio rebuilds the lipid matrix between corneocytes',
            'Reduces transepidermal water loss (TEWL) by 28% in 4 weeks',
            'Multi-weight HA: surface hydration + deep dermal plumping',
            'HA holds 1000x its weight in water for lasting hydration',
            'Strong barrier allows consistent use of potent actives without irritation',
            'Prevents "inflammaging" caused by chronic barrier compromise'
          ]
        }
      ],
      emotionalTitle: 'Emotional Benefit',
      emotionalText: 'AGING is about keeping your features dynamic and expressive while your canvas stays firm, bright, and resilient—so you look like yourself longer.',
      productsTitle: 'Recommended Products',
      productsSubtitle: 'The complete anti-aging protocol for 24–35 prejuvenation',
      products: [
        {
          name: 'The Time Bender',
          formula: '8.0% MTRX-CBD + Retinol',
          benefit: 'The gold standard for wrinkles. Accelerates renewal while CBD buffers irritation for consistent use.'
        },
        {
          name: 'The Architect',
          formula: '8.0% MTRX-CBD + Polypeptides',
          benefit: 'Rebuilds collagen and elastin networks. Improves firmness and structural integrity over time.'
        },
        {
          name: 'The Immortal',
          formula: '8.0% MTRX-CBD + Resveratrol',
          benefit: 'Activates longevity pathways. Preserves youthful cellular function and defends against oxidation.'
        },
        {
          name: 'The Spark',
          formula: '8.0% MTRX-CBD + Coenzyme Q10',
          benefit: 'Reignites cellular energy. Reduces fatigue signs and supports mitochondrial collagen synthesis.'
        }
      ]
    },
    imperfections: {
      badge: 'SKIN CONDITION',
      title: 'IMPERFECTIONS',
      subtitle: 'Precision Over Punishment',
      intro: 'IMPERFECTIONS addresses blemishes, large pores, uneven texture, and post-breakout marks as interconnected symptoms—not isolated flaws. True correction comes from regulating sebum, accelerating uniform turnover, calming inflammation, and preventing new congestion cycles.',
      understandingTitle: 'Understanding Imperfections',
      understandingText: 'Imperfections are multi-factorial: hormones, bacteria, inflammation, and barrier damage create a cycle where each breakout leaves behind textural damage and pigment. Modern protocols target all phases simultaneously.',
      causesTitle: 'Root Causes',
      causes: [
        {
          id: 'sebum',
          title: 'Excess Sebum Production',
          description: 'Hormonal shifts and humidity increase oil, which oxidizes inside pores and stretches them over time.',
          details: 'Sebaceous glands respond to androgens, cortisol, and environmental humidity by ramping up lipid production. When sebum sits in a follicle, it oxidizes (turns into "blackheads"), and the mechanical pressure physically dilates the pore opening. Over months and years, chronic distention makes pores appear larger and more visible.',
          impact: 'High'
        },
        {
          id: 'inflammation',
          title: 'Inflammation',
          description: 'Each papule or pustule triggers a micro-injury; repeated flares degrade collagen around the pore, making it appear larger and leaving erythema behind.',
          details: 'Every breakout is a localized inflammatory event. Neutrophils and cytokines flood the area, releasing enzymes (matrix metalloproteinases) that digest collagen and elastin. This weakens the structural support around the follicle, causing permanent pore enlargement and post-inflammatory marks (PIE/PIH) that can persist for months.',
          impact: 'Critical'
        },
        {
          id: 'turnover',
          title: 'Disrupted Cell Turnover',
          description: 'Slower desquamation causes compacted stratum corneum, rough patches, and stubborn "closed comedones" that never quite surface.',
          details: 'Healthy skin sheds about 30,000-40,000 dead cells per minute. When this process slows (due to age, genetics, or poor product choices), dead cells pile up, forming a thick, uneven surface. This compaction traps sebum and debris underneath, creating closed comedones (whiteheads) and giving skin a rough, "orange peel" texture.',
          impact: 'High'
        },
        {
          id: 'bacterial',
          title: 'Bacterial Proliferation',
          description: 'Imbalanced microbiome and trapped sebum enable breakout-causing bacteria to thrive, fueling more inflammation.',
          details: 'C. acnes (now P. acnes) is a normal skin resident, but when the follicle becomes anaerobic (oxygen-depleted due to sebum plugs), these bacteria multiply rapidly. They produce inflammatory byproducts that trigger immune responses, creating a vicious cycle: more bacteria → more inflammation → more barrier damage → more bacteria.',
          impact: 'High'
        }
      ],
      manifestationsTitle: 'Visual Manifestations',
      mechanismsTitle: 'Treatment Mechanisms',
      emotionalTitle: 'Emotional Benefit',
      emotionalText: 'IMPERFECTIONS treatment is about feeling camera-ready without filters—clean, balanced skin that doesn\'t need concealer or explanation.',
      productsTitle: 'Recommended Products',
      productsSubtitle: 'Multi-phase approach to clear, refined skin'
    }
  },
  es: {
    aging: {
      badge: 'CONDICIÓN DE PIEL',
      title: 'ENVEJECIMIENTO',
      subtitle: 'Reescribe el Tiempo, No lo Combatas',
      intro: 'El envejecimiento es un cambio sistémico acumulativo en la piel—pérdida de colágeno, fatiga de elastina, renovación más lenta e inflamación microcrónica—no solo "arrugas en la superficie". Apoyar la matriz temprano significa preservar la estructura, no perseguir el daño después.',
      biologyTitle: 'La Biología del Envejecimiento Estructural',
      biologyP1: 'La producción de colágeno alcanza su punto máximo a principios de los 20 y luego disminuye aproximadamente un 1% por año, por lo que a los 40 muchas personas han perdido alrededor de una quinta parte de su soporte dérmico. Los micro-movimientos, la exposición a los rayos UV, la contaminación y la glicación impulsada por el azúcar endurecen gradualmente el colágeno y adelgazan la dermis, dando lugar a líneas de expresión grabadas, laxitud y fatiga visible.',
      biologyP2: 'El prejuvenecimiento para la cohorte de 24-35 significa intervenir mientras la arquitectura aún responde: apoyando los fibroblastos, defendiéndose del estrés oxidativo y suavizando los cambios tempranos de textura antes de que evolucionen en pliegues fijos.',
      biologyP3: 'El eje anti-envejecimiento de MTRX combina retinoides y bakuchiol para la renovación y señalización de colágeno, péptidos para refuerzo estructural, y MTRX-CBD para amortiguar el "costo" inflamatorio de estos activos fuertes para que los usuarios puedan mantenerse consistentes sin pelar, quemar o abandonar la rutina.',
      timelineTitle: 'La Línea de Tiempo de Disminución del Colágeno',
      timelineSubtitle: 'Entendiendo cuándo y por qué la intervención importa más',
      timeline: [
        { age: '20s', collagen: '100%', description: 'Pico de producción de colágeno, óptima resistencia y regeneración de la piel' },
        { age: '25', collagen: '95%', description: 'La disminución del colágeno comienza (~1% por año), aún altamente receptivo a la intervención' },
        { age: '30', collagen: '90%', description: 'Pueden aparecer primeros signos sutiles, las estrategias de prevención muestran máximo ROI' },
        { age: '35', collagen: '85%', description: 'Las líneas tempranas pueden volverse visibles, transición de prevención a corrección' },
        { age: '40', collagen: '80%', description: 'Pérdida del 20% del soporte estructural, cambios visibles en firmeza y textura' }
      ],
      mechanismsTitle: 'Mecanismos Destacados',
      mechanismsSubtitle: 'Cómo MTRX aborda el envejecimiento a nivel celular y molecular',
      mechanismsLabel: 'Mecanismos Moleculares:',
      expandText: 'Haz clic para expandir',
      collapseText: 'Haz clic para contraer',
      mechanisms: [
        {
          id: 'retinol',
          title: 'Retinoides/Bakuchiol',
          subtitle: 'Motor de Renovación Celular',
          description: 'Aceleran la renovación de queratinocitos, estimulan la síntesis de colágeno I/III y refinan los poros y la textura mientras el CBD reduce la cascada de irritación.',
          details: 'Los retinoides se unen a los receptores nucleares de ácido retinoico (RARs) para regular positivamente los genes responsables de la producción de colágeno y diferenciación celular. Al acelerar el ciclo de renovación epidérmica de 28 días, efectivamente "resurgen" la piel desde dentro, revelando células más frescas y jóvenes mientras mejoran la textura y el tono. El bakuchiol ofrece una alternativa más suave a través de diferentes vías, activando la síntesis de colágeno sin la fotosensibilidad o irritación típica de los retinoides.',
          mechanism: [
            'Regula positivamente la expresión de genes de colágeno I y III en fibroblastos dérmicos',
            'Inhibe las metaloproteinasas de matriz (MMPs) que degradan el colágeno',
            'Normaliza la queratinización para refinar la textura y minimizar poros',
            'Reduce la hiperpigmentación al inhibir la actividad de la tirosinasa',
            'MTRX-CBD amortigua la irritación, permitiendo un uso consistente para resultados máximos'
          ]
        },
        {
          id: 'peptides',
          title: 'Péptidos',
          subtitle: 'Arquitectos Estructurales',
          description: 'Señalan a los fibroblastos para reconstruir las redes de colágeno y elastina, mejorando la firmeza y la elasticidad con el tiempo.',
          details: 'Estos péptidos son una mezcla sinérgica de oligopéptido de palmitoilo y tetrapéptido-7 de palmitoilo. Estos péptidos de cadena corta imitan los fragmentos de descomposición del colágeno y la elastina, "engañando" a los fibroblastos para que crean que la matriz está dañada. Esto desencadena una respuesta de reparación, aumentando la producción de colágeno tipos I, III y IV, así como elastina y ácido hialurónico.',
          mechanism: [
            'Imita las señales naturales de reparación de la piel para activar la síntesis de fibroblastos',
            'Aumenta la producción de colágeno I hasta en un 350% en estudios controlados',
            'Aumenta el colágeno III y IV para un refuerzo integral de la matriz',
            'Mejora la síntesis de elastina para mejorar la resistencia y "rebote" de la piel',
            'Reduce la micro-inflamación (IL-6) que degrada el colágeno recién formado',
            'Trabaja sinérgicamente con CBD para crear un entorno de reparación óptimo'
          ]
        },
        {
          id: 'antioxidants',
          title: 'Antioxidantes',
          subtitle: 'Vitamina C / Resveratrol',
          description: 'Neutralizan los radicales libres que impulsan la fragmentación del colágeno y la agrupación de pigmentos.',
          details: 'Los radicales libres son moléculas inestables generadas por la exposición a los rayos UV, la contaminación y el estrés metabólico. Roban electrones de células sanas, causando daño oxidativo a lípidos, proteínas y ADN. Este estrés oxidativo es un impulsor primario de la degradación del colágeno, hiperpigmentación y envejecimiento celular.',
          mechanism: [
            'Vitamina C (MAP): Forma estable y no irritante que ilumina y aumenta la síntesis de colágeno',
            'Neutraliza el oxígeno singlete y radicales hidroxilo generados por la exposición UV',
            'Inhibe la tirosinasa para prevenir la formación de melanina y reducir manchas',
            'Resveratrol: Activa genes de longevidad SIRT1 para preservación celular',
            'Protege contra la peroxidación lipídica que causa daño de membrana',
            'Trabaja sinérgicamente: los antioxidantes mejoran la estabilidad y penetración de cada uno'
          ]
        },
        {
          id: 'barrier',
          title: 'Soporte de Barrera',
          subtitle: 'Ceramidas y Ácido Hialurónico',
          description: 'Mantienen la barrera resistente para que los activos antiedad puedan usarse regularmente sin micro-daño crónico.',
          details: 'Una barrera fuerte es la base del anti-envejecimiento efectivo. Sin ella, incluso los mejores activos pueden causar irritación, inflamación y daño paradójico. Las ceramidas y el AH trabajan juntos para mantener la integridad de la barrera mientras aseguran una hidratación óptima.',
          mechanism: [
            'Proporción de ceramidas 3:1:1 reconstruye la matriz lipídica entre corneocitos',
            'Reduce la pérdida de agua transepidérmica (TEWL) en un 28% en 4 semanas',
            'AH multi-peso: hidratación superficial + relleno dérmico profundo',
            'El AH retiene 1000 veces su peso en agua para hidratación duradera',
            'La barrera fuerte permite el uso consistente de activos potentes sin irritación',
            'Previene el "envejecimiento inflamatorio" causado por el compromiso crónico de la barrera'
          ]
        }
      ],
      emotionalTitle: 'Beneficio Emocional',
      emotionalText: 'El ENVEJECIMIENTO se trata de mantener tus rasgos dinámicos y expresivos mientras tu lienzo permanece firme, brillante y resistente—para que te veas como tú mismo por más tiempo.',
      productsTitle: 'Productos Recomendados',
      productsSubtitle: 'El protocolo completo anti-envejecimiento para prejuvenecimiento de 24-35',
      products: [
        {
          name: 'The Time Bender',
          formula: '8.0% MTRX-CBD + Retinol',
          benefit: 'El estándar de oro para las arrugas. Acelera la renovación mientras el CBD amortigua la irritación para uso consistente.'
        },
        {
          name: 'The Architect',
          formula: '8.0% MTRX-CBD + Polipéptidos',
          benefit: 'Reconstruye las redes de colágeno y elastina. Mejora la firmeza y la integridad estructural con el tiempo.'
        },
        {
          name: 'El Inmortal',
          formula: '8.0% MTRX-CBD + Resveratrol',
          benefit: 'Activa vías de longevidad. Preserva la función celular juvenil y se defiende contra la oxidación.'
        },
        {
          name: 'The Spark',
          formula: '8.0% MTRX-CBD + Coenzima Q10',
          benefit: 'Reaviva la energía celular. Reduce los signos de fatiga y apoya la síntesis de colágeno mitocondrial.'
        }
      ]
    },
    imperfections: {
      badge: 'CONDICIÓN DE PIEL',
      title: 'IMPERFECCIONES',
      subtitle: 'Precisión Sobre Castigo',
      intro: 'IMPERFECCIONES aborda imperfecciones, poros grandes, textura desigual y marcas post-brote como síntomas interconectados—no defectos aislados. La verdadera corrección proviene de regular el sebo, acelerar la renovación uniforme, calmar la inflamación y prevenir nuevos ciclos de congestión.',
      understandingTitle: 'Entendiendo las Imperfecciones',
      understandingText: 'Las imperfecciones son multifactoriales: hormonas, bacterias, inflamación y daño de barrera crean un ciclo donde cada brote deja atrás daño textural y pigmento. Los protocolos modernos apuntan a todas las fases simultáneamente.',
      causesTitle: 'Causas Raíz',
      causes: [
        {
          id: 'sebum',
          title: 'Exceso de Producción de Sebo',
          description: 'Los cambios hormonales y la humedad aumentan el aceite, que se oxida dentro de los poros y los estira con el tiempo.',
          details: 'Las glándulas sebáceas responden a los andrógenos, el cortisol y la humedad ambiental aumentando la producción de lípidos. Cuando el sebo se asienta en un folículo, se oxida (se convierte en "puntos negros"), y la presión mecánica dilata físicamente la abertura del poro. Con el paso de los meses y años, la distensión crónica hace que los poros parezcan más grandes y más visibles.',
          impact: 'Alto'
        },
        {
          id: 'inflammation',
          title: 'Inflamación',
          description: 'Cada pápula o pústula desencadena una micro-lesión; los brotes repetidos degradan el colágeno alrededor del poro, haciéndolo parecer más grande y dejando eritema.',
          details: 'Cada brote es un evento inflamatorio localizado. Los neutrófilos y citocinas inundan el área, liberando enzimas (metaloproteinasas de matriz) que digieren el colágeno y la elastina. Esto debilita el soporte estructural alrededor del folículo, causando agrandamiento permanente de poros y marcas post-inflamatorias (PIE/PIH) que pueden persistir durante meses.',
          impact: 'Crítico'
        },
        {
          id: 'turnover',
          title: 'Renovación Celular Interrumpida',
          description: 'La descamación más lenta causa estrato córneo compactado, parches ásperos y "comedones cerrados" obstinados que nunca salen completamente a la superficie.',
          details: 'La piel sana arroja alrededor de 30,000-40,000 células muertas por minuto. Cuando este proceso se ralentiza (debido a la edad, la genética o malas elecciones de productos), las células muertas se acumulan, formando una superficie gruesa y desigual. Esta compactación atrapa el sebo y los desechos debajo, creando comedones cerrados (espinillas blancas) y dando a la piel una textura áspera de "piel de naranja".',
          impact: 'Alto'
        },
        {
          id: 'bacterial',
          title: 'Proliferación Bacteriana',
          description: 'El microbioma desequilibrado y el sebo atrapado permiten que las bacterias causantes de brotes prosperen, alimentando más inflamación.',
          details: 'C. acnes (ahora P. acnes) es un residente normal de la piel, pero cuando el folículo se vuelve anaeróbico (agotado de oxígeno debido a tapones de sebo), estas bacterias se multiplican rápidamente. Producen subproductos inflamatorios que desencadenan respuestas inmunes, creando un ciclo vicioso: más bacterias → más inflamación → más daño de barrera → más bacterias.',
          impact: 'Alto'
        }
      ],
      manifestationsTitle: 'Manifestaciones Visuales',
      mechanismsTitle: 'Mecanismos de Tratamiento',
      emotionalTitle: 'Beneficio Emocional',
      emotionalText: 'El tratamiento de IMPERFECCIONES se trata de sentirse listo para la cámara sin filtros—piel limpia y equilibrada que no necesita corrector ni explicación.',
      productsTitle: 'Productos Recomendados',
      productsSubtitle: 'Enfoque multifase para piel clara y refinada'
    },
    hyperpigmentation: {
      badge: 'CONDICIÓN DE PIEL',
      title: 'HIPERPIGMENTACIÓN',
      subtitle: 'Tono Uniforme, Complexión Luminosa',
      intro: 'La HIPERPIGMENTACIÓN en climas LATAM no es solo sobre manchas oscuras—es sobre entender que la melanina protege pero también reacciona excesivamente a trauma, UV y hormonas. El blanqueamiento agresivo falla; el éxito viene de calmar la señalización de melanina, acelerar la renovación uniforme y defender contra las re-oscurecimiento diario.',
      understandingTitle: 'Entendiendo la Hiperpigmentación',
      types: [
        {
          id: 'pih',
          title: 'PIH (Hiperpigmentación Post-Inflamatoria)',
          description: 'Manchas oscuras que quedan después de acné, picaduras de insectos o cualquier lesión cutánea',
          prevalence: 'Más común en tipos de piel Fitzpatrick III-V'
        },
        {
          id: 'melasma',
          title: 'Melasma',
          description: 'Parches simétricos impulsados por hormonas (embarazo, píldoras anticonceptivas) y exacerbados por UV',
          prevalence: 'Afecta a 90% de mujeres latinoamericanas en algún momento'
        },
        {
          id: 'sun-damage',
          title: 'Daño Solar',
          description: 'Manchas de edad, lentigos y tono desigual de años de exposición UV acumulativa',
          prevalence: 'Universal en climas de alto UV sin uso diario de SPF'
        }
      ],
      mechanismsTitle: 'Mecanismos de Tratamiento',
      triggerFactorsTitle: 'Factores Desencadenantes',
      emotionalTitle: 'Beneficio Emocional',
      emotionalText: 'El tratamiento de HIPERPIGMENTACIÓN es sentirse confiado con tu tono de piel natural—uniforme, luminoso y sin depender de correctores o filtros de cámara.',
      productsTitle: 'Productos Recomendados',
      productsSubtitle: 'Protocolo completo de iluminación y prevención de re-oscurecimiento'
    },
    dehydration: {
      badge: 'CONDICIÓN DE PIEL',
      title: 'DESHIDRATACIÓN',
      subtitle: 'Hidratación 3D, No Solo Brillo',
      intro: 'La DESHIDRATACIÓN trata la piel como hambrienta de agua, no meramente "seca"—incluso las complexiones grasas pueden estar agotadas cuando la pérdida de agua transepidérmica (TEWL) supera la hidratación. El objetivo es la reposición en capas y la reparación de barrera para que la piel retenga agua en todos los niveles y permanezca resistente en AC, altitud y calor urbano.',
      understandingTitle: 'Entendiendo la Deshidratación',
      understandingText: 'La deshidratación no es lo mismo que la piel seca. La piel seca carece de aceite (lípidos); la piel deshidratada carece de agua. Incluso la piel grasa puede estar deshidratada, creando el fenómeno paradójico de sentirse grasosa pero con aspecto apagado y arrugado.',
      tewlTitle: 'Pérdida de Agua Transepidérmica (TEWL)',
      tewlDescription: 'TEWL es la medida de cuánta agua se evapora a través de tu piel hacia el ambiente. Una barrera saludable mantiene TEWL bajo; una barrera comprometida permite que el agua escape libremente, dejando la piel tensa, áspera y vulnerable.',
      causesTitle: 'Causas Comunes',
      causes: [
        { id: 'climate', title: 'Estrés Climático', description: 'Oficinas con AC, vuelos, baja humedad en ciudades de gran altitud' },
        { id: 'over-cleansing', title: 'Sobre-Limpieza', description: 'Limpiadores agresivos que eliminan lípidos protectores' },
        { id: 'actives', title: 'Activos Sin Barrera', description: 'Retinoides, ácidos o exfoliación sin soporte de ceramidas' },
        { id: 'age', title: 'Envejecimiento', description: 'Disminución natural de producción de lípidos y ácido hialurónico con la edad' }
      ],
      solutionTitle: 'El Enfoque MTRX de 3 Capas',
      layers: [
        {
          layer: 'Capa 1: Humectantes',
          description: 'Atraen agua hacia la piel (ácido hialurónico, glicerina, pantenol)',
          product: 'The Rainmaker'
        },
        {
          layer: 'Capa 2: Refuerzo de Barrera',
          description: 'Reconstruyen la matriz lipídica (ceramidas, niacinamida)',
          product: 'The Great Harmonizer'
        },
        {
          layer: 'Capa 3: Sello Oclusivo',
          description: 'Sella la humedad sin obstruir (escualano, ésteres de jojoba)',
          product: 'The Preserver'
        }
      ],
      protocolTitle: 'Protocolos por Entorno',
      climateStressors: [
        { id: 'ac', name: 'Oficina con AC', description: 'Aumentar capas de Rainmaker + Preserver por la noche' },
        { id: 'altitude', name: 'Vuelo de Altitud', description: 'Protocolo de hidratación triple + barrera oclusiva' },
        { id: 'urban', name: 'Calor Urbano', description: 'Humectantes ligeros + refuerzo de barrera' },
        { id: 'dry', name: 'Temporada Seca', description: 'Máximas ceramidas + AH multi-peso' }
      ],
      emotionalTitle: 'Beneficio Emocional',
      emotionalText: 'El tratamiento de DESHIDRATACIÓN es ver tu piel verse rellena, suave y radiante—sin sentirse grasosa ni depender de máscaras de emergencia antes de eventos.',
      productsTitle: 'Productos Recomendados',
      productsSubtitle: 'Sistema de hidratación multicapa'
    },
    rosacea: {
      badge: 'CONDICIÓN DE PIEL',
      title: 'ROSÁCEA',
      subtitle: 'Calma el Enrojecimiento',
      intro: 'La ROSÁCEA es un trastorno neurovascular crónico que causa enrojecimiento persistente, vasos sanguíneos visibles y ocasionalmente pápulas. No se puede "curar", pero se puede controlar significativamente calmando la inflamación, fortaleciendo la barrera y evitando desencadenantes.',
      mechanismsTitle: 'Mecanismos de Manejo',
      triggersTitle: 'Desencadenantes Comunes',
      emotionalTitle: 'Beneficio Emocional',
      emotionalText: 'El manejo de ROSÁCEA es sentirse cómodo en tu propia piel—enrojecimiento reducido, menos brotes y confianza sin depender de corrector pesado.',
      productsTitle: 'Productos Recomendados',
      productsSubtitle: 'Protocolo calmante y de fortalecimiento de barrera'
    },
    sensitivity: {
      badge: 'CONDICIÓN DE PIEL',
      title: 'SENSIBILIDAD',
      subtitle: 'Protección Suave',
      intro: 'La SENSIBILIDAD no es un tipo de piel—es un estado temporal o crónico de reactividad a productos, ambiente o estrés. La gestión exitosa significa fortalecer la barrera, reducir la estimulación neuronal y elegir ingredientes bien tolerados.',
      mechanismsTitle: 'Enfoque de Fortalecimiento',
      triggersTitle: 'Desencadenantes de Reactividad',
      emotionalTitle: 'Beneficio Emocional',
      emotionalText: 'El manejo de SENSIBILIDAD es usar productos con confianza—sin ardor, picazón o enrojecimiento impredecible.',
      productsTitle: 'Productos Recomendados',
      productsSubtitle: 'Fórmulas minimalistas y reforzadoras de barrera'
    },
    acne: {
      badge: 'CONDICIÓN DE PIEL',
      title: 'ACNÉ',
      subtitle: 'Complexión Clara',
      intro: 'El ACNÉ es multifactorial: hormonas, bacteria, inflamación, genética y elecciones de estilo de vida. El manejo moderno no es solo sobre "secar" granos—es sobre regular el sebo, acelerar la renovación, calmar la inflamación y prevenir cicatrices.',
      mechanismsTitle: 'Estrategias de Tratamiento',
      typesTitle: 'Tipos de Acné',
      emotionalTitle: 'Beneficio Emocional',
      emotionalText: 'El manejo de ACNÉ es mirarte en el espejo sin ansiedad—menos brotes activos, menos marcas y piel que se siente cómoda y equilibrada.',
      productsTitle: 'Productos Recomendados',
      productsSubtitle: 'Protocolo completo de prevención y tratamiento'
    },
    darkCircles: {
      badge: 'CONDICIÓN DE PIEL',
      title: 'OJERAS',
      subtitle: 'Ojos Brillantes',
      intro: 'Las OJERAS tienen múltiples causas: melanina (pigmentación), vascular (vasos sanguíneos visibles), estructural (pérdida de grasa/colágeno) y sombras. El tratamiento efectivo requiere identificar tu tipo dominante y dirigirse en consecuencia.',
      typesTitle: 'Tipos de Ojeras',
      mechanismsTitle: 'Enfoques de Tratamiento',
      emotionalTitle: 'Beneficio Emocional',
      emotionalText: 'El tratamiento de OJERAS es verse descansado y alerta—incluso en días de poco sueño—sin depender de corrector pesado.',
      productsTitle: 'Productos Recomendados',
      productsSubtitle: 'Fórmulas específicas para el contorno de ojos'
    },
    fineLines: {
      badge: 'CONDICIÓN DE PIEL',
      title: 'LÍNEAS FINAS',
      subtitle: 'Textura Suave',
      intro: 'Las LÍNEAS FINAS son los primeros signos visibles de envejecimiento—arrugas superficiales causadas por deshidratación, pérdida de colágeno y movimiento repetitivo. Son más fáciles de tratar que las arrugas profundas y responden bien a hidratación, retinoides y péptidos.',
      mechanismsTitle: 'Estrategias de Suavizado',
      preventionTitle: 'Prevención',
      emotionalTitle: 'Beneficio Emocional',
      emotionalText: 'El tratamiento de LÍNEAS FINAS es ver tu piel verse suave y tersa—expresiones naturales sin líneas permanentes grabadas.',
      productsTitle: 'Productos Recomendados',
      productsSubtitle: 'Protocolo de suavizado y prevención'
    },
    lossOfFirmness: {
      badge: 'CONDICIÓN DE PIEL',
      title: 'PÉRDIDA DE FIRMEZA',
      subtitle: 'Levantar y Esculpir',
      intro: 'La PÉRDIDA DE FIRMEZA ocurre cuando el colágeno y la elastina se degradan más rápido de lo que se reemplazan, llevando a flacidez, contornos menos definidos y pérdida de "rebote". El manejo requiere estimulación de colágeno, soporte de elastina y ocasionalmente intervención profesional.',
      mechanismsTitle: 'Estrategias de Reafirmación',
      areasTitle: 'Áreas Clave',
      emotionalTitle: 'Beneficio Emocional',
      emotionalText: 'El manejo de PÉRDIDA DE FIRMEZA es ver tu rostro mantener su estructura y definición—contornos nítidos y piel que se siente firme y resistente.',
      productsTitle: 'Productos Recomendados',
      productsSubtitle: 'Protocolo de reafirmación y esculpido'
    }
  }
}

export function getDetailedSectionTranslation(
  language: Language,
  sectionKey: string
): Record<string, unknown> {
  return detailedSectionTranslations[language]?.[sectionKey] || detailedSectionTranslations['en']?.[sectionKey] || {}
}
