import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Chandigarh Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * Sourced from verified active coworking listings in Chandigarh (cofynd.com, qdesq.com).
 */

export const chandigarhNeighborhoods = [
  "Sector 17",
  "Sector 34",
  "Sector 8",
  "Industrial Area Phase 1",
  "IT Park"
];

export const chandigarhOfficeCards = [
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
  {
    id: 2,
    name: "Imagine Coworking",
    badge: null,
    rating: null,
    area: "Chandigarh",
    location: "Chandigarh, Chandigarh",
    price: "₹1,999",
    period: "/ Month",
    priceFormatted: "₹1,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/d83b638674115a9d8be9ccd60dc7b0e412ebdba3.jpg",
      "https://img.cofynd.com/images/original/47664f8d10359740e1bc698b3c51317f0b2333f2.jpg",
      "https://img.cofynd.com/images/original/053f3449d3742deaa869e5cb5a5ef3c07ded2338.jpg",
      "https://img.cofynd.com/images/original/fca46757b8aa9d408335fc5eca4da32784389f0c.jpg",
      "https://img.cofynd.com/images/original/e4c42695532f31f15b25d16ad42faaf5ba761e50.jpg",
      "https://img.cofynd.com/images/original/c13c8590f6547a6380a3f2e986786ca50e1b02dd.jpg"
    ]
  },
  {
    id: 3,
    name: "Magnet Cowork",
    badge: null,
    rating: null,
    area: "Sector 34",
    location: "Sector 34, Chandigarh",
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
  {
    id: 4,
    name: "Next57 Coworking",
    badge: null,
    rating: null,
    area: "Sector 34",
    location: "Sector 34, Chandigarh",
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
  {
    id: 5,
    name: "The Hive Coworking and Business Centre",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 2",
    location: "Industrial Area Phase 2, Chandigarh",
    price: "₹1,459",
    period: "/ Month",
    priceFormatted: "₹1,459 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/a106cfcd3771bef4f059498877d87416aa686e22.webp",
      "https://img.cofynd.com/images/latest_images_2024/a61f776934def927c5035b5d62939ffa7c1ae32a.webp",
      "https://img.cofynd.com/images/latest_images_2024/9762d59f232839a3a698fb60d61ad19a429a2e53.webp",
      "https://img.cofynd.com/images/latest_images_2024/e5aadedaa6f01ba1e21484d55847be3ce4d3c836.webp",
      "https://img.cofynd.com/images/latest_images_2024/a4506b3bd92513015078f5bd7ba650d83ecc2cdb.webp",
      "https://img.cofynd.com/images/latest_images_2024/01310a5017bb5a262b78f206b79de23cd2ba0b2b.webp"
    ]
  },
  {
    id: 6,
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
  {
    id: 7,
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
  {
    id: 8,
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
  }
];

export const moreChandigarhOfficeCards = [
  {
    id: 9,
    name: "SpaceJam",
    badge: null,
    rating: null,
    area: "Sector 34",
    location: "Sector 34, Chandigarh",
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
  {
    id: 10,
    name: "Workaholics workzone",
    badge: null,
    rating: null,
    area: "Sector 34",
    location: "Sector 34, Chandigarh",
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
  {
    id: 11,
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
  {
    id: 12,
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
  {
    id: 13,
    name: "Workcave",
    badge: null,
    rating: null,
    area: "Sector 37",
    location: "Sector 37, Chandigarh",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/adec9fc05a0a733407fbcaa72f6e2f7e9e564e71.jpg",
      "https://img.cofynd.com/images/original/5938e1904996725e4a2b875fe0229354d9353ffc.jpg",
      "https://img.cofynd.com/images/original/d8f9dcd6b8a2c51b8ce95702032fca75db87ce12.jpg",
      "https://img.cofynd.com/images/original/0bc2201d348dc2021d5fe15f2523088bfeb2e347.jpg",
      "https://img.cofynd.com/images/original/1a3a6814cefbddb877670a68697120a92f16b3b0.jpg"
    ]
  },
  {
    id: 14,
    name: "Workaholics",
    badge: null,
    rating: null,
    area: "Sector 34",
    location: "Sector 34, Chandigarh",
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
  {
    id: 15,
    name: "Eraya Co-working Space",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 2",
    location: "Industrial Area Phase 2, Chandigarh",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/9394b401f828f9b50dbee6fca3898101898ef9c7.webp",
      "https://img.cofynd.com/images/latest_images_2024/afd667679205f69f6c9ab0ca9799a132866e0d12.webp",
      "https://img.cofynd.com/images/latest_images_2024/79908eea16f50291c7facabff1009b3ba2cd0c8c.webp",
      "https://img.cofynd.com/images/latest_images_2024/55044604aed31bf6d1129b3ab2d077ad77ad2613.webp",
      "https://img.cofynd.com/images/latest_images_2024/ea9480eb56f2be9c3786a0cf723d9bac31fa0734.webp",
      "https://img.cofynd.com/images/latest_images_2024/bc71e792128fe1d50b4ae048720f5a6df72fcff7.webp"
    ]
  },
  {
    id: 16,
    name: "Coworkio",
    badge: null,
    rating: null,
    area: "Sector 17",
    location: "Sector 17, Chandigarh",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/2f0ec7b8bcc1a4a0f720ec0ab70bd06d10247a61.webp",
      "https://img.cofynd.com/images/latest_images_2024/d0d0dd0cfb08152e2ba57f6d3b5c14492567f6d3.webp",
      "https://img.cofynd.com/images/latest_images_2024/a1d69b7d155a13e4ea61244dabcf8e4b62133ff1.webp",
      "https://img.cofynd.com/images/latest_images_2024/4647a65990c235e8b1b99ca9d46ba18fcf16d987.webp",
      "https://img.cofynd.com/images/latest_images_2024/bedadb8b9d71e2f441d258d8f0fa32fea50c170e.webp"
    ]
  }
];

export const finalChandigarhOfficeCards = [
  {
    id: 17,
    name: "Next57 Coworking",
    badge: null,
    rating: null,
    area: "Sector 17",
    location: "Sector 17, Chandigarh",
    price: "₹8,000",
    period: "/ Month",
    priceFormatted: "₹8,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/6c4db8736fa91af826af2fe4d1f105ca_IQOwsE1j7.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/1da9eef5c1c1a8a54a834878c0607078_-GE5d-fFx.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/b016f86962828effd836cdbea5a557e4_3MqHamwp9.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/a05a4a19cb140067c7449f6a65b45941_mcGZ67_iE.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/a067437ecf02c234defbb795953dbcf7_pqFzVTRIh.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/49fc2c71c262f58eec57b8b8e5248591__va4xykzs.jpeg"
    ]
  },
  {
    id: 18,
    name: "IDEA COWORKING",
    badge: null,
    rating: null,
    area: "Sector 17",
    location: "Sector 17, Chandigarh",
    price: "₹7,000",
    period: "/ Month",
    priceFormatted: "₹7,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1641876602/cavnpo3wjykl9cblqsuq.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1641876456/anxltimojkpmcriwhkys.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1641876522/gs5ywsuymyyntu1yqbas.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1641876484/twhayyalrulkdp7xlhqi.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1641876561/n17hlcadmaoc6azqt0mo.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1641876580/xey15tn7jrj211dpokcx.webp"
    ]
  },
  {
    id: 19,
    name: "Regus",
    badge: null,
    rating: null,
    area: "Sector 17",
    location: "Sector 17, Chandigarh",
    price: "₹9,700",
    period: "/ Month",
    priceFormatted: "₹9,700 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1612174727/o2jgfnnhvuqbqx90kheq.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1612174833/paed1p1efqs2jydpkxnw.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1612174832/ktufrulfgmwiptitunck.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1612174902/ifat9dndxvqvkrhaxztc.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1612174727/o2jgfnnhvuqbqx90kheq.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1612174727/te1bdsglpvtiqpdm6sfk.jpg"
    ]
  },
  {
    id: 20,
    name: "Fullcircle HD",
    badge: null,
    rating: null,
    area: "Sector 8",
    location: "Sector 8, Chandigarh",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1530957335/ukwpzmk6zfkbsvrp37cz.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1530957356/fabmpqghfq40htud0rnn.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1530957362/trfke4cfzy6klczaeeh1.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1530957360/bizhwak0adfkoeqkhgdl.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1530957363/kci32rbr3fyojkwrbdpu.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1530957362/rz1rtuzlbznsoclrcajz.webp"
    ]
  },
  {
    id: 21,
    name: "Triam Centre",
    badge: null,
    rating: null,
    area: "Sector 8",
    location: "Sector 8, Chandigarh",
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
  {
    id: 22,
    name: "Zen Coworking",
    badge: null,
    rating: null,
    area: "Sector 37",
    location: "Sector 37, Chandigarh",
    price: "₹8,500",
    period: "/ Month",
    priceFormatted: "₹8,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1721114746/nt7kuoypjqygkehbptgw.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1721114724/qxxyk9xi8nvwt0fixwxq.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1721114704/l0drpupj5whf00kpljlu.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1721114704/acqp2w4a6yz7kvmvccrs.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1721114778/xdvrgwpuqyypgp3rwwhn.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1721114778/romrosmcodq9rkwn8vkg.webp"
    ]
  },
  {
    id: 23,
    name: "MySoho",
    badge: null,
    rating: null,
    area: "Sector 26",
    location: "Sector 26, Chandigarh",
    price: "₹10,000",
    period: "/ Month",
    priceFormatted: "₹10,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1711530747/nuladm6oew9f64myw8l9.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711530708/cexy5is9ytsauwk6rql5.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711530708/thiktk6glspaz6zijjhq.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711530708/lpqgn4ordfgy5pvxmkgw.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711530708/bctu4yfa0hlwn14s1xzi.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711530761/qgftvno3iy8uohm64lvu.webp"
    ]
  },
  {
    id: 24,
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
  }
];

