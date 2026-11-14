import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Mathura (Uttar Pradesh) coworking spaces, compiled 14 Nov 2026 from the operator's website.
// Each card lists the pages it was built from. Photos were checked by eye; photos showing people were left out.
// Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const mathuraSpaces = [
  {
    // Sources: https://cb-coworking-space.cabbazar.com/
    id: 1,
    name: 'CB Work Space',
    area: 'Masani Road',
    location: 'Masani Road, Mathura',
    address: '2nd Floor, Ashok Tower, Masani Road, Mathura, Uttar Pradesh 281003',
    phone: '+91 70172 96242',
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms'],
    price: '₹3,000',
    period: '/ month',
    priceFormatted: '₹3,000 / month',
    deskPrice: '₹3,000',
    cabinPrice: null,
    priceNote: 'Office desk, operator website (flexi desk ₹300 a day)',
    ctaText: 'Get Quote',
    website: 'https://cb-coworking-space.cabbazar.com/',
    images: [
      'https://cb-coworking-space.cabbazar.com/assets/images/gallery/gallery_07.jpg',
      'https://cb-coworking-space.cabbazar.com/assets/images/gallery/gallery_03.jpg'
    ]
  }
];

export default mathuraSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const mathuraNeighborhoods = Object.entries(
  mathuraSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const mathuraOfficeCards = mathuraSpaces.slice(0, 8);
export const moreMathuraOfficeCards = mathuraSpaces.slice(8);

export const mathuraAreas = mathuraNeighborhoods;

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
// Mathura Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allMathuraOfficeCards = mathuraSpaces;

export const getMathuraOfficeCardById = (id) => findOfficeBySlug(allMathuraOfficeCards, id, "mathura");
export const getMathuraOfficeSlug = (space) => officePath(allMathuraOfficeCards, space, "mathura");

// ============================================================================
// Top Coworking Locations in Mathura — one tile per area, using a photo from a space in that area
// ============================================================================
export const topMathuraCoworkingLocations = mathuraNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: mathuraSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
