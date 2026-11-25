import { useState, useSyncExternalStore } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Mail, MessageCircle, Phone } from 'lucide-react';
import Container from '../components/Container.jsx';
import { socialPlatforms } from '../components/socialPlatforms.js';
import footerLogo from './company-logo-footer.png?w=320&format=webp';
import { footerQuickLinksData, footerQuickLinks, footerLegalLinks } from './footerdata.js';
import { BRAND_NAME, CONTACT, stats, whatsappLink } from '../data/stats.js';
import { SOCIAL_PROFILES } from '../seo/site.js';
import cityIndex from '../data/cityIndex.json';

// Top cities first (in the order the homepage uses), then every other city A-Z.
const topNames = footerQuickLinksData.columns.flatMap((column) => column.cities);
const orderedCities = [
  ...topNames.map((name) => cityIndex.find((city) => city.name === name)).filter(Boolean),
  ...cityIndex.filter((city) => !topNames.includes(city.name)),
];
const TOP_COUNT = topNames.length;
const cityLists = {
  coworking: orderedCities.map((city) => ({ name: city.name, to: `/coworking/${city.slug}`, label: `Coworking space in ${city.name}` })),
  virtual: orderedCities.filter((city) => city.virtual).map((city) => ({ name: city.name, to: `/virtual-office/${city.slug}`, label: `Virtual office in ${city.name}` })),
};
const tabs = [
  { id: 'coworking', label: 'Coworking' },
  { id: 'virtual', label: 'Virtual Office' },
];

const ring = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1120]';
const linkClass = `inline-flex min-h-9 items-center rounded text-sm text-slate-400 transition-all duration-150 hover:translate-x-0.5 hover:text-white ${ring}`;
const headingClass = "relative pb-2 text-sm font-semibold uppercase tracking-wider text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:rounded-full after:bg-orange-500 after:content-['']";

// Desktop is the server/first-render default, so the pre-rendered HTML always has every section open.
const subscribeDesktop = (callback) => {
  const query = window.matchMedia('(min-width: 1024px)');
  query.addEventListener('change', callback);
  return () => query.removeEventListener('change', callback);
};
const useIsDesktop = () => useSyncExternalStore(subscribeDesktop, () => window.matchMedia('(min-width: 1024px)').matches, () => true);

/**
 * A footer column: a plain heading + content on desktop, a collapsible <details> accordion on phones.
 * The links are in the DOM either way (a closed <details> still contains them).
 */
const FooterSection = ({ title, children }) => {
  const desktop = useIsDesktop();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <details open={desktop || mobileOpen} onToggle={(event) => !desktop && setMobileOpen(event.currentTarget.open)} className="group border-b border-white/10 pb-3 lg:border-0 lg:pb-0">
      <summary
        onClick={(event) => desktop && event.preventDefault()}
        tabIndex={desktop ? -1 : 0}
        className={`flex min-h-11 cursor-pointer list-none items-center justify-between rounded lg:min-h-0 lg:cursor-default [&::-webkit-details-marker]:hidden ${ring}`}
      >
        <h2 className={headingClass}>{title}</h2>
        <ChevronDown className="h-5 w-5 text-slate-400 transition-transform duration-200 group-open:rotate-180 lg:hidden" aria-hidden="true" />
      </summary>
      <div className="pt-3 lg:pt-4">{children}</div>
    </details>
  );
};

const ContactCard = ({ href, icon: Icon, label, value, external }) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className={`flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition-colors hover:border-white/25 hover:bg-white/10 ${ring}`}
  >
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300" aria-hidden="true"><Icon className="h-[18px] w-[18px]" /></span>
    <span className="flex min-w-0 flex-col leading-tight">
      <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{label}</span>
      <span className="truncate text-sm font-semibold text-white">{value}</span>
    </span>
  </a>
);

