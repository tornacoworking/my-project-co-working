import { whatsappLink } from '../data/stats.js';
import WhatsAppIcon from './WhatsAppIcon.jsx';

// Desktop/tablet floating button. On phones the sticky bottom action bar (StickyActionBar) takes over.
const WhatsAppButton = () => (
  <a
    href={whatsappLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="hidden md:flex fixed bottom-6 right-6 z-[60] items-center justify-center w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#1ebe5b] text-white shadow-lg ring-4 ring-white/80 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-600"
  >
    <WhatsAppIcon className="w-8 h-8" />
  </a>
);

export default WhatsAppButton;
