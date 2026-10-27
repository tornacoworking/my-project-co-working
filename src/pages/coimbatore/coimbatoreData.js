import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Coimbatore Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * Sourced from verified active coworking listings in Coimbatore (cofynd.com):
 * name, area, starting price and photos are taken from each real listing.
 * Ratings are not published for these listings, so they are left empty.
 */

export const coimbatoreNeighborhoods = [
  "Avinashi Road",
  "Saravanampatti",
  "Cheran Ma Nagar",
  "Kalapatti",
  "Peelamedu",
  "Tatabad",
  "100 Feet Road",
  "Annur",
  "Gandhipuram",
  "Induma Nagar",
  "Kamarajar Road",
  "Ram Nagar",
  "Saibaba Colony",
  "Sidhapudur",
  "Singanallur",
  "Sitra",
  "Vadavalli"
];

// Page 1 - top grid (right under the area filter buttons)
export const coimbatoreOfficeCards = [
  {
    "id": 1,
    "name": "Uffizi Coworking Spaces",
    "badge": "Premium",
    "rating": null,
    "area": "Avinashi Road",
    "location": "Avinashi Road, Coimbatore",
    "price": "₹7,000",
    "period": "/ Month",
    "priceFormatted": "₹7,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/cc27a5252890fdc7a4cce4bc1a953bdf0415cb74.webp",
      "https://img.cofynd.com/images/latest_images_2024/fa0c383bbda1f3c3e567e6b2a50830db91591cdb.webp",
      "https://img.cofynd.com/images/latest_images_2024/16098123aa302c62f60af5501a4c689e49fc529b.webp",
      "https://img.cofynd.com/images/latest_images_2024/961e0802d2bceb05c7be68abdab761779edc0be3.webp",
      "https://img.cofynd.com/images/latest_images_2024/748f040a9aa8183cd294ea08500d18eff5812002.webp",
      "https://img.cofynd.com/images/latest_images_2024/ed32e5380382ab694eaf17d8b60357d1dc98379a.webp",
      "https://img.cofynd.com/images/latest_images_2024/7558797925cc938034eefb2253e931662e40fdfe.webp",
      "https://img.cofynd.com/images/latest_images_2024/5b0d690559f6c5786a7747f922c797ac963b774b.webp",
      "https://img.cofynd.com/images/latest_images_2024/f4fc0477cb285513dce04cf0c768a45f38460abc.webp",
      "https://img.cofynd.com/images/latest_images_2024/2b06dd0966cba4f166eb2b4dd4fc8a956820a28d.webp",
      "https://img.cofynd.com/images/latest_images_2024/5e71a2d70c3a75313365ffcbd56f3d6b0a52f7cc.webp"
    ]
  },
  {
    "id": 2,
    "name": "Sanctum Spaze",
    "badge": null,
    "rating": null,
    "area": "Cheran Ma Nagar",
    "location": "Cheran Ma Nagar, Coimbatore",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/15e7a6f455d3a5cd858923f743d88ec8cf4a4d5f.webp",
      "https://img.cofynd.com/images/latest_images_2024/97824b02fc7203679c7dce9c6e06503d325b058c.webp",
      "https://img.cofynd.com/images/latest_images_2024/17d0ede0f0f0b39a10fbf7043f8ccef30bbd13f3.webp",
      "https://img.cofynd.com/images/latest_images_2024/8c8a89ffd1539e7fae9b637854a13361cf27fd1b.webp",
      "https://img.cofynd.com/images/latest_images_2024/901582246da68716be254c84e552d5f9d53f5658.webp",
      "https://img.cofynd.com/images/latest_images_2024/d41b8428091ae90c838845bb0b7d03fc83d626bf.webp",
      "https://img.cofynd.com/images/latest_images_2024/f8f5c815d6e9858debe66587da9cdf76c2f17373.webp",
      "https://img.cofynd.com/images/latest_images_2024/59cc5a40b3da8386d7189d3cec89afa153a9e14e.webp",
      "https://img.cofynd.com/images/latest_images_2024/e273768ec8e32e491e8b91e66b2e0624a3f3b807.webp",
      "https://img.cofynd.com/images/latest_images_2024/3fb7b2d5f9892d0e2f11a098987058215f9aa2c0.webp"
    ]
  },
  {
    "id": 3,
    "name": "Genora Workspace",
    "badge": "Premium",
    "rating": null,
    "area": "Avinashi Road",
    "location": "Avinashi Road, Coimbatore",
    "price": "₹5,499",
    "period": "/ Month",
    "priceFormatted": "₹5,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a645b501c03a68e4d3b9c1340c3f42a77791290a.webp",
      "https://img.cofynd.com/images/latest_images_2024/90cc2be1dce1bd4553433a13cfb000e9c429b706.webp",
      "https://img.cofynd.com/images/latest_images_2024/30be58b3802a70ecffdb1ef2e20ea95370b9fd58.webp",
      "https://img.cofynd.com/images/latest_images_2024/4a36704e1325328b04f2646a716a7adbf0555f46.webp",
      "https://img.cofynd.com/images/latest_images_2024/9bfea32cbd845960576454a4caf8b285a3e2b75d.webp",
      "https://img.cofynd.com/images/latest_images_2024/e05ca6572dde1785e52268249e125ad24148dde3.webp",
      "https://img.cofynd.com/images/latest_images_2024/a72ad09548db4b918362170ae4a1a80a6b3bbbb3.webp",
      "https://img.cofynd.com/images/latest_images_2024/a5604a54516ba65f6fc9e06b48efab4147b5fc59.webp",
      "https://img.cofynd.com/images/latest_images_2024/7556c8cf405a7dcb469ff585d6044a5a15a15377.webp",
      "https://img.cofynd.com/images/latest_images_2024/c882eb76bf3c79b4ad83322d2af2e4573d387759.webp"
    ]
  },
  {
    "id": 4,
    "name": "Smart Spaces",
    "badge": "Popular",
    "rating": null,
    "area": "Saibaba Colony",
    "location": "Saibaba Colony, Coimbatore",
    "price": "₹7,500",
    "period": "/ Month",
    "priceFormatted": "₹7,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8672c58f36b74e15d031e91b44533679f107630f.webp",
      "https://img.cofynd.com/images/latest_images_2024/97405a0fba6bbfc4a432b305243a4cd5dbea82f4.webp",
      "https://img.cofynd.com/images/latest_images_2024/8e9b7d852b96c23820511c4a6a6dd2a2cac4b0c2.webp",
      "https://img.cofynd.com/images/latest_images_2024/3e06e5dd83c5176ea7dffbb2ea2dc62c469190cb.webp"
    ]
  },
  {
    "id": 5,
    "name": "Focospaces",
    "badge": null,
    "rating": null,
    "area": "Gandhipuram",
    "location": "Gandhipuram, Coimbatore",
    "price": "₹5,500",
    "period": "/ Month",
    "priceFormatted": "₹5,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/5b93500652001c2a88a64ea54bb5978b6a463179.webp",
      "https://img.cofynd.com/images/latest_images_2024/4c713c6516d8f11376f711d1506acd9e3e658500.webp",
      "https://img.cofynd.com/images/latest_images_2024/4a655f22b3db86b27f5faf7c1d5bacac71385a46.webp",
      "https://img.cofynd.com/images/latest_images_2024/e12b9badc8a468fbcbced20f2c0eccde6f46a714.webp",
      "https://img.cofynd.com/images/latest_images_2024/f52e776ac1d16fc341160293f8617b8e22f8f66f.webp"
    ]
  },
  {
    "id": 6,
    "name": "Spazeone KVR HUB",
    "badge": "Premium",
    "rating": null,
    "area": "Kamarajar Road",
    "location": "Kamarajar Road, Coimbatore",
    "price": "₹7,499",
    "period": "/ Month",
    "priceFormatted": "₹7,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/d0582d6361406c424c009dcac23d16054fc3e771.webp",
      "https://img.cofynd.com/images/latest_images_2024/80da986fdba890bdfc377b56691fbf46aa906629.webp",
      "https://img.cofynd.com/images/latest_images_2024/d6b5fc7644fc1f9981bb00b5c2ceacb118698336.webp",
      "https://img.cofynd.com/images/latest_images_2024/094093fc7d62e0dac97a4f697eb047b95f86853d.webp",
      "https://img.cofynd.com/images/latest_images_2024/bcf3c803a9a4d2a5c562d56716165fd094927245.webp",
      "https://img.cofynd.com/images/latest_images_2024/bb4d82af18834890a8595bd51d52ebf5533a8719.webp"
    ]
  },
  {
    "id": 7,
    "name": "Workfiiy Spaces",
    "badge": null,
    "rating": null,
    "area": "Saravanampatti",
    "location": "Saravanampatti, Coimbatore",
    "price": "₹10,000",
    "period": "/ Month",
    "priceFormatted": "₹10,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/4b996ede04baceaae39b9bea67562ea1210b8787.webp",
      "https://img.cofynd.com/images/latest_images_2024/59829fcdae6b6d2ad3e398145ace257044038d67.webp",
      "https://img.cofynd.com/images/latest_images_2024/1a81f470db38131d749b12f080e00297d3b99ddd.webp",
      "https://img.cofynd.com/images/latest_images_2024/eae75a145b4b590eb5f29978f37d2b66595b8c31.webp"
    ]
  },
  {
    "id": 8,
    "name": "IndiQube Emerald",
    "badge": "Popular",
    "rating": null,
    "area": "Saravanampatti",
    "location": "Saravanampatti, Coimbatore",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8683687a8108c73113deb85317ca818f6ea262a3.webp",
      "https://img.cofynd.com/images/latest_images_2024/cba0a7f92f6364752fa0083617862debfdbf8143.webp",
      "https://img.cofynd.com/images/latest_images_2024/6d6be1641b84feb11209100c18fb288856ce6fdb.webp",
      "https://img.cofynd.com/images/latest_images_2024/c410e1a38822e19e1f5e6491b226872a2a8f3b03.webp",
      "https://img.cofynd.com/images/latest_images_2024/b80cab0abd52060ec386ea25f7a86cf48540fb9a.webp"
    ]
  }
];

