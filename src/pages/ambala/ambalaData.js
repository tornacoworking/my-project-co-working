import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Ambala coworking spaces — Google Maps + myHQ / Office Hub / Regus data, fetched Nov 2, 2026.
// Coworking operators only. 4 listings in Ambala City + Ambala Cantt.
// Note: id 1 (MySoho) and id 4 (IA Spaces) share the same address — India Accelerator
// acquired MySOHO in Sep 2025. Kept as separate entries on request.
// Google photo URLs can expire — refresh via the Places API before production.

export const ambalaSpaces = [
  {
    id: 1,
    name: 'MySoho Coworking (IA Spaces) - Citi Plaza',
    badge: 'Popular',
    rating: 4.6,
    reviewCount: 25,
    area: 'Patti Mehar',
    location: 'Patti Mehar, Ambala City',
    address: 'Citi Plaza Mall, adjoining Bal Bhawan, near Aggarsain Chowk, Patti Mehar, Ambala, Haryana 134003',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Air Conditioning', 'Coffee & Tea', 'Printer', 'Projector', '24/7 Security', 'Parking'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    website: 'https://www.mysoho.co/',
    googleMapsUrl: 'https://maps.google.com/?cid=14778775548652626851',
    images: [] // No photos on Google Maps — add from operator
  },
  {
    id: 2,
    name: 'MyBranch - Coworking Space in Ambala',
    badge: 'Top Rated',
    rating: 5.0,
    reviewCount: 17,
    area: 'Sadar Bazar',
    location: 'Sadar Bazar, Ambala Cantt',
    address: '3rd Floor, Sudershan Towers, Plot No 6342-43, Nicholson Road, above AU Small Finance Bank, Punjabi Mohalla, Sadar Bazar, Ambala Cantt, Haryana 133001',
    phone: '+91 84519 99506',
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Private Offices', 'Lift', 'Reception', 'Coffee & Tea'],
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    priceNote: 'Per seat, derived from Office Hub private-office listings (5 seats ₹35,000; 7 seats ₹49,000), 12-month term',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17596021428824585075',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfNfrgfkqs4J121AcBrDqykYaJkGiqnMb5l-XTCFmlOuYNyA8C6VGNT6UV7ZFUQ0v7aLaZFaLLreF716j3twmcfv2BpCi2jDV4Qvujq4BzbRqnrEBvH8xuaRzq7YwOrY9Qw7TqUEyzoz0og=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLecjBgfhy-F5ppx0gMYmuFe5McQL4gUadweHDvkUCg08NJvnKpSLzDaCzsoDvCYce6lspQyDA-3PBleHrnbdB8lsLLJD5Sqk7EaXlNdFUVsdzgDS2kXdS5ZepazAJt1HfHMoLBL-plM72I=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLerP7cLO27F3BGuKjMe6ui0ZDTORBfpM084v9Y6UrD5GpiCmm2KDLjrQ25rXDhTequimw4U9FmI4hOc3lZEZRnuFojypDTlkNPp7Sl3H0HnwMQrDYelawtT2Gq4nq04wjMJOWm3MJLtJeIj=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcyQrhuT1X0hyC7Wo_gWMm8IErPpT4e3VH5SNAauo8f0qIAnwiBej0n70olHz3URLmBMu6qWyuyOFrpTm9h3AGLrcuO5NgJSkO0uMb1-88TgRHRrqfZZm-Rh3lY91L2FFyU6MxD1AhCi_7Z=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdn0Jja8gxYXlOLUEpiXxK7fsoO5vf0vRXTO0xp8uj335IKvX0J4vpdiggVhnFbkkB9lPnYjE9F3h3aEcWLyqXd3B5XVdpf1-oyZL-sP8kSaK99kzP3dejs4PS7yvmzxKhWcMaISAnhssQ=s4800-w800-h600'
    ]
  },
  {
    id: 3,
    name: 'Regus - Galaxy Mall',
    badge: 'Premium',
    rating: null,
    reviewCount: 0,
    area: 'Model Town',
    location: 'Model Town, Ambala City',
    address: '3rd Floor, Galaxy Mall, Model Town Rd, Model Town, Sector 7, Ambala, Haryana 134003',
    phone: '+91 33 6136 3848',
    hours: 'Open 24 hours',
    amenities: ['Hot Desks', 'Dedicated Desks', 'Private Offices', 'Meeting Rooms', 'Virtual Office'],
    price: '₹170',
    period: '/ day',
    priceFormatted: 'From ₹170 / day',
    priceNote: 'Regus dedicated desk "from" price for Ambala (regus.com/en-in); day coworking from ₹390/day. Rates vary by contract length.',
    ctaText: 'Get Quote',
    website: 'https://www.regus.com/en/in/10191',
    googleMapsUrl: 'https://maps.google.com/?cid=14845845880300261475',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf6FkZ_Idq2M2hhkIB8Obr54QNV8VEvcdzzZlhkEvpF3rKfqYvNRPMKLweHKYmBlDn0AsN93IBfL9RR3uRSS4AJ1HKYd30c2heQDmeQugpnVngRsy3S3JVXic2qYaH7pPPEwKvDCGBLwWq-=s4800-w800-h600'
    ]
  },
  {
    // Data from myHQ listing. Same address as id 1 (MySoho) — India Accelerator acquired MySOHO in Sep 2025.
    id: 4,
    name: 'IA Spaces By India Accelerator - Citi Plaza',
    badge: 'Top Rated',
    rating: 4.9,
    reviewCount: 37,
    area: 'Patti Mehar',
    location: 'Patti Mehar, Ambala City',
    address: 'Citi Plaza Mall, adjoining Bal Bhawan, near Aggarsain Chowk, Patti Mehar, Ambala, Haryana 134003',
    phone: null,
    hours: '9:30 AM – 8:30 PM, Mon–Sat (Sun closed)',
    amenities: ['Meeting Rooms', 'Air Conditioning', '2 Wheeler Parking'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    priceNote: 'myHQ: "Prices available upon request"',
    ctaText: 'Get Quote',
    sourceUrl: 'https://myhq.in/dedicated/coworking-space/mysoho-pattimehar',
    googleMapsUrl: 'https://maps.google.com/?cid=14778775548652626851',
    images: []
  }
];

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Shown for spaces with no photos yet (same placeholder the Noida / Chennai pages use).
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';

export const allAmbalaOfficeCards = ambalaSpaces.map((space) => ({
  ...space,
  city: 'Ambala',
  images: space.images.length > 0 ? space.images : [FALLBACK_IMAGE]
}));
export default ambalaSpaces;

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const ambalaNeighborhoods = Object.entries(
  allAmbalaOfficeCards.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const ambalaOfficeCards = allAmbalaOfficeCards.slice(0, 8);
export const moreAmbalaOfficeCards = allAmbalaOfficeCards.slice(8);

export const ambalaAreas = ambalaNeighborhoods;

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
// Ambala Office Cards Lookup Helper
// ============================================================================
export const getAmbalaOfficeCardById = (id) => findOfficeBySlug(allAmbalaOfficeCards, id, "ambala");
export const getAmbalaOfficeSlug = (space) => officePath(allAmbalaOfficeCards, space, "ambala");

// ============================================================================
// Top Coworking Locations in Ambala — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAmbalaCoworkingLocations = ambalaNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: allAmbalaOfficeCards.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
