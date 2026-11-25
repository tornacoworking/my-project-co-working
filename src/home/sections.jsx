import { useEffect, useRef, useState } from 'react';
import LeadForm from '../components/LeadForm.jsx';
import { renderCompanyLogo } from './companyLogos.jsx';
import { useInView } from './useInView.js';
import { CONTACT } from '../data/stats.js';
import cityIndex from '../data/cityIndex.json';
import coworkingCardImage from './images/cityimages/form-image.jpg?w=640&format=webp';
import virtualBackground from '../assets/images/virtual-office-bg.jpg?w=1600&format=webp';
import virtualCardImage from '../assets/images/virtual-office-bg.jpg?w=640&format=webp';
import {
  perkIconSvgPaths,
  homePromotionalData,
  virtualOfficeShowcaseData,
  trustedCompaniesData,
  whyChooseData,
  customerReviewsData,
  faqSectionData,
} from '../sections/sectionData.js';

const SECTION = 'w-full defer-render';
const INNER = 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8';
const H2 = 'text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl';
const formCities = cityIndex.map((city) => city.name);

/* -------------------------------------------------------------------------- */
/* Category cards + "List your space free" banner                              */
/* -------------------------------------------------------------------------- */
const promoCards = [
  { id: 'coworking-spaces', title: ['Coworking', 'Spaces'], href: '#top-cities', image: coworkingCardImage, label: 'Browse coworking spaces by city' },
  { id: 'virtual-offices', title: ['Virtual', 'Offices'], href: '#virtual-office', image: virtualCardImage, label: 'See virtual office plans' },
];

