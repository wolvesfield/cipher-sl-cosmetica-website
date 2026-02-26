# SL - Clinical Luxury Skincare E-Commerce Platform

A high-performance, mobile-first e-commerce web application targeting the Latin American market (Brazil, Mexico, Colombia), focused on clinical luxury skincare with the professional aesthetic of SkinCeuticals LATAM.

**Experience Qualities**:
1. **Scientific** - Every element reinforces medical-grade credibility through clean design, data visualization, and clinical research presentation
2. **Premium** - Sophisticated use of negative space, serif typography, and intentional color restraint creates an elevated shopping experience
3. **Educational** - Interactive features like 3D models, before/after sliders, and ingredient deep-dives transform shopping into a learning journey

**Complexity Level**: Complex Application (advanced functionality, likely with multiple views)
This is a full-featured e-commerce platform with multiple views (home, product listing, product details, checkout), advanced interactive components (3D models, AI agent, voice visualizer), localization, and rich product data management requiring sophisticated state handling.

## Essential Features

### Global Navigation & Localization
- **Functionality**: Dark slate header with multi-level navigation tabs (Products, Science, Skin Explanation, Professional Treatments, Get to Know Us) with expandable sub-navigation panels featuring comprehensive educational and product discovery pathways
- **Purpose**: Provides comprehensive product categorization and intuitive browsing through philosophy, category, and condition filters, plus extensive educational resources across science, skin biology, and ingredient knowledge
- **Trigger**: User clicks main navigation tab
- **Progression**: User lands on page → Clicks "PRODUCTS" tab → Sub-navigation panel expands below with three columns (Philosophy, Category, Skin Condition) → User clicks sub-category → Filtered view displays → Panel collapses. Categories include: Anti Aging Facial Cream, Anti Aging Body Care, and Anti Aging Hair & Scalp Care. For "SCIENCE" tab → Panel expands with Research & Innovation (without Bioavailability), Skin Biology, Active Ingredients, and Technology columns. For "SKIN EXPLANATION" tab → Panel expands with six comprehensive sections covering Understanding the Skin, Skin Types & Conditions, Environmental Damage, Sun Damage & Protection, Skin Concerns Explained, and Dictionary of Ingredients. For "GET TO KNOW US" tab → Panel expands with Our Story section (Our Promise, Our Heritage, Founder Vision) and Support section (Frequently Asked Questions, Contact Us, Customer Service, Product Support). Clicking "Frequently Asked Questions" navigates to the immersive 3D FAQ experience
- **Success criteria**: Smooth accordion animation with height transitions, hover states on all items with subtle translate effect, mobile-responsive grid layout (2 columns mobile, 3-5 columns desktop), sub-nav stays open until user clicks away or selects different main tab, section headers have border separators for visual hierarchy

### AI Pharmacist Chatbot
- **Functionality**: Floating button opens modal with LLM-powered skincare consultation and particle voice visualizer
- **Purpose**: Provides personalized product recommendations and answers skincare questions, building trust
- **Trigger**: User clicks glowing "AI Pharmacist" button (bottom-right corner)
- **Progression**: User clicks button → Modal opens with particle animation → User types/speaks question → LLM processes and responds with product recommendations → User can add recommended products to cart
- **Success criteria**: Button pulses subtly, modal opens smoothly, responses are contextual and helpful, voice visualizer reacts to audio

### Product Browsing & Filtering
- **Functionality**: Grid-based product listing with advanced filters (concern, price, ingredients) and sorting, plus real-time text search
- **Purpose**: Helps users discover products matching their specific skincare concerns, ingredients, and preferences
- **Trigger**: User navigates to shop page, types in search box, or applies filter/sort
- **Progression**: User enters shop → Sees masonry grid of products → Types in search field (filters by product name or ingredient in real-time) → Opens filter drawer → Selects concern (Anti-aging/Acne) and/or specific ingredients → Products filter in real-time → User sorts by price → Grid reorders
- **Success criteria**: Search and filters respond instantly with smooth animations, grid layout adapts elegantly, mobile drawer slides smoothly, ingredient filtering works accurately

