import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Briefcase, GraduationCap } from 'lucide-react';
import { doctors } from '../data/doctors';

const DoctorProfile = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor not found</h2>
          <Link to="/doctors" className="text-amber-600 hover:text-amber-700">
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-black via-neutral-900 to-amber-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/doctors"
            className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Doctors
          </Link>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-96 object-cover"
                />
                <div className="p-6 text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h2>
                  <p className="text-amber-600 font-semibold mb-1">{doctor.specialization}</p>
                  <p className="text-gray-600">{doctor.qualifications}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <h1 className="text-4xl font-bold mb-6">{doctor.name}</h1>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <GraduationCap size={24} className="text-amber-400 mr-3" />
                  <h3 className="text-xl font-semibold">Qualifications</h3>
                </div>
                <p className="text-amber-100">{doctor.qualifications}</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Briefcase size={24} className="text-amber-400 mr-3" />
                  <h3 className="text-xl font-semibold">Experience</h3>
                </div>
                <p className="text-amber-100">{doctor.experience} of professional practice</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6">
                <div className="flex items-center mb-4">
                  <Award size={24} className="text-amber-400 mr-3" />
                  <h3 className="text-xl font-semibold">Achievements & Expertise</h3>
                </div>
                <ul className="space-y-2">
                  {doctor.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-400 mr-2">•</span>
                      <span className="text-amber-100">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Note</h3>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              "{doctor.personalNote}"
            </p>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-700 font-semibold">- {doctor.name}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DoctorProfile;
