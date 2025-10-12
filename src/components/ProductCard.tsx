import { Package } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
          {product.category}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{product.description}</p>
        <button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all font-medium flex items-center justify-center space-x-2">
          <Package size={18} />
          <span>Enquire Now</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
