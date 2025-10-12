import { motion } from 'framer-motion';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';

const Doctors = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-black via-neutral-900 to-amber-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Expert Doctors</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-amber-100 max-w-3xl mx-auto">
              Meet our team of highly qualified and experienced homeopathic doctors
              dedicated to your health and wellness.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Doctors?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Highly Qualified</h3>
                <p className="text-gray-600">
                  All our doctors hold advanced degrees in homeopathy and are registered
                  practitioners with years of experience.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg">
                <div className="text-4xl mb-4">💚</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compassionate Care</h3>
                <p className="text-gray-600">
                  We believe in treating patients with empathy and understanding, creating
                  a supportive healing environment.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Evidence-Based</h3>
                <p className="text-gray-600">
                  Our treatments are based on classical homeopathic principles combined
                  with modern diagnostic methods.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Doctors;
