import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Mail, Menu, MessageCircle, Phone, X } from 'lucide-react';
import Container from '../components/Container.jsx';
import cityIndex from '../data/cityIndex.json';
import logo from './company-logo.jpg?h=192&format=webp';
import { menuSections, drawerCities, dropdownCities } from './navMenu.js';
import { CONTACT, whatsappLink } from '../data/stats.js';

const cityLink = (name, kind) => {
  const city = cityIndex.find((c) => c.name === name);
  if (!city || (kind === 'virtual' && !city.virtual)) return null;
  return { name, to: kind === 'virtual' ? `/virtual-office/${city.slug}` : `/coworking/${city.slug}` };
};
const chipsFor = (kind, names) => names.map((name) => cityLink(name, kind)).filter(Boolean);

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2';

/** Icon tile + title + one-line description, shared by the desktop panels and the drawer. */
const MenuItem = ({ item, onNavigate, className = '' }) => {
  const Icon = item.icon;
  return (
    <Link to={item.to} onClick={onNavigate} className={`group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-blue-50/70 ${focusRing} ${className}`}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white" aria-hidden="true">
        <Icon className="h-5 w-5" strokeWidth={1.9} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold text-slate-900">{item.title}</span>
        <span className="block text-xs leading-snug text-slate-600">{item.description}</span>
      </span>
    </Link>
  );
};

