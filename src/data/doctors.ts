// src/data/doctors.ts
export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  qualifications: string;
  experience: string | null;
  achievements: string[];
  image: string;
  whatsapp: string; // ← WhatsApp number (international format)
}

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Shyam Ji Srivastav',
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
    whatsapp: '918317069697', // ← 8317069697
  },
  {
    id: '2',
    name: 'Dr. Devina Vachaspati',
    specialization: 'Gynaecologist Homeopathy',
    qualifications: 'BSC, BHMS',
    experience: null,
    achievements: [
      'Specialist in child healthcare',
      'Expert in developmental disorders',
      'Published research on pediatric homeopathy',
    ],
    image: '/images/Ratna.jpeg',
    whatsapp: '916392587902', // ← 6392587902
  },
];