### Interactive Product Details
- **Functionality**: Rich PDP with 3D bottle viewer, before/after slider, tabbed science content, clinical data charts, and virtual try-on
- **Purpose**: Educates customers on product efficacy through interactive proof points and live preview, increasing purchase confidence
- **Trigger**: User clicks product card from grid
- **Progression**: User clicks product → PDP loads with hero image → User drags 3D model to rotate bottle → Swipes before/after slider → Clicks "Virtual Try-On" → Webcam activates → User applies simulated effects → Clicks "Clinical Data" tab → Views bar chart showing improvement percentages → Clicks "Add to Cart"
- **Success criteria**: 3D model rotates smoothly (60fps), before/after slider is intuitive, virtual try-on works on modern browsers, charts load with animation, sticky footer appears on mobile scroll

**Implementation Details:**
- 3D Bottle Viewer: Interactive rotation via mouse drag or touch, with reset button and quick-view angle thumbnails
- Before/After Slider: Draggable comparison slider showing skin transformation after 12 weeks, with labeled before/after states
- Virtual Try-On: Real-time webcam-based visualization of product effects with adjustable intensity controls for glow, smoothness, brightness, and hydration. Users can capture and download their results
- Clinical Data Visualization: Animated horizontal bar charts showing improvement percentages for key metrics
- Tabbed Content: Three tabs (Benefits, Key Actives, Clinical Data) for organized information presentation
- Sticky Mobile Footer: Fixed cart button appears on scroll for easy purchase access on mobile devices

### Subscription Model for Regular Deliveries
- **Functionality**: Comprehensive subscription system allowing customers to schedule automatic product deliveries at customizable intervals (30, 60, or 90 days) with tiered discounts, full management dashboard, and flexible controls
- **Purpose**: Increases customer lifetime value and retention while providing convenience and savings; ensures customers never run out of their essential skincare products while building predictable recurring revenue
- **Trigger**: User selects delivery frequency on product detail page, or navigates to "Subscriptions" from header
- **Progression**: User views product → Sees subscription selector with 4 options (Every 30/60/90 days, or One-Time) → Selects frequency → Price updates to show discount → Adds to cart → After purchase, subscription appears in "My Subscriptions" dashboard → User receives reminder 3 days before next delivery → Can pause, skip, modify frequency, or cancel anytime from dashboard
- **Success criteria**: Discount calculations accurate (15% for 30-day, 12% for 60-day, 10% for 90-day), subscription selector visually clear with savings highlighted, management dashboard loads instantly, pause/resume/cancel actions work reliably, next delivery date calculates correctly, promotional banner displays on homepage, free shipping applies to all subscription orders

**Implementation Details:**
- **Subscription Selector Component** (Product Detail Page):
  - Four-option radio selection with visual cards showing frequency, discount percentage, and price
  - Real-time price calculation showing original price (strikethrough) and discounted subscription price
  - Discount badges prominently display savings (15%/12%/10%)
  - Benefits callout showing free shipping, pause/cancel flexibility, and auto-delivery convenience
  - Responsive grid layout (2x2 on mobile, 4 columns on desktop)
  - Selected option highlighted with primary color border and background tint
  - Smooth hover/tap animations on all frequency cards
  
- **Subscription Management Dashboard**:
  - Access via "Subscriptions" link in header navigation
  - Three-section organization: Active, Paused, and Cancelled subscriptions
  - Each subscription card displays: product image, name, quantity, delivery frequency, savings amount, next delivery date, and status badge
  - Quick actions: Pause/Resume, Change Frequency (inline expansion), Cancel
  - Frequency modification shows all three options with discount percentages
  - Empty state encourages users to start shopping
  - Color-coded status indicators (green=active, yellow=paused, red=cancelled)
  
- **Promotional Banner**:
  - Eye-catching gradient banner (primary to accent) at top of homepage
  - Animated gradient effect (3s ease infinite)
  - Clear value proposition: "Subscribe & Save Up to 15%"
  - Key benefits listed: Free shipping, Skip/cancel anytime, Never run out
  - "Learn More" CTA scrolls to subscription selector on product pages
  - Dismissible with X button (state persists via session)
  - Subtle pattern overlay for texture
  
- **Subscription Benefits Page** (/subscriptions/info):
  - Comprehensive feature grid explaining 6 key benefits with icons
  - Savings breakdown table showing discount tiers
  - FAQ section covering common subscription questions
  - CTA directing users back to shop to start subscribing
  
