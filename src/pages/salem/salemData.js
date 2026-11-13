import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Salem (Tamil Nadu) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const salemSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-salem-fairlands , https://www.qdesq.com/brand/my-branch/swarnapuri-salem-sal005 , https://gofloaters.com/office-space/gooffice-40380-4-seater-private-cabin-fairlands-salem/ , https://gofloaters.com/office-space/gooffice-40381-dedicated-desks-fairlands-salem/ , https://gofloaters.com/office-space/gooffice-40382-4-seater-private-cabin-sarada-college-main-road-salem/ , https://gofloaters.com/office-space/gooffice-40383-dedicated-desks-sarada-college-main-road-salem/
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Swarnapuri',
    location: 'Swarnapuri, Salem',
    address: '2nd Floor, Kandaswarna Mega Mall , Saradha College, Opposite Fairlands, Salem - 636016',
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
      'https://www.mybranch.co.in/office/office_images/salem_rep.webp',
      'https://www.mybranch.co.in/office/office_images/salem_caf.webp',
      'https://www.mybranch.co.in/office/office_images/salem_cw_1.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/namma-office-tidel-neo/kullagoundanoor-salem-sal008
    id: 2,
    name: 'Namma Office - Tidel Neo',
    area: 'Kullagoundanoor',
    location: 'Kullagoundanoor, Salem',
    address: ', Kullagoundanoor, Salem, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 100,
    price: '₹7,500',
    period: '/ month',
    priceFormatted: '₹7,500 / month',
    deskPrice: '₹7,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/db374ebab7bc98e9b42969f10e400f04_N0qAh5hrs.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/b54bda67e1398c65e4e2745ee349cfaf_ujhjSlRfdP.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/f8c026a81a1c78b7d0391c05837e4c0e_vwU7eAe_o.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/namma-office/seerangapalayam-salem-sal010 , https://www.qdesq.com/brand/namma-office-rajeshwari-towers/seerangapalayam-salem-sal009 , https://gofloaters.com/office-space/gooffice-40471-10-seater-private-cabin-seerangapalayam-salem/ , https://gofloaters.com/office-space/gooffice-40472-20-seater-private-cabin-seerangapalayam-salem/ , https://gofloaters.com/office-space/gooffice-40473-40-seater-private-cabin-seerangapalayam-salem/ , https://gofloaters.com/office-space/gooffice-40468-10-seater-private-cabin-seerangapalayam-salem/ , https://gofloaters.com/office-space/gooffice-40469-20-seater-private-cabin-seerangapalayam-salem/ , https://gofloaters.com/office-space/gooffice-40470-40-seater-private-cabin-seerangapalayam-salem/
    id: 3,
    name: 'Namma Office',
    area: 'Seerangapalayam',
    location: 'Seerangapalayam, Salem',
    address: 'Near Balaji Towers, Seerangapalayam, Salem, Tamil Nadu',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sun',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Mail Handling', 'Lounge', 'Meeting Rooms'],
    capacity: 100,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: '₹750',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/72bd1d56f7716d9c76c27feb516dd5f2_WWpXVJHkoK.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/89672171e34f9079904bf6729a9e3b58_2-AKBGZ7F.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/namma-office/fairlands-salem-sal006 , https://gofloaters.com/office-space/gooffice-40465-10-seater-private-cabin-fairlands-salem/ , https://gofloaters.com/office-space/gooffice-40466-20-seater-private-cabin-fairlands-salem/ , https://gofloaters.com/office-space/gooffice-40467-40-seater-private-cabin-fairlands-salem/
    id: 4,
    name: 'Namma Office',
    area: 'Fairlands',
    location: 'Fairlands, Salem',
    address: 'Near Anushka Tower, Fairlands, Salem, Tamil Nadu',
    phone: null,
    hours: '8:00 AM – 8:00 PM, Mon–Sun',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 25,
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    deskPrice: '₹4,000',
    cabinPrice: '₹750',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1705474907/osqdfmcobookjspcg6lc.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1704286311/dcixomy7rfznkq8tds9h.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1704286311/lmrhx8juw4udplrvekx6.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/happy-office/meyyanur-salem-sal007
    id: 5,
    name: 'Happy Office',
    area: 'Meyyanur',
    location: 'Meyyanur, Salem',
    address: 'Near Itteri Road, Meyyanur, Salem, Tamil Nadu',
    phone: null,
    hours: '9:00 AM – 6:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Mail Handling', 'Air Conditioning'],
    capacity: 77,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/5d1e7a2e061ea0c777cd6765759d6b50_kQZ4vZAxl.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/2a9fbfaa6e63bb30571afd9d063100b0_JnFEJ0d_Z.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/297cbf887c608775db58ca84dd15fb77_Yj8oFVY5t.jpg'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-40474-10-seater-private-cabin-meyyanur-salem/ , https://gofloaters.com/office-space/gooffice-40475-20-seater-private-cabin-meyyanur-salem/ , https://gofloaters.com/office-space/gooffice-40476-40-seater-private-cabin-meyyanur-salem/
    id: 6,
    name: 'NammaOffice New Bus Stand',
    area: 'Meyyanur',
    location: 'Meyyanur, Salem',
    address: 'Meyyanur, Salem, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: '₹750',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/images%2Fspace_1793961412136_iy592b_webp_1793961412653_4bb11d37.webp?alt=media&token=6b4e6131-0a86-4d7d-b23b-425515c96fbd',
      'https://cdn.app.gofloaters.com/images%2Fspace_1793961413184_x3cz9f_webp_1793961413372_6ac9f070.webp?alt=media&token=297179db-265f-4945-94d8-5313efba9bd6',
      'https://cdn.app.gofloaters.com/images%2Fspace_1793961413881_b7oiwd_webp_1793961414068_7864bed8.webp?alt=media&token=fedc6d27-abfe-4cb1-8277-2bf02774b078'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-40477-10-seater-private-cabin-karuppur-salem/ , https://gofloaters.com/office-space/gooffice-40478-20-seater-private-cabin-karuppur-salem/ , https://gofloaters.com/office-space/gooffice-40479-40-seater-private-cabin-karuppur-salem/
    id: 7,
    name: 'NammaOffice Tidel NEO Salem',
    area: 'Karuppur',
    location: 'Karuppur, Salem',
    address: 'Karuppur, Salem, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: '₹750',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/images%2Fspace_1793961424198_715p0p_webp_1793961425514_9972c7e6.webp?alt=media&token=e3a008b7-04a0-4f1b-b4e6-b55dc3b2a87e',
      'https://cdn.app.gofloaters.com/images%2Fspace_1793961426424_0ibonu_webp_1793961427043_d3c66b41.webp?alt=media&token=8d3ea6a0-0410-4090-8c2d-35973ac0773b',
      'https://cdn.app.gofloaters.com/images%2Fspace_1793961427992_70l7tf_webp_1793961428522_95820803.webp?alt=media&token=77dbeb71-4cc0-4a7d-bb82-d4d346f3c94a'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-40480-10-seater-private-cabin-meyyanur-salem/
    id: 8,
    name: 'NammaOffice Ipod (Reliance Mega Mall)',
    area: 'Meyyanur',
    location: 'Meyyanur, Salem',
    address: 'Meyyanur, Salem, Tamil Nadu',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: '₹750',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/images%2Fspace_1793961495361_hmv20o_webp_1793961495794_a39a243a.webp?alt=media&token=10fc15a4-2a8e-4584-aed2-45a1861afab4',
      'https://cdn.app.gofloaters.com/images%2Fspace_1793961496788_pyisgg_webp_1793961497239_a4932174.webp?alt=media&token=6437966b-b1e9-4b67-b32f-712f29cf6e81'
    ]
  }
];

export default salemSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const salemNeighborhoods = Object.entries(
  salemSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const salemOfficeCards = salemSpaces.slice(0, 8);
export const moreSalemOfficeCards = salemSpaces.slice(8);

export const salemAreas = salemNeighborhoods;

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
// Salem Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allSalemOfficeCards = salemSpaces;

export const getSalemOfficeCardById = (id) => findOfficeBySlug(allSalemOfficeCards, id, "salem");
export const getSalemOfficeSlug = (space) => officePath(allSalemOfficeCards, space, "salem");

// ============================================================================
// Top Coworking Locations in Salem — one tile per area, using a photo from a space in that area
// ============================================================================
export const topSalemCoworkingLocations = salemNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: salemSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