const CityChips = ({ chips, onNavigate }) => (
  <ul className="flex flex-wrap gap-2">
    {chips.map((chip) => (
      <li key={chip.to}>
        <Link
          to={chip.to}
          onClick={onNavigate}
          aria-label={`${chip.to.startsWith('/virtual') ? 'Virtual office' : 'Coworking space'} in ${chip.name}`}
          className={`inline-flex min-h-9 items-center rounded-full border border-slate-200 bg-white px-3.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 ${focusRing}`}
        >
          {chip.name}
        </Link>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const location = useLocation();
  const [locationKey, setLocationKey] = useState(location.key);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerSection, setDrawerSection] = useState(null); // accordion: one open at a time
  const [openMenu, setOpenMenu] = useState(null); // desktop dropdown
  const headerRef = useRef(null);
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const hamburgerRef = useRef(null);
  const hoverOpened = useRef(null);
  const hoverTimer = useRef(null);

  // Any navigation closes the drawer and the dropdowns.
  if (locationKey !== location.key) {
    setLocationKey(location.key);
    setDrawerOpen(false);
    setOpenMenu(null);
  }

  const closeAll = () => {
    setDrawerOpen(false);
    setOpenMenu(null);
  };

  // ---------------------------------------------------------------- drawer behaviour
  useEffect(() => {
    if (!drawerOpen) return undefined;
    const drawer = drawerRef.current;
    const hamburger = hamburgerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden'; // lock page scroll
    document.documentElement.dataset.drawerOpen = 'true'; // lets CSS hide the sticky bottom bar

    const focusable = () =>
      [...drawer.querySelectorAll('a[href], button:not([disabled])')].filter((el) => !el.closest('[inert]'));

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setDrawerOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (!drawer.contains(document.activeElement)) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    const desktop = window.matchMedia('(min-width: 1024px)');
    const onBreakpoint = () => desktop.matches && setDrawerOpen(false);
    desktop.addEventListener('change', onBreakpoint);

    // Wait a beat: the drawer is still visibility:hidden on the first frame of its slide-in, and hidden elements cannot take focus.
    const focusTimer = setTimeout(() => closeButtonRef.current?.focus(), 60);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
      clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      delete document.documentElement.dataset.drawerOpen;
      hamburger?.focus(); // hand focus back to the button that opened it
    };
  }, [drawerOpen]);

  // ---------------------------------------------------------------- desktop dropdown behaviour
  useEffect(() => {
    const onPointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setOpenMenu(null);
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, []);

  const triggerId = (id) => `nav-trigger-${id}`;
  const panelId = (id) => `nav-panel-${id}`;
  const focusPanelLink = (id) => {
    requestAnimationFrame(() => document.getElementById(panelId(id))?.querySelector('a')?.focus());
  };

  const onTriggerClick = (id) => {
    if (hoverOpened.current === id) {
      hoverOpened.current = null; // the hover already opened it; this click should not close it again
      return;
    }
    setOpenMenu((current) => (current === id ? null : id));
  };

  const onTriggerKeyDown = (event, id) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setOpenMenu(id);
      focusPanelLink(id);
    } else if (event.key === 'Escape') {
      setOpenMenu(null);
    }
  };

  const onPanelKeyDown = (event, id) => {
    const links = [...event.currentTarget.querySelectorAll('a')];
    const index = links.indexOf(document.activeElement);
    const move = { ArrowDown: index + 1, ArrowUp: index - 1, Home: 0, End: links.length - 1 }[event.key];
    if (move !== undefined) {
      event.preventDefault();
      links[(move + links.length) % links.length]?.focus();
    } else if (event.key === 'Escape') {
      event.preventDefault();
      setOpenMenu(null);
      document.getElementById(triggerId(id))?.focus();
    }
  };

  const hoverOpen = (id) => {
    clearTimeout(hoverTimer.current);
    if (openMenu !== id) {
      hoverOpened.current = id;
      setOpenMenu(id);
    }
  };
  const hoverClose = () => {
    clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => {
      hoverOpened.current = null;
      setOpenMenu(null);
    }, 150);
  };

  return (
    <>
      <header ref={headerRef} className="sticky top-0 z-50 select-none py-2">
        <Container>
          <div className="flex h-[4.5rem] flex-row items-center justify-start gap-3 rounded-2xl border border-white/70 bg-white/95 px-3 shadow-[0_8px_30px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:h-28 sm:px-5 lg:gap-4 xl:gap-8">
            <Link to="/" aria-label="MyCoworking home" onClick={closeAll} className={`flex shrink-0 cursor-pointer items-center rounded-lg ${focusRing}`}>
              <img src={logo} alt="MyCoworking - Coworking and Virtual Office Spaces in India" width="189" height="192" className="h-14 w-auto object-contain mix-blend-multiply sm:h-24" />
            </Link>

            {/* Desktop phone pill */}
            <div className="hidden shrink-0 items-center rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm lg:flex">
              <a href={`tel:${CONTACT.phoneTel}`} className={`flex items-center gap-1.5 rounded-full hover:text-blue-700 ${focusRing}`}>
                <Phone className="h-4 w-4 shrink-0 text-blue-700" aria-hidden="true" />
                <span className="font-semibold">{CONTACT.phoneDisplay}</span>
              </a>
            </div>

            {/* Desktop dropdowns: open on hover, click or keyboard */}
            <nav aria-label="Main" className="hidden items-center gap-3 lg:flex xl:gap-6">
              {menuSections.map((section, index) => {
                const open = openMenu === section.id;
                const chips = section.cities ? chipsFor(section.cities, dropdownCities) : [];
                const alignRight = index === menuSections.length - 1;
                return (
                  <div
                    key={section.id}
                    className="relative"
                    onMouseEnter={() => hoverOpen(section.id)}
                    onMouseLeave={hoverClose}
                    onBlur={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) setOpenMenu((current) => (current === section.id ? null : current));
                    }}
                  >
                    <button
                      type="button"
                      id={triggerId(section.id)}
                      aria-haspopup="true"
                      aria-expanded={open}
                      aria-controls={panelId(section.id)}
                      onClick={() => onTriggerClick(section.id)}
                      onKeyDown={(event) => onTriggerKeyDown(event, section.id)}
                      className={`flex min-h-11 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full border border-slate-100 bg-white px-4 text-sm font-semibold shadow-sm transition-colors hover:text-blue-700 xl:text-base ${open ? 'text-blue-700' : 'text-slate-800'} ${focusRing}`}
                    >
                      {section.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${open ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} aria-hidden="true" />
                    </button>

                    <div
                      id={panelId(section.id)}
                      role="group"
                      aria-label={`${section.name} menu`}
                      inert={!open}
                      onKeyDown={(event) => onPanelKeyDown(event, section.id)}
                      className={`absolute top-full z-50 mt-2 w-[30rem] origin-top rounded-2xl border border-slate-200/80 bg-white p-3 shadow-xl transition duration-150 ease-out motion-reduce:transition-none ${alignRight ? 'right-0' : 'left-0'} ${open ? 'visible translate-y-0 scale-100 opacity-100' : 'invisible -translate-y-1 scale-95 opacity-0'}`}
                    >
                      <ul className="grid grid-cols-2 gap-1">
                        {section.items.map((item) => (
                          <li key={item.title}><MenuItem item={item} onNavigate={closeAll} /></li>
                        ))}
                      </ul>
                      {chips.length > 0 && (
                        <div className="mt-2 border-t border-slate-100 px-3 pb-1 pt-3">
                          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-600">Popular cities</p>
                          <CityChips chips={chips} onNavigate={closeAll} />
                          <Link to="/#top-cities" onClick={closeAll} className={`mt-3 inline-flex min-h-9 items-center rounded-md text-sm font-bold text-blue-700 hover:underline ${focusRing}`}>
                            Browse all cities <span aria-hidden="true">&nbsp;→</span>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </nav>

            <div className="ml-auto flex shrink-0 items-center gap-2.5 sm:gap-3">
              {/* Hidden below 380px: the same action sits at the bottom of the drawer */}
              <Link to="/#list-your-space" onClick={closeAll} className={`shrink-0 cursor-pointer rounded-full max-[379px]:hidden ${focusRing}`}>
                <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#0a58ca] to-[#2563eb] px-4 py-2 text-center text-[10px] font-extrabold leading-tight tracking-wide text-white shadow-lg shadow-blue-600/30 sm:px-5 sm:text-xs">
                  LIST YOUR<br />SPACE FREE
                </span>
              </Link>

              <button
                ref={hamburgerRef}
                type="button"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
                aria-expanded={drawerOpen}
                aria-controls="mobile-drawer"
                className={`flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition-colors hover:bg-slate-100 lg:hidden ${focusRing}`}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* ------------------------------------------------------------------ mobile drawer */}
      <div
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-[65] bg-slate-900/50 backdrop-blur-sm transition-[opacity,visibility] duration-[250ms] ease-out motion-reduce:transition-none lg:hidden ${drawerOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
      />
      <aside
        ref={drawerRef}
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!drawerOpen}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[88%] max-w-sm flex-col bg-white shadow-2xl transition-[transform,opacity,visibility] duration-[250ms] ease-out motion-reduce:transition-none lg:hidden ${drawerOpen ? 'visible translate-x-0 opacity-100' : 'invisible translate-x-full opacity-0'}`}
      >
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-2">
          <Link to="/" onClick={closeAll} aria-label="MyCoworking home" className={`rounded-lg ${focusRing}`}>
            <img src={logo} alt="MyCoworking" width="189" height="192" className="h-14 w-auto object-contain mix-blend-multiply" />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl text-slate-700 hover:bg-slate-100 ${focusRing}`}
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-4 py-3">
          <ul className="divide-y divide-slate-100">
            {menuSections.map((section) => {
              const open = drawerSection === section.id;
              return (
                <li key={section.id}>
                  <h2>
                    <button
                      type="button"
                      id={`drawer-trigger-${section.id}`}
                      aria-expanded={open}
                      aria-controls={`drawer-panel-${section.id}`}
                      onClick={() => setDrawerSection(open ? null : section.id)}
                      className={`flex min-h-12 w-full cursor-pointer items-center justify-between rounded-lg text-left text-base font-semibold text-slate-900 ${focusRing}`}
                    >
                      {section.name}
                      <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${open ? 'rotate-180 text-blue-700' : 'text-slate-400'}`} aria-hidden="true" />
                    </button>
                  </h2>
                  <div
                    id={`drawer-panel-${section.id}`}
                    role="region"
                    aria-labelledby={`drawer-trigger-${section.id}`}
                    className={`grid transition-[grid-template-rows] duration-[250ms] ease-out motion-reduce:transition-none ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                  >
                    <div className="min-h-0 overflow-hidden" inert={!open}>
                      <ul className="pb-3">
                        {section.items.map((item) => (
                          <li key={item.title}><MenuItem item={item} onNavigate={closeAll} /></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mt-5">
            <h2 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-slate-600">Popular cities</h2>
            <CityChips chips={chipsFor('coworking', drawerCities)} onNavigate={closeAll} />
          </div>
        </nav>

        <div className="border-t border-slate-100 bg-white p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
          <Link
            to="/#list-your-space"
            onClick={closeAll}
            className={`flex min-h-12 w-full items-center justify-center rounded-xl bg-blue-700 px-4 text-base font-bold text-white shadow-lg shadow-blue-700/25 transition-colors hover:bg-blue-800 ${focusRing}`}
          >
            List your space free
          </Link>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a href={`tel:${CONTACT.phoneTel}`} className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white text-sm font-bold text-slate-800 transition-colors hover:bg-slate-50 ${focusRing}`}>
              <Phone className="h-[18px] w-[18px] text-blue-700" aria-hidden="true" />Call
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0b6b38] text-sm font-bold text-white transition-colors hover:bg-[#095a2f] ${focusRing}`}>
              <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />WhatsApp
            </a>
          </div>
          <a href={`mailto:${CONTACT.email}`} className={`mt-3 flex min-h-9 items-center justify-center gap-1.5 rounded-md text-xs text-slate-600 hover:text-blue-700 ${focusRing}`}>
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />{CONTACT.email}
          </a>
        </div>
      </aside>
    </>
  );
};

export default Navbar;
