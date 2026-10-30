import { Routes, Route, useParams } from 'react-router-dom';
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

import AhmedabadPage from './pages/ahmedabad/Ahmedabad';
import BangalorePage from './pages/bangalore/Bangalore';
import BangaloreOfficeDetail from './pages/bangalore/BangaloreOfficeDetail';
import BhubaneswarPage from './pages/bhubaneswar/Bhubaneswar';
import ChandigarhPage from './pages/chandigarh/Chandigarh';
import ChandigarhOfficeDetail from './pages/chandigarh/ChandigarhOfficeDetail';
import { getChandigarhOfficeCardById } from './pages/chandigarh/chandigarhData';
import ChennaiPage from './pages/chennai/Chennai';
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

// Resolves root-level office URLs like /futops-cowork-kharadi-pune to the right city's detail page.
const OfficeRoute = () => {
  const { id } = useParams();
  if (getDehliOfficeCardById(id)) return <DelhiOfficeDetails />;
  if (getPuneOfficeCardById(id)) return <PuneOfficeDetail />;
  if (getBangaloreOfficeCardById(id)) return <BangaloreOfficeDetail />;
  if (getHyderabadOfficeCardById(id)) return <HyderabadOfficeDetail />;
  if (getKochiOfficeCardById(id)) return <KochiOfficeDetail />;
  if (getChandigarhOfficeCardById(id)) return <ChandigarhOfficeDetail />;
  if (getJaipurOfficeCardById(id)) return <JaipurOfficeDetail />;
  if (getAhmedabadOfficeCardById(id)) return <AhmedabadOfficeDetails />;
  if (getGurugramOfficeCardById(id)) return <GurugramOfficeDetail />;
  if (getIndoreOfficeCardById(id)) return <IndoreOfficeDetails />;
  if (getMumbaiOfficeCardById(id)) return <MumbaiOfficeDetail />;
  if (getGoaOfficeCardById(id)) return <GoaOfficeDetail />;
  if (getCoimbatoreOfficeCardById(id)) return <CoimbatoreOfficeDetail />;
  if (getBhubaneshwarOfficeCardById(id)) return <BhubaneshwarOfficeDetail />;
  if (getNoidaOfficeCardById(id)) return <NoidaOfficeDetail />;
  return <Homepage />;
};

const App = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto min-h-screen overflow-x-hidden flex flex-col bg-white">
      <Navbar />
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
        <Route path="/coworking/coimbatore" element={<CoimbatorePage />} />
        <Route path="/coworking/delhi" element={<DelhiPage />} />
        <Route path="/coworking/delhi/:id" element={<DelhiOfficeDetails />} />
        <Route path="/coworking/goa" element={<GoaPage />} />
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
        <Route path="/coworking/mumbai" element={<MumbaiPage />} />
        <Route path="/coworking/noida" element={<NoidaPage />} />
        <Route path="/coworking/noida/:id" element={<NoidaOfficeDetail />} />
        <Route path="/coworking/pune" element={<PunePage />} />
        <Route path="/coworking/pune/:id" element={<PuneOfficeDetail />} />
        <Route path="/virtual-office/:city" element={<VirtualOffice />} />
        <Route path="/:id" element={<OfficeRoute />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
};

export default App;