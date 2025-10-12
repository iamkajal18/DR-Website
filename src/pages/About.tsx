import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every patient is unique and deserves personalized treatment tailored to their specific needs.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in homeopathic practice and continuous improvement.'
    },
    {
      icon: Users,
      title: 'Holistic Approach',
      description: 'We treat the whole person - mind, body, and spirit - not just the symptoms.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '10,000+', label: 'Patients Treated' },
    { number: '4', label: 'Expert Doctors' },
    { number: '98%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-black via-neutral-900 to-amber-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Us</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Clinic Interior"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Welcome to Ratna Homoeo Clinic
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded over 15 years ago, Ratna Homoeo Clinic has been a beacon of natural
                healing and holistic healthcare in our community. We believe in the power of
                homeopathy to treat the root cause of illness, not just mask the symptoms.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our team of experienced and dedicated homeopathic doctors brings together
                decades of combined expertise in treating a wide range of acute and chronic
                conditions. We take pride in our patient-centered approach, where every
                individual receives personalized care tailored to their unique constitution.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Ratna Homoeo Clinic, we combine classical homeopathic principles with
                modern diagnostic tools to provide the best possible outcomes for our patients.
                Your health and wellness are our top priorities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target size={32} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide safe, effective, and natural homeopathic treatments that address
                the root cause of illness. We are committed to improving the health and
                quality of life of our patients through personalized care, compassionate
                service, and evidence-based homeopathic medicine.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Eye size={32} className="text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be recognized as a leading homeopathic clinic that sets the standard for
                excellence in natural healthcare. We envision a world where homeopathy is
                widely accepted as a first-line treatment option, and where every individual
                has access to safe, gentle, and effective healing.
              </p>
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
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon size={36} className="text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-black via-neutral-900 to-amber-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-amber-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-amber-100 text-sm lg:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
