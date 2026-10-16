import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Kochi Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * Sourced from verified active coworking listings in Kochi (cofynd.com, qdesq.com).
 */

export const kochiNeighborhoods = [
  "Kakkanad",
  "MG Road",
  "Kaloor",
  "Edappally",
  "Panampilly Nagar",
  "Infopark",
  "Palarivattom",
  "Ernakulam",
  "Marine Drive",
  "Padamughal",
  "Thrikkakara",
  "Vytilla",
  "Kadavanthara"
];

export const kochiOfficeCards = [
  {
    id: 1,
    name: "Dotspace",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/18199e5eb6248fd3977320cfdb671bcc7c8f22d5.jpg",
      "https://img.cofynd.com/images/original/df9f6d76e97b99f49dc65004fcac84417763edd3.jpg",
      "https://img.cofynd.com/images/original/8de944b05cc1cfcf0cbf2e41ed0ada708435a8c7.jpg",
      "https://img.cofynd.com/images/original/4a842fbb1063e8011cf3b24f2ee0717a1351b97a.jpg",
      "https://img.cofynd.com/images/original/c4ffaaa0302c48d7d7b53a40b1baa28026013055.jpg"
    ]
  },
  {
    id: 2,
    name: "Incuspaze - Oberon Mall",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/23e5d82f5ab87cfc88ad690d1c3644f794ee0402.webp",
      "https://img.cofynd.com/images/latest_images_2024/c5ac3f736e1a1558dfd1692d83780c81fcf952a8.webp",
      "https://img.cofynd.com/images/latest_images_2024/03e2bf409eca8aff2768049fbeefa56bce81d00a.webp",
      "https://img.cofynd.com/images/latest_images_2024/1bff136fa041c1266d19623da660a71645c4a3c6.webp",
      "https://img.cofynd.com/images/latest_images_2024/7efdc9c432358e00de34c4188f5e3ab2bae7b48f.webp",
      "https://img.cofynd.com/images/latest_images_2024/07728ca95c96cf30d65a945947251e064745045e.webp"
    ]
  },
  {
    id: 3,
    name: "Wagmi Workspace",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/34bfc7ba6f2fbeddf9bc8d6188cbf4370beef6d6.webp",
      "https://img.cofynd.com/images/latest_images_2024/f065e96f03e5a99831bed925157c0ae9607da530.webp",
      "https://img.cofynd.com/images/latest_images_2024/dde0012361a86284038c64cad3721c1d1c9d672a.webp",
      "https://img.cofynd.com/images/latest_images_2024/b45337494d674fe46b32a2ae5a46971a9c1b7528.webp",
      "https://img.cofynd.com/images/latest_images_2024/a327c8dd01f9d91c0904d1d8a0f76b20e76bfaf6.webp"
    ]
  },
  {
    id: 4,
    name: "IndiQube Square",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹799",
    period: "/ Month",
    priceFormatted: "₹799 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/9a8352da1798933b8c3895eef8461ca9a1905128.webp",
      "https://img.cofynd.com/images/latest_images_2024/8302b5ab336de90a8efdb6e2eb215efec59a5c7d.webp",
      "https://img.cofynd.com/images/latest_images_2024/6636c84dfdfd627f1cf2a3bec0b94b2d131a16c4.webp",
      "https://img.cofynd.com/images/latest_images_2024/f9a775322ec06df6d74cf8315e67f811c6f6a0d0.webp"
    ]
  },
  {
    id: 5,
    name: "MARQ",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/529dea2db69813e412635a80052217398ca8873a.webp",
      "https://img.cofynd.com/images/latest_images_2024/0374dc2852d23de25635ad0edd6f042a0bc400b7.webp",
      "https://img.cofynd.com/images/latest_images_2024/d1548e844173e098099777cf634b32fc41b3d08a.webp",
      "https://img.cofynd.com/images/latest_images_2024/f6fb72bf7418ea5a05404297ad6fc38b3a6fcac5.webp",
      "https://img.cofynd.com/images/latest_images_2024/1dfefede6db360e6c71870333c3757cfe67be511.webp"
    ]
  },
  {
    id: 6,
    name: "Incuspaze",
    badge: null,
    rating: null,
    area: "Ernakulam",
    location: "Ernakulam, Kochi",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/21d51e6ccc3da4e7eff570f5f37901fb7b771320.jpg",
      "https://img.cofynd.com/images/original/7debb615871fc83180f237b3c4eb49d16abb24f4.jpg",
      "https://img.cofynd.com/images/original/3763e787f711d4f3571925e8d8e5bf1f2d39b90e.jpg",
      "https://img.cofynd.com/images/original/82ac69f6cbf3090ea5212886e5251f15eef6c3e7.jpg",
      "https://img.cofynd.com/images/original/8da6bc993fe7c870ed991772dbbbecdc65c9cbec.jpg"
    ]
  },
  {
    id: 7,
    name: "Cowired co-working Space",
    badge: null,
    rating: null,
    area: "Palarivattom",
    location: "Palarivattom, Kochi",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/12f5af69433be99f1af308b082205adb372d33b9.webp",
      "https://img.cofynd.com/images/latest_images_2024/5364701534f2dffd5427877ac57b04c18243a148.webp",
      "https://img.cofynd.com/images/latest_images_2024/1505b09194b3523c4e601d074bc6ab7aefe28613.webp",
      "https://img.cofynd.com/images/latest_images_2024/0cbca27ed5ceb65594c18433f6879b6da4e5bbdc.webp",
      "https://img.cofynd.com/images/latest_images_2024/a24d503b95319ce1bd9a744383c791f1fe588f30.webp"
    ]
  },
  {
    id: 8,
    name: "Spacelance",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/95427c76583e17c1dead627bdba2d7071739d5b2.jpg",
      "https://img.cofynd.com/images/original/5f99633f793bb8bda7920e103b68c4a814ca3369.jpg",
      "https://img.cofynd.com/images/original/b261d90c3a0c1e1445a44836ef796606e9b9aa1c.jpg",
      "https://img.cofynd.com/images/original/476b9528240b95e4440600e113a601b2adac3e51.jpg",
      "https://img.cofynd.com/images/original/ad0e3a08fe30769a57d1ea4339da1db670eb2db2.jpg"
    ]
  }
];

