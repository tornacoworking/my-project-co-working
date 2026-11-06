import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Bhilwara (Rajasthan) coworking spaces — operator website data, fetched Nov 6, 2026.
// Ratings and review counts are left out because no source gave a verifiable figure.
// deskPrice / cabinPrice are per-seat monthly rates from the listings above; null shows "On request" on the detail page.

export const bhilwaraSpaces = [
  {
    id: 1,
    name: 'Ready CoWorking Space',
    area: 'Subhash Nagar',
    location: 'Subhash Nagar, Bhilwara',
    address: '67, near Ram Temple, East Extension, Subhash Nagar, Bhilwara, Rajasthan 311001',
    phone: '+91 91160 11130',
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Printer', 'Storage', 'Car / Bike Parking'],
    capacity: 32,
    price: '₹3,000',
    period: '/ month',
    priceFormatted: '₹3,000 / month',
    deskPrice: '₹3,000',
    cabinPrice: null,
    priceNote: 'Reserved desk, no contract, operator website',
    ctaText: 'Get Quote',
    website: 'https://www.coworkingspacebhilwara.com/',
    images: [
      'https://coworkingspacebhilwara.com/images/facilities-page/parking.jpg',
      'https://coworkingspacebhilwara.com/images/facilities-page/locker.jpg'
    ]
  }
];

export default bhilwaraSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const bhilwaraNeighborhoods = Object.entries(
  bhilwaraSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const bhilwaraOfficeCards = bhilwaraSpaces.slice(0, 8);
export const moreBhilwaraOfficeCards = bhilwaraSpaces.slice(8);

export const bhilwaraAreas = bhilwaraNeighborhoods;

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
// Bhilwara Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allBhilwaraOfficeCards = bhilwaraSpaces;

export const getBhilwaraOfficeCardById = (id) => findOfficeBySlug(allBhilwaraOfficeCards, id, "bhilwara");
export const getBhilwaraOfficeSlug = (space) => officePath(allBhilwaraOfficeCards, space, "bhilwara");

// ============================================================================
// Top Coworking Locations in Bhilwara — one tile per area, using a photo from a space in that area
// ============================================================================
export const topBhilwaraCoworkingLocations = bhilwaraNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: bhilwaraSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
