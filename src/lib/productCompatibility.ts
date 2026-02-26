export type CompatibilityLevel = 'complementary' | 'caution' | 'am' | 'pm'

export interface CompatibilityResult {
  level: CompatibilityLevel
  message: {
    en: string
    es: string
  }
}

const compatibilityMatrix: Record<string, Record<string, CompatibilityLevel>> = {
  'mtrx-001': {
    'mtrx-001': 'complementary',
    'mtrx-002': 'pm',
    'mtrx-003': 'complementary',
    'mtrx-004': 'complementary',
    'mtrx-005': 'caution',
    'mtrx-006': 'complementary',
    'mtrx-008': 'pm',
    'mtrx-009': 'complementary',
    'mtrx-010': 'complementary'
  },
  'mtrx-002': {
    'mtrx-001': 'pm',
    'mtrx-002': 'pm',
    'mtrx-003': 'caution',
    'mtrx-004': 'caution',
    'mtrx-005': 'caution',
    'mtrx-006': 'pm',
    'mtrx-008': 'pm',
    'mtrx-009': 'pm',
    'mtrx-010': 'pm'
  },
  'mtrx-003': {
    'mtrx-001': 'complementary',
    'mtrx-002': 'caution',
    'mtrx-003': 'complementary',
    'mtrx-004': 'complementary',
    'mtrx-005': 'caution',
    'mtrx-006': 'complementary',
    'mtrx-008': 'pm',
    'mtrx-009': 'complementary',
    'mtrx-010': 'complementary'
  },
  'mtrx-004': {
    'mtrx-001': 'complementary',
    'mtrx-002': 'caution',
    'mtrx-003': 'complementary',
    'mtrx-004': 'complementary',
    'mtrx-005': 'complementary',
    'mtrx-006': 'complementary',
    'mtrx-008': 'pm',
    'mtrx-009': 'complementary',
    'mtrx-010': 'complementary'
  },
  'mtrx-005': {
    'mtrx-001': 'caution',
    'mtrx-002': 'caution',
    'mtrx-003': 'caution',
    'mtrx-004': 'complementary',
    'mtrx-005': 'am',
    'mtrx-006': 'am',
    'mtrx-008': 'pm',
    'mtrx-009': 'complementary',
    'mtrx-010': 'complementary'
  },
  'mtrx-006': {
    'mtrx-001': 'complementary',
    'mtrx-002': 'pm',
    'mtrx-003': 'complementary',
    'mtrx-004': 'complementary',
    'mtrx-005': 'am',
    'mtrx-006': 'complementary',
    'mtrx-008': 'pm',
    'mtrx-009': 'complementary',
    'mtrx-010': 'complementary'
  },
  'mtrx-008': {
    'mtrx-001': 'pm',
    'mtrx-002': 'pm',
    'mtrx-003': 'pm',
    'mtrx-004': 'pm',
    'mtrx-005': 'pm',
    'mtrx-006': 'pm',
    'mtrx-008': 'pm',
    'mtrx-009': 'pm',
    'mtrx-010': 'pm'
  },
  'mtrx-009': {
    'mtrx-001': 'complementary',
    'mtrx-002': 'pm',
    'mtrx-003': 'complementary',
    'mtrx-004': 'complementary',
    'mtrx-005': 'complementary',
    'mtrx-006': 'complementary',
    'mtrx-008': 'pm',
    'mtrx-009': 'complementary',
    'mtrx-010': 'complementary'
  },
  'mtrx-010': {
    'mtrx-001': 'complementary',
    'mtrx-002': 'pm',
    'mtrx-003': 'complementary',
    'mtrx-004': 'complementary',
    'mtrx-005': 'complementary',
    'mtrx-006': 'complementary',
    'mtrx-008': 'pm',
    'mtrx-009': 'complementary',
    'mtrx-010': 'complementary'
  }
}

export function checkProductCompatibility(productId1: string, productId2: string): CompatibilityResult {
  const level = compatibilityMatrix[productId1]?.[productId2] || 'complementary'
  
  const messages = {
    complementary: {
      en: 'Excellent choice! These formulas work synergistically to amplify each other\'s therapeutic benefits, creating a powerfully effective skincare system. This pairing is scientifically optimized for superior results.',
      es: '¡Excelente elección! Estas fórmulas funcionan sinérgicamente para amplificar los beneficios terapéuticos mutuos, creando un sistema de cuidado de la piel poderosamente efectivo. Esta combinación está científicamente optimizada para resultados superiores.'
    },
    caution: {
      en: 'While these formulas can be used together, their potent active concentrations may cause sensitivity when layered simultaneously. For optimal results and tolerance, we recommend alternating their use in your routine, spacing applications, or consulting our AI Pharmacist for personalized layering protocols. Your purchase can proceed with confidence.',
      es: 'Si bien estas fórmulas pueden usarse juntas, sus potentes concentraciones activas pueden causar sensibilidad cuando se aplican en capas simultáneamente. Para resultados y tolerancia óptimos, recomendamos alternar su uso en tu rutina, espaciar las aplicaciones, o consultar a nuestro Farmacéutico de IA para protocolos de aplicación personalizados. Tu compra puede proceder con confianza.'
    },
    am: {
      en: 'Both formulas in this selection are optimized for evening (PM) application when skin enters its natural regenerative phase. For a complete day-and-night clinical regimen, consider pairing one PM formula with a protective morning (AM) treatment to address your skin around the clock.',
      es: 'Ambas fórmulas en esta selección están optimizadas para aplicación nocturna (PM) cuando la piel entra en su fase regenerativa natural. Para un régimen clínico completo día y noche, considera combinar una fórmula PM con un tratamiento protector matutino (AM) para atender tu piel las 24 horas.'
    },
    pm: {
      en: 'Both formulas in this selection are optimized for evening (PM) application when skin enters its natural regenerative phase. For a complete day-and-night clinical regimen, consider pairing one PM formula with a protective morning (AM) treatment to address your skin around the clock.',
      es: 'Ambas fórmulas en esta selección están optimizadas para aplicación nocturna (PM) cuando la piel entra en su fase regenerativa natural. Para un régimen clínico completo día y noche, considera combinar una fórmula PM con un tratamiento protector matutino (AM) para atender tu piel las 24 horas.'
    }
  }
  
  return {
    level,
    message: messages[level]
  }
}
