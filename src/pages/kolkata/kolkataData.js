import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Kolkata Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * Sourced from verified active coworking listings in Kolkata.
 */

export const kolkataNeighborhoods = [
  "Camac Street",
  "Salt Lake",
  "Sarani Road",
  "Dalhousie",
  "New Town",
  "Dharmatala",
  "Bidhannagar",
  "Kasba",
  "Rajarhat",
  "Ballygunge",
  "Park Street",
  "Chowringhee",
  "Golaghata Road",
  "Gariahat",
  "Bhowanipore",
  "Sector V",
  "Bose Road"
];

export const kolkataOfficeCards = [
  {
    "id": 1,
    "name": "Linked Offices",
    "badge": "Premium",
    "rating": 5,
    "area": "Camac Street",
    "location": "21 Camac Street, Kolkata",
    "price": "₹500",
    "period": "/ Hour",
    "priceFormatted": "₹500 / Hour",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8ac5937efd6479de486f37f3030ed55786a9ff09.webp"
    ]
  },
  {
    "id": 2,
    "name": "Work Chaupal",
    "badge": "Premium",
    "rating": 4.5,
    "area": "Salt Lake",
    "location": "Salt Lake, Kolkata",
    "price": "₹7,000",
    "period": "/ Month",
    "priceFormatted": "₹7,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/fbe59cd27d0ffde86716ba97027991758562c562.webp",
      "https://img.cofynd.com/images/original/71f949fd6a0d8add219dcbeac442efcb9661d4ad.jpg",
      "https://img.cofynd.com/images/original/6ad83f6747287ebe2d5c76ea16e3e4c759364161.jpg",
      "https://img.cofynd.com/images/original/9c881b867252daad6adee5f80e506e044915f5eb.jpg"
    ]
  },
  {
    "id": 3,
    "name": "GreenCove Coworking",
    "badge": "Verified",
    "rating": 4.3,
    "area": "Sarani Road",
    "location": "Sarani Road, Kolkata",
    "price": "₹6,500",
    "period": "/ Month",
    "priceFormatted": "₹6,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/d9aaeb44a07b8cf1c2b6da8763ec7dbc0da76a49.webp"
    ]
  },
  {
    "id": 4,
    "name": "East India Works: Eden",
    "badge": "Premium",
    "rating": 4.5,
    "area": "Dalhousie",
    "location": "Dalhousie, Kolkata",
    "price": "₹7,500",
    "period": "/ Month",
    "priceFormatted": "₹7,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/350a8a812c4f71ce8fb2922df5f67a126e230ba9.jpg",
      "https://img.cofynd.com/images/original/2e8c5b13c0ea9d11c0c3b84bf4ea793a403876d7.jpg",
      "https://img.cofynd.com/images/original/6edb2cb7dd5043361a78bc215e9bc5a7fef2d587.jpg"
    ]
  },
  {
    "id": 5,
    "name": "Awfis Coworking",
    "badge": "Verified",
    "rating": 4.1,
    "area": "Salt Lake",
    "location": "Sri Manjari, Salt Lake, Kolkata",
    "price": "₹9,500",
    "period": "/ Month",
    "priceFormatted": "₹9,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/a4a5f792c688dee45458a567a870081d50b6f5e2.jpg",
      "https://img.cofynd.com/images/original/fac4912904b517a772b69f554eb47aa4dfbdca70.jpg",
      "https://img.cofynd.com/images/original/d40a0f77f905552bc55321d3ef20a4a851b6b922.jpg"
    ]
  },
  {
    "id": 6,
    "name": "AWFIS Ecospace",
    "badge": "Verified",
    "rating": 4.1,
    "area": "New Town",
    "location": "Ecospace Business Park, New Town, Kolkata",
    "price": "₹7,500",
    "period": "/ Month",
    "priceFormatted": "₹7,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e1b88cd998805a9fd79246ee1dd47bf86144f503.jpg",
      "https://img.cofynd.com/images/original/bd145eef585917d413287ddd3aa2b6c4beece24d.jpg"
    ]
  },
  {
    "id": 7,
    "name": "Ideapod Coworking",
    "badge": "Verified",
    "rating": 4.3,
    "area": "Dharmatala",
    "location": "Dharmatala, Kolkata",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/1b2ca59b80b3fe335a6477e566a0316c00e9c2fa.jpg",
      "https://img.cofynd.com/images/original/f3aef798ebe74fbbb9195033cf15ac34dd0fc853.jpg",
      "https://img.cofynd.com/images/original/1c70637280ba5cfd27b46c371c3a4b9076093dbc.jpg"
    ]
  },
  {
    "id": 8,
    "name": "AKASA Coworking",
    "badge": "Verified",
    "rating": 4.3,
    "area": "Bidhannagar",
    "location": "PS Srijan Corporate Park, Bidhannagar, Kolkata",
    "price": "₹9,500",
    "period": "/ Month",
    "priceFormatted": "₹9,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/fb0143c58e0afa6e2434dfbbede19c5fe6ac3040.webp",
      "https://img.cofynd.com/images/latest_images_2024/f7b51bcd9ccb51f63a8b3354245af0292fee3d99.webp",
      "https://img.cofynd.com/images/latest_images_2024/b01a501eb6d5f2ad57b4804992da061dd02682ff.webp"
    ]
  }
];

