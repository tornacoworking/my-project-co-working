import { officeCities } from './cityRoutes.js';

// The URL spells a few cities two ways; the data folders use these keys.
export const normalizeCityKey = (slug = '') => ({ bhubaneshwar: 'bhubaneswar', amravati: 'amaravati' }[slug] || slug);

const cache = new Map();

// Office slugs end with their city ("futops-co-working-kharadi-pune"), so try the matching city first
// (longest key wins, so "...-navi-mumbai" is tried before "mumbai"), then every other city.
const candidatesFor = (id, cityKey) => {
  const base = id.replace(/-\d+$/, '');
  const preferred = officeCities.filter((c) => c.key === cityKey);
  const bySuffix = officeCities
    .filter((c) => c.key !== cityKey && (base.endsWith(`-${c.key}`) || id.endsWith(`-${c.key}`)))
    .sort((a, b) => b.key.length - a.key.length);
  const rest = officeCities.filter((c) => !preferred.includes(c) && !bySuffix.includes(c));
  return [...preferred, ...bySuffix, ...rest];
};

/**
 * Finds the office with this slug. Downloads city data chunks one at a time, best guess first.
 * Resolves to { city, card } or null.
 */
export const findOffice = (id, cityKey) => {
  const key = `${cityKey || ''}|${id}`;
  if (!cache.has(key)) {
    cache.set(key, (async () => {
      for (const city of candidatesFor(id, normalizeCityKey(cityKey))) {
        const data = await city.loadData();
        const card = data[city.getter]?.(id);
        if (card) return { city, card };
      }
      return null;
    })());
  }
  return cache.get(key);
};
