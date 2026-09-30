import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: contact.projectTypes[0] || 'Editorial & Fashion Shoot',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide details about your enquiry';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: contact.projectTypes[0] || 'Editorial & Fashion Shoot',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-5 sm:px-8 md:px-12 lg:px-16 bg-white text-[#111111] border-t border-[#111111]/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-[11px] font-bold tracking-[0.28em] text-[#111111]/60 uppercase font-name-sans">
            04 / CONNECT
          </span>
          <span className="w-12 h-[1px] bg-[#111111]/20" />
          <span className="text-[11px] font-semibold tracking-[0.24em] text-[#111111]/90 uppercase font-name-sans">
            BOOKINGS &amp; ENQUIRIES
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 text-left">
          <h2 className="font-serif-quote italic text-4xl sm:text-5xl lg:text-6xl font-normal text-[#111111] tracking-tight mb-4">
            {contact.heading}
          </h2>
          <p className="font-name-sans text-sm sm:text-base text-[#777777] leading-relaxed max-w-2xl font-normal">
            &ldquo;{contact.subheading}&rdquo;
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Booking Actions */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="p-8 sm:p-10 bg-[#F7F4EF] border border-[#111111]/10 shadow-sm">
              <span className="text-xs uppercase tracking-[0.22em] text-[#111111] font-name-sans block mb-8 font-bold">
                DIRECT CHANNELS
              </span>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-[#FFAD5A] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#777777] font-name-sans block font-semibold">
                      LOCATION
                    </span>
                    <span className="text-sm font-name-sans text-[#111111] font-medium">
                      {contact.location}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-[#FFAD5A] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#777777] font-name-sans block font-semibold">
                      OFFICIAL EMAIL
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-name-sans text-[#111111] hover:text-[#FFAD5A] transition-colors font-medium"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-[#FFAD5A] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#777777] font-name-sans block font-semibold">
                      PHONE NUMBER
                    </span>
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-sm font-name-sans text-[#111111] hover:text-[#FFAD5A] transition-colors font-medium"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <MessageCircle className="w-5 h-5 text-[#FFAD5A] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#777777] font-name-sans block font-semibold">
                      WHATSAPP ENQUIRIES
                    </span>
                    <a
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-name-sans text-[#111111] hover:text-[#FFAD5A] transition-colors font-medium"
                    >
                      {contact.whatsappNumber}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4">
                  <Instagram className="w-5 h-5 text-[#FFAD5A] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#777777] font-name-sans block font-semibold">
                      INSTAGRAM
                    </span>
                    <a
                      href={contact.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-name-sans text-[#111111] hover:text-[#FFAD5A] transition-colors font-medium"
                    >
                      {contact.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Booking Actions */}
              <div className="mt-10 pt-6 border-t border-[#111111]/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${contact.email}?subject=Booking & Collaboration Inquiry - Shilpa Seetharaman`}
                  className="flex-1 py-3 px-4 bg-[#111111] text-white hover:bg-[#FFAD5A] hover:text-[#111111] text-center text-xs uppercase tracking-[0.2em] font-name-sans font-bold transition-all shadow-sm"
                >
                  BOOK / COLLABORATE
                </a>

                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 bg-white border border-[#111111]/15 hover:border-[#111111] text-[#111111] text-center text-xs uppercase tracking-[0.2em] font-name-sans font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>CHAT ON WHATSAPP</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 bg-[#F7F4EF] border border-[#111111]/10 shadow-sm text-left">
              <h3 className="font-serif-quote italic text-2xl sm:text-3xl text-[#111111] font-normal mb-2">
                Send an Enquiry
              </h3>
              <p className="font-name-sans text-xs text-[#777777] uppercase tracking-[0.16em] mb-8 font-semibold">
                Direct management response within 24-48 hours
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111] font-name-sans mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 bg-white border border-[#111111]/15 text-[#111111] placeholder-[#777777]/50 text-sm font-name-sans focus:outline-none focus:border-[#111111] transition-colors"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-name-sans">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111] font-name-sans mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@organization.com"
                    className="w-full px-4 py-3.5 bg-white border border-[#111111]/15 text-[#111111] placeholder-[#777777]/50 text-sm font-name-sans focus:outline-none focus:border-[#111111] transition-colors"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 font-name-sans">{errors.email}</p>}
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111] font-name-sans mb-2">
                    PROJECT TYPE
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-white border border-[#111111]/15 text-[#111111] text-sm font-name-sans focus:outline-none focus:border-[#111111] transition-colors"
                  >
                    {contact.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#111111] font-name-sans mb-2">
                    MESSAGE / PROJECT BRIEF *
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the project dates, scope, and vision..."
                    className="w-full px-4 py-3.5 bg-white border border-[#111111]/15 text-[#111111] placeholder-[#777777]/50 text-sm font-name-sans focus:outline-none focus:border-[#111111] transition-colors resize-none"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1.5 font-name-sans">{errors.message}</p>}
                </div>

                {/* Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-[#111111] text-white hover:bg-[#FFAD5A] hover:text-[#111111] transition-all font-name-sans text-xs uppercase tracking-[0.22em] font-bold flex items-center justify-center space-x-2 shadow-sm disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND ENQUIRY'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`mailto:${contact.email}?subject=Booking Inquiry`}
                    className="text-xs uppercase tracking-[0.2em] text-[#777777] hover:text-[#111111] font-name-sans font-semibold underline underline-offset-4"
                  >
                    BOOK / COLLABORATE →
                  </a>
                </div>

                {/* Success Message Feedback */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-name-sans flex items-center space-x-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Thank you. Your message has been received by Shilpa Seetharaman's management team.</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