- **Data Persistence**:
  - Subscription preferences stored in useKV hook for persistence across sessions
  - Subscription items include: id, product, quantity, frequency, discount, next delivery date, status, created date
  - Cart items enhanced with optional subscription details attached to each item
  
- **Pricing Integration**:
  - Multi-currency support (COP, USD, CAD) with real-time conversion
  - Discount applied before currency conversion for accuracy
  - Formatted pricing displays throughout (subscription selector, cart, checkout)
  - Original price always shown with strikethrough when subscription active
  
- **User Experience Enhancements**:
  - Smooth transitions between subscription frequency changes
  - Loading states for async operations
  - Success/error toasts for all subscription actions
  - Reminder copy: "Your next delivery on [date]"
  - Clear cancellation policy: "No commitment, cancel anytime"

### 3D Parallax FAQ Knowledge Lab
- **Functionality**: Immersive 3D FAQ interface where questions are organized into 5 thematic "galaxies" (clusters) with parallax hover effects, expandable answer panels, and interactive verification widgets
- **Purpose**: Transforms traditional FAQ navigation into an educational journey that builds trust through transparency, scientific precision, and interactive proof points
- **Trigger**: User navigates to "Get to Know Us" → "Support" → "Frequently Asked Questions"
- **Progression**: User arrives at Knowledge Lab → Views 5 cluster categories with color-coded icons → Clicks cluster to filter questions → Hovers over question card (3D tilt effect activates) → Clicks to expand → Reads short answer, detailed mechanism explanation, and diagram description → Interacts with verification widget (e.g., timeline slider, ingredient lens, routine checker) → Closes card or explores next question
- **Success criteria**: Smooth 3D transforms on hover (no jank), instant expand/collapse animations, all 5 clusters display properly, verification widgets are interactive, mobile-responsive layout, reduced-motion fallback for accessibility

**Implementation Details:**
- **5 FAQ Clusters**:
  - Protocols & Routines (6 questions): Layering actives, retinol/vitamin C compatibility, CBD usage frequency, serum/oil/cream order, seasonal adjustments, mixing with prescriptions
  - Ingredients & Mechanisms (6 questions): MTRX-CBD technology, peptides (Matrixyl 3000), ceramides, retinoid types, niacinamide safety, fragrances/preservatives
  - Results, Safety & Sensitivity (6 questions): Expected timelines, purging vs. irritation, pregnancy/breastfeeding safety, overuse signs, cruelty-free testing, reaction protocols
  - Ethics, Sustainability & Regulation (6 questions): Vegan status, CBD legality by region, environmental impact, clinical claim verification, social initiatives, returns/expiration handling
  - Orders, Shipping & Returns (6 questions): Shipping regions, customs/duties, damaged orders, subscription mechanics, return policy, combining subscription/one-time purchases

- **Interactive Verification Widgets** (one per cluster):
  - Routine Compatibility Checker: AM/PM tabs with drag-and-drop product slots (placeholder for full interactive version)
  - Ingredient Lens: Hover cards showing ingredient details (molecule structure, function, concentration)
  - Results Timeline Slider: Drag slider from Week 0-12 to see expected improvements at each milestone
  - Sustainability Status Bar: Real-time progress bars for cruelty-free (100%), vegan (85%), recyclable packaging (100%), carbon-neutral shipping (100%)
  - Shipping Estimator: Region selector showing delivery times and customs duty information

- **3D Parallax Effects**:
  - Question cards use Framer Motion's `useMotionValue` and `useSpring` for smooth 3D tilt on mouse movement
  - `rotateX` and `rotateY` transforms respond to cursor position relative to card center
  - `transformStyle: 'preserve-3d'` and `perspective: 1000` create depth
  - Hover state: border changes from `border-border` to `border-primary/50`, shadow elevates (`hover:shadow-xl`)
  - Active/open state: border becomes `border-2 border-primary`, shadow deepens to `shadow-2xl`, 3D transform resets

- **Answer Panel Structure**:
  - Short Answer: 1-2 line quick response in primary color
  - How It Works: 2-4 line scientific mechanism explanation with clear, jargony-free language
  - Visual Diagram: Design note describing the animated micro-diagram (e.g., skin cross-section, molecule stack, timeline chart)