export const moreKochiOfficeCards = [
  {
    id: 9,
    name: "Calm Workspaces",
    badge: null,
    rating: null,
    area: "Palarivattom",
    location: "Palarivattom, Kochi",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/87a8255ec000e095d9ec9c8cfdd17757df711f8b.webp",
      "https://img.cofynd.com/images/latest_images_2024/64355c35946ee009311562b9908afaa1343e43b5.webp",
      "https://img.cofynd.com/images/latest_images_2024/afdc378a1289f5ca88be0b4012a141d3c4ead86c.webp",
      "https://img.cofynd.com/images/latest_images_2024/2995d1c79f37a739a0bd07473dd1fcb48f8a2529.webp",
      "https://img.cofynd.com/images/latest_images_2024/f3976b66693ba627a6d43017b906db7d70b1c567.webp",
      "https://img.cofynd.com/images/latest_images_2024/448d66d124a153f8675857c112d23d9df77be7ba.webp"
    ]
  },
  {
    id: 10,
    name: "Incuspaze Coworking - Infra Futura",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/bd9e63686cb3ad4d14fbe7a327140dbba38fc116.webp",
      "https://img.cofynd.com/images/latest_images_2024/17d73143deab2c06fe2078bbe45697dc0a8e5a9c.webp",
      "https://img.cofynd.com/images/latest_images_2024/a4f186ce2cae7a779d762853f370ddd3ca596824.webp",
      "https://img.cofynd.com/images/latest_images_2024/220e1353ac72c6bfc1b4234bf1efddee71561cca.webp",
      "https://img.cofynd.com/images/latest_images_2024/40587df8524a3c7e59f65b88940f66f2227cc1bf.webp",
      "https://img.cofynd.com/images/latest_images_2024/6d65809e1e04af4d542e9455a29415ba30c889ed.webp"
    ]
  },
  {
    id: 11,
    name: "IndiQube Paradise",
    badge: null,
    rating: null,
    area: "Palarivattom",
    location: "Palarivattom, Kochi",
    price: "₹799",
    period: "/ Month",
    priceFormatted: "₹799 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/82d7b763784630f5e92cac650808fa4b585c0eaf.webp",
      "https://img.cofynd.com/images/latest_images_2024/2cd18951c70b760c8f7c3c454a754792a672f8fd.webp",
      "https://img.cofynd.com/images/latest_images_2024/adc000bf853c3f558da87e9bec831da07ba4eff7.webp",
      "https://img.cofynd.com/images/latest_images_2024/542d739c0fc959135afe4bd98ce497bc2f33ca0b.webp",
      "https://img.cofynd.com/images/latest_images_2024/29744dda059f221349a92a2eda87d9ccbababbeb.webp",
      "https://img.cofynd.com/images/latest_images_2024/ff2468f5584d2b0080f98798b84cdb7588ddd71f.webp"
    ]
  },
  {
    id: 12,
    name: "CORRAZONE",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/abb155c6ac6248de2986fd61c14a3a7deef002f2.jpg",
      "https://img.cofynd.com/images/original/8c19c41ff67a12674d5c75e199f3f8765a20d359.jpg",
      "https://img.cofynd.com/images/original/1e275216ec88e191d4a30eda3af0580969a2e154.jpg",
      "https://img.cofynd.com/images/original/32bb683cb2f9b8575f859ba69cf68469786b4b6e.jpg",
      "https://img.cofynd.com/images/original/4a7cbb5344c96b6ad2d2968ae9cc15826d22a4d9.jpg"
    ]
  },
  {
    id: 13,
    name: "Kssia Technocity",
    badge: null,
    rating: null,
    area: "Kalama Ery",
    location: "Kalama Ery, Kochi",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/4a5c91c5dcbcad48b349d7db05afe5a4fddc4411.jpg",
      "https://img.cofynd.com/images/original/ec03e008a3ab9c6a09bb6624f5b256ee0e918cef.jpg",
      "https://img.cofynd.com/images/original/0ec0349f664c4f99db153872f997678086d975ed.jpg",
      "https://img.cofynd.com/images/original/932b28022f819790459cac4775e1b5bfd5842be1.jpg",
      "https://img.cofynd.com/images/original/40de2c744370428105988015e8c834e1d96da927.jpg"
    ]
  },
  {
    id: 14,
    name: "Innerspace",
    badge: null,
    rating: null,
    area: "Ernakulam",
    location: "Ernakulam, Kochi",
    price: "₹1,669",
    period: "/ Month",
    priceFormatted: "₹1,669 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/5cc9a39fd3806a7a36c48cd9af70aca8777cd1c1.jpg",
      "https://img.cofynd.com/images/original/2537d42a1cead2160356b9af61194e813a777678.jpg",
      "https://img.cofynd.com/images/original/1d54f9050044e63af30ca8b7a14d87ef496bd030.jpg",
      "https://img.cofynd.com/images/original/8cc960b899cc0ffe5736193743f46bf0fdbc0347.jpg",
      "https://img.cofynd.com/images/original/a702c902145938cb6695c9c3e368bd81bbf8648a.jpg",
      "https://img.cofynd.com/images/original/a06a8bc38af516f164efe1b0cc91f0a90fa2d053.jpg"
    ]
  },
  {
    id: 15,
    name: "Bodhi Infotech",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹3,500",
    period: "/ Month",
    priceFormatted: "₹3,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/959a647d343a3a8348c0995f2a11d92e4898de59.jpg",
      "https://img.cofynd.com/images/original/ffdf372a9754d6c8313cc3f07409a338260bea94.jpg",
      "https://img.cofynd.com/images/original/db5648d2256f0f20747c11c14680689c876c56cc.jpg",
      "https://img.cofynd.com/images/original/ac46e09ca850fcf2dcc4be61b3677c0a2c13ce05.jpg",
      "https://img.cofynd.com/images/original/f5bfea9153b7a2405c19f37348ecc03401d79031.jpg"
    ]
  },
  {
    id: 16,
    name: "Collective Coworks (CoCo)",
    badge: null,
    rating: null,
    area: "Infopark",
    location: "Infopark, Kochi",
    price: "₹8,499",
    period: "/ Month",
    priceFormatted: "₹8,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/0e029648dd46e478e4384a47e93ae354fa67318e.webp",
      "https://img.cofynd.com/images/latest_images_2024/d9827a27b9758c7855a425a7c6883b9d095e2a68.webp",
      "https://img.cofynd.com/images/latest_images_2024/dc942669d8a60184d8be92ab273c0cdc3b7fa07a.webp",
      "https://img.cofynd.com/images/latest_images_2024/7a6afc3203183e86f679104451e4b77db494b444.webp",
      "https://img.cofynd.com/images/latest_images_2024/49bb73d7552a3d1b3865c6ca809c2e2ba19b252d.webp",
      "https://img.cofynd.com/images/latest_images_2024/b7958f638d142ce7fc927c95b98bf50ed9bbeec8.webp"
    ]
  }
];

