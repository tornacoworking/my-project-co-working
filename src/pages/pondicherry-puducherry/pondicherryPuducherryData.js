import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Puducherry (Puducherry) coworking spaces, compiled 13 Nov 2026 from qdesq.com, coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - Askan Technologies (company office or outside the city)
//  - Auromode HIVE (Qdesq lists it in Auroshilpam, Auroville)
//  - Pulsebay Coworking – HQ (address not in Puducherry: none)
//  - Pulsebay Coworking – Heritage (address not in Puducherry: none)
//  - BM Group (not a coworking space)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const pondicherryPuducherrySpaces = [
  {
    // Sources: https://www.qdesq.com/brand/cwc-connect-work-chill/mudaliarpet-puducherry-pud003
    id: 1,
    name: 'CWC- Connect Work & CHill',
    area: 'Mudaliarpet',
    location: 'Mudaliarpet, Puducherry',
    address: 'Near Indira Gandhi Square, Mudaliarpet, Puducherry, Puducherry',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Air Conditioning', 'High Speed WiFi'],
    capacity: 25,
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1713352944/kkpao2fef7p3asfnupsq.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1713352930/xfdg7r8fjriu2hg43wo6.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1714649409/fsoq18lriy8gngnagyfs.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/bookings-maker/ellaipillaichavady-puducherry-pud002
    id: 2,
    name: 'Bookings Maker',
    area: 'Ellaipillaichavady',
    location: 'Ellaipillaichavady, Puducherry',
    address: 'Near VFS Global, Ellaipillaichavady, Puducherry, Puducherry',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Mail Handling', 'Meeting Rooms'],
    capacity: 50,
    price: '₹3,500',
    period: '/ month',
    priceFormatted: '₹3,500 / month',
    deskPrice: '₹3,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1674022239/iaaqw7pih8w2kkeqs2ae.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1673680868/zox12twwzsvngzk2iewd.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1673680868/ggg8joqnvm9wv18fdac0.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/pulsebay-coworking/sokkanathan-pet-puducherry-pud001
    id: 3,
    name: 'Pulsebay Coworking',
    area: 'Sokkanathan Pet',
    location: 'Sokkanathan Pet, Puducherry',
    address: 'Near Thamiz Hotel, Sokkanathan Pet, Puducherry, Puducherry',
    phone: null,
    hours: '9:00 AM – 10:00 PM, Mon–Sun',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms', 'Mail Handling'],
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1598607452/ehup7cltkmlgcypbgkpq.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1598607317/sy4in9h3oltig8c3amog.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1598607311/qreqbwruq3hj7cxomsur.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/pulsebay-coworking/aurobindo-street-puducherry-pud002
    id: 4,
    name: 'Pulsebay Coworking',
    area: 'Aurobindo Street',
    location: 'Aurobindo Street, Puducherry',
    address: 'Near Jothi Eye Care Centre, Aurobindo Street, Puducherry, Puducherry',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1608797585/e6zzjax3relvi9elv82q.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1608797585/wsskr0jmg5lswhwoouct.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1608797585/b4a3ybrsgtcoaafqhm52.png'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/pulsebay/mg-road-area-pondicherry-pon002
    id: 5,
    name: 'Pulsebay',
    area: 'MG Road Area',
    location: 'MG Road Area, Puducherry',
    address: 'Near Treebo Hotel, MG Road Area, Puducherry, Puducherry',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1650274840/ub6dzsyyowhnhmu60vk9.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1650348434/t6aubcblhy4mpknjweae.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1650274916/ca8ufsbxmlvtgco5vaqo.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/pulsebay-coworking-whitetown/
    id: 6,
    name: 'Pulsebay Coworking – Whitetown',
    area: 'Colas Nagar',
    location: 'Colas Nagar, Puducherry',
    address: 'Fun center, South Boulevard, Colas Nagar, Puducherry',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'High Speed WiFi', 'Car / Bike Parking'],
    price: '₹3,999',
    period: '/ month',
    priceFormatted: '₹3,999 / month',
    deskPrice: '₹3,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/2022-04-28-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/o5-Large-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/08/p7-Large-min.jpeg'
    ]
  }
];

export default pondicherryPuducherrySpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const pondicherryPuducherryNeighborhoods = Object.entries(
  pondicherryPuducherrySpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const pondicherryPuducherryOfficeCards = pondicherryPuducherrySpaces.slice(0, 8);
export const morePondicherryPuducherryOfficeCards = pondicherryPuducherrySpaces.slice(8);

export const pondicherryPuducherryAreas = pondicherryPuducherryNeighborhoods;

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
// Puducherry Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allPondicherryPuducherryOfficeCards = pondicherryPuducherrySpaces;

export const getPondicherryPuducherryOfficeCardById = (id) => findOfficeBySlug(allPondicherryPuducherryOfficeCards, id, "pondicherry-puducherry");
export const getPondicherryPuducherryOfficeSlug = (space) => officePath(allPondicherryPuducherryOfficeCards, space, "pondicherry-puducherry");

// ============================================================================
// Top Coworking Locations in Puducherry — one tile per area, using a photo from a space in that area
// ============================================================================
export const topPondicherryPuducherryCoworkingLocations = pondicherryPuducherryNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: pondicherryPuducherrySpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
