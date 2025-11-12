/* src/pages/Home.tsx */
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Star,
  ArrowRight,
  CheckCircle,
  Heart,
  Shield,
  Users,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

import AppointmentModal from '../components/AppointmentModal';
import { doctors } from '../data/doctors';
import { services } from '../data/services';
import Testimonials from './Testimonials';

export default function Home() {
  /* ---------- State ---------- */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 4);

  /* ---------- IntersectionObserver refs ---------- */
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  /* ---------- Scroll animation observer ---------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      sectionRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  /* ---------- Icon map ---------- */
  const iconMap: Record<string, any> = {
    Activity: CheckCircle,
    Sparkles: Star,
    Heart,
    Baby: Users,
    Wind: Shield,
    Brain: Heart,
  };

  /* ---------- Render ---------- */
  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* ---------- WhatsApp floating button ---------- */}
      <a
        href="https://wa.me/918317069697"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        title="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.551 4.15 1.594 5.95L0 24l6.27-1.63A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.002 21.5a9.45 9.45 0 0 1-4.82-1.34l-.34-.2-3.73.97.99-3.64-.22-.37A9.45 9.45 0 0 1 2.55 12C2.55 7.305 6.305 3.55 11 3.55S19.45 7.305 19.45 12s-3.755 8.45-8.448 8.45zm4.875-6.96c-.267-.134-1.584-.783-1.83-.871-.246-.089-.426-.133-.605.134-.178.267-.695.871-.852 1.05-.156.178-.312.2-.578.067-.267-.134-1.126-.415-2.146-1.325-.793-.707-1.33-1.58-1.486-1.846-.156-.267-.017-.412.118-.546.122-.121.267-.312.4-.467.134-.156.178-.267.267-.445.089-.178.045-.334-.022-.467-.066-.134-.604-1.46-.828-2.003-.218-.524-.439-.453-.605-.462l-.517-.009c-.178 0-.467.067-.712.334-.246.267-.935.914-.935 2.23 0 1.316.958 2.588 1.09 2.765.133.178 1.887 2.882 4.574 4.04.64.276 1.14.441 1.529.564.642.204 1.227.175 1.69.106.516-.077 1.584-.647 1.808-1.272.223-.625.223-1.16.156-1.272-.067-.112-.245-.178-.512-.312z" />
        </svg>
      </a>

      {/* ---------- HERO ---------- */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 lg:py-32 overflow-hidden">
        <div ref={addToRefs} className="animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Natural Healing for a{' '}
                  <span className="text-amber-600 animate-pulse-slow">Healthier You</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up">
                  Experience the power of homeopathy with expert care from our certified
                  practitioners. We provide personalized, holistic treatments for chronic
                  conditions, acute ailments, and overall wellness.
                </p>

                <div
                  className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                  style={{ animationDelay: '0.2s' }}
                >
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
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <section className="py-16 bg-white">
        <div ref={addToRefs} className="animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-slide-in-down">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                About Ratna Homoeo Clinic
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We are committed to providing compassionate, evidence-based homeopathic
                care that treats the whole person, not just the symptoms.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Safe & Natural',
                  description:
                    'All our treatments use natural remedies with no side effects, safe for all ages.',
                },
                {
                  icon: Users,
                  title: 'Expert Doctors',
                  description:
                    'Our team of certified homeopaths brings years of experience and expertise.',
                },
                {
                  icon: Heart,
                  title: 'Holistic Care',
                  description:
                    'We treat the whole person - body, mind, and spirit - for lasting wellness.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 animate-stagger-fade-in"
                  style={{ animationDelay: `${i * 0.2}s` }}
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
        </div>
      </section>

      {/* ---------- DOCTORS ---------- */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div ref={addToRefs} className="animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-slide-in-down">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Meet Our Expert Doctors
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced homeopathic practitioners dedicated to your health and
                well-being
              </p>
            </div>

            <div className="flex flex-col gap-12">
              {doctors.map((doctor, i) => {
                const whatsappLink = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(
                  `Hello Dr. ${doctor.name}, I would like to consult with you.`
                )}`;

                return (
                  <div
                    key={doctor.id}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex items-center overflow-hidden group ${
                      i % 2 === 1 ? 'flex-row-reverse' : ''
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="w-1/2 h-[380px] md:h-[420px] relative flex-shrink-0">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>

                    <div className="w-1/2 p-6 sm:p-8 flex flex-col justify-center text-left space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {doctor.name}
                      </h3>
                      <p className="text-amber-600 text-sm font-semibold">
                        {doctor.qualifications}
                      </p>
                      <p className="text-gray-700 text-lg">{doctor.specialization}</p>
                      {doctor.experience && (
                        <p className="text-gray-500 text-sm">{doctor.experience} Experience</p>
                      )}

                      <div className="flex flex-col gap-3 pt-2">
                        <Link
                          to={`/doctor/${doctor.id}`}
                          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-base transition-all group/link"
                        >
                          View Profile
                          <ArrowRight className="h-5 w-5 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                        </Link>

                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-base transition-all group/link"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="mr-2"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 5.44h-.004c-1.575-.05-3.115-.84-4.465-2.436l-.28-.178-.896.232c-.48.124-1.026.198-1.595.198-1.758 0-3.307-1.049-3.997-2.678-.693-1.63-.63-3.515.18-5.098l.23-.27.88.23c.58.15 1.11.28 1.6.28.49 0 .98-.13 1.42-.38l.28-.17c1.35-1.59 3.89-2.43 6.32-2.43 1.74 0 3.39.68 4.62 1.91 1.23 1.23 1.91 2.88 1.91 4.62 0 1.74-.68 3.39-1.91 4.62-1.23 1.23-2.88 1.91-4.62 1.91m6.98-16.79c-1.48-1.48-3.46-2.3-5.56-2.3-4.34 0-7.88 3.54-7.88 7.88 0 1.39.36 2.74 1.05 3.95l-1.11 4.06 4.17-1.09c1.17.64 2.49.99 3.83.99 4.34 0 7.88-3.54 7.88-7.88 0-2.1-.82-4.08-2.3-5.56"/>
                          </svg>
                          Chat on WhatsApp
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- GALLERY (horizontal scroll) ---------- */}
      <section className="py-16 bg-white">
        <div ref={addToRefs} className="animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-slide-in-down">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Clinic Gallery
              </h2>
              <p className="text-lg text-gray-600">
                Take a glimpse of our healing environment and patient care
              </p>
            </div>

            <div className="relative group">
              <div
                className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="flex gap-6 px-2 py-4">
                  {[
                    '/images/Ratna1.jpeg',
                    '/images/Ratna2.jpeg',
                    '/images/Ratna3.jpeg',
                    '/images/Ratna4.jpeg',
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="flex-none w-80 h-60 snap-center animate-stagger-fade-in"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                        <img
                          src={src}
                          alt={`Clinic gallery ${i + 1}`}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                          <p className="text-white text-sm font-semibold">
                            Healing Space #{i + 1}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* scroll arrows */}
              <button
                onClick={() => {
                  const c = document.querySelector('.overflow-x-auto');
                  c?.scrollBy({ left: -320, behavior: 'smooth' });
                }}
                className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-50 hover:scale-110"
              >
                <ArrowRight className="h-6 w-6 text-amber-600 rotate-180" />
              </button>

              <button
                onClick={() => {
                  const c = document.querySelector('.overflow-x-auto');
                  c?.scrollBy({ left: 320, behavior: 'smooth' });
                }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-amber-50 hover:scale-110"
              >
                <ArrowRight className="h-6 w-6 text-amber-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES (4 cards + Show More) ---------- */}
      <section className="py-16 bg-white">
        <div ref={addToRefs} className="animate-fade-in-up">
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
              {visibleServices.map((service, i) => {
                const Icon = iconMap[service.icon] || CheckCircle;
                return (
                  <div
                    key={service.id}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-stagger-fade-in group"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="h-6 w-6 text-amber-600 animate-pulse-gentle" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {/* Optional “Learn more” link inside each card */}
                    <Link
                      to="/services"
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm group/link"
                    >
                      Learn more{' '}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                );
              })}
            </div>

            {services.length > 4 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                >
                  {showAll ? (
                    <>
                      Show Less{' '}
                      <ChevronUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                    </>
                  ) : (
                    <>
                      Show More{' '}
                      <ChevronDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <Testimonials />

      {/* ---------- CTA ---------- */}
      <section className="py-16 bg-white">
        <div ref={addToRefs} className="animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl shadow-2xl overflow-hidden animate-pulse-very-gentle">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 animate-slide-in-left">
                    Ready to Start Your Healing Journey?
                  </h2>
                  <p className="text-amber-50 mb-8 animate-fade-in-up">
                    Book your appointment today and experience natural healing with our
                    expert homeopathic care.
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
        </div>
      </section>

      {/* ---------- MODAL ---------- */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ---------- GLOBAL KEYFRAMES (Tailwind compatible) ---------- */}
      <style>{`
        @keyframes fade-in { from { opacity:0; } to { opacity:1; } }
        @keyframes fade-in-up { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slide-in-left { from { opacity:0; transform:translateX(-50px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slide-in-right { from { opacity:0; transform:translateX(50px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slide-in-down { from { opacity:0; transform:translateY(-50px); } to { opacity:1; transform:translateY(0); } }
        @keyframes float { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-20px); } }
        @keyframes bounce-gentle { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-5px); } }
        @keyframes bounce-very-gentle { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-2px); } }
        @keyframes pulse-slow { 0%,100% { opacity:1; } 50% { opacity:.8; } }
        @keyframes pulse-gentle { 0%,100% { transform:scale(1); } 50% { transform:scale(1.05); } }
        @keyframes pulse-very-gentle { 0%,100% { transform:scale(1); } 50% { transform:scale(1.01); } }
        @keyframes ping-slow { 75%,100% { transform:scale(2); opacity:0; } }
        @keyframes count-up { from { transform:translateY(20px); opacity:0; } to { transform:translateY(0); opacity:1; } }
        @keyframes stagger-fade-in { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }

        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up .8s ease-out; }
        .animate-slide-in-left { animation: slide-in-left .8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right .8s ease-out; }
        .animate-slide-in-down { animation: slide-in-down .8s ease-out; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-bounce-very-gentle { animation: bounce-very-gentle 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-pulse-gentle { animation: pulse-gentle 2s ease-in-out infinite; }
        .animate-pulse-very-gentle { animation: pulse-very-gentle 4s ease-in-out infinite; }
        .animate-ping-slow { animation: ping-slow 3s cubic-bezier(0,0,.2,1) infinite; }
        .animate-count-up { animation: count-up 1s ease-out; }
        .animate-stagger-fade-in { opacity:0; animation: stagger-fade-in .6s ease-out forwards; }
        .animate-in { animation: fade-in-up .6s ease-out forwards; }
      `}</style>
    </div>
  );
}