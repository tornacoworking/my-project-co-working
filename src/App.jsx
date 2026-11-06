import { useEffect } from 'react';
import { Routes, Route, useParams, useLocation, matchPath } from 'react-router-dom';
import Homepage from './home/Homepage';
import Navbar from './navbar/Navbar';
import { getDehliOfficeCardById } from './pages/delhi/delhiData';
import { getPuneOfficeCardById } from './pages/pune/puneData';
import { getBangaloreOfficeCardById } from './pages/bangalore/bangaloreData';
import { getGurugramOfficeCardById } from './pages/gurugram/gurugramData';
import { getIndoreOfficeCardById } from './pages/indore/indoreData';
import { getBhubaneshwarOfficeCardById } from './pages/bhubaneswar/bhubaneswarData';
import WhatsAppButton from './components/WhatsAppButton';
import VirtualOffice from './virtual/Virtualoffice';
import { getVirtualOfficeCity } from './virtual/virtual';

import AhmedabadPage from './pages/ahmedabad/Ahmedabad';
import BangalorePage from './pages/bangalore/Bangalore';
import BangaloreOfficeDetail from './pages/bangalore/BangaloreOfficeDetail';
import BhubaneswarPage from './pages/bhubaneswar/Bhubaneswar';
import ChandigarhPage from './pages/chandigarh/Chandigarh';
import ChandigarhOfficeDetail from './pages/chandigarh/ChandigarhOfficeDetail';
import { getChandigarhOfficeCardById } from './pages/chandigarh/chandigarhData';
import ChennaiPage from './pages/chennai/Chennai';
import ChennaiOfficeDetail from './pages/chennai/ChennaiOfficeDetail';
import { getChennaiOfficeCardById } from './pages/chennai/chennaiData';
import CoimbatorePage from './pages/coimbatore/Coimbatore';
import CoimbatoreOfficeDetail from './pages/coimbatore/CoimbatoreOfficeDetail';
import { getCoimbatoreOfficeCardById } from './pages/coimbatore/coimbatoreData';
import DelhiPage from './pages/delhi/Delhi';
import DelhiOfficeDetails from './pages/delhi/DelhiOfficeDetails';
import GoaPage from './pages/goa/Goa';
import GoaOfficeDetail from './pages/goa/GoaOfficeDetail';
import { getGoaOfficeCardById } from './pages/goa/goaData';
import GurugramPage from './pages/gurugram/Gurugram';
import GurugramOfficeDetail from './pages/gurugram/GurugramOfficialDetail';
import HyderabadPage from './pages/hyderabad/Hyderabad';
import HyderabadOfficeDetail from './pages/hyderabad/HyderabadOfficeDetail';
import { getHyderabadOfficeCardById } from './pages/hyderabad/hyderabadData';
import IndorePage from './pages/indore/Indore';
import IndoreOfficeDetails from './pages/indore/Indoreofficedetails';
import JaipurPage from './pages/jaipur/Jaipur';
import JaipurOfficeDetail from './pages/jaipur/JaipurOfficeDetail';
import { getJaipurOfficeCardById } from './pages/jaipur/jaipurData';
import KochiPage from './pages/kochi/Kochi';
import KochiOfficeDetail from './pages/kochi/KochiOfficeDetail';
import { getKochiOfficeCardById } from './pages/kochi/kochiData';
import KolkataPage from './pages/kolkata/Kolkata';
import LucknowPage from './pages/lucknow/Lucknow';
import LucknowOfficeDetail from './pages/lucknow/LucknowOfficeDetail';
import { getLucknowOfficeCardById } from './pages/lucknow/lucknowData';
import MumbaiPage from './pages/mumbai/Mumbai';
import MumbaiOfficeDetail from './pages/mumbai/MumbaiOfficeDetail';
import { getMumbaiOfficeCardById } from './pages/mumbai/mumbaiData';
import NoidaPage from './pages/noida/Noida';
import NoidaOfficeDetail from './pages/noida/NoidaOfficeDetail';
import { getNoidaOfficeCardById } from './pages/noida/noidaData';
import PunePage from './pages/pune/Pune';
import PuneOfficeDetail from './pages/pune/PuneOfficeDetail';
import BhubaneshwarOfficeDetail from './pages/bhubaneswar/BhubaneshwarOfficeDetail';
import AhmedabadOfficeDetails from './pages/ahmedabad/AhmedabadOfficeDetails';
import { getAhmedabadOfficeCardById } from './pages/ahmedabad/ahmedabadData';
import AgraPage from './pages/agra/Agra';
import AgraOfficeDetail from './pages/agra/AgraOfficeDetail';
import { getAgraOfficeCardById } from './pages/agra/agraData';
import AhmednagarPage from './pages/ahmednagar/Ahmednagar';
import AhmednagarOfficeDetail from './pages/ahmednagar/AhmednagarOfficeDetail';
import { getAhmednagarOfficeCardById } from './pages/ahmednagar/ahmednagarData';
import AjmerPage from './pages/ajmer/Ajmer';
import AjmerOfficeDetail from './pages/ajmer/AjmerOfficeDetail';
import { getAjmerOfficeCardById } from './pages/ajmer/ajmerData';
import AlwarBhiwadiPage from './pages/alwar-bhiwadi/AlwarBhiwadi';
import AlwarBhiwadiOfficeDetail from './pages/alwar-bhiwadi/AlwarBhiwadiOfficeDetail';
import { getAlwarBhiwadiOfficeCardById } from './pages/alwar-bhiwadi/alwarBhiwadiData';
import AmbalaPage from './pages/ambala/Ambala';
import AmbalaOfficeDetail from './pages/ambala/AmbalaOfficeDetail';
import { getAmbalaOfficeCardById } from './pages/ambala/ambalaData';
import AmaravatiPage from './pages/amravati/Amaravati';
import AmaravatiOfficeDetail from './pages/amravati/AmaravatiOfficeDetail';
import { getAmaravatiOfficeCardById } from './pages/amravati/amaravatiData';
import AmritsarPage from './pages/amritsar/Amritsar';
import AmritsarOfficeDetail from './pages/amritsar/AmritsarOfficeDetail';
import { getAmritsarOfficeCardById } from './pages/amritsar/amritsarData';
import AnandPage from './pages/anand/Anand';
import AnandOfficeDetail from './pages/anand/AnandOfficeDetail';
import { getAnandOfficeCardById } from './pages/anand/anandData';
import AyodhyaPage from './pages/ayodhya/Ayodhya';
import AyodhyaOfficeDetail from './pages/ayodhya/AyodhyaOfficeDetail';
import { getAyodhyaOfficeCardById } from './pages/ayodhya/ayodhyaData';
import AurangabadPage from './pages/aurangabad/Aurangabad';
import AurangabadOfficeDetail from './pages/aurangabad/AurangabadOfficeDetail';
import { getAurangabadOfficeCardById } from './pages/aurangabad/aurangabadData';
import AgartalaPage from './pages/agartala/Agartala';
import AgartalaOfficeDetail from './pages/agartala/AgartalaOfficeDetail';
import { getAgartalaOfficeCardById } from './pages/agartala/agartalaData';
import AizawlPage from './pages/aizawl/Aizawl';
import AizawlOfficeDetail from './pages/aizawl/AizawlOfficeDetail';
import { getAizawlOfficeCardById } from './pages/aizawl/aizawlData';
import KolkataOfficeDetail from './pages/kolkata/KolkataOfficeDetail';
import { getKolkataOfficeCardById } from './pages/kolkata/kolkataData';

