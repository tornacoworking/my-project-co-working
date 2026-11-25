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
import { toVirtualSlug, virtualOfficePath } from './virtualPaths.js';
import { cityNames } from '../home/homedata.js';
import agartalaImage from '../morecities/images/agartala.jpg';
import agraImage from '../morecities/images/agra.jpg';
import ahmednagarImage from '../morecities/images/ahmednagar.jpg';
import aizawlImage from '../morecities/images/aizawl.jpg';
import ajmerImage from '../morecities/images/ajmer.jpg';
import alwarBhiwadiImage from '../morecities/images/alwar-bhiwadi.jpg';
import ambalaImage from '../morecities/images/ambala.jpg';
import amravatiImage from '../morecities/images/amravati.jpg';
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
import jalgaonImage from '../morecities/images/jalgaon.jpg';
import jammuImage from '../morecities/images/jammu.jpg';
import jamnagarImage from '../morecities/images/jamnagar.jpg';
import jamshedpurImage from '../morecities/images/jamshedpur.jpg';
import jhansiImage from '../morecities/images/jhansi.jpg';
import jodhpurImage from '../morecities/images/jodhpur.jpg';
import kalaburagiGulbargaImage from '../morecities/images/kalaburagi-gulbarga.jpg';
import kanpurImage from '../morecities/images/kanpur.jpg';
import karnalImage from '../morecities/images/karnal.jpg';
import kasolParvatiValleyImage from '../morecities/images/kasol-parvati-valley.jpg';
import kolhapurImage from '../morecities/images/kolhapur.jpg';
import kotaImage from '../morecities/images/kota.jpg';
import kozhikodeCalicutImage from '../morecities/images/kozhikode-calicut.jpg';
import ludhianaImage from '../morecities/images/ludhiana.jpg';
import maduraiImage from '../morecities/images/madurai.jpg';
import manaliImage from '../morecities/images/manali.jpg';
import mangaluruMangaloreImage from '../morecities/images/mangaluru-mangalore.jpg';
import margaoImage from '../morecities/images/margao.jpg';
import mathuraImage from '../morecities/images/mathura.jpg';
import meerutImage from '../morecities/images/meerut.jpg';
import mohaliImage from '../morecities/images/mohali.png';
import moradabadImage from '../morecities/images/moradabad.jpg';
import mussoorieImage from '../morecities/images/mussoorie.jpg';
import mysuruMysoreImage from '../morecities/images/mysuru-mysore.jpg';
import nagpurImage from '../morecities/images/nagpur.jpg';
import nainitalImage from '../morecities/images/nainital.jpg';
import nandedImage from '../morecities/images/nanded.jpg';
import nashikImage from '../morecities/images/nashik.jpg';
import naviMumbaiImage from '../morecities/images/navi-mumbai.jpg';
import panajiImage from '../morecities/images/panaji.jpg';
import panchkulaImage from '../morecities/images/panchkula.jpg';
import panipatImage from '../morecities/images/panipat.jpg';
import pathankotImage from '../morecities/images/pathankot.jpg';
import warangalImage from '../morecities/images/warangal.jpg';
import visakhapatnamImage from '../morecities/images/visakhapatnam.jpg';
import vijayawadaImage from '../morecities/images/vijayawada.jpg';
import varanasiImage from '../morecities/images/varanasi.jpg';
import vapiImage from '../morecities/images/vapi.jpg';
import vadodaraImage from '../morecities/images/vadodara.jpg';
import udaipurImage from '../morecities/images/udaipur.jpg';
import tiruchirappalliImage from '../morecities/images/tiruchirappalli-trichy.jpg';
import thaneImage from '../morecities/images/thane.jpg';
import suratImage from '../morecities/images/surat.jpg';
import patnaImage from '../morecities/images/patna.jpg';
import pimpriChinchwadImage from '../morecities/images/pimpri-chinchwad.jpg';
import pondicherryPuducherryImage from '../morecities/images/pondicherry-puducherry.jpg';
import prayagrajImage from '../morecities/images/prayagraj.jpg';
import raipurImage from '../morecities/images/raipur.jpg';
import rajkotImage from '../morecities/images/rajkot.jpg';
import { agartalaAreas, agartalaSpaces } from '../pages/agartala/agartalaData.js';
import { agraAreas, agraSpaces } from '../pages/agra/agraData.js';
import { ahmedabadAreas, ahmedabadSpaces } from '../pages/ahmedabad/ahmedabadData.js';
import { ahmednagarAreas, ahmednagarSpaces } from '../pages/ahmednagar/ahmednagarData.js';
import { aizawlAreas, aizawlSpaces } from '../pages/aizawl/aizawlData.js';
import { ajmerAreas, ajmerSpaces } from '../pages/ajmer/ajmerData.js';
import { alwarBhiwadiAreas, alwarBhiwadiSpaces } from '../pages/alwar-bhiwadi/alwarBhiwadiData.js';
import { ambalaAreas, ambalaSpaces } from '../pages/ambala/ambalaData.js';
import { amaravatiAreas, allAmaravatiOfficeCards } from '../pages/amravati/amaravatiData.js';
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
import { jammuAreas, allJammuOfficeCards } from '../pages/jammu/jammuData.js';
import { jamnagarAreas, allJamnagarOfficeCards } from '../pages/jamnagar/jamnagarData.js';
import { jamshedpurAreas, allJamshedpurOfficeCards } from '../pages/jamshedpur/jamshedpurData.js';
import { jodhpurAreas, allJodhpurOfficeCards } from '../pages/jodhpur/jodhpurData.js';
import { kanpurAreas, allKanpurOfficeCards } from '../pages/kanpur/kanpurData.js';
import { karnalAreas, allKarnalOfficeCards } from '../pages/karnal/karnalData.js';
import { kolhapurAreas, allKolhapurOfficeCards } from '../pages/kolhapur/kolhapurData.js';
import { kozhikodeCalicutAreas, allKozhikodeCalicutOfficeCards } from '../pages/kozhikode-calicut/kozhikodeCalicutData.js';
import { ludhianaAreas, allLudhianaOfficeCards } from '../pages/ludhiana/ludhianaData.js';
import { maduraiAreas, allMaduraiOfficeCards } from '../pages/madurai/maduraiData.js';
import { mangaluruMangaloreAreas, allMangaluruMangaloreOfficeCards } from '../pages/mangaluru-mangalore/mangaluruMangaloreData.js';
import { margaoAreas, allMargaoOfficeCards } from '../pages/margao/margaoData.js';
import { mathuraAreas, allMathuraOfficeCards } from '../pages/mathura/mathuraData.js';
import { meerutAreas, allMeerutOfficeCards } from '../pages/meerut/meerutData.js';
import { mohaliAreas, allMohaliOfficeCards } from '../pages/mohali/mohaliData.js';
import { mysuruMysoreAreas, allMysuruMysoreOfficeCards } from '../pages/mysuru-mysore/mysuruMysoreData.js';
import { nagpurAreas, allNagpurOfficeCards } from '../pages/nagpur/nagpurData.js';
import { nashikAreas, allNashikOfficeCards } from '../pages/nashik/nashikData.js';
import { naviMumbaiAreas, allNaviMumbaiOfficeCards } from '../pages/navi-mumbai/naviMumbaiData.js';
import { panajiAreas, allPanajiOfficeCards } from '../pages/panaji/panajiData.js';
import { panchkulaAreas, allPanchkulaOfficeCards } from '../pages/panchkula/panchkulaData.js';
import { patnaAreas, allPatnaOfficeCards } from '../pages/patna/patnaData.js';
import { pondicherryPuducherryAreas, allPondicherryPuducherryOfficeCards } from '../pages/pondicherry-puducherry/pondicherryPuducherryData.js';
import { prayagrajAreas, allPrayagrajOfficeCards } from '../pages/prayagraj/prayagrajData.js';
import { warangalAreas, warangalSpaces } from '../pages/warangal/warangalData.js';
import { visakhapatnamAreas, visakhapatnamSpaces } from '../pages/visakhapatnam/visakhapatnamData.js';
import { vijayawadaAreas, vijayawadaSpaces } from '../pages/vijayawada/vijayawadaData.js';
import { varanasiAreas, varanasiSpaces } from '../pages/varanasi/varanasiData.js';
import { vapiAreas, vapiSpaces } from '../pages/vapi/vapiData.js';
import { vadodaraAreas, vadodaraSpaces } from '../pages/vadodara/vadodaraData.js';
import { udaipurAreas, udaipurSpaces } from '../pages/udaipur/udaipurData.js';
import { tiruchirappalliAreas, tiruchirappalliSpaces } from '../pages/tiruchirappalli/tiruchirappalliData.js';
import { thaneAreas, thaneSpaces } from '../pages/thane/thaneData.js';
import { suratAreas, suratSpaces } from '../pages/surat/suratData.js';
import { raipurAreas, raipurSpaces } from '../pages/raipur/raipurData.js';
import { rajkotAreas, rajkotSpaces } from '../pages/rajkot/rajkotData.js';
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
  // The project's Amravati coworking page covers the Amaravati / Vijayawada region, so this page follows it.
  Amravati: { state: 'Andhra Pradesh', districts: ['Benz Circle', 'Labbipet', 'Krishna Nagar', 'Panduranga Nagar', 'Guru Nanak Colony'] },
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
  Jalandhar: { state: 'Punjab', districts: ['PUDA Complex', 'Moti Nagar', 'Urban Estate'] },
  Jalgaon: { state: 'Maharashtra', districts: ['Navi Peth', 'Jilha Peth', 'Station Road', 'Ring Road', 'MIDC Area'] },
  Jammu: { state: 'Jammu and Kashmir', districts: ['Residency Road', 'Trikuta Nagar', 'Ajit Nagar'] },
  Jamnagar: { state: 'Gujarat', districts: ['Park Colony'] },
  Jamshedpur: { state: 'Jharkhand', districts: ['Bistupur'] },
  Jhansi: { state: 'Uttar Pradesh', districts: ['Sadar Bazar', 'Civil Lines', 'Sipri Bazar', 'Elite Chauraha', 'Gwalior Road'] },
  Jodhpur: { state: 'Rajasthan', districts: ['Cyber Park', 'Sardarpura', 'Shastri Nagar', 'HI Area Phase II', 'Sangaria Industrial Area'] },
  'Kalaburagi / Gulbarga': { state: 'Karnataka', districts: ['Super Market', 'Station Road', 'Jewargi Road', 'Sedam Road', 'Aland Road'] },
  Kanpur: { state: 'Uttar Pradesh', districts: ['Civil Lines', 'Shyam Nagar', 'Arya Nagar', 'Mall Road', 'Tilak nagar'] },
  Karnal: { state: 'Haryana', districts: ['Sector 7'] },
  'Kasol / Parvati Valley': { state: 'Himachal Pradesh', districts: ['Kasol', 'Manikaran', 'Tosh', 'Kalga', 'Jari'] },
  Kolhapur: { state: 'Maharashtra', districts: ['Poorvarang'] },
  Kota: { state: 'Rajasthan', districts: ['Talwandi', 'Indra Vihar', 'Dadabari', 'Mahaveer Nagar', 'Gumanpura'] },
  'Kozhikode / Calicut': { state: 'Kerala', districts: ['West Hill', 'Polpaya Mana', 'Vandipetta', 'Kuttichira', 'Pushpa Junction'] },
  Ludhiana: { state: 'Punjab', districts: ['Gurdev Nagar', 'Mall Enclave', 'F-Block SBS Nagar', 'Bhai Randhir Singh Nagar'] },
  Madurai: { state: 'Tamil Nadu', districts: ['Anna Nagar', 'P.P Chavadi', 'Villapuram Colony', 'Chokkalinga Nagar', 'Managiri'] },
  Manali: { state: 'Himachal Pradesh', districts: ['Mall Road', 'Old Manali', 'Vashisht', 'Aleo', 'Model Town'] },
  'Mangaluru / Mangalore': { state: 'Karnataka', districts: ['Inland Ornate', 'Yeyyadi', 'Bejai', 'Mallikatte', 'Ballalbagh'] },
  Margao: { state: 'Goa', districts: ['Gogol'] },
  Mathura: { state: 'Uttar Pradesh', districts: ['Masani Road'] },
  Meerut: { state: 'Uttar Pradesh', districts: ['Roorkee Road', 'Garh Road', 'Mangal Pandey Nagar', 'Shastri Nagar', 'Ajanta Colony'] },
  Mohali: { state: 'Punjab', districts: ['Sector 75', 'Mohali', 'JLPL Industrial Area', 'Industrial Area', 'Sector 74'] },
  Moradabad: { state: 'Uttar Pradesh', districts: ['Civil Lines', 'Ram Ganga Vihar', 'Kanth Road', 'Delhi Road', 'Budh Bazar'] },
  Mussoorie: { state: 'Uttarakhand', districts: ['Mall Road', 'Library Chowk', 'Landour', 'Kulri Bazaar', 'Picture Palace'] },
  'Mysuru / Mysore': { state: 'Karnataka', districts: ['Saraswathipuram', 'Indira nagar', 'Indiranagar Extension', 'Jayalakshmipuram', 'Vani Vilas Mohalla'] },
  Nagpur: { state: 'Maharashtra', districts: ['Sitabuldi', 'Ganeshpeth Colony', 'Tilak Nagar', 'Manish Nagar', 'Hanuman Nagar'] },
  Nainital: { state: 'Uttarakhand', districts: ['Mall Road', 'Mallital', 'Tallital', 'Sukhatal', 'Bhowali Road'] },
  Nanded: { state: 'Maharashtra', districts: ['Vazirabad', 'Shivaji Nagar', 'Taroda', 'Workshop Corner', 'CIDCO'] },
  Nashik: { state: 'Maharashtra', districts: ['Anandwan Colony', 'Bhabha Nagar', 'Tilakwadi', 'Tidke Colony', 'Shanti Nagar'] },
  'Navi Mumbai': { state: 'Maharashtra', districts: ['MIDC Industrial Area', 'Nerul', 'CBD Belapur', 'MIDC', 'Sector 14'] },
  Panaji: { state: 'Goa', districts: ['Panjim', 'Panaji CBD (Central Business District)', 'Patto Centre', 'Patto', 'MG Road'] },
  Panchkula: { state: 'Haryana', districts: ['Sector 20', 'Sector 8', 'Sector 5', 'Sector 22', 'Dhakoli'] },
  Panipat: { state: 'Haryana', districts: ['GT Road', 'Model Town', 'Samalkha'] },
  Pathankot: { state: 'Punjab', districts: ['Dhangu Road', 'Mission Road', 'Gandhi Chowk'] },
  Patna: { state: 'Bihar', districts: ['Kankarbagh', 'Patliputra Colony', 'Boring Road', 'Rukanpura'] },
  'Pimpri-Chinchwad': { state: 'Maharashtra', districts: ['Pimpri', 'Chinchwad', 'Akurdi', 'Nigdi'] },
  'Pondicherry / Puducherry': { state: 'Puducherry', districts: ['MG Road Area', 'Colas Nagar', 'Mudaliarpet', 'Aurobindo Street', 'Ellaipillaichavady'] },
  Prayagraj: { state: 'Uttar Pradesh', districts: ['Civil Lines'] },
  Warangal: { state: 'Telangana', districts: ['Naim Nagar', 'Pochamma Maidan', 'Nakkalagutta', 'KU Cross Road'] },
  Visakhapatnam: { state: 'Andhra Pradesh', districts: ['Dwaraka Nagar', 'Siripuram', 'Ram Nagar', 'Asilmetta', 'Balaji Nagar'] },
  Vijayawada: { state: 'Andhra Pradesh', districts: ['Benz Circle', 'Moghalrajpuram', 'Guru Nanak Colony', 'Brindavan Colony', 'Kanuru'] },
  Varanasi: { state: 'Uttar Pradesh', districts: ['Sigra', 'Cantonment', 'Lahartara', 'BHU'] },
  Vapi: { state: 'Gujarat', districts: ['GIDC'] },
  Vadodara: { state: 'Gujarat', districts: ['Alkapuri', 'Vadiwadi', 'Genda Circle', 'Subhanpura', 'Karelibaug'] },
  Udaipur: { state: 'Rajasthan', districts: ['Hiran Magri', 'Shobhagpura', 'Bhupalpura', 'University Road', 'Fatehpura'] },
  'Tiruchirappalli / Trichy': { state: 'Tamil Nadu', districts: ['Salai Road', 'West Thillai Nagar'] },
  Thane: { state: 'Maharashtra', districts: ['Wagle Estate', 'Hiranandani Estate', 'Thane West', 'Cadbury Junction', 'Chirak Nagar'] },
  Surat: { state: 'Gujarat', districts: ['Vesu', 'Adajan', 'Nanpura', 'Pal', 'Athwa'] },
  Raipur: { state: 'Chhattisgarh', districts: ['Shankar Nagar', 'Bhatagaon', 'Telibandha', 'Civil Lines', 'Kamal Vihar'] },
  Rajkot: { state: 'Gujarat', districts: ['Sardar Nagar', 'Raiya Road', 'Kalawad Road', 'Mavdi', 'Nana Mava'] }
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
  { name: 'Amravati', image: amravatiImage },
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
  { name: 'Jalandhar', image: jalandharImage },
  { name: 'Jalgaon', image: jalgaonImage },
  { name: 'Jammu', image: jammuImage },
  { name: 'Jamnagar', image: jamnagarImage },
  { name: 'Jamshedpur', image: jamshedpurImage },
  { name: 'Jhansi', image: jhansiImage },
  { name: 'Jodhpur', image: jodhpurImage },
  { name: 'Kalaburagi / Gulbarga', image: kalaburagiGulbargaImage },
  { name: 'Kanpur', image: kanpurImage },
  { name: 'Karnal', image: karnalImage },
  { name: 'Kasol / Parvati Valley', image: kasolParvatiValleyImage },
  { name: 'Kolhapur', image: kolhapurImage },
  { name: 'Kota', image: kotaImage },
  { name: 'Kozhikode / Calicut', image: kozhikodeCalicutImage },
  { name: 'Ludhiana', image: ludhianaImage },
  { name: 'Madurai', image: maduraiImage },
  { name: 'Manali', image: manaliImage },
  { name: 'Mangaluru / Mangalore', image: mangaluruMangaloreImage },
  { name: 'Margao', image: margaoImage },
  { name: 'Mathura', image: mathuraImage },
  { name: 'Meerut', image: meerutImage },
  { name: 'Mohali', image: mohaliImage },
  { name: 'Moradabad', image: moradabadImage },
  { name: 'Mussoorie', image: mussoorieImage },
  { name: 'Mysuru / Mysore', image: mysuruMysoreImage },
  { name: 'Nagpur', image: nagpurImage },
  { name: 'Nainital', image: nainitalImage },
  { name: 'Nanded', image: nandedImage },
  { name: 'Nashik', image: nashikImage },
  { name: 'Navi Mumbai', image: naviMumbaiImage },
  { name: 'Panaji', image: panajiImage },
  { name: 'Panchkula', image: panchkulaImage },
  { name: 'Panipat', image: panipatImage },
  { name: 'Pathankot', image: pathankotImage },
  { name: 'Patna', image: patnaImage },
  { name: 'Pimpri-Chinchwad', image: pimpriChinchwadImage },
  { name: 'Pondicherry / Puducherry', image: pondicherryPuducherryImage },
  { name: 'Prayagraj', image: prayagrajImage },
  { name: 'Warangal', image: warangalImage },
  { name: 'Visakhapatnam', image: visakhapatnamImage },
  { name: 'Vijayawada', image: vijayawadaImage },
  { name: 'Varanasi', image: varanasiImage },
  { name: 'Vapi', image: vapiImage },
  { name: 'Vadodara', image: vadodaraImage },
  { name: 'Udaipur', image: udaipurImage },
  { name: 'Tiruchirappalli / Trichy', image: tiruchirappalliImage },
  { name: 'Thane', image: thaneImage },
  { name: 'Surat', image: suratImage },
  { name: 'Raipur', image: raipurImage },
  { name: 'Rajkot', image: rajkotImage }
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
  Amravati: [amaravatiAreas, allAmaravatiOfficeCards],
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
  Jalandhar: [jalandharAreas, jalandharSpaces],
  Jammu: [jammuAreas, allJammuOfficeCards],
  Jamnagar: [jamnagarAreas, allJamnagarOfficeCards],
  Jamshedpur: [jamshedpurAreas, allJamshedpurOfficeCards],
  Jodhpur: [jodhpurAreas, allJodhpurOfficeCards],
  Kanpur: [kanpurAreas, allKanpurOfficeCards],
  Karnal: [karnalAreas, allKarnalOfficeCards],
  Kolhapur: [kolhapurAreas, allKolhapurOfficeCards],
  'Kozhikode / Calicut': [kozhikodeCalicutAreas, allKozhikodeCalicutOfficeCards],
  Ludhiana: [ludhianaAreas, allLudhianaOfficeCards],
  Madurai: [maduraiAreas, allMaduraiOfficeCards],
  'Mangaluru / Mangalore': [mangaluruMangaloreAreas, allMangaluruMangaloreOfficeCards],
  Margao: [margaoAreas, allMargaoOfficeCards],
  Mathura: [mathuraAreas, allMathuraOfficeCards],
  Meerut: [meerutAreas, allMeerutOfficeCards],
  Mohali: [mohaliAreas, allMohaliOfficeCards],
  'Mysuru / Mysore': [mysuruMysoreAreas, allMysuruMysoreOfficeCards],
  Nagpur: [nagpurAreas, allNagpurOfficeCards],
  Nashik: [nashikAreas, allNashikOfficeCards],
  'Navi Mumbai': [naviMumbaiAreas, allNaviMumbaiOfficeCards],
  Panaji: [panajiAreas, allPanajiOfficeCards],
  Panchkula: [panchkulaAreas, allPanchkulaOfficeCards],
  Patna: [patnaAreas, allPatnaOfficeCards],
  'Pondicherry / Puducherry': [pondicherryPuducherryAreas, allPondicherryPuducherryOfficeCards],
  Prayagraj: [prayagrajAreas, allPrayagrajOfficeCards],
  Warangal: [warangalAreas, warangalSpaces],
  Visakhapatnam: [visakhapatnamAreas, visakhapatnamSpaces],
  Vijayawada: [vijayawadaAreas, vijayawadaSpaces],
  Varanasi: [varanasiAreas, varanasiSpaces],
  Vapi: [vapiAreas, vapiSpaces],
  Vadodara: [vadodaraAreas, vadodaraSpaces],
  Udaipur: [udaipurAreas, udaipurSpaces],
  'Tiruchirappalli / Trichy': [tiruchirappalliAreas, tiruchirappalliSpaces],
  Thane: [thaneAreas, thaneSpaces],
  Surat: [suratAreas, suratSpaces],
  Raipur: [raipurAreas, raipurSpaces],
  Rajkot: [rajkotAreas, rajkotSpaces]
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

