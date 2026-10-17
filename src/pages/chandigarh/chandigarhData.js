import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Chandigarh Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * Sourced from verified active coworking listings in the Chandigarh tricity (cofynd.com, qdesq.com, daftar.com, houssed.com).
 */

export const chandigarhNeighborhoods = [
  "Mohali",
  "Zirakpur",
  "Madhya Marg",
  "Sahibzada Ajit Singh Nagar",
  "Sector 34A",
  "Phase 8B",
  "Phase 7",
  "Industrial Area Phase 1"
];

// ============================================================================
// Page 1 cards - top grid (right under the area filter buttons).
// Shown when pagination button 1 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const chandigarhOfficeCards = [
  // 1. Spacejam Coworking Chandigarh - Industrial Area Phase 1
  {
    id: 1,
    name: "Spacejam Coworking Chandigarh",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹3,279",
    period: "/ Month",
    priceFormatted: "₹3,279 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/2745367b4f6a12aff27779e258e32b0c087e3adb.webp",
      "https://img.cofynd.com/images/latest_images_2024/d549d20d2861ef3c3fbe93abc0a244877b494a15.webp",
      "https://img.cofynd.com/images/latest_images_2024/598201ccdebc263e135d19710bcdc63d013b2b45.webp",
      "https://img.cofynd.com/images/latest_images_2024/6a0e13eda27a3ba408ef4e1d63399ced2d1af90d.webp",
      "https://img.cofynd.com/images/latest_images_2024/02a697e9a47810cd7a5cfd54e45999af5317ea59.webp"
    ]
  },
  // 2. Magnet Cowork - Sector 34A
  {
    id: 2,
    name: "Magnet Cowork",
    badge: null,
    rating: null,
    area: "Sector 34A",
    location: "Sector 34A, Chandigarh",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/3ccceaa87ebc54f7caef5349627ddfc4ff474908.jpg",
      "https://img.cofynd.com/images/original/d3db3878ce1829214db69c41b8f052ee74897883.jpg",
      "https://img.cofynd.com/images/original/a81d6f96dc972bb3f23fcb49739f5cf1455bca0e.jpg",
      "https://img.cofynd.com/images/original/03ca761e6a4693a48d15f3f975277358bac8c9cc.jpg",
      "https://img.cofynd.com/images/original/1cae0b100bb46976aa36d5d507671feda400796a.jpg",
      "https://img.cofynd.com/images/original/c40ab4359100cdb2c22b2f141847b7246ee2845b.jpg"
    ]
  },
  // 3. Next57 Coworking - Sector 34A
  {
    id: 3,
    name: "Next57 Coworking",
    badge: null,
    rating: null,
    area: "Sector 34A",
    location: "Sector 34A, Chandigarh",
    price: "₹1,899",
    period: "/ Month",
    priceFormatted: "₹1,899 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/3a3bd01b85b219eddcc17657c63cde63c0347ec0.jpg",
      "https://img.cofynd.com/images/original/b8891bf267628ae60e028a4bbf87318c5687701c.jpg",
      "https://img.cofynd.com/images/original/c81e1b6ce2f4baa60b73d97c254674bb38f75af5.jpg",
      "https://img.cofynd.com/images/original/f61f2dbfc5bd6b6578a290894c466d13cc041b5d.jpg",
      "https://img.cofynd.com/images/original/4c0d7409e940c43250a934b6f25678fff17173f6.jpg",
      "https://img.cofynd.com/images/original/acf248d0cf9654c98b288fac0f071a9232f7ab6a.jpg"
    ]
  },
  // 4. Work Yard - Sahibzada Ajit Singh Nagar
  {
    id: 4,
    name: "Work Yard",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/ef7b8a2b828dc271f01c9572b4a334e13ad9fd91.jpg",
      "https://img.cofynd.com/images/original/6638ada1398cb29734604297fe018781501ee77d.jpg",
      "https://img.cofynd.com/images/original/6dd7a739df3952474424c819da813a58e3d4e071.jpg",
      "https://img.cofynd.com/images/original/acfe7fcd4f05fe58cc7764d2f0e07c76a481c456.jpg",
      "https://img.cofynd.com/images/original/3918cedbd2c91e44eea5436b198405d8c466828b.jpg",
      "https://img.cofynd.com/images/original/c2a02cd5ce9b78a6deeca682c813acbca375ff9d.jpg"
    ]
  },
  // 5. MySoho - Madhya Marg
  {
    id: 5,
    name: "MySoho",
    badge: null,
    rating: null,
    area: "Madhya Marg",
    location: "Madhya Marg, Chandigarh",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/4d9055b9fbf5162cdf5251d5bfacdb835f16bd89.jpg",
      "https://img.cofynd.com/images/original/ba62098eba6e87d263351d298c6dc1ca850fcede.jpg",
      "https://img.cofynd.com/images/original/89f6f81a395aa4e86bbc1baec4078f981860d9c0.jpg",
      "https://img.cofynd.com/images/original/7c119374a48d90d51d59b8b40d46fd6321405f8a.jpg",
      "https://img.cofynd.com/images/original/5823284da62a8217027b39a2f55649ef16b74a72.jpg"
    ]
  },
  // 6. Qowork - Madhya Marg
  {
    id: 6,
    name: "Qowork",
    badge: null,
    rating: null,
    area: "Madhya Marg",
    location: "Madhya Marg, Chandigarh",
    price: "₹7,999",
    period: "/ Month",
    priceFormatted: "₹7,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/852b70921d6aa896a7981308b232ef7e0b26c159.jpg",
      "https://img.cofynd.com/images/original/59764e5ea942181751d2c7456f41de2d2831f57c.jpg",
      "https://img.cofynd.com/images/original/bb2c2b3e552910a319475c2a7df1b08e5d489641.jpg",
      "https://img.cofynd.com/images/original/c2875dc9f3d013022c5fc8128b56297447af09c5.jpg",
      "https://img.cofynd.com/images/original/df6361154dd077de766271378f2e4f4531a6e864.jpg"
    ]
  },
  // 7. Roadies Koffeehouz - Madhya Marg
  {
    id: 7,
    name: "Roadies Koffeehouz",
    badge: null,
    rating: null,
    area: "Madhya Marg",
    location: "Madhya Marg, Chandigarh",
    price: "₹2,999",
    period: "/ Month",
    priceFormatted: "₹2,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/9ffc4b403c1c90d1ad69e770a1709edd7bced2c2.jpg",
      "https://img.cofynd.com/images/original/9faa1f80ea751461affbd83a2de466b172b1b1d8.jpg",
      "https://img.cofynd.com/images/original/593912b1172131d8eb19c557d13596496dc33811.jpg",
      "https://img.cofynd.com/images/original/ec7ab698d1ea9f69cb7fe96f2e4347c67d313243.jpg",
      "https://img.cofynd.com/images/original/47cc93e1ea8df1308aae0b8685bae9f62e28c31c.jpg"
    ]
  },
  // 8. SpaceJam - Sector 34A
  {
    id: 8,
    name: "SpaceJam",
    badge: null,
    rating: null,
    area: "Sector 34A",
    location: "Sector 34A, Chandigarh",
    price: "₹3,279",
    period: "/ Month",
    priceFormatted: "₹3,279 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/ee3dd5148d42a1e80091a52024fa49ecb7451b7f.jpg",
      "https://img.cofynd.com/images/original/1376a4ccd4b0fe6769cc24ad077d3b936b774c09.jpg",
      "https://img.cofynd.com/images/original/839e556d07c70ff54ffa2704356c337e14502471.jpg",
      "https://img.cofynd.com/images/original/d9b5c2d9ad3eb5a0eaee054c29ec549e0bffc23e.jpg",
      "https://img.cofynd.com/images/original/12ff996e39c7ace06126b99d3835d333facfd170.jpg",
      "https://img.cofynd.com/images/original/6ff70f93746c4c5b0c0cab065afe4e70a8c55d23.jpg"
    ]
  }
];

