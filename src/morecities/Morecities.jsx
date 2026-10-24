import { useState, useEffect, useMemo } from 'react';
import { indiaMapLogo, moreCities, moreCitiesContent } from './morecities.js';

/**
 * ============================================================================
 * MORE CITIES (button + popup)
 * ============================================================================
 * Renders the "More Cities" button (India map logo). Clicking it opens a popup
 * listing every extra city with a search bar and a scrollable city grid.
 * All data comes from ./morecities.js.
 *
 * Props:
 *  - onCitySelect(city): called with { name, image } when a city is clicked.
 * ============================================================================
 */
const Morecities = ({ onCitySelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const closePopup = () => {
    setIsOpen(false);
    setQuery('');
  };

  // Close on Escape while the popup is open
  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKey = (event) => {
      if (event.key === 'Escape') closePopup();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen]);

  const visibleCities = useMemo(() => {
    const text = query.trim().toLowerCase();
    if (!text) return moreCities;
    return moreCities.filter((city) => city.name.toLowerCase().includes(text));
  }, [query]);

  const handleCityClick = (city) => {
    closePopup();
    if (onCitySelect) onCitySelect(city);
  };

  return (
    <>
      {/* Hero button (takes the place of the old "Select City" dropdown) */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={moreCitiesContent.buttonAriaLabel}
        className="border border-slate-200 rounded-xl px-2.5 py-1.5 flex items-center gap-2 bg-white shadow-xs text-left cursor-pointer hover:border-[#007bff] transition-colors"
      >
        <img src={indiaMapLogo} alt="" className="h-7 w-7 object-contain shrink-0" />
        <span className="text-xs sm:text-sm font-semibold text-slate-800">
          {moreCitiesContent.buttonLabel}
        </span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-4"
          onClick={closePopup}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="more-cities-title"
            className="w-full max-w-[666px] max-h-[88vh] flex flex-col rounded-2xl bg-white shadow-2xl select-none"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <h2 id="more-cities-title" className="text-lg sm:text-xl font-bold text-slate-900">
                {moreCitiesContent.popupTitle}
              </h2>
              <button
                type="button"
                onClick={closePopup}
                aria-label="Close more cities"
                className="text-2xl leading-none text-slate-400 hover:text-slate-900 cursor-pointer"
              >
                ×
              </button>
            </div>

            {/* Search */}
            <div className="px-6 pt-4">
              <input
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={moreCitiesContent.searchPlaceholder}
                autoFocus
                className="w-full h-11 rounded-xl border border-slate-300 px-4 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#007bff] focus:ring-1 focus:ring-[#007bff]"
              />
            </div>

            <p className="px-6 pt-4 pb-2 text-sm font-bold text-slate-900">
              {moreCitiesContent.sectionTitle}
            </p>

            {/* Scrollable city grid */}
            <div className="flex-1 overflow-y-auto px-6 pb-6">
              {visibleCities.length === 0 ? (
                <p className="py-10 text-center text-sm text-slate-500">{moreCitiesContent.emptyText}</p>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-5">
                  {visibleCities.map((city) => (
                    <button
                      type="button"
                      key={city.name}
                      onClick={() => handleCityClick(city)}
                      className="group flex flex-col items-center text-center cursor-pointer"
                    >
                      <div className="w-full aspect-[16/9] overflow-hidden rounded-xl bg-slate-100">
                        {city.image && (
                          <img
                            src={city.image}
                            alt={`${city.name} famous place`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        )}
                      </div>
                      <span className="mt-2 text-sm font-bold text-slate-900 group-hover:text-[#007bff] transition-colors">
                        {city.name}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Morecities;
