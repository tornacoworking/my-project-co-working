import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Jodhpur (Rajasthan) coworking spaces, compiled 13 Nov 2026 from qdesq.com, coworkingers.com, gofloaters.com, mybranch.co.in.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const jodhpurSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/work-affair/shastri-nagar-jodhpur-jdr006 , https://coworkingers.com/listing/workaffair/
    id: 1,
    name: 'WorkAffair',
    area: 'Cyber Park',
    location: 'Cyber Park, Jodhpur',
    address: '6th Floor, Dream Heights, CYB-5, Cyber Park, Heavy Industrial Area, Rajasthan 342001',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning', 'Car / Bike Parking', 'Printer'],
    capacity: 25,
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1684310369/nah5l9gfm6wprugfzv5f.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1684310369/ybnnkdllg7bngvqai1gl.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1684235373/vxi15u5xwd3rtz2or7vz.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1684235617/wz8xcmhph8n7m7gcuc4b.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/working-kulture/hi-area-phase-ii-jodhpur-jdr004 , https://coworkingers.com/listing/working-kulture/
    id: 2,
    name: 'Working Kulture - Heavy Industrial Area',
    area: 'HI Area Phase II',
    location: 'HI Area Phase II, Jodhpur',
    address: 'Saras Dairy Jodhpur, Heavy Industrial Area Phase II, Basni, Jodhpur, Rajasthan, India',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Air Conditioning', 'High Speed WiFi', 'Mail Handling', 'Tea/Coffee', 'Car / Bike Parking', 'Printer'],
    capacity: 100,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1607083154/xsp3gz6epaqqhvwaulvp.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1606979775/xatnwxkj1z6bhwwnwvtk.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1606979740/ibhs17i8xx1umjiqbroq.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1606979740/jc0zlw2djxicctxoglsy.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/working-kulture/sardarpura-jodhpur-jdr002 , https://coworkingers.com/listing/working-kulture-a-coworking-office-space-sardarpura/ , https://gofloaters.com/office-space/gooffice-26005-open-desks-sardarpura-jodhpur/
    id: 3,
    name: 'Working Kulture - Sardarpura',
    area: 'Sardarpura',
    location: 'Sardarpura, Jodhpur',
    address: 'D Road, Near Balaji Temple, Sardarpura, Jodhpur, Rajasthan 342001, India',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Tea/Coffee', 'Car / Bike Parking', 'Printer'],
    capacity: 90,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1593061087/i1pcoof8vchr1hevfdpt.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1593061179/inmc5keip3n7dghpq0j0.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1593061111/nnt7ikgftksgzc731rru.webp',
      'https://coworkingers.com/wp-content/uploads/2023/08/20201107_120447.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/apnayt-coworker/sangaria-industrial-area-jodhpur-jdr005 , https://coworkingers.com/listing/apnayt-coworker/
    id: 4,
    name: 'Apnayt Coworker',
    area: 'Sangaria Industrial Area',
    location: 'Sangaria Industrial Area, Jodhpur',
    address: 'Near Bank Of Sangariya, Sangaria Industrial Area, Jodhpur, Rajasthan',
    phone: null,
    hours: '9:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Lounge', 'High Speed WiFi', 'Air Conditioning', 'Car / Bike Parking', 'Printer'],
    capacity: 42,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1683810247/fknfqce66g6riaai9lqn.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1682317150/ctbkaiqtllc7zpzqduij.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1682231033/vnpd2sjowatbyyggqx2r.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1683810216/bnzowt8qkm7qfexubyqo.webp'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/manak-co-working/
    id: 5,
    name: 'Manak Co-working',
    area: 'Shastri Nagar',
    location: 'Shastri Nagar, Jodhpur',
    address: '2nd Floor, 31-1, opposite New Power House Road, near Royal Enfield Showroom, Sector-H, Shastri Nagar, Jodhpur, Rajasthan 342003',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/2022-10-09.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/AnyConv.com__IMG_5344.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/cafetria.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/reception.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/shared-spacez/
    id: 6,
    name: 'Shared Spacez',
    area: 'Shastri Nagar',
    location: 'Shastri Nagar, Jodhpur',
    address: '2nd Floor, Kalpatru Shopping Centre, Plot no. 37-38, Maa Kripa, Shastri Nagar, Jodhpur, Rajasthan 342003',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-03-09-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-03-09.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-07-07-1-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2023-07-07-2.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/unicorn-workspace-jodhpur/
    id: 7,
    name: 'Unicorn Workspace',
    area: 'Paota',
    location: 'Paota, Jodhpur',
    address: '1 st floor Ramdhan Tower, Near Suncity Hospital, Manji ka Hatha, Paota, Jodhpur, Rajasthan 342001',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-08-10.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/120834024_117351086800590_5060870960070246508_n.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/929office/
    id: 8,
    name: '929office',
    area: 'Baldev Nagar',
    location: 'Baldev Nagar, Jodhpur',
    address: 'Street Number 6, Masuria Colony, Baldev Nagar, Jodhpur, Rajasthan, India',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/3-768x768-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/4-768x768-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/5-768x768-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/6-768x768-1.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/krit-co-working-space/
    id: 9,
    name: 'Krit Co-Working Space',
    area: 'Cyber Park',
    location: 'Cyber Park, Jodhpur',
    address: 'Landmark: Book Cafe, 2nd Floor Dream Heights, CYB-5 RIICO Cyber Park, near Saras Dairy, Jodhpur, Rajasthan 342005',
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
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG-20200831-WA0014.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG-20200831-WA0016.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG-20200831-WA0017.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/krit-coworkiing-cabin3.jpg'
    ]
  },
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-jodhpur-sardarpura
    id: 10,
    name: 'MyBranch Coworking Space',
    area: 'Sardarpura',
    location: 'Sardarpura, Jodhpur',
    address: '2nd Floor, Utsav Plaza, 980, Geeta Bhawan Road, opp. Old Kohinoor Cinema, Sardarpura, Jodhpur, Rajasthan 342003',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/jodhpur_cw.webp',
      'https://www.mybranch.co.in/office/office_images/jodhpur_mr.webp',
      'https://www.mybranch.co.in/office/office_images/jodhpur_caf.webp',
      'https://www.mybranch.co.in/office/office_images/jodhpur_rep.webp'
    ]
  }
];

export default jodhpurSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const jodhpurNeighborhoods = Object.entries(
  jodhpurSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const jodhpurOfficeCards = jodhpurSpaces.slice(0, 8);
export const moreJodhpurOfficeCards = jodhpurSpaces.slice(8);

export const jodhpurAreas = jodhpurNeighborhoods;

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
// Jodhpur Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allJodhpurOfficeCards = jodhpurSpaces;

export const getJodhpurOfficeCardById = (id) => findOfficeBySlug(allJodhpurOfficeCards, id, "jodhpur");
export const getJodhpurOfficeSlug = (space) => officePath(allJodhpurOfficeCards, space, "jodhpur");

// ============================================================================
// Top Coworking Locations in Jodhpur — one tile per area, using a photo from a space in that area
// ============================================================================
export const topJodhpurCoworkingLocations = jodhpurNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: jodhpurSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
