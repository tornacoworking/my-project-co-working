// Single source of truth for every number quoted on the site (hero, lead form, "Why choose", meta
// descriptions, footer, JSON-LD). Change a figure here and it changes everywhere.
//
// NOTE: these values were consolidated from copy that already existed on the site. Where the old copy
// disagreed (e.g. "10,000+ spaces" vs "5,000+ properties", "30+ / 140+ / 18+ cities") the hero figure won.
// Please verify them before launch.
export const BRAND_NAME = 'MyCoworking';

export const stats = {
  workSpaces: '10,000+',
  locations: '1,000+',
  cities: '90+', // cities with a /coworking/{city} page (96 at the time of writing)
  topCities: 18, // cities featured on the homepage
  companies: '500+',
  members: '10,000+',
  reach: '10,00,000+', // people who look for space on the site, quoted in the "List free" banner
  rating: '4.9',
  ratingCount: '2,500+',
};

export const CONTACT = {
  phoneDisplay: '+91 9028760011',
  phoneTel: '+919028760011',
  whatsapp: '919028760011',
  email: 'info@mycoworking.in',
};

export const tagline = `India's flexible workspace network`;

// Reused in <title>/meta descriptions and the footer blurb.
export const networkSummary = `${stats.workSpaces} workspaces across ${stats.locations} locations in ${stats.cities} Indian cities`;

// wa.me deep link with a pre-filled message.
export const whatsappLink = (text = 'Hi, I would like to know more about your coworking spaces.') =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;
