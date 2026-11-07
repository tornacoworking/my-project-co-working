import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Bharuch district coworking listings. Bharuch city itself had no verifiable listing on Nov 7, 2026.
// deskPrice / cabinPrice are per-seat monthly rates from the listings above; null shows "On request" on the detail page.

export const bharuchSpaces = [
  {
    // In Ankleshwar, about 15 km from Bharuch city. Sources disagree on price (₹6,999–₹13,000 a seat), so it stays on request.
    id: 1,
    name: 'MyBranch Ankleshwar',
    area: 'Ankleshwar',
    location: 'Station Road, Ankleshwar',
    address: 'FF-97, 1st Floor, Omkar II, Station Road, Ankleshwar, Bharuch district, Gujarat',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'Tea/Coffee', 'Car / Bike Parking'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://bisdesk.com/uploads/facility/images/image_1643713300.jpg'
    ]
  }
];

export default bharuchSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const bharuchNeighborhoods = Object.entries(
  bharuchSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const bharuchOfficeCards = bharuchSpaces.slice(0, 8);
export const moreBharuchOfficeCards = bharuchSpaces.slice(8);

export const bharuchAreas = bharuchNeighborhoods;

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
// Bharuch Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allBharuchOfficeCards = bharuchSpaces;

export const getBharuchOfficeCardById = (id) => findOfficeBySlug(allBharuchOfficeCards, id, "bharuch");
export const getBharuchOfficeSlug = (space) => officePath(allBharuchOfficeCards, space, "bharuch");

// ============================================================================
// Top Coworking Locations in Bharuch — one tile per area, using a photo from a space in that area
// ============================================================================
export const topBharuchCoworkingLocations = bharuchNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: bharuchSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
