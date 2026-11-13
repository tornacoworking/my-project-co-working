import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Navi Mumbai (Maharashtra) coworking spaces, compiled 13 Nov 2026 from mybranch.co.in, qdesq.com, coworkingers.com.
// Each card lists the pages it was built from. When the same space appeared on several sites it is merged into one card;
// the first source wins for name, address and price. Photos were checked by eye: people, posters, logos-only shots and
// duplicates were removed. Ratings and review counts are left out, and so are listing sites' own sales phone numbers.
// Coworkingers shows ₹6,500 on listings with no published price, so that figure is never used as a price.
// Excluded:
//  - PixDig Marketing (company office or outside the city)
//  - Ambience Business Conference Center &#038; Co-Working Cubes (address not in Navi Mumbai: none)
//  - ZoomStart India (closed)
//  - 91springboard Turbhe (closed)
//  - CO-WORKING SPACE AP ENTERPRISES (not an office)
// deskPrice / cabinPrice are per-seat monthly rates; null shows "On request" on the detail page.

export const naviMumbaiSpaces = [
  {
    // Sources: https://www.mybranch.co.in/coworking-space-in-navimumbai-cbd-belapur , https://www.qdesq.com/brand/my-branch/cbd-belapur-mumbai-mum005
    id: 1,
    name: 'MyBranch Coworking Space',
    area: 'Cbd belapur',
    location: 'Cbd belapur, Navi Mumbai',
    address: 'T-361, 6th Floor, Tower 8, ITC Park, CBD Belapur, Navi Mumbai- 400614',
    phone: null,
    hours: null,
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Meeting Rooms', 'Housekeeping', 'Private Cabins'],
    price: '₹15,400',
    period: '/ month',
    priceFormatted: '₹15,400 / month',
    deskPrice: '₹15,400',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://www.mybranch.co.in/office/office_images/navimumbai_recp.webp',
      'https://www.mybranch.co.in/office/office_images/navimumbai_caf.webp',
      'https://www.mybranch.co.in/office/office_images/navimumbai_cw.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/coworks-by-stm/nerul-navi-mumbai-mum687
    id: 2,
    name: 'Coworks BY STM',
    area: 'Nerul',
    location: 'Nerul, Navi Mumbai',
    address: 'Near Plan S Business Park, Nerul, Navi Mumbai, Maharashtra',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 50,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/a6a9550d7a85bb15bce73069955c44cf_QX2K-s75aH.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/500426b9878e3e432703cf83413cf8d0_zvLP-C3_O.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/b7bedf4a786daf521261ba2f1ce586ee_QMJYw0052.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/enjoy-co-working/cbd-belapur-mumbai-mum650
    id: 3,
    name: 'Enjoy Co Working',
    area: 'CBD Belapur',
    location: 'CBD Belapur, Navi Mumbai',
    address: 'Near Sector 11, CBD Belapur, Navi Mumbai, Maharashtra',
    phone: null,
    hours: '8:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 300,
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    deskPrice: '₹8,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/4e2f08a7165324b800e6ea4fb3f9824f_qavuCrkVUp.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/trackster-spaces/nerul-mumbai-mum606
    id: 4,
    name: 'Trackster Spaces',
    area: 'Nerul',
    location: 'Nerul, Navi Mumbai',
    address: 'Near Kamdhenu Business Bay, Nerul, Navi Mumbai, Maharashtra',
    phone: null,
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 20,
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    deskPrice: '₹5,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/f849b8d41c95d98c8e1e5a2a48dbb51c_ZgU2wQH6k.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/39d45d290873ca47f16613b451362c95_cK-Q3PoDm.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/a6a9550d7a85bb15bce73069955c44cf_QX2K-s75aH.JPG'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/workloft/cbd-belapur-navi-mumbai-mum491
    id: 5,
    name: 'WorkLoft',
    area: 'CBD Belapur',
    location: 'CBD Belapur, Navi Mumbai',
    address: 'Near CBD Belapur station, CBD Belapur, Navi Mumbai, Maharashtra',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'High Speed WiFi', 'Air Conditioning'],
    capacity: 180,
    price: '₹9,000',
    period: '/ month',
    priceFormatted: '₹9,000 / month',
    deskPrice: '₹9,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1612256317/c51x24ovzp5yohdxgmb2.jpg',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1689670942/egn18ws3jlsrr2okrsof.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1689670942/bppp6eyutfpuglfpqhex.webp'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/ellora-fiesta/sanpada-navi-mumbai-mum600
    id: 6,
    name: 'Ellora Fiesta',
    area: 'Sanpada',
    location: 'Sanpada, Navi Mumbai',
    address: 'Near Juinagar Station, Sanpada, Navi Mumbai, Maharashtra',
    phone: null,
    hours: '8:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['Meeting Rooms', 'Mail Handling', 'Air Conditioning', 'High Speed WiFi', 'Lounge'],
    capacity: 30,
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    deskPrice: '₹8,000',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1721901568/dkwa7lpnukriu46jqu9k.webp',
      'https://ik.imagekit.io/qdesq/qdesq/f17a6c65e14746d4ccdc8929897c0208_iYdcLQ52Cc.jpeg',
      'https://ik.imagekit.io/qdesq/qdesq/28e6d227e06989d69673d3f279b48eb6_cCEjAZEtvH.jpeg'
    ]
  },
  {
    // Sources: https://www.qdesq.com/brand/coworks-by-stm/sector-12-navi-mumbai-mum692
    id: 7,
    name: 'Coworks BY STM',
    area: 'Sector 12',
    location: 'Sector 12, Navi Mumbai',
    address: 'Near Goodwill Infinity, Sector 12, Navi Mumbai, Maharashtra',
    phone: null,
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Air Conditioning'],
    capacity: 50,
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    deskPrice: '₹6,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/fbdfb84483e006890b5edd4111fa5a7d_P_3vq371J.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/3d07639c005d0258d021bf194c4a6488__c0tUYaV7.JPG'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/collaborate-hub/
    id: 8,
    name: 'Collaborate Hub',
    area: 'Sector 25',
    location: 'Sector 25, Navi Mumbai',
    address: 'Akshar Business Park, Janta Market Road, opposite APMC Fruits and Vegetable Market, Sector 25, Vashi, Navi Mumbai, Maharashtra 400703',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/IMG-20230713-WA0004-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/IMG-20230713-WA0010-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/IMG-20230713-WA0012-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/mumbai/navi-mumbai/awfis-vashi-cyber-one/
    id: 9,
    name: 'Awfis Vashi',
    area: 'Sector 30',
    location: 'Sector 30, Navi Mumbai',
    address: '18th Floor, Cyber One, Opp CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Housekeeping', 'Mail Handling', 'Car / Bike Parking', 'Tea/Coffee', 'High Speed WiFi', 'Lounge', 'Storage'],
    price: '₹13,000',
    period: '/ month',
    priceFormatted: '₹13,000 / month',
    deskPrice: '₹13,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Vashi-Navi-Mumbai-Cyber-One-Navi-Mumbai-001.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Vashi-Navi-Mumbai-Cyber-One-Navi-Mumbai-002.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Awfis-Vashi-Navi-Mumbai-Cyber-One-Navi-Mumbai-003.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/mumbai/navi-mumbai/wegrow-group/
    id: 10,
    name: 'WeGrow Group',
    area: 'Sector 30A',
    location: 'Sector 30A, Navi Mumbai',
    address: 'PLOT NO.- 88, 8th Floor, Proxima, Arunachal Bhavan, 19, Sector 30A, Vashi, Navi Mumbai, Maharashtra 400703',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Tea/Coffee', 'High Speed WiFi', 'Printer'],
    price: '₹8,249',
    period: '/ month',
    priceFormatted: '₹8,249 / month',
    deskPrice: '₹8,249',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/WeGrow-Group-Navi-Mumbai-001.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/WeGrow-Group-Navi-Mumbai-002.jpeg',
      'https://coworkingers.com/wp-content/uploads/2020/07/WeGrow-Group-Navi-Mumbai-003.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/mumbai/navi-mumbai/wework-seawoods-grand-central/
    id: 11,
    name: 'WeWork Seawoods Grand Central',
    area: 'Navi Mumbai',
    location: 'Navi Mumbai, Navi Mumbai',
    address: 'Tower 1, Seawoods Grand Central Sector 40, Seawoods Railway Station 10th Floor, Navi Mumbai, Maharashtra 400706',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Housekeeping', 'Mail Handling', 'Tea/Coffee', 'High Speed WiFi', 'Storage'],
    price: '₹12,000',
    period: '/ month',
    priceFormatted: '₹12,000 / month',
    deskPrice: '₹12,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/WeWork-Navi-Mumbai-001.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/WeWork-Navi-Mumbai-002.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/WeWork-Navi-Mumbai-003.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/mumbai/navi-mumbai/arch-n-rock-coworking/
    id: 12,
    name: 'Arch n Rock Coworking',
    area: 'Millennium Business Park',
    location: 'Millennium Business Park, Navi Mumbai',
    address: '203 Rupa Solitaire, Millennium Business Park, Mahape, Navi Mumbai, Maharashtra 400710',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Car / Bike Parking', 'High Speed WiFi'],
    price: '₹10,000',
    period: '/ month',
    priceFormatted: '₹10,000 / month',
    deskPrice: '₹10,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/Arch-n-Rock-Navi-Mumbai-001.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Arch-n-Rock-Navi-Mumbai-002.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/Arch-n-Rock-Navi-Mumbai-003.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/mumbai/navi-mumbai/triggerxchange/
    id: 13,
    name: 'TriggerXchange',
    area: 'Sector – 19 D',
    location: 'Sector – 19 D, Navi Mumbai',
    address: 'Bhanti Solitaire, Plot No 29, Sector – 19 D, Behind Satra Plaza, Vashi, Navi Mumbai, Maharashtra 400705',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Car / Bike Parking', 'Tea/Coffee', 'High Speed WiFi', 'Storage', 'Printer'],
    price: '₹9,000',
    period: '/ month',
    priceFormatted: '₹9,000 / month',
    deskPrice: '₹9,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/TriggerXchange-Navi-Mumbai-001.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/TriggerXchange-Navi-Mumbai-002.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/TriggerXchange-Navi-Mumbai-003.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/india/maharashtra/mumbai/navi-mumbai/the-workspace/
    id: 14,
    name: 'The Workspace',
    area: 'Sector 40',
    location: 'Sector 40, Navi Mumbai',
    address: 'Tower 1, Seawoods Grand Central, Railway Station, 10th Floor, Sector 40, Seawoods, Navi Mumbai, Maharashtra 400706',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'High Speed WiFi'],
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    deskPrice: '₹5,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2020/07/The-Workspace-Navi-Mumbai-001.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/The-Workspace-Navi-Mumbai-002.jpg',
      'https://coworkingers.com/wp-content/uploads/2020/07/The-Workspace-Navi-Mumbai-003.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/awfis-the-empire-tower/
    id: 15,
    name: 'Awfis The Empire Tower',
    area: 'MIDC',
    location: 'MIDC, Navi Mumbai',
    address: 'Reliable Tech Park, Thane - Belapur Road, Gavate Wadi, MIDC, Airoli, Navi Mumbai, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Mail Handling', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹26,000',
    period: '/ month',
    priceFormatted: '₹26,000 / month',
    deskPrice: '₹26,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/5G4A0029c-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/5G4A0075-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/5G4A0080-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/empire-business-centre-empire-tower/
    id: 16,
    name: 'Empire Business Centre – Empire Tower',
    area: 'MIDC',
    location: 'MIDC, Navi Mumbai',
    address: 'Cloud City Campus, Gavate Wadi, MIDC, Airoli, Navi Mumbai, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking', 'Printer'],
    price: '₹13,499',
    period: '/ month',
    priceFormatted: '₹13,499 / month',
    deskPrice: '₹13,499',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/Screenshot-2023-07-28-155524-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/Screenshot-2023-07-28-155728-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/Screenshot-2023-07-28-155624-min.png'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/inspire-cospaces/
    id: 17,
    name: 'Inspire Cospaces',
    area: 'MIDC Industrial Area',
    location: 'MIDC Industrial Area, Navi Mumbai',
    address: 'D-33, Turbhe Midc Rd, TTC Industrial Area, MIDC Industrial Area, Turbhe, Navi Mumbai, Maharashtra 400705',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Tea/Coffee', 'High Speed WiFi', 'Pantry'],
    price: '₹7,200',
    period: '/ month',
    priceFormatted: '₹7,200 / month',
    deskPrice: '₹7,200',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/131410368_176662207502928_930459837230120661_n-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/167328179_249657186870096_2940392968801903714_n-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/217778682_320389983130149_4454924977123526981_n-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/co-works-by-stm/
    id: 18,
    name: 'CO-Works By STM',
    area: 'MIDC Industrial Area',
    location: 'MIDC Industrial Area, Navi Mumbai',
    address: 'Plan S Business Park, opp. DY Patil Stadium, MIDC Industrial Area, Nerul, Navi Mumbai, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Mail Handling', 'Car / Bike Parking'],
    price: '₹2,999',
    period: '/ month',
    priceFormatted: '₹2,999 / month',
    deskPrice: '₹2,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-04-03-at-15.00.31-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-04-03-at-15.00.35-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/07/WhatsApp-Image-2023-04-03-at-15.18.57-min.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/pro-coworking-office/
    id: 19,
    name: 'Pro Coworking Office',
    area: 'Sector 14',
    location: 'Sector 14, Navi Mumbai',
    address: 'Office No - 1910, Kamdhenu Commerz, next to Raghunath Vihar, Block J, Raghunath Vihar, Sector 14, Kharghar, Navi Mumbai, Maharashtra 410210',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Pantry', 'Car / Bike Parking'],
    price: '₹13,499',
    period: '/ month',
    priceFormatted: '₹13,499 / month',
    deskPrice: '₹13,499',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/pro_cowork-1-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/pro_cowork-2-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/pro_cowork-3-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/co-works-by-stm-2/
    id: 20,
    name: 'Co-Works by STM',
    area: 'Sector 14',
    location: 'Sector 14, Navi Mumbai',
    address: 'Kamdhenu, Raghunath Road, Block G, Sector 14, Kharghar, Navi Mumbai, Maharashtra 410210',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'High Speed WiFi', 'Mail Handling', 'Pantry', 'Car / Bike Parking'],
    price: '₹2,999',
    period: '/ month',
    priceFormatted: '₹2,999 / month',
    deskPrice: '₹2,999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/2022-06-01-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/niharika-3-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/07/Office-1-min.jpeg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/awfis-qparc/
    id: 21,
    name: 'Awfis QParc',
    area: 'MIDC Industrial Area',
    location: 'MIDC Industrial Area, Navi Mumbai',
    address: 'Aurum Q Islands, Thane - Belapur Road, Reliance Corporate Park, MIDC Industrial Area, Ghansoli, Navi Mumbai, Maharashtra',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Mail Handling', 'Tea/Coffee', 'High Speed WiFi', 'Car / Bike Parking', 'Printer'],
    price: '₹36,000',
    period: '/ month',
    priceFormatted: '₹36,000 / month',
    deskPrice: '₹36,000',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/QMR9431_2_3-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/QMR9446_7_8-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/07/QMR9455_6_7-min.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/officebing-mahape-navi-mumbai/
    id: 22,
    name: 'OfficeBing Mahape, Navi Mumbai',
    area: 'TTC Industrial Area',
    location: 'TTC Industrial Area, Navi Mumbai',
    address: 'Building, Plot X-4, 101, 1st Floor, Technocity, 5-A, TTC Industrial Area, Mahape, Navi Mumbai, Maharashtra 400701',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Tea/Coffee', 'High Speed WiFi', 'Lounge', 'Car / Bike Parking', 'Storage', 'Printer'],
    price: '₹999',
    period: '/ month',
    priceFormatted: '₹999 / month',
    deskPrice: '₹999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/Coworking-Space-Bangalore-min-1.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/07/unnamed-min-20.jpg'
    ]
  },
  {
    // Sources: https://coworkingers.com/listing/officebing-rupa-solitaire/
    id: 23,
    name: 'OfficeBing: Rupa Solitaire',
    area: 'Sector 2',
    location: 'Sector 2, Navi Mumbai',
    address: 'OfficeBing: Rupa Solitaire, MILLENNIUM BUSINESS PARK, Millenium Business Park, Sector 2, Mahape, Navi Mumbai, Maharashtra 400710',
    phone: null,
    hours: null,
    amenities: ['Air Conditioning', 'Pantry', 'Housekeeping', 'Tea/Coffee', 'High Speed WiFi', 'Lounge', 'Car / Bike Parking', 'Printer'],
    price: '₹999',
    period: '/ month',
    priceFormatted: '₹999 / month',
    deskPrice: '₹999',
    cabinPrice: null,
    priceNote: 'Coworkingers listing',
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/07/WhatsApp-Image-2022-09-15-at-6.07.07-PM-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/07/WhatsApp-Image-2022-09-15-at-6.07.08-PM-2-min.jpeg',
      'https://coworkingers.com/wp-content/uploads/2023/07/WhatsApp-Image-2022-09-15-at-6.07.08-PM-min.jpeg'
    ]
  }
];

export default naviMumbaiSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const naviMumbaiNeighborhoods = Object.entries(
  naviMumbaiSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const naviMumbaiOfficeCards = naviMumbaiSpaces.slice(0, 8);
export const moreNaviMumbaiOfficeCards = naviMumbaiSpaces.slice(8);

export const naviMumbaiAreas = naviMumbaiNeighborhoods;

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
// Navi Mumbai Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allNaviMumbaiOfficeCards = naviMumbaiSpaces;

export const getNaviMumbaiOfficeCardById = (id) => findOfficeBySlug(allNaviMumbaiOfficeCards, id, "navi-mumbai");
export const getNaviMumbaiOfficeSlug = (space) => officePath(allNaviMumbaiOfficeCards, space, "navi-mumbai");

// ============================================================================
// Top Coworking Locations in Navi Mumbai — one tile per area, using a photo from a space in that area
// ============================================================================
export const topNaviMumbaiCoworkingLocations = naviMumbaiNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: naviMumbaiSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
