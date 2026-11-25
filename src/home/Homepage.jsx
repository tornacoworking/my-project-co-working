import { Suspense, lazy, useState } from 'react';
import Hero from './Hero.jsx';
import HowItWorks from './HowItWorks.jsx';
import TopCities from './TopCities.jsx';
import cityIndex from '../data/cityIndex.json';
import { spaceOptions } from './homedata.js';

const BelowFold = lazy(() => import('./BelowFold.jsx'));

const defaultCity = cityIndex.find((city) => city.name === 'Pune') || cityIndex[0];

/**
 * Homepage. Above the fold (hero, how it works, top cities) is bundled with the page; everything below
 * is a separate chunk. The hero search and the lead form share the selected city and space type.
 */
const Homepage = () => {
  const [city, setCity] = useState(defaultCity);
  const [spaceType, setSpaceType] = useState(spaceOptions[0]);

  return (
    <div className="flex w-full flex-col bg-[#f8fafc] font-sans antialiased">
      <Hero city={city} onCityChange={setCity} spaceType={spaceType} onSpaceTypeChange={setSpaceType} />
      <HowItWorks />
      <TopCities />
      <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
        <BelowFold />
      </Suspense>
    </div>
  );
};

export default Homepage;
