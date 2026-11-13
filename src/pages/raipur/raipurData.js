import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Raipur (Chhattisgarh) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, gofloaters.com, qdesq.com, coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - S.PACE (address not in Raipur: none)
//  - Zenith Co-Working Space (address not in Raipur: none)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const raipurSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-raipur-shubham-corporate , https://gofloaters.com/office-space/gooffice-40402-4-seater-private-cabin-shubham-corporate-raipur/ , https://gofloaters.com/office-space/gooffice-40403-dedicated-desks-shubham-corporate-raipur/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Shubham Corporate',
    location: 'Shubham Corporate, Raipur',
    address: 'Shop / Office no.205, 2nd Floor, Shubham Corporate Telebandha, Raipur(C.G)-492006',
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
      'https://www.mybranch.co.in/office/office_images/raipur_rep.webp',
      'https://www.mybranch.co.in/office/office_images/raipur_cw.webp',
      'https://www.mybranch.co.in/office/office_images/raipur_mr.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/incubeworkspaces/ramsagar-para-raipur-rpr006
    id: 2,
    name: 'Incubeworkspaces',
    area: 'Ramsagar Para',
    location: 'Ramsagar Para, Raipur',
    address: 'Near Mamta Hospital, Ramsagar Para, Raipur, Chhattisgarh',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Fri',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    price: '₹4,180',
    period: '/ month',
    priceFormatted: '₹4,180 / month',
    deskPrice: '₹4,180',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1592385467/jtmk6jqqzvt0w2s84pbb.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1592385524/zkyqerr2erygtdzqsicb.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/lets-work/moudhapara-raipur-rpr007
    id: 3,
    name: 'Lets Work',
    area: 'Moudhapara',
    location: 'Moudhapara, Raipur',
    address: 'Opposite indian Post office, Moudhapara, Raipur, Chhattisgarh',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    price: '₹3,300',
    period: '/ month',
    priceFormatted: '₹3,300 / month',
    deskPrice: '₹3,300',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1594809583/vi401kbeekkqdiyfy9yy.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1594809616/jbdd34vjudcelbugk3vl.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1594809653/bqgwexrsrqfyrgzezqfw.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/kursi/geeta-nagar-raipur-rpr040
    id: 4,
    name: 'Kursi Co-work',
    area: 'Samta Colony',
    location: 'Samta Colony, Raipur',
    address: 'Near Great Eastern Rd, Samta Colony, Raipur, Chhattisgarh',
    phone: null,
    hours: null,
    amenities: ['Mail Handling', 'Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 200,
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/65ff3042409cf7c9d1406a4d9561b1af_DY6mGBMww.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/d08197c585a4815bacffa1a10fd208de_IQInQFq7F.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/e220cb9d160cf9492229d1c398b20c5f_rbbe0HKE7.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/space/govind-nagar-rd-raipur-rpr004
    id: 5,
    name: 'S.Pace',
    area: 'Govind nagar rd',
    location: 'Govind nagar rd, Raipur',
    address: 'Near Dr Manoj Agrwal, Govind nagar rd, Raipur, Chhattisgarh',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms'],
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1620035192/jcncgamdxtn7ct2eotjn.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1620035103/ffrpmrjdxwjlu54veeym.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1620035163/mamddsbn29rwwpvxdxnb.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/firstup-spaces/civil-lines-raipur-division-rai019 , https://coworkingers.com/listing/firstup-spaces-pvt-ltd/
    id: 6,
    name: 'FirstUp Spaces',
    area: 'Civil Lines',
    location: 'Civil Lines, Raipur',
    address: 'Gore Parisar, Civil Lines, Raipur, Chhattisgarh',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning', 'Mail Handling', 'Tea/Coffee', 'Car / Bike Parking', 'Printer'],
    capacity: 300,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1673506192/eaxgtoleotbp4l9ct1np.avif',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1692603658/ggexanf4y3wapukf255q.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1692605826/g5kvxcc6hnzvvtexws4c.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/qube-coworking/rajeev-nagar-raipur-rpr005 , https://coworkingers.com/listing/qube-cowork/
    id: 7,
    name: 'Qube Coworking',
    area: 'Rajeev Nagar',
    location: 'Rajeev Nagar, Raipur',
    address: 'nearby city center mall, Rajeev Nagar, Raipur, Chhattisgarh',
    phone: null,
    hours: '10:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms', 'Pantry', 'Housekeeping', 'Car / Bike Parking', 'Printer'],
    price: '₹4,400',
    period: '/ month',
    priceFormatted: '₹4,400 / month',
    deskPrice: '₹4,400',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1592287356/aunqtos9j7la9rfezs2o.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1592289915/y5bjw6wzta58t5twjofs.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1592287904/xksrf1q54a2bowvx44e5.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/workie/amanaka-raipur-rpr001
    id: 8,
    name: 'Workie',
    area: 'Amanaka',
    location: 'Amanaka, Raipur',
    address: 'Near Bangali Durga Mandir Amanaka, Amanaka, Raipur, Chhattisgarh',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Mail Handling', 'Air Conditioning', 'High Speed WiFi'],
    price: '₹4,950',
    period: '/ month',
    priceFormatted: '₹4,950 / month',
    deskPrice: '₹4,950',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1579075438/khxad0v6cdyasuojfgab.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1579157828/qbetzyjophcxi2bdnbms.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1579157828/m7m4suebgfmgziewbxfy.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/innov8/ravanbhatha-raipur-rpr039
    id: 9,
    name: 'Innov8',
    area: 'Ravanbhatha',
    location: 'Ravanbhatha, Raipur',
    address: 'Near ISBT bus stand, Ravanbhatha, Raipur, Chhattisgarh',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 1,
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/236999eb39798c0091653d7655502f7e_99FyzLt_E.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/dbb6f9a9ca7c85ca4fbcbfe5a4184a56_dpOnrA2f2.JPG'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/mutuals/
    id: 10,
    name: 'Mutuals',
    area: 'New Shanti Nagar',
    location: 'New Shanti Nagar, Raipur',
    address: '11/2122, Street 5, opp. Dr. Lal Path Lab, New Shanti Nagar, Raipur, Chhattisgarh 492007',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹3,300',
    period: '/ month',
    priceFormatted: '₹3,300 / month',
    deskPrice: '₹3,300',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-10-17-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/vibe-coworking-space/
    id: 11,
    name: 'Vibe Coworking Space',
    area: 'Shankar Nagar',
    location: 'Shankar Nagar, Raipur',
    address: 'Avanti Vihar Road, Kavita Nagar, Geetanjali Colony, Shankar Nagar, Raipur, Chhattisgarh 492001',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹2,999',
    period: '/ month',
    priceFormatted: '₹2,999 / month',
    deskPrice: '₹2,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2022-04-30-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_7006-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/premisin/
    id: 12,
    name: 'Premisin',
    area: 'Vallabh Nagar',
    location: 'Vallabh Nagar, Raipur',
    address: 'C245, 246/6, Vallabh Nagar, Behind Union Bank Priyadarshini Nagar Branch, near Pachpedi Naka, Raipur, Chhattisgarh 492001',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: '₹4,400',
    period: '/ month',
    priceFormatted: '₹4,400 / month',
    deskPrice: '₹4,400',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-02-11-1-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-02-11-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/office-space-in-raipur-1-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/36inc/
    id: 13,
    name: '36INC',
    area: 'Pandri',
    location: 'Pandri, Raipur',
    address: 'Pandri Rd, Pandri, Raipur, Chhattisgarh 492004',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2019-02-05-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_20180627_185657-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/premisin-rio-mall/
    id: 14,
    name: 'Premisin – Rio Mall',
    area: 'Devpuri Rd',
    location: 'Devpuri Rd, Raipur',
    address: 'Shop No 29, Second Floor, Rio Mall, Devpuri Rd, Raipur, Chhattisgarh 492001',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-09-09-1-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-09-09-2-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-09-09-3-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/premisin-agrasen-chowk/
    id: 15,
    name: 'Premisin – Agrasen Chowk',
    area: 'Nagar Nigam Colony',
    location: 'Nagar Nigam Colony, Raipur',
    address: 'Agrasen Chowk, Nagar Nigam Colony, Raipur, Chhattisgarh',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2022-11-07-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/AGC-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/photo_2022-09-06_11-13-58-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/premisin-royal-tower/
    id: 16,
    name: 'Premisin – Royal Tower',
    area: 'Tikrapara',
    location: 'Tikrapara, Raipur',
    address: 'Lalganga Business Park, Raipur - Abhanpur Road, Navjeevan Society, Pachpedi Naka, Tikrapara, Chhattisgarh',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Lounge', 'Car / Bike Parking', 'Printer'],
    price: '₹12,500',
    period: '/ month',
    priceFormatted: '₹12,500 / month',
    deskPrice: '₹12,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_4350-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/deep-into-the-zone/
    id: 17,
    name: 'Deep into the Zone',
    area: 'Devendra Nagar',
    location: 'Devendra Nagar, Raipur',
    address: 'Shuddhi Hiims (Raipur) Ayurveda Clinic, near SBI ATM, opposite Bala Jee English Medium School, Sector 2, Jagriti Nagar, Devendra Nagar, Raipur, Chhattisgarh',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2022-11-29-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/coffee-min.jpg'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-33003-open-desks-dumartarai-raipur/ , https://gofloaters.com/office-space/gooffice-33005-6-seater-private-cabin-dumartarai-raipur/ , https://gofloaters.com/office-space/gooffice-33004-manager-cabin-dumartarai-raipur/
    id: 18,
    name: 'Kursi Cowork',
    area: 'Dumartarai',
    location: 'Dumartarai, Raipur',
    address: 'Dumartarai, Raipur, Chhattisgarh',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: '₹1,083',
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FFlexible%2520Seats_1760180365285%3Falt%3Dmedia%26token%3D35225cc0-5abf-4d5e-a967-f549a238c464.webp?alt=media&token=f8c98beb-ce81-4863-b8e7-d385796ba7de',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FFlexible%2520Seats_1760180380623%3Falt%3Dmedia%26token%3D729dfced-c8db-49d3-8cca-145d157511b0.webp?alt=media&token=395d8b04-c11e-4cee-9d8e-2f75dea76adc',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FFlexible%2520Seats_1760180395306%3Falt%3Dmedia%26token%3D7fe85977-dcc9-4df3-b594-37eea8107481.webp?alt=media&token=0d71e4f3-3316-4c88-8de7-ece8c0d59618'
    ]
  }
];

export default raipurSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const raipurNeighborhoods = Object.entries(
  raipurSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const raipurOfficeCards = raipurSpaces.slice(0, 8);
export const moreRaipurOfficeCards = raipurSpaces.slice(8);

export const raipurAreas = raipurNeighborhoods;

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
// Raipur Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allRaipurOfficeCards = raipurSpaces;

export const getRaipurOfficeCardById = (id) => findOfficeBySlug(allRaipurOfficeCards, id, "raipur");
export const getRaipurOfficeSlug = (space) => officePath(allRaipurOfficeCards, space, "raipur");

// ============================================================================
// Top Coworking Locations in Raipur — one tile per area, using a photo from a space in that area
// ============================================================================
export const topRaipurCoworkingLocations = raipurNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: raipurSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
