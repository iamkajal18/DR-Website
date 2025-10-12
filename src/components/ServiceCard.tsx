import { Activity, Heart, User, Smile, Brain, Shield } from 'lucide-react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
}

const iconMap = {
  activity: Activity,
  heart: Heart,
  user: User,
  smile: Smile,
  brain: Brain,
  shield: Shield
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Activity;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <IconComponent size={32} className="text-amber-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 leading-relaxed">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
