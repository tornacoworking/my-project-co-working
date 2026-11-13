import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Siliguri (West Bengal) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const siliguriSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-siliguri-goyal-plaza , https://www.qdesq.com/brand/my-branch/sevoke-road-siliguri-slr003 , https://gofloaters.com/office-space/gooffice-40406-4-seater-private-cabin-goyal-plaza-siliguri/ , https://gofloaters.com/office-space/gooffice-40407-dedicated-desks-goyal-plaza-siliguri/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Sevoke Road',
    location: 'Sevoke Road, Siliguri',
    address: 'Goyal Plaza Offices, Sevoke Road, Opp Sachitra Hotel, Siliguri, West Bengal - 734001 - Office 9, 1st Floor - Office 5, 2nd Floor',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    deskPrice: '₹8,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/siliguri_rep.webp',
      'https://www.mybranch.co.in/office/office_images/siliguri_caf.webp',
      'https://www.mybranch.co.in/office/office_images/siliguri_cw.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/wownooks/sevoke-road-siliguri-slr004
    id: 2,
    name: 'Wownooks',
    area: 'Sevoke Road',
    location: 'Sevoke Road, Siliguri',
    address: 'Near DL Infiniti, Sevoke Road, Siliguri, West Bengal',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 220,
    price: '₹7,800',
    period: '/ month',
    priceFormatted: '₹7,800 / month',
    deskPrice: '₹7,800',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/4a9212f9f1307d1c36e74cf469c3375d_QQq1cYQyj.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/ab678e34c6cbdff3c44cee6de4b1ab4e_gzh_M-s72.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/f508f359c90298079669e6bca05b94ba_FhbAfuOZq.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/wurk/ward-42-siliguri-slr001
    id: 3,
    name: 'Wurk',
    area: 'Ward 42',
    location: 'Ward 42, Siliguri',
    address: 'Near Check Post, Siliguri, Ward 42, Siliguri, West Bengal',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    capacity: 50,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1580112678/ysnf29qvi3kf0bp7ezfc.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1578040848/yidwglwax4m4er3smyge.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1578040849/zp4dtcj7kgnhbw5xrrrq.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/akasa-coworking/sevoke-rd-siliguri-slr002
    id: 4,
    name: 'Akasa CoWorking',
    area: 'Sevoke Rd',
    location: 'Sevoke Rd, Siliguri',
    address: 'Near Orchid Tower, Sevoke Rd, Siliguri, West Bengal',
    phone: null,
    hours: '8:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 15,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1641284146/rsihey8yd8w63hepdnyv.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1641284107/wd9o49iscrhamzcknl0g.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1641284107/i6zijvbxwnbrcdozzsdc.webp'
    ]
  }
];

export default siliguriSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const siliguriNeighborhoods = Object.entries(
  siliguriSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const siliguriOfficeCards = siliguriSpaces.slice(0, 8);
export const moreSiliguriOfficeCards = siliguriSpaces.slice(8);

export const siliguriAreas = siliguriNeighborhoods;

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
// Siliguri Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allSiliguriOfficeCards = siliguriSpaces;

export const getSiliguriOfficeCardById = (id) => findOfficeBySlug(allSiliguriOfficeCards, id, "siliguri");
export const getSiliguriOfficeSlug = (space) => officePath(allSiliguriOfficeCards, space, "siliguri");

// ============================================================================
// Top Coworking Locations in Siliguri — one tile per area, using a photo from a space in that area
// ============================================================================
export const topSiliguriCoworkingLocations = siliguriNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: siliguriSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
