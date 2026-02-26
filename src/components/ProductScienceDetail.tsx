import { motion } from 'framer-motion'
import { Beaker, FlaskConical, Shield, Sparkles } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Product } from '@/lib/types'
import { useApp } from '@/lib/AppContext'

interface ProductScienceDetailProps {
  product: Product
}

export function ProductScienceDetail({ product }: ProductScienceDetailProps) {
  const { language, lt, lta } = useApp()
  
  const scienceContent = {
    mechanism: {
      en: getMechanismOfAction(product.id, 'en'),
      es: getMechanismOfAction(product.id, 'es')
    },
    synergy: {
      en: getSynergyExplanation(product.id, 'en'),
      es: getSynergyExplanation(product.id, 'es')
    },
    technology: {
      en: getTechnology(product.id, 'en'),
      es: getTechnology(product.id, 'es')
    }
  }

  return (
    <div className="space-y-6">
      {product.id !== 'mtrx-013' && (
        <Card className="border-primary/20 bg-gradient-to-br from-background to-secondary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Beaker className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {language === 'en' ? 'Mechanism of Action' : 'Mecanismo de Acción'}
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {lt(scienceContent.mechanism)}
                </p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-accent-foreground">
                {language === 'en' ? 'Key Active Ingredients' : 'Ingredientes Activos Clave'}
              </h4>
              <div className="grid gap-3">
                {product.ingredients.map((ingredient, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <Sparkles className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground font-medium">{ingredient}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {product.id !== 'mtrx-013' && (
        <Card className="border-primary/20 bg-gradient-to-br from-background to-secondary/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-full bg-teal-deep/10">
                <Shield className="w-6 h-6 text-teal-deep" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {language === 'en' ? 'The MTRX Synergy Effect' : 'El Efecto Sinergia MTRX'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {lt(scienceContent.synergy)}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="p-4 bg-gradient-to-r from-teal-deep/10 to-teal-light/10 rounded-lg border border-teal-deep/20">
                <h4 className="font-semibold text-sm mb-2 text-teal-deep">
                  {language === 'en' ? 'Why CBD + Active Works Better' : 'Por Qué CBD + Activo Funciona Mejor'}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {product.id === 'mtrx-014' 
                    ? (language === 'en' 
                      ? 'On its own, each active targets a specific concern—texture, tone, barrier, or fiber strength. Paired with MTRX‑CBD™, those same actives can be used more consistently, because CBD helps buffer irritation signals, modulate visible inflammation, and stabilize the overall environment, so results build over time instead of stalling when skin or scalp gets sensitized.'
                      : 'Por sí solo, cada activo se dirige a una preocupación específica: textura, tono, barrera o fuerza de la fibra. Combinado con MTRX‑CBD™, esos mismos activos se pueden usar de manera más consistente, porque el CBD ayuda a amortiguar señales de irritación, modular la inflamación visible y estabilizar el ambiente general, por lo que los resultados se construyen con el tiempo en lugar de estancarse cuando la piel o el cuero cabelludo se sensibiliza.')
                    : (language === 'en' 
                      ? 'The 8.0%+ MTRX-CBD base acts as an anti-inflammatory buffer, allowing potent actives to work without irritation. This creates the "Clean Clinical Luxury" paradigm: high efficacy with high tolerability.'
                      : 'La base de 8.0%+ MTRX-CBD actúa como amortiguador antiinflamatorio, permitiendo que activos potentes funcionen sin irritación. Esto crea el paradigma de "Lujo Clínico Limpio": alta eficacia con alta tolerabilidad.')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card className="border-primary/20 bg-gradient-to-br from-background to-secondary/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-full bg-accent/10">
              <FlaskConical className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {language === 'en' ? 'MTRX-CBD Technology' : 'Tecnología MTRX-CBD'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {lt(scienceContent.technology)}
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="p-4 bg-slate-dark/5 rounded-lg border border-slate-dark/10">
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-3 text-slate-dark">
                {language === 'en' ? 'Base Formula: Active Architecture' : 'Fórmula Base: Arquitectura Activa'}
              </h4>
              <div className="grid gap-2 text-sm text-muted-foreground">
                {getBaseFormulaIngredients(product.id, language).map((ingredient, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span dangerouslySetInnerHTML={{ __html: ingredient }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function getMechanismOfAction(productId: string, lang: string): string {
  const mechanisms: Record<string, { en: string; es: string }> = {
    'mtrx-001': {
      en: 'The 8.0%+ MTRX-CBD concentration targets the Endocannabinoid System (ECS) receptors within the skin. By binding to CB1 and CB2 receptors, it downregulates pro-inflammatory cytokines (TNF-α, IL-6) while upregulating anti-inflammatory mediators. Niacinamide works synergistically to inhibit melanosome transfer and regulate sebaceous gland activity. Evening Primrose Oil delivers Gamma-Linolenic Acid (GLA), a precursor to anti-inflammatory prostaglandins (PGE1), creating a triple-action inflammation control system. This establishes homeostasis—the balanced canvas required for all subsequent active treatments.',
      es: 'La concentración de 8.0%+ MTRX-CBD se dirige a los receptores del Sistema Endocannabinoide (ECS) dentro de la piel. Al unirse a los receptores CB1 y CB2, regula a la baja las citoquinas proinflamatorias (TNF-α, IL-6) mientras regula al alza los mediadores antiinflamatorios. La niacinamida trabaja sinérgicamente para inhibir la transferencia de melanosomas y regular la actividad de las glándulas sebáceas. El Aceite de Prímula proporciona Ácido Gamma-Linolénico (GLA), un precursor de prostaglandinas antiinflamatorias (PGE1), creando un sistema de control de inflamación de triple acción. Esto establece la homeostasis: el lienzo equilibrado requerido para todos los tratamientos activos posteriores.'
    },
    'mtrx-002': {
      en: 'All-trans-Retinol binds to Retinoic Acid Receptors (RAR) in keratinocytes, triggering gene transcription for collagen I and III synthesis. Simultaneously, it accelerates cellular turnover by 30-40%+, revealing fresh epidermal layers. However, retinol activates inflammatory pathways (NF-κB), causing the notorious "retinol burn." MTRX-CBD acts as a molecular buffer: it inhibits NF-κB translocation, preventing inflammation while preserving retinol\'s collagen-stimulating effects. This allows the use of therapeutic retinol concentrations without the painful adaptation period, making it ideal for the LATAM demographic seeking powerful results without downtime.',
      es: 'El All-trans-Retinol se une a los Receptores de Ácido Retinoico (RAR) en los queratinocitos, desencadenando la transcripción genética para la síntesis de colágeno I y III. Simultáneamente, acelera la renovación celular en un 30-40%+, revelando capas epidérmicas frescas. Sin embargo, el retinol activa vías inflamatorias (NF-κB), causando el notorio "ardor de retinol." El MTRX-CBD actúa como amortiguador molecular: inhibe la translocación de NF-κB, previniendo la inflamación mientras preserva los efectos estimulantes de colágeno del retinol. Esto permite el uso de concentraciones terapéuticas de retinol sin el doloroso período de adaptación, haciéndolo ideal para el demográfico LATAM que busca resultados poderosos sin tiempo de inactividad.'
    },
    'mtrx-003': {
      en: 'Magnesium Ascorbyl Phosphate (MAP), a stable Vitamin C derivative, penetrates the dermis and converts to L-Ascorbic Acid intracellularly. It inhibits tyrosinase enzyme activity (the rate-limiting step in melanin production) by 68%, directly addressing hyperpigmentation ("manchas") prevalent in LATAM phototypes III-V. MAP also acts as a cofactor for prolyl and lysyl hydroxylase, enzymes essential for collagen triple-helix formation. The MTRX-CBD base enhances MAP stability (preventing oxidation to dehydroascorbic acid) and reduces the erythema typically caused by vitamin C formulations. This combination delivers brightening without the irritation common in L-Ascorbic acid products.',
      es: 'El Fosfato de Ascorbil Magnesio (MAP), un derivado estable de Vitamina C, penetra la dermis y se convierte en Ácido L-Ascórbico intracelularmente. Inhibe la actividad de la enzima tirosinasa (el paso limitante en la producción de melanina) en un 68%, abordando directamente la hiperpigmentación ("manchas") prevalente en fototipos LATAM III-V. MAP también actúa como cofactor para prolil y lisil hidroxilasa, enzimas esenciales para la formación de triple hélice de colágeno. La base MTRX-CBD mejora la estabilidad del MAP (previniendo oxidación a ácido dehidroascórbico) y reduce el eritema típicamente causado por formulaciones de vitamina C. Esta combinación entrega iluminación sin la irritación común en productos de ácido L-Ascórbico.'
    },
    'mtrx-004': {
      en: 'Matrixyl 3000, a palmitoyl peptide complex (Pal-GHK and Pal-GQPR), acts as a molecular messenger. Upon penetration, these peptides mimic damaged collagen fragments, triggering a wound-healing response. Fibroblasts detect these signals and upregulate production of collagen I, III, IV, and fibronectin via TGF-β pathway activation. This creates a "scaffolding rebuild" effect, restoring structural integrity lost to chronological and photoaging. MTRX-CBD ensures the extracellular matrix environment remains calm during this reconstruction, preventing matrix metalloproteinases (MMPs) from degrading newly formed collagen. Clinical studies show a 62% increase in collagen density, translating to visible lift and firmness—critical for the "prejuvenation" demographic banking their structural foundation.',
      es: 'Matrixyl 3000, un complejo de péptidos palmitoil (Pal-GHK y Pal-GQPR), actúa como mensajero molecular. Al penetrar, estos péptidos imitan fragmentos de colágeno dañado, desencadenando una respuesta de cicatrización de heridas. Los fibroblastos detectan estas señales y regulan al alza la producción de colágeno I, III, IV y fibronectina mediante la activación de la vía TGF-β. Esto crea un efecto de "reconstrucción de andamiaje", restaurando la integridad estructural perdida por envejecimiento cronológico y fotoenvejecimiento. El MTRX-CBD asegura que el ambiente de matriz extracelular permanezca calmado durante esta reconstrucción, previniendo que las metaloproteinasas de matriz (MMPs) degraden el colágeno recién formado. Estudios clínicos muestran un aumento del 62% en densidad de colágeno, traduciéndose en levantamiento y firmeza visibles—crítico para el demográfico de "prejuvenación" ahorrando su fundación estructural.'
    },
    'mtrx-005': {
      en: 'Ferulic Acid, a hydroxycinnamic acid derived from plant cell walls, acts as a potent antioxidant with specific UV-protective properties. It absorbs UV radiation at 320nm (UVB range) and stabilizes other antioxidants like Vitamin C and E through synergistic molecular interactions. When combined with MTRX-CBD, it creates a "double shield" effect: Ferulic neutralizes free radicals generated by UV exposure (preventing lipid peroxidation), while CBD repairs oxidative damage to cellular membranes. This formulation is critical for the urban 18-35 demographic in Latin American cities (Mexico City, São Paulo, Bogotá) where UV index exceeds 11 and pollution PM2.5 levels are elevated. It provides photoprotection without the heaviness of traditional sunscreens, making it ideal for daily use under makeup or alone.',
      es: 'El Ácido Ferúlico, un ácido hidroxicinámico derivado de paredes celulares vegetales, actúa como potente antioxidante con propiedades protectoras UV específicas. Absorbe radiación UV a 320nm (rango UVB) y estabiliza otros antioxidantes como Vitamina C y E mediante interacciones moleculares sinérgicas. Al combinarse con MTRX-CBD, crea un efecto de "doble escudo": El ferúlico neutraliza radicales libres generados por exposición UV (previniendo peroxidación lipídica), mientras el CBD repara daño oxidativo a membranas celulares. Esta formulación es crítica para el demográfico urbano 18-35 en ciudades latinoamericanas (Ciudad de México, São Paulo, Bogotá) donde el índice UV excede 11 y los niveles de contaminación PM2.5 están elevados. Proporciona fotoprotección sin la pesadez de protectores solares tradicionales, haciéndolo ideal para uso diario bajo maquillaje o solo.'
    },
    'mtrx-006': {
      en: 'Coenzyme Q10 (Ubiquinone) is a lipid-soluble electron carrier in the mitochondrial respiratory chain. It drives ATP synthesis—the cellular energy currency required for all metabolic processes, including collagen production and DNA repair. Under stress (sleep deprivation, UV exposure, aging), CoQ10 levels decline by up to 50%, leading to "tired" skin phenotype (dullness, dark circles, loss of resilience). This formula delivers pharmaceutical-grade CoQ10 that penetrates mitochondria, restoring ATP production to youthful levels. MTRX-CBD protects mitochondria from oxidative byproducts generated during energy production (reactive oxygen species), preventing secondary cellular damage. The result: a visible "reset" in skin vitality within hours—analogous to an espresso shot for fatigued skin.',
      es: 'La Coenzima Q10 (Ubiquinona) es un transportador de electrones liposoluble en la cadena respiratoria mitocondrial. Impulsa la síntesis de ATP—la moneda de energía celular requerida para todos los procesos metabólicos, incluyendo producción de colágeno y reparación de ADN. Bajo estrés (privación de sueño, exposición UV, envejecimiento), los niveles de CoQ10 disminuyen hasta un 50%, llevando a fenotipo de piel "cansada" (opacidad, ojeras, pérdida de resiliencia). Esta fórmula entrega CoQ10 de grado farmacéutico que penetra las mitocondrias, restaurando la producción de ATP a niveles juveniles. El MTRX-CBD protege las mitocondrias de subproductos oxidativos generados durante la producción de energía (especies reactivas de oxígeno), previniendo daño celular secundario. El resultado: un "reinicio" visible en vitalidad cutánea en horas—análogo a un espresso para piel fatigada.'
    },
    'mtrx-007': {
      en: 'Niacinamide (Vitamin B3) is a pleiotropic molecule with multi-pathway effects. At the cellular level, it inhibits melanosome transfer from melanocytes to keratinocytes (brightening), suppresses sebaceous gland lipid synthesis (oil control), and stimulates ceramide production (barrier repair). In the MTRX-CBD + Niacinamide formula, the "diplomatic" effect is amplified: Niacinamide regulates the inflammatory mediators that cause acne and seborrhea, while CBD ensures the skin doesn\'t become sensitized during this regulation. Clinical studies demonstrate a 78% reduction in sebum production within 4 weeks, combined with improved pore appearance and texture—ideal for the tropical, humid climates of LATAM where excess oil and enlarged pores are primary concerns.',
      es: 'La Niacinamida (Vitamina B3) es una molécula pleiotrópica con efectos multi-vía. A nivel celular, inhibe la transferencia de melanosomas de melanocitos a queratinocitos (iluminación), suprime la síntesis de lípidos de glándulas sebáceas (control de aceite) y estimula la producción de ceramidas (reparación de barrera). En la fórmula MTRX-CBD + Niacinamida, el efecto "diplomático" se amplifica: La niacinamida regula los mediadores inflamatorios que causan acné y seborrea, mientras el CBD asegura que la piel no se sensibilice durante esta regulación. Estudios clínicos demuestran una reducción del 78% en producción de sebo en 4 semanas, combinada con mejor apariencia de poros y textura—ideal para climas tropicales y húmedos de LATAM donde exceso de aceite y poros agrandados son preocupaciones primarias.'
    },
    'mtrx-008': {
      en: 'Bakuchiol, a meroterpene extracted from Psoralea corylifolia (Babchi plant), offers retinol-like benefits through a completely different molecular mechanism. Unlike retinol (which requires metabolic conversion to retinoic acid), Bakuchiol directly modulates gene expression via non-RAR pathways, stimulating collagen I synthesis and inhibiting MMPs. Critically, it does not cause photosensitivity, making it safe for daytime use and pregnancy. The MTRX-CBD + Bakuchiol combination is the "gentle revolution"—delivering cellular renewal without the inflammation, peeling, or UV restrictions of traditional retinoids. This is ideal for the LATAM consumer who lives in high-UV environments and cannot afford photosensitivity downtime.',
      es: 'El Bakuchiol, un meroterpeno extraído de Psoralea corylifolia (planta Babchi), ofrece beneficios tipo retinol mediante un mecanismo molecular completamente diferente. A diferencia del retinol (que requiere conversión metabólica a ácido retinoico), el Bakuchiol modula directamente la expresión genética mediante vías no-RAR, estimulando síntesis de colágeno I e inhibiendo MMPs. Críticamente, no causa fotosensibilidad, haciéndolo seguro para uso diurno y embarazo. La combinación MTRX-CBD + Bakuchiol es la "revolución gentil"—entregando renovación celular sin la inflamación, descamación o restricciones UV de retinoides tradicionales. Esto es ideal para el consumidor LATAM que vive en ambientes de alto UV y no puede permitirse tiempo de inactividad por fotosensibilidad.'
    },
    'mtrx-009': {
      en: 'Resveratrol, a polyphenolic stilbene found in grape skins, activates sirtuins—a family of NAD+-dependent deacetylases known as "longevity genes." Specifically, it activates SIRT1, which deacetylates p53 (tumor suppressor) and FOXO transcription factors, promoting DNA repair and cellular stress resistance. In dermal fibroblasts, resveratrol extends cellular lifespan by preventing telomere shortening and reducing senescence markers. MTRX-CBD complements this by protecting cellular membranes during the longevity process, preventing oxidative damage that would negate resveratrol\'s benefits. This is the ultimate "prejuvenation" formula for the 18-35 demographic—not reversing aging, but preventing it at the genetic level.',
      es: 'El Resveratrol, un estilbeno polifenólico encontrado en pieles de uva, activa sirtuinas—una familia de desacetilasas dependientes de NAD+ conocidas como "genes de longevidad." Específicamente, activa SIRT1, que desacetila p53 (supresor tumoral) y factores de transcripción FOXO, promoviendo reparación de ADN y resistencia al estrés celular. En fibroblastos dérmicos, el resveratrol extiende la vida celular previniendo acortamiento de telómeros y reduciendo marcadores de senescencia. El MTRX-CBD complementa esto protegiendo membranas celulares durante el proceso de longevidad, previniendo daño oxidativo que negaría los beneficios del resveratrol. Esta es la fórmula de "prejuvenación" definitiva para el demográfico 18-35—no revirtiendo el envejecimiento, sino previniéndolo a nivel genético.'
    },
    'mtrx-010': {
      en: 'Hyaluronic Acid (HA), specifically multi-weight Sodium Hyaluronate, operates through osmotic hydration. High molecular weight HA (1-1.5 MDa) forms a protective film on the skin surface, preventing transepidermal water loss (TEWL). Low molecular weight HA (50-100 kDa) penetrates the epidermis, binding water molecules at a ratio of 1:1000, creating volumetric hydration that plumps fine lines. The challenge with standalone HA serums is the "flash drying" effect—if the environment is low humidity, HA can draw water FROM the skin, causing paradoxical dehydration. MTRX-CBD solves this by reinforcing the lipid barrier, creating a semi-occlusive environment that locks HA-bound water in place. Clinical results show 92% hydration increase sustained for 24+ hours.',
      es: 'El Ácido Hialurónico (HA), específicamente Hialuronato de Sodio de multi-peso, opera mediante hidratación osmótica. HA de alto peso molecular (1-1.5 MDa) forma una película protectora en la superficie cutánea, previniendo pérdida de agua transepidérmica (PTEA). HA de bajo peso molecular (50-100 kDa) penetra la epidermis, uniendo moléculas de agua en proporción 1:1000, creando hidratación volumétrica que rellena líneas finas. El desafío con sérums HA independientes es el efecto de "secado rápido"—si el ambiente tiene baja humedad, el HA puede extraer agua DE la piel, causando deshidratación paradójica. El MTRX-CBD resuelve esto reforzando la barrera lipídica, creando un ambiente semi-oclusivo que bloquea el agua unida al HA en su lugar. Resultados clínicos muestran aumento de hidratación del 92% sostenido por más de 24 horas.'
    },
    'mtrx-011': {
      en: 'Ceramides (NP, AP, EOP) are sphingolipids that constitute 50% of the stratum corneum lipid matrix. They form the "mortar" between keratinocyte "bricks," creating the skin barrier that prevents water loss and blocks allergen/pathogen entry. Barrier damage (from over-exfoliation, UV, harsh cleansers) depletes ceramides by up to 60%, causing sensitivity, dryness, and inflammation. This formula delivers a biomimetic ceramide blend that rapidly integrates into the lipid bilayer, restoring barrier function within hours. MTRX-CBD enhances this repair by reducing the inflammatory cascade that further degrades the barrier. This is the "emergency repair" formula for compromised skin—ideal post-peel, post-sun, or for chronic conditions like eczema.',
      es: 'Las Ceramidas (NP, AP, EOP) son esfingolípidos que constituyen el 50% de la matriz lipídica del estrato córneo. Forman el "mortero" entre "ladrillos" de queratinocitos, creando la barrera cutánea que previene pérdida de agua y bloquea entrada de alérgenos/patógenos. El daño de barrera (por sobre-exfoliación, UV, limpiadores agresivos) agota ceramidas hasta un 60%, causando sensibilidad, resequedad e inflamación. Esta fórmula entrega una mezcla de ceramidas biomiméticas que se integra rápidamente en la bicapa lipídica, restaurando función de barrera en horas. El MTRX-CBD mejora esta reparación reduciendo la cascada inflamatoria que degrada aún más la barrera. Esta es la fórmula de "reparación de emergencia" para piel comprometida—ideal post-peeling, post-sol, o para condiciones crónicas como eczema.'
    },
    'mtrx-012': {
      en: 'The 4.0% MTRX-CBD Body Lotion applies the same pharmaceutical-grade anti-aging science to body skin. Structurally, body skin is thinner and has fewer sebaceous glands than facial skin, making it more prone to dehydration and loss of firmness. The formulation penetrates the dermis to stimulate collagen production (via Evening Primrose GLA and Panthenol), while Shea Butter triterpenes prevent collagen degradation. MTRX-CBD at 4.0% concentration provides systemic anti-inflammatory effects, addressing body-specific concerns like keratosis pilaris (bumpy skin), stretch marks (dermal scarring), and post-shave irritation. This aligns with LATAM "corpo" culture, where body aesthetics are as important as facial—especially in beach-dominant societies like Brazil and Colombia.',
      es: 'La Loción Corporal MTRX-CBD 4.0% aplica la misma ciencia anti-envejecimiento de grado farmacéutico a la piel corporal. Estructuralmente, la piel corporal es más delgada y tiene menos glándulas sebáceas que la piel facial, haciéndola más propensa a deshidratación y pérdida de firmeza. La formulación penetra la dermis para estimular producción de colágeno (mediante GLA de Prímula y Pantenol), mientras triterpenos de Manteca de Karité previenen degradación de colágeno. MTRX-CBD en concentración 4.0% proporciona efectos antiinflamatorios sistémicos, abordando preocupaciones específicas del cuerpo como queratosis pilar (piel con bultos), estrías (cicatrización dérmica) e irritación post-afeitado. Esto se alinea con la cultura "corpo" LATAM, donde la estética corporal es tan importante como la facial—especialmente en sociedades dominadas por playas como Brasil y Colombia.'
    },
    'mtrx-013': {
      en: 'MTRX-CBD SHAMPOO is not a standard detergent; it is a bio-restorative scalp treatment. Unlike commercial shampoos that rely on harsh sulfates (SLS/SLES) which strip the microbiome, this formula utilizes a Bio-Compatible Amino-Acid Matrix. The cleansing agents—derived from coconut and glutamate amino acids—selectively remove impurities while preserving the hydrolipidic film essential for a healthy scalp barrier. The formula goes beyond simple cleansing by incorporating a "Therapeutic Delivery System." It anchors Cannabidiol (CBD) within a complex of Dimethyl Sulfone (MSM)—a bio-available organic sulfur essential for keratin synthesis—and Probiotic Ferments to regulate the scalp\'s immune response. This creates a dual-action mechanism: it soothes neurogenic inflammation (ideal for sensitive scalps) while structurally reinforcing the hair shaft from the root. Enriched with botanical extracts like Cucumber and Lavender, this is a precision-engineered formula where every rinse deposits active nutrients rather than stripping them away.',
      es: 'El CHAMPÚ MTRX-CBD no es un detergente estándar; es un tratamiento bio-restaurador del cuero cabelludo. A diferencia de champús comerciales que dependen de sulfatos agresivos (SLS/SLES) que despojan el microbioma, esta fórmula utiliza una Matriz de Aminoácidos Bio-Compatible. Los agentes limpiadores—derivados de aminoácidos de coco y glutamato—remueven selectivamente impurezas mientras preservan la película hidrolipídica esencial para una barrera capilar saludable. La fórmula va más allá de la limpieza simple incorporando un "Sistema de Entrega Terapéutica." Ancla Cannabidiol (CBD) dentro de un complejo de Dimetil Sulfona (MSM)—un azufre orgánico biodisponible esencial para síntesis de queratina—y Fermentos Probióticos para regular la respuesta inmune del cuero cabelludo. Esto crea un mecanismo de doble acción: calma inflamación neurogénica (ideal para cueros cabelludos sensibles) mientras refuerza estructuralmente el tallo capilar desde la raíz. Enriquecida con extractos botánicos como Pepino y Lavanda, esta es una fórmula diseñada con precisión donde cada enjuague deposita nutrientes activos en lugar de despojarlos.'
    },
    'mtrx-014': {
      en: 'Hair fiber aging manifests as cuticle damage (roughness, split ends) and cortex protein degradation (breakage, loss of elasticity). The 4.0% MTRX-CBD Conditioner repairs the hair shaft from the outside in. Keratin amino acids (Cysteine, Methionine) fill gaps in the cuticle layer, sealing it flat for light reflection (shine). Argan Oil (rich in Vitamin E and fatty acids) penetrates the cortex, restoring lipid content and preventing brittleness. MTRX-CBD at 4.0% creates a protective film around each fiber, locking in moisture and preventing hygral fatigue (damage from repeated wet-dry cycles). The lightweight formula doesn\'t weigh down fine hair—addressing a common concern in LATAM demographics with naturally fine or chemically treated hair.',
      es: 'El envejecimiento de la fibra capilar se manifiesta como daño de cutícula (rugosidad, puntas abiertas) y degradación de proteína de corteza (quiebre, pérdida de elasticidad). El Acondicionador MTRX-CBD 4.0% repara el tallo capilar de afuera hacia adentro. Aminoácidos de queratina (Cisteína, Metionina) llenan brechas en la capa de cutícula, sellándola plana para reflexión de luz (brillo). El Aceite de Argán (rico en Vitamina E y ácidos grasos) penetra la corteza, restaurando contenido lipídico y previniendo fragilidad. MTRX-CBD al 4.0% crea una película protectora alrededor de cada fibra, reteniendo humedad y previniendo fatiga higral (daño por ciclos repetidos húmedo-seco). La fórmula ligera no pesa en cabello fino—abordando una preocupación común en demográficos LATAM con cabello naturalmente fino o químicamente tratado.'
    }
  }

  const pick0 = (obj: Record<string, string>) => obj[lang] || obj['en'] || Object.values(obj)[0] || ''
  return mechanisms[productId] ? pick0(mechanisms[productId]) : pick0(mechanisms['mtrx-001'])
}

function getSynergyExplanation(productId: string, lang: string): string {
  const synergies: Record<string, { en: string; es: string }> = {
    'mtrx-001': {
      en: 'The Great Harmonizer establishes the foundation for the entire MTRX protocol. Think of it as "tuning" the skin—like tuning an instrument before a concert. The 8.0%+ MTRX-CBD activates the Endocannabinoid System, which is the body\'s master regulator of homeostasis. Without this balance, potent actives (Retinol, Vitamin C, Acids) can trigger inflammation that negates their benefits. Niacinamide amplifies the CBD\'s oil-regulating effects, while Evening Primrose GLA provides the raw materials for anti-inflammatory prostaglandin synthesis. Together, they create a "peaceful canvas"—skin that is calm, receptive, and primed for transformation. This is why The Great Harmonizer is recommended as the first chapter in any MTRX regimen.',
      es: 'El Gran Armonizador establece la fundación para todo el protocolo MTRX. Piénsalo como "afinar" la piel—como afinar un instrumento antes de un concierto. El 8.0%+ MTRX-CBD activa el Sistema Endocannabinoide, que es el regulador maestro de homeostasis del cuerpo. Sin este equilibrio, activos potentes (Retinol, Vitamina C, Ácidos) pueden desencadenar inflamación que niega sus beneficios. La niacinamida amplifica los efectos reguladores de aceite del CBD, mientras el GLA de Prímula proporciona las materias primas para síntesis de prostaglandinas antiinflamatorias. Juntos, crean un "lienzo pacífico"—piel calmada, receptiva y preparada para transformación. Por esto El Gran Armonizador se recomienda como el primer capítulo en cualquier régimen MTRX.'
    },
    'mtrx-014': {
      en: 'MTRX‑CBD™ turns every formula into a coordinated system, not a simple mix of ingredients. By calming reactivity and supporting homeostasis in the skin and scalp, it lets high‑performance actives do their job at meaningful levels while maintaining comfort, radiance, and long‑term tolerance.',
      es: 'MTRX‑CBD™ convierte cada fórmula en un sistema coordinado, no una simple mezcla de ingredientes. Al calmar la reactividad y apoyar la homeostasis en la piel y el cuero cabelludo, permite que activos de alto rendimiento hagan su trabajo a niveles significativos mientras mantienen comodidad, luminosidad y tolerancia a largo plazo.'
    },
    'mtrx-002': {
      en: 'The Paradox solves dermatology\'s oldest problem: "How do we get the power of Retinol without the pain?" Traditional retinol protocols require a 4-12 week "retinization" period where the skin flakes, burns, and becomes sensitive. This is because Retinol activates inflammatory pathways (NF-κB) as a byproduct of its collagen-stimulating effects. The MTRX synergy is revolutionary: CBD blocks NF-κB translocation to the nucleus, preventing inflammatory gene transcription, while allowing Retinol to bind to its receptors and trigger collagen synthesis. Clinical data shows this formulation delivers retinol results (58% wrinkle reduction) with 89% tolerance—meaning users can start with effective concentrations on day one without the painful adaptation. This is the "power without pain" paradigm.',
      es: 'La Paradoja resuelve el problema más antiguo de la dermatología: "¿Cómo obtenemos el poder del Retinol sin el dolor?" Los protocolos tradicionales de retinol requieren un período de "retinización" de 4-12 semanas donde la piel se descama, arde y se sensibiliza. Esto es porque el Retinol activa vías inflamatorias (NF-κB) como subproducto de sus efectos estimulantes de colágeno. La sinergia MTRX es revolucionaria: el CBD bloquea la translocación de NF-κB al núcleo, previniendo transcripción genética inflamatoria, mientras permite que el Retinol se una a sus receptores y desencadene síntesis de colágeno. Datos clínicos muestran que esta formulación entrega resultados de retinol (58% reducción de arrugas) con 89% de tolerancia—significando que usuarios pueden comenzar con concentraciones efectivas desde el día uno sin la dolorosa adaptación. Este es el paradigma de "poder sin dolor".'
    },
    'mtrx-005': {
      en: 'The Guardian represents the evolution from "correction" to "prevention." Urban LATAM demographics (Mexico City, São Paulo, Bogotá) face a dual threat: UV index exceeding 11 and PM2.5 pollution levels above WHO safety limits. This creates a "perfect storm" of free radical damage. Ferulic Acid is uniquely positioned to defend: it absorbs UV at 320nm (UVB range) while also chelating metal ions from pollution particles, preventing Fenton reactions that generate hydroxyl radicals. The MTRX-CBD synergy amplifies this protection—while Ferulic neutralizes external attackers, CBD repairs internal oxidative damage to mitochondria and cell membranes. Together, they create an "invisible shield" that doesn\'t feel like sunscreen but delivers photoprotection. This is essential for the 18-35 demographic who want protection without the greasy, white-cast feel of traditional SPF.',
      es: 'El Guardián representa la evolución de "corrección" a "prevención." Los demográficos urbanos LATAM (Ciudad de México, São Paulo, Bogotá) enfrentan una amenaza dual: índice UV excediendo 11 y niveles de contaminación PM2.5 sobre límites de seguridad OMS. Esto crea una "tormenta perfecta" de daño por radicales libres. El Ácido Ferúlico está posicionado únicamente para defender: absorbe UV a 320nm (rango UVB) mientras también quela iones metálicos de partículas de contaminación, previniendo reacciones de Fenton que generan radicales hidroxilo. La sinergia MTRX-CBD amplifica esta protección—mientras el Ferúlico neutraliza atacantes externos, el CBD repara daño oxidativo interno a mitocondrias y membranas celulares. Juntos, crean un "escudo invisible" que no se siente como protector solar pero entrega fotoprotección. Esto es esencial para el demográfico 18-35 que quiere protección sin la sensación grasosa y de yeso blanco del SPF tradicional.'
    },
    'mtrx-007': {
      en: 'The Peacemaker lives up to its name—it\'s the diplomat that negotiates peace between your pores and your oil glands. Niacinamide is one of dermatology\'s most versatile molecules: it brightens (by blocking melanosome transfer), refines texture (by regulating keratinization), controls oil (by suppressing sebaceous lipid synthesis), and strengthens the barrier (by stimulating ceramide production). The challenge is that aggressive sebum control can trigger rebound oil production—your skin panics and makes more oil. The MTRX-CBD synergy prevents this: while Niacinamide regulates sebum at the gland level, CBD ensures the skin doesn\'t become inflamed or sensitized during this process. Clinical data shows 78% oil reduction without dryness—a matte, refined finish that looks natural, not powdery. This is ideal for tropical, humid LATAM climates where excess oil and enlarged pores are constant battles.',
      es: 'El Pacificador hace honor a su nombre—es el diplomático que negocia paz entre tus poros y tus glándulas sebáceas. La Niacinamida es una de las moléculas más versátiles de la dermatología: ilumina (bloqueando transferencia de melanosomas), refina textura (regulando queratinización), controla aceite (suprimiendo síntesis de lípidos sebáceos) y fortalece la barrera (estimulando producción de ceramidas). El desafío es que el control agresivo de sebo puede desencadenar producción rebote de aceite—tu piel entra en pánico y produce más aceite. La sinergia MTRX-CBD previene esto: mientras la Niacinamida regula el sebo a nivel glandular, el CBD asegura que la piel no se inflame o sensibilice durante este proceso. Datos clínicos muestran reducción del 78% de aceite sin resequedad—un acabado mate y refinado que luce natural, no polvoriento. Esto es ideal para climas tropicales y húmedos LATAM donde exceso de aceite y poros agrandados son batallas constantes.'
    },
    'mtrx-009': {
      en: 'The Preserver is the most profound formula in the MTRX line—it works at the genetic level to slow cellular aging. Resveratrol is nature\'s longevity molecule, found in grape skins that survive harsh UV and oxidative stress. It activates SIRT1 (sirtuin 1), a NAD+-dependent enzyme that deacetylates proteins involved in DNA repair, stress resistance, and mitochondrial function. In simple terms: it tells your cells to live longer and healthier. The MTRX-CBD synergy is critical here—while Resveratrol activates longevity pathways, CBD protects the cellular infrastructure (membranes, organelles) from oxidative damage during this activation. The result is "deep preservation"—not just preventing wrinkles, but preventing the cellular senescence that causes aging at the source. This is the ultimate prejuvenation formula for the 18-35 demographic who are "banking collagen" for their future.',
      es: 'El Preservador es la fórmula más profunda en la línea MTRX—trabaja a nivel genético para ralentizar el envejecimiento celular. El Resveratrol es la molécula de longevidad de la naturaleza, encontrada en pieles de uva que sobreviven duro estrés UV y oxidativo. Activa SIRT1 (sirtuina 1), una enzima dependiente de NAD+ que desacetila proteínas involucradas en reparación de ADN, resistencia al estrés y función mitocondrial. En términos simples: le dice a tus células que vivan más tiempo y más saludables. La sinergia MTRX-CBD es crítica aquí—mientras el Resveratrol activa vías de longevidad, el CBD protege la infraestructura celular (membranas, organelos) del daño oxidativo durante esta activación. El resultado es "preservación profunda"—no solo prevenir arrugas, sino prevenir la senescencia celular que causa envejecimiento en la fuente. Esta es la fórmula de prejuvenación definitiva para el demográfico 18-35 que está "ahorrando colágeno" para su futuro.'
    },
    'mtrx-013': {
      en: 'The Great Harmonizer establishes the foundation for the entire MTRX protocol. Think of it as "tuning" the skin—like tuning an instrument before a concert. The 8.0% MTRX-CBD activates the Endocannabinoid System, which is the body\'s master regulator of homeostasis. Without this balance, potent actives (Retinol, Vitamin C, Acids) can trigger inflammation that negates their benefits. Niacinamide amplifies the CBD\'s oil-regulating effects, while Evening Primrose GLA provides the raw materials for anti-inflammatory prostaglandin synthesis. Together, they create a "peaceful canvas"—skin that is calm, receptive, and primed for transformation. This is why The Great Harmonizer is recommended as the first chapter in any MTRX regimen.',
      es: 'El Gran Armonizador establece la fundación para todo el protocolo MTRX. Piénsalo como "afinar" la piel—como afinar un instrumento antes de un concierto. El 8.0% MTRX-CBD activa el Sistema Endocannabinoide, que es el regulador maestro de homeostasis del cuerpo. Sin este equilibrio, activos potentes (Retinol, Vitamina C, Ácidos) pueden desencadenar inflamación que niega sus beneficios. La niacinamida amplifica los efectos reguladores de aceite del CBD, mientras el GLA de Prímula proporciona las materias primas para síntesis de prostaglandinas antiinflamatorias. Juntos, crean un "lienzo pacífico"—piel calmada, receptiva y preparada para transformación. Por esto El Gran Armonizador se recomienda como el primer capítulo en cualquier régimen MTRX.'
    }
  }

  const pick = (obj: Record<string, string>) => obj[lang] || obj['en'] || Object.values(obj)[0] || ''
  return synergies[productId] ? pick(synergies[productId]) : pick(synergies['mtrx-001'])
}

function getTechnology(productId: string, lang: string): string {
  const technologies: Record<string, { en: string; es: string }> = {
    'mtrx-013': {
      en: 'MTRX-CBD SHAMPOO is not a standard detergent; it is a bio-restorative scalp treatment. Unlike commercial shampoos that rely on harsh sulfates (SLS/SLES) which strip the microbiome, this formula utilizes a Bio-Compatible Amino-Acid Matrix. The cleansing agents—derived from coconut and glutamate amino acids—selectively remove impurities while preserving the hydrolipidic film essential for a healthy scalp barrier. The formula goes beyond simple cleansing by incorporating a "Therapeutic Delivery System." It anchors Cannabidiol (CBD) within a complex of Dimethyl Sulfone (MSM)—a bio-available organic sulfur essential for keratin synthesis—and Probiotic Ferments to regulate the scalp\'s immune response. This creates a dual-action mechanism: it soothes neurogenic inflammation (ideal for sensitive scalps) while structurally reinforcing the hair shaft from the root. Enriched with botanical extracts like Cucumber and Lavender, this is a precision-engineered formula where every rinse deposits active nutrients rather than stripping them away.',
      es: 'El CHAMPÚ MTRX-CBD no es un detergente estándar; es un tratamiento bio-restaurador del cuero cabelludo. A diferencia de champús comerciales que dependen de sulfatos agresivos (SLS/SLES) que despojan el microbioma, esta fórmula utiliza una Matriz de Aminoácidos Bio-Compatible. Los agentes limpiadores—derivados de aminoácidos de coco y glutamato—remueven selectivamente impurezas mientras preservan la película hidrolipídica esencial para una barrera capilar saludable. La fórmula va más allá de la limpieza simple incorporando un "Sistema de Entrega Terapéutica." Ancla Cannabidiol (CBD) dentro de un complejo de Dimetil Sulfona (MSM)—un azufre orgánico biodisponible esencial para síntesis de queratina—y Fermentos Probióticos para regular la respuesta inmune del cuero cabelludo. Esto crea un mecanismo de doble acción: calma inflamación neurogénica (ideal para cueros cabelludos sensibles) mientras refuerza estructuralmente el tallo capilar desde la raíz. Enriquecida con extractos botánicos como Pepino y Lavanda, esta es una fórmula diseñada con precisión donde cada enjuague deposita nutrientes activos en lugar de despojarlos.'
    },
    'mtrx-014': {
      en: 'MTRX-CBD TECHNOLOGIA is a proprietary cannabinoid delivery architecture that focuses on precision dosing, clean formulary rules, and compatibility with sophisticated co‑actives. It is engineered to integrate into topical and hair‑care systems without heavy oils or harsh solvents, supporting fast absorption, cosmetic elegance, and reliable performance from product to product.',
      es: 'MTRX-CBD TECHNOLOGIA es una arquitectura de entrega de cannabinoides patentada que se enfoca en dosificación precisa, reglas de formulación limpia y compatibilidad con co-activos sofisticados. Está diseñada para integrarse en sistemas tópicos y de cuidado capilar sin aceites pesados o solventes agresivos, apoyando absorción rápida, elegancia cosmética y rendimiento confiable de producto a producto.'
    }
  }

  const defaultTech = {
    en: 'MTRX-CBD TECHNOLOGIA is not commodity CBD. It is pharmaceutical-grade Cannabidiol extracted via supercritical CO₂, ensuring zero THC (<0.0% detection limit) and maximum purity (>99.9%). The extraction preserves the full terpene profile, creating an "entourage effect" where minor cannabinoids (CBG, CBC) amplify CBD\'s anti-inflammatory efficacy. The base formula itself is an "Active Architecture"—it is not a water-filler carrier, but a therapeutic matrix. Evening Primrose Oil delivers GLA, Shea Butter provides triterpenes, Panthenol stimulates fibroblasts, Niacinamide regulates sebum and brightens, and Vitamin E protects membranes. This means you are buying 100% active product—every molecule serves a clinical purpose. This justifies the premium positioning: it is luxury backed by pharmaceutical science.',
    es: 'MTRX-CBD TECHNOLOGIA no es CBD de commodity. Es Cannabidiol de grado farmacéutico extraído mediante CO₂ supercrítico, asegurando cero THC (<0.0% límite de detección) y máxima pureza (>99.9%). La extracción preserva el perfil completo de terpenos, creando un "efecto séquito" donde cannabinoides menores (CBG, CBC) amplifican la eficacia antiinflamatoria del CBD. La fórmula base misma es una "Arquitectura Activa"—no es un portador de relleno de agua, sino una matriz terapéutica. El Aceite de Prímula entrega GLA, la Manteca de Karité proporciona triterpenos, el Pantenol estimula fibroblastos, la Niacinamida regula sebo e ilumina, y la Vitamina E protege membranas. Esto significa que estás comprando producto 100% activo—cada molécula sirve un propósito clínico. Esto justifica el posicionamiento premium: es lujo respaldado por ciencia farmacéutica.'
  }

  const pick2 = (obj: Record<string, string>) => obj[lang] || obj['en'] || Object.values(obj)[0] || ''
  return technologies[productId] ? pick2(technologies[productId]) : pick2(defaultTech)
}

function getBaseFormulaIngredients(productId: string, lang: string): string[] {
  const shampooIngredients = {
    en: [
      '<strong>Cannabidiol (CBD):</strong> Modulates scalp inflammation and soothes sensitivity without irritation.',
      '<strong>Dimethyl Sulfone (MSM):</strong> "Organic Sulfur" donor that strengthens keratin bonds and supports structural integrity.',
      '<strong>Amino-Acid Surfactants (Sodium Cocoyl Glutamate):</strong> Ultra-mild, high-performance cleansing agents that respect the skin\'s pH and lipid barrier.',
      '<strong>Lactobacillus Ferment:</strong> Probiotic technology that balances the scalp microbiome and strengthens natural defenses.',
      '<strong>Argania Spinosa (Argan Oil):</strong> Delivers biomimetic lipids and Vitamin E to restore elasticity and hydration.',
      '<strong>Cucumis Sativus (Cucumber) & Lavender:</strong> Synergistic botanical complex to cool, soothe, and reduce oxidative stress.'
    ],
    es: [
      '<strong>Cannabidiol (CBD):</strong> Modula inflamación del cuero cabelludo y calma sensibilidad sin irritación.',
      '<strong>Dimetil Sulfona (MSM):</strong> Donador de "Azufre Orgánico" que fortalece enlaces de queratina y apoya integridad estructural.',
      '<strong>Surfactantes de Aminoácidos (Cocoil Glutamato de Sodio):</strong> Agentes limpiadores ultra-suaves de alto rendimiento que respetan el pH de la piel y barrera lipídica.',
      '<strong>Fermento de Lactobacillus:</strong> Tecnología probiótica que equilibra el microbioma del cuero cabelludo y fortalece defensas naturales.',
      '<strong>Argania Spinosa (Aceite de Argán):</strong> Entrega lípidos biomiméticos y Vitamina E para restaurar elasticidad e hidratación.',
      '<strong>Cucumis Sativus (Pepino) y Lavanda:</strong> Complejo botánico sinérgico para enfriar, calmar y reducir estrés oxidativo.'
    ]
  }

  const conditionerIngredients = {
    en: [
      'The base is designed as an active architecture in its own right—a layered network of emollients, humectants, amino acids, and supportive lipids that nurture barrier function, hydration, and texture. Instead of acting as a neutral carrier, it works in tandem with MTRX‑CBD and the chosen co‑active, creating a stable, tolerant platform that amplifies benefits across the entire regimen.'
    ],
    es: [
      'La base está diseñada como una arquitectura activa por derecho propio: una red en capas de emolientes, humectantes, aminoácidos y lípidos de soporte que nutren la función de barrera, hidratación y textura. En lugar de actuar como portador neutral, trabaja en tándem con MTRX‑CBD y el co-activo elegido, creando una plataforma estable y tolerante que amplifica los beneficios en todo el régimen.'
    ]
  }

  const defaultIngredients = {
    en: [
      '<strong>Evening Primrose Oil (GLA):</strong> Modulates inflammation, enhances elasticity',
      '<strong>Shea Butter:</strong> Triterpenes inhibit collagen destruction',
      '<strong>Panthenol (B5):</strong> Stimulates fibroblast proliferation',
      '<strong>Niacinamide (B3):</strong> Regulates sebum, brightens, strengthens barrier'
    ],
    es: [
      '<strong>Aceite de Prímula (GLA):</strong> Modula inflamación, mejora elasticidad',
      '<strong>Manteca de Karité:</strong> Triterpenos inhiben destrucción de colágeno',
      '<strong>Pantenol (B5):</strong> Estimula proliferación de fibroblastos',
      '<strong>Niacinamida (B3):</strong> Regula sebo, ilumina, fortalece barrera'
    ]
  }

  const resolve = (obj: Record<string, string[]>) => obj[lang] || obj['en'] || Object.values(obj)[0] || []

  if (productId === 'mtrx-013') {
    return resolve(shampooIngredients)
  }

  if (productId === 'mtrx-014') {
    return resolve(conditionerIngredients)
  }

  return resolve(defaultIngredients)
}
