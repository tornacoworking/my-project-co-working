import { useEffect } from 'react';
import { Routes, Route, Navigate, useParams, useLocation, matchPath } from 'react-router-dom';
import Homepage from './home/Homepage';
import Navbar from './navbar/Navbar';
import { getDehliOfficeCardById } from './pages/delhi/delhiData';
import { getPuneOfficeCardById } from './pages/pune/puneData';
import { getBangaloreOfficeCardById } from './pages/bangalore/bangaloreData';
import { getGurugramOfficeCardById } from './pages/gurugram/gurugramData';
import { getIndoreOfficeCardById } from './pages/indore/indoreData';
import { getBhubaneshwarOfficeCardById } from './pages/bhubaneswar/bhubaneswarData';
import WhatsAppButton from './components/WhatsAppButton';
import VirtualOffice from './virtual/Virtualoffice';
import { getVirtualOfficeCity } from './virtual/virtual';

import AhmedabadPage from './pages/ahmedabad/Ahmedabad';
import BangalorePage from './pages/bangalore/Bangalore';
import BangaloreOfficeDetail from './pages/bangalore/BangaloreOfficeDetail';
import BhubaneswarPage from './pages/bhubaneswar/Bhubaneswar';
import ChandigarhPage from './pages/chandigarh/Chandigarh';
import ChandigarhOfficeDetail from './pages/chandigarh/ChandigarhOfficeDetail';
import { getChandigarhOfficeCardById } from './pages/chandigarh/chandigarhData';
import ChennaiPage from './pages/chennai/Chennai';
import ChennaiOfficeDetail from './pages/chennai/ChennaiOfficeDetail';
import { getChennaiOfficeCardById } from './pages/chennai/chennaiData';
import CoimbatorePage from './pages/coimbatore/Coimbatore';
import CoimbatoreOfficeDetail from './pages/coimbatore/CoimbatoreOfficeDetail';
import { getCoimbatoreOfficeCardById } from './pages/coimbatore/coimbatoreData';
import DelhiPage from './pages/delhi/Delhi';
import DelhiOfficeDetails from './pages/delhi/DelhiOfficeDetails';
import GoaPage from './pages/goa/Goa';
import GoaOfficeDetail from './pages/goa/GoaOfficeDetail';
import { getGoaOfficeCardById } from './pages/goa/goaData';
import GurugramPage from './pages/gurugram/Gurugram';
import GurugramOfficeDetail from './pages/gurugram/GurugramOfficialDetail';
import HyderabadPage from './pages/hyderabad/Hyderabad';
import HyderabadOfficeDetail from './pages/hyderabad/HyderabadOfficeDetail';
import { getHyderabadOfficeCardById } from './pages/hyderabad/hyderabadData';
import IndorePage from './pages/indore/Indore';
import IndoreOfficeDetails from './pages/indore/Indoreofficedetails';
import JaipurPage from './pages/jaipur/Jaipur';
import JaipurOfficeDetail from './pages/jaipur/JaipurOfficeDetail';
import { getJaipurOfficeCardById } from './pages/jaipur/jaipurData';
import KochiPage from './pages/kochi/Kochi';
import KochiOfficeDetail from './pages/kochi/KochiOfficeDetail';
import { getKochiOfficeCardById } from './pages/kochi/kochiData';
import KolkataPage from './pages/kolkata/Kolkata';
import LucknowPage from './pages/lucknow/Lucknow';
import LucknowOfficeDetail from './pages/lucknow/LucknowOfficeDetail';
import { getLucknowOfficeCardById } from './pages/lucknow/lucknowData';
import MumbaiPage from './pages/mumbai/Mumbai';
import MumbaiOfficeDetail from './pages/mumbai/MumbaiOfficeDetail';
import { getMumbaiOfficeCardById } from './pages/mumbai/mumbaiData';
import NoidaPage from './pages/noida/Noida';
import NoidaOfficeDetail from './pages/noida/NoidaOfficeDetail';
import { getNoidaOfficeCardById } from './pages/noida/noidaData';
import PunePage from './pages/pune/Pune';
import PuneOfficeDetail from './pages/pune/PuneOfficeDetail';
import BhubaneshwarOfficeDetail from './pages/bhubaneswar/BhubaneshwarOfficeDetail';
import AhmedabadOfficeDetails from './pages/ahmedabad/AhmedabadOfficeDetails';
import { getAhmedabadOfficeCardById } from './pages/ahmedabad/ahmedabadData';
import AgraPage from './pages/agra/Agra';
import AgraOfficeDetail from './pages/agra/AgraOfficeDetail';
import { getAgraOfficeCardById } from './pages/agra/agraData';
import AhmednagarPage from './pages/ahmednagar/Ahmednagar';
import AhmednagarOfficeDetail from './pages/ahmednagar/AhmednagarOfficeDetail';
import { getAhmednagarOfficeCardById } from './pages/ahmednagar/ahmednagarData';
import AjmerPage from './pages/ajmer/Ajmer';
import AjmerOfficeDetail from './pages/ajmer/AjmerOfficeDetail';
import { getAjmerOfficeCardById } from './pages/ajmer/ajmerData';
import AlwarBhiwadiPage from './pages/alwar-bhiwadi/AlwarBhiwadi';
import AlwarBhiwadiOfficeDetail from './pages/alwar-bhiwadi/AlwarBhiwadiOfficeDetail';
import { getAlwarBhiwadiOfficeCardById } from './pages/alwar-bhiwadi/alwarBhiwadiData';
import AmbalaPage from './pages/ambala/Ambala';
import AmbalaOfficeDetail from './pages/ambala/AmbalaOfficeDetail';
import { getAmbalaOfficeCardById } from './pages/ambala/ambalaData';
import AmaravatiPage from './pages/amravati/Amaravati';
import AmaravatiOfficeDetail from './pages/amravati/AmaravatiOfficeDetail';
import { getAmaravatiOfficeCardById } from './pages/amravati/amaravatiData';
import AmritsarPage from './pages/amritsar/Amritsar';
import AmritsarOfficeDetail from './pages/amritsar/AmritsarOfficeDetail';
import { getAmritsarOfficeCardById } from './pages/amritsar/amritsarData';
import AnandPage from './pages/anand/Anand';
import AnandOfficeDetail from './pages/anand/AnandOfficeDetail';
import { getAnandOfficeCardById } from './pages/anand/anandData';
import AyodhyaPage from './pages/ayodhya/Ayodhya';
import AyodhyaOfficeDetail from './pages/ayodhya/AyodhyaOfficeDetail';
import { getAyodhyaOfficeCardById } from './pages/ayodhya/ayodhyaData';
import AurangabadPage from './pages/aurangabad/Aurangabad';
import AurangabadOfficeDetail from './pages/aurangabad/AurangabadOfficeDetail';
import { getAurangabadOfficeCardById } from './pages/aurangabad/aurangabadData';
import AgartalaPage from './pages/agartala/Agartala';
import AgartalaOfficeDetail from './pages/agartala/AgartalaOfficeDetail';
import { getAgartalaOfficeCardById } from './pages/agartala/agartalaData';
import AizawlPage from './pages/aizawl/Aizawl';
import AizawlOfficeDetail from './pages/aizawl/AizawlOfficeDetail';
import { getAizawlOfficeCardById } from './pages/aizawl/aizawlData';
import KanpurPage from './pages/kanpur/Kanpur';
import KanpurOfficeDetail from './pages/kanpur/KanpurOfficeDetail';
import { getKanpurOfficeCardById } from './pages/kanpur/kanpurData';
import KolhapurPage from './pages/kolhapur/Kolhapur';
import KolhapurOfficeDetail from './pages/kolhapur/KolhapurOfficeDetail';
import { getKolhapurOfficeCardById } from './pages/kolhapur/kolhapurData';
import KozhikodeCalicutPage from './pages/kozhikode-calicut/KozhikodeCalicut';
import KozhikodeCalicutOfficeDetail from './pages/kozhikode-calicut/KozhikodeCalicutOfficeDetail';
import { getKozhikodeCalicutOfficeCardById } from './pages/kozhikode-calicut/kozhikodeCalicutData';
import LudhianaPage from './pages/ludhiana/Ludhiana';
import LudhianaOfficeDetail from './pages/ludhiana/LudhianaOfficeDetail';
import { getLudhianaOfficeCardById } from './pages/ludhiana/ludhianaData';
import MaduraiPage from './pages/madurai/Madurai';
import MaduraiOfficeDetail from './pages/madurai/MaduraiOfficeDetail';
import { getMaduraiOfficeCardById } from './pages/madurai/maduraiData';
import MangaluruMangalorePage from './pages/mangaluru-mangalore/MangaluruMangalore';
import MangaluruMangaloreOfficeDetail from './pages/mangaluru-mangalore/MangaluruMangaloreOfficeDetail';
import { getMangaluruMangaloreOfficeCardById } from './pages/mangaluru-mangalore/mangaluruMangaloreData';
import MeerutPage from './pages/meerut/Meerut';
import MeerutOfficeDetail from './pages/meerut/MeerutOfficeDetail';
import { getMeerutOfficeCardById } from './pages/meerut/meerutData';
import MohaliPage from './pages/mohali/Mohali';
import MohaliOfficeDetail from './pages/mohali/MohaliOfficeDetail';
import { getMohaliOfficeCardById } from './pages/mohali/mohaliData';
import MysuruMysorePage from './pages/mysuru-mysore/MysuruMysore';
import MysuruMysoreOfficeDetail from './pages/mysuru-mysore/MysuruMysoreOfficeDetail';
import { getMysuruMysoreOfficeCardById } from './pages/mysuru-mysore/mysuruMysoreData';
import DehradunPage from './pages/dehradun/Dehradun';
import DehradunOfficeDetail from './pages/dehradun/DehradunOfficeDetail';
import { getDehradunOfficeCardById } from './pages/dehradun/dehradunData';
import DharamshalaMcleodGanjPage from './pages/dharamshala-mcleod-ganj/DharamshalaMcleodGanj';
import DharamshalaMcleodGanjOfficeDetail from './pages/dharamshala-mcleod-ganj/DharamshalaMcleodGanjOfficeDetail';
import { getDharamshalaMcleodGanjOfficeCardById } from './pages/dharamshala-mcleod-ganj/dharamshalaMcleodGanjData';
import FaridabadPage from './pages/faridabad/Faridabad';
import FaridabadOfficeDetail from './pages/faridabad/FaridabadOfficeDetail';
import { getFaridabadOfficeCardById } from './pages/faridabad/faridabadData';
import GandhinagarPage from './pages/gandhinagar/Gandhinagar';
import GandhinagarOfficeDetail from './pages/gandhinagar/GandhinagarOfficeDetail';
import { getGandhinagarOfficeCardById } from './pages/gandhinagar/gandhinagarData';
import GangtokPage from './pages/gangtok/Gangtok';
import GangtokOfficeDetail from './pages/gangtok/GangtokOfficeDetail';
import { getGangtokOfficeCardById } from './pages/gangtok/gangtokData';
import GhaziabadPage from './pages/ghaziabad/Ghaziabad';
import GhaziabadOfficeDetail from './pages/ghaziabad/GhaziabadOfficeDetail';
import { getGhaziabadOfficeCardById } from './pages/ghaziabad/ghaziabadData';
import GorakhpurPage from './pages/gorakhpur/Gorakhpur';
import GorakhpurOfficeDetail from './pages/gorakhpur/GorakhpurOfficeDetail';
import { getGorakhpurOfficeCardById } from './pages/gorakhpur/gorakhpurData';
import GreaterNoidaPage from './pages/greater-noida/GreaterNoida';
import GreaterNoidaOfficeDetail from './pages/greater-noida/GreaterNoidaOfficeDetail';
import { getGreaterNoidaOfficeCardById } from './pages/greater-noida/greaterNoidaData';
import GuwahatiPage from './pages/guwahati/Guwahati';
import GuwahatiOfficeDetail from './pages/guwahati/GuwahatiOfficeDetail';
import { getGuwahatiOfficeCardById } from './pages/guwahati/guwahatiData';
import GwaliorPage from './pages/gwalior/Gwalior';
import GwaliorOfficeDetail from './pages/gwalior/GwaliorOfficeDetail';
import { getGwaliorOfficeCardById } from './pages/gwalior/gwaliorData';
import HubballiDharwadPage from './pages/hubballi-dharwad/HubballiDharwad';
import HubballiDharwadOfficeDetail from './pages/hubballi-dharwad/HubballiDharwadOfficeDetail';
import { getHubballiDharwadOfficeCardById } from './pages/hubballi-dharwad/hubballiDharwadData';
import JabalpurPage from './pages/jabalpur/Jabalpur';
import JabalpurOfficeDetail from './pages/jabalpur/JabalpurOfficeDetail';
import { getJabalpurOfficeCardById } from './pages/jabalpur/jabalpurData';
import JalandharPage from './pages/jalandhar/Jalandhar';
import JalandharOfficeDetail from './pages/jalandhar/JalandharOfficeDetail';
import { getJalandharOfficeCardById } from './pages/jalandhar/jalandharData';
import JammuPage from './pages/jammu/Jammu';
import JammuOfficeDetail from './pages/jammu/JammuOfficeDetail';
import { getJammuOfficeCardById } from './pages/jammu/jammuData';
import JamnagarPage from './pages/jamnagar/Jamnagar';
import JamnagarOfficeDetail from './pages/jamnagar/JamnagarOfficeDetail';
import { getJamnagarOfficeCardById } from './pages/jamnagar/jamnagarData';
import JamshedpurPage from './pages/jamshedpur/Jamshedpur';
import JamshedpurOfficeDetail from './pages/jamshedpur/JamshedpurOfficeDetail';
import { getJamshedpurOfficeCardById } from './pages/jamshedpur/jamshedpurData';
import JodhpurPage from './pages/jodhpur/Jodhpur';
import JodhpurOfficeDetail from './pages/jodhpur/JodhpurOfficeDetail';
import { getJodhpurOfficeCardById } from './pages/jodhpur/jodhpurData';
import BareillyPage from './pages/bareilly/Bareilly';
import BareillyOfficeDetail from './pages/bareilly/BareillyOfficeDetail';
import { getBareillyOfficeCardById } from './pages/bareilly/bareillyData';
import BharuchPage from './pages/bharuch/Bharuch';
import BharuchOfficeDetail from './pages/bharuch/BharuchOfficeDetail';
import { getBharuchOfficeCardById } from './pages/bharuch/bharuchData';
import BhavnagarPage from './pages/bhavnagar/Bhavnagar';
import BhavnagarOfficeDetail from './pages/bhavnagar/BhavnagarOfficeDetail';
import { getBhavnagarOfficeCardById } from './pages/bhavnagar/bhavnagarData';
import BhilwaraPage from './pages/bhilwara/Bhilwara';
import BhilwaraOfficeDetail from './pages/bhilwara/BhilwaraOfficeDetail';
import { getBhilwaraOfficeCardById } from './pages/bhilwara/bhilwaraData';
import BhopalPage from './pages/bhopal/Bhopal';
import BhopalOfficeDetail from './pages/bhopal/BhopalOfficeDetail';
import { getBhopalOfficeCardById } from './pages/bhopal/bhopalData';
import BirBillingPage from './pages/bir-billing/BirBilling';
import BirBillingOfficeDetail from './pages/bir-billing/BirBillingOfficeDetail';
import { getBirBillingOfficeCardById } from './pages/bir-billing/birBillingData';
import WarangalPage from './pages/warangal/Warangal';
import WarangalOfficeDetail from './pages/warangal/WarangalOfficeDetail';
import { getWarangalOfficeCardById } from './pages/warangal/warangalData';
import VisakhapatnamPage from './pages/visakhapatnam/Visakhapatnam';
import VisakhapatnamOfficeDetail from './pages/visakhapatnam/VisakhapatnamOfficeDetail';
import { getVisakhapatnamOfficeCardById } from './pages/visakhapatnam/visakhapatnamData';
import VijayawadaPage from './pages/vijayawada/Vijayawada';
import VijayawadaOfficeDetail from './pages/vijayawada/VijayawadaOfficeDetail';
import { getVijayawadaOfficeCardById } from './pages/vijayawada/vijayawadaData';
import VaranasiPage from './pages/varanasi/Varanasi';
import VaranasiOfficeDetail from './pages/varanasi/VaranasiOfficeDetail';
import { getVaranasiOfficeCardById } from './pages/varanasi/varanasiData';
import VapiPage from './pages/vapi/Vapi';
import VapiOfficeDetail from './pages/vapi/VapiOfficeDetail';
import { getVapiOfficeCardById } from './pages/vapi/vapiData';
import VadodaraPage from './pages/vadodara/Vadodara';
import VadodaraOfficeDetail from './pages/vadodara/VadodaraOfficeDetail';
import { getVadodaraOfficeCardById } from './pages/vadodara/vadodaraData';
import UdaipurPage from './pages/udaipur/Udaipur';
import UdaipurOfficeDetail from './pages/udaipur/UdaipurOfficeDetail';
import { getUdaipurOfficeCardById } from './pages/udaipur/udaipurData';
import KolkataOfficeDetail from './pages/kolkata/KolkataOfficeDetail';
import { getKolkataOfficeCardById } from './pages/kolkata/kolkataData';

