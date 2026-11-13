import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Jalandhar (Punjab) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com, coworkingers.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const jalandharSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-jalandhar-puda-complex
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'PUDA Complex',
    location: 'PUDA Complex, Jalandhar',
    address: '3rd Floor, SCO 37, Ladowali Road, PUDA Complex, Mohyal Nagar, Jalandhar, Punjab 144001',
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
      'https://www.mybranch.co.in/office/office_images/jalandhar_cw.webp',
      'https://www.mybranch.co.in/office/office_images/jalandhar_mr.webp',
      'https://www.mybranch.co.in/office/office_images/jalandhar_caf.webp',
      'https://www.mybranch.co.in/office/office_images/jalandhar_rep.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/square-coworking/moti-nagar-jalandhar-jal001
    id: 2,
    name: 'Square Coworking',
    area: 'Moti Nagar',
    location: 'Moti Nagar, Jalandhar',
    address: 'Opposite Sarita Medico, Moti Nagar, Jalandhar, Punjab',
    phone: null,
    hours: '9:00 AM – 6:00 PM, Mon–Fri',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 40,
    price: '₹7,500',
    period: '/ month',
    priceFormatted: '₹7,500 / month',
    deskPrice: '₹7,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1625128319/wd4vkfqj964gxepdnvxu.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1625128368/krzyy2rxz7h3kps5dnnn.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1625128432/y4fa2y8xclotlayecacm.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1625128493/tpvfddzxcwrt2gdcuo9r.webp'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/mysoho/ , https://gofloaters.com/office-space/gooffice-9402-6-seater-private-cabin-urban-estate-jalandhar/
    id: 3,
    name: 'MySoho Coworking',
    area: 'Urban Estate',
    location: 'Urban Estate, Jalandhar',
    address: 'Urban Estate Phase 2 Road, Phase 2, Urban Estate, Jalandhar, Punjab 144022, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Lounge', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-07-13-1-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-07-13-2-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-07-13-3-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-07-13-min.jpg'
    ]
  }
];

export default jalandharSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const jalandharNeighborhoods = Object.entries(
  jalandharSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const jalandharOfficeCards = jalandharSpaces.slice(0, 8);
export const moreJalandharOfficeCards = jalandharSpaces.slice(8);

export const jalandharAreas = jalandharNeighborhoods;

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
// Jalandhar Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allJalandharOfficeCards = jalandharSpaces;

export const getJalandharOfficeCardById = (id) => findOfficeBySlug(allJalandharOfficeCards, id, "jalandhar");
export const getJalandharOfficeSlug = (space) => officePath(allJalandharOfficeCards, space, "jalandhar");

// ============================================================================
// Top Coworking Locations in Jalandhar — one tile per area, using a photo from a space in that area
// ============================================================================
export const topJalandharCoworkingLocations = jalandharNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: jalandharSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
