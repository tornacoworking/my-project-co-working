import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Coworking spaces — Thane, ordered area by area.
// Space list, areas, ratings, prices and photos come from the supplied data (Office Hub and Coworking Cafe
// listings of each centre). Google place IDs were converted to standard Google Maps links (maps.google.com/?cid=...).
// Spaces with no genuine photos found were left out. Checked 17 Nov 2026.

const MAPS = (cid) => `https://maps.google.com/?cid=${cid}`;

export const thaneCoworking = [
  {
    id: 33,
    name: 'Collab Cospace - Wagle Estate',
    badge: 'Top Rated',
    rating: 4.8,
    area: 'Wagle Estate',
    location: 'Wagle Estate, Thane',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('14443073274229702529'),
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/58565/Serviced-Office-%28Classic%29-Maharashtra-Thane-1201-Olethia--Business--Spaces--Road--No--16/Z--Ambica--Naga-Open-Work-Desk-1.jpeg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/58565/Serviced-Office-%28Classic%29-Maharashtra-Thane-1201-Olethia--Business--Spaces--Road--No--16/Z--Ambica--Naga-Cabin.jpeg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/58565/Serviced-Office-%28Classic%29-Maharashtra-Thane-1201-Olethia--Business--Spaces--Road--No--16/Z--Ambica--Naga-Big-Cabins.jpeg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/58565/Serviced-Office-%28Classic%29-Maharashtra-Thane-1201-Olethia--Business--Spaces--Road--No--16/Z--Ambica--Naga-Cafe---Board-Room-Seating.jpeg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/58565/Serviced-Office-%28Classic%29-Maharashtra-Thane-1201-Olethia--Business--Spaces--Road--No--16/Z--Ambica--Naga-Cabin-1.jpeg'
    ]
  },
  {
    id: 34,
    name: 'Collab Cospace - Hiranandani',
    badge: 'Verified',
    rating: 4.9,
    area: 'Hiranandani Estate',
    location: 'Hiranandani Estate, Thane',
    address: '505, Hamilton A Wing, Hiranandani Estate, Ghodbunder Road, Patlipada, Thane 400607',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    // Place ID given for this space (ChIJv3W4xrnjQCoRu_ZGZRsZbdI) decodes to a different map region than the other Thane spaces, so a name + area search link is used instead
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Collab+Cospace+Hiranandani+Hiranandani+Estate+Thane',
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51613/Serviced-Office-%28Classic%29-Maharashtra-Thane-Hiranandani-Estate-Ghodbunder-Rd-Patlipada-2024-11-25.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51613/Coworking-Space-Maharashtra-Thane-Hiranandani-Estate-Ghodbunder-Rd-Patlipada-Screenshot-2025-06-06-110441.png',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51613/Coworking-Space-Maharashtra-Thane-Hiranandani-Estate-Ghodbunder-Rd-Patlipada-Screenshot-2025-06-06-110449.png',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51613/Coworking-Space-Maharashtra-Thane-Hiranandani-Estate-Ghodbunder-Rd-Patlipada-Screenshot-2025-06-06-110530.png',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51613/Coworking-Space-Maharashtra-Thane-Hiranandani-Estate-Ghodbunder-Rd-Patlipada-Screenshot-2025-06-06-110556.png'
    ]
  },
  {
    id: 35,
    name: 'Veda Coworks',
    badge: 'Popular',
    rating: 4.9,
    area: 'Hiranandani Estate',
    location: 'Hiranandani Estate, Thane',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('15087699840249530172'),
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52310/Serviced-Office-%28Classic%29-Maharashtra-Thane-Hiranandani-Estate-Thane-West-2024-11-25-1.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52310/Serviced-Office-%28Classic%29-Maharashtra-Thane-Hiranandani-Estate-Thane-West-2025-04-27.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52310/Serviced-Office-%28Classic%29-Maharashtra-Thane-Hiranandani-Estate-Thane-West-2023-11-09.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52310/Serviced-Office-%28Classic%29-Maharashtra-Thane-Hiranandani-Estate-Thane-West-2024-11-25-3.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/52310/Serviced-Office-%28Classic%29-Maharashtra-Thane-Hiranandani-Estate-Thane-West-2024-11-25-2.webp'
    ]
  },
  {
    id: 36,
    name: 'Blue Lotus WorkAdda',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Hiranandani Estate',
    location: 'Hiranandani Estate, Thane',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('3823217352416134790'),
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51630/Serviced-Office-%28Classic%29-Maharashtra-Thane-Hiranandani-Estate-Thane-West-WhatsApp-Image-2025-05-20-at-17.07.49-2.jpeg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51630/Serviced-Office-%28Classic%29-Maharashtra-Thane-Hiranandani-Estate-Thane-West-WhatsApp-Image-2025-05-20-at-17.07.50.jpeg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51630/Serviced-Office-%28Classic%29-Maharashtra-Thane-Hiranandani-Estate-Thane-West-WhatsApp-Image-2025-05-20-at-17.07.50-4.jpeg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51630/Serviced-Office-%28Classic%29-Maharashtra-Thane-Hiranandani-Estate-Thane-West-WhatsApp-Image-2025-05-20-at-17.07.50-5.jpeg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/51630/Serviced-Office-%28Classic%29-Maharashtra-Thane-Hiranandani-Estate-Thane-West-Screenshot-2025-05-27-150227.png'
    ]
  },
  {
    id: 37,
    name: 'Ascend Cowork - Dev Corpora',
    badge: 'Verified',
    rating: 4.3,
    area: 'Cadbury Junction',
    location: 'Cadbury Junction, Thane',
    address: '1304, Dev Corpora, Eastern Express Highway, opposite Cadbury Junction, Thane West',
    price: '₹8,000',
    period: '/ Month',
    priceFormatted: '₹8,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1127128392396055561'),
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://dr3h7ptpe31k5.cloudfront.net/Assets/images/12328/Serviced-Office-(Classic)-Maharashtra-Thane-A-Wing-Cadbury-junction-Eastern-Express-Hwy-2197072.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://dr3h7ptpe31k5.cloudfront.net/Assets/images/12328/Serviced-Office-(Classic)-Maharashtra-Thane-A-Wing-Cadbury-junction-Eastern-Express-Hwy-2197075.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://dr3h7ptpe31k5.cloudfront.net/Assets/images/12328/Serviced-Office-(Classic)-Maharashtra-Thane-A-Wing-Cadbury-junction-Eastern-Express-Hwy-2197074.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://dr3h7ptpe31k5.cloudfront.net/Assets/images/12328/Serviced-Office-(Classic)-Maharashtra-Thane-A-Wing-Cadbury-junction-Eastern-Express-Hwy-2197073.jpg'
    ]
  },
  {
    id: 38,
    name: 'EcoWorks',
    badge: 'Popular',
    rating: 4.6,
    area: 'Kasarvadavali, Ghodbunder Road',
    location: 'Kasarvadavali, Ghodbunder Road, Thane',
    price: '₹6,000',
    period: '/ Month',
    priceFormatted: '₹6,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('1452565771685003186'),
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/48815/Serviced-Office-%28Classic%29-Maharashtra-Thane-West-Ghodbunder-Rd-Kasarvadavali-IMG20230128112728.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/48815/Serviced-Office-%28Classic%29-Maharashtra-Thane-West-Ghodbunder-Rd-Kasarvadavali-IMG20230128115430.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/48815/Serviced-Office-%28Classic%29-Maharashtra-Thane-West-Ghodbunder-Rd-Kasarvadavali-DSC2087.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/48815/Serviced-Office-%28Classic%29-Maharashtra-Thane-West-Ghodbunder-Rd-Kasarvadavali-ConferenceRoom.webp',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/48815/Serviced-Office-%28Classic%29-Maharashtra-Thane-West-Ghodbunder-Rd-Kasarvadavali-14.webp'
    ]
  },
  {
    id: 39,
    name: 'Kontor Space',
    badge: 'Popular',
    rating: 4.3,
    area: 'Wagle Estate',
    location: 'Wagle Estate, Thane',
    address: '9th Floor, Ashar IT Park, Jayashri Baug, Road No. 16, Wagle Industrial Estate, Thane',
    price: '₹10,500',
    period: '/ Month',
    priceFormatted: '₹10,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('9762798027016937351'),
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/10400/Serviced-Office-%28Classic%29-India-Thane-Maharashtra-Jayashri-Baug-Road-NO-16-Wagle-Industrial-Estate-881A1063.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/10400/Serviced-Office-%28Classic%29-India-Thane-Maharashtra-Jayashri-Baug-Road-NO-16-Wagle-Industrial-Estate-fullsizeoutput5cc.jpeg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/10400/Serviced-Office-%28Classic%29-India-Thane-Maharashtra-Jayashri-Baug-Road-NO-16-Wagle-Industrial-Estate-03-Common-Space.jpeg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/10400/Serviced-Office-%28Classic%29-India-Thane-Maharashtra-Jayashri-Baug-Road-NO-16-Wagle-Industrial-Estate-2021-09-02.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/10400/Serviced-Office-%28Classic%29-India-Thane-Maharashtra-Jayashri-Baug-Road-NO-16-Wagle-Industrial-Estate-02-Entrance.jpg'
    ]
  },
  {
    id: 40,
    name: 'Letswork - Meet Business Park',
    badge: 'Verified',
    rating: 3.0,
    area: 'Wagle Estate',
    location: 'Wagle Estate, Thane',
    address: '7th Floor, Meet Business Park, Road No. 16/Z, Ambica Nagar, Wagle Industrial Estate, Thane 400604',
    price: '₹7,500',
    period: '/ Month',
    priceFormatted: '₹7,500 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('13126918153430758319'),
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/lets-work-meet-business-park/3f7avq.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/lets-work-meet-business-park/kz7xhf.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/lets-work-meet-business-park/u6x5uk.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/lets-work-meet-business-park/uk9t6c.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/lets-work-meet-business-park/ybtkxc.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/lets-work-meet-business-park/5ua88a.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/lets-work-meet-business-park/hdaf64.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/lets-work-meet-business-park/wnvnga.jpg'
    ]
  },
  {
    id: 42,
    name: 'Zon CollabHub - M Square',
    badge: 'Verified',
    rating: 4.5,
    area: 'Wagle Estate',
    location: 'Wagle Estate, Thane',
    address: '403, Plot No. A-198, Shivam IT Park, Road No. 16Z, Wagle Estate, Thane (W) 400604',
    price: '₹12,000',
    period: '/ Month',
    priceFormatted: '₹12,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: MAPS('5930742236469946366'),
    images: [
      'https://cdn.coworkingcafe.com:443/images/49DD2268-E65F-4DFA-A466-23A8331ABAF4/87411.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/440C7682-CCEA-41B5-ACE8-5962F63C8B48/87411.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/40159AF4-C56D-4526-8E85-4C7843B92C48/87411.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/238F4D99-1F80-4F95-9775-1EFFDC9FCB6C/87411.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/40955733-BF23-46F5-AC99-317821F9E3C4/87411.jpg?height=675'
    ]
  },
  {
    id: 44,
    name: 'Awfis - Bhairav Milestone',
    badge: 'New Listing',
    rating: null,
    area: 'Wagle Estate',
    location: 'Wagle Estate, Thane',
    address: '1st Floor, Bhairav Milestone, Plot No. C-15, Road No. 16, Wagle Industrial Estate, Thane',
    price: '₹13,000',
    period: '/ Month',
    priceFormatted: '₹13,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Awfis+Bhairav+Milestone+Wagle+Estate+Thane',
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/33917/Coworking-Space-Maharashtra-Mumbai-Plot-No-C-15-Road-No-16-Wagle-Industrial-Estate-Thanebhairav-milestone-wagle-industrial-estate-plot-number-c-15-road-16-7340-2.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/33917/Coworking-Space-Maharashtra-Mumbai-Plot-No-C-15-Road-No-16-Wagle-Industrial-Estate-Thanebhairav-milestone-wagle-industrial-estate-plot-number-c-15-road-16-7340-3.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/33917/Coworking-Space-Maharashtra-Mumbai-Plot-No-C-15-Road-No-16-Wagle-Industrial-Estate-Thanebhairav-milestone-wagle-industrial-estate-plot-number-c-15-road-16-7340-4.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/33917/Coworking-Space-Maharashtra-Mumbai-Plot-No-C-15-Road-No-16-Wagle-Industrial-Estate-Thanebhairav-milestone-wagle-industrial-estate-plot-number-c-15-road-16-7340-1.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/33917/Coworking-Space-Maharashtra-Mumbai-Plot-No-C-15-Road-No-16-Wagle-Industrial-Estate-Thane-Bhairaav-Milestone.webp'
    ]
  },
  {
    id: 45,
    name: 'Awfis - Lodha iThink',
    badge: 'Verified',
    rating: 4.4,
    area: 'Thane West',
    location: 'Thane West, Thane',
    address: '1st Floor, A Wing, Lodha iThink Techno Campus, Pokhran Road No. 2, Off Eastern Express Highway, Thane',
    price: '₹12,000',
    period: '/ Month',
    priceFormatted: '₹12,000 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Awfis+Lodha+iThink+Thane',
    images: [
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/33847/Coworking-Space-Maharashtra-Mumbai-Pokhran-Road-No-2-Off-Eastern-Express-Highway-ThaneAnnotation%202024-04-04%20111834.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/33847/Coworking-Space-Maharashtra-Mumbai-Pokhran-Road-No-2-Off-Eastern-Express-Highway-ThaneAnnotation%202024-04-04%20111810.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/33847/Coworking-Space-Maharashtra-Mumbai-Pokhran-Road-No-2-Off-Eastern-Express-Highway-ThaneAnnotation%202024-04-04%20111852.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/33847/Coworking-Space-Maharashtra-Mumbai-Pokhran-Road-No-2-Off-Eastern-Express-Highway-ThaneAnnotation%202024-04-04%20111736.jpg',
      'https://ik.imagekit.io/officehub/tr:w-1600,h-720,fo-auto/https://officehub.s3.amazonaws.com/Assets/images/33847/Coworking-Space-Maharashtra-Mumbai-Pokhran-Road-No-2-Off-Eastern-Express-Highway-ThaneAnnotation%202024-04-04%20111753.jpg'
    ]
  },
  {
    id: 47,
    name: 'WeWork - Zenia',
    badge: 'New Listing',
    rating: null,
    area: 'Hiranandani Business Park',
    location: 'Hiranandani Business Park, Thane',
    price: '₹8,399',
    period: '/ Month',
    priceFormatted: '₹8,399 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=WeWork+Zenia+Hiranandani+Business+Park+Thane',
    images: [
      'https://cdn.coworkingcafe.com:443/images/C5D1EA54-DAE4-40C3-B741-AA77BBE06FE6/d108314350cc477bb7838e9250ca932f.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/EFBFCBC3-069B-4E1D-9D54-3EDFE393C2BC/ec2ff7daeb644dffa2b7e3d183e5ea90.jpg?height=675',
      'https://cdn.coworkingcafe.com:443/images/5C121750-97E1-4E55-A4C4-0B6E174E80A4/26abd55df54b4bf09d4fcf02d2b8697e.jpg?height=675'
    ]
  },
  {
    id: 48,
    name: 'Workamp',
    badge: 'New Listing',
    rating: null,
    area: 'Thane West',
    location: 'Thane West, Thane',
    address: 'Plot A-59, Road No. 10, near Bosch Car Service, Wagle Estate, Ambika Nagar No. 3, Thane West',
    price: '₹5,499',
    period: '/ Month',
    priceFormatted: '₹5,499 / Month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Workamp+coworking+Thane+West',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/workamp-thanewest/1.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/workamp-thanewest/2.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/workamp-thanewest/4.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/workamp-thanewest/5.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/workamp-thanewest/6.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/workamp-thanewest/7.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/workamp-thanewest/3.jpg'
    ]
  },
  {
    id: 49,
    name: 'Redbrick - Lodha iThink',
    badge: 'New Listing',
    rating: null,
    area: 'Chirak Nagar',
    location: 'Chirak Nagar, Thane',
    price: 'On Request',
    period: '',
    priceFormatted: 'Price on Request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Redbrick+Lodha+iThink+Thane',
    images: [
      'https://cdn.coworkingcafe.com:443/images/6F042915-9C91-4A04-8425-96C619818DA2/82608.jpg'
    ]
  }
];

