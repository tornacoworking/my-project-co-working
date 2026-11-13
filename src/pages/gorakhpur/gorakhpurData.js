import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Gorakhpur (Uttar Pradesh) coworking spaces, compiled 13 Nov 2026 from qdesq.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const gorakhpurSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/startup-cafe/miyan-baza-gorakhpur-gor001
    id: 1,
    name: 'StartUp Cafe',
    area: 'Miyan Bazar',
    location: 'Miyan Bazar, Gorakhpur',
    address: 'Opposite Central Bank of India, Miyan Bazar, Gorakhpur, Uttar Pradesh',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms'],
    capacity: 5,
    price: '₹7,700',
    period: '/ month',
    priceFormatted: '₹7,700 / month',
    deskPrice: '₹7,700',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1594296713/zxmvcvdjuvtjynw30ogd.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1594296713/ompc0rpgvz50cjegteqo.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1594296713/eyuaycfcttlo9owwm6f6.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1594296773/akwwidsxcmh0pjrqadsq.webp'
    ]
  }
];

export default gorakhpurSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const gorakhpurNeighborhoods = Object.entries(
  gorakhpurSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const gorakhpurOfficeCards = gorakhpurSpaces.slice(0, 8);
export const moreGorakhpurOfficeCards = gorakhpurSpaces.slice(8);

export const gorakhpurAreas = gorakhpurNeighborhoods;

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
// Gorakhpur Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allGorakhpurOfficeCards = gorakhpurSpaces;

export const getGorakhpurOfficeCardById = (id) => findOfficeBySlug(allGorakhpurOfficeCards, id, "gorakhpur");
export const getGorakhpurOfficeSlug = (space) => officePath(allGorakhpurOfficeCards, space, "gorakhpur");

// ============================================================================
// Top Coworking Locations in Gorakhpur — one tile per area, using a photo from a space in that area
// ============================================================================
export const topGorakhpurCoworkingLocations = gorakhpurNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: gorakhpurSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
