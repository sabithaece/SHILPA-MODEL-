import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Sparkles, Film, Clock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState(null);

  if (!portfolioData.videoReels || portfolioData.videoReels.length === 0) {
    return null;
  }

  return (
    <section id="behind-the-lens" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-editorial-bg border-t border-editorial-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-editorial-accent font-sans text-xs tracking-widest uppercase font-semibold">07</span>
          <span className="w-8 h-[1px] bg-editorial-accent/40" />
          <span className="text-editorial-gray font-sans text-xs tracking-editorial uppercase">
            MOTION & REELS
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-editorial-black tracking-tight">
              BEHIND THE <span className="italic font-light text-editorial-accent">LENS</span>.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-editorial-gray max-w-md uppercase tracking-wider font-light">
            Dynamic runway motion, studio behind-the-scenes recordings, and video lookbooks highlighting stage presence and confidence in motion.
          </p>
        </div>

        {/* 4 Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {portfolioData.videoReels.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-editorial-border hover:border-editorial-accent transition-all duration-400 p-6 sm:p-8 flex flex-col justify-between group shadow-sm hover:shadow-md cursor-pointer"
              onClick={() => setActiveVideo(video)}
            >
              <div>
                {/* Video Thumbnail with Play Overlay */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-editorial-black mb-6 group">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    style={{ objectPosition: video.cropPosition || 'center' }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />

                  {/* Play Button Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 text-editorial-black flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-editorial-accent group-hover:text-white transition-all duration-300 pl-1">
                      <Play className="w-6 h-6 fill-current" />
                    </div>
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-sm text-white px-2.5 py-1 text-[10px] font-sans flex items-center space-x-1.5 rounded-sm">
                    <Clock className="w-3 h-3 text-editorial-accent" />
                    <span>{video.duration}</span>
                  </div>

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 bg-white/90 text-editorial-black px-2.5 py-1 text-[10px] uppercase tracking-wider font-sans font-medium">
                    {video.category}
                  </div>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-editorial-black group-hover:text-editorial-accent transition-colors duration-300 font-normal mb-2">
                  {video.title}
                </h3>

                <p className="font-sans text-sm text-editorial-gray leading-relaxed font-light mb-4">
                  {video.description}
                </p>
              </div>

              <div className="pt-4 border-t border-editorial-border flex items-center justify-between text-xs text-editorial-gray font-sans">
                <span className="uppercase tracking-wider text-[11px] font-medium text-editorial-accent">
                  Click to Watch Reel
                </span>
                <span className="text-[11px]">HD 1080p Motion</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-[#111111] border border-white/20 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-6 flex items-center justify-between border-b border-white/10 text-white">
                <div>
                  <span className="text-xs uppercase tracking-editorial text-[#8B7355] block font-medium">
                    {activeVideo.category}
                  </span>
                  <h3 className="font-serif-display text-xl sm:text-2xl text-white font-medium">
                    {activeVideo.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-2 text-white/80 hover:text-white hover:rotate-90 transition-all duration-300 focus:outline-none"
                  aria-label="Close video player"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Responsive Video Frame */}
              <div className="relative aspect-[16/9] w-full bg-black flex items-center justify-center">
                <div className="relative w-full h-full">
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    style={{ objectPosition: activeVideo.cropPosition || 'center' }}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-black via-black/40 to-transparent text-white">
                    <div className="w-20 h-20 rounded-full bg-white/20 border border-white/40 flex items-center justify-center mb-4 backdrop-blur-sm animate-pulse">
                      <Film className="w-8 h-8 text-[#D8C7B0]" />
                    </div>
                    <h4 className="font-serif-display text-2xl mb-2 font-medium">
                      {activeVideo.title}
                    </h4>
                    <p className="text-xs font-sans text-white/80 max-w-md mb-4 font-light">
                      {activeVideo.description}
                    </p>
                    <span className="text-[10px] uppercase tracking-widest text-[#D8C7B0] border border-[#D8C7B0]/50 px-4 py-1.5">
                      High-Definition Video Reel Available on Request
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