// Spaces with no genuine photos found are left out of the site entirely.
// Operating, but no genuine photos of the space published yet.
export const thaneCoworkingPendingPhotos = [];

// Single listing page: the first 8 spaces show on top, the rest fill the sections below (Pune layout).
export const thaneSpaces = thaneCoworking;

// True when a space has a real price; 'On Request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const thaneNeighborhoods = Object.entries(
  thaneSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const thaneOfficeCards = thaneSpaces.slice(0, 8);
export const moreThaneOfficeCards = thaneSpaces.slice(8, 16);
export const finalThaneOfficeCards = thaneSpaces.slice(16, 24);
export const featuredThaneOfficeCards = thaneSpaces.slice(24);

export const thaneAreas = thaneNeighborhoods;

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
// Thane Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allThaneOfficeCards = thaneSpaces;

export const getThaneOfficeCardById = (id) => findOfficeBySlug(allThaneOfficeCards, id, "thane");
export const getThaneOfficeSlug = (space) => officePath(allThaneOfficeCards, space, "thane");

// ============================================================================
// Top Coworking Locations in Thane (Explore by Neighborhood)
// One tile for each of the busiest areas (up to 10), using a photo from a space in that area
// ============================================================================
export const topThaneCoworkingLocations = thaneNeighborhoods.slice(0, 10).map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: thaneSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