export const featuredChandigarhOfficeCards = [
  {
    id: 25,
    name: "Next57",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 2",
    location: "Industrial Area Phase 2, Chandigarh",
    price: "₹6,600",
    period: "/ Month",
    priceFormatted: "₹6,600 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1663931099/a6cqvszytj2lfp4inyx2.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1581059701/shv1rpleufakrdkijzhp.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1663931040/al4kkazr1wwjcf90nbjf.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1663931056/hhimfgqrm853ayvflzzo.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1663931071/ub7yxf27p0vqikuc0tdt.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1663931071/wsjsp3gauyambhoxjg7w.webp"
    ]
  },
  {
    id: 26,
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
  {
    id: 27,
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
  },
  {
    id: 28,
    name: "Work yard",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 2",
    location: "Industrial Area Phase 2, Chandigarh",
    price: "₹4,000",
    period: "/ Month",
    priceFormatted: "₹4,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1595505670/imvvktdlst7mb2sncick.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595505670/uuwmvxwp9r7jgda7movi.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595505670/imvvktdlst7mb2sncick.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image/image/upload/v1595576371/xaj5uiu0uassrdlxputu.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image/image/upload/v1595576370/awn3adwafowme8c0r8wh.webp",
      "https://qdesq.imagekit.io/img/tr:h-181,w-325/image/upload/v1595505670/uuwmvxwp9r7jgda7movi.webp"
    ]
  },
  {
    id: 29,
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
  {
    id: 30,
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
  {
    id: 31,
    name: "Cozy Co Office",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 2",
    location: "Industrial Area Phase 2, Chandigarh",
    price: "₹4,400",
    period: "/ Month",
    priceFormatted: "₹4,400 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/e9324197bc2ba20b917cc868ab450d36_kQB1VOLN0D.JPG",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1512384747/afjqz0rp6cal8alcmxew.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1512384747/cpoblbz8nbmcsjsekuve.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1512384748/n36otlkjhcafdr5qwer4.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1512384747/trd5lbotdtdr06ufxm7f.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1512384746/wthjankv0bhamfd2pfuv.webp"
    ]
  },
  {
    id: 32,
    name: "Meshink",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 2",
    location: "Industrial Area Phase 2, Chandigarh",
    price: "₹8,000",
    period: "/ Month",
    priceFormatted: "₹8,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/6cd3a88ec5aa44866152543e6f16d5d6_IUZbOE4Of.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/3033a0b9a2db0019b1b8d9d10ac02f8d_FDePh9hqeT.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/2abff85b465d04afc799bdfb596ec3f2_Bp2uXJxiLT.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/f5168e4b461bdb1059bcdec6b79df5db_O0qNuzTzI.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/ab927f6f7797fb5914f97ac98c966745_7DxATTKE6.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/b6e05ef19a24e8898618d23a39c53df8_ekOI28LnS.JPG"
    ]
  }
];

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