const SITE_NAME = 'MyCoworking';

// Every city that has office detail pages: its card lookup and the detail component to render.
// Order matters: the first city whose data contains the slug wins.
const OFFICE_CITIES = [
  { key: 'delhi', label: 'Delhi', getCard: getDehliOfficeCardById, Detail: DelhiOfficeDetails },
  { key: 'pune', label: 'Pune', getCard: getPuneOfficeCardById, Detail: PuneOfficeDetail },
  { key: 'bangalore', label: 'Bangalore', getCard: getBangaloreOfficeCardById, Detail: BangaloreOfficeDetail },
  { key: 'hyderabad', label: 'Hyderabad', getCard: getHyderabadOfficeCardById, Detail: HyderabadOfficeDetail },
  { key: 'kochi', label: 'Kochi', getCard: getKochiOfficeCardById, Detail: KochiOfficeDetail },
  { key: 'chandigarh', label: 'Chandigarh', getCard: getChandigarhOfficeCardById, Detail: ChandigarhOfficeDetail },
  { key: 'jaipur', label: 'Jaipur', getCard: getJaipurOfficeCardById, Detail: JaipurOfficeDetail },
  { key: 'ahmedabad', label: 'Ahmedabad', getCard: getAhmedabadOfficeCardById, Detail: AhmedabadOfficeDetails },
  { key: 'gurugram', label: 'Gurugram', getCard: getGurugramOfficeCardById, Detail: GurugramOfficeDetail },
  { key: 'indore', label: 'Indore', getCard: getIndoreOfficeCardById, Detail: IndoreOfficeDetails },
  { key: 'mumbai', label: 'Mumbai', getCard: getMumbaiOfficeCardById, Detail: MumbaiOfficeDetail },
  { key: 'goa', label: 'Goa', getCard: getGoaOfficeCardById, Detail: GoaOfficeDetail },
  { key: 'coimbatore', label: 'Coimbatore', getCard: getCoimbatoreOfficeCardById, Detail: CoimbatoreOfficeDetail },
  { key: 'bhubaneswar', label: 'Bhubaneswar', getCard: getBhubaneshwarOfficeCardById, Detail: BhubaneshwarOfficeDetail },
  { key: 'noida', label: 'Noida', getCard: getNoidaOfficeCardById, Detail: NoidaOfficeDetail },
  { key: 'chennai', label: 'Chennai', getCard: getChennaiOfficeCardById, Detail: ChennaiOfficeDetail },
  { key: 'lucknow', label: 'Lucknow', getCard: getLucknowOfficeCardById, Detail: LucknowOfficeDetail },
  { key: 'agra', label: 'Agra', getCard: getAgraOfficeCardById, Detail: AgraOfficeDetail },
  { key: 'ahmednagar', label: 'Ahmednagar', getCard: getAhmednagarOfficeCardById, Detail: AhmednagarOfficeDetail },
  { key: 'ajmer', label: 'Ajmer', getCard: getAjmerOfficeCardById, Detail: AjmerOfficeDetail },
  { key: 'alwar-bhiwadi', label: 'Alwar & Bhiwadi', getCard: getAlwarBhiwadiOfficeCardById, Detail: AlwarBhiwadiOfficeDetail },
  { key: 'ambala', label: 'Ambala', getCard: getAmbalaOfficeCardById, Detail: AmbalaOfficeDetail },
  { key: 'amaravati', label: 'Amravati', getCard: getAmaravatiOfficeCardById, Detail: AmaravatiOfficeDetail },
  { key: 'amritsar', label: 'Amritsar', getCard: getAmritsarOfficeCardById, Detail: AmritsarOfficeDetail },
  { key: 'anand', label: 'Anand', getCard: getAnandOfficeCardById, Detail: AnandOfficeDetail },
  { key: 'ayodhya', label: 'Ayodhya', getCard: getAyodhyaOfficeCardById, Detail: AyodhyaOfficeDetail },
  { key: 'aurangabad', label: 'Aurangabad', getCard: getAurangabadOfficeCardById, Detail: AurangabadOfficeDetail },
  { key: 'agartala', label: 'Agartala', getCard: getAgartalaOfficeCardById, Detail: AgartalaOfficeDetail },
  { key: 'aizawl', label: 'Aizawl', getCard: getAizawlOfficeCardById, Detail: AizawlOfficeDetail },
  { key: 'kanpur', label: 'Kanpur', getCard: getKanpurOfficeCardById, Detail: KanpurOfficeDetail },
  { key: 'kolhapur', label: 'Kolhapur', getCard: getKolhapurOfficeCardById, Detail: KolhapurOfficeDetail },
  { key: 'kozhikode-calicut', label: 'Kozhikode', getCard: getKozhikodeCalicutOfficeCardById, Detail: KozhikodeCalicutOfficeDetail },
  { key: 'ludhiana', label: 'Ludhiana', getCard: getLudhianaOfficeCardById, Detail: LudhianaOfficeDetail },
  { key: 'madurai', label: 'Madurai', getCard: getMaduraiOfficeCardById, Detail: MaduraiOfficeDetail },
  { key: 'mangaluru-mangalore', label: 'Mangaluru', getCard: getMangaluruMangaloreOfficeCardById, Detail: MangaluruMangaloreOfficeDetail },
  { key: 'meerut', label: 'Meerut', getCard: getMeerutOfficeCardById, Detail: MeerutOfficeDetail },
  { key: 'mohali', label: 'Mohali', getCard: getMohaliOfficeCardById, Detail: MohaliOfficeDetail },
  { key: 'mysuru-mysore', label: 'Mysuru', getCard: getMysuruMysoreOfficeCardById, Detail: MysuruMysoreOfficeDetail },
  { key: 'dehradun', label: 'Dehradun', getCard: getDehradunOfficeCardById, Detail: DehradunOfficeDetail },
  { key: 'dharamshala-mcleod-ganj', label: 'Dharamshala & McLeod Ganj', getCard: getDharamshalaMcleodGanjOfficeCardById, Detail: DharamshalaMcleodGanjOfficeDetail },
  { key: 'faridabad', label: 'Faridabad', getCard: getFaridabadOfficeCardById, Detail: FaridabadOfficeDetail },
  { key: 'gandhinagar', label: 'Gandhinagar', getCard: getGandhinagarOfficeCardById, Detail: GandhinagarOfficeDetail },
  { key: 'gangtok', label: 'Gangtok', getCard: getGangtokOfficeCardById, Detail: GangtokOfficeDetail },
  { key: 'ghaziabad', label: 'Ghaziabad', getCard: getGhaziabadOfficeCardById, Detail: GhaziabadOfficeDetail },
  { key: 'gorakhpur', label: 'Gorakhpur', getCard: getGorakhpurOfficeCardById, Detail: GorakhpurOfficeDetail },
  { key: 'greater-noida', label: 'Greater Noida', getCard: getGreaterNoidaOfficeCardById, Detail: GreaterNoidaOfficeDetail },
  { key: 'guwahati', label: 'Guwahati', getCard: getGuwahatiOfficeCardById, Detail: GuwahatiOfficeDetail },
  { key: 'gwalior', label: 'Gwalior', getCard: getGwaliorOfficeCardById, Detail: GwaliorOfficeDetail },
  { key: 'hubballi-dharwad', label: 'Hubballi-Dharwad', getCard: getHubballiDharwadOfficeCardById, Detail: HubballiDharwadOfficeDetail },
  { key: 'jabalpur', label: 'Jabalpur', getCard: getJabalpurOfficeCardById, Detail: JabalpurOfficeDetail },
  { key: 'jalandhar', label: 'Jalandhar', getCard: getJalandharOfficeCardById, Detail: JalandharOfficeDetail },
  { key: 'jammu', label: 'Jammu', getCard: getJammuOfficeCardById, Detail: JammuOfficeDetail },
  { key: 'jamnagar', label: 'Jamnagar', getCard: getJamnagarOfficeCardById, Detail: JamnagarOfficeDetail },
  { key: 'jamshedpur', label: 'Jamshedpur', getCard: getJamshedpurOfficeCardById, Detail: JamshedpurOfficeDetail },
  { key: 'jodhpur', label: 'Jodhpur', getCard: getJodhpurOfficeCardById, Detail: JodhpurOfficeDetail },
  { key: 'bareilly', label: 'Bareilly', getCard: getBareillyOfficeCardById, Detail: BareillyOfficeDetail },
  { key: 'bharuch', label: 'Bharuch', getCard: getBharuchOfficeCardById, Detail: BharuchOfficeDetail },
  { key: 'bhavnagar', label: 'Bhavnagar', getCard: getBhavnagarOfficeCardById, Detail: BhavnagarOfficeDetail },
  { key: 'bhilwara', label: 'Bhilwara', getCard: getBhilwaraOfficeCardById, Detail: BhilwaraOfficeDetail },
  { key: 'bhopal', label: 'Bhopal', getCard: getBhopalOfficeCardById, Detail: BhopalOfficeDetail },
  { key: 'bir-billing', label: 'Bir Billing', getCard: getBirBillingOfficeCardById, Detail: BirBillingOfficeDetail },
  { key: 'warangal', label: 'Warangal', getCard: getWarangalOfficeCardById, Detail: WarangalOfficeDetail },
  { key: 'visakhapatnam', label: 'Visakhapatnam', getCard: getVisakhapatnamOfficeCardById, Detail: VisakhapatnamOfficeDetail },
  { key: 'vijayawada', label: 'Vijayawada', getCard: getVijayawadaOfficeCardById, Detail: VijayawadaOfficeDetail },
  { key: 'varanasi', label: 'Varanasi', getCard: getVaranasiOfficeCardById, Detail: VaranasiOfficeDetail },
  { key: 'vapi', label: 'Vapi', getCard: getVapiOfficeCardById, Detail: VapiOfficeDetail },
  { key: 'vadodara', label: 'Vadodara', getCard: getVadodaraOfficeCardById, Detail: VadodaraOfficeDetail },
  { key: 'udaipur', label: 'Udaipur', getCard: getUdaipurOfficeCardById, Detail: UdaipurOfficeDetail },
  { key: 'kolkata', label: 'Kolkata', getCard: getKolkataOfficeCardById, Detail: KolkataOfficeDetail },
];

