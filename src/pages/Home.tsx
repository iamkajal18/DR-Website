import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AppointmentModal from '../components/AppointmentModal';
import DoctorCard from '../components/DoctorCard';
import ServiceCard from '../components/ServiceCard';
import { doctors } from '../data/doctors';
import { services } from '../data/services';
import { products } from '../data/products';
import { testimonials } from '../data/testimonials';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-black via-neutral-900 to-amber-950 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMTIgMzZjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPjwvZz48L3N2Zz4=')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Natural Healing for a{' '}
                <span className="text-amber-400">Healthier You</span>
              </h1>
              <p className="text-lg lg:text-xl text-amber-100 mb-8 leading-relaxed">
                Experience personalized homeopathic care with our team of expert doctors.
                We treat the root cause, not just the symptoms.
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 shadow-xl flex items-center space-x-3"
              >
                <Calendar size={24} />
                <span>Book Appointment</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Homeopathic Treatment"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-amber-500 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Ratna Homoeo Clinic
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over 15 years of experience in homeopathic medicine, we provide natural,
              safe, and effective treatments for acute and chronic conditions. Our holistic
              approach focuses on treating the individual, not just the disease.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Doctors
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <DoctorCard doctor={doctor} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/doctors"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105"
            >
              View All Doctors
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <span className="text-xs font-semibold text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Patients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 h-full shadow-lg">
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">{testimonial.text}</p>
                  <div className="border-t border-amber-200 pt-4">
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-amber-600">{testimonial.condition}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Home;