// ============================================================================
// Page 1 cards - second grid ("Additional coworking spaces", below the top grid).
// Shown when pagination button 1 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const moreChandigarhOfficeCards = [
  // 1. Workaholics workzone - Sector 34A
  {
    id: 9,
    name: "Workaholics workzone",
    badge: null,
    rating: null,
    area: "Sector 34A",
    location: "Sector 34A, Chandigarh",
    price: "₹5,189",
    period: "/ Month",
    priceFormatted: "₹5,189 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/7b14a2ae5ef4a522a8f9fc564ef38955e482a08d.jpg",
      "https://img.cofynd.com/images/original/90f6f6ac34a5a6cde2a7524824e4e71b20a59c56.jpg",
      "https://img.cofynd.com/images/original/449fb424b2284352b62ff7c6efec4f71e8289836.jpg",
      "https://img.cofynd.com/images/original/fea0542093de4d7f84ed3f7f0411dbf787999598.jpg",
      "https://img.cofynd.com/images/original/ce49d7342de644ad500d8f5ebebca8a8ad56757c.jpg",
      "https://img.cofynd.com/images/original/d49a4ce7b214fdb1ff1a6feb545b5dfd9b9d3b8e.jpg"
    ]
  },
  // 2. MyBranch Chandigarh - Madhya Marg
  {
    id: 10,
    name: "MyBranch Chandigarh",
    badge: null,
    rating: null,
    area: "Madhya Marg",
    location: "Madhya Marg, Chandigarh",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/99b2e95b22e0c1852b16c893f9983727e14b32f8.jpg",
      "https://img.cofynd.com/images/original/9a96628ecb2414ce96b25d468174e20802b45ebc.jpg",
      "https://img.cofynd.com/images/original/094bedb4931737fc7b8b83c0860d40c92a1e3eae.jpg",
      "https://img.cofynd.com/images/original/ac9c507cca8cb3fdd8802d31522be61c67e76b79.jpg",
      "https://img.cofynd.com/images/original/0adde5145ed9f396aeb3556e06f4deb4554384e6.jpg",
      "https://img.cofynd.com/images/original/737ce3daf2d5607039da3eda2a97e6093f32c95f.jpg"
    ]
  },
  // 3. IDEA Coworking - Madhya Marg
  {
    id: 11,
    name: "IDEA Coworking",
    badge: null,
    rating: null,
    area: "Madhya Marg",
    location: "Madhya Marg, Chandigarh",
    price: "₹3,279",
    period: "/ Month",
    priceFormatted: "₹3,279 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/78357fe5511e89c3fcb4dce09115bc105613e3d5.jpg",
      "https://img.cofynd.com/images/original/3bbdb158183f84374f6264fb9e610457c876984c.jpg",
      "https://img.cofynd.com/images/original/910170fc2e3ac70229f992804ea83ed7b598c7e4.jpg",
      "https://img.cofynd.com/images/original/be2f360a58b0f419a5cb190955854a4e7d4c058e.jpg",
      "https://img.cofynd.com/images/original/61814a976022161d9f27874f26f9c1f6bca53ef6.jpg"
    ]
  },
  // 4. iMesh lab - Zirakpur
  {
    id: 12,
    name: "iMesh lab",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/eca7b46c8512fb04a07b39e7a29f72d4a6deab95.jpg",
      "https://img.cofynd.com/images/original/3999ddc43be1ffde691d15750a8c85d9e9808425.jpg",
      "https://img.cofynd.com/images/original/b3935a179cb1eb372df8bf80618e6ed980c9aa6b.jpg",
      "https://img.cofynd.com/images/original/51aed921b466d2957fee1b979f64f3b5ef048bc7.jpg",
      "https://img.cofynd.com/images/original/0fb65c43652f4e7919612ca71d0eb9522517cc73.jpg",
      "https://img.cofynd.com/images/original/17a45b8e97c8498a56f86fb963d6d2eff9ed4705.jpg"
    ]
  },
  // 5. City Court - Zirakpur
  {
    id: 13,
    name: "City Court",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹2,500",
    period: "/ Month",
    priceFormatted: "₹2,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/8b73d1aacadd8d63d6d1f6e03fa451985926d5e1.jpg",
      "https://img.cofynd.com/images/original/5be1e64de5345992af1d21836a695f38d73c9e52.jpg",
      "https://img.cofynd.com/images/original/e0891a6a9be0438bb7c8032082e38a57d3d0fed1.jpg",
      "https://img.cofynd.com/images/original/b026e95f30008c9fd432d8731d496f90d3cf3270.jpg",
      "https://img.cofynd.com/images/original/feb16114f79fafcd66bbf62d38eb186da270870f.jpg"
    ]
  },
  // 6. Coworque - Mohali
  {
    id: 14,
    name: "Coworque",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹2,990",
    period: "/ Month",
    priceFormatted: "₹2,990 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/1cc06bd5d08f6b6a1d56bd58e24d1620462c1248.webp",
      "https://img.cofynd.com/images/latest_images_2024/aaff729a2fb009caaa66fde7a6068d75e31b261f.webp",
      "https://img.cofynd.com/images/latest_images_2024/8fc7aeb25f7242227e328654b8eec9296efd00c5.webp",
      "https://img.cofynd.com/images/latest_images_2024/ff4e1f7a12ea0ff436efa72339fb74c5444ddab6.webp",
      "https://img.cofynd.com/images/latest_images_2024/1be2ebcf17285d8d1d839973f32b15f99333e73c.webp"
    ]
  },
  // 7. Incodesk - Mohali
  {
    id: 15,
    name: "Incodesk",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Zirakpur, Mohali",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/4386378dcee81e11bf0d35db01a5cfb09fe8e022.webp",
      "https://img.cofynd.com/images/latest_images_2024/e561237ab0d375a4b53d88e13b6a218964ace6b8.webp",
      "https://img.cofynd.com/images/latest_images_2024/5170344776f55da873f9a1ddd0746bc34f756b95.webp",
      "https://img.cofynd.com/images/latest_images_2024/ee21eb9725af777ac1325bd29c08bca91598045c.webp"
    ]
  },
  // 8. The Day - Mohali
  {
    id: 16,
    name: "The Day",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "MS Enclave, Dhakoli, Zirakpur",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/75dbbcbeb42e5b3ebcf79d350328a01be63bd1d2.jpg",
      "https://img.cofynd.com/images/original/1a84fd54a5449e92b2fb214513ebe361ad848f39.jpg",
      "https://img.cofynd.com/images/original/f94e82532b98799d8fa09d0177e03266661f451d.jpg",
      "https://img.cofynd.com/images/original/73af097cf159243d47a553d9d4e5336b4a3930f6.jpg",
      "https://img.cofynd.com/images/original/5f1c626db3f534ff623fb899dad787dc4502e829.jpg"
    ]
  }
];

// ============================================================================
// Page 1 cards - third grid ("Spotlight coworking spaces", below the "Discover your perfect workspace" banner).
// Shown when pagination button 1 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const finalChandigarhOfficeCards = [
  // 1. Workaholics - Sector 34A
  {
    id: 17,
    name: "Workaholics",
    badge: null,
    rating: null,
    area: "Sector 34A",
    location: "Sector 34A, Chandigarh",
    price: "₹5,189",
    period: "/ Month",
    priceFormatted: "₹5,189 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/e6e1f4df159c1b209173020aa9b3aa5dac05d715.jpg",
      "https://img.cofynd.com/images/original/d270d82e4a847ee76b6f5d53eb05e714fa4d0c77.jpg",
      "https://img.cofynd.com/images/original/91bb6a1c7572d3e5f27d8302a1a5feadad1cb1e9.jpg",
      "https://img.cofynd.com/images/original/235c7df74077052086d13e71579bc8adb60a8209.jpg",
      "https://img.cofynd.com/images/original/c642501fbf52bb8f52b50488dc9b4969ad4e0900.jpg"
    ]
  },
  // 2. Awfis - Zirakpur
  {
    id: 18,
    name: "Awfis",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/76b31835070e50d3acbe1b3fa727caa35ad34564.jpg",
      "https://img.cofynd.com/images/original/504883192b308d41cfe1ffb9cb6e66131ad8e049.jpg",
      "https://img.cofynd.com/images/original/54fc2648554aa7c5df94625ceb7d62f2ba620c65.jpg",
      "https://img.cofynd.com/images/original/6add8cc3a62197cd3f5cae6ffbb50fdb4a8126d6.jpg",
      "https://img.cofynd.com/images/original/ea3ec9d2e96f8cf2cbdf7a0aa7ce4a0c02a24572.jpg"
    ]
  },
  // 3. Biggbang - Mohali
  {
    id: 19,
    name: "Biggbang",
    badge: "Premium",
    rating: 4.8,
    area: "Mohali",
    location: "Phase 8A, Mohali",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/567b2f480f737c9468afc72463203af19d52c6f6.jpg",
      "https://img.cofynd.com/images/original/c9b110c39318921005bc98a3fb36fbebaadc0f5e.jpg",
      "https://img.cofynd.com/images/original/3d596a268b843ef25127873936340140094cf6bf.jpg",
      "https://img.cofynd.com/images/original/fe7b6a2123ca512075bd0a9a9227d59747c68a3d.jpg",
      "https://img.cofynd.com/images/original/5111ba52078115cae1402ab25250ddf33cc74595.jpg"
    ]
  },
  // 4. Flow Workspaces - Sahibzada Ajit Singh Nagar
  {
    id: 20,
    name: "Flow Workspaces",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/1cb734ed4129876d801f64b64039ba52c9d7037d.jpg",
      "https://img.cofynd.com/images/original/8f0d1dac3d14de0c0011bbb8426f21b96e6818db.jpg",
      "https://img.cofynd.com/images/original/003bfff0a160edc0c63f2a7397c53e5e0bf8e61e.jpg",
      "https://img.cofynd.com/images/original/fc71f9a761cc68b3efcc832b3c4301e14f1faa07.jpg",
      "https://img.cofynd.com/images/original/1bb4d99b0e8ef8c5f1cf585dc064154e65e13133.jpg"
    ]
  },
  // 5. Begin coworking - Phase 8B
  {
    id: 21,
    name: "Begin coworking",
    badge: null,
    rating: null,
    area: "Phase 8B",
    location: "Phase 8B, Chandigarh",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/1d508da0a4852025e4f9345bbbf168edf63de806.jpg",
      "https://img.cofynd.com/images/original/0df9f7eaa9b3c343e7c3fec603ee3125edf70fff.jpg",
      "https://img.cofynd.com/images/original/5e0a1768a756c25127f4ab0493e77aec1397ecbc.jpg",
      "https://img.cofynd.com/images/original/0179ffbf513706f5bdde3e75b7ec036aa8b32300.jpg",
      "https://img.cofynd.com/images/original/3fae0b1254f167dfb2b124759f963175fc3cbace.jpg",
      "https://img.cofynd.com/images/original/7758e4181ea667caf62f1927f5a0d0765637c1b9.jpg"
    ]
  },
  // 6. Next57 coworking - Mohali
  {
    id: 22,
    name: "Next57 coworking",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Sector 74, Chandigarh",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/ea1a32cee5edb88ce931666d479f15362468b122.jpg",
      "https://img.cofynd.com/images/original/c195e3058d3e7fd36e22130d6728618c80601235.jpg",
      "https://img.cofynd.com/images/original/77205d04d7f2790d98a9dfd91e6ec2416c2ff060.jpg",
      "https://img.cofynd.com/images/original/548de75b318cf6133ba8aa875c89375edd0ba165.jpg",
      "https://img.cofynd.com/images/original/70edb9f7cf8d115220fb551d6bf2a1e7f8fdd530.jpg"
    ]
  },
  // 7. First Hi-Tech Business - Mohali
  {
    id: 23,
    name: "First Hi-Tech Business",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Road, New Chandigarh",
    price: "₹7,000",
    period: "/ Month",
    priceFormatted: "₹7,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/7490cdff559007bb44da96bc29ee8b894d6570b2.jpg",
      "https://img.cofynd.com/images/original/e35d5a7b48ae2b0888ddb194e408b430d65f6ab4.jpg",
      "https://img.cofynd.com/images/original/56fa1796783b52141d021ed93bab1a48dbeefe2f.jpg",
      "https://img.cofynd.com/images/original/2df83a76a4feecda562497ee05dcf867512e3191.jpg",
      "https://img.cofynd.com/images/original/6869c9d48fbe567f8e6406329289092f57902b98.jpg",
      "https://img.cofynd.com/images/original/291a5a15b8087e4a53165130d05ec844c2afc21d.jpg"
    ]
  },
  // 8. Wotta Workspace - Sahibzada Ajit Singh Nagar
  {
    id: 24,
    name: "Wotta Workspace",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹799",
    period: "/ Month",
    priceFormatted: "₹799 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/c8ae67d11bca302283acdd02cee0f46679b1367e.jpg",
      "https://img.cofynd.com/images/original/8bd2b9e2e8e229b8fd65b5f1c27fe636794520ca.jpg",
      "https://img.cofynd.com/images/original/57c5b89e2346ea1d3b9342ce97eea6fd5856dd28.jpg",
      "https://img.cofynd.com/images/original/dc1d741ff197caf6dd3784b4e531ee4dc861fcb1.jpg",
      "https://img.cofynd.com/images/original/c2e756ffa5090b39272d553e5eac63f1cb86cc77.jpg",
      "https://img.cofynd.com/images/original/bff55855155c38cff3a2a488eebb338d657e86bf.jpg"
    ]
  }
];

