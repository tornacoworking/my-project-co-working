// ============================================================================
import { BRAND_NAME, stats } from '../data/stats.js';

// QUICK LINKS: NAVBAR TABS & LINK HELPERS
// Used by Footer.jsx (Quick links columns)
// ============================================================================
// Navbar tabs and their links, shared by the navbar and the footer "Quick links"
export const navItems = [
  { name: 'Coworking', targetId: 'top-cities' },
  { name: 'Virtual Office', targetId: 'virtual-office' },
  { name: 'Business Plans', targetId: 'enquiry-form' },
  { name: 'List Your Space Free', targetId: 'list-your-space' }
];

export const navLinkLabel = (link) =>
  link.replace('#', '').replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export const navLinkTarget = (item, link) => (item.name === 'Coworking' ? '/coworking' : link);

// ============================================================================
// 15. FOOTER QUICK LINKS & DIRECTORY DATA (ALL 18 CITIES)
// Displayed under the platform description on the Home page
// Features:
//  - Company brand logo & brief narrative
//  - 3 columns of Quick Links covering all 18 top cities from the top hero grid
// ============================================================================
export const footerQuickLinksData = {
  brand: {
    name: BRAND_NAME,
    description: `${BRAND_NAME} helps teams find coworking spaces, private offices and virtual offices across ${stats.cities} Indian cities, with zero brokerage.`
  },
  columns: [
    {
      id: "col-1",
      title: "Quick links",
      cities: [
        "Gurugram",
        "Bhubaneswar",
        "Bangalore",
        "Hyderabad",
        "Chennai",
        "Lucknow"
      ]
    },
    {
      id: "col-2",
      title: "Quick links",
      cities: [
        "Pune",
        "Noida",
        "Delhi",
        "Indore",
        "Ahmedabad",
        "Jaipur"
      ]
    },
    {
      id: "col-3",
      title: "Quick links",
      cities: [
        "Chandigarh",
        "Kochi",
        "Kolkata",
        "Coimbatore",
        "Goa",
        "Mumbai"
      ]
    }
  ]
};

// Footer link groups. A link with href: null is skipped until its page exists (no dead links).
export const footerQuickLinks = [
  { label: 'Coworking', href: '/#top-cities' },
  { label: 'Virtual Office', href: '/#virtual-office' },
  { label: 'Business Plans', href: '/#enquiry-form' },
  { label: 'List Your Space Free', href: '/#list-your-space' },
  { label: 'About', href: null }, // no About page yet
  { label: 'Contact', href: '/#enquiry-form' },
  { label: 'Blog', href: null }, // no Blog yet
];

export const footerLegalLinks = [
  { label: 'Privacy Policy', href: null }, // add the page, then set '/privacy-policy'
  { label: 'Terms', href: null }, // add the page, then set '/terms'
  { label: 'Sitemap', href: '/sitemap.xml' },
];
