// One-off (re-run when the logo changes): writes the favicon set, web manifest and the 1200x630 social image into public/.
//   node scripts/generate-brand-assets.mjs
import fs from 'fs';
import sharp from 'sharp';

const LOGO = 'src/navbar/company-logo.jpg';
const HERO = 'src/home/images/cityimages/form-image.jpg';
const out = (name) => `public/${name}`;
fs.mkdirSync('public', { recursive: true });

// Square crop of the logo on white.
const meta = await sharp(LOGO).metadata();
const side = Math.min(meta.width, meta.height);
const square = (size) =>
  sharp(LOGO)
    .extract({ left: Math.floor((meta.width - side) / 2), top: Math.floor((meta.height - side) / 2), width: side, height: side })
    .resize(size, size, { fit: 'cover' })
    .png({ compressionLevel: 9 });

await square(32).toFile(out('favicon-32x32.png'));
await square(16).toFile(out('favicon-16x16.png'));
await square(180).toFile(out('apple-touch-icon.png'));
await square(192).toFile(out('android-chrome-192x192.png'));
await square(512).toFile(out('android-chrome-512x512.png'));

// favicon.ico: a single 32x32 PNG wrapped in an ICO container.
const png32 = fs.readFileSync(out('favicon-32x32.png'));
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count
header.writeUInt8(32, 6); // width
header.writeUInt8(32, 7); // height
header.writeUInt8(0, 8); // palette
header.writeUInt8(0, 9); // reserved
header.writeUInt16LE(1, 10); // colour planes
header.writeUInt16LE(32, 12); // bits per pixel
header.writeUInt32LE(png32.length, 14); // image size
header.writeUInt32LE(22, 18); // image offset
fs.writeFileSync(out('favicon.ico'), Buffer.concat([header, png32]));

fs.writeFileSync(
  out('site.webmanifest'),
  JSON.stringify(
    {
      name: 'MyCoworking',
      short_name: 'MyCoworking',
      description: "Coworking spaces, private offices and virtual offices across India.",
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#1d4ed8',
      icons: [
        { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
    },
    null,
    2,
  ),
);

// 1200x630 Open Graph / Twitter image: hero photo, navy gradient for contrast, logo and headline.
const W = 1200;
const H = 630;
const logoSize = 220;
const logo = await square(logoSize).toBuffer();
const panel = Buffer.from(
  `<svg width="${logoSize + 40}" height="${logoSize + 40}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" rx="28" fill="#ffffff"/></svg>`,
);
const overlay = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#020617" stop-opacity="0.92"/><stop offset="0.6" stop-color="#0f172a" stop-opacity="0.7"/><stop offset="1" stop-color="#0f172a" stop-opacity="0.25"/>
  </linearGradient></defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <text x="340" y="250" font-family="Arial, Helvetica, sans-serif" font-size="30" font-weight="700" letter-spacing="4" fill="#fb923c">MYCOWORKING</text>
  <text x="340" y="325" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="800" fill="#ffffff">Coworking, private &amp;</text>
  <text x="340" y="395" font-family="Arial, Helvetica, sans-serif" font-size="58" font-weight="800" fill="#ffffff">virtual offices in India</text>
  <text x="340" y="455" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#cbd5e1">Zero brokerage · Verified spaces · Free quotes</text>
</svg>`);

await sharp(HERO)
  .resize(W, H, { fit: 'cover', position: 'attention' })
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: panel, top: 175, left: 60 },
    { input: logo, top: 195, left: 80 },
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(out('og-image.jpg'));

console.log('brand assets written to public/');
