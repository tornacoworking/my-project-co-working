// Renders an image imported with vite-imagetools' `&as=picture` (AVIF + WebP + JPEG sources with srcset).
//   import hero from './hero.jpg?w=480;800;1200&format=avif;webp;jpg&as=picture'
//   <Picture picture={hero} sizes="(min-width:1024px) 50vw, 100vw" alt="..." priority />
// Always pass `sizes`; width/height come from the image so the browser reserves space (no layout shift).
const MIME = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp', avif: 'image/avif' };

const Picture = ({ picture, alt = '', sizes, priority = false, className = '', imgClassName = '' }) => (
  <picture className={className}>
    {Object.entries(picture.sources).map(([format, srcSet]) => (
      <source key={format} type={MIME[format] || `image/${format}`} srcSet={srcSet} sizes={sizes} />
    ))}
    <img
      src={picture.img.src}
      width={picture.img.w}
      height={picture.img.h}
      alt={alt}
      sizes={sizes}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'auto' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={imgClassName}
    />
  </picture>
);

export default Picture;
