import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Jaipur Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * Sourced from verified active coworking listings in Jaipur (cofynd.com/coworking/jaipur).
 */

export const jaipurNeighborhoods = [
  "Vaishali Nagar",
  "Mansarovar",
  "Tonk Road",
  "Lalkothi",
  "Indrapuri",
  "Ganpati Nagar",
  "Pratap Nagar",
  "Nirman Nagar",
  "Subhash Nagar",
  "Shyam Nagar"
];

export const jaipurOfficeCards = [
  {
    id: 1,
    name: "Prime Coworks",
    badge: null,
    rating: null,
    area: "Tonk Road",
    location: "Tonk Road, Jaipur",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/248fd9d196ceb58279672a39b7091f812f1735ad.webp",
      "https://img.cofynd.com/images/latest_images_2024/7c7544c3174624551b9999ffce588271e069adfa.webp",
      "https://img.cofynd.com/images/latest_images_2024/f7bb8c197235b527be16711edc8c4edb6f733659.webp",
      "https://img.cofynd.com/images/latest_images_2024/1a7767c431313339c91b8675cc275ff5894c6c99.webp",
      "https://img.cofynd.com/images/latest_images_2024/e0b706a19533ac8f1a4c1cd594ae389d833e35fa.webp",
      "https://img.cofynd.com/images/latest_images_2024/4139d364451c7d59770c884afca9667d54323e35.webp"
    ]
  },
  {
    id: 2,
    name: "Connekt Coworking Signature Elite",
    badge: null,
    rating: null,
    area: "Tonk Road",
    location: "Tonk Road, Jaipur",
    price: "₹749",
    period: "/ Month",
    priceFormatted: "₹749 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/e581167b6ef1f3a745441fd4ee3bb050f4e86f52.webp",
      "https://img.cofynd.com/images/latest_images_2024/a1e531debd24059397ce204bfabed4cb221c60c4.webp",
      "https://img.cofynd.com/images/latest_images_2024/044e59dcd245d98a5e04a596de2c1b2744d42926.webp",
      "https://img.cofynd.com/images/latest_images_2024/d926a04a0552ff07e496e8b7b836b7b76a80f229.webp",
      "https://img.cofynd.com/images/latest_images_2024/1e55f727f160cf5bc5087d410b38c29a26571e2c.webp",
      "https://img.cofynd.com/images/latest_images_2024/d93ff19819afcefa4840ee534f35399fcddc852d.webp"
    ]
  },
  {
    id: 3,
    name: "White Collar Coworks",
    badge: null,
    rating: null,
    area: "Nirman Nagar",
    location: "Nirman Nagar, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/34540edac3e9e158c30bb61d6672d4d1a6ee9675.webp",
      "https://img.cofynd.com/images/latest_images_2024/a155403c6fa2d65013f267ace59bb75a145dec6c.webp",
      "https://img.cofynd.com/images/latest_images_2024/b9ab2bb181d2853cffbdbcc5f6db7bf9a146db56.webp",
      "https://img.cofynd.com/images/latest_images_2024/86fda98b5ed3d8e3d8acedae0efe747e8f72f563.webp",
      "https://img.cofynd.com/images/latest_images_2024/9922e84eea9825587cec50d1c683892d478c4717.webp",
      "https://img.cofynd.com/images/latest_images_2024/d9cb3539b948103573835c007ec3a90b57e9311d.webp"
    ]
  },
  {
    id: 4,
    name: "Kowork Space",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/f601231526375ef89387cb9c15b2448ee2dfb050.webp",
      "https://img.cofynd.com/images/latest_images_2024/28c68aee8dbd80575527f92a4af302ebaefe6122.webp",
      "https://img.cofynd.com/images/latest_images_2024/edefb2f249dfbb0fd918a8021cb892fd6db9ba3f.webp",
      "https://img.cofynd.com/images/latest_images_2024/6db9d66c1abf807d94a3ad01f3cd2e8901be1444.webp",
      "https://img.cofynd.com/images/latest_images_2024/b45acd55bcac180c2a544415631c3ab55687b0d5.webp",
      "https://img.cofynd.com/images/latest_images_2024/3f418383a4c5b9e615f0c8dfc539c7c340ae71b0.webp"
    ]
  },
  {
    id: 5,
    name: "RAW Coworking and Office Space",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/a49087617d15a50f36a5104ae44592feeea35b42.webp",
      "https://img.cofynd.com/images/latest_images_2024/d47632413e95d26f10bf01d9316ef007b997c5a3.webp",
      "https://img.cofynd.com/images/latest_images_2024/03bf2e6958afb38599e7b1094c17c940091067ea.webp",
      "https://img.cofynd.com/images/latest_images_2024/dec4402b16d2629616de5cb209aced86017374c6.webp",
      "https://img.cofynd.com/images/latest_images_2024/37eb26fa2ad2dc91ebcda789934c7becbbc0dc48.webp",
      "https://img.cofynd.com/images/latest_images_2024/b8999f9797a2427847bcd57272b9263082a74dfb.webp"
    ]
  },
  {
    id: 6,
    name: "Wish Cowork Elite",
    badge: null,
    rating: null,
    area: "Civil Lines",
    location: "Civil Lines, Jaipur",
    price: "₹6,999",
    period: "/ Month",
    priceFormatted: "₹6,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/75d6ef152c01552e0a0179b36a85b485c20267e5.webp",
      "https://img.cofynd.com/images/latest_images_2024/b36876b03d26a2cc24205c7ecca197cc50646861.webp",
      "https://img.cofynd.com/images/latest_images_2024/5ff5960f02dde1647eef8f1dfea923f32ffbe5c0.webp",
      "https://img.cofynd.com/images/latest_images_2024/689f0679ad5223ffa5f63c0fd94872f346439776.webp",
      "https://img.cofynd.com/images/latest_images_2024/5fd9668ef833b87733a3b722611f9fd1c8924b6b.webp",
      "https://img.cofynd.com/images/latest_images_2024/87fb4cb5762dee043d287544331ad25d5ca75eb5.webp"
    ]
  },
  {
    id: 7,
    name: "Cowork Iksana",
    badge: null,
    rating: null,
    area: "MI Road",
    location: "MI Road, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/ca3b615683dbf337ab9c58ed5f9de2c897668dba.jpg",
      "https://img.cofynd.com/images/original/9f3d033584fe228d11dd3c44c419003eeccda8eb.jpg",
      "https://img.cofynd.com/images/original/c1ed2cce91a660a1e4fe7536a251cf552fb4e32a.jpg",
      "https://img.cofynd.com/images/original/c6620989d92b834941913fa6461729415de61dd1.jpg"
    ]
  },
  {
    id: 8,
    name: "Creware",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/849e47738570992dc025e35a3b37dc236bf0980b.jpg",
      "https://img.cofynd.com/images/original/461ae8a9cadcb7bb32aabdc00717f6d10c6ddb1d.jpg",
      "https://img.cofynd.com/images/original/8015449306673337d80dc89d701b002a193ee5e3.jpg",
      "https://img.cofynd.com/images/original/7542771cfde0aad67efdba3e0de283ab38a95522.jpg",
      "https://img.cofynd.com/images/original/e080d0edf62012a355a4eaca42cf395d50f21a54.jpg"
    ]
  }
];

export const moreJaipurOfficeCards = [
  {
    id: 9,
    name: "Office Culture",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/0082b071be1d0a19e938761d45f659279f32ec7e.webp",
      "https://img.cofynd.com/images/latest_images_2024/9ba4a53f2964c5caa5a85efbee0b6cc2c889981a.webp",
      "https://img.cofynd.com/images/latest_images_2024/6476363183d45b5abe21241eb06c667ee5e0c237.webp",
      "https://img.cofynd.com/images/latest_images_2024/4679d3e310a594503f3eca586ae6f485688f03e2.webp",
      "https://img.cofynd.com/images/latest_images_2024/d12b09a9cfb44893c3092ee5b278007ffcf4e134.webp",
      "https://img.cofynd.com/images/latest_images_2024/a6ed3e4871f6ed4863bf29095bd12892f5999b4e.webp"
    ]
  },
  {
    id: 10,
    name: "Best Desk Cove",
    badge: null,
    rating: null,
    area: "Lalkothi",
    location: "Lalkothi, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/2c577d4f3aba02e1a24b29fa8cdb871dab5c24cb.jpg",
      "https://img.cofynd.com/images/original/17eb5402447f7b42bb2cbe76457c106103c0b305.jpg",
      "https://img.cofynd.com/images/original/dca498dc971231f0063d242ac78b0d2f5ed9ca91.jpg",
      "https://img.cofynd.com/images/original/8a8190387f1941a6d3410834de36f8a95c7fbaf0.jpg",
      "https://img.cofynd.com/images/original/57b208864df6efdc1a963f99125debd0c0f52a56.jpg",
      "https://img.cofynd.com/images/original/b02a22b01df4ceb93c716b061ed501d93871cae1.jpg"
    ]
  },
  {
    id: 11,
    name: "Wish CoWork",
    badge: null,
    rating: null,
    area: "Nirman Nagar",
    location: "Nirman Nagar, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/4bdad3ea10b67f5da6c3fa62df8582cb9865de30.jpg",
      "https://img.cofynd.com/images/original/773986b76c254facedb03283620bbb5cb72ae70c.jpg",
      "https://img.cofynd.com/images/original/8d8ed696e65e9cb5794a41cdc90941750be804ce.jpg",
      "https://img.cofynd.com/images/original/40378b707629d7b1227da2bf64b8b558c0da6fdb.jpg",
      "https://img.cofynd.com/images/original/1d8414cf6e926320cefe47028448410c38888450.jpg"
    ]
  },
  {
    id: 12,
    name: "225 West",
    badge: null,
    rating: null,
    area: "Ajmer Road",
    location: "Ajmer Road, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/eb052c348fb4e398be4e369acdd8d7ecfa6cd639.jpg",
      "https://img.cofynd.com/images/original/caf7e827730ae16320a5e03553845d79147f7629.jpg",
      "https://img.cofynd.com/images/original/93f7c475c3728f653c148b864b3add108b5d6aa6.jpg",
      "https://img.cofynd.com/images/original/8bae842b78e8af2d10a28c0a986aa146536dbbd3.jpg",
      "https://img.cofynd.com/images/original/6e504adf4e5361ef748e3e4508397f95215ed047.jpg",
      "https://img.cofynd.com/images/original/c7cc7053a368436e6e4297472508f9b86de3864b.jpg"
    ]
  },
  {
    id: 13,
    name: "Wnikle Coworks",
    badge: null,
    rating: null,
    area: "Jaipur",
    location: "Jaipur, Jaipur",
    price: "₹2,500",
    period: "/ Month",
    priceFormatted: "₹2,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/c905a7d10571164897b85fe5293b0f5b27f00163.jpg",
      "https://img.cofynd.com/images/original/7f53ba2ad628022ea33aa8e5a3387e549d7da88b.jpg",
      "https://img.cofynd.com/images/original/f9c01d44b3fe86a19bb0c23515f87c985ea408a8.jpg",
      "https://img.cofynd.com/images/original/3f73e18f0c4909187a92342d5bddf1ac504d7469.jpg",
      "https://img.cofynd.com/images/original/c999eecdb49557a864c29c5ce72c34f785196a8d.jpg",
      "https://img.cofynd.com/images/original/d88abc68704d3d44f672b3cf11a9b7bb69b21c1e.jpg"
    ]
  },
  {
    id: 14,
    name: "Dafftar Coworking",
    badge: null,
    rating: null,
    area: "Shastri Nagar",
    location: "Shastri Nagar, Jaipur",
    price: "₹749",
    period: "/ Month",
    priceFormatted: "₹749 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/31577ce3922193992dc8ce8f5ce2868e47c1ac80.jpg",
      "https://img.cofynd.com/images/original/9c030df39efe8a7eb5768017f7cb264b6e6fa70e.jpg",
      "https://img.cofynd.com/images/original/95c91a1bb2501b76af75ae3485401c4908935c55.jpg",
      "https://img.cofynd.com/images/original/235373dbb69e3b9ba1be995bc414ad495b5aa7c7.jpg",
      "https://img.cofynd.com/images/original/c2b6aaf6afcff34d11b5a083af9c019e16b31bf7.jpg"
    ]
  },
  {
    id: 15,
    name: "Jagatpura Co-working",
    badge: null,
    rating: null,
    area: "Jagatpura",
    location: "Jagatpura, Jaipur",
    price: "₹4,000",
    period: "/ Month",
    priceFormatted: "₹4,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/a0bcde2b9973fa722e99d9eb769c09dbeaa0afe6.webp",
      "https://img.cofynd.com/images/latest_images_2024/0784972cccdb1c58363cd4067bfecb2271cd540f.webp",
      "https://img.cofynd.com/images/latest_images_2024/94a7c3e4b84cb5df83e96ba1fcac779800bca252.webp",
      "https://img.cofynd.com/images/latest_images_2024/c6d6b53ecdf6bb104069638cc0518224e75afc5e.webp"
    ]
  },
  {
    id: 16,
    name: "The Social Stays (formerly ArtBuzz)",
    badge: null,
    rating: null,
    area: "Civil Lines",
    location: "Civil Lines, Jaipur",
    price: "₹5,500",
    period: "/ Month",
    priceFormatted: "₹5,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/5e4a973b13a2abe67792f6b919b1a2f0b7368220.webp",
      "https://img.cofynd.com/images/latest_images_2024/d881049407c00ce5f7da1e6ec740b109b2b86d7d.webp",
      "https://img.cofynd.com/images/original/da9e941c7b8267207c015a24b7153e43c3dd359c.jpg",
      "https://img.cofynd.com/images/latest_images_2024/77757fdddccfdb950b66fcc7ad74c2233115a427.webp",
      "https://img.cofynd.com/images/original/bcaed1212c18c0bb8c0735f28c59126de35597c9.jpg",
      "https://img.cofynd.com/images/latest_images_2024/a7da9e299905776f8c4a3e043c64333c844e536a.webp"
    ]
  }
];