// The route is spelled both ways; the data files use "bhubaneswar".
const normalizeCityKey = (slug = '') => ({ bhubaneshwar: 'bhubaneswar', amravati: 'amaravati' }[slug] || slug);

const titleCaseSlug = (slug = '') =>
  slug.split('-').filter(Boolean).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// Every city's data file, used to build each city page's SEO from its real listings.
const cityDataModules = import.meta.glob('./pages/*/*Data.js', { eager: true });

// Returns a city's listings without repeated ids, plus its slug helper. Folders are matched like URLs ("amravati" -> "amaravati").
const getCityListings = (cityKey) => {
  const [, data = {}] = Object.entries(cityDataModules).find(([file]) => normalizeCityKey(file.split('/')[2]) === cityKey) || [];
  const cardsKey = Object.keys(data).find((key) => /^all\w*OfficeCards$/.test(key));
  const slugKey = Object.keys(data).find((key) => /^get\w*OfficeSlug$/.test(key));
  const seen = new Set();
  const cards = (data[cardsKey] || []).filter((card) => !seen.has(card.id) && seen.add(card.id));
  return { cards, getSlug: data[slugKey] };
};

// Finds an office by slug, trying the city named in the URL first and then every other city.
const findOffice = (id, cityKey) => {
  const candidates = [
    ...OFFICE_CITIES.filter((city) => city.key === cityKey),
    ...OFFICE_CITIES.filter((city) => city.key !== cityKey),
  ];
  for (const city of candidates) {
    const card = city.getCard(id);
    if (card) return { card, city };
  }
  return null;
};

