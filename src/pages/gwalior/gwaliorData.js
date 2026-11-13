import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Gwalior (Madhya Pradesh) coworking spaces, compiled 13 Nov 2026 from qdesq.com, mybranch.co.in.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const gwaliorSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/grab-space/kampoo-gwalior-gwa005
    id: 1,
    name: 'MileStone CoWorking',
    area: 'Kampoo',
    location: 'Kampoo, Gwalior',
    address: 'Near Keshar Tower, Kampoo, Gwalior, Madhya Pradesh',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 120,
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/fcc0aa46e374887b789a70f9d996313c_pvqbR2Sn1l.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/ac6242ae1995a64841e0648428b696ac_C_GSKJg5fw.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/a11c08d5870ca505d1e5689184255109_XbJBW1HSJt.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/1b09e2a7c835af31d5f83f8dfd2024c5_WYONQeBKwu.jpeg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/my-branch/patel-nagar-gwalior-gwa004 , https://www.mybranch.co.in/coworking-space-in-gwalior-city-center
    id: 2,
    name: 'MyBranch Coworking Space',
    area: 'City Center',
    location: 'City Center, Gwalior',
    address: '2nd Floor, Bansi Plaza, H. No. 15 & 16, opp. Kwality, City Center, Patel Nagar, Gwalior, Madhya Pradesh 474011',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 50,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1655716927/cx06c7yonhqfbsssiyp0.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1655716900/jinwuxbvlbcpspyjawir.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1655716900/xqg1z3wop2vxqnb2igtr.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/grabspace/tulsi-vihar-colony-gwalior-gwa002
    id: 3,
    name: 'GrabSpace',
    area: 'Tulsi Vihar Colony',
    location: 'Tulsi Vihar Colony, Gwalior',
    address: 'Near Rolex Square Tower, Tulsi Vihar Colony, Gwalior, Madhya Pradesh',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Mail Handling', 'Lounge', 'Meeting Rooms', 'Tea/Coffee'],
    capacity: 140,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/85de9e095cacfa096f1749c0de8c8e95_CTXXuMrjw.png',
      'https://ik.imagekit.io/qdesq/qdesq/077c4e6f6cd1f24d208fdc33b00aa2d1_1FkHwSpUD.png',
      'https://ik.imagekit.io/qdesq/qdesq/69a53fccf5b4e1c1d2c92810fa356a9f_Xv1rOfiDWB.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1705563995/owkkteh1nsnmumgxbbzb.png'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/sorted-square/panchwati-vastra-nagar-gwalior-gwa001
    id: 4,
    name: 'Sorted Square',
    area: 'Panchwati Vastra Nagar',
    location: 'Panchwati Vastra Nagar, Gwalior',
    address: 'Near Central Bank, Panchwati Vastra Nagar, Gwalior, Madhya Pradesh',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms'],
    capacity: 55,
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1688120028/pxjwe5quambndtauujx1.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1688119965/qqnntlnsujc7mppt89wi.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1688119965/kep7mpank1xntuoeti7r.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1688119965/hvdqisos08t34frxhzs4.webp'
    ]
  }
];

export default gwaliorSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const gwaliorNeighborhoods = Object.entries(
  gwaliorSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const gwaliorOfficeCards = gwaliorSpaces.slice(0, 8);
export const moreGwaliorOfficeCards = gwaliorSpaces.slice(8);

export const gwaliorAreas = gwaliorNeighborhoods;

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
// Gwalior Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allGwaliorOfficeCards = gwaliorSpaces;

export const getGwaliorOfficeCardById = (id) => findOfficeBySlug(allGwaliorOfficeCards, id, "gwalior");
export const getGwaliorOfficeSlug = (space) => officePath(allGwaliorOfficeCards, space, "gwalior");

// ============================================================================
// Top Coworking Locations in Gwalior — one tile per area, using a photo from a space in that area
// ============================================================================
export const topGwaliorCoworkingLocations = gwaliorNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: gwaliorSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
