import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageSquare } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section id="contacto" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-purple uppercase tracking-[0.2em] mb-4">Contáctanos</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Llevamos la experiencia de <span className="text-brand-purple italic">1punto4</span> a tu mesa
            </h3>
            <p className="text-lg text-white/50 mb-12 leading-relaxed">
              Ya seas un entusiasta del café buscando una experiencia única, o un negocio que demanda perfiles de tueste personalizados, estamos listos para atenderte.
            </p>

            <div className="space-y-8">
              <a
                href="tel:+573138886339"
                className="flex items-center space-x-6 group"
              >
                <div className="bg-white/5 p-4 rounded-2xl text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/40 font-bold uppercase tracking-wider">Llámanos</p>
                  <p className="text-xl font-display font-bold text-white">+57 3138886339</p>
                </div>
              </a>

              <div className="flex items-center space-x-6 group">
                <div className="bg-white/5 p-4 rounded-2xl text-brand-purple border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/40 font-bold uppercase tracking-wider">Email</p>
                  <p className="text-xl font-display font-bold text-white">bohna@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 group">
                <div className="bg-white/5 p-4 rounded-2xl text-brand-purple border border-white/10">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-white/40 font-bold uppercase tracking-wider">Origen</p>
                  <p className="text-xl font-display font-bold text-white">Cachipay, Cundinamarca</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 border border-white/10"
          >
            <h4 className="text-2xl font-display font-bold text-white mb-8 underline decoration-brand-purple/30 underline-offset-8">Envíanos un mensaje</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-white/40 mb-2 px-2">Nombre</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-white"
                    placeholder="Tu nombre"
                    id="contact-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white/40 mb-2 px-2">Teléfono</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none text-white"
                    placeholder="Tu celular"
                    id="contact-phone"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-white/40 mb-2 px-2">Mensaje</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple transition-all outline-none h-32 resize-none text-white"
                  placeholder="¿En qué podemos ayudarte?"
                  id="contact-message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-brand-purple text-white py-5 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all shadow-brand-purple/40 flex items-center justify-center space-x-3"
              >
                <span>Enviar mensaje</span>
                <MessageSquare size={20} />
              </button>
            </form>

            <div className="mt-12 pt-12 border-t border-brand-purple/10 flex items-center justify-center space-x-8">
              <a href="#" className="text-brand-purple hover:scale-110 transition-transform">
                <Instagram size={28} />
              </a>
              <a href="#" className="text-brand-purple hover:scale-110 transition-transform">
                <Facebook size={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 bg-brand-black text-white px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        <div className="flex items-center">
          <img src="/logo_principal.png" alt="1Punto4 Logo" className="h-12 w-auto brightness-0 invert object-contain" />
        </div>
        <div className="text-white/40 text-sm font-medium text-center md:text-left">
          © {new Date().getFullYear()} 1punto4 Café de Especialidad. Todos los derechos reservados.
          <p className="mt-1">Finca Las Juanas, Cachipay, Cundinamarca.</p>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-brand-purple transition-colors">Origen</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Productos</a>
          <a href="#" className="hover:text-brand-purple transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
};
