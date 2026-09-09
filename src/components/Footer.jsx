import React from 'react';
import { ArrowUp, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-luxury-black border-t border-luxury-border py-16 px-6 md:px-12 lg:px-16 text-luxury-cream">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-luxury-border">
          <div>
            <span className="font-serif-display text-4xl sm:text-5xl tracking-[0.25em] font-medium text-luxury-cream block">
              SHILPA
            </span>
            <span className="text-xs uppercase tracking-editorial text-luxury-gold font-sans block mt-2">
              FASHION • EDITORIAL • RUNWAY
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center space-x-6 text-xs tracking-editorial text-luxury-cream/80 font-sans uppercase">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-luxury-gold transition-colors flex items-center space-x-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-luxury-gold transition-colors flex items-center space-x-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:bookings@shilpamodel.com"
                className="hover:text-luxury-gold transition-colors flex items-center space-x-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3 border border-luxury-border hover:border-luxury-gold text-luxury-cream hover:text-luxury-gold transition-all duration-300 rounded-full"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-luxury-muted font-sans gap-4">
          <p>© 2026 Shilpa. All Rights Reserved. Model Portfolio.</p>
          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-wider">
            <span>Represented Internationally</span>
            <span>•</span>
            <span className="text-luxury-cream/80">Main Character Energy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
