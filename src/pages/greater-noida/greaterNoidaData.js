import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Greater Noida (Uttar Pradesh) coworking spaces, compiled 13 Nov 2026 from qdesq.com, coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const greaterNoidaSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/atal-incubation-centre-bimtech/knowledge-park-ii-greater-noida-nod001 , https://www.qdesq.com/brand/atal-incubation-centre/knowledge-park-ii-greater-noida-nod350 , https://coworkingers.com/india/up/greater-noida/aic-bimtech/
    id: 1,
    name: 'AIC BIMTECH (Atal Incubation Centre)',
    area: 'Knowledge Park II',
    location: 'Knowledge Park II, Greater Noida',
    address: 'Plot No. 5, Atal Incubation Centre - BIMTECH Second Floor, BIMTECH Rd, Knowledge Park II, Greater Noida, Uttar Pradesh 201306',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Lounge', 'Meeting Rooms', 'Housekeeping', 'Car / Bike Parking', 'Pantry'],
    capacity: 120,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1688645518/bnfxzmdk8z1r0fpo9wdb.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1583731998/ayjdubx0zx2y305fgzmp.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1583731998/yt3qj01bhw37kmpcsuvj.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1583731999/s0nxjkhtaorptkw92r9m.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/vision-spaces-coworking/knowledge-park-iii-greater-noida-nod374
    id: 2,
    name: 'Vision Spaces Coworking',
    area: 'Knowledge Park III',
    location: 'Knowledge Park III, Greater Noida',
    address: 'Vision Business Park, Knowledge Park III, Greater Noida, Uttar Pradesh',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'Lounge', 'Mail Handling', 'Air Conditioning', 'High Speed WiFi', 'Pantry'],
    capacity: 500,
    price: '₹7,500',
    period: '/ month',
    priceFormatted: '₹7,500 / month',
    deskPrice: '₹7,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/c552854a497cf3300216fb5c30cd2ed7_yx_Cl5b0S0.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/c5efc08515eb9890613ffde98b7b9f6f_R5Jgpc8y0.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/d2a26b9c003d860682470bb98cdf73c1_1Oa9SEad-.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/cc80d2321cbb65815f017cbe09d7fb78_cnkf6wWe4.JPG'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/pragya-elite-co-working-spaces/
    id: 3,
    name: 'Pragya Elite Co-working Spaces',
    area: 'Alpha I',
    location: 'Alpha I, Greater Noida',
    address: 'Block E, Alpha I, Greater Noida, Uttar Pradesh',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-11-30-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-04-23-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/WhatsApp-Image-2021-11-30-at-11.10.35-AM-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/WhatsApp-Image-2021-11-30-at-11.10.37-AM-1-min.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/iimt-ladder-business-foundation/
    id: 4,
    name: 'IIMT Ladder Business Foundation',
    area: 'Knowledge Park III',
    location: 'Knowledge Park III, Greater Noida',
    address: 'Knowledge Park III, Greater Noida, Uttar Pradesh, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Housekeeping', 'Car / Bike Parking', 'High Speed WiFi', 'Storage', 'Printer'],
    price: '₹3,499',
    period: '/ month',
    priceFormatted: '₹3,499 / month',
    deskPrice: '₹3,499',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/20230220_115501-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/20230220_121822-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/20230220_124104-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/20230313_153451-min.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/office-20/greater-noida-west-noida-nod360
    id: 5,
    name: 'Office 2.0',
    area: 'Greater Noida West',
    location: 'Greater Noida West, Greater Noida',
    address: 'Near Hope Tower, Greater Noida West, Uttar Pradesh',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Air Conditioning', 'Mail Handling'],
    capacity: 162,
    price: '₹11,000',
    period: '/ month',
    priceFormatted: '₹11,000 / month',
    deskPrice: '₹11,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1715591455/jvmd8wwhkcj0yvipmshg.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1715580688/v2z0q0abrzeruuav0cfp.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1715582740/pgikisrhg65eejmkp90g.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1715580943/cynq1l6esosiadccumxm.jpg'
    ]
  }
];

export default greaterNoidaSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const greaterNoidaNeighborhoods = Object.entries(
  greaterNoidaSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const greaterNoidaOfficeCards = greaterNoidaSpaces.slice(0, 8);
export const moreGreaterNoidaOfficeCards = greaterNoidaSpaces.slice(8);

export const greaterNoidaAreas = greaterNoidaNeighborhoods;

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
// Greater Noida Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allGreaterNoidaOfficeCards = greaterNoidaSpaces;

export const getGreaterNoidaOfficeCardById = (id) => findOfficeBySlug(allGreaterNoidaOfficeCards, id, "greater-noida");
export const getGreaterNoidaOfficeSlug = (space) => officePath(allGreaterNoidaOfficeCards, space, "greater-noida");

// ============================================================================
// Top Coworking Locations in Greater Noida — one tile per area, using a photo from a space in that area
// ============================================================================
export const topGreaterNoidaCoworkingLocations = greaterNoidaNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: greaterNoidaSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
