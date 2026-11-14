import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Kozhikode (Kerala) coworking spaces, compiled 13 Nov 2026 from qdesq.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const kozhikodeCalicutSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/mikro-grafeio/polpaya-mana-kozhikode-khk013
    id: 1,
    name: 'Mikro Grafeio',
    area: 'Polpaya Mana',
    location: 'Polpaya Mana, Kozhikode',
    address: 'Near Puthoor Arcade, Polpaya Mana, Kozhikode, Kerala',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 240,
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1711436537/uqnjrxipyr3whspa2twu.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1711436450/eugdafklkfty5qchvmyd.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1711436475/kuglvorveukkyfeowsul.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/my-work/vandipetta-kozhikode-khk011
    id: 2,
    name: 'MY Work',
    area: 'Vandipetta',
    location: 'Vandipetta, Kozhikode',
    address: 'Near KANNANKANDY MANSION, Vandipetta, Kozhikode, Kerala',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning', 'Lounge'],
    capacity: 150,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1682503900/dlologn6ujalt4ihdvgu.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/kaizen-coworks/kuttichira-kozhikode-khk007 , https://gofloaters.com/office-space/gooffice-9608-open-desks-kuttichira-calicut/
    id: 3,
    name: 'Kaizen Coworks',
    area: 'Kuttichira',
    location: 'Kuttichira, Kozhikode',
    address: 'Near Edele Hotel, Kuttichira, Kozhikode, Kerala',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Mail Handling', 'High Speed WiFi', 'Air Conditioning', 'Lounge'],
    capacity: 94,
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1681810699/adhz6dyvvsb3ootfvori.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1681810610/b43mjhhptzbjpsldlxjc.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1681810610/s9t9f4r6fpthdrddrcol.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/hymod-workspace/pushpa-junction-kozhikode-khk009
    id: 4,
    name: 'Hymod Workspace',
    area: 'Pushpa Junction',
    location: 'Pushpa Junction, Kozhikode',
    address: 'Near Hydaker, Pushpa Junction, Kozhikode, Kerala',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 50,
    price: '₹6,600',
    period: '/ month',
    priceFormatted: '₹6,600 / month',
    deskPrice: '₹6,600',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1681984728/u8h2h0cyko7bsxs94fmj.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1681984704/icr4ukemng8fbpwgflfi.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1681984683/aekkswqwp5qobskpmens.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/wee-spaces/vikas-nagar-housing-colony-kozhikode-khk001
    id: 5,
    name: 'Wee Spaces',
    area: 'Vikas Nagar Housing Colony',
    location: 'Vikas Nagar Housing Colony, Kozhikode',
    address: 'Near St. Paul\'s Church, Vikas Nagar Housing Colony, Kozhikode, Kerala',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi'],
    price: '₹3,500',
    period: '/ month',
    priceFormatted: '₹3,500 / month',
    deskPrice: '₹3,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1584011015/lqccgy31ijfa8xwsksvc.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1584011041/xvwh0gwae6ef9bcbpfhf.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1584011041/w0qignsiwp0gdbpzgdio.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/kohspace/nadakkave-kozhikode-khk010
    id: 6,
    name: 'KohSpace',
    area: 'Nadakkave',
    location: 'Nadakkave, Kozhikode',
    address: 'Near K.S.H.B Complex, Nadakkave, Kozhikode, Kerala',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 40,
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1682313642/gcqmkydwdqdk4tvgqcxk.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1682313629/wv4uxuklgnocaiposg26.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/spaze-one/west-hill-calicut-cal002
    id: 7,
    name: 'Spaze One',
    area: 'West Hill',
    location: 'West Hill, Kozhikode',
    address: 'Near Bridgeway Motors Building, West Hill, Kozhikode, Kerala',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 180,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1700138213/lltnz8zs9t33sd6ovdik.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1700137772/drswmlv5xgbfuyll1dpb.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1700137772/goobwyd4uktk3dz1jtuc.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/kaizen-coworks/west-hill-kozhikode-khk014
    id: 8,
    name: 'Kaizen Coworks',
    area: 'West Hill',
    location: 'West Hill, Kozhikode',
    address: 'Near KRS building, West Hill, Kozhikode, Kerala',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 80,
    price: '₹4,150',
    period: '/ month',
    priceFormatted: '₹4,150 / month',
    deskPrice: '₹4,150',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1716798782/dvh30fd1xuldaogwramj.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1715671043/tq7h0tm98bohuz9di7fn.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1716798737/wowah57xxbublafmckuj.webp'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-9601-open-desks-pantheeramkavu-calicut/
    id: 9,
    name: 'Sandbox Workspaces',
    area: 'Pantheeramkavu',
    location: 'Pantheeramkavu, Kozhikode',
    address: 'Pantheeramkavu, Kozhikode, Kerala',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Kozhikode_1693990015097%3Falt%3Dmedia%26token%3Dc747ec32-e56f-49cd-bfbc-dbc1c798fad2.webp?alt=media&token=c64adb93-8429-40ee-8e75-c250df6c6caf',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Kozhikode_1693990081843%3Falt%3Dmedia%26token%3D12cd5e68-0bd8-494c-a610-39dc46198b32.webp?alt=media&token=2382715d-5f6c-44e3-98dc-78a5feb0846c',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Kozhikode_1693990133857%3Falt%3Dmedia%26token%3D534fd782-b7e5-4954-83ce-577ba68de34a.webp?alt=media&token=256543cd-adcd-4746-85e0-7468d4efb1ae'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-9605-open-desks-tazhekkod-calicut/
    id: 10,
    name: 'D Space',
    area: 'Tazhekkod',
    location: 'Tazhekkod, Kozhikode',
    address: 'Tazhekkod, Kozhikode, Kerala',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Kozhikode_1694527617167%3Falt%3Dmedia%26token%3D2956d435-5ac6-4c9b-96f8-b9e581568e80.webp?alt=media&token=6d19b02a-a46c-4b7c-930a-81f9ae41f533',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Kozhikode_1694527674400%3Falt%3Dmedia%26token%3D1ea477c8-1777-4ea6-8112-a0b6a06bf044.webp?alt=media&token=b20e5a73-b224-4164-ae19-255956c4d335',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Kozhikode_1694527725972%3Falt%3Dmedia%26token%3D623a77e1-50c2-4cd7-9f4a-61f2f149bee8.webp?alt=media&token=061a31f9-6d40-415f-846f-e8680d8298fe'
    ]
  }
];

export default kozhikodeCalicutSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const kozhikodeCalicutNeighborhoods = Object.entries(
  kozhikodeCalicutSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const kozhikodeCalicutOfficeCards = kozhikodeCalicutSpaces.slice(0, 8);
export const moreKozhikodeCalicutOfficeCards = kozhikodeCalicutSpaces.slice(8);

export const kozhikodeCalicutAreas = kozhikodeCalicutNeighborhoods;

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
// Kozhikode Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allKozhikodeCalicutOfficeCards = kozhikodeCalicutSpaces;

export const getKozhikodeCalicutOfficeCardById = (id) => findOfficeBySlug(allKozhikodeCalicutOfficeCards, id, "kozhikode-calicut");
export const getKozhikodeCalicutOfficeSlug = (space) => officePath(allKozhikodeCalicutOfficeCards, space, "kozhikode-calicut");

// ============================================================================
// Top Coworking Locations in Kozhikode — one tile per area, using a photo from a space in that area
// ============================================================================
export const topKozhikodeCalicutCoworkingLocations = kozhikodeCalicutNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: kozhikodeCalicutSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