// ============================================================================
// Page 1 cards - fourth grid ("Featured coworking spaces", below the "Customized office solutions" banner).
// Shown when pagination button 1 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const featuredChandigarhOfficeCards = [
  // 1. STARTHUB NATION - Mohali
  {
    id: 25,
    name: "STARTHUB NATION",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Industrial Area Mohali, Mohali, Punjab",
    price: "₹5,500",
    period: "/ Month",
    priceFormatted: "₹5,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/a692c1a78728232abd1141e84c9b477ede2784be.jpg",
      "https://img.cofynd.com/images/original/1ee307e93dc4ecd87ee912149e3f8ad5a1466d99.jpg",
      "https://img.cofynd.com/images/original/b6a760512bd12e4a90742e19f8197294b75ec5c4.jpg",
      "https://img.cofynd.com/images/original/2a7fa38e3a7b167884b21fd29a0f80e33a79fa39.jpg",
      "https://img.cofynd.com/images/original/f208a31e675b4697202844dabe4e55c333f33f23.jpg",
      "https://img.cofynd.com/images/original/60653762eb21ff89b74ff2e19e5eb66f56e6fb89.jpg"
    ]
  },
  // 2. Startup in a box - Sahibzada Ajit Singh Nagar
  {
    id: 26,
    name: "Startup in a box",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹4,000",
    period: "/ Month",
    priceFormatted: "₹4,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/e4fd63a77833eff15043af164f8b8bb421ec8cb1.jpg",
      "https://img.cofynd.com/images/original/95b6b8d45aa4988a8aa5a6540e73d72697575717.jpg",
      "https://img.cofynd.com/images/original/c3814934676dc7850c55a4af6f4f328483d65e8d.jpg",
      "https://img.cofynd.com/images/original/c5c7095a252f5e4bbc6234fb4fc1683f307125ec.jpg",
      "https://img.cofynd.com/images/original/5a71966b2ab49318c41ce4e6db231ad40aff9375.jpg"
    ]
  },
  // 3. Big Coworking - Sahibzada Ajit Singh Nagar
  {
    id: 27,
    name: "Big Coworking",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹4,999",
    period: "/ Month",
    priceFormatted: "₹4,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/fc19bd72fed12e7ba2b4027c814a9b45ba931a24.jpg",
      "https://img.cofynd.com/images/original/94190917c687f986528692bd3a759d29ccd305f7.jpg",
      "https://img.cofynd.com/images/original/9faf549da2c22b71944c4afc9efffac88623c43d.jpg",
      "https://img.cofynd.com/images/original/eba1e235d2c473788c054856b72d5bd9233c55fa.jpg",
      "https://img.cofynd.com/images/original/dac89e80231ab31d5f82fc08488c45fdc3389126.jpg"
    ]
  },
  // 4. The Groove - Mohali
  {
    id: 28,
    name: "The Groove",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Sector 73, Chandigarh",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/35a5d99cccc7e4f89231d3b0a2a2f2f1dd0fa925.jpg",
      "https://img.cofynd.com/images/original/d9b7c4b561ecc24b47c673c60385235c21cc9199.jpg",
      "https://img.cofynd.com/images/original/e7ec27e0dc4a50faf3d88a0ab26b80e94d17605e.jpg",
      "https://img.cofynd.com/images/original/265c692ef3eb5b1181e0fae527223b5fdc139f3d.jpg",
      "https://img.cofynd.com/images/original/3e9d37f0bbf3d22c6f66e666a54ba26f7b7d69e8.jpg",
      "https://img.cofynd.com/images/original/c3b912d5b78f660b861b22470c8b2027834421a3.jpg"
    ]
  },
  // 5. PounceThat - Sahibzada Ajit Singh Nagar
  {
    id: 29,
    name: "PounceThat",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹300",
    period: "/ Day",
    priceFormatted: "₹300 / Day",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/9b394d4ac7acefd2d181127a77cb601f51091107.jpg",
      "https://img.cofynd.com/images/original/37b6a227221b93663af97024804ff54ecbd03f6b.jpg",
      "https://img.cofynd.com/images/original/34978c3444bbba9d620ee21b519ce6554ef040b6.jpg",
      "https://img.cofynd.com/images/original/d7db3cd072194bbf2022591f9097925aac9cd20e.jpg",
      "https://img.cofynd.com/images/original/e65416084fc902ed0f0708a6094f24bda19ff5e5.jpg",
      "https://img.cofynd.com/images/original/e1d4b6276592b0e2d4faa6fb541e2d9f82daf5b6.jpg"
    ]
  },
  // 6. Space For Work - Phase 8B
  {
    id: 30,
    name: "Space For Work",
    badge: null,
    rating: null,
    area: "Phase 8B",
    location: "Phase 8B, Chandigarh",
    price: "₹3,999",
    period: "/ Month",
    priceFormatted: "₹3,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/5d6f476b17b287d54b96ccffd32ca193505246e4.jpg",
      "https://img.cofynd.com/images/original/d6116a623cd73fb1363d78a90a6aa81dceb1ec42.jpg",
      "https://img.cofynd.com/images/original/aaf40730cf5a0e21c49142055abd1f9154a2793f.jpg",
      "https://img.cofynd.com/images/original/cc4de09845a91f08eeee2233e551bc1101538f20.jpg",
      "https://img.cofynd.com/images/original/2611b15914080a34149c9ea3bcb7a6272353efbd.jpg"
    ]
  },
  // 7. Hokis Virtual Office - Mohali
  {
    id: 31,
    name: "Hokis Virtual Office",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Sahibzada Ajit Singh Nagar, Mohali",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/ecbdd127a3b45be153e57c9c76e4a2227dace0af.jpg",
      "https://img.cofynd.com/images/original/19672136a1111775d39d6115142910310e1f4c7e.jpg",
      "https://img.cofynd.com/images/original/571dddd68fdfc9d520e0c4071ef9c34f595059ff.jpg",
      "https://img.cofynd.com/images/original/a80d9294baf27af7482b3efa49d9524690b30abd.jpg",
      "https://img.cofynd.com/images/original/e019e05cc0b6e55c6652cdba97eb2654df3c391b.jpg"
    ]
  },
  // 8. AD Office Spaces - Zirakpur
  {
    id: 32,
    name: "AD Office Spaces",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹9,999",
    period: "/ Month",
    priceFormatted: "₹9,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/dccff0767f4c5b97fde0975e6c547205e84072a8.webp",
      "https://img.cofynd.com/images/latest_images_2024/f5a8df399be23bdd1c21f4e846bb5703da5de274.webp",
      "https://img.cofynd.com/images/latest_images_2024/c14378796bd080fbbae837c726a609e2f8c83981.webp",
      "https://img.cofynd.com/images/latest_images_2024/5bb84ebd580620f96df9836354d0bf1f980961fc.webp",
      "https://img.cofynd.com/images/latest_images_2024/7f81d230e4abd862a2d05d754fd7e37ccbde1323.webp"
    ]
  }
];

// Content of the "Discover your perfect workspace" banner (title, subtitle, button text, background photo).
export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp'
};

// Aliases for compatibility
export const chandigarhAreas = chandigarhNeighborhoods;
export const chandigarhSpaces = chandigarhOfficeCards;
export const areas = chandigarhNeighborhoods;
export const spaces = chandigarhOfficeCards;

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

// Pagination settings: total number of pages and the page that opens first.
export const paginationData = {
  totalPages: 3,
  initialPage: 1
};