export const moreKolkataOfficeCards = [
  {
    "id": 9,
    "name": "Just@Work",
    "badge": null,
    "rating": null,
    "area": "Kasba",
    "location": "Kasba, Kolkata",
    "price": "₹4,500",
    "period": "/ Month",
    "priceFormatted": "₹4,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/6e3f43ce6accd7bdea72352c9a8a57d7fb135b55.jpg"
    ]
  },
  {
    "id": 10,
    "name": "CoKarya Shared Office Spaces",
    "badge": "Popular",
    "rating": null,
    "area": "New Town",
    "location": "Unitech The Chambers, New Town, Kolkata",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/2f92874d09c627b7b7f01ee229a062d50fcd04d6.jpg",
      "https://img.cofynd.com/images/latest_images_2024/ca7aac80b09e35706db7b830bf718f575644bc5d.webp",
      "https://img.cofynd.com/images/original/acfa7197ea896ef5d8fe0962ca709d4843790694.jpg"
    ]
  },
  {
    "id": 11,
    "name": "Myofyc Chinar Park",
    "badge": null,
    "rating": null,
    "area": "Rajarhat",
    "location": "Chinar Park, Rajarhat, Kolkata",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/d0a8789d7e44adb802109ec1c6be4c26990d8a75.jpg",
      "https://img.cofynd.com/images/original/39f38cfb092f2e1ba42dfe9fc53cdf2295651545.jpg"
    ]
  },
  {
    "id": 12,
    "name": "Workport",
    "badge": null,
    "rating": null,
    "area": "Salt Lake",
    "location": "Salt Lake, Kolkata",
    "price": "₹6,500",
    "period": "/ Month",
    "priceFormatted": "₹6,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/2afc37c8a93c2a663d599b6b6121e2bfd60111f1.jpg",
      "https://img.cofynd.com/images/original/c826bca4661bbb12214625b44cdc2b639ce26e2c.jpg"
    ]
  },
  {
    "id": 13,
    "name": "Myofyc New Town",
    "badge": "Popular",
    "rating": null,
    "area": "New Town",
    "location": "New Town, Kolkata",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/3549c0d2ef1677f3ed63206143403f81c264ef2b.webp",
      "https://img.cofynd.com/images/latest_images_2024/e3a4ce471a2605f6470f0f709c90e0e0449cc1c2.webp",
      "https://img.cofynd.com/images/latest_images_2024/f6749a1ad896f3c18692145aa50b46919e774c27.webp"
    ]
  },
  {
    "id": 14,
    "name": "MYOFYC Premium",
    "badge": null,
    "rating": null,
    "area": "New Town",
    "location": "New Town, Kolkata",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/6bac298ef8aa3df5e6b1295ecf92ab34848c745e.webp",
      "https://img.cofynd.com/images/latest_images_2024/5c3eba6061c664b6448e768e9c52e6bd3d1a5dbe.webp"
    ]
  },
  {
    "id": 15,
    "name": "Speed Work Pod",
    "badge": null,
    "rating": null,
    "area": "Ballygunge",
    "location": "Ballygunge, Kolkata",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/63fd320a53ac6ea1ce7a509bfb8c0ffc17b829b3.jpg",
      "https://img.cofynd.com/images/original/81965b4aa8c9b9b8e40a3dcdcc33ef1a3cc72328.jpg"
    ]
  },
  {
    "id": 16,
    "name": "Jainco Business Centre",
    "badge": "Popular",
    "rating": null,
    "area": "Park Street",
    "location": "Palace Court, 1 Kyd Street, Kolkata",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/6d601fae4318a6dfae34bd84a50980497f4b7564.jpg",
      "https://img.cofynd.com/images/original/41be242e0bd682628baf9e4076d08577aae6179d.jpg"
    ]
  }
];

//export const allKolkataOfficeCards = [...kolkataOfficeCards, ...moreKolkataOfficeCards];

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp'
};

export const finalKolkataOfficeCards = [
  {
    "id": 17,
    "name": "Corner Desk",
    "badge": null,
    "rating": null,
    "area": "Dharmatala",
    "location": "Raja Subodh Mullick Square Rd, Kolkata",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/7aa956b7deae33e87a7a22b691118c3837899f0c.jpg",
      "https://img.cofynd.com/images/latest_images_2024/77ae081438ab5e9dfcf423e3299539e1ca47eb97.webp",
      "https://img.cofynd.com/images/latest_images_2024/17dc21331001536683747ca81353e6cd8c79297a.webp"
    ]
  },
  {
    "id": 18,
    "name": "Chowringhee Court Chambers",
    "badge": null,
    "rating": null,
    "area": "Chowringhee",
    "location": "55 Chowringhee Road, Kolkata",
    "price": "₹11,000",
    "period": "/ Month",
    "priceFormatted": "₹11,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/4409a80472525dffe11de7a731dffe6b41e2837a.jpg",
      "https://img.cofynd.com/images/original/378c1fe9e6ea846a1a13199aeb1cbe026bfad83c.jpg"
    ]
  },
  {
    "id": 19,
    "name": "Infinite Qube",
    "badge": "Popular",
    "rating": null,
    "area": "New Town",
    "location": "New Town, Kolkata",
    "price": "₹5,500",
    "period": "/ Month",
    "priceFormatted": "₹5,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e27c79ff537dbbfb56d21969a0f8d26222c1ff51.jpg",
      "https://img.cofynd.com/images/original/d57683dddf82b3ccb2f81def7e6f70d7776bf7e6.jpg",
      "https://img.cofynd.com/images/original/bd8e798b883d0fb2574649c52da49d6531d96e33.jpg"
    ]
  },
  {
    "id": 20,
    "name": "BLOB",
    "badge": null,
    "rating": null,
    "area": "Golaghata Road",
    "location": "Golaghata Road, Kolkata",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/d5eae6c078980e3dec0af93cc723a18a615e3779.jpg"
    ]
  },
  {
    "id": 21,
    "name": "The Think Tank",
    "badge": null,
    "rating": null,
    "area": "Salt Lake",
    "location": "Salt Lake, Kolkata",
    "price": "₹6,500",
    "period": "/ Month",
    "priceFormatted": "₹6,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/eb0b86a967e8bbfe055c0a29c5f456309aad963c.jpg",
      "https://img.cofynd.com/images/latest_images_2024/2f8d7c313f335ef85f00f6b63cdbbb4d0f9d393a.webp",
      "https://img.cofynd.com/images/latest_images_2024/d36694013debf11cfc9b6e5b578d219c3fb4d636.webp"
    ]
  },
  {
    "id": 22,
    "name": "EasyDaftar",
    "badge": "Popular",
    "rating": null,
    "area": "Salt Lake",
    "location": "CK 233 Sector 2, Salt Lake, Kolkata",
    "price": "₹9,000",
    "period": "/ Month",
    "priceFormatted": "₹9,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/20e0e0ea89db0aa8008063c4fa2e7d2a45697c2b.jpg",
      "https://img.cofynd.com/images/original/9a1d729a6a990ab5c4aa7f2433bf215446f46b2c.jpg"
    ]
  },
  {
    "id": 23,
    "name": "Workzone Park Street",
    "badge": null,
    "rating": null,
    "area": "Park Street",
    "location": "Park Street, Kolkata",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/8353b920b1aafddf028d25095556664950c32dcc.jpg",
      "https://img.cofynd.com/images/original/218d889eaa1c62fd56af4a00087ab95d2d67426b.jpg"
    ]
  },
  {
    "id": 24,
    "name": "Workzone Camac Street",
    "badge": "Premium",
    "rating": 4.4,
    "area": "Camac Street",
    "location": "Industry House, Camac Street, Kolkata",
    "price": "₹8,500",
    "period": "/ Month",
    "priceFormatted": "₹8,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/0955754f7c261c948a8b3534eab2f9d4f8e89112.jpg"
    ]
  }
];

