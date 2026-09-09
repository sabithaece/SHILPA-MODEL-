import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home', number: '00' },
  { label: 'ABOUT', href: '#about', number: '01' },
  { label: 'EXPERIENCE', href: '#experience', number: '02' },
  { label: 'GALLERY', href: '#gallery', number: '03' },
  { label: 'ACHIEVEMENTS', href: '#achievements', number: '04' },
  { label: 'CONTACT', href: '#contact', number: '05' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for header background styling and active section detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 250;

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

  // Prevent background scrolling when mobile menu is open
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
            ? 'bg-luxury-black/85 backdrop-blur-md py-4 border-b border-luxury-border'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-serif-display text-2xl md:text-3xl tracking-[0.25em] font-medium text-luxury-cream group-hover:text-luxury-gold transition-colors duration-300">
              SHILPA
            </span>
            <span className="text-[9px] uppercase tracking-[0.35em] text-luxury-muted font-sans -mt-1 group-hover:text-luxury-sand transition-colors duration-300">
              Editorial Model
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative py-1 text-xs tracking-editorial uppercase transition-all duration-300 font-sans font-medium flex items-center space-x-1.5 ${
                    isActive
                      ? 'text-luxury-gold font-semibold'
                      : 'text-luxury-cream/70 hover:text-luxury-cream'
                  }`}
                >
                  <span className="text-[9px] text-luxury-gold/60">{item.number}</span>
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Direct CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden sm:inline-flex items-center space-x-2 text-xs uppercase tracking-editorial px-5 py-2.5 border border-luxury-cream/20 hover:border-luxury-gold text-luxury-cream hover:text-luxury-gold transition-all duration-300 group font-sans"
            >
              <span>BOOKING</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-luxury-cream hover:text-luxury-gold focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Luxury Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-luxury-black/98 backdrop-blur-2xl flex flex-col justify-between px-8 py-10 lg:hidden overflow-y-auto"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-luxury-border pb-6">
              <span className="font-serif-display text-2xl tracking-[0.25em] text-luxury-cream">
                SHILPA
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-luxury-cream hover:text-luxury-gold transition-colors focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Staggered Links */}
            <div className="flex flex-col space-y-6 my-auto py-8">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.4 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`group flex items-baseline space-x-4 text-2xl sm:text-3xl font-serif-display tracking-widest transition-colors duration-300 ${
                        isActive ? 'text-luxury-gold' : 'text-luxury-cream hover:text-luxury-gold'
                      }`}
                    >
                      <span className="text-xs font-sans text-luxury-gold/50 font-normal">
                        {item.number}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Details */}
            <div className="border-t border-luxury-border pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-luxury-muted font-sans">
              <div>
                <p className="text-luxury-cream/80">REPRESENTED IN ASIA & EUROPE</p>
                <p className="text-[11px] tracking-wider mt-0.5">bookings@shilpamodel.com</p>
              </div>
              <div className="flex items-center space-x-5">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-luxury-gold transition-colors p-1"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-luxury-gold transition-colors p-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:bookings@shilpamodel.com"
                  className="hover:text-luxury-gold transition-colors p-1"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
