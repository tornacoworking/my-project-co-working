import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Hyderabad Coworking Spaces Data & Neighborhood Filters
 * The listings live in `hyderabadSpaces` (below). The page paginates and
 * filters that single list.
 */

export const hyderabadNeighborhoods = [
  'Hitec City',
  'Gachibowli',
  'Madhapur',
  'Kondapur',
  'Banjara Hills',
  'Jubilee Hills',
  'Begumpet',
  'Kukatpally',
  'Financial District',
  'Uppal',
  'Secunderabad',
  'Punjagutta',
  'Ameerpet',
  'Manikonda',
  'Nagole',
  'Shaikpet',
  'Champapet'
];

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across Hyderabad',
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

// Placeholder tiles (shared CoFynd stock images) - swap for Hyderabad-specific photos when available.
const sampleLocationImages = {
  'Hitec City': 'https://img.cofynd.com/images/latest_images_2024/b51cfb296e1d87a35723c9d4a3b957be96ea73cd.webp',
  'Gachibowli': 'https://img.cofynd.com/images/latest_images_2024/a36d09bad7175ca9643ad8e88f77462bd8ec36e1.webp',
  'Madhapur': 'https://img.cofynd.com/images/latest_images_2024/8a42a52f0d08b1fe8fbc67d8a16ee3a22553597b.webp',
  'Kondapur': 'https://img.cofynd.com/images/latest_images_2024/323979251e5458d1485f20d1ff9fcc33b230dfb8.webp',
  'Banjara Hills': 'https://img.cofynd.com/images/latest_images_2024/d72385e6df621c44142ed89e03ee20dd32220d9d.webp',
  'Jubilee Hills': 'https://img.cofynd.com/images/latest_images_2024/1288e19a7b909ea9ebbe71a2fa95c50736afc7c7.webp',
  'Begumpet': 'https://img.cofynd.com/images/latest_images_2024/ad7fa46d9bdb766ddb3da837e007525c9d1a0a11.webp',
  'Kukatpally': 'https://img.cofynd.com/images/latest_images_2024/d0477af6807946ce717972841b30b7b5613cdfb9.webp',
  'Financial District': 'https://img.cofynd.com/images/latest_images_2024/a65d621179742f9abdf246d47ca5ed37d4afc550.webp'
};

export const topHyderabadCoworkingLocations = Object.entries(sampleLocationImages).map(([name, image]) => ({
  id: `loc-${name.toLowerCase().replace(/\s+/g, '-')}`,
  name,
  title: `Coworking Space in ${name}`,
  image,
  ctaText: 'Explore Spaces'
}));

