import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Srinagar (Jammu and Kashmir) coworking spaces, compiled 13 Nov 2026 from qdesq.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const srinagarSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/thinkpod-coworking/wazir-bagh-srinagar-srg002
    id: 1,
    name: 'ThinkPod CoWorking',
    area: 'Wazir Bagh',
    location: 'Wazir Bagh, Srinagar',
    address: 'Near Ramzana Hospital, Wazir Bagh, Srinagar, Jammu and Kashmir',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Fri',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms'],
    capacity: 30,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1596087326/xrqkhrqefdrbugjfsdhk.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1596087024/czedowsv576kza8uj2e0.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1596087030/y4mow5ec30wf901rduth.webp'
    ]
  }
];

export default srinagarSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const srinagarNeighborhoods = Object.entries(
  srinagarSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const srinagarOfficeCards = srinagarSpaces.slice(0, 8);
export const moreSrinagarOfficeCards = srinagarSpaces.slice(8);

export const srinagarAreas = srinagarNeighborhoods;

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
// Srinagar Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allSrinagarOfficeCards = srinagarSpaces;

export const getSrinagarOfficeCardById = (id) => findOfficeBySlug(allSrinagarOfficeCards, id, "srinagar");
export const getSrinagarOfficeSlug = (space) => officePath(allSrinagarOfficeCards, space, "srinagar");

// ============================================================================
// Top Coworking Locations in Srinagar — one tile per area, using a photo from a space in that area
// ============================================================================
export const topSrinagarCoworkingLocations = srinagarNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: srinagarSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
