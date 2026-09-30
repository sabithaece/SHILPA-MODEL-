import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Instagram, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  { label: 'ACHIEVEMENTS', href: '#achievements' },
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
            ? 'bg-[#F7F4EF]/90 backdrop-blur-md py-4 border-b border-[#111111]/10 shadow-sm text-[#111111]'
            : 'bg-transparent py-5 sm:py-6 text-[#171717]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Left Brand: SHILPA SEETHARAMAN */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-name-sans font-extrabold text-lg sm:text-xl md:text-2xl tracking-[0.2em] uppercase transition-colors duration-300">
              {portfolioData.brandInfo.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.28em] text-[#171717]/70 font-name-sans -mt-0.5">
              CEO &amp; Founder
            </span>
          </a>

          {/* Desktop Nav Menu: 5 Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 text-xs tracking-[0.2em] uppercase transition-all duration-300 font-name-sans font-medium ${
                    isActive
                      ? 'text-[#111111] font-bold'
                      : 'text-[#171717]/70 hover:text-[#111111]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#111111]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Hamburger */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center space-x-1.5 sm:space-x-2 text-[11px] sm:text-xs uppercase tracking-[0.2em] px-4 sm:px-5 py-2.5 bg-[#171717] text-white hover:bg-[#FFAD5A] hover:text-[#171717] transition-all duration-300 font-name-sans font-semibold group shadow-sm"
            >
              <span>COLLABORATE</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#171717] hover:text-black focus:outline-none transition-colors"
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
            className="fixed inset-0 z-50 bg-[#F7F4EF] flex flex-col justify-between px-8 py-8 lg:hidden overflow-y-auto"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-[#111111]/10 pb-5">
              <div>
                <span className="font-name-sans font-extrabold text-xl tracking-[0.18em] text-[#111111] uppercase block">
                  {portfolioData.brandInfo.name}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#777777]">
                  {portfolioData.brandInfo.company}
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#111111] hover:text-[#FFAD5A] transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* 5 Staggered Links */}
            <div className="flex flex-col space-y-6 my-auto py-8">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.35 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`font-serif-quote italic text-3xl sm:text-4xl tracking-wide transition-colors duration-300 flex items-center justify-between ${
                        isActive ? 'text-[#111111] font-semibold' : 'text-[#777777] hover:text-[#111111]'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-name-sans not-italic text-[#777777]/60 font-medium">
                        0{idx + 1}
                      </span>
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Drawer Bottom Info */}
            <div className="border-t border-[#111111]/10 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#777777] font-name-sans">
              <div>
                <p className="text-[#111111] font-medium">{portfolioData.contact.location}</p>
                <p className="text-[11px] mt-0.5">{portfolioData.contact.email}</p>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href={portfolioData.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#111111] transition-colors p-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${portfolioData.contact.email}`}
                  className="hover:text-[#111111] transition-colors p-1"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${portfolioData.contact.phone}`}
                  className="hover:text-[#111111] transition-colors p-1"
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