// Page 1 - second block
export const moreCoimbatoreOfficeCards = [
  {
    "id": 9,
    "name": "IndiQube Echo",
    "badge": "Premium",
    "rating": null,
    "area": "Avinashi Road",
    "location": "Avinashi Road, Coimbatore",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/fe4355e902416e838669b01448fbfa955fd36546.webp",
      "https://img.cofynd.com/images/latest_images_2024/520e736a7e457c0034e00feff1dfd6935594bbe9.webp",
      "https://img.cofynd.com/images/latest_images_2024/257dab4c9d6b7aafe2c81dcd20f077733a1f55b2.webp",
      "https://img.cofynd.com/images/latest_images_2024/078dc0eb4bdd3bd0795b06fd4a4e8c5b1825026a.webp",
      "https://img.cofynd.com/images/latest_images_2024/301a6cdbfdf7d507d80eda2b619b484ef77263f9.webp",
      "https://img.cofynd.com/images/latest_images_2024/6759710bee5109ceb7f3a05e435408f38f6b112b.webp"
    ]
  },
  {
    "id": 10,
    "name": "IndiQube Kovai",
    "badge": "Popular",
    "rating": null,
    "area": "Avinashi Road",
    "location": "Avinashi Road, Coimbatore",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/00453403161e5f3f8f6115a3af942abb4ad2bd89.webp",
      "https://img.cofynd.com/images/latest_images_2024/020324b55639f8fd49769a0c13d3c5fd91ee2d42.webp",
      "https://img.cofynd.com/images/latest_images_2024/9b5099b7a70f784f90fd9c9d5f47fa67973fb652.webp",
      "https://img.cofynd.com/images/latest_images_2024/ee62402e75694c7405e262de08f3331f28ea60cf.webp",
      "https://img.cofynd.com/images/latest_images_2024/3d9cb729e9a8817ff3021f85ebcb79d82b5a811a.webp",
      "https://img.cofynd.com/images/latest_images_2024/3f64829c7513be3befe9d5de60ddcb9113d055e4.webp"
    ]
  },
  {
    "id": 11,
    "name": "LL space",
    "badge": null,
    "rating": null,
    "area": "Sidhapudur",
    "location": "Sidhapudur, Coimbatore",
    "price": "₹8,500",
    "period": "/ Month",
    "priceFormatted": "₹8,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a8ac5e8407d090947be41d49aacd8556968a5f76.webp",
      "https://img.cofynd.com/images/latest_images_2024/48722b7c8c30971be846d03619eedd5d915ebb24.webp",
      "https://img.cofynd.com/images/latest_images_2024/84b293d1831dc2d9b88754c4d215f5330492b8a9.webp",
      "https://img.cofynd.com/images/latest_images_2024/6039ec852f48f14d3f5c1f8da63c0d5613fcfe13.webp",
      "https://img.cofynd.com/images/latest_images_2024/d325534478378b8ca5f66f5eddaa9b7410f1523f.webp"
    ]
  },
  {
    "id": 12,
    "name": "SpazeOne Arima wakefield",
    "badge": "Premium",
    "rating": null,
    "area": "Avinashi Road",
    "location": "Avinashi Road, Coimbatore",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/2ece78fdf2d26dd02f76e9a0037c5ed9a95a139b.webp",
      "https://img.cofynd.com/images/latest_images_2024/e7a33f4fddf875dfd5acc4b4953caa050c76da68.webp",
      "https://img.cofynd.com/images/latest_images_2024/39c9eef7ad4ce128f3305ecc12c000d121e9a7a0.webp",
      "https://img.cofynd.com/images/latest_images_2024/b8c46748128391a926177b6372513196e9e765f9.webp",
      "https://img.cofynd.com/images/latest_images_2024/eea124219ca78d00ec86df761f2f20f3f97a7f7b.webp",
      "https://img.cofynd.com/images/latest_images_2024/d3e22ab8728111175b195f8c2c37b6edef627c2e.webp",
      "https://img.cofynd.com/images/latest_images_2024/6c9585c0cdfc30ac1040b5aac51d64a1489f3132.webp"
    ]
  },
  {
    "id": 13,
    "name": "Lotus Startup-zone",
    "badge": null,
    "rating": null,
    "area": "Peelamedu",
    "location": "Peelamedu, Coimbatore",
    "price": "₹5,500",
    "period": "/ Month",
    "priceFormatted": "₹5,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/39ae2319b3f7634b5386c5c95df21214b241396d.webp",
      "https://img.cofynd.com/images/latest_images_2024/52bee9feeb82737e52909b4a1de0f98488350c22.webp",
      "https://img.cofynd.com/images/latest_images_2024/67d12bfa2e8c5ca86aede28987060251d7c9f4d2.webp",
      "https://img.cofynd.com/images/latest_images_2024/142ea1e4dae939914db7ff419ac1d2c3dcac7c76.webp",
      "https://img.cofynd.com/images/latest_images_2024/98d6aee01b33155a88ace3d1c9039fb12cba72b5.webp"
    ]
  },
  {
    "id": 14,
    "name": "K-CUBE HIVE",
    "badge": null,
    "rating": null,
    "area": "Saravanampatti",
    "location": "Saravanampatti, Coimbatore",
    "price": "₹5,499",
    "period": "/ Month",
    "priceFormatted": "₹5,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/4c749ea233a47f446a7679027e1112f5b19963bd.webp",
      "https://img.cofynd.com/images/latest_images_2024/f61635863add01bf9a4965e2c4e79cae0a4bb3c2.webp",
      "https://img.cofynd.com/images/latest_images_2024/8e55cff04e4bcf66aaa971d65d60fc36095c40c3.webp",
      "https://img.cofynd.com/images/latest_images_2024/5840e756a6dc560a9b830ba1acca69792ff475b3.webp",
      "https://img.cofynd.com/images/latest_images_2024/fc8d9de297320e0dc3b7ed1e995ae591a60e7477.webp",
      "https://img.cofynd.com/images/latest_images_2024/2333a5301a3f8cdff1a31397f074203b12796378.webp",
      "https://img.cofynd.com/images/latest_images_2024/67a0d0595a56c71c9a2a4c4677da3b2d2fb61b7b.webp",
      "https://img.cofynd.com/images/latest_images_2024/7128ad878e051b174be78ef8ef41f8f80bc17b33.webp",
      "https://img.cofynd.com/images/latest_images_2024/1aeea269f258c4ca70eaa0bedb0739a7d7b2b68e.webp",
      "https://img.cofynd.com/images/latest_images_2024/3a6e0cb92cfa12bdc5f01978d36ab5a8a85f7a3e.webp",
      "https://img.cofynd.com/images/latest_images_2024/9f6378b41f5b5d9c779a56ace8d2aff23a45b04c.webp"
    ]
  },
  {
    "id": 15,
    "name": "Sabol coworks",
    "badge": null,
    "rating": null,
    "area": "100 Feet Road",
    "location": "100 Feet Road, Coimbatore",
    "price": "₹7,777",
    "period": "/ Month",
    "priceFormatted": "₹7,777 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/6dee16f32b51dc5f2ed36b5d85bdf17ec9688584.webp",
      "https://img.cofynd.com/images/latest_images_2024/877babe7252f0536e4926bb7af9c994a7039f1c4.webp",
      "https://img.cofynd.com/images/latest_images_2024/3b1e7fa5ba66d07617879902eb19aade2abe5e09.webp",
      "https://img.cofynd.com/images/latest_images_2024/d7ea7dba856dc38d9c36eb464092dd99ea22903e.webp",
      "https://img.cofynd.com/images/latest_images_2024/efc1d7814ff5e4ea7691680391524b846981ad93.webp",
      "https://img.cofynd.com/images/latest_images_2024/05254eb1b3e438fad1deae71c8c5d8bb9fd3a017.webp"
    ]
  },
  {
    "id": 16,
    "name": "Spazeone Pricol caledon square",
    "badge": "Premium",
    "rating": null,
    "area": "Peelamedu",
    "location": "Peelamedu, Coimbatore",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/94035ce34ff7036c18add8769d74eacb68cbf4a6.webp",
      "https://img.cofynd.com/images/latest_images_2024/492038d95696ed9be1256cc889459d69bc59a01b.webp",
      "https://img.cofynd.com/images/latest_images_2024/27600396466cb93c9f881decc718ccbc7ed154c8.webp",
      "https://img.cofynd.com/images/latest_images_2024/4cf378610f1167a364033351fdd7c69de8e2e1c1.webp",
      "https://img.cofynd.com/images/latest_images_2024/ae5e24dc5d17aa249bccf5e2f2ba7ea547d28f1c.webp"
    ]
  }
];

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp'
};

