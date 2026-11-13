import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Kanpur (Uttar Pradesh) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com, coworkingers.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const kanpurSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-kanpur-kan-chambers , https://www.qdesq.com/brand/my-branch/arya-nagar-kanpur-knp008 , https://coworkingers.com/listing/mybranch-services-pvt-ltd-8/ , https://gofloaters.com/office-space/gooffice-40324-4-seater-private-cabin-kan-chambers-kanpur/ , https://gofloaters.com/office-space/gooffice-40325-dedicated-desks-kan-chambers-kanpur/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Arya Nagar',
    location: 'Arya Nagar, Kanpur',
    address: '2nd Floor , TSP Tower, 9/46/A- (1), Arya Nagar, Benajhabar Road, Kanpur, Uttar Pradesh 208012',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/1741344840_264_11zon.jpg',
      'https://www.mybranch.co.in/office/office_images/kanpur-recep.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/cowo24x7/mall-road-kanpur-knp007
    id: 2,
    name: 'Cowo24x7',
    area: 'Mall Road',
    location: 'Mall Road, Kanpur',
    address: 'Near Heer Palace Cinema, Mall Road, Kanpur, Uttar Pradesh',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 24,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1638511231/gfjvuqgif3eii8s5rjxa.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1638511231/fggyziqolhopvzjkj9td.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1638511231/fdbopvwy493rmkurocjs.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/my-soho/civil-lines-kanpur-knp009
    id: 3,
    name: 'My Soho',
    area: 'Civil Lines',
    location: 'Civil Lines, Kanpur',
    address: 'Near Chandak Imperial Square, Civil Lines, Kanpur, Uttar Pradesh',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 120,
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    deskPrice: '₹8,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/9574cd7eb4b01546c6f7c597560e402a_H-kfXErDz.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/542378adb4c8ba4b9b05ea1177991b45_cAfo3ymF1.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/garg-naronha/civil-lines-kanpur-knp004
    id: 4,
    name: 'Garg Naronha',
    area: 'Civil Lines',
    location: 'Civil Lines, Kanpur',
    address: 'Near Kherepati mandir, Civil Lines, Kanpur, Uttar Pradesh',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    price: '₹6,600',
    period: '/ month',
    priceFormatted: '₹6,600 / month',
    deskPrice: '₹6,600',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1602514274/qg2ncbimafdcdlttlh9b.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1602514320/lrae9rz9in6oxjbenere.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1602514363/athcuyhuybe4ytyzjzsv.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/workobar/civil-lines-kanpur-knp003
    id: 5,
    name: 'Workobar',
    area: 'Civil Lines',
    location: 'Civil Lines, Kanpur',
    address: 'Near Green Park Stadium, Civil Lines, Kanpur, Uttar Pradesh',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms'],
    capacity: 60,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1519112309/ox9ciajb5egejuwhdyjk.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1519113019/phz0o71mjsdywhpaj5lf.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1519113020/tyiymei0nekgusjbtiah.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/workobar/tilak-nagar-kanpur-knp001 , https://coworkingers.com/listing/workobar-coworking-space/ , https://gofloaters.com/office-space/gooffice-30002-open-desks-tilak-nagar-kanpur/
    id: 6,
    name: 'Workobar',
    area: 'Tilak nagar',
    location: 'Tilak nagar, Kanpur',
    address: 'Near Ace Chamber, Tilak nagar, Kanpur, Uttar Pradesh',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms', 'Mail Handling', 'Lounge', 'Pantry', 'Car / Bike Parking', 'Printer'],
    capacity: 85,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1570428881/bxwokfxpl6tuujqgfwrn.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/workforce/sharda-nagar-kanpur-knp010
    id: 7,
    name: 'Workforce',
    area: 'Sharda Nagar',
    location: 'Sharda Nagar, Kanpur',
    address: 'Near Anurag Hospital, Sharda Nagar, Kanpur, Uttar Pradesh',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'Mail Handling', 'Air Conditioning', 'High Speed WiFi', 'Lounge'],
    capacity: 100,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/4710d5b0fbb0cbabc305a91fb30f5dd2_fLljgPJ7G.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/d385ae0569d5cb6c2d0aa30befee8d12_Ne0sE9L-s-.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/b553c774dca7057ea1abd8159c1457b1_kLYFHoZrN.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/coworkers-india/
    id: 8,
    name: 'Coworkers India',
    area: 'Shyam Nagar',
    location: 'Shyam Nagar, Kanpur',
    address: '78-79, Ramadevi Bypass Road, Shyam Nagar, Kanpur, Uttar Pradesh 208015',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_5019.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_5067.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_5109.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/cowo24x7/
    id: 9,
    name: 'CoWo24x7',
    area: 'Darshan Purwa',
    location: 'Darshan Purwa, Kanpur',
    address: 'Gumti No.5, Darshan Purwa, Kanpur, Uttar Pradesh',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/header_1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_9350.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_9357.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/bahi-khata-startup-incubation-center/
    id: 10,
    name: 'Bahi Khata Startup Incubation Center',
    area: 'Shyam Nagar',
    location: 'Shyam Nagar, Kanpur',
    address: '762, C Block, Shyam Nagar, Kanpur, Uttar Pradesh',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_20230419_124253.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_20230419_124448.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_20230419_124501.jpg'
    ]
  }
];

export default kanpurSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const kanpurNeighborhoods = Object.entries(
  kanpurSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const kanpurOfficeCards = kanpurSpaces.slice(0, 8);
export const moreKanpurOfficeCards = kanpurSpaces.slice(8);

export const kanpurAreas = kanpurNeighborhoods;

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
// Kanpur Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allKanpurOfficeCards = kanpurSpaces;

export const getKanpurOfficeCardById = (id) => findOfficeBySlug(allKanpurOfficeCards, id, "kanpur");
export const getKanpurOfficeSlug = (space) => officePath(allKanpurOfficeCards, space, "kanpur");

// ============================================================================
// Top Coworking Locations in Kanpur — one tile per area, using a photo from a space in that area
// ============================================================================
export const topKanpurCoworkingLocations = kanpurNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: kanpurSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
