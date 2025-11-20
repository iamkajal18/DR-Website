import { useState, useEffect, useRef } from 'react';
import { Calendar, Star, ArrowRight, CheckCircle, Heart, Shield, Users, MessageCircle ,Phone} from 'lucide-react';
import { Link } from 'react-router-dom';
// Mock Data
const doctors = [
  {
    id: 1,
    name: "Dr. Shyam Ji Srivastav",
    qualifications: "Medical Officer-in-Charge (Retired) Provincial Homeopathic Medical Services , UP ",
    specialization: "Expert in Homeopathy",
    experience: "43+ Years",
    whatsapp: "918317069697",
    image: "/images/Ratna_papa.jpeg"
  },
  {
    id: 2,
    name: "Dr. Devina Vachaspati",
    qualifications: "BSC, BHMS",
    specialization: "Gynaecologist Homeopathy",
    experience: "2+ Years",
    whatsapp: "916392587902",
    image: "/images/Ratna.jpeg"
  }
];

const services = [
  { 
    id: 1, 
    icon: 'Activity', 
    title: 'Kidney Stones', 
    description: 'Non-surgical removal of kidney stones using expert in homeopathy. Safe, painless, and permanent cure without operation.' 
  },
  { 
    id: 2, 
    icon: 'Zap', 
    title: 'Gall Bladder Stones', 
    description: 'Natural dissolution of gallstones. Avoid surgery with deep-acting constitutional remedies.' 
  },
  { 
    id: 3, 
    icon: 'Heart', 
    title: 'Skin Diseases', 
    description: 'Complete cure for psoriasis, eczema, acne, warts, leucoderma, fungal infections, and allergic dermatitis.' 
  },
  { 
    id: 4, 
    icon: 'User', 
    title: 'Gynecology (Women’s Health)', 
    description: 'Expert care by Dr. Devina Vachaspati for PCOS, PCOD, irregular periods, leucorrhoea, fibroids, infertility, and menopause.' 
  },
];