export const finalKochiOfficeCards = [
  {
    id: 17,
    name: "Anaarworx",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹7,499",
    period: "/ Month",
    priceFormatted: "₹7,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/fceb800b25ca5308ff2bac337508c7e14ed25d4a.webp",
      "https://img.cofynd.com/images/latest_images_2024/3907e3369e92e5678d877fc05d0b145d72a42513.webp",
      "https://img.cofynd.com/images/latest_images_2024/4389b94e0a34b1afc420c2b95018dec9b6d57369.webp",
      "https://img.cofynd.com/images/latest_images_2024/62f3df242744d32a40d678baa7c80864dd70e8dd.webp",
      "https://img.cofynd.com/images/latest_images_2024/0d74837d3e6ce895c47a08d61114c2f001c76a77.webp",
      "https://img.cofynd.com/images/latest_images_2024/13bc4fcebc29f357788ef98a931fcb84a04c3715.webp"
    ]
  },
  {
    id: 18,
    name: "Worksphere",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹7,499",
    period: "/ Month",
    priceFormatted: "₹7,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/4ca93862f883cf179f412ee9fc48105e56400a92.webp",
      "https://img.cofynd.com/images/latest_images_2024/2e4cb773c8be87d98a3992fc248fc3ab02c20458.webp",
      "https://img.cofynd.com/images/latest_images_2024/b3fca05893cd99ecade0e5c5de4c12ed9d967616.webp",
      "https://img.cofynd.com/images/latest_images_2024/2d673acddca729285e12608497f0f676e4531a5e.webp"
    ]
  },
  {
    id: 19,
    name: "Factorm",
    badge: null,
    rating: null,
    area: "Vytilla",
    location: "Vytilla, Kochi",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/42092e53a16122599bb8dcc222681a1e7ab0e2b0.jpg",
      "https://img.cofynd.com/images/original/70cdbf3ca3d5203a56632c00527b257cfe4d189b.jpg",
      "https://img.cofynd.com/images/original/630d7f73b3d0562937773f12d4ce24f6ab50c927.jpg",
      "https://img.cofynd.com/images/original/9fae8f03bf30afece4a67dfd5b8ee81e36fbce42.jpg",
      "https://img.cofynd.com/images/original/226d239686cf3de02d227e01d7ac003b5a4953b0.jpg"
    ]
  },
  {
    id: 20,
    name: "Workzo",
    badge: null,
    rating: null,
    area: "Tripunithura",
    location: "Tripunithura, Kochi",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/804990df3fccb81593d9c83d8447656a65f10558.webp",
      "https://img.cofynd.com/images/latest_images_2024/debd18cca715c42716e3bf3804e1c043becb981b.webp",
      "https://img.cofynd.com/images/latest_images_2024/70058612d15985f88688d9ca87241e476f26fa27.webp",
      "https://img.cofynd.com/images/latest_images_2024/1209644adcb38eb36b7558a1c70cd1be1de6ca9d.webp",
      "https://img.cofynd.com/images/latest_images_2024/d797906671d40711b2b773599bbe0ec692df7e1c.webp",
      "https://img.cofynd.com/images/latest_images_2024/6d17ff24dcb02fa674dfcbee5d88de0121f6d582.webp"
    ]
  },
  {
    id: 21,
    name: "Arya Bhangy",
    badge: null,
    rating: null,
    area: "Kalama Ery",
    location: "Kalama Ery, Kochi",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/4a83f349f7d41d0b06a78e9ef60fdfdb1ce725dc.webp",
      "https://img.cofynd.com/images/latest_images_2024/2854b797b4e35abf6f0f5138f8bb78781cdddbe1.webp",
      "https://img.cofynd.com/images/latest_images_2024/1646ea950bde282d166aed328678ffd6c12fb7ad.webp",
      "https://img.cofynd.com/images/latest_images_2024/9d73778c7cd4f73776bcc74452e170d5f8de7d48.webp",
      "https://img.cofynd.com/images/latest_images_2024/f8f2f2501fdced1ac684a49822ec3cb2229baea9.webp",
      "https://img.cofynd.com/images/latest_images_2024/e207de415683a2dbe10ece933c895dabbaaf1fde.webp"
    ]
  },
  {
    id: 22,
    name: "Centre A",
    badge: null,
    rating: null,
    area: "MG Road",
    location: "MG Road, Kochi",
    price: "₹3,000",
    period: "/ Month",
    priceFormatted: "₹3,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/bf7906d678f72d5925458bb8b3bdbcffc602009f.webp",
      "https://img.cofynd.com/images/latest_images_2024/71c55f7992d6fb340e74c33e993d8fde44d8ac06.webp",
      "https://img.cofynd.com/images/latest_images_2024/91dc5180eda495d5abf458124e540b4e24d2763a.webp",
      "https://img.cofynd.com/images/latest_images_2024/720a03d5f5e68216d68d60ba3dd2d08c0c706ecc.webp",
      "https://img.cofynd.com/images/latest_images_2024/34b13ba1189b860b6c3c35d0ec4d31fd397b1ad0.webp",
      "https://img.cofynd.com/images/latest_images_2024/e6848fc5e07bea2cf38a34be440fdcdb00c9df82.webp"
    ]
  },
  {
    id: 23,
    name: "Fortune Cowork",
    badge: null,
    rating: null,
    area: "Ernakulam",
    location: "Ernakulam, Kochi",
    price: "₹4,995",
    period: "/ Month",
    priceFormatted: "₹4,995 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/df0f8d605dd5b91c7b4954608c73bb6f9b1a982d.jpg",
      "https://img.cofynd.com/images/original/dc4c0d3ab852c9d4f47e57d79f17ef35b50e2f80.jpg",
      "https://img.cofynd.com/images/original/a8322e417b908d0199a044c5b9f71e33ad856561.jpg",
      "https://img.cofynd.com/images/original/84d1b9d8dfdacdb168ea2dbc0794827a13c245cd.jpg",
      "https://img.cofynd.com/images/original/ad411a0cc36110e775eaf15d9a8c7a6735e1e38b.jpg"
    ]
  },
  {
    id: 24,
    name: "Awfis",
    badge: null,
    rating: null,
    area: "MG Road",
    location: "MG Road, Kochi",
    price: "₹849",
    period: "/ Month",
    priceFormatted: "₹849 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/372f0f69f8c4bafdc580359efe9405c1e96ed50a.jpg",
      "https://img.cofynd.com/images/original/9aefaa9f54dc58317bc90102afe0d739d14aa78b.jpg",
      "https://img.cofynd.com/images/original/e83df585fcf782cb42af86bff076c23ea9d0cb79.jpg",
      "https://img.cofynd.com/images/original/154b5e1efc8137d3e7d2f9e0cd7a29bf9a74005d.jpg",
      "https://img.cofynd.com/images/original/3453d10e31ae17af12e7af3b3cc56a1e1be89038.jpg",
      "https://img.cofynd.com/images/original/17fe312a12d1a90572af8b33316e5ed7e9fc0549.jpg"
    ]
  }
];

