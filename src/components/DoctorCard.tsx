// src/components/DoctorCard.tsx
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';
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
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20 hover:border-amber-200/50 transform hover:-translate-y-3 hover:scale-[1.02]">
      
      {/* Floating Badge (Top Right) */}
      <div className="absolute top-3 right-3 z-10">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
          <Star size={12} className="fill-white" />
          <span>Expert</span>
        </div>
      </div>

      {/* Doctor Image with Parallax Effect */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 p-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
          loading="lazy"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4 text-center">
        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900 tracking-tight line-clamp-1">
          {doctor.name}
        </h3>

        {/* Specialization – Animated Gradient */}
        <div className="relative inline-block">
          <p className="text-sm font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-pulse">
            {doctor.specialization}
          </p>
          <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-orange-200 blur-lg opacity-30 group-hover:opacity-60 transition-opacity"></div>
        </div>

        {/* Qualifications */}
        <p className="text-xs text-gray-600 font-medium">{doctor.qualifications}</p>

        {/* Experience */}
        <p className="text-xs text-gray-500 italic">
          {doctor.experience || 'Experienced Homeopath'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-2">
          
          {/* View Profile */}
          {!compact && (
            <Link
              to={`/doctor/${doctor.id}`}
              className="inline-flex items-center justify-center gap-2 text-amber-700 hover:text-amber-800 font-semibold text-sm transition-all duration-300 group/link"
            >
              <span>View Full Profile</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/link:translate-x-1"
              />
            </Link>
          )}

          {/* WhatsApp – Vibrant Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold text-sm px-4 py-2.5 rounded-full hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            <MessageCircle size={16} className="fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
    </div>
  );
};

export default DoctorCard;