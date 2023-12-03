import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Index from './pages/Index';
import WhyBitcoin from './pages/WhyBitcoin';
import HowToRedeem from './pages/HowToRedeem';
import About from './pages/About';
import './i18n';

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
     
    <Router>
    <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Index></Index>}></Route>
<Route path="/whybitcoin" element={<WhyBitcoin></WhyBitcoin>}></Route>
<Route path="/howtoredeem" element={<HowToRedeem></HowToRedeem>}></Route>
<Route path="/about" element={<About></About>}></Route>

      </Routes>
    </Router>

    
  </div>

    
  );
}

export default App;
