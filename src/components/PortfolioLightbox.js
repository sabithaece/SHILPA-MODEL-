import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PortfolioLightbox({
  isOpen,
  activeItem,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  totalItems
}) {
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
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Top Bar */}
        <div
          className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-50 border-b border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center space-x-3 text-xs tracking-[0.2em] text-white/90 font-name-sans uppercase">
            <span className="text-[#FFAD5A] font-semibold">{activeItem.category}</span>
            <span>/</span>
            <span>{portfolioData.brandInfo.name}</span>
          </div>

          <div className="text-xs tracking-[0.2em] text-white/60 font-name-sans hidden sm:block">
            {currentIndex + 1} OF {totalItems}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white hover:text-[#FFAD5A] transition-colors focus:outline-none"
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
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/60 border border-white/20 text-white hover:text-[#FFAD5A] hover:border-[#FFAD5A] transition-all duration-300 focus:outline-none rounded-full"
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
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/60 border border-white/20 text-white hover:text-[#FFAD5A] hover:border-[#FFAD5A] transition-all duration-300 focus:outline-none rounded-full"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <motion.div
          key={activeItem.id}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.94 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-4xl max-h-[85vh] w-full flex flex-col md:flex-row items-center bg-[#F7F4EF] border border-[#111111]/20 overflow-hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full md:w-3/5 h-[48vh] md:h-[75vh] bg-[#111111] relative overflow-hidden flex items-center justify-center">
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="max-w-full max-h-full object-contain object-center"
            />
          </div>

          <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col justify-between h-auto md:h-[75vh] bg-[#F7F4EF] overflow-y-auto text-left">
            <div>
              <div className="flex items-center space-x-2 text-[#111111]/70 text-xs uppercase tracking-[0.2em] font-name-sans mb-3 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#FFAD5A]" />
                <span>{activeItem.category} COLLECTION</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif-quote italic font-normal text-[#111111] block mb-1">
                {activeItem.title}
              </h3>

              <span className="text-xs uppercase tracking-[0.2em] text-[#777777] font-name-sans block mb-6 font-semibold">
                {activeItem.subtitle}
              </span>

              <div className="w-12 h-[2px] bg-[#111111] mb-6" />

              <p className="text-sm font-name-sans text-[#111111]/80 font-normal leading-relaxed mb-6">
                {activeItem.description}
              </p>
            </div>

            <div className="pt-6 border-t border-[#111111]/10 flex flex-col space-y-2.5 text-[11px] text-[#777777] font-name-sans uppercase tracking-[0.16em]">
              <div className="flex justify-between">
                <span>Model / Founder</span>
                <span className="text-[#111111] font-bold">{portfolioData.brandInfo.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Category</span>
                <span className="text-[#111111]">{activeItem.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Representation</span>
                <span className="text-[#111111] font-semibold">Vogue Modeling Company</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