export const featuredKolkataOfficeCards = [
  {
    "id": 25,
    "name": "Booker's Lounge",
    "badge": "Popular",
    "rating": null,
    "area": "Gariahat",
    "location": "Gariahat, Kolkata",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e0d2f95e7583e71c52ce2fac5d7d6d543c1145a3.png"
    ]
  },
  {
    "id": 26,
    "name": "See See You",
    "badge": null,
    "rating": null,
    "area": "Bhowanipore",
    "location": "Bhowanipore, Kolkata",
    "price": "₹6,500",
    "period": "/ Month",
    "priceFormatted": "₹6,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/5be2c8494958a19d397d6d85c5b9c376ba86d419.jpg"
    ]
  },
  {
    "id": 27,
    "name": "Specialty Offices",
    "badge": null,
    "rating": null,
    "area": "Sector V",
    "location": "Sector V, Bidhannagar, Kolkata",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/7e9c481520d35cfd0bc326a8f1cbdc66c15f964b.jpg",
      "https://img.cofynd.com/images/original/ec740f54c40d47f385184dbb8e71d84378f419bf.jpg"
    ]
  },
  {
    "id": 28,
    "name": "Speed Space",
    "badge": "Popular",
    "rating": null,
    "area": "Ballygunge",
    "location": "Ballygunge Circular Road, Kolkata",
    "price": "₹10,000",
    "period": "/ Month",
    "priceFormatted": "₹10,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/63fd320a53ac6ea1ce7a509bfb8c0ffc17b829b3.jpg"
    ]
  },
  {
    "id": 29,
    "name": "My Cube Bose Road",
    "badge": null,
    "rating": null,
    "area": "Bose Road",
    "location": "Bose Road, Kolkata",
    "price": "₹7,000",
    "period": "/ Month",
    "priceFormatted": "₹7,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/ca7aac80b09e35706db7b830bf718f575644bc5d.webp"
    ]
  },
  {
    "id": 30,
    "name": "ABT Co-working Spaces",
    "badge": null,
    "rating": null,
    "area": "New Town",
    "location": "Newtown, Kolkata",
    "price": "₹2,499",
    "period": "/ Month",
    "priceFormatted": "₹2,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/262d21951b0a59b4c551b3043ab16d6f3ef0b63e.jpg",
      "https://img.cofynd.com/images/original/7f39e05f9a54ce852ff8f54aaa4da172279311a3.jpg"
    ]
  },
  {
    "id": 31,
    "name": "Workbravo",
    "badge": "Popular",
    "rating": null,
    "area": "Park Street",
    "location": "Kankaria Estates, Kolkata",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/218d889eaa1c62fd56af4a00087ab95d2d67426b.jpg"
    ]
  },
  {
    "id": 32,
    "name": "My Cube Park Street",
    "badge": null,
    "rating": null,
    "area": "Park Street",
    "location": "Anuj Chambers, 24 Park Street, Kolkata",
    "price": "₹7,000",
    "period": "/ Month",
    "priceFormatted": "₹7,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/88adcc98bdca109ed4e716dd2767de78ae1750e7.webp",
      "https://img.cofynd.com/images/original/350a8a812c4f71ce8fb2922df5f67a126e230ba9.jpg"
    ]
  }
];

// Aliases for compatibility
export const kolkataAreas = kolkataNeighborhoods;
export const kolkataSpaces = kolkataOfficeCards;
export const areas = kolkataNeighborhoods;
export const spaces = kolkataOfficeCards;

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

// ============================================================================
// Page 2 Coworking Office Cards (Pagination Page 2)
// ----------------------------------------------------------------------------
// Jab user pagination me button '2' par click karega, tab top 8 cards ki jagah
// ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (kolkataOfficeCards) aa jayenge.
// Har card me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageTwoKolkataOfficeCards = [
  {
    "id": 33,
    "name": "Technopreneurs' Surrogate",
    "badge": null,
    "rating": null,
    "area": "Sector V",
    "location": "Salt Lake Sector V, Kolkata",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8ac5937efd6479de486f37f3030ed55786a9ff09.webp",
      "https://img.cofynd.com/images/latest_images_2024/c1620ab7ad923e15c3198d1f432aadfff4f5dc1c.webp",
      "https://img.cofynd.com/images/latest_images_2024/25a333ce6f7ec165637e76405109a0766dd746d4.webp"
    ]
  },
  {
    "id": 34,
    "name": "Exospace LLP",
    "badge": "Popular",
    "rating": null,
    "area": "Salt Lake",
    "location": "Salt Lake, Kolkata",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/2e0895f5d3d7fbfabd79cea18b3be94a0ea7cd5b.webp",
      "https://img.cofynd.com/images/latest_images_2024/dff57b719cf0bb207a56df9b0176c22bbc11455e.webp"
    ]
  },
  {
    "id": 35,
    "name": "East India Works: Writer's Inc",
    "badge": null,
    "rating": null,
    "area": "Dalhousie",
    "location": "Mukherjee Road, Dalhousie, Kolkata",
    "price": "₹10,000",
    "period": "/ Month",
    "priceFormatted": "₹10,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e1b88cd998805a9fd79246ee1dd47bf86144f503.jpg",
      "https://img.cofynd.com/images/original/afe625d08843626c7d91e09b8cd382b6a2ea0105.jpg"
    ]
  },
  {
    "id": 36,
    "name": "Junction - Workplace Solution",
    "badge": null,
    "rating": null,
    "area": "New Town",
    "location": "Newtown, Kolkata",
    "price": "₹17,999",
    "period": "/ Month",
    "priceFormatted": "₹17,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/2f8d7c313f335ef85f00f6b63cdbbb4d0f9d393a.webp",
      "https://img.cofynd.com/images/latest_images_2024/b86c1ee4375540b455d07b76b9574124864f14f4.webp"
    ]
  },
  {
    "id": 37,
    "name": "Junction Workplace Solutions",
    "badge": "Premium",
    "rating": 4.5,
    "area": "Bidhannagar",
    "location": "Bidhannagar, Kolkata",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e5273c892bad36336cc788c9e890b12cbaa69c07.jpg",
      "https://img.cofynd.com/images/original/655fc9c702d44f28bdbdcb6773c854f125de2c15.jpg",
      "https://img.cofynd.com/images/original/6261108bb5e6c0ac7ed0d8bdb11711bbf9704a31.jpg"
    ]
  },
  {
    "id": 38,
    "name": "Salt Lake CoWorking",
    "badge": null,
    "rating": null,
    "area": "Bidhannagar",
    "location": "Bidhannagar, Kolkata",
    "price": "₹500",
    "period": "/ Month",
    "priceFormatted": "₹500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/a4a5f792c688dee45458a567a870081d50b6f5e2.jpg",
      "https://img.cofynd.com/images/original/d23755ce8a6e855d77db41ad20098829c6365a4f.jpg"
    ]
  },
  {
    "id": 39,
    "name": "Kolkata Coworking Space",
    "badge": null,
    "rating": null,
    "area": "Park Street",
    "location": "City Park Street, Kolkata",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/fbe59cd27d0ffde86716ba97027991758562c562.webp",
      "https://img.cofynd.com/images/latest_images_2024/0821618f36633fd80a0c1e9c8748c60cff247e8a.webp",
      "https://img.cofynd.com/images/latest_images_2024/18712a3856a6e91e20076e14ab0fb839e3a0d19e.webp"
    ]
  }
];