const SITE_NAME = 'MyCoworking';

// Every city that has office detail pages: its card lookup and the detail component to render.
// Order matters: the first city whose data contains the slug wins.
const OFFICE_CITIES = [
  { key: 'delhi', label: 'Delhi', getCard: getDehliOfficeCardById, Detail: DelhiOfficeDetails },
  { key: 'pune', label: 'Pune', getCard: getPuneOfficeCardById, Detail: PuneOfficeDetail },
  { key: 'bangalore', label: 'Bangalore', getCard: getBangaloreOfficeCardById, Detail: BangaloreOfficeDetail },
  { key: 'hyderabad', label: 'Hyderabad', getCard: getHyderabadOfficeCardById, Detail: HyderabadOfficeDetail },
  { key: 'kochi', label: 'Kochi', getCard: getKochiOfficeCardById, Detail: KochiOfficeDetail },
  { key: 'chandigarh', label: 'Chandigarh', getCard: getChandigarhOfficeCardById, Detail: ChandigarhOfficeDetail },
  { key: 'jaipur', label: 'Jaipur', getCard: getJaipurOfficeCardById, Detail: JaipurOfficeDetail },
  { key: 'ahmedabad', label: 'Ahmedabad', getCard: getAhmedabadOfficeCardById, Detail: AhmedabadOfficeDetails },
  { key: 'gurugram', label: 'Gurugram', getCard: getGurugramOfficeCardById, Detail: GurugramOfficeDetail },
  { key: 'indore', label: 'Indore', getCard: getIndoreOfficeCardById, Detail: IndoreOfficeDetails },
  { key: 'mumbai', label: 'Mumbai', getCard: getMumbaiOfficeCardById, Detail: MumbaiOfficeDetail },
  { key: 'goa', label: 'Goa', getCard: getGoaOfficeCardById, Detail: GoaOfficeDetail },
  { key: 'coimbatore', label: 'Coimbatore', getCard: getCoimbatoreOfficeCardById, Detail: CoimbatoreOfficeDetail },
  { key: 'bhubaneswar', label: 'Bhubaneswar', getCard: getBhubaneshwarOfficeCardById, Detail: BhubaneshwarOfficeDetail },
  { key: 'noida', label: 'Noida', getCard: getNoidaOfficeCardById, Detail: NoidaOfficeDetail },
  { key: 'chennai', label: 'Chennai', getCard: getChennaiOfficeCardById, Detail: ChennaiOfficeDetail },
  { key: 'lucknow', label: 'Lucknow', getCard: getLucknowOfficeCardById, Detail: LucknowOfficeDetail },
  { key: 'agra', label: 'Agra', getCard: getAgraOfficeCardById, Detail: AgraOfficeDetail },
  { key: 'ahmednagar', label: 'Ahmednagar', getCard: getAhmednagarOfficeCardById, Detail: AhmednagarOfficeDetail },
  { key: 'ajmer', label: 'Ajmer', getCard: getAjmerOfficeCardById, Detail: AjmerOfficeDetail },
  { key: 'alwar-bhiwadi', label: 'Alwar & Bhiwadi', getCard: getAlwarBhiwadiOfficeCardById, Detail: AlwarBhiwadiOfficeDetail },
  { key: 'ambala', label: 'Ambala', getCard: getAmbalaOfficeCardById, Detail: AmbalaOfficeDetail },
  { key: 'amaravati', label: 'Amravati', getCard: getAmaravatiOfficeCardById, Detail: AmaravatiOfficeDetail },
  { key: 'amritsar', label: 'Amritsar', getCard: getAmritsarOfficeCardById, Detail: AmritsarOfficeDetail },
  { key: 'anand', label: 'Anand', getCard: getAnandOfficeCardById, Detail: AnandOfficeDetail },
  { key: 'ayodhya', label: 'Ayodhya', getCard: getAyodhyaOfficeCardById, Detail: AyodhyaOfficeDetail },
  { key: 'aurangabad', label: 'Aurangabad', getCard: getAurangabadOfficeCardById, Detail: AurangabadOfficeDetail },
  { key: 'agartala', label: 'Agartala', getCard: getAgartalaOfficeCardById, Detail: AgartalaOfficeDetail },
  { key: 'aizawl', label: 'Aizawl', getCard: getAizawlOfficeCardById, Detail: AizawlOfficeDetail },
  { key: 'kolkata', label: 'Kolkata', getCard: getKolkataOfficeCardById, Detail: KolkataOfficeDetail },
];

