import { Review, ReviewStats } from './types'

interface ExtendedReview extends Review {
  benefitTags?: string[]
  notHelpful?: number
}

export const productRatings: Record<string, ReviewStats> = {
  'mtrx-001': {
    averageRating: 4.92,
    totalReviews: 2847,
    ratingDistribution: { 5: 70, 4: 18, 3: 8, 2: 2, 1: 2 },
    verifiedPurchasePercentage: 87
  },
  'mtrx-002': {
    averageRating: 4.88,
    totalReviews: 1654,
    ratingDistribution: { 5: 66, 4: 22, 3: 8, 2: 2, 1: 2 },
    verifiedPurchasePercentage: 85
  },
  'mtrx-010': {
    averageRating: 4.85,
    totalReviews: 1892,
    ratingDistribution: { 5: 63, 4: 24, 3: 9, 2: 2, 1: 2 },
    verifiedPurchasePercentage: 82
  },
  'mtrx-012': {
    averageRating: 4.94,
    totalReviews: 2634,
    ratingDistribution: { 5: 72, 4: 17, 3: 7, 2: 2, 1: 2 },
    verifiedPurchasePercentage: 90
  },
  'mtrx-013': {
    averageRating: 4.90,
    totalReviews: 1456,
    ratingDistribution: { 5: 68, 4: 20, 3: 8, 2: 2, 1: 2 },
    verifiedPurchasePercentage: 85
  },
  'mtrx-014': {
    averageRating: 4.92,
    totalReviews: 1389,
    ratingDistribution: { 5: 70, 4: 19, 3: 7, 2: 2, 1: 2 },
    verifiedPurchasePercentage: 86
  }
}

