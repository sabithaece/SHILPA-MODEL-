import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { MODEL_IMAGE } from '../constants/assets';

export default function Hero() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 px-6 md:px-12 lg:px-16 overflow-hidden bg-editorial-bg"
    >
      {/* Background Decorative Watermark */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <span className="absolute -top-12 -right-8 text-[20vw] font-serif-display font-light leading-none tracking-widest text-outline-editorial select-none opacity-20 hidden lg:block">
          {portfolioData.modelInfo.name}
        </span>
      </div>

      {/* Top Header Bar */}
      <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between border-b border-editorial-border pb-5 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center space-x-2.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-editorial-accent" />
          <span className="text-[10px] uppercase tracking-editorial text-editorial-gray font-sans font-medium">
            HIGH FASHION & RUNWAY EDITORIAL // VOL. 2026
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left sm:text-right"
        >
          <span className="text-[10px] uppercase tracking-widest text-editorial-gray font-sans block">
            REPRESENTATION & BOOKING
          </span>
          <span className="text-xs tracking-editorial text-editorial-black font-serif-display italic">
            WORLDWIDE ON-LOCATION & STUDIO
          </span>
        </motion.div>
      </div>

      {/* Central Editorial Split-Screen */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center my-auto py-8 lg:py-12">
        {/* Left Column: Bold Typography & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col justify-center order-2 lg:order-1"
        >
          <div className="inline-flex items-center space-x-2 text-editorial-accent text-xs font-sans tracking-editorial uppercase mb-4 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{portfolioData.modelInfo.title}</span>
          </div>

          <h1 className="font-serif-display text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-normal tracking-tight text-editorial-black leading-[1.04] mb-6">
            {portfolioData.modelInfo.name}
          </h1>

          <div className="border-l-2 border-editorial-accent pl-4 mb-8">
            <p className="font-serif-display text-2xl sm:text-3xl text-editorial-black/90 italic font-light leading-snug">
              "{portfolioData.modelInfo.quote}"
            </p>
          </div>

          <p className="font-sans text-sm sm:text-base text-editorial-gray max-w-lg leading-relaxed mb-9 font-light">
            Bringing commanding runway posture, emotive camera instincts, and clean luxury poise to 
            high-fashion campaigns, designer lookbooks, and global magazine editorials.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-editorial-black text-white hover:bg-editorial-accent transition-all duration-300 font-sans text-xs uppercase tracking-editorial font-medium flex items-center space-x-3 group shadow-md"
            >
              <span>EXPLORE PORTFOLIO</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-white border border-editorial-border hover:border-editorial-accent text-editorial-black hover:text-editorial-accent transition-all duration-300 font-sans text-xs uppercase tracking-editorial font-medium shadow-sm"
            >
              BOOK A SHOOT
            </button>
          </div>
        </motion.div>

        {/* Right Column: Model Photograph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Editorial Accent Corners */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-editorial-accent pointer-events-none z-20" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-editorial-accent pointer-events-none z-20" />

            {/* Model Photograph Container */}
            <div className="relative aspect-[3/4] overflow-hidden bg-white border border-editorial-border shadow-2xl group">
              <motion.img
                src={MODEL_IMAGE}
                alt="Sabitha - Fashion Model"
                className="w-full h-full object-cover object-center editorial-image-hover transition-transform duration-1000 group-hover:scale-105"
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between text-white z-10 pointer-events-none">
                <div>
                  <span className="text-[10px] tracking-editorial uppercase text-white/90 font-sans block">
                    COVER SELECTION
                  </span>
                  <span className="font-serif-display text-xl tracking-wider font-medium">
                    {portfolioData.modelInfo.name}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] tracking-widest text-white/80 font-sans block">
                    COMP CARD REF
                  </span>
                  <span className="font-serif-display text-sm tracking-wider text-white">
                    #MOD-2026
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -left-5 bg-white border border-editorial-border p-4 shadow-xl hidden sm:flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-editorial-bg border border-editorial-accent flex items-center justify-center font-serif-display text-editorial-accent text-lg italic font-medium">
                S
              </div>
              <div className="text-left">
                <span className="text-[9px] uppercase tracking-widest text-editorial-gray font-sans block">
                  EXPERIENCE
                </span>
                <span className="font-sans text-xs tracking-wider text-editorial-black font-semibold">
                  {portfolioData.modelInfo.experienceYears} YEARS EDITORIAL
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar: Scroll to Explore */}
      <div className="relative z-10 w-full flex items-center justify-between border-t border-editorial-border pt-5">
        <div className="text-[11px] tracking-editorial text-editorial-gray uppercase font-sans hidden sm:block">
          01 / 04 — HOME
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="mx-auto sm:mx-0 flex items-center space-x-2 text-xs uppercase tracking-editorial text-editorial-black/80 hover:text-editorial-accent transition-colors font-sans group font-medium"
        >
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-editorial-accent transition-colors" />
        </button>

        <div className="text-[11px] tracking-widest text-editorial-gray uppercase font-sans hidden sm:block">
          CHENNAI • GLOBAL
        </div>
      </div>
    </section>
  );
}