// The route is spelled both ways; the data files use "bhubaneswar".
const normalizeCityKey = (slug = '') => ({ bhubaneshwar: 'bhubaneswar', amravati: 'amaravati' }[slug] || slug);

const titleCaseSlug = (slug = '') =>
  slug.split('-').filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// Finds an office by slug, trying the city named in the URL first and then every other city.
const findOffice = (id, cityKey) => {
  const candidates = [
    ...OFFICE_CITIES.filter((city) => city.key === cityKey),
    ...OFFICE_CITIES.filter((city) => city.key !== cityKey),
  ];
  for (const city of candidates) {
    const card = city.getCard(id);
    if (card) return { card, city };
  }
  return null;
};

const HOME_SEO = {
  title: `Coworking Space in India | Private Offices, Dedicated Desks & Virtual Offices | ${SITE_NAME}`,
  description: 'Find and book coworking spaces, private offices, dedicated desks, meeting rooms and virtual offices across 18+ cities in India. Compare prices and get a free quote with MyCoworking.',
};

const buildOfficeSeo = ({ card, city }) => {
  const area = card.area || (card.location ? card.location.split(',')[0].trim() : '');
  const place = area ? `${area}, ${city.label}` : city.label;
  const price = card.priceFormatted || '';
  const image = Array.isArray(card.images) ? card.images[0] : card.image;
  return {
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: card.name,
      description: `Coworking space in ${place}`,
      ...(image ? { image } : {}),
      address: { '@type': 'PostalAddress', addressLocality: city.label, streetAddress: card.location || place, addressCountry: 'IN' },
    },
    title: `${card.name} - Coworking Space in ${place} | ${SITE_NAME}`,
    description: `Book ${card.name}, a coworking space in ${place}${price ? ` starting at ${price}` : ''}. View photos, amenities, plans and location, and get a free quote from ${SITE_NAME}.`,
  };
};