export const finalJaipurOfficeCards = [
  {
    id: 17,
    name: "ACS One Co-work",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/2cb36e84cc08bd213b1be41f45d513077fd133a3.jpg",
      "https://img.cofynd.com/images/original/0b946f2a51c71451cbff36350bebaee866f22d4b.jpg",
      "https://img.cofynd.com/images/original/658b503947a503894d6a0457c6633dc9aebac681.jpg",
      "https://img.cofynd.com/images/original/d3c5b9a5095284c56e2cd7920da6731d48775c24.jpg",
      "https://img.cofynd.com/images/original/8d5db8ba595ac868815f3997c627d225bad32ad0.jpg",
      "https://img.cofynd.com/images/original/24498fff23a69049afea68b7d2efca69c33741aa.jpg"
    ]
  },
  {
    id: 18,
    name: "Dafftar",
    badge: null,
    rating: null,
    area: "Shyam Nagar",
    location: "Shyam Nagar, Jaipur",
    price: "₹749",
    period: "/ Month",
    priceFormatted: "₹749 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/77a8e02eeda83b91f21120b56fbd85f6a6b7d1fd.jpg",
      "https://img.cofynd.com/images/original/6600704a4e1987b277f85a47dad819e987c8dbd2.jpg",
      "https://img.cofynd.com/images/original/06261c444383103aa5394338ff1580113586036c.jpg",
      "https://img.cofynd.com/images/original/30686a8e3196e6c730bb7f4a654b9ee4ac4a850a.jpg",
      "https://img.cofynd.com/images/original/46f434bf670d15b25e5f313e39047f1a1316f20e.jpg"
    ]
  },
  {
    id: 19,
    name: "Navoarche",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹2,500",
    period: "/ Month",
    priceFormatted: "₹2,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/be3b22677a0e527c459d33912aefdf352402f65b.jpg",
      "https://img.cofynd.com/images/original/7f4260f2f8f1d9fc6d88c4d690c4a1244e8587a2.jpg",
      "https://img.cofynd.com/images/original/b12bcb410cc3c63dbc8115f0ab0094f7b3bb96a9.jpg",
      "https://img.cofynd.com/images/original/69a8f05c8b444a423765e4942d6eb7f5835eed44.jpg",
      "https://img.cofynd.com/images/original/350a257004ddfffad05b801a9f0dc0ebd73febb5.jpg"
    ]
  },
  {
    id: 20,
    name: "Collabo Corner",
    badge: null,
    rating: null,
    area: "Malviya Nagar",
    location: "Malviya Nagar, Jaipur",
    price: "₹3,279",
    period: "/ Month",
    priceFormatted: "₹3,279 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/f86aa214553dcc3b478d787ebeec398a15b67226.webp",
      "https://img.cofynd.com/images/latest_images_2024/ae3e2964346b2207e6b0ba95b3849c5bf290069d.webp",
      "https://img.cofynd.com/images/latest_images_2024/9b2488319fa31c7138728ee9a3ec8623bf1b556f.webp",
      "https://img.cofynd.com/images/latest_images_2024/9d03bda1952d1e076dad30712aff3fcc5cb3e199.webp",
      "https://img.cofynd.com/images/latest_images_2024/2e43479ea82a909326422c5f8f364498857feae4.webp",
      "https://img.cofynd.com/images/latest_images_2024/619bbe7a75aed7e3cd83b2e78fe5308a0bef651a.webp"
    ]
  },
  {
    id: 21,
    name: "Launchpad",
    badge: null,
    rating: null,
    area: "Nirman Nagar",
    location: "Nirman Nagar, Jaipur",
    price: "₹4,000",
    period: "/ Month",
    priceFormatted: "₹4,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/b91871f1bae918104b3224652be080a8533143c1.jpg",
      "https://img.cofynd.com/images/original/a045adc1ce2296236897dbf92b93079d5a5ce20e.png",
      "https://img.cofynd.com/images/original/070a28ce3174f2b637ecd26e2b4f683b3e7b1f94.jpg",
      "https://img.cofynd.com/images/original/a045134e10c57b7040e8fe6de4a5f0b3384aa79f.jpg",
      "https://img.cofynd.com/images/original/943914f33a09f1e6faf8d528fabdff0bf0ff51c8.jpg",
      "https://img.cofynd.com/images/original/82b14a974de047fb21fe5d7d6f98b443f1d7debe.jpg"
    ]
  },
  {
    id: 22,
    name: "WaveX Cowork",
    badge: null,
    rating: null,
    area: "Tonk Road",
    location: "Tonk Road, Jaipur",
    price: "₹1,669",
    period: "/ Month",
    priceFormatted: "₹1,669 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/d07143e9ce7b3f4ac9dd7b8919c7b5dba31b162f.jpg",
      "https://img.cofynd.com/images/original/f45683add79e0df5c9e09803dd0bb1aa357a130e.jpg",
      "https://img.cofynd.com/images/original/360b9a3aa47eb44c0d60f2b7a9e90043dcb63581.jpg",
      "https://img.cofynd.com/images/original/0fe92e3cdc2dbd1c68a184d1b50d39050e546943.jpg",
      "https://img.cofynd.com/images/original/18aa4c28410e59695cc480d17bc8091142924a5c.jpg"
    ]
  },
  {
    id: 23,
    name: "Hey Writers Coworking",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹4,500",
    period: "/ Month",
    priceFormatted: "₹4,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/4602f869a4735ae1e3db3031fa845e4ce88e2a08.jpg",
      "https://img.cofynd.com/images/original/a8fd863c0a18fb9795201d7368b779752c19bb50.jpg",
      "https://img.cofynd.com/images/original/c10cb525b186a2a8496721ad6055ee86a86c8b59.jpg",
      "https://img.cofynd.com/images/original/c9fde751f05596768648ed98327c208b7dd67334.jpg"
    ]
  },
  {
    id: 24,
    name: "Pink hive",
    badge: null,
    rating: null,
    area: "Malviya Nagar",
    location: "Malviya Nagar, Jaipur",
    price: "₹1,669",
    period: "/ Month",
    priceFormatted: "₹1,669 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/a1cbc340b3782c358a22e18ef62ceb8467597bda.jpg",
      "https://img.cofynd.com/images/original/4532f6aef2b20b0458a389e7e4068575a96f5494.jpg",
      "https://img.cofynd.com/images/original/b92b9e29921fb2122470beca1518a8036f478dd0.jpg",
      "https://img.cofynd.com/images/latest_images_2024/5e7c2d38f46b6af6e226d1149a09751c71320604.webp",
      "https://img.cofynd.com/images/latest_images_2024/e1ff5e1e8db83c6d8759a4f3324f2dafd4abe0af.webp",
      "https://img.cofynd.com/images/latest_images_2024/127de1c7d0f0ba526893604e37bafdbf2a11a897.webp"
    ]
  }
];

export const featuredJaipurOfficeCards = [
  {
    id: 25,
    name: "Red Fox Hotel",
    badge: null,
    rating: null,
    area: "Lalkothi",
    location: "Lalkothi, Jaipur",
    price: "₹17,500",
    period: "/ Month",
    priceFormatted: "₹17,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/9bb288d2be0465f0449f93772ff0a79a91367c7b.jpg",
      "https://img.cofynd.com/images/original/6f0cf500fbb08ea43db25259e170a76bb74a2985.jpg",
      "https://img.cofynd.com/images/original/189e512541b12517980441ab2205c34a702525a5.jpg",
      "https://img.cofynd.com/images/original/8fc2b2053ec46282e5655d2a9d778f6ae663fe39.jpg",
      "https://img.cofynd.com/images/original/7a9500269c44630f795cc38c07a9b9a435f6a5e9.jpg",
      "https://img.cofynd.com/images/original/e011b8a3d5f3fee65fc4cfe6a1085e9936d425d7.jpg"
    ]
  },
  {
    id: 26,
    name: "Taapu Cafe & Cowork",
    badge: null,
    rating: null,
    area: "Gyan Path",
    location: "Gyan Path, Jaipur",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/4315cd66f7562e32382426e56bd7a89aa3bf13fa.jpg",
      "https://img.cofynd.com/images/original/60ff443060109111d324015c373e04e3f5e5eeca.jpg",
      "https://img.cofynd.com/images/original/c9e7734698f19f2127a9b516d9ec86874e843464.jpg",
      "https://img.cofynd.com/images/original/a69cad18dbca96122c5674f3a7ebda6ac7b5888e.jpg",
      "https://img.cofynd.com/images/original/0c1e7f942a0cc68141edb9e98757cc53c4d0f432.jpg"
    ]
  },
  {
    id: 27,
    name: "Urban Excubator",
    badge: null,
    rating: null,
    area: "Tonk Road",
    location: "Tonk Road, Jaipur",
    price: "₹6,999",
    period: "/ Month",
    priceFormatted: "₹6,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/54de7f8fcff0206c47485a8b19c6b43bbd51579c.webp",
      "https://img.cofynd.com/images/latest_images_2024/0eaa5bf12b39324c4054c20dc093293e171689da.webp",
      "https://img.cofynd.com/images/latest_images_2024/b9539184b2600924b55fc8647e84763e1bae1880.webp",
      "https://img.cofynd.com/images/latest_images_2024/16cfe9b2aa46139262430adfffc17b7952e65003.webp",
      "https://img.cofynd.com/images/latest_images_2024/b1cc6f97d3b62dda2b25d0119a8d92553a073c41.webp",
      "https://img.cofynd.com/images/latest_images_2024/091b8e007f07fed6c2fb2c5c33732d21d3e16def.webp"
    ]
  },
  {
    id: 28,
    name: "Invocob Enterprise",
    badge: null,
    rating: null,
    area: "Tagore Nagar",
    location: "Tagore Nagar, Jaipur",
    price: "₹3,999",
    period: "/ Month",
    priceFormatted: "₹3,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/37a739a9c2a04b5301a1549e5566227c9ad3dfde.jpg",
      "https://img.cofynd.com/images/original/71a5d73756fe3b019165002cc4ebc208ac46366e.jpg",
      "https://img.cofynd.com/images/original/bb3b7d11c3a3e3e8d90a837d52f10d4e65794a28.jpg",
      "https://img.cofynd.com/images/latest_images_2024/092b47f4a93608d6f5c628b9724d221d8baecd07.webp",
      "https://img.cofynd.com/images/latest_images_2024/fa068c2407f0ec7fd52beaa792b448de36229e22.webp",
      "https://img.cofynd.com/images/latest_images_2024/2646ffa9d247b3ed226ef9904c4fa70b5f3571c6.webp"
    ]
  },
  {
    id: 29,
    name: "WurkZone",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹4,750",
    period: "/ Month",
    priceFormatted: "₹4,750 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/a9bb8d6cbfdb89842fdc3f1048da4ae6ec567fd6.jpg",
      "https://img.cofynd.com/images/original/08de3c56ce1d354f9d7c645f18eeb0a8fc7eeaa0.jpg",
      "https://img.cofynd.com/images/original/ca4e7defd2ac918f7217348abd1f179416f0e18c.jpg",
      "https://img.cofynd.com/images/original/2bf5a408189484cc43b2848fc0cdd8d5a7729643.jpg",
      "https://img.cofynd.com/images/original/9ed94986000461944aff64cc9aa4b21e6a443a75.jpg",
      "https://img.cofynd.com/images/original/23bc50cfbe02fe9106ee14174bf529525d546710.jpg"
    ]
  },
  {
    id: 30,
    name: "AARNA COWORKING",
    badge: null,
    rating: null,
    area: "Lalkothi",
    location: "Lalkothi, Jaipur",
    price: "₹1,499",
    period: "/ Month",
    priceFormatted: "₹1,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/d95ecb46b2fbb2b8f665229cbde18ca0761c96b1.jpg",
      "https://img.cofynd.com/images/original/3da923c1bf337f5513e4d5ec584c732dbab7c3c4.jpg",
      "https://img.cofynd.com/images/original/4c1dd7816cb02fd3914b078312cc7326c244ddb4.jpg",
      "https://img.cofynd.com/images/original/f5255954df5e7cb64d2e60e47f9185cb434b9a01.jpg",
      "https://img.cofynd.com/images/original/c8eb65476399f3ec36aa7811c9f10997ac60bedc.jpg",
      "https://img.cofynd.com/images/original/9f8dd37ae1efc9a6e7ebcbc7c906f957d621cb13.jpg"
    ]
  },
  {
    id: 31,
    name: "Silo Coworking",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹3,500",
    period: "/ Month",
    priceFormatted: "₹3,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/7965a33427c06764d2ed85fae93081d514cc0884.jpg",
      "https://img.cofynd.com/images/original/d9c862a111bc08a02ac4e365f14a6a01ae2c455b.jpg",
      "https://img.cofynd.com/images/original/711fcf8976d2cc8edecf877a64bc44e528cd378a.jpg",
      "https://img.cofynd.com/images/original/9796b0334a866283c55fd77825b4092932650f78.jpg"
    ]
  },
  {
    id: 32,
    name: "39worklabs",
    badge: null,
    rating: null,
    area: "Lalkothi",
    location: "Lalkothi, Jaipur",
    price: "₹6,500",
    period: "/ Month",
    priceFormatted: "₹6,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/545ec4cb289407a699227f812b17e32e8716a53b.png",
      "https://img.cofynd.com/images/original/f450dedb4006a43bd659b806d484d0ac2ca0d738.png",
      "https://img.cofynd.com/images/original/0c47bd6140d8007246007332b43bdb44048e1629.png",
      "https://img.cofynd.com/images/original/8e95bad4975612a2f10c49de31633a4354b5ea11.png",
      "https://img.cofynd.com/images/original/544ea1a9d39152a74c380ca73448ac614c6e5408.png",
      "https://img.cofynd.com/images/original/8b7a99e10f8c84c10827ef9b948f100540a37bab.png"
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
export const jaipurAreas = jaipurNeighborhoods;
export const jaipurSpaces = jaipurOfficeCards;
export const areas = jaipurNeighborhoods;
export const spaces = jaipurOfficeCards;

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
  totalPages: 3,
  initialPage: 1
};

