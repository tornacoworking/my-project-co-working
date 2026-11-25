/* global process */
import { BRAND_NAME, CONTACT, stats } from '../data/stats.js';

// Production origin. Set VITE_SITE_URL in .env.production (never localhost) - it feeds canonicals, og:url,
// JSON-LD, the sitemap and the pre-rendered HTML.
const rawSiteUrl =
  (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_SITE_URL) ||
  (typeof process !== 'undefined' && process.env && (process.env.VITE_SITE_URL || process.env.SITE_URL)) ||
  'https://www.mycoworking.in';

export const SITE_URL = rawSiteUrl.replace(/\/+$/, '');
export const SITE_NAME = BRAND_NAME;
export const LOCALE = 'en_IN';
export const DEFAULT_OG_IMAGE = '/og-image.jpg'; // 1200x630, see public/
export const LOGO_PATH = '/android-chrome-512x512.png';

export const absoluteUrl = (path = '/') => {
  if (/^https?:\/\//i.test(path)) return path;
  const clean = path === '/' ? '/' : `/${path.replace(/^\/+/, '').replace(/\/+$/, '')}`;
  return `${SITE_URL}${clean}`;
};

// Add the real profile URLs here. Only icons with a URL are shown in the footer, and they also become Organization.sameAs.
export const SOCIAL_PROFILES = { linkedin: '', instagram: '', facebook: '', x: '', youtube: '' };
export const SOCIAL_LINKS = Object.values(SOCIAL_PROFILES).filter(Boolean);

export const organizationJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl(LOGO_PATH),
  email: CONTACT.email,
  telephone: CONTACT.phoneTel,
  description: `${SITE_NAME} is a marketplace for coworking spaces, private offices and virtual offices across India (${stats.workSpaces} workspaces).`,
  areaServed: { '@type': 'Country', name: 'India' },
  contactPoint: [{ '@type': 'ContactPoint', telephone: CONTACT.phoneTel, email: CONTACT.email, contactType: 'sales', areaServed: 'IN', availableLanguage: ['en', 'hi'] }],
  ...(SOCIAL_LINKS.length ? { sameAs: SOCIAL_LINKS } : {}),
});

export const websiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/?city={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
});

export const faqJsonLd = (questions = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: questions.map((q) => ({
    '@type': 'Question',
    name: q.question,
    acceptedAnswer: { '@type': 'Answer', text: q.answer },
  })),
});

export const breadcrumbJsonLd = (crumbs = []) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: absoluteUrl(crumb.path),
  })),
});
