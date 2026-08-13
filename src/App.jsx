import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WeddingCatering from "./pages/services/WeddingCatering";
import CorporateCatering from "./pages/services/CorporateCatering";
import InternationalCatering from "./pages/services/InternationalCatering";
import PrivateCelebrations from "./pages/services/PrivateCelebrations";
import TempleFunctions from "./pages/services/TempleFunctions";
import LiveFoodCounters from "./pages/services/LiveFoodCounters";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/wedding-catering" element={<WeddingCatering />} />
        <Route path="/services/corporate-catering" element={<CorporateCatering />} />
        <Route path="/services/international-catering" element={<InternationalCatering />} />
        <Route path="/services/private-celebrations" element={<PrivateCelebrations />} />
        <Route path="/services/temple-functions" element={<TempleFunctions />} />
        <Route path="/services/live-food-counters" element={<LiveFoodCounters />} />
      </Routes>
    </>
  );
}

export default App;