import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Doctor } from '../data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
  compact?: boolean;
}

const DoctorCard = ({ doctor, compact = false }: DoctorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-[230px]">
      {/* Image Section */}
      <div className="relative bg-gray-100 flex justify-center items-center" style={{ height: '100px' }}>
        <img
          src={doctor.image}
          alt={doctor.name}
          className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">{doctor.name}</h3>
        <p className="text-amber-600 font-medium text-sm mb-1">{doctor.specialization}</p>
        <p className="text-gray-600 text-xs mb-2">{doctor.qualifications}</p>
        <p className="text-gray-500 text-xs mb-3">Experience: {doctor.experience}</p>

        {!compact && (
          <Link
            to={`/doctor/${doctor.id}`}
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors group"
          >
            View Profile
            <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default DoctorCard;
