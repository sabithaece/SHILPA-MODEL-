import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { MODEL_IMAGE } from '../constants/assets';

const CATEGORIES = [
  "Fashion Model",
  "Runway Model",
  "Commercial Model",
  "Editorial Model",
  "Photoshoot Model",
];

const STATS = [
  { value: "5+", label: "Years Experience", description: "Dedicated professional modeling career" },
  { value: "50+", label: "Photoshoots", description: "Editorials, lookbooks & campaigns" },
  { value: "20+", label: "Brands Collaborated", description: "International & luxury fashion houses" },
  { value: "10+", label: "Awards & Honors", description: "Runway & editorial industry accolades" },
];

const MEASUREMENTS = [
  { label: "Height", value: "5'9\" / 175 cm" },
  { label: "Bust", value: "33\" / 84 cm" },
  { label: "Waist", value: "24\" / 61 cm" },
  { label: "Hips", value: "35\" / 89 cm" },
  { label: "Shoes", value: "39 EU / 8.5 US" },
  { label: "Eyes", value: "Deep Brown" },
  { label: "Hair", value: "Natural Brunette" },
  { label: "Location", value: "Chennai / Global" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-luxury-dark border-t border-luxury-border">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Marker */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-luxury-gold font-sans text-xs tracking-widest uppercase">01</span>
          <span className="w-8 h-[1px] bg-luxury-gold/50" />
          <span className="text-luxury-muted font-sans text-xs tracking-editorial uppercase">
            ABOUT ME
          </span>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Model Portrait with Editorial Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative sticky top-28">
              {/* Outer Editorial Border */}
              <div className="relative border border-luxury-border p-3 bg-luxury-surface/50 backdrop-blur-sm shadow-2xl">
                {/* Corner Accents */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-luxury-gold" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-luxury-gold" />

                <div className="relative aspect-[3/4] overflow-hidden bg-luxury-black">
                  <img
                    src={MODEL_IMAGE}
                    alt="Shilpa - Editorial Model"
                    className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="pt-4 pb-2 px-2 flex justify-between items-center text-[10px] text-luxury-muted font-sans uppercase tracking-widest">
                  <span>SERIES: PORTRAIT STUDY</span>
                  <span className="text-luxury-gold">SHILPA © 2026</span>
                </div>
              </div>

              {/* Comp Card Floating Measurements Preview */}
              <div className="mt-6 p-6 bg-luxury-surface border border-luxury-border">
                <div className="flex items-center justify-between mb-4 border-b border-luxury-border pb-3">
                  <span className="text-xs uppercase tracking-editorial text-luxury-cream font-medium">
                    MODEL SPECIFICATIONS
                  </span>
                  <span className="text-[10px] text-luxury-gold tracking-widest font-sans">
                    VERIFIED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  {MEASUREMENTS.map((m) => (
                    <div key={m.label} className="flex flex-col">
                      <span className="text-luxury-muted text-[10px] tracking-wider uppercase font-sans">
                        {m.label}
                      </span>
                      <span className="text-luxury-cream font-medium mt-0.5">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Biography, Categories & Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center space-x-2 text-luxury-gold text-xs font-sans tracking-editorial uppercase mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BIOGRAPHY & PROFILE</span>
              </div>

              <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-luxury-cream tracking-tight leading-[1.1] mb-6">
                DEFINED BY POISE, <br />
                <span className="italic font-light text-luxury-sand">DRIVEN BY</span> PRESENCE.
              </h2>

              <div className="space-y-4 font-sans text-sm sm:text-base text-luxury-cream/80 leading-relaxed font-light mb-8">
                <p>
                  With an unmistakable camera instinct and commanding runway grace, Shilpa represents 
                  the new era of high-fashion and editorial modeling. Her work bridges the rich grandeur of 
                  South Asian couture with the clean, minimalist lines of contemporary global fashion.
                </p>
                <p>
                  Having headlined prestigious runway weeks and fronted campaigns for luxury jewelers, 
                  fashion houses, and international lifestyle publications, Shilpa brings cinematic 
                  adaptability to every concept — effortlessly channeling raw elegance, regal stillness, 
                  or fierce modern movement.
                </p>
              </div>

              {/* Model Categories */}
              <div className="mb-10">
                <span className="text-xs uppercase tracking-editorial text-luxury-muted font-sans block mb-3">
                  MODEL DISCIPLINES
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {CATEGORIES.map((category) => (
                    <span
                      key={category}
                      className="px-4 py-2 text-xs uppercase tracking-wider bg-luxury-surface border border-luxury-border text-luxury-cream/90 hover:border-luxury-gold/60 hover:text-luxury-gold transition-colors duration-300 font-sans flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                      <span>{category}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="border-t border-luxury-border pt-10">
              <span className="text-xs uppercase tracking-editorial text-luxury-muted font-sans block mb-6">
                CAREER MILESTONES
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className="border-l border-luxury-border pl-4">
                    <span className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-luxury-cream font-medium block">
                      {stat.value}
                    </span>
                    <span className="text-xs text-luxury-gold tracking-wider uppercase font-sans block mt-1">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-luxury-muted font-sans block mt-1 leading-snug">
                      {stat.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