// Page 1 - third block
export const finalCoimbatoreOfficeCards = [
  {
    "id": 17,
    "name": "Icity Inc Coworking",
    "badge": null,
    "rating": null,
    "area": "Vadavalli",
    "location": "Vadavalli, Coimbatore",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/79578e65e99d8bad047c5ce5471abc0506eed39a.webp",
      "https://img.cofynd.com/images/latest_images_2024/110a8911427ac80abeadf17a9b655f586180df55.webp",
      "https://img.cofynd.com/images/latest_images_2024/e986104f13dd8b120291ca00e4fea4a7f5b332b0.webp",
      "https://img.cofynd.com/images/latest_images_2024/b791e487108f55f9312d68482bbd823dc7c5f47f.webp",
      "https://img.cofynd.com/images/latest_images_2024/a6f96a9d969ad97d282988a324d02262ac442875.webp",
      "https://img.cofynd.com/images/latest_images_2024/a51cc819a3c479070bce398804a4fd4734110112.webp",
      "https://img.cofynd.com/images/latest_images_2024/723be8e1b11c220d4097f8ca8bcd7d7cd8e03336.webp",
      "https://img.cofynd.com/images/latest_images_2024/fc64f453581807cb77bc8a95d9f54185fb010609.webp",
      "https://img.cofynd.com/images/latest_images_2024/5c078accb2000f6236ceffc2588c1f9e9d8a1c18.webp",
      "https://img.cofynd.com/images/latest_images_2024/2ba65de8222d27cbd643a88cb0cf1e4c666ee565.webp",
      "https://img.cofynd.com/images/latest_images_2024/f4c8cdf03fd2bad45111bcec9b9f5b257b33992c.webp",
      "https://img.cofynd.com/images/latest_images_2024/10f5b0ad82f3dce26bdaecc214c39b4eeb4e8953.webp",
      "https://img.cofynd.com/images/latest_images_2024/ec4bdd876975fb91a44d5cf7672b0fdb430310d4.webp",
      "https://img.cofynd.com/images/latest_images_2024/3d3ed874d7b58e2fad183dab6909b3366f292220.webp"
    ]
  },
  {
    "id": 18,
    "name": "The Syndicate Space",
    "badge": null,
    "rating": null,
    "area": "Tatabad",
    "location": "Tatabad, Coimbatore",
    "price": "₹6,500",
    "period": "/ Month",
    "priceFormatted": "₹6,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/65cd7026ede337858139cf047107b5616b012adc.webp",
      "https://img.cofynd.com/images/latest_images_2024/e09de2f7756c4146573f27475c9c3bb12d539cc0.webp",
      "https://img.cofynd.com/images/latest_images_2024/61d97a313a7fe57e2fd6cf4ed704c9c0f660ba6b.webp",
      "https://img.cofynd.com/images/latest_images_2024/6e6d4806f9bef21fa9a1e8823a850be7485ac2a8.webp"
    ]
  },
  {
    "id": 19,
    "name": "Innovspace Edge Zone",
    "badge": null,
    "rating": null,
    "area": "Kalapatti",
    "location": "Kalapatti, Coimbatore",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/5fbe06e88edd335f7c7bf8fb01cce23cc2085fa4.webp",
      "https://img.cofynd.com/images/latest_images_2024/179e992e81e072ffaad8d72775b31bc96d4925ff.webp",
      "https://img.cofynd.com/images/latest_images_2024/2b4c54172fca27bff134fbcaea76cddd47bb0c49.webp",
      "https://img.cofynd.com/images/latest_images_2024/d699b7ea88bca1f7124cb96e4974541df0d44705.webp",
      "https://img.cofynd.com/images/latest_images_2024/5cbedb34ddd71846ab6878a4d934a74e232c68cb.webp"
    ]
  },
  {
    "id": 20,
    "name": "Innovspace Aero Zone",
    "badge": null,
    "rating": null,
    "area": "Sitra",
    "location": "Sitra, Coimbatore",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/ca291c0b3a6705a4426e19d2373e8f35c358acf7.webp",
      "https://img.cofynd.com/images/latest_images_2024/9ef9f46b99c9c463a52cf3a34cfd19d4816ab509.webp",
      "https://img.cofynd.com/images/latest_images_2024/767ff12a63a50eb480177ab2bfb22a982e30d1eb.webp",
      "https://img.cofynd.com/images/latest_images_2024/b6c78cd8f513e45d4984e24fa608232734065275.webp"
    ]
  },
  {
    "id": 21,
    "name": "Innovspace Tech Zone",
    "badge": null,
    "rating": null,
    "area": "Kalapatti",
    "location": "Kalapatti, Coimbatore",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/60bd16b4a2e269b0545165379d5771e7ce6fbc16.webp",
      "https://img.cofynd.com/images/latest_images_2024/acb375837501dd68623a1286054c2d3da0deba62.webp",
      "https://img.cofynd.com/images/latest_images_2024/816dd588001deb51600cbfa9338389cda420606b.webp",
      "https://img.cofynd.com/images/latest_images_2024/cb11f76606f160751a96f32d79a3c602aa476800.webp",
      "https://img.cofynd.com/images/latest_images_2024/b35b3a9997c5e276bedc86cd2f91de08dddc7820.webp",
      "https://img.cofynd.com/images/latest_images_2024/f02fddfcc48335881e80138038048a7e55ec73b9.webp"
    ]
  },
  {
    "id": 22,
    "name": "Betaspace",
    "badge": "Premium",
    "rating": null,
    "area": "Ram Nagar",
    "location": "Ram Nagar, Coimbatore",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/06a6358ac137df992702f735b5de03a447aebd9f.webp",
      "https://img.cofynd.com/images/latest_images_2024/a1b322a9f31188456e075a3497c7d990583eeff5.webp",
      "https://img.cofynd.com/images/latest_images_2024/2dd729efb048cba752aeeb2f069d92f3c3c8d3f0.webp",
      "https://img.cofynd.com/images/latest_images_2024/f465d6ad97424bab6c2e71a18478305feab52947.webp",
      "https://img.cofynd.com/images/latest_images_2024/381b20fe0a83a0aa68b727967a161d2e790e93c2.webp"
    ]
  },
  {
    "id": 23,
    "name": "Annur Tech Park",
    "badge": "Premium",
    "rating": null,
    "area": "Annur",
    "location": "Annur, Coimbatore",
    "price": "₹3,500",
    "period": "/ Month",
    "priceFormatted": "₹3,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/3950ca10b5b38b7d0f1d5b3799407c49ffc2fa64.webp",
      "https://img.cofynd.com/images/latest_images_2024/b325b03d72d66e910d8fd41ec3599d602c97924d.webp",
      "https://img.cofynd.com/images/latest_images_2024/ecaa6de3e4c59941657bf1bdf5820d2f649bc9ba.webp",
      "https://img.cofynd.com/images/latest_images_2024/2213c35f06aaece843252a4fa8c3e3d811649751.webp",
      "https://img.cofynd.com/images/latest_images_2024/83a215efff47a00d5bdf4ba8e956f2fd4b25ca27.webp",
      "https://img.cofynd.com/images/latest_images_2024/5b63f75035c7803a05e1de05352e31e9e38b4b9b.webp"
    ]
  },
  {
    "id": 24,
    "name": "Workov",
    "badge": null,
    "rating": null,
    "area": "Avinashi Road",
    "location": "Avinashi Road, Coimbatore",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8bdb3d751411865343daa240597563d528802265.webp",
      "https://img.cofynd.com/images/latest_images_2024/ac5970b3a0bb87f0798838fedf2c1e3dd511be01.webp",
      "https://img.cofynd.com/images/latest_images_2024/dfa26f85244c83b03604d9372281142d75a72a5a.webp"
    ]
  }
];

