import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Amritsar coworking spaces — Google Maps + myHQ data, fetched Nov 2, 2026.
// Coworking operators only (Timeless Amritsar removed — community/events space).
// Prices only where myHQ publishes them; otherwise "Price on request".
// Google photo URLs can expire — refresh via the Places API before production.

export const amritsarSpaces = [
  {
    id: 1,
    name: 'The Work Cell - Coworking & Managed Office Spaces',
    badge: 'Top Rated',
    rating: 5.0,
    reviewCount: 51,
    area: 'Ranjit Avenue',
    location: 'Ranjit Avenue, Amritsar',
    address: 'SCO 112, 7th Floor, ICICI Building, Gumtala Sub Urban, B-Block, Ranjit Avenue, Amritsar, Punjab 143001',
    phone: '+91 99882 09239',
    hours: '9:00 AM – 9:00 PM, Mon–Sat',
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    priceNote: 'Per desk, myHQ quoted price (negotiable)',
    ctaText: 'Get Quote',
    sourceUrl: 'https://myhq.in/dedicated/coworking-space/the-work-cellcoworking--managed-office-spaces-ranjitavenue',
    googleMapsUrl: 'https://maps.google.com/?cid=15976232381914998888',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeo_aJd8nIdDvxWP-zEA7pMinozMHLkTC-n3CG_J2tx6EmuQTzxMOR5Nq1R89hSOZ4e_YLkvz8p0PjFYcVJQJDaZ79gh6JLvb62pucTqygLzYDsdyJOVoaKxcim2xiURn0g3dXDjw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLezq_Fu39nEOEp5_HNF5xzl4HFxPDHa7B4eTeHiNbLck3j6NQZAFfRrWlJy8IoY-Pj2mXbRcxqWPHm50DFhpaXTIaLIDLLPuzTiz2qi-5s29NIYiVehzys_lsA2Ui3Psz64jcX8=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdzYycSYekUFMlYTBAcsnphNj-o4Ue4InUZM1C-ReVAqr8YJDwXtEAQxRTwlvFgpEA2CxffqoAoI0okzOVwOpY0kwQOKcaaAFfdDqKx7buJge6mxwTsyAoeX_iMsXKDw9xazAk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeyxO_NhrJ_TMp8Wkg8sWZCD_MOr-43suN8xSW3P1b0rSEhyGT-8m3SGj7QSYBrM3M4BC5RVRMZcjcAkeW6PkYBlwgmQ4czXusNvqE-69-nUdgk12UD1JKfLi2v1mwRGabFnfyUug=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcwHA3wHlsERdM-_LvS3Kxs9fZX4ww0VPPxx_qOyQQfSRPUFh4V8HvRwzRflvYJLvpBu1Pgq1ksq_pM_whdH8QtNu0Zv5YPUGaZLf-c07r3vxj-KoABzv-B8GpcmckOLPHc9h0iiQ=s4800-w800-h600'
    ]
  },
  {
    id: 2,
    name: 'MyBranch - Coworking Space in Amritsar',
    badge: 'Popular',
    rating: 4.9,
    reviewCount: 41,
    area: 'Ranjit Avenue',
    location: 'Ranjit Avenue, Amritsar',
    address: '3rd Floor, SCO-75, B-Block, Ranjit Avenue, Amritsar, Punjab 143001',
    phone: '+91 84519 99506',
    hours: '9:00 AM – 8:00 PM, Mon–Sat',
    price: '₹8,500',
    period: '/ month',
    priceFormatted: '₹8,500 / month',
    priceNote: 'Per desk, myHQ quoted price (negotiable)',
    ctaText: 'Get Quote',
    sourceUrl: 'https://myhq.in/dedicated/coworking-space/my-branch-ranjitavenue',
    googleMapsUrl: 'https://maps.google.com/?cid=4176858540990232179',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf3R6wluf-x63H37_1G2TVksNvTsX1RrunSn0GPMrEMbDFE4O17j8oiGKFHhJY5VRi6mSsBGNUSavmHoXBehrRpas1UrogtlKt0eJmd_YhSTD0pGOitWlcWGSvtw9D_ToiQxms=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeSyRhYyWvZjYhl-M9YHYDAc1rHtLG2F-4_Xu-QCRXgTGcxaQFkxsh-LTMSLBz5UBkqybtuk5Orgw5FheGUixGMytrWY8lROuqIj0eH_FOvDEvGBKv-nHc9coLICxK0Ak9OAtQpZW8s-fMp=s4800-w800-h516',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdM3Hq6QWu7T7hC-KpThTu5eI4JMX4iVBtV3ojJhrLAblVJ75Z-bo8c_7iBnN4wG7FDgsfMDyi179OpZ63KmjsA208LMqSXaJjfncOzdYC4vbGS7__Hso590NaS6lqa5ocjaBNS4XehxFAN=s4800-w516-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcr7Q0xS7rKqmIa-YcPtv9jDVkrfmVEZntECY4ec_c3doEpoylPunwXt8CKd5fzKGSSlM9d5dOCxW4Jk9TUfyiyFy5LUst3TpuY5p3UxyMvimj1_UgaDdy-ORAEforsu0Z6qlkvXKq1IRXo=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcwF9N4jti7moOL5ZnUBb9djFw1yRXHzJFVEYYNI3Vr7S0bDQOK_ivOSnhm0ZK-71vt6u70xo9P1AEkdQdDL4Xu91fPzV6-wQeeIFz7hKzoveUUWeCBAmV3gKsIDPNNl3cjgE2S8-1aXviy=s4800-w800-h600'
    ]
  },
  {
    id: 3,
    name: 'The Loop Co-Work Space',
    badge: 'Top Rated',
    rating: 5.0,
    reviewCount: 13,
    area: 'Ranjit Avenue',
    location: 'Ranjit Avenue, Amritsar',
    address: 'Lower Ground Floor, SCO-106, Gumtala Sub Urban, B-Block, Ranjit Avenue, Amritsar, Punjab 143001',
    phone: '+91 62398 16016',
    hours: '9:00 AM – 9:00 PM, daily',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    website: 'https://theloopcoworkspace.com/',
    googleMapsUrl: 'https://maps.google.com/?cid=922232350769986053',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd-HuMjBtJ2jdQacO5XRCLUvBo4emh3NcWgvuw_02zfOJt2d8lTkn2a9dokEzrgWa1KYIAcFxxxyyMGvPPRuJ7G-uhPaorTiYbBOZDmxuC2Te9uu40M4XhdW4x3ug2ccurF4433pnKvpR8P=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeCtbSFhfidKoE9qBzaIMbf-NH8wi2kal5bQzij5vOHWUfj5abnqknntCRTiZ_B4AKUyycZPcWzjvv976JpR4PQYNSUxuk-6GEPlNQlCC0OPEiH5Q_LxMPpor4cvy-CgmDGFuB0LVLeFXSB=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfu_VKp8DfoGUmkvu1VyO1yY2FZ7bW589BTnF22Ax5JMJMa7SNeYwNP7N4VyAPM6VKhdfdK3oDtzub86XygCZr_7Eij1uo3kF24R5CEBhs54ByYs4_Ly1gobZeFxqiRbHT_eD6HAnnr7D1t=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcNmz6rWZhLBKbWytpqRp3N5-j1vimAwB5uWEqtSrkkEIwAgGYX43EVMOCnIDa8FRR_hqOMnnHT-ChKFAiYeSI9i0oWh28-JYfjVJSwvvTTYRwJQoDFlZOExNceB3vdD9zOfgrnZK3BpA0z=s4800-w720-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfu6r-blVRTXcWIbpdh5-OGYNbNgn9puJrPiFqGN7KaNNOgvka4yUZhDgL9Dn92IxsFTJrQcjG4l62qDp_trANOaODkdqLYo5Rr6vszoIaWtIlPuT4LYxSjaPqwDw9cV6QzSGVWsyoMWnOd=s4800-w800-h600'
    ]
  },
  {
    id: 4,
    name: 'MITS CoWorks',
    badge: 'Podcast Studio',
    rating: 4.4,
    reviewCount: 24,
    area: 'Mall Road',
    location: 'Kennedy Avenue, Amritsar',
    address: '2nd Floor, SRK Mall, Mall Rd, above Passport Office, Kennedy Avenue, Amritsar, Punjab 143001',
    phone: '+91 86990 28300',
    hours: '8:30 AM – 6:00 PM, Mon–Sat',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=11930724164876792820',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdkINfY6AEG5BjMQxtjLnUcSilTdLIrg6WL3QEcXREk1iaNJLm-eJ8KMbajwXdis8IvMZ2r2H3kNxwx_sAM0aSBBN3K6HA4RS42CHRRvqcy5ZaPCrX0f-mykMsYqEbXvbjQxr_fKnFCSxA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdoyE8EbHSuutqVmJrw0W0UpgAAew-IMxM7jnA4vqZbIamK-QCbbGnJPh9_pgopihe6tazcJSg1JBKaUd2sxt39i8xPgVec9F7-wehUWqHDDP8hzY9IZR1f8WHEtBYefvvzL7cX9cnh_Q6J=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdP9Xb29tsQGzFTavHZfj-sGRHchX45TKC50jRCweSFiRgC_F5TKI9cj34NIaN5tiTgySShfyriwfEwPxP0BdsLFP5qY0uA-PWVWE1RJk9GGBpTQlVJtmvWagacHrIsebylEa8bUbkhbHw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfC_ZI8u-F5gmszl3b2YguwkP3OJ61ISctAhR-tMGZOOgFP8pDRX0IOYVSoJxXGbQZFxAzQ3KJsd-r6fguzsjCgaJmG4yGws1U6mfrfubg73imtBm7JTSpHI2XYFOQ9Ze_BTe4Fju7hvYBs=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc7wtdR1fmj-OxytUiO3IhVw7HFxA_pFRMg63XxPzqHCWP6mZUJ8ET5DZNIQq0pv7VBgdBFFxKDIirIsPJCYTmP5ytREc1am7ktstwY2T9ETvZa3LN-1k0TbJ1nmjBWmxGNlWsNVBwjxqxv=s4800-w800-h600'
    ]
  },
  {
    id: 5,
    name: 'Smart Work Cell Co-working',
    badge: 'Best Value',
    rating: 5.0,
    reviewCount: 5,
    area: 'Ranjit Avenue',
    location: 'Ranjit Avenue, Amritsar',
    address: 'SCO 122, Gumtala Sub Urban, B-Block, Ranjit Avenue, Amritsar, Punjab 143001',
    phone: '+91 97800 36555',
    hours: '10:00 AM – 6:00 PM, Mon–Sat',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=2819563272761977154',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd8bZuenK3sKw7lIz7yD1Uuc08Dy238bvaXVGevC9Q8auD4rblUfscQEJ5AfB00xwmCQso8nfyjgOryjMCgHpp5UWwf_03yuSHNUBRdz36MisMn9-gxJuo1uwFHo4jdtg0ORCnC41oiX-M=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcc-221ffH3Y8T69EMB24A43mxuAeM3PQSbgPDx7N3o_CvPIWVHCzbGlcJLJ_r7-diFzGQjMInGW3myhPwHSt95VoeeKVdRFtiXiLj-uyVGgTjWrxPAnmUykRPAKGvSB71kEAGdcHqsrnd7=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfw-ATf3BUzJTcVZgOskb0SmkPG0vrahI3UZIrIyIP8Dr89Yb-TPYroU4CkLNOtX_BsbN46AXT2c1Rk1NPHL6oaiu72UsKIfrulnwuYmG-NnmkOWWmQjKKqQ_bIrkXO-oBlGuWsybPB5Pk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeojMIJQrlNI6dZGvMQvLu9F-s1vEftxfIG_Voh6T0ONZd5phX1wlou63dQYa0UIMHf0cusLLofFsZbAa_NVLfyWHWADj1GOpDJWJNHML0lktMOc7s3brSY0dKpY6PenwHrkP1oMw28eq2z=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfEpAs7v08K5IDy6Z8P8WESsUXGMKQCSqP05hJZXk_b0rwFPSu54Dyvew4l9TmOc4OHpWEY31vdbGRZ2d920HXpb1G9CTtoSbkLAJ6wne_Wq45Ia72VJv9GyYvT1g_rZmZ5f2B3ggfM8DI=s4800-w800-h600'
    ]
  },
  {
    // Listed on Google as "My Office"; reviews and website identify it as MySoho (now IA Spaces) Amritsar.
    id: 6,
    name: 'MySoho Coworking (IA Spaces) - Amritsar',
    badge: 'New',
    rating: 5.0,
    reviewCount: 5,
    area: 'Ranjit Avenue',
    location: 'Ranjit Avenue, Amritsar',
    address: 'Upper Ground Floor, SCO 60/61, District Shopping Centre, Gumtala Sub Urban, B-Block, Ranjit Avenue, Amritsar, Punjab 143001',
    phone: '+91 98885 77555',
    hours: '8:00 AM – 8:00 PM, Mon–Sat',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    website: 'https://mysoho.co/',
    googleMapsUrl: 'https://maps.google.com/?cid=8887313762779373779',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdw9BHREXsKEWqEG0KQiS-EqmBeGSusWxsHFjfTx08WHIuIclHEIEmZL0mbZMAUOgIFG78VEN2Il_R240nLdlTX_nPi4SaQ4Z15A_GcQWJr1aZ9QvoJhmaw5Xbpm9nkKjI3ZeDu=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfYQFzs9VKjR6b4N498jnqdD_FcVzbxAvZtnefcUfm_kr4IlFoWWXIgDjDl4NIH7VZQ46AthCAiDJ03tGh6XboZZrrGifjzb0C81JeK_A_60ypNdDqNi6Ew_VSEBQ9w3pr0pXP_pg=s4800-w800-h600'
    ]
  },
  {
    id: 7,
    name: 'Regus - 97 Acre Scheme',
    badge: 'Premium',
    rating: 5.0,
    reviewCount: 1,
    area: 'Ranjit Avenue',
    location: 'Ranjit Avenue, Amritsar',
    address: '5th Floor, SCO 54-55, 97 Acre Scheme, Gumtala Sub Urban, D-Block, Ranjit Avenue, Amritsar, Punjab 143001',
    phone: '+91 183 663 0202',
    hours: 'Open 24 hours',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    website: 'https://www.regus.com/en/in/8474',
    googleMapsUrl: 'https://maps.google.com/?cid=7548301307842920246',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfKmqbnYsED8U_R2zJjXtL_JCRV191eyMtoIhpjujCUoJzbPK94HfuojgrFjNpZxRVJtGAZ5uT22odb0hPHrY-pDw_uAIxOu7bEnBW9qZvPc_H2CCKzMBbjExRfZ0n5xl4aPMmMktTG3uY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc9EpLZU-8u7Hgptx0D06RCUCwUzFRxckMKDUx-K3CnflYd53LBOPJrBrOLG6CVRZ-g4IFHSsWfaSb0NBfL2wd0T_rxLquP3opWcdWr7eQSXq5hgipmIxo26bWyxUPuExz9VUtnBY_qS_jU=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcqXE_w0H5psAPE4qDZ3qIRUDyxzQx9aX_e3ZnDhk5-B-8kz91pf1c-OiN_xI-AAbHw-3fof8fAB8gxS11w_EeorycwjedKC16aE2mSweG0H2pbESK42AU4kb4ALOdwuVrektcklczz_3xi=s4800-w800-h600'
    ]
  },
  {
    id: 8,
    name: 'Timeless Amritsar',
    area: 'INA Colony',
    location: 'INA Colony, Amritsar',
    address: 'Near Country Inn & Suites, INA Colony, Amritsar, Punjab',
    phone: null,
    hours: '10:00 AM – 8:00 PM, Mon–Sat',
    amenities: ['High Speed WiFi', 'Meeting Rooms', 'Mail Handling'],
    capacity: 40,
    price: '₹3,500',
    period: '/ month',
    priceFormatted: '₹3,500 / month',
    deskPrice: '₹3,500',
    cabinPrice: null,
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1673004783/jrshedwepezevvg6wnvs.webp',
      'https://qdesq.imagekit.io/image/upload/tr=w-782,h-408,cm-pad_resize,bg-F3F3F3/v1672988947/ndd6wmj1ksvi4aj9ysu0.jpg'
    ]
  },
  {
    // Qdesq lists this as a coworking space despite the hotel name. Confirm with the operator.
    id: 9,
    name: 'Hotel BackPackers Nest',
    area: 'Cooper Road',
    location: 'Cooper Road, Amritsar',
    address: 'Near RS Tower, Cooper Road, Amritsar, Punjab',
    phone: null,
    hours: '9:00 AM – 7:00 PM, daily',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Tea/Coffee'],
    capacity: 35,
    price: '₹3,500',
    period: '/ month',
    priceFormatted: '₹3,500 / month',
    deskPrice: '₹3,500',
    cabinPrice: '₹8,000',
    priceNote: 'Per desk, Qdesq listing',
    ctaText: 'Get Quote',
    images: [
      'https://ik.imagekit.io/qdesq/qdesq/e3ea02bfa07e3b51b77a473081ee010e_go7tXF4a1S.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/2f20561d39ab05250dee3138e99c87de_N16huL0Vb.JPG',
      'https://ik.imagekit.io/qdesq/qdesq/fb38eb3d83ec9fd84165b1bf1055f1fe_roM6vt4eD.JPG'
    ]
  },
  {
    // The listing page shows no confirmed price, so it stays on request.
    id: 10,
    name: 'The Work Cell - Hall Bazar',
    area: 'Hall Bazar',
    location: 'Hall Bazar, Amritsar',
    address: 'Hall Bazar, Katra Ahluwalia, Amritsar, Punjab',
    phone: null,
    hours: '24 hours, daily',
    amenities: ['High Speed WiFi', 'Air Conditioning', 'Printer', 'Tea/Coffee', 'Car / Bike Parking'],
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    deskPrice: null,
    cabinPrice: null,
    ctaText: 'Get Quote',
    images: [
      'https://coworkingers.com/wp-content/uploads/2023/08/IMG_20211017_104638-min.jpg',
      'https://coworkingers.com/wp-content/uploads/2023/08/2021-10-16-min.jpg'
    ]
  }
];

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Shown for spaces with no photos yet (same placeholder the Noida / Chennai pages use).
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';

export const allAmritsarOfficeCards = amritsarSpaces.map((space) => ({
  ...space,
  city: 'Amritsar',
  images: space.images.length > 0 ? space.images : [FALLBACK_IMAGE]
}));
export default amritsarSpaces;

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const amritsarNeighborhoods = Object.entries(
  allAmritsarOfficeCards.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const amritsarOfficeCards = allAmritsarOfficeCards.slice(0, 8);
export const moreAmritsarOfficeCards = allAmritsarOfficeCards.slice(8);

export const amritsarAreas = amritsarNeighborhoods;

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
// Amritsar Office Cards Lookup Helper
// ============================================================================
export const getAmritsarOfficeCardById = (id) => findOfficeBySlug(allAmritsarOfficeCards, id, "amritsar");
export const getAmritsarOfficeSlug = (space) => officePath(allAmritsarOfficeCards, space, "amritsar");

// ============================================================================
// Top Coworking Locations in Amritsar — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAmritsarCoworkingLocations = amritsarNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: allAmritsarOfficeCards.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
