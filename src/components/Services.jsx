import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Camera, 
  Film, 
  ShoppingBag, 
  Sun, 
  Footprints, 
  Gem,
  ArrowUpRight 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Sparkles: Sparkles,
  Camera: Camera,
  Film: Film,
  ShoppingBag: ShoppingBag,
  Sun: Sun,
  Footprints: Footprints,
  Gem: Gem
};

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-white border-t border-editorial-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-editorial-accent font-sans text-xs tracking-widest uppercase font-semibold">06</span>
          <span className="w-8 h-[1px] bg-editorial-accent/40" />
          <span className="text-editorial-gray font-sans text-xs tracking-editorial uppercase">
            MODELING DISCIPLINES
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-editorial-black tracking-tight">
              AVAILABLE <span className="italic font-light text-editorial-accent">FOR</span>.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-editorial-gray max-w-md uppercase tracking-wider font-light">
            Professional representation and versatile modeling services tailored for international fashion houses, commercial brands, and creative directors.
          </p>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 bg-editorial-bg border border-editorial-border hover:border-editorial-accent transition-all duration-400 group flex flex-col justify-between shadow-sm hover:shadow-md cursor-pointer"
                onClick={scrollToContact}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-full bg-white border border-editorial-border flex items-center justify-center text-editorial-accent group-hover:bg-editorial-black group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-sans text-editorial-gray/60 font-medium">
                      0{service.id}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl text-editorial-black group-hover:text-editorial-accent transition-colors duration-300 font-normal mb-3">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-editorial-gray leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-editorial-border flex items-center justify-between text-xs text-editorial-gray group-hover:text-editorial-black transition-colors font-medium">
                  <span className="uppercase tracking-wider text-[10px]">Inquire For Bookings</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