// ============================================================================
// Page 2 Second Batch Coworking Office Cards (Pagination Page 2 - Second 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '2' par click karega, tab "Find Your Perfect Office
// Solution" box ke niche wale second 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (moreKolkataOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageTwoMoreKolkataOfficeCards = [];

// ============================================================================
// Page 2 Third Batch Coworking Office Cards (Pagination Page 2 - Third 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '2' par click karega, tab "Discover your perfect
// workspace with Mycoworking" banner ke niche wale third 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (finalKolkataOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageTwoFinalKolkataOfficeCards = [];

// ============================================================================
// Page 2 Fourth Batch Coworking Office Cards (Pagination Page 2 - Fourth 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '2' par click karega, tab "Customized office
// solutions for your team" banner ke niche wale fourth 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (featuredKolkataOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageTwoFeaturedKolkataOfficeCards = [];

















// ============================================================================
// Page 3 Coworking Office Cards (Pagination Page 3)
// ----------------------------------------------------------------------------
// Jab user pagination me button '3' par click karega, tab top 8 cards ki jagah
// ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (kolkataOfficeCards) aa jayenge.
// Har card me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageThreeKolkataOfficeCards = [];

// ============================================================================
// Page 3 Second Batch Coworking Office Cards (Pagination Page 3 - Second 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '3' par click karega, tab "Find Your Perfect Office
// Solution" box ke niche wale second 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (moreKolkataOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageThreeMoreKolkataOfficeCards = [];

// ============================================================================
// Page 3 Third Batch Coworking Office Cards (Pagination Page 3 - Third 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '3' par click karega, tab "Discover your perfect
// workspace with Mycoworking" banner ke niche wale third 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (finalKolkataOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageThreeFinalKolkataOfficeCards = [];

// ============================================================================
// Page 3 Fourth Batch Coworking Office Cards (Pagination Page 3 - Fourth 8 Cards)
// ----------------------------------------------------------------------------
// Jab user pagination me button '3' par click karega, tab "Customized office
// solutions for your team" banner ke niche wale fourth 8 cards ki jagah ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (featuredKolkataOfficeCards) aa jayenge.
// Sabhi cards me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageThreeFeaturedKolkataOfficeCards = [];











// ============================================================================
// Page 4 Coworking Office Cards (Pagination Page 4)
// ----------------------------------------------------------------------------
// Jab user pagination me button '4' par click karega, tab top 8 cards ki jagah
// ye 8 naye cards display honge.
// Button '1' click karne par wapas pehle wale 8 cards (kolkataOfficeCards) aa jayenge.
// Har card me real internet images, badge, rating, location aur price di gayi hai.
// ============================================================================
export const pageFourKolkataOfficeCards = [];


