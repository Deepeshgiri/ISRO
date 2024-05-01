
import logo from './logo.svg';
import './App.css';
import IcustomerSatellite from './pages/IcustomerSatellite';
import Ispacecrafts from './pages/Ispacecrafts';
import Icenters from './pages/Icenters';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RocketLaunch from './utils/RocketLaunch';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/ISRO" element={<RocketLaunch />} />
        <Route path="/customersatellite" element={<IcustomerSatellite />} />
        <Route path="/spacecrafts" element={<Ispacecrafts />} />
        <Route path="/centres" element={<Icenters />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
