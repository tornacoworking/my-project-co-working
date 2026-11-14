import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Ludhiana (Punjab) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com, coworkingers.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - JSR Technology (company office or outside the city)
//  - GOSHAWK RENTAL SPACE SOLUTIONS (company office or outside the city)
//  - My Branch (Qdesq lists it in Gurdev Nagar, Patiala)
//  - Goshawk Rental Space Solutions Pvt. Limited (not an office)
//  - CosMark Media Pvt Ltd (not an office)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const ludhianaSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-ludhiana-feroz-gandhi-market , https://www.qdesq.com/brand/my-branch/gurdev-nagar-ludhiana-ldn006 , https://www.qdesq.com/brand/my-branch/ferozpur-road-ludhiana-ldn001 , https://coworkingers.com/listing/mybranch-services-pvt-ltd-2/ , https://gofloaters.com/office-space/gooffice-40328-4-seater-private-cabin-sandhu-tower-ludhiana/ , https://gofloaters.com/office-space/gooffice-40329-dedicated-desks-sandhu-tower-ludhiana/ , https://gofloaters.com/office-space/gooffice-40326-4-seater-private-cabin-feroz-gandhi-market-ludhiana/ , https://gofloaters.com/office-space/gooffice-40327-dedicated-desks-feroz-gandhi-market-ludhiana/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Gurdev Nagar',
    location: 'Gurdev Nagar, Ludhiana',
    address: '3rd Floor, Property Number 751/120, Zone-D, Block-26, Firoz Gandhi Market, Ludhiana, Punjab- 141001',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/1739279408_1735625433_3_4_11zon - Copy.jpg',
      'https://www.mybranch.co.in/office/office_images/1739279408_1735625433_9_10_11zon.jpg',
      'https://www.mybranch.co.in/office/office_images/1742296560_355_11zon.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/coworks-by-stm/mall-enclave-ludhiana-ldn009
    id: 2,
    name: 'Coworks BY STM',
    area: 'Mall Enclave',
    location: 'Mall Enclave, Ludhiana',
    address: 'Near Carnival Complex, Mall Enclave, Ludhiana, Punjab',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 50,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/ad9193d4fd2e2dd95feb300d40055175_Xn8f9Sycq.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/18af5876fff7f4e47348d74facdceab2_3fPpXvbzd.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/291b30a6a22e0f3ae0d4d3c8afad481d_yINgtC-EF.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/my-soho/f-block-sbs-nagar-ludhiana-ldn007
    id: 3,
    name: 'My Soho',
    area: 'F-Block SBS Nagar',
    location: 'F-Block SBS Nagar, Ludhiana',
    address: 'Near F Block, F-Block SBS Nagar, Ludhiana, Punjab',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 70,
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    deskPrice: '₹8,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1713274292/zqkysjdzpovhwmk6h11e.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1713274307/xd2jtmsaxdanojmh0v4e.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1713274307/xsm3zr3qvhdizmxiexhd.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/my-soho/bhai-randhir-singh-nagar-ludhiana-ldn008
    id: 4,
    name: 'My Soho',
    area: 'Bhai Randhir Singh Nagar',
    location: 'Bhai Randhir Singh Nagar, Ludhiana',
    address: 'Near Downtown, Bhai Randhir Singh Nagar, Ludhiana, Punjab',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 54,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/5367a71d82f79aa3d4bda8b95bf67957_4B6IQH_x7C.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/d6377547bba85fabbfbbbfdbbaafe006_WQixBerhsA.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/42fb4b72a30c587347a06456f0b2d137_8288GW4EB.JPG'
    ]
  }
];

export default ludhianaSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const ludhianaNeighborhoods = Object.entries(
  ludhianaSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const ludhianaOfficeCards = ludhianaSpaces.slice(0, 8);
export const moreLudhianaOfficeCards = ludhianaSpaces.slice(8);

export const ludhianaAreas = ludhianaNeighborhoods;

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
// Ludhiana Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allLudhianaOfficeCards = ludhianaSpaces;

export const getLudhianaOfficeCardById = (id) => findOfficeBySlug(allLudhianaOfficeCards, id, "ludhiana");
export const getLudhianaOfficeSlug = (space) => officePath(allLudhianaOfficeCards, space, "ludhiana");

// ============================================================================
// Top Coworking Locations in Ludhiana — one tile per area, using a photo from a space in that area
// ============================================================================
export const topLudhianaCoworkingLocations = ludhianaNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: ludhianaSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
