import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Goa Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * Sourced from verified active coworking listings in Goa (cofynd.com and qdesq.com):
 * name, area, starting price and photos are taken from each real listing.
 * Prices are the monthly price per seat shown on the listing ("On Request" when none is published).
 * Ratings are not published for these listings, so they are left empty.
 */

export const goaNeighborhoods = [
  "Panjim",
  "Porvorim",
  "Margao",
  "Candolim",
  "Anjuna",
  "Verna",
  "Vagator",
  "Dona Paula",
  "Mandrem",
  "Ucassaim",
  "Penha de Franca",
  "Parra"
];

// ============================================================================
// Page 1 (blocks: top grid, second, third, featured)
// ============================================================================
export const goaOfficeCards = [
  {
    "id": 1,
    "name": "91Springboard Goa",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "₹8,650",
    "period": "/ Month",
    "priceFormatted": "₹8,650 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/647bb88355805a1349766f1e6f9a5a14af877431.webp",
      "https://img.cofynd.com/images/latest_images_2024/4a4890e81e5a422e68a76107dd723ee313a21886.webp",
      "https://img.cofynd.com/images/latest_images_2024/30d8075f15644781669bad355e87878d7154ef98.webp",
      "https://img.cofynd.com/images/latest_images_2024/7b60c0ed38d86b72635ed7aae8ce4908ada406d7.webp",
      "https://img.cofynd.com/images/latest_images_2024/0badb7167d1071b7b906c3bcd18486bc954130d5.webp"
    ]
  },
  {
    "id": 2,
    "name": "Nomadgao",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/bdd0e6e2e1dff59018f04e1246e2b433845ff7a3.jpg",
      "https://img.cofynd.com/images/original/52a380adf2575c462429997ac985524afa9dbfa3.jpg",
      "https://img.cofynd.com/images/original/8f3247698f20b1cac246f606253659ebc07f6799.jpg",
      "https://img.cofynd.com/images/original/ab59e62bbe047ff99cde365abff151734daebbb4.jpg",
      "https://img.cofynd.com/images/original/9c37ef432eb0740b03acf954a74f68843ce1db9d.jpg"
    ]
  },
  {
    "id": 3,
    "name": "Ignite Edc Innovation Hub",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "₹4,500",
    "period": "/ Month",
    "priceFormatted": "₹4,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/63a72f3fc94998b5c0dce101feb670eee509e991.jpg",
      "https://img.cofynd.com/images/original/0fc9209f170cbb9b6ad02bab1b3a4e50366fb733.jpg",
      "https://img.cofynd.com/images/original/a26f34e07b1e252f0f9f7caf081b3e4b1a7e94a4.jpg",
      "https://img.cofynd.com/images/original/6cdddb5b2e0edffc1ea7c9901846732bdf6067ad.jpg",
      "https://img.cofynd.com/images/original/efb28475e2c70d544f7bffd3822d013fb2161956.jpg"
    ]
  },
  {
    "id": 4,
    "name": "MeWo - Meetings, Co-Working & Kaffe",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/c716c8350b56b488697714f5612f7e159892ff06.jpg",
      "https://img.cofynd.com/images/original/1441606e314da3cfb94972211cf0cdae27ec59a4.png",
      "https://img.cofynd.com/images/original/b3cdc028cfe4f2e8e43ba82fe8e90371db316dc5.png",
      "https://img.cofynd.com/images/original/ad8715702da2a4b34943746b6355bc696790b4d3.jpg",
      "https://img.cofynd.com/images/original/226f684b40fcfb163ed65abd9c4eb59cc52329b6.png",
      "https://img.cofynd.com/images/original/9ffd28e3957e729969d7bc524eb363e555668a00.png",
      "https://img.cofynd.com/images/original/6d394c5b311992cc2b2bb0f86ef748d16ff50e7b.png",
      "https://img.cofynd.com/images/original/079d26ce728f567aee22daa0e05811d8fc842906.jpg",
      "https://img.cofynd.com/images/original/355fb85cca01ceb89b83a10e2a444fd4bd516213.png",
      "https://img.cofynd.com/images/original/b65213b4368dc914dfbb1a801b4e0c30ce826b3c.png",
      "https://img.cofynd.com/images/original/f549c91656af303bcb31f54b8c0ebb613156e7b0.png",
      "https://img.cofynd.com/images/original/dc489abe204995160b3c21e97056ba3a41f8125c.png",
      "https://img.cofynd.com/images/original/c38221b4ad128d6f4d7620444639b5cf8aed821b.png"
    ]
  },
  {
    "id": 5,
    "name": "Mybranch Panjim",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/af8353ad2d5919ca556c8fb3473261d138d1f5db.jpg",
      "https://img.cofynd.com/images/original/a3dd843b361cc10367677dc2fb2c6196f3a7f18b.jpg",
      "https://img.cofynd.com/images/original/c4a975688f2046f34f5199321b760871d66f9c08.jpg",
      "https://img.cofynd.com/images/original/bdd6387e51668ed37970c1afd1c28ebf89d80528.jpg",
      "https://img.cofynd.com/images/original/f377797c33b75c9c850e4c7a2b7e4c9b133d3dd2.jpg",
      "https://img.cofynd.com/images/original/81af363c82332b5f65e349f6a9aa07e4f70f48d9.jpg"
    ]
  },
  {
    "id": 6,
    "name": "Corporate Deck",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "₹5,500",
    "period": "/ Month",
    "priceFormatted": "₹5,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/1afd7411d2e581cedf704ba16d799668393c2e22.jpg",
      "https://img.cofynd.com/images/original/542a55d4103bf2ea9cad3d1bc13b1d7a9f42a03a.jpg",
      "https://img.cofynd.com/images/original/6b549398873193728519da07fc3b70527fb515f4.jpg",
      "https://img.cofynd.com/images/original/089bf02fa4a438b016e57390bee7d07471af8264.jpg",
      "https://img.cofynd.com/images/original/d3fac31cd0707e97f700337a3e93ccf327e68600.jpg",
      "https://img.cofynd.com/images/original/777a474b6812b7a2879bd835c972b5f3573b8ce8.jpg"
    ]
  },
  {
    "id": 7,
    "name": "B2B Business Service",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "₹22,000",
    "period": "/ Month",
    "priceFormatted": "₹22,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/058a6f9171ddd5933f1792fd20731a1614e37172.jpg",
      "https://img.cofynd.com/images/original/77fe7fe8eb7e5d1d938782815ea478b7192c9c45.jpg",
      "https://img.cofynd.com/images/original/2e448e26f5bcdcc0c2c0db90826d11133fd6efe2.jpg",
      "https://img.cofynd.com/images/original/69b77065a6c4718152ed06d0d66a013c849fd70c.jpg",
      "https://img.cofynd.com/images/original/a2bed8d58a1d8159b7ff0c220f88271897b7092f.jpg"
    ]
  },
  {
    "id": 8,
    "name": "SMVV Desk Community",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/b7cc7929d0003661adc189f56174a9310bb0231b.jpg",
      "https://img.cofynd.com/images/original/0c7a289ee86d654a2818adff49f2fc995a0d4a52.jpg",
      "https://img.cofynd.com/images/original/802b4a8d05e789d88a76c5b1638cf5e073c1f1d5.jpg",
      "https://img.cofynd.com/images/original/8702d650ab49331afa2ee38517c28594c6cb8be2.jpg",
      "https://img.cofynd.com/images/original/e0cf378746ef80293a5b88be7326a9453a8e036f.jpg",
      "https://img.cofynd.com/images/original/d1872acd5ca7952667dbe7eb26afe1a17d7f8d65.jpg",
      "https://img.cofynd.com/images/original/e20ed8237d86630a483837db630213dc0e37aed3.jpg",
      "https://img.cofynd.com/images/original/bc674680bba0d5349a8d1c4dda5ebd0c3064ae83.jpg",
      "https://img.cofynd.com/images/original/d533186df7b72d59721d367a8408aab3bc837ebd.jpg",
      "https://img.cofynd.com/images/original/edecaa79581be860b24df2a57304c426e216dc73.jpg",
      "https://img.cofynd.com/images/original/68e4e424fec739e82bcb0fbe521078f9b92f0ce9.jpg",
      "https://img.cofynd.com/images/original/04d6dd88f3705ec608a1af11fa5667ecc4c575b4.jpg",
      "https://img.cofynd.com/images/original/9613a10ea92a6c76cc041278d9047a3858a685d7.jpg",
      "https://img.cofynd.com/images/original/8782451e266696752bf30af5db24f58b5fe01bd8.jpg",
      "https://img.cofynd.com/images/original/fca009a6564fdc7a11e276695269f30b64359d49.jpg"
    ]
  }
];

