import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Sparkles, ArrowUpRight } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-luxury-black border-t border-luxury-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-luxury-gold font-sans text-xs tracking-widest uppercase">02</span>
          <span className="w-8 h-[1px] bg-luxury-gold/50" />
          <span className="text-luxury-muted font-sans text-xs tracking-editorial uppercase">
            CAREER TIMELINE
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-luxury-cream tracking-tight">
              MODELING <span className="italic font-light text-luxury-sand">EXPERIENCE</span>.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-luxury-muted max-w-md uppercase tracking-wider">
            Curated selection of headline runway walks, international luxury campaigns, and published fashion editorials.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 md:space-y-12 relative before:absolute before:inset-0 before:left-0 md:before:left-1/2 before:w-[1px] before:bg-luxury-border before:hidden md:before:block">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Center Indicator on desktop */}
                <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-luxury-black border-2 border-luxury-gold items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2">
                  <div className="p-8 md:p-10 bg-luxury-surface border border-luxury-border hover:border-luxury-gold/50 transition-all duration-500 group shadow-xl relative overflow-hidden">
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden pointer-events-none">
                      <div className="w-16 h-16 bg-luxury-gold/10 -rotate-45 transform origin-bottom-left" />
                    </div>

                    {/* Meta Top Line */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="font-serif-display text-3xl font-medium text-luxury-gold">
                        {exp.year}
                      </span>
                      <span className="text-[10px] uppercase tracking-editorial px-3 py-1 bg-luxury-black border border-luxury-border text-luxury-cream/80 font-sans">
                        {exp.category}
                      </span>
                    </div>

                    <h3 className="font-serif-display text-2xl sm:text-3xl text-luxury-cream group-hover:text-luxury-gold transition-colors duration-300 mb-2">
                      {exp.projectName}
                    </h3>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-luxury-muted font-sans uppercase tracking-wider mb-4">
                      <span className="text-luxury-sand font-medium">{exp.role}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3 text-luxury-gold" />
                        <span>{exp.location}</span>
                      </span>
                    </div>

                    <p className="font-sans text-sm text-luxury-cream/75 leading-relaxed font-light mb-6">
                      {exp.description}
                    </p>

                    {/* Highlights tags */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-luxury-border">
                      {exp.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-[10px] uppercase tracking-wider text-luxury-cream/60 bg-luxury-black/60 px-2.5 py-1 border border-luxury-border/60"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Editorial Image Card preview using the exact MODEL_IMAGE with custom crop */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-[16/10] overflow-hidden border border-luxury-border bg-luxury-surface group">
                    <img
                      src={exp.image}
                      alt={exp.projectName}
                      style={{ objectPosition: exp.cropPosition }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-luxury-cream text-xs">
                      <span className="font-serif-display tracking-widest text-sm text-luxury-cream/90">
                        ARCHIVE REF // {exp.year}
                      </span>
                      <span className="text-[10px] tracking-editorial uppercase text-luxury-gold font-sans">
                        EDITORIAL LOOK
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
