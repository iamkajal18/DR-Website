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
  'Post Graduate Certificate in Rehabilitation was awarded in 1991 by the Government of India.',
  'Participated in an orientation programme organized by UNICEF in 1996.',
  'Achieved an award and Gold Medal by the Hon’ble Governor of Uttar Pradesh in 1997.',
  'Life member of the Indian Red Cross Society.',
  'Appreciated as the Best Worker by the District Magistrate in 2000.',
  'Dr. Hahnemann Samman achieved in 2011.',
  'Participated in CME Programme for mother and child care organized by N.H.M.C. and Hospital in 2009.',
  'Articles and research programme papers published in various magazines.'
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