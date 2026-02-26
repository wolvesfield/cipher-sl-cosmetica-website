import { Review, ReviewStats } from './types'

export const mockReviews: Review[] = [
  {
    id: 'rev-001',
    productId: 'great-harmonizer',
    userId: 'user-001',
    userName: { en: 'Camila R.', es: 'Camila R.' },
    userLocation: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
    rating: 5,
    title: { 
      en: 'A game-changer for my sensitive skin', 
      es: 'Un cambio radical para mi piel sensible' 
    },
    comment: { 
      en: 'After just 3 weeks, my redness has dramatically reduced. The 8.0% MTRX-CBD really calms my skin without any irritation. The texture is luxurious and absorbs beautifully. This has become my holy grail product!', 
      es: 'Después de solo 3 semanas, mi enrojecimiento se ha reducido dramáticamente. El 8.0% MTRX-CBD realmente calma mi piel sin ninguna irritación. La textura es lujosa y se absorbe maravillosamente. ¡Este se ha convertido en mi producto favorito!' 
    },
    verifiedPurchase: true,
    helpful: 47,
    date: new Date('2024-02-15'),
    skinType: 'Sensitive/Combination',
    ageRange: '25-34',
    useCase: 'Redness & Sensitivity'
  },
  {
    id: 'rev-002',
    productId: 'great-harmonizer',
    userId: 'user-002',
    userName: { en: 'Santiago M.', es: 'Santiago M.' },
    userLocation: { en: 'Medellín, Colombia', es: 'Medellín, Colombia' },
    rating: 5,
    title: { 
      en: 'Perfect for post-shave irritation', 
      es: 'Perfecto para irritación post-afeitado' 
    },
    comment: { 
      en: 'As someone who struggles with razor burn, this has been incredible. The CBD formula soothes immediately and the niacinamide helps control shine. My skin looks healthier and feels balanced. Highly recommend for men!', 
      es: 'Como alguien que lucha con la irritación del afeitado, esto ha sido increíble. La fórmula de CBD calma inmediatamente y la niacinamida ayuda a controlar el brillo. Mi piel se ve más saludable y se siente equilibrada. ¡Altamente recomendado para hombres!' 
    },
    verifiedPurchase: true,
    helpful: 32,
    date: new Date('2024-02-20'),
    skinType: 'Oily',
    ageRange: '25-34',
    useCase: 'Shaving Irritation'
  },
  {
    id: 'rev-003',
    productId: 'great-harmonizer',
    userId: 'user-003',
    userName: { en: 'Valentina S.', es: 'Valentina S.' },
    userLocation: { en: 'Cali, Colombia', es: 'Cali, Colombia' },
    rating: 4,
    title: { 
      en: 'Great base cream, wish it had SPF', 
      es: 'Excelente crema base, desearía que tuviera SPF' 
    },
    comment: { 
      en: 'This cream has helped balance my oily T-zone while keeping my cheeks hydrated. The harmonizing effect is real. Only downside is I wish it had SPF for daytime use, so I have to layer another product.', 
      es: 'Esta crema ha ayudado a equilibrar mi zona T grasa mientras mantiene mis mejillas hidratadas. El efecto armonizador es real. El único inconveniente es que desearía que tuviera SPF para uso diurno, así que tengo que aplicar otro producto.' 
    },
    verifiedPurchase: true,
    helpful: 23,
    date: new Date('2024-03-01'),
    skinType: 'Combination',
    ageRange: '18-24',
    useCase: 'Oil Control & Hydration'
  },
  {
    id: 'rev-004',
    productId: 'time-bender',
    userId: 'user-004',
    userName: { en: 'María José L.', es: 'María José L.' },
    userLocation: { en: 'Cartagena, Colombia', es: 'Cartagena, Colombia' },
    rating: 5,
    title: { 
      en: 'Finally, retinol without the irritation!', 
      es: '¡Finalmente, retinol sin la irritación!' 
    },
    comment: { 
      en: 'I have tried many retinol products that left my skin red and peeling. The Time Bender combines retinol with CBD to buffer the irritation and it WORKS. My fine lines are visibly smoother after 6 weeks and zero redness. This is revolutionary.', 
      es: 'He probado muchos productos de retinol que dejaron mi piel roja y descamada. El Time Bender combina retinol con CBD para amortiguar la irritación y FUNCIONA. Mis líneas finas están visiblemente más suaves después de 6 semanas y cero enrojecimiento. Esto es revolucionario.' 
    },
    verifiedPurchase: true,
    helpful: 89,
    date: new Date('2024-01-28'),
    skinType: 'Normal/Sensitive',
    ageRange: '35-44',
    useCase: 'Fine Lines & Wrinkles'
  },
  {
    id: 'rev-005',
    productId: 'time-bender',
    userId: 'user-005',
    userName: { en: 'Andrés P.', es: 'Andrés P.' },
    userLocation: { en: 'Barranquilla, Colombia', es: 'Barranquilla, Colombia' },
    rating: 5,
    title: { 
      en: 'Cleared my acne scars remarkably', 
      es: 'Eliminó mis cicatrices de acné notablemente' 
    },
    comment: { 
      en: 'Dealing with post-acne scarring for years, this product has made the biggest difference. The retinol accelerates cell turnover and the CBD prevents new breakouts. After 8 weeks, my texture is so much smoother and scars have faded significantly.', 
      es: 'Lidiando con cicatrices post-acné durante años, este producto ha hecho la mayor diferencia. El retinol acelera la renovación celular y el CBD previene nuevos brotes. Después de 8 semanas, mi textura es mucho más suave y las cicatrices se han desvanecido significativamente.' 
    },
    verifiedPurchase: true,
    helpful: 67,
    date: new Date('2024-02-05'),
    skinType: 'Oily/Acne-prone',
    ageRange: '25-34',
    useCase: 'Acne Scars & Texture'
  },
  {
    id: 'rev-006',
    productId: 'illuminator',
    userId: 'user-006',
    userName: { en: 'Sofía G.', es: 'Sofía G.' },
    userLocation: { en: 'Pereira, Colombia', es: 'Pereira, Colombia' },
    rating: 5,
    title: { 
      en: 'My manchas are finally fading!', 
      es: '¡Mis manchas finalmente están desapareciendo!' 
    },
    comment: { 
      en: 'Living in a sunny climate, hyperpigmentation has always been my struggle. The Illuminator with Vitamin C MAP is stable and effective without stinging. In 4 weeks, my dark spots are noticeably lighter and my overall tone is more even. The glow is real!', 
      es: 'Viviendo en un clima soleado, la hiperpigmentación siempre ha sido mi lucha. El Illuminator con Vitamina C MAP es estable y efectivo sin picar. En 4 semanas, mis manchas oscuras son notablemente más claras y mi tono general es más uniforme. ¡El brillo es real!' 
    },
    verifiedPurchase: true,
    helpful: 78,
    date: new Date('2024-02-12'),
    skinType: 'Normal/Dry',
    ageRange: '25-34',
    useCase: 'Hyperpigmentation & Brightening'
  },
  {
    id: 'rev-007',
    productId: 'illuminator',
    userId: 'user-007',
    userName: { en: 'Diana C.', es: 'Diana C.' },
    userLocation: { en: 'Bucaramanga, Colombia', es: 'Bucaramanga, Colombia' },
    rating: 4,
    title: { 
      en: 'Brightening effect is beautiful', 
      es: 'El efecto iluminador es hermoso' 
    },
    comment: { 
      en: 'This gives me that "glass skin" look I have been trying to achieve. My skin looks luminous and healthy. The only reason it is not 5 stars is the price point, but the quality justifies it. A little goes a long way!', 
      es: 'Esto me da ese aspecto de "piel de cristal" que he estado tratando de lograr. Mi piel se ve luminosa y saludable. La única razón por la que no son 5 estrellas es el precio, pero la calidad lo justifica. ¡Un poco rinde mucho!' 
    },
    verifiedPurchase: true,
    helpful: 41,
    date: new Date('2024-02-25'),
    skinType: 'Dry',
    ageRange: '18-24',
    useCase: 'Dullness & Radiance'
  },
  {
    id: 'rev-008',
    productId: 'architect',
    userId: 'user-008',
    userName: { en: 'Patricia R.', es: 'Patricia R.' },
    userLocation: { en: 'Manizales, Colombia', es: 'Manizales, Colombia' },
    rating: 5,
    title: { 
      en: 'Noticeably firmer skin after 5 weeks', 
      es: 'Piel notablemente más firme después de 5 semanas' 
    },
    comment: { 
      en: 'At 38, I was starting to notice sagging along my jawline. The Architect with polypeptides has genuinely improved my skin firmness. My face looks lifted and more defined. The CBD keeps it comfortable and non-irritating. This is high-performance skincare!', 
      es: 'A los 38, estaba empezando a notar flacidez a lo largo de mi línea de la mandíbula. The Architect con polipéptidos ha mejorado genuinamente la firmeza de mi piel. Mi rostro se ve levantado y más definido. El CBD lo mantiene cómodo y no irritante. ¡Esta es cosmética de alto rendimiento!' 
    },
    verifiedPurchase: true,
    helpful: 56,
    date: new Date('2024-02-08'),
    skinType: 'Mature/Dry',
    ageRange: '35-44',
    useCase: 'Firmness & Sagging'
  },
  {
    id: 'rev-009',
    productId: 'guardian',
    userId: 'user-009',
    userName: { en: 'Carlos E.', es: 'Carlos E.' },
    userLocation: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
    rating: 5,
    title: { 
      en: 'Essential for city living', 
      es: 'Esencial para vivir en la ciudad' 
    },
    comment: { 
      en: 'Living in Bogotá means pollution exposure daily. The Guardian with ferulic acid creates an invisible shield against environmental damage. My skin stays calm and protected all day. I use this every morning before sunscreen. It is a must-have for urban dwellers!', 
      es: 'Vivir en Bogotá significa exposición a la contaminación diariamente. The Guardian con ácido ferúlico crea un escudo invisible contra el daño ambiental. Mi piel permanece tranquila y protegida todo el día. Uso esto cada mañana antes del protector solar. ¡Es imprescindible para los habitantes urbanos!' 
    },
    verifiedPurchase: true,
    helpful: 52,
    date: new Date('2024-02-18'),
    skinType: 'Combination',
    ageRange: '25-34',
    useCase: 'Pollution Protection'
  },
  {
    id: 'rev-010',
    productId: 'spark',
    userId: 'user-010',
    userName: { en: 'Juliana M.', es: 'Juliana M.' },
    userLocation: { en: 'Cali, Colombia', es: 'Cali, Colombia' },
    rating: 5,
    title: { 
      en: 'Instant energy for tired skin', 
      es: 'Energía instantánea para piel cansada' 
    },
    comment: { 
      en: 'As a medical resident with irregular sleep, my skin always looked exhausted. The Spark with CoQ10 is like an espresso shot for my face. Dark circles are lighter and my skin has a healthy glow even after night shifts. This is my morning must-have!', 
      es: 'Como residente médica con sueño irregular, mi piel siempre se veía agotada. The Spark con CoQ10 es como un shot de espresso para mi cara. Las ojeras son más claras y mi piel tiene un brillo saludable incluso después de turnos nocturnos. ¡Este es mi imprescindible de la mañana!' 
    },
    verifiedPurchase: true,
    helpful: 64,
    date: new Date('2024-02-22'),
    skinType: 'Normal',
    ageRange: '25-34',
    useCase: 'Fatigue & Dark Circles'
  },
  {
    id: 'rev-011',
    productId: 'naturalist',
    userId: 'user-011',
    userName: { en: 'Isabella T.', es: 'Isabella T.' },
    userLocation: { en: 'Santa Marta, Colombia', es: 'Santa Marta, Colombia' },
    rating: 5,
    title: { 
      en: 'Perfect for pregnancy-safe anti-aging', 
      es: 'Perfecto para anti-envejecimiento seguro en el embarazo' 
    },
    comment: { 
      en: 'Being pregnant, I had to stop my retinol routine. The Naturalist with bakuchiol gives me similar results without the risk. My skin texture has improved and I feel confident knowing it is pregnancy-safe. Every expecting mother should know about this!', 
      es: 'Estando embarazada, tuve que detener mi rutina de retinol. The Naturalist con bakuchiol me da resultados similares sin el riesgo. La textura de mi piel ha mejorado y me siento segura sabiendo que es seguro para el embarazo. ¡Cada futura madre debería saber de esto!' 
    },
    verifiedPurchase: true,
    helpful: 92,
    date: new Date('2024-01-30'),
    skinType: 'Sensitive/Dry',
    ageRange: '25-34',
    useCase: 'Pregnancy-Safe Renewal'
  },
  {
    id: 'rev-012',
    productId: 'preserver',
    userId: 'user-012',
    userName: { en: 'Alejandro V.', es: 'Alejandro V.' },
    userLocation: { en: 'Armenia, Colombia', es: 'Armenia, Colombia' },
    rating: 5,
    title: { 
      en: 'Prevention is the best medicine', 
      es: 'La prevención es la mejor medicina' 
    },
    comment: { 
      en: 'At 29, I am investing in prejuvenation. The Preserver with resveratrol is my longevity insurance. My skin feels resilient and healthy. I love knowing I am protecting my collagen NOW rather than trying to rebuild it later. Smart skincare for the long game!', 
      es: 'A los 29, estoy invirtiendo en prejuvenación. The Preserver con resveratrol es mi seguro de longevidad. Mi piel se siente resistente y saludable. Me encanta saber que estoy protegiendo mi colágeno AHORA en lugar de tratar de reconstruirlo más tarde. ¡Cuidado inteligente de la piel para el largo plazo!' 
    },
    verifiedPurchase: true,
    helpful: 45,
    date: new Date('2024-02-14'),
    skinType: 'Normal',
    ageRange: '25-34',
    useCase: 'Prevention & Longevity'
  },
  {
    id: 'rev-013',
    productId: 'rainmaker',
    userId: 'user-013',
    userName: { en: 'Natalia H.', es: 'Natalia H.' },
    userLocation: { en: 'Ibagué, Colombia', es: 'Ibagué, Colombia' },
    rating: 5,
    title: { 
      en: 'Deep hydration that actually lasts', 
      es: 'Hidratación profunda que realmente dura' 
    },
    comment: { 
      en: 'I have tried countless hyaluronic acid serums that felt sticky or dried out quickly. The Rainmaker locks moisture in beautifully. My skin stays plump and dewy all day. The CBD addition prevents any tightness. This is the only HA product I will ever need!', 
      es: 'He probado innumerables sueros de ácido hialurónico que se sentían pegajosos o se secaban rápidamente. The Rainmaker retiene la humedad maravillosamente. Mi piel permanece rellena y húmeda todo el día. La adición de CBD previene cualquier tirantez. ¡Este es el único producto de HA que necesitaré!' 
    },
    verifiedPurchase: true,
    helpful: 71,
    date: new Date('2024-02-10'),
    skinType: 'Dry/Dehydrated',
    ageRange: '25-34',
    useCase: 'Dehydration & Plumpness'
  },
  {
    id: 'rev-014',
    productId: 'mason',
    userId: 'user-014',
    userName: { en: 'Gabriela L.', es: 'Gabriela L.' },
    userLocation: { en: 'Popayán, Colombia', es: 'Popayán, Colombia' },
    rating: 5,
    title: { 
      en: 'Rescued my over-exfoliated skin', 
      es: 'Rescató mi piel sobre-exfoliada' 
    },
    comment: { 
      en: 'I went overboard with acids and damaged my barrier badly. The Mason with ceramides rebuilt my skin in just 2 weeks. Redness, dryness, and sensitivity are gone. It feels like a protective blanket. If your barrier is compromised, this is your answer!', 
      es: 'Me excedí con los ácidos y dañé mi barrera gravemente. The Mason con ceramidas reconstruyó mi piel en solo 2 semanas. Enrojecimiento, sequedad y sensibilidad desaparecieron. Se siente como una manta protectora. Si tu barrera está comprometida, ¡esta es tu respuesta!' 
    },
    verifiedPurchase: true,
    helpful: 83,
    date: new Date('2024-02-16'),
    skinType: 'Sensitive/Damaged',
    ageRange: '18-24',
    useCase: 'Barrier Repair'
  },
  {
    id: 'rev-015',
    productId: 'body-guard',
    userId: 'user-015',
    userName: { en: 'Laura F.', es: 'Laura F.' },
    userLocation: { en: 'Medellín, Colombia', es: 'Medellín, Colombia' },
    rating: 5,
    title: { 
      en: 'Body skincare at facial quality', 
      es: 'Cuidado corporal con calidad facial' 
    },
    comment: { 
      en: 'Finally a body lotion that treats my body skin with the same respect as my face! The Second Skin has improved the texture on my arms and legs, and my stretch marks are fading. The 4% CBD keeps my skin smooth and comfortable. This is luxury body care!', 
      es: '¡Finalmente una loción corporal que trata la piel de mi cuerpo con el mismo respeto que mi cara! The Second Skin ha mejorado la textura en mis brazos y piernas, y mis estrías se están desvaneciendo. El 4% CBD mantiene mi piel suave y cómoda. ¡Esta es cosmética corporal de lujo!' 
    },
    verifiedPurchase: true,
    helpful: 59,
    date: new Date('2024-02-19'),
    skinType: 'Normal/Dry',
    ageRange: '25-34',
    useCase: 'Body Firmness & Texture'
  },
  {
    id: 'rev-016',
    productId: 'crown-shampoo',
    userId: 'user-016',
    userName: { en: 'Daniela P.', es: 'Daniela P.' },
    userLocation: { en: 'Cartagena, Colombia', es: 'Cartagena, Colombia' },
    rating: 5,
    title: { 
      en: 'My scalp has never felt healthier', 
      es: 'Mi cuero cabelludo nunca se ha sentido más saludable' 
    },
    comment: { 
      en: 'I used to have constant scalp irritation and noticed thinning. The Root of Power shampoo with CBD has completely transformed my scalp health. It is calm, comfortable, and my hair looks thicker and shinier. This is scalp skincare at its finest!', 
      es: 'Solía tener irritación constante del cuero cabelludo y noté adelgazamiento. El champú Root of Power con CBD ha transformado completamente la salud de mi cuero cabelludo. Está tranquilo, cómodo, y mi cabello se ve más grueso y brillante. ¡Esta es cosmética capilar en su máxima expresión!' 
    },
    verifiedPurchase: true,
    helpful: 68,
    date: new Date('2024-02-11'),
    skinType: 'Sensitive Scalp',
    ageRange: '25-34',
    useCase: 'Scalp Health & Thinning'
  },
  {
    id: 'rev-017',
    productId: 'crown-conditioner',
    userId: 'user-017',
    userName: { en: 'Marcela S.', es: 'Marcela S.' },
    userLocation: { en: 'Cali, Colombia', es: 'Cali, Colombia' },
    rating: 5,
    title: { 
      en: 'Silky, strong hair without heaviness', 
      es: 'Cabello sedoso y fuerte sin pesadez' 
    },
    comment: { 
      en: 'The Crown Jewel conditioner is a perfect complement to the shampoo. My hair feels strengthened but not weighed down, which is rare for humid climates. The CBD helps lock in moisture without greasiness. My curls have never looked better!', 
      es: 'El acondicionador Crown Jewel es un complemento perfecto para el champú. Mi cabello se siente fortalecido pero no pesado, lo cual es raro en climas húmedos. El CBD ayuda a retener la humedad sin grasa. ¡Mis rizos nunca se han visto mejor!' 
    },
    verifiedPurchase: true,
    helpful: 54,
    date: new Date('2024-02-17'),
    skinType: 'Curly/Normal',
    ageRange: '18-24',
    useCase: 'Hair Strength & Moisture'
  },
  {
    id: 'rev-018',
    productId: 'peacemaker',
    userId: 'user-018',
    userName: { en: 'Ricardo M.', es: 'Ricardo M.' },
    userLocation: { en: 'Bucaramanga, Colombia', es: 'Bucaramanga, Colombia' },
    rating: 5,
    title: { 
      en: 'Controls oil without drying out', 
      es: 'Controla el aceite sin resecar' 
    },
    comment: { 
      en: 'My oily skin has always been a challenge. The Peacemaker with niacinamide balances my oil production perfectly. My pores look refined and my skin stays matte without feeling tight. The CBD prevents breakouts. This is the diplomat my skin needed!', 
      es: 'Mi piel grasa siempre ha sido un desafío. The Peacemaker con niacinamida equilibra mi producción de aceite perfectamente. Mis poros se ven refinados y mi piel permanece mate sin sentirse tirante. El CBD previene brotes. ¡Este es el diplomático que mi piel necesitaba!' 
    },
    verifiedPurchase: true,
    helpful: 49,
    date: new Date('2024-02-21'),
    skinType: 'Oily/Large Pores',
    ageRange: '18-24',
    useCase: 'Oil Control & Pore Refinement'
  }
]

