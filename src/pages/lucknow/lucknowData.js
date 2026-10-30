import { findOfficeBySlug, officePath } from "../../common/slug.js";
// Data store for Lucknow
export const lucknowAreas = [
  "All",
  "Gomti Nagar",
  "Hazratganj",
  "Aliganj",
  "Indira Nagar",
  "Vibhuti Khand",
  "Mahanagar"
];

export const lucknowSpaces = [
  // Lucknow coworking spaces — updated 2026-10-30
// googleMapsUrl = listing CID (or Cofynd's coordinates pin where there is no Maps listing).
// images = first 4 photos from each space's Cofynd listing (img.cofynd.com). The Google Maps thumbnails used before were tiny
// (w203) and blocked/throttled by Google when loaded in the browser, so they showed as broken images.
  {
    id: 1,
    name: 'Incuspaze - Experio',
    badge: null,
    rating: null,
    area: 'Lucknow',
    location: 'Experio 2nd Floor, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12421532574842286685',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/d8ac24a800cf71be5aaa9bf2f7c30d7315cae6e3.webp',
      'https://img.cofynd.com/images/latest_images_2024/75c46a170af968b93cc622e71a0f93f85eb451ae.webp',
      'https://img.cofynd.com/images/latest_images_2024/c99eccaa1b3be776e100fb7fa7318b33dbab0944.webp',
      'https://img.cofynd.com/images/latest_images_2024/e323468238181c03be664d6815c19ea26ae7b497.webp'
    ]
  },
  // Maps listing: 'Incuspaze - Rohtas Summit'
  {
    id: 2,
    name: 'Incuspaze Summit',
    badge: 'Premium',
    rating: 4.6,
    area: 'Gomti Nagar',
    location: '11th Floor, Rohtas Summit, NH 27, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13992632530940576967',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/ad01ea98d8ab1c5b5ee0f57c6a9d85ff8f31e2ed.webp',
      'https://img.cofynd.com/images/latest_images_2024/b20a38175fdc3c3fc0bc0ccdb53b1d4968efb9bb.webp',
      'https://img.cofynd.com/images/latest_images_2024/eb16c14dd7cac8276f3227428aff013b2325426d.webp',
      'https://img.cofynd.com/images/latest_images_2024/e19e04c4386dc8cc8f7d615e41aa5a6da6b92a71.webp'
    ]
  },
  {
    id: 3,
    name: 'Smart Work Offices',
    badge: 'Popular',
    rating: 4.0,
    area: 'Sector 5E',
    location: 'Sector 5E, Lucknow',
    price: '₹2,999',
    period: '/ month',
    priceFormatted: '₹2,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=26.780245,80.948008',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/e86dab21e4c296db3d57302bac94947be3df4caa.webp',
      'https://img.cofynd.com/images/latest_images_2024/11a86a51c8171f2921bba5b2aec7ed7bb737a7fa.webp',
      'https://img.cofynd.com/images/latest_images_2024/fa8b96fe146049e4dfef34cea9c969a5bfad149a.webp',
      'https://img.cofynd.com/images/latest_images_2024/f03d5db9d932e677a8f41aa6d8c8e44f041fff54.webp'
    ]
  },
  {
    id: 4,
    name: 'Millennial Worx',
    badge: null,
    rating: null,
    area: 'Gopal Nagar',
    location: '38/26 KHA, Meera Bai Marg, opp. Gauri Apartment, near Dainik Jagran Circle, Civil Lines, Lucknow, Uttar Pradesh 226001',
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16896229098215972244',
    images: [
      'https://img.cofynd.com/images/original/aae106a40ed9803434d7b8fb0694d3e4327faa3d.jpg',
      'https://img.cofynd.com/images/original/83ac9e01467d10a27063eb20b4e78fe9e75e4c67.jpg',
      'https://img.cofynd.com/images/original/35a94dc1ec34bb2be66ca88c66972e3a7ccaf680.jpg',
      'https://img.cofynd.com/images/original/82ad45f1b08e5c32379c536592343d72c98d6478.jpg'
    ]
  },
  // CHECK: Incuspaze's only Summit Building listing is 'Incuspaze - Rohtas Summit' — same Maps listing and photos as id 2 (possible duplicate card)
  {
    id: 5,
    name: 'Incuspaze',
    badge: null,
    rating: null,
    area: 'Gomti Nagar',
    location: '11th Floor, Rohtas Summit, NH 27, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹7,500',
    period: '/ month',
    priceFormatted: '₹7,500 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13992632530940576967',
    images: [
      'https://img.cofynd.com/images/original/f42993066142e6cdb696b6ea17b774f8221cad7d.jpg',
      'https://img.cofynd.com/images/original/51d2b17ae316cfe09231c644e3cd5e15adc00a2c.jpg',
      'https://img.cofynd.com/images/original/47fc7fc1629695d4f95657e0b991a482ca7b756b.jpg',
      'https://img.cofynd.com/images/original/9a7eb652704ce944054694d773fe65ca7cb64d7f.jpg'
    ]
  },
  {
    id: 6,
    name: 'Cubispace',
    badge: 'Popular',
    rating: 4.5,
    area: 'Gomti Nagar',
    location: 'Gomti Nagar, Lucknow',
    price: '₹3,499',
    period: '/ month',
    priceFormatted: '₹3,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=26.911650,80.944694',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/79b71d35f3651ed2e79764a39b7f460c76293282.webp',
      'https://img.cofynd.com/images/latest_images_2024/2a2dce8a8a7c93094f605f22682a241692e66762.webp',
      'https://img.cofynd.com/images/latest_images_2024/fd31d829ce3b2f9af5095bdd88ea9be26d5fbc89.webp',
      'https://img.cofynd.com/images/latest_images_2024/67a8b80731d59116c5d2e22f929ad9f268fab1d3.webp'
    ]
  },
  // CHECK: Maps listing 'Knovatik Coworking Space' shows 4.1 vs card 5.0 (card rating kept)
  {
    id: 7,
    name: 'Knovatik',
    badge: 'Popular',
    rating: 5.0,
    area: 'Gomti Nagar',
    location: 'Unit No. 410C & 411B/D, 4th Floor, Levana Cyber Heights, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10770233861675185758',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/54502005c741556bbee26d14643fca5f4757a2a7.webp',
      'https://img.cofynd.com/images/latest_images_2024/5c8437ca0bed375434e5e64cb5c4e32d20352898.webp',
      'https://img.cofynd.com/images/latest_images_2024/ed5e5918f69910bd4bbd0bec54b593faf952807b.webp',
      'https://img.cofynd.com/images/latest_images_2024/8c02155a15c4970b435d4487e7750a8890998a38.webp'
    ]
  },
  {
    id: 8,
    name: 'Qospace',
    badge: 'Popular',
    rating: 3.3,
    area: 'Butler Colony',
    location: 'Butler Colony, Lucknow',
    price: '₹9,999',
    period: '/ month',
    priceFormatted: '₹9,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=26.853280,80.956511',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/4be556bc99b1156d7370d114e53dc25a6c64386c.webp',
      'https://img.cofynd.com/images/latest_images_2024/c9214838960e8a85c85d0f73229ce01e71079d78.webp',
      'https://img.cofynd.com/images/latest_images_2024/386a5d9193fb9f5f522bb404f23c41e9c303ff00.webp',
      'https://img.cofynd.com/images/latest_images_2024/0fe16dcf8052357ffd0ee81d05fec897e92c9879.webp'
    ]
  },
  {
    id: 9,
    name: 'Ecork Coworking',
    badge: 'Popular',
    rating: 4.9,
    area: 'Indira Nagar',
    location: 'Indira Nagar Rd, B Block, Indira Nagar, Lucknow, Uttar Pradesh 226016',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12926445779279199484',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/49f44262859f6b436a3eda8013a641403269e06d.webp',
      'https://img.cofynd.com/images/latest_images_2024/4e94f4f9314bd93d47572bf026e8ea9297bcf2b8.webp',
      'https://img.cofynd.com/images/latest_images_2024/69b3ff672ce6e50c4782851299479a15817b7767.webp',
      'https://img.cofynd.com/images/latest_images_2024/1da43c3759d5bb16e236c6ebebca92ccccf39d21.webp'
    ]
  },
  // CHECK: price/period kept exactly as card shows ('₹∞ /') — looks like a missing price on your site
  {
    id: 10,
    name: 'MyBranch',
    badge: 'Popular',
    rating: 5.0,
    area: 'Hazratganj',
    location: 'Office No. 6, Ground Floor, Saran Chambers-1, 5 Park Rd, Hazratganj, Lucknow, Uttar Pradesh 226001',
    price: '₹∞',
    period: '/',
    priceFormatted: '₹∞ /',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2524525224176723102',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/7fb2ce3f4c852022fa8576c61ac662dd21077369.webp',
      'https://img.cofynd.com/images/latest_images_2024/3a4aa1e64956c7ed5a5210857688976ef8164b11.webp',
      'https://img.cofynd.com/images/latest_images_2024/7c49762b82adb5a0f2d907fc7ed0da3a2106131b.webp',
      'https://img.cofynd.com/images/latest_images_2024/3bd139ede377bb8baf67df92b150887307b69b09.webp'
    ]
  },
  {
    id: 11,
    name: 'Awfis Fun Republic',
    badge: 'Premium',
    rating: 4.8,
    area: 'Gomti Nagar',
    location: '5th Floor, Fun Republic Mall, Lohia Path, Nehru Enclave, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹8,999',
    period: '/ month',
    priceFormatted: '₹8,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12800037632051235809',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/1e1812b004ccbb70e792fc7370a045dae0feb912.webp',
      'https://img.cofynd.com/images/latest_images_2024/47c16390a89fb943bccc4f4d7c1aabbcfbbd1d80.webp',
      'https://img.cofynd.com/images/latest_images_2024/71fcdeeddebaad6c4e177ec28ec618e205b1674d.webp',
      'https://img.cofynd.com/images/latest_images_2024/bb90075b535d884b0c94552856ed343e6601bfd9.webp'
    ]
  },
  {
    id: 12,
    name: 'Regus Levana Cyber Heights',
    badge: 'Premium',
    rating: 4.6,
    area: 'Gomti Nagar',
    location: '10th Floor, Levana Cyber Heights, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹11,999',
    period: '/ month',
    priceFormatted: '₹11,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16659749582013621256',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/259617e2cfb1b28ff9881379f2ce7335e85df49e.webp',
      'https://img.cofynd.com/images/latest_images_2024/2b940532ac4fc086fbbca718e9432a1cd682049f.webp',
      'https://img.cofynd.com/images/latest_images_2024/59fa7194251299fe9c71cbce874c8151a1f5717f.webp',
      'https://img.cofynd.com/images/latest_images_2024/f82f8677d4f7b17254473b230fec0d6d45baf085.webp'
    ]
  },
  {
    id: 13,
    name: 'Incuspaze - Shalimar Iridium',
    badge: null,
    rating: null,
    area: 'Gomti Nagar',
    location: 'Mandi Parishad Rd, opp. Indira Gandhi Pratishthan, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹7,000',
    period: '/ month',
    priceFormatted: '₹7,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=15425458077152932991',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/513a630318c49f5dab8dc811bcf202bbb550dc56.webp',
      'https://img.cofynd.com/images/latest_images_2024/002e294ccbd2803d305b113808d4598833b8c7fc.webp',
      'https://img.cofynd.com/images/latest_images_2024/0c387b89def2d4d73af6bb903d727d16213627c0.webp',
      'https://img.cofynd.com/images/latest_images_2024/3f0aa5ffab25983c049b121a063906639850d7eb.webp'
    ]
  },
  {
    id: 14,
    name: 'Incuspaze Eldeco',
    badge: 'Premium',
    rating: 5.0,
    area: 'Gomti Nagar',
    location: '5th Floor, Eldeco Corporate Chambers 2, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6104388721701487576',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/4d9aa95e1b3e83e7e836cb903aea4a60b2f3beb2.webp',
      'https://img.cofynd.com/images/latest_images_2024/86bf22fafd612ded2cf7f93aef07ab10f1a55a60.webp',
      'https://img.cofynd.com/images/latest_images_2024/ed358fef7f611f861f40ba3403e9bccffc87c5ac.webp',
      'https://img.cofynd.com/images/latest_images_2024/fd3f0bd98ec5fda7541ec5bf0e2a41c335a1774d.webp'
    ]
  },
  {
    id: 15,
    name: 'Vision Spaces',
    badge: 'Popular',
    rating: 5.0,
    area: 'Gomti Nagar',
    location: '4th Floor, BBD Viraj Tower, Amar Shaheed Path, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7095761864028767937',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/aac610f16e36abd737598dadfa948ddab7643ead.webp',
      'https://img.cofynd.com/images/latest_images_2024/95ba38937e905ccc1b67dab6d09af1d9484ec80e.webp',
      'https://img.cofynd.com/images/latest_images_2024/8d13f15e404a8c41339808d9d7c5d2587b1374e7.webp',
      'https://img.cofynd.com/images/latest_images_2024/1bbb569fa95e557facfe9025ad3db688c7c77dd3.webp'
    ]
  },
  {
    id: 16,
    name: 'Incuspaze BBD Viraj Tower',
    badge: 'Premium',
    rating: 4.8,
    area: 'Gomti Nagar',
    location: '8th Floor, BBD Viraj Tower, Amar Shaheed Path, Vikrant Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹4,999',
    period: '/ month',
    priceFormatted: '₹4,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=16239298187310230355',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/c0b05f143e09e964f9aa50ff00d9699463185bf8.webp',
      'https://img.cofynd.com/images/latest_images_2024/f990cb05ccfad3bbd0340f34d0a5309eb945e421.webp',
      'https://img.cofynd.com/images/latest_images_2024/245f153beed4ef004ee75ad0c0f2e33caecab252.webp',
      'https://img.cofynd.com/images/latest_images_2024/04a99c48277357a4c7dc79eb1fedbdc5b3437498.webp'
    ]
  },
  {
    id: 17,
    name: 'WorkMire',
    badge: 'Popular',
    rating: 4.8,
    area: 'Gomti Nagar',
    location: 'Unit No. 325, Experio, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12603718058566775542',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/9df0d681a30c4f0286f930d4134a9c5049c3879e.webp',
      'https://img.cofynd.com/images/latest_images_2024/468f5419fd7d1ace13d1f4ac4fb460411a754acd.webp',
      'https://img.cofynd.com/images/latest_images_2024/671a11381c302b83fd3f00f52ac7cf3f9ff3d987.webp',
      'https://img.cofynd.com/images/latest_images_2024/f30cff41680b9651b42f40b05c0d0f2331d99def.webp'
    ]
  },
  // CHECK: Maps listing isn't categorised as coworking and has no photos (Street View only); images are from Cofynd
  {
    id: 18,
    name: 'RSA Shine & Associates',
    badge: null,
    rating: null,
    area: 'Indira Nagar',
    location: 'D-1312, Sector 19, Indira Nagar, Lucknow, Uttar Pradesh 226016',
    price: '₹8,000',
    period: '/ month',
    priceFormatted: '₹8,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=7093311503537046284',
    images: [
      'https://img.cofynd.com/images/original/fbe3bec67fc941eb2f6c158336a0b84f1183e326.jpg',
      'https://img.cofynd.com/images/original/73ef2a671804d2efb13c36307903b7ed5cd83f28.jpg',
      'https://img.cofynd.com/images/original/229238547c02d0d488c3ee3aac8630a5872ba6db.jpg',
      'https://img.cofynd.com/images/original/4eb7f60b5a8695d8b9c7c7881c1ffdc70fcf1433.jpg'
    ]
  },
  {
    id: 19,
    name: 'City Bazaar Media Pvt Ltd.',
    badge: null,
    rating: null,
    area: 'Gomti Nagar',
    location: 'Gomti Nagar, Lucknow',
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=26.922111,80.965084',
    images: [
      'https://img.cofynd.com/images/original/0f7cc3d618b323753bcd199b0a3aa0c95a1d752b.jpg',
      'https://img.cofynd.com/images/original/0c188ffd77e1b0d7a4e3f15367c05eaae58a72c0.jpg',
      'https://img.cofynd.com/images/original/f11b8a892a6767e9552830ebc19860777bae3fc7.jpg',
      'https://img.cofynd.com/images/original/3e1e936db498d90c11e7ff938091da3e95393f70.jpg'
    ]
  },
  {
    id: 20,
    name: 'IPM',
    badge: null,
    rating: null,
    area: 'Gomti Nagar',
    location: 'Gomti Nagar, Lucknow',
    price: '₹80,000',
    period: '/ month',
    priceFormatted: '₹80,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps?q=26.851329,80.983564',
    images: [
      'https://img.cofynd.com/images/original/d788746be76e93271c9d61a19b63989565cda0dd.jpg',
      'https://img.cofynd.com/images/original/4325f2e2cf667eaf727bc528633e9549c1a32306.jpg',
      'https://img.cofynd.com/images/original/74eacb57f278b3b6daacc020120c8548db52789a.jpg',
      'https://img.cofynd.com/images/original/149f94364111c3aa599fe5a15e7db25da2475d89.jpg'
    ]
  },
  // CHECK: Maps listing 'Neohub - Levana - Co-Working Spaces'; a second NeoHub Cyber Heights listing exists, and a recent review says this location closed
  {
    id: 21,
    name: 'NeoHub Levana',
    badge: 'Popular',
    rating: 5.0,
    area: 'Vibhuti Khand',
    location: 'TC-212, 2nd Floor, Levana Cyber Heights, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹5,499',
    period: '/ month',
    priceFormatted: '₹5,499 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6891141167012323112',
    images: [
      'https://img.cofynd.com/images/original/9f25d4ca799307bbc7e79d2cded2e975b40dc61a.jpg',
      'https://img.cofynd.com/images/original/a387531f1fcf199eda9a3359d3c9a10403d3c430.jpg',
      'https://img.cofynd.com/images/original/8d71373ea115f5285e95dce045dce589294f7102.jpg',
      'https://img.cofynd.com/images/original/5ed69c525bae440a632b68b667022834e581d9df.jpg'
    ]
  },
  {
    id: 22,
    name: 'Alliance',
    badge: null,
    rating: null,
    area: 'Vibhuti Khand',
    location: 'Shree Prakvin Tower D3, 31F, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹4,000',
    period: '/ month',
    priceFormatted: '₹4,000 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=6710352506596890844',
    images: [
      'https://img.cofynd.com/images/original/6a90607a509afae3f8872f0d122f33acded01d8c.jpg',
      'https://img.cofynd.com/images/original/fb6aff691f1acf783e4fd494db69d7f00df22173.jpg',
      'https://img.cofynd.com/images/original/e98f00cbe3ac12dddff70b30ce12b61397d6f2c9.jpg',
      'https://img.cofynd.com/images/original/b44dbce9fc79cdb212b2ff14f82abdf23c3997c7.jpg'
    ]
  },
  {
    id: 23,
    name: 'Summit Space',
    badge: 'Popular',
    rating: 4.4,
    area: 'Gomti Nagar',
    location: '11th Floor, Summit Building, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹6,999',
    period: '/ month',
    priceFormatted: '₹6,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10768808879565453308',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/3c9728c44a03353bbb7cbf6bd33b5513bfd1ad02.webp',
      'https://img.cofynd.com/images/latest_images_2024/6a751da32e54e97d3642abb94f3a5c067cb31b88.webp',
      'https://img.cofynd.com/images/latest_images_2024/606ee08db22e39516d5b7f398b30343bad1f8324.webp',
      'https://img.cofynd.com/images/latest_images_2024/f5c23c3431fd078e58c7ab047396b7174bd52cec.webp'
    ]
  },
  // Gomti Nagar branch — separate listing from the Hazratganj branch (id 10)
  {
    id: 24,
    name: 'MyBranch',
    badge: 'Popular',
    rating: 4.9,
    area: 'Gomti Nagar',
    location: 'Office No. 508 & 509, 5th Floor, Shalimar Titanium Corporate Park, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13140610684463150963',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/6ecdb8c848e2dc7a725d8214bf13d115d4ac87bb.webp',
      'https://img.cofynd.com/images/latest_images_2024/207b5efbe28d3345dccdc4de18bc11511425ff15.webp',
      'https://img.cofynd.com/images/latest_images_2024/fc309ecd32a84419e954c4361045306c2c97b295.webp',
      'https://img.cofynd.com/images/latest_images_2024/917241e788bc0fc744d33cf6c738c2fe545b1be9.webp'
    ]
  },
  {
    id: 25,
    name: 'Boxally',
    badge: 'Popular',
    rating: 4.8,
    area: 'Gomti Nagar',
    location: '3rd Floor, TC-14, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2421043184693087851',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/514a1fec25119c3b03d9504e2d16a047fe598d41.webp',
      'https://img.cofynd.com/images/latest_images_2024/440a404f05c341856c15708a2f4deaf8d35fb9cc.webp',
      'https://img.cofynd.com/images/latest_images_2024/a397a17565c7f869b67c2407968bf4a9a2464384.webp',
      'https://img.cofynd.com/images/latest_images_2024/b3a60a067f4571d8e7ccd6dd2e062ea447139a51.webp'
    ]
  },
  {
    id: 26,
    name: 'My Place',
    badge: null,
    rating: 4.3,
    area: 'Butler Colony',
    location: '5, Jopling Rd, near Dainik Jagran Chauraha, Hazratganj, Lucknow, Uttar Pradesh 226001',
    price: '₹7,999',
    period: '/ month',
    priceFormatted: '₹7,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11452483427697945889',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/02b0f4c994d98af3895850b7c3827dc33041ce16.webp',
      'https://img.cofynd.com/images/latest_images_2024/2f8b53d2b04890260e3d56b7803e0e8cb11845c2.webp',
      'https://img.cofynd.com/images/latest_images_2024/0f38ed6ca475596233c609e2b1484f2ae97ccf54.webp',
      'https://img.cofynd.com/images/latest_images_2024/229327c496cf25abaa28378f5098f5e03ee18407.webp'
    ]
  },
  {
    id: 27,
    name: 'The Co-Workers',
    badge: 'Popular',
    rating: 4.8,
    area: 'Gomti Nagar',
    location: 'Vikas Khand 5, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12870695672317808092',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/299f62030213e982954621582dbb5cd6b5b4b5e1.webp',
      'https://img.cofynd.com/images/latest_images_2024/805e14bf1fca7db4466d452b4c54999cd5ed8c1b.webp',
      'https://img.cofynd.com/images/latest_images_2024/2b16ff7797a20d3b4286f76363a0411e15b245d5.webp',
      'https://img.cofynd.com/images/latest_images_2024/5f059a198d708e21b9ac5f2a07e3ddafd031925e.webp'
    ]
  },
  {
    id: 28,
    name: 'Incuspaze Levana Cyber Heights',
    badge: 'Premium',
    rating: 4.8,
    area: 'Gomti Nagar',
    location: '214, 2nd Floor, Levana Cyber Heights, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
    price: '₹5,999',
    period: '/ month',
    priceFormatted: '₹5,999 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=8199006420060542034',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/baf514b1f3fb29f14f66233a82d063b73de80c07.webp',
      'https://img.cofynd.com/images/latest_images_2024/bfc6ba631ceb45372ccecc08634918ebaa0d124c.webp',
      'https://img.cofynd.com/images/latest_images_2024/40ce77b5ce7175b7620b30bba6f047da3fa83a82.webp',
      'https://img.cofynd.com/images/latest_images_2024/222deb55d9909f19ce89c8952d4d4f312cf5e332.webp'
    ]
  }
];

