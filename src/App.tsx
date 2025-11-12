import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import DoctorProfile from "./pages/DoctorProfile";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import { MessageCircle } from "lucide-react"; // ✅ Icon

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative">
        <Navbar />

        {/* ✅ WhatsApp Floating Icon */}
        <a
          href="https://wa.me/918317069697" // 👉 replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
        >
          <MessageCircle className="h-6 w-6" />
        </a>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
