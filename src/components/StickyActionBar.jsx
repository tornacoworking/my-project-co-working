import { Suspense, lazy, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { CONTACT, whatsappLink } from '../data/stats.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const QuoteModal = lazy(() => import('./QuoteModal.jsx'));
const GENERIC_SPACE = { name: 'MyCoworking', location: 'India' };

const actionClass =
  'flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl px-2 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2';

/**
 * Phone-only sticky bar: [Call] [WhatsApp] [Get Free Quote].
 * Hidden while the on-page lead form (#enquiry-form) is visible, because it would duplicate it.
 */
const StickyActionBar = () => {
  const { pathname } = useLocation();
  const [formInView, setFormInView] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  useEffect(() => {
    const form = document.getElementById('enquiry-form');
    if (!form || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(([entry]) => setFormInView(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(form);
    return () => {
      observer.disconnect();
      setFormInView(false);
    };
  }, [pathname]);

  const getQuote = () => {
    const form = document.getElementById('enquiry-form');
    if (form) {
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
      form.querySelector('input')?.focus({ preventScroll: true });
    } else {
      setQuoteOpen(true);
    }
  };

  return (
    <>
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white/95 px-3 pt-2 shadow-[0_-6px_24px_rgba(15,23,42,0.12)] backdrop-blur transition-transform duration-200 pb-[max(0.5rem,env(safe-area-inset-bottom))] ${formInView ? 'translate-y-full' : 'translate-y-0'}`}
        role="region"
        data-sticky-bar
        aria-label="Quick actions"
        inert={formInView}
      >
        <div className="flex gap-2">
          <a href={`tel:${CONTACT.phoneTel}`} className={`${actionClass} border border-slate-300 bg-white text-slate-800 hover:bg-slate-50`}>
            <svg className="h-5 w-5 text-blue-700" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.62 10.79a15.15 15.15 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.74.6 1 1 0 011 1v3.59a1 1 0 01-1 1A16 16 0 013 4a1 1 0 011-1h3.59a1 1 0 011 1 11.72 11.72 0 00.6 3.74 1 1 0 01-.27 1.11l-2.3 2.94z" />
            </svg>
            Call
          </a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`${actionClass} bg-[#0b6b38] text-white hover:bg-[#095a2f]`}>
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
          <button type="button" onClick={getQuote} className={`${actionClass} cursor-pointer bg-blue-700 text-white hover:bg-blue-800`}>
            Get Free Quote
          </button>
        </div>
      </div>
      {quoteOpen && (
        <Suspense fallback={null}>
          <QuoteModal space={GENERIC_SPACE} onClose={() => setQuoteOpen(false)} />
        </Suspense>
      )}
    </>
  );
};

export default StickyActionBar;
