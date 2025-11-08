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
    name: 'Dr. Shyam Ji Srivasta',
    specialization: 'Classical Homeopathy',
    qualifications: 'BHMS, MD (Hom)',
    experience: '15+ Years',
    achievements: [
      'Specialized in chronic disease management',
      'Treated over 5000+ patients successfully',
      'Expert in constitutional homeopathy',
      'Regular speaker at homeopathic conferences'
    ],
    image: '/images/Ratna_papa.jpeg',
    personalNote: 'I believe in treating the person as a whole, not just the disease. Every patient is unique and deserves personalized care and attention.'
  },
  {
    id: '2',
    name: 'Dr. Devina Vachaspati',
    specialization: 'Dermatological care Homeopathy',
    qualifications: 'BHMS, CCH',
    experience: '6+ Years',
    achievements: [
      'Specialist in child healthcare',
      'Expert in developmental disorders',
      'Published research on pediatric homeopathy',
      'Certified in child psychology'
    ],
    image: '/images/Ratna.jpeg',
    personalNote: 'Children are precious and their health should be nurtured naturally. I focus on building immunity and ensuring holistic development.'
  },
 
];
