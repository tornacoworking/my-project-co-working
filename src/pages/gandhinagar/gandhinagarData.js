import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Gandhinagar (Gujarat) coworking spaces, compiled 13 Nov 2026 from coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const gandhinagarSpaces = [
  {
    // Sources: https://coworkingers.com/listing/officiallyours/
    id: 1,
    name: 'OfficiallYours',
    area: 'Infocity',
    location: 'Infocity, Gandhinagar',
    address: 'Tower IV, Infocity, Gandhinagar, Gujarat 382007, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/POD3824-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/POD3844-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/POD3849-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2022-09-17-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/ecoworks/
    id: 2,
    name: 'Ecoworks',
    area: 'Sector 26',
    location: 'Sector 26, Gandhinagar',
    address: 'Sharan Business, beside D-Mart, Green City, Sector 26, Gandhinagar, Gujarat',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-12-07-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/DSC_0910-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/DSC_0916-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/DSC_0918-min.jpg'
    ]
  }
];

export default gandhinagarSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const gandhinagarNeighborhoods = Object.entries(
  gandhinagarSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const gandhinagarOfficeCards = gandhinagarSpaces.slice(0, 8);
export const moreGandhinagarOfficeCards = gandhinagarSpaces.slice(8);

export const gandhinagarAreas = gandhinagarNeighborhoods;

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
// Gandhinagar Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allGandhinagarOfficeCards = gandhinagarSpaces;

export const getGandhinagarOfficeCardById = (id) => findOfficeBySlug(allGandhinagarOfficeCards, id, "gandhinagar");
export const getGandhinagarOfficeSlug = (space) => officePath(allGandhinagarOfficeCards, space, "gandhinagar");

// ============================================================================
// Top Coworking Locations in Gandhinagar — one tile per area, using a photo from a space in that area
// ============================================================================
export const topGandhinagarCoworkingLocations = gandhinagarNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: gandhinagarSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