// Page 1 - featured block
export const featuredCoimbatoreOfficeCards = [
  {
    "id": 25,
    "name": "OneDesq",
    "badge": null,
    "rating": null,
    "area": "Induma Nagar",
    "location": "Induma Nagar, Coimbatore",
    "price": "₹7,499",
    "period": "/ Month",
    "priceFormatted": "₹7,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/18506d98b749ef623b5350d90be0b092aaf97c50.webp",
      "https://img.cofynd.com/images/latest_images_2024/df31234bbd1acf31aa7ecbda07bd792dc7cff9a5.webp",
      "https://img.cofynd.com/images/latest_images_2024/abc1e9193dbe9b62c4c6fc2771a9c7cfd0b4b108.webp",
      "https://img.cofynd.com/images/latest_images_2024/fe2b570052d5c5d68f56751634df7c265122233c.webp",
      "https://img.cofynd.com/images/latest_images_2024/3921116618b5683ac64467abfbd0678ba35de93e.webp",
      "https://img.cofynd.com/images/latest_images_2024/6998d197b3e5edb70ba98e37a1e489363363a4b8.webp"
    ]
  },
  {
    "id": 26,
    "name": "Code Base",
    "badge": "Special Offer",
    "rating": null,
    "area": "Cheran Ma Nagar",
    "location": "Cheran Ma Nagar, Coimbatore",
    "price": "₹4,499",
    "period": "/ Month",
    "priceFormatted": "₹4,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/7831cf420d818c0a73c479186e098eb583cbf65c.webp",
      "https://img.cofynd.com/images/latest_images_2024/50f48597185f0ec553568f015bde28e8bfe0ec70.webp",
      "https://img.cofynd.com/images/latest_images_2024/c76a55eeee8165c2ed055b0e2b9b783b38c436a2.webp",
      "https://img.cofynd.com/images/latest_images_2024/54eba71e4417e9966bd55e7d5c7d8de7a7d8bcff.webp",
      "https://img.cofynd.com/images/latest_images_2024/fb2212165aa091d674e31137081e08c3b4f3322e.webp",
      "https://img.cofynd.com/images/latest_images_2024/b9f4fd78bf65af6f6f47da05cdd8236c0e4a987d.webp"
    ]
  },
  {
    "id": 27,
    "name": "TSS",
    "badge": null,
    "rating": null,
    "area": "Tatabad",
    "location": "Tatabad, Coimbatore",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/08a73047fd1bb95117656303bde1d1b5838277d5.webp",
      "https://img.cofynd.com/images/latest_images_2024/e1361804a11af13bdeebc7d55c3866bc737b9edf.webp",
      "https://img.cofynd.com/images/latest_images_2024/847aa108218b6b006b19aada7a47c57a14706fe0.webp",
      "https://img.cofynd.com/images/latest_images_2024/91be1da93e795fdb1e976fab601293bc17e984de.webp",
      "https://img.cofynd.com/images/latest_images_2024/644ad4a4656c7932c59891affc41f4334d3d518f.webp"
    ]
  },
  {
    "id": 28,
    "name": "BlueDesk",
    "badge": null,
    "rating": null,
    "area": "Saravanampatti",
    "location": "Saravanampatti, Coimbatore",
    "price": "₹4,499",
    "period": "/ Month",
    "priceFormatted": "₹4,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/ae3479f811ad7061d78b131a083a1f2a7e728e4c.webp",
      "https://img.cofynd.com/images/latest_images_2024/7d2ceca8ba19f28ebe0f6526f7574eedbb075f44.webp",
      "https://img.cofynd.com/images/latest_images_2024/1c1d83c00820c38f0f44b5cb942862a54536551c.webp",
      "https://img.cofynd.com/images/latest_images_2024/7c376f1f0078900854626c51bea81f3b7139798c.webp",
      "https://img.cofynd.com/images/latest_images_2024/cf38bbb0ff7877c768ffbb27e3526e2b0fe7076f.webp",
      "https://img.cofynd.com/images/latest_images_2024/a12612be8396eb31a1a14119a4077ee736be908c.webp"
    ]
  },
  {
    "id": 29,
    "name": "Vaa Work",
    "badge": null,
    "rating": null,
    "area": "Avinashi Road",
    "location": "Avinashi Road, Coimbatore",
    "price": "₹5,499",
    "period": "/ Month",
    "priceFormatted": "₹5,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/30469662ddfe792a5906cfb8cfd6bf1efeb960ad.webp",
      "https://img.cofynd.com/images/latest_images_2024/5caddb543002187ec4269e7a46a7d6742e4c8141.webp",
      "https://img.cofynd.com/images/latest_images_2024/57e63f7056fb0da29a1182e71b13afa22959f7ac.webp",
      "https://img.cofynd.com/images/latest_images_2024/0c54a73ea764cbabe24ade48e46f75a928ae00f4.webp",
      "https://img.cofynd.com/images/latest_images_2024/c281e907f0d09a3a0e3150b7fc43523c297f8931.webp",
      "https://img.cofynd.com/images/latest_images_2024/e6c0417c617f551a29cf7639000b70d5ec243242.webp",
      "https://img.cofynd.com/images/latest_images_2024/3fd9ed4b15d9b4afe2d53b27e26130c8bf2835f6.webp",
      "https://img.cofynd.com/images/latest_images_2024/3abeb35553be5862a282658d45ffb944dfd6c584.webp",
      "https://img.cofynd.com/images/latest_images_2024/e3afbcdb11b3c72b9dd25fcadee585d747ee489d.webp",
      "https://img.cofynd.com/images/latest_images_2024/93e084691069aa9e72da4a86a5605d5f02ed7bce.webp"
    ]
  },
  {
    "id": 30,
    "name": "Desq Workspace",
    "badge": null,
    "rating": null,
    "area": "Singanallur",
    "location": "Singanallur, Coimbatore",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/b6d3d527aa591fd1dd739d6055b2d0436b0dedde.webp",
      "https://img.cofynd.com/images/latest_images_2024/2e991d02fc6dd069483063549670b928c277764d.webp",
      "https://img.cofynd.com/images/latest_images_2024/14e2f2a2d02f1dd152c92130b37bef9a06979da8.webp",
      "https://img.cofynd.com/images/latest_images_2024/cd1e65a8c93af4b1129e8a5cb7d97b00501267bd.webp",
      "https://img.cofynd.com/images/latest_images_2024/394893959c4c3df5a5fba39073e0158b2e84a365.webp"
    ]
  }
];

