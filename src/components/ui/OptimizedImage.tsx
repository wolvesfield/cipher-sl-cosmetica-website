interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
}

export function OptimizedImage({ src, alt, className, loading = 'lazy' }: OptimizedImageProps) {
  // Extract filename without extension
  const baseName = src.split('/').pop()?.replace(/\.(jpeg|jpg|png)$/, '');

  // List of optimized images
  const isPriority = [
    'SHAMPOO_3',
    'ACONDICIONADOR_3',
    'LOCION_3',
    'SHAMPOO_2',
    'ACONDICIONADOR_2',
    'SHAMPOO_1',
    'LOCION_2',
    'CREMA_FACIAL_CBD_2',
    'ACONDICIONADOR_1',
    'CREMA_FACIAL_RETINOL_1',
    'CREMA_FACIAL_ACIDO_HIALURONICO_2'
  ].some(name => baseName?.includes(name));

  if (!isPriority) {
    // Non-optimized images: use original
    return <img src={src} alt={alt} className={className} loading={loading} />;
  }

  // Optimized images: use WebP with JPEG fallback
  const webpSrc = src.replace(/\.(jpeg|jpg|png)$/, '.webp').replace('/images/', '/images/optimized/');
  const fallbackSrc = src.replace('/images/', '/images/optimized/').replace(/\.(jpeg|jpg|png)$/, '.jpeg');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={fallbackSrc} alt={alt} className={className} loading={loading} />
    </picture>
  );
}
