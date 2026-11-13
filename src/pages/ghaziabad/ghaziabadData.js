import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Ghaziabad (Uttar Pradesh) coworking spaces, compiled 13 Nov 2026 from qdesq.com, coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - MyTime Cowork: Qdesq uses the same photos as Meenu Coworking Space
//  - DeskNow Cowork: Qdesq uses the same photos as Meenu Coworking Space
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const ghaziabadSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/meenu-coworking-space/rdc-ghaziabad-ghz026
    // Qdesq shows the same photos under MyTime Cowork and DeskNow Cowork, so they are listed once here.
    id: 1,
    name: 'Meenu Coworking Space',
    area: 'RDC',
    location: 'RDC, Ghaziabad',
    address: 'Near C Block, RDC, Ghaziabad, Uttar Pradesh',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 50,
    price: '₹3,500',
    period: '/ month',
    priceFormatted: '₹3,500 / month',
    deskPrice: '₹3,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/03443c97bbde4168b8ce9b432b6bbae2_qRetU4jUwi.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/523d6d3dd65efa791bdb8ecf7d8d986e_g9jZ_8Uu2.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/b33e195f325e3dceb1ddd7ef632fceb2_TQc33t4zf.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/50066234bc5952122bddf475cc7e3dfd_mhPEWFKYX.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/techouse-hub/govindpuram-ghaziabad-ghz013
    id: 2,
    name: 'TecHouse Hub',
    area: 'Govindpuram',
    location: 'Govindpuram, Ghaziabad',
    address: 'Near VLCC Salon, Govindpuram, Ghaziabad, Uttar Pradesh',
    phone: null,
    hours: '8:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 60,
    price: '₹3,500',
    period: '/ month',
    priceFormatted: '₹3,500 / month',
    deskPrice: '₹3,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1626341319/qlp8m1jga2icidonzwqc.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1626341317/urngueeeuosvmiv4kcj5.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1626341317/zien1geqn3ozemkmylwj.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1626341317/odqwbxkgrs8zolwuze2e.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/wfh-coworking/indirapuram-ghaziabad-ghz019
    id: 3,
    name: 'WFH Coworking',
    area: 'Indirapuram',
    location: 'Indirapuram, Ghaziabad',
    address: 'Near Mall Road, Indirapuram, Ghaziabad, Uttar Pradesh',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sun',
    amenities: ['Meeting Rooms', 'Air Conditioning', 'High Speed WiFi'],
    capacity: 40,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1710485025/jhglssvl0wtgxhc8j4cx.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1710485036/mhhfzbknrbhmjwa3uvuo.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1710496704/l0q9bwvobcycspxdnhjx.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1710496705/f52d8g5nsnukahftexku.webp'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/combispace/ , https://coworkingers.com/listing/combispace-2/
    id: 4,
    name: 'Combispace',
    area: 'Indirapuram',
    location: 'Indirapuram, Ghaziabad',
    address: 'Gyan Khand II, Indirapuram, Ghaziabad, Uttar Pradesh, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Lounge', 'Pantry', 'Car / Bike Parking', 'Printer', 'Tea/Coffee'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-11-12-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/15977399350056329931445825346374-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-05-16-1-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/the-work-station/
    id: 5,
    name: 'The Work Station',
    area: 'Indirapuram',
    location: 'Indirapuram, Ghaziabad',
    address: 'Mayur Vihar, Niti Khand 2, Indirapuram, Ghaziabad, Uttar Pradesh 201014, India',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_20220525_183035-1-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_20220803_174121-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_20220803_174145-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/team-up-cowork/
    id: 6,
    name: 'Team Up Cowork',
    area: 'Civil Lines',
    location: 'Civil Lines, Ghaziabad',
    address: 'Allahabad Bank, Sector 8, Civil Lines, Ghaziabad, Uttar Pradesh, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: '₹4,499',
    period: '/ month',
    priceFormatted: '₹4,499 / month',
    deskPrice: '₹4,499',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/11-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/13268006_10154030944411013_1953489330213626179_o-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_20191026_141409-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_20191026_143241-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/co-working-space-by-dhairya/
    id: 7,
    name: 'Co-working Space by Dhairya',
    area: 'Pratap Vihar',
    location: 'Pratap Vihar, Ghaziabad',
    address: 'G Block Park, G Block, Sector-11, Pratap Vihar, Ghaziabad, Uttar Pradesh 201009, India',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/Spacious-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/WhatsApp-Image-2022-07-15-at-8.10.10-PM-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/WhatsApp-Image-2022-07-15-at-8.10.11-PM-1-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/WhatsApp-Image-2022-07-15-at-8.10.13-PM-1-min.jpeg'
    ]
  }
];

export default ghaziabadSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const ghaziabadNeighborhoods = Object.entries(
  ghaziabadSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const ghaziabadOfficeCards = ghaziabadSpaces.slice(0, 8);
export const moreGhaziabadOfficeCards = ghaziabadSpaces.slice(8);

export const ghaziabadAreas = ghaziabadNeighborhoods;

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
// Ghaziabad Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allGhaziabadOfficeCards = ghaziabadSpaces;

export const getGhaziabadOfficeCardById = (id) => findOfficeBySlug(allGhaziabadOfficeCards, id, "ghaziabad");
export const getGhaziabadOfficeSlug = (space) => officePath(allGhaziabadOfficeCards, space, "ghaziabad");

// ============================================================================
// Top Coworking Locations in Ghaziabad — one tile per area, using a photo from a space in that area
// ============================================================================
export const topGhaziabadCoworkingLocations = ghaziabadNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: ghaziabadSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
