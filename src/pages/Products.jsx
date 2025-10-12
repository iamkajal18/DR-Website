import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-black via-neutral-900 to-amber-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Products</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-amber-100 max-w-3xl mx-auto">
              Premium quality homeopathic medicines prepared according to the highest
              standards to ensure efficacy and safety.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Quality Assurance
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center shadow-lg"
            >
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic Remedies</h3>
              <p className="text-gray-600">
                All our medicines are sourced from certified manufacturers and follow
                homeopathic pharmacopoeia standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center shadow-lg"
            >
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lab Tested</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous quality testing to ensure purity,
                potency, and safety.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 text-center shadow-lg"
            >
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Doctor Recommended</h3>
              <p className="text-gray-600">
                Our doctors prescribe only the most effective remedies based on your
                individual needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right Medicine?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our experienced doctors can help you select the most appropriate homeopathic
              remedies for your specific condition. Book a consultation today.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105"
            >
              Book Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;