import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CityGrid from '../components/city/CityGrid';
import CityPopup from '../components/city/CityPopup';
import Morecities from '../morecities/Morecities.jsx';
import Section from '../sections/Section';
import Footer from '../footer/Footer';
import { virtualOfficePath } from '../virtual/virtual.js';

// ============================================================================
// DATA STORE IMPORT
// Hero and enquiry content is centralized in src/home/homedata.js.
// Section and footer content lives in src/sections/sectionData.js and
// src/footer/footerdata.js.
// ============================================================================
import {
  cityNames as availableCities,
  spaceOptions as availableSpaceTypes,
  heroSectionData,
  enquiryFormConfig
} from './homedata.js';

/**
 * ============================================================================
 * HOMEPAGE COMPONENT
 * ============================================================================
 * Main landing page for the coworking and flexible workspace platform.
 *
 * Page Structure:
 *  1. Hero Fold:
 *     - Left Column: Search filters, category selectors, and 18-city circular grid.
 *     - Right Column: Hero banner with platform statistics & lead enquiry contact form.
 *  2. Promotional Banner Section:
 *     - Category Cards: Coworking Spaces & Coliving Spaces.
 *     - Center Card: "List Free with Cofynd" banner with verified perks.
 *     - Category Cards: Virtual Offices & Office Spaces.
 *  3. India's #1 Online Platform Showcase:
 *     - Overlapping property showcase cards & live metrics.
 *  4. Trusted Companies Carousel:
 *     - Auto-scrolling logo carousel (3-second interval, hover-pause).
 *  5. Top Coworking Spaces in India:
 *     - 18-City workspace grid with verified images and local city taglines.
 *  6. Why Choose Us (ANAROCK):
 *     - 6 key value propositions on royal blue background.
 *  7. City Popup Dialog:
 *     - Modal dialog for choosing between Coworking and Virtual Offices.
 * ============================================================================
 */

const heroInputClass =
  'w-full h-11 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm border border-slate-200 rounded-xl px-3 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition';

