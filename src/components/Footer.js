import React from 'react';
import { ArrowUp, Instagram, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white border-t border-editorial-border py-16 px-6 md:px-12 lg:px-16 text-editorial-black">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-editorial-border">
          <div>
            <span className="font-serif-display text-4xl sm:text-5xl tracking-[0.25em] font-normal text-editorial-black block">
              {portfolioData.modelInfo.name}
            </span>
            <span className="text-xs uppercase tracking-editorial text-editorial-accent font-sans block mt-2 font-medium">
              FASHION MODEL • EDITORIAL • COMMERCIAL
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center space-x-6 text-xs tracking-editorial text-editorial-gray font-sans uppercase">
              <a
                href={portfolioData.modelInfo.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-editorial-accent transition-colors flex items-center space-x-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href={portfolioData.modelInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-editorial-accent transition-colors flex items-center space-x-1.5"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${portfolioData.modelInfo.email}`}
                className="hover:text-editorial-accent transition-colors flex items-center space-x-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-4 py-2 border border-editorial-border hover:border-editorial-accent text-editorial-black hover:text-editorial-accent text-xs uppercase tracking-editorial font-sans font-medium transition-all duration-300"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-editorial-gray font-sans gap-4">
          <p>© 2026 {portfolioData.modelInfo.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-[11px] uppercase tracking-wider">
            <span>Editorial & Runway Portfolio</span>
            <span>•</span>
            <span className="text-editorial-accent font-medium">Confidence in Every Frame</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
