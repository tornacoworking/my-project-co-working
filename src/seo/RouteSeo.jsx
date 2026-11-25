import { Suspense, use, useEffect, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';
import Seo from './Seo.jsx';
import { faqJsonLd, organizationJsonLd, websiteJsonLd } from './site.js';
import { homeSeo, officeSeo } from './pageSeo.js';
import { faqSectionData } from '../sections/sectionData.js';
import { findOffice, normalizeCityKey } from '../routes/findOffice.js';

// City + virtual-office SEO is precomputed at build time (scripts/generate-seo-assets.mjs) and loaded on demand,
// so the homepage bundle does not carry every city's listing data.
let manifestPromise;
const loadManifest = () => (manifestPromise ||= import('./cityManifest.json').then((m) => m.default));

const HomeSeo = () => (
  <Seo
    {...homeSeo()}
    jsonLd={[organizationJsonLd(), websiteJsonLd(), faqJsonLd(faqSectionData.questions)]}
  />
);

const UnknownSeo = () => <Seo {...homeSeo()} noindex />;

const ManifestSeo = ({ pathname }) => {
  const manifest = use(loadManifest());
  const entry = manifest.routes[manifest.aliases[pathname] || pathname];
  return entry ? <Seo {...entry} /> : <UnknownSeo />;
};

// Office detail pages: look the listing up (downloads that city's data chunk), then describe it.
const OfficeSeo = ({ pathname, id, cityKey }) => {
  const [seo, setSeo] = useState(undefined);
  useEffect(() => {
    let live = true;
    findOffice(id, cityKey).then((found) => {
      if (!live) return;
      setSeo(found ? officeSeo({ card: found.card, cityLabel: found.city.label, cityKey: found.city.key, path: pathname }) : null);
    });
    return () => { live = false; };
  }, [id, cityKey, pathname]);

  if (seo === undefined) return null;
  return seo ? <Seo {...seo} type="website" /> : <UnknownSeo />;
};

const RouteSeo = () => {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/+$/, '') || '/';

  if (pathname === '/') return <HomeSeo />;

  if (matchPath('/virtual-office/:city', pathname) || matchPath('/coworking/:city', pathname)) {
    return (
      <Suspense fallback={null}>
        <ManifestSeo pathname={pathname} />
      </Suspense>
    );
  }

  const cityOffice = matchPath('/coworking/:city/:id', pathname);
  if (cityOffice) {
    return <OfficeSeo key={pathname} pathname={pathname} id={cityOffice.params.id} cityKey={normalizeCityKey(cityOffice.params.city)} />;
  }

  const rootOffice = matchPath('/:id', pathname);
  if (rootOffice) return <OfficeSeo key={pathname} pathname={pathname} id={rootOffice.params.id} />;

  return <UnknownSeo />;
};

export default RouteSeo;
