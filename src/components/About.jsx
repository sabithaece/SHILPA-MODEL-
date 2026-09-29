import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { MODEL_IMAGE } from '../constants/assets';

export default function About() {
  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-white border-t border-editorial-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-editorial-accent font-sans text-xs tracking-widest uppercase font-semibold">02</span>
          <span className="w-8 h-[1px] bg-editorial-accent/40" />
          <span className="text-editorial-gray font-sans text-xs tracking-editorial uppercase">
            BIOGRAPHY
          </span>
        </div>

        {/* Side-by-Side Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait Photograph */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border border-editorial-border p-3.5 bg-editorial-bg shadow-xl">
              {/* Corner Frame Lines */}
              <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-editorial-accent" />
              <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-editorial-accent" />

              <div className="relative aspect-[3/4] overflow-hidden bg-editorial-black">
                <img
                  src={MODEL_IMAGE}
                  alt={`${portfolioData.modelInfo.name} Portrait`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="pt-3 px-1 flex justify-between items-center text-[10px] text-editorial-gray font-sans uppercase tracking-widest">
                <span>PORTRAIT MONOGRAPH</span>
                <span className="text-editorial-accent font-medium">© 2026</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Text Content & View My Work CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center space-x-2 text-editorial-accent text-xs font-sans tracking-editorial uppercase mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROFILE & VISION</span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-editorial-black tracking-tight leading-[1.08] mb-6">
              {portfolioData.aboutMe.heading}
            </h2>

            <div className="w-12 h-[1px] bg-editorial-accent mb-6" />

            {/* Exact Requested Description Text */}
            <p className="font-sans text-base sm:text-lg text-editorial-black/85 leading-relaxed font-light mb-6">
              "{portfolioData.aboutMe.description}"
            </p>

            <p className="font-sans text-sm text-editorial-gray leading-relaxed font-light mb-8">
              {portfolioData.aboutMe.philosophy}
            </p>

            {/* Minimal "VIEW MY WORK" Button */}
            <div>
              <button
                onClick={scrollToGallery}
                className="inline-flex items-center space-x-3 px-7 py-3.5 bg-editorial-black text-white hover:bg-editorial-accent transition-all duration-300 font-sans text-xs uppercase tracking-editorial font-medium shadow-sm group"
              >
                <span>VIEW MY WORK</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