const buildCitySeo = (cityLabel) => ({
  title: `Coworking Space in ${cityLabel} | Shared Desks, Private Offices & Meeting Rooms | ${SITE_NAME}`,
  description: `Explore the best coworking spaces in ${cityLabel}. Compare prices, amenities and locations for shared desks, private cabins and managed offices, and book a free site visit with ${SITE_NAME}.`,
});

const buildVirtualSeo = (cityName) => ({
  title: `Virtual Office in ${cityName} | GST & Company Registration Address | ${SITE_NAME}`,
  description: `Get a verified virtual office address in ${cityName} for GST, MCA and business registration, with mail handling and quick setup. Request a quote from ${SITE_NAME}.`,
});

// Works out the title and description for the current URL.
const resolveSeo = (pathname) => {
  if (pathname === '/') return HOME_SEO;

  const virtual = matchPath('/virtual-office/:city', pathname);
  if (virtual) {
    const city = getVirtualOfficeCity(virtual.params.city);
    return city ? buildVirtualSeo(city.name) : HOME_SEO;
  }

  const cityOffice = matchPath('/coworking/:city/:id', pathname);
  if (cityOffice) {
    const cityKey = normalizeCityKey(cityOffice.params.city);
    const found = findOffice(cityOffice.params.id, cityKey);
    return found ? buildOfficeSeo(found) : buildCitySeo(titleCaseSlug(cityKey));
  }

  const cityPage = matchPath('/coworking/:city', pathname);
  if (cityPage) return buildCitySeo(titleCaseSlug(normalizeCityKey(cityPage.params.city)));

  const rootOffice = matchPath('/:id', pathname);
  const found = rootOffice ? findOffice(rootOffice.params.id) : null;
  return found ? buildOfficeSeo(found) : HOME_SEO;
};

const upsertHeadTag = (selector, tagName, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(tagName);
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
};