- **Design & Aesthetic**:
  - Light theme with soft gradient background (`from-[oklch(0.97_0.005_230)] via-[oklch(0.95_0.01_240)] to-[oklch(0.93_0.015_250)]`)
  - Grid pattern overlay at 30% opacity for subtle "lab" feel
  - Each cluster has distinct color accent: Protocols (teal-deep), Ingredients (accent), Results (terracotta), Ethics (green), Orders (primary)
  - Icons from Phosphor set: Drop, Atom, Shield, Leaf, Package
  - Typography: Playfair Display for headings, Outfit for body text
  - Smooth `ease: [0.25, 0.46, 0.45, 0.94]` transitions throughout

- **Content Strategy**:
  - Tone: Calm, clinical, precise—written for "skintellectuals" who value mechanism over marketing
  - Safety questions emphasize user empowerment: "Consult your clinician" rather than brand prescribing
  - CBD questions clarify non-psychoactive nature, regulatory compliance, and topical-only effects
  - Ethics questions provide verification hooks (COA links, sustainability reports, certification badges)
  - Avoid fear-based language; explain limits and risks in factual terms

- **Accessibility**:
  - Reduced-motion fallback: Parallax effects disabled via `prefers-reduced-motion` media query
  - Keyboard navigation: Tab through questions, Enter/Space to expand
  - ARIA labels on all interactive elements
  - Color contrast meets WCAG AA standards

- **Data Architecture**:
  - FAQ content stored in `/lib/faqData.ts` as typed TypeScript objects
  - Separation of data and UI allows easy content updates without touching component logic
  - Each question includes: `id`, `question`, `shortAnswer`, `howItWorks`, `designNote`, `diagram` type

### Virtual Try-On Experience
- **Functionality**: Webcam-based AR simulation showing expected skin transformation results with customizable effect controls
- **Purpose**: Builds confidence by letting users preview potential results before purchase, reducing return anxiety
- **Trigger**: User clicks "Virtual Try-On" button on product detail page
- **Progression**: User clicks button → Camera permission requested → Webcam activates in modal → User positions face → Clicks "Apply Effects" → Real-time effects render (glow/smooth/brighten/hydrate) → User adjusts sliders to customize intensity → Captures photo → Downloads result or shares
- **Success criteria**: Camera starts within 2 seconds, effects apply smoothly at 30fps, controls respond instantly, photo capture works reliably, graceful fallback if camera unavailable

**Implementation Details:**
- Real-time canvas-based image processing with adjustable effects (radiance, smoothness, brightness, hydration)
- Four independent slider controls allowing users to customize effect intensity (0-100%)
- Mirrored view for natural selfie experience
- Capture and download functionality for before/after comparison
- Reset button to restore default effect settings
- Responsive full-screen modal optimized for both desktop and mobile webcams
- Clear instructional copy guiding users through the experience

### Product Comparison Tool
- **Functionality**: Side-by-side comparison of up to 3 MTRX formulas with intelligent analysis of shared benefits, unique differentiators, common/exclusive ingredients, and clinical performance metrics
- **Purpose**: Helps users make informed purchasing decisions by clearly highlighting formula differences and synergies, particularly useful for building custom regimens
- **Trigger**: User clicks "Compare Products" button from product grid or product detail page
- **Progression**: User clicks comparison button → Dialog opens → User selects up to 3 products from list → System displays shared concerns and common ingredients → System highlights unique active ingredients per formula → Clinical performance bars visualize efficacy data → User reviews recommended regimen order → User adds individual or all products to cart
- **Success criteria**: Ingredient analysis is accurate, comparison grid is readable on mobile, users can easily add/remove products, clinical data displays correctly with animated bars

**Implementation Details:**
- Intelligent Ingredient Analysis: Automatically identifies common vs. unique active ingredients across selected formulas
- Concern Overlap Detection: Shows which skin concerns are addressed by all selected products vs. unique to each
- Clinical Performance Comparison: Side-by-side animated bar charts showing improvement percentages for each metric
- Recommended Regimen Builder: Suggests usage order and allows one-click addition of complete routine to cart
- Preselection Support: Can be launched with products pre-selected (e.g., from product detail page)
- Mobile Optimized: Full-screen modal on mobile with scrollable comparison sections