// ============================================================================
// Area-Specific Extra Coworking Cards (10 New Verified Real Internet Cards per Area)
// ----------------------------------------------------------------------------
// NOTE: These cards are ONLY shown when a specific area filter button is clicked.
// When all cards are displayed (default view without area filter), these cards remain hidden.
// ============================================================================
export const areaExtraOfficeCards = {
  "Camac Street": [
    {
      "id": 5001,
      "name": "Linked Offices",
      "badge": "Premium",
      "rating": 5,
      "area": "Camac Street",
      "location": "21 Camac Street, Kolkata",
      "price": "₹500",
      "period": "/ Hour",
      "priceFormatted": "₹500 / Hour",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8ac5937efd6479de486f37f3030ed55786a9ff09.webp"
      ]
    },
    {
      "id": 5002,
      "name": "Workzone Camac Street",
      "badge": "Premium",
      "rating": 4.4,
      "area": "Camac Street",
      "location": "Industry House, Camac Street, Kolkata",
      "price": "₹8,500",
      "period": "/ Month",
      "priceFormatted": "₹8,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/0955754f7c261c948a8b3534eab2f9d4f8e89112.jpg"
      ]
    }
  ],
  "Salt Lake": [
    {
      "id": 5003,
      "name": "Work Chaupal",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Salt Lake",
      "location": "Salt Lake, Kolkata",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/fbe59cd27d0ffde86716ba97027991758562c562.webp",
        "https://img.cofynd.com/images/original/71f949fd6a0d8add219dcbeac442efcb9661d4ad.jpg",
        "https://img.cofynd.com/images/original/6ad83f6747287ebe2d5c76ea16e3e4c759364161.jpg",
        "https://img.cofynd.com/images/original/9c881b867252daad6adee5f80e506e044915f5eb.jpg"
      ]
    },
    {
      "id": 5004,
      "name": "Awfis Coworking",
      "badge": "Verified",
      "rating": 4.1,
      "area": "Salt Lake",
      "location": "Sri Manjari, Salt Lake, Kolkata",
      "price": "₹9,500",
      "period": "/ Month",
      "priceFormatted": "₹9,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/a4a5f792c688dee45458a567a870081d50b6f5e2.jpg",
        "https://img.cofynd.com/images/original/fac4912904b517a772b69f554eb47aa4dfbdca70.jpg",
        "https://img.cofynd.com/images/original/d40a0f77f905552bc55321d3ef20a4a851b6b922.jpg"
      ]
    },
    {
      "id": 5005,
      "name": "Workport",
      "badge": "Verified",
      "rating": null,
      "area": "Salt Lake",
      "location": "Salt Lake, Kolkata",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/2afc37c8a93c2a663d599b6b6121e2bfd60111f1.jpg",
        "https://img.cofynd.com/images/original/c826bca4661bbb12214625b44cdc2b639ce26e2c.jpg"
      ]
    },
    {
      "id": 5006,
      "name": "The Think Tank",
      "badge": "Verified",
      "rating": null,
      "area": "Salt Lake",
      "location": "Salt Lake, Kolkata",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/eb0b86a967e8bbfe055c0a29c5f456309aad963c.jpg",
        "https://img.cofynd.com/images/latest_images_2024/2f8d7c313f335ef85f00f6b63cdbbb4d0f9d393a.webp",
        "https://img.cofynd.com/images/latest_images_2024/d36694013debf11cfc9b6e5b578d219c3fb4d636.webp"
      ]
    },
    {
      "id": 5007,
      "name": "EasyDaftar",
      "badge": "Popular",
      "rating": null,
      "area": "Salt Lake",
      "location": "CK 233 Sector 2, Salt Lake, Kolkata",
      "price": "₹9,000",
      "period": "/ Month",
      "priceFormatted": "₹9,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/20e0e0ea89db0aa8008063c4fa2e7d2a45697c2b.jpg",
        "https://img.cofynd.com/images/original/9a1d729a6a990ab5c4aa7f2433bf215446f46b2c.jpg"
      ]
    },
    {
      "id": 5008,
      "name": "Exospace LLP",
      "badge": "Popular",
      "rating": null,
      "area": "Salt Lake",
      "location": "Salt Lake, Kolkata",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2e0895f5d3d7fbfabd79cea18b3be94a0ea7cd5b.webp",
        "https://img.cofynd.com/images/latest_images_2024/dff57b719cf0bb207a56df9b0176c22bbc11455e.webp"
      ]
    }
  ],
  "Sarani Road": [
    {
      "id": 5009,
      "name": "GreenCove Coworking",
      "badge": "Verified",
      "rating": 4.3,
      "area": "Sarani Road",
      "location": "Sarani Road, Kolkata",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d9aaeb44a07b8cf1c2b6da8763ec7dbc0da76a49.webp"
      ]
    }
  ],
  "Dalhousie": [
    {
      "id": 5010,
      "name": "East India Works: Eden",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Dalhousie",
      "location": "Dalhousie, Kolkata",
      "price": "₹7,500",
      "period": "/ Month",
      "priceFormatted": "₹7,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/350a8a812c4f71ce8fb2922df5f67a126e230ba9.jpg",
        "https://img.cofynd.com/images/original/2e8c5b13c0ea9d11c0c3b84bf4ea793a403876d7.jpg",
        "https://img.cofynd.com/images/original/6edb2cb7dd5043361a78bc215e9bc5a7fef2d587.jpg"
      ]
    },
    {
      "id": 5011,
      "name": "East India Works: Writer's Inc",
      "badge": "Verified",
      "rating": null,
      "area": "Dalhousie",
      "location": "Mukherjee Road, Dalhousie, Kolkata",
      "price": "₹10,000",
      "period": "/ Month",
      "priceFormatted": "₹10,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/e1b88cd998805a9fd79246ee1dd47bf86144f503.jpg",
        "https://img.cofynd.com/images/original/afe625d08843626c7d91e09b8cd382b6a2ea0105.jpg"
      ]
    }
  ],
  "New Town": [
    {
      "id": 5012,
      "name": "AWFIS Ecospace",
      "badge": "Verified",
      "rating": 4.1,
      "area": "New Town",
      "location": "Ecospace Business Park, New Town, Kolkata",
      "price": "₹7,500",
      "period": "/ Month",
      "priceFormatted": "₹7,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/e1b88cd998805a9fd79246ee1dd47bf86144f503.jpg",
        "https://img.cofynd.com/images/original/bd145eef585917d413287ddd3aa2b6c4beece24d.jpg"
      ]
    },
    {
      "id": 5013,
      "name": "CoKarya Shared Office Spaces",
      "badge": "Popular",
      "rating": null,
      "area": "New Town",
      "location": "Unitech The Chambers, New Town, Kolkata",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/2f92874d09c627b7b7f01ee229a062d50fcd04d6.jpg",
        "https://img.cofynd.com/images/latest_images_2024/ca7aac80b09e35706db7b830bf718f575644bc5d.webp",
        "https://img.cofynd.com/images/original/acfa7197ea896ef5d8fe0962ca709d4843790694.jpg"
      ]
    },
    {
      "id": 5014,
      "name": "Myofyc New Town",
      "badge": "Popular",
      "rating": null,
      "area": "New Town",
      "location": "New Town, Kolkata",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3549c0d2ef1677f3ed63206143403f81c264ef2b.webp",
        "https://img.cofynd.com/images/latest_images_2024/e3a4ce471a2605f6470f0f709c90e0e0449cc1c2.webp",
        "https://img.cofynd.com/images/latest_images_2024/f6749a1ad896f3c18692145aa50b46919e774c27.webp"
      ]
    },
    {
      "id": 5015,
      "name": "MYOFYC Premium",
      "badge": "Verified",
      "rating": null,
      "area": "New Town",
      "location": "New Town, Kolkata",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6bac298ef8aa3df5e6b1295ecf92ab34848c745e.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c3eba6061c664b6448e768e9c52e6bd3d1a5dbe.webp"
      ]
    },
    {
      "id": 5016,
      "name": "Infinite Qube",
      "badge": "Popular",
      "rating": null,
      "area": "New Town",
      "location": "New Town, Kolkata",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/e27c79ff537dbbfb56d21969a0f8d26222c1ff51.jpg",
        "https://img.cofynd.com/images/original/d57683dddf82b3ccb2f81def7e6f70d7776bf7e6.jpg",
        "https://img.cofynd.com/images/original/bd8e798b883d0fb2574649c52da49d6531d96e33.jpg"
      ]
    },
    {
      "id": 5017,
      "name": "ABT Co-working Spaces",
      "badge": "Verified",
      "rating": null,
      "area": "New Town",
      "location": "Newtown, Kolkata",
      "price": "₹2,499",
      "period": "/ Month",
      "priceFormatted": "₹2,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/262d21951b0a59b4c551b3043ab16d6f3ef0b63e.jpg",
        "https://img.cofynd.com/images/original/7f39e05f9a54ce852ff8f54aaa4da172279311a3.jpg"
      ]
    },
    {
      "id": 5018,
      "name": "Junction - Workplace Solution",
      "badge": "Verified",
      "rating": null,
      "area": "New Town",
      "location": "Newtown, Kolkata",
      "price": "₹17,999",
      "period": "/ Month",
      "priceFormatted": "₹17,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2f8d7c313f335ef85f00f6b63cdbbb4d0f9d393a.webp",
        "https://img.cofynd.com/images/latest_images_2024/b86c1ee4375540b455d07b76b9574124864f14f4.webp"
      ]
    }
  ],
  "Dharmatala": [
    {
      "id": 5019,
      "name": "Ideapod Coworking",
      "badge": "Verified",
      "rating": 4.3,
      "area": "Dharmatala",
      "location": "Dharmatala, Kolkata",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/1b2ca59b80b3fe335a6477e566a0316c00e9c2fa.jpg",
        "https://img.cofynd.com/images/original/f3aef798ebe74fbbb9195033cf15ac34dd0fc853.jpg",
        "https://img.cofynd.com/images/original/1c70637280ba5cfd27b46c371c3a4b9076093dbc.jpg"
      ]
    },
    {
      "id": 5020,
      "name": "Corner Desk",
      "badge": "Verified",
      "rating": null,
      "area": "Dharmatala",
      "location": "Raja Subodh Mullick Square Rd, Kolkata",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/7aa956b7deae33e87a7a22b691118c3837899f0c.jpg",
        "https://img.cofynd.com/images/latest_images_2024/77ae081438ab5e9dfcf423e3299539e1ca47eb97.webp",
        "https://img.cofynd.com/images/latest_images_2024/17dc21331001536683747ca81353e6cd8c79297a.webp"
      ]
    }
  ],
  "Bidhannagar": [
    {
      "id": 5021,
      "name": "AKASA Coworking",
      "badge": "Verified",
      "rating": 4.3,
      "area": "Bidhannagar",
      "location": "PS Srijan Corporate Park, Bidhannagar, Kolkata",
      "price": "₹9,500",
      "period": "/ Month",
      "priceFormatted": "₹9,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/fb0143c58e0afa6e2434dfbbede19c5fe6ac3040.webp",
        "https://img.cofynd.com/images/latest_images_2024/f7b51bcd9ccb51f63a8b3354245af0292fee3d99.webp",
        "https://img.cofynd.com/images/latest_images_2024/b01a501eb6d5f2ad57b4804992da061dd02682ff.webp"
      ]
    },
    {
      "id": 5022,
      "name": "Junction Workplace Solutions",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Bidhannagar",
      "location": "Bidhannagar, Kolkata",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/e5273c892bad36336cc788c9e890b12cbaa69c07.jpg",
        "https://img.cofynd.com/images/original/655fc9c702d44f28bdbdcb6773c854f125de2c15.jpg",
        "https://img.cofynd.com/images/original/6261108bb5e6c0ac7ed0d8bdb11711bbf9704a31.jpg"
      ]
    },
    {
      "id": 5023,
      "name": "Salt Lake CoWorking",
      "badge": "Verified",
      "rating": null,
      "area": "Bidhannagar",
      "location": "Bidhannagar, Kolkata",
      "price": "₹500",
      "period": "/ Month",
      "priceFormatted": "₹500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/a4a5f792c688dee45458a567a870081d50b6f5e2.jpg",
        "https://img.cofynd.com/images/original/d23755ce8a6e855d77db41ad20098829c6365a4f.jpg"
      ]
    }
  ],
  "Kasba": [
    {
      "id": 5024,
      "name": "Just@Work",
      "badge": "Verified",
      "rating": null,
      "area": "Kasba",
      "location": "Kasba, Kolkata",
      "price": "₹4,500",
      "period": "/ Month",
      "priceFormatted": "₹4,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/6e3f43ce6accd7bdea72352c9a8a57d7fb135b55.jpg"
      ]
    }
  ],
  "Rajarhat": [
    {
      "id": 5025,
      "name": "Myofyc Chinar Park",
      "badge": "Verified",
      "rating": null,
      "area": "Rajarhat",
      "location": "Chinar Park, Rajarhat, Kolkata",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/d0a8789d7e44adb802109ec1c6be4c26990d8a75.jpg",
        "https://img.cofynd.com/images/original/39f38cfb092f2e1ba42dfe9fc53cdf2295651545.jpg"
      ]
    }
  ],
  "Ballygunge": [
    {
      "id": 5026,
      "name": "Speed Work Pod",
      "badge": "Verified",
      "rating": null,
      "area": "Ballygunge",
      "location": "Ballygunge, Kolkata",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/63fd320a53ac6ea1ce7a509bfb8c0ffc17b829b3.jpg",
        "https://img.cofynd.com/images/original/81965b4aa8c9b9b8e40a3dcdcc33ef1a3cc72328.jpg"
      ]
    },
    {
      "id": 5027,
      "name": "Speed Space",
      "badge": "Popular",
      "rating": null,
      "area": "Ballygunge",
      "location": "Ballygunge Circular Road, Kolkata",
      "price": "₹10,000",
      "period": "/ Month",
      "priceFormatted": "₹10,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/63fd320a53ac6ea1ce7a509bfb8c0ffc17b829b3.jpg"
      ]
    }
  ],
  "Park Street": [
    {
      "id": 5028,
      "name": "Jainco Business Centre",
      "badge": "Popular",
      "rating": null,
      "area": "Park Street",
      "location": "Palace Court, 1 Kyd Street, Kolkata",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/6d601fae4318a6dfae34bd84a50980497f4b7564.jpg",
        "https://img.cofynd.com/images/original/41be242e0bd682628baf9e4076d08577aae6179d.jpg"
      ]
    },
    {
      "id": 5029,
      "name": "Workzone Park Street",
      "badge": "Verified",
      "rating": null,
      "area": "Park Street",
      "location": "Park Street, Kolkata",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/8353b920b1aafddf028d25095556664950c32dcc.jpg",
        "https://img.cofynd.com/images/original/218d889eaa1c62fd56af4a00087ab95d2d67426b.jpg"
      ]
    },
    {
      "id": 5030,
      "name": "Workbravo",
      "badge": "Popular",
      "rating": null,
      "area": "Park Street",
      "location": "Kankaria Estates, Kolkata",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/218d889eaa1c62fd56af4a00087ab95d2d67426b.jpg"
      ]
    },
    {
      "id": 5031,
      "name": "My Cube Park Street",
      "badge": "Verified",
      "rating": null,
      "area": "Park Street",
      "location": "Anuj Chambers, 24 Park Street, Kolkata",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/88adcc98bdca109ed4e716dd2767de78ae1750e7.webp",
        "https://img.cofynd.com/images/original/350a8a812c4f71ce8fb2922df5f67a126e230ba9.jpg"
      ]
    },
    {
      "id": 5032,
      "name": "Kolkata Coworking Space",
      "badge": "Verified",
      "rating": null,
      "area": "Park Street",
      "location": "City Park Street, Kolkata",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/fbe59cd27d0ffde86716ba97027991758562c562.webp",
        "https://img.cofynd.com/images/latest_images_2024/0821618f36633fd80a0c1e9c8748c60cff247e8a.webp",
        "https://img.cofynd.com/images/latest_images_2024/18712a3856a6e91e20076e14ab0fb839e3a0d19e.webp"
      ]
    }
  ],
  "Chowringhee": [
    {
      "id": 5033,
      "name": "Chowringhee Court Chambers",
      "badge": "Verified",
      "rating": null,
      "area": "Chowringhee",
      "location": "55 Chowringhee Road, Kolkata",
      "price": "₹11,000",
      "period": "/ Month",
      "priceFormatted": "₹11,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/4409a80472525dffe11de7a731dffe6b41e2837a.jpg",
        "https://img.cofynd.com/images/original/378c1fe9e6ea846a1a13199aeb1cbe026bfad83c.jpg"
      ]
    }
  ],
  "Golaghata Road": [
    {
      "id": 5034,
      "name": "BLOB",
      "badge": "Verified",
      "rating": null,
      "area": "Golaghata Road",
      "location": "Golaghata Road, Kolkata",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/d5eae6c078980e3dec0af93cc723a18a615e3779.jpg"
      ]
    }
  ],
  "Gariahat": [
    {
      "id": 5035,
      "name": "Booker's Lounge",
      "badge": "Popular",
      "rating": null,
      "area": "Gariahat",
      "location": "Gariahat, Kolkata",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/e0d2f95e7583e71c52ce2fac5d7d6d543c1145a3.png"
      ]
    }
  ],
  "Bhowanipore": [
    {
      "id": 5036,
      "name": "See See You",
      "badge": "Verified",
      "rating": null,
      "area": "Bhowanipore",
      "location": "Bhowanipore, Kolkata",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/5be2c8494958a19d397d6d85c5b9c376ba86d419.jpg"
      ]
    }
  ],
  "Sector V": [
    {
      "id": 5037,
      "name": "Specialty Offices",
      "badge": "Verified",
      "rating": null,
      "area": "Sector V",
      "location": "Sector V, Bidhannagar, Kolkata",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/7e9c481520d35cfd0bc326a8f1cbdc66c15f964b.jpg",
        "https://img.cofynd.com/images/original/ec740f54c40d47f385184dbb8e71d84378f419bf.jpg"
      ]
    },
    {
      "id": 5038,
      "name": "Technopreneurs' Surrogate",
      "badge": "Verified",
      "rating": null,
      "area": "Sector V",
      "location": "Salt Lake Sector V, Kolkata",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8ac5937efd6479de486f37f3030ed55786a9ff09.webp",
        "https://img.cofynd.com/images/latest_images_2024/c1620ab7ad923e15c3198d1f432aadfff4f5dc1c.webp",
        "https://img.cofynd.com/images/latest_images_2024/25a333ce6f7ec165637e76405109a0766dd746d4.webp"
      ]
    }
  ],
  "Bose Road": [
    {
      "id": 5039,
      "name": "My Cube Bose Road",
      "badge": "Verified",
      "rating": null,
      "area": "Bose Road",
      "location": "Bose Road, Kolkata",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ca7aac80b09e35706db7b830bf718f575644bc5d.webp"
      ]
    }
  ]
};