// Detail-page lookups (used by LucknowOfficeDetail and the root-level office route in App.jsx)
export const allLucknowOfficeCards = lucknowSpaces;
export const getLucknowOfficeCardById = (id) => findOfficeBySlug(allLucknowOfficeCards, id, "lucknow");
export const getLucknowOfficeSlug = (space) => officePath(allLucknowOfficeCards, space, "lucknow");

// Placeholder tiles (shared CoFynd stock images) - swap for Lucknow-specific photos when available.
// Only areas that have at least one listed space.
const sampleLocationImages = {
  'Gomti Nagar': 'https://img.cofynd.com/images/latest_images_2024/b51cfb296e1d87a35723c9d4a3b957be96ea73cd.webp',
  'Hazratganj': 'https://img.cofynd.com/images/latest_images_2024/a36d09bad7175ca9643ad8e88f77462bd8ec36e1.webp',
  'Indira Nagar': 'https://img.cofynd.com/images/latest_images_2024/323979251e5458d1485f20d1ff9fcc33b230dfb8.webp',
  'Vibhuti Khand': 'https://img.cofynd.com/images/latest_images_2024/d72385e6df621c44142ed89e03ee20dd32220d9d.webp',
  'Butler Colony': 'https://img.cofynd.com/images/latest_images_2024/1288e19a7b909ea9ebbe71a2fa95c50736afc7c7.webp',
  'Sector 5E': 'https://img.cofynd.com/images/latest_images_2024/ad7fa46d9bdb766ddb3da837e007525c9d1a0a11.webp',
  'Gopal Nagar': 'https://img.cofynd.com/images/latest_images_2024/d0477af6807946ce717972841b30b7b5613cdfb9.webp'
};

export const topLucknowCoworkingLocations = Object.entries(sampleLocationImages).map(([name, image]) => ({
  id: `loc-${name.toLowerCase().replace(/\s+/g, '-')}`,
  name,
  title: `Coworking Space in ${name}`,
  image,
  ctaText: 'Explore Spaces'
}));

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across Lucknow',
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

export const SPACES_PER_PAGE = 32;

export const paginationData = {
  totalPages: Math.ceil(lucknowSpaces.length / SPACES_PER_PAGE),
  initialPage: 1
};

export const areas = lucknowAreas;
export const spaces = lucknowSpaces;
export default { areas: lucknowAreas, spaces: lucknowSpaces };