export const paginationData = {
  totalPages: 2,
  initialPage: 1
};

export const pageTwoChandigarhOfficeCards = [
  {
    id: 33,
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
  {
    id: 34,
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
  }
];

export const pageTwoMoreChandigarhOfficeCards = [
  {
    id: 35,
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
  {
    id: 36,
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
  }
];

export const pageTwoFinalChandigarhOfficeCards = [
  {
    id: 37,
    name: "Arium Workspaces",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 2",
    location: "Industrial Area Phase 2, Chandigarh",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1708518075/wftolxv2yhaiml9mn8yi.webp",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/403357ceaf4e562cc9b9b4b938fc125c_Ok0pQhNxxo.jpeg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1708517711/homplglhjgni4xgy9mth.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1708517769/fqbqstfswagvgxdfpq0p.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1708517767/f8nbsuo8yrhez0zhrzov.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1708517769/ufhpka1nwxmvjajsjrm8.webp"
    ]
  },
  {
    id: 38,
    name: "Launchyard Cowork",
    badge: null,
    rating: null,
    area: "Chandigarh",
    location: "Chandigarh, Chandigarh",
    price: "₹6,600",
    period: "/ Month",
    priceFormatted: "₹6,600 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1595845589/pq1sn4opmj4ace8zltwt.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595845627/akbjwoqiqo1iifxpbfuh.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595845589/pq1sn4opmj4ace8zltwt.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595845589/taoq8wugokerz6ndrdar.webp",
      "https://qdesq.imagekit.io/img/tr:h-181,w-325/image/upload/v1595845627/akbjwoqiqo1iifxpbfuh.webp"
    ]
  }
];