// ============================================================================
// Page 2 cards - top grid (right under the area filter buttons).
// Shown when pagination button 2 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const pageTwoChandigarhOfficeCards = [
  // 1. The Aerohub Coworking Space by Ideashacks - Zirakpur
  {
    id: 33,
    name: "The Aerohub Coworking Space by Ideashacks",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹4,999",
    period: "/ Month",
    priceFormatted: "₹4,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/36d4a9dda25ebac9b908ed4e563a193d21c5797a.webp",
      "https://img.cofynd.com/images/latest_images_2024/61b0fe325c8608cf3f90c4e9b07ac9d7e221627e.webp",
      "https://img.cofynd.com/images/latest_images_2024/8aac926ef5d3d97b342cbc4d1b8804a009f287d6.webp",
      "https://img.cofynd.com/images/latest_images_2024/bb285b8aaedff5c88046cddc033278bbd3c80ef0.webp",
      "https://img.cofynd.com/images/latest_images_2024/844517c080bfde4fef61b0b89e6d753725c2bdee.webp"
    ]
  },
  // 2. Skytrails - Mohali
  {
    id: 34,
    name: "Skytrails",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹5,500",
    period: "/ Month",
    priceFormatted: "₹5,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/42e77724787657d5afedfa4dd43a7780026137d7.webp",
      "https://img.cofynd.com/images/latest_images_2024/9cad86b563cff59fb76bcdc40ec9709b3b5db085.webp",
      "https://img.cofynd.com/images/latest_images_2024/3dddc79bba690221bbfd7f1c38ed8484f5b859f0.webp",
      "https://img.cofynd.com/images/latest_images_2024/d3f206a1c3718b2f36c74e0159d7e805a1666266.webp",
      "https://img.cofynd.com/images/latest_images_2024/f56b05db4df90066a264424f187ec189bcd923f8.webp",
      "https://img.cofynd.com/images/latest_images_2024/55aed4f55252e49dda45e64a487adc755704de7e.webp"
    ]
  },
  // 3. Girl Power Talk - Sahibzada Ajit Singh Nagar
  {
    id: 35,
    name: "Girl Power Talk",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹3,500",
    period: "/ Month",
    priceFormatted: "₹3,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/a8c4982ba747d7b100a5d807898b7ce1f5c92668.webp",
      "https://img.cofynd.com/images/latest_images_2024/51b2cd425d4fc66a790368703ca711fd5be1bcfe.webp",
      "https://img.cofynd.com/images/latest_images_2024/6b2edab7b0d9d0d1f2ac860497aadabbaac4f8be.webp",
      "https://img.cofynd.com/images/latest_images_2024/8f6004517642796e3465c946ddad16dc22d934e3.webp",
      "https://img.cofynd.com/images/latest_images_2024/71aeee2fca3c9294721e9e64da83530a9f7da2cb.webp",
      "https://img.cofynd.com/images/latest_images_2024/ab533a0b25a564b4fe381affb05ce870301651a6.webp"
    ]
  },
  // 4. Office On Demand Coworking - Zirakpur
  {
    id: 36,
    name: "Office On Demand Coworking",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹4,500",
    period: "/ Month",
    priceFormatted: "₹4,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/e99b8cd3a13c7b9aa09aa9087c49ca6eb50bfd5a.webp",
      "https://img.cofynd.com/images/latest_images_2024/184b5801ceba4839467f90b79dc4d6a12a88aaa0.webp",
      "https://img.cofynd.com/images/latest_images_2024/bdf772def76464b8d69af6cbd81c7a691d6332bf.webp",
      "https://img.cofynd.com/images/latest_images_2024/505d0366a49dae79b9189be90edf1fa6841954de.webp"
    ]
  },
  // 5. MY MATHS LEARNING ZONE - Mohali
  {
    id: 37,
    name: "MY MATHS LEARNING ZONE",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Sahibzada Ajit Singh Nagar, Mohali",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/256551ecd08161b86d5856ad9a6a1d39ae7f6bf7.jpg",
      "https://img.cofynd.com/images/original/a1801832c8719678d3a25a31d8477fb84383a161.jpg",
      "https://img.cofynd.com/images/original/b4d3052cf232f61390493bbb245d4f60da1f1c8a.jpg",
      "https://img.cofynd.com/images/original/cd97be2dcaa6efdf8068140b582cbfdae7f26fe4.jpg",
      "https://img.cofynd.com/images/original/0ee5ae12ff0fc68b3d968cdb9366f29797c0d139.jpg"
    ]
  },
  // 6. Triam Centre - Madhya Marg
  {
    id: 38,
    name: "Triam Centre",
    badge: null,
    rating: null,
    area: "Madhya Marg",
    location: "Madhya Marg, Chandigarh",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1486982195/txv3uxz8mr4phbul6wny.webp",
      "https://qdesq.imagekit.io/img/image/upload/tr:n-detail_image_hq/v1486982206/fmnkrmgvqoifpazo5ihi.webp",
      "https://qdesq.imagekit.io/img/image/upload/tr:n-detail_image_hq/v1486982195/txv3uxz8mr4phbul6wny.webp",
      "https://qdesq.imagekit.io/img/image/upload/tr:h-181,w-325/v1486982206/fmnkrmgvqoifpazo5ihi.webp"
    ]
  },
  // 7. MEE Spaces - Industrial Area Phase 1
  {
    id: 39,
    name: "MEE Spaces",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1700552519/tlsbhrdnsrqpknkai4gc.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700552351/tznsfbmu3d5eroscyeuv.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700552302/neurscfnuygtjoexewnn.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700552302/fo6exdx7s5rg3sepmgr1.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700552302/rnqougexcx4buger6jux.webp",
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1700568358/tsqwy2tqphdxpnzlxgv8.jpg"
    ]
  },
  // 8. MySoho - Industrial Area Phase 1
  {
    id: 40,
    name: "MySoho",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹1",
    period: "/ Month",
    priceFormatted: "₹1 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1684735218/n3jubbdmqgxd4wczxbh0.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1684735152/xkg9fsrcnczprhi8o6wx.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1684735152/ludc0tlz1debew0nbrs4.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1684735165/ge76doywoimgcrlvrsqd.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1684735203/moph4j7lkl1bjyvmczev.webp",
      "https://qdesq.imagekit.io/tr:h-181,w-325/image/upload/v1684735152/xkg9fsrcnczprhi8o6wx.webp"
    ]
  }
];

// ============================================================================
// Page 2 cards - second grid ("Additional coworking spaces", below the top grid).
// Shown when pagination button 2 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const pageTwoMoreChandigarhOfficeCards = [
  // 1. Imagine - Industrial Area Phase 1
  {
    id: 41,
    name: "Imagine",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹7,000",
    period: "/ Month",
    priceFormatted: "₹7,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1683698002/mhydgsdpo10kgxtlano9.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1683719434/a0fghen3wvvqw3apovhp.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1683719449/mbez8sfbfu8c6hq1c88j.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1683635986/dnjlq3szkgaeispda5ob.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1683635986/ktfolajc9waxnrozhbcy.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1683635986/yet82av94jgpsn7pdzi2.jpg"
    ]
  },
  // 2. Trading Cowork - Industrial Area Phase 1
  {
    id: 42,
    name: "Trading Cowork",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/3965bd39cffac125c4106ffce3e8cb43_6WwrZ0st2.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/15bf483abbb1def920701497d1e723c7_Dzidwggi4.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/76a8af63e9544d671a94c0b39a3829b2_bzAWlxtwg.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/24ed918bc89633c024e668189f54c482_ps0f2B6E6.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/d08c607a27c0f222e6b33d18dd46c598_9jEHTu5Zn.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/90fe49651a58281ce066c418753829be_0g48wmJkG.jpg"
    ]
  },
  // 3. MAGNET COWORK - Industrial Area Phase 1
  {
    id: 43,
    name: "MAGNET COWORK",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹7,000",
    period: "/ Month",
    priceFormatted: "₹7,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1585916650/m09kvvotevev5bpb4hsq.png",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1580898525/y6psgvus6eju9rkyancb.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1580898525/hcx1jtdvxvsh7yqc3jxx.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1580898529/m5jmjahdbqn1xdilexzn.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1580898526/d5bh7bcurdljcociatm9.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1580898528/pkpu1fzmwj4gpaele3ou.webp"
    ]
  },
  // 4. Magnet Coworks - Industrial Area Phase 1
  {
    id: 44,
    name: "Magnet Coworks",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹14,000",
    period: "/ Month",
    priceFormatted: "₹14,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1634200838/kzzsarnl4j8enna5ky5z.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1634201086/hcj5yhbacbopn18salih.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1634200978/ekdxsdcgon4jlikcz5du.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1634200979/p29atr2ujkqfwikwazjk.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1634200797/b4qxc7dcijrw2slwik3f.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1634200838/kzzsarnl4j8enna5ky5z.jpg"
    ]
  },
  // 5. Next 57 - Industrial Area Phase 1
  {
    id: 45,
    name: "Next 57",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1647863945/tshv5q21iy3g6ovtaa85.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1647863945/tshv5q21iy3g6ovtaa85.webp",
      "https://qdesq.imagekit.io/tr:h-181,w-325/image/upload/v1647863945/tshv5q21iy3g6ovtaa85.webp"
    ]
  },
  // 6. WORKAHOLICS - Industrial Area Phase 1
  {
    id: 46,
    name: "WORKAHOLICS",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1656148045/xoxmbsfpi5hlhwoci4rv.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1656147953/l0wwngdhr3cclptlyfgx.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1656147945/thlrb4nnxtb1tprpi6ln.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1656147945/wamimuco5053kpgafcdh.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1656147945/uitchedxstpqij2whddx.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1656147949/zli2pct8h1c4om7leuln.jpg"
    ]
  },
  // 7. Manthan Work Spaces - Industrial Area Phase 1
  {
    id: 47,
    name: "Manthan Work Spaces",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1701686368/vxhr0yks4hw6z9yjbjdf.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1701600336/o8ichw7c2koopz3n8yu8.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1701600326/qddwyl9nreqbmmsmdazn.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1701600351/lskz5b551bviypr706se.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1701600331/ts9el7fvscrnngaw3yb5.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1701686322/tq9nxiosyq3fjxuhzs6z.webp"
    ]
  },
  // 8. The Workerry - Mohali
  {
    id: 48,
    name: "The Workerry",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/5a1c67d4a8cd853ae2b3b23a1dcee4e0_C98XPSshS.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/db0cf5a7d28a38614ddc331c86bb71f1_kwRjP5Na-.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/1afa2e9b52f09768a5bde59a4f886c78_TK9rG_MAK.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/5fa2d8ab1d07f531fe3230f7e653468e_3dUzmdCU-.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/71ef5b1bd7d8796f68293e84b45d1438_XeFO2XW_W.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/e260f4b18314249e0ad21dce89a03299_hjAwVEp49.jpeg"
    ]
  }
];

