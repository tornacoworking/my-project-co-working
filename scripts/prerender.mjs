// Pre-renders every route listed in src/seo/cityManifest.json (plus "/") into static HTML in dist/.
// Run after both `vite build` (client -> dist) and `vite build --ssr` (server entry -> dist-ssr).
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { pathToFileURL } from 'url';

const dist = path.resolve('dist');
// The client build's index.html is the template, but "/" overwrites it. Keep a pristine copy so this script can be re-run.
const templateCopy = path.resolve('dist-ssr/template.html');
const distIndex = path.join(dist, 'index.html');
if (fs.readFileSync(distIndex, 'utf8').includes('<!--app-html-->')) fs.copyFileSync(distIndex, templateCopy);
const template = fs.readFileSync(templateCopy, 'utf8');
if (!template.includes('<!--app-html-->') || !template.includes('<!--app-head-->')) {
  throw new Error('dist/index.html is missing the <!--app-head--> / <!--app-html--> placeholders');
}

const { render } = await import(pathToFileURL(path.resolve('dist-ssr/entry-server.js')).href);
const manifest = JSON.parse(fs.readFileSync('src/seo/cityManifest.json', 'utf8'));
const routes = ['/', ...Object.keys(manifest.routes)];

let done = 0;
const failures = [];
const renderRoute = async (route) => {
  try {
    const { html, head } = await render(route);
    const page = template.replace('<!--app-head-->', () => head).replace('<!--app-html-->', () => html);
    const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, route.slice(1), 'index.html');
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, page);
    done += 1;
  } catch (error) {
    failures.push(`${route}: ${error.message}`);
  }
};

// "/" last: it overwrites dist/index.html, which every other page uses as its template (already read above).
for (const route of routes.filter((r) => r !== '/')) await renderRoute(route);
await renderRoute('/');

// Unknown URLs fall back to the SPA shell (host rewrites should point here).
fs.writeFileSync(path.join(dist, '200.html'), template.replace('<!--app-head-->', '').replace('<!--app-html-->', ''));

// Pre-compressed copies of every page (the Vite compression plugin runs before pages are final, so it skips HTML).
const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)]));
for (const file of walk(dist).filter((f) => f.endsWith('.html'))) {
  const body = fs.readFileSync(file);
  fs.writeFileSync(`${file}.br`, zlib.brotliCompressSync(body));
  fs.writeFileSync(`${file}.gz`, zlib.gzipSync(body, { level: 9 }));
}

console.log(`prerendered ${done}/${routes.length} routes`);
if (failures.length) {
  console.error(failures.slice(0, 10).join('\n'));
  process.exitCode = 1;
}
