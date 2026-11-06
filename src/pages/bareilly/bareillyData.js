import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Bareilly (Uttar Pradesh) coworking spaces — Qdesq listing data, fetched Nov 6, 2026.
// Ratings and review counts are left out because no source gave a verifiable figure. Qdesq's phone number is its own sales line, so it isn't used.
// deskPrice / cabinPrice are per-seat monthly rates from the listings above; null shows "On request" on the detail page.

export const bareillySpaces = [
  {
    // Low confidence: single source, landmark address only — verify before publishing.
    id: 1,
    name: 'MG Cowork',
    area: 'Ekta Nagar',
    location: 'Ekta Nagar, Bareilly',
    address: 'Opposite Gandhi Dharam Kanta, Ekta Nagar, Bareilly, Uttar Pradesh',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Printer', 'Tea/Coffee'],
    capacity: 60,
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: '₹6,000',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718268848/f35wjfoeput0kmk1wo2d.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718268848/t6pckeyljvufkiaydiuh.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718272079/k4xld1ztpl1n63drgsy7.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718269359/hszx6boghur0gaxeilpa.webp'
    ]
  }
];

export default bareillySpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const bareillyNeighborhoods = Object.entries(
  bareillySpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const bareillyOfficeCards = bareillySpaces.slice(0, 8);
export const moreBareillyOfficeCards = bareillySpaces.slice(8);

export const bareillyAreas = bareillyNeighborhoods;

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
// Bareilly Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allBareillyOfficeCards = bareillySpaces;

export const getBareillyOfficeCardById = (id) => findOfficeBySlug(allBareillyOfficeCards, id, "bareilly");
export const getBareillyOfficeSlug = (space) => officePath(allBareillyOfficeCards, space, "bareilly");

// ============================================================================
// Top Coworking Locations in Bareilly — one tile per area, using a photo from a space in that area
// ============================================================================
export const topBareillyCoworkingLocations = bareillyNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: bareillySpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
