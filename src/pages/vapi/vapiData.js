import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Vapi, ordered area by area.
// Sources: Google Maps first (listing, rating, address, photos), then myHQ and Regus.
// Every photo belongs to that specific space and was checked visually: people, events,
// graphics and duplicates were removed. Vapi has very few coworking spaces — business
// "centres" that are really shopping/office complexes (Capital Business Center, Solitaire
// Business Centre) and networking groups (StartupVapi) are excluded. Checked 12 Nov 2026.

const G = (id) => `https://lh3.googleusercontent.com/${id}=w1200-h800-k-no`;
const MYHQ = (path) => `https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/${path}`;
const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const vapiCoworking = [
  // ───────────── GIDC ─────────────
  {
    id: 1,
    name: 'Calm Se Kaam',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'GIDC',
    location: 'GIDC Phase 3, Vapi',
    address: 'Office 203, D Building, Fortune Landmark, opp. Vishal Mega Mart, Phase 3, GIDC, Vapi, Gujarat',
    // Office 203, D Building, Fortune Landmark, opp. Vishal Mega Mart, Phase 3, GIDC · 12 Google reviews
    // (myHQ still shows its earlier address: 105, Arihant Complex, Ajit Nagar, Phase 2, GIDC, 396195)
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('16192719232074936499'),
    images: [
      G('grass-cs/AABkmLdP9Eh4V9cHoN8gQEJKNJR3xDCC3K2IdBvWbi_PZfokGqVQqm6umTJAM0xh0wxchpgP_5n9b6xUgAg2me30k79zmIb91pZdacvN5hpbL9nnWIW1sKH0nyxT4m4vXBJdZ31vbbgY'),
      G('grass-cs/AABkmLf530sbJUrFfJik__VUHGddZGMBmMVxTNXjBggYeuVYUcBPpn-ZV6eIHe1VigAYiuT7xXMpnCPeu_uAXtLGYfUD3lZ_RvJS7xOG2FwrOCXrnp0wz0JiyCrKC7Tq13kaDfkzouUc'),
      MYHQ('calm-se-kaam-gidc/8fy92n.jpg'),
      G('gps-cs-s/ANWiy9RaufgFAbiKTfD-E9ZybrrHfqcrhJc6U_rjEcuScs9PNdJDkgnr-7NpTjJzbO3QdmnDa6S3SOIaVZdYD5i1auSqqvaM7mmtyYvIM004KC92U3Ip8ruwO_ogF2szgf_eP84qIZZ2'),
      G('grass-cs/AABkmLeMWEDwKi824j0jT_r5ECfUaYp81z2cArseYrFlVeYA1pVM9eCciV4KflNXmy0JuKcubvWGl9P46M6QFkytG1M_RwRTaJ07AyWGfEPzL-wkS6N6oiw2mQCklwkefuKwfHCZvr9e'),
      G('grass-cs/AABkmLd-e0Ob1JjPEgQNWoWqX3i7BIWSSNfZxjycPR-eDveJ-pRyfRBwaahDDkZCEYO9RRnWTachygqAmK1erpcWc5QX4I_8__dHX8p3mRqRpndqC8ZbfsZ2MTiGqxz0tR9wsXoxcszXKQ')
    ]
  }
];

// Announced / opening, but no genuine photos of the space published yet.
export const vapiCoworkingPendingPhotos = [
  {
    id: 2,
    name: 'Regus – I Square',
    badge: 'Premium',
    rating: null,
    area: 'Chala',
    location: 'Chala, Daman Road, Vapi',
    // 4th Floor, Office 401–404, I Square, Chala Daman Road, Vapi, 396191 · Regus lists it as "opening soon" (earlier "Opens June 2026") · not yet on Google Maps
    price: 'On Request',
    period: '/ Month',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=I+Square+Chala+Daman+Road+Vapi',
    images: []
  }
];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const vapiSpaces = vapiCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const vapiNeighborhoods = Object.entries(
  vapiSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const vapiOfficeCards = vapiSpaces.slice(0, 8);
export const moreVapiOfficeCards = vapiSpaces.slice(8, 16);
export const finalVapiOfficeCards = vapiSpaces.slice(16, 24);
export const featuredVapiOfficeCards = vapiSpaces.slice(24);

export const vapiAreas = vapiNeighborhoods;

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
// Vapi Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allVapiOfficeCards = vapiSpaces;

export const getVapiOfficeCardById = (id) => findOfficeBySlug(allVapiOfficeCards, id, "vapi");
export const getVapiOfficeSlug = (space) => officePath(allVapiOfficeCards, space, "vapi");

// ============================================================================
// Top Coworking Locations in Vapi (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topVapiCoworkingLocations = vapiNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: vapiSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