export const CategoryPromo = () => {
  const banner = homePromotionalData.centerBanner;
  const focusForm = () => {
    document.getElementById('enquiry-form')?.querySelector('input')?.focus({ preventScroll: true });
  };

  return (
    <section id="list-your-space" aria-labelledby="list-title" className={`${SECTION} scroll-mt-28 border-t border-slate-200/60 bg-[#f8fafc] py-12 sm:py-14`}>
      <div className={`${INNER} grid gap-4 lg:grid-cols-[320px_1fr] lg:gap-6`}>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
          {promoCards.map((card) => (
            <li key={card.id}>
              <a href={card.href} aria-label={card.label} className="card card-lift reveal-view group relative flex h-full min-h-32 items-center overflow-hidden">
                <img src={card.image} alt="" width="640" height="360" loading="lazy" decoding="async" className="absolute inset-y-0 left-0 h-full w-3/5 object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-transparent via-white/40 to-white" aria-hidden="true" />
                <span className="relative ml-auto flex flex-col pr-4 text-right sm:pr-6">
                  <span className="text-base font-light text-slate-700 sm:text-xl">{card.title[0]}</span>
                  <span className="text-lg font-bold leading-tight text-slate-900 sm:text-2xl">{card.title[1]}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="card reveal-view relative overflow-hidden border-white/80 bg-gradient-to-br from-[#e3f2fd] via-[#dbeafe] to-[#c9d8f3] p-5 sm:p-7">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-400/20" aria-hidden="true" />
          <h2 id="list-title" className="relative text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            {banner.titlePrefix}{' '}
            <span className="inline-block -rotate-3 rounded bg-violet-700 px-2 py-0.5 text-sm font-black uppercase tracking-wide text-white align-middle">{banner.badgeText}</span>{' '}
            {banner.titleSuffix}
          </h2>
          <p className="relative mt-2 max-w-md text-base font-medium text-slate-700">{banner.subtitle}</p>
          <a
            href="#enquiry-form"
            onClick={focusForm}
            className="relative mt-4 inline-flex min-h-12 items-center gap-2 rounded-xl bg-blue-700 px-6 text-base font-bold text-white shadow-lg shadow-blue-700/25 transition hover:bg-blue-800"
          >
            {banner.ctaText} <span aria-hidden="true">→</span>
          </a>

          <ul className="relative mt-6 grid gap-3 border-t border-white/70 pt-5 sm:grid-cols-3">
            {banner.perks.map((perk) => (
              <li key={perk.id} className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/70 px-3 py-2.5">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${perk.bg} ${perk.color}`} aria-hidden="true">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={perkIconSvgPaths[perk.icon]} /></svg>
                </span>
                <span className="text-sm font-bold leading-snug text-slate-800">{perk.line1} {perk.line2}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* Virtual office                                                              */
/* -------------------------------------------------------------------------- */
export const VirtualOfficeSection = () => (
  <section id="virtual-office" aria-labelledby="virtual-title" className={`${SECTION} relative isolate scroll-mt-28 overflow-hidden bg-slate-950 py-12 sm:py-14`}>
    <img src={virtualBackground} alt="" width="1600" height="900" loading="lazy" decoding="async" className="absolute inset-0 -z-10 h-full w-full object-cover" />
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/60" aria-hidden="true" />
    <div className={`${INNER} grid items-center gap-8 lg:grid-cols-12 lg:gap-12`}>
      <div className="lg:col-span-7">
        <h2 id="virtual-title" className="text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
          {virtualOfficeShowcaseData.headline} <span className="text-sky-300">{virtualOfficeShowcaseData.highlight}</span>
        </h2>
        <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {virtualOfficeShowcaseData.points.map((point) => (
            <li key={point.id} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-sky-300/30 bg-sky-400/15" aria-hidden="true">
                <svg className="h-5 w-5 text-sky-300" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d={point.icon} /></svg>
              </span>
              <span className="text-base font-medium text-white">{point.label}</span>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-1 text-base text-white">
          <a href={`tel:${CONTACT.phoneTel}`} className="inline-flex min-h-11 items-center font-semibold hover:text-sky-300">{CONTACT.phoneDisplay}</a>
          <a href={`mailto:${CONTACT.email}`} className="inline-flex min-h-11 items-center font-semibold hover:text-sky-300">{CONTACT.email}</a>
        </div>
      </div>
      <div className="mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
        <LeadForm variant="virtual-office" defaultSpaceType="Virtual Office Space" cities={formCities} />
      </div>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* Trusted companies: CSS marquee, paused off-screen, on hover and on request  */
/* -------------------------------------------------------------------------- */
export const TrustedCompanies = () => {
  const [ref, inView] = useInView('100px');
  const [userPaused, setUserPaused] = useState(false);
  const paused = userPaused || !inView;
  const logos = trustedCompaniesData.companies;

  const renderSet = (hidden) => (
    <ul className="flex shrink-0 items-center gap-3 pr-3" aria-hidden={hidden || undefined}>
      {logos.map((company) => (
        <li key={company.id} className="flex h-16 w-40 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white px-3 shadow-sm">
          <div role="img" aria-label={company.name}>{renderCompanyLogo(company)}</div>
        </li>
      ))}
    </ul>
  );

  return (
    <section ref={ref} aria-labelledby="trusted-title" className={`${SECTION} border-y border-slate-200/60 bg-[#fbfcfd] py-10`}>
      <div className={INNER}>
        <div className="flex items-center justify-center gap-3">
          <h2 id="trusted-title" className="text-center text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">{trustedCompaniesData.title}</h2>
          <button
            type="button"
            onClick={() => setUserPaused((value) => !value)}
            aria-pressed={userPaused}
            className="inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 motion-reduce:hidden"
            aria-label={userPaused ? 'Play logo scrolling' : 'Pause logo scrolling'}
          >
            {userPaused ? (
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M6 4l10 6-10 6V4z" /></svg>
            ) : (
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5 4h4v12H5zM11 4h4v12h-4z" /></svg>
            )}
          </button>
        </div>
      </div>
      <div className="marquee mt-6 overflow-hidden motion-reduce:overflow-x-auto">
        <div className="marquee-track flex" data-paused={paused}>
          {renderSet(false)}
          {renderSet(true)}
        </div>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* Why choose us                                                               */
/* -------------------------------------------------------------------------- */
const whyIcons = {
  brokerage: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  turnaround: 'M13 10V3L4 14h7v7l9-11h-7z',
  network: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  consultant: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
};

export const WhyChoose = () => (
  <section aria-labelledby="why-title" className={`${SECTION} relative overflow-hidden bg-gradient-to-br from-[#fff7ed] via-white to-[#eff6ff] py-12 sm:py-14`}>
    <div className={INNER}>
      <div className="mb-8 flex flex-col items-center text-center">
        <h2 id="why-title" className={H2}>{whyChooseData.title}</h2>
        <span className="mt-3 h-1 w-16 rounded-full bg-gradient-to-r from-orange-600 to-amber-400" aria-hidden="true" />
      </div>
      <ul className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {whyChooseData.features.map((feature, index) => (
          <li key={feature.id} className="card card-lift reveal-view relative flex items-start gap-4 p-5 sm:p-6">
            <span className="absolute right-4 top-2 text-5xl font-black leading-none text-slate-100" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-600 to-amber-500 text-white" aria-hidden="true">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={whyIcons[feature.icon]} /></svg>
            </span>
            <div className="relative">
              <h3 className="mb-1 text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-700">{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/* -------------------------------------------------------------------------- */
/* Testimonials: static grid from md up, swipe carousel (scroll-snap) on phones */
/* -------------------------------------------------------------------------- */
export const Testimonials = () => {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const reviews = customerReviewsData.reviews;

  const scrollBy = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
    track.scrollBy({ left: direction * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const onScroll = () => {
      const card = track.firstElementChild;
      const step = card ? card.getBoundingClientRect().width + 16 : 1;
      setIndex(Math.round(track.scrollLeft / step));
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section aria-labelledby="reviews-title" className={`${SECTION} border-t border-slate-200/70 bg-[#f8fafc] py-12 sm:py-14`}>
      <div className={INNER}>
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 inline-block rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">{customerReviewsData.badge}</p>
            <h2 id="reviews-title" className={H2}>{customerReviewsData.title}</h2>
            <p className="mt-2 max-w-xl text-base text-slate-700">{customerReviewsData.subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            <p className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm sm:flex">
              <span className="text-amber-500" aria-hidden="true">★</span>
              {customerReviewsData.ratingSummary.averageRating}
              <span className="font-medium text-slate-600">({customerReviewsData.ratingSummary.totalReviews} reviews)</span>
            </p>
            <div className="flex gap-2 md:hidden">
              <button type="button" onClick={() => scrollBy(-1)} aria-label="Previous review" className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 hover:bg-slate-50">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button type="button" onClick={() => scrollBy(1)} aria-label="Next review" className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-slate-300 bg-white text-slate-800 hover:bg-slate-50">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        <ul
          ref={trackRef}
          className="snap-row -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3"
          aria-label="Customer reviews"
        >
          {reviews.map((item, position) => (
            <li key={item.id} className={`w-[85%] shrink-0 snap-center sm:w-[60%] md:w-auto ${position >= 6 ? 'md:hidden' : ''}`}>
              <article className="card card-lift flex h-full flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <img src={item.avatar} alt={`Portrait of ${item.name}`} width="48" height="48" loading="lazy" decoding="async" className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-blue-500/20" />
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-bold text-slate-900">{item.name}</h3>
                      <p className="truncate text-sm text-slate-600">{item.role}</p>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-600">{item.city}</p>
                    </div>
                  </div>
                  <div className="mb-3 flex items-center justify-between border-y border-slate-100 py-2">
                    <p className="flex items-center gap-1 text-sm font-bold text-slate-800">
                      <span className="text-amber-500" aria-hidden="true">{'★'.repeat(item.rating)}</span>
                      <span className="sr-only">{item.rating} out of 5 stars</span>
                    </p>
                    <span className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-800">{item.spaceType}</span>
                  </div>
                  <blockquote className="text-sm leading-relaxed text-slate-700">"{item.review}"</blockquote>
                </div>
                <p className="mt-4 border-t border-slate-100 pt-3 text-xs font-medium text-slate-600">{item.date}</p>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-center text-sm font-medium text-slate-600 md:hidden" aria-hidden="true">{Math.min(index + 1, reviews.length)} / {reviews.length}</p>
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* FAQ accordion                                                               */
/* -------------------------------------------------------------------------- */
export const Faq = () => {
  const [open, setOpen] = useState(null);
  return (
    <section aria-labelledby="faq-title" className={`${SECTION} border-t border-slate-200/70 bg-[#fbf9f6] pb-24 pt-12 sm:pb-28 sm:pt-14`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-3 inline-block rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">{faqSectionData.badge}</p>
          <h2 id="faq-title" className={H2}>{faqSectionData.title}</h2>
          <p className="mt-2 text-base text-slate-700">{faqSectionData.subtitle}</p>
        </div>

        <div className="flex flex-col gap-3">
          {faqSectionData.questions.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.id} className={`card overflow-hidden transition-colors ${isOpen ? 'border-blue-400 ring-2 ring-blue-500/10' : ''}`}>
                <h3>
                  <button
                    type="button"
                    id={`${faq.id}-button`}
                    aria-expanded={isOpen}
                    aria-controls={`${faq.id}-panel`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex min-h-14 w-full cursor-pointer items-center gap-3 px-4 py-3 text-left sm:px-5"
                  >
                    <svg className={`h-5 w-5 shrink-0 text-blue-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    <span className="text-base font-bold text-slate-900">{faq.question}</span>
                  </button>
                </h3>
                {/* hidden keeps the answer out of the tab order but in the HTML for search engines */}
                <div id={`${faq.id}-panel`} role="region" aria-labelledby={`${faq.id}-button`} hidden={!isOpen} className="px-4 pb-4 pl-12 text-base leading-relaxed text-slate-700 sm:px-5 sm:pb-5 sm:pl-13">
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-base text-slate-700">
          Still have questions? <a href="#enquiry-form" className="font-bold text-blue-700 underline-offset-2 hover:underline">Ask our workspace experts</a>.
        </p>
      </div>
    </section>
  );
};
