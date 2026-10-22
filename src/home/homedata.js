/**
 * ============================================================================
 * HOMEPAGE MASTER DATA STORE (homedata.js)
 * ============================================================================
 * This file centralizes ALL data, text copy, statistics, image references,
 * and configuration values for the Homepage (src/home/Homepage.jsx).
 *
 * Table of Contents:
 *  1. City Assets & Quick-Grid City List (cityNames)
 *  2. Workspace Category Options (spaceOptions)
 *  3. Hero Section Configuration (heroSectionData)
 *  4. Lead Enquiry Form Configuration (enquiryFormConfig)
 *  5. SVG Icon Paths for Benefit Badges (perkIconSvgPaths)
 *  6. Promotional Cards & "List Free" Center Banner (homePromotionalData)
 *  7. India's #1 Platform Showcase Section (platformShowcaseData)
 *  8. Trusted Companies Carousel Data (trustedCompaniesData)
 *  9. Top Coworking Spaces in India Section (topCoworkingCitiesData)
 * 10. Why Choose Us (ANAROCK) Value Propositions (whyChooseData)
 * 11. Customer Testimonials & Reviews (customerReviewsData)
 * 12. Frequently Asked Questions (faqSectionData)
 * 13. Platform Overview & Ecosystem Description (homepageDescriptionData)
 * 14. Footer Directory & City Quick Links (footerQuickLinksData)
 * ============================================================================
 */

// ============================================================================
// 1. ACTIVE CITY IMAGE IMPORTS & HERO BACKGROUND
// ============================================================================
import heroBackgroundImage from './images/cityimages/navbarimage.png';
import gurugramImg from './images/cityimages/gurugram.png';
import bhubaneshwar from './images/cityimages/bhubaneshwar.png';
import banglore from './images/cityimages/banglore.png';
import hydrabad from './images/cityimages/hydrabad.png';
import chennai from './images/cityimages/chennai.png';
import lukhnow from './images/cityimages/lukhnow.png';
import pune from './images/cityimages/pune.png';
import noida from './images/cityimages/noida.jpg';
import delhi from './images/cityimages/delhi.webp';
import indore from './images/cityimages/indore.png';
import jaipur from './images/cityimages/jaipur.png';
import ahemdabad from './images/cityimages/ahemdabad.jpg';
import chandigadh from './images/cityimages/chandigadh.jpg';
import kochi from './images/cityimages/kochi.jpg';
import kolkatta from './images/cityimages/kolkatta.png';
import koimbatore from './images/cityimages/koimbatore.png';
import goa from './images/cityimages/goa.png';
import mumbai from './images/cityimages/mumbai.png';

// Re-export hero background image so Homepage can obtain it from homedata
export { heroBackgroundImage };

