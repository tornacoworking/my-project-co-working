import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Kolhapur (Maharashtra) coworking spaces, compiled 13 Nov 2026 from qdesq.com, gofloaters.com, mybranch.co.in.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const kolhapurSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/my-branch/poorvarang-kolhapur-kol116 , https://gofloaters.com/office-space/gooffice-40420-4-seater-private-cabin-rajarampuri-kolhapur/ , https://gofloaters.com/office-space/gooffice-40441-dedicated-desks-rajarampuri-kolhapur/ , https://www.mybranch.co.in/coworking-space-in-kolhapur-rajarampuri
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Poorvarang',
    location: 'Poorvarang, Kolhapur',
    address: '3rd floor, Ace Arcade, 9th Ln, near Lucky Bazar, Poorvarang, Mahalaxminagar, Rajarampuri, Kolhapur, Maharashtra 416008',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    capacity: 100,
    price: '₹7,500',
    period: '/ month',
    priceFormatted: '₹7,500 / month',
    deskPrice: '₹7,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/b84d771bc2651e2e68db83eac051db9c_SwRH_7Rse.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/4c2b0a7fdb23518e70a1c7d75fbd9060__Cq4di__z.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/448f51a60f86cad9a870a5ec4d740dee_bpLk4orsjV.JPG'
    ]
  }
];

export default kolhapurSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const kolhapurNeighborhoods = Object.entries(
  kolhapurSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const kolhapurOfficeCards = kolhapurSpaces.slice(0, 8);
export const moreKolhapurOfficeCards = kolhapurSpaces.slice(8);

export const kolhapurAreas = kolhapurNeighborhoods;

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
// Kolhapur Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allKolhapurOfficeCards = kolhapurSpaces;

export const getKolhapurOfficeCardById = (id) => findOfficeBySlug(allKolhapurOfficeCards, id, "kolhapur");
export const getKolhapurOfficeSlug = (space) => officePath(allKolhapurOfficeCards, space, "kolhapur");

// ============================================================================
// Top Coworking Locations in Kolhapur — one tile per area, using a photo from a space in that area
// ============================================================================
export const topKolhapurCoworkingLocations = kolhapurNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: kolhapurSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
