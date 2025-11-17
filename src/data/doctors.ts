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
  specialization: 'Expert in Homeopathy ',
  qualifications: 'Medical Officer-in-Charge (Retired), Provincial Homeopathic Medical Services, UP',
  experience: '43+ Years',
  achievements: [
    'Awarded Certificate of Appreciation by the Government of India in 1991',
    'Recognized for outstanding work in the Universal Immunization Program in 1996',
    'Received Gold Medal and State-level honor by the Uttar Pradesh Government for Pulse Polio Program in 1997',
    'Honored by the Indian Medical Association in 2000 for exceptional contribution to public health services',
    'Received Excellence Award in 2001',
    'Appreciated in 2009 for contributions in disease control, maternal & child health, and medical education (CME)',
    'Published multiple articles in medical and health magazines'
  ],
  image: '/images/Ratna_papa.jpeg',
  whatsapp: '918317069697',
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