export const featuredKochiOfficeCards = [
  {
    id: 25,
    name: "Keys Select Hotel",
    badge: null,
    rating: null,
    area: "Ernakulam",
    location: "Ernakulam, Kochi",
    price: "₹17,500",
    period: "/ Month",
    priceFormatted: "₹17,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/f050ad206159d6ce6348a875c0b0d7fc1aa8fc14.jpg",
      "https://img.cofynd.com/images/original/f19bd89fed0818b06733414e535f9f633a5e0df9.jpg",
      "https://img.cofynd.com/images/original/fddb7e2db769db776e5e73dd48a44433eef5f60b.jpg",
      "https://img.cofynd.com/images/original/cdc3cbeae86bb8315ed444740c1b2d5f8d4e4c03.jpg",
      "https://img.cofynd.com/images/original/0a06819ca866093a6988377eddc7aae62d70f19d.jpg",
      "https://img.cofynd.com/images/original/31c247bd09ffc315ecd7b0bb467f400a0bc49c6f.jpg"
    ]
  },
  {
    id: 26,
    name: "GreenNest Business Centre",
    badge: null,
    rating: null,
    area: "Ernakulam",
    location: "Ernakulam, Kochi",
    price: "₹1,329",
    period: "/ Month",
    priceFormatted: "₹1,329 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/9242f0f8708424534d1efe3c55342057c92db73b.jpg",
      "https://img.cofynd.com/images/original/9511237ca6e1bd1ede991ed1dde346de21da68b5.jpg",
      "https://img.cofynd.com/images/original/2ddfb4ed6d03f8eaec1781adc9a42cd8761116ea.jpg",
      "https://img.cofynd.com/images/original/087a5a73e2785fa5f2df13397fafce76663743d1.jpg",
      "https://img.cofynd.com/images/original/f2f3b9236c43e4583a1383e0d850d1fc60a79cc9.jpg"
    ]
  },
  {
    id: 27,
    name: "Incuspaze",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹8,500",
    period: "/ Month",
    priceFormatted: "₹8,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1606886426/xjztcfwq7zoysnvvjieu.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1606886372/ct3dlpacubgqbh7ru7q5.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1606886372/jt8q3qnry22xjlcvmsii.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680080630/jfkjiscwxzg0zqp91dxh.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680080630/rgffzn5f9hgdhmfmtn5q.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1606886404/uhdijdaog6cueialvxx3.webp"
    ]
  },
  {
    id: 28,
    name: "Innerspace Coworking",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1640690240/yzpskol3fd9lmzdvoy8z.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1640690237/lpjzk43ftoejvompn4zp.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1640690239/lpraxv7eepahto1rqj8x.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1640690240/j1wee0fghr22r4u6chyp.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1640690240/ol8gwccrlrdxfrjbno1c.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1640690240/yzpskol3fd9lmzdvoy8z.jpg"
    ]
  },
  {
    id: 29,
    name: "Monlash Business Centre",
    badge: null,
    rating: null,
    area: "Kalama Ery",
    location: "Kalama Ery, Kochi",
    price: "₹5,500",
    period: "/ Month",
    priceFormatted: "₹5,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1563190630/oax6smszl6hfqcckzp72.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1563190915/xy1zijeiw9fs9j0nh7qy.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1563190905/ic8lm4ujg4iev8n8mahu.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1563190905/kzgxx8dl0pffbdf2ugvf.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1563190904/q0esaivw8xmuuz6pevjx.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1563190739/velmptkvdmcgw1crjc91.webp"
    ]
  },
  {
    id: 30,
    name: "Creative Coworking Cube",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹4,000",
    period: "/ Month",
    priceFormatted: "₹4,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1483692577/tj2fziqy9lx3zfzoxq61.webp"
    ]
  },
  {
    id: 31,
    name: "Spacelance",
    badge: null,
    rating: null,
    area: "Thrikkakara",
    location: "Thrikkakara, Kochi",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1604401123/nmaumt83revnfgkeskt6.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1604401113/wz9amuxhg64jhjpp0yqa.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1604401117/x8k3ape4dqpkkwckhadi.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1604401120/idgxe0phdw9wypevw7bd.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1604401123/nmaumt83revnfgkeskt6.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1604401130/ajtblg2idm70ag7k2x2o.jpg"
    ]
  },
  {
    id: 32,
    name: "InQ Innovation",
    badge: null,
    rating: null,
    area: "Palarivattom",
    location: "Palarivattom, Kochi",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1581662088/qtsry27ja5jfacyjnuah.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1581662132/tspak38rymfrtbd0z2ug.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1581662167/dyty8ldvaoadtmrnt2bk.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1581662167/pdo9cy2nfdifjkjtd9tm.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1581662088/qtsry27ja5jfacyjnuah.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1581662088/uh1dkda33uyw6vxqkzc0.webp"
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
export const kochiAreas = kochiNeighborhoods;
export const kochiSpaces = kochiOfficeCards;
export const areas = kochiNeighborhoods;
export const spaces = kochiOfficeCards;

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

export const pageTwoKochiOfficeCards = [
  {
    id: 33,
    name: "Mikro Grafeio Services Private Limited",
    badge: null,
    rating: null,
    area: "Vallathol Padi",
    location: "Vallathol Padi, Kochi",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1711090539/lvmqvm7lhcwjtguq4lpy.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711090726/lpqzraqg9a9kenn0q8yy.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711090726/s4qywep6fav9ana3uelr.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711090693/hmd6bgli44brwdgdedjh.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711090669/ehla24urdec46r95shpf.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711090669/psy0jfn5nussbujeqssp.webp"
    ]
  },
  {
    id: 34,
    name: "Incuspaze",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹8,000",
    period: "/ Month",
    priceFormatted: "₹8,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/acb8a1b6a6baa75ce68a431854f6c431_mzcEXSKj9.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/8a30e71bc19da44e73b9f19b8c035d53_TjuSUAJUM.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/a41d4044cab73206440ba2fc9c928100_5A0eUsetC.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/3c4b8178f731b802b470ed6ed10c5366_aoklc8puM0.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/542601f99594e7675e5bec3def68a28a_ehsr0hnSP.jpeg",
      "https://ik.imagekit.io/qdesq/qdesq/c50869caaf6267cac48fc8110fac9cbb_DuhIloXbBK.jpeg"
    ]
  },
  {
    id: 35,
    name: "KUBZ",
    badge: null,
    rating: null,
    area: "Padamughal",
    location: "Padamughal, Kochi",
    price: "₹4,500",
    period: "/ Month",
    priceFormatted: "₹4,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1652262411/byhigvnvyzimagwuokpg.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1652262411/uvqljmkrq3nxch6q7p0o.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1652262411/byhigvnvyzimagwuokpg.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1652262467/vaxvsrbvwqxe3p9cvdjs.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1652262467/mlzhn5yi2ircgfpgjh6y.webp",
      "https://qdesq.imagekit.io/tr:h-181,w-325/image/upload/v1652262411/uvqljmkrq3nxch6q7p0o.jpg"
    ]
  },
  {
    id: 36,
    name: "Mikro Grafeio",
    badge: null,
    rating: null,
    area: "Thrikkakara",
    location: "Thrikkakara, Kochi",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1711092732/etzrsmnmoaow6lmavfsc.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711092749/okmiwg7iu4d4dfmim6xu.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711092759/uqsujonxahm7dew95ox1.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711092751/lu9n90ezbibodard7pq5.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711092717/c3msqyyw89hxezs6x8uu.webp",
      "https://qdesq.imagekit.io/tr:h-181,w-325/image/upload/v1711092749/okmiwg7iu4d4dfmim6xu.webp"
    ]
  },
  {
    id: 37,
    name: "wowffice coworking LLP",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹7,000",
    period: "/ Month",
    priceFormatted: "₹7,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/937c7b699bf52041e5565bd8c83ecff7_QyrVMfy2AS.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/a289864b1aaf004784ca6b000dc0ed43_ochCub9HY.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/c770198c0e81d748759a5828baeb1e16_Z5UDV8cDz.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/889eca0fc50da9f07ee03f9ffa42c877_l31Ps7yMSU.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/48a0ac610ac88b740ca0673d34b7a73a_gSYtb91rGp.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/6ec2e04c58bb71a38725769ffc643fdb_fyvd9i7Iws.jpg"
    ]
  },
  {
    id: 38,
    name: "Heiley Spaces",
    badge: null,
    rating: null,
    area: "Padamughal",
    location: "Padamughal, Kochi",
    price: "₹6,600",
    period: "/ Month",
    priceFormatted: "₹6,600 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1576216498/lzpmtizojshu9tchqsqf.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1576216649/ocvia9h71epdohv8mk59.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1576216650/zwniwac4cvw2mjrfvxfd.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1576216649/s8fqdf4nq83jqdu55tmn.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1576216649/rljzsbgil80e7vikfu88.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1576216688/meeyvh2exficzgxv3cju.webp"
    ]
  },
  {
    id: 39,
    name: "L.R. Towers",
    badge: null,
    rating: null,
    area: "Palarivattom",
    location: "Palarivattom, Kochi",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1645777062/obqbl22rpajcfhop0w77.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645777062/obqbl22rpajcfhop0w77.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1645777062/ozdinagp4qkqhx6mh7ce.jpg",
      "https://qdesq.imagekit.io/tr:h-181,w-325/image/upload/v1645777062/obqbl22rpajcfhop0w77.jpg"
    ]
  }
];

