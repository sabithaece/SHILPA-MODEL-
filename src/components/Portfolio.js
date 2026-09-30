import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import PortfolioLightbox from './PortfolioLightbox';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return portfolioData.portfolioItems;
    return portfolioData.portfolioItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handleOpenLightbox = (index) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="portfolio" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 bg-white text-[#111111] border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#111111]/60 uppercase font-name-sans">
            02 / VISUAL GALLERY
          </span>
          <span className="w-12 h-[1px] bg-[#111111]/20" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-[#111111]/90 uppercase font-name-sans">
            CURATED ARCHIVE
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <h2 className="font-serif-quote italic text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight">
              PORTFOLIO
            </h2>
            <p className="font-serif-quote italic text-xl sm:text-2xl text-[#111111]/70 font-normal mt-2">
              &ldquo;Moments. Expressions. Stories.&rdquo;
            </p>
          </div>
          <p className="font-name-sans text-xs sm:text-sm text-[#777777] max-w-md uppercase tracking-[0.14em] font-medium leading-relaxed">
            Curated high-fashion lookbook showcasing editorial presence, executive tailoring, and runway versatility.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-[#111111]/10 pb-6">
          {portfolioData.portfolioCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`relative px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-name-sans transition-all duration-300 font-semibold ${
                  isActive
                    ? 'text-white'
                    : 'text-[#111111]/70 hover:text-[#111111] hover:bg-[#F7F4EF]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePortfolioPill"
                    className="absolute inset-0 bg-[#111111] shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Curated Grid Gallery - Clean CSS Grid with smooth AnimatePresence transition */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full"
            >
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative w-full aspect-[3/4] overflow-hidden bg-[#F7F4EF] border border-[#111111]/10 hover:border-[#111111] transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer"
                  onClick={() => handleOpenLightbox(index)}
                >
                  {/* Model Photograph */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Top Corner Badge: Category on Hover */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-[10px] font-name-sans tracking-[0.2em] uppercase z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="bg-black/75 backdrop-blur-md px-3 py-1 border border-white/20 text-[#FFAD5A] font-semibold">
                      {item.category}
                    </span>
                    <span className="bg-black/75 backdrop-blur-md px-2.5 py-1 text-white/80 font-medium">
                      0{item.id}
                    </span>
                  </div>

                  {/* Center Hover View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Bottom Title and Subtitle on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white text-left pointer-events-none">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#FFAD5A] font-name-sans block mb-1 font-semibold">
                      {item.subtitle}
                    </span>
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif-quote italic text-2xl text-white font-normal">
                        {item.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 text-[#FFAD5A]" />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <PortfolioLightbox
        isOpen={lightboxIndex !== null}
        activeItem={activeLightboxItem}
        onClose={handleCloseLightbox}
        onNext={handleNext}
        onPrev={handlePrev}
        currentIndex={lightboxIndex || 0}
        totalItems={filteredItems.length}
      />
    </section>
  );
}