// ============================================================================
// SIMILAR SPACES DATA (9 Verified Kolkata Coworking Spaces for OfficeDetail Page)
// Sourced from verified active coworking listings across Kolkata
// Recognized by ID range 9001 - 9009
// ============================================================================
export const similarKolkataOfficeCards = [
  {
    "id": 9001,
    "name": "Linked Offices",
    "badge": "Premium",
    "rating": 5,
    "area": "Camac Street",
    "location": "21 Camac Street, Kolkata",
    "price": "₹500",
    "period": "/ Hour",
    "priceFormatted": "₹500 / Hour",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8ac5937efd6479de486f37f3030ed55786a9ff09.webp"
    ]
  },
  {
    "id": 9002,
    "name": "Work Chaupal",
    "badge": "Premium",
    "rating": 4.5,
    "area": "Salt Lake",
    "location": "Salt Lake, Kolkata",
    "price": "₹7,000",
    "period": "/ Month",
    "priceFormatted": "₹7,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/fbe59cd27d0ffde86716ba97027991758562c562.webp",
      "https://img.cofynd.com/images/original/71f949fd6a0d8add219dcbeac442efcb9661d4ad.jpg",
      "https://img.cofynd.com/images/original/6ad83f6747287ebe2d5c76ea16e3e4c759364161.jpg",
      "https://img.cofynd.com/images/original/9c881b867252daad6adee5f80e506e044915f5eb.jpg"
    ]
  },
  {
    "id": 9003,
    "name": "GreenCove Coworking",
    "badge": "Verified",
    "rating": 4.3,
    "area": "Sarani Road",
    "location": "Sarani Road, Kolkata",
    "price": "₹6,500",
    "period": "/ Month",
    "priceFormatted": "₹6,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/d9aaeb44a07b8cf1c2b6da8763ec7dbc0da76a49.webp"
    ]
  },
  {
    "id": 9004,
    "name": "East India Works: Eden",
    "badge": "Premium",
    "rating": 4.5,
    "area": "Dalhousie",
    "location": "Dalhousie, Kolkata",
    "price": "₹7,500",
    "period": "/ Month",
    "priceFormatted": "₹7,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/350a8a812c4f71ce8fb2922df5f67a126e230ba9.jpg",
      "https://img.cofynd.com/images/original/2e8c5b13c0ea9d11c0c3b84bf4ea793a403876d7.jpg",
      "https://img.cofynd.com/images/original/6edb2cb7dd5043361a78bc215e9bc5a7fef2d587.jpg"
    ]
  },
  {
    "id": 9005,
    "name": "Awfis Coworking",
    "badge": "Verified",
    "rating": 4.1,
    "area": "Salt Lake",
    "location": "Sri Manjari, Salt Lake, Kolkata",
    "price": "₹9,500",
    "period": "/ Month",
    "priceFormatted": "₹9,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/a4a5f792c688dee45458a567a870081d50b6f5e2.jpg",
      "https://img.cofynd.com/images/original/fac4912904b517a772b69f554eb47aa4dfbdca70.jpg",
      "https://img.cofynd.com/images/original/d40a0f77f905552bc55321d3ef20a4a851b6b922.jpg"
    ]
  },
  {
    "id": 9006,
    "name": "AWFIS Ecospace",
    "badge": "Verified",
    "rating": 4.1,
    "area": "New Town",
    "location": "Ecospace Business Park, New Town, Kolkata",
    "price": "₹7,500",
    "period": "/ Month",
    "priceFormatted": "₹7,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e1b88cd998805a9fd79246ee1dd47bf86144f503.jpg",
      "https://img.cofynd.com/images/original/bd145eef585917d413287ddd3aa2b6c4beece24d.jpg"
    ]
  },
  {
    "id": 9007,
    "name": "Ideapod Coworking",
    "badge": "Verified",
    "rating": 4.3,
    "area": "Dharmatala",
    "location": "Dharmatala, Kolkata",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/1b2ca59b80b3fe335a6477e566a0316c00e9c2fa.jpg",
      "https://img.cofynd.com/images/original/f3aef798ebe74fbbb9195033cf15ac34dd0fc853.jpg",
      "https://img.cofynd.com/images/original/1c70637280ba5cfd27b46c371c3a4b9076093dbc.jpg"
    ]
  },
  {
    "id": 9008,
    "name": "AKASA Coworking",
    "badge": "Verified",
    "rating": 4.3,
    "area": "Bidhannagar",
    "location": "PS Srijan Corporate Park, Bidhannagar, Kolkata",
    "price": "₹9,500",
    "period": "/ Month",
    "priceFormatted": "₹9,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/fb0143c58e0afa6e2434dfbbede19c5fe6ac3040.webp",
      "https://img.cofynd.com/images/latest_images_2024/f7b51bcd9ccb51f63a8b3354245af0292fee3d99.webp",
      "https://img.cofynd.com/images/latest_images_2024/b01a501eb6d5f2ad57b4804992da061dd02682ff.webp"
    ]
  },
  {
    "id": 9009,
    "name": "Just@Work",
    "badge": null,
    "rating": null,
    "area": "Kasba",
    "location": "Kasba, Kolkata",
    "price": "₹4,500",
    "period": "/ Month",
    "priceFormatted": "₹4,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/6e3f43ce6accd7bdea72352c9a8a57d7fb135b55.jpg"
    ]
  }
];

