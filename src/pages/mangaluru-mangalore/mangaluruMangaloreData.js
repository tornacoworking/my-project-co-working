import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Mangaluru (Karnataka) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, gofloaters.com, qdesq.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - COWOZO (company office or outside the city)
//  - Novigo Solutions Pvt. Ltd (company office or outside the city)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const mangaluruMangaloreSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-mangaluru-inland-ornate , https://gofloaters.com/office-space/gooffice-40376-4-seater-private-cabin-inland-ornate-mangaluru/ , https://gofloaters.com/office-space/gooffice-40377-dedicated-desks-inland-ornate-mangaluru/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Inland Ornate',
    location: 'Inland Ornate, Mangaluru',
    address: 'Shop No 204, Door No 13-12-1395/33, Inland Ornate Building, 2nd Floor, Navabharath Circle, Mangalore-575003',
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
      'https://www.mybranch.co.in/office/office_images/1741347715_284_11zon.jpg',
      'https://www.mybranch.co.in/office/office_images/1741347715_283_11zon.jpg',
      'https://www.mybranch.co.in/office/office_images/1741347715_282_11zon.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/wrkwrk-mindspace/yeyyadi-managalore-man010
    id: 2,
    name: 'Wrkwrk Mindspace',
    area: 'Yeyyadi',
    location: 'Yeyyadi, Mangaluru',
    address: 'Near Citadel Mindspace, Yeyyadi, Mangaluru, Karnataka',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 50,
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/a42d6d5b335afcb4a204161877980e59_CC_7vrTsX.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/a4d1d9c8c081cd94110c841b85264965_Ppml3ABvk.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/83e68d209ee1295edb718c808c57b750_uIl8ID7ha.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/fine-acers/bejai-mangalore-mnr006
    id: 3,
    name: 'Fine Acers',
    area: 'Bejai',
    location: 'Bejai, Mangaluru',
    address: 'Near Blueberry Enclave, Bejai, Mangaluru, Karnataka',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sun',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Air Conditioning', 'Mail Handling'],
    capacity: 4,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/c34369ba0ac7639a6a6e0f18b03d4a3e_jIFcagCV9H.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/6f1d25faf83f3feb094811fd44010477_j4Q7CxS0B.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/mikro-grafeio/mallikatte-mangaluru-man012
    id: 4,
    name: 'Mikro Grafeio',
    area: 'Mallikatte',
    location: 'Mallikatte, Mangaluru',
    address: 'Near Inland Business Park, Mallikatte, Mangaluru, Karnataka',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 50,
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/7b6d3a42000e668facf19ecf5dc6f0df_jAgY6RZ4p.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/4472fd46c8d290c77958258ae9505680_nUBspE3zK.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/vertexone-managed-workspace/ballalbagh-mangaluru-man007
    id: 5,
    name: 'VertexOne Managed Workspace',
    area: 'Ballalbagh',
    location: 'Ballalbagh, Mangaluru',
    address: 'Near Gateway Building, Ballalbagh, Mangaluru, Karnataka',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Mail Handling', 'Air Conditioning'],
    capacity: 24,
    price: '₹6,600',
    period: '/ month',
    priceFormatted: '₹6,600 / month',
    deskPrice: '₹6,600',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1675501956/txssoaxujt53rzttg0tr.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1675501886/gt3bs7xdxxyrxnqnfqwj.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1675501886/b53ygie1rddk53zjykhj.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/workbench-workspace/balmatta-mangalore-mnr007
    id: 6,
    name: 'Workbench Workspace',
    area: 'Balmatta',
    location: 'Balmatta, Mangaluru',
    address: 'Near Milestone 25, Balmatta, Mangaluru, Karnataka',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Air Conditioning', 'Mail Handling'],
    capacity: 78,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/93f4e5afecd9158b7336cb95bdaecb6a_95IcoyY3r.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/a01efeb8d58d96a5ec01fbe76a89784b_lBoMui1oX.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/f7c865e97986d2d1c966d734112612fe_Q6srCfFlQ.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/cowozo/m-g-road-mangalore-mnr002
    id: 7,
    name: 'cowozo',
    area: 'M. G. Road',
    location: 'M. G. Road, Mangaluru',
    address: 'Near Motoventure, M. G. Road, Mangaluru, Karnataka',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    price: '₹5,600',
    period: '/ month',
    priceFormatted: '₹5,600 / month',
    deskPrice: '₹5,600',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1502951440/x7vo4hnmiuq1owi7foqn.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1502951513/a5yz60jvbm1lwxpbxz8l.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1502951517/wp25xewok2wetl7v1xk5.webp'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-9602-open-desks-mg-road-mangaluru/
    id: 8,
    name: 'VertexOne Managed Workspace',
    area: 'MG Road',
    location: 'MG Road, Mangaluru',
    address: 'MG Road, Mangaluru, Karnataka',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹6,700',
    period: '/ month',
    priceFormatted: '₹6,700 / month',
    deskPrice: '₹6,700',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520MG%2520Road_1693991105133%3Falt%3Dmedia%26token%3D7df8526d-9590-4513-8ff9-7369bcb27181.webp?alt=media&token=02463b5c-e040-48ef-9a21-8da625e1e32a',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520MG%2520Road_1693991118236%3Falt%3Dmedia%26token%3Def7bbf42-bb38-4e4c-a6d1-a880bb480811.webp?alt=media&token=b04e9102-ee44-4f56-ae1a-5dc6ae65a459'
    ]
  }
];

export default mangaluruMangaloreSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const mangaluruMangaloreNeighborhoods = Object.entries(
  mangaluruMangaloreSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const mangaluruMangaloreOfficeCards = mangaluruMangaloreSpaces.slice(0, 8);
export const moreMangaluruMangaloreOfficeCards = mangaluruMangaloreSpaces.slice(8);

export const mangaluruMangaloreAreas = mangaluruMangaloreNeighborhoods;

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
// Mangaluru Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allMangaluruMangaloreOfficeCards = mangaluruMangaloreSpaces;

export const getMangaluruMangaloreOfficeCardById = (id) => findOfficeBySlug(allMangaluruMangaloreOfficeCards, id, "mangaluru-mangalore");
export const getMangaluruMangaloreOfficeSlug = (space) => officePath(allMangaluruMangaloreOfficeCards, space, "mangaluru-mangalore");

// ============================================================================
// Top Coworking Locations in Mangaluru — one tile per area, using a photo from a space in that area
// ============================================================================
export const topMangaluruMangaloreCoworkingLocations = mangaluruMangaloreNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: mangaluruMangaloreSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