// AppointmentModal Component
function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    doctor: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleWhatsAppSubmit = (e:any) => {
    e.preventDefault();
    
    // WhatsApp message
    const whatsappNumber = '918317069697'; 
    const message = `*New Appointment Request*%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0ADate: ${formData.date}%0ADoctor: ${formData.doctor}%0AMessage: ${formData.message || 'N/A'}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      doctor: '',
      message: ''
    });
    onClose();
  };

const handleEmailSubmit = async (e:any) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.doctor) {
      alert(' Please fill in all required fields');
      return;
    }
    
    // Email details
    const emailTo = 'shyamji111@gmail.com';
    const emailSubject = 'New Appointment Request - Ratna Homoeo Clinic';
    const emailBody = `
New Appointment Request

Patient Details:
================
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Preferred Date: ${formData.date}
Doctor: ${formData.doctor}

Message:
${formData.message || 'No additional message'}

This appointment request was submitted through the Ratna Homoeo Clinic website.
    `.trim();
    
    // Method 1: Try Gmail compose URL (works better on web)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailTo}&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open Gmail in new tab
    const newWindow = window.open(gmailUrl, '_blank');
    
    if (newWindow) {
      alert('✅ Email form opened in Gmail! Please send the email to complete your appointment request.');
      
      // Reset form and close modal
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        doctor: '',
        message: ''
      });
      onClose();
    } else {
      // Fallback: Try mailto link
      const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          doctor: '',
          message: ''
        });
        onClose();
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-md w-full p-8 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">Book Appointment</h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
          >
            &times;
          </button>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              placeholder="+91 98765 43210"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Preferred Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Doctor <span className="text-red-500">*</span>
            </label>
            <select
              required
              value={formData.doctor}
              onChange={(e) => setFormData({...formData, doctor: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            >
              <option value="">Choose a doctor</option>
              <option value="Dr. Ratan Kumar">Dr. Shyam Ji Srivastav</option>
              <option value="Dr. Priya Sharma">Dr. Devina Vachaspati</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message (Optional)
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="4"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Tell us about your health concern..."
            />
          </div>

          {/* Dual Buttons - WhatsApp & Email */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleWhatsAppSubmit}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Book via WhatsApp
            </button>

            <button
              type="button"
              onClick={handleEmailSubmit}
              className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Book via Email
            </button>

           <a
    href="tel:+916392587902"
    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 inline-block text-center no-underline"
  >
    <Phone size={20} />
    Call Now: +91 63925 87902
  </a>
          </div>

          <p className="text-xs text-gray-500 text-center mt-3">
            Choose your preferred booking method
          </p>
        </form>
      </div>
    </div>
  );
}

// Testimonials Component
function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "Dr. Ratan cured my chronic back pain. Excellent treatment!",
      rating: 5
    },
    {
      name: "Priya Singh",
      text: "Best homeopathy clinic in the city. Highly recommend!",
      rating: 5
    },
    {
      name: "Amit Sharma",
      text: "Professional staff and effective treatments. Very satisfied.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">Real experiences from our happy patients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-amber-500" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-900">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Main Home Component
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 4);

  const sectionRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

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

  const iconMap = {
    Activity: CheckCircle,
    Sparkles: Star,
    Heart,
    Baby: Users,
    Wind: Shield,
    Brain: Heart,
  };

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 lg:py-32">
        <div ref={addToRefs} className="animate-fade-in relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Natural Healing for a{' '}
                  <span className="text-amber-600">Healthier You</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Experience the power of homeopathy with expert care from our certified
                  practitioners. We provide personalized, holistic treatments for chronic
                  conditions, acute ailments, and overall wellness.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Calendar className="h-5 w-5" />
                    <span className="font-medium">Book Appointment</span>
                  </button>

                  <a
                    href="/services"
                    className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-amber-600 transition-all transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="font-medium">Our Services</span>
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-12">
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

              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Homeopathic Medicine"
                  className="rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-white">
        <div ref={addToRefs} className="animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
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
                  description: 'All our treatments use natural remedies with no side effects, safe for all ages.',
                },
                {
                  icon: Users,
                  title: 'Expert Doctors',
                  description: 'Our team of certified homeopaths brings years of experience and expertise.',
                },
                {
                  icon: Heart,
                  title: 'Holistic Care',
                  description: 'We treat the whole person - body, mind, and spirit - for lasting wellness.',
                },
              ].map((item, i) => (
                <div key={i} className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4 transform hover:scale-110 transition-transform duration-300">
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

      {/* DOCTORS SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div ref={addToRefs} className="animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
                Meet Our Expert Doctors
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experienced homeopathic practitioners dedicated to your health and well-being
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
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col md:flex-row items-center overflow-hidden group ${
                      i % 2 === 1 ? 'md:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="w-full md:w-1/2 h-[380px] md:h-[420px] relative flex-shrink-0">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-full object-contain object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </div>

                    <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-center text-left space-y-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                          {doctor.name}
                        </h3>
                        <p className="text-amber-600 text-sm font-semibold mt-1">
                          {doctor.qualifications}
                        </p>
                        <p className="text-gray-700 text-lg mt-2">{doctor.specialization}</p>
                        {doctor.experience && (
                          <p className="text-gray-500 text-sm">{doctor.experience} Experience</p>
                        )}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2 items-start sm:items-center">
                       <Link
  to={`/doctor/${doctor.id}`}
  className="inline-flex items-center justify-center gap-2 text-amber-700 hover:text-amber-800 font-semibold text-sm transition-all duration-300 group/link"
  onClick={(e) => e.stopPropagation()}
>
  <span>View Full Profile</span>
  <ArrowRight
    size={16}
    className="transition-transform duration-300 group-hover/link:translate-x-1"
  />
</Link>
                        <a
                          href={whatsappLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2.5 px-6 rounded-full transition-all shadow-md hover:shadow-lg text-sm transform hover:scale-105"
                          onMouseDown={(e) => e.stopPropagation()}
                        >
                          <MessageCircle size={18} />
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

      {/* GALLERY SECTION */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div ref={addToRefs} className="animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4">
                Clinic Gallery
              </h2>
              <p className="text-base sm:text-lg text-gray-600 px-4">
                Take a glimpse of our healing environment and patient care
              </p>
            </div>

            <div className="relative group">
              <div
                id="gallery-scroll-container"
                className="overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory lg:snap-none -mx-4 sm:mx-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 px-4 sm:px-2 lg:px-0">
                  {[
                    '/images/Ratna1.jpeg',
                    '/images/Ratna2.jpeg',
                    '/images/Ratna3.jpeg',
                    '/images/Ratna4.jpeg',
                  ].map((src, i) => (
                    <div key={i} className="h-[200px] sm:h-[220px] md:h-[260px] lg:h-[280px]">
                      <div className="relative group/item overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                        <img
                          src={src}
                          alt={`Clinic gallery ${i + 1}`}
                          className="w-full h-full object-cover transform group-hover/item:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 flex items-end p-3 sm:p-4">
                          <p className="text-white text-sm font-semibold">
                            Healing Space #{i + 1}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  const container = document.getElementById('gallery-scroll-container');
                  if (container) {
                    container.scrollBy({ left: -300, behavior: 'smooth' });
                  }
                }}
                className="lg:hidden absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-amber-50 hover:scale-110 z-10"
                aria-label="Scroll left"
              >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600 rotate-180" />
              </button>

              <button
                onClick={() => {
                  const container = document.getElementById('gallery-scroll-container');
                  if (container) {
                    container.scrollBy({ left: 300, behavior: 'smooth' });
                  }
                }}
                className="lg:hidden absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-amber-50 hover:scale-110 z-10"
                aria-label="Scroll right"
              >
                <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-amber-600" />
              </button>
            </div>

            <div className="flex lg:hidden justify-center mt-4 gap-1.5">
              {[0, 1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className={`w-2 h-2 rounded-full ${dot === 0 ? 'bg-amber-600' : 'bg-gray-300'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 bg-white">
        <div ref={addToRefs} className="animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
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
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                      <Icon className="h-6 w-6 text-amber-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mb-20 text-center sm:mt-7">
         <Link
  to="/services"
  className="inline-flex items-center justify-center space-x-2 bg-white text-gray-900 px-4 py-2 rounded-full border border-gray-200 hover:border-amber-600 hover:text-amber-700 transition-all transform hover:scale-105 hover:shadow-md text-sm font-medium"
  onClick={(e) => e.stopPropagation()}
>
  <span>Show More</span>
  <ArrowRight className="h-4 w-4" />
</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* CTA SECTION */}
      <section className="py-16 bg-white">
        <div ref={addToRefs} className="animate-fade-in-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 lg:p-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    Ready to Start Your Healing Journey?
                  </h2>
                  <p className="text-amber-50 mb-8">
                    Book your appointment today and experience natural healing with our
                    expert homeopathic care.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
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

      {/* APPOINTMENT MODAL */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* GLOBAL STYLES */}
      <style>{`
        @keyframes fade-in { from { opacity:0; } to { opacity:1; } }
        @keyframes fade-in-up { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slide-in-left { from { opacity:0; transform:translateX(-50px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slide-in-down { from { opacity:0; transform:translateY(-50px); } to { opacity:1; transform:translateY(0); } }

        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-fade-in-up { animation: fade-in-up .8s ease-out; }
        .animate-slide-in-left { animation: slide-in-left .8s ease-out; }
        .animate-slide-in-down { animation: slide-in-down .8s ease-out; }
        .animate-in { animation: fade-in-up .6s ease-out forwards; }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}