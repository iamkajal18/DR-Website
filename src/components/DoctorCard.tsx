// src/components/DoctorCard.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Doctor } from '../data/doctors';

interface DoctorCardProps {
  doctor: Doctor;
  compact?: boolean;
}

const DoctorCard = ({ doctor, compact = false }: DoctorCardProps) => {
  const whatsappLink = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(
    `Hello Dr. ${doctor.name}, I would like to consult with you.`
  )}`;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden">
      {/* FULL IMAGE – NO CROP, RESPONSIVE */}
      <div className="aspect-[3/4] bg-gradient-to-b from-gray-50 to-gray-100 p-4 flex items-center justify-center">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 text-center space-y-3">
        <h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-1">
          {doctor.name}
        </h3>
        <p className="text-amber-600 font-semibold text-sm">{doctor.specialization}</p>
        <p className="text-gray-600 text-xs">{doctor.qualifications}</p>
        <p className="text-gray-500 text-xs">
          {doctor.experience ? `${doctor.experience}` : 'Experienced Practitioner'}
        </p>

        {/* View Profile */}
        {!compact && (
          <Link
            to={`/doctor/${doctor.id}`}
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors"
          >
            View Profile
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-600 hover:text-green-700 font-medium text-sm transition-all duration-200 mt-2"
        >
          <MessageCircle size={16} className="mr-1 fill-current" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default DoctorCard;