export const pageTwoMoreKochiOfficeCards = [
  {
    id: 40,
    name: "Spaze One",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹7,250",
    period: "/ Month",
    priceFormatted: "₹7,250 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1700811102/hp3uq4ejztri6qkgpvm5.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700811051/he5ledwusaomf4xv7wg7.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700811051/ueaho7bnzl60arofjwok.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700810935/xhv3jtxbgdylfjk7et4p.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700810936/enzvgufb4lrm9wpwprne.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700810936/ycdwucaamxwabbkm5t7k.webp"
    ]
  },
  {
    id: 41,
    name: "SpaceLance",
    badge: null,
    rating: null,
    area: "Nedumba Ery",
    location: "Nedumba Ery, Kochi",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1608791650/pomlnj8nght0rrjzbjos.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1608791649/nmxk5e8vsgs5xm9p1scx.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1608791650/rkrcdmvgznhspfcnhnjp.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1608791650/pomlnj8nght0rrjzbjos.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1608791649/sgajv1mnscb3jlbibg0z.jpg",
      "https://qdesq.imagekit.io/tr:h-181,w-325/image/upload/v1608791649/nmxk5e8vsgs5xm9p1scx.jpg"
    ]
  },
  {
    id: 42,
    name: "Mikro Grafeio",
    badge: null,
    rating: null,
    area: "Kacheripady",
    location: "Kacheripady, Kochi",
    price: "₹5,500",
    period: "/ Month",
    priceFormatted: "₹5,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1711093529/lpe2fwsrm0ronjj5q47v.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711093481/bwmsxilppxk5j6gkvsus.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711093390/riav2kuk0fcke3vwkol2.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711093444/snffooaswwc0tgybyps9.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711093404/a58d2yieo4u6x4oabluz.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1711093432/hd9lps0aq8kjsnacwvis.webp"
    ]
  },
  {
    id: 43,
    name: "BuzzWorks",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹15,000",
    period: "/ Month",
    priceFormatted: "₹15,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1612939279/kew0qypr2lvqqapvhkql.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1612939279/kew0qypr2lvqqapvhkql.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1612939279/futdoi0oat1898hakcny.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1612939279/yonxewnexthqbjg64mul.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1612939279/pfbbglqsl7vzzzophalo.jpg",
      "https://qdesq.imagekit.io/tr:h-181,w-325/image/upload/v1612939279/kew0qypr2lvqqapvhkql.jpg"
    ]
  },
  {
    id: 44,
    name: "Center A",
    badge: null,
    rating: null,
    area: "MG Road",
    location: "MG Road, Kochi",
    price: "₹11,000",
    period: "/ Month",
    priceFormatted: "₹11,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1595251424/xerspz69sjctuejyzr7r.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595251285/s6gylfkfsvfciniigif0.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595251334/ih1godxntmquhufdwbw3.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1595251424/xerspz69sjctuejyzr7r.webp",
      "https://qdesq.imagekit.io/img/tr:h-181,w-325/image/upload/v1595251285/s6gylfkfsvfciniigif0.webp"
    ]
  },
  {
    id: 45,
    name: "Workshaala",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1666784122/rrcmpaau3sknxnbdxlqs.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1666784138/dgxp9zsufiujz7pctqjw.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1666784139/i7yei7cj8wa7pdpoeydg.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1666851855/muogzisj1keyon2cgqyu.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1666851865/hpsd4ujkzl0vokmnugjn.webp",
      "https://qdesq.imagekit.io/tr:h-181,w-325/image/upload/v1666784138/dgxp9zsufiujz7pctqjw.webp"
    ]
  },
  {
    id: 46,
    name: "Collective Coworks",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1678689241/ci1yikyv6d3zzdyqndoz.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1678689127/gfz7xec6r2s4orndcnxt.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1678689127/uca8qxvehtg9oqwbjufy.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1678689127/ax3407u2j7lk1coqktaz.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1678689127/ta4zzxgzov5qeg05clpw.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1678689152/cgdqpuqmculkduqyllyl.webp"
    ]
  }
];