export const pageTwoJaipurOfficeCards = [
  {
    id: 33,
    name: "PhoebusIn",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹749",
    period: "/ Month",
    priceFormatted: "₹749 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/4b36dcacf3b85f5cbc9768ef9fa4a8d330a8b464.webp",
      "https://img.cofynd.com/images/latest_images_2024/69dbe190603b37735d9b2302b6d8d0b1781c9a3c.webp",
      "https://img.cofynd.com/images/latest_images_2024/c95e74622fb7964990e0265fcc08142d13f87d24.webp",
      "https://img.cofynd.com/images/latest_images_2024/6fc1fae2d2bc524fe89cc8779eeaa8fd27d3b0e9.webp",
      "https://img.cofynd.com/images/latest_images_2024/cc33a01ae5c5d53fab5cac37cfbdf8335d051e41.webp"
    ]
  },
  {
    id: 34,
    name: "Qbicle",
    badge: null,
    rating: null,
    area: "Nirman Nagar",
    location: "Nirman Nagar, Jaipur",
    price: "₹3,999",
    period: "/ Month",
    priceFormatted: "₹3,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/313e9647cb0beb6ebfafb7991f25ed043952ef41.jpg",
      "https://img.cofynd.com/images/original/77bc4a8f0aa738619fc7a8f2e7fe1deaa73b80a8.jpg",
      "https://img.cofynd.com/images/original/06079b9dabeda766219afcf9b213b8bb1bb61b36.jpg",
      "https://img.cofynd.com/images/original/d0f29ac742790dc43350c3b244ccab5f9f146ca0.jpg",
      "https://img.cofynd.com/images/original/30af6a88dfed885e727feb05c4c209c641ac9b1c.jpg"
    ]
  },
  {
    id: 35,
    name: "Professional Co-Working",
    badge: null,
    rating: null,
    area: "Pratap Nagar",
    location: "Pratap Nagar, Jaipur",
    price: "₹4,000",
    period: "/ Month",
    priceFormatted: "₹4,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/12f7e958e760164908053fe347204716bd33b975.webp",
      "https://img.cofynd.com/images/latest_images_2024/31ce95063cfa3b8c3c99fdd0a592377221af3794.webp",
      "https://img.cofynd.com/images/latest_images_2024/a10675d30749beb14c60e914e2359772a1b478b5.webp",
      "https://img.cofynd.com/images/latest_images_2024/ce2ea49fe2d9689eca6ea4c2d27a74b3b38e21d0.webp",
      "https://img.cofynd.com/images/latest_images_2024/c8960b3284566ea2e89f1a5f490bf3b7c03acd31.webp"
    ]
  },
  {
    id: 36,
    name: "vera",
    badge: null,
    rating: null,
    area: "Tonk Road",
    location: "Tonk Road, Jaipur",
    price: "₹5,100",
    period: "/ Month",
    priceFormatted: "₹5,100 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/44b224988c3663c37ac6cbb23621383ba48e36a6.webp",
      "https://img.cofynd.com/images/latest_images_2024/f3cdb4acf2ac6d94c6ca2586972237e513289d79.webp",
      "https://img.cofynd.com/images/latest_images_2024/9aad2bf895dfa614940822c4505af38a7b7cdd29.webp",
      "https://img.cofynd.com/images/latest_images_2024/a4f73bf363c678b81b5a8a8c27dbed2109159b85.webp",
      "https://img.cofynd.com/images/latest_images_2024/efb58540ddab08b49ea738d611a883079f520bb5.webp",
      "https://img.cofynd.com/images/latest_images_2024/414ec13762f9847c324075a1f4999479b81606b7.webp"
    ]
  },
  {
    id: 37,
    name: "HackaHolic Co-Work",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹3,000",
    period: "/ Month",
    priceFormatted: "₹3,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/7f26034e0111385c483ac105d777d6dd5650a772.webp",
      "https://img.cofynd.com/images/latest_images_2024/37c2da53f1c89d87d2ed2e8a69235e2f4ae21c54.webp",
      "https://img.cofynd.com/images/latest_images_2024/936eff01c78ebce2444d2ee8c8182b9d01678457.webp",
      "https://img.cofynd.com/images/latest_images_2024/0d6f41f5fa973ba49e5533ab8bd23a01d26867c7.webp",
      "https://img.cofynd.com/images/latest_images_2024/9e61e7ee8b7456adcf88a2e4570eca1de279041e.webp",
      "https://img.cofynd.com/images/latest_images_2024/ac8963897edecb98a18e432cbbb74a107c15be82.webp"
    ]
  },
  {
    id: 38,
    name: "RAW Coworking and Office Space",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/ba4aca7b4e9a67f3f925995cbfb228c0a03a79fa.webp",
      "https://img.cofynd.com/images/latest_images_2024/897a5dbb8d33a892f908a67bde1ba7902ea6b6a7.webp",
      "https://img.cofynd.com/images/latest_images_2024/ce57c54f45138e6dfaec87c36d4a9d55e9ac1076.webp",
      "https://img.cofynd.com/images/latest_images_2024/7556ac3eb6ff678011f4f9f0ff95ecaa3aeb899e.webp",
      "https://img.cofynd.com/images/latest_images_2024/7f5713518ed89f6c23c82b1a2a65feee034707e2.webp",
      "https://img.cofynd.com/images/latest_images_2024/d3e89874659413521318471441c2dba300a0d947.webp"
    ]
  },
  {
    id: 39,
    name: "Shree Ram Enterprise",
    badge: null,
    rating: null,
    area: "Gandhi Path",
    location: "Gandhi Path, Jaipur",
    price: "₹2,000",
    period: "/ Month",
    priceFormatted: "₹2,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/9b83628b736adffc2da1bfd245b3ead964634174.webp",
      "https://img.cofynd.com/images/latest_images_2024/4266471a4ac538a9c5f5282d77c269b11a4970d2.webp",
      "https://img.cofynd.com/images/latest_images_2024/3d27f5b2711d241e7fa09f36bddcdf864162293c.webp",
      "https://img.cofynd.com/images/latest_images_2024/bd375c5a6a128081c98695dab43a3d681679184e.webp",
      "https://img.cofynd.com/images/latest_images_2024/79da58ee0d21735924b3391d96d8cdbce125cfb9.webp",
      "https://img.cofynd.com/images/latest_images_2024/96b1682ec4fade182728f3c814f2167199986a86.webp"
    ]
  },
  {
    id: 40,
    name: "Finesse",
    badge: null,
    rating: null,
    area: "Malviya Nagar",
    location: "Malviya Nagar, Jaipur",
    price: "₹7,000",
    period: "/ Month",
    priceFormatted: "₹7,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/4f5a22313c902bfa95765cf2216626f2c971117d.webp",
      "https://img.cofynd.com/images/latest_images_2024/3b27913b93cc7a7820a9673fa945ea4cecec7d24.webp",
      "https://img.cofynd.com/images/latest_images_2024/6999ad024aac6adf25142c28a038901e51c5a9b4.webp",
      "https://img.cofynd.com/images/latest_images_2024/768c4b4fc5565b95d03a40a95867cdcf9a6987c5.webp",
      "https://img.cofynd.com/images/latest_images_2024/e71e3447d0b100aa40c5947d456a61a4e427f5b2.webp",
      "https://img.cofynd.com/images/latest_images_2024/aa21fbfa22c6477c531bb564d8f949cf735f9375.webp"
    ]
  }
];

