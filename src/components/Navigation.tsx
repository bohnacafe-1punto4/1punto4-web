import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Coffee, Instagram, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Origen', href: '#origen' },
    { name: 'Productos', href: '#productos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <img src="/logo_principal.png" alt="1Punto4 Logo" className="h-14 w-auto object-contain brightness-0 invert" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-brand-purple font-medium transition-colors"
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/573138886339"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-purple text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-brand-purple/20"
              id="cta-nav-whatsapp"
            >
              Comprar Ahora
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-black p-2"
              id="mobile-menu-btn"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-white/70 hover:text-brand-purple font-medium text-lg py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/573138886339"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-brand-purple text-white px-6 py-3 rounded-xl font-bold text-center"
              >
                Comprar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background Image for Hero Section */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/slide_01.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover object-top opacity-30 grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purple text-sm font-bold mb-6">
            <Coffee size={14} />
            <span>Café de Especialidad Premium</span>
          </div>
          <div className="mb-8">
            <img src="/logo_principal.png" alt="1punto4" className="h-24 md:h-32 w-auto object-contain brightness-0 invert" />
          </div>
          <p className="text-xl text-white/60 mb-8 leading-relaxed max-w-lg">
            Nacemos de la conexión íntima entre nuestra tierra y tu paladar. Cultivado a 1740 msnm en la Finca Las Juanas, Cachipay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#productos"
              className="bg-brand-purple text-white px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform text-center shadow-xl shadow-brand-purple/40"
            >
              Ver Productos
            </a>
            <a
              href="#origen"
              className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors text-center"
            >
              Nuestro Origen
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border border-white/10">
            <img
              src="/slide_07.jpeg"
              alt="Café de Especialidad 1punto4"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 bg-black p-6 rounded-3xl shadow-2xl z-20 hidden lg:block border border-white/10"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-white/5 p-3 rounded-2xl">
                <Coffee className="text-white" />
              </div>
              <div>
                <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Altitud</p>
                <p className="text-xl font-display font-bold text-white">1740 MSNM</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
