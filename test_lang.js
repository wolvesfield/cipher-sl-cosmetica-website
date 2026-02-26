const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
  });
  
  page.on('console', msg => {
    if (msg.type() === 'error')
      console.log('CONSOLE ERROR:', msg.text());
  });

  try {
    await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle' });
    console.log('Page loaded');
    
    // Find the language toggle (select element)
    const select = await page.$('select');
    if (select) {
      console.log('Changing language to es...');
      await select.selectOption('es');
      await page.waitForTimeout(2000); // give it time to crash
      console.log('Done waiting');
    } else {
      console.log('Select not found');
    }
  } catch (err) {
    console.error('Script Error:', err);
  } finally {
    await browser.close();
  }
})();
