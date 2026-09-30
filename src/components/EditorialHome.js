import React from 'react';
import { motion } from 'framer-motion';
import { MODEL_TRANSPARENT_IMAGE } from '../constants/assets';

export default function EditorialHome() {
  return (
    <section id="home" className="relative min-h-screen w-full bg-[#FFAD5A] text-[#171717] flex items-center justify-center overflow-x-hidden px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-16 sm:py-20 lg:py-8 pt-24 sm:pt-28 lg:pt-20">
      {/* Centered Hero Container */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
        
        {/* LEFT COLUMN: Model Photograph (Enhanced Scale & Positioned toward the Left) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex items-end justify-center lg:justify-start lg:pl-2 xl:pl-6 relative z-10 order-1"
        >
          <div className="relative w-full max-w-[460px] sm:max-w-[540px] lg:max-w-[620px] xl:max-w-[660px] flex items-end justify-center lg:justify-start">
            <img
              src={MODEL_TRANSPARENT_IMAGE}
              alt="Shilpa Seetharaman - CEO & Founder, Vogue Modeling Company & Rise Academy"
              className="w-auto h-auto max-h-[55vh] sm:max-h-[68vh] lg:max-h-[85vh] xl:max-h-[88vh] 2xl:max-h-[90vh] object-contain object-bottom drop-shadow-[0_18px_35px_rgba(0,0,0,0.13)] select-none pointer-events-none"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Typography Content */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 order-2 max-w-xl lg:max-w-none"
        >
          {/* Main Name */}
          <div className="mb-4 sm:mb-6 lg:mb-7 w-full">
            <h1 className="font-name-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[3.9rem] tracking-tight text-[#171717] leading-[0.98] uppercase">
              SHILPA <br />
              SEETHARAMAN
            </h1>
          </div>

          {/* Professional Designation */}
          <div className="mb-8 sm:mb-10 lg:mb-12 space-y-1 sm:space-y-1.5 w-full">
            <p className="font-name-sans text-xs sm:text-sm md:text-[0.95rem] font-bold tracking-[0.24em] text-[#171717]/90 uppercase leading-relaxed">
              CEO &amp; FOUNDER
            </p>
            <p className="font-name-sans text-xs sm:text-sm md:text-[0.95rem] font-bold tracking-[0.24em] text-[#171717]/90 uppercase leading-relaxed">
              VOGUE MODELING COMPANY &amp; RISE ACADEMY
            </p>
          </div>

          {/* Quotation & Supporting Line */}
          <div className="space-y-3 sm:space-y-4 w-full">
            <blockquote className="font-serif-quote italic text-2xl sm:text-3xl md:text-4xl lg:text-[2.35rem] xl:text-[2.75rem] font-normal text-[#171717] leading-snug">
              &ldquo;Confidence in Every Frame.&rdquo;
            </blockquote>

            <p className="font-name-sans text-xs sm:text-sm md:text-base tracking-[0.14em] text-[#171717]/80 font-medium">
              &ldquo;Where confidence meets creativity.&rdquo;
            </p>
          </div>
        </motion.div>

      </div>

      {/* Subtle Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[#171717]/70 hover:text-[#171717] transition-colors cursor-pointer group z-20 select-none"
        aria-label="Scroll to explore About section"
      >
        <span className="font-name-sans text-[10px] sm:text-xs font-semibold tracking-[0.26em] uppercase">
          SCROLL TO EXPLORE
        </span>
        <span className="text-xs sm:text-sm group-hover:translate-y-0.5 transition-transform">↓</span>
      </motion.a>
    </section>
  );
}
