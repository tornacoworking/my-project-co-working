import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Surat, ordered area by area.
// Space list, areas, ratings, prices and photos come from the supplied data (Coworking Cafe, Office Hub, CoFynd and myHQ
// listings of each centre). Google place IDs were converted to standard Google Maps links (maps.google.com/?cid=...).
// Spaces with no genuine photos found were left out. Checked 17 Nov 2026.

const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const suratCoworking = [
  {
    id: 50,
    name: 'WorkSpaceCo. Skyline',
    badge: 'Top Rated',
    rating: 4.8,
    area: 'Adajan',
    location: 'Adajan, Surat',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('3165010408710803835'),
    images: [
      'https://cdn.coworkingcafe.com:443/images/CDFFA1D5-89CB-410B-BE44-E1ABD251B7FC/82515.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/71082A7D-93C1-4475-8E68-F7CF6AE908B8/82515.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/A1A71E9F-0F43-4783-A28D-304AAA16A502/82515.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/895AE926-2EBA-4BCE-A2B8-B7953868AC97/82515.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/F819C9C5-CE52-4E19-9964-871081B192E9/82515.jpg?height=675'
    ]
  },
  {
    id: 51,
    name: 'WorkSpaceCo. Home - Vesu',
    badge: 'Popular',
    rating: 4.8,
    area: 'Vesu',
    location: 'Vesu, Surat',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('12850435920797013711'),
    images: [
      'https://cdn.coworkingcafe.com:443/images/6C6293BA-1E4A-475A-92F0-C1849877435B/82514.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/0C062A35-1759-4A8B-82F2-702430E100D1/82514.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/36679304-B5FC-4A96-BCCA-5B551612E0E7/82514.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/0654B912-D9FE-4DF3-8239-86E2BBAC1914/82514.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/C4A575CC-B1D6-4729-A6F2-BC96A854ADF6/82514.jpg?height=675'
    ]
  },
  {
    id: 52,
    name: 'WorkSpaceCo. Citylight',
    badge: 'Verified',
    rating: 4.6,
    area: 'Athwa',
    location: 'Athwa, Surat',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('17671929780127302364'),
    images: [
      'https://cdn.coworkingcafe.com:443/images/C9439D5A-0CE3-4F79-BF34-D58E41044942/82516.JPG?height=675',
      'https://cdn.coworkingcafe.com:443/images/368A907D-8AE0-49CE-8031-F951A15AFB90/82516.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/BA44D5A3-FA3F-4498-BA42-94D169A35083/82516.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/C43EE6B4-6761-4C30-8B1D-569DC995D7FE/82516.JPG?height=675',
      'https://cdn.coworkingcafe.com:443/images/4B531BAA-37F1-4DC7-902C-93129DD81CF2/82516.JPG?height=675'
    ]
  },
  {
    id: 53,
    name: 'WorkSpaceCo. - The Junomoneta Tower',
    badge: 'Verified',
    rating: 4.6,
    area: 'Pal',
    location: 'Pal, Surat',
    address: '1806 to 1815, 18th Floor, Junomoneta Tower, next to Rajhans Cinemas, Adajan Pal, Surat',
    price: '₹8,000',
    period: '/ Month',
    priceFormatted: '₹8,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('2092154415369854261'),
    images: [
      'https://cdn.coworkingcafe.com:443/images/D4C951FC-AADC-41CC-B9B2-8AA644DE1D6A/87122.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/6AA081FF-80CF-478B-ADB3-844DADBD97C8/87122.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/F0B8B752-B07E-401C-AF10-4D3B6B4654AB/87122.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/D9B6EB1C-C9BB-4DB7-BB14-9CD2B6344165/87122.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/9666AB26-2323-4BCF-931A-38FEBD88A0CE/87122.jpg?height=675'
    ]
  },
  {
    id: 58,
    name: 'The Address - Velocity Business Hub',
    badge: 'Verified',
    rating: 4.6,
    area: 'Adajan',
    location: 'Adajan, Surat',
    address: '12th and 13th Floor, Velocity Business Hub, LP Savani Road, near Madhuvan Circle, Adajan Gam, Adajan, Surat 395009',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('134712489903277225'),
    images: [
      'https://cdn.coworkingcafe.com:443/images/A93CEBBE-1399-4396-A09C-4C2008649754/81705.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/C4A775A2-3AD8-44F2-8B43-45759986955A/81705.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/1CA75000-76FC-453B-9875-C8E2C7C0BF72/81705.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/55F4CE6A-19CB-484F-A58D-F06834D2E614/81705.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/5AF51D73-EC3B-4F18-A97B-C0681D3671AB/81705.jpg?height=675'
    ]
  },
  {
    id: 59,
    name: 'Space Lounge Coworking Space',
    badge: 'Verified',
    rating: 4.6,
    area: 'Majura Gate',
    location: 'Majura Gate, Surat',
    address: 'A-4, Vishwakarma Chambers, behind International Trade Centre Building, Majura Gate, Surat 395002',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13441907742919623112'),
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/space-lounge-majuragate/7bmfzf.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/space-lounge-majuragate/c6dh2b.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/space-lounge-majuragate/nvtcp5.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/space-lounge-majuragate/w7nhxb.jpg'
    ]
  },
  {
    id: 61,
    name: 'iKoVerk - Nanpura',
    badge: 'Verified',
    rating: 3.9,
    area: 'Nanpura',
    location: 'Nanpura, Surat',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9620781222515806738'),
    images: [
      'https://cdn.coworkingcafe.com:443/images/D37C1066-0D68-4BA2-8112-C69F937CB4F8/78630.JPG?height=675',
      'https://cdn.coworkingcafe.com:443/images/4F1C4F4C-8C95-4A03-9646-0DE42B153BE2/78630.JPG?height=675',
      'https://cdn.coworkingcafe.com:443/images/924470BA-C2EF-4F08-96D3-C28B1F60A8F0/78630.JPG?height=675',
      'https://cdn.coworkingcafe.com:443/images/851755B5-F66A-40C0-9422-26E530923D7B/78630.JPG?height=675',
      'https://cdn.coworkingcafe.com:443/images/B57A95CD-70C6-4E28-8EF7-B1BACCC6FB58/78630.JPG?height=675'
    ]
  },
  {
    id: 62,
    name: 'iKoVerk - Althan',
    badge: 'New Listing',
    rating: null,
    area: 'Althan',
    location: 'Althan, Surat',
    address: '10th Floor, Titaanium Business, Bhimrad Road, Althan, Surat 395017',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=iKoVerk+Althan+Surat',
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51195/Serviced-Office-%28Classic%29-Gujarat-Surat-Titaanium-Business-Bhimrad-Rd-Althan-unnamed-2.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51195/Serviced-Office-%28Classic%29-Gujarat-Surat-Titaanium-Business-Bhimrad-Rd-Althan-Screenshot-2025-05-20-155314.png',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51195/Serviced-Office-%28Classic%29-Gujarat-Surat-Titaanium-Business-Bhimrad-Rd-Althan-2024-07-25.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51195/Serviced-Office-%28Classic%29-Gujarat-Surat-Titaanium-Business-Bhimrad-Rd-Althan-2024-07-25-1.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51195/Serviced-Office-%28Classic%29-Gujarat-Surat-Titaanium-Business-Bhimrad-Rd-Althan-2024-07-25-3.webp'
    ]
  },
  {
    id: 63,
    name: 'iKoVerk - Piplod',
    badge: 'New Listing',
    rating: null,
    area: 'Piplod',
    location: 'Piplod, Surat',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=iKoVerk+Piplod+Surat',
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51197/Serviced-Office-%28Classic%29-Gujarat-Surat-Altair-Besides-Vijay-Sales-Piplod-Dumas-Road-Gaurav-Path-unnamed-1.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51197/Serviced-Office-%28Classic%29-Gujarat-Surat-Altair-Besides-Vijay-Sales-Piplod-Dumas-Road-Gaurav-Path-2024-07-25-2.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51197/Serviced-Office-%28Classic%29-Gujarat-Surat-Altair-Besides-Vijay-Sales-Piplod-Dumas-Road-Gaurav-Path-2024-07-25-3.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51197/Serviced-Office-%28Classic%29-Gujarat-Surat-Altair-Besides-Vijay-Sales-Piplod-Dumas-Road-Gaurav-Path-2024-07-25.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51197/Serviced-Office-%28Classic%29-Gujarat-Surat-Altair-Besides-Vijay-Sales-Piplod-Dumas-Road-Gaurav-Path-unnamed-2.webp'
    ]
  },
  {
    id: 64,
    name: 'Wibes Coworking Space',
    badge: 'Popular',
    rating: 4.8,
    area: 'Begampura, Ring Road',
    location: 'Begampura, Ring Road, Surat',
    address: '9th Floor, APMC Krushi Bazaar, 901 to 910, Ring Road, beside North Extension, Sahara Darwaja, Begampura, Surat 395003',
    price: '₹8,900',
    period: '/ Month',
    priceFormatted: '₹8,900 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('8261420756567980510'),
    images: [
      'https://img.cofynd.com/images/original/057c1bebd1932981735d877fcc23fdb8e1165093.jpg',
      'https://img.cofynd.com/images/original/2d8681c95e0939ef91bbbcc7506507adcd8e66d4.jpg',
      'https://img.cofynd.com/images/original/9aa1f7e15be6267b9a55fdd0fea6e10a56f42cc2.jpg'
    ]
  },
  {
    id: 65,
    name: 'Wibes Coworking - Adajan Pal',
    badge: 'New Listing',
    rating: null,
    area: 'Pal',
    location: 'Pal, Surat',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Wibes+Coworking+Unity+Corner+Pal+Surat',
    images: [
      'https://cdn.coworkingcafe.com:443/images/B9054D11-6030-427A-BA58-6528BDE83FD0/1.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/2C3D2188-560F-4DA9-B2D4-3223A00D66F3/2.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/DE21B977-0A3F-476D-B9DA-9CDA738BED3B/3.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/CD952B46-5CDC-4FC1-AE85-EC446EFF3871/4.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/20F6739E-1124-4120-81F2-238E193B9B48/5.jpg?height=675'
    ]
  },
  {
    id: 66,
    name: 'HEYKN Coworking',
    badge: 'Budget Friendly',
    rating: 5.0,
    area: 'Nanpura',
    location: 'Nanpura, Surat',
    address: 'River Palace, A-35, near Bahumali Building, opp. Ramji Temple, Kharwawad, Nanpura, Surat 395001',
    price: '₹3,500',
    period: '/ Month',
    priceFormatted: '₹3,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('15802436840697384422'),
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/heykn-coworking-the-junomoneta-tower/jaqafa.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/heykn-coworking-the-junomoneta-tower/jnzh79.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/heykn-coworking-the-junomoneta-tower/ucss3w.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/heykn-coworking-the-junomoneta-tower/zqf9ys.jpg'
    ]
  },
  {
    id: 68,
    name: 'Kommune Coworking Space',
    badge: 'Verified',
    rating: 5.0,
    area: 'Vesu',
    location: 'Vesu, Surat',
    address: 'Avadh Arena, 249-52, VIP Road, Vesu, Surat 395007',
    price: '₹7,000',
    period: '/ Month',
    priceFormatted: '₹7,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kommune+Coworking+Vesu+Surat',
    images: [
      'https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/6cdd8498-6f10-45f5-3012-287c49c96800/w=1200',
      'https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/42123734-b24b-48b3-1ed7-f0178522d700/w=1200',
      'https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/dd634b2a-ff59-45cb-6084-75f62c3e0900/w=1200'
    ]
  },
  {
    id: 69,
    name: 'Excluzo - Union Heights',
    badge: 'New Listing',
    rating: null,
    area: 'Vesu',
    location: 'Vesu, Surat',
    address: 'A Wing, 202-203, Union Heights, Rahulraj Mall Lane, Maharana Pratap Road, Vesu, Surat 395007',
    price: '₹9,000',
    period: '/ Month',
    priceFormatted: '₹9,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Excluzo+Union+Heights+Vesu+Surat',
    images: [
      'https://cdn.coworkingcafe.com:443/images/8327815B-3437-4E97-9D63-A6A0B9FC40C2/76687.JPG?height=675',
      'https://cdn.coworkingcafe.com:443/images/A9D0571D-45B5-4F84-B72F-B0AEFCE6D19C/76687.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/429DCF13-7D8A-44E4-BA29-AC780EBC040E/76687.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/CCE08A43-07B7-4753-BC12-B528F82B5433/76687.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/E80A4DC1-53F7-4C47-BB15-32D25596C9D9/76687.jpg?height=675'
    ]
  },
  {
    id: 71,
    name: 'Provyz Coworking - SNS Atria',
    badge: 'New Listing',
    rating: null,
    area: 'Vesu',
    location: 'Vesu, Surat',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Provyz+Coworking+SNS+Atria+Vesu+Surat',
    images: [
      'https://cdn.coworkingcafe.com:443/images/286FE613-563B-4AA1-9ED9-101845D9859A/79914.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/631E2838-AD8D-472C-81A7-37E27EFAEC4F/79914.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/8FC518F8-067F-4B12-9E5F-18220AAB259C/79914.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/1B558CCD-1070-45F5-947D-628B7DEC79CB/79914.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/5D9E1873-FA65-4C46-A558-F89077B11EF8/79914.jpg?height=675'
    ]
  },
  {
    id: 74,
    name: 'Min Max Coworx',
    badge: 'New Listing',
    rating: null,
    area: 'Vesu',
    location: 'Vesu, Surat',
    address: '203-A, Trinity Cyggnus, University Road, above Maruti Suzuki Nexa showroom, Someshwara Chokadi, Vesu, Surat 395007',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Min+Max+Coworx+Vesu+Surat',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/min-max-coworx-vesu/78f4rx.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/min-max-coworx-vesu/c6e3df.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/min-max-coworx-vesu/g8x2e3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/min-max-coworx-vesu/kt5em3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/min-max-coworx-vesu/rt5uhj.jpg'
    ]
  },
  {
    id: 75,
    name: 'Bigbull Workspace',
    badge: 'New Listing',
    rating: null,
    area: 'Vesu',
    location: 'Vesu, Surat',
    address: '807, Homeland City, Piplod, Surat 394210',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bigbull+Workspace+Vesu+Surat',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/bigbull-workspace-piplod/2x54ha.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/bigbull-workspace-piplod/6v3tw5.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/bigbull-workspace-piplod/ankqrg.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/bigbull-workspace-piplod/wmdemb.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/bigbull-workspace-piplod/zw6yzx.jpg'
    ]
  },
  {
    id: 76,
    name: 'COSTART Workspaces',
    badge: 'New Listing',
    rating: null,
    area: 'Vesu',
    location: 'Vesu, Surat',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=COSTART+workspaces+Vesu+Surat',
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51528/Serviced-Office-%28Classic%29-Gujarat-Vesu-Surat-Vip-Road-Ward-2-Screenshot-2025-05-26-114419.png',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51528/Serviced-Office-%28Classic%29-GJ-Surat-ward-2-Vip-Road-image4.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51528/Serviced-Office-%28Classic%29-Gujarat-Vesu-Surat-Vip-Road-Ward-2-IMG-20220702-WA0029.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51528/Serviced-Office-%28Classic%29-Gujarat-Vesu-Surat-Vip-Road-Ward-2-Screenshot-2025-05-26-114432.png',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51528/Serviced-Office-%28Classic%29-GJ-Surat-ward-2-Vip-Road-image1.jpg'
    ]
  },
  {
    id: 78,
    name: 'Careeriaa Co-Working - Joyos Hubtown',
    badge: 'New Listing',
    rating: null,
    area: 'Adajan',
    location: 'Adajan, Surat',
    address: '701/702, 7th Floor, Joyos Hubtown, Bus Port, Adajan, Surat 395009',
    price: '₹7,000',
    period: '/ Month',
    priceFormatted: '₹7,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Careeriaa+Co-Working+Joyos+Hubtown+Adajan+Surat',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/careeriaa-adajan/4rcetf.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/careeriaa-adajan/udsmqv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/careeriaa-adajan/vn43te.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/careeriaa-adajan/zhacr6.jpg'
    ]
  },
  {
    id: 80,
    name: 'Sai WorkSpace',
    badge: 'New Listing',
    rating: null,
    area: 'Adajan',
    location: 'Adajan, Surat',
    address: 'Deepa Complex, beside Bajaj Showroom, Krishna Nagar Society, Kalpana Society Part-2, Choksi Wadi, Adajan, Surat 395009',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sai+WorkSpace+Adajan+Surat',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/sai-workspace-adajan/228w4x.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/sai-workspace-adajan/pbfypm.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/sai-workspace-adajan/pd9u46.jpg'
    ]
  },
  {
    id: 90,
    name: 'Mexus Cowork Space',
    badge: 'New Listing',
    rating: null,
    area: 'Nanpura',
    location: 'Nanpura, Surat',
    address: '106, Shree Apartment, Adajan Road, beside Chamber of Commerce, Nanpura, Surat 395001',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mexus+Cowork+Space+Nanpura+Surat',
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52230/Serviced-Office-%28Classic%29-Gujarat-Surat-Adajan-Rd-Nanpura-Untitled-design-3.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52230/Serviced-Office-%28Classic%29-Gujarat-Surat-Adajan-Rd-Nanpura-Untitled-design-5.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52230/Serviced-Office-%28Classic%29-Gujarat-Surat-Adajan-Rd-Nanpura-2022-01-27.webp'
    ]
  },
  {
    id: 92,
    name: 'SharingDesk',
    badge: 'New Listing',
    rating: null,
    area: 'Katargam',
    location: 'Katargam, Surat',
    address: '402, Avalon The Business Hub, Aamba Talavadi Road, Katargam, Surat 395004',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=SharingDesk+Katargam+Surat',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/sharingdesk-katargam/95hyq3.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/sharingdesk-katargam/gyb75e.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/sharingdesk-katargam/p7mrnw.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/sharingdesk-katargam/pp4ene.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/sharingdesk-katargam/vh992v.jpg'
    ]
  },
  {
    id: 96,
    name: 'Desk26',
    badge: 'New Listing',
    rating: null,
    area: 'Palanpur',
    location: 'Palanpur, Surat',
    address: 'Green Palladia, 346-348 and 446-448, opp. Raj World Road, near Gaurav Path Road, Palanpur, Surat 395009',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Desk26+coworking+Palanpur+Surat',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/desk26-palanpur/3dfzra.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/desk26-palanpur/3e6jrz.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/desk26-palanpur/sedjb2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/desk26-palanpur/w3gzt4.jpg'
    ]
  },
  {
    id: 97,
    name: 'Hallstatt Coworking Space',
    badge: 'New Listing',
    rating: null,
    area: 'Amroli',
    location: 'Amroli, Surat',
    address: 'Devi Ashish Society, 5 to 8, Amroli Village Road, near Jain Derasar, Amroli Char Rasta, Amroli, Surat 394107',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Hallstatt+Coworking+Amroli+Surat',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/hallstatt-sns-atria/9qtgx6.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/hallstatt-sns-atria/h5zfya.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/hallstatt-sns-atria/h6yf2a.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/hallstatt-sns-atria/nza522.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/hallstatt-sns-atria/u7nt4e.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/hallstatt-sns-atria/zy7adc.jpg'
    ]
  },
  {
    id: 98,
    name: 'IA Spaces - Surana Supremus',
    badge: 'New Listing',
    rating: null,
    area: 'Udhna-Magdalla Road',
    location: 'Udhna-Magdalla Road, Surat',
    address: '4th Floor, Surana Supremus, Udhna-Magdalla Road, Rundh, Vesu, Surat 395007',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=IA+Spaces+Surana+Supremus+Surat',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/ia-spaces-by-india-accelerator-surana-supremus/776kry.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/ia-spaces-by-india-accelerator-surana-supremus/kdzgqv.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/ia-spaces-by-india-accelerator-surana-supremus/kwptrt.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/ia-spaces-by-india-accelerator-surana-supremus/mc9a74.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/ia-spaces-by-india-accelerator-surana-supremus/pttdjf.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/ia-spaces-by-india-accelerator-surana-supremus/re8tmk.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/ia-spaces-by-india-accelerator-surana-supremus/stsxag.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/ia-spaces-by-india-accelerator-surana-supremus/v32mgn.jpg'
    ]
  }
];

// Spaces with no genuine photos found are left out of the site entirely.
// Operating, but no genuine photos of the space published yet.
export const suratCoworkingPendingPhotos = [];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const suratSpaces = suratCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const suratNeighborhoods = Object.entries(
  suratSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const suratOfficeCards = suratSpaces.slice(0, 8);
export const moreSuratOfficeCards = suratSpaces.slice(8, 16);
export const finalSuratOfficeCards = suratSpaces.slice(16, 24);
export const featuredSuratOfficeCards = suratSpaces.slice(24);

export const suratAreas = suratNeighborhoods;

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India',
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

// ============================================================================
// Surat Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allSuratOfficeCards = suratSpaces;

export const getSuratOfficeCardById = (id) => findOfficeBySlug(allSuratOfficeCards, id, "surat");
export const getSuratOfficeSlug = (space) => officePath(allSuratOfficeCards, space, "surat");

// ============================================================================
// Top Coworking Locations in Surat (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topSuratCoworkingLocations = suratNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: suratSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
