import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Mumbai Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * Sourced from verified active coworking listings in Mumbai (cofynd.com, qdesq.com and other public listings):
 * name, area, starting price and photos are taken from each real listing.
 * Prices are the monthly price per seat shown on the listing ("On Request" when none is published).
 * Ratings are not published for these listings, so they are left empty.
 */

export const mumbaiNeighborhoods = [
  "Andheri East",
  "Andheri",
  "Powai",
  "Lower Parel",
  "Navi Mumbai",
  "Thane",
  "BKC",
  "Andheri West",
  "Goregaon",
  "Vashi",
  "Bandra East",
  "Thane West",
  "Mulund West",
  "Chembur",
  "Fort",
  "Worli",
  "Bandra West",
  "Churchgate",
  "Ghatkopar West",
  "Santacruz East",
  "Vikhroli",
  "Borivali West",
  "Dadar",
  "Dadar West",
  "Kandivali West",
  "Malad West",
  "Nariman Point",
  "Santacruz West",
  "Bandra",
  "Bhandup",
  "Borivali",
  "Chandivali",
  "Dadar East",
  "G Block BKC",
  "Goregaon West",
  "Kala Ghoda",
  "Kurla",
  "Lower Parel West",
  "Malad",
  "Mulund",
  "Nerul",
  "Vikhroli West",
  "Wagle Industrial Estate",
  "Amrut Nagar",
  "Andheri (W",
  "Andheri Kurla Road",
  "B Wing",
  "Ballard Estate",
  "Ballard Estate,",
  "Belapur",
  "Bhim Nagar",
  "Cbd Belapur",
  "CBD Belapur",
  "Colaba",
  "Deonar",
  "Equinox",
  "Fort Mumbai",
  "Goregaon East",
  "Goregoan East",
  "Gundavali",
  "Jogeshwari East",
  "Juhu",
  "Juinagar",
  "Kamala Nagar",
  "Khar West",
  "Kharghar",
  "LBS Marg",
  "Lightbridge",
  "Lower Pare",
  "Mahim",
  "Mahim West",
  "Marine Drive",
  "Marol MIDC Industry Estate",
  "Marzban Road",
  "Mulund East",
  "Netaji Subhash Nagar",
  "Prabhadevi",
  "Prabhadevi Road",
  "Railway Colony",
  "Sai Wadi",
  "Sakinaka",
  "Sanpada",
  "Sector 14",
  "Shanti Nagar",
  "South Mumbai",
  "Turbhe",
  "Vile Parle",
  "Yashodham"
];

