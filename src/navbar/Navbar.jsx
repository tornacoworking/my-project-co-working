import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { cityNames } from '../home/homedata';
import logo from './company-logo.jpg';
import { navItems } from './navLinks';
import { virtualOfficePath, virtualOfficeCities } from '../virtual/virtual';
import { moreCities } from '../morecities/morecities';

// Tabs whose dropdown shows the city picker
const CITY_TABS = ['Coworking', 'Virtual Office'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedTab, setMobileExpandedTab] = useState(null);
  const navRef = useRef(null);
  const navigate = useNavigate();

  // Same behaviour as clicking a city on the home page: open that city's space-type popup
  const handleCityClick = (cityName, tabName) => {
    closeMenu();
    if (tabName === 'Virtual Office') {
      navigate(virtualOfficePath(cityName));
      return;
    }
    navigate('/', { state: { openCity: cityName } });
  };

  // City picker for the Coworking / Virtual Office tabs; each tab has its own heading and style
  const renderCityGrid = (tabName, cols) => {
    const isVirtual = tabName === 'Virtual Office';
    const list = isVirtual ? [...cityNames, ...moreCities.map((city) => ({ ...city, iconOnly: !virtualOfficeCities.some((v) => v.name === city.name) }))] : cityNames;
    return (
      <div className={`relative overflow-hidden rounded-2xl border p-4 ${isVirtual ? 'border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-50' : 'border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50'}`}>
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${isVirtual ? 'from-blue-600 via-sky-400 to-blue-300' : 'from-orange-500 via-amber-400 to-orange-300'}`} />
        <div className={`mb-4 mt-1 flex items-center justify-between gap-3 border-b pb-3 ${isVirtual ? 'border-blue-100' : 'border-orange-100'}`}>
          <div className="flex items-center gap-3">
            <span className={`flex h-9 w-9 items-center justify-center rounded-xl text-white shadow-md ${isVirtual ? 'bg-gradient-to-br from-blue-600 to-sky-500 shadow-blue-600/30' : 'bg-gradient-to-br from-orange-500 to-amber-400 shadow-orange-500/30'}`}>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-extrabold leading-tight text-slate-900">
                {isVirtual ? 'Virtual Office' : 'Coworking Spaces'}
              </p>
              <p className="text-[11px] font-medium text-slate-500">Choose your city to explore</p>
            </div>
          </div>
          <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${isVirtual ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
            {list.length} cities
          </span>
        </div>
        {/* Virtual Office box also lists the More Cities after the homepage cities, in a scrollable area.
            More Cities open their page only once they have a virtual office page; the rest stay icon-only. */}
        <div className={`${cols === 6 ? 'grid grid-cols-6 gap-2' : 'grid grid-cols-3 gap-2'}${isVirtual ? ' max-h-80 overflow-y-auto pr-1' : ''}`}>
          {list.map((city) => (
            <button
              key={city.name}
              type="button"
              onClick={city.iconOnly ? undefined : () => handleCityClick(city.name, tabName)}
              aria-label={isVirtual ? `Virtual office in ${city.name}` : `Coworking spaces in ${city.name}`}
              className={`group flex min-w-0 cursor-pointer flex-col items-center gap-2 rounded-xl border bg-white px-1 py-2.5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 ${isVirtual ? 'border-blue-100/70 hover:border-blue-300 hover:shadow-blue-900/10 focus-visible:ring-blue-400' : 'border-orange-100/70 hover:border-orange-300 hover:shadow-orange-900/10 focus-visible:ring-orange-400'}`}
            >
              <img
                src={city.image}
                alt={`${city.name} city skyline`}
                loading="lazy"
                className={`h-12 w-12 object-cover shadow-sm transition-all duration-200 group-hover:scale-105 sm:h-14 sm:w-14 ${isVirtual
                  ? 'rounded-xl border-2 border-blue-100 group-hover:border-blue-400'
                  : 'rounded-full border-2 border-slate-100 group-hover:border-orange-400'}`}
              />
              <span className={`text-center text-[10px] font-semibold leading-tight text-slate-700 sm:text-[11px] ${isVirtual ? 'group-hover:text-blue-700' : 'group-hover:text-orange-700'}`}>{city.name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileTab = (menu) => {
    setMobileExpandedTab(mobileExpandedTab === menu ? null : menu);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpandedTab(null);
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header ref={navRef} className="w-full sticky top-0 z-50 select-none px-2 sm:px-4 py-2">
      {/* 1. Mobile & Desktop Header: strictly single row, flex-row, justify-between, items-center */}
      <div className="max-w-[1400px] mx-auto px-3 sm:px-5 h-[4.5rem] sm:h-28 rounded-2xl bg-white/85 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_rgba(15,23,42,0.14)] flex flex-row justify-start items-center gap-3 lg:gap-4 xl:gap-[1cm]">
        
        {/* 2. Far Left: Logo */}
        <Link 
          to="/" 
          aria-label="MyCoworking home"
          onClick={closeMenu}
          className="flex items-center cursor-pointer shrink-0"
        >
          <img src={logo} alt="MyCoworking - Coworking and Virtual Office Spaces in India" className="h-14 sm:h-24 w-auto object-contain" />
        </Link>

        {/* 3. Desktop Contact Info Box: visible on large screens (lg+) */}
        <div className="hidden lg:flex items-center bg-white border border-slate-200 rounded-full px-4 py-1.5 space-x-3 text-sm font-medium text-slate-700 shadow-sm shrink-0">
          <a href="tel:+919028760011" className="flex items-center space-x-1.5 hover:text-blue-600 transition-colors">
            <svg className="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.74.6 1 1 0 011 1v3.59a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.6 3.74 1 1 0 01-.27 1.1l-2.2 2.2z"/>
            </svg>
            <span className="font-semibold">+91 9028760011</span>
          </a>
        
        </div>

        {/* 3. Middle Tabs: Desktop only (hidden on mobile views, visible on lg and above) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-[1cm]">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <button
                type="button"
                onClick={() => toggleDropdown(item.name)}
                className="flex items-center space-x-1.5 text-sm xl:text-base font-semibold text-slate-800 bg-white shadow-sm border border-slate-100 rounded-full hover:text-blue-600 transition-colors focus:outline-none cursor-pointer py-2 px-4 whitespace-nowrap"
              >
                <span>{item.name}</span>
                <svg 
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180 text-blue-600' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {/* Desktop Dropdown Menu */}
              {activeDropdown === item.name && (
                <div className={`absolute left-0 mt-3 bg-white border border-slate-100 rounded-xl shadow-xl z-50 animate-in fade-in slide-in-from-top-1 duration-150 ${CITY_TABS.includes(item.name) ? 'w-[640px] p-3 !rounded-2xl !border-slate-200/80 shadow-[0_24px_60px_rgba(15,23,42,0.22)]' : 'w-64 py-2'}`}>
                  {CITY_TABS.includes(item.name) ? (
                renderCityGrid(item.name, 6)
                  ) : item.links.map((link) => (
                    <Link
                      key={link}
                      to={item.name === 'Coworking' ? '/coworking' : link}
                      className="block px-5 py-3.5 text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                      onClick={closeMenu}
                    >
                      {link.replace('#', '').replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* 2 & 4. Far Right: Blue "Contact Us" Button + Hamburger Menu Icon */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 ml-auto">
          {/* Orange "List of Services" button - always visible */}
          <Link
            to="/#services"
            aria-label="View our list of services"
            onClick={closeMenu}
            className="shrink-0 cursor-pointer"
          >
            <span className="inline-flex items-center justify-center text-center rounded-full bg-gradient-to-r from-[#0a58ca] to-[#2563eb] text-white text-[10px] sm:text-xs font-extrabold leading-tight tracking-wide px-4 sm:px-5 py-2 shadow-lg shadow-blue-600/30 hover:scale-105 transition-transform">LIST YOUR<br />SPACE FREE</span>
          </Link>

          {/* 4. Hamburger Icon: three bars icon, visible on small screens (< lg) */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer focus:outline-none shrink-0"
          >
            {isOpen ? (
              /* Close (X) icon when open */
              <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              /* Standard Hamburger (three bars) icon */
              <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

      </div>

      {/* 5. Dropdown/Drawer Menu: Opens downwards when hamburger is clicked, containing all hidden tabs & contact details */}
      {isOpen && (
        <nav aria-label="Mobile navigation" className="lg:hidden max-w-[1400px] mx-auto mt-2 rounded-2xl max-h-[75dvh] overflow-y-auto bg-white border border-slate-100 shadow-xl px-4 py-3 flex flex-col divide-y divide-slate-100 animate-in fade-in slide-in-from-top-1 duration-200">
          {/* All 4 Navigation Tabs */}
          {navItems.map((item) => {
            const isExpanded = mobileExpandedTab === item.name;
            return (
              <div key={item.name} className="py-2.5 first:pt-1 last:pb-2">
                <button
                  type="button"
                  onClick={() => toggleMobileTab(item.name)}
                  className="w-full flex items-center justify-between text-left text-sm font-semibold text-slate-800 py-1 focus:outline-none cursor-pointer"
                >
                  <span>{item.name}</span>
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-[#007bff]' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Sub-links dropdown */}
                {isExpanded && (
                  <div className={CITY_TABS.includes(item.name) ? 'pt-3 pb-1' : 'pl-3 pt-2 pb-1 flex flex-col space-y-2'}>
                    {CITY_TABS.includes(item.name) ? (
                renderCityGrid(item.name, 3)
                    ) : item.links.map((link) => (
                      <Link
                        key={link}
                        to={item.name === 'Coworking' ? '/coworking' : link}
                        onClick={closeMenu}
                        className="text-xs text-slate-600 hover:text-[#007bff] py-1 font-medium transition-colors block"
                      >
                        {link.replace('#', '').replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase())}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Contact Details in Mobile Menu */}
          <div className="pt-3 pb-1 flex flex-col gap-2 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="text-[#007bff] font-bold">📞 Phone:</span>
              <a href="tel:+919028760011" className="font-semibold text-slate-800 hover:text-blue-600">
                +91 9028760011
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#007bff] font-bold">✉️ Email:</span>
              <a href="mailto:info@mycoworking.in" className="font-semibold text-slate-800 hover:text-blue-600">
                info@mycoworking.in
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
