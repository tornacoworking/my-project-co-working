import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Jamnagar (Gujarat) coworking spaces, compiled 13 Nov 2026 from indiamart.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const jamnagarSpaces = [
  {
    // Sources: https://www.indiamart.com/space-4-works/
    id: 1,
    name: 'Space 4 Works',
    area: 'Park Colony',
    location: 'Park Colony, Jamnagar',
    address: 'Platinum Square, opposite Joggers Park, Park Colony, Jamnagar, Gujarat 361008',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms'],
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Dedicated desk, IndiaMART listing (flexi desk ₹6,000)',
    ctaText: 'Get Quote',
    images: [
      'https://5.imimg.com/data5/ANDROID/Default/2022/1/LB/RC/FJ/144986262/prod-20220104-1815124950717763873897796-jpg-500x500.jpg',
      'https://5.imimg.com/data5/ANDROID/Default/2022/1/HV/GM/IT/144986262/prod-20220127-1632078811553756769230345-jpg-500x500.jpg',
      'https://5.imimg.com/data5/ANDROID/Default/2022/1/HV/TS/BG/144986262/prod-20220104-1826198362992445577880081-jpg-500x500.jpg',
      'https://5.imimg.com/data5/ANDROID/Default/2022/1/TT/EC/QZ/144986262/prod-20220104-1812411512792375911009730-jpg-500x500.jpg'
    ]
  }
];

export default jamnagarSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const jamnagarNeighborhoods = Object.entries(
  jamnagarSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const jamnagarOfficeCards = jamnagarSpaces.slice(0, 8);
export const moreJamnagarOfficeCards = jamnagarSpaces.slice(8);

export const jamnagarAreas = jamnagarNeighborhoods;

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
// Jamnagar Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allJamnagarOfficeCards = jamnagarSpaces;

export const getJamnagarOfficeCardById = (id) => findOfficeBySlug(allJamnagarOfficeCards, id, "jamnagar");
export const getJamnagarOfficeSlug = (space) => officePath(allJamnagarOfficeCards, space, "jamnagar");

// ============================================================================
// Top Coworking Locations in Jamnagar — one tile per area, using a photo from a space in that area
// ============================================================================
export const topJamnagarCoworkingLocations = jamnagarNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: jamnagarSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