export const pageTwoMoreJaipurOfficeCards = [
  {
    id: 41,
    name: "Workhauz Co-Working Space",
    badge: null,
    rating: null,
    area: "Malviya Nagar",
    location: "Malviya Nagar, Jaipur",
    price: "₹2,499",
    period: "/ Month",
    priceFormatted: "₹2,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/b71acf466e8e42969bc14cfc8dd418246f530ae4.webp",
      "https://img.cofynd.com/images/latest_images_2024/569bd7ca96ebf1ed666cc8672c92b1e9327d2adc.webp",
      "https://img.cofynd.com/images/latest_images_2024/7d681bc1c46d502ef94f604ec89bea63f417771f.webp",
      "https://img.cofynd.com/images/latest_images_2024/8d6c70ff90a5251bb4f4f9b53635000cd5fe8620.webp",
      "https://img.cofynd.com/images/latest_images_2024/ed3352bae14bda6e3b98c3213e95586763bc08e5.webp",
      "https://img.cofynd.com/images/latest_images_2024/64ade1bfc548d00cbf724e17e9ddd3defa4fb156.webp"
    ]
  },
  {
    id: 42,
    name: "Praavi Co Work Spaces",
    badge: null,
    rating: null,
    area: "Jagatpura",
    location: "Jagatpura, Jaipur",
    price: "₹7,499",
    period: "/ Month",
    priceFormatted: "₹7,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/5f380ab471095dbd33387db5f9ca97a5109a0e49.webp",
      "https://img.cofynd.com/images/latest_images_2024/ba1789d72c05a345e2418ee11a38d374402c8a46.webp",
      "https://img.cofynd.com/images/latest_images_2024/b663a84261940552a5b441519d123d081b5a642d.webp",
      "https://img.cofynd.com/images/latest_images_2024/f1f7a01ed94aead7d5649eb940a001660b67a355.webp",
      "https://img.cofynd.com/images/latest_images_2024/7978e3b7df9b1fd8230b41e650b0dd05461a8fd8.webp",
      "https://img.cofynd.com/images/latest_images_2024/272fccc0d6ea79fb8139abd19b2594fb07561290.webp"
    ]
  },
  {
    id: 43,
    name: "WorkSpace Coworking",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹2,819",
    period: "/ Month",
    priceFormatted: "₹2,819 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/81831268fad1db2c393f01b9cf126ce6041928c6.webp",
      "https://img.cofynd.com/images/latest_images_2024/e3377b319813b7c6be13bfc56fbb323f9ebc80cd.webp",
      "https://img.cofynd.com/images/latest_images_2024/5b2c433e0a04353de7e40321d2c08fde2bff4692.webp",
      "https://img.cofynd.com/images/latest_images_2024/1a53b23e556898c12877f8601d0658b8ecd82244.webp",
      "https://img.cofynd.com/images/latest_images_2024/bd29648ef1f02a6cf987549e4a53699e08d3d2ae.webp",
      "https://img.cofynd.com/images/latest_images_2024/8fff7fa9474a77fa0eea289a9d9c323b3d3a9c83.webp"
    ]
  },
  {
    id: 44,
    name: "Sigma Cowork",
    badge: null,
    rating: null,
    area: "Jhotwara",
    location: "Jhotwara, Jaipur",
    price: "₹2,900",
    period: "/ Month",
    priceFormatted: "₹2,900 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/462375c3bbdf855c147543e421fb96dd272a0ab2.webp",
      "https://img.cofynd.com/images/latest_images_2024/5df04a0009c01d240ce7b169a624b4a9f59c2e1e.webp",
      "https://img.cofynd.com/images/latest_images_2024/e1e915f4ce7fbc3e683c65ed26c5ad9d17987a40.webp",
      "https://img.cofynd.com/images/latest_images_2024/5218883c74691e5da5812fc2752f6d21e2503de4.webp",
      "https://img.cofynd.com/images/latest_images_2024/8de6000b090c5d3ac1a941ead2a89bca66c456c0.webp",
      "https://img.cofynd.com/images/latest_images_2024/6f33efcb207880b58f4d5753d7203f0cb08e6c16.webp"
    ]
  },
  {
    id: 45,
    name: "MDM Fire Services",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹40,000",
    period: "/ Month",
    priceFormatted: "₹40,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/793bf04e0e6e6711a5791548e6a59fda336cd9c3.webp",
      "https://img.cofynd.com/images/latest_images_2024/013d7d910a1633c0c5e27c19da0568d861d5d98a.webp",
      "https://img.cofynd.com/images/latest_images_2024/0662a49b203c1175d7721b1360020340e2209f66.webp",
      "https://img.cofynd.com/images/latest_images_2024/285c2cf163bf21ddb3e19f61b26853ca82a02194.webp"
    ]
  },
  {
    id: 46,
    name: "7P WorkSpaces",
    badge: null,
    rating: null,
    area: "Malviya Nagar",
    location: "Malviya Nagar, Jaipur",
    price: "₹6,499",
    period: "/ Month",
    priceFormatted: "₹6,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/58482d7abf1717283dab08f3e6495a8912132330.jpg",
      "https://img.cofynd.com/images/original/75ae49c665c207493d4f58de56d584b658b4b4ea.jpg",
      "https://img.cofynd.com/images/original/0ab26e1ed3bfdc6117c9783de7dc1ec6c3b57e63.jpg",
      "https://img.cofynd.com/images/original/89613f8e903e2641d0e15df03ee8545038abe4c2.jpg",
      "https://img.cofynd.com/images/original/39a958f9310f45c83c3c5e63eb7b90992bbaf24e.jpg",
      "https://img.cofynd.com/images/original/bf0c2b337c364fc2cf997a3696e82c32858fe716.jpg"
    ]
  },
  {
    id: 47,
    name: "Workhauz Co-Working",
    badge: null,
    rating: null,
    area: "C-Scheme",
    location: "C-Scheme, Jaipur",
    price: "₹2,499",
    period: "/ Month",
    priceFormatted: "₹2,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/b361d99078c3c070734f36da301f98d2a2442ac7.webp",
      "https://img.cofynd.com/images/latest_images_2024/94c319ac2cd33f50ea7e31bc89d15e18872d6945.webp",
      "https://img.cofynd.com/images/latest_images_2024/8cbffcf82ff327802e7afce5412745dac1771d26.webp",
      "https://img.cofynd.com/images/latest_images_2024/6d63db4bc8bdd8bad784158a80be7e07f923a78b.webp",
      "https://img.cofynd.com/images/latest_images_2024/15310a214f82711651f4cd2fd8fa58d2a29b13e5.webp",
      "https://img.cofynd.com/images/latest_images_2024/e7fa134c3f3e999ba70a2837517b48d6808b5a02.webp"
    ]
  },
  {
    id: 48,
    name: "Vara Coworking",
    badge: null,
    rating: null,
    area: "Malviya Nagar",
    location: "Malviya Nagar, Jaipur",
    price: "₹8,000",
    period: "/ Month",
    priceFormatted: "₹8,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/b4d1227904bc6c2d3789e8d7adcf9d52c8ae725f.jpg",
      "https://img.cofynd.com/images/original/c12e522383f0867b6f650654b1e3811725b9740d.jpg",
      "https://img.cofynd.com/images/original/895611ada6ff7eb022153e3ede50a585666cc9f7.jpg",
      "https://img.cofynd.com/images/original/79a1cabf0144bc4717d480a080605974a66e9c45.jpg",
      "https://img.cofynd.com/images/original/ab6f2bbc4cba034795c731d3bf37afb280627ec9.jpg",
      "https://img.cofynd.com/images/original/3924cb43fdbdf6812ff972dc11a282ade5ff681c.jpg"
    ]
  }
];

export const pageTwoFinalJaipurOfficeCards = [
  {
    id: 49,
    name: "VPM Coworking",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹3,499",
    period: "/ Month",
    priceFormatted: "₹3,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/108eca8cfceae2e1c6dab4238b7bc4397c927909.webp",
      "https://img.cofynd.com/images/latest_images_2024/7833ab4999f67165fe5a11326782c18aea7991ee.webp",
      "https://img.cofynd.com/images/latest_images_2024/36c70ec2110413f2fc508353cf7a0a36d4c931fd.webp",
      "https://img.cofynd.com/images/latest_images_2024/edb96130316f08f20e0098cba2f2dd2c44c29f49.webp",
      "https://img.cofynd.com/images/latest_images_2024/09738711b9a6d26786e2b5c1de8218fe1c8e0335.webp",
      "https://img.cofynd.com/images/latest_images_2024/1ffd5571bce6c780a97e72dcdc64f86ffc53a0c8.webp"
    ]
  },
  {
    id: 50,
    name: "Invocob 2.0 Coworking",
    badge: null,
    rating: null,
    area: "Triveni Nagar",
    location: "Triveni Nagar, Jaipur",
    price: "₹3,000",
    period: "/ Month",
    priceFormatted: "₹3,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/29c58ef73a704585f24c634463248f1cfba5830e.webp",
      "https://img.cofynd.com/images/latest_images_2024/36bc5ac0a24cbf22a34f9a3b8364221ce8fa60f3.webp",
      "https://img.cofynd.com/images/latest_images_2024/9635df6206dcd8392e3423cba50e851158e89c66.webp",
      "https://img.cofynd.com/images/latest_images_2024/47869453c6a757ead3d85cd8e7869a3600ecd4df.webp"
    ]
  },
  {
    id: 51,
    name: "Cubicle Crushers",
    badge: null,
    rating: null,
    area: "Raja Park",
    location: "Raja Park, Jaipur",
    price: "₹4,500",
    period: "/ Month",
    priceFormatted: "₹4,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/dc6d874f23596e6c9af7126dd88a709e3f7ceda9.jpg",
      "https://img.cofynd.com/images/original/983e62a30b6901a617cc30de57c20116d770f7d5.jpg",
      "https://img.cofynd.com/images/original/06c3fa7c2cacf7771c08df33dac0d868695a3371.jpg",
      "https://img.cofynd.com/images/original/2a3ead4f906aff06aa3b914c3bae8259062bf810.jpg",
      "https://img.cofynd.com/images/original/1718e3632008bd6d003e0b7b7863578ac0d0f8d0.jpg"
    ]
  },
  {
    id: 52,
    name: "ShareSpace",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/0971b4ef367e3deda2d4041b0cf4feb4ecce55d6.webp",
      "https://img.cofynd.com/images/latest_images_2024/b91a26971ebcb39dc6faf87cd3c38de4c935d652.webp",
      "https://img.cofynd.com/images/latest_images_2024/54983e3ccb6dbefdf6ea4bd6c8fdfa9d04077b40.webp",
      "https://img.cofynd.com/images/latest_images_2024/80a4e3d1be555f1f1b6945afa6c22b38e5c3100c.webp"
    ]
  },
  {
    id: 53,
    name: "Cowocoli",
    badge: null,
    rating: null,
    area: "Tonk Road",
    location: "Tonk Road, Jaipur",
    price: "₹6,999",
    period: "/ Month",
    priceFormatted: "₹6,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/217cc14907156c0f8adc1e0460c1a8d57e54bd2d.webp",
      "https://img.cofynd.com/images/latest_images_2024/b14a7bab5aaa60f2977b1bfc57721c4bf2cd742e.webp",
      "https://img.cofynd.com/images/latest_images_2024/26c342c5196198facf2f07be0ef45dc75894f00e.webp",
      "https://img.cofynd.com/images/latest_images_2024/46a17f02e8e3feca0b77145b43f52cf0cce15558.webp",
      "https://img.cofynd.com/images/latest_images_2024/1d775454b1cab1a3e88c0a24771f3f3976af9b77.webp"
    ]
  },
  {
    id: 54,
    name: "Mr Cowork",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹7,999",
    period: "/ Month",
    priceFormatted: "₹7,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/d83b1d99e7dad3f4651f1a6622f1b23177876543.webp",
      "https://img.cofynd.com/images/latest_images_2024/f63a77a683e388d46a4cd4786defc4ebc724c05b.webp",
      "https://img.cofynd.com/images/latest_images_2024/36c3f96036106b68fcdb70c91a15402f80dd8ca0.webp",
      "https://img.cofynd.com/images/latest_images_2024/e03a9af9a3476b2161dea6b7ab8119920b2766cb.webp",
      "https://img.cofynd.com/images/latest_images_2024/3ad1a18331638c35799cf46473a1303e3d0dc499.webp"
    ]
  },
  {
    id: 55,
    name: "Workhauz",
    badge: null,
    rating: null,
    area: "Malviya Nagar",
    location: "Malviya Nagar, Jaipur",
    price: "₹2,499",
    period: "/ Month",
    priceFormatted: "₹2,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/add47aab59d546c57bf03bba532421b545224021.webp",
      "https://img.cofynd.com/images/latest_images_2024/1554f84d76ad601dcaee94683cb1589d4cee0ebc.webp",
      "https://img.cofynd.com/images/latest_images_2024/0e80c40adc7aa5a5eb6f8494705dbc3e3a96a5a2.webp",
      "https://img.cofynd.com/images/latest_images_2024/06bd9fc455d624292319d3e1e5bb2f2c05a067c0.webp",
      "https://img.cofynd.com/images/latest_images_2024/634bd9d1acc60bcbb896a4a07e46d17bb0ee41f7.webp"
    ]
  },
  {
    id: 56,
    name: "B Coworking space",
    badge: null,
    rating: null,
    area: "DCM",
    location: "DCM, Jaipur",
    price: "₹7,000",
    period: "/ Month",
    priceFormatted: "₹7,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/cdc0844a14b4025290128715658d5b49e36b0fca.jpg",
      "https://img.cofynd.com/images/original/b1ea3175d82f87a045d27317bbc53956bbc17bce.jpg",
      "https://img.cofynd.com/images/original/cc0454d640d8db5f5213a029537f33cd1c9dbbb4.jpg",
      "https://img.cofynd.com/images/original/17762c114092a0fd737d9702473d331203d51500.jpg",
      "https://img.cofynd.com/images/original/01419bbbaadc5ede31cebdfabc95f8fcc7918ea1.jpg"
    ]
  }
];

