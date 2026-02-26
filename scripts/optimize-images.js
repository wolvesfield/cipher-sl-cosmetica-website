import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(__dirname, '../src/assets/images');
const outputDir = path.join(__dirname, '../src/assets/images/optimized');

// Target images for optimization (1.3MB+ each)
const priorityImages = [
  'SHAMPOO_3.jpeg',
  'ACONDICIONADOR_3.jpeg',
  'LOCION_3.jpeg',
  'SHAMPOO_2.jpeg',
  'ACONDICIONADOR_2.jpeg',
  'SHAMPOO_1.jpeg',
  'LOCION_2.jpeg',
  'CREMA_FACIAL_CBD_2.jpeg',
  'ACONDICIONADOR_1.jpeg',
  'CREMA_FACIAL_RETINOL_1.jpeg',
  'CREMA_FACIAL_ACIDO_HIALURONICO_2.jpeg'
];

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  // Create output directory if it doesn't exist
  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true });
    console.log(`Created output directory: ${outputDir}\n`);
  }

  let totalOriginalSize = 0;
  let totalWebPSize = 0;
  let totalJPEGSize = 0;

  for (const filename of priorityImages) {
    const inputPath = path.join(inputDir, filename);

    // Check if file exists
    if (!existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${filename} - file not found`);
      continue;
    }

    const baseName = path.parse(filename).name;
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    const jpegPath = path.join(outputDir, `${baseName}.jpeg`);

    try {
      // Get original file stats
      const fs = await import('fs');
      const originalStats = fs.statSync(inputPath);
      const originalSizeKB = (originalStats.size / 1024).toFixed(0);
      totalOriginalSize += originalStats.size;

      // Generate WebP version (80% quality, ~70% size reduction)
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(webpPath);

      const webpStats = fs.statSync(webpPath);
      const webpSizeKB = (webpStats.size / 1024).toFixed(0);
      totalWebPSize += webpStats.size;

      // Generate optimized JPEG fallback (85% quality)
      await sharp(inputPath)
        .jpeg({ quality: 85, progressive: true, mozjpeg: true })
        .toFile(jpegPath);

      const jpegStats = fs.statSync(jpegPath);
      const jpegSizeKB = (jpegStats.size / 1024).toFixed(0);
      totalJPEGSize += jpegStats.size;

      const webpSavings = ((1 - webpStats.size / originalStats.size) * 100).toFixed(1);
      const jpegSavings = ((1 - jpegStats.size / originalStats.size) * 100).toFixed(1);

      console.log(`✓ ${filename}`);
      console.log(`  Original: ${originalSizeKB}KB`);
      console.log(`  WebP:     ${webpSizeKB}KB (${webpSavings}% smaller)`);
      console.log(`  JPEG:     ${jpegSizeKB}KB (${jpegSavings}% smaller)\n`);
    } catch (error) {
      console.error(`❌ Failed to optimize ${filename}:`, error.message);
    }
  }

  // Summary
  const totalOriginalMB = (totalOriginalSize / 1024 / 1024).toFixed(1);
  const totalWebPMB = (totalWebPSize / 1024 / 1024).toFixed(1);
  const totalJPEGMB = (totalJPEGSize / 1024 / 1024).toFixed(1);
  const totalWebPSavings = ((1 - totalWebPSize / totalOriginalSize) * 100).toFixed(1);
  const totalJPEGSavings = ((1 - totalJPEGSize / totalOriginalSize) * 100).toFixed(1);

  console.log('=' .repeat(50));
  console.log('OPTIMIZATION SUMMARY');
  console.log('='.repeat(50));
  console.log(`Total Original Size:  ${totalOriginalMB}MB`);
  console.log(`Total WebP Size:      ${totalWebPMB}MB (${totalWebPSavings}% savings)`);
  console.log(`Total JPEG Size:      ${totalJPEGMB}MB (${totalJPEGSavings}% savings)`);
  console.log('='.repeat(50));
}

optimizeImages().catch(console.error);
