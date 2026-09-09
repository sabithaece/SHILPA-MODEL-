import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, ArrowUpRight, Sparkles } from 'lucide-react';
import { galleryCategories, galleryItems } from '../data/gallery';
import GalleryLightbox from './GalleryLightbox';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter items based on active category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "ALL") return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
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
    <section id="gallery" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-luxury-dark border-t border-luxury-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-luxury-gold font-sans text-xs tracking-widest uppercase">03</span>
          <span className="w-8 h-[1px] bg-luxury-gold/50" />
          <span className="text-luxury-muted font-sans text-xs tracking-editorial uppercase">
            EDITORIAL ARCHIVE
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-luxury-cream tracking-tight">
              CURATED <span className="italic font-light text-luxury-sand">GALLERY</span>.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-luxury-muted max-w-md uppercase tracking-wider">
            Explore diverse compositions, lighting studies, and high-fashion aesthetics showcasing versatility across print, runway, and digital media.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 border-b border-luxury-border pb-6">
          {galleryCategories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`relative px-4 py-2 text-xs uppercase tracking-editorial font-sans transition-all duration-300 ${
                  isActive
                    ? 'text-luxury-black font-semibold'
                    : 'text-luxury-cream/70 hover:text-luxury-cream hover:bg-luxury-surface/50'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-luxury-gold"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative overflow-hidden bg-luxury-black border border-luxury-border hover:border-luxury-gold/60 transition-all duration-500 shadow-xl cursor-pointer ${
                  item.aspectRatio || 'aspect-[3/4]'
                }`}
                onClick={() => handleOpenLightbox(index)}
                data-cursor="view"
              >
                {/* Model Image with specific crop & editorial filter */}
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ objectPosition: item.cropPosition || 'center' }}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    item.filterClass || ''
                  }`}
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Top Corner Badge: Number & Category */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-luxury-cream text-[11px] font-sans tracking-widest uppercase z-10">
                  <span className="bg-luxury-black/70 backdrop-blur-md px-2.5 py-1 border border-luxury-border text-luxury-gold">
                    {item.number}
                  </span>
                  <span className="text-luxury-muted text-[10px] tracking-editorial">
                    {item.category}
                  </span>
                </div>

                {/* Center Hover Trigger Indicator */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="w-12 h-12 rounded-full bg-luxury-cream/10 backdrop-blur-md border border-luxury-cream/40 flex items-center justify-center text-luxury-cream shadow-xl">
                    <Eye className="w-5 h-5 text-luxury-gold" />
                  </div>
                </div>

                {/* Bottom Title and Editorial Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] tracking-editorial uppercase text-luxury-gold font-sans block mb-1">
                    {item.tagline}
                  </span>
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif-display text-xl sm:text-2xl text-luxury-cream font-medium">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-luxury-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <GalleryLightbox
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
