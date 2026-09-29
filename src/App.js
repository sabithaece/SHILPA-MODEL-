import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
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

  // Handle URL path routing e.g. /about, /portfolio, /contact to auto-scroll smoothly
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

      {/* Main Content Sections: 4 Core Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </main>

      {/* Minimal Luxury Footer */}
      <Footer />
    </div>
  );
}
