import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-black via-neutral-900 to-amber-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-amber-100 max-w-3xl mx-auto">
              Comprehensive homeopathic treatments for a wide range of acute and chronic
              health conditions using natural, safe, and effective remedies.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Homeopathy?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Natural & Safe</h3>
              <p className="text-gray-600">
                Made from natural substances with no harmful side effects
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Root Cause Treatment</h3>
              <p className="text-gray-600">
                Addresses the underlying cause, not just symptoms
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Personalized Care</h3>
              <p className="text-gray-600">
                Treatment tailored to your unique constitution
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">♻️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Long-lasting Results</h3>
              <p className="text-gray-600">
                Promotes lasting healing and prevents recurrence
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-black via-neutral-900 to-amber-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Experience Natural Healing?
            </h2>
            <p className="text-lg text-amber-100 mb-8">
              Book an appointment today and take the first step towards holistic wellness.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
