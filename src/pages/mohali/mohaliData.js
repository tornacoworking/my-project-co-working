import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Mohali (Punjab) coworking spaces, compiled 13 Nov 2026 from coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - First Hi-Tech Business Center New Chandigarh (address not in Mohali: none)
//  - StartHub Nation (address not in Mohali: 9R32+P44, 2nd Floor, Tower-A, Odisha Startup Incubation Centre (O-HUB, Sez Rd, Chandaka Industrial Estate, Bhubaneswar, Odisha 751024)
//  - SpaceJam (address not in Mohali: Plot No.1273, 3rd Floor, Sector 82, JLPL Industrial Area, Sahibzada Ajit Singh, Punjab 160055)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const mohaliSpaces = [
  {
    // Sources: https://coworkingers.com/listing/biggbang/
    id: 1,
    name: 'BiggBang',
    area: 'Sector 75',
    location: 'Sector 75, Mohali',
    address: 'Sector 75, Sahibzada Ajit Singh Nagar, Punjab',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/biggbang1-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/coworking-mohali-1536x2048-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/lunch-and-dine-biggbang-min.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/punjab/chandigarh/mohali/begin-coworking/
    id: 2,
    name: 'Begin Coworking Space',
    area: 'Mohali',
    location: 'Mohali, Mohali',
    address: 'Mohali, Punjab',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'High Speed WiFi', 'Mail Handling', 'Printer'],
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/Begin-Coworking-Space-001-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Begin-Coworking-Space-002-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Begin-Coworking-Space-003-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/punjab/chandigarh/mohali/regal-hive-mohali/
    id: 3,
    name: 'Regal Hive',
    area: 'Mohali',
    location: 'Mohali, Mohali',
    address: 'Mohali, Punjab',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/Regal-Hive-Coworking-Space-in-Mohali-002-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Regal-Hive-Coworking-Space-in-Mohali-003-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/punjab/chandigarh/mohali/wotta-workspace/
    id: 4,
    name: 'Wotta Workspace (Chandigarh)',
    area: 'Industrial Area',
    location: 'Industrial Area, Mohali',
    address: 'F-429, Phase 8B, Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 160059',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Car / Bike Parking', 'High Speed WiFi', 'Printer'],
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/Wotta-Workspace-Chandigarh-001-min-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Wotta-Workspace-Chandigarh-002-min-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Wotta-Workspace-Chandigarh-003-min-1.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/next57/
    id: 5,
    name: 'Next57',
    area: 'Sector 74',
    location: 'Sector 74, Mohali',
    address: 'Phase 8B, Sector 74, Sahibzada Ajit Singh Nagar, Punjab',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/Screenshot-2023-08-01-135234-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/Screenshot-2023-08-01-135313-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/Screenshot-2023-08-01-135342-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/the-groove-2/
    id: 6,
    name: 'The Groove',
    area: 'Sector 73',
    location: 'Sector 73, Mohali',
    address: 'Phase 7, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Tea/Coffee', 'High Speed WiFi', 'Mail Handling', 'Car / Bike Parking'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/35a5d99cccc7e4f89231d3b0a2a2f2f1dd0fa925-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/265c692ef3eb5b1181e0fae527223b5fdc139f3d-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/d9b7c4b561ecc24b47c673c60385235c21cc9199-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/flow-workspaces/
    id: 7,
    name: 'Flow Workspaces',
    area: 'JLPL Industrial Area',
    location: 'JLPL Industrial Area, Mohali',
    address: 'Sector 82, JLPL Industrial Area, Sahibzada Ajit Singh Nagar, Punjab',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'High Speed WiFi', 'Lounge', 'Car / Bike Parking', 'Printer'],
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    deskPrice: '₹4,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/banner2-min.png',
      'https://coworkingers.com/wp-content/uploads/2023/08/banner3-min.png'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/flexi-work/
    id: 8,
    name: 'Flexi Work',
    area: 'Sector 75',
    location: 'Sector 75, Mohali',
    address: 'FLEXI TOWER, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'High Speed WiFi', 'Lounge', 'Mail Handling', 'Car / Bike Parking'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-11-19-min.png',
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-11-30-min.png',
      'https://coworkingers.com/wp-content/uploads/2023/08/DSC_0675-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/maxworks-2/
    id: 9,
    name: 'MaxWorks',
    area: 'Industrial Area Phase 1',
    location: 'Industrial Area Phase 1, Mohali',
    address: 'MaxPro Info park, D-38, Industrial Area Phase 1, Sahibzada Ajit Singh Nagar, Punjab 160055',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Mail Handling', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/hslide-1-1-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/hslide-2-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/hslide-3-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/office-on-demand/
    id: 10,
    name: 'Office On Demand',
    area: 'Sector 66',
    location: 'Sector 66, Mohali',
    address: 'Bestech Business Tower, Parkview Residence Colony, Sector 66, Sahibzada Ajit Singh Nagar, Punjab 160062',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/1-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/3-min.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/unimind-coworks/
    id: 11,
    name: 'Unimind Coworks',
    area: 'Sector 75',
    location: 'Sector 75, Mohali',
    address: 'Tower, F-547, UNIMIND LABS PRIVATE LIMITED 5th Floor, Modern, 8A, Industrial Area, Sector 75, Sahibzada Ajit Singh Nagar, Punjab 160055',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Lounge', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/03d3410b6d946d4cddd7d924652c7843-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/8cd5732e5dda49daa201687c4d4627c5-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/Unimind-Coworks-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/next57-jlpl/
    id: 12,
    name: 'Next57 Jlpl',
    area: 'JLPL Industrial Area',
    location: 'JLPL Industrial Area, Mohali',
    address: 'Plot No.C, 130, Sector 82, JLPL Industrial Area, Sahibzada Ajit Singh Nagar, Punjab 140308',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/front-entrance-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_7519-min-scaled.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/lounge-1-min-scaled.jpg'
    ]
  }
];

export default mohaliSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const mohaliNeighborhoods = Object.entries(
  mohaliSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const mohaliOfficeCards = mohaliSpaces.slice(0, 8);
export const moreMohaliOfficeCards = mohaliSpaces.slice(8);

export const mohaliAreas = mohaliNeighborhoods;

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
// Mohali Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allMohaliOfficeCards = mohaliSpaces;

export const getMohaliOfficeCardById = (id) => findOfficeBySlug(allMohaliOfficeCards, id, "mohali");
export const getMohaliOfficeSlug = (space) => officePath(allMohaliOfficeCards, space, "mohali");

// ============================================================================
// Top Coworking Locations in Mohali — one tile per area, using a photo from a space in that area
// ============================================================================
export const topMohaliCoworkingLocations = mohaliNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: mohaliSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