export const pageTwoFeaturedJaipurOfficeCards = [
  {
    id: 57,
    name: "Creware Coworks",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/440afe5c9b54856f8fbf0379e053aa15d5a7e3a3.webp",
      "https://img.cofynd.com/images/latest_images_2024/1a60a301ccaf94e6438eaef2f55088c33d40451a.webp",
      "https://img.cofynd.com/images/latest_images_2024/e0faa11ab5ca7463499ebb47ebff0a82271f969d.webp",
      "https://img.cofynd.com/images/latest_images_2024/d70d7f90bce5bf18d954016e03ddd119c8e01804.webp",
      "https://img.cofynd.com/images/latest_images_2024/6751255715469685050e184e649bcfada8250efd.webp",
      "https://img.cofynd.com/images/latest_images_2024/0931cd3d2b71b83b1d1dbfb677eced41b871ab89.webp"
    ]
  },
  {
    id: 58,
    name: "The coworker",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/a219fe74b150e682809543707dc8523c33be56c1.jpg",
      "https://img.cofynd.com/images/original/a5ab4bfe51e0e5b5531c4c3c4732dea2c4bc360e.jpg",
      "https://img.cofynd.com/images/original/5cbdbd9fa9fa5821081f56080a0843766ac6957c.jpg",
      "https://img.cofynd.com/images/original/7a08dce4d1cc69dcf7b1b46cb04600df472401bd.jpg",
      "https://img.cofynd.com/images/original/3bef5e8df756759e5cbb44558facdd530ee44907.jpg"
    ]
  },
  {
    id: 59,
    name: "Plot No 60",
    badge: null,
    rating: null,
    area: "Bani Park",
    location: "Bani Park, Jaipur",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/9ff84c32405186e7ce8f359de3a178ce4aacc538.jpg",
      "https://img.cofynd.com/images/original/7a1e0772af7b05533fcf8329cd4d8a1cc26ebca7.jpg",
      "https://img.cofynd.com/images/original/9c3e2dfaa32e21e8846e25c16cc558e695f7eed0.jpg",
      "https://img.cofynd.com/images/original/3214cb896ad704419376d4bb7c9a9f2bb0747194.png",
      "https://img.cofynd.com/images/original/176218af6383b34b957c24b56d2ccca506309154.png"
    ]
  },
  {
    id: 60,
    name: "Smartworks",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹9,000",
    period: "/ Month",
    priceFormatted: "₹9,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/566f261e9f7614da46bac676ae1f0a0abd943c2c.webp",
      "https://img.cofynd.com/images/latest_images_2024/3b5c9238105caacf3de39e7159e9db93bd915e37.webp",
      "https://img.cofynd.com/images/latest_images_2024/f3184742fdc8ed2829246c47917084fc2486728e.webp",
      "https://img.cofynd.com/images/latest_images_2024/a99e39019982e36617024ecee405a890edd0839c.webp",
      "https://img.cofynd.com/images/latest_images_2024/9ce0596b670ad505df162819eb782b5252b093bb.webp"
    ]
  },
  {
    id: 61,
    name: "Suits Workspace",
    badge: null,
    rating: null,
    area: "C-Scheme",
    location: "C-Scheme, Jaipur",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/98b39366a15711910e5f3d75aada14bb929cee5d.webp",
      "https://img.cofynd.com/images/latest_images_2024/1b4cd27834ad1534ad4c892d0f88ec18ddb58ff0.webp",
      "https://img.cofynd.com/images/latest_images_2024/845e754e5198b0a5bdc46212c9e547634ada79d1.webp",
      "https://img.cofynd.com/images/latest_images_2024/31102b02f1e57afaa197ea1977f50c1b2b086ef3.webp",
      "https://img.cofynd.com/images/latest_images_2024/d4c217b0a7bccccda4499d451815fd56a07a47d4.webp",
      "https://img.cofynd.com/images/latest_images_2024/5d39cf923d33196223512d3fbc63489ac866cb45.webp"
    ]
  },
  {
    id: 62,
    name: "23rd Avenue",
    badge: null,
    rating: null,
    area: "Tonk Road",
    location: "Tonk Road, Jaipur",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/9fc514d3342a3bd3e84582fdf1f3b28bc3880a94.webp",
      "https://img.cofynd.com/images/latest_images_2024/1bfb0796a1e34209f451c6b88cb83e6ecea58dbe.webp",
      "https://img.cofynd.com/images/latest_images_2024/90ef7a8b89bf796181d72410b705ee5f4d1bf07b.webp",
      "https://img.cofynd.com/images/latest_images_2024/0847fa9c130e03bdcad5823087d9434249698f23.webp",
      "https://img.cofynd.com/images/latest_images_2024/5059165c796456225492448e7531a92b9ab2d5c8.webp"
    ]
  },
  {
    id: 63,
    name: "Bloom Co-work",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹4,999",
    period: "/ Month",
    priceFormatted: "₹4,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/bc40e4c21d2f5a5594cdc0deb3666d3a50daf863.webp",
      "https://img.cofynd.com/images/latest_images_2024/46383ffec9a96e38509efa7bfc19796dd3e2007b.webp",
      "https://img.cofynd.com/images/latest_images_2024/b9f9265c9d705feb2b40b5f2d0c3ed566f486843.webp",
      "https://img.cofynd.com/images/latest_images_2024/86ce2fbe8129ea4cd12937bae3bdaa076690011b.webp",
      "https://img.cofynd.com/images/latest_images_2024/524faa6736782d14bbcc1ccfec4917f9d1744de9.webp",
      "https://img.cofynd.com/images/latest_images_2024/39593428648f215f7b5e4e4080e784bea9f15e8d.webp"
    ]
  },
  {
    id: 64,
    name: "The Hustle Deck",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹6,999",
    period: "/ Month",
    priceFormatted: "₹6,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/ba02d6757e67de6f38761c135f7ebdd3f515159c.webp",
      "https://img.cofynd.com/images/latest_images_2024/5c5fb55d4d6e3bacbc2dbde5c092cfe4349bb8e7.webp",
      "https://img.cofynd.com/images/latest_images_2024/33ed29c22beb4219dc27f818b8304952de91075e.webp",
      "https://img.cofynd.com/images/latest_images_2024/8de6bea6fbaeb4864f589f1a9f5f2954910beb5a.webp",
      "https://img.cofynd.com/images/latest_images_2024/d735973efdfea67926232c1b377fb96d0bb6383e.webp",
      "https://img.cofynd.com/images/latest_images_2024/d05dfe94a325b2269d56e9e14345613ce1f7136d.webp"
    ]
  }
];

export const pageThreeJaipurOfficeCards = [
  {
    id: 65,
    name: "Coworking Town",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹6,999",
    period: "/ Month",
    priceFormatted: "₹6,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/aca95af8bd2c0b2d9cfa10a98e3e937887fea74c.webp",
      "https://img.cofynd.com/images/latest_images_2024/71463f15f66d02caab418b93a7b3d4c879a9879d.webp",
      "https://img.cofynd.com/images/latest_images_2024/63da9bf325227f35f656a5ffcdc83c33ed63fb81.webp",
      "https://img.cofynd.com/images/latest_images_2024/b694b18a726c3655d132c9d62cf4c3a522459aae.webp",
      "https://img.cofynd.com/images/latest_images_2024/c22ddbe31e5584f2070dee231c0b5cc2bbbf9401.webp",
      "https://img.cofynd.com/images/latest_images_2024/1ec06d83042200094c9da3d7c76a8e09c9cda946.webp"
    ]
  },
  {
    id: 66,
    name: "Worktine",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹4,999",
    period: "/ Month",
    priceFormatted: "₹4,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/09751715a6d2cb3de0f48365dd9aa1fbcd1fe2c2.webp",
      "https://img.cofynd.com/images/latest_images_2024/9fd318b8a5570afc439385a04b5d98b0b700962b.webp",
      "https://img.cofynd.com/images/latest_images_2024/7afd552b6d39faa982a1bade0d40f1a0dbb76e9b.webp",
      "https://img.cofynd.com/images/latest_images_2024/3e909755d83cc32a0f662dd3ef34b979c18c3f54.webp",
      "https://img.cofynd.com/images/latest_images_2024/e4a6e7fdd9fca5f783972fd2094bbabe7c961977.webp",
      "https://img.cofynd.com/images/latest_images_2024/acc14b871b1dc2df074c76174ea3770d3f40f9b2.webp"
    ]
  },
  {
    id: 67,
    name: "Celebso Startup Valley",
    badge: null,
    rating: null,
    area: "Lalkothi",
    location: "Lalkothi, Jaipur",
    price: "₹6,999",
    period: "/ Month",
    priceFormatted: "₹6,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/01f90e16d7b81c8cf3efb729e2687137ecdf6cf2.webp",
      "https://img.cofynd.com/images/latest_images_2024/1527193686015f1a42aa4fe5a2a022a78e126e36.webp",
      "https://img.cofynd.com/images/latest_images_2024/b4a6c2fa1bbeb4abb76f3b19fac50469f1483661.webp",
      "https://img.cofynd.com/images/latest_images_2024/55bb1b54eb55fab36f4974159c0c8aa804355798.webp",
      "https://img.cofynd.com/images/latest_images_2024/6641013b9515dd6668100412c2bd894fa732c5bf.webp",
      "https://img.cofynd.com/images/latest_images_2024/d53f93a996ba82815cfcec23368761d7d6a71bd4.webp"
    ]
  },
  {
    id: 68,
    name: "The Hustle Deck",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹6,999",
    period: "/ Month",
    priceFormatted: "₹6,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/b3b107190a72898ac582307b1e1bee6800c7ff76.webp",
      "https://img.cofynd.com/images/latest_images_2024/3e8c2a87033b1230114906e254d563160a32c482.webp",
      "https://img.cofynd.com/images/latest_images_2024/49f442e74e68e14fac7d5cf572608ddac4b8ca6f.webp",
      "https://img.cofynd.com/images/latest_images_2024/4028cc4f32e863dce7dee4582e8bb73822826c30.webp",
      "https://img.cofynd.com/images/latest_images_2024/f83a5fb406fb5ca1312da234ed5146a81b83f99a.webp",
      "https://img.cofynd.com/images/latest_images_2024/3fcf92e5e8afe124182cc7ccbc770831f5af8a27.webp"
    ]
  }
];

export const pageThreeMoreJaipurOfficeCards = [
  {
    id: 69,
    name: "J Startup House",
    badge: null,
    rating: null,
    area: "Lalkothi",
    location: "Lalkothi, Jaipur",
    price: "₹4,999",
    period: "/ Month",
    priceFormatted: "₹4,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/95048503f86c794e861ba1117960de3a0288ee85.webp",
      "https://img.cofynd.com/images/latest_images_2024/13328e5026b8c9db61141d8d0bd579ddc7c11171.webp",
      "https://img.cofynd.com/images/latest_images_2024/cfe2fcd5e2eb8aada66d92a5711cc735e04e5152.webp",
      "https://img.cofynd.com/images/latest_images_2024/a6c90a8b61732a2174aa66cc5d00d6cae6f14b16.webp",
      "https://img.cofynd.com/images/latest_images_2024/7946582a1ab6646657ea1eaad3fd19e816890409.webp",
      "https://img.cofynd.com/images/latest_images_2024/f7dd5149eb17f2d90c23a94394611d41844067db.webp"
    ]
  },
  {
    id: 70,
    name: "Jeev Business Solutions",
    badge: null,
    rating: null,
    area: "Tonk Road",
    location: "Tonk Road, Jaipur",
    price: "₹4,999",
    period: "/ Month",
    priceFormatted: "₹4,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/c5e91ff16bc13ac92ecb58b8988e5bb37a2365d9.webp",
      "https://img.cofynd.com/images/latest_images_2024/9f42580a0803711e8c1db531612bc69c1e45249a.webp",
      "https://img.cofynd.com/images/latest_images_2024/c48075e27ad149343c37af5c41b011f714b9ce9d.webp",
      "https://img.cofynd.com/images/latest_images_2024/1131282e576cf591cce54603555fbf81f4d7cc98.webp",
      "https://img.cofynd.com/images/latest_images_2024/c63d14d0713a59dcd6207f373dc5d49d7b868b01.webp",
      "https://img.cofynd.com/images/latest_images_2024/f6f38f5290aaf722ab4b32c520c6cad80b4d0e90.webp"
    ]
  },
  {
    id: 71,
    name: "HUBIN",
    badge: null,
    rating: null,
    area: "Malviya Nagar",
    location: "Malviya Nagar, Jaipur",
    price: "₹4,999",
    period: "/ Month",
    priceFormatted: "₹4,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/471268f98c2cbf6afa89b8b0373adea405948f59.webp",
      "https://img.cofynd.com/images/latest_images_2024/602fc7e29a60fef63224358a95c3aba6a4e619b7.webp",
      "https://img.cofynd.com/images/latest_images_2024/edaffbc35f4583d6b4e1af3735739853318a438f.webp",
      "https://img.cofynd.com/images/latest_images_2024/1a46c83bbe958cfb181bc3fa342469173d8e9f4b.webp"
    ]
  },
  {
    id: 72,
    name: "Pratham Karyalaya",
    badge: null,
    rating: null,
    area: "Shyam Nagar",
    location: "Shyam Nagar, Jaipur",
    price: "₹5,499",
    period: "/ Month",
    priceFormatted: "₹5,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/d9838b1e0ae484e84639ea985e979c38e426b976.webp",
      "https://img.cofynd.com/images/latest_images_2024/43c234f37b952853fc3bc9f622db546dfe0d9d9e.webp",
      "https://img.cofynd.com/images/latest_images_2024/3a128b49bb409d79726770296ce156e1523ad452.webp",
      "https://img.cofynd.com/images/latest_images_2024/4accbc1ec51fc93b9dd818380a744cea0bb9f49a.webp"
    ]
  }
];