export const pageTwoFinalKochiOfficeCards = [
  {
    id: 47,
    name: "Workiplex",
    badge: null,
    rating: null,
    area: "MG Road",
    location: "MG Road, Kochi",
    price: "₹6,050",
    period: "/ Month",
    priceFormatted: "₹6,050 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1583128362/kfch4n4qurcv8i8despi.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image/image/upload/v1586235434/zzgq2fb2s8nhcw1z2zuq.jpg",
      "https://qdesq.imagekit.io/img/tr:n-detail_image/image/upload/v1586235345/na0jjxwqvtjjxqxt4gx9.jpg",
      "https://qdesq.imagekit.io/img/tr:n-detail_image/image/upload/v1586235362/k9xhojtkfthto7ondpxl.jpg",
      "https://qdesq.imagekit.io/img/tr:n-detail_image/image/upload/v1586235400/wjaumyedtyfzuibbusds.jpg",
      "https://qdesq.imagekit.io/img/tr:h-181,w-325/image/upload/v1586235434/zzgq2fb2s8nhcw1z2zuq.jpg"
    ]
  },
  {
    id: 48,
    name: "Spaze One",
    badge: null,
    rating: null,
    area: "Marine Drive",
    location: "Marine Drive, Kochi",
    price: "₹10,000",
    period: "/ Month",
    priceFormatted: "₹10,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1700469702/erqvttyqlkmn405wc52v.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700469671/rx602domfdiwujiwhpoj.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700469568/ptn9wgdnqwsifysdkutq.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700469568/acth7swtzhvkk3pt7enh.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700469568/vcnme3raahhioenfz5ai.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700469568/qfoug0zrxeqgpiz486py.webp"
    ]
  },
  {
    id: 49,
    name: "Spaze One",
    badge: null,
    rating: null,
    area: "Shanmugham Road",
    location: "Shanmugham Road, Kochi",
    price: "₹10,000",
    period: "/ Month",
    priceFormatted: "₹10,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1680069012/mjxbnviziyr2yjst2dfg.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680069000/dhhz3oqoyahtcnv7jc4j.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680069021/os4vit2ll2w498gjnrnj.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680069030/ssdqxhnabigwm4xwabmw.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680069053/le6hrwr7axbrobxrj7zf.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680069054/az2vtimqbeqnsfbtvbhk.webp"
    ]
  },
  {
    id: 50,
    name: "Jigsaw Co-Working Space",
    badge: null,
    rating: null,
    area: "Kpcc Junction",
    location: "Kpcc Junction, Kochi",
    price: "₹5,500",
    period: "/ Month",
    priceFormatted: "₹5,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/c4789f855f8083156054b6f646b32bb1_CywhwUMn0K.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/0084b382b3c34a802a122f01bad4f48f_QwATZ1vY_.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/69bafd9d56d94017a572bfaa8b920f2b_j6XZVjIbK.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/2338786a3604480cbb9cb816a8c0c953_9Rscjzm-0e.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/7b0fd5b5f7fbc216ea65f8736fa1db66_f8R7k_tof.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/e666f3144ce74f603fe1cf952e22ea1e_ABaSastdt.jpg"
    ]
  },
  {
    id: 51,
    name: "Blogtec Co Working Space Kochi",
    badge: null,
    rating: null,
    area: "Ernakulam",
    location: "Ernakulam, Kochi",
    price: "₹3,800",
    period: "/ Month",
    priceFormatted: "₹3,800 / Month",
    ctaText: "Get Quote",
    images: [
      "https://ik.imagekit.io/qdesq/qdesq/74fb3c83ded2c03b72fd6aba59e9d3a6_lgQpc3bBQd.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/68e417ed07d3e8bc532d340aa9e8c8bb_jQIVJhY0sb.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/bb6bc884df71221e74574696107f6f90_b9kEZxCjrp.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/7e7bcabed8e8c454084837c68e5cbecd_fwOXKKDn8.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/881177c0b6728b2e1fe76db25b260ff0_FRol2uSdx4.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/tr:h-181,w-325/68e417ed07d3e8bc532d340aa9e8c8bb_jQIVJhY0sb.JPG"
    ]
  },
  {
    id: 52,
    name: "Spaze One",
    badge: null,
    rating: null,
    area: "Ernakulam",
    location: "Ernakulam, Kochi",
    price: "₹8,000",
    period: "/ Month",
    priceFormatted: "₹8,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1703579293/dh2xw7fupfzyokmlssfr.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1703579253/fvgum5ealenism5yx4q8.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1703579191/njnzeycyqiirmummzb5f.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1703579191/rjuoxmkmdkarrnkywpxv.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1703579191/imas5gfzrpkqkuozdwx5.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1703579191/tux55jkcdlzx6csl9sks.webp"
    ]
  },
  {
    id: 53,
    name: "KUBZ",
    badge: null,
    rating: null,
    area: "MG Road",
    location: "MG Road, Kochi",
    price: "₹4,500",
    period: "/ Month",
    priceFormatted: "₹4,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1556619139/ratnlgj8ryt3l8hze0cx.webp",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/40a37ee3668edbcc506f23e900a32a5b_vA5DpXWjn.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/388c0cf424ce8b3e116c7c9d9a74bd8b_DJdfXmx7x.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/00dfb1d3ff473ad5130b3a44ec6a872b_3QCiM3ojCF.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/40b06a8df731b3e6c7fbd2f890b6133f_HKHX--F0O3.JPG",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/eae5b34df4e4760bf5da4e0c66cb2d80_V2qFipQKMH.JPG"
    ]
  }
];

