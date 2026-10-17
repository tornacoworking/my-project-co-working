import { findOfficeBySlug, officePath } from '../../common/slug.js';
/**
 * Gurugram coworking data file.
 * Holds everything the listing page and the office-detail page need:
 *   - area filter names, page-wise card lists, banners and pagination settings
 *   - area-specific extra cards, similar-space cards and the slug lookup helpers
 * Card data (name, area, price, photos) comes from public coworking listing sites.
 */

// Data store for Gurugram
export const gurugramAreas = [
  "All",
  "Golf Course Road",
  "DLF Cyber City",
  "Cyber Hub",
  "Golf Course Extension Road",
  "Udyog Vihar",
  "Sector 44",
  "Sohna Road",
  "Sector 32"
];

// All Gurugram coworking cards of this city (name, badge, rating, area, location, price, period, images).
export const gurugramSpaces = [
  // 1. 91springboard Augusta Point - Golf Course Road
  {
    id: 1,
    name: '91springboard Augusta Point',
    badge: 'Popular',
    rating: 4.2,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/52606ec5ef483108a97b4d41500d9665fe5bf202.webp',
      'https://img.cofynd.com/images/latest_images_2024/0a1337092d96af7533cb32b38f64961fce8e6ecb.webp',
      'https://img.cofynd.com/images/latest_images_2024/5707612ddbaeac1d6a4dd709fae14d6def81b5d2.webp',
      'https://img.cofynd.com/images/latest_images_2024/b4dc7ec8a60b316ec75cf3ed5ade666cffa7568f.webp',
      'https://img.cofynd.com/images/latest_images_2024/96a9fe9715e6d799475c18927f1444eeec83ab49.webp',
      'https://img.cofynd.com/images/latest_images_2024/86995b9ae18a98cd1ea0341007a091accec06cff.webp'
    ]
  },
  // 2. Awfis Paras Trinity - Golf Course Extension Road
  {
    id: 2,
    name: 'Awfis Paras Trinity',
    badge: 'Popular',
    rating: 4.4,
    area: 'Golf Course Extension Road',
    location: 'Golf Course Extension Road, Gurgaon',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/eff19476b276a0c84ed61b987f1c382e93178860.webp',
      'https://img.cofynd.com/images/latest_images_2024/dabbbde940872bd547b866e481a8d7ac386fe99e.webp',
      'https://img.cofynd.com/images/latest_images_2024/9d53be606bf5dc03cd857c494d5aefe9c8de4fec.webp',
      'https://img.cofynd.com/images/latest_images_2024/a6f1a5bd3548b42b4237358b19f7a34cf6425062.webp',
      'https://img.cofynd.com/images/latest_images_2024/ff30f8e93ccdfb5ee4fcf58b33e9addce3623d0e.webp',
      'https://img.cofynd.com/images/latest_images_2024/e6cd9436af8e8e4fe2ecdb745656158b7bed07d0.webp'
    ]
  },
  // 3. Wonder Works - Sector 32
  {
    id: 3,
    name: 'Wonder Works',
    badge: 'Premium',
    rating: 4.4,
    area: 'Sector 32',
    location: 'Sector 32, Gurgaon',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/8abd233438e9ff92dd797e00fafd4925b300229b.webp',
      'https://img.cofynd.com/images/latest_images_2024/e53f886396b2d1d6d6e69146654a0eeafec426ed.webp',
      'https://img.cofynd.com/images/latest_images_2024/f69f6ae8bfb78c0012274af02b7be2d64e7164a7.webp',
      'https://img.cofynd.com/images/latest_images_2024/a8b091e7f3ebdc2b33f7861f0b16e79ee847fedb.webp',
      'https://img.cofynd.com/images/latest_images_2024/96f5f3d5b6d1e0189163ca460db7143deb6f6b9f.webp',
      'https://img.cofynd.com/images/latest_images_2024/b4e8c4154544cf6b67ae9e523a6f0819e5fefc0e.webp'
    ]
  },
  // 4. CoWrks Paras Twin Towers A - Golf Course Road
  {
    id: 4,
    name: 'CoWrks Paras Twin Towers A',
    badge: 'Popular',
    rating: 4.5,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹18,999',
    period: '/ Month',
    priceFormatted: '₹18,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/7f9292b15f5f3b4cf54d8c8fc1206642bbc3ac4a.webp',
      'https://img.cofynd.com/images/original/2c58b160b4ee7050ff466bcd9bfe68d760c15cd0.jpg',
      'https://img.cofynd.com/images/original/53278d33b99d4bcfa4e09552c2d208c0bb025fb1.jpg',
      'https://img.cofynd.com/images/original/b0c9bfe110623b34e0defbd00b9bd5e4b2d3d706.jpg',
      'https://img.cofynd.com/images/original/72361f076d3733ad051ced11ca50d2ad3d281fe1.jpg',
      'https://img.cofynd.com/images/original/8979328470f18fc10c38a28ec7abc4f4b9b502d6.jpg'
    ]
  },
  // 5. 91springboard Sector 44 - Sector 44
  {
    id: 5,
    name: '91springboard Sector 44',
    badge: 'Popular',
    rating: 4.1,
    area: 'Sector 44',
    location: 'Sector 44, Gurgaon',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/eb7b461ed58d5d77e77fe5848a3800a9587ec9ad.webp',
      'https://img.cofynd.com/images/latest_images_2024/d4d0c776761bb50e6ef4d2fdbc224a02edf44684.webp',
      'https://img.cofynd.com/images/latest_images_2024/92143f5b52b49c6f0589f1adcd121790ef45ecc4.webp',
      'https://img.cofynd.com/images/latest_images_2024/d913774060599ed61be9f92d9d46a8fe3558436d.webp',
      'https://img.cofynd.com/images/latest_images_2024/b90d57b82fbba02ee1fa56aeb4e2b6544311137f.webp'
    ]
  },
  // 6. Awfis Ambience Mall - DLF Cyber City
  {
    id: 6,
    name: 'Awfis Ambience Mall',
    badge: 'Popular',
    rating: 4.1,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/3f7ae804b6d0d5a0ea41145a133040990555d75c.webp',
      'https://img.cofynd.com/images/latest_images_2024/40983a0c1f36b7ddba49e43d65f792e0493a6da1.webp',
      'https://img.cofynd.com/images/latest_images_2024/5ad5ca6d5ddf10919472cc1341cab90646640a01.webp',
      'https://img.cofynd.com/images/latest_images_2024/ca33925bfadb653441c1c98512db11e8496913ff.webp',
      'https://img.cofynd.com/images/latest_images_2024/82dc3985a12802f5257e3242d7b698174ce7461d.webp'
    ]
  },
  // 7. VentureX Sector 29 - Sector 29
  {
    id: 7,
    name: 'VentureX Sector 29',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 29',
    location: 'Sector 29, Gurgaon',
    price: '₹12,999',
    period: '/ Month',
    priceFormatted: '₹12,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/7221a72a4922bd209ec41c915588fb222b52e131.webp',
      'https://img.cofynd.com/images/latest_images_2024/b20c95aa8c91e9c438e1d7f78c0e914e9f5ebdb9.webp',
      'https://img.cofynd.com/images/latest_images_2024/54afd0bc50ab6c0cafe5554e4645ad1bdc4b5f46.webp',
      'https://img.cofynd.com/images/latest_images_2024/e898431ddfcf9ec89f775f0cd10077c6fe78d33b.webp',
      'https://img.cofynd.com/images/latest_images_2024/f6f76f31b6a1940a027252aa803fd946858a3fdd.webp',
      'https://img.cofynd.com/images/latest_images_2024/6412a5f72fc77ad0d30d8990de89b66e124a37a2.webp',
      'https://img.cofynd.com/images/latest_images_2024/23574cf51bfbc549f613cdd2d6d8b0897e5b470c.webp'
    ]
  },
  // 8. Work2share - Udyog Vihar
  {
    id: 8,
    name: 'Work2share',
    badge: 'Popular',
    rating: 4.8,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/ce5eabef27446ba27b0ff814170d65a23be5a998.webp',
      'https://img.cofynd.com/images/latest_images_2024/52b174da941a6a2c6992d307cd2abe63b5219664.webp',
      'https://img.cofynd.com/images/latest_images_2024/d060c02bbb91010ff918a255025c53d1d0743873.webp',
      'https://img.cofynd.com/images/latest_images_2024/082413f0f300d3b69dbfda41319ebe7df84f1900.webp',
      'https://img.cofynd.com/images/latest_images_2024/94729fdf1855cd79cd3debeaac06c25535e7ef80.webp',
      'https://img.cofynd.com/images/latest_images_2024/44b113c03084f8e9b7f1abac4bfa2aba1cedaada.webp'
    ]
  },
  // 9. Regus JMD Regent Square - MG Road
  {
    id: 9,
    name: 'Regus JMD Regent Square',
    badge: 'Popular',
    rating: 3.7,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹12,999',
    period: '/ Month',
    priceFormatted: '₹12,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/c61a4caad36616be8ccd405580b4537b40bc94f1.webp',
      'https://img.cofynd.com/images/latest_images_2024/ca1a924373dad7656e9d362c2776d481110d87e0.webp',
      'https://img.cofynd.com/images/latest_images_2024/6fc3b0fcda552c924d4644dbd6a6792100dbb28e.webp',
      'https://img.cofynd.com/images/latest_images_2024/6ed81b861a220cd3db5c9c88ac7b591c1653f0b9.webp',
      'https://img.cofynd.com/images/latest_images_2024/b892fe2d0a916ac040ef1859dacf20e9a0259f15.webp'
    ]
  },
  // 10. Awfis Unitech Cyber Park - Sector 39
  {
    id: 10,
    name: 'Awfis Unitech Cyber Park',
    badge: 'Premium',
    rating: 4.4,
    area: 'Sector 39',
    location: 'Sector 39, Gurgaon',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/c92a705bcd016a3bb78a3f639e4ba1eed0b455e5.webp',
      'https://img.cofynd.com/images/latest_images_2024/f16ee9b3598275fc7fa2a24a07787836cf8434e1.webp',
      'https://img.cofynd.com/images/latest_images_2024/383025c310c6b1c6c00d1b30c3aba849e726bcdf.webp',
      'https://img.cofynd.com/images/latest_images_2024/ff518633880a22d0696e2e6ff9873ef6b753e542.webp',
      'https://img.cofynd.com/images/latest_images_2024/b86e6db8044e30873b4004da6728207cfcc556a5.webp',
      'https://img.cofynd.com/images/latest_images_2024/be455fe51f60b0d9e4a8a0f94fce20bf9e270375.webp',
      'https://img.cofynd.com/images/latest_images_2024/3e8ed1f71773d4f6d75b17f8fd0fde30f8d5fbc3.webp'
    ]
  },
  // 11. Awfis Augusta Point - Golf Course Road
  {
    id: 11,
    name: 'Awfis Augusta Point',
    badge: 'Premium',
    rating: 4.3,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/6ecc79cea9aa111192b6860cb1ebe7b0c9b0e076.webp',
      'https://img.cofynd.com/images/original/9613555df27f3bf56afa379dba0197aae921393c.jpg',
      'https://img.cofynd.com/images/original/35a69cc6dea37ed8bac00bef42c8cd10de070e68.jpg',
      'https://img.cofynd.com/images/original/29f7c32fae7798c9733f5b891af3e0ded7031a85.jpg',
      'https://img.cofynd.com/images/original/c8417c3e6228a073f5af9977f3bfb058535b430d.jpg',
      'https://img.cofynd.com/images/latest_images_2024/b0ffd0e8a803a03deb30f7d57d77b37f08e54d6c.webp'
    ]
  },
  // 12. Regus 49 Sohna Road - Sohna Road
  {
    id: 12,
    name: 'Regus 49 Sohna Road',
    badge: 'Premium',
    rating: 4.5,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/8dbc0e8a7450a68f6b6acb4ccad5adfda2d0121b.webp',
      'https://img.cofynd.com/images/latest_images_2024/19248b9fb16eb80e8ffba0d2bb55e97ef7c5095b.webp',
      'https://img.cofynd.com/images/latest_images_2024/d51d452457ee1941c4c55ad3b33a4518aceaf118.webp',
      'https://img.cofynd.com/images/latest_images_2024/7ede6a8950fc2e17e34bb48db5fd5d64ff424c99.webp',
      'https://img.cofynd.com/images/latest_images_2024/bc85a3d2bdfdd0f097b95fb6d97832cea7f397ab.webp',
      'https://img.cofynd.com/images/latest_images_2024/898e258a43f45af82c4ef8c24db8a3d003bebf05.webp'
    ]
  },
  // 13. Regus Unitech Cyber Park - Sector 39
  {
    id: 13,
    name: 'Regus Unitech Cyber Park',
    badge: 'Premium',
    rating: 4.3,
    area: 'Sector 39',
    location: 'Sector 39, Gurgaon',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/ed2bf9dc82af4e248d728069b47fc8064ac6b67c.webp',
      'https://img.cofynd.com/images/latest_images_2024/a32c62f5ca81e60f3d4b9ff6f1479e254747076d.webp',
      'https://img.cofynd.com/images/latest_images_2024/38c96125b91e6dc14ef62135545ef294c482e526.webp',
      'https://img.cofynd.com/images/latest_images_2024/94851299a6db8e21958a413ef5a79b499b70a7dc.webp',
      'https://img.cofynd.com/images/latest_images_2024/debdc9dc8f063ff6ed7e3c2138c28bb6d9042f80.webp',
      'https://img.cofynd.com/images/latest_images_2024/2d270df0f391a7aace93b1ab56f54076ee02f07f.webp',
      'https://img.cofynd.com/images/latest_images_2024/5c2b266b18f453e912797a9431af8e09ec5336ba.webp'
    ]
  },
  // 14. Awfis Suncity Success Tower - Golf Course Extension Road
  {
    id: 14,
    name: 'Awfis Suncity Success Tower',
    badge: 'Premium',
    rating: 4.4,
    area: 'Golf Course Extension Road',
    location: 'Golf Course Extension Road, Gurgaon',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/9a09440def4587acc77372cf44d092ebb65b7d80.webp',
      'https://img.cofynd.com/images/latest_images_2024/04b91d1f90764302be183d7dc451d628b6813496.webp',
      'https://img.cofynd.com/images/latest_images_2024/8a586e1aad7b3283cad59710387b7996c1e2fb57.webp',
      'https://img.cofynd.com/images/latest_images_2024/37e6df2ca9148d62378f637a45df386dbe66af27.webp',
      'https://img.cofynd.com/images/latest_images_2024/5ae1047ce84014c0ac24704acf4d5039f070a8da.webp'
    ]
  },
  // 15. The Executive Center DLF Downtown - DLF Cyber City
  {
    id: 15,
    name: 'The Executive Center DLF Downtown',
    badge: 'Premium',
    rating: 5.0,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹59,999',
    period: '/ Month',
    priceFormatted: '₹59,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/2bd002a1553ffd64a5a974225f5b65bb5bb4a8e6.webp',
      'https://img.cofynd.com/images/latest_images_2024/9ced7a77e67f5f5287571a27aad04844cefcfe52.webp',
      'https://img.cofynd.com/images/latest_images_2024/93396cd56076641871fd0b7c425cf05ea3605492.webp',
      'https://img.cofynd.com/images/latest_images_2024/0f418830f9b2b71f4d500acc7ebbcbfc0dd73e18.webp',
      'https://img.cofynd.com/images/latest_images_2024/53f73f3d4c4fa4eb6515c4ec40ec042d2e30be4f.webp',
      'https://img.cofynd.com/images/latest_images_2024/0e01224f9b0972c129f0aaeae816430a560ea06d.webp'
    ]
  },
  // 16. The Executive Center One Horizon Center - Golf Course Road
  {
    id: 16,
    name: 'The Executive Center One Horizon Center',
    badge: 'Premium',
    rating: 4.7,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹39,999',
    period: '/ Month',
    priceFormatted: '₹39,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/33a3db72faf31fe974b4ca93383a9c97f316a0f7.webp',
      'https://img.cofynd.com/images/latest_images_2024/984273e5a2f045d6fdde8afaedf1abeecc4dea1b.webp',
      'https://img.cofynd.com/images/latest_images_2024/cb4e78f8d8ee1025ea3d077f255297ac2b22e6f3.webp',
      'https://img.cofynd.com/images/latest_images_2024/c2307b73dcbb6dc1f59c5b79ebb1e0cb98f3dbce.webp',
      'https://img.cofynd.com/images/latest_images_2024/556872a25dec098a93247bc53cdb8413e6aad4bc.webp'
    ]
  },
  // 17. Innov8 CLC - Sector 44
  {
    id: 17,
    name: 'Innov8 CLC',
    badge: 'Popular',
    rating: 4.1,
    area: 'Sector 44',
    location: 'Sector 44, Gurgaon',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d519813682285a5a4ce7dc3a9c430405c972ba04.webp',
      'https://img.cofynd.com/images/latest_images_2024/4f2634df883962c0dca24ccecf0fe9c14ff98d1f.webp',
      'https://img.cofynd.com/images/latest_images_2024/dc4e5eadcd1cee2eac58b5b60cef7b45cca93ca4.webp',
      'https://img.cofynd.com/images/latest_images_2024/489e78c344e34e362281ec64261f61446831a7fd.webp',
      'https://img.cofynd.com/images/latest_images_2024/e81b4f486e974f11de37e1b40c8a4378332bb0ea.webp'
    ]
  },
  // 18. The Executive Centre DLF Cyber City - DLF Cyber City
  {
    id: 18,
    name: 'The Executive Centre DLF Cyber City',
    badge: 'Premium',
    rating: 4.6,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹14,999',
    period: '/ Month',
    priceFormatted: '₹14,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/e65260eadd93e5ef22aa59594f82eb6789f3cb94.webp',
      'https://img.cofynd.com/images/latest_images_2024/057225e860cf6639fb6513d4955c6bfa9032c1bc.webp',
      'https://img.cofynd.com/images/latest_images_2024/d101290546e566f6bfdc38e48936f6fa3a8b012d.webp',
      'https://img.cofynd.com/images/latest_images_2024/81517afbf153c5dd52edeb130c295eb2ea56b193.webp',
      'https://img.cofynd.com/images/latest_images_2024/1bc52c0b4b13b00e542fa4fe5c908cbcba258848.webp',
      'https://img.cofynd.com/images/latest_images_2024/75828130f0b4a9be247be238f928672b40fb7768.webp'
    ]
  },
  // 19. The Office Pass Paras Downtown Center - Golf Course Road
  {
    id: 19,
    name: 'The Office Pass Paras Downtown Center',
    badge: 'Premium',
    rating: 4.5,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹13,999',
    period: '/ Month',
    priceFormatted: '₹13,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/e28df29c04eb14362194a9d973a2af46ed7c368d.webp',
      'https://img.cofynd.com/images/latest_images_2024/12576b561a678df5709eb8425cf16ef772b4ce03.webp',
      'https://img.cofynd.com/images/latest_images_2024/d7ea260c4b119e9ae23024eace7fdeda66855cb6.webp',
      'https://img.cofynd.com/images/latest_images_2024/b0214a3360652596789bc3f5b717e91c2fb87861.webp',
      'https://img.cofynd.com/images/latest_images_2024/1bc75a651b310fe78756fa742ed227f3dde50b9a.webp',
      'https://img.cofynd.com/images/latest_images_2024/39a3a2c7803871204195af2d3db8345520190224.webp'
    ]
  },
  // 20. The Executive Center Two Horizon Center - Golf Course Road
  {
    id: 20,
    name: 'The Executive Center Two Horizon Center',
    badge: 'Premium',
    rating: 4.7,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹44,999',
    period: '/ Month',
    priceFormatted: '₹44,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/afa18c7ee3d0fecde9684c54b0ff558f943177d1.webp',
      'https://img.cofynd.com/images/latest_images_2024/757f03ac25e93adffeb12e46b012ecf191a43695.webp',
      'https://img.cofynd.com/images/latest_images_2024/94d71a28ac746a54384fefe1336cf48c5986ed43.webp',
      'https://img.cofynd.com/images/latest_images_2024/4b0957258037f08518dca41e408d915490c3f244.webp',
      'https://img.cofynd.com/images/latest_images_2024/473acb7fcc2dfd09e12d1ffaf8a26928d5e78249.webp',
      'https://img.cofynd.com/images/latest_images_2024/466cf9fbaae8c590ee6658970605f6afa469906a.webp'
    ]
  },
  // 21. Innov8 Unitech Cyber Park - Unitech Cyber Park
  {
    id: 21,
    name: 'Innov8 Unitech Cyber Park',
    badge: 'Premium',
    rating: 5.0,
    area: 'Unitech Cyber Park',
    location: 'Unitech Cyber Park, Gurgaon',
    price: '₹11,499',
    period: '/ Month',
    priceFormatted: '₹11,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/9ff66841bc37049f1dd4ec05851cb213503f05a3.webp',
      'https://img.cofynd.com/images/latest_images_2024/5d27f3db73c64bcb31f9541854ad159477f69489.webp',
      'https://img.cofynd.com/images/latest_images_2024/980e1e384f78c1784a2c02426aacad99f0f6ab91.webp',
      'https://img.cofynd.com/images/latest_images_2024/888116205f0a21d5c2bb27727f2ab13877133318.webp',
      'https://img.cofynd.com/images/latest_images_2024/a73643804c6b9a63c9de9f5d4c7640d66696b9a0.webp',
      'https://img.cofynd.com/images/latest_images_2024/85cfb86718f1692884646e2d32b52dc54fbdf017.webp'
    ]
  },
  // 22. Smartworks RK Four Square - DLF Cyber City
  {
    id: 22,
    name: 'Smartworks RK Four Square',
    badge: 'Popular',
    rating: 4.0,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹19,999',
    period: '/ Month',
    priceFormatted: '₹19,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d4a3ce6d67438135cfdf69f36027e385a22873e6.webp',
      'https://img.cofynd.com/images/latest_images_2024/8f4e7e020f1ce549ada68a8b4a4d1830525f6d8e.webp',
      'https://img.cofynd.com/images/latest_images_2024/54e753d27befd731712660b19b88c07799c6dfc0.webp',
      'https://img.cofynd.com/images/latest_images_2024/998bea022a790d3ee873380a6182f207eadcacdc.webp',
      'https://img.cofynd.com/images/latest_images_2024/83915e30b8ee4025bed7bed66e3cd2f4c4aee0c5.webp',
      'https://img.cofynd.com/images/latest_images_2024/f7426e84f966b1a92a2ab925dc1510d224ea1ef0.webp'
    ]
  },
  // 23. The Executive Center DLF Cyber Park - DLF Cyber City
  {
    id: 23,
    name: 'The Executive Center DLF Cyber Park',
    badge: 'Premium',
    rating: 4.6,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹59,999',
    period: '/ Month',
    priceFormatted: '₹59,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/b278992c7b3914a68f73d290edac2593b691f735.webp',
      'https://img.cofynd.com/images/latest_images_2024/12d137181be5e575acc4a843c7bde501e4175581.webp',
      'https://img.cofynd.com/images/latest_images_2024/349ebb14d662bc20fab1d7537dbca1ea1ebbebc6.webp',
      'https://img.cofynd.com/images/latest_images_2024/7d73806e1753c8bd0b3c564d6f67c840087a166a.webp',
      'https://img.cofynd.com/images/latest_images_2024/d0f55ba2bc6a5d96c23109f8d002230e07b713b6.webp'
    ]
  },
  // 24. The Office Pass Operation Control Center - DLF Cyber City
  {
    id: 24,
    name: 'The Office Pass Operation Control Center',
    badge: 'Premium',
    rating: 4.5,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f349d8502f7586afcce2811f12c7cf47f2ef2baf.webp',
      'https://img.cofynd.com/images/original/d1b990ac61ba58de3868e4e3117a62efb48ae2c3.jpg',
      'https://img.cofynd.com/images/original/912195f066a66b74f56556156079e6a5be214482.jpg',
      'https://img.cofynd.com/images/original/a494a8f8c161b9c42cc5ff8c95986d70e6e33ce1.jpg',
      'https://img.cofynd.com/images/original/ad3e47ecac9feebf935c81756b2c2316f2ce7714.jpg',
      'https://img.cofynd.com/images/latest_images_2024/fc8016fd293b5359fb3ef0b9fb81e12527a67db5.webp',
      'https://img.cofynd.com/images/latest_images_2024/4d96486e21b95af89be080c1c07a0a81bb4060cb.webp'
    ]
  },
  // 25. CoWrks Cyber City - DLF Cyber City
  {
    id: 25,
    name: 'CoWrks Cyber City',
    badge: 'Popular',
    rating: 4.7,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹19,999',
    period: '/ Month',
    priceFormatted: '₹19,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/eff9bc63b19f9f628faa8a33be7c625a1efe06ae.webp',
      'https://img.cofynd.com/images/original/47143c615c3e06f5b8f1e5a4ef9f56ca5b49f68b.jpg',
      'https://img.cofynd.com/images/original/9eeb0b5f48892eb0bcca14abe1b8e9a5faa051fe.jpg',
      'https://img.cofynd.com/images/latest_images_2024/4cef12c024dcc65af921f50231dd49abc0fab5c8.webp',
      'https://img.cofynd.com/images/original/4cf253ab133638715b42702160ee9c2dcc8c666b.jpg',
      'https://img.cofynd.com/images/original/fce2ba0141bb92fae1360230ec95147249fd9a3d.jpg',
      'https://img.cofynd.com/images/original/b066f606859a079991a9b70d8e6b2434cbfc134e.jpg'
    ]
  },
  // 26. Smartworks Golf View Towers - Golf Course Road
  {
    id: 26,
    name: 'Smartworks Golf View Towers',
    badge: 'Near Metro',
    rating: 3.3,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹12,999',
    period: '/ Month',
    priceFormatted: '₹12,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/27afa01158ac6029c52771e8b091d8ca41604f00.webp',
      'https://img.cofynd.com/images/latest_images_2024/a7e437c8993aeb315b4f314ab5e588b335c8fed5.webp',
      'https://img.cofynd.com/images/latest_images_2024/c3b88442ea185f84426c910de6c559675ad23c81.webp',
      'https://img.cofynd.com/images/latest_images_2024/eaaf7593d75f9c7277cf7e765b18fc725081c3c0.webp',
      'https://img.cofynd.com/images/latest_images_2024/61c8623c4986009ea01fc858dda15a51baef1bb2.webp',
      'https://img.cofynd.com/images/latest_images_2024/8db76d6018830c8126165f231e401891a2205142.webp'
    ]
  },
  // 27. Innov8 Orchid Center - Golf Course Road
  {
    id: 27,
    name: 'Innov8 Orchid Center',
    badge: 'Premium',
    rating: 4.3,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/2b9b4f717b3bf058a0f98276ae331087adbcb4d7.webp',
      'https://img.cofynd.com/images/original/886ddef88ba2818f9d669bfde6f0086a9edb3199.jpg',
      'https://img.cofynd.com/images/latest_images_2024/781c9542534087c84d4be0b1ddb986e7c41b76eb.webp',
      'https://img.cofynd.com/images/latest_images_2024/a89c87a0fb24028e2404155dfce10d102113b2a2.webp',
      'https://img.cofynd.com/images/original/475b4b5ecc2f03baf8973403555fb8167ca0c4fb.jpg',
      'https://img.cofynd.com/images/original/8aa2d894804cdf95434822ec292ff3c1c704015f.jpg',
      'https://img.cofynd.com/images/original/72810ffc2028fbf44e2b1e0e53b883ed17a858ae.jpg'
    ]
  },
  // 28. Smartworks ASF Insignia - Vatsal Valley
  {
    id: 28,
    name: 'Smartworks ASF Insignia',
    badge: 'Popular',
    rating: 4.1,
    area: 'Vatsal Valley',
    location: 'Vatsal Valley, Gurgaon',
    price: '₹14,999',
    period: '/ Month',
    priceFormatted: '₹14,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/48b8a4939c5c6ebc6dc96984b211866e429f209e.webp',
      'https://img.cofynd.com/images/latest_images_2024/1974d92e38ffc35c27eae6636bd93d734d7c30f2.webp',
      'https://img.cofynd.com/images/latest_images_2024/12d3701c1332bde0a94858ca983e090e8bdb53ee.webp',
      'https://img.cofynd.com/images/latest_images_2024/fd4065bfaa3634f0db05903ff3e1d3c196ffa3d2.webp'
    ]
  },
  // 29. IndiQube Vatika - Golf Course Road
  {
    id: 29,
    name: 'IndiQube Vatika',
    badge: 'Premium',
    rating: 4.8,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹14,999',
    period: '/ Month',
    priceFormatted: '₹14,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d7b318081870cc873302a1bee8116a612c9b040a.webp',
      'https://img.cofynd.com/images/latest_images_2024/4da8d07f0078e2455e88c07f60b6ec5bf1d1861d.webp',
      'https://img.cofynd.com/images/latest_images_2024/4b6362bb065847cd387c06c0b07000390c986a3c.webp',
      'https://img.cofynd.com/images/latest_images_2024/21acfec01f54fc86b423613d120ee6015f3ca9f0.webp'
    ]
  },
  // 30. The Office Pass JMD Megapolis - Sohna Road
  {
    id: 30,
    name: 'The Office Pass JMD Megapolis',
    badge: 'Premium',
    rating: 4.8,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/a51cfb0a9c479b3993ad7f8b19ac76d76c05c9ac.webp',
      'https://img.cofynd.com/images/latest_images_2024/686cd3ebd630102fa298d59cf37764764a8b3eb5.webp',
      'https://img.cofynd.com/images/latest_images_2024/9c4af04d94a643170c393b0e904a0b9a934d50b2.webp',
      'https://img.cofynd.com/images/latest_images_2024/d11a2cfce942dfb24b5e54652175f8eda0b94f4d.webp',
      'https://img.cofynd.com/images/latest_images_2024/291207713c4b09fae71ac9df8c6294d4760be88e.webp',
      'https://img.cofynd.com/images/latest_images_2024/5298b6255e8158db744dbf61025139d6e3cd22f4.webp'
    ]
  },
  // 31. IndiQube Unitech Cyber Park - Unitech Cyber Park
  {
    id: 31,
    name: 'IndiQube Unitech Cyber Park',
    badge: 'Popular',
    rating: 4.1,
    area: 'Unitech Cyber Park',
    location: 'Unitech Cyber Park, Gurgaon',
    price: '₹14,999',
    period: '/ Month',
    priceFormatted: '₹14,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5bcdd7f5300be3501e740dcf3647ce0a244a1f5d.webp',
      'https://img.cofynd.com/images/latest_images_2024/b2e8d6515598b4214d7e60b9f319e9acbde62110.webp',
      'https://img.cofynd.com/images/latest_images_2024/b495c15a2f0fbf3bb02da39d05d0bd37de0d1402.webp',
      'https://img.cofynd.com/images/latest_images_2024/8cfb554832172a3238308dea729780d0d5a8ecb2.webp',
      'https://img.cofynd.com/images/latest_images_2024/576efc7390b71ff698320c929bd5e695a02a44d2.webp'
    ]
  },
  // 32. VentureX Silverton Tower - Golf Course Extension Road
  {
    id: 32,
    name: 'VentureX Silverton Tower',
    badge: 'Popular',
    rating: 4.3,
    area: 'Golf Course Extension Road',
    location: 'Golf Course Extension Road, Gurgaon',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f5ce787b6cfe0de8a31cb71a7cf6be0fe98aa09b.webp',
      'https://img.cofynd.com/images/latest_images_2024/9fdeae657363036a61dab74afdaabb6c2f62f886.webp',
      'https://img.cofynd.com/images/latest_images_2024/26868fbf898209862b7b1522bbf4bb3895d21c39.webp',
      'https://img.cofynd.com/images/latest_images_2024/400ea50194f8f297e0f58b3a3eeb5359ed307611.webp',
      'https://img.cofynd.com/images/latest_images_2024/ac13ca1d0456e7481ed244c1d68a5950689fd0c0.webp'
    ]
  },
  // 33. AltF Orchid Business Park - Sohna Road
  {
    id: 33,
    name: 'AltF Orchid Business Park',
    badge: 'Premium',
    rating: 5.0,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/115e1c67b9a0f0a1a2162553290cd35b75eb6f54.webp',
      'https://img.cofynd.com/images/latest_images_2024/a9aec2ab1b0178b56320afcfb83bfd1701b790cf.webp',
      'https://img.cofynd.com/images/latest_images_2024/b2d875ef2edd762cde32f702c45e3b9bb74a28a5.webp',
      'https://img.cofynd.com/images/latest_images_2024/3c8a8b181154538e68d64fecfdeb7894f0a9d1ad.webp',
      'https://img.cofynd.com/images/latest_images_2024/5688a14af959947c08198507560f54f0df26a01f.webp',
      'https://img.cofynd.com/images/latest_images_2024/a4fc1d06cf99771de446a7fd9194a62156bb160e.webp'
    ]
  },
  // 34. AltF MGF Megacity - MG Road
  {
    id: 34,
    name: 'AltF MGF Megacity',
    badge: 'Popular',
    rating: 5.0,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/70df798fef8e6c4bbc763489f3a99fd52486fb7d.webp',
      'https://img.cofynd.com/images/latest_images_2024/435397aa59c6bfc4022af9bc0db9f19bd1522f42.webp',
      'https://img.cofynd.com/images/original/b11a5e08dbb616ef2484279803b59d967603ae02.jpg',
      'https://img.cofynd.com/images/original/e7af3abc402f952c04a80cd2f559bb487f69183f.jpg',
      'https://img.cofynd.com/images/original/68189417a2a5ad700ec940844054f46c11645783.jpg'
    ]
  },
  // 35. Plus Offices - Golf Course Extension Road
  {
    id: 35,
    name: 'Plus Offices',
    badge: 'Popular',
    rating: 4.8,
    area: 'Golf Course Extension Road',
    location: 'Golf Course Extension Road, Gurgaon',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/147093df143728af836c81546dbd69b5aa145d87.webp',
      'https://img.cofynd.com/images/latest_images_2024/c1bf9e9fa0d64decfe9271ddc7f9a0cb8ef31a71.webp',
      'https://img.cofynd.com/images/original/6c44a74a173e7796c7e1c93533413b6d4973423c.jpg',
      'https://img.cofynd.com/images/original/346caa67f2cfc71b4946eba543b6e220c0a30ec2.jpg',
      'https://img.cofynd.com/images/latest_images_2024/789e17c966bea32f3e2e7af0df6df86e11eb839c.webp',
      'https://img.cofynd.com/images/latest_images_2024/4447602096c5b98834d72cda6ba3d6cda02c9a09.webp'
    ]
  },
  // 36. Venture X Landmark Cyberpark - Golf Course Extension Road
  {
    id: 36,
    name: 'Venture X Landmark Cyberpark',
    badge: 'Popular',
    rating: 4.9,
    area: 'Golf Course Extension Road',
    location: 'Golf Course Extension Road, Gurgaon',
    price: '₹12,999',
    period: '/ Month',
    priceFormatted: '₹12,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/fa079ab7f69fc0c82e3f012b208d6af96bf6838e.webp',
      'https://img.cofynd.com/images/latest_images_2024/459696615d6363117e9ca594b5bb5a134612feec.webp',
      'https://img.cofynd.com/images/latest_images_2024/f8189b83704b32426996dae9ca953648dbd1aef8.webp',
      'https://img.cofynd.com/images/latest_images_2024/4b22b7ab3becf355a2170bca1d1c8015df007577.webp',
      'https://img.cofynd.com/images/latest_images_2024/ebd075b20931f2f72736d990716eed5cf4d3aa00.webp',
      'https://img.cofynd.com/images/latest_images_2024/02bd125ca96ba64cfa141ca9c4aa3e7f6790212a.webp'
    ]
  },
  // 37. Divine Workspace - Sector 27
  {
    id: 37,
    name: 'Divine Workspace',
    badge: null,
    rating: null,
    area: 'Sector 27',
    location: 'Sector 27, Gurugram',
    price: '₹14,000',
    period: '/ Month',
    priceFormatted: '₹14,000 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://divineworkspace.com/wp-content/uploads/2026/01/Gemini_Generated_Image_mxjlb9mxjlb9mxjl11.png',
      'https://divineworkspace.com/wp-content/uploads/elementor/thumbs/Conference-Room-rmnv40qwvqam3abvt63kcl6w2q9y8950v5wc6f7hww.jpg',
      'https://divineworkspace.com/wp-content/uploads/elementor/thumbs/Dedicated-Desk-e1777362509164-rmnvb78j364gs1wevrtyw9ynfovw10n7ipav5ik8ds.jpeg',
      'https://divineworkspace.com/wp-content/uploads/elementor/thumbs/Phonebooth1-rmnv58xbsxz38yjpn7713s1jzu87a10ep8k5qfdzsg.jpeg'
    ]
  },
  // 38. CoworkInsta - DLF Phase IV
  {
    id: 38,
    name: 'CoworkInsta',
    badge: 'Popular',
    rating: 4.8,
    area: 'DLF Phase IV',
    location: 'DLF Phase IV, Gurgaon',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://th.bing.com/th/id/OLC.zlFQUPMhb2NABw480x360?w=323&h=200&c=8&rs=1&qlt=90&o=6&cdv=1&dpr=1.3&pid=Local',
      'https://th.bing.com/th/id/OLC.Ecv5jpPUSThaug480x360?w=323&h=200&c=8&rs=1&qlt=90&o=6&cdv=1&dpr=1.3&pid=Local',
      'https://www.coworkinsta.com/images/cabins/2.png',
      'https://www.coworkinsta.com/images/cabins/3.png',
    ]
  },
  // 39. AltF Coworking JMD Empire Square - MG Road
  {
    id: 39,
    name: 'AltF Coworking JMD Empire Square',
    badge: 'Popular',
    rating: 4.6,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹10,999',
    period: '/ Month',
    priceFormatted: '₹10,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/357b95df09472d27232e9ca949f5ff10b6bb262a.webp',
      'https://img.cofynd.com/images/latest_images_2024/0359a90ae8f8cd8e99ce62885b105515d4538390.webp',
      'https://img.cofynd.com/images/latest_images_2024/dcb9d6f51ef87632380a797a67db8ff7069f4d02.webp',
      'https://img.cofynd.com/images/latest_images_2024/0151e1a984514d11bd222cc5a60382d96d4aebc1.webp',
      'https://img.cofynd.com/images/latest_images_2024/b95b6570c8cf46edac21dc64c765cd42d317c416.webp',
      'https://img.cofynd.com/images/latest_images_2024/752772b9a80b9109dbf3643569fdc71dc35c6619.webp'
    ]
  },
  // 40. Co Offiz - Golf Course Extension Road
  {
    id: 40,
    name: 'Co Offiz',
    badge: 'Premium',
    rating: 4.8,
    area: 'Golf Course Extension Road',
    location: 'Golf Course Extension Road, Gurgaon',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/9b190a724a00292cac2850dd582e59f267494729.jpg',
      'https://img.cofynd.com/images/original/278d9488bc0247c8aa6f5d323986ab96661dcafe.jpg',
      'https://img.cofynd.com/images/latest_images_2024/262c765a13a39dd8f25c58c479ae36a80a5f933a.webp',
      'https://img.cofynd.com/images/latest_images_2024/7dcaa9d67dc03a13b523937e9d67e355b8bcbef9.webp',
      'https://img.cofynd.com/images/latest_images_2024/ed89abd86772ccdbb11fd96a2fce4890dcadd3b3.webp'
    ]
  },
  // 41. AltF Coworking Suncity Success Tower - Golf Course Extension Road
  {
    id: 41,
    name: 'AltF Coworking Suncity Success Tower',
    badge: 'Premium',
    rating: 4.5,
    area: 'Golf Course Extension Road',
    location: 'Golf Course Extension Road, Gurgaon',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/701ea9ebae6080e6ee56d00319d76564195bcd43.webp',
      'https://img.cofynd.com/images/original/0117f0ea11d33cdfa2e96f57326c45cf05b428e1.jpg',
      'https://img.cofynd.com/images/latest_images_2024/7a73b48a08f200315aa945d56c94e242b4f573df.webp',
      'https://img.cofynd.com/images/latest_images_2024/76f61853294ab8ef7e4daaff247c80d8c03c23d7.webp',
      'https://img.cofynd.com/images/latest_images_2024/38566c42bc50359793d025d1ad59815a6da05bb4.webp',
      'https://img.cofynd.com/images/original/41435f0fd5d6eca65e733b3cab6b64c2f1485404.jpg'
    ]
  },
  // 42. Truworx - DLF Phase 1
  {
    id: 42,
    name: 'Truworx',
    badge: 'Popular',
    rating: 4.5,
    area: 'DLF Phase 1',
    location: 'DLF Phase 1, Gurgaon',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://backend.truworx.in/uploads/01_49e481b13a.png',
      'https://backend.truworx.in/uploads/The_Platina_6795a0922c.png',
      'https://backend.truworx.in/uploads/Golf_Course_Road_f896cd8653.png'
    ]
  },
  // 43. MiQB - Sector 18
  {
    id: 43,
    name: 'MiQB',
    badge: 'Popular',
    rating: 4.6,
    area: 'Sector 18',
    location: 'Sector 18, Gurgaon',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/9da94af653b311af11167906acfc94d950f46922.jpg',
      'https://img.cofynd.com/images/original/b14ab021173a216fb935c4595efe8a12f6d8b97d.jpg',
      'https://img.cofynd.com/images/latest_images_2024/1d8bd716fa20c891f7e5a9c9c22309e526d337b8.webp',
      'https://img.cofynd.com/images/latest_images_2024/3f13d66381c9aaead39c07949775a5baa4cad938.webp',
      'https://img.cofynd.com/images/latest_images_2024/c29deab6fff25058482eeb755e02f3496db7936e.webp',
      'https://img.cofynd.com/images/latest_images_2024/6ad867062211136000e40739dbdf6c50c1ae38ae.webp',
      'https://img.cofynd.com/images/original/4129cb5012772dece9a85cb8d429599916c807f2.jpg',
      'https://img.cofynd.com/images/original/4ac2562a6e06a4fe9d77cfa08234fa5a80716858.jpg'
    ]
  },
  // 44. Cowos - Sohna Road
  {
    id: 44,
    name: 'Cowos',
    badge: 'Popular',
    rating: 5.0,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/bb4f4d6aa08c88298efa372500a86d096de1da8f.webp',
      'https://img.cofynd.com/images/latest_images_2024/876cd5c53203bce542c4c81739db4cec04c90b3d.webp',
      'https://img.cofynd.com/images/latest_images_2024/78ddc2d4c6585cb7e67f2d2c4f8d68abf5369065.webp',
      'https://img.cofynd.com/images/latest_images_2024/d66c2576845a117924e82555eefb213b7623f7bc.webp',
      'https://img.cofynd.com/images/latest_images_2024/b1662883df43dbeba8402563abf6cf84bca0353d.webp'
    ]
  },
  // 45. Vatika First India Place - MG Road
  {
    id: 45,
    name: 'Vatika First India Place',
    badge: 'Popular',
    rating: 4.4,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹24,999',
    period: '/ Month',
    priceFormatted: '₹24,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/4157d5affcbc2d4723eca8c246e3e1f62ee3e635.jpg',
      'https://img.cofynd.com/images/latest_images_2024/3d646c6f9f3fe66b1c5389c530a660476eb67b3f.webp',
      'https://img.cofynd.com/images/original/fbb91ddd1fc422a67e3ab3691c2dd2308da09c56.jpg',
      'https://img.cofynd.com/images/original/1bf513a8b44732617339d0cca5fce792fb03e763.jpg',
      'https://img.cofynd.com/images/original/e0312c3494d46f0bc0c35eadb5371a4b63e185e4.jpg'
    ]
  },
  // 46. SupremeWork - Sohna Road
  {
    id: 46,
    name: 'SupremeWork',
    badge: 'Popular',
    rating: 4.9,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/8ec35f47432380c98a7a8cf62f83ce6bd27c05c4.webp',
      'https://img.cofynd.com/images/latest_images_2024/4f269b9705b546791cd67e5620c325d4fb35950f.webp',
      'https://img.cofynd.com/images/original/c78f372da50958a3138bdbc5d665770a1daab4b9.jpg',
      'https://img.cofynd.com/images/latest_images_2024/d9e67f8157a32e46e99addfb8c5cb967c9328d8c.webp',
      'https://img.cofynd.com/images/latest_images_2024/1c1d14ddcad14b815b0d7bf510924fef6767fbc9.webp',
      'https://img.cofynd.com/images/latest_images_2024/6b9cbedc6186aeef7f685ead43209a595c6492c7.webp',
      'https://img.cofynd.com/images/latest_images_2024/2347c825f451755c5fef37d45356b7579a8de469.webp'
    ]
  },
  // 47. STEP 01 WorkSpaces - Sector 32
  {
    id: 47,
    name: 'STEP 01 WorkSpaces',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 32',
    location: 'Sector 32, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/22743ae67cf475781c3476cfa3effdf967cb2af3.webp',
      'https://img.cofynd.com/images/original/46ccc5ebb0411ab0f5b0b219b46fb4488d5e2c28.jpg',
      'https://img.cofynd.com/images/original/38632147214f0bd14d62a91a175121a46e40cd27.jpg',
      'https://img.cofynd.com/images/original/984995ab9618064885077b32fe7d0aa7d1635e29.jpg',
      'https://img.cofynd.com/images/original/9e2552c27557e0a97bf0fcf932770791a648f358.jpg',
      'https://img.cofynd.com/images/original/2f87ccba882016a9d980f041e3bb40d1ab6e586a.jpg'
    ]
  },
  // 48. The OfficeBay - Manesar
  {
    id: 48,
    name: 'The OfficeBay',
    badge: 'Popular',
    rating: 3.6,
    area: 'Manesar',
    location: 'Manesar, Gurgaon',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://theofficebay.in/assets/img/3.jpg',
      'https://theofficebay.in/assets/img/1.jpg',
      'https://theofficebay.in/assets/img/2.jpg',
      'https://theofficebay.in/assets/img/sl4.jpg'
    ]
  },
  // 49. Vatika Business Centre Vatika Triangle - MG Road
  {
    id: 49,
    name: 'Vatika Business Centre Vatika Triangle',
    badge: 'Popular',
    rating: 4.2,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/9abe93e3d903c645d2a0666f908d77dd43618f4b.jpg',
      'https://img.cofynd.com/images/original/672d4dd6f3bb71a52399412bb26b458eeac474b2.jpg',
      'https://img.cofynd.com/images/original/4469d9bec9a0d8b18854cf94fe932af8c859412a.jpg',
      'https://img.cofynd.com/images/original/47f2384e892f409c894f8c9fa82595fbadb843ed.jpg',
      'https://img.cofynd.com/images/latest_images_2024/8308a62769daa03537f8454f77dbb15823768479.webp',
      'https://img.cofynd.com/images/original/ab3033d5dcab5fbdfbb34158680ac33ab1e5a2de.jpg',
      'https://img.cofynd.com/images/latest_images_2024/a59cdbb2b1c43425823ff98836e93e51e6508bcd.webp'
    ]
  },
  // 50. Shulin Enterprises - Sector 3
  {
    id: 50,
    name: 'Shulin Enterprises',
    badge: 'Special Offer',
    rating: 3.8,
    area: 'Sector 3',
    location: 'Sector 3, Gurgaon',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [] // TODO: add images
  },
  // 51. Altrade Platina Building - MG Road
  {
    id: 51,
    name: 'Altrade Platina Building',
    badge: 'Popular',
    rating: 4.4,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹13,999',
    period: '/ Month',
    priceFormatted: '₹13,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/8dd0c9d447eeb213e73c9ef36cced8edec8276c7.jpg',
      'https://img.cofynd.com/images/latest_images_2024/78959c9f5c2b8a7fb6181935eb90a2069f904e40.webp',
      'https://img.cofynd.com/images/original/b53488fb995f49cf0e60f51b38e71f319987ceed.jpg',
      'https://img.cofynd.com/images/latest_images_2024/cc1fb722963f1755a07b9d18d3cc6edfd13e05c5.webp',
      'https://img.cofynd.com/images/latest_images_2024/155c5685f1198229185ffb0691e105f24888a08d.webp'
    ]
  },
  // 52. ThinkValley B-17 - Sector 32
  {
    id: 52,
    name: 'ThinkValley B-17',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 32',
    location: 'Sector 32, Gurgaon',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/5f07c1a45a935c1318315095f1cb887ef360386f.jpg',
      'https://img.cofynd.com/images/latest_images_2024/200b42d1452cbdeeafc1ea2a35400a32af08c953.webp',
      'https://img.cofynd.com/images/latest_images_2024/fbf63ffecb198c7637201a91b59e48057241a513.webp',
      'https://img.cofynd.com/images/latest_images_2024/7c92ed132ed6df001e4b40ea5b1b7da9d677027f.webp',
      'https://img.cofynd.com/images/latest_images_2024/afeaedf623353a7e0514768ecb62011532686d72.webp',
      'https://img.cofynd.com/images/latest_images_2024/2dba13efdcb7d3015e7415b3fdbf93b05a7554fc.webp',
      'https://img.cofynd.com/images/original/9ae899282f2c2e96cea4ac9b610498998f2ed7d0.jpg'
    ]
  },
  // 53. 91springboard - Udyog Vihar
  {
    id: 53,
    name: '91springboard',
    badge: 'Popular',
    rating: 4.4,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/bb3750f63db36199103bef178a4ccf691186672d.jpg',
      'https://img.cofynd.com/images/original/4633b1f7db5cb4d092a9fd43f7f1724ee5979110.jpg',
      'https://img.cofynd.com/images/original/0f69a2654cc56ce52b573d0b6806ff2d27070aa6.jpg',
      'https://img.cofynd.com/images/original/818cf18dc2023c99c962b711e762094d088f8415.jpg',
      'https://img.cofynd.com/images/original/7d67e2b016210f3b2c70ec2696b457aab4a230c6.jpg',
      'https://img.cofynd.com/images/original/59a94c451b2d4499e3a6cbb5a33df2d8f06601cd.jpg',
      'https://img.cofynd.com/images/original/bf3727f21974b63559f8a9a1a0363a0cc9657bba.jpg',
      'https://img.cofynd.com/images/latest_images_2024/df83899a67768631ffea64b6cd30624328653eca.webp'
    ]
  },
  // 54. Work Bee India JMD Megapolis - Sohna Road
  {
    id: 54,
    name: 'Work Bee India JMD Megapolis',
    badge: 'Popular',
    rating: 4.7,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/a025865e5cd90cd092e2d1ceaedd7f649254899a.webp',
      'https://img.cofynd.com/images/original/78f8b035cf28bf5df60f8a6818ed8fcf82cbcb13.jpg',
      'https://img.cofynd.com/images/latest_images_2024/d40dcd101f75e2f20d8952c960b14ce5178e7420.webp',
      'https://img.cofynd.com/images/latest_images_2024/fb527f724b17518d4f4b871d0bd2456bfd4bcfb4.webp',
      'https://img.cofynd.com/images/original/bf126997b1ae6c85f043166799399f92ac68cbed.jpg',
      'https://img.cofynd.com/images/latest_images_2024/81a03ad41477a41e87d57a6332e45fc6b65a4f71.webp'
    ]
  },
  // 55. Workie - Sector 44
  {
    id: 55,
    name: 'Workie',
    badge: 'Popular',
    rating: 4.0,
    area: 'Sector 44',
    location: 'Sector 44, Gurgaon',
    price: '₹10,499',
    period: '/ Month',
    priceFormatted: '₹10,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/f60d1cd6daa284296bc9115d3b1f8a78907d565c.jpg',
      'https://img.cofynd.com/images/original/ed08a7034c3fe3118414ada91e4690937040f27e.jpg',
      'https://img.cofynd.com/images/original/11e5ad94fbfbb01b8a2ae2ca29681a653e7a88dd.jpg',
      'https://img.cofynd.com/images/original/3a5b744c49cc64c7c1e1ca2c00830be4c46e3db0.jpg',
      'https://img.cofynd.com/images/original/0281752763638765d35b16bd465ef40294718804.jpg',
      'https://img.cofynd.com/images/original/478c35d672c5b8205c11dbe780acb8419c8f5fba.jpg',
      'https://img.cofynd.com/images/original/f05046bc95b9dc669895ecaea9eb2c612e389132.jpg',
      'https://img.cofynd.com/images/original/37264fd99bf6ba9e6f7337e0a808f556ee0b8794.jpg'
    ]
  },
  // 56. Nimble Cowork - Udyog Vihar
  {
    id: 56,
    name: 'Nimble Cowork',
    badge: 'Popular',
    rating: 4.4,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/25a73d3ce02c88ad47675a1b49bc8fef938961af.jpg',
      'https://img.cofynd.com/images/original/2fb0fd4a0be647b5f2384fc5efa66ec985da471a.jpg',
      'https://img.cofynd.com/images/original/2564fb90911cca6bb7e664efe9b04a6cfcb67def.jpg',
      'https://img.cofynd.com/images/original/aad1375b7eff1f9b10306f2e399bb21252460c7a.jpg',
      'https://img.cofynd.com/images/original/924969dd76bbde1ec7821b1f0b5ce3d1a80ab586.jpg',
      'https://img.cofynd.com/images/original/f36601ed479cb2230da28192a0a64785dbe9616b.jpg',
      'https://img.cofynd.com/images/original/ce66e149bcd394a10b780cdb06a9611dcb3dbb5f.jpg'
    ]
  },
  // 57. Apeejay Business Centre - DLF Cyber City
  {
    id: 57,
    name: 'Apeejay Business Centre',
    badge: 'Popular',
    rating: 5.0,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹23,999',
    period: '/ Month',
    priceFormatted: '₹23,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f04c0d783082b51e8f90ff2f6e796118b688f630.webp',
      'https://img.cofynd.com/images/latest_images_2024/0b0da2842461d74f522f58ede4ef1a22a2610f88.webp',
      'https://img.cofynd.com/images/latest_images_2024/c6e03b8a4e8b2e5a7b753b6d25f392bcbabe4f3b.webp',
      'https://img.cofynd.com/images/latest_images_2024/af9d67978cb3c7b682a7cd17d38c21b30e6dfb7a.webp',
      'https://img.cofynd.com/images/latest_images_2024/81a827b6cf37a77598205545dc808cd135cfb838.webp',
      'https://img.cofynd.com/images/latest_images_2024/4e7075bbfff0c4e98e1e8a6df5d863a1b52f5d2d.webp'
    ]
  },
  // 58. Plus Offices - Sector 44
  {
    id: 58,
    name: 'Plus Offices',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sector 44',
    location: 'Sector 44, Gurgaon',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/56f4e684e4b15a569422f8ef61e356579eb9a34c.webp',
      'https://img.cofynd.com/images/latest_images_2024/7ff56844a6928864602f48c1ba930b136427425d.webp',
      'https://img.cofynd.com/images/original/d5e3d09e77bec35c8c28fc86d8baef3527dbe685.jpg',
      'https://img.cofynd.com/images/latest_images_2024/b422ebc0a3b8cf0a3836232d55915d72d000b9e0.webp',
      'https://img.cofynd.com/images/latest_images_2024/07a0ad9ebc4f3acd7328ac370b0ba77cb54a3904.webp'
    ]
  },
  // 59. The Office Pass - Unitech Cyber Park
  {
    id: 59,
    name: 'The Office Pass',
    badge: 'Popular',
    rating: 4.4,
    area: 'Unitech Cyber Park',
    location: 'Unitech Cyber Park, Gurgaon',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/ceabc9bf9f7c4c0f554695dd32b5230085eb1b80.webp',
      'https://img.cofynd.com/images/latest_images_2024/c82e809ac1ac571dca66a481ce5775d5f0f94625.webp',
      'https://img.cofynd.com/images/latest_images_2024/a0cf23a85bc1b3c8dcbd6fca0bcd1bc48a5202cc.webp',
      'https://img.cofynd.com/images/latest_images_2024/583fcf8d25a674e7b526e358c1428f3ffe7aa27e.webp',
      'https://img.cofynd.com/images/latest_images_2024/bba8781baaa5b794e0eda3d9ed3c871ec4229fa9.webp'
    ]
  },
  // 60. Cube8 MM Towers - Udyog Vihar
  {
    id: 60,
    name: 'Cube8 MM Towers',
    badge: 'Popular',
    rating: 4.3,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/c5aac62d9446803990235fe99820569c955c99f9.webp',
      'https://img.cofynd.com/images/original/bf6cbce7ed4f8ff85f4eeaad5c571f031d8e0288.jpg',
      'https://img.cofynd.com/images/latest_images_2024/4b3d7226c6e55453b5673f8fc1160f8b9c579e52.webp',
      'https://img.cofynd.com/images/latest_images_2024/cd0d53c8e42e6ce70b11959d9ff497d977319301.webp',
      'https://img.cofynd.com/images/original/8d8b572f7946dee677e17d59cb2c763d43d712c7.jpg'
    ]
  },
  // 61. AltF Plaza Mall - MG Road
  {
    id: 61,
    name: 'AltF Plaza Mall',
    badge: 'Popular',
    rating: 4.1,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/058d19ea408da2927078adf1f735c81ef7ca71c4.jpg',
      'https://img.cofynd.com/images/original/41d1e473425a106136043b7a51b542df3f56e1a6.jpg',
      'https://img.cofynd.com/images/latest_images_2024/5bed144bd19afdd058001ab2ddecc89258e7ae3b.webp',
      'https://img.cofynd.com/images/latest_images_2024/bd67b1671a92118eff8b091d7149830c92c476e7.webp',
      'https://img.cofynd.com/images/latest_images_2024/1f64bac35b25dc994cc91f5f9ab1dbfada02e8b9.webp',
      'https://img.cofynd.com/images/latest_images_2024/8936301287ef35b1d1cbdedbffcea1c06b9dc7cf.webp'
    ]
  },
  // 62. My Offiz - Udyog Vihar
  {
    id: 62,
    name: 'My Offiz',
    badge: 'Popular',
    rating: 4.2,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/0b4ed11704a082dce2f53741ee3a16599ab29e29.webp',
      'https://img.cofynd.com/images/latest_images_2024/c210c000c65d44dfd3b515d99c58c5cb49d66da8.webp',
      'https://img.cofynd.com/images/latest_images_2024/d5010934ddab23e58666d1e2b2f74bb3c4b8f570.webp',
      'https://img.cofynd.com/images/latest_images_2024/8b7773b8bfd363949fea8a133bca45975f2caeb8.webp',
      'https://img.cofynd.com/images/latest_images_2024/2078dac6dc3494111484fe1b55c8a5aab2041078.webp',
      'https://img.cofynd.com/images/latest_images_2024/39feea9ee1202a95a919422454819cf153610a2e.webp'
    ]
  },
  // 63. Desker - Golf Course Road
  {
    id: 63,
    name: 'Desker',
    badge: 'Popular',
    rating: 4.9,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹19,999',
    period: '/ Month',
    priceFormatted: '₹19,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://cdn.coworkingcafe.com/images/9CD7F362-EDA6-4D12-B90F-E55510A117F6/81679.jpg",
      "https://cdn.coworkingcafe.com/images/5E6D1D75-5F8E-43B8-9621-E8924FFD174A/81679.jpg",
      "https://cdn.coworkingcafe.com/images/38F29A80-1114-4C64-8FED-61E9CEC5A2C0/81679.jpg",
      "https://cdn.coworkingcafe.com/images/389B4B39-6269-4B54-A90A-B9E6C771970D/81679.jpg",
      "https://cdn.coworkingcafe.com/images/A00E02EE-521A-4F90-8EE0-87047CCA4933/81679.jpg",
      "https://cdn.coworkingcafe.com/images/2638F003-48B5-445D-9D87-10BE733F4F91/81679.jpg",
      "https://cdn.coworkingcafe.com/images/C6F9071E-262B-424A-B1D5-FED9E81A7D3A/81679.jpg",
      "https://cdn.coworkingcafe.com/images/59485DB6-38BE-48CC-98C8-F45BB1EC71AB/81679.jpg",
      "https://cdn.coworkingcafe.com/images/BBDD6B55-41A1-4AF6-9234-073AB14FC6D0/81679.jpg",
      "https://cdn.coworkingcafe.com/images/9E289038-7115-480C-9983-32C7505470C7/81679.jpg"

    ]
  },
  // 64. CorporatEdge Cyber Hub - DLF Cyber City
  {
    id: 64,
    name: 'CorporatEdge Cyber Hub',
    badge: 'Popular',
    rating: 4.7,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹24,999',
    period: '/ Month',
    priceFormatted: '₹24,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/dc04f70250ffedaaf78b3dc0c20db21446174361.jpg',
      'https://img.cofynd.com/images/original/50752ec06ce8400dbc2c4923ca360a80e78a5a59.jpg',
      'https://img.cofynd.com/images/latest_images_2024/3727a65246d638ef2a8b197b363ae4ddf9e89e7e.webp',
      'https://img.cofynd.com/images/original/17b641cc63d603716c3a9a578c49b3069890a4a1.jpg',
      'https://img.cofynd.com/images/original/27490facef5b547c25fdebe0cd49fc72600fe979.jpg',
      'https://img.cofynd.com/images/original/a4353ffb384ceaaad223b7a7f2062ef5a522476a.jpg'
    ]
  },
  // 65. iWorkk - Sector 14
  {
    id: 65,
    name: 'iWorkk',
    badge: 'Popular',
    rating: 4.8,
    area: 'Sector 14',
    location: 'Sector 14, Gurgaon',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/a09ec8f5b8fa5d726bda3fe29ae74108bd979aef.jpg',
      'https://img.cofynd.com/images/original/f55f3cffbca54cfcc939176bcb4d6d3b6711d5c8.jpg',
      'https://img.cofynd.com/images/original/11215a539697a24f595b97e148ecd95619571569.jpg',
      'https://img.cofynd.com/images/original/ac5cd7bbef9eac150afac54d1facae5ac5a01ec6.jpg',
      'https://img.cofynd.com/images/original/94012a52ecb1c8b4e3297ed8809f7f3466a7d3f1.jpg'
    ]
  },
  // 66. CoElevate DLF Corporate Greens - Sector 74A
  {
    id: 66,
    name: 'CoElevate DLF Corporate Greens',
    badge: 'Popular',
    rating: 4.9,
    area: 'Sector 74A',
    location: 'Sector 74A, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://officehub.s3.amazonaws.com/Assets/images/50118/Serviced-Office-%28Classic%29-Haryana-Gurugram-Sector-74a-unnamed.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/51762/Serviced-Office-%28Classic%29-Haryana-Gurugram-Tower-1-Sector-74a-20220903173230-1024x461.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/50118/Serviced-Office-%28Classic%29-Haryana-Gurugram-Sector-74a-2022-09-03.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/51762/Serviced-Office-%28Classic%29-Haryana-Gurugram-Tower-1-Sector-74a-IMG-20230511-WA0020-1024x576.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/50118/Serviced-Office-%28Classic%29-Haryana-Gurugram-Sector-74a-2022-01-17.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/50118/Serviced-Office-%28Classic%29-Haryana-Gurugram-Sector-74a-2022-03-02.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/50118/Serviced-Office-%28Classic%29-Haryana-Gurugram-Sector-74a-2023-11-22.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/51762/Serviced-Office-%28Classic%29-Haryana-Gurugram-Tower-1-Sector-74a-img4002-1-1024x768.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/51762/Serviced-Office-%28Classic%29-Haryana-Gurugram-Tower-1-Sector-74a-DLF-Corporate-Greens---Tower-112206920180522001.jpg",

    ]
  },
  // 67. India Accelerator - MG Road
  {
    id: 67,
    name: 'India Accelerator',
    badge: 'Popular',
    rating: 4.6,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹13,499',
    period: '/ Month',
    priceFormatted: '₹13,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f35d596e4d6bf6319d40c182aa1203e7a43d88f0.webp',
      'https://img.cofynd.com/images/latest_images_2024/ba692f5a1a2dbe925252c63ba23f842c20ec018d.webp',
      'https://img.cofynd.com/images/latest_images_2024/0abd74944c1d4e59c172028fb68daf16dcb51afe.webp',
      'https://img.cofynd.com/images/latest_images_2024/e31ba091b4da9426c739e9dc0af4b8df3e49f53b.webp',
      'https://img.cofynd.com/images/latest_images_2024/5b7d14eaac593730fc8bf0b3a7d9b534c432446d.webp'
    ]
  },
  // 68. Coactives - Sector 44
  {
    id: 68,
    name: 'Coactives',
    badge: 'Popular',
    rating: 4.8,
    area: 'Sector 44',
    location: 'Sector 44, Gurgaon',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/771049adb3279f259b94248b8175b0177646d738.jpg',
      'https://img.cofynd.com/images/latest_images_2024/48d7dea67181b0a6af69e3e97e1a2234cb6a36b4.webp',
      'https://img.cofynd.com/images/latest_images_2024/1fd59e2244d92f363dbbde23fffe8ac1037ded44.webp',
      'https://img.cofynd.com/images/original/a2f11379e6790e5e931d98dc4e6e2beeec264730.jpg',
      'https://img.cofynd.com/images/latest_images_2024/6dd854edc5b9912c69a8ddd32a57721619881dd2.webp',
      'https://img.cofynd.com/images/original/12e60417d3bbad7c4c5d8518a697ddd12013554c.jpg',
      'https://img.cofynd.com/images/original/af6121b44cadd726eac9520f0b6c286ac9167181.jpg'
    ]
  },
  // 69. Vorkzone JMD Megapolis - Sohna Road
  {
    id: 69,
    name: 'Vorkzone JMD Megapolis',
    badge: 'Special Offer',
    rating: 3.8,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/25b5ffca273dd4adf9353c3eebae063ea5f8fc0f.webp',
      'https://img.cofynd.com/images/latest_images_2024/1c3253737518cd81d9ed3b7e41a8c9b00fad4e56.webp',
      'https://img.cofynd.com/images/latest_images_2024/ecea4bb37d0ace4a10deedb75c3e4fa46d502a01.webp',
      'https://img.cofynd.com/images/latest_images_2024/207a7f52526ed6952b64093c242e709a3db5405d.webp',
      'https://img.cofynd.com/images/latest_images_2024/24697cf345fae4788d0833a396a2fbd4ca235285.webp'
    ]
  },
  // 70. Incuspaze - Udyog Vihar
  {
    id: 70,
    name: 'Incuspaze',
    badge: 'Popular',
    rating: 4.5,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5b1bd7bb2e07e45333c1ed034e653fe4271edb60.webp',
      'https://img.cofynd.com/images/latest_images_2024/cbc1e70336d99bba5df69db26d149ceb64ca2109.webp',
      'https://img.cofynd.com/images/latest_images_2024/09176d030824c878427be4384f2d2e348797c27f.webp',
      'https://img.cofynd.com/images/latest_images_2024/8de6d3851be1a63484e458bceacc0ac81dc4bf91.webp',
      'https://img.cofynd.com/images/latest_images_2024/c1969a765fe6b743519ddb7380795fb3260badb8.webp',
      'https://img.cofynd.com/images/latest_images_2024/efb6f77b9ef0af73bc2610c02f54c5d836271463.webp'
    ]
  },
  // 71. Oahfeo Workspaces - Sector 46
  {
    id: 71,
    name: 'Oahfeo Workspaces',
    badge: 'Popular',
    rating: 4.8,
    area: 'Sector 46',
    location: 'Sector 46, Gurgaon',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/9495771ff84aece577d6b73631e5bf8f4699f042.webp',
      'https://img.cofynd.com/images/original/c88775fa5d769a803cb4d10013fa13eb56e527a8.jpg',
      'https://img.cofynd.com/images/original/d3d838053fab3d89a3e409e88a7d9185b88995b7.jpg',
      'https://img.cofynd.com/images/original/e8a9501cab724849e2d53f9ae0d9e69f74e4c5eb.jpg',
      'https://img.cofynd.com/images/original/0b7710299bb28d0f3cf731a24ca9e47260661cf9.jpg',
      'https://img.cofynd.com/images/original/fa43f5d14e3aecf6701fbde4ee66367518668d02.jpg'
    ]
  },
  // 72. 91springboard - Udyog Vihar
  {
    id: 72,
    name: '91springboard',
    badge: 'Popular',
    rating: 4.0,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/ecafa974d23d516fab40e391df950a2782ca25d5.webp',
      'https://img.cofynd.com/images/latest_images_2024/5dab9cfb3b6624e89649b7235a465b1ef1eaa966.webp',
      'https://img.cofynd.com/images/latest_images_2024/e8111dd45b932628821cb3166f8779a261acc129.webp',
      'https://img.cofynd.com/images/latest_images_2024/a17ac852ac28355d6c0834e7429c6b951e976102.webp',
      'https://img.cofynd.com/images/latest_images_2024/947e2c156c9b0757de0c5f263772a18098e1dd25.webp',
      'https://img.cofynd.com/images/latest_images_2024/55e3e19b32da98fe1506f98f1920f9aa9b629985.webp'
    ]
  },
  // 73. Innohouse - Sector 32
  {
    id: 73,
    name: 'Innohouse',
    badge: 'Popular',
    rating: 4.2,
    area: 'Sector 32',
    location: 'Sector 32, Gurgaon',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/5a9361ca1345fdcfbece2d578558bcea640164e7.webp',
      'https://img.cofynd.com/images/latest_images_2024/6d8725cbfe3f4d59e4b8cc1489b52eeb430b9c19.webp',
      'https://img.cofynd.com/images/latest_images_2024/99bc50c112c5bc5613e9ec4caa75a29851d6a387.webp',
      'https://img.cofynd.com/images/latest_images_2024/7963c1f4997b89b99a197a8af14984a5b240ad9b.webp',
      'https://img.cofynd.com/images/latest_images_2024/e631c030fe9d2d51840b26732e6c3e0daf0c5468.webp'
    ]
  },
  // 74. Redbasil - DLF Phase 1
  {
    id: 74,
    name: 'Redbasil',
    badge: 'Popular',
    rating: 4.9,
    area: 'DLF Phase 1',
    location: 'DLF Phase 1, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/w_750/f_auto/workspaces/redbasil-ashokmarg/dedicated/csycmv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_384/f_auto/workspaces/redbasil-ashokmarg/dedicated/vnf5q3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_384/f_auto/workspaces/redbasil-ashokmarg/dedicated/u73vfn.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_384/f_auto/workspaces/redbasil-ashokmarg/dedicated/nxrcd5.jpg'
    ]
  },
  // 75. Team CoWork - Sector 26
  {
    id: 75,
    name: 'Team CoWork',
    badge: 'Popular',
    rating: 4.1,
    area: 'Sector 26',
    location: 'Sector 26, Gurgaon',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/c255113cc1beaebdd49df72f2dbbcfa11041376b.webp',
      'https://img.cofynd.com/images/latest_images_2024/54043fc0e39964d277c426b890caf99da77e8157.webp',
      'https://img.cofynd.com/images/latest_images_2024/6c472b06a7d7ac2e5ae0cb3bf05732528ad779b1.webp',
      'https://img.cofynd.com/images/latest_images_2024/2b87f0d7e40503cd6d9bcc963a5d3a684f518486.webp',
      'https://img.cofynd.com/images/original/93759afc9d41a2b3b4b87d072f31352df977e497.jpg',
      'https://img.cofynd.com/images/original/d84a5322ccc7c61132169d70306c776c8dfaa47b.jpg'
    ]
  },
  // 76. BuildUP WorkSpaces - Udyog Vihar
  {
    id: 76,
    name: 'BuildUP WorkSpaces',
    badge: 'Popular',
    rating: 5.0,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/2c9f3e11e19a652e21a0406ae0e2d215b9a0af48.webp',
      'https://img.cofynd.com/images/latest_images_2024/d6c37d26348f5530e438c94b82b464adcd9e4466.webp',
      'https://img.cofynd.com/images/latest_images_2024/436484f26a149d6f36b66ea63494f514845cbd65.webp',
      'https://img.cofynd.com/images/latest_images_2024/fd128ca7cece811156ff45d161c072041cb5e13b.webp',
      'https://img.cofynd.com/images/latest_images_2024/8f25e853857ad98fc53f3a46c3e0cd6e3d7b437f.webp'
    ]
  },
  // 77. 91Springboard Vatika Triangle - MG Road
  {
    id: 77,
    name: '91Springboard Vatika Triangle',
    badge: 'Popular',
    rating: 4.4,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹15,999',
    period: '/ Month',
    priceFormatted: '₹15,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/e4f8692d45e9524394e898ab703367708f63a8d8.webp',
      'https://img.cofynd.com/images/latest_images_2024/9fea82fbb665e62d86d1e122cd423bd6bd94560a.webp',
      'https://img.cofynd.com/images/latest_images_2024/23447cfc1374ed53e0fc3a4d242a0c0987493302.webp',
      'https://img.cofynd.com/images/latest_images_2024/b9848cd9d153212595d038b67eb38a31e0f38a36.webp',
      'https://img.cofynd.com/images/latest_images_2024/64e1faac7cde403acdb35fd3296d2c4dc2171c01.webp',
      'https://img.cofynd.com/images/latest_images_2024/fa90de415cbc84ecb38e7596907b12c32be1b4a7.webp',
      'https://img.cofynd.com/images/latest_images_2024/7400623df8714d25fbbaec18167dd719a1688b9f.webp'
    ]
  },
  // 78. 91springboard DLF Building No 7A - DLF Cyber City
  {
    id: 78,
    name: '91springboard DLF Building No 7A',
    badge: 'Popular',
    rating: 4.5,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹24,999',
    period: '/ Month',
    priceFormatted: '₹24,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://www.91springboard.com/wp-content/uploads/2024/01/DLF-Cyber-City-Desk.png",
      "https://www.91springboard.com/wp-content/uploads/2023/11/DLF-1.png",
      "https://www.91springboard.com/wp-content/uploads/2023/11/DLF-2.png",
      "https://www.91springboard.com/wp-content/uploads/2023/11/DLF-3.png",
      "https://www.91springboard.com/wp-content/uploads/2023/11/DLF-4.png",
      "https://www.91springboard.com/wp-content/uploads/2023/11/DLF-5.png",
      "https://www.91springboard.com/wp-content/uploads/2023/11/DLF-6.png",
      "https://officehub.s3.amazonaws.com/Assets/images/51378/Serviced-Office-%28Classic%29-Haryana-Haryana-7a-Dlf-Cyber-City-Dlf-Phase-2-Sector-24-mbgwtz.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/33638/Coworking-Space-Haryana-Gurugram-Dlf-Phase-2-Sector-242023-12-06%20%286%29.jpg",
      "https://officehub.s3.amazonaws.com/Assets/images/33638/Coworking-Space-Haryana-Gurugram-Dlf-Phase-2-Sector-242023-12-06%20%2810%29.jpg"

    ]
  },
  // 79. One Culture Tech Garden - Sector 35
  {
    id: 79,
    name: 'One Culture Tech Garden',
    badge: 'Popular',
    rating: 4.0,
    area: 'Sector 35',
    location: 'Sector 35, Gurgaon',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [] // TODO: add images
  },
  // 80. Oahfeo Workspaces Backyard - Sector 39
  {
    id: 80,
    name: 'Oahfeo Workspaces Backyard',
    badge: 'Popular',
    rating: 4.9,
    area: 'Sector 39',
    location: 'Sector 39, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/8100f631d979a701ff6195f414b5956c5cd19e25.webp',
      'https://img.cofynd.com/images/latest_images_2024/6cac8c89bb9240c1b8515ea13ecf68c018135881.webp',
      'https://img.cofynd.com/images/latest_images_2024/079f49b2f5b205f368fdfd3afa06ff38ef7943f9.webp',
      'https://img.cofynd.com/images/latest_images_2024/6fa1eee40690206302900363179f2caaa37d0f6c.webp',
      'https://img.cofynd.com/images/latest_images_2024/8f2a0a107f6acb201d37449290b3be394e8bf2cc.webp'
    ]
  },
  // 81. TRIOS Akaya One - Sector 32
  {
    id: 81,
    name: 'TRIOS Akaya One',
    badge: 'Popular',
    rating: 4.9,
    area: 'Sector 32',
    location: 'Sector 32, Gurgaon',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/e1a43f80b88622656cbb8c3b2647eff729359ddd.webp',
      'https://img.cofynd.com/images/latest_images_2024/205fd677389eab3f9aa633d9612e5b93c351e08a.webp',
      'https://img.cofynd.com/images/latest_images_2024/63dd0d9d31cbc6d38399274866b8aeda88460b98.webp',
      'https://img.cofynd.com/images/latest_images_2024/1529283127543a90e046ce8c62a1f2210e5ac4b9.webp',
      'https://img.cofynd.com/images/latest_images_2024/4ddb4571a4a50451c0c2d33ffd71be24203091b8.webp'
    ]
  },
  // 82. The Circle Work Palm Spring Plaza - Golf Course Road
  {
    id: 82,
    name: 'The Circle Work Palm Spring Plaza',
    badge: 'Popular',
    rating: 4.8,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹19,999',
    period: '/ Month',
    priceFormatted: '₹19,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/the-circlework-palm-springs-plaza/exterior/uj92qa.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/the-circlework-palm-springs-plaza/dedicated/9u7t7x.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/the-circlework-palm-springs-plaza/dedicated/sjye5h.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/the-circlework-palm-springs-plaza/dedicated/cc42sz.jpg'
    ]
  },
  // 83. One Co.Work - Sushant Lok Phase I
  {
    id: 83,
    name: 'One Co.Work',
    badge: 'Popular',
    rating: 3.8,
    area: 'Sushant Lok Phase I',
    location: 'Sushant Lok Phase I, Gurgaon',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/one-co.work-sushant-lok/dedicated/832jdd.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/one-co.work-sushant-lok/dedicated/ys2pb7.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/one-co.work-sushant-lok/dedicated/rcw7t4.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/one-co.work-sushant-lok/dedicated/8h7yde.jpg'
    ]
  },
  // 84. SupremeWork - Sohna Road
  {
    id: 84,
    name: 'SupremeWork',
    badge: null,
    rating: 4.7,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imgcdn.houssed.com/assets/Files/Projects/147020/Sample%20Apartment/trade-2-1755430981-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/147020/Sample%20Apartment/trade-3-1755430981-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/147020/Sample%20Apartment/trade-1-1755430981-thumb.webp'
    ]
  },
  // 85. Startup Office 101 - Golf Course Road
  {
    id: 85,
    name: 'Startup Office 101',
    badge: 'Popular',
    rating: 5.0,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://startupoffices.in/wp-content/uploads/2021/07/office-seating-space-gurgaon-office-potrait.jpg",
      "https://startupoffices.in/wp-content/uploads/2023/08/types-of-office-space-scaled.jpg",
      "https://startupoffices.in/wp-content/uploads/2023/08/flexible-working-office-1024x678.jpg",
      "https://startupoffices.in/wp-content/uploads/2024/01/shared-work-space-min-1024x683.jpg"
    ]
  },
  // 86. Regus Unitech Cyber Park 2 - Sector 39
  {
    id: 86,
    name: 'Regus Unitech Cyber Park 2',
    badge: 'Premium',
    rating: 4.3,
    area: 'Sector 39',
    location: 'Sector 39, Gurgaon',
    price: '₹12,999',
    period: '/ Month',
    priceFormatted: '₹12,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/regus-unitech-cyber-park-2/vypjse.jpg',
      "https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/96782d8f-34d0-470e-1e26-559e09c2c300/public",
      "https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/bf9f70b3-fe21-4896-8de7-0c22a9e9ad00/public",
      "https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/085120df-dc85-4b70-c8fd-49f08d1ad400/public"

    ]
  },
  // 87. India Accelerator - Golf Course Extension
  {
    id: 87,
    name: 'India Accelerator',
    badge: 'Popular',
    rating: 4.8,
    area: 'Golf Course Extension',
    location: 'Golf Course Extension, Gurgaon',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/india-accelerator-bptp-centra-one/flexi/plans/flexi-desk/qt3ft7.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/india-accelerator-bptp-centra-one/flexi/9s7e7j.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/india-accelerator-bptp-centra-one/flexi/yqc7f9.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/india-accelerator-bptp-centra-one/flexi/ggz524.jpg'
    ]
  },
  // 88. Spring House Welldone Tech Park - Sohna Road
  {
    id: 88,
    name: 'Spring House Welldone Tech Park',
    badge: 'Popular',
    rating: 4.9,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.coworkingcafe.com:443/images/F85E87A6-7E05-4F28-9A50-B39782CCF236/22863.jpg',
      'https://cdn.coworkingcafe.com:443/images/8DF8D76A-E674-4B29-B24D-A1D9B8D16BAF/22863.jpg',
      'https://cdn.coworkingcafe.com:443/images/41338FFB-49C1-46ED-BD18-806FD9CB3092/22863.jpg',
      'https://cdn.coworkingcafe.com:443/images/ABFD2418-4B64-4F4A-BE6A-16537AE65766/22863.jpg',
      'https://cdn.coworkingcafe.com:443/images/A039136F-3BA6-43A3-9360-43C0DEF98457/22863.jpg',
      'https://cdn.coworkingcafe.com:443/images/1E70D182-70FF-48E5-BA54-5684F30C58FA/22863.jpg'
    ]
  },
  // 89. DesqWorx JMD Megapolis - Sohna Road
  {
    id: 89,
    name: 'DesqWorx JMD Megapolis',
    badge: 'Popular',
    rating: 4.6,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imgcdn.houssed.com/assets/Files/Projects/146630/Sample%20Apartment/dddd-1-1755093871-thumb.webp',
      "https://imgcdn.houssed.com/assets/Files/Projects/146630/Sample%20Apartment/dddd-1-1755093871.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146630/Sample%20Apartment/dddd-2-1755093871.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146630/Sample%20Apartment/dddd-3-1755093871.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146630/Sample%20Apartment/dddd-4-1755093871.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146630/Sample%20Apartment/dddd-5-1755093871.webp"

    ]
  },
  // 90. Altrade Business Centre - DLF Cyber City
  {
    id: 90,
    name: 'Altrade Business Centre',
    badge: 'Popular',
    rating: 4.8,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹14,999',
    period: '/ Month',
    priceFormatted: '₹14,999 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://cdn.coworkingcafe.com/images/2265A32E-2703-4E43-BCB0-81BA2EEBBE5B/78107.jpg",
      "https://cdn.coworkingcafe.com/images/6DCBD410-9328-4E8D-9C0F-55F8F94D9B4B/78107.jpg",
      "https://cdn.coworkingcafe.com/images/972E61A4-A8A5-47E9-815C-7EC43465906B/78107.jpg",
      "https://cdn.coworkingcafe.com/images/DAA445C5-9216-450F-85F0-4B494107A8A8/78107.jpg",
      "https://cdn.coworkingcafe.com/images/040A0958-BC9A-4839-A405-B5B852919ABA/78107.jpg",
      "https://cdn.coworkingcafe.com/images/1706301B-0CDE-43D2-8989-986C23166E0D/78107.jpg",
      "https://cdn.coworkingcafe.com/images/4453CD14-507A-40B0-9BAD-C1E97A9253B0/78107.jpg",
      "https://cdn.coworkingcafe.com/images/559AE539-5EE6-4F46-8DC1-B58E462B6069/78107.jpg"
    ]
  },
  // 91. Corporate Nexus - Sector 18
  {
    id: 91,
    name: 'Corporate Nexus',
    badge: 'Premium',
    rating: 4.5,
    area: 'Sector 18',
    location: 'Sector 18, Gurgaon',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/corporate-nexus-intellect/b8wvjt.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/corporate-nexus-intellect/pnhtgm.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/corporate-nexus-intellect/gn2q8q.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/corporate-nexus-intellect/mme8eg.jpg'
    ]
  },
  // 92. WorkPod - Sector 44
  {
    id: 92,
    name: 'WorkPod',
    badge: 'Popular',
    rating: 4.3,
    area: 'Sector 44',
    location: 'Sector 44, Gurgaon',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/workpod-sector44gurgaon/dedicated/fs6pgv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/workpod-sector44gurgaon/dedicated/4uxxbr.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/workpod-sector44gurgaon/dedicated/bbya38.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/workpod-sector44gurgaon/dedicated/vb2b7e.jpg'
    ]
  },
  // 93. Spring House JMD Galleria - DLF Phase IV
  {
    id: 93,
    name: 'Spring House JMD Galleria',
    badge: 'Popular',
    rating: 4.6,
    area: 'DLF Phase IV',
    location: 'DLF Phase IV, Gurgaon',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/springhouse-jmd-galleria/managed-office/5fr75n.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/springhouse-jmd-galleria/managed-office/4kaxjr.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/springhouse-jmd-galleria/managed-office/auqzaa.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/springhouse-jmd-galleria/managed-office/qu3s4r.jpg'
    ]
  },
  // 94. Green Gold 56 - Golf Course Road
  {
    id: 94,
    name: 'Green Gold 56',
    badge: 'Popular',
    rating: 5.0,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹9,999',
    period: '/ Month',
    priceFormatted: '₹9,999 / Month',
    ctaText: 'Get Quote',
    images: [] // TODO: add images
  },
  // 95. SupremeWork Ocus Technopolies - Golf Course Road
  {
    id: 95,
    name: 'SupremeWork Ocus Technopolies',
    badge: 'Near Metro',
    rating: 3.0,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imgcdn.houssed.com/assets/Files/Projects/147018/Sample%20Apartment/ocus-3-1755429640-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/147018/Sample%20Apartment/ocus-1-1755429640-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/147018/Sample%20Apartment/ocus-2-1755429640-thumb.webp'
    ]
  },
  // 96. Innov8 DLF Cybergreen - DLF Cyber Greens
  {
    id: 96,
    name: 'Innov8 DLF Cybergreen',
    badge: 'Premium',
    rating: 4.9,
    area: 'DLF Cyber Greens',
    location: 'DLF Cyber Greens, Gurgaon',
    price: '₹20,999',
    period: '/ Year',
    priceFormatted: '₹20,999 / Year',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/innov8-cybergreen-cybercity-dlf-cybergreen/exterior/pux6y6.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/innov8-cybergreen-cybercity-dlf-cybergreen/9yswrz.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/innov8-cybergreen-cybercity-dlf-cybergreen/7xq38y.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/innov8-cybergreen-cybercity-dlf-cybergreen/qnxn23.jpg'
    ]
  },
  // 97. Avanta Business Centre - MG Road
  {
    id: 97,
    name: 'Avanta Business Centre',
    badge: 'Popular',
    rating: 5.0,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹14,999',
    period: '/ Month',
    priceFormatted: '₹14,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/avanta-business-centre-mgf-metropolis-mall/flexi/xym7m6.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/avanta-business-centre-mgf-metropolis-mall/flexi/9ad43x.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/avanta-business-centre-mgf-metropolis-mall/flexi/yup6md.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/avanta-business-centre-mgf-metropolis-mall/flexi/uxqt9r.jpg'
    ]
  },
  // 98. SupremeWork Eros City Square Mall - Sector 49
  {
    id: 98,
    name: 'SupremeWork Eros City Square Mall',
    badge: 'Special Offer',
    rating: 3.0,
    area: 'Sector 49',
    location: 'Sector 49, Gurgaon',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.coworkingcafe.com:443/images/D95C1D14-8326-4F6B-8F87-774F522FBE79/92790.jpg',
      'https://cdn.coworkingcafe.com:443/images/591EE010-B631-4F8D-9921-AE16FA609C6B/92790.jpg',
      'https://cdn.coworkingcafe.com:443/images/4ECC64F0-B02A-4DB8-955F-B22C9E38B4A9/92790.jpg',
      'https://cdn.coworkingcafe.com:443/images/A9269ECF-CC1A-4877-9893-79549EC36E7B/92790.jpg',
      'https://cdn.coworkingcafe.com:443/images/317996F7-7A89-48B0-8DB6-F3467F8F9664/92790.jpg',
      'https://cdn.coworkingcafe.com:443/images/6227857D-A6DC-466E-B243-BBAB7DD12D27/92790.jpg'
    ]
  },
  // 99. Spring House Grand Mall - MG Road
  {
    id: 99,
    name: 'Spring House Grand Mall',
    badge: 'Premium',
    rating: 4.4,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹11,999',
    period: '/ Month',
    priceFormatted: '₹11,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imgcdn.houssed.com/assets/Files/Projects/146828/Sample%20Apartment/Mall-4-1755238607-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146828/Sample%20Apartment/Mall-3-1755238607-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146828/Sample%20Apartment/Mall-1-1755238607-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146828/Sample%20Apartment/Mall-2-1755238607-thumb.webp'
    ]
  },
  // 100. Fume Coworking 1.0 - Sector 18
  {
    id: 100,
    name: 'Fume Coworking 1.0',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sector 18',
    location: 'Sector 18, Gurgaon',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/fume-coworking-udyogvihar/vnjjmn.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/fume-coworking-udyogvihar/vk9s5v.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/fume-coworking-udyogvihar/hggd5n.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/fume-coworking-udyogvihar/2g3x4e.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/fume-coworking-udyogvihar/fwhr9m.jpg'
    ]
  },
  // 101. Worxspace Coworking Welldone Tech Park - Sohna Road
  {
    id: 101,
    name: 'Worxspace Coworking Welldone Tech Park',
    badge: 'Popular',
    rating: 4.7,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/worxspace-coworking-welldone-tech-park/exterior/m5z2ge.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/worxspace-coworking-welldone-tech-park/dedicated/u6kh4v.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/worxspace-coworking-welldone-tech-park/dedicated/hckq89.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/worxspace-coworking-welldone-tech-park/dedicated/zxmedk.jpg'
    ]
  },
  // 102. Incuspaze Campus 2 - Sector 18
  {
    id: 102,
    name: 'Incuspaze Campus 2',
    badge: 'Popular',
    rating: 5.0,
    area: 'Sector 18',
    location: 'Sector 18, Gurgaon',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imgcdn.houssed.com/assets/Files/Projects/145761/Project%20Image/Cmapus2-P-1754311363-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/145761/Sample%20Apartment/Campus2-1-1754311376-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/145761/Sample%20Apartment/Campus2-2-1754311376-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/145761/Sample%20Apartment/Campus2-3-1754311376-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/145761/Sample%20Apartment/Campus2-4-1754311376-thumb.webp'
    ]
  },
  // 103. Incuspaze M3M Urbana - Golf Course Extension Road
  {
    id: 103,
    name: 'Incuspaze M3M Urbana',
    badge: 'Popular',
    rating: 4.0,
    area: 'Golf Course Extension Road',
    location: 'Golf Course Extension Road, Gurgaon',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imgcdn.houssed.com/assets/Files/Projects/145762/Sample%20Apartment/Urium-1-1754311863-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/145762/Sample%20Apartment/Urium-4-1754311863-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/145762/Sample%20Apartment/Urium-2-1754311863-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/145762/Sample%20Apartment/uRIUM-3-1754311863-thumb.webp'
    ]
  },
  // 104. Startup Offices India - Golf Course Road
  {
    id: 104,
    name: 'Startup Offices India',
    badge: 'Popular',
    rating: 5.0,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://startupoffices.in/wp-content/uploads/2021/07/co-working-space-49.jpg",
      "https://startupoffices.in/wp-content/uploads/2021/07/common-seating-area.jpg",
      "https://startupoffices.in/wp-content/uploads/2021/07/dedicated-desk.jpg",
      "https://startupoffices.in/wp-content/uploads/2021/07/dedicated-seating.jpg",
      "https://startupoffices.in/wp-content/uploads/2021/07/private-office.jpg",
      "https://startupoffices.in/wp-content/uploads/2021/07/private-office-space.jpg",
      "https://startupoffices.in/wp-content/uploads/2021/07/shared-cowork-seating.jpg",
      "https://startupoffices.in/wp-content/uploads/2021/07/office-seating-space-gurgaon-office-potrait.jpg",
      "https://startupoffices.in/wp-content/uploads/2019/11/coworking-space.jpg"

    ]
  },
  // 105. Collabora8 - MG Road
  {
    id: 105,
    name: 'Collabora8',
    badge: 'Popular',
    rating: 5.0,
    area: 'MG Road',
    location: 'MG Road, Gurgaon',
    price: '₹12,999',
    period: '/ Month',
    priceFormatted: '₹12,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imgcdn.houssed.com/assets/Files/Projects/147038/Sample%20Apartment/vip-1-1755412438-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/147038/Sample%20Apartment/vip-3-1755412438-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/147038/Sample%20Apartment/vip-2-1755412438-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/147038/Sample%20Apartment/vip-4-1755412438-thumb.webp'
    ]
  },
  // 106. Whizdom Club - Golf Course Road
  {
    id: 106,
    name: 'Whizdom Club',
    badge: 'Popular',
    rating: 5.0,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹18,999',
    period: '/ Month',
    priceFormatted: '₹18,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://officekhojo.lovable.app/__l5e/assets-v1/3078194b-5c0c-47a2-b667-86b1eefbe6e4/1-20.webp',
      'https://officekhojo.lovable.app/__l5e/assets-v1/8f98252f-3c0d-4b3e-ab90-13e276a0a474/2-18.webp',
      'https://officekhojo.lovable.app/__l5e/assets-v1/3174af88-07b2-4af1-9179-21092d94e791/3-20.webp',
      'https://officekhojo.lovable.app/__l5e/assets-v1/2e08a1d0-821e-4735-a3ba-7d6399c32465/4-18.webp',
      'https://officekhojo.lovable.app/__l5e/assets-v1/1a776b17-5ff4-4f81-9762-77ed6fd204c9/5-20.webp'
    ]
  },
  // 107. AltF MPD Tower - Golf Course Road
  {
    id: 107,
    name: 'AltF MPD Tower',
    badge: 'Popular',
    rating: 4.9,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹13,999',
    period: '/ Month',
    priceFormatted: '₹13,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imgcdn.houssed.com/assets/Files/Projects/146919/Sample%20Apartment/mdp-6-1755254150-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146919/Sample%20Apartment/mdp-1-1755254150-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146919/Sample%20Apartment/mdp-2-1755254150-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146919/Sample%20Apartment/mdp-3-1755254150-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146919/Sample%20Apartment/mdp-5-1755254150-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146919/Sample%20Apartment/mdp-4-1755254150-thumb.webp'
    ]
  },
  // 108. SupremeWork - Sector 44
  {
    id: 108,
    name: 'SupremeWork',
    badge: 'Popular',
    rating: 4.4,
    area: 'Sector 44',
    location: 'Sector 44, Gurgaon',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imgcdn.houssed.com/assets/Files/Projects/147017/Sample%20Apartment/three-2-1755428226-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/147017/Sample%20Apartment/three-3-1755428226-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/147017/Sample%20Apartment/three-1-1755428226-thumb.webp'
    ]
  },
  // 109. Cospaces - Sector 44
  {
    id: 109,
    name: 'Cospaces',
    badge: 'Popular',
    rating: 5.0,
    area: 'Sector 44',
    location: 'Sector 44, Gurgaon',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://officehub.s3.amazonaws.com/Assets/images/49246/Serviced-Office-%28Classic%29-Haryana-Gurgaon-Plot-17-Dlf-Phase-1-Golf-Course-Road-Sector-28-3931230937253219562787562425743551815922374n.jpg",
      "https://officehub.s3.amazonaws.com/Assets/images/49246/Serviced-Office-%28Classic%29-Haryana-Gurgaon-Plot-17-Dlf-Phase-1-Golf-Course-Road-Sector-28-32898292233584148910728754150309041000507169n.jpg",
      "https://officehub.s3.amazonaws.com/Assets/images/49246/Serviced-Office-%28Classic%29-Haryana-Gurgaon-Plot-17-Dlf-Phase-1-Golf-Course-Road-Sector-28-4.png",
      "https://officehub.s3.amazonaws.com/Assets/images/49246/Serviced-Office-%28Classic%29-Haryana-Gurgaon-Plot-17-Dlf-Phase-1-Golf-Course-Road-Sector-28-5.png",
      "https://officehub.s3.amazonaws.com/Assets/images/49246/Serviced-Office-%28Classic%29-Haryana-Gurgaon-Plot-17-Dlf-Phase-1-Golf-Course-Road-Sector-28-2024-06-25-2.jpg",
      "https://officehub.s3.amazonaws.com/Assets/images/49246/Serviced-Office-%28Classic%29-Haryana-Gurgaon-Plot-17-Dlf-Phase-1-Golf-Course-Road-Sector-28-2024-06-25-3.jpg",
      "https://officehub.s3.amazonaws.com/Assets/images/49246/Serviced-Office-%28Classic%29-Haryana-Gurgaon-Plot-17-Dlf-Phase-1-Golf-Course-Road-Sector-28-2024-06-25-5.jpg",
      "https://officehub.s3.amazonaws.com/Assets/images/49246/Serviced-Office-%28Classic%29-Haryana-Gurgaon-Plot-17-Dlf-Phase-1-Golf-Course-Road-Sector-28-2024-06-25-6.jpg",
      "https://officehub.s3.amazonaws.com/Assets/images/49246/Serviced-Office-%28Classic%29-Haryana-Gurgaon-Plot-17-Dlf-Phase-1-Golf-Course-Road-Sector-28-2023-03-28.jpg",
      "https://dr3h7ptpe31k5.cloudfront.net/Assets/images/49246/Serviced-Office-(Classic)-Haryana-Gurgaon-Plot-17-Dlf-Phase-1-Golf-Course-Road-Sector-28-4068258.jpg"

    ]
  },
  // 110. The Circle Work - Sector 29
  {
    id: 110,
    name: 'The Circle Work',
    badge: 'Popular',
    rating: 4.5,
    area: 'Sector 29',
    location: 'Sector 29, Gurgaon',
    price: '₹14,999',
    period: '/ Month',
    priceFormatted: '₹14,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imgcdn.houssed.com/assets/Files/Projects/146642/Sample%20Apartment/Huda-1-1755150267-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146642/Sample%20Apartment/Huda-2-1755150267-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146642/Sample%20Apartment/Huda-3-1755150267-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146642/Sample%20Apartment/Huda-4-1755150267-thumb.webp'
    ]
  },
  // 111. Skootr - DLF Cyber City
  {
    id: 111,
    name: 'Skootr',
    badge: 'Popular',
    rating: 5.0,
    area: 'DLF Cyber City',
    location: 'DLF Cyber City, Gurgaon',
    price: '₹24,999',
    period: '/ Month',
    priceFormatted: '₹24,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://officekhojo.lovable.app/__l5e/assets-v1/1e8a386b-a8af-49d5-bcb1-9cf6e3cca630/skootr-1-7.webp',
      'https://officekhojo.lovable.app/__l5e/assets-v1/30cd7d90-21d8-4796-b04d-b468c5de2d47/skootr-2-6.webp',
      'https://officekhojo.lovable.app/__l5e/assets-v1/498abd77-5b38-4132-ace9-432b44d11e01/skootr-3-6.webp',
      'https://officekhojo.lovable.app/__l5e/assets-v1/b513ab86-4f7c-4026-8fa2-76508d9b955f/skootr-4-6.webp',
      'https://officekhojo.lovable.app/__l5e/assets-v1/3980a720-cd94-4eab-865f-0a8c4f7e72db/skootr-5-7.webp',
      'https://officekhojo.lovable.app/__l5e/assets-v1/eccbf710-ce1c-4795-af34-cdf60244ffa9/skootr-6-5.webp'
    ]
  },
  // 112. Acquir Brickworks - Sector 18
  {
    id: 112,
    name: 'Acquir Brickworks',
    badge: 'Popular',
    rating: 4.0,
    area: 'Sector 18',
    location: 'Sector 18, Gurgaon',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/acquir-workspaces-brickworks/exterior/68shpv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/acquir-workspaces-brickworks/managed-office/462rq8.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/acquir-workspaces-brickworks/managed-office/7kamhy.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/acquir-workspaces-brickworks/managed-office/f3896c.jpg'
    ]
  },
  // 113. Synq.Work - Sector 29
  {
    id: 113,
    name: 'Synq.Work',
    badge: 'Premium',
    rating: 4.9,
    area: 'Sector 29',
    location: 'Sector 29, Gurgaon',
    price: '₹13,499',
    period: '/ Month',
    priceFormatted: '₹13,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://officehub.s3.amazonaws.com/Assets/images/49495/Serviced-Office-%28Classic%29-Haryana-Gurugram-Garden-Estate-Dlf-Phase-3-Sector-24-q99422.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/49495/Serviced-Office-%28Classic%29-Haryana-Gurugram-Garden-Estate-Dlf-Phase-3-Sector-24-2texc5.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/49495/Serviced-Office-%28Classic%29-Haryana-Gurugram-Garden-Estate-Dlf-Phase-3-Sector-24-pprdrg.webp",
      "https://officehub.s3.amazonaws.com/Assets/images/49495/Serviced-Office-%28Classic%29-Haryana-Gurugram-Garden-Estate-Dlf-Phase-3-Sector-24-ct2tfb.webp"

    ]
  },
  // 114. Kibu Udyog Vihar - Udyog Vihar
  {
    id: 114,
    name: 'Kibu Udyog Vihar',
    badge: 'Popular',
    rating: 4.9,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/kibu-udyogvihar/flexi/tazqfm.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/kibu-udyogvihar/flexi/de6y57.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/kibu-udyogvihar/flexi/4e4gwr.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/kibu-udyogvihar/flexi/mdkn2s.jpg'
    ]
  },
  // 115. SevenHive Coworking - Sector 47
  {
    id: 115,
    name: 'SevenHive Coworking',
    badge: 'Premium',
    rating: 4.9,
    area: 'Sector 47',
    location: 'Sector 47, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/sevenhive-coworking-sector47gurgaon/exterior/9nncs2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/sevenhive-coworking-sector47gurgaon/pmtxqc.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/sevenhive-coworking-sector47gurgaon/yqpcxd.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/sevenhive-coworking-sector47gurgaon/cv9v73.jpg'
    ]
  },
  // 116. GC Towers - Udyog Vihar
  {
    id: 116,
    name: 'GC Towers',
    badge: 'Popular',
    rating: 5.0,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: [] // TODO: add images
  },
  // 117. Infrapro Spaces - Sector 44
  {
    id: 117,
    name: 'Infrapro Spaces',
    badge: 'Premium',
    rating: 4.3,
    area: 'Sector 44',
    location: 'Sector 44, Gurgaon',
    price: '₹6,999',
    period: '/ Month',
    priceFormatted: '₹6,999 / Month',
    ctaText: 'Get Quote',
    images: ["https://res.cloudinary.com/myhq/image/upload/workspaces/infrapro-sector44gurgaon/3emeeh.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/infrapro-sector44gurgaon/dedicated/k5jgqp.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/infrapro-sector44gurgaon/dedicated/5jnude.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/infrapro-sector44gurgaon/dedicated/vmsdft.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/infrapro-sector44gurgaon/dedicated/u48496.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/infrapro-sector44gurgaon/virtual-office/uxfzpt.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/infrapro-sector44gurgaon/virtual-office/7aq6up.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/infrapro-sector44gurgaon/virtual-office/9gmbe5.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/infrapro-sector44gurgaon/virtual-office/ynphzm.jpg"
    ]
  },
  // 118. Mooz Coworking - Sector 44
  {
    id: 118,
    name: 'Mooz Coworking',
    badge: 'Premium',
    rating: 4.9,
    area: 'Sector 44',
    location: 'Sector 44, Gurgaon',
    price: '₹7,499',
    period: '/ Month',
    priceFormatted: '₹7,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imgcdn.houssed.com/assets/Files/Projects/146986/Sample%20Apartment/black-1-1755344825-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146986/Sample%20Apartment/black-2-1755344825-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146986/Sample%20Apartment/black-3-1755344825-thumb.webp',
      'https://imgcdn.houssed.com/assets/Files/Projects/146986/Sample%20Apartment/black-4-1755344825-thumb.webp'
    ]
  },
  // 119. Easy Works Space - Sector 48
  {
    id: 119,
    name: 'Easy Works Space',
    badge: 'Premium',
    rating: 4.3,
    area: 'Sector 48',
    location: 'Sector 48, Gurgaon',
    price: '₹5,900',
    period: '/ Month',
    priceFormatted: '₹5,900 / Month',
    ctaText: 'Get Quote',
    images: [] // TODO: add images
  },
  // 120. Quest Coworks - Sector 51
  {
    id: 120,
    name: 'Quest Coworks',
    badge: 'Premium',
    rating: 4.5,
    area: 'Sector 51',
    location: 'Sector 51, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      "https://res.cloudinary.com/myhq/image/upload/workspaces/quest-coworks-technopolis-knowledge-park/sfgqxn.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/quest-coworks-technopolis-knowledge-park/exterior/az4abn.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/quest-coworks-technopolis-knowledge-park/ueaxhw.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/quest-coworks-technopolis-knowledge-park/w3ef2r.jpg",
      "https://res.cloudinary.com/myhq/image/upload/workspaces/quest-coworks-technopolis-knowledge-park/9gseyr.jpg"
    ]
  },
  // 121. Oahfeo Impose - Sector 74
  {
    id: 121,
    name: 'Oahfeo Impose',
    badge: null,
    rating: null,
    area: 'Sector 74',
    location: 'Sector 74, Gurgaon',
    price: '₹6,500',
    period: '/ Month',
    priceFormatted: '₹6,500 / Month',
    ctaText: 'Get Quote',
    images: [
       "https://res.cloudinary.com/myhq/image/upload/workspaces/oahfeo-sector74a/7waqde.jpg",
  "https://res.cloudinary.com/myhq/image/upload/workspaces/oahfeo-sector74a/exterior/sk92ab.jpg",
  "https://res.cloudinary.com/myhq/image/upload/workspaces/oahfeo-sector74a/dedicated/ag7fpq.jpg",
  "https://res.cloudinary.com/myhq/image/upload/workspaces/oahfeo-sector74a/dedicated/6rj7sx.jpg",
  "https://res.cloudinary.com/myhq/image/upload/workspaces/oahfeo-sector74a/dedicated/cbuztz.jpg"

    ] 
  },
  // 122. Onward Workspaces - Udyog Vihar
  {
    id: 122,
    name: 'Onward Workspaces',
    badge: 'Popular',
    rating: 4.5,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/onward-workspace-dlfphaseiv/flexi/plans/flexi-desk/u6ffkz.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/onward-workspace-dlfphaseiv/flexi/plans/flexi-desk/kq7mfn.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/onward-workspace-dlfphaseiv/flexi/plans/flexi-desk/mbvuvc.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/onward-workspace-dlfphaseiv/flexi/plans/flexi-desk/r6fsmj.jpg'
    ]
  },
  // 123. Synapse - Udyog Vihar
  {
    id: 123,
    name: 'Synapse',
    badge: null,
    rating: null,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/synapse-business-udyogviharphasev/7n5n92.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/synapse-business-udyogviharphasev/pvyqup.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/synapse-business-udyogviharphasev/nu5bca.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/synapse-business-udyogviharphasev/mngekr.jpg'
    ]
  },
  // 124. Cospaces Cowork - DLF Phase 1
  {
    id: 124,
    name: 'Cospaces Cowork',
    badge: 'Popular',
    rating: 4.8,
    area: 'DLF Phase 1',
    location: 'DLF Phase 1, Gurgaon',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://officekhojo.lovable.app/__l5e/assets-v1/661985c0-cc1f-415f-8d9a-6b8728699ede/3.jpg',
      'https://officekhojo.lovable.app/__l5e/assets-v1/6b19a2ce-20f0-4deb-bdc7-e0f5ac11759b/3.jpeg',
      'https://officekhojo.lovable.app/__l5e/assets-v1/b45536ce-e912-4ad5-a680-1d893e73f24e/1-12.webp',
      'https://officekhojo.lovable.app/__l5e/assets-v1/040a2637-8252-4dcf-9f34-f739fe1a3068/7.webp'
    ]
  },
  // 125. OTS Solutions - Sector 47
  {
    id: 125,
    name: 'OTS Solutions',
    badge: 'Premium',
    rating: 4.5,
    area: 'Sector 47',
    location: 'Sector 47, Gurgaon',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [] // TODO: add images
  },
  // 126. CorporatEdge Two Horizon Centre - Golf Course Road
  {
    id: 126,
    name: 'CorporatEdge Two Horizon Centre',
    badge: 'Popular',
    rating: 4.6,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹41,999',
    period: '/ Month',
    priceFormatted: '₹41,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/workspaces/corporatedge-dlf-two-horizon-center/5pcnmj.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/corporatedge-dlf-two-horizon-center/flexi/plans/flexi-desk/hfqsyd.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/corporatedge-dlf-two-horizon-center/flexi/px6ttz.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/corporatedge-dlf-two-horizon-center/flexi/x3tdw6.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/corporatedge-dlf-two-horizon-center/flexi/h7pxmr.jpg'
    ]
  },
  // 127. Beyond Just Work Jmd Empire - Golf Course Extension Road
  {
    id: 127,
    name: 'Beyond Just Work Jmd Empire',
    badge: null,
    rating: 4.1,
    area: 'Golf Course Extension Road',
    location: 'Golf Course Extension Road, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
        'https://beyondjustwork.com/images/popup/default/2.jpg',
        'https://beyondjustwork.com/images/popup/default/5.jpg',
        'https://beyondjustwork.com/images/popup/default/8.jpg',
        'https://beyondjustwork.com/images/popup/default/3.jpg'
    ] 
  },
  // 128. Livance Coworking - Udyog Vihar
  {
    id: 128,
    name: 'Livance Coworking',
    badge: 'Near Metro',
    rating: null,
    area: 'Udyog Vihar',
    location: 'Udyog Vihar, Gurgaon',
    price: '₹5,999',
    period: '/ Month',
    priceFormatted: '₹5,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://livance.co.in/images/ghitorni-lounge-view.jpg',
      'https://livance.co.in/images/udyog-vihar-1.jpg',
      'https://livance.co.in/images/ghitorni-boardroom.jpg',
      'https://livance.co.in/images/ghitorni-cabin.jpg'
    ]
  },
  // 129. IREP Workspaces Splendor Spectrum One - Golf Course Extension Road
  {
    id: 129,
    name: 'IREP Workspaces Splendor Spectrum One',
    badge: null,
    rating: 4.0,
    area: 'Golf Course Extension Road',
    location: 'Golf Course Extension Road, Gurgaon',
    price: '₹8,999',
    period: '/ Month',
    priceFormatted: '₹8,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/dncjopbor/image/upload/v1777780272/leasekey/gurgaon/o532gfuilfsoefica1oq.jpg',
      'https://res.cloudinary.com/dncjopbor/image/upload/v1777780273/leasekey/gurgaon/jygsyb1a63uibsz6nfio.jpg',
      'https://res.cloudinary.com/dncjopbor/image/upload/v1777780275/leasekey/gurgaon/ujcttazgniodgy3eistv.jpg',
      'https://res.cloudinary.com/dncjopbor/image/upload/v1777780277/leasekey/gurgaon/iv9lz4tgm2zscbisgkwn.jpg'
    ] 
  },
  // 130. Worksiva - Sector 15
  {
    id: 130,
    name: 'Worksiva',
    badge: null,
    rating: null,
    area: 'Sector 15',
    location: 'Sector 15, Gurgaon',
    price: '₹29,999',
    period: '/ Month',
    priceFormatted: '₹29,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/workspaces/worksiva-jmd-pacific-square/wtk9cp.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/worksiva-jmd-pacific-square/flexi/plans/flexi-desk/pfxc8r.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/worksiva-jmd-pacific-square/flexi/plans/flexi-desk/rwcrpx.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/worksiva-jmd-pacific-square/flexi/plans/flexi-desk/abcvpx.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/worksiva-jmd-pacific-square/flexi/plans/flexi-desk/78rupp.jpg'
    ]
  },
  // 131. Ananta Coworking - Sohna Road
  {
    id: 131,
    name: 'Ananta Coworking',
    badge: 'Premium',
    rating: 4.7,
    area: 'Sohna Road',
    location: 'Sohna Road, Gurgaon',
    price: '₹6,499',
    period: '/ Month',
    priceFormatted: '₹6,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/ananta-coworking-sohnaroad5/5mzmad.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/ananta-coworking-sohnaroad5/vxe5m6.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/ananta-coworking-sohnaroad5/8q8ufn.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/ananta-coworking-sohnaroad5/f3d83r.jpg'
    ]
  },
  // 132. Vibrant Palm - Sector 53
  {
    id: 132,
    name: 'Vibrant Palm',
    badge: 'Premium',
    rating: 4.7,
    area: 'Sector 53',
    location: 'Sector 53, Gurgaon',
    price: '₹22,500',
    period: '/ Month',
    priceFormatted: '₹22,500 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/w_750/f_auto/workspaces/vibrant-palm-sector53gurgaon/fa58qu.png',
      'https://res.cloudinary.com/myhq/image/upload/w_384/f_auto/workspaces/vibrant-palm-sector53gurgaon/4bxxcw.jpg',
      'https://res.cloudinary.com/myhq/image/upload/w_384/f_auto/workspaces/vibrant-palm-sector53gurgaon/ggs855.png',
      'https://res.cloudinary.com/myhq/image/upload/w_384/f_auto/workspaces/vibrant-palm-sector53gurgaon/syt4zs.jpg'
    ]
  },
  // 133. Deskriver - Pegasus One - Golf Course Road
  {
    id: 133,
    name: 'Deskriver - Pegasus One',
    badge: 'Premium',
    rating: 4.7,
    area: 'Golf Course Road',
    location: 'Golf Course Road, Gurgaon',
    price: '₹21,999',
    period: '/ Month',
    priceFormatted: '₹21,999 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/deskriver-golf-course-road-pegasus-one/wuqz5a.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/deskriver-golf-course-road-pegasus-one/cyy28h.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/deskriver-golf-course-road-pegasus-one/r7gr65.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/deskriver-golf-course-road-pegasus-one/gckmw6.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/deskriver-golf-course-road-pegasus-one/rdyqeu.jpg'
    ]
  },
  // 134. Showffice - Sector 44
  {
    id: 134,
    name: 'Showffice',
    badge: 'Popular',
    rating: 4.9,
    area: 'Sector 44',
    location: 'Sector 44, Gurgaon',
    price: '₹8,499',
    period: '/ Month',
    priceFormatted: '₹8,499 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/showffice-coworking-space-southcityi/exterior/xreg7k.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/showffice-coworking-space-southcityi/managed-office/936zry.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/showffice-coworking-space-southcityi/managed-office/9dbg23.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/workspaces/showffice-coworking-space-southcityi/managed-office/e664m4.jpg'
    ]
  },
  // 135. Mugz Cafe & Co-working - Gwal Pahari
  {
    id: 135,
    name: 'Mugz Cafe & Co-working',
    badge: 'Premium',
    rating: 4.7,
    area: 'Gwal Pahari',
    location: 'Gwal Pahari, Gurugram, Bandhwari',
    price: '₹7,999',
    period: '/ Month',
    priceFormatted: '₹7,999 / Month',
    ctaText: 'Get Quote',
    images: [] // TODO: add images
  },
  // 136. Webelio Workspace - Gurugram
  {
    id: 136,
    name: 'Webelio Workspace',
    badge: 'Popular',
    rating: 4.9,
    area: 'Gurugram',
    location: 'Gurugram, Haryana',
    price: '₹4,999',
    period: '/ Month',
    priceFormatted: '₹4,999 / Month',
    ctaText: 'Get Quote',
    images: [] // TODO: add images
  }
];