export const moreGoaOfficeCards = [
  {
    "id": 9,
    "name": "FiiRE HQ",
    "badge": null,
    "rating": null,
    "area": "Margao",
    "location": "Margao, Goa",
    "price": "₹4,999",
    "period": "/ Month",
    "priceFormatted": "₹4,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/6e020d2391c50a219e9202427fa36ea133f071ce.webp",
      "https://img.cofynd.com/images/latest_images_2024/4728f59e49086f19361090af0d31adb1dba79d65.webp",
      "https://img.cofynd.com/images/latest_images_2024/768335aba0b7b20413a99f09848473c589819e4d.webp",
      "https://img.cofynd.com/images/latest_images_2024/d315211d75f17c148151e84878c64ea924c52a8d.webp"
    ]
  },
  {
    "id": 10,
    "name": "KOWO WorkSpaces",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "₹8,500",
    "period": "/ Month",
    "priceFormatted": "₹8,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/56bde7ac5dfced7f6b8826f91b18692e672ebe0d.webp",
      "https://img.cofynd.com/images/latest_images_2024/b8491c538145f56401668769aec784f417f24d73.webp",
      "https://img.cofynd.com/images/latest_images_2024/bd462cd4f3347bc4ae233a628a7c7beaae39bb11.webp",
      "https://img.cofynd.com/images/latest_images_2024/bdeb9d4e2290d92452860aa1dc1380dc1a340e6b.webp",
      "https://img.cofynd.com/images/latest_images_2024/6036989d53215a37b26eb82d40e67f34996f1d05.webp"
    ]
  },
  {
    "id": 11,
    "name": "Wisdomlab",
    "badge": "Popular",
    "rating": null,
    "area": "Verna",
    "location": "Verna, Goa",
    "price": "₹7,749",
    "period": "/ Month",
    "priceFormatted": "₹7,749 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/88b871ce8ecfb80579a65e3b973cd618e080a7a0.webp",
      "https://img.cofynd.com/images/latest_images_2024/d47ec7f23d5537d4a700b528faac256c2286b47f.webp",
      "https://img.cofynd.com/images/latest_images_2024/688ac5724a055be16f2ee12d9c16751a7eb01289.webp",
      "https://img.cofynd.com/images/latest_images_2024/2a0721994cd326a227c60a7aecbddde81fb81435.webp",
      "https://img.cofynd.com/images/latest_images_2024/da40f2ee3b22fd39973807c953476cb0c9fd8037.webp"
    ]
  },
  {
    "id": 12,
    "name": "TIMEBOX",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/d7ed7737676e64ac0dd830d1bf305f2b04de53aa.jpg",
      "https://img.cofynd.com/images/original/70eda392e1489bcf4467222e7bea25774a135e7f.jpg",
      "https://img.cofynd.com/images/original/25b2aff16acec0513d2d8fbc57ce723a92ec12a8.jpg",
      "https://img.cofynd.com/images/original/40f40f0d1379ea85b2a81ff6454fded8d00688ef.jpg",
      "https://img.cofynd.com/images/original/ab2302d6d9e8cbc63ea88c474a654b18ef28b04b.jpg",
      "https://img.cofynd.com/images/original/4d699d165cb9135e2ca9ee776931b70b7897df6c.jpg",
      "https://img.cofynd.com/images/original/14f673a48798a2ab43682f002cd72af839d0403b.jpg",
      "https://img.cofynd.com/images/original/82dfb853bdcfc451bc057daa29ae89b81ae31e67.jpg",
      "https://img.cofynd.com/images/original/a66597c93a2c17b674912edbf858039108c305c9.jpg"
    ]
  },
  {
    "id": 13,
    "name": "KOENIG Solutions",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Santa Inez, Panjim, Goa",
    "price": "₹7,000",
    "period": "/ Month",
    "priceFormatted": "₹7,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1715078101/o3vbtsqokm2o7rdsaaro.webp",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/0af81dc041b289bcfc1cfa0b7d5a17ed_CCfK1lKRT.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/f8be9dea731e1b94bcfd479e0a4b6bcd_8-rknSD5MQ.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/b0ba3cac6eafcabed48cc30ea8b870bc_lNa4-dhgp.jpg",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/e24fd30d55ab0279b981cc5fa97122d2_p8wc2AMrZK.png",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/860f0bf02a2a38a07bce7a7ad336ebb0_JZL4PBfc3.png",
      "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/d0ec9af79975fd5013499c7748d1b84c_Rf67i2lHXr.png",
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1715056083/pbgghoc3l4saw0rtedc1.png"
    ]
  },
  {
    "id": 14,
    "name": "Gera Imperium",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "₹4,500",
    "period": "/ Month",
    "priceFormatted": "₹4,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1557137514/glbugcnd2k03ienil6dp.webp"
    ]
  },
  {
    "id": 15,
    "name": "Goan Paradise",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Panjim, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1507879118/pdptur4r6kx29cqmfabd.webp"
    ]
  },
  {
    "id": 16,
    "name": "GreenSpace Bistro",
    "badge": null,
    "rating": null,
    "area": "Vagator",
    "location": "Vagator, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://digest.myhq.in/wp-content/uploads/2021/08/GreenSpace-Bistro-coworking-space-in-Goa.jpg"
    ]
  }
];

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp'
};