// Aliases for compatibility
export const coimbatoreAreas = coimbatoreNeighborhoods;
export const coimbatoreSpaces = coimbatoreOfficeCards;
export const areas = coimbatoreNeighborhoods;
export const spaces = coimbatoreOfficeCards;

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

// Pages 2-4 have no extra listings (all real Coimbatore listings fit on page 1)
export const pageTwoCoimbatoreOfficeCards = [];
export const pageTwoMoreCoimbatoreOfficeCards = [];
export const pageTwoFinalCoimbatoreOfficeCards = [];
export const pageTwoFeaturedCoimbatoreOfficeCards = [];
export const pageThreeCoimbatoreOfficeCards = [];
export const pageThreeMoreCoimbatoreOfficeCards = [];
export const pageThreeFinalCoimbatoreOfficeCards = [];
export const pageThreeFeaturedCoimbatoreOfficeCards = [];
export const pageFourCoimbatoreOfficeCards = [];

// Extra cards shown only when an area filter is clicked (none needed - every listing is already in the pages above)
export const areaExtraOfficeCards = {};

// Similar spaces on the detail page are picked from the same area of the listings above
export const similarCoimbatoreOfficeCards = [];

// ============================================================================
// Comprehensive Coimbatore Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allCoimbatoreOfficeCards = [
  ...coimbatoreOfficeCards,
  ...moreCoimbatoreOfficeCards,
  ...finalCoimbatoreOfficeCards,
  ...featuredCoimbatoreOfficeCards,
  ...pageTwoCoimbatoreOfficeCards,
  ...pageTwoMoreCoimbatoreOfficeCards,
  ...pageTwoFinalCoimbatoreOfficeCards,
  ...pageTwoFeaturedCoimbatoreOfficeCards,
  ...pageThreeCoimbatoreOfficeCards,
  ...pageThreeMoreCoimbatoreOfficeCards,
  ...pageThreeFinalCoimbatoreOfficeCards,
  ...pageThreeFeaturedCoimbatoreOfficeCards,
  ...pageFourCoimbatoreOfficeCards,
  ...similarCoimbatoreOfficeCards,
  ...Object.values(areaExtraOfficeCards).flat()
];