### Comprehensive Checkout Flow with Payment Integration
- **Functionality**: Multi-step checkout process with shipping information collection, multiple LATAM payment method support (Credit/Debit Cards, PSE, Efecty, Nequi/Daviplata for Colombia; PIX for Brazil; OXXO for Mexico), real-time order summary, and confirmation screen
- **Purpose**: Provides a secure, professional checkout experience that builds trust while offering region-specific payment methods familiar to LATAM customers, reducing cart abandonment and increasing conversion
- **Trigger**: User clicks "Proceed to Checkout" button from cart drawer
- **Progression**: User reviews cart in drawer → Clicks "Proceed to Checkout" → Checkout page loads with step indicator → User fills shipping form (name, email, phone, address, city, state, postal code) → Clicks "Continue to Payment" → Selects payment method (credit card, PSE, Efecty, Nequi, PIX, or OXXO based on currency) → Enters payment details if card selected → Clicks "Complete Purchase" → Processing animation (2.5s) → Confirmation screen with order number → Auto-redirect to home after 3s
- **Success criteria**: Multi-step progress indicator clearly shows current position, form validation prevents submission with missing fields, payment method selection shows appropriate options based on currency (COP→PSE/Efecty/Nequi, BRL→PIX, MXN→OXXO), order summary sidebar remains visible and sticky on scroll, pricing shows subtotal + shipping + 19% tax + total with correct currency formatting, confirmation screen displays unique order number, smooth page transitions throughout flow

**Implementation Details:**
- **Three-Step Process**: Visual step indicator (Shipping → Payment → Confirmation) with icons and completion states
- **Shipping Information Form**: 
  - Fields: First Name, Last Name, Email, Phone, Street Address, City, State/Province, Postal Code, Country (defaults to Colombia)
  - Real-time validation on all required fields
  - Responsive grid layout (2 columns on desktop, 1 on mobile)
- **Payment Method Selection**:
  - Radio button group with method-specific icons and descriptions
  - Colombia (COP): Credit/Debit Card (Visa/Mastercard), PSE (Bank Transfer), Efecty (Cash Payment), Nequi/Daviplata (Mobile Wallet)
  - Brazil (BRL): Credit/Debit Card, PIX (Instant Transfer)
  - Mexico (MXN): Credit/Debit Card, OXXO (Cash Payment)
  - Credit card form appears conditionally with fields: Card Number, Cardholder Name, Expiry Date (MM/YY), CVV
- **Order Summary Sidebar**:
  - Sticky card displaying all cart items with thumbnails, quantities, and prices
  - Line items: Subtotal, Shipping (15,000 COP / 25 BRL / 5 MXN), Tax (19%), Total
  - Trust indicators: "Secure checkout" and "Free returns within 30 days"
  - Formatted pricing in appropriate currency (COP, BRL, MXN)
- **Processing & Confirmation**:
  - 2.5 second simulated processing with disabled button and loading text
  - Animated checkmark confirmation with order number (format: SL-{timestamp})
  - Success message in both English and Spanish
  - Automatic redirect to home page after 3 seconds
- **Navigation Controls**:
  - "Back to Cart" button at top of page
  - "Back" button in payment step to return to shipping
  - Header and footer hidden during checkout for focused experience
- **Responsive Design**: Full-width layout on mobile, two-column grid on desktop (form + summary sidebar)
- **Animations**: Smooth transitions between steps using Framer Motion with fade/slide effects

### Localized Cart & Checkout
- **Functionality**: Streamlined cart drawer and checkout displaying LATAM-specific payment methods (PIX, PSE, OXXO, Efecty, Nequi) with pricing in local currencies
- **Purpose**: Reduces friction by showing familiar, trusted payment options for Brazilian, Colombian, and Mexican customers
- **Trigger**: User clicks shopping cart icon then proceeds to checkout
- **Progression**: User adds product → Reviews cart → Proceeds to checkout → Enters shipping info → Selects payment method (sees PIX/PSE/OXXO icons) → Confirms order
- **Success criteria**: Payment icons are culturally recognizable, prices display in BRL/MXN/COP, form validation is clear

