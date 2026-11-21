import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Chhatrapati Sambhajinagar (Aurangabad), ordered area by area.
// Every image URL comes from that specific space's own listing/website photos
// (myHQ, Justdial business catalogue, Office Hub, OfficeSpace.com, Instant Offices,
// Coworker.com, operator website). No stock, fallback or other-space photos are used.
// Compiled: 4 Nov 2026. Prices are listed/quoted starting prices and can change.

const JD = 'https://images.jdmagicbox.com/';
const MYHQ = 'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1920/f_auto/';

export const chhatrapatiSambhajinagarCoworking = [
  // ───────────── Mondha / Rokadiya Hanuman Colony / Seven Hills ─────────────
  {
    id: 1,
    name: 'Network Coworking',
    badge: 'Budget',
    rating: 5.0,
    area: 'Mondha',
    location: 'Mondha, Chhatrapati Sambhajinagar',
    address: '311, Yash Tower, Rokadiya Hanuman Colony, Shivaji High School Road, Chhatrapati Sambhajinagar, Maharashtra 431001',
    price: '₹399',
    period: '/ Day',
    priceFormatted: '₹399 / Day',
    ctaText: 'Get Quote',
    images: [
      'https://networkcoworking.net/web/image/1287-f2e91bf3/6.webp',
      'https://networkcoworking.net/web/image/1288-8b3b1de4/4.webp',
      JD + 'comp/aurangabad-maharashtra/e4/9999px240.x240.250826163719.v3e4/catalogue/network-coworking-banjara-colony-aurangabad-maharashtra-coworking-space-on-rent-tdlwu9j22l.jpg',
      JD + 'comp/aurangabad-maharashtra/e4/9999px240.x240.250826163719.v3e4/catalogue/network-coworking-banjara-colony-aurangabad-maharashtra-coworking-space-on-rent-omjtm7xsx0.jpg',
      JD + 'comp/aurangabad-maharashtra/e4/9999px240.x240.250826163719.v3e4/catalogue/network-coworking-banjara-colony-aurangabad-maharashtra-coworking-space-on-rent-jyx8r20ynd.jpg',
      JD + 'comp/aurangabad-maharashtra/e4/9999px240.x240.250826163719.v3e4/catalogue/network-coworking-banjara-colony-aurangabad-maharashtra-coworking-space-on-rent-9k7razjz56.jpg'
    ]
  },
  {
    id: 2,
    name: 'SCALE Coworking – Seven Hills',
    badge: 'Premium',
    rating: 5.0,
    area: 'Seven Hills',
    location: 'Seven Hills, Mondha, Chhatrapati Sambhajinagar',
    address: '301, Seven Hills, MGM Rd, beside HP petrol pump, Venkatesh Nagar, Chhatrapati Sambhajinagar, Maharashtra 431001',
    price: '₹4,500',
    period: '/ Month',
    priceFormatted: '₹4,500 / Month',
    ctaText: 'Get Quote',
    images: [
      MYHQ + 'workspaces/scale-coworking-scale/4awp6y.jpg',
      MYHQ + 'workspaces/scale-coworking-scale/aps3t2.jpg',
      JD + 'comp/aurangabad-maharashtra/z5/9999px240.x240.251211122059.b5z5/catalogue/scale-coworking-seven-hill-aurangabad-maharashtra-coworking-space-on-rent-626e1g6upj.jpg',
      JD + 'comp/aurangabad-maharashtra/z5/9999px240.x240.251211122059.b5z5/catalogue/scale-coworking-seven-hill-aurangabad-maharashtra-coworking-space-on-rent-ngxj0eqfog.jpg',
      JD + 'comp/aurangabad-maharashtra/z5/9999px240.x240.251211122059.b5z5/catalogue/scale-coworking-seven-hill-aurangabad-maharashtra-coworking-space-on-rent-99czg29bll.jpg',
      JD + 'comp/aurangabad-maharashtra/z5/9999px240.x240.251211122059.b5z5/catalogue/scale-coworking-seven-hill-aurangabad-maharashtra-coworking-space-on-rent-8sxpmpdqog.jpg'
    ]
  },

  // ───────────── Chikalthana / Prozone Road ─────────────
  {
    id: 3,
    name: 'Absolute CoSpace',
    badge: 'Popular',
    rating: 5.0,
    area: 'Chikalthana',
    location: 'Chikalthana, Chhatrapati Sambhajinagar',
    address: 'Office 217, 2nd Floor, Suvidhi Signature, Prozone Road, Chikalthana, Chhatrapati Sambhajinagar, Maharashtra 431003',
    price: '₹4,000',
    period: '/ Month',
    priceFormatted: '₹4,000 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://assets.instantoffices.com/image/upload/f_webp,w_3840/v1790234641/TIG/Locations/9e09a8f8-8f3f-4df8-8219-5776a60d1ab3/9bb3d03c-b172-4de6-8005-693d3ee731e7.webp',
      'https://assets.instantoffices.com/image/upload/f_webp,w_3840/v1783585031/TIG/Locations/1982a98d-d56b-4fd0-ab52-2e435df65af7/615f034c-b6ff-4d41-9025-a93cf2025c8b.webp'
    ]
  },
  {
    id: 4,
    name: 'SCALE Coworking – Golden City Center',
    badge: 'Premium',
    rating: null,
    area: 'Chikalthana',
    location: 'Chikalthana, Chhatrapati Sambhajinagar',
    // Older SCALE address — confirm it is still operating
    address: '213, Golden City Center (GCC), behind Prozone Mall, Chikalthana, Chhatrapati Sambhajinagar, Maharashtra',
    price: '₹4,500',
    period: '/ Month',
    priceFormatted: '₹4,500 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://coworker.imgix.net/photos/india/aurangabad/scale/main.jpeg?w=1200&q=90&auto=format,compress',
      'https://coworker.imgix.net/photos/india/aurangabad/scale/1.jpeg?w=1200&q=90&auto=format,compress',
      'https://coworker.imgix.net/photos/india/aurangabad/scale/2.jpeg?w=1200&q=90&auto=format,compress',
      'https://coworker.imgix.net/photos/india/aurangabad/scale/3.jpeg?w=1200&q=90&auto=format,compress',
      'https://coworker.imgix.net/photos/india/aurangabad/scale/4.jpeg?w=1200&q=90&auto=format,compress',
      'https://coworker.imgix.net/photos/india/aurangabad/scale/5.jpeg?w=1200&q=90&auto=format,compress'
    ]
  },

  // ───────────── MIDC Chikalthana (opp. Airport) ─────────────
  {
    id: 5,
    name: 'Regus – Khinvasara Headquarters',
    badge: 'Premium',
    rating: null,
    area: 'MIDC Chikalthana',
    location: 'MIDC Chikalthana, Chhatrapati Sambhajinagar',
    address: 'Plot No. 16, MIDC Chikalthana, Opp. Airport, Chhatrapati Sambhajinagar, Maharashtra 431006',
    price: '₹7,401',
    period: '/ Month',
    priceFormatted: '₹7,401 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1200,fo-auto/https://dr3h7ptpe31k5.cloudfront.net/Assets/images/54286/-Maharashtra-Aurangabad-Plot-No16-Midc-Chikalthana-Opp-Airportkhinvasara-Headquarter-4123569.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1200,fo-auto/https://dr3h7ptpe31k5.cloudfront.net/Assets/images/54286/-Maharashtra-Aurangabad-Plot-No16-Midc-Chikalthana-Opp-Airportkhinvasara-Headquarter-4123571.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1200,fo-auto/https://dr3h7ptpe31k5.cloudfront.net/Assets/images/54286/-Maharashtra-Aurangabad-Plot-No16-Midc-Chikalthana-Opp-Airportkhinvasara-Headquarter-4123573.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1200,fo-auto/https://dr3h7ptpe31k5.cloudfront.net/Assets/images/54286/-Maharashtra-Aurangabad-Plot-No16-Midc-Chikalthana-Opp-Airportkhinvasara-Headquarter-4123574.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1200,fo-auto/https://dr3h7ptpe31k5.cloudfront.net/Assets/images/54286/-Maharashtra-Aurangabad-Plot-No16-Midc-Chikalthana-Opp-Airportkhinvasara-Headquarter-4123575.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1200,fo-auto/https://dr3h7ptpe31k5.cloudfront.net/Assets/images/54286/-Maharashtra-Aurangabad-Plot-No16-Midc-Chikalthana-Opp-Airportkhinvasara-Headquarter-4123576.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1200,fo-auto/https://dr3h7ptpe31k5.cloudfront.net/Assets/images/54286/-Maharashtra-Aurangabad-Plot-No16-Midc-Chikalthana-Opp-Airportkhinvasara-Headquarter-4123577.jpg'
    ]
  },

  // ───────────── Beed Bypass Road (Gadia Vihar) ─────────────
  {
    id: 6,
    name: 'Wabi Sabi Coworking',
    badge: 'Popular',
    rating: 4.4,
    area: 'Beed Bypass Road',
    location: 'Gadia Vihar, Beed Bypass Road, Chhatrapati Sambhajinagar',
    address: 'Beed Bypass Rd, opp. Bank of Baroda, near Maske Petrol Pump, beside Maru Plaza, Gadia Vihar, Chhatrapati Sambhajinagar, Maharashtra 431005',
    price: '₹6,000',
    period: '/ Month',
    priceFormatted: '₹6,000 / Month',
    ctaText: 'Get Quote',
    images: [
      MYHQ + 'workspaces/wabi-sabi-gadiavihar/my7796.jpg',
      MYHQ + 'workspaces/wabi-sabi-gadiavihar/5stdht.jpg',
      MYHQ + 'workspaces/wabi-sabi-gadiavihar/kcgajy.jpg',
      MYHQ + 'workspaces/wabi-sabi-gadiavihar/8au65r.jpg',
      'https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/5ec1690e-ad61-474a-1386-5b4c99568b00/public',
      'https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/78785662-34cf-4480-e719-0488554a8300/public',
      'https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/010d7bfd-7ed2-4f2f-50da-6d3f31bce000/public'
    ]
  },

  // ───────────── MIDC / Paithan Road (Silk Mill Colony) ─────────────
  {
    id: 7,
    name: 'Shed#2 Coworking',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'MIDC Paithan Road',
    location: 'MIDC, Paithan Road, Chhatrapati Sambhajinagar',
    address: 'Beed Bypass Rd, opp. Vatan Textiles Ltd, Silk Mill Colony, Chhatrapati Sambhajinagar, Maharashtra 431005',
    price: '₹6,000',
    period: '/ Month',
    priceFormatted: '₹6,000 / Month',
    ctaText: 'Get Quote',
    images: [
      MYHQ + 'workspaces/shed2-coworking-midc/8bc6v6.jpg',
      MYHQ + 'workspaces/shed2-coworking-midc/8uqfrc.jpg',
      MYHQ + 'workspaces/shed2-coworking-midc/vrdf35.jpg',
      MYHQ + 'workspaces/shed2-coworking-midc/b4ycw7.jpg',
      'https://coworker.imgix.net/photos/india/aurangabad/shed-2-coworking/main-1713683965.jpg?w=1200&q=90&auto=format,compress'
    ]
  },

  // ───────────── CIDCO ─────────────
  {
    id: 8,
    name: 'V Connect Co-Working Space',
    badge: 'Budget',
    rating: 5.0,
    area: 'CIDCO',
    location: 'N-6, CIDCO, Chhatrapati Sambhajinagar',
    address: 'Arun Uday Colony, N-6, CIDCO, Chhatrapati Sambhajinagar, Maharashtra 431001',
    price: '₹2,999',
    period: '/ Month',
    priceFormatted: '₹2,999 / Month',
    ctaText: 'Get Quote',
    images: [
      MYHQ + 'workspaces/v-connect-cidco/27um96.jpg',
      MYHQ + 'workspaces/v-connect-cidco/pegn72.jpg',
      'https://coworker.imgix.net/photos/india/aurangabad/v-connect-co-working-space/main.jpeg?w=1200&q=90&auto=format,compress'
    ]
  },
  {
    id: 9,
    name: 'Kaarobaar Inception – CIDCO',
    badge: 'Popular',
    rating: 4.1,
    area: 'CIDCO',
    location: 'N-1, CIDCO, Chhatrapati Sambhajinagar',
    address: 'Sector B, near CIDCO Garden, N-1 CIDCO, Chhatrapati Sambhajinagar, Maharashtra',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    images: [
      JD + 'comp/aurangabad-maharashtra/e5/9999px240.x240.190330024119.f1e5/catalogue/kaarobaar-the-co-working-space-cidco-n-1-aurangabad-maharashtra-estate-agents-for-commercial-rental-qnmsh02zb7.jpg',
      JD + 'comp/aurangabad-maharashtra/e5/9999px240.x240.190330024119.f1e5/catalogue/kaarobaar-the-co-working-space-cidco-n-1-aurangabad-maharashtra-estate-agents-for-commercial-rental-293d1to3nm.jpg',
      JD + 'comp/aurangabad-maharashtra/e5/9999px240.x240.190330024119.f1e5/catalogue/kaarobaar-the-co-working-space-cidco-n-1-aurangabad-maharashtra-estate-agents-for-commercial-rental-y1mr55td2n.jpg',
      JD + 'comp/aurangabad-maharashtra/e5/9999px240.x240.190330024119.f1e5/catalogue/kaarobaar-the-co-working-space-cidco-n-1-aurangabad-maharashtra-estate-agents-for-commercial-rental-j31axelafm.jpg',
      JD + 'comp/aurangabad-maharashtra/e5/9999px240.x240.190330024119.f1e5/catalogue/kaarobaar-the-co-working-space-cidco-n-1-aurangabad-maharashtra-estate-agents-for-commercial-rental-w197cqrup5.jpg',
      JD + 'comp/aurangabad-maharashtra/e5/9999px240.x240.190330024119.f1e5/catalogue/kaarobaar-the-co-working-space-cidco-n-1-aurangabad-maharashtra-estate-agents-for-commercial-rental-tl2x95hgyk.jpg'
    ]
  },

  // ───────────── Station Road / Konkanwadi ─────────────
  {
    id: 10,
    name: 'Kaarobaar Coworking – Station Road',
    badge: 'Top Rated',
    rating: 4.8,
    area: 'Station Road',
    location: 'Station Road, Chhatrapati Sambhajinagar',
    address: 'Shop 14 & 15, Siddharth Arcade, Station Road, opp. MTDC Resort, Chhatrapati Sambhajinagar, Maharashtra 431005',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    images: [
      JD + 'comp/aurangabad-maharashtra/a1/9999px240.x240.221006232549.i9a1/catalogue/kaarobaar-co-working-aurangabad-ho-aurangabad-maharashtra-coworking-space-on-rent-2th518sk8l.jpg',
      JD + 'comp/aurangabad-maharashtra/a1/9999px240.x240.221006232549.i9a1/catalogue/kaarobaar-co-working-aurangabad-ho-aurangabad-maharashtra-coworking-space-on-rent-5an0thg001.jpg',
      JD + 'comp/aurangabad-maharashtra/a1/9999px240.x240.221006232549.i9a1/catalogue/kaarobaar-co-working-aurangabad-ho-aurangabad-maharashtra-coworking-space-on-rent-pqyw8rke1i.jpg',
      JD + 'comp/aurangabad-maharashtra/a1/9999px240.x240.221006232549.i9a1/catalogue/kaarobaar-co-working-aurangabad-ho-aurangabad-maharashtra-coworking-space-on-rent-8uywrhkoo2.jpg',
      JD + 'comp/aurangabad-maharashtra/a1/9999px240.x240.221006232549.i9a1/catalogue/kaarobaar-co-working-aurangabad-ho-aurangabad-maharashtra-coworking-space-on-rent-v3238xslc1.jpg',
      JD + 'comp/aurangabad-maharashtra/a1/9999px240.x240.221006232549.i9a1/catalogue/kaarobaar-co-working-aurangabad-ho-aurangabad-maharashtra-coworking-space-on-rent-340d4806kw.jpg'
    ]
  },
  {
    id: 11,
    name: 'Kaarobaar Coworking – Konkanwadi',
    badge: 'Budget',
    rating: 4.8,
    area: 'Konkanwadi',
    location: 'Konkanwadi, Chhatrapati Sambhajinagar',
    address: '2A, Mauli Building, Kesharsinghpura, Padampura Rd, Samadhan Colony, Konkanwadi, Chhatrapati Sambhajinagar, Maharashtra 431005',
    price: '₹4,500',
    period: '/ Month',
    priceFormatted: '₹4,500 / Month',
    ctaText: 'Get Quote',
    images: [
      MYHQ + 'workspaces/kaarobaar-konkanwadi/mxcbsn.jpg',
      MYHQ + 'workspaces/kaarobaar-konkanwadi/47fw88.jpg',
      MYHQ + 'workspaces/kaarobaar-konkanwadi/9qz5j7.jpg',
      MYHQ + 'workspaces/kaarobaar-konkanwadi/rsy6bp.jpg',
      MYHQ + 'workspaces/kaarobaar-konkanwadi/r3nsry.jpg',
      JD + 'comp/aurangabad-maharashtra/x3/9999px240.x240.230925210612.j1x3/catalogue/kaarobaar-konkanwadi-aurangabad-maharashtra-coworking-space-on-rent-wlwp0fuiq0.jpg',
      JD + 'comp/aurangabad-maharashtra/x3/9999px240.x240.230925210612.j1x3/catalogue/kaarobaar-konkanwadi-aurangabad-maharashtra-coworking-space-on-rent-a0ogj7pdbf.jpg'
    ]
  },

  // ───────────── Jalna Road / Akashwani Chowk / Chetan Nagar ─────────────
  {
    id: 12,
    name: 'bk.coworking',
    badge: 'New',
    rating: null,
    area: 'Akashwani Chowk',
    location: 'Akashwani Chowk, Jalna Road, Chhatrapati Sambhajinagar',
    address: 'D-401, Freedom Tower, Akashwani Chowk, Jalna Road, Chhatrapati Sambhajinagar, Maharashtra 431005',
    price: '₹6,000',
    period: '/ Month',
    priceFormatted: '₹6,000 / Month',
    ctaText: 'Get Quote',
    images: [
      'https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/7fa2607b-eb2e-4bf2-c7dc-1992a9d18200/public',
      'https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/27487fd5-5bfc-41b1-1ee8-0c63996dc700/public',
      'https://imagedelivery.net/hqJxI8rUiqlrmmYC5X1wIA/3a965988-73f2-488f-6f16-076d3bcf8c00/public'
    ]
  },
  {
    id: 13,
    name: 'SAGA Coworking Spaces',
    badge: 'Standard',
    rating: 4.4,
    area: 'Jalna Road',
    location: 'Jalna Road, Chhatrapati Sambhajinagar',
    address: 'Office No. 115, Sagar Trade Centre, Jalna Road, Chhatrapati Sambhajinagar, Maharashtra',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    images: [
      JD + 'comp/aurangabad-maharashtra/s9/9999px240.x240.200110204257.f7s9/catalogue/saga-co-working-spaces-aurangabad-aurangabad-maharashtra-coworking-space-on-rent-rtwrc6ijnk.jpg',
      JD + 'comp/aurangabad-maharashtra/s9/9999px240.x240.200110204257.f7s9/catalogue/saga-co-working-spaces-aurangabad-aurangabad-maharashtra-coworking-space-on-rent-hkmku94kr2.jpg',
      JD + 'comp/aurangabad-maharashtra/s9/9999px240.x240.200110204257.f7s9/catalogue/saga-co-working-spaces-aurangabad-aurangabad-maharashtra-coworking-space-on-rent-lb191a6gq5.jpg',
      JD + 'comp/aurangabad-maharashtra/s9/9999px240.x240.200110204257.f7s9/catalogue/saga-co-working-spaces-aurangabad-aurangabad-maharashtra-coworking-space-on-rent-2fxwkdbzr6.jpg',
      JD + 'comp/aurangabad-maharashtra/s9/9999px240.x240.200110204257.f7s9/catalogue/saga-co-working-spaces-aurangabad-aurangabad-maharashtra-coworking-space-on-rent-i5g4peqgs8.jpg'
    ]
  },
  {
    id: 14,
    name: 'Cubicles Executive Shared Work Space',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Chetan Nagar',
    location: 'Chetan Nagar, Jalna Road, Chhatrapati Sambhajinagar',
    address: 'Near Kalda Corner, Chetana Nagar Road, off Jalna Road, Chhatrapati Sambhajinagar, Maharashtra',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    images: [
      JD + 'comp/aurangabad-maharashtra/z8/9999px240.x240.230404122032.e3z8/catalogue/cubicles-executive-shared-work-space-chetan-nagar-aurangabad-maharashtra-coworking-space-on-rent-fs67i2zkvk.jpg',
      JD + 'comp/aurangabad-maharashtra/z8/9999px240.x240.230404122032.e3z8/catalogue/cubicles-executive-shared-work-space-chetan-nagar-aurangabad-maharashtra-coworking-space-on-rent-s6arm2kcuj.jpg',
      JD + 'comp/aurangabad-maharashtra/z8/9999px240.x240.230404122032.e3z8/catalogue/cubicles-executive-shared-work-space-chetan-nagar-aurangabad-maharashtra-coworking-space-on-rent-8y6ajyirzr.jpg',
      JD + 'comp/aurangabad-maharashtra/z8/9999px240.x240.230404122032.e3z8/catalogue/cubicles-executive-shared-work-space-chetan-nagar-aurangabad-maharashtra-coworking-space-on-rent-47kyrnp405.jpg',
      JD + 'comp/aurangabad-maharashtra/z8/9999px240.x240.230404122032.e3z8/catalogue/rd2rt30d2x2oep5-072p9lypmw.jpg',
      JD + 'comp/aurangabad-maharashtra/z8/9999px240.x240.230404122032.e3z8/catalogue/9txg4idg4vzdpzg-0pv9ncuxq8.jpg'
    ]
  }
];