const Homepage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // =========================================================================
  // 1. APPLICATION STATE (Initialized with centralized config defaults)
  // =========================================================================

  // Tracks the workspace category chosen in the hero quick search (e.g., "Coworking Spaces")
  const [selectedSpaceType, setSelectedSpaceType] = useState(availableSpaceTypes[0]);

  // Tracks the name of the currently selected city (defaults to 'Pune' from config)
  const [selectedCityName, setSelectedCityName] = useState(enquiryFormConfig.defaultValues.city);

  // Stores contact and enquiry form inputs entered by the user
  const [enquiryFormData, setEnquiryFormData] = useState({
    name: '',
    email: '',
    phone: '',
    spaceType: '',
    city: ''
  });

  // Flags for enquiry form submission confirmation banner
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isMessageFading, setIsMessageFading] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const fadeTimerRef = useRef(null);
  const hideTimerRef = useRef(null);

  // Clean up timers on unmount to avoid memory leaks
  useEffect(() => {
    return () => {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  // Holds the city object currently being viewed in the popup modal (null when closed)
  const [openedCityForPopup, setOpenedCityForPopup] = useState(null);

  /**
   * Handles click on any city link from the footer Quick Links directory:
   * - Selects the chosen city in the top hero search without opening any popup modal
   * - Smoothly scrolls to the top of the homepage
   */
  const handleFooterCityClick = (cityName) => {
    const matchedCity = availableCities.find(
      (c) => c.name.toLowerCase() === cityName.toLowerCase()
    );
    if (matchedCity) {
      selectCityAndOpenPopup(matchedCity, false);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // =========================================================================
  // 2. USER INTERACTION & LEAD ENQUIRY FORM HANDLERS
  // =========================================================================

  /**
   * Updates enquiry form field values as the user types into inputs,
   * and clears previous submission confirmation.
   */
  const handleFormFieldChange = (event) => {
    const { name, value } = event.target;
    setEnquiryFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
    if (isFormSubmitted) {
      if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      setIsFormSubmitted(false);
      setIsMessageFading(false);
    }
  };

  /**
   * Handles lead enquiry form submission:
   * - Prepares email to support team using enquiryFormConfig.contactEmail
   * - Shows confirmation banner and smoothly fades out after 3 seconds
   * - Resets the form fields cleanly
   */
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const clientName = enquiryFormData.name;
    const clientEmail = enquiryFormData.email;
    const clientPhone = enquiryFormData.phone;
    const targetSpaceType = enquiryFormData.spaceType || selectedSpaceType || enquiryFormConfig.defaultValues.spaceType;
    const targetCity = enquiryFormData.city || selectedCityName || enquiryFormConfig.defaultValues.countryFallback;

    // Show confirmation message with submitted user's name
    setSubmittedName(clientName);
    setIsFormSubmitted(true);
    setIsMessageFading(false);

    // Clear any existing timer
    if (fadeTimerRef.current) clearTimeout(fadeTimerRef.current);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

    // Smoothly hide message box after configured duration
    const displayMs = enquiryFormConfig.feedback?.displayDurationMs || 3000;
    const fadeMs = enquiryFormConfig.feedback?.fadeTransitionMs || 500;

    fadeTimerRef.current = setTimeout(() => {
      setIsMessageFading(true);
      hideTimerRef.current = setTimeout(() => {
        setIsFormSubmitted(false);
        setIsMessageFading(false);
      }, fadeMs);
    }, displayMs);

    // Construct email subject and body, and trigger user's default email client
    const subject = encodeURIComponent(`Workspace Enquiry - ${targetSpaceType} in ${targetCity}`);
    const body = encodeURIComponent(
      `New Workspace Enquiry:\n\n` +
      `Client Name: ${clientName}\n` +
      `Email: ${clientEmail}\n` +
      `Phone: ${clientPhone}\n` +
      `Type of Space: ${targetSpaceType}\n` +
      `City: ${targetCity}\n` +
      `Submission Date: ${new Date().toLocaleString()}\n`
    );
    window.location.href = `mailto:${enquiryFormConfig.contactEmail}?subject=${subject}&body=${body}`;

    // Reset form fields cleanly
    setEnquiryFormData({
      name: '',
      email: '',
      phone: '',
      spaceType: '',
      city: ''
    });
  };

  /**
   * Selects a city, syncs the enquiry form city field, and optionally opens its popup modal.
   * 
   * @param {Object} city - Selected city object containing name and image
   * @param {boolean} openModal - Whether to trigger the space options popup
   */
  const selectCityAndOpenPopup = (city, openModal = false) => {
    setSelectedCityName(city.name);
    setEnquiryFormData((previousData) => ({
      ...previousData,
      city: city.name
    }));
    if (openModal) {
      setOpenedCityForPopup(city);
    }
  };

  /**
   * Updates the chosen workspace type (e.g., Coworking Spaces or Virtual Office).
   */
  const selectSpaceType = (spaceType) => {
    setSelectedSpaceType(spaceType);
    setEnquiryFormData((previousData) => ({
      ...previousData,
      spaceType
    }));
  };

  /**
   * Closes the city options popup modal.
   */
  const closeCityPopup = () => {
    setOpenedCityForPopup(null);
  };

  // A city picked from the navbar "Coworking" dropdown arrives via router state:
  // handle it exactly like a city click on this page, then clear the state.
  useEffect(() => {
    const cityName = location.state?.openCity;
    if (!cityName) return;
    const matchedCity = availableCities.find((c) => c.name.toLowerCase() === cityName.toLowerCase());
    if (matchedCity) selectCityAndOpenPopup(matchedCity, true);
    navigate(location.pathname, { replace: true, state: null });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  /**
   * Handles space type selection from within the popup dialog,
   * closes the popup, and navigates to the city's coworking listing if applicable.
   */
  const handleSpaceSelectionFromPopup = (chosenSpaceType, city) => {
    selectSpaceType(chosenSpaceType);
    closeCityPopup();
    if (chosenSpaceType === 'Coworking Spaces') {
      navigate(`/coworking/${city.name.toLowerCase()}`);
    } else if (chosenSpaceType === 'Virtual Office Space') {
      navigate(virtualOfficePath(city.name));
    }
  };

  /**
   * Handles click on category promo cards (Coworking, Coliving, Virtual Office, Office Spaces).
   */
  const handleCategoryCardClick = (card) => {
    if (card.id === 'coworking-spaces') {
      navigate(`/coworking/${selectedCityName.toLowerCase()}`);
    } else if (card.type) {
      selectSpaceType(card.type);
      selectCityAndOpenPopup(availableCities.find((c) => c.name === selectedCityName) || availableCities[0], true);
    }
  };

  // =========================================================================
  // 3. UI RENDERING (Mapped dynamically from centralized homedata store)
  // =========================================================================
  return (
    <section className="w-full min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)] overflow-x-hidden bg-[#f5f6fb] flex flex-col antialiased font-sans select-none">

      {/* =================================================================== */}
      {/* SECTION 1: HERO (search + city picker on the left, enquiry on right) */}
      {/* =================================================================== */}
      <div className="relative isolate w-full overflow-hidden bg-[#0a0f2c] text-white">
        {/* Background layers: mesh gradient, dotted grid, glowing blobs */}
        <div className="absolute inset-0 hero-mesh" aria-hidden="true" />
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />
        <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-fuchsia-500/25 blur-3xl anim-float" aria-hidden="true" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-sky-400/20 blur-3xl anim-float-rev" aria-hidden="true" />

        {/* Decorative shapes */}
        <svg className="absolute top-10 left-[46%] w-16 h-16 text-amber-300/70 anim-spin-slow hidden md:block" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <rect x="12" y="12" width="40" height="40" rx="8" />
          <rect x="22" y="22" width="20" height="20" rx="4" />
        </svg>
        <svg className="absolute bottom-16 left-[40%] w-12 h-12 text-sky-300/60 anim-float hidden md:block" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M24 6v36M6 24h36" />
        </svg>
        <div className="absolute top-24 right-[8%] w-6 h-6 rotate-45 rounded-sm bg-gradient-to-br from-orange-400 to-pink-500 opacity-80 anim-float hidden sm:block" aria-hidden="true" />
        <div className="absolute bottom-10 right-[44%] w-4 h-4 rounded-full bg-emerald-400/80 anim-float-rev hidden sm:block" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ------------------------- LEFT COLUMN ------------------------- */}
          <div className="lg:col-span-7 flex flex-col anim-rise">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 backdrop-blur-md px-3.5 py-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-amber-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {heroSectionData.tagline}
            </span>

            <h1 className="mt-4 text-[34px] sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.05]">
              {heroSectionData.headline.prefix} <span className="gradient-text">{heroSectionData.headline.highlight1}</span><br />
              {heroSectionData.headline.middleText} <span className="gradient-text">{heroSectionData.headline.highlight2}</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
              {heroSectionData.description}
            </p>

            {/* Search card */}
            <div className="mt-6 w-full max-w-2xl rounded-2xl bg-white p-3 sm:p-3.5 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_auto] gap-2.5 items-stretch">
                <label className="border border-slate-200 rounded-xl px-3 py-1.5 flex flex-col bg-slate-50/80 hover:border-indigo-400 transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 leading-tight">
                    {heroSectionData.searchFilters.lookingForLabel}
                  </span>
                  <select
                    value={selectedSpaceType}
                    onChange={(event) => selectSpaceType(event.target.value)}
                    className="text-sm font-semibold text-slate-800 bg-transparent focus:outline-none cursor-pointer mt-0.5"
                  >
                    {availableSpaceTypes.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </label>

                {/* More Cities button + popup (src/morecities) */}
                <Morecities onCitySelect={(city) => selectCityAndOpenPopup(city, true)} />

                <button
                  type="button"
                  onClick={() => {
                    if (selectedSpaceType === 'Coworking Spaces') {
                      navigate(`/coworking/${selectedCityName.toLowerCase()}`);
                    } else {
                      selectCityAndOpenPopup(availableCities.find((city) => city.name === selectedCityName), true);
                    }
                  }}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/30 transition-all cursor-pointer active:scale-95"
                >
                  {heroSectionData.searchFilters.searchButtonText} <span aria-hidden="true">{heroSectionData.searchFilters.searchButtonArrow}</span>
                </button>
              </div>
            </div>

            {/* Popular cities panel */}
            <div className="mt-5 w-full max-w-2xl rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-white/30">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-sm font-extrabold text-slate-900 tracking-tight">{heroSectionData.cityPanelTitle}</h2>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 rounded-full px-2.5 py-0.5">
                  {availableCities.length} cities
                </span>
              </div>
              <CityGrid
                cities={availableCities}
                selectedCity={selectedCityName}
                onCitySelect={(city) => selectCityAndOpenPopup(city, true)}
              />
            </div>

            {/* Trust points */}
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-slate-200">
              {heroSectionData.trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l3.8 3.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------- RIGHT COLUMN ------------------------ */}
          <div className="lg:col-span-5 relative w-full max-w-md mx-auto lg:max-w-none anim-rise">
            {/* Floating badges */}
            <div className="absolute -top-4 -left-3 sm:-left-6 z-20 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-xl anim-float text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100 text-amber-500 text-base">★</span>
              <div className="leading-tight">
                <p className="text-sm font-black">4.8 / 5</p>
                <p className="text-[10px] font-semibold text-slate-500">Member rating</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-2 sm:-right-5 z-20 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-xl anim-float-rev text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 text-base">₹0</span>
              <div className="leading-tight">
                <p className="text-sm font-black">Zero brokerage</p>
                <p className="text-[10px] font-semibold text-slate-500">On every booking</p>
              </div>
            </div>

            <div
              className="relative rounded-[28px] overflow-hidden bg-cover bg-center p-4 sm:p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] ring-1 ring-white/25"
              style={{ backgroundImage: `url(${heroSectionData.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/70 via-indigo-950/55 to-slate-950/85" aria-hidden="true" />

              {/* Statistics */}
              <div className="relative z-10 grid grid-cols-2 gap-3 mb-4">
                {heroSectionData.statistics.map((stat) => (
                  <div key={stat.id} className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-3 py-3 text-center">
                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight gradient-text">{stat.count}</h2>
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-200 mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Lead enquiry form */}
              <form onSubmit={handleFormSubmit} className="relative z-10 flex flex-col gap-2.5 rounded-2xl bg-white/95 backdrop-blur-xl p-4 sm:p-5 shadow-2xl">
                <div className="mb-0.5">
                  <h3 className="text-lg font-black text-slate-900 tracking-tight">{enquiryFormConfig.heading}</h3>
                  <p className="text-xs text-slate-500 font-medium">{enquiryFormConfig.subheading}</p>
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder={enquiryFormConfig.placeholders.name}
                  value={enquiryFormData.name}
                  onChange={handleFormFieldChange}
                  required
                  className={heroInputClass}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    type="email"
                    name="email"
                    placeholder={enquiryFormConfig.placeholders.email}
                    value={enquiryFormData.email}
                    onChange={handleFormFieldChange}
                    required
                    className={heroInputClass}
                  />

                  <div className="flex items-center w-full h-11 bg-slate-50 border border-slate-200 rounded-xl px-2.5 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 focus-within:bg-white transition">
                    <div className="flex items-center gap-1 pr-1.5 select-none shrink-0 border-r border-slate-200">
                      <svg className="w-4 h-3 rounded-[1px] shadow-xs" viewBox="0 0 24 16">
                        <rect width="24" height="5.33" fill="#FF9933" />
                        <rect y="5.33" width="24" height="5.33" fill="#FFFFFF" />
                        <rect y="10.66" width="24" height="5.34" fill="#128807" />
                        <circle cx="12" cy="8" r="2.2" fill="none" stroke="#000080" strokeWidth="0.6" />
                        <circle cx="12" cy="8" r="0.6" fill="#000080" />
                      </svg>
                      <span className="text-[9px] text-slate-500">▼</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={enquiryFormConfig.placeholders.phone}
                      value={enquiryFormData.phone}
                      onChange={handleFormFieldChange}
                      required
                      className="w-full h-full bg-transparent text-slate-800 placeholder-slate-400 text-sm pl-2 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="relative w-full">
                    <select
                      name="spaceType"
                      value={enquiryFormData.spaceType}
                      onChange={(event) => selectSpaceType(event.target.value)}
                      className={`${heroInputClass} pr-7 appearance-none cursor-pointer`}
                    >
                      <option value="">{enquiryFormConfig.placeholders.spaceType}</option>
                      {availableSpaceTypes.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-slate-500">
                      <span className="text-[9px]">▼</span>
                    </div>
                  </div>

                  <input
                    type="text"
                    name="city"
                    placeholder={enquiryFormConfig.placeholders.city}
                    value={enquiryFormData.city}
                    onChange={handleFormFieldChange}
                    list="city-options-list"
                    className={heroInputClass}
                  />
                  <datalist id="city-options-list">
                    {availableCities.map((city) => (
                      <option key={city.name} value={city.name} />
                    ))}
                  </datalist>
                </div>

                <button
                  type="submit"
                  className="w-full mt-1 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white text-sm font-bold rounded-xl py-3 shadow-lg shadow-indigo-500/30 transition-all cursor-pointer active:scale-[0.98]"
                >
                  {isFormSubmitted ? enquiryFormConfig.buttons.submitted : enquiryFormConfig.buttons.idle}
                </button>

                {isFormSubmitted && (
                  <p
                    className={`text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 py-2 px-3 rounded-lg transition-all duration-500 ease-out ${
                      isMessageFading ? 'opacity-0 -translate-y-1' : 'opacity-100 translate-y-0'
                    }`}
                    role="status"
                  >
                    {enquiryFormConfig.feedback.getSuccessText(submittedName)}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Curved bottom edge into the next section */}
        <svg className="relative z-10 block w-full h-8 sm:h-12 text-[#f5f6fb]" viewBox="0 0 1440 48" preserveAspectRatio="none" aria-hidden="true">
          <path fill="currentColor" d="M0 48h1440V16C1200 48 960 0 720 16S240 48 0 16z" />
        </svg>
      </div>

      <Section
        onCategoryCardClick={handleCategoryCardClick}
        onCitySelect={(cityName) => selectCityAndOpenPopup(availableCities.find((city) => city.name === cityName), true)}
      />

      <Footer onCityClick={handleFooterCityClick} />

      {/* =================================================================== */}
      {/* MODAL OVERLAY: City Selection Options Popup                        */}
      {/* =================================================================== */}
      <CityPopup
        activeCity={openedCityForPopup}
        onClose={closeCityPopup}
        onSelectSpace={handleSpaceSelectionFromPopup}
        spaceOptions={availableSpaceTypes}
      />
    </section>
  );
};

export default Homepage;