/**
 * Find a Coimbatore office card by slug (or legacy numeric id)
 * @param {string|number} id
 * @returns {object|null}
 */
export const getCoimbatoreOfficeCardById = (id) => findOfficeBySlug(allCoimbatoreOfficeCards, id, "coimbatore");
export const getCoimbatoreOfficeSlug = (space) => officePath(allCoimbatoreOfficeCards, space, "coimbatore");

// ============================================================================
// Top Coworking Locations in Coimbatore (Explore by Neighborhood)
// ============================================================================
export const topCoimbatoreCoworkingLocations = [
  {
    "id": "loc-avinashi-road",
    "name": "Avinashi Road",
    "title": "Coworking Space in Avinashi Road",
    "image": "https://img.cofynd.com/images/latest_images_2024/cc27a5252890fdc7a4cce4bc1a953bdf0415cb74.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-saravanampatti",
    "name": "Saravanampatti",
    "title": "Coworking Space in Saravanampatti",
    "image": "https://img.cofynd.com/images/latest_images_2024/4b996ede04baceaae39b9bea67562ea1210b8787.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-cheran-ma-nagar",
    "name": "Cheran Ma Nagar",
    "title": "Coworking Space in Cheran Ma Nagar",
    "image": "https://img.cofynd.com/images/latest_images_2024/15e7a6f455d3a5cd858923f743d88ec8cf4a4d5f.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-kalapatti",
    "name": "Kalapatti",
    "title": "Coworking Space in Kalapatti",
    "image": "https://img.cofynd.com/images/latest_images_2024/5fbe06e88edd335f7c7bf8fb01cce23cc2085fa4.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-peelamedu",
    "name": "Peelamedu",
    "title": "Coworking Space in Peelamedu",
    "image": "https://img.cofynd.com/images/latest_images_2024/39ae2319b3f7634b5386c5c95df21214b241396d.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-tatabad",
    "name": "Tatabad",
    "title": "Coworking Space in Tatabad",
    "image": "https://img.cofynd.com/images/latest_images_2024/65cd7026ede337858139cf047107b5616b012adc.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-100-feet-road",
    "name": "100 Feet Road",
    "title": "Coworking Space in 100 Feet Road",
    "image": "https://img.cofynd.com/images/latest_images_2024/6dee16f32b51dc5f2ed36b5d85bdf17ec9688584.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-annur",
    "name": "Annur",
    "title": "Coworking Space in Annur",
    "image": "https://img.cofynd.com/images/latest_images_2024/3950ca10b5b38b7d0f1d5b3799407c49ffc2fa64.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-gandhipuram",
    "name": "Gandhipuram",
    "title": "Coworking Space in Gandhipuram",
    "image": "https://img.cofynd.com/images/latest_images_2024/5b93500652001c2a88a64ea54bb5978b6a463179.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-induma-nagar",
    "name": "Induma Nagar",
    "title": "Coworking Space in Induma Nagar",
    "image": "https://img.cofynd.com/images/latest_images_2024/18506d98b749ef623b5350d90be0b092aaf97c50.webp",
    "ctaText": "Explore Spaces"
  }
];
