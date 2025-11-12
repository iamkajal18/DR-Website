// src/data/services.ts
export interface Service {
  id: string;
  title: string;        // English only
  description: string;  // Detailed & professional
  icon: string;         // lucide-react icon name
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Kidney Stones',
    description: 'Non-surgical removal of kidney stones using classical homeopathy. Safe, painless, and permanent cure without operation.',
    icon: 'activity'
  },
  {
    id: '2',
    title: 'Gall Bladder Stones',
    description: 'Natural dissolution of gallstones. Avoid surgery with deep-acting constitutional remedies.',
    icon: 'zap'
  },
  {
    id: '3',
    title: 'Skin Diseases',
    description: 'Complete cure for psoriasis, eczema, acne, warts, leucoderma, fungal infections, and allergic dermatitis.',
    icon: 'heart'
  },
  {
    id: '4',
    title: 'Gynecology (Women’s Health)',
    description: 'Expert care by Dr. Devina Vachaspati for PCOS, PCOD, irregular periods, leucorrhoea, fibroids, infertility, and menopause.',
    icon: 'user'
  },
  {
    id: '5',
    title: 'Child Health',
    description: 'Safe treatment for recurrent cold, cough, tonsillitis, bed-wetting, growth issues, ADHD, and low immunity.',
    icon: 'smile'
  },
  {
    id: '6',
    title: 'Joint Pain',
    description: 'Relief in arthritis, rheumatoid arthritis, gout, cervical pain, sciatica, and osteoporosis without steroids.',
    icon: 'shield'
  },
  {
    id: '7',
    title: 'Stomach Diseases',
    description: 'Permanent solution for acidity, gas, IBS, constipation, piles, fatty liver, and indigestion.',
    icon: 'droplet'
  },
  {
    id: '8',
    title: 'Respiratory Diseases',
    description: 'Effective treatment for asthma, bronchitis, sinusitis, allergic rhinitis, and breathing difficulties.',
    icon: 'wind'
  },
  {
    id: '9',
    title: 'Thyroid Disorders',
    description: 'Control hypothyroidism, hyperthyroidism, and goiter naturally. Restore normal gland function.',
    icon: 'thermometer'
  },
  {
    id: '10',
    title: 'Hair Fall',
    description: 'Stop hair loss, cure dandruff, promote regrowth, and prevent premature graying with internal treatment.',
    icon: 'scissors'
  },
  {
    id: '11',
    title: 'Leucoderma (Vitiligo)',
    description: 'Gradual repigmentation of white patches using safe homeopathic medicines. Long-term results.',
    icon: 'sun'
  }

];