import { LoyaltyReward, TierBenefits } from './loyaltyTypes'

export const TIER_BENEFITS: TierBenefits[] = [
  {
    tier: 'bronze',
    name: { en: 'Bronze Member', es: 'Miembro Bronce' },
    pointsRequired: 0,
    benefits: {
      en: [
        'Earn 1 point per $1 spent',
        'Birthday reward',
        'Exclusive member content'
      ],
      es: [
        'Gana 1 punto por cada $1 gastado',
        'Recompensa de cumpleaños',
        'Contenido exclusivo para miembros'
      ]
    },
    multiplier: 1,
    color: 'oklch(0.58 0.10 40)',
    icon: '🥉'
  },
  {
    tier: 'silver',
    name: { en: 'Silver Member', es: 'Miembro Plata' },
    pointsRequired: 500,
    benefits: {
      en: [
        'Earn 1.25 points per $1 spent',
        'Free shipping on orders over $50',
        'Priority customer support',
        'Quarterly exclusive samples',
        'All Bronze benefits'
      ],
      es: [
        'Gana 1.25 puntos por cada $1 gastado',
        'Envío gratis en pedidos superiores a $50',
        'Soporte al cliente prioritario',
        'Muestras exclusivas trimestrales',
        'Todos los beneficios de Bronce'
      ]
    },
    multiplier: 1.25,
    color: 'oklch(0.75 0.02 240)',
    icon: '🥈'
  },
  {
    tier: 'gold',
    name: { en: 'Gold Member', es: 'Miembro Oro' },
    pointsRequired: 1500,
    benefits: {
      en: [
        'Earn 1.5 points per $1 spent',
        'Free shipping on all orders',
        'VIP customer support',
        'Monthly exclusive samples',
        'Early product launches',
        'Double points during birthday month',
        'All Silver benefits'
      ],
      es: [
        'Gana 1.5 puntos por cada $1 gastado',
        'Envío gratis en todos los pedidos',
        'Soporte VIP al cliente',
        'Muestras exclusivas mensuales',
        'Lanzamientos anticipados de productos',
        'Puntos dobles durante el mes de cumpleaños',
        'Todos los beneficios de Plata'
      ]
    },
    multiplier: 1.5,
    color: 'oklch(0.65 0.15 85)',
    icon: '🥇'
  },
  {
    tier: 'platinum',
    name: { en: 'Platinum Member', es: 'Miembro Platino' },
    pointsRequired: 3000,
    benefits: {
      en: [
        'Earn 2 points per $1 spent',
        'Free express shipping',
        'Dedicated beauty consultant',
        'Exclusive platinum events',
        'First access to limited editions',
        'Annual luxury gift',
        'Triple points during birthday month',
        'Complimentary consultations',
        'All Gold benefits'
      ],
      es: [
        'Gana 2 puntos por cada $1 gastado',
        'Envío express gratis',
        'Consultor de belleza dedicado',
        'Eventos exclusivos de platino',
        'Primer acceso a ediciones limitadas',
        'Regalo de lujo anual',
        'Puntos triples durante el mes de cumpleaños',
        'Consultas complementarias',
        'Todos los beneficios de Oro'
      ]
    },
    multiplier: 2,
    color: 'oklch(0.85 0.05 240)',
    icon: '💎'
  }
]

export const LOYALTY_REWARDS: LoyaltyReward[] = [
  {
    id: 'discount-10',
    name: { en: '$10 Off', es: '$10 de Descuento' },
    description: {
      en: 'Get $10 off your next purchase',
      es: 'Obtén $10 de descuento en tu próxima compra'
    },
    pointsCost: 100,
    type: 'discount',
    value: 10,
    isAvailable: true
  },
  {
    id: 'discount-25',
    name: { en: '$25 Off', es: '$25 de Descuento' },
    description: {
      en: 'Get $25 off your next purchase',
      es: 'Obtén $25 de descuento en tu próxima compra'
    },
    pointsCost: 250,
    type: 'discount',
    value: 25,
    isAvailable: true
  },
  {
    id: 'discount-50',
    name: { en: '$50 Off', es: '$50 de Descuento' },
    description: {
      en: 'Get $50 off your next purchase',
      es: 'Obtén $50 de descuento en tu próxima compra'
    },
    pointsCost: 500,
    type: 'discount',
    value: 50,
    isAvailable: true
  },
  {
    id: 'free-shipping',
    name: { en: 'Free Shipping', es: 'Envío Gratis' },
    description: {
      en: 'Free shipping on your next order',
      es: 'Envío gratis en tu próximo pedido'
    },
    pointsCost: 75,
    type: 'shipping',
    value: 0,
    isAvailable: true
  },
  {
    id: 'sample-set',
    name: { en: 'Deluxe Sample Set', es: 'Set de Muestras de Lujo' },
    description: {
      en: 'Receive an exclusive set of deluxe samples',
      es: 'Recibe un set exclusivo de muestras de lujo'
    },
    pointsCost: 150,
    type: 'exclusive',
    value: 0,
    isAvailable: true
  },
  {
    id: 'early-access',
    name: { en: 'Early Product Access', es: 'Acceso Anticipado a Productos' },
    description: {
      en: 'Get early access to new product launches',
      es: 'Obtén acceso anticipado a nuevos lanzamientos de productos'
    },
    pointsCost: 200,
    type: 'exclusive',
    value: 0,
    isAvailable: true
  },
  {
    id: 'consultation',
    name: { en: 'Personal Consultation', es: 'Consulta Personal' },
    description: {
      en: 'One-on-one skincare consultation with our experts',
      es: 'Consulta de cuidado de la piel uno a uno con nuestros expertos'
    },
    pointsCost: 300,
    type: 'exclusive',
    value: 0,
    isAvailable: true
  },
  {
    id: 'vip-event',
    name: { en: 'VIP Event Invitation', es: 'Invitación a Evento VIP' },
    description: {
      en: 'Exclusive invitation to VIP skincare events',
      es: 'Invitación exclusiva a eventos VIP de cuidado de la piel'
    },
    pointsCost: 400,
    type: 'exclusive',
    value: 0,
    isAvailable: true
  }
]

export function calculateTier(lifetimePoints: number): import('./loyaltyTypes').RewardTier {
  if (lifetimePoints >= 3000) return 'platinum'
  if (lifetimePoints >= 1500) return 'gold'
  if (lifetimePoints >= 500) return 'silver'
  return 'bronze'
}

export function calculatePointsToNextTier(lifetimePoints: number): number {
  if (lifetimePoints >= 3000) return 0
  if (lifetimePoints >= 1500) return 3000 - lifetimePoints
  if (lifetimePoints >= 500) return 1500 - lifetimePoints
  return 500 - lifetimePoints
}

export function generateReferralCode(userId: string): string {
  const hash = userId.split('').reduce((acc, char) => {
    return ((acc << 5) - acc) + char.charCodeAt(0)
  }, 0)
  const code = Math.abs(hash).toString(36).toUpperCase().slice(0, 8)
  return `SL${code}`
}

export function getTierBenefits(tier: import('./loyaltyTypes').RewardTier): import('./loyaltyTypes').TierBenefits {
  return TIER_BENEFITS.find(t => t.tier === tier) || TIER_BENEFITS[0]
}
