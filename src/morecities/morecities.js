/**
 * ============================================================================
 * MORE CITIES DATA STORE (morecities.js)
 * ============================================================================
 * Holds ALL data for the "More Cities" popup shown from the homepage hero:
 *  - the India-map button logo
 *  - popup copy (title, placeholders, empty state)
 *  - the extra cities (name + locally stored landmark image)
 *
 * Display logic lives in Morecities.jsx.
 *
 * Images: every city thumbnail is a famous visiting place of that city,
 * downloaded once and stored in ./images, named after the city
 * (e.g. ./images/jodhpur.jpg). Nothing is loaded from a CDN at runtime.
 *
 * Cities already shown on the homepage (see src/home/homedata.js) are
 * removed from the list automatically, so they are never duplicated here.
 * ============================================================================
 */
import indiaMapLogo from './india-map-logo.svg';
import { cityNames as homepageCities } from '../home/homedata.js';

export { indiaMapLogo };

// All local city images, keyed by file name (slug), e.g. "./images/jodhpur.jpg"
const cityImageFiles = import.meta.glob('./images/*.{jpg,png}', {
  eager: true,
  import: 'default'
});

const slugify = (text = '') =>
  String(text)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// Looks up the stored image for a city name, e.g. "Navi Mumbai" -> navi-mumbai.jpg
const getCityImage = (cityName) => {
  const slug = slugify(cityName);
  return cityImageFiles[`./images/${slug}.jpg`] || cityImageFiles[`./images/${slug}.png`] || null;
};

// ============================================================================
// POPUP COPY
// ============================================================================
export const moreCitiesContent = {
  buttonLabel: 'More Cities',
  buttonAriaLabel: 'Show all more cities',
  popupTitle: 'Select your city',
  searchPlaceholder: 'Search',
  sectionTitle: 'Search by our more cities',
  emptyText: 'No cities found'
};

// ============================================================================
// CITY NAMES (as supplied). Home page cities are filtered out below.
// ============================================================================
const rawMoreCityNames = [
  'Chandigarh', 'Mohali', 'Panchkula', 'Ludhiana', 'Amritsar', 'Jalandhar',
  'Dehradun', 'Lucknow', 'Kanpur', 'Varanasi', 'Prayagraj', 'Agra', 'Meerut',
  'Ghaziabad', 'Faridabad', 'Greater Noida', 'Jaipur', 'Jodhpur', 'Udaipur',
  'Kota', 'Bhopal', 'Indore', 'Gwalior', 'Jabalpur', 'Raipur', 'Ahmedabad',
  'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Navi Mumbai', 'Thane',
  'Pimpri-Chinchwad', 'Nagpur', 'Nashik', 'Chhatrapati Sambhaji Nagar / Aurangabad',
  'Panaji', 'Margao', 'Kochi', 'Thiruvananthapuram', 'Kozhikode / Calicut',
  'Coimbatore', 'Madurai', 'Tiruchirappalli / Trichy', 'Salem', 'Mysuru / Mysore',
  'Mangaluru / Mangalore', 'Hubballi-Dharwad', 'Visakhapatnam', 'Vijayawada',
  'Warangal', 'Bhubaneswar', 'Patna', 'Ranchi', 'Jamshedpur', 'Guwahati',
  'Siliguri', 'Dharamshala / McLeod Ganj', 'Manali', 'Shimla', 'Kasol / Parvati Valley',
  'Bir Billing', 'Rishikesh', 'Haridwar', 'Nainital', 'Mussoorie',
  'Pondicherry / Puducherry', 'Shillong', 'Gangtok', 'Jammu', 'Srinagar', 'Panipat',
  'Sonipat', 'Karnal', 'Rohtak', 'Hisar', 'Ambala', 'Bhatinda', 'Pathankot',
  'Alwar / Bhiwadi', 'Ajmer', 'Bikaner', 'Bhilwara', 'Mathura', 'Aligarh', 'Bareilly',
  'Moradabad', 'Gorakhpur', 'Jhansi', 'Ayodhya', 'Bhavnagar', 'Jamnagar', 'Anand',
  'Vapi', 'Bharuch', 'Kolhapur', 'Solapur', 'Satara', 'Sangli', 'Ahmednagar',
  'Jalgaon', 'Amravati', 'Nanded', 'Ratnagiri', 'Belagavi / Belgaum',
  'Ballari / Bellary', 'Kalaburagi / Gulbarga'
];

// Spelling variants of homepage cities, so e.g. "Bhubaneswar" matches "Bhubaneshwar"
const normalize = (name) => slugify(name).replace(/sh/g, 's');

const homepageCityKeys = new Set(homepageCities.map((city) => normalize(city.name)));
const seenKeys = new Set();

// Final list: no homepage cities, no repeats, each with its stored image.
export const moreCities = rawMoreCityNames
  .filter((name) => {
    const key = normalize(name);
    if (homepageCityKeys.has(key) || seenKeys.has(key)) return false;
    seenKeys.add(key);
    return true;
  })
  .map((name) => ({ name, image: getCityImage(name) }))
  .sort((a, b) => a.name.localeCompare(b.name));