// ============================================================================
// Comprehensive Kolkata Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allKolkataOfficeCards = [
  ...kolkataOfficeCards,
  ...moreKolkataOfficeCards,
  ...finalKolkataOfficeCards,
  ...featuredKolkataOfficeCards,
  ...pageTwoKolkataOfficeCards,
  ...pageTwoMoreKolkataOfficeCards,
  ...pageTwoFinalKolkataOfficeCards,
  ...pageTwoFeaturedKolkataOfficeCards,
  ...pageThreeKolkataOfficeCards,
  ...pageThreeMoreKolkataOfficeCards,
  ...pageThreeFinalKolkataOfficeCards,
  ...pageThreeFeaturedKolkataOfficeCards,
  ...(typeof pageFourKolkataOfficeCards !== 'undefined' ? pageFourKolkataOfficeCards : []),
  // Include all 9 recognized similar spaces for detail page lookup
  ...similarKolkataOfficeCards,
  // Include all area-specific extra cards for detail page lookup
  ...(typeof areaExtraOfficeCards !== 'undefined' ? Object.values(areaExtraOfficeCards).flat() : [])
];

/**
 * Find a Kolkata office card by ID across all pagination pages
 * @param {string|number} id
 * @returns {object|null}
 */
export const getKolkataOfficeCardById = (id) => findOfficeBySlug(allKolkataOfficeCards, id, "kolkata");
export const getKolkataOfficeSlug = (space) => officePath(allKolkataOfficeCards, space, "kolkata");

