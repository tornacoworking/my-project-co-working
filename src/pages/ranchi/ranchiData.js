import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Ranchi (Jharkhand). 11 spaces, supplied data (ratings, prices, Google Maps links and photos).
// Spaces with no published price show "Price on request". BlueOffice Workspace and Paragon Finance Campus have no photos yet,
// so they use the placeholder image below until real ones are added.

export const ranchiFallbackImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';

export const ranchiCoworking = [
  {
    id: 1,
    name: 'TBL CoWorking',
    badge: 'Top Rated',
    rating: 5,
    area: 'Hindpiri',
    location: 'Hindpiri, Ranchi',
    price: '₹5,500',
    period: '/ Month',
    priceFormatted: '₹5,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJt1E2-d3h9DkRIL_v5O4UFbc',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SUpmMhcsNTo9nye9B2B_eeA8K7n-lvjrMpbrnPqHy-tLiaBfmaD29rKKVC8a0yzXWiHVS883de-kJ6VdJtJU9jr_tj-L5RIFEzZ3D1SdrBw9fuihFShGdz4Isx9dy1fi9Ao_3l=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SYqfBIn7uFYQrTnhtmasDXKCvV1D2ZwTLMqHByRNCYK_Pcz87kwvn8Tp2whHK9jnesM5mai1H7jvIVQ1tFMb2PXyO70ilXqpCSPyeFNtgVZr7eyWyAR5xoNiyWgd9AlAjbwrNb6w=w1200-h675-k-no'
    ]
  },
  {
    id: 2,
    name: 'Nirvana Co-Working',
    badge: 'Verified',
    rating: 5,
    area: 'Kokar',
    location: 'Kokar, Ranchi',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJO5i9RtLj9DkRJ_4-BOeWM6Y',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RKFITsnLhsYhMbtvTlvvBu6yhUumNZYsyLC_QqQUUkSXYPsEKKlMZJAFsCAfBtpQDMSTD2TQZo7IRiOI9J5S_-7XlDMyeBa3nDww9ZHWSPuPvXw3fHJ7-FqEu-2emUkswzqUYPY7T-5siG=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TFbTBkbztNHdYhbvLwCBrXi1Qff9t1NMXPFiAgwkgT1tRHgqyGxRnJ2r0R7iWkRIHFZBFbznynoQgCsaSxxP5C5PyXmGnD6hltqOhHqAuB-zMP7DE2mXOqm-oymmZgFQFH_TTxDC7O_vQv=w1200-h675-k-no'
    ]
  },
  {
    id: 3,
    name: 'Lakshaya Library & Coworking',
    badge: 'Popular',
    rating: 4.8,
    area: 'Lalpur',
    location: 'Lalpur, Ranchi',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJb1RnFa3h9DkR3GoSKNPdIRw',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S9p_kEXMFgEXW0xNjWyz14RbcfqolXSeAuXMTutEVkHpRwo0g4tar7cXhcq8CPQ_K01I3RCj3TnvpHkKZmCSmz9qEQLcx4yxjBGQs-rZZGQsw1iinHM-9HKv3QKbG4NA=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RM20mPzRGfeXxl8pa6AglB8rb0n8PzfISWQ3KZUOHG1l8ni2Nav47fOCgZbv6qlVYvDH6e27marZCnrYO8z6I6hCNKejnWAxqH4TrfxOZidbnk_Bed-JBm0B59GL8HWynB9Ico=w1200-h675-k-no'
    ]
  },
  {
    id: 4,
    name: 'Work Studio Coworking',
    badge: 'Verified',
    rating: 4.6,
    area: 'Hindpiri Main Road',
    location: 'Hindpiri Main Road, Ranchi',
    price: '₹5,500',
    period: '/ Month',
    priceFormatted: '₹5,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJoUDhNXjh9DkR3XJnWSRiYg4',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QXdjFwhsyPpBssbOBpJZloYMh5Y6UlEpnComUN692MyJZSFnT_Mp_BKWV1fDszG_66DIEN8evqd44No7nxqxAWrKXc934aBcR_c1fJ32HUuWBlBSMSuet_csVfEEOYFkrgY6kp7w=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9STIxl5MFUk_fuReyixYReBy7-QSJoDLsEg00vqZ-Fe2WbHgCJTCg_f4Oxp4rG648nuBXAPd4UrZ6j6iXzkKkEzMpbuwLhhivAz3M2_nARXsJslQYQsQ6vwuC_keW7ROa1J0g7a=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RJLd0lVPAJ6IFG6uWqy5ju8wbo5yTQy_0MJ_rJpBEq46VX1t4lHIwiv2yHSvoMuKsoWaMSjrM3bPE0AmuxjcTNKBII_yCE_4VGUgHzD4dnDa_eQR2KhghnTKAkxdSYmOgLAKxp4g=w1200-h675-k-no'
    ]
  },
  {
    id: 5,
    name: 'BlueOffice Workspace',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Kokar Road',
    location: 'Kokar Road, Ranchi',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJq6prWE_j9DkRzdhI2odlphY',
    images: []
  },
  {
    id: 6,
    name: 'Magic Touch CoWorking',
    badge: 'Top Rated',
    rating: 5,
    area: 'Ahirtoli',
    location: 'Ahirtoli, Ranchi',
    price: '₹5,500',
    period: '/ Month',
    priceFormatted: '₹5,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJl7cflXPh9DkRFuqiyBZo7Yc',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Tfcy7onBPztDYDctmv09LtIZ7pdfZXpRKvlscbk-Ps1WtEWLT8V5LURPvjc9nXh4fmtHZ8uMSJzvoZOO9aXKKUCmoryFju1IUwuTPyMAuQCZxWd6TuB365fWMSSZZ_vWNMBXyEjA=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TXbken4r7--hYukMcWMU-7z9JFfOauHAvbzp3u4B5ZyjU2OvtUeRjK2RZKweASUK40CdJoPa34owO4UxJWJtHHv0SfDYmWHwvKzWTV3MU3hcLZQomjE95XpjBZ-k2w9rcMxt9n=w1200-h675-k-no'
    ]
  },
  {
    id: 7,
    name: 'The Modern Cowork Ranchi',
    badge: 'Verified',
    rating: 5,
    area: 'Hindpiri',
    location: 'Hindpiri, Ranchi',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJs9o2WEHh9DkRcr1TIhlTd_k',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R8xr5lwRmpDmldmyUWqoGEeY2GScwQWWZCOzLdlgGg7zZvRpuEJOqIc78jukSUkLsIqeriG_OUcSwymhU__jIbrZAOUYyS4Drf0vZkfxABc5wm7X980BsjC8A2pIfdkR-oy_0e3SxfoNC-=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RfHMwfEKSqr7onYD16Rid1-nPEQNwKbq9ClRTJIYWd6IFiPJrJHZ098ouyImKrFKG7pVC5kT9HS9yaSX1WN_qob4xz2iIBQBm_hXtOdpYybenYb1Zu3dtW2fD6lNp1Pa8_vTlUTc1yd9Q=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TqJeIdP4vZGAZPFRNugxDRhp151WApAtZKher8WRVS6SSNuwmG53LdBWab7Xp6LZY1KAGy6vRDtdyPc7QoFfa-k4L-kKcC69Xk1Pxwc0KGSiTioY_78HnVpW9hBg-P_mybAm96s7_UNwY=w1200-h675-k-no'
    ]
  },
  {
    id: 8,
    name: 'Namdhari SPACES',
    badge: 'Top Rated',
    rating: 5,
    area: 'Kadru',
    location: 'Kadru, Ranchi',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJc6asPevh9DkRF_LzKNwGSNQ',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rgrev5PnTHzJZ0fmCOFreyV1yVj1lbFMdmsSOlQwIpCxiY2LOOMBv5bGWYFSemsKDAq_qJz-0p4wv-U2Arfzp1bsCJPh3ybeI0fPhPTrCyUVR-hfQ5zRkWbnTHoYDyWgBTLVDEWA=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SrcJ44yHclP6wHMxE1P3q1p-VGZoWGH0ljVHiyhomKptGZf4TQ-MvZfabepY0Ou2Tw3fnis9aQPspX8b6tPPKubSIGxacEmwcEGaGGnwNH_WsE0Ce-LjksxB7vYBhiyHOzKALG56irOEpU=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TRgx_jkgbkI-CyoUNsWrqBQz0-pgopCLeK0pUL7NE1HZ4Guq2zGuEDR8E7XQwIE4t4KnXm0N8j7cyoZ0TH_UgcSicPe-wQvodjF08CjfBWYEXDZtHlKLvCFPU1CVUfOg0J-HTLgRUr4as6=w1200-h675-k-no'
    ]
  },
  {
    id: 9,
    name: 'Boxally Ranchi',
    badge: 'New Listing',
    rating: null,
    area: 'Lalpur',
    location: 'Lalpur, Ranchi',
    price: '₹7,000',
    period: '/ Month',
    priceFormatted: '₹7,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Boxally+coworking+Lalpur+Ranchi',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Sg_sibxTjtGOeDHtqRbOsMgKaOWaYr0xQPdpjAd-XRwRh6nFKkVb_YU5ychD_TrnI51SRnpxhSwEVqhtn8brfmWQYxD0xkqgRKWTGmqSHL9IX3UmtojRhhgFCvQsCgSCs9Bng=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SD2H3U-AjlNwA9ABMjYuFlYlUKBpFUTgjr1m2c1GMdtOOr0Gt01HUE885fPWWTvp8Y9el0bGLFZIQ7KAr6uFGxXKxE20_kmSBsWE2e6trnFo_XlQyy8adAqw8cNsaQ3azXanK6EA=w1200-h675-k-no'
    ]
  },
  {
    id: 10,
    name: 'MyBranch Ranchi',
    badge: 'New Listing',
    rating: null,
    area: 'Kanke Road',
    location: 'Kanke Road, Ranchi',
    price: '₹7,500',
    period: '/ Month',
    priceFormatted: '₹7,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=MyBranch+coworking+Kanke+Road+Ranchi',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QBOCBIWL05oaIvLVaQg46sML0CyPDdFyUh8RxwwCbBPo2_GbmVgDo3UiB17CPMM-RN0VMvZGRh7ffbQeVLTLK1GDJQjrBs6BxcFqp47zrI1S2ENm-aWLYCbBq8FqlTtafxDIZU1w=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QFiUA40GK8Gdz_GzH-dD2niElApMBKBr9FHC7qZKMA2KEniR3BXZcMtVdvFbvGdmSy1WwlJMMVB6jZ_p6Os8nI028eI67anQNgzLLUhILi-ducQC4b_bk6LRCNdCMJC-QouFS0=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QlPc5YH_5ztxlNkOW9B5fQBVlUmcAr2zPzvKRgRLrxEmRSa_9oJfUzIQDPh-ASLe16xniC84POPWNdwex8bHGwuebLbm1_MrBhQ_Q-BvdxOVnMgxs04sDKpPsQlIKv9trW0GpYpg=w1200-h675-k-no'
    ]
  },
  {
    id: 11,
    name: 'Paragon Finance Campus',
    badge: 'New Listing',
    rating: null,
    area: 'Lalpur Kokar Road',
    location: 'Lalpur Kokar Road, Ranchi',
    price: '₹6,000',
    period: '/ Month',
    priceFormatted: '₹6,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Paragon+Finance+Campus+coworking+Ranchi',
    images: []
  }
];


// Single listing page: the first 8 spaces show on top, the rest fill the sections below.
export const ranchiSpaces = ranchiCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const ranchiNeighborhoods = Object.entries(
  ranchiSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const ranchiOfficeCards = ranchiSpaces.slice(0, 8);
export const moreRanchiOfficeCards = ranchiSpaces.slice(8, 16);
export const finalRanchiOfficeCards = ranchiSpaces.slice(16, 24);
export const featuredRanchiOfficeCards = ranchiSpaces.slice(24);

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
// Top Coworking Locations in Ranchi (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topRanchiCoworkingLocations = ranchiNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: ranchiSpaces.find((space) => space.area === area).images[0] || ranchiFallbackImage,
  ctaText: 'Explore Spaces'
}));
