export const checkFontsAvailable = async (): Promise<boolean> => {
  if (!navigator.onLine) {
    console.info('Offline: Using system font fallbacks');
    return false;
  }

  if ((navigator as { connection?: { saveData?: boolean } }).connection?.saveData) {
    console.info('Data saver enabled: Using system font fallbacks');
    return false;
  }

  if (sessionStorage.getItem('fonts-loaded') === 'true') {
    return true;
  }

  try {
    await Promise.race([
      document.fonts.ready,
      new Promise((_, reject) => setTimeout(() => reject(new Error('Font loading timeout')), 3000))
    ]);

    const outfitLoaded = document.fonts.check('16px Outfit');
    const cormorantLoaded = document.fonts.check('16px Cormorant');
    const firaCodeLoaded = document.fonts.check('16px "Fira Code"');

    const allLoaded = outfitLoaded && cormorantLoaded && firaCodeLoaded;
    
    if (allLoaded) {
      sessionStorage.setItem('fonts-loaded', 'true');
      document.documentElement.classList.remove('fonts-unavailable');
      console.info('Google Fonts loaded successfully');
    } else {
      document.documentElement.classList.add('fonts-unavailable');
      console.warn('Some fonts failed to load, using system fallbacks');
    }

    return allLoaded;
  } catch (error) {
    console.warn('Font loading check failed, using fallback fonts:', error);
    document.documentElement.classList.add('fonts-unavailable');
    return false;
  }
};

export const initFontLoader = () => {
  if (typeof window === 'undefined') return;

  const checkAndApplyFonts = async () => {
    await checkFontsAvailable();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndApplyFonts);
  } else {
    checkAndApplyFonts();
  }

  window.addEventListener('online', () => {
    console.info('Back online: Attempting to load fonts');
    sessionStorage.removeItem('fonts-loaded');
    checkAndApplyFonts();
  });
  
  window.addEventListener('offline', () => {
    const fontsWereLoaded = sessionStorage.getItem('fonts-loaded') === 'true';
    if (!fontsWereLoaded) {
      document.documentElement.classList.add('fonts-unavailable');
      console.info('Offline: Using system font fallbacks');
    } else {
      console.info('Offline: Using cached fonts');
    }
  });

  if ('connection' in navigator) {
    (navigator as { connection?: { addEventListener?: (event: string, callback: () => void) => void, saveData?: boolean } }).connection?.addEventListener?.('change', () => {
      if ((navigator as { connection?: { saveData?: boolean } }).connection?.saveData) {
        document.documentElement.classList.add('fonts-unavailable');
        console.info('Data saver enabled: Switching to system fonts');
      } else if (navigator.onLine) {
        checkAndApplyFonts();
      }
    });
  }
};

