import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Star, ArrowRight, CheckCircle, Heart, Shield, Users } from 'lucide-react';
import AppointmentModal from '../components/AppointmentModal';
import { doctors } from '../data/doctors';
import { services } from '../data/services';
import { products } from '../data/products';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const iconMap: { [key: string]: any } = {
    Activity: CheckCircle,
    Sparkles: Star,
    Heart: Heart,
    Baby: Users,
    Wind: Shield,
    Brain: Heart
  };

  const nextProduct = () => {
    setCurrentProductIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentProductIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Auto-rotate products
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const addToRefs = (el: any) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Floating Animation */}
      <section 
        ref={addToRefs}
        className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 lg:py-32 animate-fade-in"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Natural Healing for a{' '}
                <span className="text-amber-600 animate-pulse-slow">Healthier You</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up">
                Experience the power of homeopathy with expert care from our certified practitioners. We provide personalized, holistic treatments for chronic conditions, acute ailments, and overall wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 animate-bounce-gentle"
                >
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">Book Appointment</span>
                </button>
                <Link
                  to="/services"
                  className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-amber-600 transition-all transform hover:scale-105 hover:shadow-lg"
                >
                  <span className="font-medium">Our Services</span>
                  <ArrowRight className="h-5 w-5 animate-pulse" />
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12 animate-count-up">
                <div>
                  <div className="text-3xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">5000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-amber-600">4.9</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </div>
            <div className="relative animate-float">
              <img
                src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Homeopathic Medicine"
                className="rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-200 rounded-full opacity-20 animate-ping-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-200 rounded-full opacity-30 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Staggered Animation */}
      <section 
        ref={addToRefs}
        className="py-16 bg-white animate-fade-in-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-down">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Ratna Homoeo Clinic
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing compassionate, evidence-based homeopathic care that treats the whole person, not just the symptoms.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safe & Natural",
                description: "All our treatments use natural remedies with no side effects, safe for all ages."
              },
              {
                icon: Users,
                title: "Expert Doctors",
                description: "Our team of certified homeopaths brings years of experience and expertise."
              },
              {
                icon: Heart,
                title: "Holistic Care",
                description: "We treat the whole person - body, mind, and spirit - for lasting wellness."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="text-center p-6 animate-stagger-fade-in"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300 animate-bounce-very-gentle">
                  <item.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section with Card Flip Animation */}
      <section 
        ref={addToRefs}
        className="py-16 bg-gray-50 animate-fade-in"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-down">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Doctors
            </h2>
            <p className="text-lg text-gray-600">
              Experienced homeopathic practitioners dedicated to your health
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <div 
                key={doctor.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-stagger-fade-in group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-amber-600 text-sm font-medium mb-2">{doctor.qualifications}</p>
                  <p className="text-gray-600 text-sm mb-3">{doctor.specialization}</p>
                  <p className="text-gray-500 text-xs mb-4">{doctor.experience} Experience</p>
                  <Link
                    to={`/doctor/${doctor.id}`}
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm group/link"
                  >
                    View Profile
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Icon Animation */}
      <section 
        ref={addToRefs}
        className="py-16 bg-white animate-fade-in-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-down">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive homeopathic treatments for various health conditions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || CheckCircle;
              return (
                <div 
                  key={service.id} 
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-stagger-fade-in group"
                  style={{animationDelay: `${index * 0.15}s`}}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Icon className="h-6 w-6 text-amber-600 animate-pulse-gentle" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm group/link"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section with Slide Animation */}
      <section 
        ref={addToRefs}
        className="py-16 bg-gradient-to-br from-amber-50 to-orange-50 animate-fade-in"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-in-down">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600">
              Quality homeopathic medicines for your wellness
            </p>
          </div>
          <div className="relative">
            <div 
              key={currentProductIndex}
              className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto animate-slide-in-right"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative overflow-hidden">
                  <img
                    src={products[currentProductIndex].image}
                    alt={products[currentProductIndex].name}
                    className="w-full h-80 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full mb-4 w-fit animate-pulse-gentle">
                    {products[currentProductIndex].category}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {products[currentProductIndex].name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {products[currentProductIndex].description}
                  </p>
                  <Link
                    to="/products"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium group/link"
                  >
                    View All Products
                    <ArrowRight className="h-5 w-5 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={prevProduct}
                className="w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 flex items-center justify-center transform hover:scale-110 transition-transform animate-bounce-gentle"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <div className="flex space-x-2 items-center">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProductIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentProductIndex ? 'bg-amber-600 w-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextProduct}
                className="w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 flex items-center justify-center transform hover:scale-110 transition-transform animate-bounce-gentle"
                style={{animationDelay: '0.5s'}}
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Pulse Animation */}
      <section 
        ref={addToRefs}
        className="py-16 bg-white animate-fade-in-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl shadow-2xl overflow-hidden animate-pulse-very-gentle">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-slide-in-left">
                  Ready to Start Your Healing Journey?
                </h2>
                <p className="text-amber-50 mb-8 animate-fade-in-up">
                  Book your appointment today and experience natural healing with our expert homeopathic care.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg animate-bounce-gentle"
                >
                  Book Appointment Now
                </button>
              </div>
              <div className="hidden md:block relative">
                <img
                  src="https://images.pexels.com/photos/6823587/pexels-photo-6823587.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Book Appointment"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-600/30"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-down {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes bounce-very-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        @keyframes pulse-gentle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes pulse-very-gentle {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.01); }
        }
        @keyframes ping-slow {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes count-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes stagger-fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-slide-in-down { animation: slide-in-down 0.8s ease-out; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-bounce-very-gentle { animation: bounce-very-gentle 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
        .animate-pulse-very-gentle { animation: pulse-very-gentle 4s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-count-up { animation: count-up 1s ease-out; }
        .animate-stagger-fade-in { 
          opacity: 0;
          animation: stagger-fade-in 0.6s ease-out forwards;
        }
        .animate-in { animation: fade-in-up 0.6s ease-out forwards; }
      `}</style>
    </div>
  );
}