// Keeps document.title, the meta description, the canonical link and the Open Graph tags in sync with the route.
const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description, structuredData } = resolveSeo(pathname);
    const canonical = `${window.location.origin}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;

    document.title = title;
    upsertHeadTag('meta[name="description"]', 'meta', { name: 'description', content: description });
    upsertHeadTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: canonical });
    upsertHeadTag('meta[property="og:title"]', 'meta', { property: 'og:title', content: title });
    upsertHeadTag('meta[property="og:description"]', 'meta', { property: 'og:description', content: description });
    upsertHeadTag('meta[property="og:url"]', 'meta', { property: 'og:url', content: canonical });
    upsertHeadTag('meta[property="og:type"]', 'meta', { property: 'og:type', content: 'website' });
    upsertHeadTag('meta[property="og:site_name"]', 'meta', { property: 'og:site_name', content: SITE_NAME });

    document.head.querySelector('script[data-seo-ld]')?.remove();
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-ld', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
};

// Resolves root-level office URLs like /futops-cowork-kharadi-pune to the right city's detail page.
const OfficeRoute = () => {
  const { id } = useParams();
  const found = findOffice(id);
  if (!found) return <Homepage />;
  const { Detail } = found.city;
  return <Detail />;
};

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-screen overflow-x-hidden flex flex-col bg-white">
      <SeoManager />
      <Navbar />
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coworking/ahmedabad" element={<AhmedabadPage />} />
          <Route path="/coworking/ahmedabad/:id" element={<AhmedabadOfficeDetails />} />
          <Route path="/coworking/bangalore" element={<BangalorePage />} />
          <Route path="/coworking/bangalore/:id" element={<BangaloreOfficeDetail />} />
          <Route path="/coworking/bhubaneswar" element={<BhubaneswarPage />} />
          <Route path="/coworking/bhubaneshwar" element={<BhubaneswarPage />} />
          <Route path="/coworking/bhubaneshwar/:id" element={<BhubaneshwarOfficeDetail />} />
          <Route path="/coworking/bhubaneswar/:id" element={<BhubaneshwarOfficeDetail />} />
          <Route path="/coworking/chandigarh" element={<ChandigarhPage />} />
          <Route path="/coworking/chandigarh/:id" element={<ChandigarhOfficeDetail />} />
          <Route path="/coworking/chennai" element={<ChennaiPage />} />
          <Route path="/coworking/chennai/:id" element={<ChennaiOfficeDetail />} />
          <Route path="/coworking/coimbatore" element={<CoimbatorePage />} />
          <Route path="/coworking/coimbatore/:id" element={<CoimbatoreOfficeDetail />} />
          <Route path="/coworking/delhi" element={<DelhiPage />} />
          <Route path="/coworking/delhi/:id" element={<DelhiOfficeDetails />} />
          <Route path="/coworking/goa" element={<GoaPage />} />
          <Route path="/coworking/goa/:id" element={<GoaOfficeDetail />} />
          <Route path="/coworking/gurugram" element={<GurugramPage />} />
          <Route path="/coworking/gurugram/:id" element={<GurugramOfficeDetail />} />
          <Route path="/coworking/hyderabad" element={<HyderabadPage />} />
          <Route path="/coworking/hyderabad/:id" element={<HyderabadOfficeDetail />} />
          <Route path="/coworking/indore" element={<IndorePage />} />
          <Route path="/coworking/indore/:id" element={<IndoreOfficeDetails />} />
          <Route path="/coworking/jaipur" element={<JaipurPage />} />
          <Route path="/coworking/jaipur/:id" element={<JaipurOfficeDetail />} />
          <Route path="/coworking/kochi" element={<KochiPage />} />
          <Route path="/coworking/kochi/:id" element={<KochiOfficeDetail />} />
          <Route path="/coworking/kolkata" element={<KolkataPage />} />
          <Route path="/coworking/lucknow" element={<LucknowPage />} />
          <Route path="/coworking/lucknow/:id" element={<LucknowOfficeDetail />} />
          <Route path="/coworking/mumbai" element={<MumbaiPage />} />
          <Route path="/coworking/mumbai/:id" element={<MumbaiOfficeDetail />} />
          <Route path="/coworking/noida" element={<NoidaPage />} />
          <Route path="/coworking/noida/:id" element={<NoidaOfficeDetail />} />
          <Route path="/coworking/pune" element={<PunePage />} />
          <Route path="/coworking/pune/:id" element={<PuneOfficeDetail />} />
          <Route path="/coworking/agra" element={<AgraPage />} />
          <Route path="/coworking/agra/:id" element={<AgraOfficeDetail />} />
          <Route path="/coworking/ahmednagar" element={<AhmednagarPage />} />
          <Route path="/coworking/ahmednagar/:id" element={<AhmednagarOfficeDetail />} />
          <Route path="/coworking/ajmer" element={<AjmerPage />} />
          <Route path="/coworking/ajmer/:id" element={<AjmerOfficeDetail />} />
          <Route path="/coworking/alwar-bhiwadi" element={<AlwarBhiwadiPage />} />
          <Route path="/coworking/alwar-bhiwadi/:id" element={<AlwarBhiwadiOfficeDetail />} />
          <Route path="/coworking/ambala" element={<AmbalaPage />} />
          <Route path="/coworking/ambala/:id" element={<AmbalaOfficeDetail />} />
          <Route path="/coworking/amaravati" element={<AmaravatiPage />} />
          <Route path="/coworking/amaravati/:id" element={<AmaravatiOfficeDetail />} />
          <Route path="/coworking/amravati" element={<AmaravatiPage />} />
          <Route path="/coworking/amravati/:id" element={<AmaravatiOfficeDetail />} />
          <Route path="/coworking/amritsar" element={<AmritsarPage />} />
          <Route path="/coworking/amritsar/:id" element={<AmritsarOfficeDetail />} />
          <Route path="/coworking/anand" element={<AnandPage />} />
          <Route path="/coworking/anand/:id" element={<AnandOfficeDetail />} />
          <Route path="/coworking/ayodhya" element={<AyodhyaPage />} />
          <Route path="/coworking/ayodhya/:id" element={<AyodhyaOfficeDetail />} />
          <Route path="/coworking/aurangabad" element={<AurangabadPage />} />
          <Route path="/coworking/aurangabad/:id" element={<AurangabadOfficeDetail />} />
          <Route path="/coworking/agartala" element={<AgartalaPage />} />
          <Route path="/coworking/agartala/:id" element={<AgartalaOfficeDetail />} />
          <Route path="/coworking/aizawl" element={<AizawlPage />} />
          <Route path="/coworking/aizawl/:id" element={<AizawlOfficeDetail />} />
          <Route path="/coworking/kolkata/:id" element={<KolkataOfficeDetail />} />
          <Route path="/virtual-office/:city" element={<VirtualOffice />} />
          <Route path="/:id" element={<OfficeRoute />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default App;