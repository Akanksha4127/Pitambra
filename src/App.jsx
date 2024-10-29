import reactLogo from "./assets/react.svg";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Home from "./Pages/Home";
import MandirKaryakaram from "./Pages/MandirKaryakaram";
import MandirPhoto from "./Pages/MandirPhoto";
import MandirSamiti from "./Pages/MandirSamiti";
import Aarti from "./Pages/Aarti";
import Contact from "./Pages/Contact";
import Index from "./Pages/E-Puja";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="text-justify">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mandirkaryakaram" element={<MandirKaryakaram />} />
        <Route path="/mandirphoto" element={<MandirPhoto />} />
        <Route path="/mandirsamiti" element={<MandirSamiti />} />
        <Route path="/aarti" element={<Aarti />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/index" element={<Index />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
