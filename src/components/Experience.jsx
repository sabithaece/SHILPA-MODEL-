import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, Tag, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-white border-t border-editorial-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-editorial-accent font-sans text-xs tracking-widest uppercase font-semibold">04</span>
          <span className="w-8 h-[1px] bg-editorial-accent/40" />
          <span className="text-editorial-gray font-sans text-xs tracking-editorial uppercase">
            CAREER HIGHLIGHTS
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-editorial-black tracking-tight">
              EXPERIENCE & <span className="italic font-light text-editorial-accent">SELECTED WORK</span>.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-editorial-gray max-w-md uppercase tracking-wider font-light">
            A chronological portfolio of headline runway showcases, luxury campaigns, and published magazine spreads.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-editorial-bg border border-editorial-border hover:border-editorial-accent transition-all duration-400 p-8 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                {/* Top Meta Line */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-editorial-border">
                  <span className="font-serif-display text-3xl font-medium text-editorial-accent">
                    {exp.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-editorial px-3 py-1 bg-white border border-editorial-border text-editorial-gray font-sans font-medium">
                    {exp.category}
                  </span>
                </div>

                {/* Supporting Editorial Image Preview */}
                <div className="relative aspect-[16/9] w-full overflow-hidden mb-6 bg-editorial-black">
                  <img
                    src={exp.image}
                    alt={exp.projectName}
                    style={{ objectPosition: exp.cropPosition || 'center' }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Brand & Project Titles */}
                <span className="text-[11px] uppercase tracking-widest text-editorial-accent font-sans font-semibold block mb-1">
                  {exp.brand}
                </span>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-editorial-black group-hover:text-editorial-accent transition-colors duration-300 font-normal mb-3">
                  {exp.projectName}
                </h3>

                <p className="font-sans text-sm text-editorial-gray leading-relaxed font-light mb-6">
                  {exp.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-editorial-border flex items-center justify-between text-xs text-editorial-gray">
                <span className="font-sans text-[11px] uppercase tracking-wider">
                  Featured Model
                </span>
                <span className="flex items-center space-x-1 text-editorial-black group-hover:text-editorial-accent transition-colors font-medium">
                  <span className="text-[10px] uppercase tracking-widest">Archive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
