import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Jamshedpur (Jharkhand) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const jamshedpurSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-jamshedpur-bistupur
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Bistupur',
    location: 'Bistupur, Jamshedpur',
    address: '1st Floor, opp. Ram Mandir, Main Road, Bistupur, Jamshedpur, Jharkhand 831001',
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
      'https://www.mybranch.co.in/office/office_images/jamshedpur_cw.webp',
      'https://www.mybranch.co.in/office/office_images/jamshedpur_mr.webp',
      'https://www.mybranch.co.in/office/office_images/jamshedpur_caf.webp',
      'https://www.mybranch.co.in/office/office_images/jamshedpur_recp.webp'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-29001-open-desks-bistupur-jamshedpur/
    id: 2,
    name: 'Magic Touch Coworking Space',
    area: 'Bistupur',
    location: 'Bistupur, Jamshedpur',
    address: 'Bistupur, Jamshedpur, Jharkhand',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    deskPrice: '₹5,999',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk_1708154390311%3Falt%3Dmedia%26token%3Db5b2d115-ad37-445a-acf0-4121fa7bd0ef.webp?alt=media&token=195cfa0d-5794-4e7a-be35-f9b5c9365304',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk_1708154398016%3Falt%3Dmedia%26token%3D2a4d85d7-326c-4f7a-8dcd-098fd3cc0057.webp?alt=media&token=514267be-2122-4b1c-b754-9aea0397cdc9',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk_1708154409190%3Falt%3Dmedia%26token%3Dfd8eb8dd-b998-4e91-9ef4-5fb0f964c0a1.webp?alt=media&token=ab826953-69f0-4c3d-a3ad-7889bdf22577'
    ]
  }
];

export default jamshedpurSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const jamshedpurNeighborhoods = Object.entries(
  jamshedpurSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const jamshedpurOfficeCards = jamshedpurSpaces.slice(0, 8);
export const moreJamshedpurOfficeCards = jamshedpurSpaces.slice(8);

export const jamshedpurAreas = jamshedpurNeighborhoods;

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
// Jamshedpur Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allJamshedpurOfficeCards = jamshedpurSpaces;

export const getJamshedpurOfficeCardById = (id) => findOfficeBySlug(allJamshedpurOfficeCards, id, "jamshedpur");
export const getJamshedpurOfficeSlug = (space) => officePath(allJamshedpurOfficeCards, space, "jamshedpur");

// ============================================================================
// Top Coworking Locations in Jamshedpur — one tile per area, using a photo from a space in that area
// ============================================================================
export const topJamshedpurCoworkingLocations = jamshedpurNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: jamshedpurSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
