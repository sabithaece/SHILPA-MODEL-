import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function GalleryLightbox({
  isOpen,
  activeItem,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalItems
}) {
  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !activeItem) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-black/95 backdrop-blur-xl p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div
          className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-50 border-b border-luxury-border"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center space-x-3 text-xs tracking-editorial text-luxury-cream/80 font-sans uppercase">
            <span className="text-luxury-gold font-medium">{activeItem.number}</span>
            <span>/</span>
            <span>{activeItem.category}</span>
          </div>

          <div className="text-xs tracking-widest text-luxury-muted font-sans hidden sm:block">
            {currentIndex + 1} OF {totalItems}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-luxury-cream hover:text-luxury-gold hover:rotate-90 transition-all duration-300 focus:outline-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-luxury-surface/80 border border-luxury-border text-luxury-cream hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300 focus:outline-none rounded-full"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-luxury-surface/80 border border-luxury-border text-luxury-cream hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300 focus:outline-none rounded-full"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Central Modal Content */}
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl max-h-[85vh] w-full flex flex-col md:flex-row items-center bg-luxury-surface border border-luxury-border overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Image Frame */}
          <div className="w-full md:w-3/5 h-[50vh] md:h-[75vh] bg-luxury-black relative overflow-hidden flex items-center justify-center">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              style={{ objectPosition: activeItem.cropPosition || 'center' }}
              className={`w-full h-full object-cover ${activeItem.filterClass || ''}`}
            />
          </div>

          {/* Editorial Caption Panel */}
          <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-between h-auto md:h-[75vh] bg-luxury-surface overflow-y-auto">
            <div>
              <div className="flex items-center space-x-2 text-luxury-gold text-xs uppercase tracking-editorial font-sans mb-3">
                <Sparkles className="w-3 h-3" />
                <span>{activeItem.category} SERIES</span>
              </div>

              <span className="text-3xl sm:text-4xl font-serif-display font-medium text-luxury-cream block mb-1">
                {activeItem.title}
              </span>

              <span className="text-xs uppercase tracking-widest text-luxury-muted font-sans block mb-6">
                {activeItem.tagline}
              </span>

              <div className="w-12 h-[1px] bg-luxury-gold/50 mb-6" />

              <p className="text-sm font-sans text-luxury-cream/80 font-light leading-relaxed mb-6">
                {activeItem.editorialNote}
              </p>
            </div>

            <div className="pt-6 border-t border-luxury-border flex flex-col space-y-2 text-[11px] text-luxury-muted font-sans uppercase tracking-wider">
              <div className="flex justify-between">
                <span>Model</span>
                <span className="text-luxury-cream">Shilpa</span>
              </div>
              <div className="flex justify-between">
                <span>Medium</span>
                <span className="text-luxury-cream">Haute Couture Study</span>
              </div>
              <div className="flex justify-between">
                <span>Year</span>
                <span className="text-luxury-gold">2026 Collection</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