// ============================================================================
// Page 2 cards - third grid ("Spotlight coworking spaces", below the "Discover your perfect workspace" banner).
// Shown when pagination button 2 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const pageTwoFinalChandigarhOfficeCards = [
  // 1. Next 57 - Sahibzada Ajit Singh Nagar
  {
    id: 49,
    name: "Next 57",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹6,600",
    period: "/ Month",
    priceFormatted: "₹6,600 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1645609996/jbedaf0asq7uxbekgskc.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645610391/bett9xetyopyr6qegbfk.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645610357/ujvd4arnvqhszeopoxqy.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645610357/vtivsm3avakfentfmqto.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645610358/jsstxmr1ju1fcmoyuhf6.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645609996/jbedaf0asq7uxbekgskc.jpg"
    ]
  },
  // 2. IDEA COWORKING - Sahibzada Ajit Singh Nagar
  {
    id: 50,
    name: "IDEA COWORKING",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹5,500",
    period: "/ Month",
    priceFormatted: "₹5,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/44639bbfbdb0c125c85556b0a0741058_3mJRAojRM.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/d60fd56f3861dfef4ea72a3b998bada6_U8hRa8ZYa.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/8383e77509dc3a2082a3174ed80ca178_HeDyoKjXvA.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/641c0332511e521bbf12031e31574986_jjBhfjGoD.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/238ccf47dabedbfeb9999aeb1e68f23d_Fcj_racKxV.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/3888af4cd8db474dd78a2afa3ed1e266_Sugpian4s.jpeg"
    ]
  },
  // 3. Nano Shell - Sahibzada Ajit Singh Nagar
  {
    id: 51,
    name: "Nano Shell",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹4,500",
    period: "/ Month",
    priceFormatted: "₹4,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1593253590/czpxyqy3tlhc24ul15ko.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1593253588/xb888nk9lwoygr8yvo3r.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1593253590/pufk38rivt2arlviuzwg.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1593253590/czpxyqy3tlhc24ul15ko.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1593253587/iaml0d4tdm3fqeiupnvd.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1593253586/gvb6vmmattjvjnzsjd1b.webp"
    ]
  },
  // 4. ELEV8 Coworking - Mohali
  {
    id: 52,
    name: "ELEV8 Coworking",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Phase 8B, Mohali",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/f8da8b50bd4da5047d2d49aa5dbd391b_1bc74jgWD.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/4a52e4307fa773236fda278dcce2b853_xAD_3cW0K.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/a9b579a75d1077a9e5e9d80f926bb85e_WZ3TplPWK.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/5ac7b991a9cb7185fadd4a4874d31c7a_-F2seEVivu.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/b47f1c5f7fcd6914fe387299c0364732_sPVra_V2W.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/79d2834c1accedfc20c03e160f856b1e_aKNPCCn8t.jpg"
    ]
  },
  // 5. MySoho - Mohali
  {
    id: 53,
    name: "MySoho",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1663323253/dumhjwoinm3rj0upfnys.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1663323565/cg6hzjk1wwejgpntcm2x.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1663323564/dpuwowocxqleyjpottlb.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1663323562/lzqvombo6rbnzg1vrmvo.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1663323562/pfljracxwggc3whylljl.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1663323253/dumhjwoinm3rj0upfnys.jpg"
    ]
  },
  // 6. Incodesk Coworking Center - Zirakpur
  {
    id: 54,
    name: "Incodesk Coworking Center",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1682589358/c6rigypjv0hmfa8cnsvn.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1682589348/a2dylayqkj5qr09jehzc.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1682589453/palfgjbsivmqfgracaz6.webp",
      "https://qdesq.imagekit.io/tr:h-181,w-325/image/upload/v1682589348/a2dylayqkj5qr09jehzc.webp"
    ]
  },
  // 7. Chargingbull - Zirakpur
  {
    id: 55,
    name: "Chargingbull",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹6,600",
    period: "/ Month",
    priceFormatted: "₹6,600 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1595318043/yfv5ejphcxfdjjyrtpo3.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595318517/v1bezr8gyk4jequgnqdu.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595318547/adevteotpamgbhsig1t9.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595318574/itdhf30heik0dovey8mr.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595318043/yfv5ejphcxfdjjyrtpo3.webp",
      "https://qdesq.imagekit.io/img/tr:h-181,w-325/image/upload/v1595318517/v1bezr8gyk4jequgnqdu.webp"
    ]
  },
  // 8. Firstbase Coworking - Zirakpur
  {
    id: 56,
    name: "Firstbase Coworking",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/f66259ed9a12c41635081dfa6690db74_NlVxY5pBV.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/3784a04f6e0620467f6deb271b5b8e40_Z9KfU9PT5.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/5e2399b9e8e79c3d8b3a0f6a1ec5e5e8_qH4ibsO8x.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/411de286672296eff85bf52c6dcc12e8_1-X4EUojA.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/9352d8aae23487cda7f284c7d92264be_fAFQG70dX.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/e48015a72f85560f5e1b65e6aa94d1bf_Rszrpy9Zc.JPG"
    ]
  }
];

// ============================================================================
// Page 2 cards - fourth grid ("Featured coworking spaces", below the "Customized office solutions" banner).
// Shown when pagination button 2 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const pageTwoFeaturedChandigarhOfficeCards = [
  // 1. Ace Coworking - Zirakpur
  {
    id: 57,
    name: "Ace Coworking",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1713774262/uykvlkekaytn7ogu5zrd.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1713775054/m74qaphnzawlr9opd51h.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1713775123/rrz4ejr7m7ywimi3t9tc.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1713775033/sbtcewgvodxtwnvwj16y.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1713775033/jsydyzweezkj2p3pj3xn.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1713775034/gs26dxrdjl06ovgz6zdl.webp"
    ]
  },
  // 2. Meshink - Zirakpur
  {
    id: 58,
    name: "Meshink",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹8,000",
    period: "/ Month",
    priceFormatted: "₹8,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/05a90f80874719e1dbb91b410fc41580_blxdwe-fe.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/4693432380aeb2fe2d920e5f7c0d98cb_5tdnW4I7X.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/9f0f9a6c7193c91b767631a1e49718ed_MARK97oyp.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/4dc40ac7a838c9a7865a02f34da4b2cc_kJSpL19n0.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/ea46168cca112b09c4e842e16d93b7f5_n5C1Elq0m.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/6e266636f52515f1f1f68887e6d99ee7_SPwdWWPoOw.jpg"
    ]
  },
  // 3. Saludos - Sahibzada Ajit Singh Nagar
  {
    id: 59,
    name: "Saludos",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹4,500",
    period: "/ Month",
    priceFormatted: "₹4,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1645509119/czkotnttswiamsggylk3.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645509298/e9rp0nbwcx59nddhwvla.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645509297/xyr4gsp0g5wupnhuuizs.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645509298/qlntudrmpnv3hhkbq4zc.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645509298/mb6sqwdjkwoztw1zvtxs.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645509298/bngabwkvrnw4iajdcysg.webp"
    ]
  },
  // 4. Workyard Coworking, Zirakpur - Zirakpur
  {
    id: 60,
    name: "Workyard Coworking, Zirakpur",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹3,500",
    period: "/ Month",
    priceFormatted: "₹3,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/0404dc4bef389a3c38146802bb025b7c_i2FVQ1h89D.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/f164c7067247659889c36149ec2645a0_L7jFYOWHe5.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/3e93432184f5adc4f2e549a0a33c5daf_VxreyZHEb.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/17d8ca1974425b2bb75abd51cf365beb_4_O1g_KN3.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/1fec10946bc12879f5209c366fcd3e27_n9Tc41aJ7.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/5b9cbb447238f8147f568d4f6e0fb665_2QjVlkiJ9.JPG"
    ]
  },
  // 5. IDEA COWORKING - Zirakpur
  {
    id: 61,
    name: "IDEA COWORKING",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1658989814/bdwzogl3pvsh4kmrqsuh.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1658991716/utuzlnjbzyvjdpmdylos.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1658989814/b5mxz85pnp5sh78aocyw.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1658989814/bdwzogl3pvsh4kmrqsuh.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1658991729/xwagtiylhvjvxl9upjqs.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1658991730/r2kh4bdux4bkvmmomi0m.webp"
    ]
  },
  // 6. Begin Coworking - Mohali
  {
    id: 62,
    name: "Begin Coworking",
    badge: "People Choice",
    rating: 4.8,
    area: "Mohali",
    location: "Industrial Area, Chandigarh",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1586000223/us5hdh2jzp9erkqmpowk.png",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1577360901/pin3tjvnylxuci6fdk2z.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1577360901/tox792bg5qjnzl80kxkq.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1577360902/pows11zjv2pshvuljtll.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1577425028/hcc23pm9g9n9nebb4euu.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1577425028/oq7itdh4rutnwgigqc43.webp"
    ]
  },
  // 7. Wotta Workspace - Mohali
  {
    id: 63,
    name: "Wotta Workspace",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1530874205/mj9lhz1j2qu9rcf9l5ys.webp",
      "https://qdesq.imagekit.io/img/image/upload/tr:n-detail_image_hq/v1523096368/gwytnwyn69sn5gse7r7j.webp",
      "https://qdesq.imagekit.io/img/image/upload/tr:n-detail_image_hq/v1523096350/muhel47v7zl1dxluuezr.webp",
      "https://qdesq.imagekit.io/img/image/upload/tr:n-detail_image_hq/v1523096327/gkpghaxp9lu2ounyivba.webp",
      "https://qdesq.imagekit.io/img/image/upload/tr:h-181,w-325/v1523096368/gwytnwyn69sn5gse7r7j.webp"
    ]
  },
  // 8. Uttam Coworking - Mohali
  {
    id: 64,
    name: "Uttam Coworking",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-75cfa3e5-a925-4f7d-8753-d8258d548788-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-418c0690-0719-42cd-a13f-70c29685ddc1-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-a4db62d3-d277-49d4-b20c-346451edf20a-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-b7f8fc85-521c-4a72-9451-de20001159db-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-5df24249-2ddb-4d8c-9b9c-c5db20bb2766-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-59cc9273-2748-4922-b6b8-41635c906543-large-1200x1200.jpg"
    ]
  }
];