export const pageThreeFinalJaipurOfficeCards = [
  {
    id: 73,
    name: "CoWork'In",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹5,999",
    period: "/ Month",
    priceFormatted: "₹5,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/429929ef18c614771ef7dcc59c8d206b2baff2c2.webp",
      "https://img.cofynd.com/images/latest_images_2024/5f22e3850a341c1b30db327443c29cc25a12cfda.webp",
      "https://img.cofynd.com/images/latest_images_2024/e2ade50c82aa761c55293a6488fb355a8e2fe7a9.webp",
      "https://img.cofynd.com/images/latest_images_2024/9ecd355529ad60a49099bf6d2ed510853802b9ef.webp",
      "https://img.cofynd.com/images/latest_images_2024/a5a3d1f02f418177621fbe11eae082060d028986.webp"
    ]
  },
  {
    id: 74,
    name: "Hobnob Coworks",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹5,000",
    period: "/ Month",
    priceFormatted: "₹5,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/14ee34cab8bfa55b6414f74f01cf5474a936e09f.webp",
      "https://img.cofynd.com/images/latest_images_2024/7f9fe963ae8faf9e442e2cc199a1dc80eae74ac8.webp",
      "https://img.cofynd.com/images/latest_images_2024/9d492c0a6ab3d0d44f33248876f4db676975f6a7.webp",
      "https://img.cofynd.com/images/latest_images_2024/f47bd771e488f828db901020d94ee23dcfd77a05.webp",
      "https://img.cofynd.com/images/latest_images_2024/246617b57ac4e96d36cdfe74af8a1afda07f8cac.webp",
      "https://img.cofynd.com/images/latest_images_2024/dc1d9cc041b1274a9295653536f2cc4377f2b4c6.webp"
    ]
  },
  {
    id: 75,
    name: "Workinova Coworking Space",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹5,499",
    period: "/ Month",
    priceFormatted: "₹5,499 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/702338541028edc57b130bda44a86860c2d17d1b.webp",
      "https://img.cofynd.com/images/latest_images_2024/80067010cfae77cfbefbfc17be2c2851bca41b1e.webp",
      "https://img.cofynd.com/images/latest_images_2024/90d88b0b5a95796f423e2acc253ac6aa6da27373.webp",
      "https://img.cofynd.com/images/latest_images_2024/a662cd6b93c327f40c21b3c04d1b0a37a61c7999.webp",
      "https://img.cofynd.com/images/latest_images_2024/a81c9362bf30550409fcd8e5ceeb2dafb4df29f9.webp"
    ]
  },
  {
    id: 76,
    name: "K Coworking",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹3,500",
    period: "/ Month",
    priceFormatted: "₹3,500 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/f7802c4c05a4615f5dca2ef62eb3abf2b9dd0498.webp",
      "https://img.cofynd.com/images/latest_images_2024/1a242062041193f13905d26b282a4ffb1ff6c9dd.webp",
      "https://img.cofynd.com/images/latest_images_2024/7e62882b21760a885b454596e0433a035365992c.webp",
      "https://img.cofynd.com/images/latest_images_2024/6dff51e753dc62bcf667660f75ea8b67cb5877bd.webp",
      "https://img.cofynd.com/images/latest_images_2024/b8941d85cb26cbdc00df15b3e3d7017316a512cd.webp",
      "https://img.cofynd.com/images/latest_images_2024/ee8e14cf0a86bbccc60c15ff4157ef48b178e69b.webp"
    ]
  }
];

export const pageThreeFeaturedJaipurOfficeCards = [
  {
    id: 77,
    name: "Cubice",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹6,999",
    period: "/ Month",
    priceFormatted: "₹6,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/1591c165ee561ab4e617dd6413e282d0218404b9.webp",
      "https://img.cofynd.com/images/latest_images_2024/b75fda940142358473355130cc42ef336c490fb0.webp",
      "https://img.cofynd.com/images/latest_images_2024/d4aeec19b990df08fc46335fb99b84af03101654.webp",
      "https://img.cofynd.com/images/latest_images_2024/f8584c6c38e93b0f22efbc53578f506db7d11973.webp",
      "https://img.cofynd.com/images/latest_images_2024/48c7251295790b766686881bed372dbe05df0765.webp"
    ]
  }
];

export const pageFourJaipurOfficeCards = [];