// ============================================================================
// All listing pages. mumbaiPages[0] is page 1, mumbaiPages[1] is page 2 ...
// Each page holds 4 blocks (top grid, second, third, featured) of up to 8 cards.
// ============================================================================
export const mumbaiPages = [
  [
    [
      {
        "id": 1,
        "name": "BHIVE Platinum BKC",
        "badge": "Premium",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹29,999",
        "period": "/ Month",
        "priceFormatted": "₹29,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/d2ced2b2fd3add051fad38b0f1d4d05906120ef4.webp",
          "https://img.cofynd.com/images/latest_images_2024/44c38f3395e20498c456dba71dba733daadaa77e.webp",
          "https://img.cofynd.com/images/latest_images_2024/67f4622288439548d7a260ad8df7578a4895b3d3.webp",
          "https://img.cofynd.com/images/latest_images_2024/46614ab512ea1352f94f354d0c9b9e46706bacd5.webp",
          "https://img.cofynd.com/images/latest_images_2024/a9d215210fca4b5dffb212f02a27901304c51ff2.webp",
          "https://img.cofynd.com/images/latest_images_2024/fcdd980f71fa0246780441766d843efeb3581dcc.webp",
          "https://img.cofynd.com/images/latest_images_2024/69328e2e676af68f514eac8c34e3c9f8df0ae7f0.webp",
          "https://img.cofynd.com/images/latest_images_2024/d900b19f559b3bc9b1ee1ed0ad64e03b77a52ac3.webp",
          "https://img.cofynd.com/images/latest_images_2024/5be4c0ce38b09a620a559172f3ad91c571e3770c.webp",
          "https://img.cofynd.com/images/latest_images_2024/7208f0a8d521f0e9f2d45e6af0945311ebf50265.webp",
          "https://img.cofynd.com/images/latest_images_2024/78ec74b2af9650fb668ac9d50c5f1ad9995981db.webp"
        ]
      },
      {
        "id": 2,
        "name": "Innov8 Parinee Crescenzo",
        "badge": "Premium",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹25,999",
        "period": "/ Month",
        "priceFormatted": "₹25,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/47031735288eab53001f87b6f51f6c5d6151af4b.webp",
          "https://img.cofynd.com/images/latest_images_2024/c41c2ce999a12becb2036cd976763c29399b70a4.webp",
          "https://img.cofynd.com/images/latest_images_2024/87037bdd9c660930ec5b3635a9a1cbe53c0bf6a4.webp",
          "https://img.cofynd.com/images/latest_images_2024/5e1982503e7ba56f6743d1d82007d395f2724064.webp",
          "https://img.cofynd.com/images/latest_images_2024/13d1cd93707abb95d9ca4e59d9e7fb414ab2e0a1.webp",
          "https://img.cofynd.com/images/latest_images_2024/9fd8878d7ff490e0d6e84dcbcd0ee4228a0449d1.webp"
        ]
      },
      {
        "id": 3,
        "name": "Connekt",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/64d5123cd5384ba1166560d6dd361f6df8750152.webp",
          "https://img.cofynd.com/images/latest_images_2024/bc55245c0c06af179b811c23e24feeab0300b97b.webp",
          "https://img.cofynd.com/images/latest_images_2024/0109e65010c639bf96298936405dec82216081d9.webp",
          "https://img.cofynd.com/images/latest_images_2024/70912d925ec213cc74da1d16d8307ea2efcd5cbd.webp",
          "https://img.cofynd.com/images/latest_images_2024/8a7f1bda62c207a44add743cd3dd4fd3779020ff.webp",
          "https://img.cofynd.com/images/latest_images_2024/b8a81120ca79649f7c7afc19a4e7a19268c1cfcf.webp",
          "https://img.cofynd.com/images/latest_images_2024/9f4df40770ffae2e5111b913b56631a349bf553f.webp",
          "https://img.cofynd.com/images/latest_images_2024/ed182ef359ebc4c708b2209d5d3bfb706841afb1.webp"
        ]
      },
      {
        "id": 4,
        "name": "Innov8 Boston House",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹16,999",
        "period": "/ Month",
        "priceFormatted": "₹16,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/339b83831e77f7dbab040dd28c6c47bf92ec7e40.webp",
          "https://img.cofynd.com/images/latest_images_2024/63d5323a93b9a3350b4fa12e939477cd7301fd17.webp",
          "https://img.cofynd.com/images/latest_images_2024/7cea2265d6134836c3c8330b0cbb7c74bc33b032.webp",
          "https://img.cofynd.com/images/latest_images_2024/6020d78b2639adf9771cdfe7a9cbca7a3289b8bd.webp",
          "https://img.cofynd.com/images/latest_images_2024/7c1abafd65a35901c849f633bc3e6f2f50ce7ca5.webp",
          "https://img.cofynd.com/images/latest_images_2024/50afb67cbb88e974f758239cbef26aa0d95342aa.webp"
        ]
      },
      {
        "id": 5,
        "name": "Awfis One International Centre",
        "badge": "Popular",
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹22,999",
        "period": "/ Month",
        "priceFormatted": "₹22,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/e811ca2e79ef8557c9025628365d7031d2520daf.jpg",
          "https://img.cofynd.com/images/latest_images_2024/d76ec92e8f3caaa2e71206d0ce92d1f7b41400e7.webp",
          "https://img.cofynd.com/images/latest_images_2024/e7305b8dcbb23475f5d61916563221172ce26b2f.webp",
          "https://img.cofynd.com/images/latest_images_2024/439fca17c3967985df70588edf278535beb421d2.webp",
          "https://img.cofynd.com/images/latest_images_2024/1d3e5e0beab8f54a4cb9f289c52ef73e347c8dbe.webp",
          "https://img.cofynd.com/images/original/e1dcbf446d615b86813f7897a58f0c36c38de1df.jpg"
        ]
      },
      {
        "id": 6,
        "name": "Awfis Parinee Crescenzo",
        "badge": "Popular",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹18,999",
        "period": "/ Month",
        "priceFormatted": "₹18,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/4f076ab3c78909cf1db87cd84c0b4805f3d18212.jpg",
          "https://img.cofynd.com/images/original/9052b2ada9add364faee3f03b0c57c66508ffe63.jpg",
          "https://img.cofynd.com/images/original/a97c973d4a01de108a337736b86904dc988e0bcc.jpg",
          "https://img.cofynd.com/images/latest_images_2024/44db71d522f59f399d4778bedeec0cb09531f0f3.webp",
          "https://img.cofynd.com/images/latest_images_2024/5b7abd820e431134887957b401c53f5e422fe3c9.webp",
          "https://img.cofynd.com/images/original/0a832ca59dfd72fc83f49a401af20bed922f196b.jpg"
        ]
      },
      {
        "id": 7,
        "name": "IndiQube Arena",
        "badge": "Popular",
        "rating": null,
        "area": "Jogeshwari East",
        "location": "Jogeshwari East, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/55d5ab17e8c5bbbd73e7fdadc4498316a3d09d15.webp",
          "https://img.cofynd.com/images/latest_images_2024/3c6c9a4dc1d87c05fee84e555b297958179355fe.webp",
          "https://img.cofynd.com/images/latest_images_2024/f643d3dd577f7b54660da2b6f16a0f55ce2d9236.webp",
          "https://img.cofynd.com/images/latest_images_2024/f7ab5e6aeba9cb6027e1eecece2e99032ded80b0.webp",
          "https://img.cofynd.com/images/latest_images_2024/1147a53b1964086fd3a61e4173053a968fb53f0f.webp"
        ]
      },
      {
        "id": 8,
        "name": "Awfis Aston Building",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹10,999",
        "period": "/ Month",
        "priceFormatted": "₹10,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/37a4212866bc75f883c25660a63fd4d1c066e43d.jpg",
          "https://img.cofynd.com/images/latest_images_2024/50b19b2e4a1a623ebf772c7e023d2ef22fdb6c34.webp",
          "https://img.cofynd.com/images/latest_images_2024/a2a8f1e9f407313f7df138d14cc8c46e8d00df7f.webp",
          "https://img.cofynd.com/images/original/44d3928c5533145dc01d2d3390e05f60742d3bd1.jpg",
          "https://img.cofynd.com/images/latest_images_2024/c376bc45064c5d30997216eaed18f5eb5bedbe6c.webp",
          "https://img.cofynd.com/images/latest_images_2024/777e0bd0df2c77afb040f1de83d03b2d1be02833.webp",
          "https://img.cofynd.com/images/latest_images_2024/cee1482c58b8d45acf444332abb27b12d64327aa.webp",
          "https://img.cofynd.com/images/latest_images_2024/1fd708be78280be5e78cc695ef0bcdaf28a51191.webp"
        ]
      }
    ],
    [
      {
        "id": 9,
        "name": "DA Coworking Andheri",
        "badge": "Special Offer",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹8,999",
        "period": "/ Month",
        "priceFormatted": "₹8,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/cd6c761486ce0dc47b08cb053fcb778db0174226.webp",
          "https://img.cofynd.com/images/latest_images_2024/e0f924d3e4122dad99be06e9da9e1b570dea1d21.webp",
          "https://img.cofynd.com/images/latest_images_2024/a3e860a65192e36cfe3ae5c76bc4aa98e2078316.webp",
          "https://img.cofynd.com/images/latest_images_2024/4eec9bc908886434125909908da9c1b609e71e06.webp",
          "https://img.cofynd.com/images/latest_images_2024/1f0a211faad74855815b721c2058dacf20d800ea.webp"
        ]
      },
      {
        "id": 10,
        "name": "IndiQube Lakeview",
        "badge": "Popular",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/22e5b985e9532e4f57bc0ce4e221c5c440c93086.webp",
          "https://img.cofynd.com/images/latest_images_2024/6b9d3544a3bcf59844068c8b65b68b00faeb990b.webp",
          "https://img.cofynd.com/images/latest_images_2024/bfb1a4342959181169eef8e700767c99bab379cc.webp",
          "https://img.cofynd.com/images/latest_images_2024/464fe118be14d72aa12773c30e6f4d637b35061f.webp",
          "https://img.cofynd.com/images/latest_images_2024/dc65d22f207d1d325c7aba152ac53535c79bbb3d.webp"
        ]
      },
      {
        "id": 11,
        "name": "Awfis Empire Tower",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/dcd3c89dd6b74d317bd35367ec863c8b6ffed65b.jpg",
          "https://img.cofynd.com/images/original/b80b8b1aca7dc0c83613adb942a541e437dc0870.jpg",
          "https://img.cofynd.com/images/original/97dc62556a4898bfc2ae37d558920ffc353ea2d0.jpg",
          "https://img.cofynd.com/images/latest_images_2024/7183b728a5eba2634534aaa5f000a4fb523ce320.webp",
          "https://img.cofynd.com/images/original/91914ec5ba1a92e3c2f4d0184acbbc497ce99b7b.jpg",
          "https://img.cofynd.com/images/original/a5da56bd9aa9c37b014d0a13c321a4673bac1641.jpg"
        ]
      },
      {
        "id": 12,
        "name": "Smartworks Paradigm",
        "badge": "Popular",
        "rating": null,
        "area": "Malad West",
        "location": "Malad West, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/715b3d7ba0d503e632e9dc0ab092675a294919ff.webp",
          "https://img.cofynd.com/images/latest_images_2024/72f8592bc3d310d903ecc68cc5361f87102045ef.webp",
          "https://img.cofynd.com/images/latest_images_2024/598074abb746d1eadbe1369ee60302a797995db1.webp",
          "https://img.cofynd.com/images/latest_images_2024/d7371176f5ef239f21570d07ea687ffdade94c40.webp",
          "https://img.cofynd.com/images/latest_images_2024/2a43194c19c9a3c35944c0512f48e9530e404bab.webp"
        ]
      },
      {
        "id": 13,
        "name": "Awfis Bhairav Milestone",
        "badge": "Premium",
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/c29118bdc6cf2024214798c28abceff97b8ea520.webp",
          "https://img.cofynd.com/images/latest_images_2024/1ae0614c7afcd0a3741bcc1cd6ffbae15abf19a3.webp",
          "https://img.cofynd.com/images/latest_images_2024/15715bdf97ad2c35dcb1e436be9846f0fed108cf.webp",
          "https://img.cofynd.com/images/latest_images_2024/d3b018b7392880cfcfa31e778e91e6824156c213.webp",
          "https://img.cofynd.com/images/latest_images_2024/b4f3bf13731168bdb16270418d25de48c41c6aa7.webp"
        ]
      },
      {
        "id": 14,
        "name": "Smartworks Times Square",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/a496dd0eb78fefe875426f7b26bb942178afbdaf.webp",
          "https://img.cofynd.com/images/latest_images_2024/b8dd35f27ed462a246edd7c37a63d94b3f7e958a.webp",
          "https://img.cofynd.com/images/latest_images_2024/a492606db5d890cc624d74847516916ce5e778b3.webp",
          "https://img.cofynd.com/images/latest_images_2024/2bc061167704628534db947950ebb22409e3b4b0.webp",
          "https://img.cofynd.com/images/latest_images_2024/87674d39d9ce4550a34f7b23d5c4113ac90f2fb7.webp"
        ]
      },
      {
        "id": 15,
        "name": "Awfis Ruby Towers",
        "badge": "Popular",
        "rating": null,
        "area": "Dadar",
        "location": "Dadar, Mumbai",
        "price": "₹14,499",
        "period": "/ Month",
        "priceFormatted": "₹14,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/7b9bb458408882cf44d4dcb3c59dac6901b4a3ff.webp",
          "https://img.cofynd.com/images/latest_images_2024/3f98ef56c84afb7e6e1ccfd3bd1ea7a7ae5bc848.webp",
          "https://img.cofynd.com/images/latest_images_2024/3cfbf0a1b0cbb4bc3738fe65ce6b81c17bac2352.webp",
          "https://img.cofynd.com/images/latest_images_2024/a3f6132a60316ba4ed64624a4a1097b5fd26d9f7.webp",
          "https://img.cofynd.com/images/latest_images_2024/319d447fb7d80f2d3886e973291e328747991500.webp"
        ]
      },
      {
        "id": 16,
        "name": "Smartworks Fleet House",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/fa12c9c66716fb7d53f5ff0cc8c7fadfd2e859d6.webp",
          "https://img.cofynd.com/images/latest_images_2024/d3b95a1c8bb6b78afc6a53bfa1a76f91914edfa4.webp",
          "https://img.cofynd.com/images/latest_images_2024/02ff01ca8506590b9e4d1a75e66e0de3df367dfc.webp",
          "https://img.cofynd.com/images/latest_images_2024/d24229df42b14b1ee45ae8f9c170b53f4aec7d32.webp",
          "https://img.cofynd.com/images/latest_images_2024/051a307b3bb979ed945e7d77bb0d9ae06ccb56e9.webp",
          "https://img.cofynd.com/images/latest_images_2024/43614b06dfed5121a3a1a85d327416ca9a6ec3b2.webp",
          "https://img.cofynd.com/images/latest_images_2024/e26109a37e6edee8303d3fcbb0adc589972dd743.webp",
          "https://img.cofynd.com/images/latest_images_2024/dd4b3d5d4f13103dc9d1f34864ebc4bf5bac235c.webp"
        ]
      }
    ],
    [
      {
        "id": 17,
        "name": "Awfis Kalpataru Prime",
        "badge": "Popular",
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/8f7aea87da64216d6d8bd5c0661f0325b5eb096c.webp",
          "https://img.cofynd.com/images/latest_images_2024/b05b6fe608c4d815e2635fa43152b02f0b90b1c9.webp",
          "https://img.cofynd.com/images/latest_images_2024/91e89a13fb2010f43614b23b9ff6f520758df265.webp",
          "https://img.cofynd.com/images/latest_images_2024/ea1d8d9b6fec8ceb3de46f9aeb39e7e82a2a8510.webp",
          "https://img.cofynd.com/images/latest_images_2024/31cf9acb2e4ed96e7bc61c79ebcba7f53823607e.webp",
          "https://img.cofynd.com/images/latest_images_2024/ef4b04ed182022e6e94fc3b6337c2be111176374.webp"
        ]
      },
      {
        "id": 18,
        "name": "Innov8 Q Parc",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/55bb4f35d3c06f47e01497675da150fc6990b75b.webp",
          "https://img.cofynd.com/images/latest_images_2024/e64c678e3f6cedc12db691390abb8d1bc4db19a9.webp",
          "https://img.cofynd.com/images/latest_images_2024/4adbf93559d32651cb551a52faee2c6c99d94262.webp",
          "https://img.cofynd.com/images/latest_images_2024/b798e845f748776db20e6231cc0a29aea07bd97e.webp",
          "https://img.cofynd.com/images/latest_images_2024/b0e5b2b16188c9cdf77b7e25656c9d58dfd42969.webp",
          "https://img.cofynd.com/images/latest_images_2024/470cf7a676acd7cd72e28ccd7eeaf57bc3fc85ca.webp"
        ]
      },
      {
        "id": 19,
        "name": "Awfis Lodha iThink",
        "badge": "Popular",
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/971ca40351395e91c88fd3a276d3e31fa6991a6a.webp",
          "https://img.cofynd.com/images/latest_images_2024/5071b85aea0d191eaab2d17a1c17c0b6321c9582.webp",
          "https://img.cofynd.com/images/latest_images_2024/0f91ad94b0dc8bc02e0b6d320526867c1dd259bd.webp",
          "https://img.cofynd.com/images/latest_images_2024/a79c73e431e02ff934da77470210cf4f53fec25a.webp",
          "https://img.cofynd.com/images/latest_images_2024/6ebb5dcb537983d7a2d5b7718616d899110805ee.webp"
        ]
      },
      {
        "id": 20,
        "name": "Innov8 PAN Infotech",
        "badge": "Premium",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹13,999",
        "period": "/ Month",
        "priceFormatted": "₹13,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/f1705956cbec5bd8546a986da222d2c8ae3d756f.webp",
          "https://img.cofynd.com/images/latest_images_2024/53abdaace6c4185467397469a10999a000f80cc3.webp",
          "https://img.cofynd.com/images/latest_images_2024/b6fae37f48bdbaf6edf234a54d79958c1d5bf74f.webp",
          "https://img.cofynd.com/images/latest_images_2024/a964442feadeadbdad7893cdfc1218351ae62795.webp",
          "https://img.cofynd.com/images/latest_images_2024/fc70587e2304d4255fe3000bccedde21561e0a2b.webp",
          "https://img.cofynd.com/images/latest_images_2024/b807d2ab596fadc4ef802d853f6f2d47923d49da.webp",
          "https://img.cofynd.com/images/latest_images_2024/dc67d38793f37ade9b90f65c3bb8a38cdf8e190e.webp"
        ]
      },
      {
        "id": 21,
        "name": "Regus Dev Corpora",
        "badge": "Popular",
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹13,499",
        "period": "/ Month",
        "priceFormatted": "₹13,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/7c4ab1c9db65906c94f49cfa4219842fe3335413.webp",
          "https://img.cofynd.com/images/latest_images_2024/1e05a39ec1ae92844801425b879b720b18c2a7b8.webp",
          "https://img.cofynd.com/images/latest_images_2024/1238a14ac99ae1aa238572d12b48f0c3025b725a.webp",
          "https://img.cofynd.com/images/latest_images_2024/1d0dfd3169564bac8a7f0ab8400f17c165d7c195.webp",
          "https://img.cofynd.com/images/latest_images_2024/6cfe86c025c5d57c0b5d088805d77c4269e493d1.webp"
        ]
      },
      {
        "id": 22,
        "name": "Awfis Skyline Icon",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/ef91a5a97d709ba65dae4069a200ea326c2b2b58.webp",
          "https://img.cofynd.com/images/latest_images_2024/3c6480226639b18fb10d27d53b218b71f670ee77.webp",
          "https://img.cofynd.com/images/latest_images_2024/e91c20d8f8205b0f9c9b9f96c525139759ed3291.webp",
          "https://img.cofynd.com/images/latest_images_2024/d6cbf3b6aabe463b59da3d1fe6e856743afb34b6.webp",
          "https://img.cofynd.com/images/latest_images_2024/f1f95a1f51cc002707b8dcdfeace5d130baa8ebf.webp"
        ]
      },
      {
        "id": 23,
        "name": "Innov8 Times Square",
        "badge": "Premium",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹15,999",
        "period": "/ Month",
        "priceFormatted": "₹15,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/098a5979e6210f54513398525214b6e0cd29826a.webp",
          "https://img.cofynd.com/images/latest_images_2024/94248a79a8b2419317b73841395775fae36dc963.webp",
          "https://img.cofynd.com/images/latest_images_2024/547f4dac532f837bd9349eea2f394a1bf8571c70.webp",
          "https://img.cofynd.com/images/latest_images_2024/9d4c680787bf4b785d2f7a50b5609346251f2b79.webp",
          "https://img.cofynd.com/images/latest_images_2024/eebcadddb56596f22e742d2cc9d118bf2253aa9a.webp",
          "https://img.cofynd.com/images/latest_images_2024/bb04f15b165c1fa2fd5e8c1afde5d8430b872b46.webp"
        ]
      },
      {
        "id": 24,
        "name": "Awfis Auram QParc",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/383d643fc9db834d4aa51755113a6b4dfac71e29.webp",
          "https://img.cofynd.com/images/latest_images_2024/3f11796563c8ac8a9072300678747c5271a8c897.webp",
          "https://img.cofynd.com/images/latest_images_2024/244be69af9f95643a958316b06eef0fc6c47cb1e.webp",
          "https://img.cofynd.com/images/latest_images_2024/bc5ecd7a7ee59f403243f0fe58ccd2081170133b.webp",
          "https://img.cofynd.com/images/latest_images_2024/2ead4097f78ef9dc47475a884a4d943241b6ec43.webp"
        ]
      }
    ],
    [
      {
        "id": 25,
        "name": "The Executive Centre The Capital",
        "badge": "Popular",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹59,999",
        "period": "/ Month",
        "priceFormatted": "₹59,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/5bbebc5c13260b7f0bcc913466992425a32f9815.webp",
          "https://img.cofynd.com/images/latest_images_2024/c8f052b2b28d66f7bce127771d5f277a6d07e20f.webp",
          "https://img.cofynd.com/images/latest_images_2024/3284995dc3fdcb18651335a3e18f209f188d67c1.webp",
          "https://img.cofynd.com/images/latest_images_2024/d8e2b35191a07d38dfa15d85c7964cf7483e15f4.webp",
          "https://img.cofynd.com/images/latest_images_2024/67b39927c22950127ef90df74752566bc27632db.webp",
          "https://img.cofynd.com/images/latest_images_2024/97d069472c5b1edb6db7de76860933ef90a19cdd.webp",
          "https://img.cofynd.com/images/latest_images_2024/c23a764802838f9047126714d3167242fe068652.webp"
        ]
      },
      {
        "id": 26,
        "name": "Awfis Raheja Titanium",
        "badge": "Popular",
        "rating": null,
        "area": "Goregaon",
        "location": "Goregaon, Mumbai",
        "price": "₹16,499",
        "period": "/ Month",
        "priceFormatted": "₹16,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/e6d7f3cb554ad57f9ef152a6e8398400b2f31179.webp",
          "https://img.cofynd.com/images/latest_images_2024/33e571ddb40ab0a7e7542076d566282fd45df04f.webp",
          "https://img.cofynd.com/images/latest_images_2024/896fd0d87fcdb2cc5f3797df44a1ce5582b62619.webp",
          "https://img.cofynd.com/images/latest_images_2024/eb9e600245c61f5e7344a6be5db1200a61568136.webp",
          "https://img.cofynd.com/images/latest_images_2024/eea0804002a596c81a60f458d98d30b0bda04d6e.webp"
        ]
      },
      {
        "id": 27,
        "name": "Innov8 Solitaire Corporate Park",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹14,999",
        "period": "/ Month",
        "priceFormatted": "₹14,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/caf9cbf822e4d065c3e5415b960a0e86321188cf.webp",
          "https://img.cofynd.com/images/latest_images_2024/1c2aa2987707b3d62e0a0a59a8c345e2c2acae8c.webp",
          "https://img.cofynd.com/images/latest_images_2024/b6ecf25bea10ead57ce66b18553cb40c35901bad.webp",
          "https://img.cofynd.com/images/latest_images_2024/be6052b688ba5ec14e3ea6c6c7ee832d32d29c25.webp",
          "https://img.cofynd.com/images/latest_images_2024/e31106085efcca6c3ca24f81b36388e5f4991825.webp"
        ]
      },
      {
        "id": 28,
        "name": "Awfis Adani Inspire BKC",
        "badge": "Popular",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹22,999",
        "period": "/ Month",
        "priceFormatted": "₹22,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/84b005f631f1bf7e15a030cc8642c172ddf26e7e.webp",
          "https://img.cofynd.com/images/latest_images_2024/96227c464d2c33a3938e8d7df352037c4695b902.webp",
          "https://img.cofynd.com/images/latest_images_2024/0f2eabd757566c30a1630a741fa8058533d9a507.webp",
          "https://img.cofynd.com/images/latest_images_2024/d435226a1559e062715eaddfec23d99343523053.webp",
          "https://img.cofynd.com/images/latest_images_2024/c6acf6fe431c326ae92251ca7a9968cceb66e4c5.webp",
          "https://img.cofynd.com/images/latest_images_2024/756635f472d3931db044d7ad793fa0c20b916b2b.webp"
        ]
      },
      {
        "id": 29,
        "name": "The Executive Centre Parinee Crescenzo",
        "badge": "Premium",
        "rating": null,
        "area": "Bandra East",
        "location": "Bandra East, Mumbai",
        "price": "₹59,999",
        "period": "/ Month",
        "priceFormatted": "₹59,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/4488fc351ccbe7a707dbae87a1b50a499787fb4b.webp",
          "https://img.cofynd.com/images/latest_images_2024/bdb6b17edbae43254700d769ac47d947410e2e27.webp",
          "https://img.cofynd.com/images/latest_images_2024/4202864c202ea3195f0e118c7b04f8004360fc7c.webp",
          "https://img.cofynd.com/images/latest_images_2024/97594fab724724b86c8f750f4bdd83135d980d38.webp",
          "https://img.cofynd.com/images/latest_images_2024/9fe9ae6d75a981e4c9189085b5be3402c2c4c310.webp",
          "https://img.cofynd.com/images/latest_images_2024/27cef64555dcdbab7f42ceef11e3e00459f7599d.webp"
        ]
      },
      {
        "id": 30,
        "name": "Awfis Vaman Techno Center",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/1f7f2cb179007886f8de82056758ac44ec576442.webp",
          "https://img.cofynd.com/images/latest_images_2024/b79e10657ec00cc28987d67dc3083bf94eb96d6f.webp",
          "https://img.cofynd.com/images/latest_images_2024/aaa9b327176c4bca71d95600982615436236cf3a.webp",
          "https://img.cofynd.com/images/latest_images_2024/b627b796eb2515284392e3dc448aeaebe2d7f6ad.webp",
          "https://img.cofynd.com/images/latest_images_2024/a91b417a1c0e59b11693ac4b30f8407357c1a9bb.webp"
        ]
      },
      {
        "id": 31,
        "name": "The Executive Centre Maker Maxity",
        "badge": "Premium",
        "rating": null,
        "area": "Bandra East",
        "location": "Bandra East, Mumbai",
        "price": "₹59,999",
        "period": "/ Month",
        "priceFormatted": "₹59,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/f33835e45f98d5b6d04f4f1a1d42d15a5336310d.webp",
          "https://img.cofynd.com/images/latest_images_2024/c41962da5f19cf92ca64416f4f872f576f06cc96.webp",
          "https://img.cofynd.com/images/latest_images_2024/1720e57395df7cad4168845d4a8525476754948b.webp",
          "https://img.cofynd.com/images/latest_images_2024/0bbe8e217e812ef9a2f1de9ed19572959f59a41a.webp",
          "https://img.cofynd.com/images/latest_images_2024/eb581798537f51a65eca630c9419d2a04c339c81.webp",
          "https://img.cofynd.com/images/latest_images_2024/27d47564163ea85ed25270137a97e2445a7bdba0.webp",
          "https://img.cofynd.com/images/latest_images_2024/cc90b75d1f8fc8c285786c7985fe3bca6f5b7edc.webp"
        ]
      },
      {
        "id": 32,
        "name": "Awfis Raheja Mindspace",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/eedfe7c1718cb07f47cf15c28dfd33240bcb427d.webp",
          "https://img.cofynd.com/images/latest_images_2024/4e62586e4291a2eef4ccc1d5406394ee06890983.webp",
          "https://img.cofynd.com/images/latest_images_2024/ddd4fe00c3315766120bd0e1ef92738563d33851.webp",
          "https://img.cofynd.com/images/latest_images_2024/814bfa165d06b3d750d5f81a835a88bfd6aa9218.webp",
          "https://img.cofynd.com/images/latest_images_2024/376694d90ab38dfac62a0d1bbd4ed6368768a0b1.webp"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 33,
        "name": "The Executive Centre FIFC",
        "badge": "Premium",
        "rating": null,
        "area": "Bandra East",
        "location": "Bandra East, Mumbai",
        "price": "₹59,999",
        "period": "/ Month",
        "priceFormatted": "₹59,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/924236ea69003af6abe3b6a4e4fe71a09ee7370e.webp",
          "https://img.cofynd.com/images/latest_images_2024/9965d38ec6bd6c7c374c432486b6aba2061a56ac.webp",
          "https://img.cofynd.com/images/latest_images_2024/e1f6bfd3fca230168e2d7aaf4d1eb209a28a0a9e.webp",
          "https://img.cofynd.com/images/latest_images_2024/7922fbdf618ae957af30ca53dfa675840ced2fae.webp",
          "https://img.cofynd.com/images/latest_images_2024/291de5bd01f168451b7a2d94477c4827d95282ab.webp",
          "https://img.cofynd.com/images/latest_images_2024/2d6b970b8df67e1e6362ea05cddea4128df1e208.webp"
        ]
      },
      {
        "id": 34,
        "name": "Regus Tiffany Building",
        "badge": "Popular",
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹9,499",
        "period": "/ Month",
        "priceFormatted": "₹9,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/584e95125b89679f1356beef44f426ff0d77946e.webp",
          "https://img.cofynd.com/images/latest_images_2024/46193a34064304ea71927ccb34a05bcf303eb729.webp",
          "https://img.cofynd.com/images/latest_images_2024/edd1431d725482752343f2545a2b50baeb474b9d.webp",
          "https://img.cofynd.com/images/latest_images_2024/e1b3485e14b5e15afc74e23197041b39c52c334f.webp",
          "https://img.cofynd.com/images/latest_images_2024/7b0fcf44d708277b4c2adf134e82dc1f6b54d223.webp"
        ]
      },
      {
        "id": 35,
        "name": "Regus Rupa Renaissance",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹8,999",
        "period": "/ Month",
        "priceFormatted": "₹8,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/8c0664ee113fb8b6dcbf3982b0cafa51cb223ee9.webp",
          "https://img.cofynd.com/images/latest_images_2024/f4150e5c9fb3eb0b3f1f69ac16b957d3c90eac24.webp",
          "https://img.cofynd.com/images/latest_images_2024/c18fce7741d57ff1b85cc0d1db1966c78c1d03d4.webp",
          "https://img.cofynd.com/images/latest_images_2024/884a2588fedd56e4072ea995ed695fd8a35b4adc.webp",
          "https://img.cofynd.com/images/latest_images_2024/743b28efad48371d4101fb77a5f5c9f7c50684b1.webp",
          "https://img.cofynd.com/images/latest_images_2024/e06f16dd1e88316436dbf5210cbce8d98efe4a8d.webp",
          "https://img.cofynd.com/images/latest_images_2024/35882ff1294c13fdcb1ba10f0917fa927176ef5e.webp",
          "https://img.cofynd.com/images/latest_images_2024/de0f05b7aa082563a32aab1f9564b419fa042d60.webp"
        ]
      },
      {
        "id": 36,
        "name": "Regus Rupa Solitaire",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹8,999",
        "period": "/ Month",
        "priceFormatted": "₹8,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/3c6cd40c9eae33e0b0fd2b0bf86e4ae6b4619ace.webp",
          "https://img.cofynd.com/images/latest_images_2024/8961b0759a9c243ed6597426d7f110e2aa945bf2.webp",
          "https://img.cofynd.com/images/latest_images_2024/72fca045bb967c7b6ef40ecf94ea007fcd106137.webp",
          "https://img.cofynd.com/images/latest_images_2024/338d9dfec76247fb28fd8d44a9f813b5e971332c.webp",
          "https://img.cofynd.com/images/latest_images_2024/63ef3930e1c9ecde24b4fdee93b42a8ddf9f7549.webp",
          "https://img.cofynd.com/images/latest_images_2024/1ceffe90e8485eaf88e0b665a4eaada59b2b3399.webp"
        ]
      },
      {
        "id": 37,
        "name": "Regus Imperial Business Park",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹10,999",
        "period": "/ Month",
        "priceFormatted": "₹10,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/3e64489061d5eb8c9d5a5ad4033523c747d2e509.webp",
          "https://img.cofynd.com/images/latest_images_2024/8379ea43d469e0e3ceaabbd70b77af90e9e9c18c.webp",
          "https://img.cofynd.com/images/latest_images_2024/8974e7a708bd50950cb81a5dc06f828deacff147.webp",
          "https://img.cofynd.com/images/latest_images_2024/856577e6f74fce6ba112222dd327aa20aac52f53.webp",
          "https://img.cofynd.com/images/latest_images_2024/71db1a323d8e0746d3b916d9fc40245f4d02cf77.webp",
          "https://img.cofynd.com/images/latest_images_2024/65f4fbf8e2d8b15a8e00a6db5ce7840b6009e0bb.webp"
        ]
      },
      {
        "id": 38,
        "name": "Regus Platinum Techno Park",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹19,999",
        "period": "/ Month",
        "priceFormatted": "₹19,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/12351e8aa136d86c8877407ef656288961ca5168.webp",
          "https://img.cofynd.com/images/latest_images_2024/d49d19d6e80da115ba33d5874c2936a4e2180cb7.webp",
          "https://img.cofynd.com/images/latest_images_2024/1fd64fa74a0eaff6282cc8ce6146bb8f8855c48a.webp",
          "https://img.cofynd.com/images/latest_images_2024/f5756dc87456b0542407289da57b517e77fe4160.webp",
          "https://img.cofynd.com/images/latest_images_2024/aea7ae2e4d27a2273c372c9819289bbcacf891d1.webp"
        ]
      },
      {
        "id": 39,
        "name": "Regus Inspire Hub",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹16,999",
        "period": "/ Month",
        "priceFormatted": "₹16,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/9635a89800f6f8f5e1ab1b27ae812f948818ecf6.webp",
          "https://img.cofynd.com/images/latest_images_2024/0acab4116e92f787178f526b643ee889fd1ee9f4.webp",
          "https://img.cofynd.com/images/latest_images_2024/a496edfdbd56ae4f9d25d4e9033630d4a44d8086.webp",
          "https://img.cofynd.com/images/latest_images_2024/de65e6d2587b236492789da8a114e60268eed2fb.webp",
          "https://img.cofynd.com/images/latest_images_2024/28eaceac5dc2ef954e276a533286c300f34b4ac4.webp",
          "https://img.cofynd.com/images/latest_images_2024/530e90ac7bd294b5862587685c42f35b41105816.webp",
          "https://img.cofynd.com/images/latest_images_2024/4c631a58b84314fa615663aee0d7bf4521ae5cc8.webp",
          "https://img.cofynd.com/images/latest_images_2024/86ce3cb4eb87e42470be58e0d44491d722fd2de0.webp"
        ]
      },
      {
        "id": 40,
        "name": "Regus Supreme Business Park",
        "badge": "Popular",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹17,699",
        "period": "/ Month",
        "priceFormatted": "₹17,699 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/7398216f806e016c6a8ab4ae24f407e887e6f2c3.webp",
          "https://img.cofynd.com/images/latest_images_2024/f1a8a2d9699d39e4235e867e43ef99ce70e53a98.webp",
          "https://img.cofynd.com/images/latest_images_2024/69cfb13247f80f56b7cfe99dce130519b5998164.webp",
          "https://img.cofynd.com/images/latest_images_2024/70d6275f88b10f917faac7eabb2b8fc604e1142d.webp",
          "https://img.cofynd.com/images/latest_images_2024/f1f2e0500c9e62dfe5a29860b5ea51a0301265b4.webp",
          "https://img.cofynd.com/images/latest_images_2024/fb379ff8c9484fbe886905890e2e5dd202830cbb.webp"
        ]
      }
    ],
    [
      {
        "id": 41,
        "name": "Regus Dynasty Business Park",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/251b069d977a94587609d7ff8eaa31e639256581.jpg",
          "https://img.cofynd.com/images/original/e0a30461f64010848d0bb6b98840c903c420c4b3.jpg",
          "https://img.cofynd.com/images/original/9019fbd88853f9c43fc802328b142a347c65ed50.jpg",
          "https://img.cofynd.com/images/original/7ca73183e6aa4dbb92ecdbd1f41e4c9c6c47442a.jpg",
          "https://img.cofynd.com/images/original/79a7e67158bc06730d43da0652fc1046b3654aba.jpg"
        ]
      },
      {
        "id": 42,
        "name": "91springboard",
        "badge": "Popular",
        "rating": null,
        "area": "Vikhroli",
        "location": "Vikhroli, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/a2500140bebe0189bb64a24051f304a63ddc3b03.webp",
          "https://img.cofynd.com/images/latest_images_2024/e153ac16e70bea025d211a09ef47d022e9367542.webp",
          "https://img.cofynd.com/images/latest_images_2024/6af5972a71d5eedc1b41daa88b306df9c582f54a.webp",
          "https://img.cofynd.com/images/latest_images_2024/730c112c31dba62166186257b89ed1ee2567a13a.webp",
          "https://img.cofynd.com/images/latest_images_2024/783ca313115be18c72fe90addc8c113bc6acdc0a.webp",
          "https://img.cofynd.com/images/latest_images_2024/df8040a269caa71866cebfe46d4e8e8b03baa84e.webp",
          "https://img.cofynd.com/images/latest_images_2024/208d472c99631849ccafd76e270ca3f2a5ff2ac9.webp"
        ]
      },
      {
        "id": 43,
        "name": "91Springboard 74 Technopark",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹13,999",
        "period": "/ Month",
        "priceFormatted": "₹13,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/011b20a794dbdc115f6545c066a8c9cbf18ccd1e.webp",
          "https://img.cofynd.com/images/latest_images_2024/75bbc23d14d78eaa2078583403c100d1fa325d02.webp",
          "https://img.cofynd.com/images/latest_images_2024/c1705f64b9d8f9a63d152d9d8a62f7f77c84a24d.webp",
          "https://img.cofynd.com/images/latest_images_2024/98e134240d28eb548c47584402dd00a9f515cadf.webp",
          "https://img.cofynd.com/images/latest_images_2024/1b2cd945ea1f1f8dc89302caceb2c2f13be5892c.webp",
          "https://img.cofynd.com/images/latest_images_2024/c44ab3533f3cd1bd723ce99a22a4591fcd604c3b.webp",
          "https://img.cofynd.com/images/latest_images_2024/49fbc35708be65f46488826adab9202558cbce4f.webp"
        ]
      },
      {
        "id": 44,
        "name": "91Springboard BKC Kalina",
        "badge": "Popular",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹14,999",
        "period": "/ Month",
        "priceFormatted": "₹14,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/dadb47b6adf9867be3f916731a7f098ee440258e.jpg",
          "https://img.cofynd.com/images/latest_images_2024/db40c5fae75856bae2edc76eed452192616c84b4.webp",
          "https://img.cofynd.com/images/original/af73ecaab1af4804bc37d358e1a0f3733f7f55bc.jpg",
          "https://img.cofynd.com/images/latest_images_2024/52f81b1d379da3835e8d092e3cd2a360026d286c.webp",
          "https://img.cofynd.com/images/original/e42a1cd2eb3cac54481483890c95298681ca02e1.jpg",
          "https://img.cofynd.com/images/latest_images_2024/cbebde16c03d55912b46516d52c72e23db7680e4.webp",
          "https://img.cofynd.com/images/latest_images_2024/a2efef9e60d87b04798d35d11ca464ad463b5b9d.webp"
        ]
      },
      {
        "id": 45,
        "name": "My Desk Techno IT Park",
        "badge": "Special Offer",
        "rating": null,
        "area": "Borivali",
        "location": "Borivali, Mumbai",
        "price": "₹7,499",
        "period": "/ Month",
        "priceFormatted": "₹7,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/16265234ec34cf8413260c30eaf0f09bf7d7c42e.jpg",
          "https://img.cofynd.com/images/latest_images_2024/c73871d8d40f70b0c9b6f3355738ae7181928714.webp",
          "https://img.cofynd.com/images/original/9369c81a2f60e4b0d40db9600ef95ca14e5cdf38.jpg",
          "https://img.cofynd.com/images/original/30b21c3251e6a8d8a086e1a1bbd2b0fcdc3134b5.jpg",
          "https://img.cofynd.com/images/original/8c2fd4b19831ed122e70d7b4af18827cbaf04348.jpg",
          "https://img.cofynd.com/images/latest_images_2024/dbe5dab78ff0dc4397ce2dbd7ef5781e82360deb.webp"
        ]
      },
      {
        "id": 46,
        "name": "WeGrow Business Facilitators",
        "badge": "Popular",
        "rating": null,
        "area": "Vashi",
        "location": "Vashi, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/6c3c29f662dd3c182e3dbe8e0f2f01ee2a9fa794.webp",
          "https://img.cofynd.com/images/latest_images_2024/f69d5d82c128b5c722a9ba1933bb742c27f2a064.webp",
          "https://img.cofynd.com/images/original/386d9869ba1eba154e7a4615e771a1ec88f1d744.png",
          "https://img.cofynd.com/images/original/b472b55b121fa51ea1c15fadffff8d19e2135905.png",
          "https://img.cofynd.com/images/latest_images_2024/d2aaecc02df2fd5e268691d6a814ff22c0e5f82c.webp",
          "https://img.cofynd.com/images/latest_images_2024/3c1632ae6eaae8e39f2006449fab0c800e6c7aa9.webp",
          "https://img.cofynd.com/images/original/fe0b580e48a54da7e12992a06ec65f4f0b1b417b.jpg"
        ]
      },
      {
        "id": 47,
        "name": "Ministry of New",
        "badge": "Popular",
        "rating": null,
        "area": "Fort",
        "location": "Fort, Mumbai",
        "price": "₹21,999",
        "period": "/ Month",
        "priceFormatted": "₹21,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/6b6e7232ac68ec1b8725509afb7704e930240b54.jpg",
          "https://img.cofynd.com/images/original/b805462f3911b9ec97cd747c99bad165cb662997.jpg",
          "https://img.cofynd.com/images/original/5e9cd4a10b822cc49dd1299f641eac47c4b44d62.jpg",
          "https://img.cofynd.com/images/original/b617416e8db95aca6ab2a74f0e21898b182b6b74.jpg",
          "https://img.cofynd.com/images/original/8ad9c298888ff8088a7626104e7724fe9b65eb97.jpg",
          "https://img.cofynd.com/images/latest_images_2024/12123cf59ab8ff540808656a07ffd3a04ef2c452.webp",
          "https://img.cofynd.com/images/latest_images_2024/27ef5489b80f659dd96abcdc11c6e2e8e0eb2668.webp"
        ]
      },
      {
        "id": 48,
        "name": "Community Coworks",
        "badge": "Premium",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹8,999",
        "period": "/ Month",
        "priceFormatted": "₹8,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/281d275382fe8e00e2d694ecad2d6e1680f2c798.jpg",
          "https://img.cofynd.com/images/original/8cd7f6b36fd5e8e5e5550706ef21ed91b5498b32.jpg",
          "https://img.cofynd.com/images/original/c901e91f79b272eaa8e70e581953270f26fae130.jpg",
          "https://img.cofynd.com/images/original/eb90a5d1d21f95d6bdc99a4059d8570fe3d70ef0.jpg",
          "https://img.cofynd.com/images/original/5aac3b1678789ba055d6b13fbb507b9d25d188d2.jpg",
          "https://img.cofynd.com/images/original/c205cc83341512918ea79bfdf2a366f24182df25.jpg",
          "https://img.cofynd.com/images/original/9de04812aa794b2a8a02093481b4549fe74008a2.jpg",
          "https://img.cofynd.com/images/original/569cf364f0894391694452b5e62e67849c3c2c95.jpg",
          "https://img.cofynd.com/images/original/6341bdc6b477811e58dee2dd33e7fe5f22049bf0.jpg"
        ]
      }
    ],
    [
      {
        "id": 49,
        "name": "Mumbai Coworking",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹17,999",
        "period": "/ Month",
        "priceFormatted": "₹17,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/81538b796ccc45c9ad98c3fb0ffde02ee19a8194.webp",
          "https://img.cofynd.com/images/original/77c787fbdf0d8aba814e37fa40a9d0067734367f.jpg",
          "https://img.cofynd.com/images/original/c4ed02377463537a02bc289e692877af0de679b2.jpg",
          "https://img.cofynd.com/images/original/fdbb26309a2c68b0dd1f1d531daff33cecfc88c8.jpg",
          "https://img.cofynd.com/images/original/fe078862868f6116eb64ab6e874faa3de2f9425b.jpg",
          "https://img.cofynd.com/images/original/a3e190b0757d80daeb5b73b8b43aafaad5cdd4d9.jpg",
          "https://img.cofynd.com/images/latest_images_2024/1d1676793470a5275acec4f618e231f2e5dd12e6.webp",
          "https://img.cofynd.com/images/latest_images_2024/1ef0042f4c8eb9a19e177f8ccf10293aeec3b6a3.webp"
        ]
      },
      {
        "id": 50,
        "name": "The Boardroom Modi House",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹15,999",
        "period": "/ Month",
        "priceFormatted": "₹15,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/3cc42882eed16eb7653048045bbe54ccad21042c.jpg",
          "https://img.cofynd.com/images/original/73bddf4fec6de7b76362877e2e3131a4f6956c1f.jpg",
          "https://img.cofynd.com/images/original/ae8fe6ad31122313249a96cd9c3eefa741056fd8.jpg",
          "https://img.cofynd.com/images/original/ecae4595119ad5a9b9663ee956609f9591e4975e.jpg",
          "https://img.cofynd.com/images/original/aaa8b2db6383e7846e8d0018d238bc518456c9c0.jpg",
          "https://img.cofynd.com/images/original/2592c18ea87807e7697793e839f4f5a07bc11c61.jpg",
          "https://img.cofynd.com/images/original/1fbc10efbf4e47bc6b23fb8cfd77535303d74b76.jpg",
          "https://img.cofynd.com/images/original/bcc99195b6f9683250040dfc7d1cfbf35d18fd29.jpg"
        ]
      },
      {
        "id": 51,
        "name": "Ascend Cowork",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹6,999",
        "period": "/ Month",
        "priceFormatted": "₹6,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/97d5d8fcc30daddfedcf7da06d20e9573485e130.jpg",
          "https://img.cofynd.com/images/latest_images_2024/d0b335784619364e1b00cd1080466ae04c387453.webp",
          "https://img.cofynd.com/images/original/5f9adaca90360ec30e0d16eb63fe9cdba100d757.jpg",
          "https://img.cofynd.com/images/original/cb33a29b5d057b2c3a6dd91e0ca20ec5cdfb72b0.jpg",
          "https://img.cofynd.com/images/original/f6ce0ea5a6e69739cde9951958ae26093e0c4179.jpg",
          "https://img.cofynd.com/images/original/b16f699adb5529cd6a5810cdd1f7901f2f012e2f.jpg",
          "https://img.cofynd.com/images/latest_images_2024/b51d655bd1d87a67afeb6e81773c23223d49d71c.webp"
        ]
      },
      {
        "id": 52,
        "name": "Avirahi",
        "badge": "Popular",
        "rating": null,
        "area": "Borivali",
        "location": "Borivali, Mumbai",
        "price": "₹8,499",
        "period": "/ Month",
        "priceFormatted": "₹8,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/e16e5e4663b27cf7390add78ef441d36b6e1da10.jpg",
          "https://img.cofynd.com/images/original/a41f9a2fee5f872d758169a5a707916c92f0636e.jpg",
          "https://img.cofynd.com/images/original/c476a3ddad8039c418eeab84b64a346a9f22ba3a.jpg",
          "https://img.cofynd.com/images/original/4630facfa55b61430aa5044d30e592b9314470c9.jpg",
          "https://img.cofynd.com/images/original/6c30b1ea0e59b8f257022d96af6a1ae8fe46cef3.jpg",
          "https://img.cofynd.com/images/original/1ae8a354ed95da5a32c5d14b5347fc0c033f3ede.jpg"
        ]
      },
      {
        "id": 53,
        "name": "Bootstart Coworking – Wakefield House",
        "badge": "Popular",
        "rating": null,
        "area": "Worli",
        "location": "Worli, Mumbai",
        "price": "₹7,499",
        "period": "/ Month",
        "priceFormatted": "₹7,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/030b2d1c199a81aa976a12de4d2ce8046e48a99d.webp",
          "https://img.cofynd.com/images/latest_images_2024/c72f54430264ba21afc16918ad2c9fcadfce18c0.webp",
          "https://img.cofynd.com/images/original/eb8143efd45de55078a7c5b27534b8567894d23e.jpg",
          "https://img.cofynd.com/images/latest_images_2024/f51b0e6a5beba0e435e935f658095e1cfd8cb507.webp",
          "https://img.cofynd.com/images/latest_images_2024/0bfd56e356c9ac737fe39dd05ee934070eb8ed37.webp",
          "https://img.cofynd.com/images/latest_images_2024/2f7de268d2217fffb17437e0132614e491b83b5b.webp"
        ]
      },
      {
        "id": 54,
        "name": "One Degree",
        "badge": "Popular",
        "rating": null,
        "area": "LBS Marg",
        "location": "LBS Marg, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/d23550bcc1621be7c0981f4eb11aeb21e5616b5f.jpg",
          "https://img.cofynd.com/images/original/ecb6850046aabd3e7c5c9cf329df3ab766af4b76.jpg",
          "https://img.cofynd.com/images/original/afea0ae27ec56ca6fab0e78d47194ee88320cdb7.jpg",
          "https://img.cofynd.com/images/original/81877e7290ac6eafcbb832ee0348e56f07e8f709.jpg",
          "https://img.cofynd.com/images/original/cb3a7442a3f6f9a94fd87c41b41695971ee9a673.jpg",
          "https://img.cofynd.com/images/original/4b59645d3c0c8af053db4baeaf8aacdf041eb611.jpg",
          "https://img.cofynd.com/images/original/9653d0597cc3ff915f90335b5775fdd65185ea69.jpg",
          "https://img.cofynd.com/images/original/fe634ca610e55e8ebff6f9f350cbc8d756cefc63.jpg",
          "https://img.cofynd.com/images/original/f2ac3a58b53d9743b2709ae31fe7d0835992f7ce.jpg",
          "https://img.cofynd.com/images/original/9632c5656301d6d26931c3192a86e2dfe6358f33.jpg",
          "https://img.cofynd.com/images/original/1ffd375b7b6f66d63ddd68894e24f53c15c8b2d4.jpg"
        ]
      },
      {
        "id": 55,
        "name": "Lumos Cowork Shree Padmini Building",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/905e7146355f9ea1bba6d40ad855fbef2d256ff6.jpg",
          "https://img.cofynd.com/images/latest_images_2024/8388d557dfbe401d6ecd1b659062ee6fbe56c0b9.webp",
          "https://img.cofynd.com/images/original/ffec037de5699adc63aaecbe751e9c35d77c7434.jpg",
          "https://img.cofynd.com/images/latest_images_2024/a1ebe268b2d982e995c68e158280d4d3af24b383.webp",
          "https://img.cofynd.com/images/original/4f39074041158ecfebf53da2ad526f5685f9d55d.jpg",
          "https://img.cofynd.com/images/latest_images_2024/7e59289a28b6e4eddfe8bfc2358342672528a4d7.webp",
          "https://img.cofynd.com/images/latest_images_2024/b234f6351203e4ad866094cfea4f7f8c24ee40d6.webp",
          "https://img.cofynd.com/images/latest_images_2024/3f12b4dfd64414b9833a97ff38e9a422f18e2d93.webp"
        ]
      },
      {
        "id": 56,
        "name": "Empire Business Centre Empire Complex",
        "badge": "Popular",
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹25,999",
        "period": "/ Month",
        "priceFormatted": "₹25,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/2925865ffa2b6768704a6ecc905962661634e447.jpg",
          "https://img.cofynd.com/images/original/33cf6baf30ffc72c9ac00bb44bdccf534dd1bfc4.jpg",
          "https://img.cofynd.com/images/original/64d84616382a293bfa10f3fc0ceb7fa16a6d61cb.jpg",
          "https://img.cofynd.com/images/original/4daa0226e5761d29ffe6c3d9cae0412b18020cc7.jpg",
          "https://img.cofynd.com/images/latest_images_2024/0132418db210b5c09bface41c58a1634343e0130.webp",
          "https://img.cofynd.com/images/original/4c7b04221a9ced6e549178e8dd8c0358c4e22c96.jpg",
          "https://img.cofynd.com/images/latest_images_2024/a1c1de8ad7d12d8ea2d84d055b49f43975527ec6.webp"
        ]
      }
    ],
    [
      {
        "id": 57,
        "name": "WorkWise Trade World",
        "badge": "Popular",
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/8c65ec4481eb4fe0eebe0083beaafda501eb3ed9.jpg",
          "https://img.cofynd.com/images/latest_images_2024/49bab3d4a5239d5e27342321a6c2175e14024527.webp",
          "https://img.cofynd.com/images/original/40bcaa65a879aa153d5aaa3fbe27075c5ffa5c0d.jpg",
          "https://img.cofynd.com/images/original/98eefcfcc5d443b0ca0a0c3088b3c8b9d534c2b3.jpg",
          "https://img.cofynd.com/images/original/4caef0353cd50954a31749acec26f6d5c1aa3e5b.jpg",
          "https://img.cofynd.com/images/latest_images_2024/bed23c636fea3a8cdd3d9cf0887df35f943992f3.webp"
        ]
      },
      {
        "id": 58,
        "name": "Quest Coworks Technopolis Knowledge Park",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹16,999",
        "period": "/ Month",
        "priceFormatted": "₹16,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/7a477a9ed0e8085dde4f245a1a1f79aa37d5b187.jpg",
          "https://img.cofynd.com/images/original/4c64d35e54f372eb9ecfdfe219782fed0b5de1b2.jpg",
          "https://img.cofynd.com/images/original/c5f60b834a05566e6602849a32d71db3546a467c.jpg",
          "https://img.cofynd.com/images/original/ebf2f5e036f049b5439f569b6ab2fdbefedbb870.jpg",
          "https://img.cofynd.com/images/original/e428c69377c76da9f51819da3cc7fcebebfcb597.jpg"
        ]
      },
      {
        "id": 59,
        "name": "Quest Offices",
        "badge": null,
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹18,000",
        "period": "/ Month",
        "priceFormatted": "₹18,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/45ee285f2b010cfcf463979142329ee6ae3dbb40.jpg",
          "https://img.cofynd.com/images/original/746eda7a2b8e6a05d155f359c156157ad79b30f9.jpg",
          "https://img.cofynd.com/images/original/ab9841a2f80a96e53e753bb9a42a2d411b48b79b.jpg",
          "https://img.cofynd.com/images/original/5fa11679544ce24f10d8fa4af2a3b59e58858d8c.jpg",
          "https://img.cofynd.com/images/original/7720828eb96d256e1f6c906905d3902bd0d59741.jpg",
          "https://img.cofynd.com/images/original/9e23ed23e077753a1828c0ceb984f8fddbe125a3.jpg",
          "https://img.cofynd.com/images/original/57de037e9724fb33a2eb0dd9c3b5fcb7726ab595.jpg"
        ]
      },
      {
        "id": 60,
        "name": "Access Work",
        "badge": "Special Offer",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹16,999",
        "period": "/ Month",
        "priceFormatted": "₹16,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/22e02525082d7481d9aa01dcae50c0ce2cfea447.jpg",
          "https://img.cofynd.com/images/original/118996e17da5eb268aeea8d2668e809ee38431f5.jpg",
          "https://img.cofynd.com/images/original/c530820671a1a883d62e378c35863cd2260f6579.jpg",
          "https://img.cofynd.com/images/original/153f61d09678ad755c7c9f402f7cb6c1b041f683.jpg",
          "https://img.cofynd.com/images/original/655d074dd0af372b4003118b7d89696c20db44f2.jpg"
        ]
      },
      {
        "id": 61,
        "name": "Cowrks Prudential",
        "badge": "Popular",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹19,999",
        "period": "/ Month",
        "priceFormatted": "₹19,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/b1e5a819ab82e3494d9e2ab81f0ab164e81c0a01.webp",
          "https://img.cofynd.com/images/original/5382e30cfa62e5bd47feae77ca4bbf9ee82cc327.jpg",
          "https://img.cofynd.com/images/original/9ceb1e7c1fe97821bd638eb4b1ff66e72763e114.jpg",
          "https://img.cofynd.com/images/original/756fb08d7ca29ea07183328c0a2ee217e4a9b8b9.jpg",
          "https://img.cofynd.com/images/latest_images_2024/41947441e1698ec0e5be6ed17e1281d8c563e830.webp",
          "https://img.cofynd.com/images/latest_images_2024/6e90ff7e77c576a9125a3831a405496929a905b1.webp",
          "https://img.cofynd.com/images/latest_images_2024/7edaef96e3e86b17de367197f15bd2281a94770a.webp",
          "https://img.cofynd.com/images/original/51e39dc38f33d492efe53097ea0d7d3d3b9fd5c5.jpg"
        ]
      },
      {
        "id": 62,
        "name": "Incuspaze Ackruti Star",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹15,999",
        "period": "/ Month",
        "priceFormatted": "₹15,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/5547a8aa3a264a849af6f32596575c34eea59a63.webp",
          "https://img.cofynd.com/images/latest_images_2024/0a1f4b25cf0bc9aa2efbbe86fbc84a2899202c6b.webp",
          "https://img.cofynd.com/images/latest_images_2024/2a783b665d5a40fefc1a79cd2c86f76aeb342ba6.webp",
          "https://img.cofynd.com/images/latest_images_2024/bd63e3cd20e5f69f868af5a0215f75689c0812ae.webp",
          "https://img.cofynd.com/images/latest_images_2024/8331b06d857844f467507dfe7dd340a64a9f69b3.webp",
          "https://img.cofynd.com/images/latest_images_2024/74c64a3b7c889bd291c69b9ac5926b326bbc27b5.webp",
          "https://img.cofynd.com/images/latest_images_2024/6c223aac69734c6ace47950224ce9b87d3e45dcd.webp",
          "https://img.cofynd.com/images/latest_images_2024/46ef4178d2f55658c410d2e57882be1eed0722be.webp",
          "https://img.cofynd.com/images/latest_images_2024/345e2f346776c4ba47bdf2a4f2569977d7dac200.webp",
          "https://img.cofynd.com/images/latest_images_2024/6d7a5321a26b0986bb00774122ef91fafced5180.webp",
          "https://img.cofynd.com/images/latest_images_2024/084298cad7982fbe09582b41ba7aa35adac3de9e.webp",
          "https://img.cofynd.com/images/latest_images_2024/e14e056f719a295155605c87ac550467f20f2653.webp"
        ]
      },
      {
        "id": 63,
        "name": "Lets Work Runwal Square",
        "badge": "Popular",
        "rating": null,
        "area": "Mulund",
        "location": "Mulund, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/c0f44f5219824fe6390cd65b6c1a125750c6d300.webp",
          "https://img.cofynd.com/images/latest_images_2024/55f47fd35744f16541137a47976ea1070e351b46.webp",
          "https://img.cofynd.com/images/latest_images_2024/624beaaecb28b428ba2f83fb25415d5dbc4d9620.webp",
          "https://img.cofynd.com/images/latest_images_2024/8068f592a322cb1e1f4d730e6763e8b1bcba04ab.webp",
          "https://img.cofynd.com/images/latest_images_2024/05883db46ef38873c3a5e531b1c8e07b955fd264.webp",
          "https://img.cofynd.com/images/latest_images_2024/529bce281d4bf470a5d7a876e55b2885d8d4807a.webp",
          "https://img.cofynd.com/images/latest_images_2024/72a0e8d5cbb5f0d0ce7e6d7856ddc06319c8d430.webp"
        ]
      },
      {
        "id": 64,
        "name": "Community Coworks Ackruti Trade Centre",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/b43b98b9b311df95245c7d85d1776b6108323da6.webp",
          "https://img.cofynd.com/images/latest_images_2024/b7b84addeaa9046b6df7a17d4c4085fe9377740d.webp",
          "https://img.cofynd.com/images/latest_images_2024/c4c2a904bf7a34e557a972456805fc2252c0e248.webp",
          "https://img.cofynd.com/images/latest_images_2024/1c291ded43d9331fbe1f133929ff3c307479d75d.webp",
          "https://img.cofynd.com/images/latest_images_2024/2a7855d270b4e133d1843ee8abe458be2064dee0.webp",
          "https://img.cofynd.com/images/latest_images_2024/577cb0d71ad971e6b871f9b401ade33bf4623c01.webp",
          "https://img.cofynd.com/images/latest_images_2024/35b2ae0c5d21529ef9dea6eef1df130748f1f5a3.webp",
          "https://img.cofynd.com/images/latest_images_2024/1596aff185d3e8d55095e4dac10d879e5b929ad9.webp"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 65,
        "name": "Incuspaze Hiranandani Lighthall Business Park",
        "badge": "Special Offer",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹14,999",
        "period": "/ Month",
        "priceFormatted": "₹14,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/846205b2dcda7aa667cb10652527efbb07b012a8.webp",
          "https://img.cofynd.com/images/latest_images_2024/57da3525d1385e1c032d3ab82eebafd0c1648c16.webp",
          "https://img.cofynd.com/images/latest_images_2024/a7a75371786744128817c6c4456273d46e35c5a5.webp",
          "https://img.cofynd.com/images/latest_images_2024/04ddc04bebb3d8b1c548ada5164cfa1df37021b1.webp",
          "https://img.cofynd.com/images/latest_images_2024/abc8b111227d4f33715ede02627ed0c843a99e7e.webp",
          "https://img.cofynd.com/images/latest_images_2024/f165f6f16e6afd9ad4e725903282410d98690594.webp"
        ]
      },
      {
        "id": 66,
        "name": "WorkCampus",
        "badge": "Popular",
        "rating": null,
        "area": "Kandivali West",
        "location": "Kandivali West, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/f90b2b0f5ea06e81f1918fbe6409881aeeb5ac9c.jpg",
          "https://img.cofynd.com/images/latest_images_2024/80004011e69f8bd5605a4426442588a2b100212f.webp",
          "https://img.cofynd.com/images/original/ac5b3010886568acb1ef48ecc78108b542ee9f8e.jpg",
          "https://img.cofynd.com/images/original/7c2677c3a701dd57a73f6dea039aae5e5519c7ae.jpg",
          "https://img.cofynd.com/images/original/0f571a02760cd55c86a63e98d5b0f4ab509e9e24.jpg"
        ]
      },
      {
        "id": 67,
        "name": "WorkWave",
        "badge": "Popular",
        "rating": null,
        "area": "Mahim West",
        "location": "Mahim West, Mumbai",
        "price": "₹13,999",
        "period": "/ Month",
        "priceFormatted": "₹13,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/c068c86e4ea2146ba178031abc1e441a44181a74.webp",
          "https://img.cofynd.com/images/latest_images_2024/20727bcaed8387f47fce335f2c291d26715f509f.webp",
          "https://img.cofynd.com/images/latest_images_2024/be08d7a690879bb7976298c21ff96dbe2489f814.webp",
          "https://img.cofynd.com/images/latest_images_2024/b3c33c593d47e80e96a547f150f3884147a3dfe1.webp",
          "https://img.cofynd.com/images/latest_images_2024/e6c79a9fc3e6a7acfa7051f99602d4daf31666ae.webp"
        ]
      },
      {
        "id": 68,
        "name": "Vatika Business Centre Trade Centre",
        "badge": "Popular",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹26,999",
        "period": "/ Month",
        "priceFormatted": "₹26,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/3cf5c7ff0fe7a967250de6db0ad286b61829d1fc.webp",
          "https://img.cofynd.com/images/latest_images_2024/9ecc45135ddad9b8c88645d95d75b11469a4f900.webp",
          "https://img.cofynd.com/images/latest_images_2024/f1997d4ecce1808509de2fe304adc264cb8a317c.webp",
          "https://img.cofynd.com/images/latest_images_2024/2a71d3271f7891434c47e73aaf3dc5b76c73053f.webp",
          "https://img.cofynd.com/images/original/3f6fc0b9463bcba6ebf8a0df6d586df1699f2f14.jpg",
          "https://img.cofynd.com/images/original/78907a7085e251215a70d396ed9555569abb761f.jpg"
        ]
      },
      {
        "id": 69,
        "name": "Mosaic Raaj Chambers",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹19,999",
        "period": "/ Month",
        "priceFormatted": "₹19,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/14198f2ac1e8963fef3b32d8170167a38281ed47.webp",
          "https://img.cofynd.com/images/latest_images_2024/a10b9c91eb0ac54fd74b7ac3f968e5dc58880126.webp",
          "https://img.cofynd.com/images/original/72ff0c63d65a518d4256304729daf8c07918f0f7.jpg",
          "https://img.cofynd.com/images/latest_images_2024/1f620f505a8794086c4d880970af6bbe292229d5.webp",
          "https://img.cofynd.com/images/original/366915f6e47b9c796130151811d97c0b8ad5e959.jpg",
          "https://img.cofynd.com/images/original/b2c2e276fdae0d4274fc10d6f8af4da6a03d3ab1.jpg",
          "https://img.cofynd.com/images/latest_images_2024/ca68e0eaa512b1a7bf66fae14bb60df9fd19b124.webp",
          "https://img.cofynd.com/images/latest_images_2024/eec3f889480308b26ef6733c61bd92ce32a7b5c1.webp"
        ]
      },
      {
        "id": 70,
        "name": "Samruddhi Associates",
        "badge": "Popular",
        "rating": null,
        "area": "Borivali West",
        "location": "Borivali West, Mumbai",
        "price": "₹8,999",
        "period": "/ Month",
        "priceFormatted": "₹8,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/a2273699f83d1b403ece73d4177bb735a215e740.webp",
          "https://img.cofynd.com/images/latest_images_2024/4a9f6a74220993c6d7f032f3b7e64fa877bcecb4.webp",
          "https://img.cofynd.com/images/latest_images_2024/65688facc3d2c639f73b053e34ced1b6bf3aad26.webp",
          "https://img.cofynd.com/images/latest_images_2024/656a233328f5cdff07c913df5c7cd0d55cfcff4b.webp"
        ]
      },
      {
        "id": 71,
        "name": "Star Coworking HMG House",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/9dc5da32cc73f5f96909d5043d2f6e7a70dab67d.webp",
          "https://img.cofynd.com/images/latest_images_2024/ebbcbee5a46d28cfad4faec725613fefdad79f6f.webp",
          "https://img.cofynd.com/images/latest_images_2024/c9660dc27ac0d77029b26cf58cb0e0a73ee0d317.webp",
          "https://img.cofynd.com/images/original/f4feac29ec9212a4ddad8c4000b50a234abb3dc5.jpg",
          "https://img.cofynd.com/images/original/8ec00d9d23d6d6f7110653d37d13667ad1ae8e77.jpg",
          "https://img.cofynd.com/images/original/73ccacefeb760edcab8ef925b2c68c489fe9a5ff.jpg",
          "https://img.cofynd.com/images/original/10abc49e6b40707de48e0134328ddedb643d6298.jpg",
          "https://img.cofynd.com/images/original/fd42d39a03fd0a0540544d5ac17ff85f91b05996.jpg",
          "https://img.cofynd.com/images/latest_images_2024/84ba54cf31ef8294dd5bf05ed671d6a8c85e7c5d.webp",
          "https://img.cofynd.com/images/latest_images_2024/16e9fafe778a98e81bcad4b4834c6c4f9d3d086e.webp"
        ]
      },
      {
        "id": 72,
        "name": "Resource Workspaces",
        "badge": "Popular",
        "rating": null,
        "area": "Chembur",
        "location": "Chembur, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/5f077b9cf260daa3691f8df646deecf09a627461.webp",
          "https://img.cofynd.com/images/latest_images_2024/df92307438c87e22726d5ca5adad985748db1d2f.webp",
          "https://img.cofynd.com/images/latest_images_2024/7d11579b28b18d9fa9a95ff9b8949ada2e29e43d.webp",
          "https://img.cofynd.com/images/latest_images_2024/1e2653a7f9feaafae877d660fe19a9c731116b51.webp",
          "https://img.cofynd.com/images/latest_images_2024/38f5c42a2bdb2bc2883c1c5085ce590853a1b7d6.webp"
        ]
      }
    ],
    [
      {
        "id": 73,
        "name": "Of10",
        "badge": "Popular",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹17,999",
        "period": "/ Month",
        "priceFormatted": "₹17,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/e53aee5569f33c4eeebf1abb6c789578f0e896c4.webp",
          "https://img.cofynd.com/images/latest_images_2024/f310f6073721db9fc871c1a54d765f299d142e25.webp",
          "https://img.cofynd.com/images/latest_images_2024/0449ba6f570545105fae72510b82b59e6ef2e79f.webp",
          "https://img.cofynd.com/images/latest_images_2024/ed8d2cddae8303820e52662b53c4a1d97b32e5e7.webp",
          "https://img.cofynd.com/images/latest_images_2024/ba8d030d9c657f1b7f8758c410e27ffc9ba97756.webp",
          "https://img.cofynd.com/images/latest_images_2024/98fd088cd7bfebd789863182aadc6841b89767e7.webp",
          "https://img.cofynd.com/images/latest_images_2024/05ff5534ccdee93db7cf67c0cae63b774236593b.webp",
          "https://img.cofynd.com/images/latest_images_2024/364da32f96d9af1d8e181134075cf232be941373.webp",
          "https://img.cofynd.com/images/latest_images_2024/ddf19d07e057d54affe85644bcf638a16b4c2485.webp"
        ]
      },
      {
        "id": 74,
        "name": "Pinaki Workspace Lodha Supremus",
        "badge": "Popular",
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹18,999",
        "period": "/ Month",
        "priceFormatted": "₹18,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/bed20f4441ed093e771ded6760ac8e58cbaa6511.webp",
          "https://img.cofynd.com/images/latest_images_2024/8c645abecde1792c37310a46a7159ec721510ba0.webp",
          "https://img.cofynd.com/images/latest_images_2024/c147bf059199baf1682c7cb83387f8a17be6eaba.webp",
          "https://img.cofynd.com/images/latest_images_2024/6d79f52029158a5afebb49f9a9a1cd1ee86ceabe.webp",
          "https://img.cofynd.com/images/latest_images_2024/3a846be5fd84cac488cc7fc177bf0d3aa71b7c40.webp",
          "https://img.cofynd.com/images/latest_images_2024/81daaa88775a8a5553acd914321e4ad2fdb2d0e4.webp",
          "https://img.cofynd.com/images/latest_images_2024/dcef094cce17efb4b7d2947f4c01532ab17c8272.webp"
        ]
      },
      {
        "id": 75,
        "name": "Yesssworks 271 Business Park",
        "badge": "Popular",
        "rating": null,
        "area": "Goregaon",
        "location": "Goregaon, Mumbai",
        "price": "₹14,499",
        "period": "/ Month",
        "priceFormatted": "₹14,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/eff82fd0670827f71cc74d3c07b64b1d4d54778f.webp",
          "https://img.cofynd.com/images/latest_images_2024/272aa7bfa19822de1218d371c04cac67453bc72d.webp",
          "https://img.cofynd.com/images/latest_images_2024/0b1f038105b0b66f0b90971ce6b6a80557ec4206.webp",
          "https://img.cofynd.com/images/latest_images_2024/3238c2974ca5f5ffbfc81d1e2a2ca9b23a1933a0.webp",
          "https://img.cofynd.com/images/latest_images_2024/35d7adf9ee633b9d0da053e62cf59af196de5ffb.webp",
          "https://img.cofynd.com/images/latest_images_2024/95a6eaccf54814181921fa1d8ccc5d82dd8bcd0d.webp",
          "https://img.cofynd.com/images/latest_images_2024/a77a4d0762273fdc5a0e261c093b9b33e711481e.webp",
          "https://img.cofynd.com/images/latest_images_2024/9dfc611306c75feec05190fc6ed89bc6a257c6f7.webp",
          "https://img.cofynd.com/images/latest_images_2024/d23db585adaacd0a47a3ec5bf0147e99cbe16e95.webp"
        ]
      },
      {
        "id": 76,
        "name": "Yesssworks Pinnacle Business Park",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/7c618a1e96d4f805cf82cc8c549fe7aa0841d48f.webp",
          "https://img.cofynd.com/images/latest_images_2024/c1c88413038fec36baa48c3896f96d8442502e3f.webp",
          "https://img.cofynd.com/images/latest_images_2024/e30d74e6b269ace0b943ccf1a37b91d0bb3308df.webp",
          "https://img.cofynd.com/images/latest_images_2024/476d8ec4106357b638593082102bcbaca75e21de.webp",
          "https://img.cofynd.com/images/latest_images_2024/77d0efcfc268642e4fbfce07ce579682b447bd23.webp",
          "https://img.cofynd.com/images/latest_images_2024/e4707d135e5ee92a5df3efff5adb90fdc1739d55.webp",
          "https://img.cofynd.com/images/latest_images_2024/f6b85696d1212b209a6be17f39744fb3d97d9c32.webp"
        ]
      },
      {
        "id": 77,
        "name": "YesssWorks Ackruti Softech Park",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹10,999",
        "period": "/ Month",
        "priceFormatted": "₹10,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/e4ad349b6af629a5e6c400d7f187924abb1872dc.webp",
          "https://img.cofynd.com/images/latest_images_2024/965915757331c2dd6509646cd3d49772ff244b4e.webp",
          "https://img.cofynd.com/images/latest_images_2024/73b34a059a40ef84c7425c7ca6f6d979843eae22.webp",
          "https://img.cofynd.com/images/latest_images_2024/85c7d6a99f42d6d42f52a3e0a76f3804d2ddf428.webp",
          "https://img.cofynd.com/images/latest_images_2024/f65876ad5e6c74ca63a38844e38400e4bd9aa67f.webp",
          "https://img.cofynd.com/images/latest_images_2024/a2661968fc2878457ee716f38aa688149106d5a6.webp",
          "https://img.cofynd.com/images/latest_images_2024/05f704cf9881df6022792e3123e93b8b2507cf1e.webp"
        ]
      },
      {
        "id": 78,
        "name": "Rainbow Coworks",
        "badge": "Special Offer",
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/3862b5b1ade2da8b1a9e6eb3f4eb599b94862586.webp",
          "https://img.cofynd.com/images/latest_images_2024/1f7ff0b6839ec78d0e7bb416635a96e4646877c1.webp",
          "https://img.cofynd.com/images/latest_images_2024/c260d8ed8b037911e7e4823d3f72fc2443e044d3.webp",
          "https://img.cofynd.com/images/latest_images_2024/e9525d27495b30cf9cfa26d38bc803652ae4af37.webp",
          "https://img.cofynd.com/images/latest_images_2024/3b32c2cb590f54ff53baf647cf582cc78c9493b4.webp",
          "https://img.cofynd.com/images/latest_images_2024/c039d4c48e4052b27b2c0ecc55fb1ae91b3632ae.webp",
          "https://img.cofynd.com/images/latest_images_2024/cced4142fc1e4ff8c541a5eaac7cbfa534b6475e.webp",
          "https://img.cofynd.com/images/latest_images_2024/9559c1a140e643c714c355c19a08b4ebe0af78cb.webp"
        ]
      },
      {
        "id": 79,
        "name": "Teloz Spaces Synergy Business Park",
        "badge": "Popular",
        "rating": null,
        "area": "Goregaon",
        "location": "Goregaon, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/3a19d8d0782e86a39dfa043f4d83a5d2cec0b81f.webp",
          "https://img.cofynd.com/images/latest_images_2024/94ca0a654a8a0b04f38d725940276374aefd82eb.webp",
          "https://img.cofynd.com/images/latest_images_2024/5742523b11cbc1225c6349d5e97bf35d8f1e45be.webp",
          "https://img.cofynd.com/images/latest_images_2024/b185c3db4b5f8c6cbed13e2f93b6bcd4f5957915.webp",
          "https://img.cofynd.com/images/latest_images_2024/9b68b76141634aa9e0d83c844227c3ec0e9be0df.webp",
          "https://img.cofynd.com/images/latest_images_2024/db6579ba7f15b29c9a25ce484baf4f3f92a91b9b.webp"
        ]
      },
      {
        "id": 80,
        "name": "Ausum Coworking & Business Centre",
        "badge": "Special Offer",
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/e295cc844c340a54618308c24c74944c9c1def59.webp",
          "https://img.cofynd.com/images/latest_images_2024/52047d9d4413c5e34e3944cb11e73637d817e479.webp",
          "https://img.cofynd.com/images/latest_images_2024/b37424785b6dbf8b16c13108fe6df46cd3a6765f.webp",
          "https://img.cofynd.com/images/latest_images_2024/65bea96a4276aed20ddb1067b00c8d05f280a2c0.webp",
          "https://img.cofynd.com/images/latest_images_2024/8e28df0a88ba4c1acee02c77403d8c926bbf3f4b.webp",
          "https://img.cofynd.com/images/latest_images_2024/21b6c5ef79670118bdd068a183567d846ff9e5b6.webp"
        ]
      }
    ],
    [
      {
        "id": 81,
        "name": "Globify",
        "badge": "Special Offer",
        "rating": null,
        "area": "Ghatkopar West",
        "location": "Ghatkopar West, Mumbai",
        "price": "₹8,999",
        "period": "/ Month",
        "priceFormatted": "₹8,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/52df892d2bf60be7a65503493e7a89b5db6fbc5b.webp",
          "https://img.cofynd.com/images/latest_images_2024/c2fb14eb680c044fa98a02e3c0bff7732438acf7.webp",
          "https://img.cofynd.com/images/latest_images_2024/ea309be975c7e1df1f8bf534fbeca8b0fa31a80d.webp",
          "https://img.cofynd.com/images/latest_images_2024/b1df3064df6005d90f6646a1ed228cd905c3d37c.webp",
          "https://img.cofynd.com/images/latest_images_2024/7b055ae74cd2b05a751b2aa5882481b86a0888f4.webp"
        ]
      },
      {
        "id": 82,
        "name": "Thinkers Nest",
        "badge": "Popular",
        "rating": null,
        "area": "Dadar",
        "location": "Dadar, Mumbai",
        "price": "₹8,499",
        "period": "/ Month",
        "priceFormatted": "₹8,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/7fdbc7579c9b65b582c5745556e9f8c85009246d.webp",
          "https://img.cofynd.com/images/latest_images_2024/3c90087979cb3b4f134bb9763b27755252bba0f3.webp",
          "https://img.cofynd.com/images/latest_images_2024/83b34c4968a19c86c87bfbc311bd26041626ce2b.webp",
          "https://img.cofynd.com/images/latest_images_2024/3b30654100356aed5b3bbb1e8fa3c3920f09d1ce.webp",
          "https://img.cofynd.com/images/latest_images_2024/193804a4a6c1c0adf765b1f5092c4c30d32bf028.webp"
        ]
      },
      {
        "id": 83,
        "name": "Kontor Space",
        "badge": "Popular",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹39,999",
        "period": "/ Month",
        "priceFormatted": "₹39,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/63b5fe848387a92089fa41b0b1aa0a95e20bf153.webp",
          "https://img.cofynd.com/images/original/f4ba166b0574069e95a5ca881a5568e9511b5691.jpg",
          "https://img.cofynd.com/images/original/8a6a72d1a41fafe35593f6057fad22e1331a61d8.jpg",
          "https://img.cofynd.com/images/latest_images_2024/ac5dafd7b57294df14fc2cf59deac3ee7ef4bf61.webp",
          "https://img.cofynd.com/images/original/d35d749bd8330943d7bc85b7129e28e9b309646b.jpg",
          "https://img.cofynd.com/images/original/74f43c4516b0cf9cd458f97cf1a97d089f6a2844.jpg",
          "https://img.cofynd.com/images/latest_images_2024/8dcd98f0b4855cfcf320be6abdb33423e13fb238.webp"
        ]
      },
      {
        "id": 84,
        "name": "603 The Coworking Space Matulya Centre",
        "badge": "Special Offer",
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹10,999",
        "period": "/ Month",
        "priceFormatted": "₹10,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/1e4e3ef29cedaa2b45d658b0963c0a448fa0e85c.jpg",
          "https://img.cofynd.com/images/latest_images_2024/b19898d44261a22f4dbbf419bfed1bfffa969263.webp",
          "https://img.cofynd.com/images/original/03cd38d2caf76ab4822cbe2b75ea5604d0166e80.jpg",
          "https://img.cofynd.com/images/original/b0547b5ab0845ffb8fd76676a4fad0c123c0b25d.jpg",
          "https://img.cofynd.com/images/latest_images_2024/8bfd000982e551d150d40689f7e6312e26d19c96.webp",
          "https://img.cofynd.com/images/original/e050a2c1635d33a7b56a92e87a20e78bdc5e9428.jpg",
          "https://img.cofynd.com/images/original/fa91497cdd1372ca56a368bc0084bf3de3e4141d.jpg"
        ]
      },
      {
        "id": 85,
        "name": "Awfis VIOS Tower NCP",
        "badge": "Popular",
        "rating": null,
        "area": "Chembur",
        "location": "Chembur, Mumbai",
        "price": "₹15,999",
        "period": "/ Month",
        "priceFormatted": "₹15,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/7d9fa1dc0da2e6348b6cd82137e098ed0d1c6b4c.webp",
          "https://img.cofynd.com/images/latest_images_2024/181c47bf3a7435a5bf78139bae4274d821a99472.webp",
          "https://img.cofynd.com/images/latest_images_2024/4d004a3fdf4a154a91ee9c29b40a25d8e31078cb.webp",
          "https://img.cofynd.com/images/latest_images_2024/cadaa74a78c7312401624dcc1925d2a0d776b778.webp",
          "https://img.cofynd.com/images/latest_images_2024/056d08e33ef5b1401c9da588046628efdb80d4bc.webp"
        ]
      },
      {
        "id": 86,
        "name": "Ecoworks Modi Business Park",
        "badge": "Popular",
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹10,499",
        "period": "/ Month",
        "priceFormatted": "₹10,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/fdd8a1e715580713960199811b200f4dc180b5d8.webp",
          "https://img.cofynd.com/images/latest_images_2024/8335252881b97be44b6f6a0ff94ef748b52ce021.webp",
          "https://img.cofynd.com/images/latest_images_2024/1816e247e80522d6182dda4ed15a71069f84789d.webp",
          "https://img.cofynd.com/images/latest_images_2024/4af184b18c2c96e1debb074c7f2b8b2b2e7a5b66.webp",
          "https://img.cofynd.com/images/latest_images_2024/5115c7ac4351637260bd2fed31a0eb1dbe84b6b9.webp",
          "https://img.cofynd.com/images/latest_images_2024/de9115bed8f05ce529db9b86b903629da285d3fd.webp"
        ]
      },
      {
        "id": 87,
        "name": "Samruddhi Coworking",
        "badge": "Special Offer",
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/919d4e8e37a2a8faec06e6731ac872a47422f2cd.jpg",
          "https://img.cofynd.com/images/original/d2ebb0f289f3ac679f0430e2e3ca9e5e319ff8ed.jpg",
          "https://img.cofynd.com/images/original/0869c33ddef6e502c1eb034d6acbf038d1d8b619.jpg",
          "https://img.cofynd.com/images/original/d8790aeeee7bb46c4a53064de55fb5c2f999541c.jpg",
          "https://img.cofynd.com/images/original/d797c573ba7609a738ea68042d78882656025a2e.jpg"
        ]
      },
      {
        "id": 88,
        "name": "SOHO Architects",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/4183b95326969674a22f9bfc5e4a3d02080aea22.jpg",
          "https://img.cofynd.com/images/original/a480c49dc5c7ed3e8194870cfc52d14e2f1da568.jpg",
          "https://img.cofynd.com/images/original/f4bbe78bd3c1f72bb512e8020cbe2ffe751fcea8.jpg",
          "https://img.cofynd.com/images/original/4340867e2a0ebbd8a59ce79b91c916e2279ada4e.jpg",
          "https://img.cofynd.com/images/original/973b5c412a1505688bfe1e81756f9d4f7237a9b1.jpg"
        ]
      }
    ],
    [
      {
        "id": 89,
        "name": "EFC Offices Empire Tower",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/6c01358c726703dbdfbda7b885bdd2a645720f2e.webp",
          "https://img.cofynd.com/images/latest_images_2024/23ac22b55ec00cba4a29e44e1bbfca5672d1a447.webp",
          "https://img.cofynd.com/images/latest_images_2024/09e6179871e7c8ed765ee35637b9a5da7e4489b0.webp",
          "https://img.cofynd.com/images/latest_images_2024/987488657cff0464e3d45a08887add37686f07c1.webp",
          "https://img.cofynd.com/images/latest_images_2024/2acde5cb7675eeada6435c85c881e1f4bb22fe69.webp",
          "https://img.cofynd.com/images/original/6d769e9196ade5966c5c60568b218483fa1ea6b8.jpg"
        ]
      },
      {
        "id": 90,
        "name": "Cowork Collision",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹8,499",
        "period": "/ Month",
        "priceFormatted": "₹8,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/062387ae8726cf1d552a021da5d730a0212a414e.webp",
          "https://img.cofynd.com/images/latest_images_2024/19ec7a67e4bedc3c74c60704954843af1117507b.webp",
          "https://img.cofynd.com/images/latest_images_2024/a846b1e2d1b9999072dba49b7566799da8db9987.webp",
          "https://img.cofynd.com/images/original/40b2d6a72fe28fa99a60a6bf19490b6eef26364a.jpg",
          "https://img.cofynd.com/images/latest_images_2024/cd23ac574ba4c4befd542cf44ce3767e6a428434.webp",
          "https://img.cofynd.com/images/original/fdbd38cf1220358800bf17122cbfd813722ab369.jpg"
        ]
      },
      {
        "id": 91,
        "name": "Spartan Cowork Crystal Plaza",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/5d86c72d3692d7b6822c7bca4c47c6571ed0bcfa.webp",
          "https://img.cofynd.com/images/latest_images_2024/4128174f927f33feaeac556aad52aff8cbad3b1d.webp",
          "https://img.cofynd.com/images/latest_images_2024/f36fdf0c5761c23479d10f5ceb6b8628b5fcd25c.webp",
          "https://img.cofynd.com/images/latest_images_2024/cece97ab317336aa84f5d621c85625c4adc24de1.webp",
          "https://img.cofynd.com/images/latest_images_2024/267ecefa3a3f36bc7cd021287d2db95bc406a289.webp"
        ]
      },
      {
        "id": 92,
        "name": "Millennial Pod",
        "badge": "Popular",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹14,999",
        "period": "/ Month",
        "priceFormatted": "₹14,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/3ff4541b5495debc8fd823d34ff82b4981ccd890.jpg",
          "https://img.cofynd.com/images/original/56752e5af176589382aa7761ff772e0f444d68ca.jpg",
          "https://img.cofynd.com/images/original/7d4447c15551d7b525bb867ad7f1c6df6a7b8926.jpg",
          "https://img.cofynd.com/images/original/2dfa8dfe156837267c4f5471472df361150cdb1f.jpg",
          "https://img.cofynd.com/images/original/f0384b4039c9172eb05039bf6c555ce705f6e284.jpg",
          "https://img.cofynd.com/images/original/db4b1cc3aa93967dd6442a00535a453080b4bb66.jpg",
          "https://img.cofynd.com/images/original/b5349bd215a86951e4713e6991fbbaadee4f720c.jpg",
          "https://img.cofynd.com/images/original/87ef96a3623f1cd43d790933aaaf9a7259a0cedb.jpg",
          "https://img.cofynd.com/images/original/f9302e57e2410f23c00defe55f3c087c0536809d.jpg"
        ]
      },
      {
        "id": 93,
        "name": "TriggerXchange",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹9,499",
        "period": "/ Month",
        "priceFormatted": "₹9,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/d0532e5d4cd94ad951a5a01fe464f9d1123bf2b9.webp",
          "https://img.cofynd.com/images/original/7b9fb9dd3e99846952e950d3eb6ebcc9ab335e87.jpg",
          "https://img.cofynd.com/images/latest_images_2024/ba488ff72fab1d3ec33f6415503666f0125b6a17.webp",
          "https://img.cofynd.com/images/latest_images_2024/9e06fd35b78d410d17ac224b2792fa2cd4840991.webp",
          "https://img.cofynd.com/images/latest_images_2024/95b4d8041173ad8869451d2e505fdeacbb88c509.webp"
        ]
      },
      {
        "id": 94,
        "name": "Kontor Space",
        "badge": "Popular",
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/1a3c0c7b931785d04be7330d27ef980b5566fc79.webp",
          "https://img.cofynd.com/images/original/b4fa5ef9cd4ed8dc23a71a46907d7833722c4ae4.jpg",
          "https://img.cofynd.com/images/original/f0424b136a222a4028bf4670c4945df08578e1d8.jpg",
          "https://img.cofynd.com/images/original/7ebd7d32f209c7af4f0f64970ae9c608605dbefb.jpg",
          "https://img.cofynd.com/images/latest_images_2024/f1713f6cf843ee3b837b4cda6c3987164d644530.webp",
          "https://img.cofynd.com/images/latest_images_2024/0dea64580f3400fc3d3e6c7707bc85c983113f34.webp"
        ]
      },
      {
        "id": 95,
        "name": "EsziWorkN The Capital",
        "badge": "Special Offer",
        "rating": null,
        "area": "Bandra East",
        "location": "Bandra East, Mumbai",
        "price": "₹19,999",
        "period": "/ Month",
        "priceFormatted": "₹19,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/11b7b8942f7f0605780fb2a1748ed89f4f5d4f03.webp",
          "https://img.cofynd.com/images/original/919cab7eb682cbac9261bf518f47894926bd31b8.jpg",
          "https://img.cofynd.com/images/original/2cb52713bbacea02105299ec166c4691b1167038.jpg",
          "https://img.cofynd.com/images/original/986df99d94ec38e960d2ed2b72235f73b9e38923.jpg",
          "https://img.cofynd.com/images/latest_images_2024/30a88fb4be19452d0db63130057ae563815b5939.webp",
          "https://img.cofynd.com/images/original/6dc52dbe6abb6c082685a76b608ecec5eafc2288.jpg",
          "https://img.cofynd.com/images/latest_images_2024/a6927fb72185d8db2c93507624d3bd6a6c9b425d.webp"
        ]
      },
      {
        "id": 96,
        "name": "Apeejay Business Centre",
        "badge": "Popular",
        "rating": null,
        "area": "Churchgate",
        "location": "Churchgate, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/bc1c9228d9482fe1349b61feceb4be427b64c977.webp",
          "https://img.cofynd.com/images/latest_images_2024/8e8a2272c056f261d920ce58b35b051bc627febb.webp",
          "https://img.cofynd.com/images/latest_images_2024/7ad1a39a3d6e76c8dbe44d5b976ee5dd3178f40c.webp",
          "https://img.cofynd.com/images/original/2cf0247f703a1abf86df08fba94da000efd1a37b.jpg",
          "https://img.cofynd.com/images/original/fce4f061427ba70071b899b0787fee2b97c76e41.jpg"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 97,
        "name": "101 Workshare Vibe",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹8,999",
        "period": "/ Month",
        "priceFormatted": "₹8,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/7b1dfa3b7959d529b48a458913d377b20ea152c9.jpg",
          "https://img.cofynd.com/images/original/ebae136aa1c3d0df5857b5d034d6a985fe54ea3e.jpg",
          "https://img.cofynd.com/images/original/e6d4ff66f653323076f5c905657140c44a53c688.jpg",
          "https://img.cofynd.com/images/original/e928198515b6ac360511385dcaf7fcd03dd35a15.jpg",
          "https://img.cofynd.com/images/original/efab395a935083e26bf7bdfca8c9794121c65d3f.jpg"
        ]
      },
      {
        "id": 98,
        "name": "Famous Working Company",
        "badge": "Popular",
        "rating": null,
        "area": "Worli",
        "location": "Worli, Mumbai",
        "price": "₹16,999",
        "period": "/ Month",
        "priceFormatted": "₹16,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/de222c60aefdc87e50959f02831dcc80464f3e84.jpg",
          "https://img.cofynd.com/images/original/c3b0ea5323e0ac019420a9e00824dd8898ec328a.jpg",
          "https://img.cofynd.com/images/latest_images_2024/de6f2e1d5e850b1cebe9711c2e6ab43449e4a18b.webp",
          "https://img.cofynd.com/images/original/36ed40bb9f1ddd323f244ce035544902cf7cb342.jpg",
          "https://img.cofynd.com/images/latest_images_2024/3690ac8a9ab10d862048501b39fabbef2c763d6c.webp",
          "https://img.cofynd.com/images/latest_images_2024/b492afd5c356bf0e27509e560716bf5afc899729.webp",
          "https://img.cofynd.com/images/original/bf8ae297c4cc63ee7e2a6b2eda28b663271d4a61.jpg",
          "https://img.cofynd.com/images/latest_images_2024/af1ccda09d4abebb7403c7c8dd1098c307838d80.webp"
        ]
      },
      {
        "id": 99,
        "name": "Regus Duru House",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/5eab7f9d47b5b92fe91e5a866ad4df6ef2c48a2b.webp",
          "https://img.cofynd.com/images/latest_images_2024/2c442e06c25b54f2e754eb1388d7977d5a9effe4.webp",
          "https://img.cofynd.com/images/latest_images_2024/f6420b063f91a95cd3282052db8e957d19a8e5f0.webp",
          "https://img.cofynd.com/images/latest_images_2024/c3320d487cdd140f9132bc3d129372f4afe4c3ef.webp",
          "https://img.cofynd.com/images/latest_images_2024/820441eb24b41299e67ee255d813a43888abd45f.webp",
          "https://img.cofynd.com/images/latest_images_2024/fcf1ee79022700932d679f83fd80e855d3301edc.webp"
        ]
      },
      {
        "id": 100,
        "name": "Garage Coworks",
        "badge": "Popular",
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹13,999",
        "period": "/ Month",
        "priceFormatted": "₹13,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/d9e3da13b3df7e5aa6f743559115b2fbe02c6b34.webp",
          "https://img.cofynd.com/images/original/452373f945391d7e964a8fc08c3bdbc4c516cdd9.png",
          "https://img.cofynd.com/images/latest_images_2024/7c8b058d1dc4dd0edd4d3937eacb3f7891cab2ef.webp",
          "https://img.cofynd.com/images/latest_images_2024/751932b46be44ef83a7e1b5c6fc13750a5c42b7a.webp",
          "https://img.cofynd.com/images/original/38452fd0264edf6a105bf1a386b81fc6cc517e10.jpg",
          "https://img.cofynd.com/images/original/50597294421a07571fdf340a356f56c763874673.jpg",
          "https://img.cofynd.com/images/original/4c6c0b93ac997fd9157db216346d563e1433fcae.jpg"
        ]
      },
      {
        "id": 101,
        "name": "Regus Kaledonia",
        "badge": "Special Offer",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹13,999",
        "period": "/ Month",
        "priceFormatted": "₹13,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/fddb1222a0f92383bfdd2bd62af69648e149b478.webp",
          "https://img.cofynd.com/images/latest_images_2024/767466624c882bd93bf898cee9410a0edfb47ad4.webp",
          "https://img.cofynd.com/images/latest_images_2024/9eece377079379692e0f3aa16c299e3335ce212f.webp",
          "https://img.cofynd.com/images/latest_images_2024/ad6cbaed8ca5fc886d79f1d58156f63fb679263e.webp",
          "https://img.cofynd.com/images/latest_images_2024/0158043be858e4b77c4b3bf006e52c44db83796c.webp",
          "https://img.cofynd.com/images/latest_images_2024/a3443f3418c23ec8840b9670d7d76235fa2dcc57.webp",
          "https://img.cofynd.com/images/latest_images_2024/8701b959225006582dc13958d9dae3f07de05e00.webp",
          "https://img.cofynd.com/images/latest_images_2024/a26514a6d77cde4ab027597481a35fd4be44425d.webp"
        ]
      },
      {
        "id": 102,
        "name": "The Quorum",
        "badge": "Popular",
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹19,999",
        "period": "/ Month",
        "priceFormatted": "₹19,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/480a0379a146460a5dc166edaeb46f186ad2e73c.jpg",
          "https://img.cofynd.com/images/original/ae195eada411c8f2c474e9f0a8a1ab129fc8e399.jpg",
          "https://img.cofynd.com/images/original/3bdc1f72e9c3723aa5e770b950ca907bc9b0ae7e.jpg",
          "https://img.cofynd.com/images/original/c76dae6e4fbc3423c64161871c502bcb5aac2932.jpg",
          "https://img.cofynd.com/images/original/25d32b13a74eb6135b8cf7a67a278eee0f7a1a62.jpg"
        ]
      },
      {
        "id": 103,
        "name": "Regus Corporate Park II",
        "badge": "Near Metro",
        "rating": null,
        "area": "Chembur",
        "location": "Chembur, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/81a9578a6e5b17985e01ebf4c1373b24df168611.webp",
          "https://img.cofynd.com/images/latest_images_2024/cef045d0755aec98192f67ff11a8074aeff28317.webp",
          "https://img.cofynd.com/images/latest_images_2024/afdbb5fc678ffc6d2f78abd30a47601db11c9ffd.webp",
          "https://img.cofynd.com/images/latest_images_2024/0ccacf98c2da388123615fe52062b62368485351.webp",
          "https://img.cofynd.com/images/latest_images_2024/a2912d66af30068740f8ae712ef8eb9fa336eb82.webp",
          "https://img.cofynd.com/images/latest_images_2024/bbeca804fb94f65a423ab1efc0bf9ca4559cb275.webp"
        ]
      },
      {
        "id": 104,
        "name": "Regus Platina 11F BKC",
        "badge": "Premium",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹17,699",
        "period": "/ Month",
        "priceFormatted": "₹17,699 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/1ac2bea3a2275259524ef36cdab747bf77ff7182.webp",
          "https://img.cofynd.com/images/latest_images_2024/e411b90a468bd33f6534eb11f653aedc951f32a8.webp",
          "https://img.cofynd.com/images/latest_images_2024/88922a779e5a30b06f527ca1f1e6f6c941889d05.webp",
          "https://img.cofynd.com/images/latest_images_2024/f0df701f41e30a83d0d692de4c3e928b3c188c60.webp",
          "https://img.cofynd.com/images/latest_images_2024/f201b078a997324471f806df65cd22642e4b4162.webp",
          "https://img.cofynd.com/images/latest_images_2024/ddad0cf185af5fe6b3f95210e37c425b47a4439e.webp"
        ]
      }
    ],
    [
      {
        "id": 105,
        "name": "Accesswork",
        "badge": "Special Offer",
        "rating": null,
        "area": "Malad",
        "location": "Malad, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/d73c043584495d50716ac9e7d76cf3d662e79a17.jpg",
          "https://img.cofynd.com/images/original/5ea63c14d13805d73fc1dfc6115cd1bedf7e310a.jpg",
          "https://img.cofynd.com/images/original/1ca7ab62ac9990d8f08a7258d3712e01caad2b03.jpg",
          "https://img.cofynd.com/images/original/bf9525bb133d38bbecd41c16a446e89f9741c15f.jpg",
          "https://img.cofynd.com/images/latest_images_2024/c16c1e50d3a4460863ec73972864d653ccfce2d0.webp"
        ]
      },
      {
        "id": 106,
        "name": "Divine hub",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/c85cdfec303b0b9b54b003e290002c0c7a56d065.jpg",
          "https://img.cofynd.com/images/original/36a6d0f21142ce26b3838bdc411e0f72f94b933d.jpg",
          "https://img.cofynd.com/images/original/ff1f4e5292104e8f4ad218ecda8dbac69665088c.jpg",
          "https://img.cofynd.com/images/original/698cf46789fd88b9165d0af48a4f64262394b78e.jpg",
          "https://img.cofynd.com/images/original/ab4e0ca6c2491fafec1ada6674bf6f0b37c14921.jpg",
          "https://img.cofynd.com/images/original/c74ca37730586e7c9de659da0d67cd0b16cc5db4.jpg"
        ]
      },
      {
        "id": 107,
        "name": "Blue Lotus WorkAdda",
        "badge": "Popular",
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹15,999",
        "period": "/ Month",
        "priceFormatted": "₹15,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/610d157fcb294665b66d41829276f41a8ce7fa52.webp",
          "https://img.cofynd.com/images/latest_images_2024/e7e4a767096c65d07f505130e4292d4fefdb74eb.webp",
          "https://img.cofynd.com/images/latest_images_2024/afae6a5f5514eed028eff39fce66e567525c5345.webp",
          "https://img.cofynd.com/images/latest_images_2024/b8ccba308c25b3ed2b6fdca8ccc80448a89c6a35.webp",
          "https://img.cofynd.com/images/latest_images_2024/324ac3e072069687e27422bbd0e756a49cd05aae.webp",
          "https://img.cofynd.com/images/latest_images_2024/e051af8cc3ff9cec9343e637b506053769692336.webp"
        ]
      },
      {
        "id": 108,
        "name": "Redbrick Offices Kaledonia",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/6eac06eefc08875797bc67b75167e78955374a4f.jpg",
          "https://img.cofynd.com/images/latest_images_2024/0e4a851f97dfb4599d9774fc24b4a45ea15b621b.webp",
          "https://img.cofynd.com/images/original/23ca22ae369c478a5074b758e4e3aa430016d32c.jpg",
          "https://img.cofynd.com/images/latest_images_2024/facc3be392180fb3528eda99930646135578ebb0.webp",
          "https://img.cofynd.com/images/original/872170e3e4d848cbbff43e0328d07f017f2c0f04.jpg",
          "https://img.cofynd.com/images/original/4024543575617c7d611ba010359f5843fe520f99.jpg",
          "https://img.cofynd.com/images/original/4ab5af178b9f45a00ff04c18d07e98ae822c8151.jpg"
        ]
      },
      {
        "id": 109,
        "name": "Mumbai Coworking 2.0",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹15,999",
        "period": "/ Month",
        "priceFormatted": "₹15,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/b6f96f8f7e3cdb4c4bc1b0e639e7616b8228c4ac.webp",
          "https://img.cofynd.com/images/latest_images_2024/c6c6792800939747a4f70a5253e13c81716d2020.webp",
          "https://img.cofynd.com/images/latest_images_2024/0ed7ad1e014b2abb1b1684d2a78a565f5f248449.webp",
          "https://img.cofynd.com/images/latest_images_2024/954e1e9a4097446665d12c9d8129a1ac499bd168.webp",
          "https://img.cofynd.com/images/latest_images_2024/7d2694427c32bb556b261bab427e4ed3194afe44.webp",
          "https://img.cofynd.com/images/latest_images_2024/f136aadbbaaec948b26fd3f294382f36d2fc76e4.webp",
          "https://img.cofynd.com/images/latest_images_2024/9c8bc7283b2ce51b6d79eb5bffda82f137fa8943.webp",
          "https://img.cofynd.com/images/latest_images_2024/93dd04b87987998fecad05c19bae2125985759cd.webp",
          "https://img.cofynd.com/images/latest_images_2024/fc65e1af1d993fb6aaaa8bd19a547a09fde0b211.webp",
          "https://img.cofynd.com/images/latest_images_2024/1d4f60c4afd0321b30b224bbdf621fa257a4f0e7.webp",
          "https://img.cofynd.com/images/latest_images_2024/d98df2ae52d834fbb05773b08052041887b4047a.webp",
          "https://img.cofynd.com/images/latest_images_2024/2f0f94feb3f20c1f1c3b4e879b71c0bac90f6498.webp"
        ]
      },
      {
        "id": 110,
        "name": "One Coworks",
        "badge": "Popular",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹13,499",
        "period": "/ Month",
        "priceFormatted": "₹13,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/838a292911bc153764baf00f7aa48cfa2b7d4f7e.webp",
          "https://img.cofynd.com/images/latest_images_2024/d87137202d6910a43e854fc1d730bf109b119448.webp",
          "https://img.cofynd.com/images/latest_images_2024/63816942acc638ca03f16dec41f065e7e52fd2d3.webp",
          "https://img.cofynd.com/images/latest_images_2024/df62e4a49b8b41d9d0bc2e59ccf2c1f17e5c2906.webp",
          "https://img.cofynd.com/images/latest_images_2024/aa358a5ba614fe79b6f9eee58d41ce73c299ef70.webp",
          "https://img.cofynd.com/images/latest_images_2024/2457ea9554749f44a1827eb7fc4ae299c0a29ef3.webp"
        ]
      },
      {
        "id": 111,
        "name": "Mumbai Coworks",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/8caeb823d71f6c161649198dc0f71687ca312aa5.jpg",
          "https://img.cofynd.com/images/original/8f90c0a76b528bb3c7a15a51ca192adb90d09705.jpg",
          "https://img.cofynd.com/images/original/e8c3b87e991a5b2684bc81be62fcac47a1630090.jpg",
          "https://img.cofynd.com/images/original/f51163740ad339beee129a55d22d063a38646b96.jpg",
          "https://img.cofynd.com/images/original/51301752415e6d23c8214f3c76b61f0070e67527.jpg",
          "https://img.cofynd.com/images/latest_images_2024/d405b12139d2bdf54e838ca57c33e71838ad7e8f.webp"
        ]
      },
      {
        "id": 112,
        "name": "The Playce Marathon Maxima",
        "badge": "Popular",
        "rating": null,
        "area": "Mulund",
        "location": "Mulund, Mumbai",
        "price": "₹7,499",
        "period": "/ Month",
        "priceFormatted": "₹7,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/ac0eed186018a8e77b77a1fc6d81aa34ee1c7657.jpg",
          "https://img.cofynd.com/images/latest_images_2024/a1589edbc9922aed54fb6de3ea945d08a239a3a3.webp",
          "https://img.cofynd.com/images/latest_images_2024/ec42317c9d4d359815b4520ba1452dcd829b54bc.webp",
          "https://img.cofynd.com/images/latest_images_2024/ae5ab96540d84449a3a8fec378f8091779ee538b.webp",
          "https://img.cofynd.com/images/latest_images_2024/edf5c8b2e36e479b6ed44acc637653b61e9dd7f3.webp",
          "https://img.cofynd.com/images/latest_images_2024/e98cb2df719d4cab8796e257bf6a408c46901ac2.webp"
        ]
      }
    ],
    [
      {
        "id": 113,
        "name": "Dextrus",
        "badge": "Popular",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹24,499",
        "period": "/ Month",
        "priceFormatted": "₹24,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/483c3186468f4b65aef137a2b2b1512e1f8e0c47.jpg",
          "https://img.cofynd.com/images/latest_images_2024/0d4291d72c0ab61196e08ba407d56f223141758a.webp",
          "https://img.cofynd.com/images/original/e62a475c6767eaada48ceee49df916959e2ac7d9.jpg",
          "https://img.cofynd.com/images/latest_images_2024/eb0e656811f35751516650c8b68e84c4ae922fdd.webp",
          "https://img.cofynd.com/images/original/1feb635a2f100ac4452d1f37e37f06ec5224c6cf.jpg",
          "https://img.cofynd.com/images/original/73e1cc0aac5047c6ec825400884531a5f865f9bb.jpg",
          "https://img.cofynd.com/images/latest_images_2024/8ae0c13a0bcc4b336347950105086de2f18e44ce.webp"
        ]
      },
      {
        "id": 114,
        "name": "603 The Coworking Space Makhija Arcade",
        "badge": "Popular",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/52f51b7feeb7a37c63a5796c9d84265fe4461bb9.webp",
          "https://img.cofynd.com/images/latest_images_2024/dcc4d72ece084d5acba2288ec24067833d6879cf.webp",
          "https://img.cofynd.com/images/latest_images_2024/3d52a1f34adde838997c16c598ff288645464ea4.webp",
          "https://img.cofynd.com/images/latest_images_2024/54ad319af9bcb864053aa99a94ce6fadf7754b46.webp",
          "https://img.cofynd.com/images/original/a184e3c1c22404de199f6e4b4b37c824dc407afc.jpg",
          "https://img.cofynd.com/images/original/8c6943c73e7adea74c5479d62a7a4627a2eed599.jpg",
          "https://img.cofynd.com/images/latest_images_2024/321b146b9879ca5c81faf8936be72f38794c0bb4.webp",
          "https://img.cofynd.com/images/original/fdc9a2a1b8518ee8f2242839082b7c1b33e3d27d.jpg",
          "https://img.cofynd.com/images/original/36b2e33b9c6c5233a454f3ab6a01729e28af86a4.jpg"
        ]
      },
      {
        "id": 115,
        "name": "YesssWorks Andheri - AT.",
        "badge": "Premium",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/434872cb6a32a765c5e533b1da754d5dd3524710.webp",
          "https://img.cofynd.com/images/latest_images_2024/6875cf560580320d24e7b06354fe55d4715c24f2.webp",
          "https://img.cofynd.com/images/latest_images_2024/edead30303af9ed26897aac31c081c63bb108e85.webp",
          "https://img.cofynd.com/images/latest_images_2024/a1cf4069b810a0b62f97eec826d5e589a35758cb.webp",
          "https://img.cofynd.com/images/latest_images_2024/3a84ba8817f22a4ccd31e3fc067fe5836681bcdd.webp",
          "https://img.cofynd.com/images/latest_images_2024/ac93fca4e5433bc8cfa521498e3620d6189384cc.webp",
          "https://img.cofynd.com/images/latest_images_2024/9c5df52620d5a855c20d4726c1b7f6f6bae77cf1.webp"
        ]
      },
      {
        "id": 116,
        "name": "Plug N Work",
        "badge": "Popular",
        "rating": null,
        "area": "Vile Parle",
        "location": "Vile Parle, Mumbai",
        "price": "₹15,999",
        "period": "/ Month",
        "priceFormatted": "₹15,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/18599599d9f85416af4e6c25979c9ad54a8f67be.webp",
          "https://img.cofynd.com/images/latest_images_2024/9394a5fa3a728b304dc87be0103bd2ec02f9a248.webp",
          "https://img.cofynd.com/images/latest_images_2024/aed573954a0c5cb8420170281c5d3ff7a37a07dc.webp",
          "https://img.cofynd.com/images/latest_images_2024/4f924f30ca47625287e5f5a144ff3fb26c0c8ffb.webp",
          "https://img.cofynd.com/images/latest_images_2024/30a741bc4b9a46ff0f467656254d19cb2bd5e982.webp",
          "https://img.cofynd.com/images/latest_images_2024/947e97d6172d12042f44c6cada0a5de0f7d575fb.webp",
          "https://img.cofynd.com/images/latest_images_2024/db191ceac1e1ce18d23fac4b0f9f006309871276.webp",
          "https://img.cofynd.com/images/latest_images_2024/b27dec9a33b21b21b6358774d573b59dbdfeb500.webp",
          "https://img.cofynd.com/images/latest_images_2024/3ccca8ab7a7589279c0e86964f1e55d366818bec.webp"
        ]
      },
      {
        "id": 117,
        "name": "Awfis Raghuleela",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/b3c4bdb24fb394506acb8e67f4088941677f144c.webp",
          "https://img.cofynd.com/images/latest_images_2024/ae4b3a8f0d56a138551c15fc32fc500559cec74e.webp",
          "https://img.cofynd.com/images/latest_images_2024/4b53fb74222dae69f65dd6baafde90b6589424b9.webp",
          "https://img.cofynd.com/images/latest_images_2024/d017bf6a3c54f86c61c9a143004173046974051c.webp",
          "https://img.cofynd.com/images/latest_images_2024/a91366b4c4febf04f6075b9e198f76ae2921ab1e.webp",
          "https://img.cofynd.com/images/latest_images_2024/c44b4f0ea59adeba15ed1ae5fdad8e24e4e61b45.webp"
        ]
      },
      {
        "id": 118,
        "name": "Golden Ratio",
        "badge": null,
        "rating": null,
        "area": "Goregaon West",
        "location": "Goregaon West, Mumbai",
        "price": "₹8,999",
        "period": "/ Month",
        "priceFormatted": "₹8,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/1dbf3b31292fa595e94870d3727ae95434c34849.jpg",
          "https://img.cofynd.com/images/original/675d8213249d4dcb1be5f81235733b8353ddebce.jpg",
          "https://img.cofynd.com/images/original/83459d0a4b1d636126bd06b05478e56e9bcb1307.jpg",
          "https://img.cofynd.com/images/original/3e080b75bc793e3ce56c1d653af987cce9ed1d3b.jpg",
          "https://img.cofynd.com/images/original/842d21804e32b13c14428ba8b37cecfe6b7f5dcb.jpg"
        ]
      },
      {
        "id": 119,
        "name": "Cowrks",
        "badge": "Popular",
        "rating": null,
        "area": "Worli",
        "location": "Worli, Mumbai",
        "price": "₹24,999",
        "period": "/ Month",
        "priceFormatted": "₹24,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/966868e34811c70648e39ad6c739439b315bed1b.jpg",
          "https://img.cofynd.com/images/latest_images_2024/4d6ceab844da74637faa7393644db28c4067dc0e.webp",
          "https://img.cofynd.com/images/original/2d2ff44418804909fbf8247720584d10d1f8628a.jpg",
          "https://img.cofynd.com/images/original/abf00b0ee79a1862810e289e17ef490fb83b6d4b.jpg",
          "https://img.cofynd.com/images/latest_images_2024/aa90ca1e19fe194a737e6b40f33478dad34c86f9.webp",
          "https://img.cofynd.com/images/latest_images_2024/e98eb83f2f8220e8059663334fcd4ddf153e6d0e.webp"
        ]
      },
      {
        "id": 120,
        "name": "91Springboard Lotus",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/8149329f5891978fdaa36444f433698b37a58d47.webp",
          "https://img.cofynd.com/images/latest_images_2024/bf23ebe765fcb6dd06502e32d1726e26f017f9f8.webp",
          "https://img.cofynd.com/images/latest_images_2024/ab3421051cbb4b456670779978e9fed3e0269466.webp",
          "https://img.cofynd.com/images/latest_images_2024/af9a768b1a047b79f36f5d73b8c29a2b695b559b.webp",
          "https://img.cofynd.com/images/latest_images_2024/4d758e18d186492238a17124cfd7477116fb2e34.webp",
          "https://img.cofynd.com/images/latest_images_2024/cb5f692389162b8631af358db733c12650753943.webp",
          "https://img.cofynd.com/images/latest_images_2024/0570053d8678b1b1e8f4030845bea8d4a07c5e56.webp",
          "https://img.cofynd.com/images/latest_images_2024/9050ccdd77731e51e87890be5f5c09cbf5ec8422.webp"
        ]
      }
    ],
    [
      {
        "id": 121,
        "name": "Awfis R City Mall",
        "badge": "Popular",
        "rating": null,
        "area": "Vikhroli",
        "location": "Vikhroli, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/26dad94fc0a99054cf51378b8bf39ffb575db324.webp",
          "https://img.cofynd.com/images/latest_images_2024/8901901cabff7d480004436416a27254f4c943ff.webp",
          "https://img.cofynd.com/images/latest_images_2024/b0d376736c15278c94d9d7629b0a93736b42103e.webp",
          "https://img.cofynd.com/images/latest_images_2024/84d6bc7ca55ce90026837c9aa7dd015691e2e61f.webp",
          "https://img.cofynd.com/images/latest_images_2024/b40971c28a29e58d398eed857de0cba3373fc2dd.webp"
        ]
      },
      {
        "id": 122,
        "name": "97 Tech Coworking",
        "badge": "Popular",
        "rating": null,
        "area": "Goregaon",
        "location": "Goregaon, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/d297632c312bda66f1d5925e7264ad2cdf1624b0.jpg",
          "https://img.cofynd.com/images/original/a8c593e03d93cde2eb1baf330459a535dcba0a55.jpg",
          "https://img.cofynd.com/images/original/2c0215692369173ebf0faf0e30b5ccbb8c6f2d0a.jpg",
          "https://img.cofynd.com/images/original/aa586c40767581737625d7ecb3c0e82e7a4a64f6.jpg",
          "https://img.cofynd.com/images/original/340653ae7880a80a79ae0a3ef25abcd6e3c25f7e.jpg",
          "https://img.cofynd.com/images/latest_images_2024/f9e1307ee3c313877f372354d3eb62f763f401ca.webp"
        ]
      },
      {
        "id": 123,
        "name": "DevX Dynasty Business Park",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹13,999",
        "period": "/ Month",
        "priceFormatted": "₹13,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/original/8069d9d3d68c32e73896f3c40b62ab34c87f5a9d.jpg",
          "https://img.cofynd.com/images/original/f4d70c6294cba54eff361b82e3c86a6bbc89dc20.jpg",
          "https://img.cofynd.com/images/original/06c4720570a531b784c932d57e7fe76e2938a5e1.jpg",
          "https://img.cofynd.com/images/original/e955d9d5c63634cc5d12d59c79e7b8d9f9792b11.jpg",
          "https://img.cofynd.com/images/latest_images_2024/ffc6cc3de731fca699a68bc3d08b004c15820f02.webp",
          "https://img.cofynd.com/images/original/e0501b71bc00881dc50e77cdd57efb9c725264c3.jpg",
          "https://img.cofynd.com/images/latest_images_2024/99577235512984867a8789d3ac8012e5f37f688f.webp",
          "https://img.cofynd.com/images/latest_images_2024/3f9f345245f06db5ce7aa78b1f1c1a9d44321472.webp"
        ]
      },
      {
        "id": 124,
        "name": "Community Coworks",
        "badge": "Popular",
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹10,499",
        "period": "/ Month",
        "priceFormatted": "₹10,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/f878902d755bac3945ca290627c63b1b845b4ffc.webp",
          "https://img.cofynd.com/images/latest_images_2024/1cb6fc3d7de09463de195b4db48f98ad6dac4894.webp",
          "https://img.cofynd.com/images/latest_images_2024/6f8f2b42a2e86c81a974ea35a7495e70edf721a4.webp",
          "https://img.cofynd.com/images/latest_images_2024/59284df909f09ae92b668fe412a9b13b65a03973.webp",
          "https://img.cofynd.com/images/latest_images_2024/6e3948a34bf4d01c069be4e7103c19afd65bc7ff.webp"
        ]
      },
      {
        "id": 125,
        "name": "Kontor Space",
        "badge": "Premium",
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹10,999",
        "period": "/ Month",
        "priceFormatted": "₹10,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/cd59cbf5da6266c60d8737613939b12763c238d3.webp",
          "https://img.cofynd.com/images/latest_images_2024/635e645d77861fe746363e942b228a208f489c2a.webp",
          "https://img.cofynd.com/images/latest_images_2024/c661d342ae48b3db75e7c33be22030be5d744b4e.webp",
          "https://img.cofynd.com/images/latest_images_2024/32bb6f3c465928e86591a746e86363f797088acd.webp",
          "https://img.cofynd.com/images/latest_images_2024/274e6f124070147db744169fe0411a2b26a96bea.webp"
        ]
      },
      {
        "id": 126,
        "name": "Awfis Bellona",
        "badge": "Premium",
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹12,499",
        "period": "/ Month",
        "priceFormatted": "₹12,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/48b4d950028d3d6dc0a08bea369f0a988471a363.webp",
          "https://img.cofynd.com/images/latest_images_2024/b0dead1083c72509d16bd44a1d826162c2b29b58.webp",
          "https://img.cofynd.com/images/latest_images_2024/c4a3c9d84a9e29a67d8b3333e76f4e1990021d22.webp",
          "https://img.cofynd.com/images/latest_images_2024/a1eda117985323bf0e42bc435856240035505cfc.webp"
        ]
      },
      {
        "id": 127,
        "name": "Simpliwork",
        "badge": "Premium",
        "rating": null,
        "area": "Vikhroli",
        "location": "Vikhroli, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/1586ff3214df0ad7f0e4d26b1f8c504ded788013.webp",
          "https://img.cofynd.com/images/latest_images_2024/42fa1d5e5bd278e54d275fd6ba7188c249bc7ee1.webp",
          "https://img.cofynd.com/images/latest_images_2024/c5aea39b30ff57b420450eaed4f6dae2f5bdac86.webp",
          "https://img.cofynd.com/images/latest_images_2024/361881207fa437011ab6ebb342f10fda08c4f2d8.webp"
        ]
      },
      {
        "id": 128,
        "name": "Apna Office",
        "badge": "Popular",
        "rating": null,
        "area": "Vashi",
        "location": "Vashi, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/c4d5728eae2628d549f8d9d6384ef719082bd898.webp",
          "https://img.cofynd.com/images/latest_images_2024/361df4939d703bdc5939b62e9022e7c2773eb1c3.webp",
          "https://img.cofynd.com/images/latest_images_2024/a06960e4fb0c5b2d3e5d4e94fd50b5ac43f6f4f3.webp",
          "https://img.cofynd.com/images/latest_images_2024/7d29b33302841e99e6c677efc7f2da062c478655.webp",
          "https://img.cofynd.com/images/latest_images_2024/679ebc3d4c245ecde02df71a829d4d7288bfc475.webp",
          "https://img.cofynd.com/images/latest_images_2024/ac949e1926d0645d1047ce48aa8ebe7c057ea95e.webp",
          "https://img.cofynd.com/images/latest_images_2024/93f3d30eca14c10f2fae840444e4c9b4843df948.webp"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 129,
        "name": "Bloomdesk Kandivali West",
        "badge": "Popular",
        "rating": null,
        "area": "Kandivali West",
        "location": "Kandivali West, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/2dcce70afd284fb0f8352d09f89bcea4c23eddc1.webp",
          "https://img.cofynd.com/images/latest_images_2024/0dd862bd6fa8a6108d9bdd398a74f7f969bf50b9.webp",
          "https://img.cofynd.com/images/latest_images_2024/3e511ca4ef2ee57014edf0bbd8da4c4c4ac256f9.webp",
          "https://img.cofynd.com/images/latest_images_2024/f4d54fc452b94737d637aa1ae07d2444ee40add4.webp",
          "https://img.cofynd.com/images/latest_images_2024/56a8d2760f683fa813114ce0c17679308a5e8305.webp"
        ]
      },
      {
        "id": 130,
        "name": "WorkLoft",
        "badge": "Special Offer",
        "rating": null,
        "area": "Churchgate",
        "location": "Churchgate, Mumbai",
        "price": "₹10,999",
        "period": "/ Month",
        "priceFormatted": "₹10,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/e6b2fc8c4bb4f5ae2309cd1a1665d91844123d37.webp",
          "https://img.cofynd.com/images/latest_images_2024/c3f30d37ab53ca18fe7cd4b5e860eaaeace56246.webp",
          "https://img.cofynd.com/images/latest_images_2024/2f301e432a05584fa210c0c175d7f626c678cdd6.webp",
          "https://img.cofynd.com/images/latest_images_2024/22e515c3889b68debc9794fe2630c568c488f1bc.webp",
          "https://img.cofynd.com/images/latest_images_2024/fd0e38f8ac2244c8e36f4cca7c8115c84b90f0a1.webp",
          "https://img.cofynd.com/images/latest_images_2024/a49cbdaae396528c1c323317393c001e98f6a0ca.webp",
          "https://img.cofynd.com/images/latest_images_2024/37c6f4feb2b8b5aa6196ca30883579f82da3062c.webp"
        ]
      },
      {
        "id": 131,
        "name": "Kowork",
        "badge": "Popular",
        "rating": null,
        "area": "Borivali West",
        "location": "Borivali West, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/1f1b314fb2a29e5152b43bf6bdd9a4721ff896e4.webp",
          "https://img.cofynd.com/images/latest_images_2024/3af9451023a3cb91b0e4ac23be18925d63b59a7d.webp",
          "https://img.cofynd.com/images/latest_images_2024/a17ad18c26e21b9f0ac1d2ad0d77e472d33c91d3.webp",
          "https://img.cofynd.com/images/latest_images_2024/ef35b599363aa64b1e07220c34b38ba33eb9d3f7.webp",
          "https://img.cofynd.com/images/latest_images_2024/7e38686c35a3c44838de5aabc1812b62a46dbc50.webp"
        ]
      },
      {
        "id": 132,
        "name": "The Workables",
        "badge": "Popular",
        "rating": null,
        "area": "Borivali West",
        "location": "Borivali West, Mumbai",
        "price": "₹19,999",
        "period": "/ Month",
        "priceFormatted": "₹19,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/673d523a004165bdf5e135eab59bbaba3e776773.webp",
          "https://img.cofynd.com/images/latest_images_2024/bdea6cf5edf309af83828bf69ec17330c1ce60e6.webp",
          "https://img.cofynd.com/images/latest_images_2024/1fed510224b8257281da4d48bcf6697c06efab18.webp",
          "https://img.cofynd.com/images/latest_images_2024/6d68f64f419b4c12eb77ad73968c6117fa619e12.webp",
          "https://img.cofynd.com/images/latest_images_2024/7f1eb5b07595ed844c233a442dcd76687febca5b.webp"
        ]
      },
      {
        "id": 133,
        "name": "Redbrick Offices",
        "badge": "Popular",
        "rating": null,
        "area": "Thane West",
        "location": "Thane West, Mumbai",
        "price": "₹8,999",
        "period": "/ Month",
        "priceFormatted": "₹8,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/4b2ab8908dd60e8a47e9abe553719274e9877fec.webp",
          "https://img.cofynd.com/images/latest_images_2024/d4d31e7e88922e7a8d644e8682f2ee791f141501.webp",
          "https://img.cofynd.com/images/latest_images_2024/cebdaae92f3a94c8336b2045180e57c6f541d457.webp",
          "https://img.cofynd.com/images/latest_images_2024/4e2ac136629a4e7d3ece3b0e1e1635cb5c273ff9.webp",
          "https://img.cofynd.com/images/latest_images_2024/cc4cf44967d164c7964aa22d76c9350a054bc0f8.webp"
        ]
      },
      {
        "id": 134,
        "name": "Collaborate Hub",
        "badge": "Popular",
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/8076bc1741ac66dccba0db17520bad79107ce5e3.webp",
          "https://img.cofynd.com/images/original/cac9f8d061194787b7c44961b981481381b8f3f0.jpg",
          "https://img.cofynd.com/images/original/3878f644c689af77f363f7af6362d5d694d52e05.jpg",
          "https://img.cofynd.com/images/original/882ddda1ff8a5724521b06669232e84c4bb757ee.jpg",
          "https://img.cofynd.com/images/latest_images_2024/a7529c19412eb795846d59af4cc90db70ae3cf54.webp",
          "https://img.cofynd.com/images/original/935b77723de884b159f1631117cfeb50759bd574.jpg"
        ]
      },
      {
        "id": 135,
        "name": "Hour Space",
        "badge": "Popular",
        "rating": null,
        "area": "Colaba",
        "location": "Colaba, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/3245db5bf5484422b3d8bf2493fb69c7292e5fb4.webp",
          "https://img.cofynd.com/images/latest_images_2024/87d4af4901e20db5f2ad10b85221d75390d1174c.webp",
          "https://img.cofynd.com/images/latest_images_2024/4f1c97cc13ae2ec8894b6d70a694bd21f7d856b1.webp",
          "https://img.cofynd.com/images/latest_images_2024/7b8fba45c1c737a9293211ed6e4ab6f3b149fad7.webp",
          "https://img.cofynd.com/images/original/22575df095a7c9455dc983707416e1a814b6a7f3.jpg",
          "https://img.cofynd.com/images/latest_images_2024/686a1cf14ac338ca99797770680076859681b84f.webp",
          "https://img.cofynd.com/images/latest_images_2024/2c3a2392b33d4256f753a66917997aabaaf30c00.webp"
        ]
      },
      {
        "id": 136,
        "name": "Enjoy Coworking Space",
        "badge": null,
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/d6c7b1cf0de9ada9455a5a4e7f64d35a3fc574c0.webp",
          "https://img.cofynd.com/images/latest_images_2024/56bea1e9b4fdd770e39fc03a1e6f9dff05d8d16a.webp",
          "https://img.cofynd.com/images/latest_images_2024/a400e0be6eb81554786d877f63656911451cce4d.webp",
          "https://img.cofynd.com/images/latest_images_2024/2ff9197a9a3c728ec8e29b2654919c9b1ff5c3ab.webp",
          "https://img.cofynd.com/images/latest_images_2024/5faf3313914ed250bf119d42ffe49c0b1282d044.webp",
          "https://img.cofynd.com/images/latest_images_2024/40f1163e625380e848d2b309b9ad0cc95c4fab84.webp"
        ]
      }
    ],
    [
      {
        "id": 137,
        "name": "Innov8 Kalpataru Prime",
        "badge": null,
        "rating": null,
        "area": "Thane West",
        "location": "Thane West, Mumbai",
        "price": "₹13,999",
        "period": "/ Month",
        "priceFormatted": "₹13,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/02ec27bbd4ffd8ffd6dad2858d6562c8a24ca4f8.webp",
          "https://img.cofynd.com/images/latest_images_2024/1f372b86b0309b916c5addb69fdb5150dde4fe8e.webp",
          "https://img.cofynd.com/images/latest_images_2024/700229221ccd0b2943dafabb80f6a8f61a278654.webp",
          "https://img.cofynd.com/images/latest_images_2024/7b6aa3a4c9f685901e7fa6acf5314639bc29fe20.webp",
          "https://img.cofynd.com/images/latest_images_2024/de203d8267285c5c01b5a37d8dc02e3831f2037e.webp"
        ]
      },
      {
        "id": 138,
        "name": "Workbay Coworking Deccan House",
        "badge": "Popular",
        "rating": null,
        "area": "Bandra West",
        "location": "Bandra West, Mumbai",
        "price": "₹18,499",
        "period": "/ Month",
        "priceFormatted": "₹18,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/13ba31dd1d7541820fe181c5eeef4a687584ed55.webp",
          "https://img.cofynd.com/images/latest_images_2024/f3f3b6e34b87dffbb582b0768eea3535d21c1c3b.webp",
          "https://img.cofynd.com/images/latest_images_2024/2d7dd90468990f7d1699d37d1c06076ea6369156.webp",
          "https://img.cofynd.com/images/latest_images_2024/88402c1235e44bb38b1240c4d0a53f0a75f5d25d.webp",
          "https://img.cofynd.com/images/latest_images_2024/c33760ace1d22261c987d4b57110bb0e20711584.webp"
        ]
      },
      {
        "id": 139,
        "name": "Cowork30",
        "badge": "Special Offer",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹8,999",
        "period": "/ Month",
        "priceFormatted": "₹8,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/ad2005305232b68a0e1a89ae3bc48fce4d6dcfbd.webp",
          "https://img.cofynd.com/images/latest_images_2024/82f1781c60f310400061b969c26a6591cd294030.webp",
          "https://img.cofynd.com/images/latest_images_2024/5291a8750431ee008abab72d08882b89b17c892c.webp",
          "https://img.cofynd.com/images/latest_images_2024/e5429d6bfae504cc7334db3fc316ef115539ef4d.webp",
          "https://img.cofynd.com/images/latest_images_2024/97dd970444ac2c2ac787a7d5e73d29ea6539f4c8.webp"
        ]
      },
      {
        "id": 140,
        "name": "Inspire Cospaces Boston House",
        "badge": "Special Offer",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹15,999",
        "period": "/ Month",
        "priceFormatted": "₹15,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/1aac5ff9e5efd60c70d76a36cd7d1dd67344c4ef.webp",
          "https://img.cofynd.com/images/latest_images_2024/a2b8dd46664cc5ba4045dd1e916b5998986d8531.webp",
          "https://img.cofynd.com/images/latest_images_2024/f3ea55ad4eb481ea6d0bbff9a88da908a5e90f7f.webp",
          "https://img.cofynd.com/images/latest_images_2024/1517adaa21f9fc5d66dd36395232164a752a922b.webp",
          "https://img.cofynd.com/images/latest_images_2024/6bee37079637de29fd956c0c74d224689ce3aafd.webp"
        ]
      },
      {
        "id": 141,
        "name": "Officebing - Rupa Solitaire",
        "badge": null,
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/0f90675be7f14fd421b4503bddedfa707e21b5c8.webp",
          "https://img.cofynd.com/images/latest_images_2024/59641f310cab57df375072a6c7d03c1d439ebdfa.webp",
          "https://img.cofynd.com/images/latest_images_2024/59785b5fc8cf428653726378faec695a52be98b6.webp",
          "https://img.cofynd.com/images/latest_images_2024/c00ef081772b66a484376e8e736f119782c80986.webp"
        ]
      },
      {
        "id": 142,
        "name": "Ascend Cowork",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/4791cbbbe73c3a4340b65a9147374038dfab0f48.webp",
          "https://img.cofynd.com/images/latest_images_2024/827a330f643baf0c4e863c5d1f6042349b58adee.webp",
          "https://img.cofynd.com/images/latest_images_2024/506668a09589a5ba6933aec9b469c6ba0dbbbfe7.webp",
          "https://img.cofynd.com/images/latest_images_2024/891c477d10b3ec5e9582e6166dfadc118e3adbd1.webp",
          "https://img.cofynd.com/images/latest_images_2024/d53d5004cd04fc19aae0fa743c463b05e170dbcb.webp"
        ]
      },
      {
        "id": 143,
        "name": "Vibrant Business Centre",
        "badge": "Popular",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/6ca50a620d2467dbb1a5db425afbc917461ce0a4.webp",
          "https://img.cofynd.com/images/latest_images_2024/444bd067898cbb726e543e2555aecf9c5f0ab2d0.webp",
          "https://img.cofynd.com/images/latest_images_2024/3580a3fb9f91d9c1b784e76d9877776a7af83bc2.webp",
          "https://img.cofynd.com/images/latest_images_2024/e3df7e65e19344c3b68074bef4389883e96b4db8.webp",
          "https://img.cofynd.com/images/latest_images_2024/77150ebaaa461316be71f1f5aec0b2bb48be551f.webp"
        ]
      },
      {
        "id": 144,
        "name": "Vatika Business Centre Supreme Business Park",
        "badge": "Popular",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹21,999",
        "period": "/ Month",
        "priceFormatted": "₹21,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/67c32f39f0ad34a299707b330a50da5b34b149ea.webp",
          "https://img.cofynd.com/images/latest_images_2024/9c97c596ddfe5cc7da4ea9e338af34cf963a384e.webp",
          "https://img.cofynd.com/images/latest_images_2024/7ff7fb7f717f3c3c08a3209c8b0914dc93cf6967.webp",
          "https://img.cofynd.com/images/latest_images_2024/8654fb0a5afa697babe04510270124458e8b1882.webp",
          "https://img.cofynd.com/images/latest_images_2024/94f3e19b977571485299d90a18f489770528930d.webp",
          "https://img.cofynd.com/images/latest_images_2024/b22d7c2b2b0061b9d1d83c6b57ee7b2d0219da0a.webp"
        ]
      }
    ],
    [
      {
        "id": 145,
        "name": "Vikas Hub",
        "badge": "Popular",
        "rating": null,
        "area": "Chembur",
        "location": "Chembur, Mumbai",
        "price": "₹13,999",
        "period": "/ Month",
        "priceFormatted": "₹13,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/9f893d17ca9ce73e2304a09827b47f2105c5b328.webp",
          "https://img.cofynd.com/images/latest_images_2024/312655b7d32146c35de8f3f169dc33e282cc5184.webp",
          "https://img.cofynd.com/images/latest_images_2024/86f7cbf12384a9a57611a8eacaafe3b96256f46c.webp",
          "https://img.cofynd.com/images/latest_images_2024/9795c6f4ffe8c494a1baf2ae8134d6baa9cd7560.webp",
          "https://img.cofynd.com/images/latest_images_2024/54af167e8015b75953a2ad488b6be301a56c86c7.webp",
          "https://img.cofynd.com/images/latest_images_2024/e1f38ba10e30530dba6c810e199019edfc6dc4f8.webp",
          "https://img.cofynd.com/images/latest_images_2024/6039f79e97476dc7cab0c61684b71564746ec8b2.webp"
        ]
      },
      {
        "id": 146,
        "name": "Officebing Kailash Business Park",
        "badge": null,
        "rating": null,
        "area": "Vikhroli West",
        "location": "Vikhroli West, Mumbai",
        "price": "₹13,999",
        "period": "/ Month",
        "priceFormatted": "₹13,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/5261fd13b24e09cb87d3b659b5a7a2845220b43e.webp",
          "https://img.cofynd.com/images/latest_images_2024/e1f179e9fe613e4054b7b2e2d3f59c94460f6099.webp",
          "https://img.cofynd.com/images/latest_images_2024/d988da58d6e1285b6fc91a885f7321ecb146329a.webp",
          "https://img.cofynd.com/images/latest_images_2024/8461559cf8c09bdaeda376849f3eb51ebd245243.webp",
          "https://img.cofynd.com/images/latest_images_2024/cc8dbe0d5fb997383918c232a66353ac78345d82.webp",
          "https://img.cofynd.com/images/latest_images_2024/a87fff6761b01f72e0e73759027a95573ee22978.webp",
          "https://img.cofynd.com/images/latest_images_2024/044eef879c67226267d2506fd5dafcd9cef40a8f.webp"
        ]
      },
      {
        "id": 147,
        "name": "Flexiworks",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹11,000",
        "period": "/ Month",
        "priceFormatted": "₹11,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/921c6a6a587a8fdb017adfbfb66a3ef964299d80.webp",
          "https://img.cofynd.com/images/latest_images_2024/285d0adc6d22cc7f961ea1a0450fd019c0a78c41.webp",
          "https://img.cofynd.com/images/latest_images_2024/e9cc3fa00c1f1c74a9672708eb740b330001d1b2.webp",
          "https://img.cofynd.com/images/latest_images_2024/0ecb6ccf650baf5d43389928d42102b28e650670.webp",
          "https://img.cofynd.com/images/latest_images_2024/415342c475bcbc4563d5ad667eb1c058b515c60b.webp"
        ]
      },
      {
        "id": 148,
        "name": "Innov8 Peninsula Business Park",
        "badge": "Premium",
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹21,999",
        "period": "/ Month",
        "priceFormatted": "₹21,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/fb23fbbf73b25d0d74db96c187e71d87e70cdac3.webp",
          "https://img.cofynd.com/images/latest_images_2024/d8bf540b7d47c31f37970cd835b36d8491eb4a41.webp",
          "https://img.cofynd.com/images/latest_images_2024/9baa0ff7633eba890214d88da68630930c88ada2.webp",
          "https://img.cofynd.com/images/latest_images_2024/510b594d891cee119bda0d2fbfb2685c48a2f8ad.webp"
        ]
      },
      {
        "id": 149,
        "name": "Momentum",
        "badge": "Near Metro",
        "rating": null,
        "area": "Fort",
        "location": "Fort, Mumbai",
        "price": "₹23,999",
        "period": "/ Month",
        "priceFormatted": "₹23,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/6b803f44c718adb9b3c82d9967fa762ff24aef31.webp",
          "https://img.cofynd.com/images/latest_images_2024/cf6721fbf58d469dbec5ab29dd10150815d5c677.webp",
          "https://img.cofynd.com/images/latest_images_2024/5575367506d7547211d356b91992079355e7d2b2.webp",
          "https://img.cofynd.com/images/latest_images_2024/88ac4b40cf3ed6ed3ca825713d0767e9d87d4705.webp",
          "https://img.cofynd.com/images/latest_images_2024/5189736a9f2b794914cb0755a79084378ec9ccee.webp",
          "https://img.cofynd.com/images/latest_images_2024/d691d6b3f4086e037cd181219a3d958cce35b639.webp",
          "https://img.cofynd.com/images/latest_images_2024/62d2707eb77d6b57bf8a689c02268ba191e91073.webp",
          "https://img.cofynd.com/images/latest_images_2024/e805e3b710d624d1287f1883ba11432f62297100.webp",
          "https://img.cofynd.com/images/latest_images_2024/ccabc7926808cec6fd2a1afc692ce853b68ec1e9.webp",
          "https://img.cofynd.com/images/latest_images_2024/9282ea3371e4533a6d2febb5c9111639a634ed19.webp"
        ]
      },
      {
        "id": 150,
        "name": "Canvas CoWorks",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/d0a3c0f218b7746d4ca5bbf57ebae94b933ce2c4.webp",
          "https://img.cofynd.com/images/latest_images_2024/f56443ec764f78835fc445e0a91acb7b554661c6.webp",
          "https://img.cofynd.com/images/latest_images_2024/513e63f154593e1fb0273855a633522ad3b7d8d3.webp",
          "https://img.cofynd.com/images/latest_images_2024/4b50d6d08ce3bd6555ea61c4f061c1da9047ba72.webp",
          "https://img.cofynd.com/images/latest_images_2024/d7c53ee1f692275beea638f0c4c7a862b3b3d0d3.webp",
          "https://img.cofynd.com/images/latest_images_2024/aa9451ab7a989a442d4fc8df794df853dc515e37.webp"
        ]
      },
      {
        "id": 151,
        "name": "Autopilot Offices",
        "badge": "Special Offer",
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹16,999",
        "period": "/ Month",
        "priceFormatted": "₹16,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/ce6d732b4ffd31848ab910feac68b023c4b8c06f.webp",
          "https://img.cofynd.com/images/latest_images_2024/f8ab827c1077f3a302a2f71efc4e66b056ce7a35.webp",
          "https://img.cofynd.com/images/latest_images_2024/81619d632233d94fae9d4f5d14b54191043e205a.webp",
          "https://img.cofynd.com/images/latest_images_2024/57781776967876496e16876369ec6fcb49f180d8.webp",
          "https://img.cofynd.com/images/latest_images_2024/38361f02d3788a08642f9ed70dab09a7d8f220b3.webp",
          "https://img.cofynd.com/images/latest_images_2024/4e585b69e28d029b3aae5ac0b1c5e4538f009137.webp",
          "https://img.cofynd.com/images/latest_images_2024/672671df5313bdf833c6566ce99188593d5f3bfa.webp",
          "https://img.cofynd.com/images/latest_images_2024/8714effe700e78dbf78df763da6d7fa85ffa8671.webp",
          "https://img.cofynd.com/images/latest_images_2024/441311b32e6fd564ad03d54c610d0d2e5f33750a.webp"
        ]
      },
      {
        "id": 152,
        "name": "Workinger",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/8ab62ae86384a8bbbd935dcdd9019b3c59907cc5.webp",
          "https://img.cofynd.com/images/latest_images_2024/3af0829e2071d5955be6b3f709ad1c3e86c33bb4.webp",
          "https://img.cofynd.com/images/latest_images_2024/69c05367f4a75d823a92a66bfbebc58a7c752ad2.webp",
          "https://img.cofynd.com/images/latest_images_2024/9694012a87d3449b0afe36d3d12cd472a442c5f8.webp",
          "https://img.cofynd.com/images/latest_images_2024/039a65bd3ae6574e31e9fb56b9946db13772a4fc.webp",
          "https://img.cofynd.com/images/latest_images_2024/55b346479b52a04725c32881321f0e34e97646c0.webp",
          "https://img.cofynd.com/images/latest_images_2024/06844ff43c57bd1826162913c5836e5606a90852.webp",
          "https://img.cofynd.com/images/latest_images_2024/5d5f29cbee9ab1b442e91a6b6ce80f095dfaecb9.webp",
          "https://img.cofynd.com/images/latest_images_2024/7dadd1a6f6f5256ccbd1f1be05e8d5cdb7d400fa.webp"
        ]
      }
    ],
    [
      {
        "id": 153,
        "name": "Letswork",
        "badge": "Popular",
        "rating": null,
        "area": "Mulund West",
        "location": "Mulund West, Mumbai",
        "price": "₹13,999",
        "period": "/ Month",
        "priceFormatted": "₹13,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/c13740aaf10f0f193d18b1f23a616896baff3c1e.webp",
          "https://img.cofynd.com/images/latest_images_2024/a677c1c0b45d306a1edaeef79072e2d319278ef1.webp",
          "https://img.cofynd.com/images/latest_images_2024/2d6b646c582b186e341399a6d6882a4c9b1ee3b4.webp",
          "https://img.cofynd.com/images/latest_images_2024/4622b2866366cb0fa67ece1c29845c52d015ee35.webp"
        ]
      },
      {
        "id": 154,
        "name": "Think Tank Coworking Space",
        "badge": "Special Offer",
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/37097efbfb49ec4eec1654e25e68354966171999.webp",
          "https://img.cofynd.com/images/latest_images_2024/4788cf7d114a2f65c7ed6889b82284f8817228a3.webp",
          "https://img.cofynd.com/images/latest_images_2024/fa1a5ee77e6fe98424aee3cfda11367b611205a1.webp",
          "https://img.cofynd.com/images/latest_images_2024/a4b233fb3bfa83aaede89d9b38819cb4b1a33ad7.webp"
        ]
      },
      {
        "id": 155,
        "name": "Instinct Innovations",
        "badge": "Special Offer",
        "rating": null,
        "area": "Goregaon",
        "location": "Goregaon, Mumbai",
        "price": "₹12,499",
        "period": "/ Month",
        "priceFormatted": "₹12,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/1c812455d98b8f2e9999bd67b4b7804c435cca0c.webp",
          "https://img.cofynd.com/images/latest_images_2024/4b9db5836d4b8d437ed7357aeef891a7f19059e6.webp",
          "https://img.cofynd.com/images/latest_images_2024/d71b9f3f868476063eb59461ce007b52e479ebe9.webp",
          "https://img.cofynd.com/images/latest_images_2024/053d290c24c9df078dce679840b59eeab22836cd.webp",
          "https://img.cofynd.com/images/latest_images_2024/5a073c957d45e78b9b0d527329467f3d4c884ec8.webp",
          "https://img.cofynd.com/images/latest_images_2024/529633db0474bd2849488a7aa1d6641f2db44517.webp"
        ]
      },
      {
        "id": 156,
        "name": "Studwork CoWorking",
        "badge": null,
        "rating": null,
        "area": "Sakinaka",
        "location": "Sakinaka, Mumbai",
        "price": "₹14,999",
        "period": "/ Month",
        "priceFormatted": "₹14,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/a5e357f941427c992c0c40e1df4593efb6ecba39.webp",
          "https://img.cofynd.com/images/latest_images_2024/56f7517893c10e4075e8e7c2acc410f7214b3ef9.webp",
          "https://img.cofynd.com/images/latest_images_2024/c976a895f8c13e875c868ea70c81ba5b2fce6732.webp",
          "https://img.cofynd.com/images/latest_images_2024/2a90236a0b4c48498d67f7953d3e7a4ef6854576.webp",
          "https://img.cofynd.com/images/latest_images_2024/dc91d11cf9e57457b5212a10e75f3d65a9960f0d.webp",
          "https://img.cofynd.com/images/latest_images_2024/56c5a6e51201c3f37aac2e339de30800da55bd2a.webp",
          "https://img.cofynd.com/images/latest_images_2024/f2854a71189070b2f9746168e82f0d6ea83e8148.webp",
          "https://img.cofynd.com/images/latest_images_2024/e13e1c365bb8ed0b3b409633d83e501adf219fbe.webp"
        ]
      },
      {
        "id": 157,
        "name": "Alloy Workspaces",
        "badge": "Near Metro",
        "rating": null,
        "area": "Deonar",
        "location": "Deonar, Mumbai",
        "price": "₹10,999",
        "period": "/ Month",
        "priceFormatted": "₹10,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/c562d5d2e9d79f3d5224670669b1cabeacb8fa82.webp",
          "https://img.cofynd.com/images/latest_images_2024/4bb90d4a4e861f75a6d26fa87bab88651022d308.webp",
          "https://img.cofynd.com/images/latest_images_2024/97d575c0c4e68f181e03322a1c9fc7a6a6987e16.webp",
          "https://img.cofynd.com/images/latest_images_2024/312cdbd8fd6f437678beda22b4cdf32b1fdb67fa.webp",
          "https://img.cofynd.com/images/latest_images_2024/8bda113c99ebd829f3a72146288923dbeb5936e4.webp",
          "https://img.cofynd.com/images/latest_images_2024/97affad1d65ac9df6b8baaf7bf07f85b855cd77d.webp"
        ]
      },
      {
        "id": 158,
        "name": "Officino Co Working space",
        "badge": null,
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹14,999",
        "period": "/ Month",
        "priceFormatted": "₹14,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/586534613aab8901da755440912d2bbe42fc4751.webp",
          "https://img.cofynd.com/images/latest_images_2024/259a5fe31b4499e98201244a926ba5c3a14c480a.webp",
          "https://img.cofynd.com/images/latest_images_2024/e13404b81ebf34b4943aae9c1e8b0e6aac6e15e3.webp",
          "https://img.cofynd.com/images/latest_images_2024/85f0600e7aeb099201f04a9f495c058f41e531c3.webp"
        ]
      },
      {
        "id": 159,
        "name": "Yanisa Coworking",
        "badge": "Popular",
        "rating": null,
        "area": "Mulund West",
        "location": "Mulund West, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/ca0ec9d8cd62892e9136f2ca948fccbc3e7dcf7a.webp",
          "https://img.cofynd.com/images/latest_images_2024/4da706a3b139031c7098d784ac9c3c19878e5c45.webp",
          "https://img.cofynd.com/images/latest_images_2024/caef96edad0260be51a3f3072b8fcf61a79ac3fc.webp",
          "https://img.cofynd.com/images/latest_images_2024/37125e7a98fe328124393a0086f94980f9c00862.webp",
          "https://img.cofynd.com/images/latest_images_2024/477dd78fcd2a9d2c872667b635944f77098618e7.webp",
          "https://img.cofynd.com/images/latest_images_2024/be9e128e4766a8ab5895c1970bcebabc9ff680d0.webp"
        ]
      },
      {
        "id": 160,
        "name": "The Founders Coworks",
        "badge": "Popular",
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹14,999",
        "period": "/ Month",
        "priceFormatted": "₹14,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/4b3a3db7cce922daed967301194358f3cf1a0188.webp",
          "https://img.cofynd.com/images/latest_images_2024/c24a98e9ad2d9c665bce7a7272bab15d6103571e.webp",
          "https://img.cofynd.com/images/latest_images_2024/3204c5a1dc4da9eecf13e8d9bdabaff869c33410.webp",
          "https://img.cofynd.com/images/latest_images_2024/0482058746492722266ed8af37ed84b8c585e973.webp",
          "https://img.cofynd.com/images/latest_images_2024/f541e8efa59ca8854744ad66c05482dae6b0d0a1.webp"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 161,
        "name": "GRD Cello Triumph",
        "badge": "Special Offer",
        "rating": null,
        "area": "Goregaon East",
        "location": "Goregaon East, Mumbai",
        "price": "₹11,999",
        "period": "/ Month",
        "priceFormatted": "₹11,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/7b50ae9d06792d24a95873afbd58b353d4a3264b.webp",
          "https://img.cofynd.com/images/latest_images_2024/e0e6a8053c6760e0731122dc51161b6f87d1d592.webp",
          "https://img.cofynd.com/images/latest_images_2024/fca79689a8baedc0357c8999437c9c17068ad898.webp",
          "https://img.cofynd.com/images/latest_images_2024/ddadb5c9829e342a56bbef7aa92c016f6bccd456.webp",
          "https://img.cofynd.com/images/latest_images_2024/93a5e1bb968e6cb8332b9574347780e1af39d72b.webp"
        ]
      },
      {
        "id": 162,
        "name": "108work",
        "badge": "Special Offer",
        "rating": null,
        "area": "Chembur",
        "location": "Chembur, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/7cccfd0e470230a8ae68e3cdab6052b5cc666a86.webp",
          "https://img.cofynd.com/images/latest_images_2024/543ce230e229f25d429529a5844e23a0dd75054f.webp",
          "https://img.cofynd.com/images/latest_images_2024/eeba62610db11faf72ad09cfee8feeaf19297069.webp",
          "https://img.cofynd.com/images/latest_images_2024/bee9696b5b8407746977e2b1e9b35109ec4d545a.webp",
          "https://img.cofynd.com/images/latest_images_2024/fdfc5fef5a5a380d7c13c2f2d81b93b268a76321.webp",
          "https://img.cofynd.com/images/latest_images_2024/5f6b6869f1c5278981e37127af51660511ee9c82.webp"
        ]
      },
      {
        "id": 163,
        "name": "Connekt BKC",
        "badge": "Premium",
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹39,999",
        "period": "/ Month",
        "priceFormatted": "₹39,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://img.cofynd.com/images/latest_images_2024/b7de46f1db78a6ae1d49979998044e5dd0b80631.webp",
          "https://img.cofynd.com/images/latest_images_2024/38e9f92a039ace10ad03e111081907c86b272676.webp",
          "https://img.cofynd.com/images/latest_images_2024/8f03d6b46298cfc3fb57a65efe2e1ea69704bba7.webp",
          "https://img.cofynd.com/images/latest_images_2024/2d8b42bbb63f30403c466284526819648f2b981b.webp",
          "https://img.cofynd.com/images/latest_images_2024/e7e967f2d83a167f09ebed757838f52eb5d140b8.webp",
          "https://img.cofynd.com/images/latest_images_2024/e8072271f76eedc1d6c48d9d9740f206eb22fec2.webp",
          "https://img.cofynd.com/images/latest_images_2024/66f1a5ee83bc6302475e82c55c1ec88c248fd456.webp",
          "https://img.cofynd.com/images/latest_images_2024/ea4caabc14ae4b2742f360913a779855775a99e7.webp",
          "https://img.cofynd.com/images/latest_images_2024/52d7e7d888ec6748953e8a0b35e76cbb72933033.webp",
          "https://img.cofynd.com/images/latest_images_2024/4484bd18d83bafdf3c7617788b388f2e96e37cb3.webp",
          "https://img.cofynd.com/images/latest_images_2024/ab3863f512c84b1c335a4b5ad4969b6bc87bbeae.webp"
        ]
      },
      {
        "id": 164,
        "name": "My Branch",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹9,000",
        "period": "/ Month",
        "priceFormatted": "₹9,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1680684577/lqsnzzyadfq8xk0dpdj8.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680684554/yccf89rm0zjbjuycgafu.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680684554/fq5ia8mrme9hvgy5ylnh.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680684554/via2csmhh750cdn3gimv.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680684557/p5o7qdtsdpdgh1tdej4t.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680684555/odew5aehkjyxww8ehxes.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680684555/xmz7iwr6zm08igid2cx3.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680684558/yq3ypn1fuxgdtgyjhue4.webp"
        ]
      },
      {
        "id": 165,
        "name": "WeWork",
        "badge": null,
        "rating": null,
        "area": "Lightbridge",
        "location": "Lightbridge, Mumbai",
        "price": "₹25,000",
        "period": "/ Month",
        "priceFormatted": "₹25,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/df40fc944d1810fb7df12b6101cc302a_ZqVEoHq22.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/6b507bc5b20ef1dac179f63c172d2431_1eQVooeBU.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/62940aabfc9262ca189fb5489fe3606e_rp-KWfkl6.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/aa0b37655d96dfa06f75d823bc7f7dff_2eHxIyndd.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/fcaef3a60859e51034d243512999d7b1_nGqQQYU6O.JPG"
        ]
      },
      {
        "id": 166,
        "name": "Studiotab",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹8,000",
        "period": "/ Month",
        "priceFormatted": "₹8,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/51119098aabfc806878bdc960a0437fd_1r58zEfP3.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/fd791a56e12ef751c98aac46f5b1669f_-MSWYUVVK.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/124a9d102acc41f6420be457cb5e13ed_83CS9js-U.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/ffaea47887ee30141b880402727bc375_sZPAjGnW-.jpeg"
        ]
      },
      {
        "id": 167,
        "name": "Redbrickoffices",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹9,000",
        "period": "/ Month",
        "priceFormatted": "₹9,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1469693075/dmnm8kz94bx8sm9hijkr.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1499845332/sfhvazhsa5yebahzpvgz.webp"
        ]
      },
      {
        "id": 168,
        "name": "Idea Square Business Centre",
        "badge": null,
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹15,000",
        "period": "/ Month",
        "priceFormatted": "₹15,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/1ec6b075bc9331ae9c0df60ff400f7c8_o8CDvlQJQ.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/35450805b9d42a5943d5d6539155f33e_wejlX-JIEI.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/6ff3cc8055b1fc55b1ded70afc263b30_I1gCgA2Ie.JPG",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580291429/l65tdtyxyyf6l3jfjnkz.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580291384/h1pgobieztufbmqz0om8.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580291292/pxkmilnyzzrvxzcko0pu.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580291273/bqo90nq8989bg8iyt9ry.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580289065/xvf6zfoswxoof3kobc9z.webp"
        ]
      }
    ],
    [
      {
        "id": 169,
        "name": "Vibgyor infra decor pvt ltd.",
        "badge": null,
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1592560295/ccrpulnuyfoihkn9hrg1.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1592560373/cdawqahwkpl9n3jgfcik.webp"
        ]
      },
      {
        "id": 170,
        "name": "CoWrks",
        "badge": null,
        "rating": null,
        "area": "Equinox",
        "location": "Equinox, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1689161822/rfnd9myeu9exubfpaxrw.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1646817868/isvautyxbfud4eymrphd.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676875308/dtw1k0kpwtjpbgdq68xi.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676875308/flkxxkpxotuonwbezycp.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1698056851/jzekkrastunnln7wmggp.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1698056827/mlvvkwndnvndcau45h7u.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1698056822/nggyfb9lbofch0s2zfcu.webp"
        ]
      },
      {
        "id": 171,
        "name": "DA Co Working Spaces",
        "badge": null,
        "rating": null,
        "area": "Bandra East",
        "location": "Bandra East, Mumbai",
        "price": "₹14,999",
        "period": "/ Month",
        "priceFormatted": "₹14,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/7a876aca4bb5d59c94d18782c5820347_gFTRG3EP1.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/8e8dd9b9cacc8fb3b6be9f9db31185e1_rJskK2muAe.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/e4266ea99e4ee675777048abc1fd9c26_Bbjf0s6AF.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/038afbb0291e89dec2427702ec871835_OXm88ZDH1.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/046884cc65f1d3cafa827bbdfbe52b54_WYjNkEbSz.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/157c862ac4219782bad555e688b4f7e1_I__onAMZE.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/e066adfd46679a87d14306f6f814275b_2aIROk8wwi.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/629d761a4d89afe4082009f06d938995_QDab-HWHh.jpg"
        ]
      },
      {
        "id": 172,
        "name": "Kontor Space",
        "badge": null,
        "rating": null,
        "area": "Bandra",
        "location": "Bandra, Mumbai",
        "price": "₹40,000",
        "period": "/ Month",
        "priceFormatted": "₹40,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1702475575/ndqynnun4pumckm2wa3l.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1702474387/moa8fwoxwk21jeomubii.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1702474418/vxkkk7mkwkchfv0bjuxg.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1702475009/eppqlsg1gd5gkro8tcxs.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1702475493/bxmtqmjzpjakwqcbkem8.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1702475551/l2cbkad5jdaopbxlmgye.webp",
          "https://wybrid-vendor-portal-public-prod.s3.ap-south-1.amazonaws.com/file1762776761836.jpg",
          "https://wybrid-vendor-portal-public-prod.s3.ap-south-1.amazonaws.com/file1762848881377.jpg"
        ]
      },
      {
        "id": 173,
        "name": "603 The CoWorking Space",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹15,000",
        "period": "/ Month",
        "priceFormatted": "₹15,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/09500daf676616624134695d2c841d22_C2ZIfk72s.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/07bffec3c0cc253b8251f2801d6119a2_kX0fxK5J7.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/bcefa0e75c743b761cc1b1b10cff5624_bz8DBzNCG.JPG",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1615463776/zb5naotjivantdwznqrq.jpg",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1615463856/gkkqwmue77ri748wl0q3.jpg",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1615463825/tnj1g6imoghezulqy2h0.jpg",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1615463885/of82cpqsrmjburjbjq71.jpg"
        ]
      },
      {
        "id": 174,
        "name": "Property Manu Bhatia",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1538655729/ejnmfjuw3whfi3xglaoa.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1538655670/nrd5vfo0qpx3qfzgemfo.webp"
        ]
      },
      {
        "id": 175,
        "name": "DBS Workspace",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹28,000",
        "period": "/ Month",
        "priceFormatted": "₹28,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/3ac2e8bc953c01239e2da8b63e9f8a84_EFmbFM5Fk.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/6d500073a18aeb4d9f2075fb98df4d4f_Joyy2yY-s.jpeg"
        ]
      },
      {
        "id": 176,
        "name": "DBS",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/e1d25ea13bab01e4f9b7e8d928efd7ff_INAiIv_b3.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/33d682e680c289b56ae498c837c3da3a_x7pemNc6w.jpg"
        ]
      }
    ],
    [
      {
        "id": 177,
        "name": "TBQ - The Business Quarter",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹27,000",
        "period": "/ Month",
        "priceFormatted": "₹27,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1689665045/qs0yjosapjapncyr3dlb.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689664989/su3rtmwul4oglgxthoyr.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689664989/aqknclxzmmrjjizqukbw.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689664989/zaequvhi3nrumnhxn22l.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689664989/ejtmho5v8a9gwqumztxp.webp"
        ]
      },
      {
        "id": 178,
        "name": "Redbrick Offices",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹30,000",
        "period": "/ Month",
        "priceFormatted": "₹30,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1702632757/cqcbnq23l7cokup2j59b.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1702632786/lmp7g2s0asr2fdn6dnbt.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1702632787/duaigqo70siaufgqrnsg.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1702632788/v61r7pgotbb1zxtzm14n.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1702632788/ejz1j7jbzboo3rw5rpsw.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1702632788/lk0cv8zbsr0bnbs7buua.webp"
        ]
      },
      {
        "id": 179,
        "name": "Executive Spaces",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹12,000",
        "period": "/ Month",
        "priceFormatted": "₹12,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1691130775/qswf4znkpqlpumhycvsk.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1691130815/j1gsnglmtzfnu43ahj6u.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1691130815/xweeyodc0w2iqfd2t6s5.webp"
        ]
      },
      {
        "id": 180,
        "name": "Skyber Enterprises",
        "badge": null,
        "rating": null,
        "area": "Shanti Nagar",
        "location": "Shanti Nagar, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1660810957/krw8hxotyet9mafjfe69.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1660734191/cjxb4fc9qhiw0fvyhk7m.jpg"
        ]
      },
      {
        "id": 181,
        "name": "DivineHub",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹7,500",
        "period": "/ Month",
        "priceFormatted": "₹7,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1549365170/tb8ermxweq8ujayrgcvc.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1549365322/vuuagzgiqpemlzflgpkn.webp"
        ]
      },
      {
        "id": 182,
        "name": "Spotlight Coworking",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹8,000",
        "period": "/ Month",
        "priceFormatted": "₹8,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/6ef41d7fb559e7b2f7c01c62a8e02068_AizdQLXkp.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/c744039c372e60edd23892df4647a467_TtFU_ycB0.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/5fbe9950f7c88944672711084b2a8e12_XCrOUvRtI.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/e3c31e25e72de0a0eea29d89edb8b33a_lA7VJrJsB.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/652ce79f06da825931f86cca3798f0af_eGHXEPrvWL.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/0cfc3a7a12336756077994a5fa3c936e_BdaHLnNnH.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/0688045781dd555ede09ba524b1ba62e_QbLc4FFCb.PNG"
        ]
      },
      {
        "id": 183,
        "name": "Community coworks",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹14,000",
        "period": "/ Month",
        "priceFormatted": "₹14,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1700128457/zgimynyfmv94toechcha.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700128479/azw8u63jsg2hgg0ah2xi.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1700128480/q7hndggw59s3gjliadxv.webp"
        ]
      },
      {
        "id": 184,
        "name": "Kompass",
        "badge": null,
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹7,000",
        "period": "/ Month",
        "priceFormatted": "₹7,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/ec56de7b9f51bfd5c5b3934d8752d3d0_n9ew3K1S4n.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/96888be764e0e9b13a025d428f537c10_UWlVVUgl7.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/ec49ea349faee7e8495cd68b4aee9b68_DmMp_k0Cua.jpeg"
        ]
      }
    ],
    [
      {
        "id": 185,
        "name": "Recreate Spaces",
        "badge": null,
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹10,000",
        "period": "/ Month",
        "priceFormatted": "₹10,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1689317585/o0bk9657kttmarxf6fhw.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689317559/gcwxeouhl2g6woskc2w8.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689317559/awnjq9axyda4jyqjuhvd.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689317560/fu42vstbpkdufxota5qz.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689317560/hjzi33xo5cm4jhrovsye.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689317560/tah5z6xq0rkjgqqd8oc0.webp"
        ]
      },
      {
        "id": 186,
        "name": "Spaces",
        "badge": null,
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1690195651/clyuuewwd3otzcekqp7o.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1690195631/ccwkuihz2325ewuf3ipl.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1690195632/rmpbpmwcomh0ry2ombib.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1690195631/nokwr2cmgr9n2ywzoswp.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1530080462/vbynbg7ud2jud0hwgnlp.webp"
        ]
      },
      {
        "id": 187,
        "name": "Table Space",
        "badge": null,
        "rating": null,
        "area": "G Block BKC",
        "location": "G Block BKC, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/817b05abc678ab30ef58e3b7c59d6edd_VH7w7Z68h.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/bb2c61ac980890390c02f5f6f61681b5_S1lM900V-.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/3bed3d7aed85f9ba1387c030229387d4_iQ9SM5ijF.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/cbcab470c20c40656e43e601db4c64a4_YJCRbknZ0.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/a5c78d32c3092e66bfb0ac9262187612_l5Cj_j2Gg.jpg"
        ]
      },
      {
        "id": 188,
        "name": "Flignite Spaces",
        "badge": null,
        "rating": null,
        "area": "Dadar East",
        "location": "Dadar East, Mumbai",
        "price": "₹8,000",
        "period": "/ Month",
        "priceFormatted": "₹8,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580973532/jt4kqgj6iznmtq76u7mf.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580973740/uqezk6i9faj34lntzowm.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580973699/hlvnzhbvxsez546eyala.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580983613/jcaqdeiydzx3pvrkytk3.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580974208/rfarrmnpafqr2xcra3ft.webp"
        ]
      },
      {
        "id": 189,
        "name": "Awfis",
        "badge": null,
        "rating": null,
        "area": "Dadar West",
        "location": "Dadar West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/6e58d57aeaa398eb26e8e6b0fd254716_EzjsOFnEC.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/9cf8df9c18e6f649df04adf29af0d4e4_MNwgtW6nq.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/1a12308ccac98fe8b881206e5285787e_pdrpfIaRg.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/a699fba3e0c72d5a6b143d6637a158dc_0ZOg5dJO-v.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/7b53ac4f3deef1c230b0bfbb026191bb_nVFYLZS1b.JPG",
          "https://awfis-bpm-bucket.s3.ap-south-1.amazonaws.com/compliance/1683801051221.jpg"
        ]
      },
      {
        "id": 190,
        "name": "Ram Mahal",
        "badge": null,
        "rating": null,
        "area": "Mahim",
        "location": "Mahim, Mumbai",
        "price": "₹5,500",
        "period": "/ Month",
        "priceFormatted": "₹5,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1554466723/ujoq1mq1mmhof38iqmxs.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1554466916/s450j0wkzbvjz3h2c99c.webp"
        ]
      },
      {
        "id": 191,
        "name": "Blue Coworks",
        "badge": null,
        "rating": null,
        "area": "Worli",
        "location": "Worli, Mumbai",
        "price": "₹10,000",
        "period": "/ Month",
        "priceFormatted": "₹10,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1658899993/u9qlx8li9dfgsvg3ert2.jpg",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1658903064/hvho3txz969ro5fmy5pz.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1658903064/gzmtoxxezis25te6oj9f.webp"
        ]
      },
      {
        "id": 192,
        "name": "Table Space",
        "badge": null,
        "rating": null,
        "area": "B Wing",
        "location": "B Wing, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/022058ccc0222ce08f14a6058fef65b6_TbNyMru86.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/9d6cac948bc4224bbb11d7350f73d9c4_RZgygCW1K.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/ac9993c0033c4c65f3a68d49c6fea909_ybQQ_uJxs.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/0d2c437e0e551eea085f44e2a78a95f0_t6xXDfHn2.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/427b59eb3d1a7dc148015232c91f6d07_CZpgG6GCC.jpg"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 193,
        "name": "ORRITEL BUSINESS & ARBITRATION CENTRE",
        "badge": null,
        "rating": null,
        "area": "Kala Ghoda",
        "location": "Kala Ghoda, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1593842646/hwslw5ywkhasbapyojt6.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1593842680/hcrvncf8zjokkt6vbuk3.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1593842693/sswhrsz1btjdxatyhngj.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1593842705/x3fhvt2cubso06ux7eqb.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1593842722/vw6rqbvelrttt0lqml6n.webp"
        ]
      },
      {
        "id": 194,
        "name": "WeWork",
        "badge": null,
        "rating": null,
        "area": "Nariman Point",
        "location": "Nariman Point, Mumbai",
        "price": "₹30,000",
        "period": "/ Month",
        "priceFormatted": "₹30,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/a32a376a29112fd80cd21b53b68d395e_w5Hx9iczy.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/1e5f316703b40021103e5827ebc16d2b_0gdiK7T4CG.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/478679973154cc063e3ecc14372498b9_rV0SvfkPb_.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/f98213395f9c6e048701a2a2c6f5ebec_Q8FIPbqNOl.JPG"
        ]
      },
      {
        "id": 195,
        "name": "S G Spaces & Concepts Pvt Ltd",
        "badge": null,
        "rating": null,
        "area": "Fort",
        "location": "Fort, Mumbai",
        "price": "₹11,550",
        "period": "/ Month",
        "priceFormatted": "₹11,550 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1583474342/vbv9ngcqlztcba1kkesp.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1583489001/kafk159yl2uxndeituyz.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1583474413/mtirnowdqljmfogpxqpl.webp"
        ]
      },
      {
        "id": 196,
        "name": "CST Co-working Space",
        "badge": null,
        "rating": null,
        "area": "Ballard Estate,",
        "location": "Ballard Estate,, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1668157762/ta6tep7smubm0mganmge.jpg",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1668157846/jppbmk1tfilpatzpxilv.jpg"
        ]
      },
      {
        "id": 197,
        "name": "PixDig Marketing",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹12,000",
        "period": "/ Month",
        "priceFormatted": "₹12,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1704366290/qsohgfk6a4eevox5ezxu.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1704365644/hxnmmi9lstxitoa3tyf3.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1704365644/sijxkeedwl5xpmcqwre8.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1704365645/nicdsrrdukwcexad9b3k.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1704365648/qcvp5fzhipy0u6clglec.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1703668071/txujpl5eisxxv7undej5.jpg"
        ]
      },
      {
        "id": 198,
        "name": "COWORKS BY STM",
        "badge": null,
        "rating": null,
        "area": "Nerul",
        "location": "Nerul, Mumbai",
        "price": "₹6,500",
        "period": "/ Month",
        "priceFormatted": "₹6,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/a6a9550d7a85bb15bce73069955c44cf_QX2K-s75aH.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/024e3645546eed4c6a826c5eb1119825_bujUKgZ5F.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/721db9139518d9319c27569f879aa627_pq7MnZjxk.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/6bdae3973a643cdbf87409d91d868849_zIaiOJp9y.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/cccf58e27798514ade21725fb3610ccd_77OkoMn2w.JPG"
        ]
      },
      {
        "id": 199,
        "name": "Redbrick",
        "badge": null,
        "rating": null,
        "area": "Juinagar",
        "location": "Juinagar, Mumbai",
        "price": "₹8,500",
        "period": "/ Month",
        "priceFormatted": "₹8,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image/image/upload/v1650368867/tfur95ybniyjjtjqwda1.jpg",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1650366065/brbmxdbngio6io13omj9.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1650366066/wa91gypw0e3pyx3blosn.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1650366065/vlwcbj0ainiwul6lckp4.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1650366065/y2g4wdsrv57fo1yx3r03.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1650366066/pkrpz5kz1e2sowbu4f4s.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1650366066/qg5q2krzzs8sjvouowor.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1650366070/vzz3dlzyio4edsd5w42m.webp"
        ]
      },
      {
        "id": 200,
        "name": "My Branch",
        "badge": null,
        "rating": null,
        "area": "Cbd Belapur",
        "location": "Cbd Belapur, Mumbai",
        "price": "₹15,400",
        "period": "/ Month",
        "priceFormatted": "₹15,400 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1689915366/pqs6ij3drddr2ji7jsss.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689915380/nkpuidik5borvtkr2jou.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689915276/hu4mvth6xsfm7uefytyw.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689915338/eum0xp5cijucvsytclmg.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1568111487/kfy7dniyrxoxvzphcp69.webp"
        ]
      }
    ],
    [
      {
        "id": 201,
        "name": "WorkLoft",
        "badge": null,
        "rating": null,
        "area": "CBD Belapur",
        "location": "CBD Belapur, Mumbai",
        "price": "₹9,000",
        "period": "/ Month",
        "priceFormatted": "₹9,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1612256317/c51x24ovzp5yohdxgmb2.jpg",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689670959/v8j3gquvv1fovrjxijzv.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689670959/barb1opsmtgk97drca0z.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689670959/ua41jsv58hq8emlmu19y.webp"
        ]
      },
      {
        "id": 202,
        "name": "Inspire Cospaces",
        "badge": null,
        "rating": null,
        "area": "Belapur",
        "location": "Belapur, Mumbai",
        "price": "₹8,800",
        "period": "/ Month",
        "priceFormatted": "₹8,800 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1689749726/i8r9apmdo2t0vaygfftz.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689749740/kgpmziv8c182jw58z3jr.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689749740/nogkse0g3lrdzgfg9fzw.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689749740/pcv672bfmudlgsii13i7.webp"
        ]
      },
      {
        "id": 203,
        "name": "School of RPA",
        "badge": null,
        "rating": null,
        "area": "Kharghar",
        "location": "Kharghar, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1578899971/gmvqeug2t74wpqaot5ar.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1578905746/dgrif1xshjlkpfksodca.webp"
        ]
      },
      {
        "id": 204,
        "name": "Ellora Fiesta",
        "badge": null,
        "rating": null,
        "area": "Sanpada",
        "location": "Sanpada, Mumbai",
        "price": "₹8,000",
        "period": "/ Month",
        "priceFormatted": "₹8,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1721901568/dkwa7lpnukriu46jqu9k.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1721901585/rigsppdwwjrlh2pyouyo.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1721901585/wxxofkvovcudra9zklwz.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1721901585/t7hukrdrqqllqjsy8kqc.webp"
        ]
      },
      {
        "id": 205,
        "name": "Swastik Mukherjee",
        "badge": null,
        "rating": null,
        "area": "Vashi",
        "location": "Vashi, Mumbai",
        "price": "₹7,00,00,000",
        "period": "/ Month",
        "priceFormatted": "₹7,00,00,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/28c0414e19a0e6c253cde23208393f14_PMdPBYoea.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/45ce81ff7bc3d9a6097163b41fd89d4d_9bbBqMkzxi.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/5fab65bc7052a7f585375f4fc4bbdf90__zv6GDCfu6.JPG"
        ]
      },
      {
        "id": 206,
        "name": "COWORKS BY STM",
        "badge": null,
        "rating": null,
        "area": "Sector 14",
        "location": "Sector 14, Mumbai",
        "price": "₹6,500",
        "period": "/ Month",
        "priceFormatted": "₹6,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/4e6158b5d8723e6ae68bf11007e31ab3_XjY-gDwAIQ.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/83462e611b9887e36e02f5f917b42a80_oRvbmIF21d.JPG"
        ]
      },
      {
        "id": 207,
        "name": "Grid Consultants Pvt. Ltd.",
        "badge": null,
        "rating": null,
        "area": "Santacruz East",
        "location": "Santacruz East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1472287467/cow9x7tnwhh9gjdirgrz.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1472286374/jgm8upbhooqnbabz1r6r.webp"
        ]
      },
      {
        "id": 208,
        "name": "Taj Hotel",
        "badge": null,
        "rating": null,
        "area": "Santacruz East",
        "location": "Santacruz East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1654148577/lzev0kevevbnuwenlopq.jpg",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1654148681/ugvsnmyojakckx1rqqpo.webp"
        ]
      }
    ],
    [
      {
        "id": 209,
        "name": "Lemon Tree Co",
        "badge": null,
        "rating": null,
        "area": "Santacruz West",
        "location": "Santacruz West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/8c101e84b46900821f917181001aff6a_KSWfGH-xlX.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/5a71d8bfc749989eccf175a7590e898e_I9VFlZG4u.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/8002aefc3b7213a90a746b9e85e57e1d_jkQUHrbom.jpg"
        ]
      },
      {
        "id": 210,
        "name": "OURDESK",
        "badge": null,
        "rating": null,
        "area": "Khar West",
        "location": "Khar West, Mumbai",
        "price": "₹14,000",
        "period": "/ Month",
        "priceFormatted": "₹14,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/767b9bf6613f02bd96b429b868b1e407_Jbth9av5gt.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/d6041df6bcb79e7218273199463be8bc__-R03qPuc.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/8654dd6bdec1286fd3a7cc381fa987b2_mMJ1i8GEsr.jpg"
        ]
      },
      {
        "id": 211,
        "name": "The Emerald Hotel & Service Apartments",
        "badge": null,
        "rating": null,
        "area": "Juhu",
        "location": "Juhu, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1583738762/cwbpfuv4ju8fpo2uvmdu.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1583748758/e73wwkidnu2lk7cwnswg.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1583748784/uo6khuk52fgxl3kveyao.webp"
        ]
      },
      {
        "id": 212,
        "name": "Innov8",
        "badge": null,
        "rating": null,
        "area": "Netaji Subhash Nagar",
        "location": "Netaji Subhash Nagar, Mumbai",
        "price": "₹20,000",
        "period": "/ Month",
        "priceFormatted": "₹20,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/9135ca97d93940e63697bf98acc93725_wpfD0Rt_yv.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/17609cee119a67da9dd1f66169f0d718_Lxhr66WQI.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/450d5e78d6eeeef1ab5dcb6214f789bd_ChrPwQNux.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/ecbc8eb7c23d916d2e4e81a66394f8aa_TSiUoyCQS.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/b3ad68772b6c4b5d55ff33463f69ab1f_JAfOI1Nbbb.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/6b1d24b480ac822e7914dc71ff5ff910_6uD5RmBbYZ.JPG"
        ]
      },
      {
        "id": 213,
        "name": "Biostadt",
        "badge": null,
        "rating": null,
        "area": "Bandra East",
        "location": "Bandra East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/c6f73f45299a29f8e6282a4ded42986b_PN158TMB-M.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/336c118b458ce2ddd003386fcac6df6b_PbFZFrWFC.JPG"
        ]
      },
      {
        "id": 214,
        "name": "AIIG",
        "badge": null,
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580463307/hyx7xspctf4bwlrkikhq.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580463648/abthgwkfk9cjhgs5l8do.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580464735/mqzdralzpz162sfvptyw.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1580464404/ezjruldoks3uzripqhpm.webp"
        ]
      },
      {
        "id": 215,
        "name": "Nehru Library & Research Centre",
        "badge": null,
        "rating": null,
        "area": "Bandra East",
        "location": "Bandra East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1696597367/f8njbdv8eh6rfm3btp49.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1696481579/wkr3numifqco5ecitxua.jpg"
        ]
      },
      {
        "id": 216,
        "name": "Innov8",
        "badge": null,
        "rating": null,
        "area": "Amrut Nagar",
        "location": "Amrut Nagar, Mumbai",
        "price": "₹11,000",
        "period": "/ Month",
        "priceFormatted": "₹11,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/f26ba89b43ea37a5744d9be78c28ef6a_3qGz3v-wFf.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/cae89c69b43a56afc9e420af3326fdd9_IbptdQrZi.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/c1d2cb7894d39fa1051c1067d581b8e8_OA8X61Dcl.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/ce828d0826d01b2abbd4013f1a91df52_80hjPsevE.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/a68b7c9ba81ae2da35f211ac78974caa_qqBxyRlPB.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/746ff096c7cb23dc33f7bb9ddbbf57e5_YezIeVkIb.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/ce365c615895290bc6ce77fb2fb20992_BS9SzVjdf.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/a62f189d37d77211c92e144c22658b8f_lQDDRny4J.jpg"
        ]
      }
    ],
    [
      {
        "id": 217,
        "name": "Eazy2Work C/O Detangle",
        "badge": null,
        "rating": null,
        "area": "Ghatkopar West",
        "location": "Ghatkopar West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1708149004/i23zikoucuxzovilimmg.jpg",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1708149028/fcb8mdlqazbaszml4kxr.jpg"
        ]
      },
      {
        "id": 218,
        "name": "Simpliwork Offices",
        "badge": null,
        "rating": null,
        "area": "Vikhroli",
        "location": "Vikhroli, Mumbai",
        "price": "₹12,500",
        "period": "/ Month",
        "priceFormatted": "₹12,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1627973746/lonjepe9fak2jscuj5ua.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689660704/qhjhraxjdq6bbnf2qdq3.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689660704/q6hff0oo95u0vuzzuceo.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689660705/xefycjwedo24qmscb9h5.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689660705/haovbvo1ntp9ot0jrw9d.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689660705/aj7raivhjhdshyejo2kb.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689660705/ecdzbvxpwafromuec6ip.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689660644/ue7tih7fwdhreaqlte3w.webp"
        ]
      },
      {
        "id": 219,
        "name": "OfficeBing",
        "badge": null,
        "rating": null,
        "area": "Vikhroli West",
        "location": "Vikhroli West, Mumbai",
        "price": "₹13,499",
        "period": "/ Month",
        "priceFormatted": "₹13,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/image/upload/s--tAzmbjeb--/v1726658092/avpijo7flozhfpwkffzr.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--3Zoc1KfW--/v1726657994/s0cilnj49xtzlppjbelh.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--DgfHvke2--/v1726658133/wygwstfrvexqijpspxr2.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--ok0_YUuD--/v1726658152/wusurylmyvdwnmdja32m.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--0Qby3bLo--/v1726658244/dexrr8i6olls9yn9j0tl.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--VI07Hi6y--/v1726658261/fl3u2ezhpkk6tzzkfjod.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--d0GQl_p1--/v1726658310/ktvxtbwovqvsppncmkqv.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/s--kOk5kmSa--/v1726658361/dskgrcay4abw3wcf2sn8.webp"
        ]
      },
      {
        "id": 220,
        "name": "COWRKS Powai",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹25,000",
        "period": "/ Month",
        "priceFormatted": "₹25,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1705304707/g4q9mu8qfbqkxjsvrfxf.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1705304726/xavnxzsxcuhfrna2emxl.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1705304727/cvkvgl9lxsnl4q2m9fqp.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1705304727/s8mjrfebjwzmwuwcayiy.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1705304727/sgwqzwcdoh0tt0nxbyvx.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1705304728/lu9t7iip9homq50hbgn9.webp"
        ]
      },
      {
        "id": 221,
        "name": "Regus",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹15,000",
        "period": "/ Month",
        "priceFormatted": "₹15,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1669270338/zzrfskvn153uxnuramdl.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1669270352/uoakune8wjr7tklocdfw.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1669270352/l5t889g6nindcvalmgxp.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1669270353/egve0xakzdlu4mtw6oze.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689311968/h5fuag1oatd1e7mlpm7b.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689311968/eapybe8b2d522plbinrk.webp"
        ]
      },
      {
        "id": 222,
        "name": "Bharti Co Space",
        "badge": null,
        "rating": null,
        "area": "Ghatkopar West",
        "location": "Ghatkopar West, Mumbai",
        "price": "₹6,000",
        "period": "/ Month",
        "priceFormatted": "₹6,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1659427028/m7csapaa1hzsw0nmwwi9.jpg",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1659427036/jmm6iczyovzxngzcyrmb.jpg"
        ]
      },
      {
        "id": 223,
        "name": "LetsWork",
        "badge": null,
        "rating": null,
        "area": "Ghatkopar West",
        "location": "Ghatkopar West, Mumbai",
        "price": "₹8,000",
        "period": "/ Month",
        "priceFormatted": "₹8,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/b471f024117a0bfe5c6fd2fe066e8f45_8wDliFm0te.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/7aed1e1f627e5d02e81c1e0c70c79100_TZY5U3a-A.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/1ec8513956ee6e3e0f907b848cab8d37_qp4mTUsctH.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/880b43c7e093d8922dc7da46263aa149_0SgIKPQBZ.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/ad3644fa8f076f1086852e22ae6658d8_fApqy-jmj.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/5d692caa70dc244f20d85a262d95275f_BR2NBRG8N.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/6c6e88fff3d9a75eed16696a60485721_8odyu_zq65.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/29f21020d52a91a4e4f5f48d6ca4e9b5_EZeHowSbZ_.JPG"
        ]
      },
      {
        "id": 224,
        "name": "Awfis",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹17,000",
        "period": "/ Month",
        "priceFormatted": "₹17,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/d68d1eaeb5785db18b398d7b478ced91_fQXemrmp11.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/23933a69d965460815d4fc215f239d75_LCkaSs56aW.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/2ac611f41ab45b30240c652337deaa6f_0Mgy3lf6xv.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/e14970489de92197ac1ccca198d89fb0_NxXKLfmzS.JPG"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 225,
        "name": "iKeva Powai",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1676544047/wnjpknppryznc6eegngx.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676544003/bz4tagwmkvriyywfv7js.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1525933144/o8b2lschzwqhvtn4ndfq.webp"
        ]
      },
      {
        "id": 226,
        "name": "Dextrus",
        "badge": null,
        "rating": null,
        "area": "Lower Parel West",
        "location": "Lower Parel West, Mumbai",
        "price": "₹16,250",
        "period": "/ Month",
        "priceFormatted": "₹16,250 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1689752020/qyoqghsgidpntsnndxj3.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689751999/ltchz4vqsmi6hohjnkhr.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689751999/xh5ffpbnn9dpcfcgka5x.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689751999/pq0sgzfrcj0fc3gserpa.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1585303855/hjtnzriuiwycs26tj5sp.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1585303877/jgzlxnfgmbfvittq12zq.webp"
        ]
      },
      {
        "id": 227,
        "name": "UrbanWrk",
        "badge": null,
        "rating": null,
        "area": "Lower Parel West",
        "location": "Lower Parel West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/2a19c13635e35837aaeca7344070bfef_TwThzH963n.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/29209abd147fa4cab33ffc5fba7d36f6_DbDn9eZ_D.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/b66309c17e0da6b2abad53b6a61b20cb_EaGrsZsROK.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/642fc5926236b33c1724bc18959ae5cd_MaJ803Dp0.jpg"
        ]
      },
      {
        "id": 228,
        "name": "Collaborate Hub",
        "badge": null,
        "rating": null,
        "area": "Vashi",
        "location": "Vashi, Mumbai",
        "price": "₹7,000",
        "period": "/ Month",
        "priceFormatted": "₹7,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1688025890/bepi9dxtzsbvk0ul9bgn.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1688025698/zzn0f39rdeqbbvv8dr4r.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1688025698/jt3scapygv76mjzoe48m.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1688025698/mxguqdbpcsx3pivfp3iv.webp"
        ]
      },
      {
        "id": 229,
        "name": "AWFIS",
        "badge": null,
        "rating": null,
        "area": "Vashi",
        "location": "Vashi, Mumbai",
        "price": "₹11,000",
        "period": "/ Month",
        "priceFormatted": "₹11,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1590050318/bcpovxhcove4gb4ooavc.jpg",
          "https://qdesq.imagekit.io/img/tr:n-detail_image/image/upload/v1590048705/ialajg9c8bq7qdg0qseb.jpg",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1499245495/wz9rmg7dvrjdsanwdfjj.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1499244747/qfr0wmvwogagohv9qsmu.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1499244194/nl4hx8cthukv8ptntmdq.webp",
          "https://awfis-bpm-bucket.s3.ap-south-1.amazonaws.com/compliance/1680721932912.jpg"
        ]
      },
      {
        "id": 230,
        "name": "MFC",
        "badge": null,
        "rating": null,
        "area": "Vashi",
        "location": "Vashi, Mumbai",
        "price": "₹10,000",
        "period": "/ Month",
        "priceFormatted": "₹10,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/image/upload/s--nOAtzF07--/v1726469852/dhnuykcafsnehr2gmtdr.webp",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/31ef0b03d01b794bd51e3aee8cf1c0ce_d5xYkvp9r.jpeg"
        ]
      },
      {
        "id": 231,
        "name": "Minidesks",
        "badge": null,
        "rating": null,
        "area": "Vashi",
        "location": "Vashi, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1680845337/xhf2frcvuhd81rv0hoxp.jpg",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1682340221/pl3smijei9pcdis9709h.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1682340238/qiejuvqtg27oedzvnfsz.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680844517/ksrvykin4al16hxy9xz3.jpg"
        ]
      },
      {
        "id": 232,
        "name": "Trigger Xchange",
        "badge": null,
        "rating": null,
        "area": "Vashi",
        "location": "Vashi, Mumbai",
        "price": "₹6,500",
        "period": "/ Month",
        "priceFormatted": "₹6,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1551356537/yycnx3pt9mfzvjyvclf6.png",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689923258/cnv3z8iy5if5tsegukih.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689923259/vknohjxruxmsrt0qiqbf.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689923262/ubvoahslymszq79vfnue.webp"
        ]
      }
    ],
    [
      {
        "id": 233,
        "name": "WeGrow",
        "badge": null,
        "rating": null,
        "area": "Vashi",
        "location": "Vashi, Mumbai",
        "price": "₹9,000",
        "period": "/ Month",
        "priceFormatted": "₹9,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1548067001/po66ijxcxsjcxd4n9h9f.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1661849717/lko7nd9kedvzjquukhtk.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1661849717/adgyyovkbblyt0gbbavy.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676976792/qwdowa0gpsfzotdrnvdh.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676976829/fv0kcma7hqluzoafrypd.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676976844/lptmo1fnxxrqk9iueu5t.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1548065396/nuzx9ankdhywgqmemj6e.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1548067258/yqildyqzwbmdzgnaltw0.webp"
        ]
      },
      {
        "id": 234,
        "name": "Teloz Spaces",
        "badge": null,
        "rating": null,
        "area": "Goregaon",
        "location": "Goregaon, Mumbai",
        "price": "₹8,999",
        "period": "/ Month",
        "priceFormatted": "₹8,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1714734014/bwjn6kpddnfzwmznktgp.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1714734041/mikgodhlh5x4prcvg55r.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1714734041/xjjpcs9xvtfufcoshooj.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1714734042/nfgdsbj4s76wblqznck4.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1714734041/fltxigoggduqrrqzff0l.webp"
        ]
      },
      {
        "id": 235,
        "name": "WeWork",
        "badge": null,
        "rating": null,
        "area": "Goregaon",
        "location": "Goregaon, Mumbai",
        "price": "₹23,000",
        "period": "/ Month",
        "priceFormatted": "₹23,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/4258febdf9fd72eb432c8cd66954ea5d_ES_repHfkC.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/d9a6f3ac17b4f5444e76023e5cd1edbd_N8vr2vk3Lm.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/68d244a10dfb617e5a48a605a44099c8_uDohbpGRZ.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/14296dd10d6d2e619fed44c96697c556_b13N9qmQe.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/14c06722fd8b503f29e2f5ee38954246_6VzUlotEbE.JPG",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1616672930/ayh2lmldaww13pxgslfz.png"
        ]
      },
      {
        "id": 236,
        "name": "Table Space",
        "badge": null,
        "rating": null,
        "area": "Yashodham",
        "location": "Yashodham, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/7875fbc931ed3423469fd0f41a15b4dc_LFCE1Ya-2.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/08b0fad8cb330e0a6a904147891b62c6_Otto-w8Oe.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/145cf30c9b221d83da551fe35b1bd850_oBL1cL6RQ.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/1754d1da9dffb964eb51f931e627b447_4aazR1yoC.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/11bd74852655b952c1900c98f41f590a_2wy9O03x4.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/4fd6cc8bb5c5b9c2a622bb8e74d207c0_YOZOWadIX.jpg"
        ]
      },
      {
        "id": 237,
        "name": "The Playce",
        "badge": null,
        "rating": null,
        "area": "Bhandup",
        "location": "Bhandup, Mumbai",
        "price": "₹6,500",
        "period": "/ Month",
        "priceFormatted": "₹6,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1689749100/bcrekw34vuldlp5yv8xf.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689749082/ymd19ovdn05nm6sveeq1.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1595570303/rt9qx3hevvy0wxcwfaad.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1595570433/qbxc7xigt1xucrguogqx.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1595570592/xigr3w0mp6gsavwrrpo1.webp"
        ]
      },
      {
        "id": 238,
        "name": "Josho Learning",
        "badge": null,
        "rating": null,
        "area": "Mulund West",
        "location": "Mulund West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1483429336/tmgh7waxvedebloqwufn.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1483517033/g47esdyjyf7dzb5xscfo.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1483517209/bxjsx3bvkmytzqx2andx.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1483517300/uox7vtqlbmkpenlkzs0e.webp"
        ]
      },
      {
        "id": 239,
        "name": "NEXT School",
        "badge": null,
        "rating": null,
        "area": "Mulund West",
        "location": "Mulund West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/ce903dcd88e7c3e863be22e6d63104d3_FtEyjmfyb.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/4644a2ababf48d0a516b6788fa98e4bb_nthiylIo6.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/7811e08fc79d874f396e304e0f64d109_ruft1WxhC.jpeg"
        ]
      },
      {
        "id": 240,
        "name": "Diamond Event Space and Ruby Training Hall",
        "badge": null,
        "rating": null,
        "area": "Mulund West",
        "location": "Mulund West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1547350306/ozrxk29icdtxdgodilez.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1547350145/lmigo3armboxxviftwo2.webp"
        ]
      }
    ],
    [
      {
        "id": 241,
        "name": "AWFIS",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹13,000",
        "period": "/ Month",
        "priceFormatted": "₹13,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1689398688/hipsoatp0wdc1wf2ywoz.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689398672/u7luegxztrb2vwcrh88e.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689398672/im9swadqtt6ddukom9bv.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689398672/gsmo5nz3rnddv60d03wi.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689398672/krng9axok06dlkcunlsb.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689398673/mvsmncz9yoo6haiuczfc.webp",
          "https://awfis-bpm-bucket.s3.ap-south-1.amazonaws.com/compliance/1680773524286.jpg"
        ]
      },
      {
        "id": 242,
        "name": "Inspire Cospaces",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "₹10,497",
        "period": "/ Month",
        "priceFormatted": "₹10,497 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1603892651/pu6vuvw40vez32ux0nmo.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689749476/pduoaqfyz1kgmswgrisn.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689749476/saczjdj6oznbwnb7ng8e.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1594902153/c7qgdoarxghsdpvvnzn6.webp"
        ]
      },
      {
        "id": 243,
        "name": "JP INFRA",
        "badge": null,
        "rating": null,
        "area": "Wagle Industrial Estate",
        "location": "Wagle Industrial Estate, Mumbai",
        "price": "₹7,500",
        "period": "/ Month",
        "priceFormatted": "₹7,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1593767499/uj9zh81ltgxm1mwwtuva.webp",
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1593767456/wgizieptmqwshvzleccn.webp"
        ]
      },
      {
        "id": 244,
        "name": "East Corp Group",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1567492534/j9q1uhjnxyu3cih9mpym.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1655975177/qtin33x49bvukjeqiazq.png"
        ]
      },
      {
        "id": 245,
        "name": "Silgate Solutions Limited",
        "badge": null,
        "rating": null,
        "area": "Thane West",
        "location": "Thane West, Mumbai",
        "price": "₹6,000",
        "period": "/ Month",
        "priceFormatted": "₹6,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1539604371/db2bwohvh5mxwuf0pqsg.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1539604432/scdv2wrfkya25q5p0ftl.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1539604447/zvpfoyo6i821kgtukgdm.webp"
        ]
      },
      {
        "id": 246,
        "name": "Executive Spaces",
        "badge": null,
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹95,000",
        "period": "/ Month",
        "priceFormatted": "₹95,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/171efb6591bd8b976c88857ee849bf52_4vymUqQ9B.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/57d0b9e932932638bea7953ab6de7879_PCgxV6A-i.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/a2dd29d92a04410f98dd96655b7b6983_HBFUvYc8D.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/d3368addbc54580ae6652ac9e226705c_CCUOf8vH_.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/1887c28368e47b9d85a1df95098ae3dc_Dl-L3xP7Y.JPG"
        ]
      },
      {
        "id": 247,
        "name": "RocketBox",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1517313132/wfwxsxfppxq4uptvwiem.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1517313339/kzu829dukkz42rv6q6aj.webp"
        ]
      },
      {
        "id": 248,
        "name": "RedBrick",
        "badge": null,
        "rating": null,
        "area": "Chandivali",
        "location": "Chandivali, Mumbai",
        "price": "₹12,000",
        "period": "/ Month",
        "priceFormatted": "₹12,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1690188987/grjctuyop98fwbourwz3.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1690188971/ozgdvdn4u3dnts26dvgm.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1516865597/jpliri7vn5kc5dhmfz5f.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1517396100/vdjzqwxmblel5biq8hgo.webp"
        ]
      }
    ],
    [
      {
        "id": 249,
        "name": "Kowo.Club",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹15,000",
        "period": "/ Month",
        "priceFormatted": "₹15,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/7d3bd56042743ec3cc2457ff06b3fea1_qU0cfS5Rm.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/3708aef4ce3eb59a19971c6e35ee665f_gAb_KzAIJ.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/7b40e79466935c62410e147eae6e7ec1_lKo8YevyI.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/763d8fee966f61e3ed60ec971690bea6_ksxfFVhf8c.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/4cdf7f528295da8bdc5475e68735605b_AC_aP9VJe.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/0a7cf34c58e9798bf7e9c8c230561824_Y_fi5lhOu.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/dcca0dbec8d1ddc47d2e9a6ed293864c_6PpRUJ08b.jpg"
        ]
      },
      {
        "id": 250,
        "name": "Chase Consultancy",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1568096605/h1qi92sjw7ln0mww2fo7.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1568096641/ej1wmlgpwexdnbolfi36.webp"
        ]
      },
      {
        "id": 251,
        "name": "Teloz Spaces",
        "badge": null,
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹11,000",
        "period": "/ Month",
        "priceFormatted": "₹11,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/09cabf16ef0c6d2c740fc739e5f57b85_dujBVi6lp.png",
          "https://ik.imagekit.io/qdesq/qdesq/915a9692e83da49471ca2c6311873fd9_RM_33JxRd.png",
          "https://ik.imagekit.io/qdesq/qdesq/b742c3d724109264fd07f35932791af9_HLmBA708G.png"
        ]
      },
      {
        "id": 252,
        "name": "GM Coworks",
        "badge": null,
        "rating": null,
        "area": "Andheri (W",
        "location": "Andheri (W, Mumbai",
        "price": "₹10,000",
        "period": "/ Month",
        "priceFormatted": "₹10,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/2e879e8d1c223d355a038aa81baa4b98_-QOEusXjZ.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-detail_image_hq/5c65644733660862e5752ddc04b896a0_YMcb76M8R.jpeg"
        ]
      },
      {
        "id": 253,
        "name": "DBS India",
        "badge": null,
        "rating": null,
        "area": "Nariman Point",
        "location": "Nariman Point, Mumbai",
        "price": "₹22,000",
        "period": "/ Month",
        "priceFormatted": "₹22,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1626955107/h9wbol5x0w3ho44lgduz.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680156635/bydhvgquqqpzysmufqvj.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1680156635/vhovhzvwuieeentgifdq.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1583229675/p2gjniuayjmyheekeygi.webp"
        ]
      },
      {
        "id": 254,
        "name": "Smith and Thomson",
        "badge": null,
        "rating": null,
        "area": "Nariman Point",
        "location": "Nariman Point, Mumbai",
        "price": "₹7,500",
        "period": "/ Month",
        "priceFormatted": "₹7,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1576835629/h5bkn09ckwe7fuxusnlv.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1576835878/pkmrgihsqjfsesfpt9fc.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1576835912/a7zl5sqzysmfi3j3klbr.webp",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1576836099/ggwwfqofa7n7nbscz2ls.webp"
        ]
      },
      {
        "id": 255,
        "name": "Millennial Pod Powai",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹16,000",
        "period": "/ Month",
        "priceFormatted": "₹16,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1712562029/rdjzymkqkl4hmsrr88ch.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1712562045/p7zy7bclwad6a2pduzw8.webp"
        ]
      },
      {
        "id": 256,
        "name": "Gloria Business Centre",
        "badge": null,
        "rating": null,
        "area": "Thane West",
        "location": "Thane West, Mumbai",
        "price": "₹7,000",
        "period": "/ Month",
        "priceFormatted": "₹7,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1721209627/sifawwkkmvn0degzhyht.webp",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/4b410ebe824f96cce6e57ccab032abce_3TqVh4ips.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/f3273af25242c4caf6b59e9ee5c20534_wfMxGUMC0.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/e09f587480763e71ac3ec3d4a3e9ecae_0XWf42fRDd.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/2da679bcc297ea39bf9781c7cb054549_khJNVVLyT.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/6c86045c0f3028db9356cc196598e8cf_6mOijm1_rW.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/4c79842037d9aff8148f1ebf29c99f91_HVJe6lpOTc.jpg",
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/68f32dbce824c21cef5b583d50bd445a_WR33SiAL7O.jpg"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 257,
        "name": "RedBrick",
        "badge": null,
        "rating": null,
        "area": "Thane West",
        "location": "Thane West, Mumbai",
        "price": "₹12,000",
        "period": "/ Month",
        "priceFormatted": "₹12,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1509086177/ejp6lizbcqkctwbxqagm.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1690270436/bclu5i4vde4hyv8j7w2v.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1517310940/jepfjtmgufoxyk5bogm5.webp"
        ]
      },
      {
        "id": 258,
        "name": "KontorSpace",
        "badge": null,
        "rating": null,
        "area": "Wagle Industrial Estate",
        "location": "Wagle Industrial Estate, Mumbai",
        "price": "₹9,000",
        "period": "/ Month",
        "priceFormatted": "₹9,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1690181605/bwxzcz3uzthaesvnlmd2.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1690181624/ijqvzhfrodf6ovz6bx4y.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1690181624/m6pxun5nrins3reycsj6.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1690181624/xpjeclvijfocd4htxkyt.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1531128880/p2ceykce1zhhulnjym1r.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1531129003/kxn2mubpxatsul1bbwco.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1531129254/gszicmjofueh4ccb3tou.webp",
          "https://wybrid-vendor-portal-public-prod.s3.ap-south-1.amazonaws.com/file1764756137411.jpg"
        ]
      },
      {
        "id": 259,
        "name": "Executive Spaces",
        "badge": null,
        "rating": null,
        "area": "G Block BKC",
        "location": "G Block BKC, Mumbai",
        "price": "₹58,000",
        "period": "/ Month",
        "priceFormatted": "₹58,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/29ee8d185f4489a01941185570498916_pAu7vPwb_.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/75b54dee455841e9a0ef43067967860d_ZAAdiV43J.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/e432bdb3c19fcdfcbfff047e848d4028__TOeagNZga.JPG"
        ]
      },
      {
        "id": 260,
        "name": "Regus",
        "badge": null,
        "rating": null,
        "area": "Chandivali",
        "location": "Chandivali, Mumbai",
        "price": "₹11,900",
        "period": "/ Month",
        "priceFormatted": "₹11,900 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/408d49f94be76a4b6a777aa0a0878ffe_dSPQ4kdYV.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/aa914f6b01886d0bed8657845f5c0f0c_UtKzmCXDf.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/77cb95bd46c298add640d4d50aee46ed_oH6j44vRN.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/db62b8ea3a3566c9c96e640521d75a56_y06Z_uYep.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/7edb2b304e64e207da7fc0c2980fe7f7_BNnNQj9DE.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/1e9d6d343e8f50754f7745b6e31a97d4_m6VesBRMv.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/df12df672a4ace0c44552b413cdd9bf3_XB0P9hMb7.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/eed8ffc89ed1a0d27be3365f8a1a4233_73xyfrDG5.JPG"
        ]
      },
      {
        "id": 261,
        "name": "91SpringBoard",
        "badge": null,
        "rating": null,
        "area": "Santacruz East",
        "location": "Santacruz East, Mumbai",
        "price": "₹15,400",
        "period": "/ Month",
        "priceFormatted": "₹15,400 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1676536661/xgwv1czaucltxjw3ww9u.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676536645/rvlqpedguy1kwqrwm6dk.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676536646/wk3ao8rhwhobdbaxvgqr.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676536753/v9om7nluhy9iubqqnnlx.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689163822/abms7qumak6aaajg9tps.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1689163823/hekxppwh6p7f9y3e6qeq.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1512641766/clng9nvfvvlzks1lhemg.webp"
        ]
      },
      {
        "id": 262,
        "name": "Classic Group",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹12,000",
        "period": "/ Month",
        "priceFormatted": "₹12,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1571990716/y51hyaenniezh0lnaawp.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1681204715/jggr4lrkeipkazgeoobo.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1681204715/ce1ys3dam0yrg0znczp1.webp"
        ]
      },
      {
        "id": 263,
        "name": "Viva Connect",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1537783156/jbssqqwgq7yng4qletvw.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1537526276/opzrdgd6jkfhtbafga6h.webp"
        ]
      },
      {
        "id": 264,
        "name": "Sunrise Coworking",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1677136989/srhtx4333vijcv0r71fg.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1677136949/nrkwvvsz9p2uqmdfxg70.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1677137101/ao9su1t1jxadfjs6qk3c.webp"
        ]
      }
    ],
    [
      {
        "id": 265,
        "name": "91springboard",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹11,800",
        "period": "/ Month",
        "priceFormatted": "₹11,800 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1676530679/gxsvrvvb3c1dn69r0pvx.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676530527/xjdxtesbcdurq6ilfhmm.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676530526/goebkhjezegh9mpsopzu.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676530527/c9rujlqkka2hdf7yo1fg.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676530527/sqqkn95jvewvfiss9tpc.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1676530773/yarpnnqcmmagbp8chqnj.webp",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1545293478/kqjkjwgu97n6cmnzopih.webp"
        ]
      },
      {
        "id": 266,
        "name": "Executive Spaces",
        "badge": null,
        "rating": null,
        "area": "Gundavali",
        "location": "Gundavali, Mumbai",
        "price": "₹13,000",
        "period": "/ Month",
        "priceFormatted": "₹13,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1691062356/g5b3opt2epzuvyce1jp9.webp",
          "https://qdesq.imagekit.io/tr:n-detail_image_hq/image/upload/v1691062371/p4lkapj3c7vzatmweuys.webp"
        ]
      },
      {
        "id": 267,
        "name": "Zon CollabHub",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹14,000",
        "period": "/ Month",
        "priceFormatted": "₹14,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/0bf757cd60360415ca525a73bf5a5ad2_nGa8kqIcs.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/e270b270919a8a967c74cfc611a6ac71_zxTgC5VH8.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/f70d22a626da3a1f866378d53115b59b_uxAYisbjV.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/115d0367ed59410c9c8d8e47d99456a0_J3FoCt83f.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/375402c50eda804a6239afaa5944077b_PfgflfQA_.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/2715e1404ee4384dff0274ea90e58a40_9GeOAeFKR.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/8aec0bc1ba6eba29f96fa12cda929f5d_5N-E2m9Ut.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/e4d7d6e354ed2fc9f031b3497eeaf907_AZIgBACG_z.JPG"
        ]
      },
      {
        "id": 268,
        "name": "VENUES AND AVENUES",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹9,000",
        "period": "/ Month",
        "priceFormatted": "₹9,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1636567375/ezwfsz9vspk9nzvllsgc.jpg",
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1636567375/vlngycxqcm5jfxqv302l.jpg"
        ]
      },
      {
        "id": 269,
        "name": "Table Space",
        "badge": null,
        "rating": null,
        "area": "Bhim Nagar",
        "location": "Bhim Nagar, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/9f8e40dd67a83fd9fc6753bd8e895090_12uUUxPLr.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/1d0edadf25830157f492f8f8dadc9c88_RtmZSOwyL.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/4277d32831db83208241c464ca1928a5_UDGXXSnUe.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/b61202dbcdf4561f18a2d40575e5c601_V3_f1Wc8L.JPG"
        ]
      },
      {
        "id": 270,
        "name": "Innov8",
        "badge": null,
        "rating": null,
        "area": "Andheri Kurla Road",
        "location": "Andheri Kurla Road, Mumbai",
        "price": "₹18,000",
        "period": "/ Month",
        "priceFormatted": "₹18,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/b2192f43f1f45ef0dbdd42b4ddd981d9_xisg54Okx.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/041cb5e9509ebc7f2e1582b79e8ae986_oska2bJjr.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/b8ce3d0d4800f1344a6d7349b04f4dac_aXgdJb3Bm.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/567bced5b5f822a1b6fedc1eebab355a_JsCoGWiWk.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/3f044e8d1c97ea0cc82c277b6878f772_BiL8gaxBX.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/e55eae6c8939b4bcf044a9e874a0d3f4_2tWWl2bpn.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/41a7d3ee05e58e2dca2499bb2dabb971_rvV6-IM63.jpeg",
          "https://ik.imagekit.io/qdesq/qdesq/223ef43c34f0a988e0fb58a17999af10_ztNmnGSn9.jpeg"
        ]
      },
      {
        "id": 271,
        "name": "LetsWork",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹12,000",
        "period": "/ Month",
        "priceFormatted": "₹12,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/82e322c03033f134edd164c97ea6b229_zBQNmvlGXW.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/9d4ff259ef514076c6d9f7621abde67e_v_zkEj1Zu.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/996714f920ec91b7e155225a685bf17d_3keApdbJoL.JPG"
        ]
      },
      {
        "id": 272,
        "name": "WeWork",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹15,000",
        "period": "/ Month",
        "priceFormatted": "₹15,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/057b21fa3844888d649566cdb5559507_gfrmVgUto.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/1a6d3fd0082c899e95406ec399d208bf_j5IPPIgdG.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/5541b8055d4e4676f0555b981c44cf0d_zZaOHVSOy.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/42752a9083957fce8032d747b2853b31_jYVoJpppx.JPG",
          "https://ik.imagekit.io/qdesq/qdesq/c1cb53c52cddc7cfef37e9e06aa74cec_ah5bnLwvL.JPG",
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1559374990/a0hxtdt8lgskbbpgy5aa.webp"
        ]
      }
    ],
    [
      {
        "id": 273,
        "name": "WeWork Andheri",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹10,500",
        "period": "/ Month",
        "priceFormatted": "₹10,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/2-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-andheri-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-andheri-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-andheri-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-andheri-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-andheri-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-andheri-7.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-andheri-8.jpg"
        ]
      },
      {
        "id": 274,
        "name": "Veda CoWorks",
        "badge": null,
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Veda-CoWorks-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Veda-CoWorks-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Veda-CoWorks-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Veda-CoWorks-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Veda-CoWorks-005-min.jpg"
        ]
      },
      {
        "id": 275,
        "name": "Blue Mushroom Malad West",
        "badge": null,
        "rating": null,
        "area": "Malad West",
        "location": "Malad West, Mumbai",
        "price": "₹8,500",
        "period": "/ Month",
        "priceFormatted": "₹8,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Blue-mushroom-Malad-West.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Blue-mushroom-Malad-West-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Blue-mushroom-Malad-West-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Blue-mushroom-Malad-West-4.jpg"
        ]
      },
      {
        "id": 276,
        "name": "Blue Mushroom In Malad West",
        "badge": null,
        "rating": null,
        "area": "Malad West",
        "location": "Malad West, Mumbai",
        "price": "₹8,500",
        "period": "/ Month",
        "priceFormatted": "₹8,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/blue-mushroom.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/blue-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/blue-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/blue-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/blue-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/blue-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/blue-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/blue-7.jpg"
        ]
      },
      {
        "id": 277,
        "name": "CFE Offices In Goregaon",
        "badge": null,
        "rating": null,
        "area": "Goregaon",
        "location": "Goregaon, Mumbai",
        "price": "₹5,000",
        "period": "/ Month",
        "priceFormatted": "₹5,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/CFE-offices-Goregaon-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/CFE-offices-Goregaon.-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/CFE-offices-Goregaon-min-1.jpg"
        ]
      },
      {
        "id": 278,
        "name": "WeWork Spectrum Tower In Malad",
        "badge": null,
        "rating": null,
        "area": "Malad",
        "location": "Malad, Mumbai",
        "price": "₹10,000",
        "period": "/ Month",
        "priceFormatted": "₹10,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/WeWork-Spectrum-Tower.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wwm-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wwm-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wwm-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wwm-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wwm-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wwm-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wwm-7.jpg"
        ]
      },
      {
        "id": 279,
        "name": "603 The CoWorking Space Bandra",
        "badge": null,
        "rating": null,
        "area": "Bandra",
        "location": "Bandra, Mumbai",
        "price": "₹12,999",
        "period": "/ Month",
        "priceFormatted": "₹12,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/603-coworking-space.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/603-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/603-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/603-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/603-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/603-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/603-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/603-7.jpg"
        ]
      },
      {
        "id": 280,
        "name": "Dextrus BKC Bandra East",
        "badge": null,
        "rating": null,
        "area": "Bandra East",
        "location": "Bandra East, Mumbai",
        "price": "₹17,750",
        "period": "/ Month",
        "priceFormatted": "₹17,750 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/1-1548758765.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/5bb748574994581a8c1106f5_1538738263748.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/5bb748574994581a8c1106f7_1538738263750.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/11/day-pass-12.png"
        ]
      }
    ],
    [
      {
        "id": 281,
        "name": "Innov8 Vikhroli",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Vikhroli-Thane-006.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Vikhroli-Thane-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Vikhroli-Thane-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Vikhroli-Thane-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Vikhroli-Thane-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Vikhroli-Thane-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Vikhroli-Thane-007.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Vikhroli-Thane-008.jpg"
        ]
      },
      {
        "id": 282,
        "name": "WorkAmp Nitco",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Nitco-Thane-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Nitco-Thane-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Nitco-Thane-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Nitco-Thane-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Nitco-Thane-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Nitco-Thane-006-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Nitco-Thane-007-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Nitco-Thane-008-min.jpg"
        ]
      },
      {
        "id": 283,
        "name": "AccessWork",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/11/12334.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/AccessWork-Thane-GB-Road-Serviced-Offices-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/AccessWork-Thane-GB-Road-Serviced-Offices-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/AccessWork-Thane-GB-Road-Serviced-Offices-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/AccessWork-Thane-GB-Road-Serviced-Offices-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/AccessWork-Thane-GB-Road-Serviced-Offices-005.jpg"
        ]
      },
      {
        "id": 284,
        "name": "Awfis In Powai",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹10,000",
        "period": "/ Month",
        "priceFormatted": "₹10,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/awfis.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ap-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ap-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ap-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ap-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ap-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ap-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/AP-7.jpg"
        ]
      },
      {
        "id": 285,
        "name": "Access Work In Powai",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹14,000",
        "period": "/ Month",
        "priceFormatted": "₹14,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Access-Work-Powai.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/aw-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/aw-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/aw-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/aw-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/aw-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/aw-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/aw-7.jpg"
        ]
      },
      {
        "id": 286,
        "name": "WeWork Oberoi Commerz II In Goregaon",
        "badge": null,
        "rating": null,
        "area": "Goregaon",
        "location": "Goregaon, Mumbai",
        "price": "₹15,000",
        "period": "/ Month",
        "priceFormatted": "₹15,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/WeWork-Goregaon.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-gg-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-gg-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-gg-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-gg-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-gg-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-gg-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-gg-7.jpg"
        ]
      },
      {
        "id": 287,
        "name": "Community Coworks In Powai",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹7,500",
        "period": "/ Month",
        "priceFormatted": "₹7,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/community-coworks.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Community-Coworks-Powai-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Community-Coworks-Powai.-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Community-Coworks-Powai-min-1.jpg"
        ]
      },
      {
        "id": 288,
        "name": "The Millennial Pod In Powai",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹12,500",
        "period": "/ Month",
        "priceFormatted": "₹12,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/milenial-pod.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/21-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/22-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/23-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/24-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/25-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/11/Day-Pass-4.png"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 289,
        "name": "91springboard Vikhroli",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Vikhroli-scaled.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Vikhroli-Thane-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Vikhroli-Thane-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Vikhroli-Thane-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Vikhroli-Thane-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Vikhroli-Thane-005.jpg"
        ]
      },
      {
        "id": 290,
        "name": "IKeva In Powai",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹8,500",
        "period": "/ Month",
        "priceFormatted": "₹8,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Ikeva-powai.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ikeva-powai-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ikeva-powai-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ikeva-powai-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ikeva-powai-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ikeva-powai-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ikeva-powai-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ikeva-powai-7.jpg"
        ]
      },
      {
        "id": 291,
        "name": "Of10",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Of10-Thane-006.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Of10-Thane-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Of10-Thane-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Of10-Thane-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Of10-Thane-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Of10-Thane-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Of10-Thane-008.jpg"
        ]
      },
      {
        "id": 292,
        "name": "WorkWise Solutions In Vashi",
        "badge": null,
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "₹5,000",
        "period": "/ Month",
        "priceFormatted": "₹5,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Workwise-vashi.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww7.jpg"
        ]
      },
      {
        "id": 293,
        "name": "TriggerXchange Navi Mumbai Maharashtra",
        "badge": null,
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/TriggerXchange-Navi-Mumbai-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/TriggerXchange-Navi-Mumbai-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/TriggerXchange-Navi-Mumbai-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/TriggerXchange-Navi-Mumbai-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/TriggerXchange-Navi-Mumbai-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/TriggerXchange-Navi-Mumbai-006.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/TriggerXchange-Navi-Mumbai-007.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/TriggerXchange-Navi-Mumbai-008.jpg"
        ]
      },
      {
        "id": 294,
        "name": "WeWork In Worli",
        "badge": null,
        "rating": null,
        "area": "South Mumbai",
        "location": "South Mumbai, Mumbai",
        "price": "₹15,000",
        "period": "/ Month",
        "priceFormatted": "₹15,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/wework-vaswani.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/www-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/www-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/www-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/www-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/www-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/www-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/www-7.jpg"
        ]
      },
      {
        "id": 295,
        "name": "Arch N Rock",
        "badge": null,
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/fab852d305eaab358ac402fbdf308d3b43e5d05c.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Arch-n-Rock-Navi-Mumbai-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Arch-n-Rock-Navi-Mumbai-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Arch-n-Rock-Navi-Mumbai-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Arch-n-Rock-Navi-Mumbai-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Arch-n-Rock-Navi-Mumbai-005.jpg"
        ]
      },
      {
        "id": 296,
        "name": "WeWork Seawoods Grand Central",
        "badge": null,
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/WeWork-Navi-Mumbai-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeWork-Navi-Mumbai-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeWork-Navi-Mumbai-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeWork-Navi-Mumbai-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeWork-Navi-Mumbai-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeWork-Navi-Mumbai-006.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeWork-Navi-Mumbai-007.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeWork-Navi-Mumbai-008.jpg"
        ]
      }
    ],
    [
      {
        "id": 297,
        "name": "WeGrow Group",
        "badge": null,
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Screenshot-2021-11-23-181602.png",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeGrow-Group-Navi-Mumbai-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeGrow-Group-Navi-Mumbai-002.jpeg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeGrow-Group-Navi-Mumbai-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeGrow-Group-Navi-Mumbai-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeGrow-Group-Navi-Mumbai-005.jpeg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeGrow-Group-Navi-Mumbai-006.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WeGrow-Group-Navi-Mumbai-007.jpg"
        ]
      },
      {
        "id": 298,
        "name": "Cowrks In Worli",
        "badge": null,
        "rating": null,
        "area": "Worli",
        "location": "Worli, Mumbai",
        "price": "₹22,499",
        "period": "/ Month",
        "priceFormatted": "₹22,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/cowrks-worli.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/cw-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/cw-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/cw-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/cw-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/cw-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/cw-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/cw-7.jpg"
        ]
      },
      {
        "id": 299,
        "name": "Bootstart Cowork In Ballard Estate",
        "badge": null,
        "rating": null,
        "area": "Fort Mumbai",
        "location": "Fort Mumbai, Mumbai",
        "price": "₹7,999",
        "period": "/ Month",
        "priceFormatted": "₹7,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Boostart-1-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/B1-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/B2-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/B4-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/B5-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/11/Day-Pass-4.png"
        ]
      },
      {
        "id": 300,
        "name": "The Garage Coworking In Marine Drive",
        "badge": null,
        "rating": null,
        "area": "Marine Drive",
        "location": "Marine Drive, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Garage-Coworking-Marine-Drive.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/garage-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/garage-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/garage-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/garage-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/garage-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/garage-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/garage-7.jpg"
        ]
      },
      {
        "id": 301,
        "name": "Garage Coworking Lower Parel",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Garage-coworking-Lower-Parel-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Futurex-Lower-Parel-001-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Futurex-Lower-Parel-002-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Futurex-Lower-Parel-003-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Futurex-Lower-Parel-004-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Futurex-Lower-Parel-005-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Futurex-Lower-Parel-006-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Futurex-Lower-Parel-007-min-1.jpg"
        ]
      },
      {
        "id": 302,
        "name": "Awfis Andheri West Modi House",
        "badge": null,
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Andheri-West-Modi-House-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Andheri-West-Modi-House-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Andheri-West-Modi-House-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Andheri-West-Modi-House-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Andheri-West-Modi-House-005-min.jpg"
        ]
      },
      {
        "id": 303,
        "name": "Awfis Lokhandwala",
        "badge": null,
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹5,000",
        "period": "/ Month",
        "priceFormatted": "₹5,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Lokhandwala-Aston-Building-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Lokhandwala-Aston-Building-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Lokhandwala-Aston-Building-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Lokhandwala-Aston-Building-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Lokhandwala-Aston-Building-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/11/Day-Pass-5.png"
        ]
      },
      {
        "id": 304,
        "name": "The BoardRoom Co-Working",
        "badge": null,
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/THE-BOARDROOM-Co-working-Andheri-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/THE-BOARDROOM-Co-working-Andheri-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/THE-BOARDROOM-Co-working-Andheri-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/THE-BOARDROOM-Co-working-Andheri-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/THE-BOARDROOM-Co-working-Andheri-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/THE-BOARDROOM-Co-working-Andheri-006-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/THE-BOARDROOM-Co-working-Andheri-007-min.jpg"
        ]
      }
    ],
    [
      {
        "id": 305,
        "name": "IKeva BKC Annexe",
        "badge": null,
        "rating": null,
        "area": "Kurla",
        "location": "Kurla, Mumbai",
        "price": "₹8,000",
        "period": "/ Month",
        "priceFormatted": "₹8,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Ikeva-BKc.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/iB-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ib-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ib-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ib-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ib-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ib-7.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ib-8.jpg"
        ]
      },
      {
        "id": 306,
        "name": "Awfis Vashi Navi Mumbai Cyber One",
        "badge": null,
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Vashi-Navi-Mumbai-Cyber-One-Navi-Mumbai-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Vashi-Navi-Mumbai-Cyber-One-Navi-Mumbai-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Vashi-Navi-Mumbai-Cyber-One-Navi-Mumbai-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Vashi-Navi-Mumbai-Cyber-One-Navi-Mumbai-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Vashi-Navi-Mumbai-Cyber-One-Navi-Mumbai-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Vashi-Navi-Mumbai-Cyber-One-Navi-Mumbai-006.jpg"
        ]
      },
      {
        "id": 307,
        "name": "Lemon Tree Premier In Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹22,500",
        "period": "/ Month",
        "priceFormatted": "₹22,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/lemon-tree-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Lemon-Tree-Premier-Andheri-East-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Lemon-Tree-Premier-Andheri-East-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Lemon-Tree-Premier-Andheri-East-min-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/11/Day-Pass-4.png"
        ]
      },
      {
        "id": 308,
        "name": "Awfis Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Andheri-East-Akruti-Trade-Center-Andheri-East-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Andheri-East-Akruti-Trade-Center-Andheri-East-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Andheri-East-Akruti-Trade-Center-Andheri-East-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Andheri-East-Akruti-Trade-Center-Andheri-East-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Andheri-East-Akruti-Trade-Center-Andheri-East-005-min.jpg"
        ]
      },
      {
        "id": 309,
        "name": "Flignite Spaces Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹6,500",
        "period": "/ Month",
        "priceFormatted": "₹6,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/11/coworking.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Flignite-Spaces-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Flignite-Spaces-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Flignite-Spaces-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Flignite-Spaces-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Flignite-Spaces-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Flignite-Spaces-006.jpg"
        ]
      },
      {
        "id": 310,
        "name": "Divine Hub Coworking Space Andheri",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/11/divine-hub.png",
          "https://coworkingers.com/wp-content/uploads/2020/11/WhatsApp-Image-2020-01-01-at-2.51.26-PM-min.jpeg",
          "https://coworkingers.com/wp-content/uploads/2020/11/IMG_4123-min.jpeg",
          "https://coworkingers.com/wp-content/uploads/2020/11/unnamed-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/WhatsApp-Image-2020-01-01-at-2.28.36-PM-min.jpeg",
          "https://coworkingers.com/wp-content/uploads/2021/11/Day-Pass-8.png"
        ]
      },
      {
        "id": 311,
        "name": "YesssWorks Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹9,000",
        "period": "/ Month",
        "priceFormatted": "₹9,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/11/2.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/YesssWorks-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/YesssWorks-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/YesssWorks-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/YesssWorks-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/YesssWorks-005.jpg"
        ]
      },
      {
        "id": 312,
        "name": "IKeva BKC Annexe",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/iKeva-BKC-Annexe-Mumbai-Thane-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/iKeva-BKC-Annexe-Mumbai-Thane-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/iKeva-BKC-Annexe-Mumbai-Thane-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/iKeva-BKC-Annexe-Mumbai-Thane-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/iKeva-BKC-Annexe-Mumbai-Thane-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/iKeva-BKC-Annexe-Mumbai-Thane-006.jpg"
        ]
      }
    ],
    [
      {
        "id": 313,
        "name": "New Bridge Business Centre Andheri |Price And Images |",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹54,000",
        "period": "/ Month",
        "priceFormatted": "₹54,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/New-Bridge-Centre.png",
          "https://coworkingers.com/wp-content/uploads/2021/10/NBC-1.png",
          "https://coworkingers.com/wp-content/uploads/2021/10/NBC-2.png",
          "https://coworkingers.com/wp-content/uploads/2021/10/NBC-3.png"
        ]
      },
      {
        "id": 314,
        "name": "Chitrshaala In New Link Road",
        "badge": null,
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹7,500",
        "period": "/ Month",
        "priceFormatted": "₹7,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/75-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/71-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/72-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/73-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/74-min.jpg"
        ]
      },
      {
        "id": 315,
        "name": "DevX Dynasty In Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹11,490",
        "period": "/ Month",
        "priceFormatted": "₹11,490 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/dev-x.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/61-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/62-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/63-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/65-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/64-min.jpg"
        ]
      },
      {
        "id": 316,
        "name": "At 101 Workshare Vibe In Andheri West",
        "badge": null,
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹5,000",
        "period": "/ Month",
        "priceFormatted": "₹5,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/a5-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/a1-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/a2-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/a3-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/a4-min.jpg"
        ]
      },
      {
        "id": 317,
        "name": "91Springboard 74 Techno Park Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-74-Techno-Park-Andheri-East-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-74-Techno-Park-Andheri-East-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-74-Techno-Park-Andheri-East-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-74-Techno-Park-Andheri-East-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-74-Techno-Park-Andheri-East-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-74-Techno-Park-Andheri-East-006-min.jpg"
        ]
      },
      {
        "id": 318,
        "name": "Quest Coworks",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹9,000",
        "period": "/ Month",
        "priceFormatted": "₹9,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Quest-Coworks-Andheri-East-006-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Quest-Coworks-Andheri-East-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Quest-Coworks-Andheri-East-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Quest-Coworks-Andheri-East-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Quest-Coworks-Andheri-East-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Quest-Coworks-Andheri-East-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Quest-Coworks-Andheri-East-007-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Quest-Coworks-Andheri-East-008-min.jpg"
        ]
      },
      {
        "id": 319,
        "name": "Redbrick",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹10,000",
        "period": "/ Month",
        "priceFormatted": "₹10,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Redbrick-Andheri-East-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Redbrick-Andheri-East-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Redbrick-Andheri-East-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Redbrick-Andheri-East-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Redbrick-Andheri-East-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Redbrick-Andheri-East-006-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Redbrick-Andheri-East-007-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Redbrick-Andheri-East-008-min.jpg"
        ]
      },
      {
        "id": 320,
        "name": "603 The Coworking Space",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹7,000",
        "period": "/ Month",
        "priceFormatted": "₹7,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/603-The-Coworking-Space-Andheri-East-007-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/603-The-Coworking-Space-Andheri-East-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/603-The-Coworking-Space-Andheri-East-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/603-The-Coworking-Space-Andheri-East-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/603-The-Coworking-Space-Andheri-East-004-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/603-The-Coworking-Space-Andheri-East-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/603-The-Coworking-Space-Andheri-East-006-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/11/Day-Pass.png"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 321,
        "name": "The Mosaic Co-working Space Maharashtra",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹15,000",
        "period": "/ Month",
        "priceFormatted": "₹15,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Mosaic-Co-working-Space-Andheri-East-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Mosaic-Co-working-Space-Andheri-East-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Mosaic-Co-working-Space-Andheri-East-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Mosaic-Co-working-Space-Andheri-East-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Mosaic-Co-working-Space-Andheri-East-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Mosaic-Co-working-Space-Andheri-East-006-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Mosaic-Co-working-Space-Andheri-East-007-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/11/Day-Pass.png"
        ]
      },
      {
        "id": 322,
        "name": "Native Spaces Andheri",
        "badge": null,
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹7,500",
        "period": "/ Month",
        "priceFormatted": "₹7,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Native-Spaces-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Native-Spaces-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Native-Spaces-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Native-Spaces-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Native-Spaces-005-min.jpg"
        ]
      },
      {
        "id": 323,
        "name": "Ecospaze By One Co.Work",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹17,999",
        "period": "/ Month",
        "priceFormatted": "₹17,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/11/Ecospaze-by-One-Co.Work-Mumbai-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Ecospaze-2.png",
          "https://coworkingers.com/wp-content/uploads/2020/11/Ecospaze-3.png",
          "https://coworkingers.com/wp-content/uploads/2020/11/Ecospaze-4.png",
          "https://coworkingers.com/wp-content/uploads/2020/11/Ecospaze.png"
        ]
      },
      {
        "id": 324,
        "name": "AccessWork Lower Parel",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/AccessWork-Lower-Parel-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/AccessWork-Lower-Parel-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/AccessWork-Lower-Parel-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/AccessWork-Lower-Parel-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/AccessWork-Lower-Parel-005-min.jpg"
        ]
      },
      {
        "id": 325,
        "name": "Workwise",
        "badge": null,
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Workwise-Solutions-Pvt.-Ltd-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Wokrwise-2.png",
          "https://coworkingers.com/wp-content/uploads/2020/07/Wokrwise.png",
          "https://coworkingers.com/wp-content/uploads/2020/07/Workwise-4.png",
          "https://coworkingers.com/wp-content/uploads/2020/07/Workwise3.png",
          "https://coworkingers.com/wp-content/uploads/2020/07/workwise-5.png"
        ]
      },
      {
        "id": 326,
        "name": "Innov8 Coworking Boston House Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹6,399",
        "period": "/ Month",
        "priceFormatted": "₹6,399 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Coworking-Boston-House-Andheri-East-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Coworking-Boston-House-Andheri-East-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Coworking-Boston-House-Andheri-East-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Coworking-Boston-House-Andheri-East-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Coworking-Boston-House-Andheri-East-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Coworking-Boston-House-Andheri-East-006-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Coworking-Boston-House-Andheri-East-007-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Innov8-Coworking-Boston-House-Andheri-East-008-min.jpg"
        ]
      },
      {
        "id": 327,
        "name": "Lumos CoWork",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹7,500",
        "period": "/ Month",
        "priceFormatted": "₹7,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Lumos-Cowork-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Lumos-Cowork-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Lumos-Cowork-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Lumos-Cowork-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Lumos-Cowork-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Lumos-Cowork-006-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Lumos-Cowork-007-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Lumos-Cowork-008-min.jpg"
        ]
      },
      {
        "id": 328,
        "name": "The Matchbox CoWork",
        "badge": null,
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Matchbox-Cowork-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Matchbox-Cowork-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Matchbox-Cowork-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Matchbox-Cowork-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Matchbox-Cowork-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Matchbox-Cowork-006-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Matchbox-Cowork-007-min.jpg"
        ]
      }
    ],
    [
      {
        "id": 329,
        "name": "WeWork Chromium In Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹9,000",
        "period": "/ Month",
        "priceFormatted": "₹9,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Chromium.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Web_150DPI-WeWork_Chromium_11th_sept_20190115-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Web_150DPI-WeWork_Chromium_11th_sept_20190078-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Web_150DPI-WeWork_Chromium_11th_sept_20190049-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Web_150DPI-WeWork_Chromium_11th_sept_20190022-min.jpg"
        ]
      },
      {
        "id": 330,
        "name": "WeWork Raheja Platinum In Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹15,000",
        "period": "/ Month",
        "priceFormatted": "₹15,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/wework-raheja.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-rp-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-rp-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-rp-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-rp-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-rp-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-rp-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/ww-rp-7.jpg"
        ]
      },
      {
        "id": 331,
        "name": "WeWork Enam Sambhav In BKC",
        "badge": null,
        "rating": null,
        "area": "BKC",
        "location": "Bkc, Mumbai",
        "price": "₹18,900",
        "period": "/ Month",
        "priceFormatted": "₹18,900 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/wework-bkc.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wbkc-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wbkc-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wbkc-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wbkc-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wbkc-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wbkc-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/wbkc-7.jpg"
        ]
      },
      {
        "id": 332,
        "name": "JITO Incubation And Innovation Foundation In Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹4,899",
        "period": "/ Month",
        "priceFormatted": "₹4,899 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Jito.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/jito-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/jito-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/jito-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/jito-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/jito-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/jito-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/jito-7.jpg"
        ]
      },
      {
        "id": 333,
        "name": "Guac Spaces In Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹5,999",
        "period": "/ Month",
        "priceFormatted": "₹5,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/guac-spaces.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/GS-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/gs-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/gs-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/gs-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/gs-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/gs-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/gs-7.jpg"
        ]
      },
      {
        "id": 334,
        "name": "91springboard Lotus Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹8,000",
        "period": "/ Month",
        "priceFormatted": "₹8,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/91springboard-Lotus.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/91-lotus-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/91-lotus-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/91-lotus-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/91-lotus-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/91-lotus-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/91-lotus-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/91-lotus-7.jpg"
        ]
      },
      {
        "id": 335,
        "name": "Incuspaze In Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹7,499",
        "period": "/ Month",
        "priceFormatted": "₹7,499 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/incuspaze.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Incuspaze-Andheri-East-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Incuspaze-Andheri-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Incuspaze-Andheri-East-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Incuspaze-Andheri-East.-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/11/Day-Pass-4.png"
        ]
      },
      {
        "id": 336,
        "name": "Servcorp BKC",
        "badge": null,
        "rating": null,
        "area": "BKC",
        "location": "Bkc, Mumbai",
        "price": "₹25,000",
        "period": "/ Month",
        "priceFormatted": "₹25,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Screenshot-2021-11-25-122323.png",
          "https://coworkingers.com/wp-content/uploads/2021/10/Screenshot-2021-11-25-122227.png",
          "https://coworkingers.com/wp-content/uploads/2021/10/Screenshot-2021-11-25-122307.png"
        ]
      }
    ],
    [
      {
        "id": 337,
        "name": "Community Coworks In Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹7,500",
        "period": "/ Month",
        "priceFormatted": "₹7,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Community-Coworks-Andheri-East-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Community-Coworks-Andheri-East.-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Community-Coworks-Andheri-East.-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Community-Coworks-Andheri-East-min-1.jpg"
        ]
      },
      {
        "id": 338,
        "name": "Co.Lab.Oratory Asia In Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹4,500",
        "period": "/ Month",
        "priceFormatted": "₹4,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/colab-Asia.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Co.Lab_.Oratory-Asia-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Co.Lab_.Oratory-Asia-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Co.Lab_.Oratory-Asia-min-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Co.Lab-Oratory-Asia-min.jpg"
        ]
      },
      {
        "id": 339,
        "name": "Quest Offices In BKC",
        "badge": null,
        "rating": null,
        "area": "BKC",
        "location": "Bkc, Mumbai",
        "price": "₹9,999",
        "period": "/ Month",
        "priceFormatted": "₹9,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/quest-offices.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Quest-Offices-BKC-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Quest-Offices-BKC.-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Quest-Offices-BKC-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/11/Day-Pass-4.png"
        ]
      },
      {
        "id": 340,
        "name": "IKeva BKC",
        "badge": null,
        "rating": null,
        "area": "BKC",
        "location": "Bkc, Mumbai",
        "price": "₹8,800",
        "period": "/ Month",
        "priceFormatted": "₹8,800 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/Screenshot-2021-11-25-112041.png",
          "https://coworkingers.com/wp-content/uploads/2021/10/ikeva1.png",
          "https://coworkingers.com/wp-content/uploads/2021/10/Screenshot-2021-11-25-112131.png"
        ]
      },
      {
        "id": 341,
        "name": "WeWork - Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹15,000",
        "period": "/ Month",
        "priceFormatted": "₹15,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/wework-andheri.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Wework-Andheri-East-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Wework-Andheri-East-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Wework-Andheri-East-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Wework-Andheri-East-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Wework-Andheri-East-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Wework-Andheri-East-006-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Wework-Andheri-East-007-min.jpg"
        ]
      },
      {
        "id": 342,
        "name": "WorkAmp Futurex Lower Parel",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp-Futurex-Lower-Parel-003-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp.png",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp2.png",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp3.png",
          "https://coworkingers.com/wp-content/uploads/2020/07/WorkAmp4.png"
        ]
      },
      {
        "id": 343,
        "name": "Awfis Lower Parel",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Lower-Parel-Poddar-Chambers-Lower-Parel-002-min-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Lower-Parel-Poddar-Chambers-Lower-Parel-005-min-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Lower-Parel-Poddar-Chambers-Lower-Parel-001-min-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Lower-Parel-Poddar-Chambers-Lower-Parel-003-min-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Lower-Parel-Poddar-Chambers-Lower-Parel-004-min-2.jpg"
        ]
      },
      {
        "id": 344,
        "name": "Rise Mumbai Lower Parel",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Rise-Mumbai-Lower-Parel-004-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Rise-Mumbai-Lower-Parel-001-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Rise-Mumbai-Lower-Parel-002-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Rise-Mumbai-Lower-Parel-003-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Rise-Mumbai-Lower-Parel-005-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Rise-Mumbai-Lower-Parel-006-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Rise-Mumbai-Lower-Parel-007-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Rise-Mumbai-Lower-Parel-008-min-1.jpg"
        ]
      }
    ],
    [
      {
        "id": 345,
        "name": "Work Square Andheri East",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Work-Square-Lower-Parel-001-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Work-Square-Lower-Parel-005-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Work-Square-Lower-Parel-006-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Work-Square-Lower-Parel-007-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Work-Square-Lower-Parel-008-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Work-Square-Lower-Parel-002-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Work-Square-Lower-Parel-003-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Work-Square-Lower-Parel-004-min-1.jpg"
        ]
      },
      {
        "id": 346,
        "name": "Avirahi Office Spaces In Kandivali West",
        "badge": null,
        "rating": null,
        "area": "Kandivali West",
        "location": "Kandivali West, Mumbai",
        "price": "₹7,000",
        "period": "/ Month",
        "priceFormatted": "₹7,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/avirahi.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Avirahi-Office-Space-Kandivali-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Avirahi-Office-Space-Kandivali.-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Avirahi-Office-Space-Kandivali.-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/Avirahi-Office-Space-Kandivali-min-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/11/Day-Pass-4.png"
        ]
      },
      {
        "id": 347,
        "name": "Spartan Co-Work",
        "badge": null,
        "rating": null,
        "area": "Andheri",
        "location": "Andheri, Mumbai",
        "price": "₹1,250",
        "period": "/ Month",
        "priceFormatted": "₹1,250 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/Spartan-Co-Work-005-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Spartan-Co-Work-001-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Spartan-Co-Work-002-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Spartan-Co-Work-003-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Spartan-Co-Work-004-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Spartan-Co-Work-006-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Spartan-Co-Work-007-min.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/Spartan-Co-Work-008-min.jpg"
        ]
      },
      {
        "id": 348,
        "name": "The Playce",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Playce-Thane-008.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Playce-Thane-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Playce-Thane-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Playce-Thane-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Playce-Thane-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Playce-Thane-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Playce-Thane-006.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/The-Playce-Thane-007.jpg"
        ]
      },
      {
        "id": 349,
        "name": "ZoomStart India",
        "badge": null,
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/ZoomStart-India-Navi-Mumbai-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/ZoomStart-India-Navi-Mumbai-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/ZoomStart-India-Navi-Mumbai-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/ZoomStart-India-Navi-Mumbai-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/ZoomStart-India-Navi-Mumbai-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/ZoomStart-India-Navi-Mumbai-006.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/ZoomStart-India-Navi-Mumbai-007.jpg"
        ]
      },
      {
        "id": 350,
        "name": "91springboard",
        "badge": null,
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Turbhe-Navi-Mumbai-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Turbhe-Navi-Mumbai-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Turbhe-Navi-Mumbai-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Turbhe-Navi-Mumbai-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Turbhe-Navi-Mumbai-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/07/91springboard-Turbhe-Navi-Mumbai-006.jpg"
        ]
      },
      {
        "id": 351,
        "name": "Mascots CoWork Andheri East",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹10,999",
        "period": "/ Month",
        "priceFormatted": "₹10,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/11/3.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Mascots-CoWork-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Mascots-CoWork-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Mascots-CoWork-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Mascots-CoWork-004.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Mascots-CoWork-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Mascots-CoWork-006.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/Mascots-CoWork-007.jpg"
        ]
      },
      {
        "id": 352,
        "name": "OfficeBing",
        "badge": null,
        "rating": null,
        "area": "Navi Mumbai",
        "location": "Navi Mumbai, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/11/OfficeBing-005.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/OfficeBing-001.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/OfficeBing-002.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/OfficeBing-003.jpg",
          "https://coworkingers.com/wp-content/uploads/2020/11/OfficeBing-004.jpg"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 353,
        "name": "Guac Spaces",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹5,999",
        "period": "/ Month",
        "priceFormatted": "₹5,999 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/1582202995088.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/SpaceImages593430836.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/11/day-pass-12.png"
        ]
      },
      {
        "id": 354,
        "name": "The Boho Pad In Santacruz West",
        "badge": null,
        "rating": null,
        "area": "Santacruz West",
        "location": "Santacruz West, Mumbai",
        "price": "₹10,000",
        "period": "/ Month",
        "priceFormatted": "₹10,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/the-boho-pad.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/boho-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/boho-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/boho-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/boho-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/boho-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/boho-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/boho-7.jpg"
        ]
      },
      {
        "id": 355,
        "name": "One Degree Coworking In LBS Marg",
        "badge": null,
        "rating": null,
        "area": "Bhandup",
        "location": "Bhandup, Mumbai",
        "price": "₹5,000",
        "period": "/ Month",
        "priceFormatted": "₹5,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/one-degree.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/one-degree-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/one-degree-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/one-degree-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/one-degree-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/one-degree-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/one-degree-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/one-degree-7.jpg"
        ]
      },
      {
        "id": 356,
        "name": "WeWork In Nesco IT Park",
        "badge": null,
        "rating": null,
        "area": "Goregaon",
        "location": "Goregaon, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2021/10/wework-nesco.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-it-park-1.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-it-park-2.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-it-park-3.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-it-park-4.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-it-park-5.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-it-park-6.jpg",
          "https://coworkingers.com/wp-content/uploads/2021/10/we-work-it-park-7.jpg"
        ]
      },
      {
        "id": 357,
        "name": "WISE SNDTWU INCUBATION CENTRE",
        "badge": null,
        "rating": null,
        "area": "Santacruz West",
        "location": "Santacruz West, Mumbai",
        "price": "₹30,000",
        "period": "/ Month",
        "priceFormatted": "₹30,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1710154982/tvfqib4g3ufwdqqkyqem.webp"
        ]
      },
      {
        "id": 358,
        "name": "Attari Classes",
        "badge": null,
        "rating": null,
        "area": "Kurla",
        "location": "Kurla, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1530681932/ijjbkatsqqhgg2vqkwtx.webp"
        ]
      },
      {
        "id": 359,
        "name": "EFC Limited",
        "badge": null,
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "₹23,000",
        "period": "/ Month",
        "priceFormatted": "₹23,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1640595341/hbqvlmrqozjngi1aazts.webp"
        ]
      },
      {
        "id": 360,
        "name": "The Learning Galaxy",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1641279912/o8xkkej1yjrl5hypsfld.png"
        ]
      }
    ],
    [
      {
        "id": 361,
        "name": "Matulya Center",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹12,000",
        "period": "/ Month",
        "priceFormatted": "₹12,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1645615021/wfixwqc4ajaxls2mlamt.jpg"
        ]
      },
      {
        "id": 362,
        "name": "Grove Workspaces",
        "badge": null,
        "rating": null,
        "area": "Lower Parel",
        "location": "Lower Parel, Mumbai",
        "price": "₹18,000",
        "period": "/ Month",
        "priceFormatted": "₹18,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/c93a55acae13ce93bfa0dbb1e73ff045_XUn5VPmWl.jpg"
        ]
      },
      {
        "id": 363,
        "name": "NVL Services",
        "badge": null,
        "rating": null,
        "area": "Lower Pare",
        "location": "Lower Pare, Mumbai",
        "price": "₹10,000",
        "period": "/ Month",
        "priceFormatted": "₹10,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1646051198/drbwyakvgewvwvwedigs.jpg"
        ]
      },
      {
        "id": 364,
        "name": "AIIG",
        "badge": null,
        "rating": null,
        "area": "Prabhadevi Road",
        "location": "Prabhadevi Road, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1582623235/esqch0nmitqhdp7vfzdc.webp"
        ]
      },
      {
        "id": 365,
        "name": "Ztartup",
        "badge": null,
        "rating": null,
        "area": "Dadar West",
        "location": "Dadar West, Mumbai",
        "price": "₹25,000",
        "period": "/ Month",
        "priceFormatted": "₹25,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/c3e5ba66f4aba0449cf5ce33def4493b_duZNJ3kqu.jpg"
        ]
      },
      {
        "id": 366,
        "name": "DBS India",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1551354296/miekn1cnx5hdaeujhbkf.png"
        ]
      },
      {
        "id": 367,
        "name": "Kohinoor Banquet's",
        "badge": null,
        "rating": null,
        "area": "Dadar East",
        "location": "Dadar East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1583137777/d8vxd6toqbxnm3egsiu5.webp"
        ]
      },
      {
        "id": 368,
        "name": "CfE Offices",
        "badge": null,
        "rating": null,
        "area": "Dadar",
        "location": "Dadar, Mumbai",
        "price": "₹5,000",
        "period": "/ Month",
        "priceFormatted": "₹5,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1647251313/kkbijzltg66wtx8eqk8d.webp"
        ]
      }
    ],
    [
      {
        "id": 369,
        "name": "CfE Offices",
        "badge": null,
        "rating": null,
        "area": "Dadar West",
        "location": "Dadar West, Mumbai",
        "price": "₹6,000",
        "period": "/ Month",
        "priceFormatted": "₹6,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1647251027/djteuzdgmmcm8bywqak4.webp"
        ]
      },
      {
        "id": 370,
        "name": "Isloan",
        "badge": null,
        "rating": null,
        "area": "Churchgate",
        "location": "Churchgate, Mumbai",
        "price": "₹5,000",
        "period": "/ Month",
        "priceFormatted": "₹5,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1542619807/wg87lzjhaxs154lkbzpg.webp"
        ]
      },
      {
        "id": 371,
        "name": "AIIG",
        "badge": null,
        "rating": null,
        "area": "Fort",
        "location": "Fort, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1623049942/tec1sydc03nv7glestqn.jpg"
        ]
      },
      {
        "id": 372,
        "name": "Oval By Galaxy",
        "badge": null,
        "rating": null,
        "area": "Churchgate",
        "location": "Churchgate, Mumbai",
        "price": "₹12,500",
        "period": "/ Month",
        "priceFormatted": "₹12,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/s--2up9Zw50--/v1723547360/mzxm6qfu6cguny8mu29a.webp"
        ]
      },
      {
        "id": 373,
        "name": "DBS India",
        "badge": null,
        "rating": null,
        "area": "Fort",
        "location": "Fort, Mumbai",
        "price": "₹12,900",
        "period": "/ Month",
        "priceFormatted": "₹12,900 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1553675196/ry4qwqgkesuigegwjp55.png"
        ]
      },
      {
        "id": 374,
        "name": "Bunder Room",
        "badge": null,
        "rating": null,
        "area": "Kala Ghoda",
        "location": "Kala Ghoda, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1608116965/diduvlrwywwrep6ubjh8.webp"
        ]
      },
      {
        "id": 375,
        "name": "DBS",
        "badge": null,
        "rating": null,
        "area": "Marzban Road",
        "location": "Marzban Road, Mumbai",
        "price": "₹19,000",
        "period": "/ Month",
        "priceFormatted": "₹19,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/2f1ff592dbf355ee0b21636f558ff0ab_u9p_-dViW.jpeg"
        ]
      },
      {
        "id": 376,
        "name": "Rex Chamber Fort",
        "badge": null,
        "rating": null,
        "area": "Ballard Estate",
        "location": "Ballard Estate, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/3c58d76c3698a574e8a8159ec1333912_glsV3BYWsa.jpg"
        ]
      }
    ],
    [
      {
        "id": 377,
        "name": "Trackster Spaces",
        "badge": null,
        "rating": null,
        "area": "Nerul",
        "location": "Nerul, Mumbai",
        "price": "₹5,500",
        "period": "/ Month",
        "priceFormatted": "₹5,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/image/upload/s--Q6kd_3-d--/v1724242435/y2pjmf6mouu9jiuyb6xq.webp"
        ]
      },
      {
        "id": 378,
        "name": "Corpliance Business Solutions",
        "badge": null,
        "rating": null,
        "area": "Vashi",
        "location": "Vashi, Mumbai",
        "price": "₹6,000",
        "period": "/ Month",
        "priceFormatted": "₹6,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1648016436/otk4mkouz8uwayh4g0vn.webp"
        ]
      },
      {
        "id": 379,
        "name": "Netiizen Creative Spaces",
        "badge": null,
        "rating": null,
        "area": "Santacruz East",
        "location": "Santacruz East, Mumbai",
        "price": "₹8,000",
        "period": "/ Month",
        "priceFormatted": "₹8,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1675684827/yqg3i3ry9ktuzqivlbvq.webp"
        ]
      },
      {
        "id": 380,
        "name": "Book My Space",
        "badge": null,
        "rating": null,
        "area": "Kamala Nagar",
        "location": "Kamala Nagar, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1613979449/tiq8yz5ua4tk7w5qo0lk.png"
        ]
      },
      {
        "id": 381,
        "name": "The Workables",
        "badge": null,
        "rating": null,
        "area": "Bandra West",
        "location": "Bandra West, Mumbai",
        "price": "₹15,000",
        "period": "/ Month",
        "priceFormatted": "₹15,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1647335248/njx3vucxbplwvuuqfmwt.jpg"
        ]
      },
      {
        "id": 382,
        "name": "Brubaabaa Cafe",
        "badge": null,
        "rating": null,
        "area": "Bandra West",
        "location": "Bandra West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/223c1ec11fe2b160cf6f6443a531fb3e_adUmrDTzt.jpg"
        ]
      },
      {
        "id": 383,
        "name": "The Coworking company",
        "badge": null,
        "rating": null,
        "area": "Bandra West",
        "location": "Bandra West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/image/upload/tr:n-listing_image/v1474532070/eqmndircpaqz0bd1lyik.webp"
        ]
      },
      {
        "id": 384,
        "name": "Bubble Office",
        "badge": null,
        "rating": null,
        "area": "Goregoan East",
        "location": "Goregoan East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1672142770/cyalt0bid3allwjv6x6p.jpg"
        ]
      }
    ]
  ],
  [
    [
      {
        "id": 385,
        "name": "Toutle Space",
        "badge": null,
        "rating": null,
        "area": "Goregaon West",
        "location": "Goregaon West, Mumbai",
        "price": "₹8,500",
        "period": "/ Month",
        "priceFormatted": "₹8,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1677131843/ckalaabbdged1igahcg9.webp"
        ]
      },
      {
        "id": 386,
        "name": "Inspire Cospaces",
        "badge": null,
        "rating": null,
        "area": "Goregaon",
        "location": "Goregaon, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1603176403/mnbilqki30tf4ztvvssm.jpg"
        ]
      },
      {
        "id": 387,
        "name": "The Playce",
        "badge": null,
        "rating": null,
        "area": "Mulund West",
        "location": "Mulund West, Mumbai",
        "price": "₹13,000",
        "period": "/ Month",
        "priceFormatted": "₹13,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/be244f090fc6f2c5328501836cce4832_z4kmulXFFq.jpg"
        ]
      },
      {
        "id": 388,
        "name": "Vkube Coworking Space",
        "badge": null,
        "rating": null,
        "area": "Mulund East",
        "location": "Mulund East, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1604659282/ur2mtwuhn4ojtz2dhjhl.jpg"
        ]
      },
      {
        "id": 389,
        "name": "Unitop",
        "badge": null,
        "rating": null,
        "area": "Thane West",
        "location": "Thane West, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1504253425/dch9jarjjhr4h1ukrf3v.webp"
        ]
      },
      {
        "id": 390,
        "name": "Ukase Consultancy",
        "badge": null,
        "rating": null,
        "area": "Thane West",
        "location": "Thane West, Mumbai",
        "price": "₹8,000",
        "period": "/ Month",
        "priceFormatted": "₹8,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/451032ab01a8721d0567e4956d6730b6_SiZetRc9b.JPG"
        ]
      },
      {
        "id": 391,
        "name": "SLP BPO Services",
        "badge": null,
        "rating": null,
        "area": "Thane West",
        "location": "Thane West, Mumbai",
        "price": "₹5,500",
        "period": "/ Month",
        "priceFormatted": "₹5,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1563344480/so2xdgmsvtmv3wprioux.webp"
        ]
      },
      {
        "id": 392,
        "name": "RedBrick",
        "badge": null,
        "rating": null,
        "area": "BKC",
        "location": "BKC, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1571382184/ogclw7bxlqkbujv3pyjb.webp"
        ]
      }
    ],
    [
      {
        "id": 393,
        "name": "Chintamani Jewellers Office",
        "badge": null,
        "rating": null,
        "area": "Prabhadevi",
        "location": "Prabhadevi, Mumbai",
        "price": "₹20,000",
        "period": "/ Month",
        "priceFormatted": "₹20,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/54acd3d70cea72b4185c9fa85d1b35fc_vOt4sQyva.jpeg"
        ]
      },
      {
        "id": 394,
        "name": "OfficeBing",
        "badge": null,
        "rating": null,
        "area": "Turbhe",
        "location": "Turbhe, Mumbai",
        "price": "₹8,500",
        "period": "/ Month",
        "priceFormatted": "₹8,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1675231181/vpvvicix5ygorrpugelb.webp"
        ]
      },
      {
        "id": 395,
        "name": "Megastar Office",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹11,000",
        "period": "/ Month",
        "priceFormatted": "₹11,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1664786740/njkk1eamuxghyxplzutt.webp"
        ]
      },
      {
        "id": 396,
        "name": "The Common Desk",
        "badge": null,
        "rating": null,
        "area": "Railway Colony",
        "location": "Railway Colony, Mumbai",
        "price": "₹8,500",
        "period": "/ Month",
        "priceFormatted": "₹8,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/55639d94c7c75397d28d878307a7fa85_NJtWkjRBh.jpg"
        ]
      },
      {
        "id": 397,
        "name": "COWORKS BY STM",
        "badge": null,
        "rating": null,
        "area": "Vashi",
        "location": "Vashi, Mumbai",
        "price": "₹6,500",
        "period": "/ Month",
        "priceFormatted": "₹6,500 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/73119ab227402eba964c0461c2663e51_uyP79cwUG.JPG"
        ]
      },
      {
        "id": 398,
        "name": "The Millennial Pod",
        "badge": null,
        "rating": null,
        "area": "Powai",
        "location": "Powai, Mumbai",
        "price": "₹12,000",
        "period": "/ Month",
        "priceFormatted": "₹12,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1547542132/nt1vtjv5jvlpeljpertu.webp"
        ]
      },
      {
        "id": 399,
        "name": "Opulence",
        "badge": null,
        "rating": null,
        "area": "Marol MIDC Industry Estate",
        "location": "Marol MIDC Industry Estate, Mumbai",
        "price": "₹14,000",
        "period": "/ Month",
        "priceFormatted": "₹14,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://ik.imagekit.io/qdesq/qdesq/tr:n-listing_image_hq/84766c317b483ce47213af49fd395c25_Z6N7q5Xu-.jpeg"
        ]
      },
      {
        "id": 400,
        "name": "Ginger Hotel",
        "badge": null,
        "rating": null,
        "area": "Sai Wadi",
        "location": "Sai Wadi, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1608635092/fohwkayvdqws4nxog5qz.png"
        ]
      }
    ],
    [
      {
        "id": 401,
        "name": "BLUE HAT FUSION",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹12,000",
        "period": "/ Month",
        "priceFormatted": "₹12,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/img/tr:n-listing_image_hq/image/upload/v1710243568/aehczjx0ajje23nmfidk.webp"
        ]
      },
      {
        "id": 402,
        "name": "Times Square",
        "badge": null,
        "rating": null,
        "area": "Andheri East",
        "location": "Andheri East, Mumbai",
        "price": "₹10,000",
        "period": "/ Month",
        "priceFormatted": "₹10,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1636781645/rgpwztlztirqa4ybh3ya.jpg"
        ]
      },
      {
        "id": 403,
        "name": "Redbrick",
        "badge": null,
        "rating": null,
        "area": "Andheri West",
        "location": "Andheri West, Mumbai",
        "price": "₹12,000",
        "period": "/ Month",
        "priceFormatted": "₹12,000 / Month",
        "ctaText": "Get Quote",
        "images": [
          "https://qdesq.imagekit.io/tr:n-listing_image_hq/image/upload/v1608620337/tozgw6jv9epahsspgxgr.jpg"
        ]
      },
      {
        "id": 404,
        "name": "WeWork ﻿Zenia",
        "badge": null,
        "rating": null,
        "area": "Thane",
        "location": "Thane, Mumbai",
        "price": "On Request",
        "period": "",
        "priceFormatted": "On Request",
        "ctaText": "Get Quote",
        "images": [
          "https://coworkingers.com/wp-content/uploads/2020/07/20190131_WeWork_Zenia_-_Common_Areas_-_Wide-2-min.jpg"
        ]
      }
    ],
    []
  ]
];

