import React from 'react';
import { ArrowUp, Instagram, Mail, MessageCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { brandInfo, contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#111111] text-white py-16 sm:py-20 px-5 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col justify-between space-y-12">
        {/* Top Tier */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div className="text-left">
            <span className="font-name-sans font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-[0.2em] uppercase text-white block">
              {brandInfo.name}
            </span>
            <span className="text-xs uppercase tracking-[0.22em] text-[#FFAD5A] font-name-sans block mt-2 font-semibold">
              {brandInfo.company}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center space-x-6 text-xs tracking-[0.16em] text-white/70 font-name-sans uppercase">
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFAD5A] transition-colors flex items-center space-x-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFAD5A] transition-colors flex items-center space-x-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-[#FFAD5A] transition-colors flex items-center space-x-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-4 py-2 border border-white/20 hover:border-[#FFAD5A] text-white hover:text-[#FFAD5A] text-xs uppercase tracking-[0.2em] font-name-sans font-semibold transition-all duration-300"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-white/50 font-name-sans gap-4">
          <p>© {new Date().getFullYear()} {brandInfo.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-4 sm:space-x-6 text-[10px] sm:text-[11px] uppercase tracking-[0.2em]">
            <span>VOGUE MODELING COMPANY</span>
            <span>•</span>
            <span className="text-[#FFAD5A] font-semibold">&ldquo;Confidence in Every Frame&rdquo;</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

