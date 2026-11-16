import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Prayagraj (Uttar Pradesh) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - MyBranch Services Pvt. Ltd. (address not in Prayagraj: none)
//  - iAppsnGames &#038; Workspaces (address not in Prayagraj: none)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const prayagrajSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-prayagraj-civil-lines , https://www.qdesq.com/brand/my-branch/civil-lines-prayagraj-pra002 , https://gofloaters.com/office-space/gooffice-40332-dedicated-desks-civil-lines-prayagraj/ , https://gofloaters.com/office-space/gooffice-40333-4-seater-private-cabin-civil-lines-prayagraj/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Civil Lines',
    location: 'Civil Lines, Prayagraj',
    address: '4C, S N Towers,Maharishi Dayanand Marg, Opp Radio Station, Civil Lines, Allahabad, Uttar Pradesh - 211001',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹6,050',
    period: '/ month',
    priceFormatted: '₹6,050 / month',
    deskPrice: '₹6,050',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/allahabad_rep.webp',
      'https://www.mybranch.co.in/office/office_images/allahabad_mr.webp',
      'https://www.mybranch.co.in/office/office_images/allahabad_cw.webp'
    ]
  }
];

export default prayagrajSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const prayagrajNeighborhoods = Object.entries(
  prayagrajSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const prayagrajOfficeCards = prayagrajSpaces.slice(0, 8);
export const morePrayagrajOfficeCards = prayagrajSpaces.slice(8);

export const prayagrajAreas = prayagrajNeighborhoods;

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
// Prayagraj Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allPrayagrajOfficeCards = prayagrajSpaces;

export const getPrayagrajOfficeCardById = (id) => findOfficeBySlug(allPrayagrajOfficeCards, id, "prayagraj");
export const getPrayagrajOfficeSlug = (space) => officePath(allPrayagrajOfficeCards, space, "prayagraj");

// ============================================================================
// Top Coworking Locations in Prayagraj — one tile per area, using a photo from a space in that area
// ============================================================================
export const topPrayagrajCoworkingLocations = prayagrajNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: prayagrajSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
