import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Rajkot (Gujarat) coworking spaces, compiled 13 Nov 2026 from qdesq.com, coworkingers.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const rajkotSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/workeasy/sardarnagar-rajkot-rjt003 , https://coworkingers.com/listing/workeasy/
    id: 1,
    name: 'Workeasy',
    area: 'Sardarnagar',
    location: 'Sardarnagar, Rajkot',
    address: 'Behind Poojara Telecom, Sardarnagar, Rajkot, Gujarat',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning', 'Pantry', 'Car / Bike Parking', 'Storage', 'Printer'],
    capacity: 10,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1621919161/qkgs8kxf0lqp8a60ehud.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1621919128/mwz6bsna8tuxo51nqwub.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1621919129/t7oabgevawphf2kd4s7l.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/devx/nana-mava-rajkot-rjt005 , https://gofloaters.com/office-space/gooffice-21004-open-desks-nana-mava-rajkot/
    id: 2,
    name: 'DevX',
    area: 'Nana Mava',
    location: 'Nana Mava, Rajkot',
    address: 'Near Osia Hypermart, Nana Mava, Rajkot, Gujarat',
    phone: null,
    hours: '10:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning', 'Lounge'],
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1650277375/vxi6lg6tlrn1d7bwelok.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1650277375/e2df0pwvpr6rgudl319m.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1650277374/z8clopugrtovzeanlowv.png'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/ia-spaces-by-india-accelerator/sheetal-park-rajkot-rjt010
    id: 3,
    name: 'IA Spaces by India Accelerator',
    area: 'Sheetal Park',
    location: 'Sheetal Park, Rajkot',
    address: 'Near RK Iconic, Sheetal Park, Rajkot, Gujarat',
    phone: null,
    hours: '8:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 251,
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    deskPrice: '₹8,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/486a340f691012b8dfcc61011414d89b_PWXNdEWtfx.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/88da64e2a8aa3688c24dfbe2250fe8b1_GYehBOD6K.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/3cd67e3856dad3353f87dc5cc8b2fcd8_ZO2edDfF8.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/meetnwork-coworking-space/ring-road-rajkot-rjt007
    id: 4,
    name: 'MeetNWork Coworking Space',
    area: 'Ring Road',
    location: 'Ring Road, Rajkot',
    address: 'Near Time Square, Ring Road, Rajkot, Gujarat',
    phone: null,
    hours: null,
    amenities: ['Storage', 'Air Conditioning', 'Mail Handling', 'Meeting Rooms', 'High Speed WiFi'],
    capacity: 16,
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    deskPrice: '₹4,999',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1679844863/d0vzpli26o8twt880vpe.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1679844848/qptubi7vpmlr2pbenjsi.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1679844824/kmojy6gcyl3nbvlpz7jz.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/rajkot-startup-studio/nana-mava-circle-rajkot-rjt009
    id: 5,
    name: 'Rajkot Startup Studio',
    area: 'Nana Mava Circle',
    location: 'Nana Mava Circle, Rajkot',
    address: 'Near The Millenium, Nana Mava Circle, Rajkot, Gujarat',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi'],
    capacity: 11,
    price: '₹3,500',
    period: '/ month',
    priceFormatted: '₹3,500 / month',
    deskPrice: '₹3,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/edbf4bd19eb3625c142cf2b4d9f337b3_rlRtrXIaC.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/2157a863f6ad7c5bc96eeae42d6a087f_mzmsRJ-ct.jpeg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/workeasy-coworking-space/kalwad-road-rajkot-rjt006
    id: 6,
    name: 'Workeasy Coworking Space',
    area: 'Kalwad Road',
    location: 'Kalwad Road, Rajkot',
    address: 'Near McDonald\'s, Kalwad Road, Rajkot, Gujarat',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Mail Handling', 'Air Conditioning'],
    capacity: 94,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1663139769/uz5c03nbiw3cgh2d385r.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1663139832/lt0wegwvdtlzdc2eudu9.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1663139853/szpxepx0blel4tewe4a4.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/the-space/
    id: 7,
    name: 'The Space',
    area: 'Sardarnagar',
    location: 'Sardarnagar, Rajkot',
    address: 'Landmark Complex, Tagore Road, Astron Chowk, Sardarnagar, Rajkot, Gujarat 360001',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2022-09-12-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/tempImageMZQ6rw-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/tempImageXtpXmS-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/glocal/
    id: 8,
    name: 'GloCal',
    area: 'Mota Mava',
    location: 'Mota Mava, Rajkot',
    address: 'M_Floor, Mota Mava, Rajkot, Gujarat',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2019-01-15-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-08-29-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2020-10-17-1-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/meetnwork/
    id: 9,
    name: 'MeetNWork',
    area: 'Bajrang Wadi',
    location: 'Bajrang Wadi, Rajkot',
    address: 'Synergy Superspeciality Hospital, 150 Feet Ring Road, Krishna Society, Bajrang Wadi, Rajkot, Gujarat',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking', 'Storage', 'Printer'],
    price: '₹2,999',
    period: '/ month',
    priceFormatted: '₹2,999 / month',
    deskPrice: '₹2,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-01-24-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-04-09-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/Conference_Room-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/work-ville/
    id: 10,
    name: 'Work Ville',
    area: 'Mota Mava',
    location: 'Mota Mava, Rajkot',
    address: 'SF - 32, Suvarna Bhoomi Complex, Nana Mava Rd, nr. Speedwell Party Plot, Mota Mava, Rajkot, Gujarat 360005',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹2,999',
    period: '/ month',
    priceFormatted: '₹2,999 / month',
    deskPrice: '₹2,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-07-02-1-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-07-02-2-min.jpg'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-21002-dedicated-desks-madhapar-rajkot/ , https://gofloaters.com/office-space/gooffice-21001-3-seater-private-cabin-madhapar-rajkot/
    id: 11,
    name: 'MeetNWork CoWorking Space',
    area: 'Madhapar',
    location: 'Madhapar, Rajkot',
    address: 'Madhapar, Rajkot, Gujarat',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: '₹1,444',
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/images%2FSpacious-Dedicated-Front-Desk_1669126423915.webp?alt=media&token=80928eca-8e49-4489-bb40-d935c281bb84',
      'https://cdn.app.gofloaters.com/images%2FSpacious-Dedicated-Front-Desk_1669126461675.webp?alt=media&token=555fc5de-954c-46d0-9c1e-62fe694693f8',
      'https://cdn.app.gofloaters.com/images%2FSpacious-Dedicated-Front-Desk_1669126486858.webp?alt=media&token=24fcab5b-a9e3-4f24-9c72-e95286e520b2'
    ]
  }
];

export default rajkotSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const rajkotNeighborhoods = Object.entries(
  rajkotSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const rajkotOfficeCards = rajkotSpaces.slice(0, 8);
export const moreRajkotOfficeCards = rajkotSpaces.slice(8);

export const rajkotAreas = rajkotNeighborhoods;

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
// Rajkot Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allRajkotOfficeCards = rajkotSpaces;

export const getRajkotOfficeCardById = (id) => findOfficeBySlug(allRajkotOfficeCards, id, "rajkot");
export const getRajkotOfficeSlug = (space) => officePath(allRajkotOfficeCards, space, "rajkot");

// ============================================================================
// Top Coworking Locations in Rajkot — one tile per area, using a photo from a space in that area
// ============================================================================
export const topRajkotCoworkingLocations = rajkotNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: rajkotSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