### Facial Cream Bundle Offer (20% Discount)
- **Functionality**: Interactive bundle builder allowing customers to select any 2 facial cream products and receive automatic 20% discount
- **Purpose**: Increases average order value while encouraging customers to build complete skincare regimens with complementary formulas
- **Trigger**: User scrolls to bundle section after product grid on home page
- **Progression**: User lands on bundle section → Views all 10 facial cream options in grid → Clicks first product (card highlights with checkmark) → Clicks second product → Summary panel shows subtotal, discount breakdown, and final price → User clicks "Add Bundle to Cart" → Toast confirms bundle added with savings amount
- **Success criteria**: Selection state is visually clear with ring and checkmark, discount calculation is accurate (20% off total), pricing updates in real-time for BRL/MXN/COP, sticky summary panel remains visible on scroll, bundle discount persists through cart

**Implementation Details:**
- Dynamic Product Selection: Any 2 of the 10 anti-aging facial cream products can be combined
- Visual Feedback: Selected products show primary ring, scale effect, and checkmark badge
- Smart Replacement: When 2 products are already selected, clicking a third replaces the first selection
- Real-time Price Calculation: Shows subtotal, 20% discount line item, and final bundle total
- Savings Highlight: Prominent badge displaying exact amount saved in local currency
- Localized Pricing: Respects currency selection (BRL/MXN/COP) with proper formatting
- Mobile Optimized: Sticky summary card on mobile for easy access to bundle details
- Empty State: Sparkle icon with clear instruction to select 2 products when none chosen

## Edge Case Handling

