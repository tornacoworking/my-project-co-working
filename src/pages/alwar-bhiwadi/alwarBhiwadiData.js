import { findOfficeBySlug, officePath } from "../../common/slug.js";

// Alwar & Bhiwadi coworking spaces — Google Maps data, fetched Nov 2, 2026.
// Coworking operators only (no cafes / libraries). Collabspace excluded (tax/accounting office, not coworking).
// No public pricing exists for any of these — all set to "Price on request".
// Google photo URLs can expire — refresh via the Places API before production.

export const alwarSpaces = [
  {
    id: 1,
    name: 'Dhanu Workspace',
    badge: 'Popular',
    rating: 3.8,
    reviewCount: 5,
    area: 'Daudpur',
    location: 'Daudpur, Alwar',
    address: '200 Ft Rd, near Sundarvan Resort, Daudpur, Alwar, Rajasthan 301001',
    phone: '+91 96360 34734',
    hours: '10:00 AM – 7:00 PM, Mon–Sat',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=1216634106982811601',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLc5kxU07VrYzRHiZP3rQqghSvSSTbb2M8SoEPS7nmyTohIDHcV_D9PT12HbeOYuOOliHphuMp6Wtckxr5v4Is9r-_JSfadgZQfDZD0tzjhAbvVz-4YrRanCu0WdCURZW6cbTbksHtmxe2Vu=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdDY2XUDJpxBx01sBhcXi6BzLIQS5MkWPqhipYcaipxOspK1SVZb15Mer5BuIySa2jk8z9FJ6SEqKpUx-mmHZnSOKkqV5nLa2HEaocPgmCCb2A0eZ-ZRII-q8_6sOmuYdGC0xCkXn5GIYNd=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd6e9azbtHHjlBc0KXm96fuQbcS4IrZ6KdxJ3n-WT1eBJ3AwfoiYXQRtHPGwq3q_avj5-EfhSW_I7qLrQprc1eZ782RFf9C33XOs-8m0PQ-HB7ay7CKTArAZhUwREHjdl1V7y6Ihm1BDth9=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLduN6LkS74VHVlnilHPmg_hfQVkhhynwKJBQDyImODIi7oEDMWqYma2hYKUIt3C3ReLIRbMVurNCSLFtSSHSQR-XJLLnJdTIIZna4kVCn6Hw1NzkHYONc61jHSVpxMpgwe18CPD3YM6WCu9=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe7QLk2_x_Mvmlm_uPDEoaCg65Q87n1TTzGhRp8Ad5E8EP4bdCZBvvXGfX5DQ8qtKHxUb3_-bw6aVSm2OG9_8l2jaWdNNo0zIFdrqIWHWmWX3h95EI7z8bTo5V4fCzX3lFcJk3fwwZ_dNqr=s4800-w800-h600'
    ]
  },
  {
    // Only 1 review, no phone listed — verify before publishing.
    id: 2,
    name: 'Som Prabha Work Space',
    badge: 'New',
    rating: 5.0,
    reviewCount: 1,
    area: 'Katori Wala Tibara',
    location: 'Katori Wala Tibara, Alwar',
    address: 'Som Prabha Tower, Gate No 3, Katori Wala Tibara, opposite Shalimar, Alwar, Rajasthan 301001',
    phone: null,
    hours: '9:30 AM – 7:00 PM, Mon–Sat',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=10138683932203161606',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf-B7lPA6SEvVtHjJs-f7LZ7dtl1oQeGeNDFoM9fQs8Fo2SNRBnCnvq5RNlMuqIGHbq-3ol3qljozeDDQReS77IfbhDNb0jCCNzRg1r-7-1eNCGDoMrSBx5PI2zLJEEeyngHvzL_nXeWqFh=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdteFjcVpms8ZWEW266RIAKHOGNZr0q25WDhiA_OQgQ9Y52Qmkw5t5oXTEl1bD46-34AIrVC2RckKez9Vw8B8VJgWoiOk1MQzfY9y8AvXebi11qLKakJXy61Dj4czUKtbmWWZNOEua0JEOB=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdCyGF0OYPe5yYlR5UmTN_J8yBfDIKNrot2piLFVO76OSqtVasg_sOcSNSODRJ4BNm1aqL7rZ8PDk0IapHqqDfsfCpDSiDhRxCGu_GwSD_CMhklspaubUTWjAUx0odDn52EfrV0ii9MsGbZ=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLd0JfrhLWKGMl0HmEApq3BUQVitebp4ZTAmfE4I_sMjHfEbGgAjg85HKOox13AogTUjlJNR5Ld3jjHq2dAJyiVQpo1aJESriZLnsXMVRGFjKTyIGr0OYwkhxfQe47aAznbGR7h3csxbkoLp=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLfHv78G5hmWw9fNlwrRYXEkTKWqTjIqT3ywNLKYGEelgjNzgVqpM_JNHU69w73374gdYwUQu_z3vAVZJoQPTKRTYeM6Ei6jDG-rKUpSnr9_0B5EQjEy0FGgIELrrvmJ0l3hOs_Sdc5A0BjS=s4800-w800-h600'
    ]
  }
];