// ============================================================================
// 2. CITY NAMES & 18-CITY CIRCULAR QUICK SELECTION LIST
// Used by:
//  - CityGrid.jsx (circular city avatars in the Hero section)
//  - Homepage.jsx (native city dropdown selector)
//  - CityPopup.jsx (modal title and header)
// ============================================================================
export const cityNames = const uniqueCities = [
  { name: "Ahmedabad", image: ahemdabad, famousPlace: "Sabarmati Ashram", famousPlaceImage: "sabarmati_ashram.jpg" },
  { name: "Ambala", image: ambalaImg, famousPlace: "Rani Ka Talab", famousPlaceImage: "rani_ka_talab.jpg" },
  { name: "Aurangabad", image: aurangabadImg, famousPlace: "Bibi Ka Maqbara", famousPlaceImage: "bibi_ka_maqbara.jpg" },
  { name: "Bangalore", image: banglore, famousPlace: "Lalbagh Botanical Garden", famousPlaceImage: "lalbagh.png" },
  { name: "Bhopal", image: bhopalImg, famousPlace: "Upper Lake", famousPlaceImage: "upper_lake.jpg" },
  { name: "Bhubaneswar", image: bhubaneshwar, famousPlace: "Lingaraj Temple", famousPlaceImage: "lingaraj_temple.jpg" },
  { name: "Bodh Gaya", image: bodhgayaImg, famousPlace: "Mahabodhi Temple", famousPlaceImage: "mahabodhi_temple.jpg" },
  { name: "Chandigarh", image: chandigadh, famousPlace: "Rock Garden", famousPlaceImage: "rock_garden.jpg" },
  { name: "Chennai", image: chennai, famousPlace: "Marina Beach", famousPlaceImage: "marina_beach.png" },
  { name: "Coimbatore", image: koimbatore, famousPlace: "Marudhamalai Temple", famousPlaceImage: "marudhamalai.jpg" },
  { name: "Dehradun", image: dehradunImg, famousPlace: "Robber's Cave", famousPlaceImage: "robbers_cave.jpg" },
  { name: "Delhi", image: delhi, famousPlace: "Red Fort", famousPlaceImage: "red_fort.jpg" },
  { name: "Faridabad", image: faridabadImg, famousPlace: "Surajkund Lake", famousPlaceImage: "surajkund.jpg" },
  { name: "Gandhinagar", image: gandhinagarImg, famousPlace: "Akshardham Temple", famousPlaceImage: "akshardham.jpg" },
  { name: "Gangtok", image: gangtokImg, famousPlace: "Nathu La Pass", famousPlaceImage: "nathula_pass.jpg" },
  { name: "Ghaziabad", image: ghaziabadImg, famousPlace: "ISKCON Temple", famousPlaceImage: "iskcon_ghaziabad.jpg" },
  { name: "Goa", image: goa, famousPlace: "Calangute Beach", famousPlaceImage: "calangute_beach.png" },
  { name: "Greater Noida", image: greaterNoidaImg, famousPlace: "Buddh International Circuit", famousPlaceImage: "buddh_circuit.jpg" },
  { name: "Gurugram", image: gurugramImg, famousPlace: "CyberHub", famousPlaceImage: "cyberhub.png" },
  { name: "Haridwar", image: haridwarImg, famousPlace: "Har Ki Pauri", famousPlaceImage: "har_ki_pauri.jpg" },
  { name: "Hubballi", image: hubballiImg, famousPlace: "Unkal Lake", famousPlaceImage: "unkal_lake.jpg" },
  { name: "Hyderabad", image: hydrabad, famousPlace: "Charminar", famousPlaceImage: "charminar.png" },
  { name: "Indore", image: indore, famousPlace: "Rajwada Palace", famousPlaceImage: "rajwada.jpg" },
  { name: "Itanagar", image: itanagarImg, famousPlace: "Ita Fort", famousPlaceImage: "ita_fort.jpg" },
  { name: "Jaipur", image: jaipur, famousPlace: "Hawa Mahal", famousPlaceImage: "hawa_mahal.jpg" },
  { name: "Jammu", image: jammuImg, famousPlace: "Raghunath Temple", famousPlaceImage: "raghunath_temple.jpg" },
  { name: "Jodhpur", image: jodhpurImg, famousPlace: "Mehrangarh Fort", famousPlaceImage: "mehrangarh.jpg" },
  { name: "Kanpur", image: kanpurImg, famousPlace: "Allen Forest Zoo", famousPlaceImage: "allen_zoo.jpg" },
  { name: "Kochi", image: kochi, famousPlace: "Fort Kochi", famousPlaceImage: "fort_kochi.jpg" },
  { name: "Kolkata", image: kolkatta, famousPlace: "Victoria Memorial", famousPlaceImage: "victoria_memorial.jpg" },
  { name: "Lucknow", image: lukhnow, famousPlace: "Bara Imambara", famousPlaceImage: "bara_imambara.jpg" },
  { name: "Madurai", image: maduraiImg, famousPlace: "Meenakshi Amman Temple", famousPlaceImage: "meenakshi_temple.jpg" },
  { name: "Mumbai", image: mumbai, famousPlace: "Gateway of India", famousPlaceImage: "gateway_of_india.png" },
  { name: "Nagpur", image: nagpurImg, famousPlace: "Deekshabhoomi", famousPlaceImage: "deekshabhoomi.jpg" },
  { name: "Nashik", image: nashikImg, famousPlace: "Trimbakeshwar Shiva Temple", famousPlaceImage: "trimbakeshwar.jpg" },
  { name: "Navi Mumbai", image: naviMumbaiImg, famousPlace: "Parsik Hill", famousPlaceImage: "parsik_hill.jpg" },
  { name: "Noida", image: noida, famousPlace: "Okhla Bird Sanctuary", famousPlaceImage: "okhla_sanctuary.jpg" },
  { name: "Patna", image: patnaImg, famousPlace: "Golghar", famousPlaceImage: "golghar.jpg" },
  { name: "Pune", image: pune, famousPlace: "Shaniwar Wada", famousPlaceImage: "shaniwar_wada.jpg" },
  { name: "Rae Bareli", image: raebareliImg, famousPlace: "Samaspur Bird Sanctuary", famousPlaceImage: "samaspur.jpg" },
  { name: "Rajahmundry", image: rajahmundryImg, famousPlace: "Godavari Bridge", famousPlaceImage: "godavari_bridge.jpg" },
  { name: "Rajkot", image: rajkotImg, famousPlace: "Watson Museum", famousPlaceImage: "watson_museum.jpg" }
];