// Fillers for cities whose coworking data gives fewer than 5 locations, so every page lists at least 5.
// These are well-known commercial / business localities of the city. Unlike extraVirtualLocations they are NOT
// confirmed virtual-office addresses: no operator listing was found for them, so confirm the address before quoting.
// They were added from general knowledge of each city (Google Maps could not be queried), not from a listing.
// Each list is only as long as needed to reach 5; names already present are removed by the de-duplication below.
const supplementaryLocalities = {
  Agartala: ['Battala', 'Krishnanagar', 'Melarmath'],
  Ahmednagar: ['Savedi', 'Station Road', 'Tilak Road', 'Kedgaon'],
  Aizawl: ['Chanmari', 'Dawrpui', 'Khatla'],
  Ajmer: ['Civil Lines', 'Jaipur Road'],
  'Alwar / Bhiwadi': ['Hope Circus', 'Chopanki'],
  Ambala: ['Ambala Cantt', 'Baldev Nagar'],
  Anand: ['Amul Dairy Road', 'Karamsad', 'Mogri'],
  Ayodhya: ['Civil Lines', 'Rakabganj', 'Naya Ghat'],
  Bareilly: ['Civil Lines', 'Pilibhit Bypass Road', 'Rajendra Nagar', 'Subhash Nagar'],
  Bharuch: ['Zadeshwar', 'Station Road', 'Dahej', 'Panchbatti'],
  Bhavnagar: ['Kaliyabid', 'Ghogha Circle', 'Waghawadi Road', 'Sardarnagar'],
  Bhilwara: ['Pur Road', 'Azad Nagar', 'Shastri Nagar', 'R.C. Vyas Colony'],
  'Bir Billing': ['Billing', 'Chaugan', 'Tibetan Colony', 'Rajgundha'],
  'Dharamshala / McLeod Ganj': ['Dharamkot'],
  Gandhinagar: ['Kudasan'],
  Gangtok: ['MG Marg', 'Tadong', 'Sichey'],
  Gorakhpur: ['Golghar', 'Civil Lines', 'Taramandal', 'Medical College Road'],
  Gwalior: ['Thatipur'],
  'Hubballi-Dharwad': ['Vidyanagar', 'Keshwapur', 'Navanagar'],
  Jabalpur: ['Napier Town', 'Civil Lines', 'Wright Town'],
  Jalandhar: ['Model Town'],
  Jammu: ['Gandhi Nagar', 'Channi Himmat'],
  Jamnagar: ['Pandit Nehru Marg', 'Ranjit Road', 'Digjam Circle', 'Patel Colony'],
  Jamshedpur: ['Sakchi', 'Sonari', 'Kadma', 'Adityapur'],
  Karnal: ['Model Town', 'Sector 13', 'Sector 12', 'Sector 9'],
  Kolhapur: ['Rajarampuri', 'Tarabai Park', 'Shahupuri', 'Shiroli MIDC'],
  Ludhiana: ['Sarabha Nagar'],
  Margao: ['Fatorda', 'Borda', 'Pajifond', 'Aquem'],
  Mathura: ['Krishna Nagar', 'Civil Lines', 'Holi Gate', 'Bhuteshwar'],
  'Pimpri-Chinchwad': ['Akurdi', 'Nigdi', 'Bhosari', 'Chinchwad Station', 'Moshi'],
  Prayagraj: ['Allenganj', 'Naini', 'Katra', 'Lukerganj'],
  'Tiruchirappalli / Trichy': ['Cantonment', 'Srirangam', 'K.K. Nagar'],
  Warangal: ['Hanamkonda'],
  Varanasi: ['Lanka'],
  Vapi: ['Chala', 'Charvada', 'Char Rasta', 'Silvassa Road']
};

