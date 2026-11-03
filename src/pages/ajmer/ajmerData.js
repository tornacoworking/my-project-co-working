import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Ajmer workspaces — sourced from Google Maps (Places) data + Office Hub listing, Nov 2026.
// Price is only filled where a public listing shows it; everything else is "Price on request".
// Ratings are Google ratings at time of fetch. Badges are editorial labels based on rating/review count.
// NOTE: Google photo URLs (lh3.googleusercontent.com) can expire; refresh them via the Places API before production.

export const ajmerSpaces = [
  // ---------- Dedicated coworking ----------
  {
    id: 1,
    name: 'MyBranch - Coworking Space in Ajmer',
    badge: 'Top Rated',
    rating: 4.9,
    area: 'Aravali Vihar',
    location: '3rd Floor, Kamleshwaram, Plot No 88, behind Vaishali Petrol Pump, Aravali Vihar Colony, Ajmer',
    price: '₹6,500',
    period: '/ month',
    priceFormatted: '₹6,500 / month',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=12720813406357861888',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLecuu2i_lXwYBi9iNUPsCyCZey_9YZEXN74-jOSB1rSzkU1x3b0qPc4siUKgs8qCOQ0NlCQgfPmKPG2zwj8e6X0rohlT6vM6SXE6mEcu62Wq0Z7AFtNE--HbiVwrtUaNbdGsMc=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfAFEpjN478eK3oyhqPFm6kabXNIEi-LAoI-7LPGPXP_r42liWJYPYxEkfKNDrhJVSKTnpS5c4mA5GVEnjSpkpUnyex49WRSsOIOIKms_YntHZtNtoVkfwAIbEhz89R_kWqrFDR=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeFF-oKT8OIus770VuobXTR6CtVyW8YA3EZUKAViTglHalTO41-xwrAYFbI3kxUnxV0l0iTlycrJreE2YQcPFaIgf7FgNvync90KCYRoalfxpoKHC0fHkQLL-dSp8miQxBNqAnIZA=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfAiDNkecV-I8KfH0rAwPKNwQ2z2KubT9j3a86R-sV-_WilCjPAXpDX4zmfSqvKEUx2ZFDvo9D67u5ih9LDJjH2x6kbHMyxDDlFLoiDkf35sOS53jABLqogY1cBxElPg7kSmxWZo9GniMs=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeWyJ4auT1zfxtNSmL800STwNNaXDaSrnF5By0hR_Wof2Dsru-pF6BdfJCwagsNQ_lYTFoMad2Ii-zLNqWp22TeArP3joKdZfbdEzJ4nqhpakXWgK1PqqpN_l6XmWlbtVevWnwqGg=s4800-w800-h600'
    ]
  },
  {
    id: 2,
    name: 'Chhaon Co-Working',
    badge: 'Lake View',
    rating: 5.0,
    area: 'Ana Sagar',
    location: 'Third Floor, Plot-14, Ana Sagar Circular Rd, opp. Anasagar Chaupati Garden, Ganapati Nagar, Ajmer',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1766221743610384731',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcybGgeTCWPktjpXoxu2BGv_AOYeoXJBosH3WBIQP41MxItasv9o18RbMVPoVZSimVwEagpLCZqv6pR0YJtOTySnogl5yyR5-bIGOOJFjcYPIb8z8AQVi26ruQYRZOVtQcsdLtCNob6P7m-=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc6ugEeMpZSKqpuPCHD5JLeyrljPd2m6xjZKUEgusYlpsnbnu-JVMPMqdM2bMo1-AC_ZtbqoVMotlz8BCVjdcnKLHowP7Sjt-zgoETdcOhMLFuuYMzBkkA_EugMsykIM8ZEsXp2Ap2Kt_cY=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcbqfBmTUxC31gfOMDs-TYWIxvrZ8a8wcxgzGJWUVWzUxzfPIOhvSJYXR67A3I3RqCd-t7-smODgdPelHUqH78zJnpJFi2we4Rxfc4oD2IUGaLwt6xMHml41Q6hnXruhbC3Jb_k1kyPP1Y6=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcJbCs53xBy1Lk3SBuZWPaaP8LB6mWSROk3eOnByZQSVof_sMlkAW443KmGsSUbUpKOpo1_j9wS0BE0X6wTwo7ewP3wRTSAWuZXTRdj2ox5IZAwv8jqo_pUMLGvxsI9WikaEx525I-l6k7Q=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf7_3g9VwkFuJES7RjEasKLzVEUt1iIxrdTXrdVRChTHhxFlF16ycurHmG80L8cVqxqZzF98zKLefwkXhPEqwUWf3ug7eay1Va0rI0HdEWLUwVteVh7dwqYlvz-PfigXkqt5Dgivdv55526=s4800-w800-h600'
    ]
  },
  {
    // Low confidence: only 2 Google reviews, no phone listed — verify before publishing.
    id: 3,
    name: 'Ajmer Co Working Space',
    badge: 'New',
    rating: 5.0,
    area: 'Vaishali Nagar',
    location: 'C21, Vaishali Rd, near Bikaner Mishthan Bhandar, Saket Colony, Vaishali Nagar, Ajmer',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=770113030089553859',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLccQd9WsPxQXsF5idji4Uqs1fLC1hzrlCt4HrazHgk7ZOO5qbQ9VmTFaJGe46FqP8qF-oytZlTITsgFfITIdeAeEbAEM24qPoYYSC_OifYHIECLPZjOWOwCLwFwqL6ffk5u_RxH=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLds__FmwP9dh0EeVWJZ6Qw7rs9klXjpUcHgEJ2jLR5s_b0syDlhHzxHLBCpK2HxWlwcRi1ZOpoyTnf1fIyuWAbltSEfG9huMqkzTv4Xm8OKs3DXQqO1ciovkNUsUqZ7RI3OydRGVw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfFHkD5gXc-pRA6Y-w66qV-4BnVL0Y8q2jdUEfpyNzlVfZU8nq1a2_TauCGkGh1E4-D4kB922GJLz3jV4i8WX23Zb62--xouwsWny0OmKGWmni13_AlFZRDNOOQpYk95AUzEgw=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcMxF4z1NeEUdVfmNbaaaBUNe0_Qut2NJbMFut2vvOaVhAhlUmQV9WTPAVr8I1Rocmma4RPdypMJGTUn-XleGpIgKawgI3ToVKOPZEm9CgkrwSSUAn7n0Kr12P6kL8FOt-xH5h0RQ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc8fd6xxbyFa_iKBnqCPJbwqIgOJ8hS48Cb-SJFFaleewqbwYv4CRr08evftVUB4ALWiu34CaSeomAnr0LGius4wKKbzmlmIEFcBFBE9cucni9wr5ve4dKsvLfLLBylq6pHN1iu=s4800-w800-h600'
    ]
  },
];

export default ajmerSpaces;

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const ajmerNeighborhoods = Object.entries(
  ajmerSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const ajmerOfficeCards = ajmerSpaces.slice(0, 8);
export const moreAjmerOfficeCards = ajmerSpaces.slice(8);

export const ajmerAreas = ajmerNeighborhoods;

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
// Ajmer Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allAjmerOfficeCards = ajmerSpaces;

export const getAjmerOfficeCardById = (id) => findOfficeBySlug(allAjmerOfficeCards, id, "ajmer");
export const getAjmerOfficeSlug = (space) => officePath(allAjmerOfficeCards, space, "ajmer");

// ============================================================================
// Top Coworking Locations in Ajmer — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAjmerCoworkingLocations = ajmerNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: ajmerSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