const Footer = () => {
  const [tab, setTab] = useState('coworking');
  const [showAll, setShowAll] = useState(false);
  const socials = socialPlatforms.filter((platform) => SOCIAL_PROFILES[platform.key]);

  const onTabKeyDown = (event) => {
    const index = tabs.findIndex((t) => t.id === tab);
    const next = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: tabs.length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    const target = tabs[(next + tabs.length) % tabs.length].id;
    setTab(target);
    document.getElementById(`footer-tab-${target}`)?.focus();
  };

  return (
    <footer data-site-footer aria-label="Footer" className="relative flow-root bg-[#0B1120] text-white">
      {/* CTA band: overlaps the section above on desktop (the footer is not clipped, so the overlap shows) */}
      <Container className="relative z-10 -mt-10 lg:-mt-16">
        <div className="flex flex-col items-start gap-6 rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 p-6 shadow-2xl shadow-blue-900/30 sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Find your perfect workspace</h2>
            <p className="mt-2 text-base text-blue-50">
              Tell us what you need and a workspace expert will shortlist options in {stats.cities} cities. Free, with zero brokerage.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="#enquiry-form" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-base font-bold text-blue-800 shadow-lg transition hover:bg-blue-50 ${ring}`}>
              Get free quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/60 px-6 text-base font-bold text-white transition hover:bg-white/10 ${ring}`}>
              <MessageCircle className="h-5 w-5" aria-hidden="true" /> WhatsApp us
            </a>
          </div>
        </div>
      </Container>

      {/* defer-render skips painting this block until it nears the viewport; it sits outside the band so the overlap is not clipped */}
      <div className="defer-render">
        <Container className="pb-24 pt-12 md:pb-8 lg:pt-14">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Brand */}
            <div className="lg:col-span-4">
              <img src={footerLogo} alt={`${BRAND_NAME} - coworking and virtual office spaces in India`} width="320" height="239" loading="lazy" decoding="async" className="mb-4 h-20 w-auto object-contain" />
              <p className="max-w-sm text-sm leading-relaxed text-slate-400">{footerQuickLinksData.brand.description}</p>
              <div className="mt-5 flex flex-col gap-2.5">
                <ContactCard href={`tel:${CONTACT.phoneTel}`} icon={Phone} label="Call us" value={CONTACT.phoneDisplay} />
                <ContactCard href={`mailto:${CONTACT.email}`} icon={Mail} label="Email us" value={CONTACT.email} />
                <ContactCard href={whatsappLink()} icon={MessageCircle} label="WhatsApp" value="Chat with an expert" external />
              </div>
              {socials.length > 0 && (
                <ul className="mt-5 flex gap-2" aria-label="Social media">
                  {socials.map(({ key, label, Icon }) => (
                    <li key={key}>
                      <a
                        href={SOCIAL_PROFILES[key]}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${BRAND_NAME} on ${label}`}
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-white/25 hover:bg-white/10 hover:text-white ${ring}`}
                      >
                        <Icon />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Quick links */}
            <div className="lg:col-span-2">
              <FooterSection title="Quick links">
                <nav aria-label="Quick links">
                  <ul>
                    {footerQuickLinks.filter((link) => link.href).map((link) => (
                      <li key={link.label}><a href={link.href} className={linkClass}>{link.label}</a></li>
                    ))}
                  </ul>
                </nav>
              </FooterSection>
            </div>

            {/* Cities: both lists stay in the DOM; the inactive one is hidden with a CSS class */}
            <div className="lg:col-span-6">
              <FooterSection title="Explore by city">
                <div role="tablist" aria-label="City pages" onKeyDown={onTabKeyDown} className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
                  {tabs.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      role="tab"
                      id={`footer-tab-${t.id}`}
                      aria-selected={tab === t.id}
                      aria-controls={`footer-panel-${t.id}`}
                      tabIndex={tab === t.id ? 0 : -1}
                      onClick={() => setTab(t.id)}
                      className={`min-h-10 cursor-pointer rounded-lg px-4 text-sm font-semibold transition-colors ${tab === t.id ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'} ${ring}`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>

                {tabs.map((t) => (
                  <div key={t.id} role="tabpanel" id={`footer-panel-${t.id}`} aria-labelledby={`footer-tab-${t.id}`} className={tab === t.id ? '' : 'hidden'}>
                    <nav aria-label={t.id === 'virtual' ? 'Virtual office by city' : 'Coworking by city'}>
                      <ul className="grid grid-cols-2 gap-x-4 sm:grid-cols-3">
                        {cityLists[t.id].map((city, index) => (
                          <li key={city.to} className={index >= TOP_COUNT && !showAll ? 'hidden' : ''}>
                            <Link to={city.to} title={city.label} aria-label={city.label} className={linkClass}>{city.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => setShowAll((value) => !value)}
                  aria-expanded={showAll}
                  className={`mt-3 inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded text-sm font-semibold text-orange-400 transition-colors hover:text-orange-300 ${ring}`}
                >
                  {showAll ? 'Show fewer cities' : `Show all ${cityLists[tab].length} cities`}
                  <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </FooterSection>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-sm text-slate-400 md:flex-row md:pr-16 md:text-left">
            <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</p>
            <nav aria-label="Legal">
              <ul className="flex flex-wrap items-center justify-center gap-x-1 md:justify-start">
                {footerLegalLinks.filter((link) => link.href).map((link, index) => (
                  <li key={link.label} className="flex items-center">
                    {index > 0 && <span aria-hidden="true" className="px-2 text-slate-600">·</span>}
                    <a href={link.href} className={linkClass}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <p>Zero brokerage · {stats.cities} cities</p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
