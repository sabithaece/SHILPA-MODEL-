import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, MessageCircle, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const PROJECT_TYPES = [
  "Fashion Campaign",
  "Editorial Photoshoot",
  "Runway & Fashion Show",
  "Commercial Advertisement",
  "E-commerce Modeling",
  "Lifestyle Campaign",
  "Beauty & Jewellery Campaign",
  "Other Collaboration"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Fashion Campaign',
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
      errs.message = 'Please provide brief details about your project';
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
        projectType: 'Fashion Campaign',
        message: ''
      });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-editorial-bg border-t border-editorial-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-10">
          <span className="text-editorial-accent font-sans text-xs tracking-widest uppercase font-semibold">04</span>
          <span className="w-8 h-[1px] bg-editorial-accent/40" />
          <span className="text-editorial-gray font-sans text-xs tracking-editorial uppercase">
            BOOKING & INQUIRIES
          </span>
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-editorial-black tracking-tight mb-3">
            LET'S WORK <span className="italic font-light text-editorial-accent">TOGETHER</span>.
          </h2>
          <p className="font-serif-display text-xl sm:text-2xl text-editorial-gray italic font-light">
            "Have a project in mind? Let's create something beautiful together."
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Quick Action Buttons */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-white border border-editorial-border shadow-sm">
              <span className="text-xs uppercase tracking-editorial text-editorial-accent font-sans block mb-6 font-semibold">
                DIRECT CONTACT & DETAILS
              </span>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-editorial-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-editorial-gray font-sans block">
                      LOCATION
                    </span>
                    <span className="text-sm font-sans text-editorial-black font-medium">
                      {portfolioData.modelInfo.location}
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-editorial-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-editorial-gray font-sans block">
                      EMAIL
                    </span>
                    <a
                      href={`mailto:${portfolioData.modelInfo.email}`}
                      className="text-sm font-sans text-editorial-black hover:text-editorial-accent transition-colors font-medium"
                    >
                      {portfolioData.modelInfo.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-editorial-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-editorial-gray font-sans block">
                      PHONE NUMBER
                    </span>
                    <a
                      href={`tel:${portfolioData.modelInfo.phone}`}
                      className="text-sm font-sans text-editorial-black hover:text-editorial-accent transition-colors font-medium"
                    >
                      {portfolioData.modelInfo.phone}
                    </a>
                  </div>
                </div>

                {/* Instagram Profile */}
                <div className="flex items-start space-x-4">
                  <Instagram className="w-5 h-5 text-editorial-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-editorial-gray font-sans block">
                      INSTAGRAM PROFILE
                    </span>
                    <a
                      href={portfolioData.modelInfo.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-sans text-editorial-black hover:text-editorial-accent transition-colors font-medium"
                    >
                      {portfolioData.modelInfo.instagramHandle}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-editorial-border flex flex-col sm:flex-row gap-3">
                <a
                  href={`mailto:${portfolioData.modelInfo.email}?subject=Booking Inquiry - ${portfolioData.modelInfo.name}`}
                  className="flex-1 py-3 px-4 bg-editorial-black text-white hover:bg-editorial-accent text-center text-xs uppercase tracking-editorial font-sans font-medium transition-colors shadow-sm"
                >
                  BOOK A SHOOT
                </a>

                <a
                  href={`mailto:${portfolioData.modelInfo.email}`}
                  className="flex-1 py-3 px-4 bg-editorial-bg border border-editorial-border hover:border-editorial-accent text-editorial-black hover:text-editorial-accent text-center text-xs uppercase tracking-editorial font-sans font-medium transition-colors"
                >
                  CONTACT ME
                </a>

                <a
                  href={portfolioData.modelInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 px-4 border border-editorial-border hover:border-editorial-accent text-editorial-black hover:text-editorial-accent flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>

              {/* WhatsApp Booking Button */}
              {portfolioData.modelInfo.whatsapp && (
                <div className="mt-4">
                  <a
                    href={`https://wa.me/${portfolioData.modelInfo.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Sabitha,%20I%20would%20like%20to%20inquire%20about%20a%20modeling%20booking.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center space-x-2 text-xs uppercase tracking-editorial font-sans font-semibold transition-all shadow-sm rounded-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>BOOK VIA WHATSAPP</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-white border border-editorial-border shadow-sm relative">
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-6 bg-editorial-bg border border-editorial-accent text-editorial-black flex items-start space-x-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-editorial-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif-display text-xl text-editorial-black font-medium mb-1">
                        INQUIRY SUBMITTED
                      </h4>
                      <p className="text-xs text-editorial-gray font-sans font-light leading-relaxed">
                        Thank you for reaching out. Your project details have been received and we will respond promptly within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-3 text-[10px] uppercase tracking-widest text-editorial-accent hover:underline font-sans font-semibold"
                      >
                        SEND ANOTHER INQUIRY
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-editorial text-editorial-gray font-sans mb-2 font-medium"
                  >
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name or Company"
                    className={`w-full bg-editorial-bg border px-4 py-3.5 text-sm text-editorial-black font-sans placeholder-editorial-gray/40 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-400 focus:border-red-500' : 'border-editorial-border focus:border-editorial-accent'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center space-x-1 font-sans">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-editorial text-editorial-gray font-sans mb-2 font-medium"
                  >
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`w-full bg-editorial-bg border px-4 py-3.5 text-sm text-editorial-black font-sans placeholder-editorial-gray/40 focus:outline-none transition-colors ${
                      errors.email ? 'border-red-400 focus:border-red-500' : 'border-editorial-border focus:border-editorial-accent'
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center space-x-1 font-sans">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-xs uppercase tracking-editorial text-editorial-gray font-sans mb-2 font-medium"
                  >
                    PROJECT TYPE
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-editorial-bg border border-editorial-border px-4 py-3.5 text-sm text-editorial-black font-sans focus:outline-none focus:border-editorial-accent transition-colors"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-white text-editorial-black">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-editorial text-editorial-gray font-sans mb-2 font-medium"
                  >
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about the photoshoot dates, concept, location, and requirements..."
                    className={`w-full bg-editorial-bg border px-4 py-3.5 text-sm text-editorial-black font-sans placeholder-editorial-gray/40 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-400 focus:border-red-500' : 'border-editorial-border focus:border-editorial-accent'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-500 mt-1 flex items-center space-x-1 font-sans">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-editorial-black text-white hover:bg-editorial-accent transition-all duration-300 font-sans text-xs uppercase tracking-widest font-medium flex items-center justify-center space-x-3 group disabled:opacity-50 shadow-sm"
                >
                  {isSubmitting ? (
                    <span>SENDING INQUIRY...</span>
                  ) : (
                    <>
                      <span>SUBMIT INQUIRY</span>
                      <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
