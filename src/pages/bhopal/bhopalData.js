import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Bhopal (Madhya Pradesh) coworking spaces — MyBranch and Qdesq listing data, fetched Nov 6, 2026.
// Most Qdesq pages give a landmark, not a street address — verify before publishing.
// Ratings and review counts are left out because no source gave a verifiable figure. Qdesq's phone number is its own sales line, so it isn't used.
// deskPrice / cabinPrice are per-seat monthly rates from the listings above; null shows "On request" on the detail page.

export const bhopalSpaces = [
  {
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'MP Nagar',
    location: 'MP Nagar, Bhopal',
    address: '2nd Floor, Guru Arcade, Plot No-153, Ramgopal Maheshwari Marg, Zone 1, MP Nagar, Bhopal, Madhya Pradesh 462011',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹7,503',
    period: '/ month',
    priceFormatted: '₹7,503 / month',
    deskPrice: '₹7,503',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    website: 'https://www.mybranch.co.in/coworking-space-in-bhopal-mp-nagar',
    images: [
      'https://www.mybranch.co.in/office/office_images/bhopal_cw.webp',
      'https://www.mybranch.co.in/office/office_images/bhopal_mr.webp',
      'https://www.mybranch.co.in/office/office_images/bhopal_caf.webp',
      'https://www.mybranch.co.in/office/office_images/bhopal_recp.webp'
    ]
  },
  {
    // Qdesq shows incomplete hours and also says 24/7 access, so hours are left blank.
    id: 2,
    name: 'Distinct Co-working',
    area: 'Malviya Nagar',
    location: 'Malviya Nagar, Bhopal',
    address: 'Near Rajbhavan Road, Malviya Nagar, Bhopal, Madhya Pradesh',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Printer', 'Car / Bike Parking'],
    capacity: 60,
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: '₹8,000',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/90fc3c315c46d15d88eccc62356ba8d9_-EtjTqk3l.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/e59efb743c7a126c152f2bfbaf5dd318_EilK-fU_k.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/433c725e2949378b1055516353d74506_ngtCyKZZu.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/b14e4b494c312363a6c93c25f29f1ff6_7lUdODGdQ.jpg'
    ]
  },
  {
    id: 3,
    name: 'DB Coworks',
    area: 'Maharana Pratap Nagar',
    location: 'Maharana Pratap Nagar, Bhopal',
    address: 'Near DB City Mall, Maharana Pratap Nagar, Bhopal, Madhya Pradesh',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Lounge', 'Car / Bike Parking'],
    capacity: 400,
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: '₹9,000',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/032dff97381dbd66b3fbb2f0cb882255_XP0G4FQBb.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/485be9b1c4e461b59ba6d0db728b4670_QXrFpbY3y.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/6b24394fcc0fe5d0ddb7565fc2680fea_yT0vJ6gcA.jpeg'
    ]
  },
  {
    // Qdesq marks the listed private cabins as not available, so no cabin price is shown.
    id: 4,
    name: 'Qubikals Coworking Space',
    area: 'MP Nagar',
    location: 'MP Nagar, Bhopal',
    address: 'Near Manohar Dairy and Jyoti Talkies, MP Nagar, Bhopal, Madhya Pradesh',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Printer'],
    capacity: 28,
    price: '₹3,749',
    period: '/ month',
    priceFormatted: '₹3,749 / month',
    deskPrice: '₹3,749',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/img/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1566300979/ldzauh02itwke9obyxql.webp',
      'https://qdesq.imagekit.io/img/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1566300978/ogorr5iimr0ekohe4fbl.webp'
    ]
  },
  {
    // Qdesq marks the desk option as not available, so confirm availability before publishing.
    id: 5,
    name: 'The WorkPad',
    area: 'Maharana Pratap Nagar',
    location: 'Maharana Pratap Nagar, Bhopal',
    address: 'Near Kwality\'s Motel Shiraz, Maharana Pratap Nagar, Bhopal, Madhya Pradesh',
    phone: null,
    hours: '9:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Mail Handling', 'Lounge', 'Car / Bike Parking'],
    price: '₹4,700',
    period: '/ month',
    priceFormatted: '₹4,700 / month',
    deskPrice: '₹4,700',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1614370398/zphdfe6zuuni99ey2t4c.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1614370440/vzmnyyynznhcqtybudya.jpg'
    ]
  },
  {
    // Qdesq only mentions meeting rooms and gives unclear hours, so hours stay blank.
    id: 6,
    name: 'R WorkSquare',
    area: 'MP Nagar',
    location: 'MP Nagar, Bhopal',
    address: 'Near Hanswahini Transport Service, MP Nagar, Bhopal, Madhya Pradesh',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms'],
    price: '₹3,999',
    period: '/ month',
    priceFormatted: '₹3,999 / month',
    deskPrice: '₹3,999',
    cabinPrice: '₹4,000',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/img/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1578652872/vo3zbctffbtzwj7ydu1v.webp',
      'https://qdesq.imagekit.io/img/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1578652872/yzw1wueecsms19cx2ty9.webp',
      'https://qdesq.imagekit.io/img/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1578653923/h2yxkipmdjuphv9zjpu2.webp'
    ]
  },
  {
    id: 7,
    name: 'Workspace.city',
    area: 'MP Nagar',
    location: 'MP Nagar, Bhopal',
    address: 'Near PNB MP Nagar, Bhopal, Madhya Pradesh',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Printer', 'Pantry'],
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: '₹5,000',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1624618255/j5njl52ph1tr2a4x897p.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1624618255/ldvztptd2mwon4lbhufn.jpg'
    ]
  },
  {
    id: 8,
    name: 'Dylogg Co-working',
    area: 'Kasturba Nagar',
    location: 'Kasturba Nagar, Bhopal',
    address: 'Near Hotel L N Marriott, Kasturba Nagar, Bhopal, Madhya Pradesh',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Lounge', 'Printer'],
    price: '₹3,500',
    period: '/ month',
    priceFormatted: '₹3,500 / month',
    deskPrice: '₹3,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1640329711/hyhcbgi32x957grx7owt.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1640329711/wryhq8xhs3xeqwzuont4.png'
    ]
  }
];

export default bhopalSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const bhopalNeighborhoods = Object.entries(
  bhopalSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const bhopalOfficeCards = bhopalSpaces.slice(0, 8);
export const moreBhopalOfficeCards = bhopalSpaces.slice(8);

export const bhopalAreas = bhopalNeighborhoods;

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
// Bhopal Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allBhopalOfficeCards = bhopalSpaces;

export const getBhopalOfficeCardById = (id) => findOfficeBySlug(allBhopalOfficeCards, id, "bhopal");
export const getBhopalOfficeSlug = (space) => officePath(allBhopalOfficeCards, space, "bhopal");

// ============================================================================
// Top Coworking Locations in Bhopal — one tile per area, using a photo from a space in that area
// ============================================================================
export const topBhopalCoworkingLocations = bhopalNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: bhopalSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