// ============================================================================
// 3. AVAILABLE WORKSPACE TYPES
// Used by:
//  - "Looking For" dropdown in the Hero section
//  - "Type Of Space" dropdown in the Lead Enquiry Form
//  - CityPopup modal selection dialog
// ============================================================================
export const spaceOptions = ['Coworking Spaces', 'Virtual Office Space'];

// ============================================================================
// 4. HERO SECTION DATA & COPY
// Used by Homepage.jsx (Left & Right Hero columns)
// Includes:
//  - Brand decorative tagline
//  - Main hero headline with colored highlight spans
//  - Search filter dropdown labels and CTA button
//  - Top workspace & location statistics displayed on the hero background
// ============================================================================
export const heroSectionData = {
  // Hero right column background image
  backgroundImage: heroBackgroundImage,

  // Decorative tagline above main headline
  tagline: "India's flexible workspace network",

  // Main banner headline parts
  headline: {
    prefix: "Choose from",
    highlight1: "10,000+",
    middleText: "spaces to",
    highlight2: "Work"
  },

  // Dropdown filter box labels & search action button
  searchFilters: {
    lookingForLabel: "Looking For",
    selectCityLabel: "Select City",
    searchButtonText: "Search spaces",
    searchButtonArrow: "→"
  },

  // Workspace and location statistics displayed in the right column header
  statistics: [
    {
      id: "workspaces",
      count: "10,000+",
      label: "Work Spaces"
    },
    {
      id: "locations",
      count: "1,000+",
      label: "Locations"
    }
  ]
};

// ============================================================================
// 5. LEAD ENQUIRY FORM CONFIGURATION
// Used by Homepage.jsx (Right column enquiry form)
// Includes:
//  - Input placeholders
//  - Contact forwarding email address
//  - Submit button states
//  - Submission confirmation notification settings
// ============================================================================
export const enquiryFormConfig = {
  // Support email address where enquiries are mailed
  contactEmail: "info@mycoworking.in",

  // Default initial values when form is loaded or reset
  defaultValues: {
    city: "Pune",
    spaceType: "Coworking Spaces",
    countryFallback: "India"
  },

  // Input field placeholders
  placeholders: {
    name: "Enter Your Name",
    email: "Enter Your Email",
    phone: "Phone Number",
    spaceType: "Type Of Space",
    city: "City"
  },

  // Submit button text labels
  buttons: {
    idle: "Submit",
    submitted: "Submitted"
  },

  // Submission confirmation banner config
  feedback: {
    getSuccessText: (name) => `Thanks, ${name || 'there'}! We'll be in touch shortly.`,
    displayDurationMs: 3000,
    fadeTransitionMs: 500
  }
};
