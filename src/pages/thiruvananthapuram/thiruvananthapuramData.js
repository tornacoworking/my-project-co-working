import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Thiruvananthapuram (Kerala) coworking spaces, compiled 13 Nov 2026 from qdesq.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - BRH Apollo Dimora (not a coworking space)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const thiruvananthapuramSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/wbip/kailash-nagar-thiruvananthapuram-ttp009
    id: 1,
    name: 'Wbip',
    area: 'Kailash Nagar',
    location: 'Kailash Nagar, Thiruvananthapuram',
    address: 'Near Big Bazaar, Kailash Nagar, Thiruvananthapuram, Kerala',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1594878670/lmroave7p8sfel4wm1rw.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1594878703/g9mbnxhnmesuvapotx5y.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/77spaces/kumarapuram-thiruvananthapuram-ttp020
    id: 2,
    name: '77spaces',
    area: 'Kumarapuram',
    location: 'Kumarapuram, Thiruvananthapuram',
    address: 'Near Lotus Tower, Kumarapuram, Thiruvananthapuram, Kerala',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Mail Handling', 'Air Conditioning'],
    capacity: 41,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1710244220/evvzewk6eaegakeangrf.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1710244246/btxda60u30rpowwhfsz1.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1710244246/uhhops4jiyvpstrfr90o.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/incuspaze/kowdiar-trivandrum-tri023
    id: 3,
    name: 'Incuspaze',
    area: 'Kowdiar',
    location: 'Kowdiar, Thiruvananthapuram',
    address: 'Near Aspinwall House, Kowdiar, Thiruvananthapuram, Kerala',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning', 'Lounge'],
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/38e5e215b2bb7a9634a6e49508ed461a_dcHefFVdkn.png'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/dotspace/kuravankonam-thiruvananthapuram-ttp018
    id: 4,
    name: 'Dotspace',
    area: 'Kuravankonam',
    location: 'Kuravankonam, Thiruvananthapuram',
    address: 'Near Southloom Showroom, Kuravankonam, Thiruvananthapuram, Kerala',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 180,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677057162/q6idodipgq4huvrq0jlj.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677057107/ny9gyblgk8e2vgfrqjfy.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1678034522/szamrgu8lmollx1loaby.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/b-hub/vidya-nagar-thiruvananthapuram-ttp016
    id: 5,
    name: 'B-HUB',
    area: 'Vidya Nagar',
    location: 'Vidya Nagar, Thiruvananthapuram',
    address: 'Opposite South Indian Bank, Vidya Nagar, Thiruvananthapuram, Kerala',
    phone: null,
    hours: '9:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1637846750/h8z5778gpoqrkambkjyc.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1637846751/z4z7ts7x0w2lsc4a38po.png'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/artek-business-services/kowdiar-thiruvananthapuram-ttp019
    id: 6,
    name: 'Artek Business Services',
    area: 'Kowdiar',
    location: 'Kowdiar, Thiruvananthapuram',
    address: 'Near Fried Nation, Kowdiar, Thiruvananthapuram, Kerala',
    phone: null,
    hours: '8:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1700565023/abuxawbzm2upiob9uk5n.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/dotspace/kowdiar-thiruvananthapuram-ttp004 , https://gofloaters.com/office-space/gooffice-4229-open-desks-kowdiar-thiruvananthapuram/
    id: 7,
    name: 'Dotspace',
    area: 'Kowdiar',
    location: 'Kowdiar, Thiruvananthapuram',
    address: 'Near Asset Homes Pvt Ltd, Kowdiar, Thiruvananthapuram, Kerala',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1633951618/kl4ujeof4nwwqoayv55i.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1633951592/adgfty2x8hhfqp5qnxap.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/designers-community/vazhuthacaud-thiruvananthapuram-ttp001
    id: 8,
    name: 'Designer\'s Community',
    area: 'Vazhuthacaud',
    location: 'Vazhuthacaud, Thiruvananthapuram',
    address: 'Opposite Trivandrum Club, Vazhuthacaud, Thiruvananthapuram, Kerala',
    phone: null,
    hours: '7:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1576233170/mjo3wtshykynxctwgy6p.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1576233143/d0zojg8alhbh8txloubl.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1576233164/u1dqpda45k3lk3gkgx7m.webp'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-4298-10-seater-private-cabin-kuravankonam-kuravankonam-thiruvananthapuram/ , https://gofloaters.com/office-space/gooffice-4297-dedicated-desks-kuravankonam-kuravankonam-thiruvananthapuram/
    id: 9,
    name: 'Incuspaze Aspinwall House',
    area: 'Kuravankonam',
    location: 'Kuravankonam, Thiruvananthapuram',
    address: 'Kuravankonam, Thiruvananthapuram, Kerala',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    deskPrice: '₹8,500',
    cabinPrice: '₹850',
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/images%2F10-Seater-Private-cabin-Kuravankonam_1743664962876.webp?alt=media&token=7bd04d43-469d-444a-9bef-eac525680fe0',
      'https://cdn.app.gofloaters.com/images%2F10-Seater-Private-cabin-Kuravankonam_1743664967377.webp?alt=media&token=6b3cb812-efbf-4e48-921a-7c5c49f67d90',
      'https://cdn.app.gofloaters.com/images%2F10-Seater-Private-cabin-Kuravankonam_1743664972791.webp?alt=media&token=a90e6afe-e0d0-4728-99a5-f144161c7747'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-4192-3-seater-private-cabin-kazhakkoottam-thiruvananthapuram/ , https://gofloaters.com/office-space/gooffice-4190-dedicated-desks-kazhakkoottam-thiruvananthapuram/
    id: 10,
    name: 'Asman IT Park Coworking',
    area: 'Kazhakkoottam',
    location: 'Kazhakkoottam, Thiruvananthapuram',
    address: 'Kazhakkoottam, Thiruvananthapuram, Kerala',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: '₹1,667',
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/images%2F3-Seater-Private-Cabin-Kazhakkoottam_1617187012478.webp?alt=media&token=94bfdfa8-bb14-4ef1-9342-7451df235e20',
      'https://cdn.app.gofloaters.com/images%2F3-Seater-Private-Cabin-Kazhakkoottam_1617187005234.webp?alt=media&token=8dbcfacb-a70e-4d69-8106-9189c6606c92',
      'https://cdn.app.gofloaters.com/images%2FDedicated-Desks-Kazhakkoottam_1616922933521.webp?alt=media&token=90d23854-9cc5-4297-b0ef-0ad524e4ab4d'
    ]
  }
];

export default thiruvananthapuramSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const thiruvananthapuramNeighborhoods = Object.entries(
  thiruvananthapuramSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const thiruvananthapuramOfficeCards = thiruvananthapuramSpaces.slice(0, 8);
export const moreThiruvananthapuramOfficeCards = thiruvananthapuramSpaces.slice(8);

export const thiruvananthapuramAreas = thiruvananthapuramNeighborhoods;

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
// Thiruvananthapuram Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allThiruvananthapuramOfficeCards = thiruvananthapuramSpaces;

export const getThiruvananthapuramOfficeCardById = (id) => findOfficeBySlug(allThiruvananthapuramOfficeCards, id, "thiruvananthapuram");
export const getThiruvananthapuramOfficeSlug = (space) => officePath(allThiruvananthapuramOfficeCards, space, "thiruvananthapuram");

// ============================================================================
// Top Coworking Locations in Thiruvananthapuram — one tile per area, using a photo from a space in that area
// ============================================================================
export const topThiruvananthapuramCoworkingLocations = thiruvananthapuramNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: thiruvananthapuramSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
