const defaultSpaceOptions = ['Coworking Spaces', 'Virtual Office Space'];

const CityPopup = ({
  activeCity,
  onClose,
  onSelectSpace,
  spaceOptions = defaultSpaceOptions
}) => {
  if (!activeCity) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-md"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="city-modal-title"
        className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/70 bg-white text-center shadow-[0_30px_100px_rgba(15,23,42,0.4)]"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Header with city photo backdrop */}
        <div className="relative overflow-hidden px-5 pb-16 pt-8 sm:px-10 sm:pt-10">
          <img
            src={activeCity.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full scale-110 object-cover blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-blue-950/70 to-blue-900/85" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close city options"
            className="absolute right-4 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/15 text-xl leading-none text-white backdrop-blur transition hover:bg-white hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ×
          </button>
          <div className="relative">
            <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] ring-4 ring-white/25 sm:h-24 sm:w-24">
              <img src={activeCity.image} alt={`${activeCity.name} city`} className="h-full w-full object-cover" />
            </div>
            <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em] text-sky-200">Explore workspaces</p>
            <h2 id="city-modal-title" className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
              Find the best spaces in {activeCity.name}
            </h2>
          </div>
        </div>

        {/* Options overlapping the header */}
        <div className="relative -mt-10 grid grid-cols-2 gap-3 px-5 pb-6 sm:gap-5 sm:px-8 sm:pb-8">
          {spaceOptions.map((option) => {
            const isCoworking = option === 'Coworking Spaces';
            return (
              <button
                type="button"
                key={option}
                onClick={() => onSelectSpace && onSelectSpace(option, activeCity)}
                className={`group relative flex min-h-44 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border bg-white p-4 shadow-[0_10px_30px_rgba(15,23,42,0.14)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 sm:min-h-48 sm:p-5 ${isCoworking ? 'border-orange-100 hover:border-orange-300' : 'border-blue-100 hover:border-blue-300'}`}
              >
                <span className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${isCoworking ? 'from-orange-500 to-amber-300' : 'from-blue-600 to-sky-400'}`} />
                <div className={`mb-3 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-[0_6px_18px_rgba(15,23,42,0.18)] ring-2 transition duration-300 group-hover:scale-105 sm:h-24 sm:w-24 ${isCoworking ? 'ring-orange-200' : 'ring-blue-200'}`}>
                  {isCoworking ? (
                    <img
                      src={activeCity.image}
                      alt={`${activeCity.name} Coworking Space`}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-50 to-sky-100 text-blue-600">
                      <svg aria-hidden="true" className="h-10 w-10 sm:h-12 sm:w-12" fill="none" viewBox="0 0 48 48">
                        <path d="M9 40V12.5c0-1.1.9-2 2-2h15c1.1 0 2 .9 2 2V40M28 20.5h9c1.1 0 2 .9 2 2V40M6 40h36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                        <path d="M15 17h3m5 0h.01M15 23h3m5 0h.01M15 29h3m5 0h.01M33 26h.01M33 32h.01M19 40v-5h5v5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                      </svg>
                    </div>
                  )}
                </div>
                <span className="text-center text-sm font-extrabold text-slate-900 sm:text-base">
                  {isCoworking ? 'Coworking Space' : 'Virtual Office'}
                </span>
                <span className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-2 ${isCoworking ? 'text-orange-600' : 'text-blue-600'}`}>
                  Explore
                  <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CityPopup;
