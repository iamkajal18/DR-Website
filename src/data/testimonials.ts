export interface Testimonial {
  id: string;
  name: string;
  condition: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Singh',
    condition: 'Chronic Migraine',
    text: 'After suffering from severe migraines for years, I found relief at Ratna Homoeo Clinic. Dr. Ratna\'s treatment has been life-changing. I\'m finally pain-free!',
    rating: 5
  },
  {
    id: '2',
    name: 'Amit Kumar',
    condition: 'Skin Allergy',
    text: 'The doctors here are truly knowledgeable and caring. My skin condition improved dramatically within weeks. Highly recommend their natural approach!',
    rating: 5
  },
  {
    id: '3',
    name: 'Sneha Patel',
    condition: 'PCOS',
    text: 'Dr. Priya helped me manage my PCOS naturally. Her holistic approach and personalized care made all the difference. Thank you for giving me hope!',
    rating: 5
  },
  {
    id: '4',
    name: 'Rahul Sharma',
    condition: 'Arthritis',
    text: 'I was skeptical about homeopathy, but the results speak for themselves. My joint pain has reduced significantly and I can move freely again.',
    rating: 5
  },
  {
    id: '5',
    name: 'Anjali Verma',
    condition: 'Child Healthcare',
    text: 'My son was frequently falling sick. Thanks to the immunity-building treatment here, he\'s much healthier now. The doctors are wonderful with children!',
    rating: 5
  }
];
