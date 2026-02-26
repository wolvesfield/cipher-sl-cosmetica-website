export interface FAQItem {
  id: string
  question: string
  shortAnswer: string
  howItWorks: string
  designNote: string
  diagram: 'skin-layers' | 'routine-ring' | 'timeline' | 'molecule-stack' | 'globe' | 'status-bar' | 'compatibility-grid'
}

export interface FAQCluster {
  id: string
  title: string
  color: string
  questions: FAQItem[]
}

export const faqClusters: FAQCluster[] = [
  {
    id: 'protocols',
    title: 'Protocols & Routines',
    color: 'oklch(0.60_0.10_210)',
    questions: [
      {
        id: 'pr-1',
        question: 'How should I layer AGING, IMPERFECTIONS, and HYPERPIGMENTATION treatments in one routine?',
        shortAnswer: 'Apply water-based actives first (e.g., niacinamide for imperfections), then oil-compatible treatments (retinol for aging), and seal with barrier support for hyperpigmentation concerns.',
        howItWorks: `Ingredient solubility determines layering order. Water-soluble actives penetrate best on clean skin; lipophilic molecules follow, aided by the skin's natural lipid barrier. CBD-infused formulas support all layers by modulating inflammation that can trigger pigment production.`,
        designNote: 'Show a 3D cross-section of skin with colored streams representing each treatment penetrating at different depths. Animate the layering sequence with arrows showing optimal absorption paths.',
        diagram: 'skin-layers'
      },
      {
        id: 'pr-2',
        question: 'Can I use retinol and vitamin C in the same routine?',
        shortAnswer: 'Yes, when formulated correctly. Use vitamin C (MAP) in the morning for antioxidant protection, and retinol at night for cellular turnover.',
        howItWorks: `MAP (Magnesium Ascorbyl Phosphate) is pH-stable and compatible with most actives. Retinol works best during skin's nocturnal repair cycle. Both benefit from CBD's anti-inflammatory buffer, reducing the irritation risk of combining potent actives.`,
        designNote: 'Display an AM/PM split-screen with sun and moon icons. Show molecular structures of MAP and retinol with compatibility indicators (green checkmarks) and optimal timing (day/night cycles).',
        diagram: 'routine-ring'
      },
      {
        id: 'pr-3',
        question: 'How often should I use CBD-infused treatments vs. traditional actives?',
        shortAnswer: 'CBD formulas can be used daily, morning and night. They enhance tolerance to traditional actives like retinoids and acids, allowing for more consistent use.',
        howItWorks: 'MTRX-CBD modulates CB1/CB2 receptors in skin, dampening inflammatory cascades that cause redness and sensitivity. This creates a calmer environment for other actives to work without triggering defensive responses.',
        designNote: 'Show a weekly calendar grid with color-coded product icons. Animate usage frequency with pulsing indicators showing daily CBD use supporting every-other-day retinol application.',
        diagram: 'timeline'
      },
      {
        id: 'pr-4',
        question: 'What order should I apply serums, oils, and creams?',
        shortAnswer: 'Thinnest to thickest: serums → oils → creams. Wait 60 seconds between layers for optimal absorption.',
        howItWorks: 'Viscosity correlates with molecular size. Lightweight serums (hyaluronic acid, niacinamide) deliver small, fast-penetrating molecules. Oils modulate absorption speed. Creams provide occlusive barrier protection and sustained release of actives.',
        designNote: 'Display a vertical stack of translucent layers with thickness increasing upward. Animate droplets moving through each layer with different speeds, showing penetration depth and time.',
        diagram: 'skin-layers'
      },
      {
        id: 'pr-5',
        question: 'Should I adjust my routine seasonally or by climate?',
        shortAnswer: 'Yes. Increase hydrators (hyaluronic acid, ceramides) in dry climates; add lighter textures and antioxidants in humid or polluted environments.',
        howItWorks: `Transepidermal water loss (TEWL) increases in low humidity and cold, requiring more barrier support. Heat and humidity accelerate oxidative stress, demanding enhanced antioxidant defense. CBD's adaptogenic properties support skin equilibrium across conditions.`,
        designNote: 'Show a rotating globe with climate zones (humid, arid, cold, temperate). Each zone displays recommended product adjustments with icons for hydration, protection, and texture modifications.',
        diagram: 'globe'
      },
      {
        id: 'pr-6',
        question: 'Can I mix SL Cosmetica products with prescription treatments?',
        shortAnswer: 'Many SL formulas complement prescription regimens, but always consult your dermatologist before combining with tretinoin, hydroquinone, or other Rx actives.',
        howItWorks: 'Our CBD-infused barrier support and gentle hydrators often enhance prescription tolerance by reducing inflammation. However, some combinations may alter efficacy or cause unexpected interactions. Your clinician knows your full medical context.',
        designNote: 'Display a split panel: left side shows SL products with green complementary badges; right side shows prescription bottles with yellow consult first warnings. Include a direct link to Ask Your Clinician resource.',
        diagram: 'compatibility-grid'
      }
    ]
  },
  {
    id: 'ingredients',
    title: 'Ingredients & Mechanisms',
    color: 'oklch(0.65_0.12_200)',
    questions: [
      {
        id: 'in-1',
        question: 'What makes MTRX-CBD different from standard CBD in skincare?',
        shortAnswer: 'MTRX-CBD uses matrix encapsulation to protect cannabinoids through the formulation process and deliver them to target receptors in viable skin layers.',
        howItWorks: 'Standard CBD oxidizes easily and struggles to penetrate the stratum corneum. Our matrix technology uses lipid spheres to shield CBD molecules, enhancing stability and enabling controlled release at CB1/CB2 receptor sites where inflammation is regulated.',
        designNote: 'Animate a 3D molecule rotating with a protective sphere around it. Show the molecule traveling through skin layers (illustrated as translucent membranes) and releasing at the receptor site, depicted as a lock-and-key mechanism.',
        diagram: 'molecule-stack'
      },
      {
        id: 'in-2',
        question: 'How do peptides like Matrixyl 3000 actually reduce wrinkles?',
        shortAnswer: 'Matrixyl 3000 is a peptide complex that signals fibroblasts to increase collagen and elastin production, improving skin structural integrity over time.',
        howItWorks: 'Polypeptides mimic fragments of damaged collagen, triggering the skin repair response. Fibroblasts detect these signals and upregulate synthesis of new collagen I and III, the primary structural proteins. Visible improvement appears after 8-12 weeks of consistent use.',
        designNote: 'Show a side-by-side comparison: left panel displays degraded collagen fibers (fragmented strands); right panel shows new, organized collagen network after peptide signaling. Include a timeline slider from 0-12 weeks.',
        diagram: 'timeline'
      },
      {
        id: 'in-3',
        question: 'Are ceramides just moisturizers, or do they repair the barrier?',
        shortAnswer: 'Ceramides are structural lipids that actively rebuild the skin barrier by filling intercellular gaps in the stratum corneum.',
        howItWorks: 'The skin barrier is a brick-and-mortar structure: corneocytes (bricks) held together by lipid lamellae (mortar) made of ceramides, cholesterol, and fatty acids. Topical ceramides integrate into these lamellae, restoring barrier integrity and reducing TEWL.',
        designNote: 'Display an animated brick wall where gaps appear, then ceramide molecules (depicted as puzzle pieces) slot into the spaces, creating a seamless barrier. Show water droplets unable to escape through the completed barrier.',
        diagram: 'skin-layers'
      },
      {
        id: 'in-4',
        question: 'What is the difference between retinol, retinaldehyde, and tretinoin?',
        shortAnswer: 'All are retinoids that convert to retinoic acid (the active form), but they differ in conversion steps and potency. Tretinoin is prescription-strength; retinol requires two conversions; retinaldehyde needs one.',
        howItWorks: 'Retinoic acid binds to nuclear receptors (RAR/RXR) to regulate gene expression for collagen synthesis and cell turnover. More conversion steps = gentler but slower results. SL formulations pair retinol with CBD to buffer irritation during conversion.',
        designNote: 'Show a stepped pyramid: tretinoin at the top (0 conversions, highest potency), retinaldehyde in the middle (1 conversion), retinol at the base (2 conversions). Animate conversion arrows and label with irritation potential decreasing downward.',
        diagram: 'molecule-stack'
      },
      {
        id: 'in-5',
        question: 'Is niacinamide safe for sensitive or rosacea-prone skin?',
        shortAnswer: 'Yes. Niacinamide is anti-inflammatory and strengthens the barrier, making it one of the safest actives for reactive skin types.',
        howItWorks: 'Niacinamide (vitamin B3) inhibits inflammatory cytokines and boosts ceramide synthesis. It reduces transepidermal water loss and calms vascular reactivity, both beneficial for rosacea. Concentrations between 2-5% are clinically effective without irritation risk.',
        designNote: 'Display a calm vs. reactive skin comparison. Calm side shows organized cells with reduced redness (cool blue tones); reactive side shows dilated capillaries (red). Animate niacinamide molecules soothing the reactive side.',
        diagram: 'skin-layers'
      },
      {
        id: 'in-6',
        question: 'Are fragrances and preservatives necessary in clinical formulas?',
        shortAnswer: 'Preservatives are essential for safety; fragrances are optional. SL uses minimal, hypoallergenic preservatives and offers fragrance-free options for sensitive skin.',
        howItWorks: 'Water-based formulas require preservation to prevent microbial contamination that causes infection or product degradation. We use broad-spectrum, low-sensitization preservatives at the lowest effective dose. Fragrance-free formulas omit all masking scents.',
        designNote: 'Show two product bottles side-by-side. Left bottle has a shield icon (preservatives) with a green check and essential for safety label. Right bottle has a fragrance icon with a toggle switch (on/off) and optional label.',
        diagram: 'status-bar'
      }
    ]
  },
  {
    id: 'results',
    title: 'Results, Safety & Sensitivity',
    color: 'oklch(0.58_0.10_40)',
    questions: [
      {
        id: 'rs-1',
        question: 'How quickly should I see results from anti-aging treatments?',
        shortAnswer: 'Hydration improves within days; texture and tone refine over 4-6 weeks; collagen-dependent changes (fine lines, firmness) require 8-12 weeks of consistent use.',
        howItWorks: 'Immediate effects (plumping, smoothness) result from increased hydration in the stratum corneum. Cellular turnover accelerates around week 4, revealing fresher skin. Dermal remodeling (collagen/elastin synthesis) is a slow biological process requiring 2-3 months.',
        designNote: 'Display an interactive timeline slider: drag from Week 0 to Week 12. At each checkpoint (1, 4, 8, 12), show before/after skin images with labeled improvements (hydration, texture, firmness). Include a progress bar with color transitions.',
        diagram: 'timeline'
      },
      {
        id: 'rs-2',
        question: 'What is the difference between purging and irritation?',
        shortAnswer: 'Purging is temporary acne in areas you normally break out, caused by accelerated cell turnover. Irritation is redness, burning, or new breakouts in unusual areas.',
        howItWorks: 'Purging occurs when retinoids or acids speed up the skin cycle, bringing existing microcomedones to the surface faster. It resolves in 4-6 weeks. Irritation is an inflammatory reaction to an incompatible ingredient or overuse, requiring product adjustment.',
        designNote: 'Split-screen comparison: left shows purging with familiar acne zones highlighted and upward arrows indicating faster turnover. Right shows irritation with widespread redness, flame icons, and a red X. Include decision tree: If X, then Y.',
        diagram: 'skin-layers'
      },
      {
        id: 'rs-3',
        question: 'Can I use active treatments during pregnancy or breastfeeding?',
        shortAnswer: 'Avoid retinoids and high-dose salicylic acid during pregnancy. Vitamin C, niacinamide, hyaluronic acid, and CBD are generally considered safe, but always confirm with your OB-GYN.',
        howItWorks: 'Retinoids can affect fetal development; systemic absorption of topical retinol is minimal but not zero. Most other actives have minimal systemic exposure. CBD in topical use is non-psychoactive and localized, but individual medical guidance is essential.',
        designNote: 'Display a safety matrix: rows list ingredients (retinoids, vitamin C, niacinamide, CBD, etc.); columns show status (pregnancy, breastfeeding). Use color coding: green (generally safe), yellow (case-by-case), red (avoid). Include Ask Your Doctor CTA.',
        diagram: 'compatibility-grid'
      },
      {
        id: 'rs-4',
        question: 'How do I know if I am using too many actives?',
        shortAnswer: 'Signs of overuse include persistent redness, stinging on product application, increased sensitivity to touch, flaking, and new breakouts in atypical areas.',
        howItWorks: 'Over-exfoliation disrupts the skin barrier, triggering inflammation and compromising the acid mantle. This creates a sensitization cycle. If you experience these symptoms, pause all actives except gentle hydrators for 3-5 days, then reintroduce one product at a time.',
        designNote: 'Show a skin stress meter with zones: green (balanced), yellow (mild irritation), red (overloaded). List symptoms at each level. Include a reset protocol flowchart: pause → repair → reintroduce gradually.',
        diagram: 'status-bar'
      },
      {
        id: 'rs-5',
        question: 'Are SL products tested on animals?',
        shortAnswer: 'No. SL Cosmetica is certified cruelty-free. We use in-vitro testing, human clinical trials, and advanced skin models to validate safety and efficacy.',
        howItWorks: 'Modern safety testing uses reconstructed human epidermis (RHE) models and computational toxicology to predict outcomes without animal use. Clinical trials on human volunteers provide real-world efficacy data. All testing meets EU, US, and international cosmetic regulations.',
        designNote: 'Display certification badges (Leaping Bunny, cruelty-free logo) with verification links. Show an animated flowchart: Lab-grown skin models → Computer simulations → Human volunteer trials. Include a View Our Ethics Charter button.',
        diagram: 'status-bar'
      },
      {
        id: 'rs-6',
        question: 'What should I do if I experience a reaction to a product?',
        shortAnswer: 'Stop use immediately, cleanse gently with lukewarm water, and apply a bland moisturizer. If redness or swelling persists beyond 24 hours, consult a dermatologist.',
        howItWorks: 'Most reactions are mild irritant contact dermatitis, which resolves with product cessation and barrier repair. True allergic reactions (itching, hives, swelling) require medical evaluation. Patch testing new products on the inner arm for 48 hours reduces risk.',
        designNote: 'Show a reaction response flowchart: Stop product → Gentle cleanse → Barrier repair → Monitor 24h. Branch point: resolves (return to normal routine) vs. persists (see dermatologist). Include emergency contact info for severe reactions.',
        diagram: 'compatibility-grid'
      }
    ]
  },
  {
    id: 'ethics',
    title: 'Ethics, Sustainability & Regulation',
    color: 'oklch(0.55_0.10_150)',
    questions: [
      {
        id: 'et-1',
        question: 'Is SL Cosmetica vegan?',
        shortAnswer: 'Most SL products are vegan. A few formulas contain ethically sourced beeswax or lanolin; these are clearly labeled.',
        howItWorks: 'Vegan formulas use plant-derived and synthetic alternatives to animal ingredients. Where animal-derived ingredients provide unique functional benefits (e.g., lanolin for occlusion), we source from ethical suppliers with transparent welfare standards.',
        designNote: 'Display product cards with vegan badge (green leaf) or contains animal-derived ingredients badge (amber). Include a filter toggle to show only vegan products. Link to sourcing transparency page.',
        diagram: 'status-bar'
      },
      {
        id: 'et-2',
        question: 'Is CBD legal in my region, and how do you ensure compliance?',
        shortAnswer: 'CBD legality varies by country. SL Cosmetica sells only in regions where hemp-derived, THC-free (<0.3%) CBD is legally permitted in cosmetics.',
        howItWorks: 'Our CBD is extracted from industrial hemp and tested to confirm <0.3% THC (non-psychoactive threshold). Each batch includes Certificates of Analysis (COA) verifying cannabinoid profile and purity. We monitor regulatory changes and update regional availability accordingly.',
        designNote: 'Show a rotating globe with color-coded regions: green (CBD permitted), yellow (restricted/permit required), red (prohibited). Clicking a region displays regulatory details and COA verification links.',
        diagram: 'globe'
      },
      {
        id: 'et-3',
        question: 'What is SL doing to reduce environmental impact?',
        shortAnswer: 'We use recyclable glass packaging, offer refill programs, source renewable ingredients, and offset carbon emissions from shipping.',
        howItWorks: 'Glass is infinitely recyclable without quality loss. Refills reduce packaging by 70%. We prioritize ingredients from regenerative agriculture and biodegradable formulations. Carbon offsets fund reforestation and renewable energy projects equivalent to shipping emissions.',
        designNote: 'Display a sustainability dashboard with animated metrics: packaging recyclability (glass icon, 100%), refill reduction (70% less waste), carbon offset (tree counter), and ingredient sourcing (farm-to-lab visual). Link to annual sustainability report.',
        diagram: 'status-bar'
      },
      {
        id: 'et-4',
        question: 'How can I verify the clinical claims on your products?',
        shortAnswer: 'All efficacy claims are backed by human clinical trials or published research. COAs, study summaries, and third-party testing results are available on each product page.',
        howItWorks: 'We conduct independent clinical trials following ISO standards: controlled conditions, statistically significant sample sizes, and objective measurements (e.g., corneometry, chromametry). Results are peer-reviewed and summarized in accessible language on our site.',
        designNote: 'Show a Proof Stack for each product: clinical study badge (with participant count and duration), COA verification link, third-party testing seal, and peer-review publication link. Each is clickable and opens detailed documentation.',
        diagram: 'status-bar'
      },
      {
        id: 'et-5',
        question: 'Does SL support any social or environmental initiatives?',
        shortAnswer: 'Yes. 2% of revenue funds skin health education in underserved communities and conservation efforts in biodiverse regions where we source ingredients.',
        howItWorks: 'We partner with local organizations to provide dermatological care access and skincare education. In sourcing regions (e.g., rainforests for botanicals), we support habitat conservation and fair-trade cooperatives to ensure community benefit and ecosystem health.',
        designNote: 'Display an impact dashboard with counters: educational programs supported, communities reached, hectares of habitat protected, and fair-trade partnerships. Include stories from partner organizations with photos and testimonials.',
        diagram: 'status-bar'
      },
      {
        id: 'et-6',
        question: 'What happens to products returned or expired?',
        shortAnswer: 'Returned products are inspected; sealed items are restocked, opened items are disposed of safely. Expired stock is recycled or composted where formulation permits.',
        howItWorks: 'Quality control checks returned products for seal integrity. Opened products cannot be resold due to contamination risk and are sent to proper disposal facilities. Biodegradable formulas are composted; glass is recycled; non-recyclable materials are minimized in design.',
        designNote: 'Show a circular flow diagram: product return → inspection → sealed (restock) vs. opened (safe disposal). Branch further into disposal methods: compost (biodegradable), recycle (glass), proper waste (minimal). Include zero-waste goal timeline.',
        diagram: 'compatibility-grid'
      }
    ]
  },
  {
    id: 'orders',
    title: 'Orders, Shipping & Returns',
    color: 'oklch(0.50_0.12_230)',
    questions: [
      {
        id: 'or-1',
        question: 'Which regions does SL Cosmetica ship to?',
        shortAnswer: 'We ship to North America (US, Canada, Mexico), Latin America (Brazil, Colombia, Peru, Chile), Europe (EU, UK, Switzerland), and select Asia-Pacific markets (Australia, Korea, Japan).',
        howItWorks: 'Regional availability depends on regulatory approval for CBD and other active ingredients. We partner with local distributors in some markets to ensure fast delivery and compliance with import requirements. Check the regional selector for specific country availability.',
        designNote: 'Display a 3D rotating globe with green pins marking ship-to regions. Clicking a region shows: estimated delivery time, shipping cost, customs notes (especially for CBD), and local distributor info if applicable.',
        diagram: 'globe'
      },
      {
        id: 'or-2',
        question: 'How are customs and import duties handled for international orders?',
        shortAnswer: 'Customs duties vary by destination. For most regions, duties are calculated at checkout and prepaid; in some cases, the carrier will collect upon delivery.',
        howItWorks: 'We use DDP (Delivered Duty Paid) for major markets, meaning all taxes and duties are included in your order total. For regions where DDP is not available, we clearly indicate potential duty charges during checkout, and the carrier contacts you before delivery.',
        designNote: 'Show a checkout flow mockup with a Duties & Taxes section. For DDP regions, display All duties included badge. For non-DDP, show estimated range and link to customs calculator. Include country-specific examples (e.g., UK, Brazil).',
        diagram: 'compatibility-grid'
      },
      {
        id: 'or-3',
        question: 'What if my order arrives damaged or incorrect?',
        shortAnswer: 'Contact support within 7 days with photos. We will send a replacement immediately or issue a full refund—no need to return the damaged item.',
        howItWorks: 'Our shipping partners use insured packaging, but accidents happen. Photos help us identify recurring damage patterns to improve packaging. Replacement orders ship priority at no extra cost. Refunds process within 3-5 business days to your original payment method.',
        designNote: 'Show a damage report flow: upload photo → instant verification → choose replacement or refund → confirmation. Include estimated timelines for each step. Display support chat button with Average response: 2 hours badge.',
        diagram: 'compatibility-grid'
      },
      {
        id: 'or-4',
        question: 'How do subscriptions work for delivery and billing?',
        shortAnswer: 'Subscriptions auto-ship at your chosen interval (30, 60, or 90 days) with discounts up to 15%. You are charged 3 days before each shipment and can pause, modify, or cancel anytime.',
        howItWorks: 'Your first order ships immediately. Subsequent deliveries follow your selected frequency. Three days before shipment, we send a reminder email and process payment. You can adjust frequency, skip a delivery, or cancel from your account dashboard—changes take effect immediately.',
        designNote: 'Display a subscription timeline: today (first order) → 27 days (reminder email) → 30 days (auto-ship). Show interactive controls: pause, skip next, change frequency (with discount adjustments), cancel. Include a Your Next Delivery countdown widget.',
        diagram: 'timeline'
      },
      {
        id: 'or-5',
        question: 'What is your return policy for unopened products?',
        shortAnswer: 'Unopened products can be returned within 30 days of delivery for a full refund, minus return shipping costs (free for quality issues).',
        howItWorks: 'We want you to be certain before opening. If you change your mind, return the sealed product within 30 days. Initiate the return through your account; you will receive a prepaid label (regions vary). Refunds process within 5-7 days of our warehouse receiving the item.',
        designNote: 'Show a 30-day calendar with return window highlighted. Display step-by-step return flow: request label → pack item → ship (track return) → refund processed. Include eligibility checker: Is your item sealed? Purchased within 30 days?',
        diagram: 'timeline'
      },
      {
        id: 'or-6',
        question: 'Can I combine subscription items with one-time purchases in a single order?',
        shortAnswer: 'Yes. At checkout, subscription items and one-time purchases ship together on your first order. Future subscription deliveries ship separately at your chosen intervals.',
        howItWorks: 'The initial order consolidates all items for efficient shipping. After that, subscription products auto-ship on their schedule, while one-time purchases remain one-off. This ensures you get discounted subscription pricing without delay and full control over additional products.',
        designNote: 'Display a cart view with two sections: Subscription Items (with frequency badge and discount) and One-Time Purchases. Show how they combine for first shipment, then split into separate timelines for future orders.',
        diagram: 'compatibility-grid'
      }
    ]
  }
]
