import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Gangtok (Sikkim) coworking spaces, compiled 13 Nov 2026 from sanctorum.work, qdesq.com, mybranch.co.in.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const gangtokSpaces = [
  {
    // Sources: https://sanctorum.work/ , https://www.qdesq.com/brand/sanctorum-coworking/arithang-gangtok-gan002
    id: 1,
    name: 'Sanctorum Coworking',
    area: 'Development Area',
    location: 'Development Area, Gangtok',
    address: '3rd Floor, Sawan Gurung Building, Jeewan Theeng Marg, Development Area, Gangtok, Sikkim 737101',
    phone: null,
    hours: '10:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Tea/Coffee', 'Lounge', 'Printer', 'Storage'],
    capacity: 10,
    price: '₹5,310',
    period: '/ month',
    priceFormatted: '₹5,310 / month',
    deskPrice: '₹5,310',
    cabinPrice: null,
    priceNote: 'Common desk incl. GST, operator website (dedicated desk ₹7,080)',
    ctaText: 'Get Quote',
    website: 'https://sanctorum.work/',
    images: [
      'https://sanctorum.work/img/floor.jpg',
      'https://sanctorum.work/img/lounge.jpg',
      'https://sanctorum.work/img/pod.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/1e28fb05d1bbe8a58b4231f80f78b972_NhWphCgq3.JPG'
    ]
  },
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-gangtok-deorali-bazar
    id: 2,
    name: 'MyBranch Coworking Space',
    area: 'Deorali Bazar',
    location: 'Deorali Bazar, Gangtok',
    address: '1st Floor, Mohora Commercial, opp. Deorali Bazar, near Butterfly Bridge, Gangtok, Sikkim 737101',
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
      'https://www.mybranch.co.in/office/office_images/gangtok_cw.webp',
      'https://www.mybranch.co.in/office/office_images/gangtok_mr.webp',
      'https://www.mybranch.co.in/office/office_images/gangtok_caf.webp',
      'https://www.mybranch.co.in/office/office_images/gangtok_rep.webp'
    ]
  }
];

export default gangtokSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const gangtokNeighborhoods = Object.entries(
  gangtokSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const gangtokOfficeCards = gangtokSpaces.slice(0, 8);
export const moreGangtokOfficeCards = gangtokSpaces.slice(8);

export const gangtokAreas = gangtokNeighborhoods;

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
// Gangtok Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allGangtokOfficeCards = gangtokSpaces;

export const getGangtokOfficeCardById = (id) => findOfficeBySlug(allGangtokOfficeCards, id, "gangtok");
export const getGangtokOfficeSlug = (space) => officePath(allGangtokOfficeCards, space, "gangtok");

// ============================================================================
// Top Coworking Locations in Gangtok — one tile per area, using a photo from a space in that area
// ============================================================================
export const topGangtokCoworkingLocations = gangtokNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: gangtokSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