// ============================================================================
// Top Coworking Locations in Kolkata (Explore by Neighborhood)
// Sourced from verified active coworking spaces in each key hub
// ============================================================================
export const topKolkataCoworkingLocations = [
  {
    "id": "loc-camac-street",
    "name": "Camac Street",
    "title": "Coworking Space in Camac Street",
    "image": "https://img.cofynd.com/images/latest_images_2024/8ac5937efd6479de486f37f3030ed55786a9ff09.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-salt-lake",
    "name": "Salt Lake",
    "title": "Coworking Space in Salt Lake",
    "image": "https://img.cofynd.com/images/latest_images_2024/fbe59cd27d0ffde86716ba97027991758562c562.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-sarani-road",
    "name": "Sarani Road",
    "title": "Coworking Space in Sarani Road",
    "image": "https://img.cofynd.com/images/latest_images_2024/d9aaeb44a07b8cf1c2b6da8763ec7dbc0da76a49.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-dalhousie",
    "name": "Dalhousie",
    "title": "Coworking Space in Dalhousie",
    "image": "https://img.cofynd.com/images/original/350a8a812c4f71ce8fb2922df5f67a126e230ba9.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-new-town",
    "name": "New Town",
    "title": "Coworking Space in New Town",
    "image": "https://img.cofynd.com/images/original/e1b88cd998805a9fd79246ee1dd47bf86144f503.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-dharmatala",
    "name": "Dharmatala",
    "title": "Coworking Space in Dharmatala",
    "image": "https://img.cofynd.com/images/original/1b2ca59b80b3fe335a6477e566a0316c00e9c2fa.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-bidhannagar",
    "name": "Bidhannagar",
    "title": "Coworking Space in Bidhannagar",
    "image": "https://img.cofynd.com/images/latest_images_2024/fb0143c58e0afa6e2434dfbbede19c5fe6ac3040.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-kasba",
    "name": "Kasba",
    "title": "Coworking Space in Kasba",
    "image": "https://img.cofynd.com/images/original/6e3f43ce6accd7bdea72352c9a8a57d7fb135b55.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-rajarhat",
    "name": "Rajarhat",
    "title": "Coworking Space in Rajarhat",
    "image": "https://img.cofynd.com/images/original/d0a8789d7e44adb802109ec1c6be4c26990d8a75.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-ballygunge",
    "name": "Ballygunge",
    "title": "Coworking Space in Ballygunge",
    "image": "https://img.cofynd.com/images/original/63fd320a53ac6ea1ce7a509bfb8c0ffc17b829b3.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-park-street",
    "name": "Park Street",
    "title": "Coworking Space in Park Street",
    "image": "https://img.cofynd.com/images/original/6d601fae4318a6dfae34bd84a50980497f4b7564.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-chowringhee",
    "name": "Chowringhee",
    "title": "Coworking Space in Chowringhee",
    "image": "https://img.cofynd.com/images/original/4409a80472525dffe11de7a731dffe6b41e2837a.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-golaghata-road",
    "name": "Golaghata Road",
    "title": "Coworking Space in Golaghata Road",
    "image": "https://img.cofynd.com/images/original/d5eae6c078980e3dec0af93cc723a18a615e3779.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-gariahat",
    "name": "Gariahat",
    "title": "Coworking Space in Gariahat",
    "image": "https://img.cofynd.com/images/original/e0d2f95e7583e71c52ce2fac5d7d6d543c1145a3.png",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-bhowanipore",
    "name": "Bhowanipore",
    "title": "Coworking Space in Bhowanipore",
    "image": "https://img.cofynd.com/images/original/5be2c8494958a19d397d6d85c5b9c376ba86d419.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-sector-v",
    "name": "Sector V",
    "title": "Coworking Space in Sector V",
    "image": "https://img.cofynd.com/images/original/7e9c481520d35cfd0bc326a8f1cbdc66c15f964b.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-bose-road",
    "name": "Bose Road",
    "title": "Coworking Space in Bose Road",
    "image": "https://img.cofynd.com/images/latest_images_2024/ca7aac80b09e35706db7b830bf718f575644bc5d.webp",
    "ctaText": "Explore Spaces"
  }
];

