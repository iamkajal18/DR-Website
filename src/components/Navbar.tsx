import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Star } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  type NavLink = {
    name: string;
    path: string;
    dropdown?: { name: string; path: string }[];
  };

  const navLinks: NavLink[] = [
    { name: 'Home', path: '/' },
    { 
      name: 'Services',  
      path: '/services',
     
    },
    { name: 'Doctors', path: '/doctors' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleMobileDropdown = (linkName: string) => {
    setMobileDropdown(mobileDropdown === linkName ? null : linkName);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-amber-100' 
        : 'bg-gradient-to-r from-white to-amber-50/30 shadow-md'
    }`}>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-2">
            <Star className="h-3 w-3 fill-current" />
            <span>Trusted Homeopathic Care Since 2010</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Mon-Sat: 9AM-7PM</span>
            <span>|</span>
            <span>Emergency: 24/7 Available</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center gap-4 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="relative flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 p-1 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <div className="bg-white rounded-full p-1.5">
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
              <h1 className={`font-bold text-gray-900 transition-all duration-300 ${
                scrolled ? 'text-xl' : 'text-2xl'
              }`}>
                Ratna Homoeo Clinic
              </h1>
              <p className="text-sm text-amber-600 font-medium tracking-wide">
                Natural Healing, Holistic Care
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div 
                key={link.path}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-amber-600 bg-amber-50 shadow-inner'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.dropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      activeDropdown === link.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {/* Dropdown Menu - Opens on Hover */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-amber-100 py-2 z-50 animate-in fade-in-0 zoom-in-95">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        className="block px-4 py-3 text-sm text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200 border-l-2 border-transparent hover:border-amber-400 mx-2 rounded-lg"
                        onMouseEnter={() => setActiveDropdown(link.name)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Call to Action Button - Smaller Size */}
            <div className="ml-4 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <a
                href="tel:+916387486751"
                className="relative flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm"
              >
                <Phone className="h-3 w-3" />
                <span className="font-semibold">Call Now</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-amber-50 transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen 
          ? 'max-h-96 opacity-100 bg-white/95 backdrop-blur-md border-t border-amber-100' 
          : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.path}>
              <div className="flex items-center justify-between">
                <Link
                  to={link.path}
                  onClick={() => !link.dropdown && setIsOpen(false)}
                  className={`flex-1 py-3 px-4 rounded-xl transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-amber-50 text-amber-600 shadow-inner'
                      : 'text-gray-700 hover:bg-amber-50/50'
                  }`}
                >
                  <span className="font-medium">{link.name}</span>
                </Link>
                {link.dropdown && (
                  <button
                    onClick={() => toggleMobileDropdown(link.name)}
                    className="p-3 rounded-lg hover:bg-amber-50 transition-colors duration-200"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                      mobileDropdown === link.name ? 'rotate-180' : ''
                    }`} />
                  </button>
                )}
              </div>
              
              {/* Mobile Dropdown - Opens on Click */}
              {link.dropdown && mobileDropdown === link.name && (
                <div className="ml-6 space-y-1 mt-1 bg-amber-50/50 rounded-lg p-2">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* Mobile Call Button - Smaller Size */}
          <a
            href="tel:+916387486751"
            className="flex items-center justify-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg shadow-lg mt-4 hover:shadow-xl transition-all duration-300 text-sm"
            onClick={() => setIsOpen(false)}
          >
            <Phone className="h-3 w-3" />
            <span className="font-semibold">Emergency Call</span>
          </a>
        </div>
      </div>
    </nav>
  );
}