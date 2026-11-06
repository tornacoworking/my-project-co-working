import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Warangal Tri-City (Warangal, Hanamkonda, Kazipet), ordered area by area.
// Sources: Google Maps first (listing, rating, photos), then Office Hub, workin.space and operator sites.
// Every photo belongs to that specific space; Google photos were checked visually and
// graphics, blurry shots and duplicates were removed. Checked 6 Nov 2026.

const G = (id) => `https://lh3.googleusercontent.com/gps-cs-s/${id}=w1200-h800-k-no`;
const OH = (path) => `https://ik.imagekit.io/officehub/tr:w-1200,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/${path}`;
const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const warangalCoworking = [
  // ───────────── Warangal — Kothawada / Pochamma Maidan ─────────────
  {
    id: 1,
    name: 'Secure Studio',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Pochamma Maidan',
    location: 'Pochamma Maidan, Warangal',
    address: '3rd Floor, Jakotia Complex, Hanamkonda Road, Pochamma Maidan, Vasavi Colony, Kothawada, Warangal, Telangana 506002',
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('5629530477326164576'),
    images: [
      G('ANWiy9SQduBgNq3bRRXbFtlJzCg8vFTuUwtPl2UO0BWHoVSXnqTpF4ab58TECilnM8AhwdQGWxBTEckBn-RuAvoU9jIJcEiAimU-7tywOgdSLgnkselxTmoM25eAAziHXLse6YLkQXVHOFkmPKMo'),
      G('ANWiy9QSr0uZTJI6lrbRa0pdrOMt07hxNJ-sZmVj7HI6slxQSVuvlSNGLSeZqy3A_utpcdlXo1P4BSdTvijTJUQ9fVwyabfUk_nOcc_oJif6CSrejy8cjqU52qjDKiDPlV60wCK1y8Zw88lYe8ge'),
      G('ANWiy9S41YgNgnkGhwcvz5DJFPIOXvLx3l0bAF2xG6lvc2M6r_uGvcMS8-lJ0GdbXWVF5nzMFaCoFl7ZOjC3nC1fNp5_IcDPM0NUgBNdVf-X2MIvKMHZ65qAXxcVcdaaT2fHwTvU0ZSN8e--zNc'),
      G('ANWiy9Q2g8QB2YTZ7HvolXMWGItnWvKk204BSzFHC2SBTZSpRQC8NHnh5fzJs1zb33g2BsXPGX5LODuFkPeujA89Ytk7DQFSXhCrJFI1o1SGAlD7Izd7h8X_jI99EeTTsoWwe3aAGeI_Rd8ZiZv9'),
      G('ANWiy9RJws-TdA7ZtizuMsDLObfrRQGl9WJ8ns9-v9NUHnq3Y6fvAMp0xM1L1JdDzXinztVpI4yDCAYiYw_xK4whcjTXWMnV_BHU8UoXDA_5nzXZdRdLy4tBw-8-no1nlOBkYSrD4peNqJUcrMay'),
      G('ANWiy9TJw0dRpvgTpfmPOgq9Y2bMQBsv8Hotk6n0bneNDSYGS9DDTlZVrAObQ7RxOQTxl9yTVYA02ClNVmbtcsszfJ3QykAZkWcfyK1yro-cs-Duz0KLIyym0iUMLlq-_7fuL6Dz6OarfZxhjRFR'),
      G('ANWiy9QLCazdwQpMumZamLf6vUxE_EwQahV6occbnhXzU8z_u-4vNTAMj7B8_-RZDGXcJbXf7wa59MHOpgDN681dBujXMFOfOD-GwAJq5CMZp1XVgOsTk41EF5kPVIRm29ILK9xoGYQGOjK25Mg'),
      OH('52929/Coworking-Space-TS-Warangal-Vasavi-Colony-Desk---View-1.jpg'),
      OH('52929/Coworking-Space-TS-Warangal-Vasavi-Colony-Lounge---3.jpg')
    ]
  },

  // ───────────── Hanamkonda — Nakkalagutta ─────────────
  {
    id: 2,
    name: 'GROWORK – Kapil Kakatiya Tower',
    badge: 'Premium',
    rating: null,
    area: 'Nakkalagutta',
    location: 'Nakkalagutta, Hanamkonda',
    // Not listed on Google Maps by itself — link points to the Kapil Kakatiya Tower building
    address: 'Kapil Kakatiya Tower, 1-8-552/B, Nakkala Gutta, Hanamkonda, Telangana 506001',
    price: '₹10,500',
    period: '/ Month',
    priceFormatted: '₹10,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('3480706974671832493'),
    images: [
      OH('54585/Serviced-Office-%28Classic%29-Telangana-Hanamkonda-Warangal-Nakkala-Gutta-IMG6848-2048x1365.jpg'),
      OH('54585/Serviced-Office-%28Classic%29-Telangana-Hanamkonda-Warangal-Nakkala-Gutta-IMG6889-2048x1365.jpg'),
      OH('54585/Serviced-Office-%28Classic%29-Telangana-Hanamkonda-Warangal-Nakkala-Gutta-IMG6957-2048x1365.jpg')
    ]
  },

  // ───────────── Hanamkonda — Naim Nagar / KU Cross Road ─────────────
  {
    id: 3,
    name: 'MyBranch – KSR Sastry Business Park',
    badge: 'Popular',
    rating: 4.9,
    area: 'Naim Nagar',
    location: 'Naim Nagar, KU Cross Road, Hanamkonda',
    address: 'H No. 2, Dr. KSR Sastry Business Park, 2nd Floor, 1/583/1, KUC X Road, Nayeem Nagar, Lashkar Singaram, Hanamkonda, Telangana 506001',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('15513695847319381570'),
    images: [
      G('ANWiy9RsCrqF3yG8v43ZPEaIvsqY3z54QXT8c9MphNPoYWk73isX2v26Q5g8pQ4dqcxdttsvPOl63pTIUihwHdkFWmnZauuiPmKvOxWICw--Vond9jIspBV5uVTKzmba_8xpCtW4deU28ikueeJY'),
      G('ANWiy9Tq6YEGAnbiti5TVAWanQq73zSE16ewTMn2y3Nw3dCDIH2b6U5xzpjB_jhpOQ5qA7wMZ94tSxd-Xd1yQeiN4sO9MC0bu8M4tEDgAl37AuFfVpxtIMhrd2VqrAF54JB1cFuBbvXGdGzVzb43'),
      G('ANWiy9SVYf49ZkZCuHByXtM0qRDWPMpEJOS_euKzBvkFv5T_FEdV8nyYe0Dmc6_bfwZuyaFoQsNwr8wA7CWm5Lin2-ttSb4bvx6t-HZcz7eaST_J9Ha_W4Pu-bAEF3FkEmege1au-XpDFYrzG3I'),
      G('ANWiy9RWysR_rBej2lPP6WH8Cqepxoj5qjytL3IziywedSaFUjfkOhRwOB8farVXvsVuodzyvj8u2_v0PZKO_jrcvd4-ZZp54K0HcGcajXcgPs1oWCr2KMcXTYtpJDI0TK15b1DerBv7ySsyyWHU'),
      G('ANWiy9SDSkgPQBdHU20U_OO9HMq0iBvbryGYoZb7njUMnDwUmpYZglugq1fBqBQO4EnveDH3LlXjih64kyOuYMlDLoVzobo8S7a9jQ-Q_OgblohB8bU24PBwiiBqeBXXBlDV45nddXti'),
      G('ANWiy9TsJ5pMf9WXnPajWFfG-OohqQz40xFzXo4GE8EITZCj2GMKXab6wyvfS05n8FPMXLmCZfbP8LXtL7fR0q6vlyzwb_MU5Czn-MbDHAl6yKRuJA6lqOyFIave9C-4DQklYgIZWQVnibsqKzs'),
      G('ANWiy9QcQ7ISir24FrPzqCDW2J2ZRr66rF2pcSFD-cotXd3fJrgCeLKwOUjxoa7-Y15npGDRvoNcekh-zxYzg2SxOc7ZAhWPri5I0_H14hqDTZpD-Do1SfcLtBXed5Gw2ajMJCrBs37r6moFzR5y'),
      G('ANWiy9SRcl7G9VZW1qOJ6MUGG60nQGNguxoqGrNjUnkPPwdF0l8FaCE3je_gTrhFomZUdykdX4GtH2dwHB-zhHb1-oZIFj7e524Ym930JMmymlCbwIoozKVkAg5DaulMzovAun4WmYooxdkor4k')
    ]
  },
  {
    id: 4,
    name: 'MyBranch – Kandakatla Gateway',
    badge: 'Top Rated',
    rating: 5.0,
    area: 'KU Cross Road',
    location: 'KU Cross Road, Hanamkonda',
    address: '3rd Floor, Kandakatla Gateway, H No. 5-11-503/504, Kakatiya University Cross Road, Lashkar Singaram, Hanamkonda, Telangana 506001',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('10785135931623062155'),
    images: [
      G('ANWiy9RzpSpenpXHndFzrUIomUXUFNHvZ-4mlcTA97lV6_bTQ4crXPrDIHtUSzljU8WTLwHQ3RVwvboOl_ZGhyO5v5i6R9vLwdxSwbVoqEnEngGL-WhnHAMcg9Yol-UoYnLuqJrplty0uvu90Rpv'),
      G('ANWiy9RJgFYJLLEOWKDTlrxfUFxkavX-8Mdj8NK5JgP3mZMEhBFqVyuXAk0gdfZ2a6V_TK21B5WvMwk9lhzjRUafW9KVBGBlnn9rHf2tpq7wziMYI1cZzMkkofhFB6Mh16lhwK21vWrgfU0MYkcJ'),
      G('ANWiy9TKMiAq1bysQ2K_ghtHUCu252XkqDRhB35ipKFzX4jKSuBoljkxFLFfDkmGWOZWznORqXGdw4u8BcTChH_sjIONW9fhC5m4m1GHdY26hsXcIIAmNHdj5gKjTfUCfz1IM8-k4kqoeNfIOeZv'),
      G('ANWiy9SMryU6k8gSren8v__5V8KPdj17105LdOWBb_IXHmicHgmvGj0pBdfTPHX0u_Mg9Oa3Uqkv1JImt6qV9M3NXEPGZ3MgL3ag8bxNtR4TuCfNMF8DeBP9ABa68ujG-xG92bH4hXRTQ6dnq9ll'),
      G('ANWiy9RfvGBOfQ2DZ3JhwCdWx6-52ShQoUNHdRz9Bdpi9MHuxLwbE-sLDLfKpsDGDNbYrUq-d37XlPbpcKkAGM3qaqtXsmaqCi19oKqfYSrMvHJ2CIvvDwAaFTAWs3DKefOjwf0at9phvufAuTWl')
    ]
  },
  {
    id: 5,
    name: 'Nexpreneur',
    badge: 'New',
    rating: 5.0,
    area: 'Naim Nagar',
    location: 'Jagruti Colony, Naim Nagar, Hanamkonda',
    address: '2H83+QHF, Jagruti Colony, Naim Nagar, Hanamkonda, Telangana 506009',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('8800534868006300212'),
    images: [
      G('ANWiy9StRyciKF9vkvq82cwvAuNkmd_L3IXthdf0H5xDkNGs1_CWbpS031q4-F4dm8XUsqB7Tr-oD_Syb6W-D3DeGNZTsB04uzzZW2vIaCuqUzz7Dyz99J3cRm3wLVKSndkAbCIl3IUF6kJZyP4V'),
      G('ANWiy9Rt86qduOpPe0mb8OvpySh5YBN65Cj-moKl7Yjtr_5ioKFSEnFh7a9boC5PApWuo3PPq_B7fiS7F8IyhITTsjvFGZY9dEhU499EE0GAnljo26d7ePCQMEpYqIf328nw9iohBT4sW6ATTnBH')
    ]
  }
];