export const finalGoaOfficeCards = [
  {
    "id": 17,
    "name": "The Cove",
    "badge": null,
    "rating": null,
    "area": "Dona Paula",
    "location": "Dona Paula, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_1200/workspaces/the-cove-goa-cacravillage/2.jpg"
    ]
  },
  {
    "id": 18,
    "name": "Clay Coworking Cafe",
    "badge": null,
    "rating": null,
    "area": "Anjuna",
    "location": "Anjuna, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://digest.myhq.in/wp-content/uploads/2021/08/Clay-Coworking-Cafe-coworking-space-in-Goa.jpg"
    ]
  },
  {
    "id": 19,
    "name": "Moustache Cowork Hostel",
    "badge": null,
    "rating": null,
    "area": "Mandrem",
    "location": "Mandrem, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://digest.myhq.in/wp-content/uploads/2021/08/Moustache-Cowork-Hostel-coworking-space-in-Goa.jpg"
    ]
  },
  {
    "id": 20,
    "name": "Old Quarter Hostel",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Fontainhas, Panjim, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://digest.myhq.in/wp-content/uploads/2021/08/Old-Quarter-Hostel.jpg"
    ]
  },
  {
    "id": 21,
    "name": "Blue Lotus",
    "badge": null,
    "rating": null,
    "area": "Ucassaim",
    "location": "Ucassaim, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://digest.myhq.in/wp-content/uploads/2021/08/Blue-Lotus.jpg"
    ]
  },
  {
    "id": 22,
    "name": "Barabor Betim",
    "badge": null,
    "rating": null,
    "area": "Penha de Franca",
    "location": "Penha de Franca, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://digest.myhq.in/wp-content/uploads/2021/08/Barabor-Betim-coworking-space-in-Goa.jpg"
    ]
  },
  {
    "id": 23,
    "name": "Bootstart",
    "badge": null,
    "rating": null,
    "area": "Mandrem",
    "location": "Mandrem, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://digest.myhq.in/wp-content/uploads/2021/08/Bootstart-coworking-space-in-Goa.jpg"
    ]
  },
  {
    "id": 24,
    "name": "Cafe Rasa",
    "badge": null,
    "rating": null,
    "area": "Panjim",
    "location": "Fontainhas, Panjim, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://www.thedigitalnomad.asia/wp-content/uploads/2024/01/cafe-rasa-goa-1.jpg"
    ]
  }
];

