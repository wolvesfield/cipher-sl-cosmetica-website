#!/bin/bash

# This script helps migrate components from useApp() to useLanguage() for language support

# Components list that need to be updated
COMPONENTS=(
  "AIPharmacist"
  "AntiAgingCategories"
  "BeforeAfterSlider"
  "BodyCareSection"
  "Bottle3DViewer"
  "BuildYourDuoPage"
  "CartDrawer"
  "CheckoutFlow"
  "CustomerTestimonials"
  "FacialCreamBundleOffer"
  "FacialCreamCategory"
  "FacialCreamExploreAll"
  "FloatingCartButton"
  "FuturisticNav"
  "HairScalpCareSection"
  "KitPromoBanner"
  "LaunchSpecials"
  "PerfectDuoBanner"
  "ProductCard"
  "ProductComparison"
  "ProductDetailPage"
  "ProductGrid"
  "ProductInfographic"
  "ProductScienceDetail"
  "ProductSuggestion"
  "ScienceSection"
  "SubscriptionInfoPage"
  "SubscriptionManagement"
  "SubscriptionPromoBanner"
  "SubscriptionSelector"
  "VirtualTryOn"
)

echo "Components to update: ${#COMPONENTS[@]}"
for component in "${COMPONENTS[@]}"; do
  echo "- $component"
done