// Confirmed coworking-style listings with NO genuine photos.
// Kept separate (and out of every listing, grid and area tile) so the UI never renders an
// empty or wrong gallery. Move an entry into the array above once real photos are found.
export const warangalCoworkingPendingPhotos = [
  {
    id: 101,
    name: 'SHS Business Center Co-working Office',
    badge: null,
    rating: null,
    area: 'Subedari',
    location: 'Subedari, Hanamkonda, Warangal',
    address: 'SHS Business Center, Subedari, Hanamkonda, Warangal, Telangana',
    price: '₹70,000',
    period: '/ Month',
    priceFormatted: '₹70,000 / Month',
    ctaText: 'Get Quote',
    images: []
  }
];

// Only spaces with real photos are listed.
export const warangalSpaces = warangalCoworking;

export default warangalSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const warangalNeighborhoods = Object.entries(
  warangalSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const warangalOfficeCards = warangalSpaces.slice(0, 8);
export const moreWarangalOfficeCards = warangalSpaces.slice(8);

export const warangalAreas = warangalNeighborhoods;

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
// Warangal Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allWarangalOfficeCards = warangalSpaces;

export const getWarangalOfficeCardById = (id) => findOfficeBySlug(allWarangalOfficeCards, id, "warangal");
export const getWarangalOfficeSlug = (space) => officePath(allWarangalOfficeCards, space, "warangal");

// ============================================================================
// Top Coworking Locations in Warangal — one tile per area, using a photo from a space in that area
// ============================================================================
export const topWarangalCoworkingLocations = warangalNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: warangalSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