export const bhiwadiSpaces = [
  {
    // No reviews; Google also tags it as a real-estate agency — verify by phone.
    id: 1,
    name: 'Co Working Space - AR Complex',
    badge: 'New',
    rating: null,
    reviewCount: 0,
    area: 'Alwar Bypass Road',
    location: 'Alwar Bypass Road, Bhiwadi',
    address: 'Shop No. 301, 3rd Floor, AR Complex, Bhiwadi Alwar Bypass Rd, near Cosmos, Bhiwadi, Rajasthan 301019',
    phone: '+91 70090 90300',
    hours: 'Open 24 hours',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=9129963996296330791',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf-dvSCeunThD8KoRQNaT0AnF4jQP7dLbOrnKev0x93qRUATsRMeAmGjW-rhIIcGvPeyu_t4ciqPdFYr8cXzsTmU64VDvq4Fg1MAsihwDu2CDG7E_FvxtezLKz-vuw9JYGAvxWKwk4RpJk=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLf_HohtZgTG8PzHVtDBs3frZMT6uGyb3_4Fkz5-LyX55Q36YMt5gs62N4aqv7Eat5nnsgepDXmTFJ09YHJRueMMePM2rKUGRWVqH4GFXNKfgzAREht6zVIcqHY2bvwSmxTDXAKKbOTw3JbS=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdmmMboDuuIDWd9tSnoHcJNq8PMaCoYl3_QCDtNPAPnyizMCA--2ODfDIrFUOTwogjhdHp-ICDpuKw2ceEkKesEWzmSndSmCmEswMWvyFPOlGXaH-1eUKYYkHUteDPqXhRlga4wn6NI9S8=s4800-w800-h329',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLeeNsEWCrrozjY5mPuntCT7_2ypUi19YMsRyfkMmYj2LUiH0QFQO4aONfFEQdn6mhtsfOPa-Axcn-XiyMGzoHQjDo2IRsABQzEUDwWvRs7SXK4Ft49D5BNfl2JXybI4CTss8eVf8KCtcr0=s4800-w800-h576',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLe-ZHoRjLYEpDRZCpqCi3xSRuFdhSfY9tzv9Gp7CmK5pKYQXjuJ_32-42A4BOEmKR7WKXwUK4NBe3TI1ydkaUoAOO_c9mdz3NtlIgW6H4vDvyP3pmGbEUSf6ZSb1aCIdXU5n9EhrTRrHakd=s4800-w800-h600'
    ]
  },
  {
    // Not affiliated with WeWork. No reviews; also tagged as real-estate agency — verify by phone.
    id: 2,
    name: 'WeWork Together - CoWorking Space',
    badge: 'New',
    rating: null,
    reviewCount: 0,
    area: 'Alwar Bypass Road',
    location: 'Alwar Bypass Road, Bhiwadi',
    address: 'Near Genesis Mall, Alwar Bypass Rd, Bhiwadi, Rajasthan 301019',
    phone: '+91 78911 28115',
    hours: '9:00 AM – 9:00 PM, daily',
    price: 'On request',
    period: '',
    priceFormatted: 'Price on request',
    ctaText: 'Get Quote',
    googleMapsUrl: 'https://maps.google.com/?cid=13520633085721244161',
    images: [
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdJHwxDp36DxBkpmSNWbFjdJGHkqXzOAgmO4mZg-rcMjExUAdXfc7P5gyUPMlKvnEsxvd057md77jZc8Ck31qj1byesxmuijkJrvNJ0Oh4fPWncPRi1cOVpJCVhKeTCBnMVAsyR-d4ZvfU=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLdy4_5u_0cu1WsFP4DHw5PATzlVj5uk9r4T-MSR4Q9Bago57z5zm188Wvmtd-Rwjhz6aVOR5izxKwk4aC5Cfz-NIfumvUDr4fC0UQGcu2dw79aezzuwDCKx5Hh8_l2E9qzU4dubtp5QUuOL=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcqclAFme1OSJPL6FoK_5MRvVdMohZtlme-59elSSZwInBqStrnNIIfCxfO37n78Yrq_c1H1AFnPyGQ5Z_qkNYfhwAy4EV22zIfHIjsZ4RaLeb67qrn4vKPXi8iKHAawRwWhDMDCOcifWSM=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLcReQKMpj-UvCrdGZSZQfqPNVAU2OmenEdUm5YbitTI6aF1_yp3XCbCZLlwAXxjvrcKGcPdz05DTZzkZb845-7gEto9j4kJiZoZIlMn8-lcM0a7nlu4G0VYohL-_vzdizYoluaIbJThzJ4j=s4800-w800-h600',
      'https://lh3.googleusercontent.com/grass-cs/AABkmLezAphppQL44Sqal0H0pMXvvS6GEknVn53pU5-ij-xJcIB0mj6xyf6zeAsHxG1QLf1N4zns25DYnr6bvl7dVciSF1Ua4Wlz_j8dJcaxvxoz-hVp05QQvyXN7SzoAYl030iY3ZW7cA1jJWs=s4800-w638-h600'
    ]
  }
];

