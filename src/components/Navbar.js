import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Instagram, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 280;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F7F5F2]/95 backdrop-blur-md py-4 border-b border-editorial-border shadow-sm'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left Brand: SABITHA */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-serif-display text-2xl md:text-3xl tracking-[0.28em] font-medium text-editorial-black group-hover:text-editorial-accent transition-colors duration-300">
              {portfolioData.modelInfo.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-editorial-gray font-sans -mt-1 group-hover:text-editorial-black transition-colors duration-300">
              Fashion Model
            </span>
          </a>

          {/* Right Desktop Nav Menu: Strictly 4 Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 text-xs tracking-editorial uppercase transition-all duration-300 font-sans font-medium ${
                    isActive
                      ? 'text-editorial-accent font-semibold'
                      : 'text-editorial-black/75 hover:text-editorial-black'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeCleanNav"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-editorial-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Minimal "BOOK ME" Button & Hamburger */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-editorial px-5 py-2.5 bg-editorial-black text-white hover:bg-editorial-accent transition-all duration-300 font-sans font-medium group shadow-sm"
            >
              <span>BOOK ME</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-editorial-black hover:text-editorial-accent focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#F7F5F2] flex flex-col justify-between px-8 py-8 md:hidden overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-editorial-border pb-5">
              <div>
                <span className="font-serif-display text-2xl tracking-[0.25em] text-editorial-black block">
                  {portfolioData.modelInfo.name}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-editorial-gray">
                  Editorial Portfolio
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-editorial-black hover:text-editorial-accent transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* 4 Staggered Links */}
            <div className="flex flex-col space-y-6 my-auto py-8">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.35 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`font-serif-display text-3xl sm:text-4xl tracking-widest transition-colors duration-300 flex items-center justify-between ${
                        isActive ? 'text-editorial-accent font-medium' : 'text-editorial-black hover:text-editorial-accent'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-sans text-editorial-gray/60 font-normal">
                        0{idx + 1}
                      </span>
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Drawer Bottom Info */}
            <div className="border-t border-editorial-border pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-editorial-gray font-sans">
              <div>
                <p className="text-editorial-black font-medium">{portfolioData.modelInfo.location}</p>
                <p className="text-[11px] mt-0.5">{portfolioData.modelInfo.email}</p>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href={portfolioData.modelInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-editorial-accent transition-colors p-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.modelInfo.email}`}
                  className="hover:text-editorial-accent transition-colors p-1"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${portfolioData.modelInfo.phone}`}
                  className="hover:text-editorial-accent transition-colors p-1"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
