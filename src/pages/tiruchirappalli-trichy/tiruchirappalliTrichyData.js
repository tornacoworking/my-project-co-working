import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Tiruchirappalli (Tamil Nadu) coworking spaces, compiled 13 Nov 2026 from qdesq.com, gofloaters.com, coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - Emerald Communication System (not an office)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const tiruchirappalliTrichySpaces = [
  {
    // Sources: https://www.qdesq.com/brand/flexispace/west-thillai-nagar-tiruchirappalli-trt004
    id: 1,
    name: 'Flexispace',
    area: 'West Thillai Nagar',
    location: 'West Thillai Nagar, Tiruchirappalli',
    address: 'Opposite to Shahnavaz Hospital Cut Road, West Thillai Nagar, Tiruchirappalli, Tamil Nadu',
    phone: null,
    hours: '8:00 AM – 10:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms'],
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1598430348/pborcm2u4ogdq5masgka.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1598430330/x9rl4yo6doqsc5hpcmwl.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/mikro-grafeio-services-private-limited/tennur-tiruchirappalli-trt005
    id: 2,
    name: 'Mikro Grafeio',
    area: 'Tennur',
    location: 'Tennur, Tiruchirappalli',
    address: 'Near 11th cross bus stand, Tennur, Tiruchirappalli, Tamil Nadu',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 54,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1711022698/yui3esouvsffkorpsj0o.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1711022671/jbgipghkjzyz2wexnq08.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1711022671/qjidlesusdhmqjv7bqpr.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/universe-coworks/salai-road-thillainagar-east-tiruchirappalli-trt008 , https://www.qdesq.com/brand/universe-coworks/thillai-nagar-tiruchirappalli-trt009
    id: 3,
    name: 'Universe Coworks',
    area: 'Thillainagar East',
    location: 'Thillainagar East, Tiruchirappalli',
    address: 'Near Murugan Complex, Salai road, Thillainagar East, Tiruchirappalli, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Mail Handling', 'Air Conditioning'],
    capacity: 150,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/530af45910965be145c00053389cf500_Hj67D5a9o.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/79b5b2febc4eb0ed6b582586504a09ca_myE4-d7Uf.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/hakuna-matata-hub/thillai-nagar-tiruchirappalli-trt010
    id: 4,
    name: 'Hakuna Matata Hub',
    area: 'Thillai Nagar',
    location: 'Thillai Nagar, Tiruchirappalli',
    address: 'Near Hakuna Matata Tower, Thillai Nagar, Tiruchirappalli, Tamil Nadu',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms'],
    capacity: 170,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/53afcc4a8dbb0faf8c972f7ca1181348_cTWkIvZ31.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/f9be6f806055a56b1fb9b662f620d9db_2Y4MdWTaQc.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/cb5722c0d0641a68ef635b1bc06667c2_6VUTVqR3a0.jpeg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/trichy-coworks/west-thillai-nagar-tiruchirappalli-trt003 , https://gofloaters.com/office-space/gooffice-4018-dedicated-desks-thillai-nagar-trichy/ , https://gofloaters.com/office-space/gooffice-4028-6-seater-private-cabin-thillai-nagar-trichy/ , https://gofloaters.com/office-space/gooffice-4029-8-seater-private-cabin-thillai-nagar-trichy/ , https://gofloaters.com/office-space/gooffice-4030-10-seater-private-cabin-thillai-nagar-trichy/ , https://gofloaters.com/office-space/gooffice-4021-8-seater-private-cabin-thillai-nagar-trichy/ , https://gofloaters.com/office-space/gooffice-4022-10-seater-private-cabin-thillai-nagar-trichy/ , https://gofloaters.com/office-space/gooffice-4020-5-seater-private-cabin-thillai-nagar-trichy/ , https://gofloaters.com/office-space/gooffice-4019-4-seater-private-cabin-thillai-nagar-trichy/ , https://gofloaters.com/office-space/gooffice-4027-4-seater-private-cabin-thillai-nagar-trichy/
    id: 5,
    name: 'Trichy Coworks',
    area: 'West Thillai Nagar',
    location: 'West Thillai Nagar, Tiruchirappalli',
    address: 'Near CETHAR HOSPITALS, West Thillai Nagar, Tiruchirappalli, Tamil Nadu',
    phone: null,
    hours: '9:00 AM – 6:00 PM, Mon–Fri',
    amenities: ['High Speed WiFi'],
    capacity: 250,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: '₹833',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1579508117/jttxzhnjvg4br5d8rizw.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/seed-space/thillainagar-tiruchirappalli-trt002
    id: 6,
    name: 'Seed Space',
    area: 'Thillainagar',
    location: 'Thillainagar, Tiruchirappalli',
    address: 'Near Royal Pearl Hospital, Thillainagar, Tiruchirappalli, Tamil Nadu',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1579093446/hgd2hf89phzilywhddru.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1579093446/hzsw9jdm5xrnyg49onik.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1579093446/ennpnsslscttcr59hcsd.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/nextgen-workspace/thillai-nagar-tiruchirappalli-trt007
    id: 7,
    name: 'NextGen Workspace',
    area: 'Thillai Nagar',
    location: 'Thillai Nagar, Tiruchirappalli',
    address: 'Near Ujesh Towers, Thillai Nagar, Tiruchirappalli, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    capacity: 100,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/f1acbfdff3b9fcff2e257062ead7a08e_3DMT3_yXG.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/4cf3d68138080fb7e15a9ebfce453996_0cIHuwrm4.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/4db206b27e2d6e65a34cdd1aacdaec88_OaF0X3xqq.JPG'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/tamil-nadu/trichy/z16-workspaces/
    id: 8,
    name: 'Z16 WorkSpaces Trichy Rd',
    area: 'Ramanathapuram',
    location: 'Ramanathapuram, Tiruchirappalli',
    address: 'Z16 workspaces, Trichy Rd, Opposite New Church & Mrf Show Room, Next To Dhanvanthari Temple Of Aryavaidya Pharmacy, Rukmani Nagar, Ramanathapuram, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['Pantry', 'Housekeeping', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2021/10/Z16-WorkSpaces-Trichy-Rd-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/Z16-Workspaces-Trichy-Rd.-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/Z16-workspace-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/flexispace/
    id: 9,
    name: 'Flexispace',
    area: 'Tennur',
    location: 'Tennur, Tiruchirappalli',
    address: 'NBA Tower, West Thillai Nagar, Tennur, Tiruchirappalli, Tamil Nadu',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/3.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2022-12-10-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2022-12-10.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/newvork/
    id: 10,
    name: 'Newvork',
    area: 'Tennur',
    location: 'Tennur, Tiruchirappalli',
    address: 'no b, 34, 2nd Cross Rd, Thillai Nagar East, East, Tennur, Tiruchirappalli, Tamil Nadu 620018',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-04-21.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-09-26-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-09-26-2.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/seed-spaces/
    id: 11,
    name: 'Seed Spaces',
    area: 'Tennur',
    location: 'Tennur, Tiruchirappalli',
    address: '20, 2nd Cross Road, Thillai Nagar East, Tennur, Tiruchirappalli, Tamil Nadu 620018',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/coworking-768x576-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG-0432.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/unnamed.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/mikro-grafeio/
    id: 12,
    name: 'Mikro Grafeio',
    area: 'Thillai Nagar Main Rd',
    location: 'Thillai Nagar Main Rd, Tiruchirappalli',
    address: '24 Ram Arcade, 11th cross, B-14, Thillai Nagar Main Rd, Tiruchirappalli, Tamil Nadu 620018',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Lounge', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/WhatsApp-Image-2022-04-02-at-6.33.31-PM-2.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/WhatsApp-Image-2022-04-02-at-6.33.31-PM.jpeg'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-4037-3-seater-private-cabin-cantonment-trichy/ , https://gofloaters.com/office-space/gooffice-4032-open-desks-cantonment-trichy/
    id: 13,
    name: 'WorkFromHaven',
    area: 'Cantonment',
    location: 'Cantonment, Tiruchirappalli',
    address: 'Cantonment, Tiruchirappalli, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: '₹1,667',
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FPrivate%2520Cabin%2520-%25201_1740455637667%3Falt%3Dmedia%26token%3D5bf81a13-b2c6-4a24-9ec2-0f82ce9d3a38.webp?alt=media&token=273c0c32-0d58-468d-bd24-727a561aac48',
      'https://cdn.app.gofloaters.com/.%2Fimages%252F3%2520Seater%2520Private%2520Cabin%2520%257C%2520Cantonment_1742033918658%3Falt%3Dmedia%26token%3D045caf90-2f99-45d3-85fa-931d56b75954.webp?alt=media&token=583d15d0-3a99-4be7-add4-d87b2fc8b5a5',
      'https://cdn.app.gofloaters.com/.%2Fimages%252F3%2520Seater%2520Private%2520Cabin%2520%257C%2520Cantonment_1742033909590%3Falt%3Dmedia%26token%3Db890f3d6-6058-4962-a646-7a2146a22d26.webp?alt=media&token=6d6687ad-1d59-4f0e-ae41-a28024c0998d'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-4050-open-desks-chathiram-bus-stop-trichy/ , https://gofloaters.com/office-space/gooffice-4051-3-seater-private-cabin-chathiram-bus-stop-trichy/
    id: 14,
    name: 'Universe Co-works',
    area: 'Chathiram Bus stop',
    location: 'Chathiram Bus stop, Tiruchirappalli',
    address: 'Chathiram Bus stop, Tiruchirappalli, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: '₹5,000',
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FUniverse%2520Dedicated%2520Desk_1765434799099%3Falt%3Dmedia%26token%3Db9d9ba91-8316-433b-9fce-2542a3a298a2.webp?alt=media&token=78bfae4f-a31f-418b-bcb7-b8000cdaf7dd',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FUniverse%2520Dedicated%2520Desk_1765434829640%3Falt%3Dmedia%26token%3Dde889d92-53a6-473b-ac6c-0636f1f199ce.webp?alt=media&token=b760044c-a0a0-4788-b202-fb41b277e1a0',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520VN%2520Nagar_1765795304528%3Falt%3Dmedia%26token%3D1ccfc41e-8c7a-48e9-936b-64fedf40776e.webp?alt=media&token=60d71cc2-28b2-4e68-a893-6a22ccc40605'
    ]
  }
];

export default tiruchirappalliTrichySpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const tiruchirappalliTrichyNeighborhoods = Object.entries(
  tiruchirappalliTrichySpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const tiruchirappalliTrichyOfficeCards = tiruchirappalliTrichySpaces.slice(0, 8);
export const moreTiruchirappalliTrichyOfficeCards = tiruchirappalliTrichySpaces.slice(8);

export const tiruchirappalliTrichyAreas = tiruchirappalliTrichyNeighborhoods;

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
// Tiruchirappalli Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allTiruchirappalliTrichyOfficeCards = tiruchirappalliTrichySpaces;

export const getTiruchirappalliTrichyOfficeCardById = (id) => findOfficeBySlug(allTiruchirappalliTrichyOfficeCards, id, "tiruchirappalli-trichy");
export const getTiruchirappalliTrichyOfficeSlug = (space) => officePath(allTiruchirappalliTrichyOfficeCards, space, "tiruchirappalli-trichy");

// ============================================================================
// Top Coworking Locations in Tiruchirappalli — one tile per area, using a photo from a space in that area
// ============================================================================
export const topTiruchirappalliTrichyCoworkingLocations = tiruchirappalliTrichyNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: tiruchirappalliTrichySpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
