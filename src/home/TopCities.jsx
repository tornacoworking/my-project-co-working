import { Link } from 'react-router-dom';
import { cityNames } from './homedata.js';
import { topCoworkingCitiesData } from '../sections/sectionData.js';
import cityIndex from '../data/cityIndex.json';
import cityPrices from '../data/cityPrices.json';

const slugFor = (name) => cityIndex.find((city) => city.name === name)?.slug || name.toLowerCase();

const cities = cityNames.map((city) => {
  const slug = slugFor(city.name);
  return { ...city, slug, price: cityPrices[slug], nickname: topCoworkingCitiesData.taglines[city.name] || topCoworkingCitiesData.defaultTagline };
});

/** "Top Coworking Spaces in India": one card per featured city, each a real link to that city's listing page. */
const TopCities = () => (
  <section id="top-cities" aria-labelledby="top-cities-title" className="w-full scroll-mt-28 bg-[#fbf9f6] py-12 sm:py-14">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-8 max-w-2xl text-center">
        <h2 id="top-cities-title" className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          {topCoworkingCitiesData.title}
        </h2>
        <p className="mt-2 text-base text-slate-700">Compare prices, locations and amenities in {cities.length} of India's busiest business cities.</p>
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-6">
        {cities.map((city) => (
          <li key={city.slug}>
            <Link to={`/coworking/${city.slug}`} className="card card-lift reveal-view group flex h-full flex-col overflow-hidden">
              <span className="relative block aspect-[4/3] overflow-hidden bg-slate-200">
                <img
                  src={city.image}
                  alt=""
                  width="400"
                  height="300"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </span>
              <span className="flex flex-1 flex-col p-3 sm:p-4">
                <h3 className="text-base font-extrabold leading-tight text-slate-900">
                  {city.name}
                  <span className="sr-only"> coworking spaces</span>
                </h3>
                <span className="mt-0.5 text-sm text-slate-600">{city.nickname}</span>
                {city.price ? (
                  <span className="mt-2 text-sm font-semibold text-slate-900">
                    From <span className="text-blue-800">₹{city.price.toLocaleString('en-IN')}</span>/mo
                  </span>
                ) : null}
                <span className="mt-auto pt-3 text-sm font-bold text-blue-700 group-hover:underline">
                  View spaces <span aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TopCities;
