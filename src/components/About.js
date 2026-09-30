import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ArrowUpRight, Award, Compass, Sparkles, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function AnimatedCounter({ value, suffix }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
        onUpdate(latest) {
          setDisplayValue(Math.floor(latest));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-name-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight">
      {displayValue}
      <span className="text-[#FFAD5A] ml-0.5">{suffix}</span>
    </span>
  );
}

export default function About() {
  const { about, stats } = portfolioData;

  const scrollToPortfolio = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 bg-[#F7F4EF] text-[#111111] border-t border-[#111111]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Section Label */}
        <div className="flex items-center space-x-3 mb-12 sm:mb-16">
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#111111]/60 uppercase font-name-sans">
            01 / INTRODUCTION
          </span>
          <span className="w-12 h-[1px] bg-[#111111]/20" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-[#111111]/90 uppercase font-name-sans">
            EDITORIAL BIOGRAPHY
          </span>
        </div>

        {/* Two-Column Editorial Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20 sm:mb-28">
          
          {/* Left Column: Model Photograph in Editorial Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative border border-[#111111]/15 p-3 sm:p-4 bg-white shadow-xl">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#111111]">
                <img
                  src={about.image}
                  alt="Shilpa Seetharaman Portrait"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="pt-3 px-1 flex justify-between items-center text-[10px] text-[#777777] font-name-sans uppercase tracking-[0.22em]">
                <span>EDITORIAL ARCHIVE</span>
                <span className="text-[#111111] font-semibold">SHILPA SEETHARAMAN</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Story & Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center space-x-2 text-[#111111]/70 text-xs font-name-sans tracking-[0.22em] uppercase mb-4 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#FFAD5A]" />
              <span>THE VISIONARY BEHIND THE LENS</span>
            </div>

            <h2 className="font-serif-quote italic text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight leading-[1.08] mb-6">
              {about.heading}
            </h2>

            <div className="w-16 h-[2px] bg-[#111111] mb-6" />

            {/* Exact Requested Lead Introduction */}
            <p className="font-name-sans text-base sm:text-lg lg:text-xl font-medium text-[#111111] leading-relaxed mb-6">
              "{about.lead}"
            </p>

            {/* Narrative Story */}
            <div className="space-y-4 text-sm sm:text-base text-[#111111]/75 leading-relaxed font-normal mb-8">
              {about.story.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Direct Action */}
            <div className="pt-2">
              <button
                onClick={scrollToPortfolio}
                className="inline-flex items-center space-x-3 px-7 py-3.5 bg-[#111111] text-white hover:bg-[#FFAD5A] hover:text-[#111111] transition-all duration-300 font-name-sans text-xs uppercase tracking-[0.22em] font-semibold group shadow-sm"
              >
                <span>EXPLORE PORTFOLIO</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Visual Statistics Cards with Number Counter Animations */}
        <div className="border-t border-[#111111]/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 sm:p-10 bg-white border border-[#111111]/10 shadow-sm flex flex-col justify-between group hover:border-[#111111]/30 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold font-name-sans tracking-[0.24em] text-[#777777] uppercase">
                      0{idx + 1} // METRIC
                    </span>
                    {idx === 0 && <Compass className="w-5 h-5 text-[#FFAD5A]" />}
                    {idx === 1 && <Award className="w-5 h-5 text-[#FFAD5A]" />}
                    {idx === 2 && <Users className="w-5 h-5 text-[#FFAD5A]" />}
                  </div>

                  <div className="mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>

                  <h3 className="font-name-sans font-bold text-xs sm:text-sm tracking-[0.2em] text-[#111111] uppercase mt-2">
                    {stat.label}
                  </h3>
                </div>

                <p className="font-name-sans text-xs text-[#777777] leading-relaxed mt-4 pt-4 border-t border-[#111111]/5">
                  {stat.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
