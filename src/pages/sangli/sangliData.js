import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Sangli.
// Ratna Coworking Space: photos from its own Google Sites page, price (₹4,500 seat) from its own price graphic, address from Justdial.
// CoDesk Coworking Spaces: two real office photos, price and address from its LetMeSeat listing. Google place IDs were converted to
// standard Maps links. Left out: BICS Co-Working Space (Vishrambag) is a software company (BiCS Infotech), not a coworking space.
// Checked 17 Nov 2026.

const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const sangliCoworking = [
  {
    id: 117,
    name: 'Ratna Coworking Space',
    badge: 'Popular',
    rating: 4.9,
    area: 'South Shivaji Nagar',
    location: 'South Shivaji Nagar, Sangli',
    address: 'Nishant Colony, South Shivaji Nagar, Sangli 416416',
    price: '₹4,500',
    period: '/ Month',
    priceFormatted: '₹4,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('14034910727306010616'),
    images: [
      'https://sites.google.com/sitesv-images-rt/APXyLQeIApJtuEVKOVXCxgeTeAVN6O_hi5vKUihwhdGhmOmrruHyMbf95di39dJ1pUrbAJIiVBiqeE1bEUtDuJ4agm9LZ3dNs36DcoFZ5t8OBMGetB0nR5JaOPEar6VmBOR-reANQwihXthAS4QGiFDJoUcBzPr0_64xKvdy5wGcTqSz-rAvLnIVNS6gcsa8ngY=w900',
      'https://sites.google.com/sitesv-images-rt/APXyLQdxeN1G6ft-4eyiCBoFim2mDIGA2SzYvFhsu6ES6z01DmvjZTkv2HBFcW4B5h1JAK51zemxd6iJTfyNtAi30QAEr7rt3KYyIX2SZCnQW-q_JoR73KJgoVqWv2g5mLA2tgTwtwWsCCljjRSggnSeedrqHbZMmTcP2qG_DY1itebFV7ssyp2v4A_FSD7pl3M=w900',
      'https://sites.google.com/sitesv-images-rt/APXyLQcd18peqXjXdvN53V8aZIPCsS6p7Cp38NgpSDJnc9QQenXvypc0J8k_vy97sgXjNVJYPbC3rutTab2JxxX6CekzLNKQLlfJ_UMJlIDRnUcQNoSjqEpwh7kzY1QhMwvbYpzyFmHkQAlIl5KybDHqPu3JoLZidCvfUcn7bYirNN9x9uNsTwOlejacVsFE=w900',
      'https://sites.google.com/sitesv-images-rt/APXyLQd5LWQHJvnZ9bsQAr4NzoPJVwJzVC3mH-ZzfK27k7t8J4Caav_93pukhIfgd5T-Wh_WokOwQc2v-WzGw9fKtyga7q-ktOgZ9HKP7KplIhlonxWGBW5g20-14ty1q4KZ16l8oM9vPSE8FwTXiR2U3bWXhjQax-1wC4mocTYC6kaPqtoTmRQN5LMXlPT6=w900',
      'https://sites.google.com/sitesv-images-rt/APXyLQenHTGDW9SHPjQ4lldmuJfYD9ybaskZ0sUu_-YddIse5lOqPKmGQXUFabDQ8zwMZbyqexzFmOcUsLN985HakH9lKGeW7m7JKmL5t_bbI8e6KJsLjCpagrEORKUg9X7JmXdR9pn4lbbBzZfnK_OLqGlMIl2TBif4T-PrS2NFedh8bvLw1nBuPqo4nB9iNB0=w900',
      'https://sites.google.com/sitesv-images-rt/APXyLQeaYefSWUKv6LDzfuIDSVj4LMtrsJ3UN8MI1j1K-kmg80Ksa3bOaq7_f1OImeO-hpe_tSsRSRu4h6s7nLq9JSlZZhZuLDHqHqFHO1GOj1ugRrY9Uz1uhg14_k1sQgFjumhqKkSKO8jJbOjedH1yPv1rzqJHz5o8QWK14F0-aJeUi7oltHSen4ZOtQDp0OE=w900',
      'https://sites.google.com/sitesv-images-rt/APXyLQfKpRntPSLbjxasuepD8r5SNSgBDuKBUuvgRpow36s7StRO23sFQ0y5eVWgDfmWcvvG6UVGZ2f_EqEakKdnLQ9r3os7watQI9J3mRoANef9Z1iTOm0v5n9sZcX9QehC_UqWtw72LYfQhd19Bb8vOK9Ji78ppHbIM4vUFbg584nQKh8NKCh9dOHpYQpAWZ0=w900',
      'https://sites.google.com/sitesv-images-rt/APXyLQeXlJco3wBugV-fL1nRGVwJhJDX3q-luyt9thCj--18O_wcBUJUdI7tqlZHvrY-G8pHa8IWNpLwplx2IEvJCbCE8XicWfybWy8Ob_m5aBiD-FVzSmKL1R5GeuXUY_n4bVG6OcabIt2iM5zHPalxfpa_gTAmSDag8gRm5uvyoExEDWfockv4_01js9mOM50=w900'
    ]
  },
  {
    id: 119,
    name: 'CoDesk Coworking Spaces',
    badge: 'Verified',
    rating: 4.5,
    area: 'Vijaynagar',
    location: 'Vijaynagar, Sangli',
    address: '2nd Floor, Office No. 203, Govind Mali\'s Icon Building, Sangli Miraj Road, Vijaynagar, Sangli',
    price: '₹4,200',
    period: '/ Month',
    priceFormatted: '₹4,200 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1286455354207566706'),
    images: [
      'https://res.cloudinary.com/dkvhpsuxj/image/upload/v1787843099/users/mcfjuh771gdaj4nqvpt0.jpg',
      'https://res.cloudinary.com/dkvhpsuxj/image/upload/v1787843102/users/qhnnhiyegkhai5uz3jqk.jpg'
    ]
  }
];

// Spaces with no genuine photos found are left out of the site entirely.
// Operating, but no genuine photos of the space published yet.
export const sangliCoworkingPendingPhotos = [];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const sangliSpaces = sangliCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const sangliNeighborhoods = Object.entries(
  sangliSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const sangliOfficeCards = sangliSpaces.slice(0, 8);
export const moreSangliOfficeCards = sangliSpaces.slice(8, 16);
export const finalSangliOfficeCards = sangliSpaces.slice(16, 24);
export const featuredSangliOfficeCards = sangliSpaces.slice(24);

export const sangliAreas = sangliNeighborhoods;

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
// Sangli Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allSangliOfficeCards = sangliSpaces;

export const getSangliOfficeCardById = (id) => findOfficeBySlug(allSangliOfficeCards, id, "sangli");
export const getSangliOfficeSlug = (space) => officePath(allSangliOfficeCards, space, "sangli");

// ============================================================================
// Top Coworking Locations in Sangli (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topSangliCoworkingLocations = sangliNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: sangliSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
