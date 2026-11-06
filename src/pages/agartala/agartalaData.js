import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Agartala (Tripura) coworking spaces — MyBranch, Qdesq and Office Hub listing data, fetched Nov 6, 2026.
// Ratings, review counts and phone numbers are left out because no source gave a verifiable figure. Qdesq's number is its own sales line.
// deskPrice / cabinPrice are per-seat monthly rates from the listings above; null shows "On request" on the detail page.

export const agartalaSpaces = [
  {
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Mantribari Road',
    location: 'Mantribari Road, Agartala',
    address: '2nd Floor, Mantribari Road, Agartala, West Tripura, Tripura 799001',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Fri',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Printer', 'Housekeeping', 'Private Cabins'],
    capacity: 20,
    price: '₹9,000',
    period: '/ month',
    priceFormatted: '₹9,000 / month',
    deskPrice: '₹9,000',
    cabinPrice: '₹9,500',
    priceNote: 'Per desk, Qdesq listing (Office Hub ₹9,500)',
    ctaText: 'Get Quote',
    website: 'https://www.mybranch.co.in/coworking-space-in-agartala-madhyapara',
    images: [
      'https://www.mybranch.co.in/office/office_images/1765266096_3_11zon.webp',
      'https://www.mybranch.co.in/office/office_images/1765266096_4_11zon.webp',
      'https://www.mybranch.co.in/office/office_images/1765266096_2_11zon.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1672656249/jwqlqwiyystcf3odvdqx.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1672656249/tb6m22s1n6crld6ga5ms.jpg'
    ]
  },
  {
    // Low confidence: landmark only, and the photos carry a camera stamp — verify before publishing.
    id: 2,
    name: 'Work Studio',
    area: 'Indranagar',
    location: 'Indranagar, Agartala',
    address: 'Near Dhaleswar Road, Indranagar, Agartala, Tripura',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Tea/Coffee'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/77d0687c5ec120f37be0a72a3b51640f_n_NiNwRAv.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/330a99fb5f60da2497291774d68098e8_P2Q1QcVsn.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/684713b4f676cc5b1737a6ff638b4454_tIHTNj6oEb.jpg'
    ]
  }
];

export default agartalaSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const agartalaNeighborhoods = Object.entries(
  agartalaSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const agartalaOfficeCards = agartalaSpaces.slice(0, 8);
export const moreAgartalaOfficeCards = agartalaSpaces.slice(8);

export const agartalaAreas = agartalaNeighborhoods;

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
// Agartala Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allAgartalaOfficeCards = agartalaSpaces;

export const getAgartalaOfficeCardById = (id) => findOfficeBySlug(allAgartalaOfficeCards, id, "agartala");
export const getAgartalaOfficeSlug = (space) => officePath(allAgartalaOfficeCards, space, "agartala");

// ============================================================================
// Top Coworking Locations in Agartala — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAgartalaCoworkingLocations = agartalaNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: agartalaSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
