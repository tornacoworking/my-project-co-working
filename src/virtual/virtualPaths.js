// Tiny helpers kept out of virtual.js so the homepage and navbar do not bundle every city's listing data.
// "Alwar / Bhiwadi" -> "alwar-bhiwadi"
export const toVirtualSlug = (cityName) =>
  cityName.trim().toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const virtualOfficePath = (cityName) => `/virtual-office/${toVirtualSlug(cityName)}`;