// Confirmed coworking spaces with NO genuine photos published anywhere we could reach.
// Kept separate (and out of every listing, grid and area tile) so the UI never renders an
// empty or wrong gallery. Move an entry into the array above once real photos are found.
export const chhatrapatiSambhajinagarCoworkingPendingPhotos = [
  {
    id: 15,
    name: 'Regus – Tayal Business Park',
    badge: 'Premium',
    rating: null,
    area: 'Adalat Road',
    location: 'Adalat Road, Chhatrapati Sambhajinagar',
    address: 'Satish Motors (P) Ltd, Adalat Rd, opp. District Court, Chintamani Colony, Chhatrapati Sambhajinagar, Maharashtra 431001',
    price: '₹4,050',
    period: '/ Month',
    priceFormatted: '₹4,050 / Month',
    ctaText: 'Get Quote',
    images: [] // Regus shows only generic photos from other cities for this centre — excluded
  },
  {
    id: 16,
    name: 'Cubex Coworks',
    badge: 'New',
    rating: 5.0,
    area: 'CIDCO',
    location: 'Connaught Place, CIDCO, Chhatrapati Sambhajinagar',
    address: 'C-201, Kailash Arcade, Connaught Place, CIDCO, Chhatrapati Sambhajinagar, Maharashtra 431003',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    images: []
  },
  {
    id: 17,
    name: 'Tipping Point Coworking Space',
    badge: 'Standard',
    rating: 4.0,
    area: 'MIDC Chikalthana',
    location: 'MIDC Chikalthana, Chhatrapati Sambhajinagar',
    address: 'STPI building, MIDC Chikalthana, Chhatrapati Sambhajinagar, Maharashtra 431006',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    images: []
  },
  {
    id: 18,
    name: 'Core IT Solutions Co-Working Space',
    badge: 'Budget',
    rating: null,
    area: 'CIDCO',
    location: 'Connaught Place, CIDCO, Chhatrapati Sambhajinagar',
    address: 'Shop No. 5, Tulsi Arcade, Connaught Place, CIDCO, Chhatrapati Sambhajinagar, Maharashtra 431003',
    price: '₹4,499',
    period: '/ Month',
    priceFormatted: '₹4,499 / Month',
    ctaText: 'Get Quote',
    images: []
  }
];