// Page 1 blocks (kept as named exports for compatibility)
export const mumbaiOfficeCards = mumbaiPages[0][0];
export const moreMumbaiOfficeCards = mumbaiPages[0][1];
export const finalMumbaiOfficeCards = mumbaiPages[0][2];
export const featuredMumbaiOfficeCards = mumbaiPages[0][3];

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp'
};

// Aliases for compatibility (virtual office page reads these)
export const mumbaiAreas = mumbaiNeighborhoods;
export const mumbaiSpaces = mumbaiPages.flat(2);
export const areas = mumbaiAreas;
export const spaces = mumbaiSpaces;

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
  totalPages: 13,
  initialPage: 1
};

// Extra cards shown only when an area filter is clicked (none needed - every listing is already in the pages above)
export const areaExtraOfficeCards = {};

// ============================================================================
// Comprehensive Mumbai Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allMumbaiOfficeCards = mumbaiPages.flat(2);

/**
 * Find a Mumbai office card by slug (or legacy numeric id)
 * @param {string|number} id
 * @returns {object|null}
 */
export const getMumbaiOfficeCardById = (id) => findOfficeBySlug(allMumbaiOfficeCards, id, "mumbai");
export const getMumbaiOfficeSlug = (space) => officePath(allMumbaiOfficeCards, space, "mumbai");

