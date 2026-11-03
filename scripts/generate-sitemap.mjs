import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const SITE_URL = (process.env.SITE_URL || 'https://www.mycoworking.in').replace(/\/+$/, '');
const pagesDir = path.resolve('src/pages');
const today = new Date().toISOString().slice(0, 10);

const urls = new Map();
const add = (loc, priority) => urls.set(loc, priority);

add('/', '1.0');

for (const dir of fs.readdirSync(pagesDir, { withFileTypes: true }).filter((e) => e.isDirectory())) {
  const dataFile = fs.readdirSync(path.join(pagesDir, dir.name)).find((name) => name.endsWith('Data.js'));
  if (!dataFile) continue;

  add(`/coworking/${dir.name}`, '0.8');

  const data = await import(pathToFileURL(path.join(pagesDir, dir.name, dataFile)).href);
  const cardsKey = Object.keys(data).find((key) => /^all\w*OfficeCards$/.test(key));
  const slugKey = Object.keys(data).find((key) => /^get\w*OfficeSlug$/.test(key));
  if (!cardsKey || !slugKey) continue;

  for (const card of data[cardsKey]) add(data[slugKey](card), '0.6');
}

const homeData = await import(pathToFileURL(path.resolve('src/virtual/virtual.js')).href).catch(() => null);
if (homeData) {
  for (const city of homeData.virtualOfficeCities) add(homeData.virtualOfficePath(city.name), '0.7');
}

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...[...urls].map(([loc, priority]) =>
    `  <url><loc>${SITE_URL}${loc}</loc><lastmod>${today}</lastmod><priority>${priority}</priority></url>`),
  '</urlset>',
  '',
].join('\n');

fs.mkdirSync('public', { recursive: true });
fs.writeFileSync('public/sitemap.xml', xml);
fs.writeFileSync('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log(`sitemap.xml: ${urls.size} URLs for ${SITE_URL}`);
