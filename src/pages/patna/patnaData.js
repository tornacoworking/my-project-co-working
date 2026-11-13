import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Patna (Bihar) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, gofloaters.com, qdesq.com, coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - Yaman Enclave (address not in Patna: none)
//  - Cowork Land (address not in Patna: none)
//  - Coworking Studio Kankarbagh (address not in Patna: none)
//  - Boxally (address not in Patna: none)
//  - Oplus Cowork (address not in Patna: none)
//  - DPL Business Coworking Centre (address not in Patna: none)
//  - Symmetry Coworking (address not in Patna: none)
//  - Oplus Cowork – Khajpura (address not in Patna: Near Me)
//  - PRANS ENTERPRISES (not an office)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const patnaSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-patna-rupa-tower , https://gofloaters.com/office-space/gooffice-40400-4-seater-private-cabin-rupa-tower-patna/ , https://gofloaters.com/office-space/gooffice-40401-dedicated-desks-rupa-tower-patna/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Rupa Tower',
    location: 'Rupa Tower, Patna',
    address: '2nd Floor (Part), Rupa Tower, plot No.: 382, Khata No.: 69, Mauza- Saguna, Thana- Dhanapur, Thana No.: 23, Tauji No.: 5292, Registry Office- Patna, District- Patna.801503',
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
      'https://www.mybranch.co.in/office/office_images/patna_rep.webp',
      'https://www.mybranch.co.in/office/office_images/patna_cw.webp',
      'https://www.mybranch.co.in/office/office_images/patna_cw_2.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/ascent-workspaces/kankarbagh-patna-ptn021
    id: 2,
    name: 'Ascent workspaces',
    area: 'Kankarbagh',
    location: 'Kankarbagh, Patna',
    address: 'Near Ram Pal Tower, Kankarbagh, Patna, Bihar',
    phone: null,
    hours: '8:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms'],
    capacity: 35,
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/de9f840d1d1d9b716c642329b121a140_4oDC8-NeH.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/032dfc2816e02485c15c3e0063cb9b8f_t57AcTRZT.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/6626582f813ed4da2d6c3316b0073e7a_RwauhwLhN.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/coworking-studio/fraser-road-patna-ptn013 , https://coworkingers.com/listing/coworking-studio-at-dak-bunglow/ , https://gofloaters.com/office-space/gooffice-9207-open-desks-fraser-road-area-patna/
    id: 3,
    name: 'Coworking Studio',
    area: 'Fraser Road',
    location: 'Fraser Road, Patna',
    address: 'Near Hardi Complex, Fraser Road, Patna, Bihar',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Lounge', 'High Speed WiFi', 'Air Conditioning', 'Tea/Coffee', 'Pantry', 'Car / Bike Parking', 'Printer'],
    capacity: 50,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1675069704/vv5myantmvavlgxtiquu.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1675069727/n4lip6anchmt57vhmdhu.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/work-studio-coworking/pc-colony-patna-ptn001
    id: 4,
    name: 'Work Studio Coworking',
    area: 'PC Colony',
    location: 'PC Colony, Patna',
    address: 'Near Made Easy, Patna, PC Colony, Patna, Bihar',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sun',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 150,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677060168/hewoqe3yz87en0dukmns.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1556022045/lsv9tsvtmx1ez6ctvax2.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677060304/xmdu8hsgzclqwbbrfuq2.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/work-studio-coworking/gandhi-maidan-rd-patna-ptn011
    id: 5,
    name: 'Work Studio Coworking',
    area: 'Gandhi Maidan Rd',
    location: 'Gandhi Maidan Rd, Patna',
    address: 'Near Regent Theatre, Patna, Gandhi Maidan Rd, Patna, Bihar',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1632205200/lqeutpgou2y446euseup.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677060712/fsxfpatlcsqek5bnlltv.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/dpl-business-coworking-centre/boring-road-patna-ptn016
    id: 6,
    name: 'DPL Business Coworking Centre',
    area: 'Boring Road',
    location: 'Boring Road, Patna',
    address: 'Near DPL Centre, Boring Road, Patna, Bihar',
    phone: null,
    hours: '10:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 50,
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1675071672/tnw7rkjxzwwoc6p6bh69.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1675071701/i7anokmjhfvohn5k52cu.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/workspace-co-working/kankarbagh-patna-ptn020
    id: 7,
    name: 'WorkSpace Co-Working',
    area: 'Kankarbagh',
    location: 'Kankarbagh, Patna',
    address: 'Near Kanti Factory Road, Kankarbagh, Patna, Bihar',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Mail Handling', 'Air Conditioning'],
    capacity: 60,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/d2177f33ba0a227b4e93aac00bcf2b49_tjPlDKWua.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/aab61747ebcf7ffa11dd39187a5ff05d_KxEHRY79-.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/dc815ebd414ae4b9ff02defeffda15d1_PXXGAQsfW.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/coworkland/patliputra-colony-patna-ptn004
    id: 8,
    name: 'CoworkLand',
    area: 'Patliputra colony',
    location: 'Patliputra colony, Patna',
    address: 'Near Ruban Hospital, Patliputra colony, Patna, Bihar',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sun',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    capacity: 60,
    price: '₹4,950',
    period: '/ month',
    priceFormatted: '₹4,950 / month',
    deskPrice: '₹4,950',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1579248318/lxg2yvn8zwibffgwfegq.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1579248935/zgvxq7vfu1xsrwxh64ss.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1579248934/vqfsfwudsichkg32gjax.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/boxally/kurji-more-patna-ptn006
    id: 9,
    name: 'Boxally',
    area: 'Kurji More',
    location: 'Kurji More, Patna',
    address: 'Near Universal Tower, Kurji More, Patna, Bihar',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'Lounge', 'High Speed WiFi', 'Meeting Rooms'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677060967/e3i2guvzdgkfl9wvtmsz.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677060933/jtt3i7el88kavbdmh86q.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677060933/ufbj4cvtzr1c9ezs6bse.webp'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/cubical-daftar-cubicles-on-demand/
    id: 10,
    name: 'Cubical Daftar – Cubicles on Demand',
    area: 'Rukanpura',
    location: 'Rukanpura, Patna',
    address: 'Patliputra Station Road, Rukanpura, Patna, Bihar',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-03-02-1-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-03-02-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-03-17-min.jpg'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-9213-dedicated-desks-sri-krishna-puri-patna/
    id: 11,
    name: 'The Modern Cowork',
    area: 'Sri Krishna Puri',
    location: 'Sri Krishna Puri, Patna',
    address: 'Sri Krishna Puri, Patna, Bihar',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FDedicated%2520Desks_1752339397567%3Falt%3Dmedia%26token%3D92ebbd01-b8c7-4b34-bcce-aae0ffd6b23b.webp?alt=media&token=151c4f6f-72b1-41df-aa5d-55b078ed9f57',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FDedicated%2520Desks_1752339410705%3Falt%3Dmedia%26token%3Daeea0108-d9ca-4933-a777-35adf68653e5.webp?alt=media&token=11e07ae4-d8ae-46fb-8b68-550105f6e10c',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FDedicated%2520Desks_1752339403850%3Falt%3Dmedia%26token%3D12578572-4f47-49b1-be40-778d623eb75b.webp?alt=media&token=75e165b1-d472-404c-b523-dad80eeb0a07'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-9203-open-desks-bailey-road-patna/ , https://gofloaters.com/office-space/gooffice-9204-14-seater-private-cabin-bailey-road-patna/
    id: 12,
    name: 'Drowsy Monks Co-Working',
    area: 'Bailey Road',
    location: 'Bailey Road, Patna',
    address: 'Bailey Road, Patna, Bihar',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: '₹286',
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Seats_1660139029859%3Falt%3Dmedia%26token%3D447625b7-e0d1-4681-b5b3-6de0fdeb7aeb.webp?alt=media&token=0bd17745-7a22-4801-8fb8-777eb7a549c9',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Seats_1660139045572%3Falt%3Dmedia%26token%3D62e61768-70a0-49f8-a233-80f5e37ba41b.webp?alt=media&token=d5afacff-dbb6-48a8-988b-1a059642cfa9',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Seats_1660139054133%3Falt%3Dmedia%26token%3D995e4749-0ad6-4048-9b09-a57c3004c35c.webp?alt=media&token=0a07aea9-0878-4ac9-bb61-5a843eb397e3'
    ]
  }
];

export default patnaSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const patnaNeighborhoods = Object.entries(
  patnaSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const patnaOfficeCards = patnaSpaces.slice(0, 8);
export const morePatnaOfficeCards = patnaSpaces.slice(8);

export const patnaAreas = patnaNeighborhoods;

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
// Patna Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allPatnaOfficeCards = patnaSpaces;

export const getPatnaOfficeCardById = (id) => findOfficeBySlug(allPatnaOfficeCards, id, "patna");
export const getPatnaOfficeSlug = (space) => officePath(allPatnaOfficeCards, space, "patna");

// ============================================================================
// Top Coworking Locations in Patna — one tile per area, using a photo from a space in that area
// ============================================================================
export const topPatnaCoworkingLocations = patnaNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: patnaSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
