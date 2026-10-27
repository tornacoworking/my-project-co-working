import { Fragment, useEffect, useMemo, useState } from 'react';
import { noidaAreas, noidaOfficeCards, getNoidaOfficeSlug, normalizeNoidaArea } from './noidaData.js';
import QuoteModal from '../../components/QuoteModal.jsx';

// Cards on one page, and cards between two banners (4 per row x 2 rows).
const SPACES_PER_PAGE = 32;
const SPACES_PER_SECTION = 8;

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';
const BANNER_IMAGE = 'https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp';

const officeSolutions = [
  { id: 1, title: 'Private Office', text: 'Fully furnished private offices for you and your growing team.' },
  { id: 2, title: 'Managed Office', text: 'Customized, fully furnished offices managed by professionals.' },
  { id: 3, title: 'Enterprise Solution', text: 'Fully equipped offices for larger teams with flexibility to scale and customize.' }
];

const OfficeCard = ({ space }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const images = space.images && space.images.length > 0 ? space.images : [FALLBACK_IMAGE];

  const showPrev = (event) => {
    event.stopPropagation();
    setImageIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNext = (event) => {
    event.stopPropagation();
    setImageIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  return (
    <article className="group flex flex-col w-full">
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-slate-100">
        <a href={getNoidaOfficeSlug(space)} target="_blank" rel="noopener noreferrer" aria-label={space.name}>
          <img
            src={images[imageIndex]}
            alt={`${space.name} - ${space.location}`}
            loading="lazy"
            onError={(event) => {
              event.target.onerror = null;
              event.target.src = FALLBACK_IMAGE;
            }}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </a>

        {space.badge && (
          <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-slate-800 shadow-xs">
            <span className="text-amber-500 text-xs">👑</span>
            {space.badge}
          </span>
        )}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPrev}
              aria-label={`Previous image of ${space.name}`}
              className="absolute left-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/60 text-white opacity-0 shadow-md transition-opacity hover:bg-slate-900/80 focus:opacity-100 group-hover:opacity-100 cursor-pointer"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label={`Next image of ${space.name}`}
              className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/60 text-white opacity-0 shadow-md transition-opacity hover:bg-slate-900/80 focus:opacity-100 group-hover:opacity-100 cursor-pointer"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-sm font-bold leading-snug text-slate-900 group-hover:text-[#007bff] transition-colors">
            <a href={getNoidaOfficeSlug(space)} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {space.name}
            </a>
          </h3>
          {space.rating ? (
            <div className="flex shrink-0 items-center gap-1 text-xs font-bold text-amber-500">
              <span>★</span>
              <span className="text-[11px] text-slate-700">{space.rating}</span>
            </div>
          ) : null}
        </div>
        <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">{space.location}</p>

        <div className="mt-2 flex items-center justify-between">
          <div>
            <span className="text-sm font-bold text-slate-900">{space.price}</span>
            <span className="text-[11px] text-slate-500"> {space.period}</span>
          </div>
          <button
            type="button"
            onClick={() => setIsQuoteOpen(true)}
            className="rounded bg-[#007bff] px-3 py-1.5 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-blue-600 active:scale-95 cursor-pointer"
          >
            {space.ctaText || 'Get Quote'}
          </button>
          {isQuoteOpen && <QuoteModal space={space} onClose={() => setIsQuoteOpen(false)} />}
        </div>
      </div>
    </article>
  );
};

// Wide banner shown after every 8 cards: the office-solutions banner first, then the "Discover" banner, and so on.
const OfficeSolutionsBanner = ({ onEnquire }) => (
  <section
    aria-label="Find your perfect office solution"
    className="w-full rounded-2xl border border-blue-100/60 bg-gradient-to-r from-[#e3f4fc] to-[#e9eefb] px-5 py-6 sm:px-8"
  >
    <h2 className="mb-4 text-lg font-extrabold tracking-tight text-slate-900 sm:text-2xl">Find Your Perfect Office Solution</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {officeSolutions.map((solution) => (
        <div key={solution.id} className="flex flex-col justify-between rounded-xl bg-white p-4 shadow-xs">
          <div>
            <h3 className="text-base font-bold text-slate-900">{solution.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500 sm:text-sm">{solution.text}</p>
          </div>
          <button
            type="button"
            onClick={onEnquire}
            className="mt-4 w-fit rounded-lg bg-[#007bff] px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-blue-600 active:scale-95 cursor-pointer"
          >
            Enquire Now
          </button>
        </div>
      ))}
    </div>
  </section>
);

const DiscoverBanner = ({ onEnquire }) => (
  <section
    aria-label="Discover your perfect workspace"
    className="relative flex min-h-[190px] w-full items-center overflow-hidden rounded-2xl border border-blue-100/60 bg-cover bg-right bg-no-repeat sm:min-h-[220px]"
    style={{ backgroundImage: `url(${BANNER_IMAGE})` }}
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#e3f4fc] via-[#e3f4fc]/95 to-transparent sm:via-[#e3f4fc]/85" />
    <div className="relative z-10 max-w-xl px-6 py-8 sm:px-10">
      <h2 className="mb-2 text-xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
        Discover your perfect workspace with Mycoworking
      </h2>
      <p className="mb-6 max-w-md text-xs leading-relaxed text-slate-600 sm:text-sm">
        Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India
      </p>
      <button
        type="button"
        onClick={onEnquire}
        className="w-fit rounded-lg bg-[#007bff] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition-all hover:bg-blue-600 active:scale-95 sm:text-sm cursor-pointer"
      >
        Enquire Now
      </button>
    </div>
  </section>
);

const Noida = () => {
  const [activeArea, setActiveArea] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const filteredSpaces = useMemo(() => {
    if (activeArea === 'All') return noidaOfficeCards;
    return noidaOfficeCards.filter((space) => normalizeNoidaArea(space.area) === activeArea);
  }, [activeArea]);

  const totalPages = Math.max(1, Math.ceil(filteredSpaces.length / SPACES_PER_PAGE));

  // Cards of the current page, cut into blocks of 8 (two rows of 4)
  const sections = useMemo(() => {
    const pageSpaces = filteredSpaces.slice((currentPage - 1) * SPACES_PER_PAGE, currentPage * SPACES_PER_PAGE);
    const blocks = [];
    for (let start = 0; start < pageSpaces.length; start += SPACES_PER_SECTION) {
      blocks.push(pageSpaces.slice(start, start + SPACES_PER_SECTION));
    }
    return blocks;
  }, [filteredSpaces, currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages || page === currentPage) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectArea = (area) => {
    setActiveArea(area);
    setCurrentPage(1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-white text-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#007bff]">Coworking in Noida</p>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Find your ideal workspace in Noida</h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600">
            Explore premium coworking spaces, private offices, and business hubs across Noida’s top locations.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {noidaAreas.map((area) => {
            const isActive = activeArea === area;
            return (
              <button
                key={area}
                type="button"
                onClick={() => selectArea(area)}
                aria-pressed={isActive}
                className={`rounded-full px-3 py-2 text-xs font-medium transition-all sm:text-sm cursor-pointer ${
                  isActive ? 'bg-[#007bff] text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {area}
              </button>
            );
          })}
        </div>

        <div className="mb-6 text-sm text-slate-600">
          Showing <span className="font-semibold text-slate-900">{filteredSpaces.length}</span> spaces
          {activeArea !== 'All' ? ` in ${activeArea}` : ''}
        </div>

        {filteredSpaces.length === 0 ? (
          <div className="py-12 text-center text-sm text-slate-500">No coworking spaces found in {activeArea}.</div>
        ) : (
          <div className="flex flex-col gap-8 sm:gap-10">
            {sections.map((section, sectionIndex) => (
              <Fragment key={`section-${currentPage}-${sectionIndex}`}>
                <div className="grid grid-cols-1 gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
                  {section.map((space) => (
                    <OfficeCard key={space.id} space={space} />
                  ))}
                </div>
                {/* Banner after every full block of 8 cards, alternating between the two designs */}
                {section.length === SPACES_PER_SECTION &&
                  (sectionIndex % 2 === 0 ? (
                    <OfficeSolutionsBanner onEnquire={() => setIsEnquiryOpen(true)} />
                  ) : (
                    <DiscoverBanner onEnquire={() => setIsEnquiryOpen(true)} />
                  ))}
              </Fragment>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav aria-label="Coworking spaces pagination" className="my-10 flex items-center justify-center">
            <div className="inline-flex items-center overflow-hidden rounded-md border border-slate-200 bg-white text-xs shadow-2xs sm:text-sm">
              <button
                type="button"
                disabled={currentPage === 1}
                onClick={() => goToPage(currentPage - 1)}
                aria-label="Previous page"
                className={`border-r border-slate-200 px-3.5 py-2 font-medium transition-colors ${
                  currentPage === 1 ? 'cursor-not-allowed bg-slate-50/50 text-slate-300' : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600 cursor-pointer'
                }`}
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => {
                const isActive = currentPage === page;
                return (
                  <button
                    key={page}
                    type="button"
                    onClick={() => goToPage(page)}
                    aria-current={isActive ? 'page' : undefined}
                    aria-label={`Page ${page}`}
                    className={`min-w-[38px] border-r border-slate-200 py-2 text-center font-semibold transition-colors ${
                      isActive ? 'cursor-default bg-[#007bff] text-white' : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600 cursor-pointer'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
              <button
                type="button"
                disabled={currentPage === totalPages}
                onClick={() => goToPage(currentPage + 1)}
                aria-label="Next page"
                className={`px-3.5 py-2 font-medium transition-colors ${
                  currentPage === totalPages ? 'cursor-not-allowed bg-slate-50/50 text-slate-300' : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600 cursor-pointer'
                }`}
              >
                Next
              </button>
            </div>
          </nav>
        )}
      </div>

      {isEnquiryOpen && <QuoteModal onClose={() => setIsEnquiryOpen(false)} />}
    </div>
  );
};

export default Noida;
