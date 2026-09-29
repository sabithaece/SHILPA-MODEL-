import React from 'react';
import { motion } from 'framer-motion';
import { MODEL_TRANSPARENT_IMAGE } from '../constants/assets';

export default function EditorialHome() {
  return (
    <div className="relative min-h-screen w-full bg-[#FFAD5A] text-[#171717] flex flex-col justify-center overflow-hidden">
      {/* Main Grid Container */}
      <div className="w-full max-w-[1600px] mx-auto min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 py-8 lg:py-0">
        
        {/* LEFT SIDE: Model Photograph (Approx 55-60% width on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[58%] xl:w-[56%] flex justify-center lg:justify-start items-end h-[50vh] sm:h-[60vh] lg:h-screen relative z-10 order-1 pt-6 lg:pt-0"
        >
          <div className="relative w-full h-full flex items-end justify-center lg:justify-start">
            <img
              src={MODEL_TRANSPARENT_IMAGE}
              alt="Shilpa Seetharaman - CEO & Founder, Vogue Modeling Company"
              className="max-h-[92%] sm:max-h-[95%] lg:max-h-[96%] w-auto object-contain object-bottom drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)] select-none pointer-events-none"
            />
          </div>
        </motion.div>

        {/* RIGHT SIDE: Text Content (Approx 40-45% width on Desktop) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[42%] xl:w-[44%] flex flex-col justify-center text-left py-8 lg:py-0 lg:pl-10 xl:pl-14 relative z-20 order-2"
        >
          {/* Main Name */}
          <div className="mb-4 sm:mb-6">
            <h1 className="font-name-sans font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tight text-[#171717] leading-[0.95] uppercase">
              SHILPA <br />
              SEETHARAMAN
            </h1>
          </div>

          {/* Professional Designation */}
          <div className="mb-10 sm:mb-14">
            <p className="font-name-sans text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-[#171717]/90 uppercase leading-relaxed">
              CEO &amp; FOUNDER
            </p>
            <p className="font-name-sans text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-[#171717]/90 uppercase leading-relaxed">
              VOGUE MODELING COMPANY
            </p>
          </div>

          {/* Quotation & Supporting Line */}
          <div className="space-y-3">
            <blockquote className="font-serif-quote italic text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-normal text-[#171717] leading-snug">
              &ldquo;Confidence in Every Frame.&rdquo;
            </blockquote>

            <p className="font-name-sans text-xs sm:text-sm md:text-base tracking-[0.12em] text-[#171717]/75 font-normal">
              &ldquo;Where confidence meets creativity.&rdquo;
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
