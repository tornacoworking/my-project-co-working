import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Ranchi (Jharkhand) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const ranchiSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-ranchi-sujata-chowk , https://www.qdesq.com/brand/my-branch/sujata-chowk-ranchi-rnc013 , https://www.qdesq.com/brand/my-branch/kanka-ranchi-rnc003 , https://gofloaters.com/office-space/gooffice-40404-4-seater-private-cabin-sujata-chowk-ranchi/ , https://gofloaters.com/office-space/gooffice-40405-dedicated-desks-sujata-chowk-ranchi/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Sujata Chowk',
    location: 'Sujata Chowk, Ranchi',
    address: 'Church Complex, Saluja Tower,6th Floor, Above Vasan Eye Care, Peepe Compund, Main Road, Sujata Chowk, Ranchi, Jharkhand - 834001',
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
      'https://www.mybranch.co.in/office/office_images/ranchi_rep.webp',
      'https://www.mybranch.co.in/office/office_images/ranchi_caf.webp',
      'https://www.mybranch.co.in/office/office_images/ranchi_cw.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/work-studio/hindpiri-ranchi-rnc009 , https://www.qdesq.com/brand/work-studio-coworking/ranchi-ranchi-rnc001 , https://www.qdesq.com/brand/work-studio-coworking/hindpiri-ranchi-rnc002
    id: 2,
    name: 'Work Studio',
    area: 'Hindpiri',
    location: 'Hindpiri, Ranchi',
    address: 'Near Commerce Tower, Hindpiri, Ranchi, Jharkhand',
    phone: null,
    hours: '9:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 50,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1657958662/kzkxtwenjqb4rx4rwlvu.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1624962896/gafxohggo5cphxiqdxdc.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1624962806/ezof3qytedzld4w1w348.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/tbl-space/hindpiri-ranchi-rnc008
    id: 3,
    name: 'TBL Space',
    area: 'Hindpiri',
    location: 'Hindpiri, Ranchi',
    address: 'opposite gel church complex, Hindpiri, Ranchi, Jharkhand',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1614683579/e6wyuplidmavgjooxfhj.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1614683598/rpoqfwaxpliladduh4ob.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1614840254/hjp3uwablrxlu7xyjncc.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/magic-touch-coworking-space/ranchi-ranchi-ran004 , https://gofloaters.com/office-space/gooffice-6304-open-desks-ahirtoli-ranchi/ , https://gofloaters.com/office-space/gooffice-6310-3-seater-private-cabin-ahirtoli-ranchi/ , https://gofloaters.com/office-space/gooffice-6313-4-seater-private-cabin-ahirtoli-ranchi/ , https://gofloaters.com/office-space/gooffice-6360-open-desks-kumhartoli-ranchi/
    id: 4,
    name: 'Magic Touch Coworking Space',
    area: 'Ranchi',
    location: 'Ranchi, Ranchi',
    address: 'Panchwati Plaza, Ranchi, Ranchi, Jharkhand',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Lounge', 'Air Conditioning', 'High Speed WiFi'],
    capacity: 125,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: '₹1,500',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1679117546/fd19s3o602sxpioloq3d.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1679055018/z1bnb4ggea2og3eyqbei.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1679055019/sn9aj3cnlka9ebdohgbe.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/mega-space/bargaon-ranchi-rnc005
    id: 5,
    name: 'Mega Space',
    area: 'Bargaon',
    location: 'Bargaon, Ranchi',
    address: 'Near Lava Service Center, Bargaon, Ranchi, Jharkhand',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi'],
    price: '₹6,600',
    period: '/ month',
    priceFormatted: '₹6,600 / month',
    deskPrice: '₹6,600',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1598936456/fajt8uh993qvmrruuu2c.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1598938161/fo0ekc4dkqa7yq6mfcve.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1598938162/c64ozd6iz4k6hufskqmy.webp'
    ]
  }
];

export default ranchiSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const ranchiNeighborhoods = Object.entries(
  ranchiSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const ranchiOfficeCards = ranchiSpaces.slice(0, 8);
export const moreRanchiOfficeCards = ranchiSpaces.slice(8);

export const ranchiAreas = ranchiNeighborhoods;

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
// Ranchi Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allRanchiOfficeCards = ranchiSpaces;

export const getRanchiOfficeCardById = (id) => findOfficeBySlug(allRanchiOfficeCards, id, "ranchi");
export const getRanchiOfficeSlug = (space) => officePath(allRanchiOfficeCards, space, "ranchi");

// ============================================================================
// Top Coworking Locations in Ranchi — one tile per area, using a photo from a space in that area
// ============================================================================
export const topRanchiCoworkingLocations = ranchiNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: ranchiSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
