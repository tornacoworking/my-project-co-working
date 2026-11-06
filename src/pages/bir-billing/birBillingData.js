import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Bir Billing (Himachal Pradesh) coworking spaces — Holidify and Coworker listing data, fetched Nov 6, 2026.
// Excluded: Bir Nest and Barefoot Bir (no usable price or photo found).
// Ratings and review counts are left out because no source gave a verifiable figure. Qdesq's phone number is its own sales line, so it isn't used.
// deskPrice / cabinPrice are per-seat monthly rates from the listings above; null shows "On request" on the detail page.

export const birBillingSpaces = [
  {
    // Low confidence: sources quote ₹4,999 and ₹15,999 a month, so the price stays on request. Holidify gives no date — verify before publishing.
    id: 1,
    name: 'Karyashaala',
    area: 'Bir Colony',
    location: 'Bir Colony, Bir Billing',
    address: 'Stain, Bir Colony, Bir, Himachal Pradesh',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Printer', 'Pantry', 'Lounge'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://www.holidify.com/images/cmsuploads/compressed/lightroom-6_20191002082609.jpg'
    ]
  }
];

export default birBillingSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const birBillingNeighborhoods = Object.entries(
  birBillingSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const birBillingOfficeCards = birBillingSpaces.slice(0, 8);
export const moreBirBillingOfficeCards = birBillingSpaces.slice(8);

export const birBillingAreas = birBillingNeighborhoods;

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
// Bir Billing Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allBirBillingOfficeCards = birBillingSpaces;

export const getBirBillingOfficeCardById = (id) => findOfficeBySlug(allBirBillingOfficeCards, id, "bir billing");
export const getBirBillingOfficeSlug = (space) => officePath(allBirBillingOfficeCards, space, "bir billing");

// ============================================================================
// Top Coworking Locations in Bir Billing — one tile per area, using a photo from a space in that area
// ============================================================================
export const topBirBillingCoworkingLocations = birBillingNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: birBillingSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
