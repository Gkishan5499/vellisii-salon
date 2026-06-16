import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Bridal from './pages/Bridal';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import Illumis from './pages/Illumis';
import Mansoon from './pages/Mansoon';
import VillisiiAcademy from './pages/Villisiiacademy';
import Terms from './pages/Terms';
import WhatsappWidget from './components/WhatsappWidget';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bridal" element={<Bridal />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="/illumis" element={<Illumis />} />
            <Route path="/monsoon" element={<Mansoon />} />
            <Route path="/academy" element={<VillisiiAcademy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <WhatsappWidget />
      </div>
    </Router>
  );
}