const HOME_SEO = {
  title: `Coworking Space in India | Private Offices, Dedicated Desks & Virtual Offices | ${SITE_NAME}`,
  description: `Find and book coworking spaces, private offices, dedicated desks, meeting rooms and virtual offices across ${OFFICE_CITIES.length}+ cities in India. Compare prices and get a free quote with MyCoworking.`,
};

const buildOfficeSeo = ({ card, city }) => {
  const area = card.area || (card.location ? card.location.split(',')[0].trim() : '');
  const place = area ? `${area}, ${city.label}` : city.label;
  const price = /\d/.test(String(card.price ?? '')) ? card.priceFormatted : '';
  const image = Array.isArray(card.images) ? card.images[0] : card.image;
  const lead = `Book ${card.name}, a coworking space in ${place}${price ? ` from ${price}` : ''}.`;
  return {
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: card.name,
      description: `Coworking space in ${place}`,
      ...(image ? { image } : {}),
      ...(card.phone ? { telephone: card.phone } : {}),
      address: { '@type': 'PostalAddress', addressLocality: city.label, streetAddress: card.address || card.location || place, addressCountry: 'IN' },
    },
    title: /coworking space/i.test(card.name)
      ? `${card.name} - ${place} | ${SITE_NAME}`
      : `${card.name} - Coworking Space in ${place} | ${SITE_NAME}`,
    description: `${lead} ${lead.length > 105 ? 'Get a free quote.' : 'View photos, plans and location, and get a free quote.'}`,
  };
};

