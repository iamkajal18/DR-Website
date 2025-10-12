import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Doctor } from '../data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
  compact?: boolean;
}

const DoctorCard = ({ doctor, compact = false }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{doctor.name}</h3>
        <p className="text-amber-600 font-medium mb-1">{doctor.specialization}</p>
        <p className="text-gray-600 text-sm mb-3">{doctor.qualifications}</p>
        <p className="text-gray-500 text-sm mb-4">Experience: {doctor.experience}</p>

        {!compact && (
          <Link
            to={`/doctor/${doctor.id}`}
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium transition-colors group"
          >
            View Profile
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
