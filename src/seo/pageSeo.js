// Pure builders for page titles, descriptions and JSON-LD. No browser APIs, so the build scripts can use them too.
import { SITE_NAME, absoluteUrl, breadcrumbJsonLd } from './site.js';
import { stats } from '../data/stats.js';

export const homeSeo = () => ({
  title: `Coworking Space in India | Private Offices, Dedicated Desks & Virtual Offices | ${SITE_NAME}`,
  description: `Find and book coworking spaces, private offices, dedicated desks, meeting rooms and virtual offices across ${stats.cities} cities in India. Compare prices and get a free quote with ${SITE_NAME}.`,
  canonical: '/',
});

export const virtualSeo = ({ name, path }) => ({
  title: `Virtual Office in ${name} | GST & Company Registration Address | ${SITE_NAME}`,
  description: `Get a verified virtual office address in ${name} for GST, MCA and business registration, with mail handling and quick setup. Request a quote from ${SITE_NAME}.`,
  canonical: path,
  jsonLd: [breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Virtual Office', path: '/#virtual-office' }, { name: `Virtual Office in ${name}`, path }])],
});

// A city page's title, description and listing schema, built from the spaces listed on that page.
export const citySeo = ({ label, path, cards = [], getSlug }) => {
  const crumbs = breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: 'Coworking', path: '/#top-cities' }, { name: `Coworking in ${label}`, path }]);

  if (cards.length === 0) {
    return {
      title: `Coworking Space in ${label} | Shared Desks, Private Offices & Meeting Rooms | ${SITE_NAME}`,
      description: `Looking for a coworking space in ${label}? Tell us what you need and get a free quote from ${SITE_NAME}.`,
      canonical: path,
      jsonLd: [crumbs],
    };
  }

  const areaCounts = cards.reduce((counts, card) => {
    if (card.area && card.area !== label) counts[card.area] = (counts[card.area] || 0) + 1;
    return counts;
  }, {});
  const topAreas = Object.entries(areaCounts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([area]) => area);
  const areas = topAreas.length > 0 ? ` ${topAreas.length === 1 ? 'at' : 'across'} ${topAreas.join(', ')}` : '';
  // Only monthly prices count; anything under ₹2,000 looks like a placeholder or day-pass rate.
  const monthlyPrices = cards
    .filter((card) => /month/i.test(card.period || '') && /\d/.test(String(card.price ?? '')))
    .map((card) => Number(String(card.price).replace(/\D/g, '')))
    .filter((price) => price >= 2000);
  const minPrice = monthlyPrices.length > 0 ? Math.min(...monthlyPrices) : 0;
  const fromPrice = minPrice ? `₹${minPrice.toLocaleString('en-IN')}` : '';
  const spaces = `${cards.length} coworking ${cards.length === 1 ? 'space' : 'spaces'}`;

  return {
    title: `Coworking Space in ${label} | ${cards.length} ${cards.length === 1 ? 'Workspace' : 'Workspaces'}${fromPrice ? ` from ${fromPrice}` : ''} | ${SITE_NAME}`,
    description: `${cards.length === 1 ? 'Explore' : 'Compare'} ${spaces} in ${label}${areas}${fromPrice ? `, from ${fromPrice} a month` : ''}. Get a free quote from ${SITE_NAME}.`,
    canonical: path,
    minPrice,
    jsonLd: [
      crumbs,
      {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: `Coworking spaces in ${label}`,
        numberOfItems: cards.length,
        itemListElement: cards.slice(0, 10).map((card, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: card.name,
          ...(getSlug ? { url: absoluteUrl(getSlug(card)) } : {}),
        })),
      },
    ],
  };
};

export const officeSeo = ({ card, cityLabel, cityKey, path }) => {
  const area = card.area || (card.location ? card.location.split(',')[0].trim() : '');
  const place = area ? `${area}, ${cityLabel}` : cityLabel;
  const price = /\d/.test(String(card.price ?? '')) ? card.priceFormatted : '';
  const image = Array.isArray(card.images) ? card.images[0] : card.image;
  const lead = `Book ${card.name}, a coworking space in ${place}${price ? ` from ${price}` : ''}.`;
  return {
    title: /coworking space/i.test(card.name)
      ? `${card.name} - ${place} | ${SITE_NAME}`
      : `${card.name} - Coworking Space in ${place} | ${SITE_NAME}`,
    description: `${lead} ${lead.length > 105 ? 'Get a free quote.' : 'View photos, plans and location, and get a free quote.'}`,
    canonical: path,
    jsonLd: [
      breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: `Coworking in ${cityLabel}`, path: `/coworking/${cityKey}` }, { name: card.name, path }]),
      {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: card.name,
        description: `Coworking space in ${place}`,
        ...(image ? { image } : {}),
        ...(card.phone ? { telephone: card.phone } : {}),
        address: { '@type': 'PostalAddress', addressLocality: cityLabel, streetAddress: card.address || card.location || place, addressCountry: 'IN' },
      },
    ],
  };
};
