import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Tiruchirappalli (Trichy), ordered area by area.
// Space list, areas and ratings come from the supplied data. Google Maps links are name + address searches
// (the supplied place IDs could not be matched to Trichy). Photos come from myHQ's listings of the same centres,
// because Google Maps photos cannot be fetched. Every photo was checked visually: people, whiteboard/graphic shots
// and duplicates were removed. Spaces with no genuine photos found were left out. Checked 17 Nov 2026.

const MYHQ = (path) => `https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/${path}`;

export const tiruchirappalliCoworking = [
  // ───────────── Thillai Nagar ─────────────
  {
    id: 5,
    name: 'Universe Coworks',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'Salai Road',
    location: 'Salai Road, Tiruchirappalli',
    address: 'No. 74/A, Salai Road, 2nd Floor, opp. Vaishali Hospital, Thillai Nagar East, 620018, Tiruchirappalli, Tamil Nadu',
    // No. 74/A, Salai Road, 2nd Floor, opp. Vaishali Hospital, Thillai Nagar East, 620018 · listed on myHQ as "Murugan Complex, West Thillai Nagar"
    // Place ID given for this space (ChIJRVebH8vKD2AR2DojP1kKOgU) decodes to a different map region than the other Trichy spaces, so a name + address search link is used instead
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Universe+Coworks+74A+Salai+Road+Thillai+Nagar+Tiruchirappalli',
    images: [
      MYHQ('universe-coworks-westthillainagar/x2esgd.jpg')
    ]
  },
  {
    id: 9,
    name: 'Mikro Grafeio',
    badge: 'New Listing',
    rating: null,
    area: 'West Thillai Nagar',
    location: 'West Thillai Nagar, Tiruchirappalli',
    address: 'No B24, 3rd Floor, Colony Main Road, near 11th Cross bus stand, West Thillai Nagar, 620018, Tiruchirappalli, Tamil Nadu',
    // No B24, 3rd Floor, Colony Main Road, near 11th Cross bus stand, West Thillai Nagar, 620018 · myHQ lists hours as Mon–Sat 9:30 am–8:30 pm
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mikro+Grafeio+Thillai+Nagar+Trichy',
    images: [
      MYHQ('mikro-grafeio-westthillainagar/2jneun.jpg'),
      MYHQ('mikro-grafeio-westthillainagar/ujmxj5.jpg'),
      MYHQ('mikro-grafeio-westthillainagar/4kjmjt.jpg'),
      MYHQ('mikro-grafeio-westthillainagar/xxjbua.jpg')
    ]
  }
];

// Spaces with no genuine photos found are left out of the site entirely.
// Operating, but no genuine photos of the space published yet.
export const tiruchirappalliCoworkingPendingPhotos = [];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const tiruchirappalliSpaces = tiruchirappalliCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const tiruchirappalliNeighborhoods = Object.entries(
  tiruchirappalliSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const tiruchirappalliOfficeCards = tiruchirappalliSpaces.slice(0, 8);
export const moreTiruchirappalliOfficeCards = tiruchirappalliSpaces.slice(8, 16);
export const finalTiruchirappalliOfficeCards = tiruchirappalliSpaces.slice(16, 24);
export const featuredTiruchirappalliOfficeCards = tiruchirappalliSpaces.slice(24);

export const tiruchirappalliAreas = tiruchirappalliNeighborhoods;

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
// Tiruchirappalli Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allTiruchirappalliOfficeCards = tiruchirappalliSpaces;

export const getTiruchirappalliOfficeCardById = (id) => findOfficeBySlug(allTiruchirappalliOfficeCards, id, "tiruchirappalli");
export const getTiruchirappalliOfficeSlug = (space) => officePath(allTiruchirappalliOfficeCards, space, "tiruchirappalli");

// ============================================================================
// Top Coworking Locations in Tiruchirappalli (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topTiruchirappalliCoworkingLocations = tiruchirappalliNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: tiruchirappalliSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