export const featuredGoaOfficeCards = [
  {
    "id": 25,
    "name": "Barefoot Goa",
    "badge": null,
    "rating": null,
    "area": "Parra",
    "location": "Parra, Goa",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://www.thedigitalnomad.asia/wp-content/uploads/2024/01/barefoot-goa-1.jpg"
    ]
  }
];

// Aliases for compatibility
export const goaAreas = goaNeighborhoods;
export const goaSpaces = goaOfficeCards;
export const areas = goaNeighborhoods;
export const spaces = goaOfficeCards;

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
  totalPages: 1,
  initialPage: 1
};

// Pages 2-4 have no listings (all real Goa listings fit on page 1)
export const pageTwoGoaOfficeCards = [];
export const pageTwoMoreGoaOfficeCards = [];
export const pageTwoFinalGoaOfficeCards = [];
export const pageTwoFeaturedGoaOfficeCards = [];
export const pageThreeGoaOfficeCards = [];
export const pageThreeMoreGoaOfficeCards = [];
export const pageThreeFinalGoaOfficeCards = [];
export const pageThreeFeaturedGoaOfficeCards = [];
export const pageFourGoaOfficeCards = [];

// Extra cards shown only when an area filter is clicked (none needed - every listing is already in the page above)
export const areaExtraOfficeCards = {};

