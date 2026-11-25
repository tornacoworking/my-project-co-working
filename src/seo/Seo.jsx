import { Helmet } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE, LOCALE, SITE_NAME, absoluteUrl } from './site.js';

/**
 * Per-page <head>: title, description, canonical, Open Graph, Twitter card and JSON-LD.
 * `canonical` is a site path (e.g. "/coworking/pune"); the origin always comes from VITE_SITE_URL.
 */
const Seo = ({ title, description, canonical = '/', image = DEFAULT_OG_IMAGE, type = 'website', noindex = false, jsonLd = [] }) => {
  const url = absoluteUrl(canonical);
  const imageUrl = absoluteUrl(image);
  const blocks = (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).filter(Boolean);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {blocks.map((block, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(block)}</script>
      ))}
    </Helmet>
  );
};

export default Seo;
