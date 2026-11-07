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
  },
  {
    // The listing page shows no confirmed price, so it stays on request.
    id: 9,
    name: 'AIC-AARTECH',
    area: 'Arera Colony',
    location: 'Arera Colony, Bhopal',
    address: 'E-2/57, Arera Colony, Bhopal, Madhya Pradesh 462016',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Printer', 'Car / Bike Parking'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/AIC-AARTECH-003-min.jpg'
    ]
  },
  {
    id: 10,
    name: 'S.PACE',
    area: 'Arera Colony',
    location: 'Arera Colony, Bhopal',
    address: 'E-3/114, 10 Number, Arera Colony, Bhopal, Madhya Pradesh 462016',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing, plans ₹4,000–₹6,000',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/S.PACE-Bhopal-001-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/S.PACE-Bhopal-003-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/S.PACE-Bhopal-002-min.jpg'
    ]
  },
  {
    // Second WorkPad address. Amenities are taken from the same operator's other Bhopal listing.
    id: 11,
    name: 'The WorkPad - Arera Colony',
    area: 'Arera Colony',
    location: 'Arera Colony, Bhopal',
    address: '3rd Floor, E-3/45, 10 Cross Road, Arera Colony, Bhopal, Madhya Pradesh 462039',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Lounge', 'Car / Bike Parking'],
    price: '₹3,999',
    period: '/ month',
    priceFormatted: '₹3,999 / month',
    deskPrice: '₹3,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/The-WorkPad-Co-working-Space-001-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/The-WorkPad-Co-working-Space-002-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/The-WorkPad-Co-working-Space-003-min.jpg'
    ]
  },
  {
    // The listing page shows no confirmed price, so it stays on request.
    id: 12,
    name: 'WorkdotSpace',
    area: 'Arera Colony',
    location: 'Arera Colony, Bhopal',
    address: 'Exclusive Residency, E-4, Arera Colony, Bhopal, Madhya Pradesh',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Printer', 'Pantry', 'Car / Bike Parking'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/DSC_8041-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/DSC_8024-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-01-21-min-1.jpg'
    ]
  },
  {
    // The listing page shows no confirmed price, so it stays on request.
    id: 13,
    name: 'Thrive Workspace',
    area: 'MP Nagar',
    location: 'MP Nagar, Bhopal',
    address: '232, Zone-II, near Sargam Cinema, MP Nagar, Bhopal, Madhya Pradesh 462023',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Printer', 'Tea/Coffee', 'Lounge', 'Car / Bike Parking'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/image00004-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/image00014-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/eul468710ejdbzq7txki-min.png'
    ]
  },
  {
    // GoFloaters gives the locality only and doesn't itemise amenities.
    id: 14,
    name: 'CynergX Coworking Space',
    area: 'Arera Colony',
    location: 'Arera Colony, Bhopal',
    address: 'Arera Colony, Bhopal, Madhya Pradesh',
    phone: null,
    hours: null,
    amenities: ['Dedicated Desks'],
    price: '₹3,350',
    period: '/ month',
    priceFormatted: '₹3,350 / month',
    deskPrice: '₹3,350',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing (dedicated desk ₹3,750)',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FFlexDesk_1692042850544%3Falt%3Dmedia%26token%3Dc7381334-f622-4f34-866e-2dbbff5ccc99.webp?alt=media&token=bf5c4d76-e0df-4502-a617-ffdaaa9a314d',
      'https://cdn.app.gofloaters.com/images%2FDedicated-Desks_1692042956504.webp?alt=media&token=7dd6edc8-7e32-44ba-ab13-63e21195a3f6'
    ]
  },
  {
    // GoFloaters gives the locality only. Cabin price is its ₹34,000 four-seater divided by 4.
    id: 15,
    name: 'Oneworx Coworking Space',
    area: 'Bagmugaliya',
    location: 'Bagmugaliya, Bhopal',
    address: 'Bagmugaliya, Bhopal, Madhya Pradesh',
    phone: null,
    hours: null,
    amenities: ['Dedicated Desks', 'Private Cabins'],
    price: '₹7,780',
    period: '/ month',
    priceFormatted: '₹7,780 / month',
    deskPrice: '₹7,780',
    cabinPrice: '₹8,500',
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks_1750943781611%3Falt%3Dmedia%26token%3D95e3f649-2283-44c6-ae17-f5a3d1a779a7.webp?alt=media&token=dd7b4a7c-0cc8-4bd1-8e04-27a226833523',
      'https://cdn.app.gofloaters.com/.%2Fimages%252F4%2520Seater%2520Private%2520Cabin_1750943847104%3Falt%3Dmedia%26token%3Db57d0317-4c55-4afa-bc24-5a989471af16.webp?alt=media&token=6edf24f8-6005-46ce-b28e-3a5c377df10e'
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