// images = first 4 photos from each space's Cofynd listing (img.cofynd.com). The Google Maps thumbnails used before were tiny
// (w203) and blocked/throttled by Google when loaded in the browser, so they showed as broken images.
export const hyderabadSpaces = [
 
  {
    id: 1,
    name: 'The Headquarters Pride',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hitec City',
    location: 'Plot No. 4/1, Survey No. 64, Huda Techno Enclave, Madhapur, HITEC City, Hyderabad, Telangana 500081',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6524660098372834091',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/6d5e96929eb857ce550b5ef945c625fca17df552.webp',
      'https://img.cofynd.com/images/latest_images_2024/b09ccc78a283ed1d2a3538fb63953df313bd33c0.webp',
      'https://img.cofynd.com/images/original/f4e97ddabee29eb107d4e841b36320b7238e4ae1.jpg',
      'https://img.cofynd.com/images/original/cb3c39bee6b6ede20e213ad26fe3e9186e9541a9.jpg'
    ]
  },
  {
    id: 2,
    name: 'FunWork',
    badge: 'Premium',
    rating: 4.8,
    area: 'Kondapur',
    location: '4th Floor, Pranava Business Square, Unit 2 and 3, opposite AMB Mall, Kondapur, Kothaguda, Hyderabad, Telangana 500084',
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3560220882924040293',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/7fff396a73b30ec2a23fd8707ce9a7b2036ab326.webp',
      'https://img.cofynd.com/images/latest_images_2024/d37bd2442eec2396b6d1691e5798b61e7fa338ab.webp',
      'https://img.cofynd.com/images/latest_images_2024/a13c5aaf7c59f79309144a965e767a891855fd05.webp',
      'https://img.cofynd.com/images/latest_images_2024/e9de8d64060cca7dfcb3013b01bb406932a25ace.webp'
    ]
  },
  {
    id: 3,
    name: 'The Headquarters Orbit',
    badge: 'Popular',
    rating: 5.0,
    area: 'Hitec City',
    location: '6th, 10th & 19th Floors, Plot No 30/C, Knowledge City Rd, Silpa Gram Craft Village, Serilingampally, Hyderabad, Telangana 500032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17067560690901518063',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/96541484d014bdaa256947500c8c00989aab334f.webp',
      'https://img.cofynd.com/images/latest_images_2024/331eaf18322d5789a64d2c13dd400f1ef95ebe9e.webp',
      'https://img.cofynd.com/images/latest_images_2024/f8a0aa44bc83e4105188bc0475a093f64d528f4c.webp',
      'https://img.cofynd.com/images/latest_images_2024/836503796dcd9cef2cd38d6d25588ca8f809c0f4.webp'
    ]
  },
  {
    id: 4,
    name: 'CWS One',
    badge: 'Popular',
    rating: 4.5,
    area: 'Kondapur',
    location: 'Plot No: 40, 41 & 42, Survey No: 54 Kondapur, Hanuman Nagar, Serilingampalle (M), Hyderabad, Telangana 500084',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16243398428054456803',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/4a3bdca7616401a977478eae2ac292cff4b1048b.webp',
      'https://img.cofynd.com/images/original/56344fa07d9e54ae882603220cdb25a461dc28ae.jpg',
      'https://img.cofynd.com/images/latest_images_2024/b913be3ca1b20da8af3ab329f4235b3ba60b1a0b.webp',
      'https://img.cofynd.com/images/original/dffb12050372988090b66b0539b63b7dec072e54.jpg'
    ]
  },
  {
    id: 5,
    name: 'Pinakin Spaces',
    badge: 'Premium',
    rating: 4.9,
    area: 'Hitec City',
    location: 'Plot No.18/2, opposite IKEA, Sector-III, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10897804861633670574',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/ecd1509153a2f2e52e4dbf1081170becaddc4cd5.webp',
      'https://img.cofynd.com/images/latest_images_2024/d514f95ec73dc027a6b291a9e5a33c5f784e263d.webp',
      'https://img.cofynd.com/images/latest_images_2024/043822d151a773c7d6bb3c6f2f03f74ae50d4024.webp',
      'https://img.cofynd.com/images/latest_images_2024/649697561906dc86566b697dd587d32f7acc8e53.webp'
    ]
  },
  // CHECK: same name & area, but Maps listing reviews mostly describe a software firm
  {
    id: 6,
    name: 'Business Labs',
    badge: 'Premium',
    rating: 4.8,
    area: 'Begumpet',
    location: '507, Sardar Patel Rd, near Cream Stone, Sindhi Colony, Begumpet, Secunderabad, Hyderabad, Telangana 500003',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7040501682459097879',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/40be88943a09214c92dfd0cb4f53b40045385b1c.webp',
      'https://img.cofynd.com/images/latest_images_2024/769821701afff299384466203e9626dad03e337e.webp',
      'https://img.cofynd.com/images/latest_images_2024/2b74bfc886abe7bcb03e347d83a14e294fd66a18.webp',
      'https://img.cofynd.com/images/latest_images_2024/49b10925c57c6ea046c7efc3be1081eceddf242c.webp'
    ]
  },
  {
    id: 7,
    name: 'Smartworks Raheja Mindspace',
    badge: 'Popular',
    rating: 4.2,
    area: 'Hitec City',
    location: 'Building 3A and 3B, Raheja Mindspace, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3204034845381624601',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f82668f336fd9d32e85a721e66e1a36261c7ac91.webp',
      'https://img.cofynd.com/images/latest_images_2024/11d4f04c21fc555315f34b824811155e50d3cd70.webp',
      'https://img.cofynd.com/images/latest_images_2024/ea295c78733aff4e9dbcc33c6504b4e18bab5a6a.webp',
      'https://img.cofynd.com/images/latest_images_2024/80a9a601305822957280ae3505daccb82ca9662d.webp'
    ]
  },
  {
    id: 8,
    name: '91Springboard',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hitec City',
    location: '71, Hitech Madhapur Road, Jubilee Enclave, HITEC City, Hyderabad, Telangana 500081',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8091726731184710925',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/093c591374c43bcd3c6186644f3adb6e1a1b0121.webp',
      'https://img.cofynd.com/images/latest_images_2024/3b496c55b19b4635f5797f6cad4c183ae933e1a5.webp',
      'https://img.cofynd.com/images/latest_images_2024/72e1797bf7f41e4a0e13b71093a4ab34d18aef50.webp',
      'https://img.cofynd.com/images/latest_images_2024/43a8093f751e166bff49757c8482aa2d7b6a3878.webp'
    ]
  },
  {
    id: 9,
    name: 'Awfis Lorven Tiara',
    badge: 'Popular',
    rating: 4.5,
    area: 'Kondapur',
    location: '1st - 4th Floor, Survey No 34, Kondapur, Laxmi Cyber City, Kothaguda, Hyderabad, Telangana 500084',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1847815800394451921',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/cc53b285b2ee3dafcce5ffc4fad10459192ea6b7.webp',
      'https://img.cofynd.com/images/latest_images_2024/e8a75ac8b81f47e23f639aec202b84914ba72819.webp',
      'https://img.cofynd.com/images/original/f3a8357c2d156944d6de1ff45d968882528a9317.jpg',
      'https://img.cofynd.com/images/latest_images_2024/640c39f774e180d527ac1b8b78a3b33883b6bda0.webp'
    ]
  },
  {
    id: 10,
    name: 'iKeva My Home Hub',
    badge: 'Popular',
    rating: 4.5,
    area: 'Hitec City',
    location: 'Block 1, Level 5, MyHome Hub, Madhapur, Patrika Nagar, HITEC City, Hyderabad, Telangana 500081',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13137013546260006116',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/e1232645376ab708ba84f8ca65b827455768c379.webp',
      'https://img.cofynd.com/images/latest_images_2024/302bf16c8cbffcd09aa171b47019a27bf6e3bb97.webp',
      'https://img.cofynd.com/images/latest_images_2024/8b243763432801b5d8d7391d3947af57146de275.webp',
      'https://img.cofynd.com/images/latest_images_2024/793d325715d2158019d586997d47514ad2748e84.webp'
    ]
  },
  {
    id: 11,
    name: '91Springboard',
    badge: 'Popular',
    rating: 4.5,
    area: 'Kondapur',
    location: 'Kondapur, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad, Telangana 500084',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13884769855746688618',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/146e4db97020c5a7c47c2c33d4dd16fb1b71008a.webp',
      'https://img.cofynd.com/images/latest_images_2024/0f3c381e5824f092990af16fd1944df8d2134a27.webp',
      'https://img.cofynd.com/images/latest_images_2024/c5912d76794a3ac42ebd9aac5c1e1f58b86ed72e.webp',
      'https://img.cofynd.com/images/latest_images_2024/f0d43af677a3122042a85b6337c1d926ce71f8c2.webp'
    ]
  },
  {
    id: 12,
    name: 'iSprout Ramky Selenium',
    badge: 'Popular',
    rating: 4.5,
    area: 'Gachibowli',
    location: 'Gachibowli, Hyderabad',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.421465,78.333093',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/16bd9063c7c8c6589eff3ea35309dd5b9d98df47.webp',
      'https://img.cofynd.com/images/latest_images_2024/3ec6629d41fec2fab611dbe55fe5b524a971c01a.webp',
      'https://img.cofynd.com/images/latest_images_2024/a55293c209a8b4321ea356a300dc17cb4676ec03.webp',
      'https://img.cofynd.com/images/latest_images_2024/f51d3ad99901de493f3a61898ae6eeb1098df62a.webp'
    ]
  },
  {
    id: 13,
    name: 'iKeva NSL Centrum',
    badge: 'Popular',
    rating: 4.0,
    area: 'Kukatpally',
    location: 'Level 3, NSL Centrum Mall, Road No. 1, opp. Nexus Mall, KPHB 5th Phase, Kukatpally, Hyderabad, Telangana 500085',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6480587416277050426',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/994dd5e081fe70af017077634618623c1f3dbdaa.webp',
      'https://img.cofynd.com/images/latest_images_2024/dafbd07161893ea8c7e0183bc229f5457ca3b74a.webp',
      'https://img.cofynd.com/images/latest_images_2024/dfb1a9feafe995585d4ebbdbd1b3b7f71702a081.webp',
      'https://img.cofynd.com/images/latest_images_2024/58aae33dc3142775a7bfcdc4193a8d2792771890.webp'
    ]
  },
  {
    id: 14,
    name: 'Cowrks The Skyview 10',
    badge: 'Popular',
    rating: 4.7,
    area: 'Hitec City',
    location: 'The Skyview 10, Sy No 83/1, Hitech City Main Rd, Rai Durg, Hyderabad, Telangana 500032',
    price: '₹19,999',
    period: '/ month',
    priceFormatted: '₹19,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10603024995945904054',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/bf78dee0a039feafe068abc708086e3da23dcdbc.webp',
      'https://img.cofynd.com/images/latest_images_2024/6d9a25627da9f99f92cd4a2bf20591530021d0a7.webp',
      'https://img.cofynd.com/images/original/86a00f64b86803c971f8ecafb5b35ef76474cfb9.jpg',
      'https://img.cofynd.com/images/latest_images_2024/1939b8a0c5d58825438a021a6f08b0a941832cc2.webp'
    ]
  },
  {
    id: 15,
    name: 'iSprout Sreshtha Marvel',
    badge: 'Popular',
    rating: 4.4,
    area: 'Gachibowli',
    location: '2nd floor, Sreshta Marvel, Sy.No.136, Kondapur Main Road, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5491669055629151393',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/6116726593a97a1daa1109aba5fc8cb8f43878a8.webp',
      'https://img.cofynd.com/images/latest_images_2024/6abb97965cd38a895de7b675f93e2c3735b98a88.webp',
      'https://img.cofynd.com/images/latest_images_2024/663736b46ac11bf1cacea99b35b74a530fb63e35.webp',
      'https://img.cofynd.com/images/latest_images_2024/95793c298a56ffb9ce3f8381b9010ba45840b191.webp'
    ]
  },
  {
    id: 16,
    name: 'iKeva Lotus Heights',
    badge: 'Popular',
    rating: 4.1,
    area: 'Madhapur',
    location: '3, Lotus Heights, Kavuri Hills Phase 2 Rd, beside D-Mart, Kavuri Hills, Madhapur, Hyderabad, Telangana 500033',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=891657279914766333',
    images: [
      'https://img.cofynd.com/images/original/cc8668c3e05f5b6638ef5f1b2a50773516a33a1f.jpg',
      'https://img.cofynd.com/images/original/60b93a2716b7c8d53007c7031e3468a138b71c89.jpg',
      'https://img.cofynd.com/images/latest_images_2024/462232e907a3bf56c1c8c186c010f533f75263bc.webp',
      'https://img.cofynd.com/images/latest_images_2024/2e3f46097225315042c3be55990b688b05cdd667.webp'
    ]
  },
  {
    id: 17,
    name: 'InDesk',
    badge: 'Popular',
    rating: 4.5,
    area: 'Hitec City',
    location: 'HITEC City, Hyderabad',
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'NOT_VERIFIED',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/0e7c07208d6fab4544c743e05ddc54df1642e1aa.webp',
      'https://img.cofynd.com/images/latest_images_2024/c7274ad630cf990a21f4cf8e257978b670773423.webp',
      'https://img.cofynd.com/images/original/be28b9b179f67147fca0fb6e5bab8fe323184238.jpg',
      'https://img.cofynd.com/images/original/021314ed339d61101a11b045ec104d9a4ba12c20.jpg'
    ]
  },
  {
    id: 18,
    name: 'CoKarma Mahaveer Radiance',
    badge: 'Popular',
    rating: 4.8,
    area: 'Jubilee Hills',
    location: '1st floor, Mahaveer Radiance, opp. Metro Pillar 1708, Road No. 36, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12169802285139536396',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/89c0e4601508f40de0dd9a373ab614b7415a38de.webp',
      'https://img.cofynd.com/images/latest_images_2024/f752481261ab92ca1e8fa95dcbd5418722a845b9.webp',
      'https://img.cofynd.com/images/latest_images_2024/51402d0d7756b206d5345470acfd852ec9add53c.webp',
      'https://img.cofynd.com/images/latest_images_2024/cb871fd4478e251b9ebbfb8a6ef4ca383f1e21fc.webp'
    ]
  },
  {
    id: 19,
    name: 'iKeva Rajapushpa Summit',
    badge: 'Popular',
    rating: 5.0,
    area: 'Gachibowli',
    location: 'Level G, Rajapushpa Summit, ISB Rd, Financial District, Gachibowli, Nanakramguda, Telangana 500032',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8195305218894582956',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/66627d5bb2dcc3a465b1254d3f49fc263e55fbe0.webp',
      'https://img.cofynd.com/images/latest_images_2024/4bb8a75130acbe8e8bdea6c54298daf4884e87dd.webp',
      'https://img.cofynd.com/images/latest_images_2024/9854d23db24dfef79ef6cefe3f116522070ec5e0.webp',
      'https://img.cofynd.com/images/latest_images_2024/d038b46b6c3b80ad1dd9a3dd2276b084224a719d.webp'
    ]
  },
  {
    id: 20,
    name: 'iSprout Divyasree Trinity',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hitec City',
    location: 'Plot No 25, Divyasree Trinity, Hitech City Main Rd, near Hexagon Capability Center, Phase 2, HITEC City, Hyderabad, Telangana 500081',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8066643642140792476',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/057e7f3a05f6c78755d20b347becc3f3eeda9b15.webp',
      'https://img.cofynd.com/images/latest_images_2024/a07b0c95258e161e3df9e0919c37f0658b822571.webp',
      'https://img.cofynd.com/images/latest_images_2024/38df3d65dfb3457702b100b336693c235f459f4b.webp',
      'https://img.cofynd.com/images/latest_images_2024/2fdf08c7782ddccadad421fb47fb97198b16e8f2.webp'
    ]
  },
  {
    id: 21,
    name: 'CoKarma Durga Towers',
    badge: 'Popular',
    rating: 4.8,
    area: 'Begumpet',
    location: '4th Floor, Durga Towers, Begumpet Road, Metro Pillar No C1315, Patigadda, Begumpet, Hyderabad, Telangana 500003',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10904377907859921405',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/9d5a6c836ff9efc6e0b9a54c5ab82bbbe0f0f305.webp',
      'https://img.cofynd.com/images/latest_images_2024/672480e1b07c77ddc2d6369f4a13e16f59d908df.webp',
      'https://img.cofynd.com/images/latest_images_2024/831c196a88f313641260a3835376c07c2409dd1a.webp',
      'https://img.cofynd.com/images/latest_images_2024/ea3254558bcf17ad571b254ac15a45a1e6c490a0.webp'
    ]
  },
  {
    id: 22,
    name: 'iKeva iLabs Centre',
    badge: 'Popular',
    rating: 4.5,
    area: 'Hitec City',
    location: 'Level 5, Block A, iLabs Centre, Inorbit Mall Rd, Software Units Layout, HITEC City, Hyderabad, Telangana 500081',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1688978926522240211',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/4c9f7362632000e837bc1601aad49a45d288e901.webp',
      'https://img.cofynd.com/images/latest_images_2024/8645af8273f975b3e46cb9dd4f83e76f49a9f833.webp',
      'https://img.cofynd.com/images/latest_images_2024/ae36e4b15b2fa5073bc9b414d339d9aecd40a204.webp',
      'https://img.cofynd.com/images/latest_images_2024/7b4b26482f146e15e1d7bcba5dbe6a28fc4459ee.webp'
    ]
  },
  {
    id: 23,
    name: 'Redbricks',
    badge: 'Popular',
    rating: 4.7,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.453003,78.361397',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/3129499d1390c17f958fccbc0a0832712cf2db8e.webp',
      'https://img.cofynd.com/images/original/158e091b79fcbcaa4f0593b892ccaa71ce46e3c8.jpg',
      'https://img.cofynd.com/images/original/e588048cdaf5fe3831ed80b54b891a10c2c953b2.jpg',
      'https://img.cofynd.com/images/latest_images_2024/035c39e47764713b153eaa0e7a30d5802ea52a9a.webp'
    ]
  },
  {
    id: 24,
    name: 'Unispace',
    badge: 'Popular',
    rating: 4.3,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.447857,78.381224',
    images: [
      'https://img.cofynd.com/images/original/8be11d6d6f245203e4b248bb7c9b2627793bdd2b.jpg',
      'https://img.cofynd.com/images/original/2fa56c2d2c20a91b240865695e9765f02dfea8f7.jpg',
      'https://img.cofynd.com/images/original/8130c249b6edaba458f8faff33abf654b22c9b56.jpg',
      'https://img.cofynd.com/images/latest_images_2024/f195db26d537b481dbcad888a25ca16a5ec7fe75.webp'
    ]
  },
  {
    id: 25,
    name: 'MBDesk',
    badge: 'Popular',
    rating: 4.0,
    area: 'Secunderabad',
    location: 'Plot No 12, above Haldirams & Kamal Watch Company, Janakapuri, HACP Colony, Karkhana, Secunderabad, Telangana 500009',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2620974429198856318',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/2d19a6c09d79e34d51798ad8ee235aa2c8b1dd52.webp',
      'https://img.cofynd.com/images/latest_images_2024/e6bd5bb199814f788378c0a11d4551663d5fd361.webp',
      'https://img.cofynd.com/images/latest_images_2024/c60fa739e0f850edfbfe62f6dc5b691bef738557.webp',
      'https://img.cofynd.com/images/latest_images_2024/38f632264e9afb0072c7b766570346c67882385e.webp'
    ]
  },
  {
    id: 26,
    name: 'Indiqube Pearl',
    badge: 'Popular',
    rating: 4.4,
    area: 'Gachibowli',
    location: 'IndiQube Pearl, Mindspace Rd, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2577773943575560579',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/62014bdd526d500e1a9fcc4f39b1a29ab0cbf676.webp',
      'https://img.cofynd.com/images/latest_images_2024/d34b807c3536cc12e879b642a05068bd0dde9211.webp',
      'https://img.cofynd.com/images/latest_images_2024/cfdc35c9ab2c131f8ef925b34aed4f83f7344b51.webp',
      'https://img.cofynd.com/images/latest_images_2024/1a35b26ff35609f4ff6205623b82cc7b723c5d88.webp'
    ]
  },
  {
    id: 27,
    name: 'Smartworks Aurobindo Galaxy',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hitec City',
    location: 'Floor 8 & 9, Sy No 83/1, Hyderabad Knowledge City, Raidurg, Serilingampalle (M), Hyderabad, Telangana 500032',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16010978273108568740',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/33c9f4fc0e4c84585cc572ea7dd72e62a340e2db.webp',
      'https://img.cofynd.com/images/latest_images_2024/48b306cf7e8b4126ad6bab2ff9effb20f07b6c21.webp',
      'https://img.cofynd.com/images/latest_images_2024/8cd244e8d95110d351e93a83052117805cc3fb6e.webp',
      'https://img.cofynd.com/images/latest_images_2024/f987083c7b525fb5fffe6757dbd79e41913b1dd2.webp'
    ]
  },
  {
    id: 28,
    name: 'Smartworks Purva Summit',
    badge: 'Popular',
    rating: 4.2,
    area: 'Hitec City',
    location: '5th Floor, Purva Summit, Whitefield Rd, opposite Tech Mahindra, Kondapur, HITEC City, Hyderabad, Telangana 500084',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4340618276901827592',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/97355b5444ac6fdb8b77f7b15bebd4a1b6867afd.webp',
      'https://img.cofynd.com/images/latest_images_2024/f171ed9dee5c7a5545d5af53e6d95a8163f700cf.webp',
      'https://img.cofynd.com/images/latest_images_2024/f202efd91edc65a5dd049679ea7316d215ce7c63.webp',
      'https://img.cofynd.com/images/latest_images_2024/34ebf452868aa1f6910affff8f5743e4b5538157.webp'
    ]
  },
  {
    id: 29,
    name: 'Innovivi Centre of Excellence',
    badge: 'Popular',
    rating: 4.3,
    area: 'Jubilee Hills',
    location: 'Aditya Enclave, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2941588062087893190',
    images: [
      'https://img.cofynd.com/images/original/f629db339c628552c8573693d394e638aace1ac2.jpg',
      'https://img.cofynd.com/images/original/68ac0a621f95e67ed60b5b7c01ae6600c1c69124.jpg',
      'https://img.cofynd.com/images/original/0e7cc38f41f78d35180d2803b90bb55121206d1d.jpg',
      'https://img.cofynd.com/images/latest_images_2024/1e70d9b6bae5abae9aaa2ddf1468be34dd94c0a9.webp'
    ]
  },
  {
    id: 30,
    name: 'Rent A desk',
    badge: 'Popular',
    rating: 4.3,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.444606,78.385112',
    images: [
      'https://img.cofynd.com/images/original/dabf9a6fb260b4dd49f5aa34d054c9d7937a181c.jpg',
      'https://img.cofynd.com/images/original/134808f32472d0a3e9a277b690a6fefa415f5eeb.jpg',
      'https://img.cofynd.com/images/latest_images_2024/0962636a4d1c5042453d2da4a7719f9b33a8aa5f.webp',
      'https://img.cofynd.com/images/original/2ec75522dc663221e031b69426504ba8135f0eb9.jpg'
    ]
  },
  {
    id: 31,
    name: 'iSprout Purva Summit',
    badge: 'Popular',
    rating: 4.4,
    area: 'Hitec City',
    location: '2nd Floor, Purva Summit, Whitefield Rd, Kondapur, HITEC City, Hyderabad, Telangana 500084',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5595206102535678352',
    images: [
      'https://img.cofynd.com/images/original/ab0a1b31bdba3089b01999197faa024b5bdb4862.jpg',
      'https://img.cofynd.com/images/original/f90cc6eda190f9ea14d8d165a19a98f1599fd723.jpg',
      'https://img.cofynd.com/images/original/0a705d9947e8b707b1060a73bd0c65828e63b9c4.jpg',
      'https://img.cofynd.com/images/original/2578e1fb09706b1bc10948edfe3f7d16b35db69e.jpg'
    ]
  },
  {
    id: 32,
    name: 'CLOwork Newmark House',
    badge: 'Popular',
    rating: 4.3,
    area: 'Hitec City',
    location: 'First Floor & 403, New Mark House, 103, Hitech City Rd, opposite Medicover Hospital, Patrika Nagar, HITEC City, Hyderabad, Telangana 500081',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8951285958445979023',
    images: [
      'https://img.cofynd.com/images/original/f1799d4da945d4357b9988e8de036ad06b7cf125.jpg',
      'https://img.cofynd.com/images/latest_images_2024/522a3713ec24ade5fcadff4101141c07a80f0260.webp',
      'https://img.cofynd.com/images/latest_images_2024/061cefff2aa4c1a3f563931828dc377f6dac6ee7.webp',
      'https://img.cofynd.com/images/latest_images_2024/0d044e8d408a8b6f335ca323b8151c64ee156e97.webp'
    ]
  },
  // CHECK: only Incuspaze centre in Begumpet on Maps (name, area and 4.9 rating match), but the listing doesn't name Gumidelli Towers
  {
    id: 33,
    name: 'Incuspaze Gumidelli Towers',
    badge: 'Popular',
    rating: 4.9,
    area: 'Begumpet',
    location: 'Level 4(b), Old Airport Rd, Old Patigadda, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2897866041066132776',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/7071838fcaa367a6fc0a1ea12de2c75342c21070.webp',
      'https://img.cofynd.com/images/latest_images_2024/3341444ce73507fd527527c07dc1effa5f03aa22.webp',
      'https://img.cofynd.com/images/latest_images_2024/37bf0207db91a8ce0466c4ade1809b341b636a3e.webp',
      'https://img.cofynd.com/images/latest_images_2024/042c3fa725ea12400ef57334871f96d856b12d62.webp'
    ]
  },
  {
    id: 34,
    name: 'iKeva Vaishnavi\'s Cynosure',
    badge: 'Popular',
    rating: 4.7,
    area: 'Gachibowli',
    location: 'Level 3, Vaishnavi\'s Cynosure, opp. RTTC, Telecom Nagar Extension, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16932425769699324359',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/a3638ce467c2a78924c5522b15262428c56fa5a3.webp',
      'https://img.cofynd.com/images/latest_images_2024/95e8e7f192f31f3246ff5c4473c46440edf62d64.webp',
      'https://img.cofynd.com/images/latest_images_2024/6e3adfb07816f71dfe58f1fb92713d6c72ad0c9c.webp',
      'https://img.cofynd.com/images/latest_images_2024/a240f10ba5d40089afd6f160c1d9e7e82085d085.webp'
    ]
  },
  {
    id: 35,
    name: 'Hatch Station',
    badge: 'Special Offer',
    rating: 4.2,
    area: 'Begumpet',
    location: 'Begumpet, Hyderabad',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.443479,78.387524',
    images: [
      'https://img.cofynd.com/images/original/83b2b2c472295d43bc0568cab6a54e50866ca18d.jpg',
      'https://img.cofynd.com/images/original/e23c303f7c91724972ff94dc715fdcc66951bf4b.jpg',
      'https://img.cofynd.com/images/original/46cd4a2c24f5fe15c6974b8fe81a88d9cb6f2f3a.jpg',
      'https://img.cofynd.com/images/latest_images_2024/7165843d3bc0fd60d41e8a374db79ba967dff48a.webp'
    ]
  },
  {
    id: 36,
    name: 'Trinity Work Hub',
    badge: 'Popular',
    rating: 5.0,
    area: 'Kukatpally',
    location: 'Unit No. 114, Manjeera Trinity Corporate, Hitech Road, beside LuLu Mall, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9829743946648312453',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/fa5f91ad03f20d9f00de5a49a68237e62b6c209d.webp',
      'https://img.cofynd.com/images/latest_images_2024/ddf6bd38e14d42631d467aba0657111c904f08ab.webp',
      'https://img.cofynd.com/images/latest_images_2024/d96b228e4e8579f8a76684a53edb5365f623f8f4.webp',
      'https://img.cofynd.com/images/latest_images_2024/ffb5cc834f9c3eb998ba3f1088c495713bb30c3d.webp'
    ]
  },
  {
    id: 37,
    name: 'Sand Hill Hub',
    badge: 'Popular',
    rating: 4.5,
    area: 'Banjara Hills',
    location: 'B/1, 8-2-248, Journalist Colony, behind Maayas Furniture Store, VST Colony, Banjara Hills, Hyderabad, Telangana 500082',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=826437737810807225',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d81994d3aaf8ec6defe2f0a1eb9ae522a6f486d1.webp',
      'https://img.cofynd.com/images/latest_images_2024/fcd95d920543c67b07ccf07beb4e03bc4d44a4ec.webp',
      'https://img.cofynd.com/images/latest_images_2024/8716d7bff3e8cce7eed5eda7e438f280e1540b7d.webp',
      'https://img.cofynd.com/images/latest_images_2024/ebb5688842b90e6cd18fb2ef0fce693b97887e96.webp'
    ]
  },
  {
    id: 38,
    name: 'iKeva Sanali Info Park',
    badge: 'Popular',
    rating: 4.5,
    area: 'Banjara Hills',
    location: 'Level 1, Sanali Info Park, 8-2-120/113, Road No. 2, Park View Enclave, Banjara Hills, Hyderabad, Telangana 500034',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3257261116652942845',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/285bbd7e3eb51710a64a2dbc6515dc9bfd054a36.webp',
      'https://img.cofynd.com/images/latest_images_2024/0d0ff1920ca0048b494be1675997668e04485f46.webp',
      'https://img.cofynd.com/images/latest_images_2024/fda62ab4f79b2558fe59c4d4e188b3dab2e622a4.webp',
      'https://img.cofynd.com/images/latest_images_2024/23ba46e880ed8df8af68087b136bc2bf54bc23ba.webp'
    ]
  },
    {
    id: 40,
    name: 'YashShree Space Studio',
    badge: 'Popular',
    rating: 5.0,
    area: 'Hitec City',
    location: 'Plot No. 11, Sector 3, HUDA Techno Enclave, HITEC City, Hyderabad, Telangana 500081',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14276957513799516631',
    images: [
      'https://img.cofynd.com/images/original/ede92de298d5b3e208ec152db8f605ad9d104495.jpg',
      'https://img.cofynd.com/images/original/2e69c231740a0cbfd88a278b252821573592330b.jpg',
      'https://img.cofynd.com/images/original/cf1721e3be63484b0e1a7218eb9bcd3e0670b633.jpg',
      'https://img.cofynd.com/images/original/cf35d6903ede2516603e1910acae454eb26c0fd5.jpg'
    ]
  },
  {
    id: 41,
    name: 'CoKarma Liberty Plaza',
    badge: 'Popular',
    rating: 4.2,
    area: 'Banjara Hills',
    location: 'Banjara Hills, Hyderabad',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.406672,78.477713',
    images: [
      'https://img.cofynd.com/images/original/3bb526e232c21916cbe79664eb0acc86ef2a83c0.jpg',
      'https://img.cofynd.com/images/original/12c719b7241b7361d7f353a453f23b405db5a92e.jpg',
      'https://img.cofynd.com/images/original/57fd7b36f481bd238c534f40315ce140edbaa5ec.jpg',
      'https://img.cofynd.com/images/latest_images_2024/2db5ffd7ad6ad7b5e1512966eb5bcad3f501a236.webp'
    ]
  },
  {
    id: 42,
    name: 'Rajapushpa Business Centre',
    badge: 'Popular',
    rating: 4.2,
    area: 'Kondapur',
    location: '4th Floor, Stoneridge Center, Survey No. 12p & 13p, opp. Google, Kondapur, Gachibowli, Hyderabad, Telangana 500084',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17947100296554234844',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/7125c659d2e994309c4712456a1b95e4adb31ffb.webp',
      'https://img.cofynd.com/images/original/314c65d9ec2cb7ff476b4d8cf8841277ef1d3af5.jpg',
      'https://img.cofynd.com/images/original/d90abec8b8988024243768c25109463c6b76b8ba.jpg',
      'https://img.cofynd.com/images/latest_images_2024/4fee640365c5231883c21673aed5519aba40d92a.webp'
    ]
  },
  {
    id: 43,
    name: 'P & S Kickstart',
    badge: 'Special Offer',
    rating: 4.9,
    area: 'Gachibowli',
    location: '5th Floor, Shanta Sriram Building, Sy No 126, PSR Prime Towers Rd, beside DLF Building, Indira Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8971148982396539264',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/ee03e99ee4140758bb7fb16434bca0191cdd1a83.webp',
      'https://img.cofynd.com/images/latest_images_2024/7c1cd375e6a49cccf05fba3d597c8fc5121b4f51.webp',
      'https://img.cofynd.com/images/latest_images_2024/61b1cdc65d58a9a0fb85fb7b743ea60ac6d67660.webp',
      'https://img.cofynd.com/images/original/c2d2839500d063035ab61b50e986cda5cc58edd2.jpg'
    ]
  },
  {
    id: 44,
    name: 'Qhub',
    badge: 'Popular',
    rating: 4.3,
    area: 'Madhapur',
    location: 'Road No. 36 & 37, beside Madhapur Metro Station, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8672985955626634728',
    images: [
      'https://img.cofynd.com/images/original/c28ff56bf51def1775856f5631f999fa44a69020.jpg',
      'https://img.cofynd.com/images/latest_images_2024/61f3d6536098794c61dc4d7a128db5ea0e004150.webp',
      'https://img.cofynd.com/images/original/c7cb5a81f6b2537f0c650c0cfaf64be6e64784f0.jpg',
      'https://img.cofynd.com/images/original/07b6abfd58f7a9940516c1bb7a278ca37235ddae.jpg'
    ]
  },
  {
    id: 45,
    name: 'Coworking 24',
    badge: 'Popular',
    rating: 4.3,
    area: 'Jubilee Hills',
    location: 'Plot No. 1097, Road No. 36, near Peddamma Temple, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1643233057903159594',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f336f389de4834662cfd77a97a535945a96d82af.webp',
      'https://img.cofynd.com/images/latest_images_2024/12af457daf1d9510e174e2aed3ed1206a30b52ce.webp',
      'https://img.cofynd.com/images/original/427f562b690e8d1ffb44ed1aada143150c837c3c.jpg',
      'https://img.cofynd.com/images/latest_images_2024/d16e644895e0605e9376def7ee80a582b114db6a.webp'
    ]
  },
  {
    id: 46,
    name: 'Rent A Desk',
    badge: 'Popular',
    rating: 4.3,
    area: 'Hitec City',
    location: 'RAM SVR, Plot No 4/2, Sector 1, HUDA Techno Enclave, Hi-Tec City, Madhapur, Hyderabad, Telangana 500081',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6326855249078680311',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f448a4779fd93e8592b491341022acfdd804263e.webp',
      'https://img.cofynd.com/images/latest_images_2024/cfecef8170eba126501d393aa3ac0cd1539f23bf.webp',
      'https://img.cofynd.com/images/latest_images_2024/e056b37648d5f994446b8b882863d07605cc34e5.webp',
      'https://img.cofynd.com/images/original/7e5d3f65e11f2fec63138970c2f7f2d52cd1d729.jpg'
    ]
  },
  {
    id: 47,
    name: 'Rent A Desk Mindspace',
    badge: 'Popular',
    rating: 4.3,
    area: 'Madhapur',
    location: 'Plot No. 37 & 38, Serenity Square, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9438919512733630701',
    images: [
      'https://img.cofynd.com/images/original/e79ed2a24bac406e8350f90d207a148e4584e359.jpg',
      'https://img.cofynd.com/images/latest_images_2024/e1577f4a2100884d32e35d765c483310fa53f704.webp',
      'https://img.cofynd.com/images/original/4f31328f7e8a6210318a1bc59db4d0073b34413f.jpg',
      'https://img.cofynd.com/images/latest_images_2024/e29c12c680ac4fb2e5d94aa66392c1c0c7970760.webp'
    ]
  },
  {
    id: 48,
    name: 'Euro Space',
    badge: 'Popular',
    rating: 4.9,
    area: 'Gachibowli',
    location: 'Jyothi Imperial, Janardana Hills, P Janardhan Reddy Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4119728592405867802',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/51fb31a96c58701e690c1f6b0a6278eb5a20c209.webp',
      'https://img.cofynd.com/images/latest_images_2024/8710fdb4db2e8f7bbba48b6b94c75396f6c23646.webp',
      'https://img.cofynd.com/images/latest_images_2024/c90340a60efd7ab47549feceb8361fae32a3737b.webp',
      'https://img.cofynd.com/images/latest_images_2024/3cf84622b8197bb0fd3d163dbcd3f98cb989a33b.webp'
    ]
  },
  {
    id: 49,
    name: 'Rent A Desk',
    badge: 'Popular',
    rating: 4.4,
    area: 'Jubilee Hills',
    location: '5th Floor, Babukhan Rasheed Plaza, Plot No. 682, Road No. 36, Aditya Enclave, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16816495750301267716',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/77318f401d39e8cff9a755a49de1b6c66cc437bf.webp',
      'https://img.cofynd.com/images/latest_images_2024/68ba4d7ca0a6cfadbac9cc59fc27a36445cebd86.webp',
      'https://img.cofynd.com/images/latest_images_2024/b39e9494e30068fe8fb904f8d7db4ed42a179060.webp',
      'https://img.cofynd.com/images/original/6bcdf67ba428d94da8060ba71b22911bd6d24d3b.jpg'
    ]
  },
  {
    id: 50,
    name: 'Alien Work Hub',
    badge: 'Popular',
    rating: 4.9,
    area: 'Kukatpally',
    location: 'Unit 406, 4th Floor, Manjeera Trinity Corporate, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9896923479013034457',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/04461119ebd09458090623dfcdfe913960655bf3.webp',
      'https://img.cofynd.com/images/latest_images_2024/a7695684c4a0b3cee5576aabc74e05bb9ed5eae9.webp',
      'https://img.cofynd.com/images/latest_images_2024/4fdb66a66483b673061b960198cd8bbd1934c7da.webp',
      'https://img.cofynd.com/images/latest_images_2024/fe6f7b20db88be4cdfa0a9a7010a1b08d0beca47.webp'
    ]
  },
  {
    id: 51,
    name: 'One Day Coworking Labs',
    badge: 'Special Offer',
    rating: 4.9,
    area: 'Gachibowli',
    location: '5th Floor, DLF Cyber City, APHB Colony, Indira Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹3,999',
    period: '/ month',
    priceFormatted: '₹3,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4383142836699921608',
    images: [
      'https://img.cofynd.com/images/original/4e91abf4e382dbb686e913b80630f97a9ba55b4d.jpg',
      'https://img.cofynd.com/images/original/1d75e0e855e86c3eaa9cfaddeee860182b7cb957.jpg',
      'https://img.cofynd.com/images/original/88d5ad0b310ec7c3aa437605af4e5b085bcaad54.jpg',
      'https://img.cofynd.com/images/latest_images_2024/847dfba163bbea053ed24da932367bca4f6592b0.webp'
    ]
  },
  {
    id: 52,
    name: 'Inkube',
    badge: 'Popular',
    rating: 4.2,
    area: 'Gachibowli',
    location: '5th Floor, Oak Plaza, 1-61/SO/502 & 504, Khajaguda - Nanakramguda Rd, Chaitanya Enclave, Gachibowli, Hyderabad, Telangana 500104',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15420223676637693458',
    images: [
      'https://img.cofynd.com/images/original/93604cef50e341d3349158d17a627ea5fafdf063.jpg',
      'https://img.cofynd.com/images/original/0578746d7bbe0237e9cf3484a2c42bc90d123987.jpg',
      'https://img.cofynd.com/images/original/4da7d86553a54a06741387904f5e79ac4a53af80.jpg',
      'https://img.cofynd.com/images/original/fb43a996cc8706edb8e55c2415cb9d5d82cea4b8.jpg'
    ]
  },
  {
    id: 53,
    name: 'DevX',
    badge: 'Popular',
    rating: 4.8,
    area: 'Hitec City',
    location: '4th Floor, Purva Summit, Kondapur, Whitefields, HITEC City, Hyderabad, Telangana 500081',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15272950277111080949',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/b9949956f7c878921364a361f47945bea3cee83b.webp',
      'https://img.cofynd.com/images/latest_images_2024/2a24777bffe6e44e117e228362c1e65def0a1533.webp',
      'https://img.cofynd.com/images/latest_images_2024/c58c6546c042f280d4ad45e9a50548387958b328.webp',
      'https://img.cofynd.com/images/latest_images_2024/28d8510fb074de50c6ca2507b1fd60dedf4ab318.webp'
    ]
  },
  {
    id: 54,
    name: 'Autonetic Space',
    badge: 'Special Offer',
    rating: 4.5,
    area: 'Hitec City',
    location: 'Hitec City, Hyderabad',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.442361,78.374656',
    images: [
      'https://img.cofynd.com/images/original/d605e81bb6e3bc372cd2eae53579b92444797156.jpg',
      'https://img.cofynd.com/images/original/afb71d352263da85d60cad7753581598f36e454e.jpg',
      'https://img.cofynd.com/images/latest_images_2024/53efccb96c5a22eeebc4feb4f9ce768f49793f18.webp',
      'https://img.cofynd.com/images/original/71e5d0e125f62a71ac19dc9bf80287fefb833a2b.jpg'
    ]
  },
  {
    id: 55,
    name: 'WellWork MPM Corporate House',
    badge: 'Popular',
    rating: 4.8,
    area: 'Gachibowli',
    location: '5th Floor, MPM Corporate House, Plot No. 44, Jayabheri Pine Valley, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13292803086606433889',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/21a760840b3cdb736eed7fbb81120835975b7b3e.webp',
      'https://img.cofynd.com/images/latest_images_2024/e6bb3ef0c239da9bba47663d6b2b71339ef83e2c.webp',
      'https://img.cofynd.com/images/latest_images_2024/815184c8353a7d696a0b6cfdbc37ea009d5d90ba.webp',
      'https://img.cofynd.com/images/latest_images_2024/a3e0b22b22619f730bd7de51f10958a1ddf411f2.webp'
    ]
  },
  {
    id: 56,
    name: 'Unispace',
    badge: 'Special Offer',
    rating: 4.2,
    area: 'Gachibowli',
    location: 'Gachibowli, Hyderabad',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.436831,78.367207',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/23e7a3bc13846bde355c5f3b5c996830c4aa56e8.webp',
      'https://img.cofynd.com/images/original/19f48c9d78d594e6818ad75235b9496b56964645.jpg',
      'https://img.cofynd.com/images/original/e9944eb0ba9c732d6da9c642690e7a6fef21f050.jpg',
      'https://img.cofynd.com/images/original/1946316516bfb6db33c376a475bf2dacb956da3f.jpg'
    ]
  },
  {
    id: 57,
    name: 'Work Wild',
    badge: 'Popular',
    rating: 5.0,
    area: 'Gachibowli',
    location: '6th Floor, Navayuga Vizva, Survey No. 4,5,6, 1/E, Rajiv Gandhi Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5107968291087983663',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/6ea46cbc74d181359cb9022d519d1153dec7cb49.webp',
      'https://img.cofynd.com/images/latest_images_2024/bcc50ed7ed7b0298efe5f31a3d06f47dcef8202b.webp',
      'https://img.cofynd.com/images/latest_images_2024/977d2ba49428518070391659b515cfc2b164ebb9.webp',
      'https://img.cofynd.com/images/latest_images_2024/1debaa05bdcd69c079e96f858bae4070110dc3f9.webp'
    ]
  },
  {
    id: 58,
    name: 'TEC Salarpuria Knowledge City',
    badge: 'Premium',
    rating: 4.6,
    area: 'Hitec City',
    location: 'Level 7-8, Octave Block, Salarpuria Sattva Knowledge City, Hitech City Rd, Rai Durg, Hyderabad, Telangana 500032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11726088352723803338',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/1a036196b5f49addb570140368eba9ba503bd605.webp',
      'https://img.cofynd.com/images/latest_images_2024/54fc1bb1d3cc3fabbe0be7ded27526d2007b8378.webp',
      'https://img.cofynd.com/images/latest_images_2024/b404f099703875bc98e7d0b8f112cb041f92931b.webp',
      'https://img.cofynd.com/images/latest_images_2024/2be10179738f9a815546a11bd90a9d4a4a05d748.webp'
    ]
  },
  // CHECK: Maps listing is an IT company office, not tagged as coworking; no badge/rating on your card
  {
    id: 59,
    name: 'Enlume Technologies Pvt.Ltd',
    badge: null,
    rating: null,
    area: 'Nagole',
    location: 'Plot No. 19 & 20, Road No. 1, Shivani Nagar Colony, Vijaya Gardens, Nagole, Hyderabad, Telangana 500068',
    price: '₹10,000',
    period: '/ year',
    priceFormatted: '₹10,000 / year',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4370628572697052554',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/4b9a957754c5c4cdfd6cf16583f334b22696609e.webp',
      'https://img.cofynd.com/images/latest_images_2024/d0c53f5303324bc54688001bcafaee386f9db8f4.webp',
      'https://img.cofynd.com/images/latest_images_2024/e40ed664aee6b302a4003bfa17b52d0a5cb0a0fa.webp',
      'https://img.cofynd.com/images/latest_images_2024/813a5a855f24b233ee0d90ab2d7ee426231d80bd.webp'
    ]
  },
  {
    id: 60,
    name: 'Lorven Smart spaces',
    badge: 'Popular',
    rating: 4.9,
    area: 'Gachibowli',
    location: '2nd Floor, Vaishnavi\'s Cynosure, Telecom Nagar Extension, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10682465508281460252',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/300bc6d3010bd8d57366c46be43e06fb7a0e195f.webp',
      'https://img.cofynd.com/images/latest_images_2024/844455b5a57724d587dfc54c51f640322231d8a3.webp',
      'https://img.cofynd.com/images/latest_images_2024/4328a7be29125a4fbf9975970c61203db7926aee.webp',
      'https://img.cofynd.com/images/latest_images_2024/b3dc810076946c666b5766df4bf2f7bca03c45cc.webp'
    ]
  },
  {
    id: 61,
    name: 'The Hive',
    badge: 'Popular',
    rating: 4.2,
    area: 'Gachibowli',
    location: 'Corporate Capital, next to Sheraton Hyderabad Hotel, Financial District, Nanakramguda, Telangana 500032',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14195552941024254275',
    images: [
      'https://img.cofynd.com/images/original/aef2b2a26689f5a2dc832c63a1e565d58ff7eac5.jpg',
      'https://img.cofynd.com/images/original/2306cb1eff8a4232b9903ddd941a8a3a8278134d.jpg',
      'https://img.cofynd.com/images/original/69aaa27d36c561bc60b41040ac9ef00d098419e3.jpg',
      'https://img.cofynd.com/images/original/f8fc392cd5d187886b5fc959bc0a9b2238e51280.jpg'
    ]
  },
  {
    id: 62,
    name: 'CoHive Workspace',
    badge: 'Popular',
    rating: 4.9,
    area: 'Shaikpet',
    location: '2nd Floor, E/10, Aparna Astute, 8-1-293, Old Mumbai Hwy, Shaikpet, Hyderabad, Telangana 500096',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16991332781816669071',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/417fb8a7abff0cb6374d9cace6421fceffd1371d.webp',
      'https://img.cofynd.com/images/latest_images_2024/c0cd263958637a93445474160470fbce202e5163.webp',
      'https://img.cofynd.com/images/latest_images_2024/42e5e5ec75060edc1d7387fc11a6d5117b6a2228.webp',
      'https://img.cofynd.com/images/latest_images_2024/8cff8c5e364b6bc53a066a4c9f5b8e80f2a8c382.webp'
    ]
  },
  {
    id: 63,
    name: 'Matrix IT Hub',
    badge: 'Popular',
    rating: 4.4,
    area: 'Kukatpally',
    location: 'Shanthi Nilayam, MIG 648, near Temple Bus Stop, KPHB Phase 2, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12344402414767440633',
    images: [
      'https://img.cofynd.com/images/original/6701eb54bb374288a7e138951b3656c96ecd49f4.jpg',
      'https://img.cofynd.com/images/original/ddbbc264b2664e3c1d72c5cad90964191926473a.jpg',
      'https://img.cofynd.com/images/original/6b5a5bb4ca2b44ec57c9817111ed4156288996ae.jpg',
      'https://img.cofynd.com/images/original/e33ec06d303a3fe479e667234e59f432f91717a1.jpg'
    ]
  },
  {
    id: 64,
    name: 'Awfis Sarvotham',
    badge: 'Popular',
    rating: 4.3,
    area: 'Hitec City',
    location: 'Sarvotham, Plot No. 12, Deloitte Dr, Phase 2, HITEC City, Hyderabad, Telangana 500081',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3873141257933285359',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/4ebd4ad39ef4645f1431aa7f76b174ca32f2a8a3.webp',
      'https://img.cofynd.com/images/latest_images_2024/71f62515ec59105c8310ad098ba65fa44a58c819.webp',
      'https://img.cofynd.com/images/latest_images_2024/6550955a4036fbd826282f0d13e5cac04240f9c0.webp',
      'https://img.cofynd.com/images/latest_images_2024/ccd7254fcc8ff002d2d011f2dc5f5306e1621505.webp'
    ]
  },
  {
    id: 65,
    name: 'Nallas Spark',
    badge: 'Popular',
    rating: 4.8,
    area: 'Banjara Hills',
    location: '8-2-350/3 C/2, Devarkonda Basti Road, Road No. 3, Green Valley, Banjara Hills, Hyderabad, Telangana 500034',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1644007677573665895',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/048231e48dafa77bda69d3217cbd5efa94d95c78.webp',
      'https://img.cofynd.com/images/latest_images_2024/f8d4c3c894df351bf098aed4e76b9b96afad6fa8.webp',
      'https://img.cofynd.com/images/latest_images_2024/3ded9597393b379dd74679df995377309e44c0fd.webp',
      'https://img.cofynd.com/images/latest_images_2024/bebf4a01e8597fd6a87d59b4bd00388effd88e12.webp'
    ]
  },
  {
    id: 66,
    name: 'iSprout Sohini Tech Park',
    badge: 'Popular',
    rating: 4.6,
    area: 'Gachibowli',
    location: '8th & 9th Floor, Sohini Tech Park, Survey No. 142, Nanakramguda, Financial District, Hyderabad, Telangana 500032',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=446747466504548351',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/687879160f5c409068290e8f6299757b8111e168.webp',
      'https://img.cofynd.com/images/latest_images_2024/177a60c00fbb593443cd4968249a12a2bbeb98a5.webp',
      'https://img.cofynd.com/images/latest_images_2024/3b01814c295efaa5f142d08badd8b06ca4af2a87.webp',
      'https://img.cofynd.com/images/latest_images_2024/6beef382d4a06d135a32f3898c0268fb36a4babc.webp'
    ]
  },
  {
    id: 67,
    name: 'Awfis Prestige Skytech',
    badge: 'Popular',
    rating: 4.8,
    area: 'Financial District',
    location: '16th Floor, Prestige Skytech, Financial District, Nanakramguda, Hyderabad, Telangana 500032',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3403082449006230353',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/b8b2e82cc88452e1e200e7895971a8ad5d99a941.webp',
      'https://img.cofynd.com/images/latest_images_2024/7ea7cc60b65b949e066e973e56399ed7890989b8.webp',
      'https://img.cofynd.com/images/latest_images_2024/7dfaf28a5cf0cfa7f2359b48b7862c4dfcd2419d.webp',
      'https://img.cofynd.com/images/latest_images_2024/0167dc26e8137fb6671fed7466003499e080ef27.webp'
    ]
  },
  {
    id: 68,
    name: 'Awfis Laxmi Cyber City',
    badge: 'Premium',
    rating: 4.8,
    area: 'Hitec City',
    location: '7th & 8th Floor, Block C, Laxmi Cyber City, Kondapur, Whitefields, HITEC City, Hyderabad, Telangana 500084',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8101034979992877860',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/eccff5683abbada31ef04313cd4cd134ce13687b.webp',
      'https://img.cofynd.com/images/latest_images_2024/11bec46892a68831fde2461482aff7acf4b4876c.webp',
      'https://img.cofynd.com/images/latest_images_2024/c2d2f12db4cf5ff4a1ba95b0d8ae2f52728d128e.webp',
      'https://img.cofynd.com/images/latest_images_2024/d9599922b5bc5cff28c490c8e2014a0473cce87a.webp'
    ]
  },
  {
    id: 69,
    name: 'Awfis NSL ICON',
    badge: 'Popular',
    rating: 4.4,
    area: 'Banjara Hills',
    location: 'NSL Icon, Road No. 12, Anand Banjara Colony, Banjara Hills, Hyderabad, Telangana 500028',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18191068146545397652',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/229a7eac253f02ea52ac92bc1d0a7599698de8b9.webp',
      'https://img.cofynd.com/images/latest_images_2024/fa094a4203b2399df62b70d2cf089ebcc8b6a072.webp',
      'https://img.cofynd.com/images/latest_images_2024/206ea22238fce9e5e567f1f9976ed3905b662af9.webp',
      'https://img.cofynd.com/images/latest_images_2024/1181f1d59475e6aa2e27134d938fb41cacefd1fb.webp'
    ]
  },
  {
    id: 70,
    name: 'Awfis DSL Abacus IT Park',
    badge: 'Premium',
    rating: 4.9,
    area: 'Uppal',
    location: '7th Floor, DSL Abacus IT Park, Survey Colony, IDA Uppal, Hyderabad, Telangana 500039',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17726194110001474505',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/27dbd207a40af6ab7987b153bacbbf63f60f15bb.webp',
      'https://img.cofynd.com/images/latest_images_2024/c703a45b35dc5b76eccb3590ceddc6cbf507d864.webp',
      'https://img.cofynd.com/images/latest_images_2024/1a9bdf2b5fc5f72c3d194e77cd93a1ee567e9c17.webp',
      'https://img.cofynd.com/images/latest_images_2024/37420bc368b5dae7f1d9a8aa53eb1babaee4c777.webp'
    ]
  },
  {
    id: 71,
    name: 'Awfis Rajapushpa Summit',
    badge: 'Popular',
    rating: 4.7,
    area: 'Gachibowli',
    location: '5th Floor, Rajapushpa Summit, ISB Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10774990012639854890',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/534c67210ed6952b6446b92e8a7eb5cb2ce9d1c8.webp',
      'https://img.cofynd.com/images/latest_images_2024/841185a50c859f1680057ee8fac2c3440fb2bca8.webp',
      'https://img.cofynd.com/images/latest_images_2024/60850897036909bf9e61507d0fb69220781496ed.webp',
      'https://img.cofynd.com/images/latest_images_2024/217d7c5b2f163f9490a6df3d44a82b565b0564f0.webp'
    ]
  },
  {
    id: 72,
    name: 'VCollab Spaces',
    badge: 'Popular',
    rating: 4.9,
    area: 'Madhapur',
    location: '502B, Jain Sadguru Images Capital Park, Capital Park Rd, VIP Hills, Madhapur, Hyderabad, Telangana 500081',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9603387333758165177',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/42398e7f5da5357e02b30dc16ce4bd2fff5b5344.webp',
      'https://img.cofynd.com/images/latest_images_2024/bdc339dce8be1f7c17f70d60a7f7fb30c22515cf.webp',
      'https://img.cofynd.com/images/latest_images_2024/e217e9653ce7157ab5305070aab4efe1c84741da.webp',
      'https://img.cofynd.com/images/latest_images_2024/b05ed365530559acb244d40d9b093f3376790e5d.webp'
    ]
  },
  {
    id: 73,
    name: 'V Quartet',
    badge: 'Popular',
    rating: 5.0,
    area: 'Kukatpally',
    location: '703, 7th Floor, Manjeera Trinity Corporate, eSeva Ln, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15077627226700183205',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f4cb3a0a61229b6ef75fd51a8f9c361ddcaa18e8.webp',
      'https://img.cofynd.com/images/latest_images_2024/6efa611c6116f54c49208ff0907abcd5f99106f1.webp',
      'https://img.cofynd.com/images/latest_images_2024/075b7c6d176265290c5ac1f4ac57b4456bf3bd19.webp',
      'https://img.cofynd.com/images/latest_images_2024/362757e0a6d58d2de66bdbd59d883c692fa5531a.webp'
    ]
  },
  {
    id: 74,
    name: 'Wellwork Space',
    badge: 'Popular',
    rating: 4.5,
    area: 'Ameerpet',
    location: 'WellWork, Plot No. 8-3-323, X Roads, Ameerpet, Yella Reddy Guda, Hyderabad, Telangana 500073',
    price: '₹10,999',
    period: '/ month',
    priceFormatted: '₹10,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12056890681026454876',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/8e46972f829b62ced5008a153993c061343895c7.webp',
      'https://img.cofynd.com/images/latest_images_2024/1a88376000210a8ff05461e8a4b568efa32b1741.webp',
      'https://img.cofynd.com/images/latest_images_2024/24d8a95a6d1c3e08932a866a19af8ed1f47dfe6c.webp',
      'https://img.cofynd.com/images/latest_images_2024/657cf907df2cd8ef879d4dbe6930720dad8efc5b.webp'
    ]
  },
  {
    id: 75,
    name: 'Awfis N Heights',
    badge: 'Popular',
    rating: 4.3,
    area: 'Hitec City',
    location: 'Level 1, 4 and 6, N-Heights, Plot No. 38, Phase 2, HITEC City, Hyderabad, Telangana 500081',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15113381347321784602',
    images: [
      'https://img.cofynd.com/images/original/5caf0899b69e1b92ce2077a59e6fe3bf176bc430.jpg',
      'https://img.cofynd.com/images/original/c1ba04cb17ddb979932d1da5cff815372058e66b.jpg',
      'https://img.cofynd.com/images/original/075b26030a27776888bfb4e4afd3447950263b0f.jpg',
      'https://img.cofynd.com/images/original/360c9c7f6aab2a512b4ad709d6bd43e5fa70197a.jpg'
    ]
  },
  {
    id: 76,
    name: 'Workwild Innovative',
    badge: 'Popular',
    rating: 4.5,
    area: 'Kondapur',
    location: '2nd Floor, Jyothi Pinnacle, Hitech City Rd, Kondapur, Laxmi Cyber City, Whitefields, Hyderabad, Telangana 500084',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5716707303385059509',
    images: [
      'https://img.cofynd.com/images/original/9b095985b807fe35c0743b8bd8ee43ffc1c9c889.jpg',
      'https://img.cofynd.com/images/original/7d22108b5a3bc1ef20e7859d309e4c560fda117f.jpg',
      'https://img.cofynd.com/images/latest_images_2024/fb55a3fbd80bd3cb8aa7bdfa48a7f31d4d294d0f.webp',
      'https://img.cofynd.com/images/original/7870aa22ebd182757818e98a8080fe5113a95408.jpg'
    ]
  },
  {
    id: 77,
    name: 'GROWORK Coworking',
    badge: 'Popular',
    rating: 4.3,
    area: 'Financial District',
    location: '4th Floor, ISB Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3747347229323647779',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/db96f7d9a4df609b80955d6e96792453eb7b618f.webp',
      'https://img.cofynd.com/images/latest_images_2024/8bd10ced10d6d641ba093c6a8945c684b0271e7b.webp',
      'https://img.cofynd.com/images/latest_images_2024/d7ac991936d8968663dadd0afb4809b561c42711.webp',
      'https://img.cofynd.com/images/latest_images_2024/b712a9fe30fb872e4f9a8ef124685efb94660893.webp'
    ]
  },
  {
    id: 78,
    name: 'Geek Space Business Centre',
    badge: 'Popular',
    rating: 4.0,
    area: 'Kukatpally',
    location: '12th Floor, Manjeera Trinity Corporate, eSeva Ln, JNTU - Hitech City Rd, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13316634591917907032',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/36d4106c8834e220942cd458549fe1ca3047568b.webp',
      'https://img.cofynd.com/images/latest_images_2024/53c614c4d74867da700a352ae1a9fe90d5325b62.webp',
      'https://img.cofynd.com/images/latest_images_2024/820c9080dd8e51ceb92ce10b36bad9674a834ab6.webp',
      'https://img.cofynd.com/images/latest_images_2024/3a43131ba62fa7bbaf1f30cb5b81f374060d5fee.webp'
    ]
  },
  // CHECK: matched the main Hive Space listing (name + 4.7 rating match), but Maps places it in Kondapur, not Hitec City
  {
    id: 79,
    name: 'Hive Space Business Centre',
    badge: 'Popular',
    rating: 4.7,
    area: 'Hitec City',
    location: 'G-Floor, Modern Profound Tech Park, Whitefield Rd, Kondapur, Whitefields, Hyderabad, Telangana 500084',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4971099867963894381',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/72666157505972691f817597722a135d4451f1d4.webp',
      'https://img.cofynd.com/images/latest_images_2024/0497749355ea07c0cbd8be1bc2c109b5b0707dfa.webp',
      'https://img.cofynd.com/images/latest_images_2024/42c951a373950daed6eced2e8b40451e3fe93fc4.webp',
      'https://img.cofynd.com/images/latest_images_2024/ead9a2a2d25a408d4d842f971f33d01bba33b13c.webp'
    ]
  },
  {
    id: 80,
    name: 'EFC Offices Jayabheri Silicon Towers',
    badge: 'Popular',
    rating: 4.5,
    area: 'Kondapur',
    location: '5th Floor, DHFL VC, Jayabheri Silicon Towers, Hitech City Rd, Kondapur, Kothaguda, Hyderabad, Telangana 500084',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17528677072460908812',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/0f4917fd7a4c168e6b7fbfe1bd596366a91b51a1.webp',
      'https://img.cofynd.com/images/latest_images_2024/7b01225f4820db8d713d67e861e495cff5387776.webp',
      'https://img.cofynd.com/images/latest_images_2024/a78b24e8c64cef3f6d28b4577116b827bbfc06c4.webp',
      'https://img.cofynd.com/images/latest_images_2024/0d5c1cb6c890ae523ae98d540d7db8bbce29abf6.webp'
    ]
  },
  {
    id: 81,
    name: 'Trendz Durgam Cheruvu',
    badge: 'Popular',
    rating: 4.5,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹8,499',
    period: '/ month',
    priceFormatted: '₹8,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.442938,78.388186',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/697eda6b319d91cd30eae694beed0df7cbefea95.webp',
      'https://img.cofynd.com/images/latest_images_2024/d3727e7fd31afca9d47c184a73027f8ad5394ce4.webp',
      'https://img.cofynd.com/images/latest_images_2024/5025bcca358a43ec9165162fa238b2595716ee8f.webp',
      'https://img.cofynd.com/images/latest_images_2024/bed415f1d507e1ea2ceb7b8ce33ffb8180288d80.webp'
    ]
  },
  {
    id: 82,
    name: 'Elite Work Hub',
    badge: 'Popular',
    rating: 5.0,
    area: 'Banjara Hills',
    location: 'Level 1, am@10, MB Towers, Road No. 10, Avenue 4, Banjara Hills, Hyderabad, Telangana 500034',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=440019104161154706',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/34c93eb7c8747ad60e2e8a4f180acd984a43302b.webp',
      'https://img.cofynd.com/images/latest_images_2024/42a2f3e82004aba40651fbb715e418971be18b38.webp',
      'https://img.cofynd.com/images/latest_images_2024/65b05df70dd8ef833284a6623baba5c279b0d1e0.webp',
      'https://img.cofynd.com/images/latest_images_2024/4d918c38c9f56f879cb013bbba7df7eb13063d08.webp'
    ]
  },
  {
    id: 83,
    name: 'Redbrick Offices',
    badge: 'Popular',
    rating: 4.1,
    area: 'Financial District',
    location: 'ICAI Centre of Excellence, 10 & 11, Road No. 2, Financial District, Nanakramguda, Telangana 500032',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11857473561098162302',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/81cb38589f9b7ad6fb41a57dd6fb95128d34dc01.webp',
      'https://img.cofynd.com/images/latest_images_2024/054171847b4b536ae56c9532b63947b6f506716c.webp',
      'https://img.cofynd.com/images/latest_images_2024/cb62b341cfa135557c308362ef78ad6048bbe986.webp',
      'https://img.cofynd.com/images/latest_images_2024/9069b6e0902ab80ac042ae2b48ca1c7a687ce58a.webp'
    ]
  },
  {
    id: 84,
    name: 'Hive Space 2.0',
    badge: 'Popular',
    rating: 4.5,
    area: 'Hitec City',
    location: 'Ramalayam Rd, Kondapur, Laxmi Cyber City, Whitefields, HITEC City, Hyderabad, Telangana 500084',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7439448667164796219',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/c1aba11a98585847b1a3531c6fd7b14e69761e90.webp',
      'https://img.cofynd.com/images/latest_images_2024/893252e3ddcbbba9704001cb258ad9ea1bd7f17f.webp',
      'https://img.cofynd.com/images/latest_images_2024/ed5343d9e512290fb891f60aaec4369b73ccd36c.webp',
      'https://img.cofynd.com/images/latest_images_2024/2f34971aae6c0fcb240dad0d884a18893c434d92.webp'
    ]
  },
  {
    id: 85,
    name: 'Regus Phoenix Tech Tower',
    badge: 'Popular',
    rating: 4.0,
    area: 'Uppal',
    location: '3rd Floor, Phoenix Towers, Genpact Rd, Uppal, Hyderabad, Telangana 500039',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12524914044068216428',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f5cbce5d8966a7f0a572d445354525ab8cb01ea9.webp',
      'https://img.cofynd.com/images/latest_images_2024/677a8e03820144fcd818481c96730e822c1532fd.webp',
      'https://img.cofynd.com/images/latest_images_2024/25e77ec2878bc14594fad093cda93f3c7e045e45.webp',
      'https://img.cofynd.com/images/latest_images_2024/0466cdcda098d4c4261689221d03e83fd9abf5ea.webp'
    ]
  },
  {
    id: 86,
    name: 'Regus Manjeera Trinity',
    badge: 'Popular',
    rating: 3.9,
    area: 'Kukatpally',
    location: 'Unit No. 810-811, Manjeera Trinity Corporate, Survey No. 1050, JNTU Rd, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹11,499',
    period: '/ month',
    priceFormatted: '₹11,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=3354306477961076309',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/3eb174fe6792131536195f61f502a7d288039683.webp',
      'https://img.cofynd.com/images/latest_images_2024/a6bd7f706d9577c28b42ba528a74b6707d405c27.webp',
      'https://img.cofynd.com/images/latest_images_2024/998dd24f8a47d1240421fbe743539b3a927c6d33.webp',
      'https://img.cofynd.com/images/latest_images_2024/37a0133ff427900d5545ff2a62338a6784aa37d2.webp'
    ]
  },
  {
    id: 87,
    name: 'Redbrick Offices Salarpuria',
    badge: 'Popular',
    rating: 4.7,
    area: 'Hitec City',
    location: 'Level 1, Parcel 4, Octave Block, Salarpuria Sattva Knowledge City, Rai Durg, Hyderabad, Telangana 500032',
    price: '₹14,999',
    period: '/ month',
    priceFormatted: '₹14,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1076700495648742977',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/08ab09ef40973d569cd64eb3ae689c8017bb0261.webp',
      'https://img.cofynd.com/images/latest_images_2024/92c2cc116e61a091a7afb68e2fe769440552865c.webp',
      'https://img.cofynd.com/images/latest_images_2024/69a0b0e5adff7d35e96d0af5a08db14b56957d21.webp',
      'https://img.cofynd.com/images/latest_images_2024/70bcb9d502ff9aeaca6dd2abe9adbfe38003d912.webp'
    ]
  },
  {
    id: 88,
    name: 'Regus MyScape Weave',
    badge: 'Popular',
    rating: 3.7,
    area: 'Financial District',
    location: 'Road No. 1, behind Continental Hospitals, Financial District, Nanakramguda, Hyderabad, Telangana 500032',
    price: '₹59,999',
    period: '/ month',
    priceFormatted: '₹59,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14221952262106500160',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/185aeb87ba625240c5000c3756dddf4714a147ee.webp',
      'https://img.cofynd.com/images/latest_images_2024/62c68e06ef3242e86bdc7ea94a5a971ed5b96931.webp',
      'https://img.cofynd.com/images/latest_images_2024/cbd31912696fe487a51dc10e87945dc9e531a291.webp',
      'https://img.cofynd.com/images/latest_images_2024/e73084dfc7c63131a8462b2de1fd3fa54d2a4537.webp'
    ]
  },
  {
    id: 89,
    name: 'Regus Gumidelli Towers',
    badge: 'Popular',
    rating: 3.9,
    area: 'Begumpet',
    location: 'Level 4, Gumidelli Towers 1, Old Airport Rd, Old Patigadda, Prakash Nagar, Begumpet, Hyderabad, Telangana 500016',
    price: '₹16,499',
    period: '/ month',
    priceFormatted: '₹16,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16472219549808720826',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/a3ccda672bb4662c991d69e3471bb762b30662d8.webp',
      'https://img.cofynd.com/images/latest_images_2024/c5f889fd820ba45142f25bfd85ae6681424bb76f.webp',
      'https://img.cofynd.com/images/latest_images_2024/ba35eb16592810b023aeacc806f2262ff62fd9eb.webp',
      'https://img.cofynd.com/images/latest_images_2024/d75813eb523fa8062eefe8b4d972a21a1a42b3fa.webp'
    ]
  },
  {
    id: 90,
    name: 'Regus Acendia Arc',
    badge: 'Premium',
    rating: 4.0,
    area: 'Jubilee Hills',
    location: 'Jubilee Hills, Hyderabad',
    price: '₹59,999',
    period: '/ month',
    priceFormatted: '₹59,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.456975,78.370469',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/57b9c333505fa25f7937120657c4408268788b40.webp',
      'https://img.cofynd.com/images/latest_images_2024/014d45c6a67d46aa95b28216d9a78806f2ba618e.webp',
      'https://img.cofynd.com/images/latest_images_2024/c62475db6721ceb3dd088c1b799fb612523422fe.webp',
      'https://img.cofynd.com/images/latest_images_2024/3c511ef99ce13ed642bdfb0abfb65d6a308b83aa.webp'
    ]
  },
  {
    id: 91,
    name: 'Regus',
    badge: 'Special Offer',
    rating: 3.5,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹59,999',
    period: '/ month',
    priceFormatted: '₹59,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.472301,78.410995',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/79c234d4678bd020c597914e844c2988d33e93cd.webp',
      'https://img.cofynd.com/images/latest_images_2024/600fc16e4ce287acaf5170bb77e409effe4b7fd7.webp',
      'https://img.cofynd.com/images/latest_images_2024/c81263b107152ba4dbaad7c8cf35a2ca51ccdcb1.webp',
      'https://img.cofynd.com/images/latest_images_2024/b430e73321ac067a2ebce43055ddbe7793d45be2.webp'
    ]
  },
  {
    id: 92,
    name: 'Spacion Business Centre',
    badge: 'Popular',
    rating: 4.1,
    area: 'Hitec City',
    location: 'Level 1, Spacion Towers, next to The Westin Hotel Road, Vittal Rao Nagar, HITEC City, Hyderabad, Telangana 500081',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10015576475245174027',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/028651cefa8d9755d1837ad8da7569c333e45f30.webp',
      'https://img.cofynd.com/images/latest_images_2024/fa29772e728b5531f375f5aa50cfa3404a1192d5.webp',
      'https://img.cofynd.com/images/latest_images_2024/599817e20966c5df2b83ed6967447de9d32c734f.webp',
      'https://img.cofynd.com/images/latest_images_2024/88d6136f179609bae36666eedb2ad66e7633d418.webp'
    ]
  },
  {
    id: 93,
    name: 'Mahaveer Gateway',
    badge: null,
    rating: null,
    area: 'Financial District',
    location: '12th Floor, Mahaveer Gateway, Madhava Reddy Colony, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹9,499',
    period: '/ month',
    priceFormatted: '₹9,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=4041326348622145142',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/abb05bce22c601e4685a8a555027a5aa1e47aa5f.webp',
      'https://img.cofynd.com/images/latest_images_2024/74292fc02c5a447ecd8e19436af5ecc23df3c69e.webp',
      'https://img.cofynd.com/images/latest_images_2024/5f5a0c1c5db75e91570fff37ae339bf82ee8fb79.webp',
      'https://img.cofynd.com/images/latest_images_2024/f4f725ebb75e7521d4fddf2c7dc50b5d53e16edc.webp'
    ]
  },
  // CHECK: matched via the Vijaya Krishna Towers building in your card photo; Maps calls it the Nanakramguda branch (a separate Gachibowli branch at SNP Towers also exists)
  {
    id: 94,
    name: 'NANOSPACE',
    badge: null,
    rating: null,
    area: 'Gachibowli',
    location: 'Vijaya Krishna Towers, Madhava Reddy Colony, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹10,499',
    period: '/ month',
    priceFormatted: '₹10,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16653314141068326098',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/08b7b196bc05a6e63678c023d8d2a2f077a5c9d7.webp',
      'https://img.cofynd.com/images/latest_images_2024/ceeadb03018369f0ec23730979803d23a10af797.webp',
      'https://img.cofynd.com/images/latest_images_2024/7d34fc725bfe5a47326e113e5c68ce08e0a4d7e8.webp',
      'https://img.cofynd.com/images/latest_images_2024/e737d1418b6df6fdbb62f0b8ebc1186b4035e247.webp'
    ]
  },
  {
    id: 95,
    name: 'Mozaik',
    badge: 'Premium',
    rating: 4.8,
    area: 'Banjara Hills',
    location: 'Banjara Hills, Hyderabad',
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.416938,78.438721',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/13cd27e31e2f7fbeafaceecc149d07fbacbcf842.webp',
      'https://img.cofynd.com/images/latest_images_2024/1d3e6ffcf91897f70bc8c3401c3d24036de537d8.webp',
      'https://img.cofynd.com/images/latest_images_2024/29bdd1baf19902a7bd6189ac66db6a69b35e14d3.webp',
      'https://img.cofynd.com/images/latest_images_2024/57b68e9ce1e39305d1d62555f30aa5f86428b966.webp'
    ]
  },
  {
    id: 96,
    name: 'Fartech Solutions',
    badge: 'Special Offer',
    rating: 4.8,
    area: 'Punjagutta',
    location: 'Punjagutta, Hyderabad',
    price: '₹3,999',
    period: '/ Month',
    priceFormatted: '₹3,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.415768,78.455622',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d1f05a1a28e4b7356370fe76d2d8a585704539b8.webp',
      'https://img.cofynd.com/images/latest_images_2024/c114fd6d5b01d0dc249c68e2cc8e81356325ef2f.webp',
      'https://img.cofynd.com/images/latest_images_2024/876282409f951c5f54103c07fc45bff8d513fbb8.webp',
      'https://img.cofynd.com/images/latest_images_2024/34cee681a9f7e052508885f253540be3154aec6d.webp'
    ]
  },
  {
    id: 98,
    name: 'D\'Desks Coworking Space',
    badge: 'Popular',
    rating: 4.9,
    area: 'Banjara Hills',
    location: '2nd Floor, Hiline Complex, 205, Road No. 12, Sai Enclave, Banjara Hills, Hyderabad, Telangana 500028',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=5070646769085642220',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/81e6b341284f5dc54be6cd4b6e8720b59e5bd877.webp',
      'https://img.cofynd.com/images/latest_images_2024/f65e0dc50c0c35d12b2450cfb103046ee204901b.webp',
      'https://img.cofynd.com/images/latest_images_2024/f088bfc46e8e7c7e02335c40917a8df616c0e730.webp',
      'https://img.cofynd.com/images/latest_images_2024/12a32c199d89a5c165dc5fcd85ef6b6f553af903.webp'
    ]
  },
  {
    id: 99,
    name: 'Cabins 24/7 Coworking Space',
    badge: 'Special Offer',
    rating: 5.0,
    area: 'Kondapur',
    location: 'H. No. 5/497, near Hitec City, Kondapur, Izzathnagar, Hyderabad, Telangana 500084',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18052466833206104584',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f4c20c3460c6456bff6757a9bd294736df9a2068.webp',
      'https://img.cofynd.com/images/latest_images_2024/509f5414e34cb0c745755ab31347b799d85e9b16.webp',
      'https://img.cofynd.com/images/latest_images_2024/9edd4027d9a4123305914ede0e293dc202da042d.webp',
      'https://img.cofynd.com/images/latest_images_2024/606a4137716677b5ecbf80d3a9b2b7c3680104e9.webp'
    ]
  },
  {
    id: 100,
    name: 'Deskins',
    badge: 'Popular',
    rating: 4.2,
    area: 'Manikonda',
    location: 'Unit No. 201, MS Bright Plaza, Plot No. 22, Manikonda, Shirdi Sai Nagar, Hyderabad, Telangana 500089',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=135231438643396605',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/b33985758841f97e0ebadf844148d07c09feabf0.webp',
      'https://img.cofynd.com/images/latest_images_2024/1852ba92e136961552c9403591ee10fa23e4aa5b.webp',
      'https://img.cofynd.com/images/latest_images_2024/855b3cccdebe46009d9b743577320ae79586d192.webp',
      'https://img.cofynd.com/images/latest_images_2024/ad2d2318de9e5f447824baccc30160b790f51112.webp'
    ]
  },
  {
    id: 101,
    name: 'AltF Coworking',
    badge: 'Premium',
    rating: null,
    area: 'Begumpet',
    location: '1-10-176, Begumpet Rd, opp. Hyderabad Public School, Mayur Marg, Begumpet, Hyderabad, Telangana 500016',
    price: '₹11,499',
    period: '/ month',
    priceFormatted: '₹11,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12972904773020985214',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f64e407459f18d56e4cb72bcf9655eb53a026eb4.webp',
      'https://img.cofynd.com/images/latest_images_2024/73613c95a0f010ef943a014fd9ddb300c67f3970.webp',
      'https://img.cofynd.com/images/latest_images_2024/e62cc4faa7c650d3d31012b83b52f92a66cb366e.webp',
      'https://img.cofynd.com/images/latest_images_2024/e7aa7c84a5ab7d6715dfdde44bb8f6d388753b2f.webp'
    ]
  },
  {
    id: 102,
    name: 'Cokarma',
    badge: 'Premium',
    rating: 4.7,
    area: 'Jubilee Hills',
    location: '3rd Floor, Alcazar Mall, Plot No. 498, Road No. 36, Venkatagiri, Jubilee Hills, Hyderabad, Telangana 500033',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9399848080319697880',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/7903983cd25ba385a93bd995ee373516489b9695.webp',
      'https://img.cofynd.com/images/latest_images_2024/1bdbb48381e7d7b1a59c1925745211293608c207.webp',
      'https://img.cofynd.com/images/latest_images_2024/ab1f09f2ca54e8c9a93a26d6b3c40b14dd76cfc2.webp',
      'https://img.cofynd.com/images/latest_images_2024/2989ba92c1c975c974c3fd68c1de8a6eba058b0e.webp'
    ]
  },
  {
    id: 103,
    name: 'Padhukas',
    badge: 'Popular',
    rating: 4.6,
    area: 'Banjara Hills',
    location: '2nd Floor, Reliance Humsafar Building, Road No. 11, Mithila Nagar, Banjara Hills, Hyderabad, Telangana 500034',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14916063250537021204',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/9ed0b96a57248209a7b507614e885c6abea75c8e.webp',
      'https://img.cofynd.com/images/latest_images_2024/eb25521e471a58c2737fb98a946078c10e22cc5c.webp',
      'https://img.cofynd.com/images/latest_images_2024/4aee0f5b043d50648d88101f6135fcb56b03fce2.webp',
      'https://img.cofynd.com/images/latest_images_2024/beb549ce375cd9d6e7ce9ee238bf1a3d2d6b04f9.webp'
    ]
  },
  {
    id: 104,
    name: 'Trilax',
    badge: 'Special Offer',
    rating: 4.6,
    area: 'Madhapur',
    location: 'Madhapur, Hyderabad',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.465983,78.372146',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/857422262faa7e077a9015aa7bd56697c17faa60.webp',
      'https://img.cofynd.com/images/latest_images_2024/eadb0e83515d5bb0ae4c0eeaee28ee38ed267d19.webp',
      'https://img.cofynd.com/images/latest_images_2024/3fcbd0258c27e299f8d0ba9280e0d3c2678fcb07.webp',
      'https://img.cofynd.com/images/latest_images_2024/022b7211e119c798c261b73c71d810b32b544591.webp'
    ]
  },
  {
    id: 105,
    name: 'PARTIME CO-WORK',
    badge: 'Special Offer',
    rating: null,
    area: 'Gachibowli',
    location: 'Gachibowli, Hyderabad',
    price: '₹7,499',
    period: '/ month',
    priceFormatted: '₹7,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=17.439968,78.352736',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5e3daef5b7345ef1ec662b86e2aa3435ce9a91a7.webp',
      'https://img.cofynd.com/images/latest_images_2024/3a80b53761e8968acb2c7959108c7d7d42f4b0c4.webp',
      'https://img.cofynd.com/images/latest_images_2024/e59569f205c3e1b76fc316fb41dcfe2753319896.webp',
      'https://img.cofynd.com/images/latest_images_2024/6ae7964dbbbd8e3270858b56f473265f464f2858.webp'
    ]
  },
  {
    id: 106,
    name: 'Innov8 Sri Harsha Icon',
    badge: null,
    rating: null,
    area: 'Financial District',
    location: 'Sri Harsha Icon, Service Rd, Financial District, Nanakramguda, Hyderabad, Telangana 500032',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=17458006881639416080',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/27866f83652e98b3e33cec036e646b40c5723026.webp',
      'https://img.cofynd.com/images/latest_images_2024/bfd1cf54248ce4af3a6f570bb5d71733c6796cdd.webp',
      'https://img.cofynd.com/images/latest_images_2024/a68806ef797cf83dc1a5f87e6952914ab9deebdb.webp',
      'https://img.cofynd.com/images/latest_images_2024/68e3d4be91624bb78b296f4b61a2c15e12c7717c.webp'
    ]
  },
  {
    id: 107,
    name: 'InfySpaces',
    badge: null,
    rating: null,
    area: 'Kukatpally',
    location: '501, 5th Floor, Manjeera Trinity Corporate, beside Lulu Mall, KPHB Phase 3, Kukatpally, Hyderabad, Telangana 500072',
    price: '₹599',
    period: '/ hour',
    priceFormatted: '₹599 / hour',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14002340093520977404',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/74f153efd73280910ccbb907268cee0f7bbe62a0.webp',
      'https://img.cofynd.com/images/latest_images_2024/d4e11a39f13b7870f23a92d112381a7c5ae7c2a5.webp',
      'https://img.cofynd.com/images/latest_images_2024/78d8e322e2dea751590acffed687deb97bb82006.webp',
      'https://img.cofynd.com/images/latest_images_2024/d0d4febf77e7ab2b7c380c323401e4d7d1ff68e5.webp'
    ]
  },
  // Kondapur branch — separate listing from the Gachibowli branch (id 51)
  {
    id: 108,
    name: 'One Day Coworking Labs',
    badge: 'Premium',
    rating: 4.7,
    area: 'Kondapur',
    location: '3rd Floor, Pranava Business Park, beside Harsha Toyota, Kothaguda, Kondapur, Hyderabad, Telangana 500084',
    price: '₹6,499',
    period: '/ month',
    priceFormatted: '₹6,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=18143796176827652229',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/19c02381ac672686b4937bf750ea5292c9fe0c21.webp',
      'https://img.cofynd.com/images/latest_images_2024/e25f16470aa0c56a2612bd35e53a99479f633d54.webp',
      'https://img.cofynd.com/images/latest_images_2024/b404505630b8f39e3b6cb50e6504324c5974e189.webp',
      'https://img.cofynd.com/images/latest_images_2024/1c197a4788ec30dac9e9bb4d4a03a23db158d64f.webp'
    ]
  },
  {
    id: 109,
    name: 'Offix',
    badge: 'Popular',
    rating: 5.0,
    area: 'Madhapur',
    location: '12th Floor, H-Tower, Commerzone Rd, Rai Durg, Madhapur, Hyderabad, Telangana 500032',
    price: '₹18,999',
    period: '/ month',
    priceFormatted: '₹18,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11177242034783620874',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/87a7302f9c24951ee1338f607dc2b52e1e895478.webp',
      'https://img.cofynd.com/images/latest_images_2024/506309b58d494884b19bf844585cc6238d3ad15d.webp',
      'https://img.cofynd.com/images/latest_images_2024/31e04d0df17e2a2a38a6a09209b790f59112e651.webp',
      'https://img.cofynd.com/images/latest_images_2024/b52113f29e9a5ba1a70e8da9c416d0ad8e179b1f.webp'
    ]
  },
  // NOT_VERIFIED: three Quickstart branches in Gachibowli (Eclipse 4.9 / Orion 4.8 / Nebula 4.8); none shows 4.7 — can't tell which
   {
    id: 110,
    name: 'Quickstart Co-Working Space',
    badge: 'Premium',
    rating: 4.7,
    area: 'Gachibowli',
    location: '8th Floor, Vaishnavi\'s Cynosure, 2-48/5/6, Gachibowli Rd, opp. RTTC, Telecom Nagar, Gachibowli, Hyderabad, Telangana 500032',
    price: '₹8,899',
    period: '/ month',
    priceFormatted: '₹8,899 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13253402970017859293',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/44068f0365f2e6daeefa77ccf1e49c4406db6e9d.webp',
      'https://img.cofynd.com/images/latest_images_2024/5b03f761dd8b267955a393834f2fd461e189eea3.webp',
      'https://img.cofynd.com/images/latest_images_2024/09b4f8dfe681630c83f902fc1ab9aa6a13af3462.webp',
      'https://img.cofynd.com/images/latest_images_2024/ec401c3cab9cb13f19f26b225690fa4c44928ba7.webp'
    ]
  },
  {
    id: 111,
    name: 'AltF',
    badge: 'Premium',
    rating: 4.8,
    area: 'Financial District',
    location: '9th Floor, Kapil Kavuri Hub, Survey 37, Financial District, Nanakramguda, Telangana 500032',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=14575195168724923341',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/e20d9743ca19504193a142be789ba11ae02128f1.webp',
      'https://img.cofynd.com/images/latest_images_2024/12b1d478bde281f978cd1dd05da666ffadc36d5b.webp',
      'https://img.cofynd.com/images/latest_images_2024/63b88fb07c167759c575cc239fc427e460f229ad.webp',
      'https://img.cofynd.com/images/latest_images_2024/efd8c0187a5a7a60af5b89ecbd29fbc71830ca01.webp'
    ]
  }
];


export const SPACES_PER_PAGE = 32;

export const paginationData = {
  totalPages: Math.ceil(hyderabadSpaces.length / SPACES_PER_PAGE),
  initialPage: 1
};

export const allHyderabadOfficeCards = hyderabadSpaces;

export const getHyderabadOfficeCardById = (id) => findOfficeBySlug(allHyderabadOfficeCards, id, "hyderabad");
export const getHyderabadOfficeSlug = (space) => officePath(allHyderabadOfficeCards, space, "hyderabad");

export const hyderabadAreas = hyderabadNeighborhoods;
export const areas = hyderabadNeighborhoods;
export const spaces = hyderabadSpaces;
export default { areas: hyderabadNeighborhoods, spaces: hyderabadSpaces };
