/**
 * ============================================================================
 * VIRTUAL OFFICE PAGE DATA STORE (virtual.js)
 * ============================================================================
 * All copy for the city "Virtual Office" page lives here; Virtualoffice.jsx only renders it.
 *
 *  1. Per-city data (business districts, state for GST, image)  -> virtualOfficeCities
 *  2. Shared page copy (hero text and enquiry form)               -> virtualOfficeContent
 *  3. Helpers (slug, lookup, text templates)
 * ============================================================================
 */
import heroImage from '../assets/images/virtual-office-bg.jpg';
import { cityNames } from '../home/homedata.js';
import agartalaImage from '../morecities/images/agartala.jpg';
import agraImage from '../morecities/images/agra.jpg';
import ahmednagarImage from '../morecities/images/ahmednagar.jpg';
import aizawlImage from '../morecities/images/aizawl.jpg';
import ajmerImage from '../morecities/images/ajmer.jpg';
import alwarBhiwadiImage from '../morecities/images/alwar-bhiwadi.jpg';
import ambalaImage from '../morecities/images/ambala.jpg';
import amritsarImage from '../morecities/images/amritsar.jpg';
import anandImage from '../morecities/images/anand.jpg';
import ayodhyaImage from '../morecities/images/ayodhya.jpg';
import bareillyImage from '../morecities/images/bareilly.jpg';
import bharuchImage from '../morecities/images/bharuch.jpg';
import bhavnagarImage from '../morecities/images/bhavnagar.jpg';
import bhilwaraImage from '../morecities/images/bhilwara.png';
import bhopalImage from '../morecities/images/bhopal.jpg';
import birBillingImage from '../morecities/images/bir-billing.jpg';
import aurangabadImage from '../morecities/images/chhatrapati-sambhaji-nagar-aurangabad.jpg';
import dehradunImage from '../morecities/images/dehradun.jpg';
import dharamshalaImage from '../morecities/images/dharamshala-mcleod-ganj.jpg';
import faridabadImage from '../morecities/images/faridabad.jpg';
import gandhinagarImage from '../morecities/images/gandhinagar.jpg';
import gangtokImage from '../morecities/images/gangtok.jpg';
import ghaziabadImage from '../morecities/images/ghaziabad.jpg';
import gorakhpurImage from '../morecities/images/gorakhpur.jpg';
import greaterNoidaImage from '../morecities/images/greater-noida.jpg';
import guwahatiImage from '../morecities/images/guwahati.jpg';
import gwaliorImage from '../morecities/images/gwalior.jpg';
import hubballiDharwadImage from '../morecities/images/hubballi-dharwad.jpg';
import jabalpurImage from '../morecities/images/jabalpur.jpg';
import jalandharImage from '../morecities/images/jalandhar.jpg';
import { agartalaAreas, agartalaSpaces } from '../pages/agartala/agartalaData.js';
import { agraAreas, agraSpaces } from '../pages/agra/agraData.js';
import { ahmedabadAreas, ahmedabadSpaces } from '../pages/ahmedabad/ahmedabadData.js';
import { ahmednagarAreas, ahmednagarSpaces } from '../pages/ahmednagar/ahmednagarData.js';
import { aizawlAreas, aizawlSpaces } from '../pages/aizawl/aizawlData.js';
import { ajmerAreas, ajmerSpaces } from '../pages/ajmer/ajmerData.js';
import { alwarBhiwadiAreas, alwarBhiwadiSpaces } from '../pages/alwar-bhiwadi/alwarBhiwadiData.js';
import { ambalaAreas, ambalaSpaces } from '../pages/ambala/ambalaData.js';
import { amritsarAreas, amritsarSpaces } from '../pages/amritsar/amritsarData.js';
import { anandAreas, anandSpaces } from '../pages/anand/anandData.js';
import { ayodhyaAreas, ayodhyaSpaces } from '../pages/ayodhya/ayodhyaData.js';
import { bareillyAreas, bareillySpaces } from '../pages/bareilly/bareillyData.js';
import { bharuchAreas, bharuchSpaces } from '../pages/bharuch/bharuchData.js';
import { bhavnagarAreas, bhavnagarSpaces } from '../pages/bhavnagar/bhavnagarData.js';
import { bhilwaraAreas, bhilwaraSpaces } from '../pages/bhilwara/bhilwaraData.js';
import { bhopalAreas, bhopalSpaces } from '../pages/bhopal/bhopalData.js';
import { birBillingAreas, birBillingSpaces } from '../pages/bir-billing/birBillingData.js';
import { aurangabadAreas, aurangabadSpaces } from '../pages/aurangabad/aurangabadData.js';
import { dehradunAreas, dehradunSpaces } from '../pages/dehradun/dehradunData.js';
import { dharamshalaMcleodGanjAreas, dharamshalaMcleodGanjSpaces } from '../pages/dharamshala-mcleod-ganj/dharamshalaMcleodGanjData.js';
import { faridabadAreas, faridabadSpaces } from '../pages/faridabad/faridabadData.js';
import { gandhinagarAreas, gandhinagarSpaces } from '../pages/gandhinagar/gandhinagarData.js';
import { gangtokAreas, gangtokSpaces } from '../pages/gangtok/gangtokData.js';
import { ghaziabadAreas, ghaziabadSpaces } from '../pages/ghaziabad/ghaziabadData.js';
import { gorakhpurAreas, gorakhpurSpaces } from '../pages/gorakhpur/gorakhpurData.js';
import { greaterNoidaAreas, greaterNoidaSpaces } from '../pages/greater-noida/greaterNoidaData.js';
import { guwahatiAreas, guwahatiSpaces } from '../pages/guwahati/guwahatiData.js';
import { gwaliorAreas, gwaliorSpaces } from '../pages/gwalior/gwaliorData.js';
import { hubballiDharwadAreas, hubballiDharwadSpaces } from '../pages/hubballi-dharwad/hubballiDharwadData.js';
import { jabalpurAreas, jabalpurSpaces } from '../pages/jabalpur/jabalpurData.js';
import { jalandharAreas, jalandharSpaces } from '../pages/jalandhar/jalandharData.js';
import { bangaloreAreas, bangaloreSpaces } from '../pages/bangalore/bangaloreData.js';
import { bhubaneshwarNeighborhoods, allBhubaneshwarOfficeCards } from '../pages/bhubaneswar/bhubaneswarData.js';
import { chandigarhAreas, chandigarhSpaces } from '../pages/chandigarh/chandigarhData.js';
import { chennaiAreas, chennaiSpaces } from '../pages/chennai/chennaiData.js';
import { coimbatoreAreas, coimbatoreSpaces } from '../pages/coimbatore/coimbatoreData.js';
import { dehliNeighborhoods, allDehliOfficeCards } from '../pages/delhi/delhiData.js';
import { goaAreas, goaSpaces } from '../pages/goa/goaData.js';
import { gurugramAreas, gurugramSpaces } from '../pages/gurugram/gurugramData.js';
import { hyderabadAreas, hyderabadSpaces } from '../pages/hyderabad/hyderabadData.js';
import { indoreNeighborhoods, allIndoreOfficeCards } from '../pages/indore/indoreData.js';
import { jaipurAreas, jaipurSpaces } from '../pages/jaipur/jaipurData.js';
import { kochiAreas, kochiSpaces } from '../pages/kochi/kochiData.js';
import { kolkataAreas, kolkataSpaces } from '../pages/kolkata/kolkataData.js';
import { lucknowAreas, lucknowSpaces } from '../pages/lucknow/lucknowData.js';
import { mumbaiAreas, mumbaiSpaces } from '../pages/mumbai/mumbaiData.js';
import { noidaAreas, noidaSpaces } from '../pages/noida/noidaData.js';
import { puneNeighborhoods, allPuneOfficeCards } from '../pages/pune/puneData.js';

