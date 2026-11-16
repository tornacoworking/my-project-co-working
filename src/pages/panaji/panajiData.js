import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Panaji (Goa) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - KOENIG Solutions (company office or outside the city)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const panajiSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-panaji-dr-atmaram-borkar-rd , https://www.qdesq.com/brand/my-branch/panjim-goa-goa014
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Panjim',
    location: 'Panjim, Panaji',
    address: 'Office No 201, Located at level 2, First Floor, Nova Goa building, Dr,Atmaram Borkar Road, Panaji, Goa – 403001',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹9,500',
    period: '/ month',
    priceFormatted: '₹9,500 / month',
    deskPrice: '₹9,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/goa_rep.webp',
      'https://www.mybranch.co.in/office/office_images/goa_caf.webp',
      'https://www.mybranch.co.in/office/office_images/goa_cw.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/kowo-workspaces/near-edc-house-panaji-pan015
    id: 2,
    name: 'Kowo WorkSpaces',
    area: 'Panaji CBD (Central Business District)',
    location: 'Panaji CBD (Central Business District), Panaji',
    address: 'Nizmar Center / near eDC house, Panaji CBD (Central Business District), Panaji, Goa',
    phone: null,
    hours: null,
    amenities: ['Mail Handling', 'High Speed WiFi', 'Air Conditioning', 'Printer', 'Storage', 'Meeting Rooms', 'Lounge'],
    capacity: 70,
    price: '₹10,000',
    period: '/ month',
    priceFormatted: '₹10,000 / month',
    deskPrice: '₹10,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/85bd9311d87a5be98b84313276ed1769_4gG8LUREIS.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/569d7584177a5b7b27818baf7e729923_RjhX5yYGX.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/224cbc4c927201fc77a226c5987fe8ce_Nh6wRtZUh-.png'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/timebox/patto-centre-panaji-pan009
    id: 3,
    name: 'Timebox',
    area: 'Patto Centre',
    location: 'Patto Centre, Panaji',
    address: 'Near Gera\'s Imperium Star, Patto Centre, Panaji, Goa',
    phone: null,
    hours: '8:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 120,
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1696573874/chhhvqrnzni4mr1fhfyi.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1696405463/anj8yashsqax1rs4arke.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1696405463/ddh6whvdjftzzy691ky6.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/smvv-desk-community/patto-panaji-pan008
    id: 4,
    name: 'Smvv Desk Community',
    area: 'Patto',
    location: 'Patto, Panaji',
    address: 'Near Gera Imperium Star, Patto, Panaji, Goa',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'Air Conditioning', 'High Speed WiFi', 'Mail Handling'],
    capacity: 32,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1674800001/rmunvxxqtjnen42mjtwd.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/b2b-business-service-centre/mg-road-panaji-pan012
    id: 5,
    name: 'B2B Business Service Centre',
    area: 'MG Road',
    location: 'MG Road, Panaji',
    address: 'Near Manjunath Building, MG Road, Panaji, Goa',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Mail Handling'],
    capacity: 40,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1658741378/erhe0a8ymvksccch7s9i.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1658741277/ewksbnzirxtkoalljnjb.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1658741286/ux0i60e5pqimxvzsac7s.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/mewo/panaji-goa-goa012
    id: 6,
    name: 'MeWo',
    area: 'Panaji',
    location: 'Panaji, Panaji',
    address: 'Near Dempo Trade Center, Panaji, Panaji, Goa',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Lounge', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 200,
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1581313866/b5tyysdgqvy5fhhnxep7.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1692612563/cth2ayfucyctutihvjcp.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1692612965/tuijfxbazdgfydu5cxam.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/91springboard/santa-inez-panaji-pan003
    id: 7,
    name: '91 Springboard',
    area: 'Santa Inez',
    location: 'Santa Inez, Panaji',
    address: 'Near Shanta Building, Santa Inez, Panaji, Goa',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms'],
    capacity: 100,
    price: '₹8,150',
    period: '/ month',
    priceFormatted: '₹8,150 / month',
    deskPrice: '₹8,150',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1676529426/axtutnqtv2inku4qiz2o.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1676529383/u6uyxiis0s4hf35ove0p.webp'
    ]
  }
];

export default panajiSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const panajiNeighborhoods = Object.entries(
  panajiSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const panajiOfficeCards = panajiSpaces.slice(0, 8);
export const morePanajiOfficeCards = panajiSpaces.slice(8);

export const panajiAreas = panajiNeighborhoods;

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
// Panaji Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allPanajiOfficeCards = panajiSpaces;

export const getPanajiOfficeCardById = (id) => findOfficeBySlug(allPanajiOfficeCards, id, "panaji");
export const getPanajiOfficeSlug = (space) => officePath(allPanajiOfficeCards, space, "panaji");

// ============================================================================
// Top Coworking Locations in Panaji — one tile per area, using a photo from a space in that area
// ============================================================================
export const topPanajiCoworkingLocations = panajiNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: panajiSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
