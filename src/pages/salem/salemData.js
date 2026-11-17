import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Salem.
// Namma Office - Anushka Towers and Rajeshwari Towers: photos, address and hours come from their own NammaOffice centre pages.
// Tidel Neo, Happy Office and MyBranch: photos from the supplied data (Coworking Cafe / Office Hub); Happy Office and Tidel Neo
// localities from their Qdesq listings. Prices left as "on request" because listings disagree. Google place IDs were converted to
// standard Maps links. Checked 17 Nov 2026.

const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const salemCoworking = [
  {
    id: 120,
    name: 'NammaOffice - Anushka Towers',
    badge: 'Top Rated',
    rating: 4.8,
    area: 'Fairlands, Brindavan Road',
    location: 'Fairlands, Brindavan Road, Salem',
    address: '5th Floor, Anushka Tower, Brindavan Road (above LIC, opposite IBACO), Fairlands, Salem 636016',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('14484936244850267957'),
    images: [
      'https://nammaoffice.com/images/wix/anushka/anushka-03.webp',
      'https://nammaoffice.com/images/wix/anushka/anushka-04.webp',
      'https://nammaoffice.com/images/wix/anushka/anushka-05.webp',
      'https://nammaoffice.com/images/wix/anushka/anushka-06.webp'
    ]
  },
  {
    id: 121,
    name: 'Namma Office - Rajeshwari Towers',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Seerangapalayam',
    location: 'Seerangapalayam, Salem',
    address: '4th Floor, Rajeshwari Towers, 69/4 Ramakrishna Road, Seerangapalayam, Salem 636007',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('11981501128689849944'),
    images: [
      'https://nammaoffice.com/images/wix/rajeshwari/rajeshwari-02.webp',
      'https://nammaoffice.com/images/wix/rajeshwari/rajeshwari-03.webp',
      'https://nammaoffice.com/images/wix/rajeshwari/rajeshwari-04.webp',
      'https://nammaoffice.com/images/wix/rajeshwari/rajeshwari-05.webp',
      'https://nammaoffice.com/images/wix/rajeshwari/rajeshwari-06.webp'
    ]
  },
  {
    id: 122,
    name: 'Namma Office - Tidel Neo',
    badge: 'Verified',
    rating: 4.6,
    area: 'Karuppur',
    location: 'Karuppur, Salem',
    address: 'Tidel Neo, Kullagoundanoor, Salem',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('16409684445398271613'),
    images: [
      'https://cdn.coworkingcafe.com:443/images/25170297-4149-45BB-AC4E-77BE966EC08F/94467.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/F1B537CF-0080-46CB-9949-358EF17B748D/94467.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/F1A23825-4470-4D78-8FC5-652414D089F3/94467.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/A38EBD3B-8595-4B78-B7D7-E077CBE706A0/94467.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/9759E78A-1CE2-4B24-8245-58B3370AEEF1/94467.jpg?height=675'
    ]
  },
  {
    id: 123,
    name: 'Happy Office',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'Meyyanur',
    location: 'Meyyanur, Salem',
    address: 'Near Itteri Road, Meyyanur, Salem',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1318034277829078847'),
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52098/Coworking-Space-Tamil-Nadu-Salem-Itteri-Rd-Meyyanur-2025-03-20-5.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52098/Serviced-Office-%28Classic%29-Tamil-Nadu-Salem-Itteri-Rd-Meyyanur-Coworking-Space-Tamil-Nadu-Salem-Itteri-Rd-Meyyanur-2025-03-.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52098/Coworking-Space-Tamil-Nadu-Salem-Itteri-Rd-Meyyanur-2025-03-20-2.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52098/Coworking-Space-Tamil-Nadu-Salem-Itteri-Rd-Meyyanur-2025-03-20-1.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52098/Coworking-Space-Tamil-Nadu-Salem-Itteri-Rd-Meyyanur-2025-03-20-4a.jpg'
    ]
  },
  {
    id: 124,
    name: 'MyBranch - Salem',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'Fairlands',
    location: 'Fairlands, Salem',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('14724734659911489420'),
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51558/Serviced-Office-%28Classic%29-Tamil-Nadu-Salem-Sarada-College-Rd-Fairlands-2025-01-13.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51558/Serviced-Office-%28Classic%29-Tamil-Nadu-Salem-Sarada-College-Rd-Fairlands-2025-01-15.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51558/Serviced-Office-%28Classic%29-Tamil-Nadu-Salem-Sarada-College-Rd-Fairlands-2025-01-13-3.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51558/Serviced-Office-%28Classic%29-Tamil-Nadu-Salem-Sarada-College-Rd-Fairlands-2025-01-13-2.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51558/Serviced-Office-%28Classic%29-Tamil-Nadu-Salem-Sarada-College-Rd-Fairlands-Screenshot-2025-05-26-153251.png'
    ]
  }
];

// Spaces with no genuine photos found are left out of the site entirely.
// Operating, but no genuine photos of the space published yet.
export const salemCoworkingPendingPhotos = [];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const salemSpaces = salemCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const salemNeighborhoods = Object.entries(
  salemSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const salemOfficeCards = salemSpaces.slice(0, 8);
export const moreSalemOfficeCards = salemSpaces.slice(8, 16);
export const finalSalemOfficeCards = salemSpaces.slice(16, 24);
export const featuredSalemOfficeCards = salemSpaces.slice(24);

export const salemAreas = salemNeighborhoods;

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
// Salem Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allSalemOfficeCards = salemSpaces;

export const getSalemOfficeCardById = (id) => findOfficeBySlug(allSalemOfficeCards, id, "salem");
export const getSalemOfficeSlug = (space) => officePath(allSalemOfficeCards, space, "salem");

// ============================================================================
// Top Coworking Locations in Salem (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topSalemCoworkingLocations = salemNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: salemSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
