import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Pimpri-Chinchwad (Maharashtra) coworking spaces, compiled 13 Nov 2026 from coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - LearnITnow – Invest In Knowledge For Higher Returns! (not an office)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const pimpriChinchwadSpaces = [
  {
    // Sources: https://coworkingers.com/listing/be-working-co-working-space/
    id: 1,
    name: 'Be-Working Co-working Space',
    area: 'Pune',
    location: 'Pune, Pimpri-Chinchwad',
    address: 'Sant Tukaram Nagar, Pimpri Colony, Pimpri-Chinchwad, Pune, Maharashtra 411018',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Car / Bike Parking', 'Storage', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-05-at-13.02.52_7ae172f5-768x512-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-05-at-13.02.54_3d676516-768x512-1.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/hm3-co-working-spaces-2/
    id: 2,
    name: 'HM3 CO-Working Spaces',
    area: 'Pimpri-Chinchwad',
    location: 'Pimpri-Chinchwad, Pimpri-Chinchwad',
    address: 'Vision Galleria, Pimple Saudagar, Pimpri-Chinchwad, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Storage', 'Printer'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/10/2023-08-09-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/10/2023-08-09-2.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/10/2023-08-09-3.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/deskup365-2/
    id: 3,
    name: 'Deskup365',
    area: 'Pimpri-Chinchwad',
    location: 'Pimpri-Chinchwad, Pimpri-Chinchwad',
    address: 'Dange Chowk Road, Bhatewara Nagar, Hinjawadi Village, Wakad, Pimpri-Chinchwad, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/10/project_3.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/10/unnamed-41.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/10/WhatsApp-Image-2020-01-02-at-11.56.56-AM-4.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/co-win-coworking-spaces/
    id: 4,
    name: 'Co-win Coworking Spaces',
    area: 'Pune',
    location: 'Pune, Pimpri-Chinchwad',
    address: 'Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Pune, Maharashtra 411057',
    phone: null,
    hours: null,
    amenities: ['Housekeeping', 'High Speed WiFi', 'Pantry'],
    price: '₹13,500',
    period: '/ month',
    priceFormatted: '₹13,500 / month',
    deskPrice: '₹13,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/10/IMG20220613114610.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/geo-workspace/
    id: 5,
    name: 'Geo Workspace',
    area: 'Pimpri-Chinchwad',
    location: 'Pimpri-Chinchwad, Pimpri-Chinchwad',
    address: 'Anandi complex, Vishal Nagar, Pimple Nilakh, Pimpri-Chinchwad, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Tea/Coffee', 'High Speed WiFi', 'Pantry', 'Lounge', 'Printer'],
    price: '₹3,500',
    period: '/ month',
    priceFormatted: '₹3,500 / month',
    deskPrice: '₹3,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/10/IMG_8928.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/10/IMG_8931.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/10/IMG_8933-2.jpg'
    ]
  }
];

export default pimpriChinchwadSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const pimpriChinchwadNeighborhoods = Object.entries(
  pimpriChinchwadSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const pimpriChinchwadOfficeCards = pimpriChinchwadSpaces.slice(0, 8);
export const morePimpriChinchwadOfficeCards = pimpriChinchwadSpaces.slice(8);

export const pimpriChinchwadAreas = pimpriChinchwadNeighborhoods;

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
// Pimpri-Chinchwad Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allPimpriChinchwadOfficeCards = pimpriChinchwadSpaces;

export const getPimpriChinchwadOfficeCardById = (id) => findOfficeBySlug(allPimpriChinchwadOfficeCards, id, "pimpri-chinchwad");
export const getPimpriChinchwadOfficeSlug = (space) => officePath(allPimpriChinchwadOfficeCards, space, "pimpri-chinchwad");

// ============================================================================
// Top Coworking Locations in Pimpri-Chinchwad — one tile per area, using a photo from a space in that area
// ============================================================================
export const topPimpriChinchwadCoworkingLocations = pimpriChinchwadNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: pimpriChinchwadSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
