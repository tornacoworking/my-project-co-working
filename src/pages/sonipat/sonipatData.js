import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Sonipat.
// Mannat Coworking is real (mannatcoworking.com): S1, Second Floor, Atlas Rd, Parshuram Chowk, Sonipat 131001, +91 99961 69001,
// day pass ₹300, monthly pass from ₹4,000. Its site has only a text graphic, no photos of the space, so it is not shown.
// The supplied area says Model Town, the site says Parshuram Chowk. KAP Con India Co-work Space has no public listing at all.
// Add spaces here once real photos are available. Checked 17 Nov 2026.

export const sonipatCoworking = [];

// Spaces with no genuine photos found are left out of the site entirely.
// Operating, but no genuine photos of the space published yet.
export const sonipatCoworkingPendingPhotos = [];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const sonipatSpaces = sonipatCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const sonipatNeighborhoods = Object.entries(
  sonipatSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const sonipatOfficeCards = sonipatSpaces.slice(0, 8);
export const moreSonipatOfficeCards = sonipatSpaces.slice(8, 16);
export const finalSonipatOfficeCards = sonipatSpaces.slice(16, 24);
export const featuredSonipatOfficeCards = sonipatSpaces.slice(24);

export const sonipatAreas = sonipatNeighborhoods;

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
// Sonipat Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allSonipatOfficeCards = sonipatSpaces;

export const getSonipatOfficeCardById = (id) => findOfficeBySlug(allSonipatOfficeCards, id, "sonipat");
export const getSonipatOfficeSlug = (space) => officePath(allSonipatOfficeCards, space, "sonipat");

// ============================================================================
// Top Coworking Locations in Sonipat (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topSonipatCoworkingLocations = sonipatNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: sonipatSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
