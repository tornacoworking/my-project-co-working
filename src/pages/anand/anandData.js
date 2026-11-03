import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Anand (Gujarat) coworking spaces — Google Maps + Office Hub data, fetched Nov 2, 2026.
// Excluded: WorkforME HQ (company office) and "Customized embroidery designs" (mis-tagged business).
// Google photo URLs can expire — refresh via the Places API before production.

export const anandSpaces = [
  {
    id: 1,
    name: 'MyBranch - Coworking Space in Anand',
    badge: 'Top Rated',
    rating: 5.0,
    reviewCount: 5,
    area: 'Railway Station Road',
    location: 'Ganesh Chokdi, Anand',
    address: '205/206, B Block, Shree Ram Arcade, Railway Station Rd, Ganesh Chokdi, Sardar Ganj, Anand, Gujarat 388001',
    phone: '+91 84519 99506',
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Coworking Desks', 'Private Cabins', 'Coffee & Tea', 'Parking'],
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    priceNote: 'Per desk, Office Hub listing (12-month term)',
    ctaText: 'Get Quote',
    website: 'https://bit.ly/4n6x2w1',
    googleMapsUrl: 'https://maps.google.com/?cid=16904313333536719632',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLesBp3ZYDuEbbVL6SpIGm2iDiPOqPnHu0R5QKF-OqEVhdn4lE92UwqCb-W2i28GWiQcEF4b1AUq9rSEiCr8QJRbEkCD39ah2YX_jL2DvFzKUCp_Ge_NOkBoBvQw0aGtreQJf9A=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdi1CRJzEa258vENBFSISdD3cAHb2_Vc5feAAZA1xiwf-x_1149diEPwUlfoWYCLUKtoj3h6pruCgkBMw-0JxHN8x9REaRmGE_uBLsulPA6BjOTCg6_GuHnSkk9wB4VecPVFG_-Vg=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc-Qu6bs59J2frT3vYxEQvXw2RBcq0ySk9G3JyIbc6g4DJfzd5JRFZ_JFZqFGboL5kxyhGg6pz2GWXGAjaPaPx0larhv8xYiky5wWZ_jwi_Wb0eB3P0_HFcDPF4F1n0qrjw5VcfT8HIXQWY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf89mcEthCKUXmyoGUj_QBrW1rZPY9kBD9InmDSmVu81xzRvRQCzDfIxm_M6vA9sWnKgqKSV-LtZa6Sc4GFz30dmX8IGIiRRXcagyrOJ462Lx8xpNETXJEsDcMkRSci25CqAA6XIA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfWXsfc48OxvYWPyN0oMbxJIkRcTKB8kEVjte6hrXpkv4dLqy7HhqlrCvlHY6VcuhpqZRhO51BjioFSoZVKto4sxBjrtlIuik0FwQ4JtHwXm11egS1fVnWR_0mrl-QARw67VpFY=s4800-w800-h600'
    ]
  },
  {
    id: 2,
    name: 'Business Boxx',
    badge: 'Popular',
    rating: 4.9,
    reviewCount: 9,
    area: 'Vallabh Vidyanagar',
    location: 'Vallabh Vidyanagar, Anand',
    address: 'F-16, Mahadev Road, Vallabh Vidyanagar, Anand, Gujarat 388120',
    phone: null,
    hours: null,
    amenities: ['Furnished Offices', 'Staff Support'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16827560600191692044',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfkL8YcJyIz1MxzQtdVKGi2Dsdp-WRLB7oosEq-jbJUnkgtGnAFIrXqGFivYa-fnHkfrRE8DAHXZ9Edz9txV5Gjk_NlzBYaO_Z0mZR5JaAg8U_vcN-sm_iKoE_AgQyVuI3pg77PdBrgr55h=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcce26aez0pnSHG14ifmvM49hfvFlk13BFCUQJ2r91IAvCmn-LLRYyZ1QMnXo-VIdq744N2CjkIXZymyBivTYNTFQ_9BE21po9RnNXnyBXsJ36Mbmsxt8Q2e09Jb2CFBmWEugfk9m76c24=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcdbPpj0b7t9o10y8iK5utX7DJ91aL1EFS1yjvne30WyF90xruTv__uxcMdBRbRVHRHM0se2OBOHhpVdegYZCTwZ68dSepMD0lQ12X-eLeBsx923f1GXeHx7wOhfiq04fMzrsmyXmISIvk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdMq7wVJoo56E1Ct4bYc1fxwRX6mdqmS-BMQNiYTUhal7-OJSDiTnn8-JlK-oH1LR1eH_x3Kd2AXaX9prVjO3JS92vyb9FMZ3jxt7E4eg1WaaW6Ptr6GLQWvm3uRzXC_HfKk1vc_ZhwzSt2=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe52sVftLUNVbqnaZtUMDQ4jEmrIle_nl9skSyutADc2iK5DAWdXCCCnoX_vuzNUwZsfq7rIVRJBsgcznc1w6iy1jVEQxLYsH8ydw7mGJv_mQF4wXZF6jw9RW-1Rke6D4kir2tKDqPuM40u=s4800-w800-h600'
    ]
  }
];

export default anandSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const anandNeighborhoods = Object.entries(
  anandSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const anandOfficeCards = anandSpaces.slice(0, 8);
export const moreAnandOfficeCards = anandSpaces.slice(8);

export const anandAreas = anandNeighborhoods;

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
// Anand Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allAnandOfficeCards = anandSpaces;

export const getAnandOfficeCardById = (id) => findOfficeBySlug(allAnandOfficeCards, id, "anand");
export const getAnandOfficeSlug = (space) => officePath(allAnandOfficeCards, space, "anand");

// ============================================================================
// Top Coworking Locations in Anand — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAnandCoworkingLocations = anandNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: anandSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