// ============================================================================
// Top Coworking Locations in Mumbai (Explore by Neighborhood)
// ============================================================================
export const topMumbaiCoworkingLocations = [
  {
    "id": "loc-andheri-east",
    "name": "Andheri East",
    "title": "Coworking Space in Andheri East",
    "image": "https://img.cofynd.com/images/latest_images_2024/64d5123cd5384ba1166560d6dd361f6df8750152.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-andheri",
    "name": "Andheri",
    "title": "Coworking Space in Andheri",
    "image": "https://img.cofynd.com/images/original/37a4212866bc75f883c25660a63fd4d1c066e43d.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-powai",
    "name": "Powai",
    "title": "Coworking Space in Powai",
    "image": "https://img.cofynd.com/images/latest_images_2024/22e5b985e9532e4f57bc0ce4e221c5c440c93086.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-lower-parel",
    "name": "Lower Parel",
    "title": "Coworking Space in Lower Parel",
    "image": "https://img.cofynd.com/images/original/e811ca2e79ef8557c9025628365d7031d2520daf.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-navi-mumbai",
    "name": "Navi Mumbai",
    "title": "Coworking Space in Navi Mumbai",
    "image": "https://img.cofynd.com/images/original/dcd3c89dd6b74d317bd35367ec863c8b6ffed65b.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-thane",
    "name": "Thane",
    "title": "Coworking Space in Thane",
    "image": "https://img.cofynd.com/images/latest_images_2024/c29118bdc6cf2024214798c28abceff97b8ea520.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-bkc",
    "name": "BKC",
    "title": "Coworking Space in BKC",
    "image": "https://img.cofynd.com/images/latest_images_2024/d2ced2b2fd3add051fad38b0f1d4d05906120ef4.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-andheri-west",
    "name": "Andheri West",
    "title": "Coworking Space in Andheri West",
    "image": "https://img.cofynd.com/images/latest_images_2024/9635a89800f6f8f5e1ab1b27ae812f948818ecf6.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-goregaon",
    "name": "Goregaon",
    "title": "Coworking Space in Goregaon",
    "image": "https://img.cofynd.com/images/latest_images_2024/e6d7f3cb554ad57f9ef152a6e8398400b2f31179.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-vashi",
    "name": "Vashi",
    "title": "Coworking Space in Vashi",
    "image": "https://img.cofynd.com/images/latest_images_2024/6c3c29f662dd3c182e3dbe8e0f2f01ee2a9fa794.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-bandra-east",
    "name": "Bandra East",
    "title": "Coworking Space in Bandra East",
    "image": "https://img.cofynd.com/images/latest_images_2024/4488fc351ccbe7a707dbae87a1b50a499787fb4b.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-thane-west",
    "name": "Thane West",
    "title": "Coworking Space in Thane West",
    "image": "https://img.cofynd.com/images/latest_images_2024/4b2ab8908dd60e8a47e9abe553719274e9877fec.webp",
    "ctaText": "Explore Spaces"
  }
];
