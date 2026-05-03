import { motion } from 'motion/react';
import { PRODUCTS } from '../types';
import { ShoppingBag, Star, Check, Coffee } from 'lucide-react';

export const ProductsSection = () => {
  return (
    <section id="productos" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-brand-purple uppercase tracking-[0.2em] mb-4"
          >
            Nuestra Cosecha
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Presentaciones para cada Necesidad
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/50"
          >
            Entendemos que cada momento y cada cliente requiere una cantidad diferente. 1punto4 se adapta al paladar exigente.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-lg rounded-[2.5rem] p-4 group hover:bg-white/10 transition-all border border-white/5"
            >
              <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 relative bg-white/5 flex items-center justify-center p-8 mx-auto w-[70%]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-brand-purple text-white px-4 py-1 rounded-full text-xs font-bold">
                  {product.size}
                </div>
              </div>
              <div className="px-2 pb-4">
                <h4 className="text-xl font-display font-bold text-white mb-2">{product.name}</h4>
                <p className="text-sm text-white/50 mb-4 h-12 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center space-x-2 text-xs font-bold text-white/40 mb-6">
                  <Star size={14} fill="currentColor" />
                  <span>{product.idealFor}</span>
                </div>
                <a
                  href={`https://wa.me/573138886339?text=Hola! Estoy interesado en el café ${product.name} de ${product.size}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 bg-transparent border-2 border-brand-purple text-brand-purple py-3 rounded-2xl font-bold hover:bg-brand-purple hover:text-white transition-all group/btn"
                >
                  <ShoppingBag size={18} className="group-hover/btn:scale-110 transition-transform" />
                  <span>Pedir por WhatsApp</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
