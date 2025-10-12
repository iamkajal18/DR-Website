export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  qualifications: string;
  experience: string;
  achievements: string[];
  image: string;
  personalNote: string;
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Ratna Sharma',
    specialization: 'Classical Homeopathy',
    qualifications: 'BHMS, MD (Hom)',
    experience: '15+ Years',
    achievements: [
      'Specialized in chronic disease management',
      'Treated over 5000+ patients successfully',
      'Expert in constitutional homeopathy',
      'Regular speaker at homeopathic conferences'
    ],
    image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400',
    personalNote: 'I believe in treating the person as a whole, not just the disease. Every patient is unique and deserves personalized care and attention.'
  },
  {
    id: '2',
    name: 'Dr. Anjali Verma',
    specialization: 'Pediatric Homeopathy',
    qualifications: 'BHMS, CCH',
    experience: '10+ Years',
    achievements: [
      'Specialist in child healthcare',
      'Expert in developmental disorders',
      'Published research on pediatric homeopathy',
      'Certified in child psychology'
    ],
    image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400',
    personalNote: 'Children are precious and their health should be nurtured naturally. I focus on building immunity and ensuring holistic development.'
  },
  {
    id: '3',
    name: 'Dr. Rajesh Kumar',
    specialization: 'Skin & Allergies',
    qualifications: 'BHMS, PGDHHM',
    experience: '12+ Years',
    achievements: [
      'Expert in dermatological conditions',
      'Specialized in allergic disorders',
      'Member of International Homeopathic Association',
      'Published papers on skin disease treatment'
    ],
    image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400',
    personalNote: 'Skin reflects our internal health. Through homeopathy, we can treat the root cause and achieve lasting results naturally.'
  },
  {
    id: '4',
    name: 'Dr. Priya Malhotra',
    specialization: 'Women\'s Health',
    qualifications: 'BHMS, FCAH',
    experience: '8+ Years',
    achievements: [
      'Specialist in gynecological conditions',
      'Expert in PCOS and hormonal disorders',
      'Focused on pregnancy and maternity care',
      'Certified in nutrition and lifestyle counseling'
    ],
    image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=400',
    personalNote: 'Women\'s health requires special attention and care. I am dedicated to providing gentle, effective treatments for all stages of life.'
  }
];
