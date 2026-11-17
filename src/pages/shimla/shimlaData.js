import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Shimla.
// MyBranch Shimla: photos and address from its own MyBranch page (SDA Complex, Kasumpti). Sharma Coworking Space: photos
// and address from its Qdesq listing (Bhattakufer, near Bhardwaj Automobile). Google place IDs were converted to standard Maps links.
// Left out (no genuine photos or no public listing found): Qubes Co-Working Space (Hira Nagar) and Shimla Coworking
// (1st floor, Chauhan Niwas, Khalini, only an Instant Offices page). Checked 17 Nov 2026.

const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const shimlaCoworking = [
  {
    id: 110,
    name: 'MyBranch - Shimla',
    badge: 'Verified',
    rating: 5.0,
    area: 'Kasumpti',
    location: 'Kasumpti, Shimla',
    address: '4th Floor, Block No. 18B, SDA Complex, Kasumpti, Shimla, Himachal Pradesh 171009',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('15929267239437759605'),
    images: [
      'https://www.mybranch.co.in/public/office/office_images/shimla_cw.webp',
      'https://www.mybranch.co.in/public/office/office_images/shimla_mr.webp',
      'https://www.mybranch.co.in/public/office/office_images/shimla_rep.webp',
      'https://www.mybranch.co.in/public/office/office_images/shimla_caf.webp'
    ]
  },
  {
    id: 112,
    name: 'Sharma Cowork Space',
    badge: 'New Listing',
    rating: null,
    area: 'Kamla Nagar, Bhattakufer',
    location: 'Kamla Nagar, Bhattakufer, Shimla',
    address: 'Near Bhardwaj Automobile, Bhattakufer, Shimla',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('7711441103215616960'),
    images: [
      'https://qdesq.imagekit.io/image/upload/v1683006734/uxmowpuhxpizrrgflb0x.webp',
      'https://qdesq.imagekit.io/image/upload/v1683006735/l9m6jqefn65ar3ozp52k.webp',
      'https://qdesq.imagekit.io/image/upload/v1683006742/dwhw3wh5qubjjckxgm5g.webp'
    ]
  }
];

// Spaces with no genuine photos found are left out of the site entirely.
// Operating, but no genuine photos of the space published yet.
export const shimlaCoworkingPendingPhotos = [];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const shimlaSpaces = shimlaCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const shimlaNeighborhoods = Object.entries(
  shimlaSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const shimlaOfficeCards = shimlaSpaces.slice(0, 8);
export const moreShimlaOfficeCards = shimlaSpaces.slice(8, 16);
export const finalShimlaOfficeCards = shimlaSpaces.slice(16, 24);
export const featuredShimlaOfficeCards = shimlaSpaces.slice(24);

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
// Top Coworking Locations in Shimla (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topShimlaCoworkingLocations = shimlaNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: shimlaSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
