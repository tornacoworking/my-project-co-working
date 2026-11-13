import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Faridabad (Haryana) coworking spaces, compiled 13 Nov 2026 from qdesq.com, coworkingers.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - Impresario (Sector 12): photos show a restaurant, not an office
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const faridabadSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/work-coworking/mathura-road-faridabad-fbd020 , https://coworkingers.com/india/haryana/faridabad/buzz/
    id: 1,
    name: '&work Coworking',
    area: 'Mathura Road',
    location: 'Mathura Road, Faridabad',
    address: 'CROWN INTERIORZ MALL, R-1, THIRD FLOOR, Mathura Rd, Faridabad, Haryana 121003',
    phone: null,
    hours: '10:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Air Conditioning', 'High Speed WiFi', 'Lounge', 'Housekeeping', 'Tea/Coffee', 'Pantry', 'Car / Bike Parking', 'Storage', 'Printer'],
    capacity: 40,
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/6b08c945c87dce80730f2d14fdb90bd3_Dqc6pCQgtt.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/cdd0ebb48a4e8e6d69ac5ba18840e752_dh1mWWQJR.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/b7dc6dd08bd7d41291dd0581f8b1c9cc_0a1hK8Id-u.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/52b7445432220a0d7138156fb258664e_8EAAYdC7lE.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/lnt-co-working/sector-16-faridabad-fbd023
    id: 2,
    name: 'LNT Co-Working',
    area: 'Sector 16',
    location: 'Sector 16, Faridabad',
    address: 'Near Phase II, Sector 16, Faridabad, Haryana',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 40,
    price: '₹3,500',
    period: '/ month',
    priceFormatted: '₹3,500 / month',
    deskPrice: '₹3,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/37ba7ab8cd6c3a4d735618b85b62966b_JE4oL4jM3.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/5d30ef251d65cffa6f5e5b10956fe48c_QaOL32TJIp.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/83e7377cb039470d56f840bacbedf3bc_qIR2sMfTW.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/business-pluss/sector-20b-faridabad-fbd012
    id: 3,
    name: 'Business Pluss',
    area: 'Sector 20B',
    location: 'Sector 20B, Faridabad',
    address: 'Near Parsvnath Mall, Sector 20B, Faridabad, Haryana',
    phone: null,
    hours: '8:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    capacity: 214,
    price: '₹7,500',
    period: '/ month',
    priceFormatted: '₹7,500 / month',
    deskPrice: '₹7,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1630654033/vnztipynsd3nc0bagdgs.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1630653989/bikfyklgjop8hzlc7tyf.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1630653990/crxydfl70xpluvjwymu5.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1630653990/tsrfdk83ugjhqjg6k4sj.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/work-space/mathura-road-faridabad-fbd002
    id: 4,
    name: '&work Space',
    area: 'Mathura Road',
    location: 'Mathura Road, Faridabad',
    address: 'Near PVR Cinemas, Mathura Road, Faridabad, Haryana',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sun',
    amenities: ['Air Conditioning', 'Lounge', 'High Speed WiFi', 'Meeting Rooms'],
    capacity: 550,
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1606381569/awk9mcqqi8oa8gsv9twm.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1688204300/qctxktkopma5t03qqzit.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1688204300/jxoujx0bhp2ldryeepaa.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1688204300/drfjxlvwwt2lv0peltiw.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/dgtlworkspace-co-working/sector-87-faridabad-fbd013
    id: 5,
    name: 'DGTLworkspace Co-working',
    area: 'Sector 87',
    location: 'Sector 87, Faridabad',
    address: 'Near SRS Value Bazaar, Sector 87, Faridabad, Haryana',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    price: '₹2,750',
    period: '/ month',
    priceFormatted: '₹2,750 / month',
    deskPrice: '₹2,750',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1605770573/e87xff6wmakfrecfiw4u.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1605614457/rvdrsjiglmx5hhj8at7d.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1605614470/ny5y9mcugvjq1osywqgd.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1605770466/sf40cmmxe6foeul1fxbl.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/nansat-coworking-2/sector-10-hbc-faridabad-division-far029
    id: 6,
    name: 'NanSat Coworking - Sector 10',
    area: 'Sector 10',
    location: 'Sector 10, Faridabad',
    address: 'Cobb Showroom, Sector 10 HBC, Faridabad, Haryana',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sun',
    amenities: ['Air Conditioning'],
    capacity: 150,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1524486505/l8dpcr87ejjn4xmkc1wl.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1524486787/hbgndm32dkiatmejgptl.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1524486787/xlsxp71xyrdccderduo5.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1524486795/qa0cg1usqiw9cuoy6sxj.webp'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/haryana/faridabad/nansat-coworking/
    id: 7,
    name: 'NanSat Coworking - Sector 9',
    area: 'Sector 9',
    location: 'Sector 9, Faridabad',
    address: '9-10 Dividing Road, Sector 9, Faridabad, Haryana',
    phone: null,
    hours: null,
    amenities: ['Housekeeping', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking', 'Storage', 'Printer'],
    price: '₹3,750',
    period: '/ month',
    priceFormatted: '₹3,750 / month',
    deskPrice: '₹3,750',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2021/10/NanSat-Coworking-4-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/NanSat-Coworking-1-min-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/NanSat-Coworking-5-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/NanSat-Coworking-2-min-1.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/haryana/faridabad/ideashacks-co-working/ , https://gofloaters.com/office-space/gooffice-28003-open-desks-sector-31-faridabad/ , https://coworkingers.com/india/haryana/faridabad/ideashacks-coworking-balola/
    id: 8,
    name: 'Ideashacks Coworking',
    area: 'Sector 31',
    location: 'Sector 31, Faridabad',
    address: 'IDEASHACKS CO.WORKING, Mathura Road, Sector 31, Faridabad, Haryana, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'Tea/Coffee', 'High Speed WiFi', 'Mail Handling', 'Car / Bike Parking', 'Printer', 'Pantry', 'Storage'],
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2021/10/IDEASHACKS-CO.WORKING-3-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/IDEASHACKS-CO.WORKING-1-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/IDEASHACKS-CO.WORKING-2-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/IDEASHACKS-CO.WORKING-5-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/haryana/faridabad/work-co-working/
    id: 9,
    name: '&work Co-working - Sector 15A',
    area: 'Sector 15A',
    location: 'Sector 15A, Faridabad',
    address: 'Azad Colony, Sector 15A, Faridabad, Haryana',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Storage', 'Printer'],
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2021/10/work-Co-working-1-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/work-Co-working-4-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/work-Co-working-2-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2021/10/work-Co-working-3-min.jpg'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-28008-dedicated-desks-sector-15a-faridabad/
    id: 10,
    name: 'Thryve Coworking',
    area: 'Sector 15A',
    location: 'Sector 15A, Faridabad',
    address: 'Sector 15A, Faridabad, Haryana',
    phone: null,
    hours: null,
    amenities: [],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: '₹7,000',
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/images%2FDedicated-Desks-Sector-15A_1768980357264.webp?alt=media&token=eee867b1-c184-4e83-b2b9-0644099b28e2',
      'https://cdn.app.gofloaters.com/images%2FDedicated-Desks-Sector-15A_1768980364182.webp?alt=media&token=ab48cc75-a1fa-478d-a9b0-a9f89acbbe7a',
      'https://cdn.app.gofloaters.com/images%2FDedicated-Desks-Sector-15A_1768980371600.webp?alt=media&token=9fb49307-364a-4ecd-b513-e371414c0527'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/haryana/faridabad/simpliphi-works/
    id: 11,
    name: 'SimpliPhi Works',
    area: 'Sector 37',
    location: 'Sector 37, Faridabad',
    address: 'Simpliphi Works, near Mother Dairy Booth, Ashoka Enclave Part II, Sector 37, Faridabad, Haryana, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'Car / Bike Parking', 'Tea/Coffee', 'High Speed WiFi', 'Pantry', 'Printer'],
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2021/10/SimpliPhi-Works-4-min.jpg'
    ]
  }
];

export default faridabadSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const faridabadNeighborhoods = Object.entries(
  faridabadSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const faridabadOfficeCards = faridabadSpaces.slice(0, 8);
export const moreFaridabadOfficeCards = faridabadSpaces.slice(8);

export const faridabadAreas = faridabadNeighborhoods;

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
// Faridabad Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allFaridabadOfficeCards = faridabadSpaces;

export const getFaridabadOfficeCardById = (id) => findOfficeBySlug(allFaridabadOfficeCards, id, "faridabad");
export const getFaridabadOfficeSlug = (space) => officePath(allFaridabadOfficeCards, space, "faridabad");

// ============================================================================
// Top Coworking Locations in Faridabad — one tile per area, using a photo from a space in that area
// ============================================================================
export const topFaridabadCoworkingLocations = faridabadNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: faridabadSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
