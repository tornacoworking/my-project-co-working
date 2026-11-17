import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Rishikesh (Uttarakhand). 6 spaces, supplied data (ratings, prices, Google Maps links and photos).
// Spaces with no published price show "Price on request". Alt Space has no photos yet,
// so it uses the placeholder image below until real ones are added.

export const rishikeshFallbackImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';

export const rishikeshCoworking = [
  {
    id: 1,
    name: 'Kohi Co Working Cafe',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Nirmal Block B',
    location: 'Nirmal Block B, Rishikesh',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJ2wOnzvQ_CTkREa8qo-LyoGU',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SBtYDc6hyf39GhgsmzOLxU5im2XhqDv8VCBFbEGaKqPET6bZA-E2CVHJue_JJvcRs1Ik2rLHLvOJ-jfieR7Q-m0JmBr_R2BUg9NYto7O8wD92LceyKM-bovoFXdeaXso4e9SJL6AeWh4Y=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SPTS3xa8ZRsxyP0Gsc8Vyx-46tzeARqkpkIunqa04c6DmmY7i3MrlGB0ZlDFq8rEGmnRgRelUSKP141EeNauQ0ZKRk0VM5fra8LRa9DCfPlM91RiL2SFGARnYzphGaHV3Pb2OpEHNm2zrn=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9StjBtWIqpjGLpB0aoHiEAsMu-2_6gQVnhN9N7hD5bVDrmCTaemIWuk1DBfp0fskmLi6VObcreCUwaSRbiBU8b1MNpF9FUmUjjSoEOP4YaNtioDn4QDXTp90qSlfHASmJd7-j6ZzDyZRMrf=w1200-h675-k-no'
    ]
  },
  {
    id: 2,
    name: 'Alt Space',
    badge: 'New Listing',
    rating: null,
    area: 'Tapovan',
    location: 'Tapovan, Rishikesh',
    price: '₹8,000',
    period: '/ Month',
    priceFormatted: '₹8,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Alt+Space+coworking+Tapovan+Rishikesh',
    images: []
  },
  {
    id: 3,
    name: 'Himalayan Yoga Cafe (Cowork Cafe)',
    badge: 'Popular',
    rating: 4.8,
    area: 'Nirmal Block B',
    location: 'Nirmal Block B, Rishikesh',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJw_6TkxE_CTkRJhnsR-v__XQ',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R3flLnNRqsjGwYQ-SxNtb6mq8Re2tk21f9ivqew4LgUhln_A_gF9SGH4uL15wEqx3WPbVQ2Tty2oeskm53KDfBDOxzJfbtkJlPhyxBV9TsdZOEvhEfAfiLbQrKuiqkyEhTRHI=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Q3D4LjAP2OSwpyytd6rUkZ61Z54c_KsAjxQh5VvHO5zC5wjMJN9gWcav_JcrIBvH3Gvc00m37K3w4-dJwSTQFmjdMpPfGMyRiLt0cuM75H4Mm49m_dpLHDwMmr5x2GCRbNX33fYK1fFNGX=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TerSld1TH-QnX9NZarco8ac2_AA9wngtdcu27euTXJcgUM1Kh7PLwfq5Jm0IKUqfWCxqejFr8VD-dAyco6QzQBQ_EvXkNFF_iXM044u4SuU6rwXubNMSqWPVADdySKB-7pTWVFx9wWnUg=w1200-h675-k-no'
    ]
  },
  {
    id: 4,
    name: 'The Blue Art Cafe (Cowork Cafe)',
    badge: 'Popular',
    rating: 4.8,
    area: 'Upper Tapovan',
    location: 'Upper Tapovan, Rishikesh',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJuZ-N3c0XCTkRTje-V2oz8CA',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TGDhoLXQCRbPQvlcQlqyUT9gGqaRZsuDNp9ET6yOn6_aq4OoTzLBH8tZ3fcQTEKkH_JLH_UdEAf_HIeyngk4feJqCmAl_YKkLKpERPIyvL7xKrKJdJsXjPtkDGZY7MlgEDbwO32-X_RLI=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9T5vthB2gaILhD-vWOClbLsx34mKCsjlbkCgjcpqffwv0ramOaAwXnoFODLzaPuG_JPx2VKmzv97j38O_941eKlkxbCe0h-YdLcIqh1tKBz-lXkWXlyJhJwqtQpI_zTtVqQ2B0AfqFJhpKc=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SdylDs8tsDG2OpFlbC6aERlURxiqE4MjCEMQUQWbe0L1LxCINvAuXUhxoDdW3XFOWNLGMoNT8wkhGXa3k_CSGydGfK8q_UlHF5kEzF3_hE8TwVC-7DsX1l1gl3M39eyQbrUEVyzXYKVQE=w1200-h675-k-no'
    ]
  },
  {
    id: 5,
    name: 'Serendipity Cafe (Cowork Cafe)',
    badge: 'Popular',
    rating: 4.5,
    area: 'Laxman Jhula',
    location: 'Laxman Jhula, Rishikesh',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJXVPnPsEXCTkReT7MHdubGCA',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9ROTgBaNtUhTfGAZCyI4VdIy3S3TCcLacM1S36zqsS7yqeUMZcVpI4z1SWJm1ua6ZHtWktxnZNkaUD7AsmW0GNFO3oCWVElWwNvV_aEwiQL6G7ZeZ2D9Io6I0kgXCfJt1P1UlABww=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9TBA4fXjKzXAPQsDIbU4VHRTsNKMul0IkJ2QJ_cA-tVZI2Pw_J1hpC4aTNrGUEJDiZHMmz4Zv2eK_mkf342KSHO-nXqu9kRrTj3toa5vBaQkjkA1yxClwzdOr0aXoBmrw1TfsPrtZVVlHVg=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R6FkN6Y6wqT_yTlU8Vw96JL5L9WQlRx_DO0o9X_x2NXZN9urYXy9_6OQDoyib07oywqqecg-Ke6w9LVbsKlrlKDIdBT5W14tVhvHQLkFYySA1No4UdJqOW1beheHXwCcpxdPPMN21hJyuD=w1200-h675-k-no'
    ]
  },
  {
    id: 6,
    name: 'Rishikesh Artshala',
    badge: 'Verified',
    rating: 4.4,
    area: 'Tapovan',
    location: 'Tapovan, Rishikesh',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJ0xxr2lgXCTkRMW0ktMgDJT0',
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QAQ2dBOaUkg8oVL-7byz--ZShaDKu66a_oGMxATlpOaVgQKKCj4EBrB_VVCbyyWG7TVAsqwD8WpZ5cvwRcFjLHfgzV2kXWcauFOi9ztHMbSN9OOPS4dGqbrD1MPRfNT9si1_W1673yimfz=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9SZN74BCI2np6DfTfTNr1Z0LDT7qKs5K7tnWmg9qnJOCusXQ3Q1oNFJETOxZFoVy_Ak82chxxKxuIvNfSKUWLQ75Uut3XDdtfyFn6MtmwBZsqHCm6W_lCPznSq-xoUsTKrj7wGWzYw4taU=w1200-h675-k-no',
      'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9RYURyymyHcIX8CspJsh2rVXKji_WLIr2oHQPR93jdiuNc3zDo-Uc1-OA4zkM5fmWrtCrcbKwVqI1TgPy94ykGXN1I3j9a1XkvkgnUO7KvE5agQ-nyd-ItCIztk-mbEHNTwW43tyZdSHoQ=w1200-h675-k-no'
    ]
  }
];

export const rishikeshSpaces = rishikeshCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const rishikeshNeighborhoods = Object.entries(
  rishikeshSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const rishikeshOfficeCards = rishikeshSpaces.slice(0, 8);
export const moreRishikeshOfficeCards = rishikeshSpaces.slice(8, 16);
export const finalRishikeshOfficeCards = rishikeshSpaces.slice(16, 24);
export const featuredRishikeshOfficeCards = rishikeshSpaces.slice(24);

export const rishikeshAreas = rishikeshNeighborhoods;

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
// Rishikesh Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allRishikeshOfficeCards = rishikeshSpaces;

export const getRishikeshOfficeCardById = (id) => findOfficeBySlug(allRishikeshOfficeCards, id, "rishikesh");
export const getRishikeshOfficeSlug = (space) => officePath(allRishikeshOfficeCards, space, "rishikesh");

// ============================================================================
// Top Coworking Locations in Rishikesh (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topRishikeshCoworkingLocations = rishikeshNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: rishikeshSpaces.find((space) => space.area === area).images[0] || rishikeshFallbackImage,
  ctaText: 'Explore Spaces'
}));
