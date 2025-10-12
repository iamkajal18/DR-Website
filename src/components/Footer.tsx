import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-amber-100 border-t border-amber-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/image.png" alt="Ratna Homoeo Clinic" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="text-lg font-bold text-amber-500">Ratna Homoeo Clinic</h3>
                <p className="text-xs text-amber-200">Natural Healing</p>
              </div>
            </div>
            <p className="text-sm text-amber-200">
              Providing holistic homeopathic care with personalized treatment for over 15 years.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-amber-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-sm hover:text-amber-400 transition-colors">
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-amber-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-amber-400 transition-colors">
                  Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-amber-500 mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">+91 638 748 6751</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm break-all">kasaudhankajal51@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm">Ratna Homoeo Clinic, Medical District, India</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-amber-500 mb-4">Follow Us</h4>
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

        <div className="border-t border-amber-900 mt-8 pt-6 text-center">
          <p className="text-sm text-amber-200">
            &copy; {new Date().getFullYear()} Ratna Homoeo Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
