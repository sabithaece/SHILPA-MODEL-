import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ModelProfile from './components/ModelProfile';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Services from './components/Services';
import VideoGallery from './components/VideoGallery';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const location = useLocation();

  // Scroll Progress Bar in Muted Gold Accent
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle URL path routing e.g. /about, /gallery to auto-scroll smoothly
  useEffect(() => {
    const path = location.pathname.replace('/', '');
    if (path) {
      const el = document.getElementById(path);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-editorial-bg text-editorial-black selection:bg-editorial-accent selection:text-white">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-editorial-accent origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Minimal Custom Desktop Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero />
        <About />
        <ModelProfile />
        <Experience />
        <Gallery />
        <Services />
        <VideoGallery />
        <Achievements />
        <Contact />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />
    </div>
  );
}
