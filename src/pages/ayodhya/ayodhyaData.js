import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Ayodhya (incl. Faizabad) coworking spaces — Google Maps + Office Hub data, fetched Nov 2, 2026.
// Google photo URLs can expire — refresh via the Places API before production.

export const ayodhyaSpaces = [
  {
    id: 1,
    name: 'Cubicles | Co-Working Spaces',
    badge: 'Top Rated',
    rating: 4.8,
    reviewCount: 12,
    area: 'Deokali',
    location: 'Deokali, Ayodhya',
    address: 'Avdhut Nagar, near Prem Kunj Garden, Deokali, Faizabad (Ayodhya), Uttar Pradesh 224135',
    phone: '+91 90268 15200',
    hours: '10:00 AM – 8:00 PM, daily',
    amenities: ['Dedicated Desks', 'Meeting Areas', 'Coffee', 'Printing', 'Mail Handling', 'Storage', 'Reception'],
    capacity: 16,
    price: '₹3,000',
    period: '/ month',
    priceFormatted: '₹3,000 / month',
    priceNote: 'Per desk, Office Hub listing (1–16 desks available)',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3170817257395596178',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdJET8rqunB4vNhP9wPFj-HNlVQIh3-E0t4rw75EnLcfmlQWM6gb1_JPC-p-99Rtiz4lSLbolLwYRRu0Fqh7EC9NQwLKUh6_UdVvT5yO2QN2uO95HrHaG5DuMDow3s7Ew7InPEhYg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfa5hT0NqgHeMUlf2Br3xWg5fgBgNjSxwkUKa1qUQ3IhibYCsNJb7RQ2UPpO5-zXHq3djgRLic3HEcTNonFw9Sh_nhFcc-fyXRgwtBtM413NghVcaJ8SE8wajxAUyASrUsTqTOi7w=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe2S93UkdMGO1m6HPGvFfluKScMm7F9k-X1sEcOxxP2BK5cXFN0FHig6bHd8wyxXokWMp3w4HEvCrdFfzUTKqOX9DvHY0EwMd8o9b0O8P5igR-b0kD6LU3OzhGozDGut9hQDhJ6Wg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfOUDZf4hl80MM8Xza34ILTTpXnbVtAjPN3qX6EXeEII-0dNDLCphaVG65ycRVP9tyix1uikUUsRLdl1zHBpeSBRFysZuBFib6Jriu_26esbHYHY4SxkWc2T-DUn5kvjIUCBhgw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfhAJM1Wfh_SAqtxsVs8fowI9RYNXzHfXM4bHZq8fkkQKpQjPb_C__d1ga6dMAN-CN6rag5Iaqq7kP7DiqGOy_Btv1mLdWQ3HfVMIKgfhhxL3GK7FBMzTTmYd-y2fFig19jZ20e3g=s4800-w800-h600'
    ]
  },
  {
    // Low confidence: only 1 review, no phone or hours listed — verify before publishing.
    id: 2,
    name: 'Mooz Offices India Pvt Ltd',
    badge: 'New',
    rating: 5.0,
    reviewCount: 1,
    area: 'Saketpuri',
    location: 'Saketpuri, Ayodhya',
    address: 'Q5GG+2V6, Saketpuri, Ayodhya Rd, Ashapur, Faizabad (Ayodhya), Uttar Pradesh 224001',
    phone: null,
    hours: null,
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7538111381281412080',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeujwjo2bXigSnhBeJjoHCfHDJ1t1PYHz-MDuIDYWSNonrYR6fCuMTj0teE6zeVj9FEzmZqAomPs9X-gToNde1549ZJ8J_sGHW7oXNhf-7NC1nozQkvL61H_0eIt9LE6yGDMaSxWZHGI_hb=s4800-w800-h600'
    ]
  }
];

export default ayodhyaSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const ayodhyaNeighborhoods = Object.entries(
  ayodhyaSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const ayodhyaOfficeCards = ayodhyaSpaces.slice(0, 8);
export const moreAyodhyaOfficeCards = ayodhyaSpaces.slice(8);

export const ayodhyaAreas = ayodhyaNeighborhoods;

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
// Ayodhya Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allAyodhyaOfficeCards = ayodhyaSpaces;

export const getAyodhyaOfficeCardById = (id) => findOfficeBySlug(allAyodhyaOfficeCards, id, "ayodhya");
export const getAyodhyaOfficeSlug = (space) => officePath(allAyodhyaOfficeCards, space, "ayodhya");

// ============================================================================
// Top Coworking Locations in Ayodhya — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAyodhyaCoworkingLocations = ayodhyaNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: ayodhyaSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