// ============================================================================
// Page 3 cards - top grid (right under the area filter buttons).
// Shown when pagination button 3 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const pageThreeChandigarhOfficeCards = [
  // 1. The Cube Mohali - Mohali
  {
    id: 65,
    name: "The Cube Mohali",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹4,499",
    period: "/ Month",
    priceFormatted: "₹4,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-c326849d-04bc-48f1-b4ce-5bb46aeac1fa-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-eb3a3985-efdf-4a68-8daa-fa6f5e0cb0bf-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-b6f6f5e3-9983-4a12-8a3d-d60ac2a57d52-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-a6d5e799-c921-4747-9996-b63649c9d602-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-5519e34d-3a1e-43f9-8382-94071162dc67-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-64513269-b85e-4bea-bda3-a8ce778f7ecc-large-1200x1200.jpg"
    ]
  },
  // 2. Space For Work - Mohali
  {
    id: 66,
    name: "Space For Work",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹3,999",
    period: "/ Month",
    priceFormatted: "₹3,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-d128a608-8a1a-488d-b4d7-cfc1f7170307-large-1200x1200.jpg"
    ]
  },
  // 3. Girl Power Talk - Mohali
  {
    id: 67,
    name: "Girl Power Talk",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹3,500",
    period: "/ Month",
    priceFormatted: "₹3,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-9a54b4bc-0d2c-4d29-8557-a5ebf384cdb4-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-b53ed66c-07e8-4ec7-a552-e62a8157731e-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-cb510c3d-dd36-4da2-a1e6-76f5e0a3b56a-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-b19b0dcb-1a9b-4eb9-8140-d2c4319d597d-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-01-KnrHD7Mq-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-02-KS2WAbRK-large-1600x1200.jpg"
    ]
  },
  // 4. SpaceJam Mohali - Mohali
  {
    id: 68,
    name: "SpaceJam Mohali",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-5712ee1c-087d-4ded-a5e7-5371df2ef508-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-0f2201cb-f4de-4da7-95fd-9b07b7278474-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-bd6861d8-7a1f-4b74-aadc-afb4633aa607-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-ecabd773-4ec3-46be-957c-fb46bf8c4662-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-3acdebc4-44b2-4cd0-878c-71f8c885368c-large-1200x1200.jpg"
    ]
  },
  // 5. The Power Study Cafe - Zirakpur
  {
    id: 69,
    name: "The Power Study Cafe",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-17075de3-750b-4c27-b196-bc6649a81b95-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-1f42d7b1-af16-4b41-bcbd-16f4a71670fe-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-452fd60c-5fdd-4586-9ea2-2c8519fe20bf-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-01-qxa3LjE4-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-02-tWmw9NTj-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-03-RP1lyYcL-large-1600x1200.jpg"
    ]
  }
];

// ============================================================================
// Page 3 cards - second grid ("Additional coworking spaces", below the top grid).
// Shown when pagination button 3 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const pageThreeMoreChandigarhOfficeCards = [
  // 1. COWORKING LABS - Zirakpur
  {
    id: 70,
    name: "COWORKING LABS",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-24ff8e1f-320b-4996-83e1-672da000ae65-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-cf02ffda-7481-4f36-8fd2-8742dd43f0c8-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-52f3f39c-1859-4744-9d69-6eb1965203c8-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-1-3-FlL_Qs4f-large-1600x1200.jpeg",
      "https://cdn.daftar.com/image-1-4-1ov_EIWd-large-1600x1200.jpeg"
    ]
  },
  // 2. IDEA Coworking Zirakpur - Zirakpur
  {
    id: 71,
    name: "IDEA Coworking Zirakpur",
    badge: null,
    rating: null,
    area: "Zirakpur",
    location: "Zirakpur, Chandigarh",
    price: "₹7,000",
    period: "/ Month",
    priceFormatted: "₹7,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-1f05a503-c42f-4951-aaef-c325cb48464e-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-a6f1e45f-ea5b-449c-b0cc-b917a470e006-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-5e49055d-8ea7-426c-a7bd-c0b692789294-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-d641feb6-b47a-4863-9de0-7c7b3270d5e0-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-9f44c1f3-6bea-4a53-8e60-3616249845db-large-1200x1200.jpg"
    ]
  },
  // 3. Next57 Coworking Chandigarh - Industrial Area Phase 1
  {
    id: 72,
    name: "Next57 Coworking Chandigarh",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-807f0023-8387-45a8-8ce5-69bc5564be8d-large-1600x1200.webp",
      "https://cdn.daftar.com/image-b4447613-0681-45e7-b88f-7fb9d2ace638-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-334847b2-c6a8-41b6-a563-d11173cbe536-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-fcaed295-a15b-44f3-adeb-2e029460a065-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-01-OMQx-_4J-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-02-qYMGXbVF-large-1600x1200.jpg"
    ]
  },
  // 4. Workspace Junction - Industrial Area Phase 1
  {
    id: 73,
    name: "Workspace Junction",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹7,000",
    period: "/ Month",
    priceFormatted: "₹7,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-e9170378-49df-416d-b3be-10196dd9f204-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-35d281bc-487c-49d6-8746-179b589fe629-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-fa9c9d83-4145-4b1f-8945-d467454aa10c-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-01-r-Okx2LU-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-02-bQxl3J3d-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-03-l6MPpx0q-large-1600x1200.jpg"
    ]
  },
  // 5. Caryakshetra - Industrial Area Phase 1
  {
    id: 74,
    name: "Caryakshetra",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹6,999",
    period: "/ Month",
    priceFormatted: "₹6,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-5e9dc373-3c80-4c55-ad13-3e80a0bd2b64-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-a479cbab-259c-4f93-9251-aa15aeb52230-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-01528d07-24c2-4a01-b50f-f20269011118-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-9d28f226-c76a-479a-a32d-215b3b83eee8-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-02-AfzETPjb-large-1600x1200.jpg",
      "https://cdn.daftar.com/image-03-IZnub3zM-large-1600x1200.jpg"
    ]
  }
];

// ============================================================================
// Page 3 cards - third grid ("Spotlight coworking spaces", below the "Discover your perfect workspace" banner).
// Shown when pagination button 3 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const pageThreeFinalChandigarhOfficeCards = [
  // 1. Fullcircle HD - Madhya Marg
  {
    id: 75,
    name: "Fullcircle HD",
    badge: null,
    rating: null,
    area: "Madhya Marg",
    location: "Madhya Marg, Chandigarh",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-cec49ab5-bacd-48b8-a2ac-238888dece06-large-1200x1200.webp",
      "https://cdn.daftar.com/image-67bd8c82-e004-4a77-a98f-7a03c4c23d42-large-1200x1200.webp",
      "https://cdn.daftar.com/image-d5001b15-fa49-44fc-b270-c9e0e72eb143-large-1200x1200.webp",
      "https://cdn.daftar.com/image-a938609e-734a-4944-8c90-11f69ff89864-large-1200x1200.webp",
      "https://cdn.daftar.com/image-2e539689-077f-441b-92a5-20a086bb004f-large-1200x1200.webp"
    ]
  },
  // 2. SpaceJam Chandigarh - Sector 34A
  {
    id: 76,
    name: "SpaceJam Chandigarh",
    badge: null,
    rating: null,
    area: "Sector 34A",
    location: "Sector 34A, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-33e02ec0-e1c5-40d8-9058-ae07be2a1f25-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-494a3d96-f6b8-4c10-a726-f93144415fd8-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-ed5827c5-2f9d-4293-9274-152e90000e74-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-217f6010-2bd8-4ef9-867a-aa5411af37bb-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-b6dbd862-602a-493a-aab5-737b04a7ab83-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-a075dbfc-da7c-4154-915d-0ba65f0d8b28-large-1200x1200.jpg"
    ]
  },
  // 3. Next57 Coworking Chandigarh Phase 1 - Industrial Area Phase 1
  {
    id: 77,
    name: "Next57 Coworking Chandigarh Phase 1",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://cdn.daftar.com/image-a7d462d6-1993-48dc-9524-c2f794c3675c-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-eef5d73b-bccd-4d20-977b-5fd407fc631b-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-a5e5b1e2-4707-4a91-9a77-f329e42b69a3-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-da767127-3007-4fb5-b56a-641777bf43ab-large-1200x1200.jpg",
      "https://cdn.daftar.com/image-334d84e4-4e40-4ade-8277-e1d90d0ca2a9-large-1600x1200.jpg"
    ]
  },
  // 4. Next57 Jlpl Industrial Area - Mohali
  {
    id: 78,
    name: "Next57 Jlpl Industrial Area",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://imgcdn.houssed.com/assets/Files/Projects/146416/Sample%20Apartment/Laxmi-3-1754892670.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146416/Sample%20Apartment/ortune-3-1754892707.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146416/Location/4floor-Map-1754892728.webp"
    ]
  },
  // 5. Nex57 Phase 7 - Phase 7
  {
    id: 79,
    name: "Nex57 Phase 7",
    badge: null,
    rating: null,
    area: "Phase 7",
    location: "Phase 7, Chandigarh",
    price: "₹4,000",
    period: "/ Month",
    priceFormatted: "₹4,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://imgcdn.houssed.com/assets/Files/Projects/146419/Sample%20Apartment/6-1755841227.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146419/Sample%20Apartment/1-1755841227.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146419/Sample%20Apartment/2-1755841227.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146419/Sample%20Apartment/7-1755841227.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146419/Sample%20Apartment/3-1755841227.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146419/Sample%20Apartment/4-1755841227.webp"
    ]
  }
];