export const virtualOfficeHeroImage = heroImage;

// ============================================================================
// 1. PER-CITY DATA
// ============================================================================
const cityDetails = {
  Gurugram: { state: 'Haryana', districts: ['Golf Course Road', 'Cyber City', 'MG Road', 'Udyog Vihar', 'Sohna Road'] },
  Bhubaneswar: { state: 'Odisha', districts: ['Jaydev Vihar', 'Patia (Infocity)', 'Saheed Nagar', 'Chandrasekharpur', 'Nayapalli'] },
  Bangalore: { state: 'Karnataka', districts: ['MG Road', 'Koramangala', 'Indiranagar', 'Whitefield', 'HSR Layout'] },
  Hyderabad: { state: 'Telangana', districts: ['HITEC City', 'Gachibowli', 'Banjara Hills', 'Madhapur', 'Jubilee Hills'] },
  Chennai: { state: 'Tamil Nadu', districts: ['Guindy', 'Nungambakkam', 'T. Nagar', 'OMR', 'Anna Salai'] },
  Lucknow: { state: 'Uttar Pradesh', districts: ['Hazratganj', 'Gomti Nagar', 'Vibhuti Khand', 'Aliganj', 'Indira Nagar'] },
  Pune: { state: 'Maharashtra', districts: ['Koregaon Park', 'Baner', 'Viman Nagar', 'Hinjewadi', 'Kalyani Nagar'] },
  Noida: { state: 'Uttar Pradesh', districts: ['Sector 62', 'Sector 63', 'Sector 18', 'Sector 132', 'Sector 125'] },
  Delhi: { state: 'Delhi', districts: ['Connaught Place', 'Nehru Place', 'Saket', 'Aerocity', 'Karol Bagh'] },
  Indore: { state: 'Madhya Pradesh', districts: ['Vijay Nagar', 'Palasia', 'AB Road', 'Race Course Road', 'MR 10'] },
  Ahmedabad: { state: 'Gujarat', districts: ['SG Highway', 'Prahlad Nagar', 'CG Road', 'Navrangpura', 'GIFT City'] },
  Jaipur: { state: 'Rajasthan', districts: ['C-Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Mansarovar', 'Tonk Road'] },
  Chandigarh: { state: 'Chandigarh (UT)', districts: ['Sector 17', 'Sector 34', 'Industrial Area Phase 1', 'Rajiv Gandhi IT Park', 'Sector 8'] },
  Kochi: { state: 'Kerala', districts: ['MG Road', 'Kakkanad (Infopark)', 'Edappally', 'Marine Drive', 'Panampilly Nagar'] },
  Kolkata: { state: 'West Bengal', districts: ['Salt Lake Sector V', 'Park Street', 'New Town', 'Camac Street', 'Ballygunge'] },
  Coimbatore: { state: 'Tamil Nadu', districts: ['RS Puram', 'Race Course', 'Peelamedu', 'Avinashi Road', 'Saibaba Colony'] },
  Goa: { state: 'Goa', districts: ['Panaji', 'Porvorim', 'Margao', 'Mapusa', 'Dona Paula'] },
  Mumbai: { state: 'Maharashtra', districts: ['BKC', 'Andheri East', 'Lower Parel', 'Nariman Point', 'Powai'] },
  // More Cities (not on the homepage grid)
  Agartala: { state: 'Tripura', districts: ['Mantribari Road', 'Indranagar'] },
  Agra: { state: 'Uttar Pradesh', districts: ['Sanjay Place', 'Sikandra', 'Civil Lines', 'Tajganj', 'Sadar Bazar'] },
  Ahmednagar: { state: 'Maharashtra', districts: ['Sahakar Nagar'] },
  Aizawl: { state: 'Mizoram', districts: ['Zarkawt', 'Bungkawn Veng'] },
  Ajmer: { state: 'Rajasthan', districts: ['Aravali Vihar', 'Ana Sagar', 'Vaishali Nagar'] },
  'Alwar / Bhiwadi': { state: 'Rajasthan', districts: ['Alwar Bypass Road', 'Daudpur', 'Katori Wala Tibara'] },
  Ambala: { state: 'Haryana', districts: ['Patti Mehar', 'Sadar Bazar', 'Model Town'] },
  Amritsar: { state: 'Punjab', districts: ['Ranjit Avenue', 'Mall Road', 'INA Colony', 'Cooper Road', 'Hall Bazar'] },
  Anand: { state: 'Gujarat', districts: ['Railway Station Road', 'Vallabh Vidyanagar'] },
  Ayodhya: { state: 'Uttar Pradesh', districts: ['Deokali', 'Saketpuri'] },
  Bareilly: { state: 'Uttar Pradesh', districts: ['Ekta Nagar'] },
  Bharuch: { state: 'Gujarat', districts: ['Ankleshwar'] },
  Bhavnagar: { state: 'Gujarat', districts: ['Shastrinagar'] },
  Bhilwara: { state: 'Rajasthan', districts: ['Subhash Nagar'] },
  Bhopal: { state: 'Madhya Pradesh', districts: ['MP Nagar', 'Arera Colony', 'Maharana Pratap Nagar', 'Malviya Nagar', 'Kasturba Nagar'] },
  'Bir Billing': { state: 'Himachal Pradesh', districts: ['Bir Colony'] },
  'Chhatrapati Sambhaji Nagar / Aurangabad': { state: 'Maharashtra', districts: ['Beed Bypass Road', 'Silk Mill Colony', 'CIDCO', 'Prozone', 'Vedant Nagar'] },
  Dehradun: { state: 'Uttarakhand', districts: ['Chukkuwala', 'Sahastradhara Road', 'Rajpur Road', 'Jakhan', 'Dalanwala'] },
  'Dharamshala / McLeod Ganj': { state: 'Himachal Pradesh', districts: ['Sham Nagar', 'Chilgari', 'Upper Bhagsu', 'Rakkar'] },
  Faridabad: { state: 'Haryana', districts: ['Mathura Road', 'Sector 15A', 'Sector 16', 'Sector 20B', 'Sector 87'] },
  Gandhinagar: { state: 'Gujarat', districts: ['Infocity', 'Sector 26'] },
  Gangtok: { state: 'Sikkim', districts: ['Development Area', 'Deorali Bazar'] },
  Ghaziabad: { state: 'Uttar Pradesh', districts: ['Indirapuram', 'RDC', 'Govindpuram', 'Civil Lines', 'Pratap Vihar'] },
  Gorakhpur: { state: 'Uttar Pradesh', districts: ['Miyan Bazar'] },
  'Greater Noida': { state: 'Uttar Pradesh', districts: ['Knowledge Park III', 'Knowledge Park II', 'Alpha I', 'Greater Noida West'] },
  Guwahati: { state: 'Assam', districts: ['Christian Basti', 'Ulubari', 'Bhangagarh', 'GS Road', 'Sree Nagar'] },
  Gwalior: { state: 'Madhya Pradesh', districts: ['Kampoo', 'City Center', 'Tulsi Vihar Colony', 'Panchwati Vastra Nagar'] },
  'Hubballi-Dharwad': { state: 'Karnataka', districts: ['Deshpande Nagar', 'Gokul Road'] },
  Jabalpur: { state: 'Madhya Pradesh', districts: ['Gorakhpur Main Road'] },
  Jalandhar: { state: 'Punjab', districts: ['PUDA Complex', 'Moti Nagar', 'Urban Estate'] }
};

