import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./ScrollToTop"; // <-- import the component

// Pages
import HomePage from "./pages/Home";
import AboutUsPage from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import InvestorPage from "./pages/InvestorsPage";
import BookingPage from "./pages/BookingPage";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/investors" element={<InvestorPage />} />
        <Route path="/booking" element={<BookingPage />} />
        {/* 404 fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />



    </Router>
  );
}

export default App;