// Builds a city page's title, description and listing schema from the spaces shown on that page.
const buildCitySeo = (cityKey) => {
  const label = OFFICE_CITIES.find((city) => city.key === cityKey)?.label || titleCaseSlug(cityKey);
  const { cards, getSlug } = getCityListings(cityKey);
  if (cards.length === 0) {
    return {
      title: `Coworking Space in ${label} | Shared Desks, Private Offices & Meeting Rooms | ${SITE_NAME}`,
      description: `Looking for a coworking space in ${label}? Tell us what you need and get a free quote from ${SITE_NAME}.`,
    };
  }

  const areaCounts = cards.reduce((counts, card) => {
    if (card.area && card.area !== label) counts[card.area] = (counts[card.area] || 0) + 1;
    return counts;
  }, {});
  const topAreas = Object.entries(areaCounts).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([area]) => area);
  const areas = topAreas.length > 0 ? ` ${topAreas.length === 1 ? 'at' : 'across'} ${topAreas.join(', ')}` : '';
  // Only monthly prices count. Anything under ₹2,000 is skipped: those entries look like placeholders or day-pass rates.
  const monthlyPrices = cards
    .filter((card) => /month/i.test(card.period || '') && /\d/.test(String(card.price ?? '')))
    .map((card) => Number(String(card.price).replace(/\D/g, '')))
    .filter((price) => price >= 2000);
  const fromPrice = monthlyPrices.length > 0 ? `₹${Math.min(...monthlyPrices).toLocaleString('en-IN')}` : '';
  const spaces = `${cards.length} coworking ${cards.length === 1 ? 'space' : 'spaces'}`;

  return {
    title: `Coworking Space in ${label} | ${cards.length} ${cards.length === 1 ? 'Workspace' : 'Workspaces'}${fromPrice ? ` from ${fromPrice}` : ''} | ${SITE_NAME}`,
    description: `${cards.length === 1 ? 'Explore' : 'Compare'} ${spaces} in ${label}${areas}${fromPrice ? `, from ${fromPrice} a month` : ''}. Get a free quote from ${SITE_NAME}.`,
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `Coworking spaces in ${label}`,
      numberOfItems: cards.length,
      itemListElement: cards.slice(0, 10).map((card, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: card.name,
        ...(getSlug ? { url: `${window.location.origin}${getSlug(card)}` } : {}),
      })),
    },
  };
};

