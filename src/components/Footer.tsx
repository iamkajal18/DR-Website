import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-amber-100 border-t border-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ----- LOGO SECTION ----- */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 group flex-shrink-0 mb-4"
            >
              <div className="relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 p-1 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="bg-white rounded-full p-1 sm:p-1.5">
                  <img
                    src="/logo.png"
                    alt="Ratna Homoeo Clinic"
                    className="h-full w-full rounded-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {/* Animated Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 animate-pulse"></div>
              </div>

              <div className="flex flex-col">
                <h1 className="font-bold text-amber-500 text-lg sm:text-xl">
                  Ratna Homoeo Clinic
                </h1>
                <p className="text-xs sm:text-sm text-amber-300 font-medium tracking-wide">
                  Natural Healing, Holistic Care
                </p>
              </div>
            </Link>

            <p className="text-sm text-amber-200">
              Providing holistic homeopathic care with personalized treatment
              for over 15 years.
            </p>
          </div>

          {/* ----- QUICK LINKS ----- */}
          <div>
            <h4 className="text-lg font-semibold text-amber-500 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm hover:text-amber-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm hover:text-amber-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-sm hover:text-amber-400 transition-colors"
                >
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-sm hover:text-amber-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                
              </li>
            </ul>
          </div>

          {/* ----- CONTACT INFO ----- */}
          <div>
            <h4 className="text-lg font-semibold text-amber-500 mb-4">
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone
                  size={18}
                  className="text-amber-400 mt-1 flex-shrink-0"
                />
                <p className="text-sm">+91 6392587902</p>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <p className="text-sm break-all">drdevina161@gmail.com</p>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-amber-400 mt-1 flex-shrink-0"
                />
                <p className="text-sm">
                 address-8X8M+9W7, chitupur chandva, near current coaching classes, Chandua Chhittupur, Shivpurwa, Varanasi, Uttar Pradesh 221002
                </p>
              </li>
            </ul>
          </div>

          {/* ----- FOLLOW US ----- */}
          <div>
            <h4 className="text-lg font-semibold text-amber-500 mb-4">
              Follow Us
            </h4>
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-amber-900 p-2 rounded-full hover:bg-amber-500 hover:text-black transition-all"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-amber-900 p-2 rounded-full hover:bg-amber-500 hover:text-black transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-amber-900 p-2 rounded-full hover:bg-amber-500 hover:text-black transition-all"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
            <Link
              to="/privacy-policy"
              className="text-sm hover:text-amber-400 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* ----- COPYRIGHT SECTION ----- */}
        <div className="border-t border-amber-900 mt-8 pt-6 text-center">
        <p className="text-sm text-amber-200">
  &copy; {new Date().getFullYear()} <span className="font-semibold">Ratna Homoeo Clinic</span>. All rights reserved. 
  <span className="block sm:inline"> Designed & Developed by <span className="font-medium text-white hover:text-amber-300 transition-colors">Shubham Infotech</span>.</span>
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