// Only spaces with real photos are listed.
export const chhatrapatiSambhajinagarSpaces = chhatrapatiSambhajinagarCoworking;

export default chhatrapatiSambhajinagarSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const chhatrapatiSambhajinagarNeighborhoods = Object.entries(
  chhatrapatiSambhajinagarSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const chhatrapatiSambhajinagarOfficeCards = chhatrapatiSambhajinagarSpaces.slice(0, 8);
export const moreChhatrapatiSambhajinagarOfficeCards = chhatrapatiSambhajinagarSpaces.slice(8);

export const chhatrapatiSambhajinagarAreas = chhatrapatiSambhajinagarNeighborhoods;

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
// Chhatrapati Sambhajinagar Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allChhatrapatiSambhajinagarOfficeCards = chhatrapatiSambhajinagarSpaces;

export const getChhatrapatiSambhajinagarOfficeCardById = (id) => findOfficeBySlug(allChhatrapatiSambhajinagarOfficeCards, id, "chhatrapati-sambhajinagar");
export const getChhatrapatiSambhajinagarOfficeSlug = (space) => officePath(allChhatrapatiSambhajinagarOfficeCards, space, "chhatrapati-sambhajinagar");

// ============================================================================
// Top Coworking Locations in Chhatrapati Sambhajinagar — one tile per area, using a photo from a space in that area
// ============================================================================
export const topChhatrapatiSambhajinagarCoworkingLocations = chhatrapatiSambhajinagarNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: chhatrapatiSambhajinagarSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
