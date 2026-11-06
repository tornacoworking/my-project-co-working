import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Aligarh: no coworking listing with a verifiable operator, address and photo was found on Nov 6, 2026 (only a tile shop and an unnamed business centre were listed).
// The page still opens with the enquiry banners. Add real spaces to this list when they are confirmed.
// deskPrice / cabinPrice are per-seat monthly rates from the listings above; null shows "On request" on the detail page.

export const aligarhSpaces = [];

export default aligarhSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const aligarhNeighborhoods = Object.entries(
  aligarhSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const aligarhOfficeCards = aligarhSpaces.slice(0, 8);
export const moreAligarhOfficeCards = aligarhSpaces.slice(8);

export const aligarhAreas = aligarhNeighborhoods;

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
// Aligarh Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allAligarhOfficeCards = aligarhSpaces;

export const getAligarhOfficeCardById = (id) => findOfficeBySlug(allAligarhOfficeCards, id, "aligarh");
export const getAligarhOfficeSlug = (space) => officePath(allAligarhOfficeCards, space, "aligarh");

// ============================================================================
// Top Coworking Locations in Aligarh — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAligarhCoworkingLocations = aligarhNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: aligarhSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