export const pageTwoFeaturedKochiOfficeCards = [
  {
    id: 54,
    name: "Beyond Co-working",
    badge: null,
    rating: null,
    area: "Kadavanthara",
    location: "Kadavanthara, Kochi",
    price: "₹4,500",
    period: "/ Month",
    priceFormatted: "₹4,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1651147399/fnwdlcjbb1vqty58vfvi.webp",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/d3ae65be68d6b3add83f632e1f9db33c_WKH0pfjS06.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/3cf299ea7ef523988a667fdeeaa07514_8_sPtZKl6X.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/188f830b9c2f788eb1f5f2a1f412920f_aGhj7Y5svP.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/0732a414bcad614c644d1c092609009c_tjqsrHMWl.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/483a298798881686f04d784727a56f40_QEdB8rqpo.jpg"
    ]
  },
  {
    id: 55,
    name: "Dotspace",
    badge: null,
    rating: null,
    area: "Panampilly Nagar",
    location: "Panampilly Nagar, Kochi",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1581571944/oouk47eyrd8oyfdyvdhe.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1581571966/p0wc2zbys9b4shuoyqsb.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1581571966/zfj5hbbspdvnlmnpqw6q.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1581571967/sxpchowovla1nkymertf.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1581571967/u1xsnloyfn3jcoaeandp.webp",
      "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1581571944/oouk47eyrd8oyfdyvdhe.webp"
    ]
  },
  {
    id: 56,
    name: "Dotspace",
    badge: null,
    rating: null,
    area: "Kv Nagar",
    location: "Kv Nagar, Kochi",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1677057890/bmh5fxbfp9m3djssqmuw.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1678035272/apvljvvhox2fcbf0hojm.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1678035272/ivpyqqmbc84tmnlegbl5.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1677057785/buolsgxllfhiwexws528.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1677057803/dtoagy65db98vnnukaop.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1677057803/oiw2hfyuuznbc3dxnbad.webp"
    ]
  },
  {
    id: 57,
    name: "Wbb office",
    badge: null,
    rating: null,
    area: "Panampilly Nagar",
    location: "Panampilly Nagar, Kochi",
    price: "₹3,500",
    period: "/ Month",
    priceFormatted: "₹3,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1639981392/jvtsondua57qssdkkrfu.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1639808395/vgmx4xixy1zfdrirbz9b.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1639981368/ftxsto4qhdngrsfalvna.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1639808405/lmxboalwlcrdjksxofy8.jpg",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1639981343/nujpi2ic5mfxy36x21in.webp",
      "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1639981404/ad2sosbvp8wpemtccvzi.webp"
    ]
  }
];

export const pageThreeKochiOfficeCards = [];

export const pageThreeMoreKochiOfficeCards = [];

export const pageThreeFinalKochiOfficeCards = [];

export const pageThreeFeaturedKochiOfficeCards = [];

export const pageFourKochiOfficeCards = [];

// Area-specific extra cards (only real same-area listings; shown only when that area filter is active).
export const areaExtraOfficeCards = {
  "Kakkanad": [],
  "MG Road": [],
  "Kaloor": [],
  "Edappally": [],
  "Panampilly Nagar": [],
  "Infopark": [],
  "Palarivattom": [],
  "Ernakulam": [],
  "Marine Drive": [],
  "Padamughal": [],
  "Thrikkakara": [],
  "Vytilla": [],
  "Kadavanthara": []
};

export const similarKochiOfficeCards = [
  {
    id: 1,
    name: "Dotspace",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/18199e5eb6248fd3977320cfdb671bcc7c8f22d5.jpg",
      "https://img.cofynd.com/images/original/df9f6d76e97b99f49dc65004fcac84417763edd3.jpg",
      "https://img.cofynd.com/images/original/8de944b05cc1cfcf0cbf2e41ed0ada708435a8c7.jpg",
      "https://img.cofynd.com/images/original/4a842fbb1063e8011cf3b24f2ee0717a1351b97a.jpg",
      "https://img.cofynd.com/images/original/c4ffaaa0302c48d7d7b53a40b1baa28026013055.jpg"
    ]
  },
  {
    id: 2,
    name: "Incuspaze - Oberon Mall",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/23e5d82f5ab87cfc88ad690d1c3644f794ee0402.webp",
      "https://img.cofynd.com/images/latest_images_2024/c5ac3f736e1a1558dfd1692d83780c81fcf952a8.webp",
      "https://img.cofynd.com/images/latest_images_2024/03e2bf409eca8aff2768049fbeefa56bce81d00a.webp",
      "https://img.cofynd.com/images/latest_images_2024/1bff136fa041c1266d19623da660a71645c4a3c6.webp",
      "https://img.cofynd.com/images/latest_images_2024/7efdc9c432358e00de34c4188f5e3ab2bae7b48f.webp",
      "https://img.cofynd.com/images/latest_images_2024/07728ca95c96cf30d65a945947251e064745045e.webp"
    ]
  },
  {
    id: 3,
    name: "Wagmi Workspace",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/34bfc7ba6f2fbeddf9bc8d6188cbf4370beef6d6.webp",
      "https://img.cofynd.com/images/latest_images_2024/f065e96f03e5a99831bed925157c0ae9607da530.webp",
      "https://img.cofynd.com/images/latest_images_2024/dde0012361a86284038c64cad3721c1d1c9d672a.webp",
      "https://img.cofynd.com/images/latest_images_2024/b45337494d674fe46b32a2ae5a46971a9c1b7528.webp",
      "https://img.cofynd.com/images/latest_images_2024/a327c8dd01f9d91c0904d1d8a0f76b20e76bfaf6.webp"
    ]
  },
  {
    id: 4,
    name: "IndiQube Square",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹799",
    period: "/ Month",
    priceFormatted: "₹799 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/9a8352da1798933b8c3895eef8461ca9a1905128.webp",
      "https://img.cofynd.com/images/latest_images_2024/8302b5ab336de90a8efdb6e2eb215efec59a5c7d.webp",
      "https://img.cofynd.com/images/latest_images_2024/6636c84dfdfd627f1cf2a3bec0b94b2d131a16c4.webp",
      "https://img.cofynd.com/images/latest_images_2024/f9a775322ec06df6d74cf8315e67f811c6f6a0d0.webp"
    ]
  },
  {
    id: 5,
    name: "MARQ",
    badge: null,
    rating: null,
    area: "Edappally",
    location: "Edappally, Kochi",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/529dea2db69813e412635a80052217398ca8873a.webp",
      "https://img.cofynd.com/images/latest_images_2024/0374dc2852d23de25635ad0edd6f042a0bc400b7.webp",
      "https://img.cofynd.com/images/latest_images_2024/d1548e844173e098099777cf634b32fc41b3d08a.webp",
      "https://img.cofynd.com/images/latest_images_2024/f6fb72bf7418ea5a05404297ad6fc38b3a6fcac5.webp",
      "https://img.cofynd.com/images/latest_images_2024/1dfefede6db360e6c71870333c3757cfe67be511.webp"
    ]
  },
  {
    id: 6,
    name: "Incuspaze",
    badge: null,
    rating: null,
    area: "Ernakulam",
    location: "Ernakulam, Kochi",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/21d51e6ccc3da4e7eff570f5f37901fb7b771320.jpg",
      "https://img.cofynd.com/images/original/7debb615871fc83180f237b3c4eb49d16abb24f4.jpg",
      "https://img.cofynd.com/images/original/3763e787f711d4f3571925e8d8e5bf1f2d39b90e.jpg",
      "https://img.cofynd.com/images/original/82ac69f6cbf3090ea5212886e5251f15eef6c3e7.jpg",
      "https://img.cofynd.com/images/original/8da6bc993fe7c870ed991772dbbbecdc65c9cbec.jpg"
    ]
  },
  {
    id: 7,
    name: "Cowired co-working Space",
    badge: null,
    rating: null,
    area: "Palarivattom",
    location: "Palarivattom, Kochi",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/12f5af69433be99f1af308b082205adb372d33b9.webp",
      "https://img.cofynd.com/images/latest_images_2024/5364701534f2dffd5427877ac57b04c18243a148.webp",
      "https://img.cofynd.com/images/latest_images_2024/1505b09194b3523c4e601d074bc6ab7aefe28613.webp",
      "https://img.cofynd.com/images/latest_images_2024/0cbca27ed5ceb65594c18433f6879b6da4e5bbdc.webp",
      "https://img.cofynd.com/images/latest_images_2024/a24d503b95319ce1bd9a744383c791f1fe588f30.webp"
    ]
  },
  {
    id: 8,
    name: "Spacelance",
    badge: null,
    rating: null,
    area: "Kakkanad",
    location: "Kakkanad, Kochi",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/95427c76583e17c1dead627bdba2d7071739d5b2.jpg",
      "https://img.cofynd.com/images/original/5f99633f793bb8bda7920e103b68c4a814ca3369.jpg",
      "https://img.cofynd.com/images/original/b261d90c3a0c1e1445a44836ef796606e9b9aa1c.jpg",
      "https://img.cofynd.com/images/original/476b9528240b95e4440600e113a601b2adac3e51.jpg",
      "https://img.cofynd.com/images/original/ad0e3a08fe30769a57d1ea4339da1db670eb2db2.jpg"
    ]
  },
  {
    id: 9,
    name: "Calm Workspaces",
    badge: null,
    rating: null,
    area: "Palarivattom",
    location: "Palarivattom, Kochi",
    price: "₹7,500",
    period: "/ Month",
    priceFormatted: "₹7,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/87a8255ec000e095d9ec9c8cfdd17757df711f8b.webp",
      "https://img.cofynd.com/images/latest_images_2024/64355c35946ee009311562b9908afaa1343e43b5.webp",
      "https://img.cofynd.com/images/latest_images_2024/afdc378a1289f5ca88be0b4012a141d3c4ead86c.webp",
      "https://img.cofynd.com/images/latest_images_2024/2995d1c79f37a739a0bd07473dd1fcb48f8a2529.webp",
      "https://img.cofynd.com/images/latest_images_2024/f3976b66693ba627a6d43017b906db7d70b1c567.webp",
      "https://img.cofynd.com/images/latest_images_2024/448d66d124a153f8675857c112d23d9df77be7ba.webp"
    ]
  }
];

