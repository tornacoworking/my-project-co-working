const CityGrid = ({ cities = [], selectedCity = '', onCitySelect }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5 pt-1">
      {cities.map((city) => {
        const isSelected = selectedCity === city.name;
        return (
          <button
            type="button"
            key={city.name}
            onClick={() => onCitySelect && onCitySelect(city, true)}
            className={`group relative aspect-[10/11] rounded-xl overflow-hidden cursor-pointer bg-slate-200 transition-all duration-300 active:scale-95 focus:outline-none ${
              isSelected
                ? 'ring-[3px] ring-[#0d6efd] shadow-lg shadow-blue-500/30 scale-[1.03]'
                : 'ring-1 ring-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 hover:ring-[#0d6efd]/60'
            }`}
          >
            <img
              src={city.image}
              alt={`${city.name} workspace`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <span className="absolute inset-x-0 bottom-1 px-1 text-center text-[10px] sm:text-xs font-bold text-white tracking-tight leading-tight drop-shadow">
              {city.name}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CityGrid;