// NOTE: These cards are ONLY shown when a specific area filter button is clicked.
// They are real nearby Jaipur coworking listings (true area/location kept) added to the selected area.
export const areaExtraOfficeCards = {
  "Vaishali Nagar": [
    {
      id: 102,
      name: "Hashtag",
      badge: null,
      rating: null,
      area: "Vaishali Nagar",
      location: "Vaishali Nagar, Jaipur",
      price: "₹5,800",
      period: "/ Month",
      priceFormatted: "₹5,800 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/original/cd2e5b1125d30c5bd945872f420a425b20a7e778.jpg",
        "https://img.cofynd.com/images/original/4dce17ec6e7ca27bc99b0eb0116cbd542ea9c90e.jpg",
        "https://img.cofynd.com/images/original/756a5bfef20209755ed9b8185ecc8d11cbd3b348.jpg",
        "https://img.cofynd.com/images/original/92c4e106a9699fd16df7562dbf6a2df5b95cdefc.jpg",
        "https://img.cofynd.com/images/original/223603a6cc5c4bb4665ca4d8a3d160645d6af83b.jpg"
      ]
    },
    {
      id: 103,
      name: "Suits Coworking Spaces",
      badge: null,
      rating: null,
      area: "Vaishali Nagar",
      location: "Vaishali Nagar, Jaipur",
      price: "₹5,000",
      period: "/ Month",
      priceFormatted: "₹5,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/original/fe2f70ac5c77f8a734f9d4e9695216bf502e4245.jpg",
        "https://img.cofynd.com/images/original/26b712725534c445a5d052c95f84d3ceda3b4659.jpg",
        "https://img.cofynd.com/images/original/a08431034760a46eab04f8d72157ee0c5dfa824f.jpg",
        "https://img.cofynd.com/images/original/7e72a63b286ca2d7fdcc88d33aa7f2cf82688d29.jpg",
        "https://img.cofynd.com/images/original/1e19d9a01f0748146ea103b7a5315b371b758755.jpg",
        "https://img.cofynd.com/images/original/1c6b3bdb3a1ae90d0a3daecb0157654249b8ea8c.jpg"
      ]
    },
    {
      id: 104,
      name: "Creware Coworks",
      badge: null,
      rating: null,
      area: "Vaishali Nagar",
      location: "Vaishali Nagar, Jaipur",
      price: "₹6,000",
      period: "/ Month",
      priceFormatted: "₹6,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/latest_images_2024/07bb37baff192903fc12f6a744d8986827044679.webp",
        "https://img.cofynd.com/images/latest_images_2024/e8e474d0cd4e2ae9c4cedffad95350b531a79511.webp",
        "https://img.cofynd.com/images/latest_images_2024/d33ceff6ece1685a3f4b327002c23693ec442dec.webp",
        "https://img.cofynd.com/images/latest_images_2024/6d69afb410c73d3f549a6b7acc0103aff4eb0612.webp",
        "https://img.cofynd.com/images/latest_images_2024/cf20380a3a58e9a38df9fa5d8b96cda2fd4e4b48.webp",
        "https://img.cofynd.com/images/latest_images_2024/f779a91fe78895a4dcae38c0d725c6ce8bf935c7.webp"
      ]
    },
    {
      id: 108,
      name: "Red Art Works",
      badge: null,
      rating: null,
      area: "Vaishali Nagar",
      location: "Vaishali Nagar, Jaipur",
      price: "₹6,000",
      period: "/ Month",
      priceFormatted: "₹6,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1697710969/hdrsc8ntp5d97vpfm4ia.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1697710615/q3wml4gxfvuk3mmwqxxb.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1697710614/ppoplytt3vup6st0vb1g.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1697710946/uksal3uudnyl8k2dgdw8.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1697710946/iywyfmjhuixzvm42wb0m.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1697710947/wopjekj6etycaptd2gf8.webp"
      ]
    },
    {
      id: 128,
      name: "As One Coworking",
      badge: null,
      rating: null,
      area: "Vaishali Nagar",
      location: "Vaishali Nagar, Jaipur",
      price: "₹3,500",
      period: "/ Month",
      priceFormatted: "₹3,500 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1682411234/kggi7eb9u8oxcxfbbfyd.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1682329699/zavvmcqhwm2reclkhjfc.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1682329699/pw4dyggfqkxktlemaics.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1682329699/btnlmdkn7zyjgwh3eomj.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1682329699/lwx7nunmyoll4r5dd76e.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1682329699/tbhyeb0mhkaot5danbwi.jpg"
      ]
    },
    {
      id: 134,
      name: "WorkZoned",
      badge: null,
      rating: null,
      area: "Vaishali Nagar",
      location: "Vaishali Nagar, Jaipur",
      price: "₹4,500",
      period: "/ Month",
      priceFormatted: "₹4,500 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1585817627/jastbbfabdsin5rt7dsu.png",
        "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1578313371/txlv4kq6fgbgd14rhyrd.webp",
        "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1578313371/uyaliilrii8vu5cgd9sm.webp",
        "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1578313371/zrgfqrvf29i99mo67uww.webp",
        "https://qdesq.imagekit.io/img/tr:h-181,w-325/image/upload/v1578313371/txlv4kq6fgbgd14rhyrd.webp"
      ]
    },
    {
      id: 140,
      name: "DevX",
      badge: null,
      rating: null,
      area: "Vaishali Nagar",
      location: "Vaishali Nagar, Jaipur",
      price: "₹1",
      period: "/ Month",
      priceFormatted: "₹1 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1665392192/ziieupcv3tnbi2p4jnke.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1665392089/kaqaxpqzmmuytwpngbsm.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1665392087/tk7opcyysfjrygemsx6a.webp",
        "https://qdesq.imagekit.io/tr:h-181,w-325/image/upload/v1665392089/kaqaxpqzmmuytwpngbsm.webp"
      ]
    }
  ],
  "Mansarovar": [
    {
      id: 84,
      name: "White Polar Spaces",
      badge: null,
      rating: null,
      area: "Mansarovar",
      location: "Mansarovar, Jaipur",
      price: "₹5,499",
      period: "/ Month",
      priceFormatted: "₹5,499 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/latest_images_2024/40827c5b9414304400137175cb58c3a02d0c982b.webp",
        "https://img.cofynd.com/images/latest_images_2024/5d0aa7a8137cff1f1de30749553f36cde253a4a1.webp",
        "https://img.cofynd.com/images/latest_images_2024/2cf884b48b61e486a160a85459d2b4ab4e7b8e2e.webp",
        "https://img.cofynd.com/images/latest_images_2024/b07215ca36b9b03715d9ff9c1d90309f27a70620.webp",
        "https://img.cofynd.com/images/latest_images_2024/ddc0107c0b662db072bdcc15ff6fc414143efe9a.webp"
      ]
    },
    {
      id: 92,
      name: "Co-work Town",
      badge: null,
      rating: null,
      area: "Mansarovar",
      location: "Mansarovar, Jaipur",
      price: "₹4,499",
      period: "/ Month",
      priceFormatted: "₹4,499 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/latest_images_2024/904612013872dc01e167c66b44d1955166a51889.webp",
        "https://img.cofynd.com/images/latest_images_2024/69ff476064d60bdcb16bfc8d624a7c63e5329d53.webp",
        "https://img.cofynd.com/images/latest_images_2024/780587274dad3a8e6686aa7b4b2d705bcbdd5205.webp",
        "https://img.cofynd.com/images/latest_images_2024/2b8c2a861b3238227e6e3a27970503eebc5ed626.webp",
        "https://img.cofynd.com/images/latest_images_2024/2b2823870050fcc9dd2294c5d0cff3bd4a484241.webp",
        "https://img.cofynd.com/images/latest_images_2024/ebb65950d4258376a0dd320f549f5be9018e017e.webp"
      ]
    },
    {
      id: 93,
      name: "Arvian Coworking",
      badge: null,
      rating: null,
      area: "Mansarovar",
      location: "Mansarovar, Jaipur",
      price: "₹4,000",
      period: "/ Month",
      priceFormatted: "₹4,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/original/ed814edb4c1b70ab96fcbdcbcea5f37669742e3f.jpg",
        "https://img.cofynd.com/images/original/30d2eec8fab9da3d14f08ce3a93ce04992224f3e.jpg",
        "https://img.cofynd.com/images/original/0bfe283e7b78ca7213886bc27300c693b7864577.jpg",
        "https://img.cofynd.com/images/original/7cf5b55a54e9d4e5ebda417c05ba7c62e46fde9c.jpg",
        "https://img.cofynd.com/images/original/be8f4897f59ffc6d8388a1b9d557071d75d78cce.jpg",
        "https://img.cofynd.com/images/original/807f56370f707bc9e60c588bd1d6b5f4d443a0ec.jpg"
      ]
    },
    {
      id: 94,
      name: "Jaipur Co-Working",
      badge: null,
      rating: null,
      area: "Mansarovar",
      location: "Mansarovar, Jaipur",
      price: "₹3,499",
      period: "/ Month",
      priceFormatted: "₹3,499 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/latest_images_2024/f4a8cc25485cca193bbd0a4ad026235a898ebb19.webp",
        "https://img.cofynd.com/images/latest_images_2024/c05704f2d0b10875fe74082f9ae9bca6e57a0784.webp",
        "https://img.cofynd.com/images/latest_images_2024/faec0cda489cc1af80a8119dd3486c36a0f4d1c9.webp",
        "https://img.cofynd.com/images/latest_images_2024/16c1899ea84913fe1d94dc40ed72d6a2d3cf63de.webp",
        "https://img.cofynd.com/images/latest_images_2024/c0547d93fee91be5aa485d3da4920cb614118230.webp"
      ]
    },
    {
      id: 95,
      name: "Jaipur Coworking Space",
      badge: null,
      rating: null,
      area: "Mansarovar",
      location: "Mansarovar, Jaipur",
      price: "₹5,000",
      period: "/ Month",
      priceFormatted: "₹5,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/latest_images_2024/ccb65a7970e8088734cce02b740d636d71d0d907.webp",
        "https://img.cofynd.com/images/latest_images_2024/b91fe4a826cf9198f48d6c32e2df60c3fe066933.webp",
        "https://img.cofynd.com/images/latest_images_2024/47a07d1764a1483195d315d30484890e4ad6673e.webp",
        "https://img.cofynd.com/images/latest_images_2024/014f5b587f9c1a893c34874303528d1a649d5fa8.webp",
        "https://img.cofynd.com/images/latest_images_2024/09d37738dad44c2868e02c40d08143513dd58b69.webp",
        "https://img.cofynd.com/images/latest_images_2024/0523a1bd84814506811fdff1f39068587f639d52.webp"
      ]
    },
    {
      id: 96,
      name: "Go4 My Desk",
      badge: null,
      rating: null,
      area: "Mansarovar",
      location: "Mansarovar, Jaipur",
      price: "₹5,999",
      period: "/ Month",
      priceFormatted: "₹5,999 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/latest_images_2024/c6d386adbee8374af51423c55ec17cb14052b1a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/bcd02218cea9cac23c2ae7687f63ea75e862f0c7.webp",
        "https://img.cofynd.com/images/latest_images_2024/ac334e8a72d8344d8b430267eec631d22dcd27b9.webp",
        "https://img.cofynd.com/images/latest_images_2024/9fb6b901219097013d0cbd89265f48cd534976a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/d52cbe4bf2b5cb2f991163895a966ebea5981460.webp"
      ]
    },
    {
      id: 142,
      name: "Suits Cafe",
      badge: null,
      rating: null,
      area: "Mansarovar",
      location: "Mansarovar, Jaipur",
      price: "₹4,500",
      period: "/ Month",
      priceFormatted: "₹4,500 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1578375775/gwhy23n6snv57tzfago0.webp",
        "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1578375775/admji2kxjhg6h2dcsigp.webp",
        "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1578375775/yvwae913871d6hayhe7i.webp",
        "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1578375775/gwhy23n6snv57tzfago0.webp",
        "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1473834722/exigmqjrmo0fz8mbioqk.webp",
        "https://qdesq.imagekit.io/img/tr:n-detail_image_hq/image/upload/v1473834723/hfg27qte0w16qqcc7zkk.webp"
      ]
    },
    {
      id: 149,
      name: "Mansarovar Co-Working Hub",
      badge: null,
      rating: null,
      area: "Mansarovar",
      location: "Mansarovar, Jaipur",
      price: "₹3,000",
      period: "/ Month",
      priceFormatted: "₹3,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://ik.imagekit.io/qdesq/qdesq/dfe56f232e68257c1ff7dd2c78ae4c89_-ePkuUEMb.jpg",
        "https://ik.imagekit.io/qdesq/qdesq/6856c0ca033c218c2dbab5006071dcc4_QPnnl3KcF.jpg",
        "https://ik.imagekit.io/qdesq/qdesq/c6bfa4db41e8da4588fb3c22d5cb3f5e_rbCy2SOIN.jpg",
        "https://ik.imagekit.io/qdesq/qdesq/2a2ab2291ec1ad85f8f0f058db8e04de_B4hGKXWZS.jpg",
        "https://ik.imagekit.io/qdesq/qdesq/345661f4707a2478d2b2045320d880b4_M9l6EIWcb.jpg",
        "https://ik.imagekit.io/qdesq/qdesq/78e92d42f5abc7d29af071f2706f755c_zdLpWYl56.jpg"
      ]
    },
    {
      id: 154,
      name: "CITY HIVE",
      badge: null,
      rating: null,
      area: "Mansarovar",
      location: "Mansarovar, Jaipur",
      price: "₹5,500",
      period: "/ Month",
      priceFormatted: "₹5,500 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1715078001/obnxcfaffsn6odxm4ndk.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1715068759/tm4octchvb2bvvduoihd.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1715068730/ej0ijebesq50vvyofgzp.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1715068821/ea429qe4irwtgckedc34.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1715068763/bzhinse3wsdesupu2w8u.jpg",
        "https://qdesq.imagekit.io/tr:h-181,w-325/image/upload/v1715068759/tm4octchvb2bvvduoihd.jpg"
      ]
    }
  ],
  "Tonk Road": [
    {
      id: 98,
      name: "Make It Worth Digital",
      badge: null,
      rating: null,
      area: "Tonk Road",
      location: "Tonk Road, Jaipur",
      price: "₹8,000",
      period: "/ Month",
      priceFormatted: "₹8,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/latest_images_2024/7b89779fa0677d5b3c0cb690a893ccf1e753497f.webp",
        "https://img.cofynd.com/images/latest_images_2024/3b907cc8cf5fa940e23e0ee8bfcb9b2cff6c5efd.webp",
        "https://img.cofynd.com/images/latest_images_2024/3cc3b9b8950b46776e530c0bff85cb264b51f8cd.webp",
        "https://img.cofynd.com/images/latest_images_2024/17acef4aebc77e485ce2224680372140ac9f97c9.webp",
        "https://img.cofynd.com/images/latest_images_2024/35992be12dd4e89d4c26fbceea86c5b7fe295bc7.webp"
      ]
    },
    {
      id: 129,
      name: "Coworkin",
      badge: null,
      rating: null,
      area: "Tonk Road",
      location: "Tonk Road, Jaipur",
      price: "₹12,000",
      period: "/ Month",
      priceFormatted: "₹12,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1660902475/vhbiyjpjmffpdooye21c.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660902475/vhbiyjpjmffpdooye21c.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660902475/rhozxffdxk2dhzku1ggv.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660902475/gq3ytwyjpuzsg3f2ykfh.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660902556/ei7os4birj3q5tkrlo8r.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660902607/bvcfkhn6bno6eryxz3mp.webp"
      ]
    },
    {
      id: 143,
      name: "Invocob 2.0",
      badge: null,
      rating: null,
      area: "Tonk Road",
      location: "Tonk Road, Jaipur",
      price: "₹4,000",
      period: "/ Month",
      priceFormatted: "₹4,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/img/image/upload/s--p-8CW3Sq--/v1725966349/pvhfldcxebw7svx4p4lu.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--199zLhte--/v1725966295/euxirurs3n7mly8rzf7s.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--K5wKcNAc--/v1725966245/lh9fjn5js1ixrzjiphs8.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--DLPkL4f1--/v1725966246/gukwlhwormhpyaqa5qpo.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--l5gTA7qM--/v1725966245/vzuqbqal6s6f9gt8fbfn.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--pRF6C74z--/v1725966246/pbfdpbdbtzpdtyn2df0d.webp"
      ]
    }
  ],
  "Lalkothi": [
    {
      id: 80,
      name: "Best Desk Cove",
      badge: null,
      rating: null,
      area: "Lalkothi",
      location: "Lalkothi, Jaipur",
      price: "₹7,999",
      period: "/ Month",
      priceFormatted: "₹7,999 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/latest_images_2024/906a396314d03659e8be14d8f36e1de630b0db87.webp",
        "https://img.cofynd.com/images/latest_images_2024/a88fd979d5035041db8f2e825d73d69f48b88f87.webp",
        "https://img.cofynd.com/images/latest_images_2024/8822d9461d433cc3402e6d7dc83fcf38556fd43d.webp",
        "https://img.cofynd.com/images/latest_images_2024/0508b697c2d3fad0c13a42f0c5aaabf78c1d99ba.webp",
        "https://img.cofynd.com/images/latest_images_2024/39be93ad6e5418f5e320b8f95bec40c90114a7d1.webp",
        "https://img.cofynd.com/images/latest_images_2024/2111cb3deb71a5481a891fd2117950b7b82e8f70.webp"
      ]
    },
    {
      id: 116,
      name: "J Startup House, Jaipur",
      badge: null,
      rating: null,
      area: "Lalkothi",
      location: "Lalkothi, Jaipur",
      price: "₹5,000",
      period: "/ Month",
      priceFormatted: "₹5,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://ik.imagekit.io/qdesq/qdesq/a9d06903b7bf9a874f79a116b1fd9ec1_5s_CPfOHX.JPG",
        "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/a0cc34c69e5757ded99bfe6c450cb37e_fKSEkB5uh.jpg",
        "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/c4d4a50145a491fb416f7b54b1905a23_HGSdNrKjj.jpg",
        "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/e9d3ced71c3612e82d7580d0d817912a_Q0keS_QMB.jpg",
        "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/b3dd0fb38af5fa394459d86d0667f56c_ywfV-8K5I.jpg",
        "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/983aed63ec328a75b9ba2c5754e0e380_XUjt_Tcjq.jpg"
      ]
    },
    {
      id: 123,
      name: "The Urban Hub Co-Working Space",
      badge: null,
      rating: null,
      area: "Lalkothi",
      location: "Lalkothi, Jaipur",
      price: "₹5,500",
      period: "/ Month",
      priceFormatted: "₹5,500 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1660812772/pl46g0br8fsu2bcaxeu9.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660812797/vcnmv2hpwhdhqrljlsv8.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660812722/qcfsoduxr1dpqgrz0rle.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660812720/grldaprryapit6x1wjtu.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660812721/t3ygfeblxxzl4gscs614.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660812745/a4c2jjdbrgzlhftomyfy.webp"
      ]
    },
    {
      id: 130,
      name: "Times Group",
      badge: null,
      rating: null,
      area: "Lalkothi",
      location: "Lalkothi, Jaipur",
      price: "₹7,000",
      period: "/ Month",
      priceFormatted: "₹7,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1630489476/qlmkra06mjlwzrvhj78s.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1630489461/lpvyzmktqok0rn4zeylf.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1630489463/wado1mh9h1f6cljp352x.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1630489470/pvvfthhpubiwweybtrgv.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1630489476/qlmkra06mjlwzrvhj78s.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1630489487/s8cvooggnxgfiqvo16dq.jpg"
      ]
    }
  ],
  "Indrapuri": [],
  "Ganpati Nagar": [],
  "Pratap Nagar": [
    {
      id: 97,
      name: "Co Desk",
      badge: null,
      rating: null,
      area: "Pratap Nagar",
      location: "Pratap Nagar, Jaipur",
      price: "₹5,000",
      period: "/ Month",
      priceFormatted: "₹5,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://img.cofynd.com/images/latest_images_2024/4733e3720fa8b0479dd29e2bc559df21d49215ea.webp",
        "https://img.cofynd.com/images/latest_images_2024/0136e941b5f97518fea9cb95b2590d035c2cf255.webp",
        "https://img.cofynd.com/images/latest_images_2024/681126863cd427e8a2fe456d1718f01f833ae25c.webp",
        "https://img.cofynd.com/images/latest_images_2024/15d24002c59421b32518b9f11b9d5d5a5e0fb0b0.webp",
        "https://img.cofynd.com/images/latest_images_2024/1bb73e6980f005e2ca241d51bbe5c9b08f8cd516.webp"
      ]
    },
    {
      id: 115,
      name: "GVFC",
      badge: null,
      rating: null,
      area: "Pratap Nagar",
      location: "Pratap Nagar, Jaipur",
      price: "₹4,000",
      period: "/ Month",
      priceFormatted: "₹4,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1660642846/pakjaerthx7esxzaqgwj.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660641888/o6ynzgyaigzngpsldyda.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660641888/k1p8e4kngyomzsknb6cp.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660642751/sicsbjq1g6dnwwroreqw.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660642751/ulzxsxan6a1ld0or8gll.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1660642751/rlynlmrtzm8tqp5hp8ia.webp"
      ]
    }
  ],
  "Nirman Nagar": [
    {
      id: 133,
      name: "Codeskk",
      badge: null,
      rating: null,
      area: "Nirman Nagar",
      location: "Nirman Nagar, Jaipur",
      price: "₹3,999",
      period: "/ Month",
      priceFormatted: "₹3,999 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1663130916/uaruebkczujfayoxj36c.jpg",
        "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1665071397/drbeeoyxazdu34v1zckc.jpg",
        "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1665071397/g86xqsxgycfpxackwblh.jpg",
        "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1665071397/mu02frkpdiacm9xezfmc.jpg",
        "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1665071397/i57skabdeipxcw6zmzvk.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1663130916/uaruebkczujfayoxj36c.jpg"
      ]
    }
  ],
  "Subhash Nagar": [],
  "Shyam Nagar": [
    {
      id: 119,
      name: "M&L Consulting Pvt.Ltd",
      badge: null,
      rating: null,
      area: "Shyam Nagar",
      location: "Shyam Nagar, Jaipur",
      price: "₹6,000",
      period: "/ Month",
      priceFormatted: "₹6,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1713611436/k22iqubvbjqaabrq6fhb.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1714738933/iip11ddaedbu9ilhdtj4.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1713611436/k22iqubvbjqaabrq6fhb.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1713611436/jovjeqab8wjfz1of2rlx.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1713611436/dxmafqmzmhxyn5tzk87q.jpg",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1713611437/cnc95n549qxcufrbhuaz.jpg"
      ]
    },
    {
      id: 120,
      name: "Coworkin",
      badge: null,
      rating: null,
      area: "Shyam Nagar",
      location: "Shyam Nagar, Jaipur",
      price: "₹8,000",
      period: "/ Month",
      priceFormatted: "₹8,000 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1676018462/im6oa7jqaotmpcve2ity.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676018428/fyp4vbjgf0iajeqwpl9a.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676018428/mxdegogin5vaok9uks2g.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676018428/lzdr2bty1nf1ldywqvin.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676018444/k4ewupv9rx2yqdpzjvkr.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676018445/zwbi9mhxh9mov7zf5dzd.webp"
      ]
    },
    {
      id: 126,
      name: "THE WORKNOT",
      badge: null,
      rating: null,
      area: "Shyam Nagar",
      location: "Shyam Nagar, Jaipur",
      price: "₹4,400",
      period: "/ Month",
      priceFormatted: "₹4,400 / Month",
      ctaText: "Get Quote",
      images: [
        "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1700050879/aq9abf3dakcxrr5tpudi.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700209528/ihil1x2ymadbbvivvwpo.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700209529/hhrzavrp1wl7fzaxotum.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700209529/wooa4hmbl34idpzcstqk.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700050439/uys4tqrtyf0xyzp1sqtj.webp",
        "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700050439/xjhqnqgal6lzdvpswqkl.webp"
      ]
    }
  ]
};