export const allKochiOfficeCards = [
  ...kochiOfficeCards,
  ...moreKochiOfficeCards,
  ...finalKochiOfficeCards,
  ...featuredKochiOfficeCards,
  ...pageTwoKochiOfficeCards,
  ...pageTwoMoreKochiOfficeCards,
  ...pageTwoFinalKochiOfficeCards,
  ...pageTwoFeaturedKochiOfficeCards,
  ...pageThreeKochiOfficeCards,
  ...pageThreeMoreKochiOfficeCards,
  ...pageThreeFinalKochiOfficeCards,
  ...pageThreeFeaturedKochiOfficeCards,
  ...pageFourKochiOfficeCards,
  ...similarKochiOfficeCards,
  ...Object.values(areaExtraOfficeCards).flat()
];

export const getKochiOfficeCardById = (id) => findOfficeBySlug(allKochiOfficeCards, id, "kochi");
export const getKochiOfficeSlug = (space) => officePath(allKochiOfficeCards, space, "kochi");

export const topKochiCoworkingLocations = [
  {
    id: "loc-kakkanad",
    name: "Kakkanad",
    title: "Coworking Space in Kakkanad",
    image: "https://img.cofynd.com/images/original/95427c76583e17c1dead627bdba2d7071739d5b2.jpg",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-mg-road",
    name: "MG Road",
    title: "Coworking Space in MG Road",
    image: "https://img.cofynd.com/images/latest_images_2024/bf7906d678f72d5925458bb8b3bdbcffc602009f.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-kaloor",
    name: "Kaloor",
    title: "Coworking Space in Kaloor",
    image: "https://img.cofynd.com/images/original/18199e5eb6248fd3977320cfdb671bcc7c8f22d5.jpg",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-edappally",
    name: "Edappally",
    title: "Coworking Space in Edappally",
    image: "https://img.cofynd.com/images/original/18199e5eb6248fd3977320cfdb671bcc7c8f22d5.jpg",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-panampilly-nagar",
    name: "Panampilly Nagar",
    title: "Coworking Space in Panampilly Nagar",
    image: "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1581571944/oouk47eyrd8oyfdyvdhe.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-infopark",
    name: "Infopark",
    title: "Coworking Space in Infopark",
    image: "https://img.cofynd.com/images/latest_images_2024/0e029648dd46e478e4384a47e93ae354fa67318e.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-palarivattom",
    name: "Palarivattom",
    title: "Coworking Space in Palarivattom",
    image: "https://img.cofynd.com/images/latest_images_2024/12f5af69433be99f1af308b082205adb372d33b9.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-ernakulam",
    name: "Ernakulam",
    title: "Coworking Space in Ernakulam",
    image: "https://img.cofynd.com/images/original/21d51e6ccc3da4e7eff570f5f37901fb7b771320.jpg",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-marine-drive",
    name: "Marine Drive",
    title: "Coworking Space in Marine Drive",
    image: "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1700469702/erqvttyqlkmn405wc52v.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-padamughal",
    name: "Padamughal",
    title: "Coworking Space in Padamughal",
    image: "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1652262411/byhigvnvyzimagwuokpg.jpg",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-thrikkakara",
    name: "Thrikkakara",
    title: "Coworking Space in Thrikkakara",
    image: "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1604401123/nmaumt83revnfgkeskt6.jpg",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-vytilla",
    name: "Vytilla",
    title: "Coworking Space in Vytilla",
    image: "https://img.cofynd.com/images/original/42092e53a16122599bb8dcc222681a1e7ab0e2b0.jpg",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-kadavanthara",
    name: "Kadavanthara",
    title: "Coworking Space in Kadavanthara",
    image: "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1651147399/fnwdlcjbb1vqty58vfvi.webp",
    ctaText: "Explore Spaces"
  }
];
