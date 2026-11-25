import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Container from '../components/Container.jsx';
import Picture from '../components/Picture.jsx';
import LeadForm from '../components/LeadForm.jsx';
import CityCombobox from './CityCombobox.jsx';
import heroPicture from './images/cityimages/form-image.jpg?w=480;800;1200;1600&format=avif;webp;jpg&as=picture';
import cityIndex from '../data/cityIndex.json';
import { cityNames, popularCityNames, spaceOptions, heroSectionData } from './homedata.js';
import { stats } from '../data/stats.js';

// The image card is half of the 80rem container from lg up (about 600px at most), full width below.
const HERO_SIZES = '(min-width: 1024px) 600px, 100vw';

const CheckIcon = () => (
  <svg className="h-4 w-4 shrink-0 text-green-700" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
  </svg>
);

/**
 * Hero. Sits in the same <Container> as the navbar, so the text starts at the navbar card's left edge and the
 * image card ends at its right edge. Left: h1, search, trust row, popular cities. Right: image card with stats and the lead form.
 */
const Hero = ({ city, onCityChange, spaceType, onSpaceTypeChange }) => {
  const navigate = useNavigate();
  const [notice, setNotice] = useState('');

  // Popular cities first (in the order we chose), then everything else A-Z.
  const searchCities = useMemo(() => {
    const popular = popularCityNames.map((name) => cityIndex.find((c) => c.name === name)).filter(Boolean);
    const rest = cityIndex.filter((c) => !popular.includes(c));
    return [...popular, ...rest];
  }, []);

  const popularTiles = useMemo(
    () => popularCityNames.map((name) => {
      const entry = cityIndex.find((c) => c.name === name);
      const home = cityNames.find((c) => c.name === name);
      return entry && home ? { ...entry, image: home.image } : null;
    }).filter(Boolean),
    [],
  );

  const { headline } = heroSectionData;

  const search = (event) => {
    event.preventDefault();
    if (spaceType === 'Virtual Office Space') {
      if (!city.virtual) {
        setNotice(`We don't have a virtual office page for ${city.name} yet. Choose Coworking Spaces or get a free quote below.`);
        return;
      }
      navigate(`/virtual-office/${city.slug}`);
      return;
    }
    navigate(`/coworking/${city.slug}`);
  };

  return (
    <section aria-labelledby="hero-title" className="w-full bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Helmet>
        {/* The hero photo is the LCP element on desktop: start fetching it before the JS runs. */}
        <link rel="preload" as="image" type="image/avif" media="(min-width: 1024px)" imageSrcSet={heroPicture.sources.avif} imageSizes={HERO_SIZES} fetchPriority="high" />
      </Helmet>

      <Container>
        <div className="grid items-stretch gap-8 py-8 lg:grid-cols-2 lg:gap-12 lg:py-12">
          {/* ---------------- Left: heading, search, trust row, cities ---------------- */}
          {/* @container: the search bar lays itself out by this column's width, not the viewport's */}
          <div className="@container min-w-0">
            <p className="reveal text-xs font-bold uppercase tracking-[0.18em] text-blue-800">{heroSectionData.tagline}</p>

            <h1 id="hero-title" className="mt-2 text-3xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-4xl xl:text-[44px]">
              {headline.prefix} <span className="text-blue-700">{headline.highlight1}</span>
              <br />
              {headline.middleText} <span className="text-blue-700">{headline.highlight2}</span>
            </h1>

            <p className="reveal reveal-1 mt-3 max-w-xl text-base text-slate-700 sm:text-lg">
              Coworking spaces, private offices and virtual offices in {stats.cities} Indian cities. Compare, visit and move in with zero brokerage.
            </p>

            {/* Unified search: space type | city | search */}
            <form
              onSubmit={search}
              role="search"
              aria-label="Find a workspace"
              className="reveal reveal-2 card mt-5 grid grid-cols-1 gap-2 p-2 @sm:grid-cols-2 @xl:flex @xl:flex-row @xl:items-stretch"
            >
              <div className="relative min-h-12 rounded-xl border border-slate-300 bg-white transition-colors focus-within:border-blue-700 focus-within:ring-2 focus-within:ring-blue-700/25 @xl:w-56 @xl:shrink-0">
                <label htmlFor="hero-space-type" className="pointer-events-none absolute left-3 top-1.5 text-xs font-semibold text-slate-600">{heroSectionData.searchFilters.lookingForLabel}</label>
                <select
                  id="hero-space-type"
                  value={spaceType}
                  onChange={(event) => { setNotice(''); onSpaceTypeChange(event.target.value); }}
                  className="absolute inset-0 h-full w-full cursor-pointer rounded-xl bg-transparent pb-1 pl-3 pr-8 pt-5 text-base font-semibold text-slate-900 focus:outline-none"
                >
                  {spaceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </div>

              <div className="min-w-0 @xl:flex-1">
                <CityCombobox cities={searchCities} value={city} onChange={(next) => { setNotice(''); onCityChange(next); }} label={heroSectionData.searchFilters.selectCityLabel} />
              </div>

              <button
                type="submit"
                className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-blue-700 px-6 text-base font-bold text-white shadow-md shadow-blue-700/25 transition hover:bg-blue-800 active:scale-[0.98] @sm:col-span-2 @xl:col-span-1"
              >
                {heroSectionData.searchFilters.searchButtonText} <span aria-hidden="true">{heroSectionData.searchFilters.searchButtonArrow}</span>
              </button>
            </form>
            <p className="min-h-0 text-sm font-medium text-red-700" role="status" aria-live="polite">{notice}</p>

            {/* Trust row */}
            <ul className="reveal reveal-3 mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-slate-800">
              <li className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-amber-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.8l-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                </svg>
                <span>{stats.rating}/5 rating</span>
              </li>
              <li className="flex items-center gap-1.5"><CheckIcon />Zero brokerage</li>
              <li className="flex items-center gap-1.5"><CheckIcon />Verified spaces</li>
            </ul>

            {/* Popular cities: real links, scroll-snap row on phones, grid from sm up */}
            <div className="mt-6">
              <div className="mb-3 flex items-baseline justify-between gap-3">
                <p className="text-sm font-bold text-slate-900">Popular cities</p>
                <a href="#top-cities" className="inline-flex min-h-11 items-center text-sm font-bold text-blue-700 hover:text-blue-900 hover:underline">
                  View all cities <span aria-hidden="true">&nbsp;→</span>
                </a>
              </div>
              <ul className="snap-row -mx-4 flex snap-x snap-mandatory scroll-pl-4 gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:scroll-pl-0 sm:grid sm:grid-cols-4 sm:overflow-visible sm:px-0 sm:pb-0">
                {popularTiles.map((tile) => (
                  <li key={tile.slug} className="w-[104px] shrink-0 snap-start sm:w-auto">
                    <Link
                      to={`/coworking/${tile.slug}`}
                      className="card-lift group relative block aspect-[10/11] overflow-hidden rounded-2xl bg-slate-200 shadow-md ring-1 ring-white"
                    >
                      <img src={tile.image} alt="" width="400" height="440" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" aria-hidden="true" />
                      <span className="absolute inset-x-0 bottom-0 px-1.5 pb-2 text-center text-sm font-bold leading-tight text-white">
                        {tile.name}
                        <span className="sr-only"> coworking spaces</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ---------------- Right: image card with stats and the lead form ---------------- */}
          <div className="relative isolate flex min-w-0 flex-col overflow-hidden rounded-3xl lg:min-h-[560px]">
            <Picture
              picture={heroPicture}
              alt=""
              sizes={HERO_SIZES}
              priority
              className="absolute inset-0 -z-10 block h-full w-full"
              imgClassName="h-full w-full object-cover"
            />
            {/* Gradient keeps white text readable (>= 4.5:1) wherever the photo is bright. */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/70 via-slate-950/45 to-slate-950/60" aria-hidden="true" />

            <ul className="flex items-center justify-center gap-8 px-4 pt-6 text-center text-white sm:pt-8">
              {heroSectionData.statistics.map((stat) => (
                <li key={stat.id}>
                  <p className="text-3xl font-black leading-tight tracking-tight"><strong className="font-black">{stat.count}</strong></p>
                  <p className="text-sm font-semibold">{stat.label}</p>
                </li>
              ))}
            </ul>

            <div className="flex flex-1 items-center justify-center px-4 pb-6 pt-5 sm:px-8 sm:pb-8">
              <div className="w-full max-w-md">
                <LeadForm
                  id="enquiry-form"
                  variant="hero"
                  city={city.name}
                  spaceType={spaceType}
                  onSpaceTypeChange={onSpaceTypeChange}
                  cities={searchCities.map((c) => c.name)}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
