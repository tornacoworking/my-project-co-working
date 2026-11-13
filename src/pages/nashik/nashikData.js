import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Nashik (Maharashtra) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - InCube Coworking (Govind Nagar): both photos show people
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const nashikSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-nashik-uttam-tower , https://www.qdesq.com/brand/my-branch/anandwan-colony-nashik-nsk017 , https://gofloaters.com/office-space/gooffice-40427-4-seater-private-cabin-uttam-tower-nashik/ , https://gofloaters.com/office-space/gooffice-40428-dedicated-desks-uttam-tower-nashik/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Anandwan Colony',
    location: 'Anandwan Colony, Nashik',
    address: 'Uttam Tower, Besides St Andhrews Church, Sharanpur, Link Road Nashik Maharashtra 422005',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹7,500',
    period: '/ month',
    priceFormatted: '₹7,500 / month',
    deskPrice: '₹7,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/1741348766_295_11zon.jpg',
      'https://www.mybranch.co.in/office/office_images/1741348766_296_11zon.jpg',
      'https://www.mybranch.co.in/office/office_images/1741348766_294_11zon.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/bfox/bhabha-nagar-nashik-nsk010
    id: 2,
    name: 'Bfox',
    area: 'Bhabha Nagar',
    location: 'Bhabha Nagar, Nashik',
    address: 'Near Haji Darbar, Bhabha Nagar, Nashik, Maharashtra',
    phone: null,
    hours: '9:00 AM – 5:00 PM, Mon–Fri',
    amenities: ['Mail Handling', 'High Speed WiFi'],
    capacity: 12,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1653639905/jzhnmzf9xantdzixipoz.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1653639916/gjyy8he4obtwvodponls.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/the-hustle-house-coworking/tilakwadi-nashik-nsk012
    id: 3,
    name: 'The Hustle House Coworking',
    area: 'Tilakwadi',
    location: 'Tilakwadi, Nashik',
    address: 'Near Success Square, Tilakwadi, Nashik, Maharashtra',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 25,
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1659598776/rpii8wdh6lgtc7udots8.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1659598774/svh2kgma6xsbds1muflg.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1659598775/ph5bhtnqhn7bu4k26grj.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/incube-coworking-space/tidke-colony-nashik-nsk015
    id: 4,
    name: 'InCube Coworking space',
    area: 'Tidke Colony',
    location: 'Tidke Colony, Nashik',
    address: 'Near Trinity Towers, Tidke Colony, Nashik, Maharashtra',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning', 'Lounge', 'Mail Handling'],
    capacity: 50,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1671446024/sxdxdql1pmdnigvlv5u1.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1671445998/miorojvslgaolxoda0yo.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1671533060/cn8wkfvlym3twthwa9zl.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/gumption-geeks/lekha-nagar-nashik-nsk011
    id: 5,
    name: 'Gumption Geeks',
    area: 'Shanti Nagar',
    location: 'Shanti Nagar, Nashik',
    address: 'Near Barbeque Ville, Shanti Nagar, Nashik, Maharashtra',
    phone: null,
    hours: '10:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 15,
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1655378813/rohinxznc1wefdfr67nk.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1655378813/ow3engom0v0mszt8drby.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1655378813/kywhryguczexkknsxzgk.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/incube-coworking-space/untwadi-rd-nashik-nsk009
    id: 6,
    name: 'InCube Coworking space',
    area: 'Untwadi Rd',
    location: 'Untwadi Rd, Nashik',
    address: 'Near K City Mall, Untwadi Rd, Nashik, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'Mail Handling', 'High Speed WiFi', 'Air Conditioning'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1644494244/jf05q5r6l92pvxcw4he8.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1644403342/sxgphg92tcaevyq1x2mz.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/45-degrees-cowork/branch-nashik-nsk005
    id: 7,
    name: '45 degrees cowork',
    area: 'Nashik',
    location: 'Nashik, Nashik',
    address: 'Near State Bank Of India, Branch, Nashik, Maharashtra',
    phone: null,
    hours: '10:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi'],
    price: '₹4,180',
    period: '/ month',
    priceFormatted: '₹4,180 / month',
    deskPrice: '₹4,180',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1596533403/mwnfpq3k2qfabevydvdc.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1596533209/lfdcoetdb2lzx0wfeilh.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1596533235/txsnfkg4hdw3agbuqdnc.webp'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-31001-open-desks-veer-sawarkar-nagar-nashik/
    id: 8,
    name: 'Deck Spaces Coworking',
    area: 'Veer Sawarkar Nagar',
    location: 'Veer Sawarkar Nagar, Nashik',
    address: 'Veer Sawarkar Nagar, Nashik, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹7,250',
    period: '/ month',
    priceFormatted: '₹7,250 / month',
    deskPrice: '₹7,250',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks_1721902043649%3Falt%3Dmedia%26token%3Dcab817a8-ccbd-424b-84ca-22cefd179b05.webp?alt=media&token=b49e3f12-7ef9-4a6e-bef4-bccf8789a3c5',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks_1721902050537%3Falt%3Dmedia%26token%3D79ae8f10-2ff5-4860-b46d-205e8e5184b6.webp?alt=media&token=a4fa1dd9-af53-4e41-b183-0089ccbe5325',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks_1721902057018%3Falt%3Dmedia%26token%3Dca14510c-f671-43de-a729-879980900aa2.webp?alt=media&token=e1b122f8-ab89-4583-814b-7b386cad9f06'
    ]
  }
];

export default nashikSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const nashikNeighborhoods = Object.entries(
  nashikSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const nashikOfficeCards = nashikSpaces.slice(0, 8);
export const moreNashikOfficeCards = nashikSpaces.slice(8);

export const nashikAreas = nashikNeighborhoods;

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
// Nashik Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allNashikOfficeCards = nashikSpaces;

export const getNashikOfficeCardById = (id) => findOfficeBySlug(allNashikOfficeCards, id, "nashik");
export const getNashikOfficeSlug = (space) => officePath(allNashikOfficeCards, space, "nashik");

// ============================================================================
// Top Coworking Locations in Nashik — one tile per area, using a photo from a space in that area
// ============================================================================
export const topNashikCoworkingLocations = nashikNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: nashikSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
