import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Madurai (Tamil Nadu) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, gofloaters.com, qdesq.com, coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - CloudFloor (Qdesq lists it in Chokkikulam, Chinna Chokikulam)
//  - Value CoWork (Qdesq lists it in Anna Nagar, Sathamangalam)
//  - Chainsys Software (company office or outside the city)
//  - Cloudfloor cowork spaces (address not in Madurai: NMR Subburaman Park, Outpost, Chinna Chokikulam, Tamil Nadu 625002, India)
//  - MaduraiStartupSpaces (address not in Madurai: NMR Subburaman Park, Outpost, Chinna Chokikulam, Tamil Nadu, India)
//  - TPA Cowork (address not in Madurai: 80 Feet Road, New LIG Colony, Anna Nagar, Sathamangalam, Tamil Nadu, India)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const maduraiSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-madurai-anna-nagar , https://gofloaters.com/office-space/gooffice-40374-4-seater-private-cabin-anna-nagar-madurai/ , https://gofloaters.com/office-space/gooffice-40375-dedicated-desks-anna-nagar-madurai/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Anna Nagar',
    location: 'Anna Nagar, Madurai',
    address: '1st Floor, Vikashni, 760, West 80 Feet Road, Anna Nagar, Madurai, Tamil Nadu - 625020',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹9,000',
    period: '/ month',
    priceFormatted: '₹9,000 / month',
    deskPrice: '₹9,000',
    cabinPrice: null,
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/madurai_rep.webp',
      'https://www.mybranch.co.in/office/office_images/madurai_caf.webp',
      'https://www.mybranch.co.in/office/office_images/madurai_cw.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/bizzbay-cowork/pp-chavadi-madurai-mad006
    id: 2,
    name: 'Bizzbay Cowork',
    area: 'P.P Chavadi',
    location: 'P.P Chavadi, Madurai',
    address: 'Near SR Tower, P.P Chavadi, Madurai, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Mail Handling', 'Air Conditioning'],
    capacity: 32,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/2848b169e1bda52ca872770188287981_yFGXgLiIf.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/8141847d67aa3702a2f7344bd569112b_WzBtojnHs.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/9374722b80b2070a9fc7db649ed182fc_MB4dstH0J.jpeg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/jayavilla-cowork-spaces/villapuram-colony-madurai-mad002
    id: 3,
    name: 'Jayavilla Cowork spaces',
    area: 'Villapuram Colony',
    location: 'Villapuram Colony, Madurai',
    address: 'Near Yamahar Motors towards SBI bank, Villapuram Colony, Madurai, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Mail Handling', 'Lounge', 'Meeting Rooms'],
    capacity: 15,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1684131750/plmwd7cfjfs3ppurpde4.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1611226767/hherz3uk57kdiwhexert.png'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/bizzbay-cowork-space/chokkalinga-nagar-madurai-mad005 , https://gofloaters.com/office-space/gooffice-4048-open-desks-chokkalinga-nagar-madurai/
    id: 4,
    name: 'Bizzbay Cowork Space',
    area: 'Chokkalinga Nagar',
    location: 'Chokkalinga Nagar, Madurai',
    address: 'Near Kalasekar Tower, Chokkalinga Nagar, Madurai, Tamil Nadu',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sun',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Lounge', 'Mail Handling'],
    capacity: 20,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/d0142098bb4a5c48909de16bfd567a3e_Gde8IFlQX.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/edeb94450604a96edc0183c0a124549f_R8gRr9afJ.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/1d9eda0da87f1cccdfdbf67577c8e350_ylj4GrBiu.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/value-cowork/managiri-madurai-mad003
    id: 5,
    name: 'Value CoWork',
    area: 'Managiri',
    location: 'Managiri, Madurai',
    address: 'Near Le Grace Residency, Managiri, Madurai, Tamil Nadu',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 60,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1684321009/xyoscjui0u6mnns4umzm.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1684319813/pkrfifvuyeisyzbcaeqm.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1684320956/rwudw9dcvpcihlcwoxu0.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/dsign-stories/kochadai-madurai-mad008
    id: 6,
    name: 'D.sign Stories',
    area: 'Kochadai',
    location: 'Kochadai, Madurai',
    address: 'Near Melakkal main road, Kochadai, Madurai, Tamil Nadu',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 14,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/5b40357529c1f465a4a33b2b629961cb_aBIurXFt5.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/8e201796e9056c87936e9da78ed12ac9_OVCmQbFGR.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/14c580806ffdb6efa5dd7de6ba04db3f_KHLxrVDUL.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/homemakerspaces/
    id: 7,
    name: 'HomeMakerSpaces',
    area: 'Villapuram',
    location: 'Villapuram, Madurai',
    address: '3780, Floor II, Villapuram, near Reshma Hospitals, Madurai, Tamil Nadu 625011',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹3,600',
    period: '/ month',
    priceFormatted: '₹3,600 / month',
    deskPrice: '₹3,600',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-11-16-2.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-11-16.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/value-cowork/ , https://gofloaters.com/office-space/gooffice-4042-dedicated-desks-anna-nagar-madurai/ , https://gofloaters.com/office-space/gooffice-4043-4-seater-private-cabin-anna-nagar-madurai/
    id: 8,
    name: 'Value CoWork',
    area: 'Anna Nagar',
    location: 'Anna Nagar, Madurai',
    address: 'Lovely Cards Annanagar, 80 Feet Road, Anna Nagar, Madurai, Tamil Nadu 625020',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Pantry', 'Mail Handling', 'Car / Bike Parking', 'Printer'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: '₹1,125',
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/002_Conference_Room.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/003_Main_Workstation.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/006_Virtual-Office.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/sarva-center/
    id: 9,
    name: 'Sarva Center',
    area: 'Pasumpon Nagar',
    location: 'Pasumpon Nagar, Madurai',
    address: 'Sarva Center, Madakulam Main Road, Vinayai Nagar, Pasumpon Nagar, Madurai, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Housekeeping', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-12-16.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_3226.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_3235.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/indiqube-sangam/
    id: 10,
    name: 'IndiQube Sangam',
    area: 'K.Pudur',
    location: 'K.Pudur, Madurai',
    address: '115/2, 120 Feet Rd, Industrial Estate, K.Pudur, Madurai, Tamil Nadu 625007',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-01-04-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-01-04.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IndiQubeSangam_Slider1.jpg'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-4055-open-desks-sammatipuram-madurai/ , https://gofloaters.com/office-space/gooffice-4056-3-seater-private-cabin-sammatipuram-madurai/
    id: 11,
    name: 'Bizzbay Cowork Space 02',
    area: 'Sammatipuram',
    location: 'Sammatipuram, Madurai',
    address: 'Sammatipuram, Madurai, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: '₹6,667',
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks_1756647603700%3Falt%3Dmedia%26token%3D4e8a9a5f-2451-476e-ada4-1f62c20e64c9.webp?alt=media&token=c6ea1e83-709e-46bb-a136-d674689f096b',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Sammatipuram_1756728720647%3Falt%3Dmedia%26token%3D96883ee7-d7ea-482d-8f70-e97d21206b55.webp?alt=media&token=4f452ad3-a349-47de-bfb5-cc4be5bf4a3a',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Sammatipuram_1756728686305%3Falt%3Dmedia%26token%3D1078ae7b-b826-4df7-8ae4-d8baf2e1f57f.webp?alt=media&token=53d3c355-db34-4396-a7ad-ca0801838538'
    ]
  }
];

export default maduraiSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const maduraiNeighborhoods = Object.entries(
  maduraiSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const maduraiOfficeCards = maduraiSpaces.slice(0, 8);
export const moreMaduraiOfficeCards = maduraiSpaces.slice(8);

export const maduraiAreas = maduraiNeighborhoods;

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
// Madurai Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allMaduraiOfficeCards = maduraiSpaces;

export const getMaduraiOfficeCardById = (id) => findOfficeBySlug(allMaduraiOfficeCards, id, "madurai");
export const getMaduraiOfficeSlug = (space) => officePath(allMaduraiOfficeCards, space, "madurai");

// ============================================================================
// Top Coworking Locations in Madurai — one tile per area, using a photo from a space in that area
// ============================================================================
export const topMaduraiCoworkingLocations = maduraiNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: maduraiSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
