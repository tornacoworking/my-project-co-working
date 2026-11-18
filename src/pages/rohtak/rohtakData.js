import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Rohtak (Haryana). 4 spaces, supplied data (ratings, prices, Google Maps links and photos).
// Spaces with no published price show "Price on request". Nestaa Cowork has no photos yet,
// so it uses the placeholder image below until real ones are added.

export const rohtakFallbackImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';

export const rohtakCoworking = [
  {
    id: 1,
    name: 'Co Working Space in Rohtak',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Model Town',
    location: 'Model Town, Rohtak',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJY6qU4QGFDTkR0Km0xj3o2wQ',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9St7feWW4I1QIjK7PLDEJad5HnXETqjTyY3yHBx_X1c0Tghs0KOy08354Y8mNubU207668xF69mFMpLkQ5ZsFogB09BcMY5Le4mHJ7Y0NL5qVzUw-qGPpROx3a2cP94SCdP766Puy0_SYHx=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QfRdijikKuil61jrCqi8yGXboXHZ2mSw_irUNrEPQaoyEet1DmGptr_EdkdYalNptB9Q3B0316fAjDXPu_rf5RTcayzO1yEarHYxfGfsOPbXEDxWeEoQv0psRljO7jPo2hPCU3ETfm09Hz=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SY9kDL6QGUs-dYJ-74PCo8Q4bIQ02DtS6Hk9VYtodjKEy5CzzmVn1mRbEYA90RTH0TbIvXGDjPTbXRBVcucmO7sf09J7kjeWmBhzNluVDx4viLQAJrJkMZpZXE9bqcivh5QkzT12jVPVjc=w1200-h675-k-no'
    ]
  },
  {
    id: 2,
    name: 'Kubepods Coworking',
    badge: 'Verified',
    rating: 4.6,
    area: 'DLF Colony',
    location: 'DLF Colony, Rohtak',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJtxCdF5NJraQRh91-VM1_4FA',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ToH2T88M7yxtNIXiX2C-s8Jv66Xyp4RlFpgDGVDKKCnySuwCb1R9aB8u2apnIr9Dc4CZB-hTsB2YJ4TeObXLjmJ87LYH4BknMDf_-MbhXXR_TrVqUfEvjJXVWtXOoknMZbVe16=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S2Yotcr5uphGOr5Wff8jv80LiyPPWV9-OY_QPFOV256j616rVll8Il86_DZFwLKnYtDep3OcMDlsvFZoq2ciLao-tdZ6c2dZEuBfUYsNWh7OsGJHsCMtzDQRa5CavRt8lgJLBc-A=w1200-h675-k-no'
    ]
  },
  {
    id: 3,
    name: 'Co-Working Floor',
    badge: 'Verified',
    rating: 5,
    area: 'Sector 2',
    location: 'Sector 2, Rohtak',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJpeqPn-eFDTkRihwJPNwmiQA',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R9UDiHiKBWXxG0oeiMmhCScrbYDkVVLjpmVoN1o2cVR4MbxaLKEbzmeSVLBvmY8mmgV_GqD9W81dmMLUMyL_9DgonXL0tc4O1OynYj8r2eYWI4-RxYhFs2AIS_HFZYdwZvOi_M=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qp3YdlDvv68nMuAS4T6miUMJq8fmM9Gt_Bw8lOboctByRB1ABB7WMyE7MEZm7O_9VlSS-U7nVgiLM8Q2flNdvZHfNFVxYEMFaRaD0vQ1l2_dvmdtwdtLLBdx6XEq-JiS5rHTsz=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R5OYEFcWUdH2vHybVrAWXqqnSn3JBpvcalxe4sV6k1U-T7cH92aGsyDK3TICk0KPr5d_vDxnPSRob1nfU92fP-jXSdkxuPWDr7yPOInSODU5xr6EzAwRLcDMEQUfsH81g9BXkR5w=w1200-h675-k-no'
    ]
  },
  {
    id: 4,
    name: 'Nestaa Cowork',
    badge: 'New Listing',
    rating: null,
    area: 'Mansarover Colony, Delhi Road',
    location: 'Mansarover Colony, Delhi Road, Rohtak',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJhzzwU_CFDTkRkRzTEGEBSNY',
    images: []
  }
];

export const rohtakSpaces = rohtakCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const rohtakNeighborhoods = Object.entries(
  rohtakSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const rohtakOfficeCards = rohtakSpaces.slice(0, 8);
export const moreRohtakOfficeCards = rohtakSpaces.slice(8, 16);
export const finalRohtakOfficeCards = rohtakSpaces.slice(16, 24);
export const featuredRohtakOfficeCards = rohtakSpaces.slice(24);

export const rohtakAreas = rohtakNeighborhoods;

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
// Rohtak Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allRohtakOfficeCards = rohtakSpaces;

export const getRohtakOfficeCardById = (id) => findOfficeBySlug(allRohtakOfficeCards, id, "rohtak");
export const getRohtakOfficeSlug = (space) => officePath(allRohtakOfficeCards, space, "rohtak");

// ============================================================================
// Top Coworking Locations in Rohtak (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topRohtakCoworkingLocations = rohtakNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: rohtakSpaces.find((space) => space.area === area).images[0] || rohtakFallbackImage,
  ctaText: 'Explore Spaces'
}));
