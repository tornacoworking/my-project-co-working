import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Shimla (Himachal Pradesh) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const shimlaSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-shimla-sda-complex , https://gofloaters.com/office-space/gooffice-40334-4-seater-private-cabin-sda-complex-shimla/ , https://gofloaters.com/office-space/gooffice-40335-dedicated-desks-sda-complex-shimla/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'SDA Complex',
    location: 'SDA Complex, Shimla',
    address: '4 th Floor, Block No. 18B, SDA Complex, Kasumpti, Shimla, Himachal Pradesh-171009',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/shimla_rep.webp',
      'https://www.mybranch.co.in/office/office_images/shimla_caf.webp',
      'https://www.mybranch.co.in/office/office_images/shimla_cw.webp'
    ]
  }
];

export default shimlaSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const shimlaNeighborhoods = Object.entries(
  shimlaSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const shimlaOfficeCards = shimlaSpaces.slice(0, 8);
export const moreShimlaOfficeCards = shimlaSpaces.slice(8);

export const shimlaAreas = shimlaNeighborhoods;

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
// Shimla Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allShimlaOfficeCards = shimlaSpaces;

export const getShimlaOfficeCardById = (id) => findOfficeBySlug(allShimlaOfficeCards, id, "shimla");
export const getShimlaOfficeSlug = (space) => officePath(allShimlaOfficeCards, space, "shimla");

// ============================================================================
// Top Coworking Locations in Shimla — one tile per area, using a photo from a space in that area
// ============================================================================
export const topShimlaCoworkingLocations = shimlaNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: shimlaSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
