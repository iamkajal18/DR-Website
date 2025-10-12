export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: '1',
    title: 'Chronic Disease Management',
    description: 'Comprehensive treatment for long-term conditions like diabetes, arthritis, thyroid disorders, and respiratory issues through natural homeopathic remedies.',
    icon: 'activity'
  },
  {
    id: '2',
    title: 'Skin & Hair Treatment',
    description: 'Effective solutions for acne, eczema, psoriasis, hair fall, and other dermatological conditions using safe, natural homeopathic medicines.',
    icon: 'heart'
  },
  {
    id: '3',
    title: 'Women\'s Health Care',
    description: 'Specialized treatment for PCOS, menstrual disorders, menopause, pregnancy care, and other gynecological conditions with personalized care.',
    icon: 'user'
  },
  {
    id: '4',
    title: 'Child Healthcare',
    description: 'Gentle and safe homeopathic treatments for common childhood ailments, growth issues, behavioral problems, and immunity building.',
    icon: 'smile'
  },
  {
    id: '5',
    title: 'Mental & Emotional Wellness',
    description: 'Natural remedies for stress, anxiety, depression, insomnia, and other psychological conditions to restore mental balance and peace.',
    icon: 'brain'
  },
  {
    id: '6',
    title: 'Lifestyle Disorders',
    description: 'Holistic approach to managing obesity, hypertension, cholesterol, digestive issues, and other lifestyle-related health problems.',
    icon: 'shield'
  }
];
