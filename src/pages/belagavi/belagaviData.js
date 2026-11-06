import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Belagavi: no coworking listing with a verifiable operator, address and photo was found on Nov 6, 2026 (only general office rentals were listed).
// The page still opens with the enquiry banners. Add real spaces to this list when they are confirmed.
// deskPrice / cabinPrice are per-seat monthly rates from the listings above; null shows "On request" on the detail page.

export const belagaviSpaces = [];

export default belagaviSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const belagaviNeighborhoods = Object.entries(
  belagaviSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const belagaviOfficeCards = belagaviSpaces.slice(0, 8);
export const moreBelagaviOfficeCards = belagaviSpaces.slice(8);

export const belagaviAreas = belagaviNeighborhoods;

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
// Belagavi Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allBelagaviOfficeCards = belagaviSpaces;

export const getBelagaviOfficeCardById = (id) => findOfficeBySlug(allBelagaviOfficeCards, id, "belagavi");
export const getBelagaviOfficeSlug = (space) => officePath(allBelagaviOfficeCards, space, "belagavi");

// ============================================================================
// Top Coworking Locations in Belagavi — one tile per area, using a photo from a space in that area
// ============================================================================
export const topBelagaviCoworkingLocations = belagaviNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: belagaviSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
