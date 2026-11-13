import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Dehradun (Uttarakhand) coworking spaces, compiled 13 Nov 2026 from qdesq.com, coworkingers.com, gofloaters.com, mybranch.co.in.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const dehradunSpaces = [
  {
    // Sources: https://www.qdesq.com/brand/artbuzz-studio/jakhan-dehradun-dun025
    id: 1,
    name: 'Artbuzz Studio',
    area: 'Jakhan',
    location: 'Jakhan, Dehradun',
    address: 'Near Canal Road, Jakhan, Dehradun, Uttarakhand',
    phone: null,
    hours: '10:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms'],
    capacity: 50,
    price: '₹6,600',
    period: '/ month',
    priceFormatted: '₹6,600 / month',
    deskPrice: '₹6,600',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1707220517/q8dehd0sgjp5gjygcqru.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1706957655/kptorjrjvw5hikusowqv.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1707220435/iilg0jstlxs6jqhqachp.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1707220436/vdfcbmxwdvhl69qljy2q.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/incuspaze/chukkuwala-dehradun-dun026
    id: 2,
    name: 'Incuspaze',
    area: 'Chukkuwala',
    location: 'Chukkuwala, Dehradun',
    address: 'Near WEFC, Clock Tower, Chukkuwala, Dehradun, Uttarakhand',
    phone: null,
    hours: '8:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Air Conditioning', 'High Speed WiFi', 'Lounge'],
    capacity: 113,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1712748775/zpsigunciifpgsxvapzg.webp',
      'https://ik.imagekit.io/qdesq/qdesq/aa1c6471eefefa7cc7cc8fe4bfc9aead_JxmRehr8N.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/620232c77c36fdeef93179449cfefbfe_49lcBpQsp.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/5e653b51b2ed5e8f05c88271135846bd_ZkkIYi6PCC.jpeg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/jump-start-coworking/dwarka-store-chowk-dehradun-dun002 , https://coworkingers.com/listing/jumpstart/
    id: 3,
    name: 'Jump Start Coworking - Dwarka Store Chowk',
    area: 'Dwarka Store Chowk',
    location: 'Dwarka Store Chowk, Dehradun',
    address: 'Near Dwarka Store Chowk, Dwarka Store Chowk, Dehradun, Uttarakhand',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'Lounge', 'High Speed WiFi', 'Tea/Coffee', 'Pantry', 'Car / Bike Parking', 'Printer'],
    capacity: 63,
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    deskPrice: '₹7,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1668778451/wexprwbrme6vda0t406d.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1504529334/ksjznebga0z1uksimxyh.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1504529335/cw4yvrhepkyydhdraosi.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1504529105/xokxfo5olqlirpzqxbvc.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/roots-coworking/chukkuwala-dehradun-dun003 , https://coworkingers.com/listing/roots-co-working/
    id: 4,
    name: 'Roots Coworking',
    area: 'Chukkuwala',
    location: 'Chukkuwala, Dehradun',
    address: 'Near Hotel Bajaj Inn, Chukkuwala, Dehradun, Uttarakhand',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Meeting Rooms', 'Pantry', 'Tea/Coffee', 'Car / Bike Parking', 'Printer'],
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1668779980/h4rcjr2gt8wyxd2ejwnr.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1591092092/pfxr2qlbfpoolklpcxdn.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1591092103/mptoyonec3l7bef9ho8c.webp',
      'https://ik.imagekit.io/qdesq/qdesq/d9b0ab408e9c05593fa507598947c4e2_Ko0DOgtHBj.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/cospaceswork/dalanwala-garhwal-gar080
    id: 5,
    name: 'Cospaces.work',
    area: 'Dalanwala',
    location: 'Dalanwala, Dehradun',
    address: 'Near Prem Tower, Dalanwala, Dehradun, Uttarakhand',
    phone: null,
    hours: '9:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 25,
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    deskPrice: '₹6,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1702120854/rrxhlauhopubbln4bwyo.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1716292535/tcndzmp4e0gg1igv26jd.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1716292536/hfojpgr9fpp6gamtl5qq.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1716292536/dep9fxwsloz9b2opu801.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/spaceyfi-coworking-space/ajabpur-kalan-dehradun-dun008 , https://coworkingers.com/listing/spaceyfi/
    id: 6,
    name: 'Spaceyfi Coworking Space',
    area: 'Ajabpur Kalan',
    location: 'Ajabpur Kalan, Dehradun',
    address: 'Mata Mandir Rd, near bank of baroda atm, Anand Vihar, Ajabpur Kalan, Dehradun, Uttarakhand 248001',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Air Conditioning', 'High Speed WiFi', 'Tea/Coffee', 'Car / Bike Parking', 'Printer'],
    capacity: 30,
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1652436338/vujdv1lk9f6ezqgjflgh.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1652436340/yfnawgtrnrxehnbwin3e.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1652438028/bsaxxioeajikxh5unkt9.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1652438030/epos4ruq9ymtjdpp9lca.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/horizon-co-working-hub/gms-road-dehradun-dun022 , https://coworkingers.com/listing/horizon-co-working-hub/
    id: 7,
    name: 'Horizon Co-Working Hub',
    area: 'GMS Road',
    location: 'GMS Road, Dehradun',
    address: 'Horizon Tower, GMS Road, near Reliance Super Market, Dehradun, Uttarakhand',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Lounge', 'Meeting Rooms', 'Mail Handling', 'Tea/Coffee', 'Pantry', 'Car / Bike Parking', 'Storage', 'Printer'],
    capacity: 48,
    price: '₹5,250',
    period: '/ month',
    priceFormatted: '₹5,250 / month',
    deskPrice: '₹5,250',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1652688270/cner7kxijyo60qu9ywlo.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677653253/knzftou02s9tlasepjfv.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1677653253/wqfrliqrksmnrgtelxqt.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1690373183/coorjb0gx4lanolslmsr.jpg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/jumpstart-the-coworking-hub/haridwar-bypass-road-dehradun-dun010 , https://gofloaters.com/office-space/gooffice-25018-open-desks-ajabpur-kalan-dehradun/
    id: 8,
    name: 'Jumpstart The Coworking Hub - Haridwar Bypass Road',
    area: 'Haridwar Bypass Road',
    location: 'Haridwar Bypass Road, Dehradun',
    address: 'Near Gaytri Homestay, Haridwar Bypass Road, Dehradun, Uttarakhand',
    phone: null,
    hours: null,
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 250,
    price: '₹7,500',
    period: '/ month',
    priceFormatted: '₹7,500 / month',
    deskPrice: '₹7,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1661251898/icwu7sehzsohhet3psri.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1661161709/ppuwa38qti51uzurluml.png',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1661251778/igapjo4yncifspdfg5v8.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1661251778/mezr6qq04ssdogm92rjd.webp'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-25001-open-desks-sahastradhara-road-dehradun/
    id: 9,
    name: 'iKSANA Workspaces - Chrysler Tech Centre',
    area: 'Sahastradhara Road',
    location: 'Sahastradhara Road, Dehradun',
    address: 'Sahastradhara Road, Dehradun, Uttarakhand',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2FOpen%2520Desks%2520%257C%2520Sahastradhara%2520Road-85%3Falt%3Dmedia%26token%3D67dc5694-6a5f-4248-91a6-2797952c69d8.webp?alt=media&token=214c1113-a341-4826-bd1d-bd26ee545a03',
      'https://cdn.app.gofloaters.com/.%2FOpen%2520Desks%2520%257C%2520Sahastradhara%2520Road-577%3Falt%3Dmedia%26token%3Da81b1ede-0fa5-43cf-b2d7-bf059791d33c.webp?alt=media&token=1534462b-7f22-40d2-8e7b-8557b7f13950'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-25013-open-desks-canal-road-dehradun/
    id: 10,
    name: 'iKSANA Workspaces - Anand Arcade',
    area: 'Canal Road',
    location: 'Canal Road, Dehradun',
    address: 'Canal Road, Dehradun, Uttarakhand',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Kishanpur_1718445982842%3Falt%3Dmedia%26token%3De412e7f7-69bc-4bca-9a0c-5bc63739ee5e.webp?alt=media&token=199c58ce-97c4-41cd-9631-8f72e69dcaa9',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Kishanpur_1718445996500%3Falt%3Dmedia%26token%3D6574f8b1-7088-4eeb-bdb3-d9fe0a90e3c8.webp?alt=media&token=853f375d-db46-40c2-b095-1635dc242fa8',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Kishanpur_1718446004997%3Falt%3Dmedia%26token%3D31183b05-2580-4b26-a1a8-1b7aef1af982.webp?alt=media&token=ea3d6dbe-a83d-48e9-835f-018ae9f029c2',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Kishanpur_1718446035435%3Falt%3Dmedia%26token%3D030f3755-5ef0-436b-82ad-d679eafe2a8f.webp?alt=media&token=065a137f-dc2e-48ef-90c7-61d89bea92bc'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-25011-open-desks-sahastradhara-road-dehradun/
    id: 11,
    name: 'iKSANA Workspaces - CPL-1 Tower',
    area: 'Sahastradhara Road',
    location: 'Sahastradhara Road, Dehradun',
    address: 'Sahastradhara Road, Dehradun, Uttarakhand',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi'],
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2F%2520Open%2520Desks%2520%257C%2520CPL%2520%257C%2520Sahastradhara%2520Road-732%3Falt%3Dmedia%26token%3Dd9d91dee-7da4-47f7-98c0-78d278e55b5e.webp?alt=media&token=6a1fc302-37f4-46fe-a6b9-04cdfd6730c7',
      'https://cdn.app.gofloaters.com/.%2F%2520Open%2520Desks%2520%257C%2520CPL%2520%257C%2520Sahastradhara%2520Road-211%3Falt%3Dmedia%26token%3D1801cc25-6f0e-4635-bcd5-8f855b9bae4d.webp?alt=media&token=1ea092f7-3baa-46d0-8017-3721e3b1bea1',
      'https://cdn.app.gofloaters.com/.%2F%2520Open%2520Desks%2520%257C%2520CPL%2520%257C%2520Sahastradhara%2520Road-31%3Falt%3Dmedia%26token%3Dbca19532-0eb3-45c5-8612-20e29911d9ae.webp?alt=media&token=99557829-4eaa-40a0-b3ef-8c1bff1da2cc',
      'https://cdn.app.gofloaters.com/.%2F%2520Open%2520Desks%2520%257C%2520CPL%2520%257C%2520Sahastradhara%2520Road-840%3Falt%3Dmedia%26token%3D7281828f-4ccf-4cc1-aced-9fa6f774dc2c.webp?alt=media&token=c1c98142-7782-4e43-a516-29dd198f2fe8'
    ]
  },
  {
    // Sources: https://gofloaters.com/office-space/gooffice-25020-open-desks-rajpur-road-dehradun/
    id: 12,
    name: 'The Circle.Work',
    area: 'Rajpur Road',
    location: 'Rajpur Road, Dehradun',
    address: 'Rajpur Road, Dehradun, Uttarakhand',
    phone: null,
    hours: null,
    amenities: [],
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    deskPrice: '₹7,999',
    cabinPrice: null,
    priceNote: 'Open desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Rajpur%2520Road_1759231681049%3Falt%3Dmedia%26token%3D8aa282e8-9b8e-48be-9de1-5abf1dd1fa03.webp?alt=media&token=66812ef4-cfbf-4b71-916c-e18f2081b77e',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Rajpur%2520Road_1759231683868%3Falt%3Dmedia%26token%3D1e0d0e70-328f-4c0c-8f92-260f738ce3ab.webp?alt=media&token=9c90614b-9aaa-4406-86e0-1e674ae6db38',
      'https://cdn.app.gofloaters.com/.%2Fimages%252FOpen%2520Desks%2520%257C%2520Rajpur%2520Road_1759231687439%3Falt%3Dmedia%26token%3Dc09b5d89-49c9-4bd9-a3f8-70693cce0307.webp?alt=media&token=d7f2d03f-41ef-47b8-a278-9b3ddeb9aa0d'
    ]
  },
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-dehradun-rajpur-road
    id: 13,
    name: 'MyBranch Coworking Space',
    area: 'Rajpur Road',
    location: 'Rajpur Road, Dehradun',
    address: '3rd Floor, Work Food Entertainment City, MDDA Complex, Rajpur Road, Darshan Lal Chowk, Race Course, Dehradun, Uttarakhand 248001',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹9,000',
    period: '/ month',
    priceFormatted: '₹9,000 / month',
    deskPrice: '₹9,000',
    cabinPrice: null,
    priceNote: 'Per desk, GoFloaters listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/dehradun_cw.webp',
      'https://www.mybranch.co.in/office/office_images/dehradun_mr.webp',
      'https://www.mybranch.co.in/office/office_images/dehradun_caf.webp',
      'https://www.mybranch.co.in/office/office_images/dehradun_rep.webp'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/cowo/
    id: 14,
    name: 'CoWo',
    area: 'Chakrata Road',
    location: 'Chakrata Road, Dehradun',
    address: '9, First Floor, North Avenue, 8, Chakrata Rd, behind Indian Oil Filling Station, Dehradun, Uttarakhand 248001',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/DSC_1512-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/DSC_1517-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/DSC_1535-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/DSC_1536-min.jpg'
    ]
  }
];

export default dehradunSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const dehradunNeighborhoods = Object.entries(
  dehradunSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const dehradunOfficeCards = dehradunSpaces.slice(0, 8);
export const moreDehradunOfficeCards = dehradunSpaces.slice(8);

export const dehradunAreas = dehradunNeighborhoods;

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
// Dehradun Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allDehradunOfficeCards = dehradunSpaces;

export const getDehradunOfficeCardById = (id) => findOfficeBySlug(allDehradunOfficeCards, id, "dehradun");
export const getDehradunOfficeSlug = (space) => officePath(allDehradunOfficeCards, space, "dehradun");

// ============================================================================
// Top Coworking Locations in Dehradun — one tile per area, using a photo from a space in that area
// ============================================================================
export const topDehradunCoworkingLocations = dehradunNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: dehradunSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
