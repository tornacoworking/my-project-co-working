import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Aurangabad (Chhatrapati Sambhajinagar, Maharashtra) coworking spaces — Qdesq, CoworkingCafe, Coworker and myHQ listing data, fetched Nov 6, 2026.
// Prices are the Qdesq per-desk rate; other listings differ, so priceNote says so. Confirm with each operator before publishing.
// Excluded: Connect Enterprises (photos carry another brand's watermark); Kaarobaar Inception (temporarily closed); Apple Study Center (photos show study cubicles, not offices).
// Ratings, review counts and phone numbers are left out because no source gave a verifiable figure. Qdesq's number is its own sales line.
// deskPrice / cabinPrice are per-seat monthly rates from the listings above; null shows "On request" on the detail page.

export const aurangabadSpaces = [
  {
    id: 1,
    name: 'Wabi Sabi',
    area: 'Beed Bypass Road',
    location: 'Beed Bypass Road, Aurangabad',
    address: 'Opposite Bank of Baroda, near Maske Petrol Pump, Samrudhi Co-operative Housing Society, Beed Bypass Road, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431005',
    phone: null,
    hours: '9:00 AM – 10:00 PM, daily',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Printer', 'Tea/Coffee', 'Lounge', 'Mail Handling'],
    capacity: 30,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: '₹3,000',
    priceNote: 'Per desk, Qdesq listing (myHQ ₹6,000, CoworkingCafe ₹7,500)',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1662546321/pnwlxbo6arii7cvy4zwy.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1662546321/b2tmiklytqguudbnqsqh.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1662546297/swotwohfiw24s7fxvcx2.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1662546304/xpxcbzd2peuuhglfhqkl.jpg'
    ]
  },
  {
    // Listed as 24 hours on Qdesq; CoworkingCafe shows 8:00 AM – 9:00 PM.
    id: 2,
    name: 'Shed2 Coworking',
    area: 'Silk Mill Colony',
    location: 'Silk Mill Colony, Aurangabad',
    address: 'Vatan Textiles Ltd, Paithan Road, Silk Mill Colony, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra',
    phone: null,
    hours: '24 hours, daily',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Printer', 'Tea/Coffee', 'Car / Bike Parking', 'Lounge'],
    capacity: 140,
    price: '₹3,000',
    period: '/ month',
    priceFormatted: '₹3,000 / month',
    deskPrice: '₹3,000',
    cabinPrice: '₹5,000',
    priceNote: 'Per desk, Qdesq listing (myHQ ₹6,000, CoworkingCafe ₹7,500)',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/v1675164702/wqrdp8sm2jqmijgak6kr.webp',
      'https://qdesq.imagekit.io/image/upload/v1675164702/fkhiby1yganxyqcppjbu.webp',
      'https://cdn.coworkingcafe.com/images/0CBFD0CB-04A5-4BF6-B611-29AA2B7FA6FA/82369.jpg'
    ]
  },
  {
    // LetMeSeat shows ₹8,999; Qdesq and myHQ both show ₹2,999.
    id: 3,
    name: 'V Connect Co-Working Space',
    area: 'CIDCO',
    location: 'CIDCO, Aurangabad',
    address: 'Arun Uday Colony, N-6, CIDCO, near Milan Footwear, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431001',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Lounge', 'Pantry', 'Mail Handling'],
    capacity: 30,
    price: '₹2,999',
    period: '/ month',
    priceFormatted: '₹2,999 / month',
    deskPrice: '₹2,999',
    cabinPrice: '₹7,500',
    priceNote: 'Per desk, Qdesq and myHQ listings',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1669463643/ht0s7p34nd3kspxqdzro.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1669560674/qzqkyr5ywbf4oylqq9i3.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1669464315/vkmafqfdeglb0pq3v6db.jpg'
    ]
  },
  {
    // Low confidence: Qdesq gives a landmark only, with no street address or PIN — verify before publishing.
    id: 4,
    name: 'Akanksha Associates',
    area: 'Prozone',
    location: 'Prozone, Aurangabad',
    address: 'Near Prozone Trade Centre, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Tea/Coffee'],
    capacity: 20,
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: '₹4,000',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718709913/pkvvai4ae72pluydyrtk.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718709913/fsqkc1oawsgoaktykxsu.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718709913/sxr8ordmlnze7y5sy7fb.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718709913/uttgvwakvesjmqrtgl43.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718709913/ryocfikuzgxrqf5rlh8f.webp'
    ]
  },
  {
    // The listing page shows no confirmed price, so it stays on request.
    id: 5,
    name: 'Kaarobaar Bloom',
    area: 'Vedant Nagar',
    location: 'Vedant Nagar, Aurangabad',
    address: 'Siddharth Arcade, Vedant Nagar, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/2023-02-16.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/IMG-20220831-WA0058.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/IMG-20220831-WA0040.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/2022-09-03.jpg'
    ]
  },
  {
    id: 6,
    name: 'Kaarobaar Orchard',
    area: 'Konkanwadi',
    location: 'Konkanwadi, Aurangabad',
    address: 'Mauli Building, Panchavati Road, Samadhan Colony, Konkanwadi, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Printer', 'Car / Bike Parking'],
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, myHQ quoted price (negotiable)',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/IMG-20221018-WA0002.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/2022-10-21-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/IMG-20221018-WA0004.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/2022-10-21.jpg'
    ]
  },
  {
    id: 7,
    name: 'SCALE Coworking',
    area: 'Prozone Mall Area',
    location: 'Near Prozone Mall, Aurangabad',
    address: '213, Golden City Center, near Prozone Mall, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Car / Bike Parking'],
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, myHQ quoted price (negotiable)',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/WhatsApp-Image-2021-10-25-at-3.43.40-PM-4.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/2022-02-23-1.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/Scale-exterior.jpg'
    ]
  },
  {
    // Sold by the day on the operator's website, so no monthly desk rate is shown.
    id: 8,
    name: 'Network Coworking',
    area: 'Rokadiya Hanuman Colony',
    location: 'Rokadiya Hanuman Colony, Aurangabad',
    address: '311, Yash Tower, Rokadiya Hanuman Colony, Shivaji High School Road, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra 431001',
    phone: '+91 81499 10977',
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Tea/Coffee', 'Housekeeping', 'Storage', 'Car / Bike Parking'],
    price: '₹470',
    period: '/ day',
    priceFormatted: '₹470 / day',
    deskPrice: null,
    cabinPrice: null,
    priceNote: 'Workstation per day, operator website',
    ctaText: 'Get Quote',
    website: 'https://networkcoworking.net/',
    images: [
      'https://networkcoworking.net/web/image/1287-f2e91bf3/6.webp',
      'https://networkcoworking.net/web/image/1288-8b3b1de4/4.webp'
    ]
  }
];

export default aurangabadSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const aurangabadNeighborhoods = Object.entries(
  aurangabadSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const aurangabadOfficeCards = aurangabadSpaces.slice(0, 8);
export const moreAurangabadOfficeCards = aurangabadSpaces.slice(8);

export const aurangabadAreas = aurangabadNeighborhoods;

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
// Aurangabad Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allAurangabadOfficeCards = aurangabadSpaces;

export const getAurangabadOfficeCardById = (id) => findOfficeBySlug(allAurangabadOfficeCards, id, "aurangabad");
export const getAurangabadOfficeSlug = (space) => officePath(allAurangabadOfficeCards, space, "aurangabad");

// ============================================================================
// Top Coworking Locations in Aurangabad — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAurangabadCoworkingLocations = aurangabadNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: aurangabadSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