// More Cities that have a virtual office page. Images are stored locally in src/morecities/images.
const moreVirtualCities = [
  { name: 'Agartala', image: agartalaImage },
  { name: 'Agra', image: agraImage },
  { name: 'Ahmednagar', image: ahmednagarImage },
  { name: 'Aizawl', image: aizawlImage },
  { name: 'Ajmer', image: ajmerImage },
  { name: 'Alwar / Bhiwadi', image: alwarBhiwadiImage },
  { name: 'Ambala', image: ambalaImage },
  { name: 'Amritsar', image: amritsarImage },
  { name: 'Anand', image: anandImage },
  { name: 'Ayodhya', image: ayodhyaImage },
  { name: 'Bareilly', image: bareillyImage },
  { name: 'Bharuch', image: bharuchImage },
  { name: 'Bhavnagar', image: bhavnagarImage },
  { name: 'Bhilwara', image: bhilwaraImage },
  { name: 'Bhopal', image: bhopalImage },
  { name: 'Bir Billing', image: birBillingImage },
  { name: 'Chhatrapati Sambhaji Nagar / Aurangabad', image: aurangabadImage },
  { name: 'Dehradun', image: dehradunImage },
  { name: 'Dharamshala / McLeod Ganj', image: dharamshalaImage },
  { name: 'Faridabad', image: faridabadImage },
  { name: 'Gandhinagar', image: gandhinagarImage },
  { name: 'Gangtok', image: gangtokImage },
  { name: 'Ghaziabad', image: ghaziabadImage },
  { name: 'Gorakhpur', image: gorakhpurImage },
  { name: 'Greater Noida', image: greaterNoidaImage },
  { name: 'Guwahati', image: guwahatiImage },
  { name: 'Gwalior', image: gwaliorImage },
  { name: 'Hubballi-Dharwad', image: hubballiDharwadImage },
  { name: 'Jabalpur', image: jabalpurImage },
  { name: 'Jalandhar', image: jalandharImage }
];

