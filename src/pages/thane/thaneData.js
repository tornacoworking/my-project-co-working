import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Thane (Maharashtra) coworking spaces, compiled 13 Nov 2026 from coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - 888 Office Spaces – Virtual Offices, Private Cabins, Co – Working Spaces &#038; Conference Rooms (outside Thane: Landmark IT Park, Bhayandar, Bhayandar West, Mira Bhayandar, Maharashtra, India)
//  - Ausum Coworking &#038; Business Centre (outside Thane: Office No. 311, SPACES 912, Mira Bhayandar Rd, above Brand Factory, Pleasant Park, Mira Road East, Thane, Maharashtra 401107)
//  - My Cute Office Affordable Co-Working (address not in Thane: Near Me)
//  - Redbrick Offices Ltd. (address not in Thane: none)
//  - LearnAtSierra (not an office)
//  - WorkAmp 59 (Thane) (closed)
//  - iKeva BKC Annexe (closed)
//  - WorkAmp Nitco ( Temporarily closed ) (closed)
//  - AccessWork Thane (closed)
//  - Innov8 Vikhroli ( Permanently closed ) (closed)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const thaneSpaces = [
  {
    // Sources: https://coworkingers.com/india/maharashtra/mumbai/thane/wework-zania/
    id: 1,
    name: 'WeWork Zenia',
    area: 'Hiranandani Business Park',
    location: 'Hiranandani Business Park, Thane',
    address: 'Zenia Building Hiranandani Circle, Hiranandani Business Park, Thane, Maharashtra 400607',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'Car / Bike Parking', 'High Speed WiFi', 'Pantry', 'Printer'],
    price: '₹8,400',
    period: '/ month',
    priceFormatted: '₹8,400 / month',
    deskPrice: '₹8,400',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/WeWork-﻿Thane-002-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/WeWork-﻿Thane-003-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/mumbai/thane/kontor-space/
    id: 2,
    name: 'Kontor Space',
    area: 'Neheru Nagar',
    location: 'Neheru Nagar, Thane',
    address: 'Ashar IT Park, Jayashri Baug, Road Number 16/Z, Neheru Nagar, Wagle Industrial Estate, Thane West, Thane, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Pantry', 'Lounge', 'Mail Handling', 'Car / Bike Parking', 'Printer'],
    price: '₹6,600',
    period: '/ month',
    priceFormatted: '₹6,600 / month',
    deskPrice: '₹6,600',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/Kontor-Space-Thane-001-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Kontor-Space-Thane-002-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Kontor-Space-Thane-003-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/mumbai/thane/%ef%bb%bf%ef%bb%bf%ef%bb%bf%ef%bb%bfredbrick-offices/
    id: 3,
    name: 'Redbrick Offices',
    area: 'Next to Ashar IT Park',
    location: 'Next to Ashar IT Park, Thane',
    address: 'Kalpataru Prime 4th Floor Ambika Nagar, Plot No. D-3 Road Number 16, Next to Ashar IT Park, Wagle Industrial Estate, Thane West, Thane, Maharashtra 400604',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Tea/Coffee', 'High Speed WiFi', 'Lounge', 'Car / Bike Parking', 'Storage', 'Printer'],
    price: '₹15,000',
    period: '/ month',
    priceFormatted: '₹15,000 / month',
    deskPrice: '₹15,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/﻿Redbrick-Offices-Thane-001-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/﻿Redbrick-Offices-Thane-002-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/﻿Redbrick-Offices-Thane-003-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/mumbai/thane/wework/
    id: 4,
    name: 'WeWork Thane',
    area: 'Hiranandani Business Park',
    location: 'Hiranandani Business Park, Thane',
    address: 'Zenia Building Hiranandani Circle, Hiranandani Business Park, Thane, Maharashtra 400607',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Housekeeping', 'Car / Bike Parking', 'High Speed WiFi', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2021/10/20190131_WeWork_Zenia_-_Common_Areas_-_Wide-2.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/20190131_WeWork_Zenia_-_Common_Areas_-_Couch_Area-3.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/20190131_WeWork_Zenia_-_Common_Areas_-_Couch_Area-1.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/ascend-offices-pvt-ltd/
    id: 5,
    name: 'Ascend Offices',
    area: 'Khopat',
    location: 'Khopat, Thane',
    address: 'Dev Corpora, Eastern Express Hwy, opp. Cadbury Junction, Khopat, Thane West, Thane, Maharashtra 400601',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/Screenshot-2023-07-30-205746.png',
      'https://coworkingers.com/wp-content/uploads/2023/07/Screenshot-2023-07-30-205848.png',
      'https://coworkingers.com/wp-content/uploads/2023/07/Screenshot-2023-07-30-205929.png'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/ecoworks-co-working-space-thane/
    id: 6,
    name: 'EcoWorks Co-working Space Thane',
    area: 'Anand Nagar',
    location: 'Anand Nagar, Thane',
    address: 'Modi Business Park, Sai Nagar, Anand Nagar, Thane West, Thane, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Lounge', 'Car / Bike Parking', 'Storage', 'Printer'],
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    deskPrice: '₹5,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/6.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/2023-05-15.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/clay-studio-co-working/
    id: 7,
    name: 'Clay Studio & CO-Working',
    area: 'Hill Garden',
    location: 'Hill Garden, Thane',
    address: 'Kothari Industries, Hill Garden, Manpada, Thane West, Thane, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Mail Handling', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/Screenshot-2023-07-30-205432.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/Screenshot-2023-07-30-205519.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/Screenshot-2023-07-30-205547.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/awfis-bhairav-milestone/
    id: 8,
    name: 'Awfis Bhairav Milestone',
    area: 'Thane',
    location: 'Thane, Thane',
    address: 'Wagle Industrial Estate, Thane West, Thane, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Mail Handling', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹26,000',
    period: '/ month',
    priceFormatted: '₹26,000 / month',
    deskPrice: '₹26,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/1649749450821.png',
      'https://coworkingers.com/wp-content/uploads/2023/07/1649749471474.png',
      'https://coworkingers.com/wp-content/uploads/2023/07/1649749480606.png'
    ]
  }
];

export default thaneSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const thaneNeighborhoods = Object.entries(
  thaneSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const thaneOfficeCards = thaneSpaces.slice(0, 8);
export const moreThaneOfficeCards = thaneSpaces.slice(8);

export const thaneAreas = thaneNeighborhoods;

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
// Thane Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allThaneOfficeCards = thaneSpaces;

export const getThaneOfficeCardById = (id) => findOfficeBySlug(allThaneOfficeCards, id, "thane");
export const getThaneOfficeSlug = (space) => officePath(allThaneOfficeCards, space, "thane");

// ============================================================================
// Top Coworking Locations in Thane — one tile per area, using a photo from a space in that area
// ============================================================================
export const topThaneCoworkingLocations = thaneNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: thaneSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
