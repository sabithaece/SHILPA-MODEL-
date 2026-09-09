import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { MODEL_IMAGE } from '../constants/assets';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden bg-luxury-black"
    >
      {/* Editorial Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Giant Outlined Watermark */}
        <span className="absolute -top-10 -right-16 text-[18vw] font-serif-display font-bold leading-none tracking-widest text-outline select-none opacity-20 hidden lg:block">
          SHILPA
        </span>
        {/* Subtle Luxury Ambient Glow */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Top Magazine Header Info */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-start md:items-end justify-between border-b border-luxury-border pb-6 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center space-x-3"
        >
          <span className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse" />
          <span className="text-[11px] uppercase tracking-editorial text-luxury-cream/80 font-sans">
            AUTUMN / WINTER 2026 EDITION
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-left md:text-right"
        >
          <span className="text-[11px] uppercase tracking-widest text-luxury-muted font-sans block">
            AVAILABLE FOR WORLDWIDE BOOKINGS
          </span>
          <span className="text-xs tracking-editorial text-luxury-cream/90 font-serif-display italic">
            PARIS • MILAN • CHENNAI • NEW YORK
          </span>
        </motion.div>
      </div>

      {/* Central Editorial Magazine Composition */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8">
        {/* Left Column: Bold Typography & Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1"
        >
          <div className="inline-flex items-center space-x-2.5 text-luxury-gold text-xs font-sans tracking-editorial uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EDITORIAL • RUNWAY • COMMERCIAL</span>
          </div>

          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-normal tracking-tight text-luxury-cream leading-[1.05] mb-6">
            MAIN <br />
            <span className="italic font-light text-luxury-sand">CHARACTER</span> <br />
            ENERGY<span className="text-luxury-gold">.</span>
          </h1>

          <p className="font-sans text-sm sm:text-base text-luxury-cream/75 max-w-lg leading-relaxed mb-8 font-light">
            Elegance meets commanding presence. Specializing in high-fashion editorial spreads, 
            couture runway shows, and evocative luxury campaigns that define modern luxury.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => scrollToSection('gallery')}
              className="px-8 py-4 bg-luxury-cream text-luxury-black hover:bg-luxury-gold transition-all duration-300 font-sans text-xs uppercase tracking-editorial font-semibold flex items-center space-x-3 group shadow-xl"
            >
              <span>VIEW PORTFOLIO</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-luxury-cream/30 hover:border-luxury-gold text-luxury-cream hover:text-luxury-gold transition-all duration-300 font-sans text-xs uppercase tracking-editorial font-medium"
            >
              GET IN TOUCH
            </button>
          </div>
        </motion.div>

        {/* Right Column: Hero Portrait Magazine Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Magazine Corner Framing Marks */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-luxury-gold z-20 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-luxury-gold z-20 pointer-events-none" />

            {/* Model Image Frame */}
            <div className="relative aspect-[3/4] overflow-hidden bg-luxury-surface border border-luxury-border shadow-2xl group">
              <motion.img
                src={MODEL_IMAGE}
                alt="Shilpa - Fashion & Runway Model"
                className="w-full h-full object-cover object-center luxury-image-hover transition-transform duration-1000 group-hover:scale-105"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              />

              {/* Editorial Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Card Annotation */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-luxury-cream z-10 pointer-events-none">
                <div>
                  <span className="text-[10px] tracking-editorial uppercase text-luxury-gold font-sans block">
                    COVER FEATURE
                  </span>
                  <span className="font-serif-display text-xl tracking-wider font-medium">
                    SHILPA
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] tracking-widest text-luxury-muted font-sans block">
                    HEIGHT
                  </span>
                  <span className="font-serif-display text-sm tracking-wider">
                    5'9" / 175 CM
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Editorial Badge */}
            <div className="absolute -bottom-6 -left-6 bg-luxury-black/90 backdrop-blur-md border border-luxury-border p-4 shadow-xl hidden sm:flex items-center space-x-3">
              <div className="w-10 h-10 border border-luxury-gold/50 rounded-full flex items-center justify-center font-serif-display text-luxury-gold text-lg italic">
                S
              </div>
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-widest text-luxury-muted font-sans block">
                  HAUTE COUTURE
                </span>
                <span className="font-sans text-xs tracking-wider text-luxury-cream font-medium">
                  2026 RUNWAY FACE
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer Bar: Scroll Prompt & Details */}
      <div className="relative z-10 w-full flex items-center justify-between border-t border-luxury-border pt-6 mt-4">
        <div className="text-[11px] tracking-editorial text-luxury-muted uppercase font-sans hidden sm:block">
          00 / 05 — INTRODUCTION
        </div>

        {/* Scroll Prompt */}
        <button
          onClick={() => scrollToSection('about')}
          className="mx-auto sm:mx-0 flex items-center space-x-2 text-xs uppercase tracking-editorial text-luxury-cream/80 hover:text-luxury-gold transition-colors font-sans group"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-luxury-gold transition-colors" />
        </button>

        <div className="text-[11px] tracking-widest text-luxury-muted uppercase font-sans hidden sm:block">
          REPRESENTATION: EXCLUSIVE
        </div>
      </div>
    </section>
  );
}
