import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Jammu (Jammu and Kashmir) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const jammuSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-jammu-residency-road
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Residency Road',
    location: 'Residency Road, Jammu',
    address: '2nd Floor, KC Plaza, Residency Road, Jammu 181001',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    capacity: 150,
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/1785151066_big-cabins.webp',
      'https://www.mybranch.co.in/office/office_images/1785151066_meeting-room.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/qubicle-coworking/trikuta-nagar-jammu-jam006
    id: 2,
    name: 'Qubicle Coworking',
    area: 'Trikuta Nagar',
    location: 'Trikuta Nagar, Jammu',
    address: 'Near PNB Bank, Trikuta Nagar, Jammu, Jammu and Kashmir',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 45,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/356e93aee8885f200d20c1b2f84ca1ef_1w1XYyFCb.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/15faa975c60b37481811f0aa10166b8f_yuBRmLdEQ.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/e54eea963e6384bdc76b537de211e375_OiJTyGxY5.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/8e6a68b950c8cbf6e1fa02e61071c88b_QY7-AjJ8Y.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/kaytech-coworking-space/ajit-nagar-jammu-jam004
    id: 3,
    name: 'Kaytech Coworking Space',
    area: 'Ajit Nagar',
    location: 'Ajit Nagar, Jammu',
    address: 'Kaytech House, near Jammu Airport, Ajit Nagar, Jammu, Jammu and Kashmir',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Mail Handling', 'Meeting Rooms'],
    capacity: 30,
    price: '₹8,800',
    period: '/ month',
    priceFormatted: '₹8,800 / month',
    deskPrice: '₹8,800',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1707134137/jcimvgchgnlhuakblmrg.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1707896339/ucjahzheh1xsqaejduhi.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1707896339/nzebqnpncswklaa6pefn.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1707896340/lk6fk0spcal2hptpbncw.webp'
    ]
  }
];

export default jammuSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const jammuNeighborhoods = Object.entries(
  jammuSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const jammuOfficeCards = jammuSpaces.slice(0, 8);
export const moreJammuOfficeCards = jammuSpaces.slice(8);

export const jammuAreas = jammuNeighborhoods;

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
// Jammu Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allJammuOfficeCards = jammuSpaces;

export const getJammuOfficeCardById = (id) => findOfficeBySlug(allJammuOfficeCards, id, "jammu");
export const getJammuOfficeSlug = (space) => officePath(allJammuOfficeCards, space, "jammu");

// ============================================================================
// Top Coworking Locations in Jammu — one tile per area, using a photo from a space in that area
// ============================================================================
export const topJammuCoworkingLocations = jammuNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: jammuSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
