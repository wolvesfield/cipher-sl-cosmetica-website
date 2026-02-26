# Font Fallback System

## Overview

This application now includes a comprehensive font fallback system that ensures the application remains visually consistent and functional even when offline or when external font resources are unavailable.

## How It Works

### 1. **Progressive Enhancement**
- Primary fonts (Outfit, Cormorant, Fira Code) are loaded from Google Fonts when online
- System fonts serve as fallbacks when external resources are unavailable
- Font loading is detected and cached to optimize subsequent page loads

### 2. **Offline Detection**
- The application automatically detects when it's offline
- A `.fonts-unavailable` class is added to the HTML element when fonts can't load
- System fonts are seamlessly substituted without layout shifts

### 3. **Font Stack Hierarchy**

#### Sans-Serif (Body Text)
```
Outfit → -apple-system → BlinkMacSystemFont → Segoe UI → system-ui → Roboto → Helvetica Neue → Arial → sans-serif
```

#### Serif (Headings)
```
Cormorant → Playfair Display → Georgia → Times New Roman → Times → serif
```

#### Monospace (Code)
```
Fira Code → SF Mono → Monaco → Cascadia Code → Roboto Mono → Consolas → Courier New → monospace
```

### 4. **Caching Strategy**
- Font availability is checked on page load
- Successful font loads are cached in `sessionStorage`
- Online/offline events trigger re-checks to optimize loading

### 5. **Reduced Data Mode**
- Respects `prefers-reduced-data` media query
- Automatically uses system fonts when user has data-saving preferences

## Technical Implementation

### Files Modified

1. **index.html**
   - Added font load detection
   - Implemented offline class toggling
   - Added sessionStorage caching

2. **src/index.css**
   - Updated font variable definitions with fallback stacks
   - Added `.fonts-unavailable` styles
   - Implemented reduced-data media queries

3. **src/lib/fontLoader.ts** (NEW)
   - Font availability checking utility
   - Online/offline event handling
   - sessionStorage management

4. **src/main.tsx**
   - Integrated font loader initialization

5. **tailwind.config.js**
   - Added fontFamily definitions with complete fallback stacks

## Browser Compatibility

- **Modern Browsers**: Full support with Google Fonts + fallbacks
- **Offline Mode**: Automatic fallback to system fonts
- **Data Saver Mode**: Respects user preferences, uses system fonts
- **Legacy Browsers**: Graceful degradation to system fonts

## Performance Benefits

1. **Faster Initial Render**: System fonts display immediately
2. **Reduced Data Usage**: Option to skip external font loading
3. **Offline Resilience**: Application remains functional without network
4. **No FOUT**: Font stacks chosen to minimize layout shift

## Testing

To test the font fallback system:

1. **Offline Mode**:
   - Open DevTools
   - Enable "Offline" in Network tab
   - Reload the page
   - Verify system fonts are used

2. **Slow Network**:
   - Throttle network to "Slow 3G"
   - Observe font loading behavior
   - Check for smooth fallback

3. **Data Saver**:
   - Enable data saver in browser settings
   - Verify system fonts load by default

## Maintenance

- Font stacks are defined in CSS variables for easy updates
- Fallback order prioritizes native system fonts for best performance
- All font references use the centralized variables

## Future Improvements

Potential enhancements for consideration:

1. **Self-Hosted Fonts**: Download and host fonts locally for complete offline support
2. **Variable Fonts**: Use variable font files to reduce file size
3. **Font Display Strategy**: Fine-tune `font-display` property for optimal loading
4. **Service Worker**: Cache fonts via service worker for persistent offline access