export function getProductReviews(productId: string): Review[] {
  return mockReviews.filter(review => review.productId === productId)
}

export function getReviewStats(productId: string): ReviewStats {
  const reviews = getProductReviews(productId)
  
  if (reviews.length === 0) {
    return {
      averageRating: 0,
      totalReviews: 0,
      ratingDistribution: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
      verifiedPurchasePercentage: 0
    }
  }

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0)
  const averageRating = totalRating / reviews.length
  
  const ratingDistribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  reviews.forEach(review => {
    ratingDistribution[review.rating as keyof typeof ratingDistribution]++
  })
  
  const verifiedCount = reviews.filter(r => r.verifiedPurchase).length
  const verifiedPurchasePercentage = (verifiedCount / reviews.length) * 100

  return {
    averageRating,
    totalReviews: reviews.length,
    ratingDistribution,
    verifiedPurchasePercentage
  }
}

export function getAllReviewStats(): ReviewStats {
  const allRatings = mockReviews.map(r => r.rating)
  const totalRating = allRatings.reduce((sum, rating) => sum + rating, 0)
  const averageRating = totalRating / mockReviews.length
  
  const ratingDistribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  mockReviews.forEach(review => {
    ratingDistribution[review.rating as keyof typeof ratingDistribution]++
  })
  
  const verifiedCount = mockReviews.filter(r => r.verifiedPurchase).length
  const verifiedPurchasePercentage = (verifiedCount / mockReviews.length) * 100

  return {
    averageRating,
    totalReviews: mockReviews.length,
    ratingDistribution,
    verifiedPurchasePercentage
  }
}