// True when a space has a real price; 'On request' / empty / null show "Price on request" instead.
export const hasListedPrice = (space) => /\d/.test(String(space?.price ?? ''));

// Shown for spaces with no photos yet (same placeholder the Noida / Chennai pages use).
const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';

// Both lists start at id 1, so the page uses one combined list with unique ids (Alwar first, then Bhiwadi)
// and a `city` field, so each card says which city it is in.
const toCards = (spaces, city, firstId) =>
  spaces.map((space, index) => ({
    ...space,
    id: firstId + index,
    city,
    images: space.images.length > 0 ? space.images : [FALLBACK_IMAGE]
  }));

const alwarCards = toCards(alwarSpaces, 'Alwar', 1);
const bhiwadiCards = toCards(bhiwadiSpaces, 'Bhiwadi', alwarSpaces.length + 1);

export const allAlwarBhiwadiOfficeCards = [...alwarCards, ...bhiwadiCards];
export const alwarBhiwadiSpaces = allAlwarBhiwadiOfficeCards;
export default alwarBhiwadiSpaces;

// Area filter pills, built from the areas present in the listings above (most spaces first).
export const alwarBhiwadiNeighborhoods = Object.entries(
  alwarBhiwadiSpaces.reduce((counts, space) => ({ ...counts, [space.area]: (counts[space.area] || 0) + 1 }), {})
)
  .sort((a, b) => b[1] - a[1])
  .map(([area]) => area);

export const alwarBhiwadiOfficeCards = alwarBhiwadiSpaces.slice(0, 8);
export const moreAlwarBhiwadiOfficeCards = alwarBhiwadiSpaces.slice(8);

export const alwarBhiwadiAreas = alwarBhiwadiNeighborhoods;

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
// Alwar & Bhiwadi Office Lookup Helpers — slugs end in each space's own city ("-alwar" / "-bhiwadi")
// ============================================================================
export const getAlwarBhiwadiOfficeCardById = (id) =>
  findOfficeBySlug(alwarCards, id, "alwar") || findOfficeBySlug(bhiwadiCards, id, "bhiwadi");
export const getAlwarBhiwadiOfficeSlug = (space) =>
  space.city === 'Bhiwadi' ? officePath(bhiwadiCards, space, "bhiwadi") : officePath(alwarCards, space, "alwar");

// ============================================================================
// Top Coworking Locations in Alwar & Bhiwadi — one tile per area, using a photo from a space in that area
// ============================================================================
export const topAlwarBhiwadiCoworkingLocations = alwarBhiwadiNeighborhoods.map((area) => ({
  id: `loc-${area.toLowerCase().replace(/\s+/g, '-')}`,
  name: area,
  title: `Coworking Space in ${area}`,
  image: alwarBhiwadiSpaces.find((space) => space.area === area).images[0],
  ctaText: 'Explore Spaces'
}));
