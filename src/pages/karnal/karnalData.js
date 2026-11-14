import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Karnal (Haryana) coworking spaces, compiled 14 Nov 2026 from the operator's website.
// Each card lists the pages it was built from. Photos were checked by eye; photos showing people were left out.
// Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const karnalSpaces = [
  {
    // Sources: https://workspacepedia.com/
    // Most images on the operator's site are AI-generated or stock photos; only its one real photo is used.
    id: 1,
    name: 'Work Space Pedia',
    area: 'Sector 7',
    location: 'Sector 7, Karnal',
    address: 'SCO 50, 3rd Floor, Sector 7, Karnal, Haryana 132001',
    phone: '+91 95410 60005',
    hours: null,
    amenities: ['High Speed WiFi', 'Meeting Rooms', 'Tea/Coffee', 'Printer', 'Car / Bike Parking'],
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Per seat, operator website',
    ctaText: 'Get Quote',
    website: 'https://workspacepedia.com/',
    images: [
      'https://workspacepedia.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-19-at-12.58.02-PM-1.jpeg'
    ]
  }
];

export default karnalSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const karnalNeighborhoods = Object.entries(
  karnalSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const karnalOfficeCards = karnalSpaces.slice(0, 8);
export const moreKarnalOfficeCards = karnalSpaces.slice(8);

export const karnalAreas = karnalNeighborhoods;

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
// Karnal Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allKarnalOfficeCards = karnalSpaces;

export const getKarnalOfficeCardById = (id) => findOfficeBySlug(allKarnalOfficeCards, id, "karnal");
export const getKarnalOfficeSlug = (space) => officePath(allKarnalOfficeCards, space, "karnal");

// ============================================================================
// Top Coworking Locations in Karnal — one tile per area, using a photo from a space in that area
// ============================================================================
export const topKarnalCoworkingLocations = karnalNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: karnalSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
