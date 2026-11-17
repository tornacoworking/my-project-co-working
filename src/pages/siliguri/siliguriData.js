import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Siliguri (Sevoke Road).
// Space list, ratings, prices and the MyBranch / AKASA photos come from the supplied data (Office Hub listings).
// Wownooks' photos and address come from its myHQ listing; MyBranch and AKASA addresses from their myHQ listings.
// Google place IDs were converted to standard Google Maps links. HQ Home Square (Salugara) is left out: the only
// image found online is a text graphic, no genuine photos. Checked 17 Nov 2026.

const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const siliguriCoworking = [
  {
    id: 106,
    name: 'Wownooks - Premium Coworking',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Don Bosco More, Sevoke Road',
    location: 'Don Bosco More, Sevoke Road, Siliguri',
    address: '4th Floor, D L Infiniti, Don Bosco More, Sevoke Road, Ward 43, Siliguri 734001',
    price: '₹8,000',
    period: '/ Month',
    priceFormatted: '₹8,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('17844410339343476230'),
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/wownooks-donboscocolony/dbb4vw.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/wownooks-donboscocolony/fb4n3j.jpg'
    ]
  },
  {
    id: 107,
    name: 'MyBranch - Siliguri',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Bhanu Nagar, Sevoke Road',
    location: 'Bhanu Nagar, Sevoke Road, Siliguri',
    address: '2nd Floor, Goyal Plaza, Office 3, Sevoke Road, opposite Sachitra Hotel, Siliguri 734001',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9949722014253690281'),
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51358/Serviced-Office-%28Classic%29-West-Bengal-Siliguri-Sevoke-Rd-2025-01-15-1.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51358/Serviced-Office-%28Classic%29-West-Bengal-Siliguri-Sevoke-Rd-2025-01-15.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51358/Serviced-Office-%28Classic%29-West-Bengal-Siliguri-Office-3-Sevoke-Rd-2025-01-15.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51358/Serviced-Office-%28Classic%29-West-Bengal-Siliguri-Office-3-Sevoke-Rd-1735625941101111zon.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51358/Serviced-Office-%28Classic%29-West-Bengal-Siliguri-Office-3-Sevoke-Rd-1735625941121311zon.jpg'
    ]
  },
  {
    id: 108,
    name: 'AKASA Coworking',
    badge: 'Verified',
    rating: 3.0,
    area: 'Chayan Para, Sevoke Road',
    location: 'Chayan Para, Sevoke Road, Siliguri',
    address: '3rd Floor, Orchid Tower, Sevoke Road, near Check Post, opp. Vega Circle Mall, Chayan Para, Siliguri 734001',
    price: '₹6,000',
    period: '/ Month',
    priceFormatted: '₹6,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('5603291975658830726'),
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/49152/Serviced-Office-%28Classic%29-West-Bengal-Siliguri-Sevoke-Rd-Ward-42-Don-Bosco-Colony-property-image-1730187482958-428272.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/49152/Serviced-Office-%28Classic%29-West-Bengal-Siliguri-Sevoke-Rd-Ward-42-Don-Bosco-Colony-property-image-1730187493905-291132.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/49152/Serviced-Office-%28Classic%29-West-Bengal-Siliguri-Sevoke-Rd-Ward-42-Don-Bosco-Colony-property-image-1730187482959-591219.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/49152/Serviced-Office-%28Classic%29-West-Bengal-Siliguri-Sevoke-Rd-Ward-42-Don-Bosco-Colony-property-image-1730187482958-445152.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/49152/Serviced-Office-%28Classic%29-West-Bengal-Siliguri-Sevoke-Rd-Ward-42-Don-Bosco-Colony-orchid-tower.webp'
    ]
  }
];

// Spaces with no genuine photos found are left out of the site entirely.
// Operating, but no genuine photos of the space published yet.
export const siliguriCoworkingPendingPhotos = [];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const siliguriSpaces = siliguriCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const siliguriNeighborhoods = Object.entries(
  siliguriSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const siliguriOfficeCards = siliguriSpaces.slice(0, 8);
export const moreSiliguriOfficeCards = siliguriSpaces.slice(8, 16);
export const finalSiliguriOfficeCards = siliguriSpaces.slice(16, 24);
export const featuredSiliguriOfficeCards = siliguriSpaces.slice(24);

export const siliguriAreas = siliguriNeighborhoods;

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
// Siliguri Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allSiliguriOfficeCards = siliguriSpaces;

export const getSiliguriOfficeCardById = (id) => findOfficeBySlug(allSiliguriOfficeCards, id, "siliguri");
export const getSiliguriOfficeSlug = (space) => officePath(allSiliguriOfficeCards, space, "siliguri");

// ============================================================================
// Top Coworking Locations in Siliguri (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topSiliguriCoworkingLocations = siliguriNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: siliguriSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
