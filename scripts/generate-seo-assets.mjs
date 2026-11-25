// Runs before every build. Reads the real listing data and writes:
//   public/sitemap.xml, public/robots.txt   (absolute URLs from VITE_SITE_URL)
//   src/seo/cityManifest.json               (title/description/JSON-LD per city + virtual-office route; also the prerender route list)
//   src/data/cityPrices.json                ("from" price per homepage city, from the listings)
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
import { register } from 'node:module';

// Image imports only make sense in Vite, so Node gets an empty string for them.
register('data:text/javascript,' + encodeURIComponent("export async function load(url, context, next) { if (/\.(jpe?g|png|svg|webp|avif)$/.test(url)) return { format: 'module', source: 'export default \"\"', shortCircuit: true }; return next(url, context); }"));

// Pick up VITE_SITE_URL from .env.production when it is not already in the environment.
if (!process.env.VITE_SITE_URL && !process.env.SITE_URL && fs.existsSync('.env.production')) {
  const m = fs.readFileSync('.env.production', 'utf8').match(/^VITE_SITE_URL=(.+)$/m);
  if (m) process.env.VITE_SITE_URL = m[1].trim();
}

const load = (file) => import(pathToFileURL(path.resolve(file)).href);
const { SITE_URL } = await load('src/seo/site.js');
const { citySeo, virtualSeo } = await load('src/seo/pageSeo.js');
const { officeCities } = await load('src/routes/cityRoutes.js');

const labelByKey = Object.fromEntries(officeCities.map((c) => [c.key, c.label]));
const normalizeKey = (slug) => ({ bhubaneshwar: 'bhubaneswar', amravati: 'amaravati' }[slug] || slug);
const titleCase = (slug) => slug.split('-').filter(Boolean).map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');

const pagesDir = path.resolve('src/pages');
const today = new Date().toISOString().slice(0, 10);
const urls = new Map();
const add = (loc, priority) => urls.set(loc, priority);
const routes = {};
const aliases = { '/coworking/bhubaneshwar': '/coworking/bhubaneswar', '/coworking/amaravati': '/coworking/amravati' };
const prices = {};
const cityIndex = [];

add('/', '1.0');

for (const dir of fs.readdirSync(pagesDir, { withFileTypes: true }).filter((e) => e.isDirectory())) {
  const dataFile = fs.readdirSync(path.join(pagesDir, dir.name)).find((name) => name.endsWith('Data.js'));
  if (!dataFile) continue;

  const cityPath = `/coworking/${dir.name}`;
  add(cityPath, '0.8');

  const data = await load(path.join('src/pages', dir.name, dataFile));
  const cardsKey = Object.keys(data).find((key) => /^all\w*OfficeCards$/.test(key));
  const slugKey = Object.keys(data).find((key) => /^get\w*OfficeSlug$/.test(key));
  const seen = new Set();
  const cards = (data[cardsKey] || []).filter((card) => !seen.has(card.id) && seen.add(card.id));
  const label = labelByKey[normalizeKey(dir.name)] || titleCase(dir.name);

  const seo = citySeo({ label, path: cityPath, cards, getSlug: data[slugKey] });
  cityIndex.push({ slug: dir.name, name: label });
  routes[cityPath] = { title: seo.title, description: seo.description, canonical: seo.canonical, jsonLd: seo.jsonLd };
  if (seo.minPrice) prices[dir.name] = seo.minPrice;

  if (cardsKey && slugKey) for (const card of cards) add(data[slugKey](card), '0.6');
}

const virtualData = await load('src/virtual/virtual.js');
for (const city of virtualData.virtualOfficeCities) {
  const p = virtualData.virtualOfficePath(city.name);
  add(p, '0.7');
  const seo = virtualSeo({ name: city.name, path: p });
  routes[p] = { title: seo.title, description: seo.description, canonical: seo.canonical, jsonLd: seo.jsonLd };
}

const virtualSlugs = new Set(virtualData.virtualOfficeCities.map((city) => city.slug));
for (const city of cityIndex) city.virtual = virtualSlugs.has(city.slug);
cityIndex.sort((a, b) => a.name.localeCompare(b.name));
fs.writeFileSync('src/data/cityIndex.json', JSON.stringify(cityIndex));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...[...urls].map(([loc, priority]) => `  <url><loc>${SITE_URL}${loc}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`),
  '</urlset>',
  '',
].join('\n');

fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/sitemap.xml', xml);
fs.writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
fs.writeFileSync('src/seo/cityManifest.json', JSON.stringify({ routes, aliases }));
fs.writeFileSync('src/virtual/virtualCityNames.json', JSON.stringify(virtualData.virtualOfficeCities.map((city) => city.name)));
fs.writeFileSync('src/data/cityPrices.json', JSON.stringify(prices));
console.log(`seo assets: ${urls.size} sitemap URLs, ${Object.keys(routes).length} prerenderable routes for ${SITE_URL}`);
