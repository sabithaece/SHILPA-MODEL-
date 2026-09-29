import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckSquare } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ModelProfile() {
  return (
    <section id="profile" className="relative py-20 md:py-28 px-6 md:px-12 lg:px-16 bg-editorial-bg border-t border-editorial-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-editorial-accent font-sans text-xs tracking-widest uppercase font-semibold">03</span>
          <span className="w-8 h-[1px] bg-editorial-accent/40" />
          <span className="text-editorial-gray font-sans text-xs tracking-editorial uppercase">
            SPECIFICATIONS & COMP CARD
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-editorial-black tracking-tight">
              MODEL <span className="italic font-light text-editorial-accent">PROFILE</span>.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-editorial-gray max-w-md uppercase tracking-wider font-light">
            Standard modeling specifications and comp card details for runway casting directors, fashion houses, and agency bookings.
          </p>
        </div>

        {/* Minimal Grid Layout for Measurements */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioData.modelProfile.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 md:p-8 bg-white border border-editorial-border hover:border-editorial-accent transition-all duration-300 shadow-sm group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] sm:text-xs uppercase tracking-editorial text-editorial-gray font-sans font-medium">
                  {item.label}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-editorial-accent/60 group-hover:scale-125 transition-transform" />
              </div>
              <span className="font-serif-display text-2xl sm:text-3xl text-editorial-black group-hover:text-editorial-accent transition-colors duration-300 block font-normal">
                {item.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Agency Note */}
        <div className="mt-12 p-6 bg-white border border-editorial-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-editorial-gray font-sans">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-editorial-black font-medium uppercase tracking-wider">
              Available For Commercial & Runway Bookings
            </span>
          </div>
          <span className="text-editorial-gray/80 tracking-widest text-[11px] uppercase">
            Updated For 2026 Season • High-Res Comp Card Available on Request
          </span>
        </div>
      </div>
    </section>
  );
}