export const reviewsByProduct: Record<string, ExtendedReview[]> = {
  'mtrx-001': [
    {
      id: 'rev-mtrx001-001',
      productId: 'mtrx-001',
      userId: 'user-001',
      userName: { en: 'Camila R.', es: 'Camila R.' },
      userLocation: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
      rating: 5,
      title: { en: 'A game-changer for my sensitive skin', es: 'Un cambio radical para mi piel sensible' },
      comment: { 
        en: 'After just 3 weeks, my redness has dramatically reduced. The 8.0% MTRX-CBD really calms my skin without any irritation. The texture is luxurious and absorbs beautifully. This has become my holy grail product!', 
        es: 'Después de solo 3 semanas, mi enrojecimiento se ha reducido dramáticamente.' 
      },
      verifiedPurchase: true,
      helpful: 47,
      notHelpful: 2,
      date: new Date('2024-02-15'),
      benefitTags: ['Calming', 'Barrier Repair', 'Hydrating']
    },
    {
      id: 'rev-mtrx001-002',
      productId: 'mtrx-001',
      userId: 'user-002',
      userName: { en: 'Santiago M.', es: 'Santiago M.' },
      userLocation: { en: 'Medellín, Colombia', es: 'Medellín, Colombia' },
      rating: 5,
      title: { en: 'Perfect for post-shave irritation', es: 'Perfecto para irritación post-afeitado' },
      comment: { 
        en: 'As someone who struggles with razor burn, this has been incredible. The CBD formula soothes immediately and the niacinamide helps control shine. My skin looks healthier and feels balanced. Highly recommend for men!', 
        es: 'Como alguien que lucha con la irritación del afeitado, esto ha sido increíble.' 
      },
      verifiedPurchase: true,
      helpful: 32,
      notHelpful: 1,
      date: new Date('2024-02-20'),
      benefitTags: ['Calming', 'Oil Control']
    },
    {
      id: 'rev-mtrx001-003',
      productId: 'mtrx-001',
      userId: 'user-003',
      userName: { en: 'Valentina S.', es: 'Valentina S.' },
      userLocation: { en: 'Cali, Colombia', es: 'Cali, Colombia' },
      rating: 4,
      title: { en: 'Great base cream, wish it had SPF', es: 'Excelente crema base' },
      comment: { 
        en: 'This cream has helped balance my oily T-zone while keeping my cheeks hydrated. The harmonizing effect is real. Only downside is I wish it had SPF for daytime use, so I have to layer another product.', 
        es: 'Esta crema ha ayudado a equilibrar mi zona T grasa.' 
      },
      verifiedPurchase: true,
      helpful: 23,
      notHelpful: 3,
      date: new Date('2024-03-01'),
      benefitTags: ['Balancing', 'Hydrating']
    },
    {
      id: 'rev-mtrx001-004',
      productId: 'mtrx-001',
      userId: 'user-004',
      userName: { en: 'Isabella T.', es: 'Isabella T.' },
      userLocation: { en: 'Cartagena, Colombia', es: 'Cartagena, Colombia' },
      rating: 5,
      title: { en: 'Reduced my inflammation overnight!', es: 'Redujo mi inflamación de la noche a la mañana' },
      comment: { 
        en: 'I had a breakout that was red and inflamed. Applied this before bed and woke up with visibly calmer skin. The anti-inflammatory properties of CBD are no joke. This is now a permanent part of my routine.', 
        es: 'Tuve un brote que estaba rojo e inflamado. Lo apliqué antes de acostarme y desperté con la piel visiblemente más calmada.' 
      },
      verifiedPurchase: true,
      helpful: 56,
      notHelpful: 1,
      date: new Date('2024-01-22'),
      benefitTags: ['Calming', 'Anti-Inflammatory', 'Fast Results']
    },
    {
      id: 'rev-mtrx001-005',
      productId: 'mtrx-001',
      userId: 'user-005',
      userName: { en: 'Diego F.', es: 'Diego F.' },
      userLocation: { en: 'Bucaramanga, Colombia', es: 'Bucaramanga, Colombia' },
      rating: 5,
      title: { en: 'Best investment in my skincare', es: 'Mejor inversión en mi cuidado de la piel' },
      comment: { 
        en: 'I was hesitant about the price, but after using it for 2 months, I can say it\'s worth every peso. My skin texture has improved, my redness is gone, and I get compliments on my glow. The CBD technology is legit.', 
        es: 'Dudaba sobre el precio, pero después de usarlo durante 2 meses, puedo decir que vale cada peso.' 
      },
      verifiedPurchase: true,
      helpful: 41,
      notHelpful: 2,
      date: new Date('2024-02-05'),
      benefitTags: ['Glow', 'Texture Improvement', 'Worth It']
    },
    {
      id: 'rev-mtrx001-006',
      productId: 'mtrx-001',
      userId: 'user-006',
      userName: { en: 'Lucía M.', es: 'Lucía M.' },
      userLocation: { en: 'Pereira, Colombia', es: 'Pereira, Colombia' },
      rating: 4,
      title: { en: 'Gentle and effective', es: 'Suave y efectivo' },
      comment: { 
        en: 'I have extremely sensitive skin and most products irritate me. This one is incredibly gentle yet effective. My skin feels soft and looks healthier. The only reason I\'m not giving 5 stars is the texture takes a minute to fully absorb.', 
        es: 'Tengo piel extremadamente sensible y la mayoría de los productos me irritan. Este es increíblemente suave pero efectivo.' 
      },
      verifiedPurchase: true,
      helpful: 18,
      notHelpful: 1,
      date: new Date('2024-03-10'),
      benefitTags: ['Gentle', 'For Sensitive Skin']
    },
    {
      id: 'rev-mtrx001-007',
      productId: 'mtrx-001',
      userId: 'user-007',
      userName: { en: 'Ana P.', es: 'Ana P.' },
      userLocation: { en: 'Santa Marta, Colombia', es: 'Santa Marta, Colombia' },
      rating: 5,
      title: { en: 'My rosacea has never looked better', es: 'Mi rosácea nunca se ha visto mejor' },
      comment: { 
        en: 'I\'ve struggled with rosacea for years and tried countless products. The Great Harmonizer is the only one that has truly made a difference. The redness is significantly reduced and my skin feels calm and balanced. I\'m a customer for life!', 
        es: 'He luchado con rosácea durante años y probé innumerables productos. The Great Harmonizer es el único que realmente ha hecho una diferencia.' 
      },
      verifiedPurchase: true,
      helpful: 73,
      notHelpful: 0,
      date: new Date('2024-01-18'),
      benefitTags: ['Redness Relief', 'Rosacea', 'Calming']
    },
    {
      id: 'rev-mtrx001-008',
      productId: 'mtrx-001',
      userId: 'user-008',
      userName: { en: 'Miguel Á.', es: 'Miguel Á.' },
      userLocation: { en: 'Manizales, Colombia', es: 'Manizales, Colombia' },
      rating: 5,
      title: { en: 'Works great under makeup', es: 'Funciona muy bien bajo el maquillaje' },
      comment: { 
        en: 'I use this every morning before makeup and it creates the perfect base. Keeps my skin hydrated all day without making my foundation slide off. The CBD helps with any inflammation too. Love it!', 
        es: 'Lo uso todas las mañanas antes del maquillaje y crea la base perfecta.' 
      },
      verifiedPurchase: true,
      helpful: 29,
      notHelpful: 1,
      date: new Date('2024-02-28'),
      benefitTags: ['Makeup Base', 'Hydrating', 'Long-Lasting']
    }
  ],
  'mtrx-010': [
    {
      id: 'rev-mtrx010-001',
      productId: 'mtrx-010',
      userId: 'user-030',
      userName: { en: 'Claudia M.', es: 'Claudia M.' },
      userLocation: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
      rating: 5,
      title: { en: 'My skin drinks this up!', es: '¡Mi piel absorbe esto!' },
      comment: { 
        en: 'The Rainmaker lives up to its name - it floods my skin with hydration! My dry patches are gone and my complexion looks plump and dewy. The hyaluronic acid combined with CBD is magic.', 
        es: 'The Rainmaker hace honor a su nombre - ¡inunda mi piel con hidratación!' 
      },
      verifiedPurchase: true,
      helpful: 68,
      notHelpful: 2,
      date: new Date('2024-02-15'),
      benefitTags: ['Hydrating', 'Plumping', 'Dewy Finish']
    },
    {
      id: 'rev-mtrx010-002',
      productId: 'mtrx-010',
      userId: 'user-031',
      userName: { en: 'Miguel A.', es: 'Miguel A.' },
      userLocation: { en: 'Medellín, Colombia', es: 'Medellín, Colombia' },
      rating: 5,
      title: { en: 'Best for dehydrated skin', es: 'Mejor para piel deshidratada' },
      comment: { 
        en: 'I work in a dry office environment and my skin always felt tight. The Rainmaker changed everything. It keeps my skin hydrated all day and I no longer have that uncomfortable tightness. Highly recommend!', 
        es: 'Trabajo en un ambiente de oficina seco y mi piel siempre se sentía tirante.' 
      },
      verifiedPurchase: true,
      helpful: 54,
      notHelpful: 1,
      date: new Date('2024-02-20'),
      benefitTags: ['Long-Lasting Hydration', 'Relieves Tightness', 'Office-Friendly']
    },
    {
      id: 'rev-mtrx010-003',
      productId: 'mtrx-010',
      userId: 'user-032',
      userName: { en: 'Valentina P.', es: 'Valentina P.' },
      userLocation: { en: 'Cali, Colombia', es: 'Cali, Colombia' },
      rating: 4,
      title: { en: 'Great hydration, slightly sticky at first', es: 'Gran hidratación, ligeramente pegajoso al principio' },
      comment: { 
        en: 'This cream provides incredible hydration and my skin looks so healthy now. The only minor issue is it feels slightly sticky for the first minute after application, but it absorbs nicely after that.', 
        es: 'Esta crema proporciona una hidratación increíble y mi piel se ve tan saludable ahora.' 
      },
      verifiedPurchase: true,
      helpful: 42,
      notHelpful: 3,
      date: new Date('2024-03-01'),
      benefitTags: ['Hydrating', 'Healthy Skin', 'Plumping']
    },
    {
      id: 'rev-mtrx010-004',
      productId: 'mtrx-010',
      userId: 'user-033',
      userName: { en: 'Isabella R.', es: 'Isabella R.' },
      userLocation: { en: 'Cartagena, Colombia', es: 'Cartagena, Colombia' },
      rating: 5,
      title: { en: 'Saved my skin in dry climate', es: 'Salvó mi piel en clima seco' },
      comment: { 
        en: 'Living in a dry climate was wreaking havoc on my skin until I found The Rainmaker. The multi-weight hyaluronic acid penetrates deeply and the CBD soothes any irritation. My skin has never looked better!', 
        es: 'Vivir en un clima seco estaba destruyendo mi piel hasta que encontré The Rainmaker.' 
      },
      verifiedPurchase: true,
      helpful: 76,
      notHelpful: 1,
      date: new Date('2024-01-22'),
      benefitTags: ['Deep Hydration', 'Climate Protection', 'Soothing']
    },
    {
      id: 'rev-mtrx010-005',
      productId: 'mtrx-010',
      userId: 'user-034',
      userName: { en: 'Diego S.', es: 'Diego S.' },
      userLocation: { en: 'Bucaramanga, Colombia', es: 'Bucaramanga, Colombia' },
      rating: 5,
      title: { en: 'Perfect for layering', es: 'Perfecto para capas' },
      comment: { 
        en: 'I use The Rainmaker as my hydration base before applying other actives. It layers beautifully and doesn\'t pill. My skin stays hydrated all day and other products absorb better. A must-have in my routine!', 
        es: 'Uso The Rainmaker como mi base de hidratación antes de aplicar otros activos.' 
      },
      verifiedPurchase: true,
      helpful: 63,
      notHelpful: 2,
      date: new Date('2024-02-05'),
      benefitTags: ['Layering', 'No Pilling', 'Hydration Base']
    },
    {
      id: 'rev-mtrx010-006',
      productId: 'mtrx-010',
      userId: 'user-035',
      userName: { en: 'Lucía G.', es: 'Lucía G.' },
      userLocation: { en: 'Pereira, Colombia', es: 'Pereira, Colombia' },
      rating: 5,
      title: { en: 'Transformed my dry skin', es: 'Transformó mi piel seca' },
      comment: { 
        en: 'I\'ve always struggled with chronically dry skin. After using The Rainmaker for 4 weeks, my skin is completely transformed - soft, supple, and glowing. The difference is night and day!', 
        es: 'Siempre he luchado con piel crónicamente seca.' 
      },
      verifiedPurchase: true,
      helpful: 81,
      notHelpful: 0,
      date: new Date('2024-01-18'),
      benefitTags: ['Dry Skin Relief', 'Transformative', 'Glow']
    },
    {
      id: 'rev-mtrx010-007',
      productId: 'mtrx-010',
      userId: 'user-036',
      userName: { en: 'Ana B.', es: 'Ana B.' },
      userLocation: { en: 'Santa Marta, Colombia', es: 'Santa Marta, Colombia' },
      rating: 4,
      title: { en: 'Great for combination skin', es: 'Genial para piel combinada' },
      comment: { 
        en: 'I have combination skin and was worried this would be too heavy. It\'s actually perfect - hydrates my dry areas without making my T-zone oily. Just wish the bottle was a bit bigger for the price!', 
        es: 'Tengo piel combinada y me preocupaba que esto fuera muy pesado.' 
      },
      verifiedPurchase: true,
      helpful: 47,
      notHelpful: 4,
      date: new Date('2024-02-28'),
      benefitTags: ['Combination Skin', 'Balanced Hydration', 'Lightweight']
    },
    {
      id: 'rev-mtrx010-008',
      productId: 'mtrx-010',
      userId: 'user-037',
      userName: { en: 'Carlos V.', es: 'Carlos V.' },
      userLocation: { en: 'Manizales, Colombia', es: 'Manizales, Colombia' },
      rating: 5,
      title: { en: 'Works amazing with retinol', es: 'Funciona increíble con retinol' },
      comment: { 
        en: 'I use The Rainmaker with The Paradox (retinol formula) and they work perfectly together. The hydration prevents any dryness from the retinol and my skin looks amazing. Best combination for anti-aging!', 
        es: 'Uso The Rainmaker con The Paradox (fórmula de retinol) y funcionan perfectamente juntos.' 
      },
      verifiedPurchase: true,
      helpful: 91,
      notHelpful: 1,
      date: new Date('2024-01-30'),
      benefitTags: ['Pairs Well', 'Anti-Aging', 'Prevents Dryness']
    }
  ],
  'mtrx-012': [
    {
      id: 'rev-mtrx012-001',
      productId: 'mtrx-012',
      userId: 'user-014',
      userName: { en: 'Daniela C.', es: 'Daniela C.' },
      userLocation: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
      rating: 5,
      title: { en: 'My body skin has never felt better', es: 'La piel de mi cuerpo nunca se ha sentido mejor' },
      comment: { 
        en: 'The Second Skin lives up to its name! The 4.0% MTRX-CBD formula absorbs quickly and leaves my skin feeling silky smooth. I\'ve noticed a significant improvement in my skin\'s texture and elasticity, especially on my arms and legs.', 
        es: 'The Second Skin hace honor a su nombre! La fórmula de 4.0% MTRX-CBD se absorbe rápidamente.' 
      },
      verifiedPurchase: true,
      helpful: 78,
      notHelpful: 1,
      date: new Date('2024-02-08'),
      benefitTags: ['Fast Absorption', 'Texture Improvement', 'Elasticity']
    },
    {
      id: 'rev-mtrx012-002',
      productId: 'mtrx-012',
      userId: 'user-015',
      userName: { en: 'Roberto M.', es: 'Roberto M.' },
      userLocation: { en: 'Medellín, Colombia', es: 'Medellín, Colombia' },
      rating: 5,
      title: { en: 'Helped with my dry skin patches', es: 'Ayudó con mis parches de piel seca' },
      comment: { 
        en: 'I had persistent dry patches on my elbows and knees that nothing could fix. After 3 weeks of using The Second Skin, they\'re completely gone. The CBD really helps with hydration and inflammation. Highly recommend!', 
        es: 'Tenía parches secos persistentes en mis codos y rodillas que nada podía arreglar.' 
      },
      verifiedPurchase: true,
      helpful: 52,
      notHelpful: 2,
      date: new Date('2024-02-14'),
      benefitTags: ['Hydrating', 'Dry Skin', 'Anti-Inflammatory']
    },
    {
      id: 'rev-mtrx012-003',
      productId: 'mtrx-012',
      userId: 'user-016',
      userName: { en: 'Carolina B.', es: 'Carolina B.' },
      userLocation: { en: 'Cali, Colombia', es: 'Cali, Colombia' },
      rating: 5,
      title: { en: 'Perfect for post-workout recovery', es: 'Perfecto para recuperación post-entrenamiento' },
      comment: { 
        en: 'As someone who works out regularly, this lotion is a game-changer. The CBD helps with muscle soreness and the formula keeps my skin hydrated without feeling greasy. It\'s become an essential part of my gym bag!', 
        es: 'Como alguien que hace ejercicio regularmente, esta loción es un cambio radical.' 
      },
      verifiedPurchase: true,
      helpful: 69,
      notHelpful: 3,
      date: new Date('2024-01-20'),
      benefitTags: ['Muscle Recovery', 'Non-Greasy', 'CBD Benefits']
    },
    {
      id: 'rev-mtrx012-004',
      productId: 'mtrx-012',
      userId: 'user-017',
      userName: { en: 'Gabriela P.', es: 'Gabriela P.' },
      userLocation: { en: 'Barranquilla, Colombia', es: 'Barranquilla, Colombia' },
      rating: 5,
      title: { en: 'Amazing for stretch marks!', es: '¡Increíble para las estrías!' },
      comment: { 
        en: 'I had stretch marks from pregnancy and was looking for something to help improve their appearance. After using The Second Skin for 6 weeks, I can see a noticeable difference. The marks are fading and my skin looks healthier overall.', 
        es: 'Tenía estrías del embarazo y estaba buscando algo para ayudar a mejorar su apariencia.' 
      },
      verifiedPurchase: true,
      helpful: 84,
      notHelpful: 2,
      date: new Date('2024-01-15'),
      benefitTags: ['Stretch Marks', 'Skin Repair', 'Visible Improvement']
    },
    {
      id: 'rev-mtrx012-005',
      productId: 'mtrx-012',
      userId: 'user-018',
      userName: { en: 'Felipe H.', es: 'Felipe H.' },
      userLocation: { en: 'Bucaramanga, Colombia', es: 'Bucaramanga, Colombia' },
      rating: 4,
      title: { en: 'Great lotion, wish the bottle was bigger', es: 'Gran loción, desearía que el frasco fuera más grande' },
      comment: { 
        en: 'This body lotion is fantastic - absorbs quickly, smells subtle, and really works. My only complaint is that for a body product, I go through it pretty fast. Would love to see a larger size option!', 
        es: 'Esta loción corporal es fantástica - se absorbe rápidamente, huele sutil y realmente funciona.' 
      },
      verifiedPurchase: true,
      helpful: 45,
      notHelpful: 5,
      date: new Date('2024-02-22'),
      benefitTags: ['Fast Absorption', 'Subtle Scent', 'Effective']
    }
  ],
  'mtrx-002': [
    {
      id: 'rev-mtrx002-001',
      productId: 'mtrx-002',
      userId: 'user-019',
      userName: { en: 'Laura M.', es: 'Laura M.' },
      userLocation: { en: 'Bogotá, Colombia', es: 'Bogotá, Colombia' },
      rating: 5,
      title: { en: 'Retinol without the irritation!', es: '¡Retinol sin la irritación!' },
      comment: { 
        en: 'The Paradox combines retinol with CBD brilliantly. I get all the anti-aging benefits of retinol without any redness or peeling. My fine lines have diminished and my skin texture is so smooth!', 
        es: 'The Paradox combina retinol con CBD brillantemente.' 
      },
      verifiedPurchase: true,
      helpful: 85,
      notHelpful: 2,
      date: new Date('2024-02-10'),
      benefitTags: ['No Irritation', 'Anti-Aging', 'Smooth Texture']
    },
    {
      id: 'rev-mtrx002-002',
      productId: 'mtrx-002',
      userId: 'user-020',
      userName: { en: 'Juan C.', es: 'Juan C.' },
      userLocation: { en: 'Medellín, Colombia', es: 'Medellín, Colombia' },
      rating: 5,
      title: { en: 'Finally, retinol I can tolerate', es: 'Finalmente, retinol que puedo tolerar' },
      comment: { 
        en: 'I\'ve tried retinol products before but they always made my skin peel and burn. The Paradox is different - the CBD buffers the irritation perfectly. My acne scars are fading and I have no side effects!', 
        es: 'He probado productos de retinol antes pero siempre hacían que mi piel se pelara y ardiera.' 
      },
      verifiedPurchase: true,
      helpful: 72,
      notHelpful: 1,
      date: new Date('2024-01-28'),
      benefitTags: ['Gentle', 'Scar Fading', 'No Side Effects']
    },
    {
      id: 'rev-mtrx002-003',
      productId: 'mtrx-002',
      userId: 'user-021',
      userName: { en: 'Andrea P.', es: 'Andrea P.' },
      userLocation: { en: 'Cali, Colombia', es: 'Cali, Colombia' },
      rating: 4,
      title: { en: 'Great for wrinkles, use with sunscreen', es: 'Genial para arrugas, usar con protector solar' },
      comment: { 
        en: 'This product has reduced my crow\'s feet noticeably. The retinol is effective and the CBD keeps my skin calm. Just remember to use sunscreen during the day as retinol increases photosensitivity.', 
        es: 'Este producto ha reducido notablemente mis patas de gallo.' 
      },
      verifiedPurchase: true,
      helpful: 58,
      notHelpful: 4,
      date: new Date('2024-02-25'),
      benefitTags: ['Wrinkle Reduction', 'Effective', 'Needs SPF']
    },
    {
      id: 'rev-mtrx002-004',
      productId: 'mtrx-002',
      userId: 'user-022',
      userName: { en: 'Sofia R.', es: 'Sofia R.' },
      userLocation: { en: 'Cartagena, Colombia', es: 'Cartagena, Colombia' },
      rating: 5,
      title: { en: 'Transformed my aging skin', es: 'Transformó mi piel envejecida' },
      comment: { 
        en: 'At 52, I was looking for something powerful but gentle. The Paradox exceeded expectations - my skin looks younger, smoother, and more radiant. The CBD technology makes retinol finally work for me!', 
        es: 'A los 52 años, estaba buscando algo poderoso pero suave.' 
      },
      verifiedPurchase: true,
      helpful: 94,
      notHelpful: 1,
      date: new Date('2024-01-15'),
      benefitTags: ['Anti-Aging', 'Radiance', 'Gentle Formula']
    },
    {
      id: 'rev-mtrx002-005',
      productId: 'mtrx-002',
      userId: 'user-023',
      userName: { en: 'Ricardo L.', es: 'Ricardo L.' },
      userLocation: { en: 'Bucaramanga, Colombia', es: 'Bucaramanga, Colombia' },
      rating: 5,
      title: { en: 'Best retinol product on the market', es: 'Mejor producto de retinol del mercado' },
      comment: { 
        en: 'I\'m a dermatology enthusiast and have tried many retinol formulas. The Paradox is exceptional - pharmaceutical-grade retinol buffered with CBD for zero irritation. My skin has never looked better!', 
        es: 'Soy un entusiasta de la dermatología y he probado muchas fórmulas de retinol.' 
      },
      verifiedPurchase: true,
      helpful: 106,
      notHelpful: 2,
      date: new Date('2024-01-22'),
      benefitTags: ['Pharmaceutical Grade', 'Zero Irritation', 'Best Results']
    }
  ],
  'mtrx-013': [
    {
      id: 'rev-mtrx013-001',
      productId: 'mtrx-013',
      userId: 'user-026',
      userName: { en: 'Pedro L.', es: 'Pedro L.' },
      userLocation: { en: 'São Paulo, Brazil', es: 'São Paulo, Brasil' },
      rating: 5,
      title: { en: 'My hair is thicker and healthier!', es: '¡Mi cabello está más grueso y saludable!' },
      comment: { 
        en: 'The Root of Power shampoo has transformed my thinning hair. After 2 months, I notice less shedding and my hair feels fuller. The CBD helps with scalp inflammation too!', 
        es: 'El champú The Root of Power ha transformado mi cabello fino.' 
      },
      verifiedPurchase: true,
      helpful: 67,
      notHelpful: 2,
      date: new Date('2024-01-15'),
      benefitTags: ['Hair Growth', 'Less Shedding', 'Scalp Health']
    },
    {
      id: 'rev-mtrx013-002',
      productId: 'mtrx-013',
      userId: 'user-027',
      userName: { en: 'Marina F.', es: 'Marina F.' },
      userLocation: { en: 'Rio de Janeiro, Brazil', es: 'Río de Janeiro, Brasil' },
      rating: 5,
      title: { en: 'Helped with my scalp psoriasis', es: 'Ayudó con mi psoriasis del cuero cabelludo' },
      comment: { 
        en: 'I have scalp psoriasis and this shampoo has been a lifesaver. The CBD calms the inflammation and my scalp feels so much better. My hair also looks shinier and healthier!', 
        es: 'Tengo psoriasis del cuero cabelludo y este champú ha sido un salvavidas.' 
      },
      verifiedPurchase: true,
      helpful: 89,
      notHelpful: 1,
      date: new Date('2024-02-08'),
      benefitTags: ['Scalp Relief', 'Anti-Inflammatory', 'Shine']
    }
  ],
  'mtrx-014': [
    {
      id: 'rev-mtrx014-001',
      productId: 'mtrx-014',
      userId: 'user-028',
      userName: { en: 'Juliana M.', es: 'Juliana M.' },
      userLocation: { en: 'Brasília, Brazil', es: 'Brasília, Brasil' },
      rating: 5,
      title: { en: 'Perfect conditioner for damaged hair', es: 'Acondicionador perfecto para cabello dañado' },
      comment: { 
        en: 'The Crown Jewel conditioner has repaired my heat-damaged hair. It\'s so soft and manageable now. The CBD helps with frizz control and my hair looks salon-quality!', 
        es: 'El acondicionador The Crown Jewel ha reparado mi cabello dañado por el calor.' 
      },
      verifiedPurchase: true,
      helpful: 73,
      notHelpful: 2,
      date: new Date('2024-01-25'),
      benefitTags: ['Hair Repair', 'Frizz Control', 'Soft Hair']
    },
    {
      id: 'rev-mtrx014-002',
      productId: 'mtrx-014',
      userId: 'user-029',
      userName: { en: 'Rodrigo S.', es: 'Rodrigo S.' },
      userLocation: { en: 'Belo Horizonte, Brazil', es: 'Belo Horizonte, Brasil' },
      rating: 4,
      title: { en: 'Great results, but pricey', es: 'Grandes resultados, pero costoso' },
      comment: { 
        en: 'This conditioner works amazingly well - my hair is softer, shinier, and easier to style. The only downside is the price, but I guess quality has its cost. Worth it overall!', 
        es: 'Este acondicionador funciona increíblemente bien - mi cabello está más suave, brillante y fácil de peinar.' 
      },
      verifiedPurchase: true,
      helpful: 51,
      notHelpful: 5,
      date: new Date('2024-02-12'),
      benefitTags: ['Softness', 'Shine', 'Easy Styling']
    }
  ]
}
