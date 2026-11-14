import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Mysuru (Karnataka) coworking spaces, compiled 13 Nov 2026 from qdesq.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - Myofficespace (company office or outside the city)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const mysuruMysoreSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/myofficespace/saraswathipuram-mysuru-mys005
    id: 1,
    name: 'Myofficespace',
    area: 'Saraswathipuram',
    location: 'Saraswathipuram, Mysuru',
    address: 'Near Diya Arcade, Saraswathipuram, Mysuru, Karnataka',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 36,
    price: '₹3,000',
    period: '/ month',
    priceFormatted: '₹3,000 / month',
    deskPrice: '₹3,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1675243008/le0veoqvsjmqlmihoort.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1675242976/twfw8dvrwup2mdpfk4vy.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/ss-spaces/saraswathipuram-mysore-msr006 , https://gofloaters.com/office-space/gooffice-4130-3-seater-private-cabin-saraswathipuram-mysore/ , https://gofloaters.com/office-space/gooffice-4131-6-seater-private-cabin-saraswathipuram-mysore/ , https://gofloaters.com/office-space/gooffice-4280-8-seater-private-cabin-saraswathipuram-mysore/
    id: 2,
    name: 'SS Spaces',
    area: 'Saraswathipuram',
    location: 'Saraswathipuram, Mysuru',
    address: 'Near Maruti Complex, Saraswathipuram, Mysuru, Karnataka',
    phone: null,
    hours: '8:00 AM – 10:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 75,
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: '₹5,000',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/ca9e2f15d1080dc24b45401ae4ebc21a_W_msX3aLe.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/05557488ab85c340e73be6a424297cfb_Z52yxWoGPX.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/89419ec902210ec6f75f8d0e8c404b64_PaLkmmxYwz.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/wekreate-space/saraswathipuram-mysuru-mys002
    id: 3,
    name: 'WeKreate Space',
    area: 'Saraswathipuram',
    location: 'Saraswathipuram, Mysuru',
    address: 'Near Reliance Trends, Saraswathipuram, Mysuru, Karnataka',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 82,
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1632202734/vxq6xjh7cqwhhlcsz3wo.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1632203132/iqfbomxodc6rmqxsdvoi.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1632203132/w20epnpd4qwxrl55kduc.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/sproutbox/indira-nagar-mysore-msr001
    id: 4,
    name: 'SproutBox',
    area: 'Indira nagar',
    location: 'Indira nagar, Mysuru',
    address: 'Mall Of Mysore, Indira nagar, Mysuru, Karnataka',
    phone: null,
    hours: '8:00 AM – 9:00 PM, Mon–Sun',
    amenities: ['Meeting Rooms'],
    capacity: 90,
    price: '₹7,699',
    period: '/ month',
    priceFormatted: '₹7,699 / month',
    deskPrice: '₹7,699',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1556521970/hdgl4e8husu1rbxkox0z.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1556522040/vtnokhlquougzaa6f4zy.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1556522040/zyrj44uownld8hq7ei1m.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/sproutbox/indiranagar-extension-mysuru-mys006
    id: 5,
    name: 'SproutBox',
    area: 'Indiranagar Extension',
    location: 'Indiranagar Extension, Mysuru',
    address: 'Near Mall Of Mysore, Indiranagar Extension, Mysuru, Karnataka',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    capacity: 90,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1584951332/ymncwcqlhkeysbaqwfux.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1584951703/crdqsppyelpfdvvj8osr.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1584951701/a8ypsvfvd08ac7qpkcvb.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/myofficespace/jayalakshmipuram-mysore-msr002
    id: 6,
    name: 'Myofficespace',
    area: 'Jayalakshmipuram',
    location: 'Jayalakshmipuram, Mysuru',
    address: 'Near BM Habitat Mall, Jayalakshmipuram, Mysuru, Karnataka',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Meeting Rooms', 'Air Conditioning', 'Lounge'],
    capacity: 250,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1556175123/msmsvqjp0rzllfddqefe.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1580276479/dv3hdglfuodzbfwrfehs.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1580276479/gfjlqa9ytq3u5ox7kyfm.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/mikro-grafeio/vani-vilas-mohalla-mysore-msr007
    id: 7,
    name: 'Mikro Grafeio',
    area: 'Vani Vilas Mohalla',
    location: 'Vani Vilas Mohalla, Mysuru',
    address: 'Near Star Point, Vani Vilas Mohalla, Mysuru, Karnataka',
    phone: null,
    hours: '9:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 37,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/645889563ffbd2a7a3f64901086feca3_An73-vDHV.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/25d30334616bdffa8b5c1cf319099c76_aOiqmOJ65.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/391c2bab8e9ce61bbdc5915ea5582152_uuru_cfdD.JPG'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-4100-hot-desks-nazarbad-mohalla-mysore/ , https://gofloaters.com/office-space/gooffice-4101-4-seater-private-cabin-nazarbad-mohalla-mysore/ , https://gofloaters.com/office-space/gooffice-4099-dedicated-desks-nazarbad-mohalla-mysore/
    id: 8,
    name: 'SproutBox Coworking',
    area: 'Nazarbad Mohalla',
    location: 'Nazarbad Mohalla, Mysuru',
    address: 'Nazarbad Mohalla, Mysuru, Karnataka',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    deskPrice: '₹6,999',
    cabinPrice: '₹1,375',
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FHot%2520Desks%2520%257C%2520Nazarbad%2520Mohalla_1620919122714%3Falt%3Dmedia%26token%3D0b83fdb6-f7f5-419c-bf85-51cc092ada6c.webp?alt=media&token=32c2ebab-e1bc-4348-8867-3f1c48913d85',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FHot%2520Desks%2520%257C%2520Nazarbad%2520Mohalla_1657179458575%3Falt%3Dmedia%26token%3De11dbf05-866f-47be-a2b7-9db990d580ac.webp?alt=media&token=105995a6-17b1-4e0c-8a04-7025bd84b794',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FHot%2520Desks%2520%257C%2520Nazarbad%2520Mohalla_1675948046332%3Falt%3Dmedia%26token%3D2400cae9-1adf-4f44-b872-dad12a31ecf0.webp?alt=media&token=4f7b2068-151a-451b-991c-bba12e9d3694'
    ]
  }
];

export default mysuruMysoreSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const mysuruMysoreNeighborhoods = Object.entries(
  mysuruMysoreSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const mysuruMysoreOfficeCards = mysuruMysoreSpaces.slice(0, 8);
export const moreMysuruMysoreOfficeCards = mysuruMysoreSpaces.slice(8);

export const mysuruMysoreAreas = mysuruMysoreNeighborhoods;

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
// Mysuru Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allMysuruMysoreOfficeCards = mysuruMysoreSpaces;

export const getMysuruMysoreOfficeCardById = (id) => findOfficeBySlug(allMysuruMysoreOfficeCards, id, "mysuru-mysore");
export const getMysuruMysoreOfficeSlug = (space) => officePath(allMysuruMysoreOfficeCards, space, "mysuru-mysore");

// ============================================================================
// Top Coworking Locations in Mysuru — one tile per area, using a photo from a space in that area
// ============================================================================
export const topMysuruMysoreCoworkingLocations = mysuruMysoreNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: mysuruMysoreSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
