import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Dharamshala & McLeod Ganj (Himachal Pradesh) coworking spaces, compiled 13 Nov 2026 from qdesq.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - Alt Life: only photo is a group of people
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const dharamshalaMcleodGanjSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/first-space/sham-nagar-dharamshala-dha005
    id: 1,
    name: 'First Space',
    area: 'Sham Nagar',
    location: 'Sham Nagar, Dharamshala & McLeod Ganj',
    address: 'Near Employment Exchange, Sham Nagar, Dharamshala, Himachal Pradesh',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    capacity: 20,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718867845/jr43mwup6qee3afewn0p.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718696078/nwh80p3kr2ryfwsmgndu.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718696078/ovuktjtx99dwv3uv9fdz.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1718696088/rerr6ujiwbthoome5oqf.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/dharamshalaco/chilgari-dharamshala-dha006
    id: 2,
    name: 'Dharamshala.co',
    area: 'Chilgari',
    location: 'Chilgari, Dharamshala & McLeod Ganj',
    address: 'Near Maharana Pratap Bhawan, Chilgari, Dharamshala, Himachal Pradesh',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'Mail Handling', 'Air Conditioning', 'High Speed WiFi', 'Lounge'],
    capacity: 50,
    price: '₹2,500',
    period: '/ month',
    priceFormatted: '₹2,500 / month',
    deskPrice: '₹2,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/62a83abe2072668e0a4443d20b65056f_815z__odp.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/the-void/upper-bhagsu-dharamshala-dha004
    id: 3,
    name: 'The VOID',
    area: 'Upper Bhagsu',
    location: 'Upper Bhagsu, Dharamshala & McLeod Ganj',
    address: 'Upper Bhagsu, McLeod Ganj, Dharamshala, Himachal Pradesh',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Lounge', 'Mail Handling'],
    capacity: 10,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1693217915/mbdmpfv5m3bgd1a6mwdg.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1693217877/qsa6wqknjc05vt3h3o1x.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1693217877/eu3jvimwohyh88ewd3fo.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1693217878/iu9nbzchnpyii49t9jvo.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/ghoomakad/daramsala-rakkar-rak002
    id: 4,
    name: 'Ghoomakad',
    area: 'Rakkar',
    location: 'Rakkar, Dharamshala & McLeod Ganj',
    address: 'Near Ghoomakad Junction, Rakkar, Dharamshala, Himachal Pradesh',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sun',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 20,
    price: '₹4,500',
    period: '/ month',
    priceFormatted: '₹4,500 / month',
    deskPrice: '₹4,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1610003708/fhehr0p6ry43w9mwryd3.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1610003708/bwwlllyrbxcrtqnnt6ki.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1610003708/zmk2tdzfe3y8yucrccwu.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1610003709/ortfugdekp0skw6lkbb1.jpg'
    ]
  }
];

export default dharamshalaMcleodGanjSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const dharamshalaMcleodGanjNeighborhoods = Object.entries(
  dharamshalaMcleodGanjSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const dharamshalaMcleodGanjOfficeCards = dharamshalaMcleodGanjSpaces.slice(0, 8);
export const moreDharamshalaMcleodGanjOfficeCards = dharamshalaMcleodGanjSpaces.slice(8);

export const dharamshalaMcleodGanjAreas = dharamshalaMcleodGanjNeighborhoods;

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
// Dharamshala & McLeod Ganj Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allDharamshalaMcleodGanjOfficeCards = dharamshalaMcleodGanjSpaces;

export const getDharamshalaMcleodGanjOfficeCardById = (id) => findOfficeBySlug(allDharamshalaMcleodGanjOfficeCards, id, "dharamshala-mcleod-ganj");
export const getDharamshalaMcleodGanjOfficeSlug = (space) => officePath(allDharamshalaMcleodGanjOfficeCards, space, "dharamshala-mcleod-ganj");

// ============================================================================
// Top Coworking Locations in Dharamshala & McLeod Ganj — one tile per area, using a photo from a space in that area
// ============================================================================
export const topDharamshalaMcleodGanjCoworkingLocations = dharamshalaMcleodGanjNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: dharamshalaMcleodGanjSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