- **Empty States** - Show elegant placeholder with "Discover Your Regimen" CTA when cart/filters return no results
- **Loading States** - Display skeleton screens with pulsing shimmer effect during data fetches, never show spinners
- **Network Errors** - Toast notifications in sand beige (#DED8D1) with retry options, maintaining clinical aesthetic
- **Out of Stock** - Gray out "Add to Cart" button, show "Notify Me" alternative with email capture
- **Language Switching** - Preserve cart contents and navigation state when toggling between English/Spanish
- **Mobile 3D Performance** - Fallback to high-quality static images with zoom on lower-end devices
- **Voice API Unavailable** - Gracefully hide voice visualizer, maintain text-based chat functionality

## Design Direction

The design should evoke **futuristic clinical innovation meets next-generation luxury**—the feeling of stepping into an advanced biotech laboratory fused with a premium spa. Users should feel they're accessing cutting-edge skin transformation technology, not just purchasing a product. The interface features a bold dark slate navigation system with expansive dropdown menus, glowing accent colors, and architectural grid patterns that feel both scientific and sophisticated.

## Color Selection

The palette employs a dramatic contrast strategy: deep slate/charcoal foundations with vibrant teal and purple accent gradients, creating a high-tech aesthetic.

- **Primary Color**: Vivid Purple-Blue (#6D5DD3 / oklch(0.45 0.15 260)) - Innovation and biotechnology, used for CTAs, gradients, and interactive states
- **Secondary Colors**: 
  - Deep Slate (#2A2D3F / oklch(0.22 0.01 240)) for navigation, header, and footer - creates premium dark foundation
  - Soft Light Gray (#F9F9FB / oklch(0.98 0.002 240)) for main backgrounds - subtle contrast without harsh white
  - Medium Gray (#858585 / oklch(0.52 0.00 0)) for body text - maintains readability
- **Accent Color**: Electric Teal (#4BADB8 / oklch(0.67 0.06 220)) for gradients, highlights, active states, hover effects - creates futuristic glow
- **Foreground/Background Pairings**:
  - Light Background (#F9F9FB): Dark Slate text (#2A2D3F) - Ratio 13.5:1 ✓
  - Primary Buttons (Gradient): White text (#FFFFFF) - Ratio 5.2:1 ✓
  - Dark Navigation (#2A2D3F): White text (#FFFFFF) - Ratio 13.5:1 ✓
  - Card Surfaces (#FFFFFF): Dark Slate text (#2A2D3F) - Ratio 14.8:1 ✓

## Font Selection

Typography must balance scientific credibility (geometric sans) with premium elegance (refined serif).

- **Typographic Hierarchy**:
  - H1 (Hero/Page Titles): Playfair Display Bold / 48px / tight letter-spacing (-0.02em) / line-height 1.1
  - H2 (Section Headers): Playfair Display Semibold / 36px / normal spacing / line-height 1.2
  - H3 (Product Names): Playfair Display Medium / 24px / normal spacing / line-height 1.3
  - Body (Descriptions): Inter Regular / 16px / normal spacing / line-height 1.6
  - Small (Ingredient Lists): Inter Regular / 14px / slight tracking (0.01em) / line-height 1.5
  - Button Labels: Inter Semibold / 16px / uppercase / letter-spacing 0.05em
  - Price: Inter Bold / 20px / tabular numbers

## Animations

Animations should feel like **advanced technology activating**—smooth, purposeful transitions with subtle glow effects and sci-fi inspired motion. Use animations to create a sense of depth, technological sophistication, and seamless interaction.

- **Hero Section**: Rotating orbital rings around central glow sphere, grid pattern overlay with subtle pulse
- **Navigation Tabs**: Active tab gets sliding white underline (300ms ease-out), sub-menu expands with height animation (300ms)
- **Sub-Navigation Panel**: Accordion expand/collapse with opacity fade (300ms), backdrop blur effect on dark overlay
- **Product Grid**: Cards fade in with staggered delay (50ms between each), gradient borders glow on hover
- **Product Cards**: Hover triggers scale (1.0 to 1.02), shadow intensifies, gradient overlay appears (500ms)
- **Hero Stats**: Numbers count up on scroll into view with easing function
- **Science Cards**: Icon scales (1.1x) and rotates slightly on card hover, corner glow effect appears
- **3D Bottle Rotation**: Smooth 60fps rotation with momentum physics
- **Page Load**: Fade in (300ms) with slight upward motion
- **Button Interactions**: Gradient shift on hover, scale on press (0.98), arrow icons slide right
- **Floating Elements**: Circular orbs and blurred shapes pulse and drift with CSS animations (3-5s duration)

## Component Selection

- **Components**: 
  - **Dialog** (AI Pharmacist modal) - Full-screen on mobile, centered on desktop with backdrop blur
  - **Card** (Product cards) - Borderless with subtle hover shadow, image fills top 60%
  - **Tabs** (Science Hub on PDP) - Underline style with teal active indicator
  - **Button** (CTAs) - Solid teal primary, outline for secondary, ghost for tertiary
  - **Sheet** (Mobile filters) - Drawer from bottom, handles drag-to-close
  - **Slider** (Before/After) - Custom implementation with vertical handle bar
  - **Badge** (New/Sale tags) - Terracotta background, small radius (4px)
  - **Select** (Sort/Language) - Minimal border, opens with smooth dropdown
  - **Separator** (Section dividers) - 1px sand beige, used sparingly
  - **Scroll Area** (Ingredient lists) - Custom scrollbar in teal for desktop
- **Customizations**: 
  - Custom 3D viewer component using Three.js for bottle rotation
  - Custom voice particle visualizer using Canvas API with real-time audio data
  - Custom before/after slider with drag handle and reveal mask
  - Custom chart components using Recharts for clinical data bars
- **States**: 
  - Buttons: Default (teal), Hover (light blue #76B0C2), Active (darker teal), Disabled (beige with gray text)
  - Inputs: Default (light border), Focus (teal ring), Error (terracotta ring), Success (green ring)
  - Cards: Default (no shadow), Hover (lifted shadow 0 4px 12px rgba(0,0,0,0.08))
- **Icon Selection**: 
  - Lucide React icons throughout for consistency
  - ShoppingCart for cart actions
  - Filter/SlidersHorizontal for filtering
  - Globe for language toggle
  - Sparkles for AI Pharmacist
  - ChevronDown for dropdowns
  - Check for completed states
  - X for close actions
  - RotateCw for 3D reset
- **Spacing**: 
  - Container max-width: 1280px with 16px mobile padding, 24px tablet, 32px desktop
  - Grid gaps: 16px mobile, 24px desktop
  - Card padding: 16px mobile, 20px desktop
  - Section spacing: 48px mobile, 80px desktop
  - Component internal spacing: 8px/12px/16px/24px scale
- **Mobile**: 
  - Navigation becomes hamburger menu below 768px
  - Product grid: 2 columns mobile, 3 tablet, 4 desktop
  - Filters become bottom sheet drawer on mobile
  - 3D viewer gets touch gestures (pinch-zoom, swipe-rotate)
  - Sticky "Add to Cart" footer appears when button scrolls out of view
  - AI modal becomes full-screen with close button top-right
  - Font sizes reduce by 10-15% on mobile for optimal readability
