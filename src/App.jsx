import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const location = useLocation();

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Handle URL path routing e.g. /about, /gallery etc. to auto-scroll
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
    <div className="relative min-h-screen bg-luxury-black text-luxury-cream selection:bg-luxury-gold selection:text-luxury-black">
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-luxury-gold origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      {/* Minimal Custom Desktop Cursor */}
      <CustomCursor />

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Experience />
        <Gallery />
        <Achievements />
        <Contact />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />
    </div>
  );
}
