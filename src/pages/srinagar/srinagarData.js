import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Srinagar.
// ThinkPod: photos, price (₹5,500 dedicated desk, Mon-Fri 10-6) and address come from its Qdesq listing; the Google place ID
// was converted to a standard Maps link. Left out (no genuine photos found anywhere): STPI Incubation Centre - Rangreth
// (a government incubation centre, 6 SIDCO Electronics Complex) and CTO 2nd (no public listing). Checked 17 Nov 2026.

const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const srinagarCoworking = [
  {
    id: 99,
    name: 'ThinkPod Innovation & Entrepreneurship Foundation',
    badge: 'New Listing',
    rating: null,
    area: 'Jawahar Nagar',
    location: 'Jawahar Nagar, Srinagar',
    address: 'Near Ramzana Hospital, Wazir Bagh, Srinagar',
    // Qdesq lists this centre (ThinkPod CoWorking) at Wazir Bagh, near Ramzana Hospital; other sources say Jawahar Nagar
    price: '₹5,500',
    period: '/ Month',
    priceFormatted: '₹5,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('3402184855727377695'),
    images: [
      'https://qdesq.imagekit.io/image/upload/v1596087024/czedowsv576kza8uj2e0.webp',
      'https://qdesq.imagekit.io/image/upload/v1596087318/xwlm1jnctukl8gtk6ihm.webp',
      'https://qdesq.imagekit.io/image/upload/v1596087326/xrqkhrqefdrbugjfsdhk.webp'
    ]
  }
];

// Spaces with no genuine photos found are left out of the site entirely.
// Operating, but no genuine photos of the space published yet.
export const srinagarCoworkingPendingPhotos = [];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const srinagarSpaces = srinagarCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const srinagarNeighborhoods = Object.entries(
  srinagarSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const srinagarOfficeCards = srinagarSpaces.slice(0, 8);
export const moreSrinagarOfficeCards = srinagarSpaces.slice(8, 16);
export const finalSrinagarOfficeCards = srinagarSpaces.slice(16, 24);
export const featuredSrinagarOfficeCards = srinagarSpaces.slice(24);

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
// Top Coworking Locations in Srinagar (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topSrinagarCoworkingLocations = srinagarNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: srinagarSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
