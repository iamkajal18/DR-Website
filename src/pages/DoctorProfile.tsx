// src/pages/DoctorProfile.tsx
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Award, Briefcase, GraduationCap } from 'lucide-react';
import { doctors } from '../data/doctors';

const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const doctor = doctors.find((d) => d.id === id);

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Doctor not found</h2>
          <Link to="/doctors" className="text-amber-600 hover:text-amber-700 font-medium">
            Back to Doctors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-neutral-900 to-amber-950 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/doctors"
            className="inline-flex items-center text-amber-400 hover:text-amber-300 mb-8 text-sm font-medium transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Doctors
          </Link>

          <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 items-start">
            {/* LEFT: Photo + Name */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                {/* Square container – keeps layout, shows whole image */}
                <div className="aspect-square bg-gray-100 relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="absolute inset-0 w-full h-full object-contain p-4"
                  />
                </div>

                <div className="p-6 text-center bg-white">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">{doctor.name}</h2>
                  <p className="text-amber-600 font-semibold text-lg">{doctor.specialization}</p>
                  <p className="text-gray-600 text-sm mt-1">{doctor.qualifications}</p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Details */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-6"
            >
              <h1 className="text-3xl lg:text-4xl font-bold text-white">{doctor.name}</h1>

              {/* Qualifications */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <GraduationCap size={24} className="text-amber-400 mr-3" />
                  <h3 className="text-xl font-semibold">Qualifications</h3>
                </div>
                <p className="text-amber-100">{doctor.qualifications}</p>
              </div>

              {/* Experience */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Briefcase size={24} className="text-amber-400 mr-3" />
                  <h3 className="text-xl font-semibold">Experience</h3>
                </div>
                <p className="text-amber-100">
                  {doctor.experience
                    ? `${doctor.experience} of professional practice`
                    : 'Experience not specified'}
                </p>
              </div>

              {/* Achievements */}
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6">
                <div className="flex items-center mb-3">
                  <Award size={24} className="text-amber-400 mr-3" />
                  <h3 className="text-xl font-semibold">Achievements & Expertise</h3>
                </div>
                <ul className="space-y-2 mt-2">
                  {doctor.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start text-amber-100">
                      <span className="text-amber-400 mr-2">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorProfile;