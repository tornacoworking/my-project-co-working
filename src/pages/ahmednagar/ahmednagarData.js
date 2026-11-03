import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Ahilyanagar (Ahmednagar) coworking — Google Maps data, fetched Nov 2, 2026.
// Only one verified coworking space exists in the city. No published price, phone or hours.
// Google photo URLs can expire — refresh via the Places API before production.

export const ahmednagarSpaces = [
  {
    id: 1,
    name: 'Cozy Coworking',
    badge: 'Top Rated',
    rating: 5.0,
    reviewCount: 6,
    area: 'Sahakar Nagar',
    location: 'Sahakar Nagar, Ahilyanagar',
    address: '1st Floor, Bhagawati Towers, Pipeline Rd, near Bharat Gas Godown, Meghraj Colony, Sahakar Nagar, Ahilyanagar, Maharashtra 414003',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7109497752792594117',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfXovkH9dB_G2eFvPu4_xGTyNHNMwb8foRV_P_wzvFbbl3WRhiLzRVO0xXXwhsvxS-7lIc6W8pEA42HVGaVeRh9N9u9ffFTV4tDdd5SYSTEoRwDdmV3txy52_miC2My1z-S8IY0Fq-gfK1v=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdWRrYrRAjStMt04li5zwim_yMK2kf438dw7G-nk7iyCDLILM2yBXB39EORTG3N21aDlNZUvOwl9P_dwh6oGLoCzVfNLB-23-DsAuUhbIHytCGC6_zo7MebvqF3SDPCLh6zPFQpEYOCQVeh=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdDAysCTyu3kuZdQ6ARH7wVhmqdf90Q08sRabeClPbk0FGX_CAr4RVwnrmor38XRwKeVLXKZk59YJGaMRltGNYXsAFNSHftR-SAaxdCs-GZw-pd4mQOHM1E4wOmDJGvb32t3-8pYlCTjzcw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcEJJtSfYX5SkoN7jNy3MDtTA7S3qRfRKnRPttxtL8reP3LUpVNdrzE0-kPoDS3T7B99swdR9n_MiM8txVI3dVzeFgAyjgCTcMPZY1fIWCaPOn3sPwWmIWs3ci6TkkZs7Zo4X4ne1zvyf3k=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfnhzmXy54KND8QN7e5jhnCkGbLdM5gx9_q5Q8tsUIQ8ZDfT9fch41yUVYe5OED6HxIfMlivohmsdO8PEcP6w7_nmpsgpYl2l3lwAM64kN5PDguKcZ3NvF1-VMR-Wv_xZb0GAS06rUF450=s4800-w800-h600'
    ]
  }
];

export default ahmednagarSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const ahmednagarNeighborhoods = Object.entries(
  ahmednagarSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const ahmednagarOfficeCards = ahmednagarSpaces.slice(0, 8);
export const moreAhmednagarOfficeCards = ahmednagarSpaces.slice(8);

export const ahmednagarAreas = ahmednagarNeighborhoods;

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
// Ahmednagar Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allAhmednagarOfficeCards = ahmednagarSpaces;

export const getAhmednagarOfficeCardById = (id) => findOfficeBySlug(allAhmednagarOfficeCards, id, "ahmednagar");
export const getAhmednagarOfficeSlug = (space) => officePath(allAhmednagarOfficeCards, space, "ahmednagar");

// ============================================================================
// Top Coworking Locations in Ahmednagar — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAhmednagarCoworkingLocations = ahmednagarNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: ahmednagarSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
