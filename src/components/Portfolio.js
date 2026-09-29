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
    <section id="portfolio" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-editorial-bg border-t border-editorial-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-editorial-accent font-sans text-xs tracking-widest uppercase font-semibold">03</span>
          <span className="w-8 h-[1px] bg-editorial-accent/40" />
          <span className="text-editorial-gray font-sans text-xs tracking-editorial uppercase">
            PORTFOLIO ARCHIVE
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-editorial-black tracking-tight">
              THE <span className="italic font-light text-editorial-accent">PORTFOLIO</span>.
            </h2>
            <p className="font-serif-display text-xl sm:text-2xl text-editorial-gray italic font-light mt-2">
              "A collection of moments, styles, and expressions."
            </p>
          </div>
          <p className="font-sans text-xs sm:text-sm text-editorial-gray max-w-md uppercase tracking-wider font-light">
            Curated high-fashion lookbook showcasing versatility across couture, commercial campaigns, traditional silhouettes, and fine jewelry.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-editorial-border pb-6">
          {portfolioData.portfolioCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`relative px-5 py-2.5 text-xs uppercase tracking-editorial font-sans transition-all duration-300 font-medium ${
                  isActive
                    ? 'text-white'
                    : 'text-editorial-black/70 hover:text-editorial-black hover:bg-white/80'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCleanPill"
                    className="absolute inset-0 bg-editorial-black shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Grid Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className={`group relative overflow-hidden bg-white border border-editorial-border hover:border-editorial-accent transition-all duration-500 shadow-sm hover:shadow-lg cursor-pointer ${
                  item.aspectRatio || 'aspect-[3/4]'
                }`}
                onClick={() => handleOpenLightbox(index)}
                data-cursor="view"
              >
                {/* Model Image with specific crop position */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ objectPosition: item.cropPosition || 'center' }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-400" />

                {/* Top Corner Badge: Category on Hover */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-[10px] font-sans tracking-widest uppercase z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 border border-white/20 text-[#D8C7B0]">
                    {item.category}
                  </span>
                  <span className="bg-black/60 backdrop-blur-md px-2 py-1 text-white/80">
                    0{item.id}
                  </span>
                </div>

                {/* Center Hover View Icon */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Bottom Title and Tagline on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white">
                  <span className="text-[10px] tracking-editorial uppercase text-[#D8C7B0] font-sans block mb-1">
                    {item.tagline}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-display text-2xl text-white font-medium">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#D8C7B0]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
