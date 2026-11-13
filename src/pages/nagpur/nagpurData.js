import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Nagpur (Maharashtra) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com, gofloaters.com, coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - Chaos Theory (Nagpur) (closed)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const nagpurSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-nagpur-salasar-park , https://www.qdesq.com/brand/my-branch/ganeshpeth-colony-nagpur-ngp026 , https://gofloaters.com/office-space/gooffice-40423-4-seater-private-cabin-salasar-park-nagpur/ , https://gofloaters.com/office-space/gooffice-40424-dedicated-desks-salasar-park-nagpur/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Ganeshpeth Colony',
    location: 'Ganeshpeth Colony, Nagpur',
    address: 'Salasar Park-1, Block No. 101, 1st Floor, Plot No-G-121/1, on the canara bank law collage square, Gorepeth Road, Dharampeth, Nagpur - 440010',
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
      'https://www.mybranch.co.in/office/office_images/nagpur_rep.webp',
      'https://www.mybranch.co.in/office/office_images/nagpur_caf.webp',
      'https://www.mybranch.co.in/office/office_images/nagpur_cw.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/stint-studio/tilak-nagar-nagpur-ngp016 , https://gofloaters.com/office-space/gooffice-6504-open-desks-tilak-nagar-nagpur/ , https://gofloaters.com/office-space/gooffice-6507-4-seater-private-cabin-tilak-nagar-nagpur/
    id: 2,
    name: 'Stint Studio',
    area: 'Tilak Nagar',
    location: 'Tilak Nagar, Nagpur',
    address: 'Near Meghranjani Apartment, Tilak Nagar, Nagpur, Maharashtra',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: '₹1,375',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1609157168/nqmarlrkeodxnsjpfm5b.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1524125061/ukxnocj7ybwmbr293ipa.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1524124584/h3bv0sob6qe4b3puufuk.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/cube-space-business-center/sitabuldi-nagpur-ngp013 , https://coworkingers.com/india/maharashtra/nagpur/cube-space-coworking/
    id: 3,
    name: 'Cube Space Business Center',
    area: 'Sitabuldi',
    location: 'Sitabuldi, Nagpur',
    address: 'Near Shri Madan Mohan Lal Ji Ki Haveli, Sitabuldi, Nagpur, Maharashtra',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning', 'Housekeeping', 'Car / Bike Parking'],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1612172685/vo4glyjaubio9s9a1dzc.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1612173192/n8tcnp4pv9kmgrnfhmoy.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/mbw-coworking/sitabuldi-nagpur-ngp024
    id: 4,
    name: 'MBW CoWorking',
    area: 'Manish Nagar',
    location: 'Manish Nagar, Nagpur',
    address: 'Near Beltarodi, Manish Nagar, Nagpur, Maharashtra',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Mail Handling', 'High Speed WiFi', 'Air Conditioning', 'Lounge'],
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1637648705/csdgldpstn4acug42r5w.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1637648705/vc5jnjewaxiuzrrrfybd.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1637648705/l68dbdhbrxjf8iw6eav3.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/stint-studio/sitabuldi-nagpur-ngp030 , https://gofloaters.com/office-space/gooffice-6506-open-desks-sitabuldi-nagpur/
    id: 5,
    name: 'Stint Studio',
    area: 'Sitabuldi',
    location: 'Sitabuldi, Nagpur',
    address: 'Near Buty Chambers, Sitabuldi, Nagpur, Maharashtra',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 40,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677487103/yzzyvkruw1ro2qen5fmv.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677487005/tbag8avxnyjchhyhvxb5.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677487004/vivxb24mvbd5wcq6ky1x.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/wfh-creative-coworking-space/hanuman-nagar-nagpur-ngp028
    id: 6,
    name: 'WFH Creative Coworking Space',
    area: 'Hanuman Nagar',
    location: 'Hanuman Nagar, Nagpur',
    address: 'Near Ya Taj Hotel, Hanuman Nagar, Nagpur, Maharashtra',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Lounge', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 10,
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1671607043/vumn8dlzngk2ocfeihll.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1671522031/kfuhpb48vgng4kpclfia.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1671607019/mveyu5n7oig38gsvja6h.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/daftar-space/mecosabagh-christian-colony-nagpur-ngp031
    id: 7,
    name: 'Daftar Space',
    area: 'Mecosabagh Christian Colony',
    location: 'Mecosabagh Christian Colony, Nagpur',
    address: 'Near Sethi Apartment, Mecosabagh Christian Colony, Nagpur, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Mail Handling', 'Air Conditioning'],
    capacity: 40,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1703006172/rpiuxjsbxadkm2tx0vy4.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1703160532/oads2vxl1hwvfil5axrt.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1703160531/xgnzjkgxajilpknfthku.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/the-peace-your-co-working-space/shradhanand-peth-square-nagpur-ngp022
    id: 8,
    name: 'The Peace Your Co-working Space',
    area: 'Shradhanand peth Square',
    location: 'Shradhanand peth Square, Nagpur',
    address: 'Near Lush House, Shradhanand peth Square, Nagpur, Maharashtra',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sun',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1649311839/rb3hpgzihfn26wquzvp8.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1649311773/niqvlulu66l7mtv6olcl.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1649311787/bs7asfgyvqu3rpmpwl0u.webp'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/nagpur/eureka-coworking/
    id: 9,
    name: 'Eureka Coworking',
    area: 'Garden',
    location: 'Garden, Nagpur',
    address: '244, W Shankar Nagar Rd, near Shankar Nagar, Shankar Nagar, Garden, Nagpur, Maharashtra 440010',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    deskPrice: '₹6,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/Eureka-Coworking-Nagpur-001-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Eureka-Coworking-Nagpur-002-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Eureka-Coworking-Nagpur-003-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/nagpur/cobrew-cafe/
    id: 10,
    name: 'Cobrew Cafe',
    area: 'Parsodi',
    location: 'Parsodi, Nagpur',
    address: '11-10, Ambazari - Hingna Rd, Parsodi, Nagpur, Maharashtra 440022',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹3,999',
    period: '/ month',
    priceFormatted: '₹3,999 / month',
    deskPrice: '₹3,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/Cobrew-Cafe-Cum-Coworking-Space-Nagpur-001-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Cobrew-Cafe-Cum-Coworking-Space-Nagpur-002-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Cobrew-Cafe-Cum-Coworking-Space-Nagpur-003-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/nagpur/stint-studio-coworking/
    id: 11,
    name: 'Stint Studio Coworking',
    area: 'Meghranjani Apartment',
    location: 'Meghranjani Apartment, Nagpur',
    address: '2A, Tilak Nagar,, Meghranjani Apartment,, Nagpur, Maharashtra 440010',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/Stint-Studio-CōWORKING-Nagpur-001-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Stint-Studio-CōWORKING-Nagpur-002-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Stint-Studio-CōWORKING-Nagpur-003-min.jpg'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-6516-open-desks-jb-thakkar-marg-nagpur/
    id: 12,
    name: 'Zen HQ',
    area: 'JB Thakkar Marg',
    location: 'JB Thakkar Marg, Nagpur',
    address: 'JB Thakkar Marg, Nagpur, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹7,150',
    period: '/ month',
    priceFormatted: '₹7,150 / month',
    deskPrice: '₹7,150',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk_1699359061284%3Falt%3Dmedia%26token%3Dfafd272a-0759-4634-a06a-ea57bfa2de75.webp?alt=media&token=718798a5-6901-4407-9b22-72404be4d700',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk_1699359050487%3Falt%3Dmedia%26token%3Da3c87869-9aac-4c94-b8b1-565321fdf102.webp?alt=media&token=6f0a7b8b-b14b-48d1-9d57-3eb83a8854a2',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Giripeth_1699942594232%3Falt%3Dmedia%26token%3D48e14b94-88f5-476e-a4b5-678e546897ec.webp?alt=media&token=b1874592-ecfc-43f7-94de-2f80208de028'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-6512-open-desks-pratap-nagar-main-rd-nagpur/
    id: 13,
    name: 'Eureka Co-Working',
    area: 'Pratap Nagar Main Rd',
    location: 'Pratap Nagar Main Rd, Nagpur',
    address: 'Pratap Nagar Main Rd, Nagpur, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/images%2FOpen-Desks-Mate-Square_1674546194392.webp?alt=media&token=cf7b0a1d-14ac-4645-8abd-ba53b776f6fc',
      'https://cdn.app.gofloaters.com/images%2FOpen-Desks-Mate-Square_1674546205910.webp?alt=media&token=06e4482f-a922-4664-94e4-394a1123e932',
      'https://cdn.app.gofloaters.com/images%2FOpen-Desks-Mate-Square_1674546226227.webp?alt=media&token=e4939c91-c8c5-4523-b818-bb0a90857db7'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-6518-open-desks-vivekanand-nagar-nagpur/
    id: 14,
    name: 'Working Avenue',
    area: 'Vivekanand Nagar',
    location: 'Vivekanand Nagar, Nagpur',
    address: 'Vivekanand Nagar, Nagpur, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹4,560',
    period: '/ month',
    priceFormatted: '₹4,560 / month',
    deskPrice: '₹4,560',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FFloter%2520and%2520Fixed%2520Desks%2520_1751618816756%3Falt%3Dmedia%26token%3D0cbd7f92-70bd-483a-bba6-75cdd8bb0dfd.webp?alt=media&token=1fcc5683-856c-4ed4-8171-9116fb144aeb',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FFloter%2520and%2520Fixed%2520Desks%2520_1751618846983%3Falt%3Dmedia%26token%3D111f9e5c-fc38-41e4-8555-13766d4e858b.webp?alt=media&token=50ac6c99-71d4-4d75-89bd-2a47a96d89e1',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FFloter%2520and%2520Fixed%2520Desks%2520_1751618879416%3Falt%3Dmedia%26token%3Dd06d265d-f12e-4012-8781-08979723b0ea.webp?alt=media&token=c15ef350-079d-4802-b69c-a5a838161724'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-6502-5-seater-private-cabin-chatrapati-nagar-nagpur/
    id: 15,
    name: 'Eureka Co-Working',
    area: 'Chatrapati Nagar',
    location: 'Chatrapati Nagar, Nagpur',
    address: 'Chatrapati Nagar, Nagpur, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: '₹1,000',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/images%2FCabin_1645019571822.webp?alt=media&token=a1ef911d-fbe4-42a1-b4ac-00bf89058d6d',
      'https://cdn.app.gofloaters.com/images%2FCabin_1645019593966.webp?alt=media&token=3fad7d7b-a52f-43e2-bee5-4e6a0adcdfe7',
      'https://cdn.app.gofloaters.com/images%2FCabin_1645013718890.webp?alt=media&token=aef480bb-b2dc-45f7-a367-1ecedd64d8f8'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-6505-open-desks-kt-nagar-nagpur/
    id: 16,
    name: 'Stint Studio',
    area: 'KT nagar',
    location: 'KT nagar, Nagpur',
    address: 'KT nagar, Nagpur, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/images%2FOpen-Desks-KT-Nagar_1663940078712.webp?alt=media&token=151dc974-fbb4-4584-af80-e5eec4f31064',
      'https://cdn.app.gofloaters.com/images%2FOpen-Desks-KT-Nagar_1663940084411.webp?alt=media&token=94ed5ca0-f94b-400e-86c2-13971e61a242'
    ]
  }
];

export default nagpurSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const nagpurNeighborhoods = Object.entries(
  nagpurSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const nagpurOfficeCards = nagpurSpaces.slice(0, 8);
export const moreNagpurOfficeCards = nagpurSpaces.slice(8);

export const nagpurAreas = nagpurNeighborhoods;

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
// Nagpur Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allNagpurOfficeCards = nagpurSpaces;

export const getNagpurOfficeCardById = (id) => findOfficeBySlug(allNagpurOfficeCards, id, "nagpur");
export const getNagpurOfficeSlug = (space) => officePath(allNagpurOfficeCards, space, "nagpur");

// ============================================================================
// Top Coworking Locations in Nagpur — one tile per area, using a photo from a space in that area
// ============================================================================
export const topNagpurCoworkingLocations = nagpurNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: nagpurSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
