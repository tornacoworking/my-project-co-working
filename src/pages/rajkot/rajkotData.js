import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Rajkot.
// Space list, ratings, prices and Google Maps photos come from the supplied data. Every photo was checked visually:
// promo posters, testimonial graphics, renders, street views and skyline views were dropped. Work Ville was left out (no photos found).
// Addresses are left blank where none could be verified. Google place IDs were converted to standard Maps links. Checked 17 Nov 2026.

const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const rajkotCoworking = [
  {
    id: 1,
    name: 'MeetNWork',
    badge: 'Popular',
    rating: 4.9,
    area: '150 Feet Ring Road, Ayodhya Chowk',
    location: '150 Feet Ring Road, Ayodhya Chowk, Rajkot',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('7940061326483726615'),
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52958/Serviced-Office-%28Classic%29-Gujarat-Rajkot-305-150-Feet-Ring-Road-Screenshot-2025-07-03-122018.png',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52958/Serviced-Office-%28Classic%29-Gujarat-Rajkot-305-150-Feet-Ring-Road-Screenshot-2025-07-03-121942.png',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52958/Serviced-Office-%28Classic%29-Gujarat-Rajkot-305-150-Feet-Ring-Road-Screenshot-2025-07-03-121923.png',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52958/Serviced-Office-%28Classic%29-Gujarat-Rajkot-305-150-Feet-Ring-Road-Screenshot-2025-07-03-121900.png',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52958/Serviced-Office-%28Classic%29-Gujarat-Rajkot-305-150-Feet-Ring-Road-IMG3840-1024x683.jpg'
    ]
  },
  {
    id: 2,
    name: 'WorkEasy',
    badge: 'Popular',
    rating: 4.9,
    area: 'Kalawad Road, Nana Mava',
    location: 'Kalawad Road, Nana Mava, Rajkot',
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('15591187710335537643'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QXR9MSnqDT4ss6eOW-xOaVr1ZHwWkDQIsjgwOoLbG6n-9k8FwIn3UpMzHZNcr1eAhEL56RCxDPwmw3HCabDsSssZRvpBRpDaJKPOp4g6Db_JuAJjilYoOGoXsNZH7l7B66czwH0w=w1200-h675-k-no'
    ]
  },
  {
    id: 3,
    name: 'WorkNConnect',
    badge: 'Verified',
    rating: 4.9,
    area: 'Raiya Road',
    location: 'Raiya Road, Rajkot',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('443450269484646806'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SCyBZnUMnBzW42Wk6T_GQIIDuVIwDJcwju2rFi1Ti1GYEnKPKUPz26USfquaVLEIsI_12fk_0fWZtJcl8VaEF_EOzUmPbOi7sl3ZrGaQurlsahEZuijLoQjthOx8GjSBx-7fXwx-6B6bog=w1200-h675-k-no'
    ]
  },
  {
    id: 4,
    name: 'WorkEasy Sardar Nagar',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Sardar Nagar',
    location: 'Sardar Nagar, Rajkot',
    price: '₹4,500',
    period: '/ Month',
    priceFormatted: '₹4,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13766091493186753744'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9S-pfKy_MqynXF6xi0OZN7E9JQKaFqAr28WKGlZlBnI7RlSpdHmCbUSnuTkliW7BePDy_yZHlQgUJMSeVd3a4aYOO-_1lPvs3HFo5shjDhN2RjLFaLu0maSIh5RkOQ-5YbByE8=w1200-h675-k-no'
    ]
  },
  {
    id: 5,
    name: 'DevX Rajkot',
    badge: 'Verified',
    rating: 4.3,
    area: 'Nana Mava, 150 Feet Ring Road',
    location: 'Nana Mava, 150 Feet Ring Road, Rajkot',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('2280936948836680930'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RyRPZJRWvwF2lt7tpE3e-m6Vs6Ifk1LniSwplUG4yMItRCLFaO-G9inVy8QGp4RPS0n6tTw4Fi4CNvCfAPNXxFihsjnP2gFRr2RSkb4w42bsmb8estcdkB6MhtEGpPX1PTrbBG5A=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T9PBqmQAtYFU434Z3RaxcHKh1b9Ev_Oan8fomeX-WA-waG33_1iz6Jewmk2KVeZKhsuAiGWICBqaq7RQWmGVya2oZCsw9pCs92agqc5qmrVdYmz2c38B_xj_r0GRy9ol0tOjvc=w1200-h675-k-no'
    ]
  },
  {
    id: 6,
    name: 'Vision Co-Working Space',
    badge: 'Verified',
    rating: 5.0,
    area: 'Nana Mava',
    location: 'Nana Mava, Rajkot',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1493404370987661295'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TkMHTriopYpF9g32CYTj_qfZbnoqeuAuT9jFM1Szwov6yX1BEeMeV-DG-UGwFEMLlTGapVh9W6qfhW1y1WfY-GE8z42-2V9z9Xm6QvjJ5ISvexuedZtlLPx5Vth5i6Uk_tP3EgtjNRWxsJ=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QoU-lTZsNyXuJj1c9yPOPUnkSUr2yrjU-uUPqZ-OLPGlblok2iExDnaBrCJh1hhhpRHTi_bj9bFTfH2UVkMpziYeqDLQ5c0JWMSGxV1LMcJAzqBEw4unM0512Rf_0HVjYw2NTYeGKYjvoh=w1200-h675-k-no'
    ]
  },
  {
    id: 7,
    name: 'Tradora Co-working',
    badge: 'Verified',
    rating: 5.0,
    area: 'Kalawad Road',
    location: 'Kalawad Road, Rajkot',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('8443635319306607962'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SfvLx18DxkXYgdK0dgGE3nDG0YJ37kT4z_DaAdUi5OR8168N43kKDv_Ty2JzZ5zJouxpSKsjHwhWNiJTZdNVy08iYWPJgQqGENO1uBhaEDEQXj4UkCEEiv2YOSINulwque8zGiEnsZpvNy=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SXee187zmTD8V6iSVCaBPGDrS2zY20slLyjClrQqfsT4o-QLsNhdrU0Podjy0K1tVMv6OIGWACAbKG6gASp4Ipt8v6MDYIQXr3vptUH6elbBh9oep8iKcDT3cTtwsJOW4jxdv0IK6G3To=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RBZPzlE_38OemS4tKJb57J677a4EWY6bBo4-_e4jyl42XUNoyNnVQjz1JBVulhD9ufvdlF5pEOzgaBGU-T3Ijoa4skxRLtAyPNHkNl-jVPEihxPW2kp4i1pxBadH-RElvoC6alqvqGcGOG=w1200-h675-k-no'
    ]
  },
  {
    id: 8,
    name: 'Rajkot Startup Studio',
    badge: 'Verified',
    rating: 4.6,
    area: 'Mavdi',
    location: 'Mavdi, Rajkot',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('3663945715296638488'),
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T-B5En4iTFjLklvhSz-TvnBbnvteRs5kLgYNtM6sjpqTLHIVqfGSnsId6VLLhThrQlIPa0_AM6aPHMl1s4BntYLV2IHMhfWBw4qPOWAcfyCHJGVwM0gz450MJTDdSQX7TbFw4A=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RLf322AWKPDY9V7iTumu24dq1iez9DpkoAfdlu8uXFq8Y6Sk2LdM0sRcBHZbq4s86rFXMcFROtzTw-JGRRwNArrC0EdriOUVkbuuAqjz6Aw2UMtiTbm7a2Wknb2MqJ6_K31HgdaA=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SX0NjmQYYmnpwpCH_Y1Z0DuEIoZNkiK3GNcbHHPHFIwpF9hGKX13M8EbauJQ3-M0ShizWt7t8wCnNh2428iHz3-5T7kp-ZczvE7S9HS1shSFo-qbrbXZ47KSRGO6aYAw1Vc_spJg=w1200-h675-k-no'
    ]
  },
  {
    id: 9,
    name: 'GloCal CoWorking',
    badge: 'New Listing',
    rating: null,
    area: 'Chandreshnagar',
    location: 'Chandreshnagar, Rajkot',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=GloCal+CoWorking+Rajkot',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q9SxWc83vvaWc5aniv2h5cUnPYR4HKEoeunAsXBR4amROW9nZyxADVDWMZ_j4ALa7BY6PAEj4R8EosGkEA2fg3DErOFUg7aJ-U6Zmsf7P17F2QIzbSvK-JlCi3vSRpfoi2DwsY=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R3Kg1NzAkjbK4bf_-jdOqawx-3kbw-F6coXpZP61cBU7-GDDgAa0L-qkWzsk17PC5g0dPqaXP_x9esXq81krkwaczRay5pYlI1STBIKB0SCWU6-xCTkcI02jJuIJpw65H1JRRQ=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qa18WZOUnRIOFOJi_-yg289ZCJkDGneJSGWFoxdQdBfQwne6OtYnDDtZiueD3I1-YQecSw09pcy8_4Q98Ib4WVyRoorAimX4kZum_tCPsFJUEi3bVxgbMv2pXnpVfOCdAo_BaR=w1200-h675-k-no'
    ]
  },
  {
    id: 10,
    name: 'The Space Coworking',
    badge: 'New Listing',
    rating: null,
    area: 'Sardar Nagar',
    location: 'Sardar Nagar, Rajkot',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=The+Space+Coworking+Sardar+Nagar+Rajkot',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q176jCi4BBd-o39hd-WZjT6FmNCLXyPkKKDPwGcNLPIJc4aF4QHUu2XrP49mHyR3nfwU4b0_b1qYpm3p3qbi4nev_3emTAnvrw791rF0XKtud8w1P-2sfjA5EM00NvgbrNaIpV=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SEsUE8HD7UD05CBRD0kbCEKlhrbUzrdmiQ3wQCAHam8B5-4mYdwn2NQRpwdMOL5CMwHTCbFp8Qi0LkBrafsFRKwkBs4-sl2dLaL_LDD3iW6_Nhp43lThZGNlKFi_CESX0Vds2x=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TLW_RGaUzn1h2_bKuMVs2HmX1jrhXxHzm2jCwbMEl_LlAAvRSAHlz5npdS_eX67HFmFEDZpm-CbefRvVZcfd_LRJI8MFNJDkv2F_0tp6jPfxDs2u6fzqdoHwTuMq9RqLUay-5P=w1200-h675-k-no'
    ]
  },
  {
    id: 12,
    name: 'Sarson Coworking',
    badge: 'New Listing',
    rating: null,
    area: 'Bajrang Wadi',
    location: 'Bajrang Wadi, Rajkot',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sarson+Coworking+Rajkot',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T_kLEOrRkR77-xYuKI5rlMxRi9NWZ4yY3gIbM4jdUuEr6qyrQ2A42aA_y13CILZ_K72K8-EbpMTZS4hQTF-MfQIslTUCI3u1f3NeelnlHZxXQLgnrNvwObY1_H5Xb61xooWaKPyQ=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RKY8ATKFVB_OE2WATPslsXjo8rWPTn4oNKAvIbGQ5rAXYbPEDuc5F2bIYODwSr06sN8Sf3VeVZ09m-zvRQJIffOTdZbO9S_Lp0LEXZtqhcfpOPUvC0wq2e59HCTCswbCret_10=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TwD2jgGaJIUFZnbzzUtR166UAqWUTZrBZ-P0i9sJOk2zgEK8mSzb-IgaMuhDZ_32a7OHhxSymKeZwxwWoXwU5rDD1o5m8v_b4cZbuDBEC2vtSOe-vP8MWP3eT8xO2_o1-zjjtr2w=w1200-h675-k-no'
    ]
  },
  {
    id: 13,
    name: '7Circle CoWorking',
    badge: 'New Listing',
    rating: null,
    area: 'Rajkot',
    location: 'Rajkot, Rajkot',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=7Circle+CoWorking+Rajkot',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T8Ov3CpOAQ54Bh7HTefT1H9KsjYg3ub1wjueAJQhPGC9UvgBoTmyLAXvkhrdZXjF5EhtVz86wg8GFPzXhYJ8gIDl8dRD8uiKNEtlYAYN9EhEcSGgsyb29Fcpogk-CVtkuiaGwasdf5L60t=w1200-h675-k-no'
    ]
  },
  {
    id: 14,
    name: 'YellowPass Cafe + Cowork',
    badge: 'New Listing',
    rating: null,
    area: 'Akshar Marg',
    location: 'Akshar Marg, Rajkot',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=YellowPass+Cafe+Cowork+Akshar+Marg+Rajkot',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Trr176V3BA8DGLBhJpcgbLNmwatX-HSBTjhkDfRdBAuTjmTL4QiLTrNt79-FumACOCOlCsj-5GwZOSw275CHo7G-ZdSIPzoTDvtbDmmzUFW_g8_uysnyNNWUTfUJUTmbUwXghQ30JDaOk=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SZDIa3-cebnwFlWbVlDN1iFHNr6sMZ83lApfIF0lmLdr9TtAeiDODlI6Syl4F06RKJZ9va1sa7ZF7vrBuCJ-djPwXBNj-bmslKFYpd8JV4v98_vDXEHYrebQibHdve0aimLse5XuOZtlmw=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TZc0qtPyH3jLPwwF8-FC6TBYeRqHJSG64b3Zjj-a9KVS1Qz6JhzVhmRjd0B9rXTDCDONC66rfpTW_hs6nxswi478nKZS-LGWIUzhgnc3rWlFwnX5VQP_OFIBuKbndyRqKP83HUYKc-ZEJe=w1200-h675-k-no'
    ]
  },
  {
    id: 15,
    name: 'Rushabh Business Centre',
    badge: 'New Listing',
    rating: null,
    area: 'Bhaktinagar',
    location: 'Bhaktinagar, Rajkot',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rushabh+Business+Centre+Bhaktinagar+Rajkot',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SlSgJA1obLo00X-B1V3T8GExUeEHwAekCOdv_HFPTtMhZMqL5xjyl9kDp8IaFZQMiVRniGprLP58vKp9Bm_50Jd1VlgsSR8GRSJhor4OYoKIK5ZIuncbmUhRtivAXgfd06KAW0OQ=w1200-h675-k-no'
    ]
  },
  {
    id: 16,
    name: 'India Accelerator - RK Iconic',
    badge: 'Verified',
    rating: 4.8,
    area: '150 Feet Ring Road, Bajrang Wadi',
    location: '150 Feet Ring Road, Bajrang Wadi, Rajkot',
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=IA+Spaces+RK+Iconic+150+Feet+Ring+Road+Rajkot',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TQTemC09WOXM-8QOy9RJRLFhrU3BtSiUmR3khZIHyjKshBteJx78D_xQp5SsfodrfB_ZDuRZpT4d90tdqbZBB_y_uldGUOpMOTlQ885D5mqdbD_WmASV8d5rI0qHLY7ZXOz4dVIHx4Mf40=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RlM3cRRmfPAHABQewzEPaM4jU1OJGzgPqdpVUMktYaK9ffHM7OpAWmqsvnRPV-p8luVOZVw2X9lVraIf6lJ5-jRpTn_i5igV_xN4-x8yb02JSd8X0F45bUuoBJwy-96nRfPEVDeJH52tdL=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Qqya2meO7f0b0G2G-MFA2lLr2FJHl6hcrqfjDpOaiCsq-ycg5Gxc8p5jKumIxCFQcF3CjhShS1jTlQspC_kkt2PS2n5tWrvfdXn0iG__S1Ux-znBiP2jzkxD_vYRVIFk5fmg64taI_5T8=w1200-h675-k-no'
    ]
  }
];

// Spaces with no genuine photos found are left out of the site entirely.
// Operating, but no genuine photos of the space published yet.
export const rajkotCoworkingPendingPhotos = [];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const rajkotSpaces = rajkotCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const rajkotNeighborhoods = Object.entries(
  rajkotSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const rajkotOfficeCards = rajkotSpaces.slice(0, 8);
export const moreRajkotOfficeCards = rajkotSpaces.slice(8, 16);
export const finalRajkotOfficeCards = rajkotSpaces.slice(16, 24);
export const featuredRajkotOfficeCards = rajkotSpaces.slice(24);

export const rajkotAreas = rajkotNeighborhoods;

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
// Rajkot Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allRajkotOfficeCards = rajkotSpaces;

export const getRajkotOfficeCardById = (id) => findOfficeBySlug(allRajkotOfficeCards, id, "rajkot");
export const getRajkotOfficeSlug = (space) => officePath(allRajkotOfficeCards, space, "rajkot");

// ============================================================================
// Top Coworking Locations in Rajkot (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topRajkotCoworkingLocations = rajkotNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: rajkotSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
