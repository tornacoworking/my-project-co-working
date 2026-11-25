import { CategoryPromo, VirtualOfficeSection, TrustedCompanies, WhyChoose, Testimonials, Faq } from './sections.jsx';
import Footer from '../footer/Footer.jsx';

// Everything under the fold lives in one lazily loaded chunk so the first paint only ships the hero.
// The server pre-renders it too, so crawlers still see every section.
const BelowFold = () => (
  <>
    <CategoryPromo />
    <VirtualOfficeSection />
    <TrustedCompanies />
    <WhyChoose />
    <Testimonials />
    <Faq />
    <Footer />
  </>
);

export default BelowFold;
