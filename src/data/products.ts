export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Arnica Montana',
    category: 'Pain Relief',
    description: 'Natural remedy for bruises, sprains, muscle soreness, and trauma. Promotes healing and reduces inflammation.',
    image: 'https://images.pexels.com/photos/5946632/pexels-photo-5946632.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Nux Vomica',
    category: 'Digestive Health',
    description: 'Effective for digestive disorders, nausea, constipation, and lifestyle-related ailments. Supports detoxification.',
    image: 'https://images.pexels.com/photos/6824463/pexels-photo-6824463.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '3',
    name: 'Belladonna',
    category: 'Fever & Inflammation',
    description: 'Fast-acting remedy for sudden high fever, inflammation, headaches, and acute conditions with throbbing pain.',
    image: 'https://images.pexels.com/photos/3873146/pexels-photo-3873146.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '4',
    name: 'Calcarea Carb',
    category: 'Immunity & Growth',
    description: 'Constitutional remedy for building immunity, supporting healthy growth, and treating calcium deficiency disorders.',
    image: 'https://images.pexels.com/photos/5910955/pexels-photo-5910955.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
 
  {
    id: '5',
    name: 'Rhus Tox',
    category: 'Joint & Muscle Care',
    description: 'Excellent for arthritis, stiffness, joint pain, and muscle strains. Improves mobility and reduces discomfort.',
    image: 'https://images.pexels.com/photos/5910966/pexels-photo-5910966.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '6',
    name: 'Ignatia',
    category: 'Emotional Wellness',
    description: 'Effective for grief, anxiety, emotional stress, mood disorders, and nervous system imbalances.',
    image: 'https://images.pexels.com/photos/4041279/pexels-photo-4041279.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '7',
    name: 'Sulphur',
    category: 'Skin Treatment',
    description: 'Powerful remedy for skin conditions like eczema, psoriasis, itching, and chronic dermatological issues.',
    image: 'https://images.pexels.com/photos/5946741/pexels-photo-5946741.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];
