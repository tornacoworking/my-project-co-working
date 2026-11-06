import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Bhavnagar (Gujarat) coworking spaces — Qdesq and LetMeSeat listing data, fetched Nov 6, 2026.
// Ratings and review counts are left out because no source gave a verifiable figure. Qdesq's phone number is its own sales line, so it isn't used.
// deskPrice / cabinPrice are per-seat monthly rates from the listings above; null shows "On request" on the detail page.

export const bhavnagarSpaces = [
  {
    // Landmark address only — verify before publishing.
    id: 1,
    name: 'Collab Nest',
    area: 'Shastrinagar',
    location: 'Shastrinagar, Bhavnagar',
    address: 'Near Jain Derasar, Shastrinagar, Bhavnagar, Gujarat',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Tea/Coffee'],
    capacity: 40,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: '₹7,000',
    priceNote: 'Per desk, Qdesq and LetMeSeat listings',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718181958/uzzldma5itewwfuwahdf.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718181970/mat58ai8ulsh0ddkicer.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718181988/dmicfpvvrdpsvgchacnr.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718181920/ulypc84vtbsknuelhszx.webp'
    ]
  }
];

export default bhavnagarSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const bhavnagarNeighborhoods = Object.entries(
  bhavnagarSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const bhavnagarOfficeCards = bhavnagarSpaces.slice(0, 8);
export const moreBhavnagarOfficeCards = bhavnagarSpaces.slice(8);

export const bhavnagarAreas = bhavnagarNeighborhoods;

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
// Bhavnagar Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allBhavnagarOfficeCards = bhavnagarSpaces;

export const getBhavnagarOfficeCardById = (id) => findOfficeBySlug(allBhavnagarOfficeCards, id, "bhavnagar");
export const getBhavnagarOfficeSlug = (space) => officePath(allBhavnagarOfficeCards, space, "bhavnagar");

// ============================================================================
// Top Coworking Locations in Bhavnagar — one tile per area, using a photo from a space in that area
// ============================================================================
export const topBhavnagarCoworkingLocations = bhavnagarNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: bhavnagarSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