// Sub-locations come from each city's own data file: its area list plus the area of every listed space.
// Add an area (or a space in a new area) to the city file and a new card appears automatically.
const citySubLocations = {
  Gurugram: [gurugramAreas, gurugramSpaces],
  Bhubaneswar: [bhubaneshwarNeighborhoods, allBhubaneshwarOfficeCards],
  Bangalore: [bangaloreAreas, bangaloreSpaces],
  Hyderabad: [hyderabadAreas, hyderabadSpaces],
  Chennai: [chennaiAreas, chennaiSpaces],
  Lucknow: [lucknowAreas, lucknowSpaces],
  Pune: [puneNeighborhoods, allPuneOfficeCards],
  Noida: [noidaAreas, noidaSpaces],
  Delhi: [dehliNeighborhoods, allDehliOfficeCards],
  Indore: [indoreNeighborhoods, allIndoreOfficeCards],
  Ahmedabad: [ahmedabadAreas, ahmedabadSpaces],
  Jaipur: [jaipurAreas, jaipurSpaces],
  Chandigarh: [chandigarhAreas, chandigarhSpaces],
  Kochi: [kochiAreas, kochiSpaces],
  Kolkata: [kolkataAreas, kolkataSpaces],
  Coimbatore: [coimbatoreAreas, coimbatoreSpaces],
  Goa: [goaAreas, goaSpaces],
  Mumbai: [mumbaiAreas, mumbaiSpaces],
  Agartala: [agartalaAreas, agartalaSpaces],
  Agra: [agraAreas, agraSpaces],
  Ahmednagar: [ahmednagarAreas, ahmednagarSpaces],
  Aizawl: [aizawlAreas, aizawlSpaces],
  Ajmer: [ajmerAreas, ajmerSpaces],
  'Alwar / Bhiwadi': [alwarBhiwadiAreas, alwarBhiwadiSpaces],
  Ambala: [ambalaAreas, ambalaSpaces],
  Amritsar: [amritsarAreas, amritsarSpaces],
  Anand: [anandAreas, anandSpaces],
  Ayodhya: [ayodhyaAreas, ayodhyaSpaces],
  Bareilly: [bareillyAreas, bareillySpaces],
  Bharuch: [bharuchAreas, bharuchSpaces],
  Bhavnagar: [bhavnagarAreas, bhavnagarSpaces],
  Bhilwara: [bhilwaraAreas, bhilwaraSpaces],
  Bhopal: [bhopalAreas, bhopalSpaces],
  'Bir Billing': [birBillingAreas, birBillingSpaces],
  'Chhatrapati Sambhaji Nagar / Aurangabad': [aurangabadAreas, aurangabadSpaces],
  Dehradun: [dehradunAreas, dehradunSpaces],
  'Dharamshala / McLeod Ganj': [dharamshalaMcleodGanjAreas, dharamshalaMcleodGanjSpaces],
  Faridabad: [faridabadAreas, faridabadSpaces],
  Gandhinagar: [gandhinagarAreas, gandhinagarSpaces],
  Gangtok: [gangtokAreas, gangtokSpaces],
  Ghaziabad: [ghaziabadAreas, ghaziabadSpaces],
  Gorakhpur: [gorakhpurAreas, gorakhpurSpaces],
  'Greater Noida': [greaterNoidaAreas, greaterNoidaSpaces],
  Guwahati: [guwahatiAreas, guwahatiSpaces],
  Gwalior: [gwaliorAreas, gwaliorSpaces],
  'Hubballi-Dharwad': [hubballiDharwadAreas, hubballiDharwadSpaces],
  Jabalpur: [jabalpurAreas, jabalpurSpaces],
  Jalandhar: [jalandharAreas, jalandharSpaces]
};

