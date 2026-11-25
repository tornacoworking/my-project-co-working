import { Suspense, lazy, use, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import Homepage from './home/Homepage';
import Navbar from './navbar/Navbar';
import RouteSeo from './seo/RouteSeo';
import WhatsAppButton from './components/WhatsAppButton';
import StickyActionBar from './components/StickyActionBar';
import { coworkingRoutes, coworkingRedirects } from './routes/cityRoutes';
import { findOffice } from './routes/findOffice';

// Everything except the homepage is a separate chunk, fetched when the route is visited.
const VirtualOffice = lazy(() => import('./virtual/Virtualoffice'));

// Client-side navigation keeps the old scroll position: jump to the #anchor if there is one, otherwise to the top.
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // The target may be in a lazily loaded section, so retry for a moment.
      let tries = 0;
      const timer = setInterval(() => {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target || ++tries > 20) {
          clearInterval(timer);
          target?.scrollIntoView();
        }
      }, 100);
      return () => clearInterval(timer);
    }
    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);
  return null;
};

const PageFallback = () => <div className="min-h-[60vh] w-full" role="status" aria-busy="true" aria-label="Loading" />;

// Root-level office URLs like /futops-cowork-kharadi-pune: find the city that owns the slug, then render its detail page.
const OfficeRoute = () => {
  const { id } = useParams();
  const found = use(findOffice(id));
  if (!found) return <Homepage />;
  const { Detail } = found.city;
  return <Detail />;
};

const App = () => (
  <div className="w-full min-h-screen overflow-x-clip flex flex-col bg-white">
    <RouteSeo />
    <ScrollManager />
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-semibold focus:text-blue-700 focus:shadow-lg"
    >
      Skip to content
    </a>
    <Navbar />
    <main id="main" className="grow w-full">
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          {coworkingRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          {coworkingRedirects.map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="/virtual-office/:city" element={<VirtualOffice />} />
          <Route path="/:id" element={<OfficeRoute />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Suspense>
    </main>
    <WhatsAppButton />
    <StickyActionBar />
  </div>
);

export default App;
