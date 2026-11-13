import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Guwahati (Assam) coworking spaces, compiled 13 Nov 2026 from qdesq.com, mybranch.co.in, coworkingers.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const guwahatiSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/beyond-offices/ulubari-guwahati-ght023
    id: 1,
    name: 'Beyond Offices',
    area: 'Ulubari',
    location: 'Ulubari, Guwahati',
    address: 'Near Apollo Clinic, Ulubari, Guwahati, Assam',
    phone: null,
    hours: '8:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Air Conditioning', 'Mail Handling'],
    capacity: 120,
    price: '₹7,304',
    period: '/ month',
    priceFormatted: '₹7,304 / month',
    deskPrice: '₹7,304',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/8bd406ac0bd77f35b04de244de226966_MdaFX2gou.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/45ac3329cd447fe08f427197bafdb8d7_e4kdADeSA.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/558a681ed45018e69518b791b9b15531_8x6xebUns.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/ebab42702dc4288e4fa4ef8afd4f87be_7lrGAZNOX.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/my-branch/ulubari-guwahati-ght014 , https://www.mybranch.co.in/coworking-space-in-guwahati-royal-centre
    id: 2,
    name: 'MyBranch Coworking Space',
    area: 'Ulubari',
    location: 'Ulubari, Guwahati',
    address: '1st Floor, Royal Centre, GS Road, Ulubari, Guwahati, Assam 781007',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Fri',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 50,
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1668676661/udbrrr49jsveh56httfz.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1668676592/xsv6e5vtxkkbbb0cxax5.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1668676567/mih64v1s6ob7clbwy2fx.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1668676571/wivpw6uguvk8bt3rfopa.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/work-studio/bhangagarh-guwahati-ght017
    id: 3,
    name: 'Work Studio',
    area: 'Bhangagarh',
    location: 'Bhangagarh, Guwahati',
    address: 'Near Roodraksh Mall, Bhangagarh, Guwahati, Assam',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    capacity: 50,
    price: '₹7,500',
    period: '/ month',
    priceFormatted: '₹7,500 / month',
    deskPrice: '₹7,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1676362939/irj8ktp8ymhuw4nicjun.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1676362923/lbwps5wgha5sqibbig2v.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1676362923/ovy7b8qiegn3iawul0wc.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1676363103/i32onpcyyj4ry83wfzbw.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/awfis/g-s-road-guwahati-ght019
    id: 4,
    name: 'Awfis',
    area: 'GS Road',
    location: 'GS Road, Guwahati',
    address: 'Near Exotica Arcade, GS Road, Guwahati, Assam',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 477,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/a4f2d3f2c778f2da284ddcad77fd159e_sPm-YkxkS.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/4cd4ebcd6dfe16b7d18dbdb6a64a011b_io8jqxgIV.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/26828498b29a9995c42aa91b17f1fd41_IyHvN43n5.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/8c5201c4e9f78fd32aaaffb4a06abbac_pxU-R7hv6.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/ia-spaces-by-india-accelerator/sree-nagar-guwahati-ght021
    id: 5,
    name: 'IA Spaces by India Accelerator',
    area: 'Sree Nagar',
    location: 'Sree Nagar, Guwahati',
    address: 'Near Golden Heights, Sree Nagar, Guwahati, Assam',
    phone: null,
    hours: null,
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
      'https://ik.imagekit.io/qdesq/qdesq/c51a4a6c29eb6314f7990e514feaba6c_fdzEWyOhj.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/a745e30d646d91f464a0a629466a49c5_mfx7ANQRG.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/901760337792ec7098756749815563fb_QdnwdUBCE.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/2884aad11064c2ce5a03e26d67b3a467_aLxn24xLpL.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/shreeji-tower/christian-basti-guwahati-ght004 , https://coworkingers.com/listing/shreeji-business-center/
    id: 6,
    name: 'Shreeji Business Center',
    area: 'Christian Basti',
    location: 'Christian Basti, Guwahati',
    address: 'Shreeji Tower, GS Road, Kaligaon, Christian Basti, Guwahati, Assam 781005, India',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['Mail Handling', 'Air Conditioning', 'High Speed WiFi', 'Tea/Coffee', 'Car / Bike Parking', 'Printer'],
    capacity: 200,
    price: '₹10,000',
    period: '/ month',
    priceFormatted: '₹10,000 / month',
    deskPrice: '₹10,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1567411760/bh1lzb2xlgocewrnapfi.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1567411789/kffolipn12lh9bpihfgu.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1567411790/f6fd1saakfi60p23bu1g.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/officetribe-coworking/gs-road-guwahati-ght012 , https://coworkingers.com/listing/officetribe-coworking-space-2/ , https://gofloaters.com/office-space/gooffice-27003-open-desks-christian-basti-guwahati/
    id: 7,
    name: 'Officetribe Coworking',
    area: 'Christian Basti',
    location: 'Christian Basti, Guwahati',
    address: 'Shreeji Tower, GS Rd, Kaligaon, Christian Basti, Guwahati, Assam 781005, India',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sun',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1670584238/wi2glnaea4cloj2vww4o.webp',
      'https://ik.imagekit.io/qdesq/qdesq/fd7bb944502084a89d08917a68063192_SkdyUFUMO.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/0ff02edcea993b4ba4c15c2cb72a80de_0TdtfqJkr.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/01ddc090af02806e49a7e263fbc1f7f9_qiWWs_JZz.JPG'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/surya-business-centre/
    id: 8,
    name: 'Surya Business Centre',
    area: 'Christian Basti',
    location: 'Christian Basti, Guwahati',
    address: '503, GS Rd, Christian Basti, Guwahati, Assam 781034, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Mail Handling', 'Car / Bike Parking', 'Storage', 'Printer'],
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_2-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_9604-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/img-24-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/img-27-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/omaya-office-co-working-space-2/
    id: 9,
    name: 'Omaya Office Co-working Space',
    area: 'Chenikuthi',
    location: 'Chenikuthi, Guwahati',
    address: 'Kalpana Market, Maniram Dewan Road, Chenikuthi, Guwahati, Assam, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹3,500',
    period: '/ month',
    priceFormatted: '₹3,500 / month',
    deskPrice: '₹3,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/WhatsApp-Image-2021-02-21-at-6.13.09-PM-min.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/boxally-the-coworking-space-in-guwahati/
    id: 10,
    name: 'Boxally - The Coworking Space',
    area: 'Rukmini Gaon',
    location: 'Rukmini Gaon, Guwahati',
    address: 'Aditya Tower, Rukmini Gaon, Guwahati, Assam, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Lounge', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/1-min-1.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2-min-4.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/3-min-4.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/4-min-2.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/exotica-workspace/
    id: 11,
    name: 'Exotica Workspace',
    area: 'Manik Nagar',
    location: 'Manik Nagar, Guwahati',
    address: 'Exotica Workspace, 191, RG Baruah Road, Manik Nagar, Guwahati, Assam 781005, India',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-04-21-1-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-04-21-2-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-04-21-3-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-04-21-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/the-arkchive/
    id: 12,
    name: 'The Arkchive',
    area: 'Beltola',
    location: 'Beltola, Guwahati',
    address: 'Survey, Beltola,, Samannay Path, Beltola Tiniali, Guwahati, Assam 781028, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Lounge', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    deskPrice: '₹5,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG-20220705-WA0007-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG-20220705-WA0009-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG-20220705-WA0010-min.jpg'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-27011-open-desks-bhangagarh-guwahati/ , https://coworkingers.com/listing/coworking-studio-guwahati/
    id: 13,
    name: 'Coworking Studio',
    area: 'Bhangagarh',
    location: 'Bhangagarh, Guwahati',
    address: 'Bhangagarh, Guwahati, Assam',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: '₹8,125',
    period: '/ month',
    priceFormatted: '₹8,125 / month',
    deskPrice: '₹8,125',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk_1697026293345%3Falt%3Dmedia%26token%3D9d5d673c-d2d0-4945-8063-bef1487dee9e.webp?alt=media&token=bac0b0ab-c3a8-4eec-b235-5871ae17ec32',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk_1697026299911%3Falt%3Dmedia%26token%3D0610df93-8cf4-461f-a2ef-030099ceda50.webp?alt=media&token=d7b93c79-fa05-412b-8e78-b0079b5a91b8',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk_1697026314933%3Falt%3Dmedia%26token%3De81a6971-84b6-466b-a924-e0b33d7f4697.webp?alt=media&token=862e3440-c400-4fea-bdc5-439bbf386201',
      'https://coworkingers.com/wp-content/uploads/2023/08/20210709230845_IMG_0600-min.jpg'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-27006-open-desks-ambikagirinagar-guwahati/
    id: 14,
    name: 'Coworkers Hub',
    area: 'Ambikagirinagar',
    location: 'Ambikagirinagar, Guwahati',
    address: 'Ambikagirinagar, Guwahati, Assam',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    deskPrice: '₹8,500',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk_1697027186545%3Falt%3Dmedia%26token%3D50f76a54-5bfa-492a-92d4-ead922cb962e.webp?alt=media&token=47cac1f3-0719-4714-be51-ae6cb88165dc',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk_1697027202717%3Falt%3Dmedia%26token%3Da9d5f35b-6d8f-409f-aeb4-0735a232ba01.webp?alt=media&token=3e29dcb0-1426-41eb-8ae0-dfc5d27bba04',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk_1697027212901%3Falt%3Dmedia%26token%3D000240e7-be83-4edc-9047-614f3f60fd26.webp?alt=media&token=f4405289-fada-4253-8994-e9f97f6cc00c'
    ]
  }
];

export default guwahatiSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const guwahatiNeighborhoods = Object.entries(
  guwahatiSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const guwahatiOfficeCards = guwahatiSpaces.slice(0, 8);
export const moreGuwahatiOfficeCards = guwahatiSpaces.slice(8);

export const guwahatiAreas = guwahatiNeighborhoods;

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
// Guwahati Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allGuwahatiOfficeCards = guwahatiSpaces;

export const getGuwahatiOfficeCardById = (id) => findOfficeBySlug(allGuwahatiOfficeCards, id, "guwahati");
export const getGuwahatiOfficeSlug = (space) => officePath(allGuwahatiOfficeCards, space, "guwahati");

// ============================================================================
// Top Coworking Locations in Guwahati — one tile per area, using a photo from a space in that area
// ============================================================================
export const topGuwahatiCoworkingLocations = guwahatiNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: guwahatiSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
