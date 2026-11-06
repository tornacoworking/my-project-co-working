import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Aizawl (Mizoram) coworking spaces — MyBranch, Qdesq, CoworkingCafe and Office Hub listing data, fetched Nov 6, 2026.
// Ratings, review counts and phone numbers are left out because no source gave a verifiable figure. Qdesq's number is its own sales line.
// deskPrice / cabinPrice are per-seat monthly rates from the listings above; null shows "On request" on the detail page.

export const aizawlSpaces = [
  {
    // PIN from CoworkingCafe and Office Hub; MyBranch's own page prints 796001.
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Zarkawt',
    location: 'Zarkawt, Aizawl',
    address: '1st Floor, Plot No-60/1969, House No-TN 62, Varte Plaza, Zarkawt Main Road, Zarkawt, Aizawl, Mizoram 796007',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹9,500',
    period: '/ month',
    priceFormatted: '₹9,500 / month',
    deskPrice: null,
    cabinPrice: '₹9,500',
    priceNote: '1-person private office, Office Hub listing (12-month term)',
    ctaText: 'Get Quote',
    website: 'https://www.mybranch.co.in/coworking-space-in-aizawl-varte-plaza',
    images: [
      'https://www.mybranch.co.in/office/office_images/1741600145_284_11zon.jpg',
      'https://www.mybranch.co.in/office/office_images/1741600145_283_11zon.jpg',
      'https://www.mybranch.co.in/office/office_images/1741600145_282_11zon.jpg'
    ]
  },
  {
    // Low confidence: landmark only, and this looks like desks inside a consultancy office rather than a dedicated coworking centre — verify before publishing.
    id: 2,
    name: 'LB Associates',
    area: 'Bungkawn Veng',
    location: 'Bungkawn Veng, Aizawl',
    address: 'Near HLL Lifecare Ltd, Bungkawn Veng, Aizawl, Mizoram',
    phone: null,
    hours: '10:00 AM – 8:00 PM, Mon–Fri',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Tea/Coffee', 'Car / Bike Parking', 'Mail Handling'],
    capacity: 24,
    price: '₹9,500',
    period: '/ month',
    priceFormatted: '₹9,500 / month',
    deskPrice: '₹9,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1631519040/azzwte9azfjbabz94vwl.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1631519040/bgm8etexmvdhvv4n9uh5.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1631519042/rjpytbmj5ddavon9wcgm.webp'
    ]
  }
];

export default aizawlSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const aizawlNeighborhoods = Object.entries(
  aizawlSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const aizawlOfficeCards = aizawlSpaces.slice(0, 8);
export const moreAizawlOfficeCards = aizawlSpaces.slice(8);

export const aizawlAreas = aizawlNeighborhoods;

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
// Aizawl Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allAizawlOfficeCards = aizawlSpaces;

export const getAizawlOfficeCardById = (id) => findOfficeBySlug(allAizawlOfficeCards, id, "aizawl");
export const getAizawlOfficeSlug = (space) => officePath(allAizawlOfficeCards, space, "aizawl");

// ============================================================================
// Top Coworking Locations in Aizawl — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAizawlCoworkingLocations = aizawlNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: aizawlSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
