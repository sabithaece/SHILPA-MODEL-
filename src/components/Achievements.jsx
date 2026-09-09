import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Sparkles } from 'lucide-react';
import { achievements } from '../data/achievements';
import { MODEL_IMAGE } from '../constants/assets';

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-luxury-black border-t border-luxury-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-luxury-gold font-sans text-xs tracking-widest uppercase">04</span>
          <span className="w-8 h-[1px] bg-luxury-gold/50" />
          <span className="text-luxury-muted font-sans text-xs tracking-editorial uppercase">
            HONORS & RECOGNITION
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-luxury-cream tracking-tight">
              AWARDS & <span className="italic font-light text-luxury-sand">ACCOLADES</span>.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-luxury-muted max-w-md uppercase tracking-wider">
            Distinctions celebrating runway excellence, boundary-pushing editorial vision, and fashion industry leadership.
          </p>
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Prestigious Model Monograph Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative border border-luxury-border p-4 bg-luxury-surface/40 backdrop-blur-sm">
              {/* Corner Badges */}
              <div className="absolute top-2 left-2 text-luxury-gold">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="absolute bottom-2 right-2 text-luxury-gold">
                <Sparkles className="w-4 h-4" />
              </div>

              <div className="relative aspect-[4/5] overflow-hidden bg-luxury-black">
                <img
                  src={MODEL_IMAGE}
                  alt="Shilpa - Award Winning Fashion Model"
                  className="w-full h-full object-cover object-center grayscale contrast-115 transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 text-luxury-cream">
                  <div className="inline-flex items-center space-x-2 text-[10px] tracking-editorial uppercase text-luxury-gold font-sans mb-1">
                    <Trophy className="w-3 h-3" />
                    <span>HONOR ROLL // 2024–2026</span>
                  </div>
                  <h3 className="font-serif-display text-2xl tracking-wider mb-2 font-medium">
                    ARTISTRY & DISCIPLINE
                  </h3>
                  <p className="text-xs text-luxury-cream/70 font-sans font-light leading-relaxed">
                    "A transformative force on the ramp and an indelible muse in print."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Achievements List */}
          <div className="lg:col-span-7 space-y-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-8 bg-luxury-surface/70 border border-luxury-border hover:border-luxury-gold/60 transition-all duration-400 group relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-serif-display text-2xl sm:text-3xl text-luxury-cream group-hover:text-luxury-gold transition-colors duration-300 font-medium">
                      {item.title}
                    </span>
                  </div>
                  <span className="font-serif-display text-xl sm:text-2xl text-luxury-gold font-semibold">
                    {item.year}
                  </span>
                </div>

                <div className="flex items-center space-x-2 text-xs uppercase tracking-editorial text-luxury-muted font-sans mb-3">
                  <span className="text-luxury-sand">{item.organization}</span>
                  <span>•</span>
                  <span>{item.category}</span>
                </div>

                <p className="font-sans text-xs sm:text-sm text-luxury-cream/75 leading-relaxed font-light">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
