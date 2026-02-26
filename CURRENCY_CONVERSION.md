# Live Currency Conversion Feature

## Overview
The SL Cosmetica application now supports live currency conversion between Colombian Peso (COP), US Dollar (USD), and Canadian Dollar (CAD).

## Implementation

### 1. Currency Hook (`src/hooks/use-currency-converter.ts`)
A React hook that:
- Fetches live exchange rates from a public API (exchangerate-api.com)
- Caches rates for 1 hour in localStorage
- Provides fallback rates if the API fails
- Converts prices from COP to CAD/USD
- Formats prices with appropriate currency symbols and decimals

### 2. App Context Updates (`src/lib/AppContext.tsx`)
The global app context now includes:
- `convertPrice(copPrice: number)`: Converts a COP price to the selected currency
- `formatPrice(amount: number, currency?: Currency)`: Formats a price with the proper currency symbol
- `isLoadingRates`: Boolean indicating if exchange rates are being fetched

### 3. Currency Selector (`src/components/Header.tsx`)
Updated the currency dropdown to show:
- COP (Colombian Peso) - Primary currency
- USD (US Dollar) - Converted live
- CAD (Canadian Dollar) - Converted live

### 4. Types Updates (`src/lib/types.ts`)
- Currency type now includes: `'COP' | 'CAD' | 'USD'`
- Price interface stores COP as the base currency
- All prices are stored in COP and converted dynamically

## How It Works

1. **Base Currency**: All product prices are stored in Colombian Pesos (COP)
2. **Live Conversion**: When a user selects USD or CAD, the app fetches live exchange rates
3. **Automatic Updates**: Exchange rates refresh every hour automatically
4. **Display**: Prices throughout the app (product cards, cart, checkout) show in the selected currency

## Components Updated

The following components now use the new conversion system:
- ProductCard
- CartDrawer (partial)
- Header
- All components should call `convertPrice()` and `formatPrice()` from the App Context

## Example Usage

```typescript
import { useApp } from '@/lib/AppContext'

function MyComponent() {
  const { convertPrice, formatPrice } = useApp()
  
  // Convert COP price to selected currency
  const convertedPrice = convertPrice(150000) // COP price
  
  // Format for display
  const displayPrice = formatPrice(convertedPrice)
  // Result: "CA$ 48.00" (if CAD selected) or "US$ 36.00" (if USD selected)
  
  return <div>{displayPrice}</div>
}
```

## Exchange Rate API

Currently using: `https://api.exchangerate-api.com/v4/latest/COP`

Fallback rates (if API fails):
- 1 COP = 0.00032 CAD
- 1 COP = 0.00024 USD

## Next Steps (To Complete Integration)

1. Update remaining components to use `convertPrice` and `formatPrice` from context
2. Remove all direct references to `product.price[currency]`
3. Add loading states while exchange rates are being fetched
4. Consider adding a "rates last updated" indicator
5. Add error handling UI if rates fail to load