// Virtual-office-only locations: verified operators that are not coworking spaces, so they
// are not in the city's coworking data. Add only locations confirmed on the operator's or a
// marketplace listing, with the source noted here.
const extraVirtualLocations = {
  // myHQ listing "Virtual Office in Sadar Bazar, Agra" (operator: Connect 2 Business, Maa Pitambara Complex,
  // Dwarika Green Phase 2, Bamroli Road). The listing's pincode is inconsistent, so confirm it before quoting.
  Agra: ['Sadar Bazar'],
  // Hoshangabad Road: named by Cofynd's Bhopal virtual-office FAQ (OneWorx Hoshangabad Road) and offered by Bhopal
  // virtual office vendors. Other Cofynd localities (J K Road, Nehru Nagar, Gulmohar Colony, Bypass Road) could not be
  // confirmed by any operator listing, so they are left out.
  Bhopal: ['Hoshangabad Road'],
  // Doon IT Park, Sahastradhara Road: Regus 44A IT Park, myHQ (Office Spaze, iKSANA CPL-1 Tower) virtual office listings.
  Dehradun: ['Doon IT Park'],
  // myHQ virtual office listings: Space Center, Parsvnath City Mall (Sector 12) and WorkWorm (Sector 32).
  Faridabad: ['Sector 12', 'Sector 32'],
  // Regus Khinvasara Headquarters, Plot 16, MIDC Chikalthana, opp. airport, 431006 (virtual office listed on Regus / Office-Hub).
  'Chhatrapati Sambhaji Nagar / Aurangabad': ['Chikalthana'],
  // Regus Gandhinagar virtual offices: GIFT City (Kavyaratna Narmada, 382050) and Sargasan (Swagat Holiday Mall, 382421).
  Gandhinagar: ['GIFT City', 'Sargasan'],
  // Regus and Spaces virtual office pages for Ghaziabad name Kaushambi and Vaishali (Raj Nagar is already listed as RDC).
  Ghaziabad: ['Kaushambi', 'Vaishali'],
  // Regus Global Business Square, Plot C-10, Wipro Chowk, Delta I, Greater Noida 201310 (business address / virtual office).
  'Greater Noida': ['Delta I'],
  // myHQ virtual office listings: Schange Spaces (Lalmati) and Spanish Square (R G Baruah Road, opposite Assam State Zoo).
  Guwahati: ['Lalmati', 'R G Baruah Road'],
  // Regus Jabalpur (South Avenue Mall, Narmada Road / Gwarighat Road, 482008). Sources differ on the exact address, so confirm before quoting.
  Jabalpur: ['Narmada Road'],
  // Regus PPR Mall, Mithapur Road, Urban Estate Phase II, Jalandhar 144011 (virtual office, listed on Regus, Workin.space and Office-Hub).
  Jalandhar: ['Mithapur Road']
};