// ============================================================================
// Page 3 cards - fourth grid ("Featured coworking spaces", below the "Customized office solutions" banner).
// Shown when pagination button 3 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const pageThreeFeaturedChandigarhOfficeCards = [
  // 1. Regus Citi Centre - Mohali
  {
    id: 80,
    name: "Regus Citi Centre",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹6,750",
    period: "/ Month",
    priceFormatted: "₹6,750 / Month",
    ctaText: "Get Quote",
    images: [
      "https://imgcdn.houssed.com/assets/Files/Projects/147542/Sample%20Apartment/10-1755774997.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147542/Sample%20Apartment/3-1755774997.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147542/Sample%20Apartment/1-1755774997.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147542/Sample%20Apartment/2-1755774997.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147542/Sample%20Apartment/5-1755774997.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147542/Sample%20Apartment/4-1755774997.webp"
    ]
  },
  // 2. Regus 42 Works - Mohali
  {
    id: 81,
    name: "Regus 42 Works",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹6,350",
    period: "/ Month",
    priceFormatted: "₹6,350 / Month",
    ctaText: "Get Quote",
    images: [
      "https://imgcdn.houssed.com/assets/Files/Projects/147546/Sample%20Apartment/6-1755775571.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147546/Sample%20Apartment/9-1755775571.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147546/Sample%20Apartment/1-1755775571.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147546/Sample%20Apartment/2-1755775571.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147546/Sample%20Apartment/4-1755775571.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147546/Sample%20Apartment/3-1755775571.webp"
    ]
  },
  // 3. Next57 Industrial Area Phase 9 - Mohali
  {
    id: 82,
    name: "Next57 Industrial Area Phase 9",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://imgcdn.houssed.com/assets/Files/Projects/146418/Sample%20Apartment/Mohil-1-1754893109.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146418/Sample%20Apartment/Law-1-1754893088.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146418/Sample%20Apartment/Mohil-2-1754893109.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146418/Location/Mohil-Map-1754893125.webp"
    ]
  },
  // 4. Next57 Phase 8B - Phase 8B
  {
    id: 83,
    name: "Next57 Phase 8B",
    badge: null,
    rating: null,
    area: "Phase 8B",
    location: "Phase 8B, Chandigarh",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://imgcdn.houssed.com/assets/Files/Projects/146410/Sample%20Apartment/Coo-3-1754891570.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146410/Sample%20Apartment/Coo-1-1754891570.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146410/Sample%20Apartment/Coo-2-1754891570.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/146410/Location/SM-Map-1754891586.webp"
    ]
  },
  // 5. IndiQube Biz - Mohali
  {
    id: 84,
    name: "IndiQube Biz",
    badge: null,
    rating: null,
    area: "Mohali",
    location: "Mohali, Chandigarh",
    price: "₹5,600",
    period: "/ Month",
    priceFormatted: "₹5,600 / Month",
    ctaText: "Get Quote",
    images: [
      "https://imgcdn.houssed.com/assets/Files/Projects/145312/Sample%20Apartment/3-1753776246.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145312/Sample%20Apartment/1-1753776246.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145312/Sample%20Apartment/4-1753776246.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145312/Sample%20Apartment/2-1753776246.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145312/Location/Hou-1753776253.webp"
    ]
  }
];

// ============================================================================
// Page 4 cards - top grid (right under the area filter buttons).
// Shown when pagination button 4 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const pageFourChandigarhOfficeCards = [];

// Area-specific extra cards (only real same-area listings; shown only when that area filter is active).
export const areaExtraOfficeCards = {
  // Extra cards for the "Mohali" filter
  "Mohali": [
    // 1. Big Coworking - Sahibzada Ajit Singh Nagar
    {
      id: 27,
      name: "Big Coworking",
      badge: null,
      rating: null,
      area: "Sahibzada Ajit Singh Nagar",
      location: "Sahibzada Ajit Singh Nagar, Chandigarh",
      price: "₹4,999",
      period: "/ Month",
      priceFormatted: "₹4,999 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/original/fc19bd72fed12e7ba2b4027c814a9b45ba931a24.jpg",
        "https://img.cofynd.com/images/original/94190917c687f986528692bd3a759d29ccd305f7.jpg",
        "https://img.cofynd.com/images/original/9faf549da2c22b71944c4afc9efffac88623c43d.jpg",
        "https://img.cofynd.com/images/original/eba1e235d2c473788c054856b72d5bd9233c55fa.jpg",
        "https://img.cofynd.com/images/original/dac89e80231ab31d5f82fc08488c45fdc3389126.jpg"
      ]
    }
  ],
  // Extra cards for the "Zirakpur" filter
  "Zirakpur": [],
  // Extra cards for the "Madhya Marg" filter
  "Madhya Marg": [],
  // Extra cards for the "Sahibzada Ajit Singh Nagar" filter
  "Sahibzada Ajit Singh Nagar": [],
  // Extra cards for the "Sector 34A" filter
  "Sector 34A": [],
  // Extra cards for the "Phase 8B" filter
  "Phase 8B": [],
  // Extra cards for the "Phase 7" filter
  "Phase 7": [],
  // Extra cards for the "Industrial Area Phase 1" filter
  "Industrial Area Phase 1": []
};

