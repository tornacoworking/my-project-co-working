import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Meerut (Uttar Pradesh) coworking spaces, compiled 13 Nov 2026 from qdesq.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const meerutSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/instaa-office/jattiwara-meerut-mee006
    id: 1,
    name: 'Instaa Office',
    area: 'Roorkee Road',
    location: 'Roorkee Road, Meerut',
    address: 'Near Roorkee Road, Roorkee Road, Meerut, Uttar Pradesh',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 120,
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/a94852a49f4661eceaee70a6f5db2415_wuWP1O8902.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/b896c6441c914ab89312874945710cac_I_kJqst7ss.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/eabdf867a430913c9bb600cb72ca7576_3hizMzfEw.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/instaa-office/garh-road-meerut-mee003
    id: 2,
    name: 'Instaa Office',
    area: 'Garh Road',
    location: 'Garh Road, Meerut',
    address: 'Near The Galleria, Garh Road, Meerut, Uttar Pradesh',
    phone: null,
    hours: '10:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 80,
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/0d1c29a8d36c0b3c598d530036222804_fpwZTpw-5.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/c53ce6dbd7185246b31760cee480db5f_JG6uCw453.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/e82aa4ba58fbf5da2523e023f2b735bd_zwEF7cySZ.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/cubezoned/mangal-pandey-nagar-meerut-mee001
    id: 3,
    name: 'CubeZoned',
    area: 'Mangal Pandey Nagar',
    location: 'Mangal Pandey Nagar, Meerut',
    address: 'Near the yellow chilli restaurant, Mangal Pandey Nagar, Meerut, Uttar Pradesh',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Fri',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1604049449/i045brytzifu2jvbv2pk.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1604049449/xljct7qwza36s4ophvjo.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1604049449/m7vkegdd98t2bplwzqts.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/instant-coworking/shastri-nagar-meerut-mee008
    id: 4,
    name: 'Instant Coworking',
    area: 'Shastri Nagar',
    location: 'Shastri Nagar, Meerut',
    address: 'Near Sector 1, Shastri Nagar, Meerut, Uttar Pradesh',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 80,
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/e432f5febcb70700006deb8f71f5b62a_XriG_7gkL.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/d4f922241480bb888cf6be42bd2d7f9a_5wAUhmzVgh.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/0b2a08452b1efb85fdb2fe1ec2989e55_v_IfIHM7Z3.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/instaa-office-galleria-square/ajanta-colony-meerut-mee004
    id: 5,
    name: 'Instaa Office Galleria Square',
    area: 'Ajanta Colony',
    location: 'Ajanta Colony, Meerut',
    address: 'Near Harsh Commercial Park, Ajanta Colony, Meerut, Uttar Pradesh',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 140,
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1714471335/xzrikduntovgtuye4ujh.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1714150993/c2qonxrj1qp57bwjodmq.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1714471224/ipc1boemhgidqjxmokkc.webp'
    ]
  }
];

export default meerutSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const meerutNeighborhoods = Object.entries(
  meerutSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const meerutOfficeCards = meerutSpaces.slice(0, 8);
export const moreMeerutOfficeCards = meerutSpaces.slice(8);

export const meerutAreas = meerutNeighborhoods;

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
// Meerut Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allMeerutOfficeCards = meerutSpaces;

export const getMeerutOfficeCardById = (id) => findOfficeBySlug(allMeerutOfficeCards, id, "meerut");
export const getMeerutOfficeSlug = (space) => officePath(allMeerutOfficeCards, space, "meerut");

// ============================================================================
// Top Coworking Locations in Meerut — one tile per area, using a photo from a space in that area
// ============================================================================
export const topMeerutCoworkingLocations = meerutNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: meerutSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