const buildSubLocations = (cityName) => {
  const [areas = [], spaces = []] = citySubLocations[cityName] || [];
  const names = [...areas, ...spaces.map((space) => space.area), ...(extraVirtualLocations[cityName] || [])];
  const seen = new Set();
  return names.filter((name) => {
    const key = String(name || '').trim().toLowerCase();
    if (!key || key === 'all' || key === cityName.toLowerCase() || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map((name) => String(name).trim());
};

// "Alwar / Bhiwadi" -> "alwar-bhiwadi"
export const toVirtualSlug = (cityName) =>
  cityName.trim().toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const virtualOfficeCities = [...cityNames, ...moreVirtualCities]
  .filter((city) => cityDetails[city.name])
  .map((city) => ({
    name: city.name,
    slug: toVirtualSlug(city.name),
    image: city.image,
    ...cityDetails[city.name],
    subLocations: buildSubLocations(city.name)
  }));

export const getVirtualOfficeCity = (slug) =>
  virtualOfficeCities.find((city) => city.slug === String(slug || '').toLowerCase());

export const virtualOfficePath = (cityName) => `/virtual-office/${toVirtualSlug(cityName)}`;

// ============================================================================
// 2. SHARED PAGE COPY (templates take the city object)
// ============================================================================
export const virtualOfficeContent = {
  hero: {
    titlePrefix: 'Virtual Office in',
    titleSuffix: 'for GST, MCA & Business Registration',
    subtitle: (city) =>
      `A verified ${city.name} business address with rent agreement, NOC and utility bill, accepted for GST and company registration in ${city.state}.`,
    points: ['Govt-compliant address', 'GST & MCA accepted', '10,000+ businesses served', 'Setup in 24–72 hours']
  },

  locations: {
    title: (city) => `Virtual office locations in ${city.name}`,
    features: ['Business Address', 'GST Registration', 'Company Registration'],
    priceText: 'Price on request',
    button: 'Get Address Details'
  },

  benefits: {
    title: (city) => `Benefits of Virtual Office in ${city.name}`,
    button: 'Get Your Virtual Office',
    items: [
      { icon: '🏢', tint: 'bg-sky-50', title: 'Prime Business Address', text: (city) => `Use a prestigious ${city.name} address to build credibility with clients and partners.` },
      { icon: '📄', tint: 'bg-orange-50', title: 'GST & MCA Compliance', text: () => 'Addresses prepared for GST and company registration, with the documents authorities ask for.' },
      { icon: '📬', tint: 'bg-rose-50', title: 'Mail & Courier Handling', text: () => 'Never miss important documents or notices. We receive and hold your correspondence.' },
      { icon: '⚡', tint: 'bg-amber-50', title: 'Fast & Hassle-Free Setup', text: () => 'Documentation support with minimal effort. Get started in 24-72 hours.' },
      { icon: '🏦', tint: 'bg-emerald-50', title: 'Business Bank Account', text: () => 'Rent agreement, NOC and utility bill included to support current-account KYC.' }
    ]
  },

  cities: {
    title: 'Explore Top Cities For Virtual Offices',
    cardLabel: 'Virtual Office',
    button: 'Get Quote for virtual office across India'
  },

  form: {
    title: (city) => `Get your ${city.name} address`,
    subtitle: 'Get virtual office options and pricing that fit your business',
    placeholders: { name: 'Your Name', email: 'Email Address', phone: 'Mobile Number' },
    primaryButton: 'Get Quote',
    secondaryButton: 'Buy Now',
    expertLabel: 'Speak To our space expert',
    phone: '+91 9028760011'
  }
};
