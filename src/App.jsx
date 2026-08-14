import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import WeddingCatering from "./pages/services/WeddingCatering";
import CorporateCatering from "./pages/services/CorporateCatering";
import InternationalCatering from "./pages/services/InternationalCatering";
import PrivateCelebrations from "./pages/services/PrivateCelebrations";
import TempleFunctions from "./pages/services/TempleFunctions";
import LiveFoodCounters from "./pages/services/LiveFoodCounters";
import MenuDetail from "./pages/menu/MenuDetail";
import RequestQuote from "./pages/RequestQuote";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/wedding-catering" element={<WeddingCatering />} />
        <Route path="/services/corporate-catering" element={<CorporateCatering />} />
        <Route path="/services/international-catering" element={<InternationalCatering />} />
        <Route path="/services/private-celebrations" element={<PrivateCelebrations />} />
        <Route path="/services/temple-functions" element={<TempleFunctions />} />
        <Route path="/services/live-food-counters" element={<LiveFoodCounters />} />
        <Route path="/menu/:slug" element={<MenuDetail />} />
        <Route path="/request-quote" element={<RequestQuote />} />
      </Routes>
    </>
  );
}

export default App;