// ============================================================================
// Page 1 cards - top grid (right under the area filter buttons).
// Shown when pagination button 1 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const similarChandigarhOfficeCards = [
  // 1. Spacejam Coworking Chandigarh - Industrial Area Phase 1
  {
    id: 1,
    name: "Spacejam Coworking Chandigarh",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 1",
    location: "Industrial Area Phase 1, Chandigarh",
    price: "₹3,279",
    period: "/ Month",
    priceFormatted: "₹3,279 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/2745367b4f6a12aff27779e258e32b0c087e3adb.webp",
      "https://img.cofynd.com/images/latest_images_2024/d549d20d2861ef3c3fbe93abc0a244877b494a15.webp",
      "https://img.cofynd.com/images/latest_images_2024/598201ccdebc263e135d19710bcdc63d013b2b45.webp",
      "https://img.cofynd.com/images/latest_images_2024/6a0e13eda27a3ba408ef4e1d63399ced2d1af90d.webp",
      "https://img.cofynd.com/images/latest_images_2024/02a697e9a47810cd7a5cfd54e45999af5317ea59.webp"
    ]
  },
  // 2. Magnet Cowork - Sector 34A
  {
    id: 2,
    name: "Magnet Cowork",
    badge: null,
    rating: null,
    area: "Sector 34A",
    location: "Sector 34A, Chandigarh",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/3ccceaa87ebc54f7caef5349627ddfc4ff474908.jpg",
      "https://img.cofynd.com/images/original/d3db3878ce1829214db69c41b8f052ee74897883.jpg",
      "https://img.cofynd.com/images/original/a81d6f96dc972bb3f23fcb49739f5cf1455bca0e.jpg",
      "https://img.cofynd.com/images/original/03ca761e6a4693a48d15f3f975277358bac8c9cc.jpg",
      "https://img.cofynd.com/images/original/1cae0b100bb46976aa36d5d507671feda400796a.jpg",
      "https://img.cofynd.com/images/original/c40ab4359100cdb2c22b2f141847b7246ee2845b.jpg"
    ]
  },
  // 3. Next57 Coworking - Sector 34A
  {
    id: 3,
    name: "Next57 Coworking",
    badge: null,
    rating: null,
    area: "Sector 34A",
    location: "Sector 34A, Chandigarh",
    price: "₹1,899",
    period: "/ Month",
    priceFormatted: "₹1,899 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/3a3bd01b85b219eddcc17657c63cde63c0347ec0.jpg",
      "https://img.cofynd.com/images/original/b8891bf267628ae60e028a4bbf87318c5687701c.jpg",
      "https://img.cofynd.com/images/original/c81e1b6ce2f4baa60b73d97c254674bb38f75af5.jpg",
      "https://img.cofynd.com/images/original/f61f2dbfc5bd6b6578a290894c466d13cc041b5d.jpg",
      "https://img.cofynd.com/images/original/4c0d7409e940c43250a934b6f25678fff17173f6.jpg",
      "https://img.cofynd.com/images/original/acf248d0cf9654c98b288fac0f071a9232f7ab6a.jpg"
    ]
  },
  // 4. Work Yard - Sahibzada Ajit Singh Nagar
  {
    id: 4,
    name: "Work Yard",
    badge: null,
    rating: null,
    area: "Sahibzada Ajit Singh Nagar",
    location: "Sahibzada Ajit Singh Nagar, Chandigarh",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/ef7b8a2b828dc271f01c9572b4a334e13ad9fd91.jpg",
      "https://img.cofynd.com/images/original/6638ada1398cb29734604297fe018781501ee77d.jpg",
      "https://img.cofynd.com/images/original/6dd7a739df3952474424c819da813a58e3d4e071.jpg",
      "https://img.cofynd.com/images/original/acfe7fcd4f05fe58cc7764d2f0e07c76a481c456.jpg",
      "https://img.cofynd.com/images/original/3918cedbd2c91e44eea5436b198405d8c466828b.jpg",
      "https://img.cofynd.com/images/original/c2a02cd5ce9b78a6deeca682c813acbca375ff9d.jpg"
    ]
  },
  // 5. MySoho - Madhya Marg
  {
    id: 5,
    name: "MySoho",
    badge: null,
    rating: null,
    area: "Madhya Marg",
    location: "Madhya Marg, Chandigarh",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/4d9055b9fbf5162cdf5251d5bfacdb835f16bd89.jpg",
      "https://img.cofynd.com/images/original/ba62098eba6e87d263351d298c6dc1ca850fcede.jpg",
      "https://img.cofynd.com/images/original/89f6f81a395aa4e86bbc1baec4078f981860d9c0.jpg",
      "https://img.cofynd.com/images/original/7c119374a48d90d51d59b8b40d46fd6321405f8a.jpg",
      "https://img.cofynd.com/images/original/5823284da62a8217027b39a2f55649ef16b74a72.jpg"
    ]
  },
  // 6. Qowork - Madhya Marg
  {
    id: 6,
    name: "Qowork",
    badge: null,
    rating: null,
    area: "Madhya Marg",
    location: "Madhya Marg, Chandigarh",
    price: "₹7,999",
    period: "/ Month",
    priceFormatted: "₹7,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/852b70921d6aa896a7981308b232ef7e0b26c159.jpg",
      "https://img.cofynd.com/images/original/59764e5ea942181751d2c7456f41de2d2831f57c.jpg",
      "https://img.cofynd.com/images/original/bb2c2b3e552910a319475c2a7df1b08e5d489641.jpg",
      "https://img.cofynd.com/images/original/c2875dc9f3d013022c5fc8128b56297447af09c5.jpg",
      "https://img.cofynd.com/images/original/df6361154dd077de766271378f2e4f4531a6e864.jpg"
    ]
  },
  // 7. Roadies Koffeehouz - Madhya Marg
  {
    id: 7,
    name: "Roadies Koffeehouz",
    badge: null,
    rating: null,
    area: "Madhya Marg",
    location: "Madhya Marg, Chandigarh",
    price: "₹2,999",
    period: "/ Month",
    priceFormatted: "₹2,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/9ffc4b403c1c90d1ad69e770a1709edd7bced2c2.jpg",
      "https://img.cofynd.com/images/original/9faa1f80ea751461affbd83a2de466b172b1b1d8.jpg",
      "https://img.cofynd.com/images/original/593912b1172131d8eb19c557d13596496dc33811.jpg",
      "https://img.cofynd.com/images/original/ec7ab698d1ea9f69cb7fe96f2e4347c67d313243.jpg",
      "https://img.cofynd.com/images/original/47cc93e1ea8df1308aae0b8685bae9f62e28c31c.jpg"
    ]
  },
  // 8. SpaceJam - Sector 34A
  {
    id: 8,
    name: "SpaceJam",
    badge: null,
    rating: null,
    area: "Sector 34A",
    location: "Sector 34A, Chandigarh",
    price: "₹3,279",
    period: "/ Month",
    priceFormatted: "₹3,279 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/ee3dd5148d42a1e80091a52024fa49ecb7451b7f.jpg",
      "https://img.cofynd.com/images/original/1376a4ccd4b0fe6769cc24ad077d3b936b774c09.jpg",
      "https://img.cofynd.com/images/original/839e556d07c70ff54ffa2704356c337e14502471.jpg",
      "https://img.cofynd.com/images/original/d9b5c2d9ad3eb5a0eaee054c29ec549e0bffc23e.jpg",
      "https://img.cofynd.com/images/original/12ff996e39c7ace06126b99d3835d333facfd170.jpg",
      "https://img.cofynd.com/images/original/6ff70f93746c4c5b0c0cab065afe4e70a8c55d23.jpg"
    ]
  },
  // 9. Workaholics workzone - Sector 34A
  {
    id: 9,
    name: "Workaholics workzone",
    badge: null,
    rating: null,
    area: "Sector 34A",
    location: "Sector 34A, Chandigarh",
    price: "₹5,189",
    period: "/ Month",
    priceFormatted: "₹5,189 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/7b14a2ae5ef4a522a8f9fc564ef38955e482a08d.jpg",
      "https://img.cofynd.com/images/original/90f6f6ac34a5a6cde2a7524824e4e71b20a59c56.jpg",
      "https://img.cofynd.com/images/original/449fb424b2284352b62ff7c6efec4f71e8289836.jpg",
      "https://img.cofynd.com/images/original/fea0542093de4d7f84ed3f7f0411dbf787999598.jpg",
      "https://img.cofynd.com/images/original/ce49d7342de644ad500d8f5ebebca8a8ad56757c.jpg",
      "https://img.cofynd.com/images/original/d49a4ce7b214fdb1ff1a6feb545b5dfd9b9d3b8e.jpg"
    ]
  }
];

// ============================================================================
// Page 1 cards - top grid (right under the area filter buttons).
// Shown when pagination button 1 is active; each card holds name, badge, rating, area, location, price and photos.
// ============================================================================
export const allChandigarhOfficeCards = [
  ...chandigarhOfficeCards,
  ...moreChandigarhOfficeCards,
  ...finalChandigarhOfficeCards,
  ...featuredChandigarhOfficeCards,
  ...pageTwoChandigarhOfficeCards,
  ...pageTwoMoreChandigarhOfficeCards,
  ...pageTwoFinalChandigarhOfficeCards,
  ...pageTwoFeaturedChandigarhOfficeCards,
  ...pageThreeChandigarhOfficeCards,
  ...pageThreeMoreChandigarhOfficeCards,
  ...pageThreeFinalChandigarhOfficeCards,
  ...pageThreeFeaturedChandigarhOfficeCards,
  ...pageFourChandigarhOfficeCards,
  ...similarChandigarhOfficeCards,
  ...Object.values(areaExtraOfficeCards).flat()
];

/**
 * Find a Chandigarh card from its URL slug (or numeric id). Returns the card or null.
 */
export const getChandigarhOfficeCardById = (id) => findOfficeBySlug(allChandigarhOfficeCards, id, "chandigarh");
/**
 * Build the URL slug / path of a Chandigarh card (e.g. "/name-area-chandigarh").
 */
export const getChandigarhOfficeSlug = (space) => officePath(allChandigarhOfficeCards, space, "chandigarh");

// ============================================================================
// "Explore Top Coworking Locations" tiles at the bottom of the page (area name, title, photo). Clicking a tile filters by that area.
// ============================================================================
export const topChandigarhCoworkingLocations = [
  // 1. Mohali
  {
    id: "loc-mohali",
    name: "Mohali",
    title: "Coworking Space in Mohali",
    image: "https://img.cofynd.com/images/latest_images_2024/1cc06bd5d08f6b6a1d56bd58e24d1620462c1248.webp",
    ctaText: "Explore Spaces"
  },
  // 2. Zirakpur
  {
    id: "loc-zirakpur",
    name: "Zirakpur",
    title: "Coworking Space in Zirakpur",
    image: "https://img.cofynd.com/images/original/eca7b46c8512fb04a07b39e7a29f72d4a6deab95.jpg",
    ctaText: "Explore Spaces"
  },
  // 3. Madhya Marg
  {
    id: "loc-madhya-marg",
    name: "Madhya Marg",
    title: "Coworking Space in Madhya Marg",
    image: "https://img.cofynd.com/images/original/4d9055b9fbf5162cdf5251d5bfacdb835f16bd89.jpg",
    ctaText: "Explore Spaces"
  },
  // 4. Sahibzada Ajit Singh Nagar
  {
    id: "loc-sahibzada-ajit-singh-nagar",
    name: "Sahibzada Ajit Singh Nagar",
    title: "Coworking Space in Sahibzada Ajit Singh Nagar",
    image: "https://img.cofynd.com/images/original/ef7b8a2b828dc271f01c9572b4a334e13ad9fd91.jpg",
    ctaText: "Explore Spaces"
  },
  // 5. Sector 34A
  {
    id: "loc-sector-34a",
    name: "Sector 34A",
    title: "Coworking Space in Sector 34A",
    image: "https://img.cofynd.com/images/original/3ccceaa87ebc54f7caef5349627ddfc4ff474908.jpg",
    ctaText: "Explore Spaces"
  },
  // 6. Phase 8B
  {
    id: "loc-phase-8b",
    name: "Phase 8B",
    title: "Coworking Space in Phase 8B",
    image: "https://img.cofynd.com/images/original/1d508da0a4852025e4f9345bbbf168edf63de806.jpg",
    ctaText: "Explore Spaces"
  },
  // 7. Phase 7
  {
    id: "loc-phase-7",
    name: "Phase 7",
    title: "Coworking Space in Phase 7",
    image: "https://imgcdn.houssed.com/assets/Files/Projects/146419/Sample%20Apartment/6-1755841227.webp",
    ctaText: "Explore Spaces"
  },
  // 8. Industrial Area Phase 1
  {
    id: "loc-industrial-area-phase-1",
    name: "Industrial Area Phase 1",
    title: "Coworking Space in Industrial Area Phase 1",
    image: "https://img.cofynd.com/images/latest_images_2024/2745367b4f6a12aff27779e258e32b0c087e3adb.webp",
    ctaText: "Explore Spaces"
  }
];