// Content of the "Discover your perfect workspace" banner (title, subtitle, button text, background photo).
export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp'
};

// Content of the "Customized office solutions for your team" banner (title, feature list, button, background photo).
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

// Content of the "Still not able to find coworking space?" banner (title, subtitle, button, background photo).
export const stillNotFindingBanner = {
  title: 'Still not able to find coworking space?',
  subtitle: 'Our space experts will help you find the perfect coworking space in prime locations',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/406c83ccb0729b57d9beb973b7e4088ab7640ef3.webp'
};

// How many cards are shown on one page.
export const SPACES_PER_PAGE = 16;

// Pagination settings: total number of pages and the page that opens first.
export const paginationData = {
  totalPages: Math.ceil(gurugramSpaces.length / SPACES_PER_PAGE),
  initialPage: 1
};

// Area filter names derived from the area list (the "All" entry removed, because the page has its own All button).
export const gurugramNeighborhoods = gurugramAreas.filter((area) => area !== 'All');

// Every Gurugram card in one list (all pages + extras). The detail page uses this list to find a card by its URL slug.
export const allGurugramOfficeCards = gurugramSpaces;

// Find a Gurugram card from its URL slug (or numeric id). Returns the card or null.
export const getGurugramOfficeCardById = (id) => findOfficeBySlug(allGurugramOfficeCards, id, 'gurugram');
// Build the URL slug / path of a Gurugram card (e.g. "/name-area-gurugram").
export const getGurugramOfficeSlug = (space) => officePath(allGurugramOfficeCards, space, 'gurugram');

// Top locations: first few areas, each using the first available photo from a space in that area
export const topGurugramCoworkingLocations = gurugramNeighborhoods.slice(0, 10).map((name) => {
  const withImage = gurugramSpaces.find((s) => s.area === name && s.images && s.images.length > 0);
  return {
    id: `loc-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name,
    title: `Coworking Space in ${name}`,
    image: withImage ? withImage.images[0] : perfectWorkspaceBanner.bgImage,
    ctaText: 'Explore Spaces'
  };
});

// Alias of the list above, kept so other files can import either spelling of the name.
export const areas = gurugramAreas;
export const spaces = gurugramSpaces;
// Default export: bundle of the main lists/helpers for modules that import the whole file.
export default { areas: gurugramAreas, spaces: gurugramSpaces };