export const pageTwoFeaturedChandigarhOfficeCards = [];

export const pageThreeChandigarhOfficeCards = [];

export const pageThreeMoreChandigarhOfficeCards = [];

export const pageThreeFinalChandigarhOfficeCards = [];

export const pageThreeFeaturedChandigarhOfficeCards = [];

export const pageFourChandigarhOfficeCards = [];

// Area-specific extra cards (only real same-area listings; shown only when that area filter is active).
export const areaExtraOfficeCards = {
  "Sector 17": [],
  "Sector 34": [],
  "Sector 8": [],
  "Industrial Area Phase 1": [],
  "IT Park": []
};

export const similarChandigarhOfficeCards = [
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
  {
    id: 2,
    name: "Imagine Coworking",
    badge: null,
    rating: null,
    area: "Chandigarh",
    location: "Chandigarh, Chandigarh",
    price: "₹1,999",
    period: "/ Month",
    priceFormatted: "₹1,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/d83b638674115a9d8be9ccd60dc7b0e412ebdba3.jpg",
      "https://img.cofynd.com/images/original/47664f8d10359740e1bc698b3c51317f0b2333f2.jpg",
      "https://img.cofynd.com/images/original/053f3449d3742deaa869e5cb5a5ef3c07ded2338.jpg",
      "https://img.cofynd.com/images/original/fca46757b8aa9d408335fc5eca4da32784389f0c.jpg",
      "https://img.cofynd.com/images/original/e4c42695532f31f15b25d16ad42faaf5ba761e50.jpg",
      "https://img.cofynd.com/images/original/c13c8590f6547a6380a3f2e986786ca50e1b02dd.jpg"
    ]
  },
  {
    id: 3,
    name: "Magnet Cowork",
    badge: null,
    rating: null,
    area: "Sector 34",
    location: "Sector 34, Chandigarh",
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
  {
    id: 4,
    name: "Next57 Coworking",
    badge: null,
    rating: null,
    area: "Sector 34",
    location: "Sector 34, Chandigarh",
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
  {
    id: 5,
    name: "The Hive Coworking and Business Centre",
    badge: null,
    rating: null,
    area: "Industrial Area Phase 2",
    location: "Industrial Area Phase 2, Chandigarh",
    price: "₹1,459",
    period: "/ Month",
    priceFormatted: "₹1,459 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/a106cfcd3771bef4f059498877d87416aa686e22.webp",
      "https://img.cofynd.com/images/latest_images_2024/a61f776934def927c5035b5d62939ffa7c1ae32a.webp",
      "https://img.cofynd.com/images/latest_images_2024/9762d59f232839a3a698fb60d61ad19a429a2e53.webp",
      "https://img.cofynd.com/images/latest_images_2024/e5aadedaa6f01ba1e21484d55847be3ce4d3c836.webp",
      "https://img.cofynd.com/images/latest_images_2024/a4506b3bd92513015078f5bd7ba650d83ecc2cdb.webp",
      "https://img.cofynd.com/images/latest_images_2024/01310a5017bb5a262b78f206b79de23cd2ba0b2b.webp"
    ]
  },
  {
    id: 6,
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
  {
    id: 7,
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
  {
    id: 8,
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
  {
    id: 9,
    name: "SpaceJam",
    badge: null,
    rating: null,
    area: "Sector 34",
    location: "Sector 34, Chandigarh",
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

export const getChandigarhOfficeCardById = (id) => findOfficeBySlug(allChandigarhOfficeCards, id, "chandigarh");
export const getChandigarhOfficeSlug = (space) => officePath(allChandigarhOfficeCards, space, "chandigarh");

export const topChandigarhCoworkingLocations = [
  {
    id: "loc-sector-17",
    name: "Sector 17",
    title: "Coworking Space in Sector 17",
    image: "https://img.cofynd.com/images/latest_images_2024/2f0ec7b8bcc1a4a0f720ec0ab70bd06d10247a61.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-sector-34",
    name: "Sector 34",
    title: "Coworking Space in Sector 34",
    image: "https://img.cofynd.com/images/original/3ccceaa87ebc54f7caef5349627ddfc4ff474908.jpg",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-sector-8",
    name: "Sector 8",
    title: "Coworking Space in Sector 8",
    image: "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1530957335/ukwpzmk6zfkbsvrp37cz.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-industrial-area-phase-1",
    name: "Industrial Area Phase 1",
    title: "Coworking Space in Industrial Area Phase 1",
    image: "https://img.cofynd.com/images/latest_images_2024/2745367b4f6a12aff27779e258e32b0c087e3adb.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-it-park",
    name: "IT Park",
    title: "Coworking Space in IT Park",
    image: "https://img.cofynd.com/images/latest_images_2024/2745367b4f6a12aff27779e258e32b0c087e3adb.webp",
    ctaText: "Explore Spaces"
  }
];