const buildVirtualSeo = (cityName) => ({
  title: `Virtual Office in ${cityName} | GST & Company Registration Address | ${SITE_NAME}`,
  description: `Get a verified virtual office address in ${cityName} for GST, MCA and business registration, with mail handling and quick setup. Request a quote from ${SITE_NAME}.`,
});

// Works out the title and description for the current URL.
const resolveSeo = (pathname) => {
  if (pathname === '/') return HOME_SEO;

  const virtual = matchPath('/virtual-office/:city', pathname);
  if (virtual) {
    const city = getVirtualOfficeCity(virtual.params.city);
    return city ? buildVirtualSeo(city.name) : HOME_SEO;
  }

  const cityOffice = matchPath('/coworking/:city/:id', pathname);
  if (cityOffice) {
    const cityKey = normalizeCityKey(cityOffice.params.city);
    const found = findOffice(cityOffice.params.id, cityKey);
    return found ? buildOfficeSeo(found) : buildCitySeo(cityKey);
  }

  const cityPage = matchPath('/coworking/:city', pathname);
  if (cityPage) return buildCitySeo(normalizeCityKey(cityPage.params.city));

  const rootOffice = matchPath('/:id', pathname);
  const found = rootOffice ? findOffice(rootOffice.params.id) : null;
  return found ? buildOfficeSeo(found) : HOME_SEO;
};

const upsertHeadTag = (selector, tagName, attributes) => {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(tagName);
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
};

// Keeps document.title, the meta description, the canonical link and the Open Graph tags in sync with the route.
const SeoManager = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description, structuredData } = resolveSeo(pathname);
    const canonical = `${window.location.origin}${pathname === '/' ? '/' : pathname.replace(/\/+$/, '')}`;

    document.title = title;
    upsertHeadTag('meta[name="description"]', 'meta', { name: 'description', content: description });
    upsertHeadTag('link[rel="canonical"]', 'link', { rel: 'canonical', href: canonical });
    upsertHeadTag('meta[property="og:title"]', 'meta', { property: 'og:title', content: title });
    upsertHeadTag('meta[property="og:description"]', 'meta', { property: 'og:description', content: description });
    upsertHeadTag('meta[property="og:url"]', 'meta', { property: 'og:url', content: canonical });
    upsertHeadTag('meta[property="og:type"]', 'meta', { property: 'og:type', content: 'website' });
    upsertHeadTag('meta[property="og:site_name"]', 'meta', { property: 'og:site_name', content: SITE_NAME });

    document.head.querySelector('script[data-seo-ld]')?.remove();
    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-ld', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
};