const MIN_LOCATIONS = 5;

// Entries in a city's coworking data that name a different city, so they must not become cards here.
const hiddenLocations = {
  'Pimpri-Chinchwad': ['Pune']
};

const buildSubLocations = (cityName) => {
  // Cities without a coworking data file fall back to their listed main areas.
  const [areas = [], spaces = []] = citySubLocations[cityName] || [cityDetails[cityName]?.districts || [], []];
  const names = [...areas, ...spaces.map((space) => space.area), ...(extraVirtualLocations[cityName] || [])];
  const seen = new Set((hiddenLocations[cityName] || []).map((name) => name.toLowerCase()));
  const unique = (list) => list.filter((name) => {
    const key = String(name || '').trim().toLowerCase();
    if (!key || key === 'all' || key === cityName.toLowerCase() || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map((name) => String(name).trim());

  const result = unique(names);
  // Only cities below the minimum use the fillers, and only as many as are needed.
  if (result.length < MIN_LOCATIONS) {
    result.push(...unique(supplementaryLocalities[cityName] || []).slice(0, MIN_LOCATIONS - result.length));
  }
  return result;
};

// Slug helpers live in virtualPaths.js so the homepage and navbar can use them without bundling this file.
export { toVirtualSlug, virtualOfficePath };

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
