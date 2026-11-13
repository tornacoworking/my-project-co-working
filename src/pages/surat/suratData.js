import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Surat (Gujarat) coworking spaces, compiled 13 Nov 2026 from qdesq.com, coworkingers.com, gofloaters.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - The Leasing Company (Navsari Bazaar): same photos as its Rustampura branch
//  - Ikigai Coworking Space by SPACEPLEXX (address not in Surat: 5th Floor, Magnus shopping mall, Bhimrad-Althan Rd, Althan, Gujarat 395017)
//  - Infusion Coworking Space (Surat) (closed)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const suratSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/the-leasing-company/rustampura-surat-srt021
    id: 1,
    name: 'The Leasing Company',
    area: 'Rustampura',
    location: 'Rustampura, Surat',
    address: 'World Trade Center, Rustampura, Surat, Gujarat',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1642420247/np4txrtgcaolb2drimsy.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1642420248/ogwninikaszenjpktjcn.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1642420332/gtsl3ys6rwo3gx2monuo.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/spacelounge/majura-gate-surat-srt004
    id: 2,
    name: 'SpaceLounge',
    area: 'Majura Gate',
    location: 'Majura Gate, Surat',
    address: 'ITC Building, Majura Gate, Surat, Gujarat',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms'],
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1512451848/gqmg5qizwflt4chvipd2.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1512451847/zyzet4heyhxqnngpqng2.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/alpine-work-space/kailash-nagar-surat-srt018
    id: 3,
    name: 'Alpine Work Space',
    area: 'Kailash Nagar',
    location: 'Kailash Nagar, Surat',
    address: 'Near Kashi plaza, Kailash Nagar, Surat, Gujarat',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Air Conditioning'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1637739816/hkvympn2fgsmytet2513.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1637739920/ool2kwkjtwksswj3nr80.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1637739922/gmmguaf4djkqltewrpl6.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/excluzo-business-centre/vesu-surat-surat-srt037 , https://coworkingers.com/india/gujarat/surat/excluzo-business-centre/ , https://gofloaters.com/office-space/gooffice-23031-6-seater-private-cabin-vesu-surat/ , https://gofloaters.com/office-space/gooffice-23028-open-desks-vesu-surat/
    id: 4,
    name: 'Excluzo Business Centre',
    area: 'Surat',
    location: 'Surat, Surat',
    address: 'Near International Wealth Centre, Vesu, Surat, Surat, Gujarat',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Air Conditioning', 'High Speed WiFi', 'Lounge', 'Housekeeping', 'Tea/Coffee', 'Car / Bike Parking', 'Printer'],
    capacity: 170,
    price: '₹9,000',
    period: '/ month',
    priceFormatted: '₹9,000 / month',
    deskPrice: '₹9,000',
    cabinPrice: '₹1,333',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/4598ea98a15fed33af062c2c7f111bcd_SkzqfOyIIi.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/fbfee6fc09955f03dd1181222ca0e97a_qlx97KnJr.jpg',
      'https://ik.imagekit.io/qdesq/qdesq/03272fcdfedca9db7be1c64316f90fb4_CAcoVSm9Z.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/ikoverk-co-working-space/kadampally-society-surat-srt011
    id: 5,
    name: 'iKoVerk Co-working Space',
    area: 'Kadampally Society',
    location: 'Kadampally Society, Surat',
    address: 'Near ICICI bank, Kadampally Society, Surat, Gujarat',
    phone: null,
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms', 'Lounge', 'Mail Handling'],
    capacity: 92,
    price: '₹6,900',
    period: '/ month',
    priceFormatted: '₹6,900 / month',
    deskPrice: '₹6,900',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1600760038/orxs3hywdxnc9beivnr1.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1600756849/nzmx2qevfwr15hkrxtgk.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1600756916/yutluqs9gqtgr8f9vupr.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/wibes-co-working-space/sahara-darwaja-surat-srt026 , https://gofloaters.com/office-space/gooffice-23032-open-desks-sahara-darwaja-surat/
    id: 6,
    name: 'Wibes Co-working Space',
    area: 'Sahara Darwaja',
    location: 'Sahara Darwaja, Surat',
    address: 'Near APMC, Sahara Darwaja, Surat, Gujarat',
    phone: null,
    hours: '8:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Lounge', 'High Speed WiFi', 'Mail Handling', 'Air Conditioning'],
    capacity: 200,
    price: '₹7,900',
    period: '/ month',
    priceFormatted: '₹7,900 / month',
    deskPrice: '₹7,900',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1700206165/ridtyr6nhxnttutmxpie.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1700206131/gaoqkmrwwcx6zt87dcnf.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1700206069/cxsjl4cigo46kxcflqge.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/mexus-workspace/nanpura-surat-srt016
    id: 7,
    name: 'Mexus workspace',
    area: 'Nanpura',
    location: 'Nanpura, Surat',
    address: 'Near KD Nupoor Hospital, Nanpura, Surat, Gujarat',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi'],
    price: '₹3,000',
    period: '/ month',
    priceFormatted: '₹3,000 / month',
    deskPrice: '₹3,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1637738304/jjcuxesj0qtewtdoh3sy.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1637738442/nwvvhixalxb65tbrjcxl.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1637738442/rut4zcayccvc5bqmbqkf.webp'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/gujarat/surat/coworq-coworking-space/
    id: 8,
    name: 'Coworq Coworking Space',
    area: 'Someshwara Enclave',
    location: 'Someshwara Enclave, Surat',
    address: '612, SNS Platina, Behind JH Ambani School Vesu, Near, Someshwara Enclave, Surat, Gujarat 395007',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Tea/Coffee', 'High Speed WiFi', 'Lounge', 'Car / Bike Parking', 'Storage', 'Printer'],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/Coworq-Coworking-Space-002.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Coworq-Coworking-Space-003.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/gujarat/surat/spaceplexx-coworking/
    id: 9,
    name: 'Spaceplexx Coworking',
    area: 'Vesu',
    location: 'Vesu, Surat',
    address: '205 SNS Platina, behind JH Ambani School, Vesu, Surat, Gujarat 395007',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'High Speed WiFi', 'Mail Handling', 'Printer'],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/SPACEPLEXX-Coworking-001.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/SPACEPLEXX-Coworking-002.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/SPACEPLEXX-Coworking-003.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/gujarat/surat/space-lounge/
    id: 10,
    name: 'Space Lounge',
    area: 'Majura Gate Rd',
    location: 'Majura Gate Rd, Surat',
    address: 'A-4, Himani Apartment, Majura Gate Rd, beside International Trade Center Building, Surat, Gujarat 395001',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Housekeeping', 'High Speed WiFi', 'Lounge', 'Storage', 'Printer'],
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/Space-Lounge-001-scaled.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Space-Lounge-002-scaled.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Space-Lounge-003-scaled.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/gujarat/surat/dent-co/
    id: 11,
    name: 'Dent | CO',
    area: 'Vesu',
    location: 'Vesu, Surat',
    address: 'G-4/5 Ambrosia business hub, VIP Road, Vesu, Surat, Gujarat 394518',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹3,600',
    period: '/ month',
    priceFormatted: '₹3,600 / month',
    deskPrice: '₹3,600',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/11/Dent-Co-003.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/gujarat/surat/desk26/
    id: 12,
    name: 'DESK26',
    area: 'Adajan',
    location: 'Adajan, Surat',
    address: 'Shop no 359, 3rd floor, The GALLERIA Shopping Hub Opp 370 kitchen restaurant, near Sanjeev kumar auditorium Pal, Adajan, Surat, Gujarat 395009',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Car / Bike Parking', 'Tea/Coffee', 'High Speed WiFi', 'Printer'],
    price: '₹2,900',
    period: '/ month',
    priceFormatted: '₹2,900 / month',
    deskPrice: '₹2,900',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/11/DESK26-001.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/11/DESK26-002.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/11/DESK26-003.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/gujarat/surat/ikoverk-co-working-space/ , https://gofloaters.com/office-space/gooffice-23010-2-seater-private-cabin-althan-surat/
    id: 13,
    name: 'iKoVerk Co-working Space',
    area: 'Althan',
    location: 'Althan, Surat',
    address: 'iKoVerk Co-working Space, Bhimrad Road, Althan, Surat, Gujarat',
    phone: null,
    hours: null,
    amenities: ['Printer', 'Air Conditioning', 'Housekeeping', 'High Speed WiFi', 'Pantry', 'Storage'],
    price: '₹6,900',
    period: '/ month',
    priceFormatted: '₹6,900 / month',
    deskPrice: '₹6,900',
    cabinPrice: '₹3,500',
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/11/iKoVerk-Co-working-Space-001.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/11/iKoVerk-Co-working-Space-002.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/11/iKoVerk-Co-working-Space-003.jpg'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-23039-open-desks-pal-gam-surat/
    id: 14,
    name: 'Wibes Coworking Space 2.O',
    area: 'Pal Gam',
    location: 'Pal Gam, Surat',
    address: 'Pal Gam, Surat, Gujarat',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹10,000',
    period: '/ month',
    priceFormatted: '₹10,000 / month',
    deskPrice: '₹10,000',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk%2520in%2520Adajan%252FPal_1751007133579%3Falt%3Dmedia%26token%3Dd052b582-6ca0-4f3e-a654-053b13d5bd55.webp?alt=media&token=bfb4c73e-3489-4f8c-8afa-5cec34c115de',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desk%2520in%2520Adajan%252FPal_1751007173074%3Falt%3Dmedia%26token%3Dd883c732-c8bb-4076-b19c-88a41758916f.webp?alt=media&token=e4fb783a-9475-4517-a0c9-7f90a26fea10',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Pal%2520Gam_1753168373598%3Falt%3Dmedia%26token%3D85854b5d-f983-4e4e-81cb-b5693991efce.webp?alt=media&token=f8e0a543-e975-4ac6-b77a-367d986efcf6'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-23021-8-seater-private-cabin-nanpura-surat/ , https://gofloaters.com/office-space/gooffice-23018-dedicated-desks-nanpura-surat/
    id: 15,
    name: 'iKoVerk Coworking Space Nanpura',
    area: 'Nanpura',
    location: 'Nanpura, Surat',
    address: 'Nanpura, Surat, Gujarat',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹6,900',
    period: '/ month',
    priceFormatted: '₹6,900 / month',
    deskPrice: '₹6,900',
    cabinPrice: '₹703',
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252F8%2520Seater%2520Private%2520Cabin%2520%257C%2520Nanpura_1679729950735%3Falt%3Dmedia%26token%3D2e6d2dfd-89cd-43d1-ae92-1f0c56213711.webp?alt=media&token=f2d698f6-1e21-4912-9239-65c0c454e1ca',
      'https://cdn.app.gofloaters.com/.%2Fimages%252F8%2520Seater%2520Private%2520Cabin%2520%257C%2520Nanpura_1679729972119%3Falt%3Dmedia%26token%3D6570d31b-b50d-41ed-aef7-1a3cf0314718.webp?alt=media&token=c2b01778-7ad3-4afb-b794-3097976f6d89',
      'https://cdn.app.gofloaters.com/.%2Fimages%252F8%2520Seater%2520Private%2520Cabin%2520%257C%2520Nanpura_1679729982499%3Falt%3Dmedia%26token%3D8069a1c2-96f4-4f7b-af84-51fbbef2636f.webp?alt=media&token=826a7898-c7ce-48e5-bcad-fc7d8792e6df'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-23026-dedicated-desks-vesu-surat/
    id: 16,
    name: 'Kommune Coworking Space',
    area: 'Vesu',
    location: 'Vesu, Surat',
    address: 'Vesu, Surat, Gujarat',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    deskPrice: '₹8,999',
    cabinPrice: null,
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FPersonal%2520Desk_1680597092396%3Falt%3Dmedia%26token%3D640a3b8b-0ab7-486c-a3b5-ac5ef282e79d.webp?alt=media&token=c85971ca-53b4-456b-975a-d498a47efb4d',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FDedicated%2520Desks%2520%257C%2520Vesu_1680873303562%3Falt%3Dmedia%26token%3Dbe16a1a3-782b-4ffb-85b6-1d61028ce1c2.webp?alt=media&token=5ed8247b-6dc3-4d06-8475-20bb5509cc9c',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FDedicated%2520Desks%2520%257C%2520Vesu_1680873320389%3Falt%3Dmedia%26token%3D8ce67906-5e96-4c53-8489-33f804fb2b6b.webp?alt=media&token=3e4c358b-13a2-49a8-b55e-d3b338535cd1'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-23050-12-seater-private-cabin-vesu-surat/ , https://gofloaters.com/office-space/gooffice-23045-50-seater-private-cabin-vesu-surat/ , https://gofloaters.com/office-space/gooffice-23046-40-seater-private-cabin-vesu-surat/ , https://gofloaters.com/office-space/gooffice-23047-30-seater-private-cabin-vesu-surat/ , https://gofloaters.com/office-space/gooffice-23048-20-seater-private-cabin-vesu-surat/ , https://gofloaters.com/office-space/gooffice-23049-15-seater-private-cabin-vesu-surat/ , https://gofloaters.com/office-space/gooffice-23051-11-seater-private-cabin-vesu-surat/ , https://gofloaters.com/office-space/gooffice-23052-10-seater-private-cabin-vesu-surat/ , https://gofloaters.com/office-space/gooffice-23053-8-seater-private-cabin-vesu-surat/ , https://gofloaters.com/office-space/gooffice-23054-6-seater-private-cabin-vesu-surat/ , https://gofloaters.com/office-space/gooffice-23055-5-seater-private-cabin-vesu-surat/
    id: 17,
    name: 'India Accelerator Surana Supremus',
    area: 'Vesu',
    location: 'Vesu, Surat',
    address: 'Vesu, Surat, Gujarat',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: '₹583',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/images%2F12-Seater-Private-Cabin-Vesu_1766213216440.webp?alt=media&token=4d9fd31e-3b06-4901-b113-604aa0fa15cd',
      'https://cdn.app.gofloaters.com/images%2F12%20Seater%20Private%20Cabin%20%7C%20Vesu_1766213029727?alt=media&token=d5c7e663-d38e-47d9-9ed6-745cd7d5778e',
      'https://cdn.app.gofloaters.com/images%2F12-Seater-Private-Cabin-Vesu_1766213020324.webp?alt=media&token=5cb2fe53-b75f-42e9-bc8a-b3d1deadc8f6'
    ]
  }
];

export default suratSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const suratNeighborhoods = Object.entries(
  suratSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const suratOfficeCards = suratSpaces.slice(0, 8);
export const moreSuratOfficeCards = suratSpaces.slice(8);

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
// Top Coworking Locations in Surat — one tile per area, using a photo from a space in that area
// ============================================================================
export const topSuratCoworkingLocations = suratNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: suratSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