// Resolves root-level office URLs like /futops-cowork-kharadi-pune to the right city's detail page.
const OfficeRoute = () => {
  const { id } = useParams();
  const found = findOffice(id);
  if (!found) return <Homepage />;
  const { Detail } = found.city;
  return <Detail />;
};

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-screen overflow-x-hidden flex flex-col bg-white">
      <SeoManager />
      <Navbar />
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coworking/ahmedabad" element={<AhmedabadPage />} />
          <Route path="/coworking/ahmedabad/:id" element={<AhmedabadOfficeDetails />} />
          <Route path="/coworking/bangalore" element={<BangalorePage />} />
          <Route path="/coworking/bangalore/:id" element={<BangaloreOfficeDetail />} />
          <Route path="/coworking/bhubaneswar" element={<BhubaneswarPage />} />
          <Route path="/coworking/bhubaneshwar" element={<BhubaneswarPage />} />
          <Route path="/coworking/bhubaneshwar/:id" element={<BhubaneshwarOfficeDetail />} />
          <Route path="/coworking/bhubaneswar/:id" element={<BhubaneshwarOfficeDetail />} />
          <Route path="/coworking/chandigarh" element={<ChandigarhPage />} />
          <Route path="/coworking/chandigarh/:id" element={<ChandigarhOfficeDetail />} />
          <Route path="/coworking/chennai" element={<ChennaiPage />} />
          <Route path="/coworking/chennai/:id" element={<ChennaiOfficeDetail />} />
          <Route path="/coworking/coimbatore" element={<CoimbatorePage />} />
          <Route path="/coworking/coimbatore/:id" element={<CoimbatoreOfficeDetail />} />
          <Route path="/coworking/delhi" element={<DelhiPage />} />
          <Route path="/coworking/delhi/:id" element={<DelhiOfficeDetails />} />
          <Route path="/coworking/goa" element={<GoaPage />} />
          <Route path="/coworking/goa/:id" element={<GoaOfficeDetail />} />
          <Route path="/coworking/gurugram" element={<GurugramPage />} />
          <Route path="/coworking/gurugram/:id" element={<GurugramOfficeDetail />} />
          <Route path="/coworking/hyderabad" element={<HyderabadPage />} />
          <Route path="/coworking/hyderabad/:id" element={<HyderabadOfficeDetail />} />
          <Route path="/coworking/indore" element={<IndorePage />} />
          <Route path="/coworking/indore/:id" element={<IndoreOfficeDetails />} />
          <Route path="/coworking/jaipur" element={<JaipurPage />} />
          <Route path="/coworking/jaipur/:id" element={<JaipurOfficeDetail />} />
          <Route path="/coworking/kochi" element={<KochiPage />} />
          <Route path="/coworking/kochi/:id" element={<KochiOfficeDetail />} />
          <Route path="/coworking/kolkata" element={<KolkataPage />} />
          <Route path="/coworking/lucknow" element={<LucknowPage />} />
          <Route path="/coworking/lucknow/:id" element={<LucknowOfficeDetail />} />
          <Route path="/coworking/mumbai" element={<MumbaiPage />} />
          <Route path="/coworking/mumbai/:id" element={<MumbaiOfficeDetail />} />
          <Route path="/coworking/noida" element={<NoidaPage />} />
          <Route path="/coworking/noida/:id" element={<NoidaOfficeDetail />} />
          <Route path="/coworking/pune" element={<PunePage />} />
          <Route path="/coworking/pune/:id" element={<PuneOfficeDetail />} />
          <Route path="/coworking/agra" element={<AgraPage />} />
          <Route path="/coworking/agra/:id" element={<AgraOfficeDetail />} />
          <Route path="/coworking/ahmednagar" element={<AhmednagarPage />} />
          <Route path="/coworking/ahmednagar/:id" element={<AhmednagarOfficeDetail />} />
          <Route path="/coworking/ajmer" element={<AjmerPage />} />
          <Route path="/coworking/ajmer/:id" element={<AjmerOfficeDetail />} />
          <Route path="/coworking/alwar-bhiwadi" element={<AlwarBhiwadiPage />} />
          <Route path="/coworking/alwar-bhiwadi/:id" element={<AlwarBhiwadiOfficeDetail />} />
          <Route path="/coworking/ambala" element={<AmbalaPage />} />
          <Route path="/coworking/ambala/:id" element={<AmbalaOfficeDetail />} />
          <Route path="/coworking/amaravati" element={<AmaravatiPage />} />
          <Route path="/coworking/amaravati/:id" element={<AmaravatiOfficeDetail />} />
          <Route path="/coworking/amravati" element={<AmaravatiPage />} />
          <Route path="/coworking/amravati/:id" element={<AmaravatiOfficeDetail />} />
          <Route path="/coworking/amritsar" element={<AmritsarPage />} />
          <Route path="/coworking/amritsar/:id" element={<AmritsarOfficeDetail />} />
          <Route path="/coworking/anand" element={<AnandPage />} />
          <Route path="/coworking/anand/:id" element={<AnandOfficeDetail />} />
          <Route path="/coworking/ayodhya" element={<AyodhyaPage />} />
          <Route path="/coworking/ayodhya/:id" element={<AyodhyaOfficeDetail />} />
          <Route path="/coworking/aurangabad" element={<AurangabadPage />} />
          {/* The More Cities entry "Chhatrapati Sambhaji Nagar / Aurangabad" links here. */}
          <Route path="/coworking/chhatrapati sambhaji nagar / aurangabad" element={<Navigate to="/coworking/aurangabad" replace />} />
          <Route path="/coworking/aurangabad/:id" element={<AurangabadOfficeDetail />} />
          <Route path="/coworking/agartala" element={<AgartalaPage />} />
          <Route path="/coworking/agartala/:id" element={<AgartalaOfficeDetail />} />
          <Route path="/coworking/aizawl" element={<AizawlPage />} />
          <Route path="/coworking/aizawl/:id" element={<AizawlOfficeDetail />} />
          <Route path="/coworking/kanpur" element={<KanpurPage />} />
          <Route path="/coworking/kanpur/:id" element={<KanpurOfficeDetail />} />
          <Route path="/coworking/kolhapur" element={<KolhapurPage />} />
          <Route path="/coworking/kolhapur/:id" element={<KolhapurOfficeDetail />} />
          <Route path="/coworking/kozhikode-calicut" element={<KozhikodeCalicutPage />} />
          <Route path="/coworking/kozhikode-calicut/:id" element={<KozhikodeCalicutOfficeDetail />} />
          <Route path="/coworking/ludhiana" element={<LudhianaPage />} />
          <Route path="/coworking/ludhiana/:id" element={<LudhianaOfficeDetail />} />
          <Route path="/coworking/madurai" element={<MaduraiPage />} />
          <Route path="/coworking/madurai/:id" element={<MaduraiOfficeDetail />} />
          <Route path="/coworking/mangaluru-mangalore" element={<MangaluruMangalorePage />} />
          <Route path="/coworking/mangaluru-mangalore/:id" element={<MangaluruMangaloreOfficeDetail />} />
          <Route path="/coworking/meerut" element={<MeerutPage />} />
          <Route path="/coworking/meerut/:id" element={<MeerutOfficeDetail />} />
          <Route path="/coworking/mohali" element={<MohaliPage />} />
          <Route path="/coworking/mohali/:id" element={<MohaliOfficeDetail />} />
          <Route path="/coworking/mysuru-mysore" element={<MysuruMysorePage />} />
          <Route path="/coworking/mysuru-mysore/:id" element={<MysuruMysoreOfficeDetail />} />
          {/* More Cities entries (K–M) whose names don't match their page URL. */}
          <Route path="/coworking/kozhikode / calicut" element={<Navigate to="/coworking/kozhikode-calicut" replace />} />
          <Route path="/coworking/mangaluru / mangalore" element={<Navigate to="/coworking/mangaluru-mangalore" replace />} />
          <Route path="/coworking/mysuru / mysore" element={<Navigate to="/coworking/mysuru-mysore" replace />} />
          <Route path="/coworking/dehradun" element={<DehradunPage />} />
          <Route path="/coworking/dehradun/:id" element={<DehradunOfficeDetail />} />
          <Route path="/coworking/dharamshala-mcleod-ganj" element={<DharamshalaMcleodGanjPage />} />
          <Route path="/coworking/dharamshala-mcleod-ganj/:id" element={<DharamshalaMcleodGanjOfficeDetail />} />
          <Route path="/coworking/faridabad" element={<FaridabadPage />} />
          <Route path="/coworking/faridabad/:id" element={<FaridabadOfficeDetail />} />
          <Route path="/coworking/gandhinagar" element={<GandhinagarPage />} />
          <Route path="/coworking/gandhinagar/:id" element={<GandhinagarOfficeDetail />} />
          <Route path="/coworking/gangtok" element={<GangtokPage />} />
          <Route path="/coworking/gangtok/:id" element={<GangtokOfficeDetail />} />
          <Route path="/coworking/ghaziabad" element={<GhaziabadPage />} />
          <Route path="/coworking/ghaziabad/:id" element={<GhaziabadOfficeDetail />} />
          <Route path="/coworking/gorakhpur" element={<GorakhpurPage />} />
          <Route path="/coworking/gorakhpur/:id" element={<GorakhpurOfficeDetail />} />
          <Route path="/coworking/greater-noida" element={<GreaterNoidaPage />} />
          <Route path="/coworking/greater-noida/:id" element={<GreaterNoidaOfficeDetail />} />
          <Route path="/coworking/guwahati" element={<GuwahatiPage />} />
          <Route path="/coworking/guwahati/:id" element={<GuwahatiOfficeDetail />} />
          <Route path="/coworking/gwalior" element={<GwaliorPage />} />
          <Route path="/coworking/gwalior/:id" element={<GwaliorOfficeDetail />} />
          <Route path="/coworking/hubballi-dharwad" element={<HubballiDharwadPage />} />
          <Route path="/coworking/hubballi-dharwad/:id" element={<HubballiDharwadOfficeDetail />} />
          <Route path="/coworking/jabalpur" element={<JabalpurPage />} />
          <Route path="/coworking/jabalpur/:id" element={<JabalpurOfficeDetail />} />
          <Route path="/coworking/jalandhar" element={<JalandharPage />} />
          <Route path="/coworking/jalandhar/:id" element={<JalandharOfficeDetail />} />
          <Route path="/coworking/jammu" element={<JammuPage />} />
          <Route path="/coworking/jammu/:id" element={<JammuOfficeDetail />} />
          <Route path="/coworking/jamnagar" element={<JamnagarPage />} />
          <Route path="/coworking/jamnagar/:id" element={<JamnagarOfficeDetail />} />
          <Route path="/coworking/jamshedpur" element={<JamshedpurPage />} />
          <Route path="/coworking/jamshedpur/:id" element={<JamshedpurOfficeDetail />} />
          <Route path="/coworking/jodhpur" element={<JodhpurPage />} />
          <Route path="/coworking/jodhpur/:id" element={<JodhpurOfficeDetail />} />
          {/* More Cities entries (D–J) whose names don't match their page URL. */}
          <Route path="/coworking/dharamshala / mcleod ganj" element={<Navigate to="/coworking/dharamshala-mcleod-ganj" replace />} />
          <Route path="/coworking/greater noida" element={<Navigate to="/coworking/greater-noida" replace />} />
          <Route path="/coworking/bareilly" element={<BareillyPage />} />
          <Route path="/coworking/bareilly/:id" element={<BareillyOfficeDetail />} />
          <Route path="/coworking/bharuch" element={<BharuchPage />} />
          <Route path="/coworking/bharuch/:id" element={<BharuchOfficeDetail />} />
          <Route path="/coworking/bhavnagar" element={<BhavnagarPage />} />
          <Route path="/coworking/bhavnagar/:id" element={<BhavnagarOfficeDetail />} />
          <Route path="/coworking/bhilwara" element={<BhilwaraPage />} />
          <Route path="/coworking/bhilwara/:id" element={<BhilwaraOfficeDetail />} />
          <Route path="/coworking/bhopal" element={<BhopalPage />} />
          <Route path="/coworking/bhopal/:id" element={<BhopalOfficeDetail />} />
          <Route path="/coworking/bir-billing" element={<BirBillingPage />} />
          <Route path="/coworking/bir-billing/:id" element={<BirBillingOfficeDetail />} />
          <Route path="/coworking/warangal" element={<WarangalPage />} />
          <Route path="/coworking/warangal/:id" element={<WarangalOfficeDetail />} />
          <Route path="/coworking/hanamkonda" element={<Navigate to="/coworking/warangal" replace />} />
          <Route path="/coworking/hanumakonda" element={<Navigate to="/coworking/warangal" replace />} />
          <Route path="/coworking/visakhapatnam" element={<VisakhapatnamPage />} />
          <Route path="/coworking/visakhapatnam/:id" element={<VisakhapatnamOfficeDetail />} />
          <Route path="/coworking/vijayawada" element={<VijayawadaPage />} />
          <Route path="/coworking/vijayawada/:id" element={<VijayawadaOfficeDetail />} />
          <Route path="/coworking/varanasi" element={<VaranasiPage />} />
          <Route path="/coworking/varanasi/:id" element={<VaranasiOfficeDetail />} />
          <Route path="/coworking/vapi" element={<VapiPage />} />
          <Route path="/coworking/vapi/:id" element={<VapiOfficeDetail />} />
          <Route path="/coworking/vadodara" element={<VadodaraPage />} />
          <Route path="/coworking/vadodara/:id" element={<VadodaraOfficeDetail />} />
          <Route path="/coworking/udaipur" element={<UdaipurPage />} />
          <Route path="/coworking/udaipur/:id" element={<UdaipurOfficeDetail />} />
          <Route path="/coworking/vizag" element={<Navigate to="/coworking/visakhapatnam" replace />} />
          <Route path="/coworking/vishakhapatnam" element={<Navigate to="/coworking/visakhapatnam" replace />} />
          <Route path="/coworking/vijaywada" element={<Navigate to="/coworking/vijayawada" replace />} />
          <Route path="/coworking/baroda" element={<Navigate to="/coworking/vadodara" replace />} />
          {/* More Cities entries whose names don't match their page URL. */}
          <Route path="/coworking/alwar / bhiwadi" element={<Navigate to="/coworking/alwar-bhiwadi" replace />} />
          <Route path="/coworking/bir billing" element={<Navigate to="/coworking/bir-billing" replace />} />
          <Route path="/coworking/kolkata/:id" element={<KolkataOfficeDetail />} />
          <Route path="/virtual-office/:city" element={<VirtualOffice />} />
          <Route path="/:id" element={<OfficeRoute />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </main>
      <WhatsAppButton />
    </div>
  );
};

export default App;