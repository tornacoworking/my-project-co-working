import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Panchkula (Haryana) coworking spaces, compiled 13 Nov 2026 from qdesq.com, coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - Workyard Coworking (Qdesq lists it in Zirakpur, Sector 20, Zirakpur)
//  - IDEA COWORKING (Qdesq lists it in Peer Muchalla, Zirakpur)
//  - Saludos (Qdesq lists it in Tribune Colony, Sahibzada Ajit Singh Nagar)
//  - MySoho (Qdesq lists it in Industrial Area Phase I, Chandigarh)
//  - The Study Cafe Library (not an office)
//  - The Power Study Cafe (not an office)
//  - Next57 Coworking Space Industrial Area Chandigarh (address not in Panchkula: none)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const panchkulaSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/work-nest/sector-5-panchkula-pan016
    id: 1,
    name: 'Work Nest',
    area: 'Sector 5',
    location: 'Sector 5, Panchkula',
    address: 'Near Ansal Sampark, Sector 5, Panchkula, Haryana',
    phone: null,
    hours: '8:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Mail Handling', 'Air Conditioning'],
    capacity: 50,
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/3161a77623e97b5d5cff348bdcd47d3c_7y7Hu3DPi.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/16add7ecc573e2778f4b7ab6f4c4050f_B5_20ciyq.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/fe36b8eacafabd6bd56ecbc1ad5f4883_Tdj4RExkv2.jpeg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/starthubnation/sector-22-panchkula-pan003
    id: 2,
    name: 'Starthubnation',
    area: 'Sector 22',
    location: 'Sector 22, Panchkula',
    address: 'Near Panchkula IT Park, Sector 22, Panchkula, Haryana',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms', 'Mail Handling'],
    capacity: 32,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1591082876/hk502kghl0p3wqmfwgnl.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1591083232/ucuf4op2lsmszlheghkz.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1591083233/yrbpamamfashibcgseac.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/podha/sector-8-panchkula-pan014
    id: 3,
    name: 'Podha',
    area: 'Sector 8',
    location: 'Sector 8, Panchkula',
    address: 'Near Peninsula Hotel, Sector 8, Panchkula, Haryana',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Mail Handling'],
    capacity: 30,
    price: '₹13,500',
    period: '/ month',
    priceFormatted: '₹13,500 / month',
    deskPrice: '₹13,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1719484174/ceww9urbtaed7bcne6mf.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1719484084/lq2ccwephoxi5vvvmexk.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1719484084/zlzapuwauhdsgt3ubj7z.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/workcave-coworking/sector-20-panchkula-pan012
    id: 4,
    name: 'Workcave Coworking',
    area: 'Sector 20',
    location: 'Sector 20, Panchkula',
    address: 'Near Sector 20 Market, Sector 20, Panchkula, Haryana',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Lounge', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 100,
    price: '₹6,600',
    period: '/ month',
    priceFormatted: '₹6,600 / month',
    deskPrice: '₹6,600',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1699341673/aomhmktmpvklahwvx2yp.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1699341654/l5ijqmg738uwonhntmxk.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1699341621/q2tfl6uepluqqsbzl1yh.webp'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/idea-coworking/
    id: 5,
    name: 'Idea Coworking',
    area: 'Sector 20',
    location: 'Sector 20, Panchkula',
    address: 'DMART PEERMUCHALLA, Peer Muchalla Road, behind Sector 20, Sector 20, Panchkula, Punjab',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹3,000',
    period: '/ month',
    priceFormatted: '₹3,000 / month',
    deskPrice: '₹3,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/WhatsApp-Image-2022-10-04-at-2.47.55-PM-1-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/WhatsApp-Image-2022-10-04-at-2.47.55-PM-2-min.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/coworking-labs/
    id: 6,
    name: 'Coworking Labs',
    area: 'Dhakoli',
    location: 'Dhakoli, Panchkula',
    address: 'Mamta Enclave, Dhakoli, Panchkula, Punjab',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'Mail Handling', 'High Speed WiFi', 'Pantry', 'Lounge', 'Car / Bike Parking', 'Printer'],
    price: '₹2,999',
    period: '/ month',
    priceFormatted: '₹2,999 / month',
    deskPrice: '₹2,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/Screenshot-2023-08-02-122946-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/Screenshot-2023-08-02-123020-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/Screenshot-2023-08-02-123046-min.jpg'
    ]
  }
];

export default panchkulaSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const panchkulaNeighborhoods = Object.entries(
  panchkulaSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const panchkulaOfficeCards = panchkulaSpaces.slice(0, 8);
export const morePanchkulaOfficeCards = panchkulaSpaces.slice(8);

export const panchkulaAreas = panchkulaNeighborhoods;

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
// Panchkula Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allPanchkulaOfficeCards = panchkulaSpaces;

export const getPanchkulaOfficeCardById = (id) => findOfficeBySlug(allPanchkulaOfficeCards, id, "panchkula");
export const getPanchkulaOfficeSlug = (space) => officePath(allPanchkulaOfficeCards, space, "panchkula");

// ============================================================================
// Top Coworking Locations in Panchkula — one tile per area, using a photo from a space in that area
// ============================================================================
export const topPanchkulaCoworkingLocations = panchkulaNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: panchkulaSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
