import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Aurangabad (Chhatrapati Sambhajinagar, Maharashtra) coworking spaces — Qdesq, CoworkingCafe, Coworker and myHQ listing data, fetched Nov 6, 2026.
// Prices are the Qdesq per-desk rate; other listings differ, so priceNote says so. Confirm with each operator before publishing.
// Excluded: Connect Enterprises (photos carry another brand's watermark); SCALE Coworking and Kaarobaar (no usable photos found).
// Ratings, review counts and phone numbers are left out because no source gave a verifiable figure. Qdesq's number is its own sales line.

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
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718709913/pkvvai4ae72pluydyrtk.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718709913/fsqkc1oawsgoaktykxsu.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718709913/sxr8ordmlnze7y5sy7fb.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718709913/uttgvwakvesjmqrtgl43.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718709913/ryocfikuzgxrqf5rlh8f.webp'
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
