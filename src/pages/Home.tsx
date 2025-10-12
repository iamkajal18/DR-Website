import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Star, ArrowRight, CheckCircle, Heart, Shield, Users } from 'lucide-react';
import AppointmentModal from '../components/AppointmentModal';
import { doctors } from '../data/doctors';
import { services } from '../data/services';
import { products } from '../data/products';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

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

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Natural Healing for a{' '}
                <span className="text-amber-600">Healthier You</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the power of homeopathy with expert care from our certified practitioners. We provide personalized, holistic treatments for chronic conditions, acute ailments, and overall wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center space-x-2 bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">Book Appointment</span>
                </button>
                <Link
                  to="/services"
                  className="flex items-center justify-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg border-2 border-gray-200 hover:border-amber-600 transition-all"
                >
                  <span className="font-medium">Our Services</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
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
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Ratna Homoeo Clinic
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing compassionate, evidence-based homeopathic care that treats the whole person, not just the symptoms.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Natural</h3>
              <p className="text-gray-600">
                All our treatments use natural remedies with no side effects, safe for all ages.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                Our team of certified homeopaths brings years of experience and expertise.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                <Heart className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Holistic Care</h3>
              <p className="text-gray-600">
                We treat the whole person - body, mind, and spirit - for lasting wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Doctors
            </h2>
            <p className="text-lg text-gray-600">
              Experienced homeopathic practitioners dedicated to your health
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{doctor.name}</h3>
                  <p className="text-amber-600 text-sm font-medium mb-2">{doctor.qualification}</p>
                  <p className="text-gray-600 text-sm mb-3">{doctor.specialization}</p>
                  <p className="text-gray-500 text-xs mb-4">{doctor.experience} Experience</p>
                  <Link
                    to={`/doctor/${doctor.id}`}
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm"
                  >
                    View Profile
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
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
            {services.map((service) => {
              const Icon = iconMap[service.icon] || CheckCircle;
              return (
                <div key={service.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-lg mb-4">
                    <Icon className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg text-gray-600">
              Quality homeopathic medicines for your wellness
            </p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2">
                <img
                  src={products[currentProductIndex].image}
                  alt={products[currentProductIndex].name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-8 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-medium rounded-full mb-4 w-fit">
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
                    className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  >
                    View All Products
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <button
                onClick={prevProduct}
                className="w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 flex items-center justify-center"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button
                onClick={nextProduct}
                className="w-10 h-10 rounded-full bg-white shadow-md hover:bg-gray-50 flex items-center justify-center"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 items-center">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Healing Journey?
                </h2>
                <p className="text-amber-50 mb-8">
                  Book your appointment today and experience natural healing with our expert homeopathic care.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-amber-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Book Appointment Now
                </button>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://images.pexels.com/photos/6823587/pexels-photo-6823587.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Book Appointment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
