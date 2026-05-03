import { motion, useScroll, useTransform } from 'motion/react';
import { Coffee, MapPin, Leaf, Droplets } from 'lucide-react';
import { useRef } from 'react';

export const OriginSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const slides = [
    '/slide_05.jpeg',
    '/Slide_02.png',
    '/slide_03.png',
    '/slide_04.jpeg',
    '/slide_06.jpeg',
    '/slide_07.jpeg',
  ];

  // Map scroll progress to image indices
  const activeImageIndex = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 1, 2, 3, 4, 5]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const highlights = [
    { icon: <MapPin />, title: 'Ubicación', text: 'Finca Las Juanas, Cachipay, Cundinamarca.' },
    { icon: <Droplets />, title: 'Altitud', text: '1740 msnm para un sabor superior.' },
    { icon: <Leaf />, title: 'Cultivo', text: '1.4 hectáreas de cuidado artesanal.' },
    { icon: <Coffee />, title: 'Variedad', text: 'Tostión personalizada a tu gusto.' },
  ];

  return (
    <section id="origen" ref={containerRef} className="relative h-[400vh] bg-black text-white">
      {/* Pinned Background Gallery */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <motion.div style={{ opacity: bgOpacity, scale: bgScale }} className="w-full h-full">
          {slides.map((src, index) => {
            const opacity = useTransform(
              activeImageIndex,
              [index - 0.5, index, index + 0.5],
              [0, 1, 0]
            );
            return (
              <motion.img
                key={src}
                src={src}
                alt={`Slide ${index}`}
                style={{ opacity }}
                className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
              />
            );
          })}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black" />
        </motion.div>
      </div>

      {/* Content layers */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: Intro */}
          <div className="h-screen flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h2 className="text-sm font-bold text-brand-purple uppercase tracking-[0.3em] mb-6">La historia detrás del grano</h2>
              <h3 className="text-5xl md:text-7xl font-display font-bold mb-10 leading-tight">
                Autenticidad <br />
                <span className="text-brand-purple italic">Finca Las Juanas</span>
              </h3>
              <p className="text-xl text-white/80 leading-relaxed">
                "1punto4" representa la conexión íntima entre nuestra marca y el tamaño de nuestra finca: 1.4 hectáreas en Cachipay.
              </p>
            </motion.div>
          </div>

          {/* Section 2: Highlights */}
          <div className="h-screen flex items-center justify-end">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black/40 backdrop-blur-md border border-white/10 p-12 rounded-[3.5rem] max-w-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="bg-brand-purple/20 p-4 rounded-2xl text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Section 3: Extra Detail */}
          <div className="h-screen flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[4rem] max-w-2xl relative overflow-hidden group"
            >
              <div className="relative z-10">
                <h4 className="text-3xl font-display font-bold mb-6">Trazabilidad Integral</h4>
                <p className="text-white/80 text-lg leading-relaxed mb-8">
                  Elevamos el consumo cotidiano a un tributo a la tradición cafetera de Cundinamarca, conectando directamente la excelencia del cultivo con tu paladar.
                </p>
                <img src="/logo_principal.png" alt="1punto4" className="h-20 w-auto brightness-0 invert opacity-60" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

