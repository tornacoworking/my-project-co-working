import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Margao (Goa) coworking spaces, compiled 14 Nov 2026 from coworkingers.com, qdesq.com, cofynd.com.
// Each card lists the pages it was built from. Photos were checked by eye; photos showing people were left out.
// Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const margaoSpaces = [
  {
    // Sources: https://coworkingers.com/india/goa/corporate-deck-margo/ , https://www.qdesq.com/brand/corporate-deck/margao-goa-mar001
    id: 1,
    name: 'Corporate Deck',
    area: 'Gogol',
    location: 'Gogol, Margao',
    address: 'Ground Floor, BG2, Suyash Garden, Vidyanagar, Gogol, Margao, Goa 403601',
    phone: null,
    hours: '9:30 AM – 6:30 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Tea/Coffee'],
    price: '₹2,999',
    period: '/ month',
    priceFormatted: '₹2,999 / month',
    deskPrice: '₹2,999',
    cabinPrice: null,
    priceNote: 'Hot desk, Coworkingers listing (Qdesq ₹4,000, CoFynd ₹4,500)',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2021/10/CORPORATE-DECK-CoWorking-Space-Margao.001.png',
      'https://coworkingers.com/wp-content/uploads/2021/10/CORPORATE-DECK-CoWorking-Space-Margao.002.png',
      'https://coworkingers.com/wp-content/uploads/2021/10/CORPORATE-DECK-CoWorking-Space-Margao.003.png'
    ]
  }
];

export default margaoSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const margaoNeighborhoods = Object.entries(
  margaoSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const margaoOfficeCards = margaoSpaces.slice(0, 8);
export const moreMargaoOfficeCards = margaoSpaces.slice(8);

export const margaoAreas = margaoNeighborhoods;

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp'
};

export const customizedOfficeBanner = {
  title: 'Customized office solutions for your team',
  features: [
    { id: 1, text: 'Customized Office Spaces' },
    { id: 2, text: 'Prime Locations' },
    { id: 3, text: 'Free Guided Tours' },
    { id: 4, text: 'Perfect for 50+ Team Size' }
  ],
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/83bb813890447d5d3d6bda55c7133a5fd48cdbc5.webp'
};

export const stillNotFindingBanner = {
  title: 'Still not able to find coworking space?',
  subtitle: 'Our space experts will help you find the perfect coworking space in prime locations',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/406c83ccb0729b57d9beb973b7e4088ab7640ef3.webp'
};

// ============================================================================
// Margao Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allMargaoOfficeCards = margaoSpaces;

export const getMargaoOfficeCardById = (id) => findOfficeBySlug(allMargaoOfficeCards, id, "margao");
export const getMargaoOfficeSlug = (space) => officePath(allMargaoOfficeCards, space, "margao");

// ============================================================================
// Top Coworking Locations in Margao — one tile per area, using a photo from a space in that area
// ============================================================================
export const topMargaoCoworkingLocations = margaoNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: margaoSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
