import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements, leadershipSpotlights } = portfolioData;

  return (
    <section id="achievements" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#F7F4EF] text-[#111111] border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#111111]/60 uppercase font-name-sans">
            03 / MILESTONES & HONORS
          </span>
          <span className="w-12 h-[1px] bg-[#111111]/20" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-[#111111]/90 uppercase font-name-sans">
            TRACK RECORD
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6 text-left">
          <div>
            <h2 className="font-serif-quote italic text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight">
              ACHIEVEMENTS
            </h2>
            <p className="font-serif-quote italic text-xl sm:text-2xl text-[#111111]/70 font-normal mt-2">
              &ldquo;A journey defined by discipline, artistry, and empowerment.&rdquo;
            </p>
          </div>
          <p className="font-name-sans text-xs sm:text-sm text-[#777777] max-w-md uppercase tracking-[0.14em] font-medium leading-relaxed">
            From runway runways to pioneering talent incubation through Vogue Modeling Company and Rise Academy.
          </p>
        </div>

        {/* Leadership & Stage Visual Spotlights */}
        {leadershipSpotlights && leadershipSpotlights.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 sm:mb-20">
            {leadershipSpotlights.map((spotlight, idx) => (
              <motion.div
                key={spotlight.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white border border-[#111111]/10 overflow-hidden shadow-sm hover:shadow-xl hover:border-[#111111] transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#111111]">
                  <img
                    src={spotlight.image}
                    alt={spotlight.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/75 backdrop-blur-md px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-name-sans font-semibold text-[#FFAD5A] border border-white/20">
                      STAGE &amp; LEADERSHIP // 0{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="p-8 sm:p-10 flex flex-col justify-between flex-grow text-left">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-name-sans text-[#777777] block mb-2">
                      {spotlight.subtitle}
                    </span>
                    <h3 className="font-serif-quote italic text-2xl sm:text-3xl text-[#111111] font-normal leading-snug mb-3">
                      {spotlight.title}
                    </h3>
                    <div className="w-10 h-[2px] bg-[#FFAD5A] mb-4 group-hover:w-16 transition-all duration-300" />
                    <p className="font-name-sans text-xs sm:text-sm text-[#777777] leading-relaxed">
                      {spotlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Editorial Timeline & Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white p-8 sm:p-10 border border-[#111111]/10 flex flex-col justify-between hover:border-[#111111] hover:shadow-xl transition-all duration-300 group text-left relative overflow-hidden"
            >
              {/* Top Accent Strip on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFAD5A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Year & Category Pill */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-name-sans font-extrabold text-2xl sm:text-3xl text-[#111111] tracking-tight">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase font-name-sans px-3 py-1 bg-[#F7F4EF] text-[#111111]/80 border border-[#111111]/10 group-hover:bg-[#111111] group-hover:text-white transition-colors duration-300">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif-quote italic text-2xl text-[#111111] font-normal leading-snug mb-4 group-hover:text-[#111111] transition-colors">
                  {item.title}
                </h3>

                <div className="w-10 h-[1.5px] bg-[#FFAD5A] mb-4 group-hover:w-16 transition-all duration-300" />

                {/* Description */}
                <p className="font-name-sans text-xs sm:text-sm text-[#777777] leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Card Footer Marker */}
              <div className="pt-6 mt-6 border-t border-[#111111]/5 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#777777] font-name-sans font-semibold">
                <span>MILESTONE // 0{index + 1}</span>
                <Sparkles className="w-3.5 h-3.5 text-[#FFAD5A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