// Similar spaces on the detail page are picked from the same area of the listings above
export const similarGoaOfficeCards = [];

// ============================================================================
// Comprehensive Goa Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allGoaOfficeCards = [
  ...goaOfficeCards,
  ...moreGoaOfficeCards,
  ...finalGoaOfficeCards,
  ...featuredGoaOfficeCards,
  ...pageTwoGoaOfficeCards,
  ...pageTwoMoreGoaOfficeCards,
  ...pageTwoFinalGoaOfficeCards,
  ...pageTwoFeaturedGoaOfficeCards,
  ...pageThreeGoaOfficeCards,
  ...pageThreeMoreGoaOfficeCards,
  ...pageThreeFinalGoaOfficeCards,
  ...pageThreeFeaturedGoaOfficeCards,
  ...pageFourGoaOfficeCards,
  ...similarGoaOfficeCards,
  ...Object.values(areaExtraOfficeCards).flat()
];

/**
 * Find a Goa office card by slug (or legacy numeric id)
 * @param {string|number} id
 * @returns {object|null}
 */
export const getGoaOfficeCardById = (id) => findOfficeBySlug(allGoaOfficeCards, id, "goa");
export const getGoaOfficeSlug = (space) => officePath(allGoaOfficeCards, space, "goa");

// ============================================================================
// Top Coworking Locations in Goa (Explore by Neighborhood)
// ============================================================================
export const topGoaCoworkingLocations = [
  {
    "id": "loc-panjim",
    "name": "Panjim",
    "title": "Coworking Space in Panjim",
    "image": "https://img.cofynd.com/images/latest_images_2024/647bb88355805a1349766f1e6f9a5a14af877431.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-mandrem",
    "name": "Mandrem",
    "title": "Coworking Space in Mandrem",
    "image": "https://digest.myhq.in/wp-content/uploads/2021/08/Moustache-Cowork-Hostel-coworking-space-in-Goa.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-margao",
    "name": "Margao",
    "title": "Coworking Space in Margao",
    "image": "https://img.cofynd.com/images/latest_images_2024/6e020d2391c50a219e9202427fa36ea133f071ce.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-verna",
    "name": "Verna",
    "title": "Coworking Space in Verna",
    "image": "https://img.cofynd.com/images/latest_images_2024/88b871ce8ecfb80579a65e3b973cd618e080a7a0.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-vagator",
    "name": "Vagator",
    "title": "Coworking Space in Vagator",
    "image": "https://digest.myhq.in/wp-content/uploads/2021/08/GreenSpace-Bistro-coworking-space-in-Goa.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-dona-paula",
    "name": "Dona Paula",
    "title": "Coworking Space in Dona Paula",
    "image": "https://res.cloudinary.com/myhq/image/upload/f_auto,q_auto/w_1200/workspaces/the-cove-goa-cacravillage/2.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-anjuna",
    "name": "Anjuna",
    "title": "Coworking Space in Anjuna",
    "image": "https://digest.myhq.in/wp-content/uploads/2021/08/Clay-Coworking-Cafe-coworking-space-in-Goa.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-ucassaim",
    "name": "Ucassaim",
    "title": "Coworking Space in Ucassaim",
    "image": "https://digest.myhq.in/wp-content/uploads/2021/08/Blue-Lotus.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-penha-de-franca",
    "name": "Penha de Franca",
    "title": "Coworking Space in Penha de Franca",
    "image": "https://digest.myhq.in/wp-content/uploads/2021/08/Barabor-Betim-coworking-space-in-Goa.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-parra",
    "name": "Parra",
    "title": "Coworking Space in Parra",
    "image": "https://www.thedigitalnomad.asia/wp-content/uploads/2024/01/barefoot-goa-1.jpg",
    "ctaText": "Explore Spaces"
  }
];