export const similarJaipurOfficeCards = [
  {
    id: 1,
    name: "Prime Coworks",
    badge: null,
    rating: null,
    area: "Tonk Road",
    location: "Tonk Road, Jaipur",
    price: "₹6,000",
    period: "/ Month",
    priceFormatted: "₹6,000 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/248fd9d196ceb58279672a39b7091f812f1735ad.webp",
      "https://img.cofynd.com/images/latest_images_2024/7c7544c3174624551b9999ffce588271e069adfa.webp",
      "https://img.cofynd.com/images/latest_images_2024/f7bb8c197235b527be16711edc8c4edb6f733659.webp",
      "https://img.cofynd.com/images/latest_images_2024/1a7767c431313339c91b8675cc275ff5894c6c99.webp",
      "https://img.cofynd.com/images/latest_images_2024/e0b706a19533ac8f1a4c1cd594ae389d833e35fa.webp",
      "https://img.cofynd.com/images/latest_images_2024/4139d364451c7d59770c884afca9667d54323e35.webp"
    ]
  },
  {
    id: 2,
    name: "Connekt Coworking Signature Elite",
    badge: null,
    rating: null,
    area: "Tonk Road",
    location: "Tonk Road, Jaipur",
    price: "₹749",
    period: "/ Month",
    priceFormatted: "₹749 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/e581167b6ef1f3a745441fd4ee3bb050f4e86f52.webp",
      "https://img.cofynd.com/images/latest_images_2024/a1e531debd24059397ce204bfabed4cb221c60c4.webp",
      "https://img.cofynd.com/images/latest_images_2024/044e59dcd245d98a5e04a596de2c1b2744d42926.webp",
      "https://img.cofynd.com/images/latest_images_2024/d926a04a0552ff07e496e8b7b836b7b76a80f229.webp",
      "https://img.cofynd.com/images/latest_images_2024/1e55f727f160cf5bc5087d410b38c29a26571e2c.webp",
      "https://img.cofynd.com/images/latest_images_2024/d93ff19819afcefa4840ee534f35399fcddc852d.webp"
    ]
  },
  {
    id: 3,
    name: "White Collar Coworks",
    badge: null,
    rating: null,
    area: "Nirman Nagar",
    location: "Nirman Nagar, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/34540edac3e9e158c30bb61d6672d4d1a6ee9675.webp",
      "https://img.cofynd.com/images/latest_images_2024/a155403c6fa2d65013f267ace59bb75a145dec6c.webp",
      "https://img.cofynd.com/images/latest_images_2024/b9ab2bb181d2853cffbdbcc5f6db7bf9a146db56.webp",
      "https://img.cofynd.com/images/latest_images_2024/86fda98b5ed3d8e3d8acedae0efe747e8f72f563.webp",
      "https://img.cofynd.com/images/latest_images_2024/9922e84eea9825587cec50d1c683892d478c4717.webp",
      "https://img.cofynd.com/images/latest_images_2024/d9cb3539b948103573835c007ec3a90b57e9311d.webp"
    ]
  },
  {
    id: 4,
    name: "Kowork Space",
    badge: null,
    rating: null,
    area: "Vaishali Nagar",
    location: "Vaishali Nagar, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/f601231526375ef89387cb9c15b2448ee2dfb050.webp",
      "https://img.cofynd.com/images/latest_images_2024/28c68aee8dbd80575527f92a4af302ebaefe6122.webp",
      "https://img.cofynd.com/images/latest_images_2024/edefb2f249dfbb0fd918a8021cb892fd6db9ba3f.webp",
      "https://img.cofynd.com/images/latest_images_2024/6db9d66c1abf807d94a3ad01f3cd2e8901be1444.webp",
      "https://img.cofynd.com/images/latest_images_2024/b45acd55bcac180c2a544415631c3ab55687b0d5.webp",
      "https://img.cofynd.com/images/latest_images_2024/3f418383a4c5b9e615f0c8dfc539c7c340ae71b0.webp"
    ]
  },
  {
    id: 5,
    name: "RAW Coworking and Office Space",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/a49087617d15a50f36a5104ae44592feeea35b42.webp",
      "https://img.cofynd.com/images/latest_images_2024/d47632413e95d26f10bf01d9316ef007b997c5a3.webp",
      "https://img.cofynd.com/images/latest_images_2024/03bf2e6958afb38599e7b1094c17c940091067ea.webp",
      "https://img.cofynd.com/images/latest_images_2024/dec4402b16d2629616de5cb209aced86017374c6.webp",
      "https://img.cofynd.com/images/latest_images_2024/37eb26fa2ad2dc91ebcda789934c7becbbc0dc48.webp",
      "https://img.cofynd.com/images/latest_images_2024/b8999f9797a2427847bcd57272b9263082a74dfb.webp"
    ]
  },
  {
    id: 6,
    name: "Wish Cowork Elite",
    badge: null,
    rating: null,
    area: "Civil Lines",
    location: "Civil Lines, Jaipur",
    price: "₹6,999",
    period: "/ Month",
    priceFormatted: "₹6,999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/75d6ef152c01552e0a0179b36a85b485c20267e5.webp",
      "https://img.cofynd.com/images/latest_images_2024/b36876b03d26a2cc24205c7ecca197cc50646861.webp",
      "https://img.cofynd.com/images/latest_images_2024/5ff5960f02dde1647eef8f1dfea923f32ffbe5c0.webp",
      "https://img.cofynd.com/images/latest_images_2024/689f0679ad5223ffa5f63c0fd94872f346439776.webp",
      "https://img.cofynd.com/images/latest_images_2024/5fd9668ef833b87733a3b722611f9fd1c8924b6b.webp",
      "https://img.cofynd.com/images/latest_images_2024/87fb4cb5762dee043d287544331ad25d5ca75eb5.webp"
    ]
  },
  {
    id: 7,
    name: "Cowork Iksana",
    badge: null,
    rating: null,
    area: "MI Road",
    location: "MI Road, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/ca3b615683dbf337ab9c58ed5f9de2c897668dba.jpg",
      "https://img.cofynd.com/images/original/9f3d033584fe228d11dd3c44c419003eeccda8eb.jpg",
      "https://img.cofynd.com/images/original/c1ed2cce91a660a1e4fe7536a251cf552fb4e32a.jpg",
      "https://img.cofynd.com/images/original/c6620989d92b834941913fa6461729415de61dd1.jpg"
    ]
  },
  {
    id: 8,
    name: "Creware",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/original/849e47738570992dc025e35a3b37dc236bf0980b.jpg",
      "https://img.cofynd.com/images/original/461ae8a9cadcb7bb32aabdc00717f6d10c6ddb1d.jpg",
      "https://img.cofynd.com/images/original/8015449306673337d80dc89d701b002a193ee5e3.jpg",
      "https://img.cofynd.com/images/original/7542771cfde0aad67efdba3e0de283ab38a95522.jpg",
      "https://img.cofynd.com/images/original/e080d0edf62012a355a4eaca42cf395d50f21a54.jpg"
    ]
  },
  {
    id: 9,
    name: "Office Culture",
    badge: null,
    rating: null,
    area: "Mansarovar",
    location: "Mansarovar, Jaipur",
    price: "₹999",
    period: "/ Month",
    priceFormatted: "₹999 / Month",
    ctaText: "Get Quote",
    images: [
      "https://img.cofynd.com/images/latest_images_2024/0082b071be1d0a19e938761d45f659279f32ec7e.webp",
      "https://img.cofynd.com/images/latest_images_2024/9ba4a53f2964c5caa5a85efbee0b6cc2c889981a.webp",
      "https://img.cofynd.com/images/latest_images_2024/6476363183d45b5abe21241eb06c667ee5e0c237.webp",
      "https://img.cofynd.com/images/latest_images_2024/4679d3e310a594503f3eca586ae6f485688f03e2.webp",
      "https://img.cofynd.com/images/latest_images_2024/d12b09a9cfb44893c3092ee5b278007ffcf4e134.webp",
      "https://img.cofynd.com/images/latest_images_2024/a6ed3e4871f6ed4863bf29095bd12892f5999b4e.webp"
    ]
  }
];

export const allJaipurOfficeCards = [
  ...jaipurOfficeCards,
  ...moreJaipurOfficeCards,
  ...finalJaipurOfficeCards,
  ...featuredJaipurOfficeCards,
  ...pageTwoJaipurOfficeCards,
  ...pageTwoMoreJaipurOfficeCards,
  ...pageTwoFinalJaipurOfficeCards,
  ...pageTwoFeaturedJaipurOfficeCards,
  ...pageThreeJaipurOfficeCards,
  ...pageThreeMoreJaipurOfficeCards,
  ...pageThreeFinalJaipurOfficeCards,
  ...pageThreeFeaturedJaipurOfficeCards,
  ...pageFourJaipurOfficeCards,
  ...similarJaipurOfficeCards,
  ...Object.values(areaExtraOfficeCards).flat()
];

export const getJaipurOfficeCardById = (id) => findOfficeBySlug(allJaipurOfficeCards, id, "jaipur");
export const getJaipurOfficeSlug = (space) => officePath(allJaipurOfficeCards, space, "jaipur");

export const topJaipurCoworkingLocations = [
  {
    id: "loc-vaishali-nagar",
    name: "Vaishali Nagar",
    title: "Coworking Space in Vaishali Nagar",
    image: "https://img.cofynd.com/images/latest_images_2024/f601231526375ef89387cb9c15b2448ee2dfb050.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-mansarovar",
    name: "Mansarovar",
    title: "Coworking Space in Mansarovar",
    image: "https://img.cofynd.com/images/latest_images_2024/a49087617d15a50f36a5104ae44592feeea35b42.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-tonk-road",
    name: "Tonk Road",
    title: "Coworking Space in Tonk Road",
    image: "https://img.cofynd.com/images/latest_images_2024/248fd9d196ceb58279672a39b7091f812f1735ad.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-lalkothi",
    name: "Lalkothi",
    title: "Coworking Space in Lalkothi",
    image: "https://img.cofynd.com/images/original/2c577d4f3aba02e1a24b29fa8cdb871dab5c24cb.jpg",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-indrapuri",
    name: "Indrapuri",
    title: "Coworking Space in Indrapuri",
    image: "https://img.cofynd.com/images/latest_images_2024/248fd9d196ceb58279672a39b7091f812f1735ad.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-ganpati-nagar",
    name: "Ganpati Nagar",
    title: "Coworking Space in Ganpati Nagar",
    image: "https://img.cofynd.com/images/latest_images_2024/248fd9d196ceb58279672a39b7091f812f1735ad.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-pratap-nagar",
    name: "Pratap Nagar",
    title: "Coworking Space in Pratap Nagar",
    image: "https://img.cofynd.com/images/latest_images_2024/12f7e958e760164908053fe347204716bd33b975.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-nirman-nagar",
    name: "Nirman Nagar",
    title: "Coworking Space in Nirman Nagar",
    image: "https://img.cofynd.com/images/latest_images_2024/34540edac3e9e158c30bb61d6672d4d1a6ee9675.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-subhash-nagar",
    name: "Subhash Nagar",
    title: "Coworking Space in Subhash Nagar",
    image: "https://img.cofynd.com/images/latest_images_2024/34540edac3e9e158c30bb61d6672d4d1a6ee9675.webp",
    ctaText: "Explore Spaces"
  },
  {
    id: "loc-shyam-nagar",
    name: "Shyam Nagar",
    title: "Coworking Space in Shyam Nagar",
    image: "https://img.cofynd.com/images/original/77a8e02eeda83b91f21120b56fbd85f6a6b7d1fd.jpg",
    ctaText: "Explore Spaces"
  }
];
