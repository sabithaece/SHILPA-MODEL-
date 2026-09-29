import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  if (!portfolioData.achievements || portfolioData.achievements.length === 0) {
    return null;
  }

  return (
    <section id="achievements" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-white border-t border-editorial-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-editorial-accent font-sans text-xs tracking-widest uppercase font-semibold">08</span>
          <span className="w-8 h-[1px] bg-editorial-accent/40" />
          <span className="text-editorial-gray font-sans text-xs tracking-editorial uppercase">
            HONORS & RECOGNITION
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-editorial-black tracking-tight">
              MILESTONES & <span className="italic font-light text-editorial-accent">ACHIEVEMENTS</span>.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-editorial-gray max-w-md uppercase tracking-wider font-light">
            Recognitions honoring runway distinction, editorial storytelling, and consistent commercial impact.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {portfolioData.achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 bg-editorial-bg border border-editorial-border hover:border-editorial-accent transition-all duration-400 group relative flex flex-col justify-between shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-editorial-border">
                  <span className="font-serif-display text-3xl font-medium text-editorial-accent">
                    {item.year}
                  </span>
                  <span className="text-[10px] uppercase tracking-editorial px-3 py-1 bg-white border border-editorial-border text-editorial-gray font-sans font-medium">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-editorial-black group-hover:text-editorial-accent transition-colors duration-300 font-normal mb-2">
                  {item.title}
                </h3>

                <span className="text-xs uppercase tracking-widest text-editorial-gray font-sans block mb-4">
                  {item.organization}
                </span>

                <p className="font-sans text-sm text-editorial-black/75 leading-relaxed font-light mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-editorial-border flex items-center justify-between text-xs text-editorial-gray font-sans">
                <span className="uppercase tracking-wider text-[10px]">Distinction Status</span>
                <span className="text-editorial-black font-medium">Official Award</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
