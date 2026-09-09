import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { MODEL_IMAGE } from '../constants/assets';

const PROJECT_TYPES = [
  "Runway & Fashion Week",
  "High-Fashion Editorial",
  "Brand Campaign / Commercial",
  "Lookbook / Catalog",
  "Special Appearance / Gala",
  "Other Creative Project"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Runway & Fashion Week',
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
      errs.message = 'Please provide details about your project or inquiry';
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
    // Simulate booking transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Runway & Fashion Week',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 lg:px-16 bg-luxury-dark border-t border-luxury-border">
      <div className="max-w-7xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-12">
          <span className="text-luxury-gold font-sans text-xs tracking-widest uppercase">05</span>
          <span className="w-8 h-[1px] bg-luxury-gold/50" />
          <span className="text-luxury-muted font-sans text-xs tracking-editorial uppercase">
            BOOKING & INQUIRIES
          </span>
        </div>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-normal text-luxury-cream tracking-tight mb-4">
            LET'S WORK <span className="italic font-light text-luxury-sand">TOGETHER</span>.
          </h2>
          <p className="font-sans text-sm sm:text-base text-luxury-cream/80 font-light leading-relaxed">
            For bookings, collaborations, campaigns and creative projects, get in touch. 
            Available worldwide with prompt agency representation response.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Editorial Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-luxury-surface border border-luxury-border">
              <span className="text-xs uppercase tracking-editorial text-luxury-gold font-sans block mb-6">
                DIRECT CONTACT
              </span>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-luxury-muted font-sans block">
                      BOOKINGS & MANAGEMENT
                    </span>
                    <a
                      href="mailto:bookings@shilpamodel.com"
                      className="text-sm font-sans text-luxury-cream hover:text-luxury-gold transition-colors"
                    >
                      bookings@shilpamodel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-luxury-muted font-sans block">
                      AGENCY DIRECT LINE
                    </span>
                    <a
                      href="tel:+919876543210"
                      className="text-sm font-sans text-luxury-cream hover:text-luxury-gold transition-colors"
                    >
                      +91 (0) 98765 43210 / +33 1 40 50 60
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-luxury-muted font-sans block">
                      BASE LOCATION & TRAVEL
                    </span>
                    <span className="text-sm font-sans text-luxury-cream">
                      Chennai, India • Worldwide On-Location
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-luxury-border">
                <span className="text-[10px] uppercase tracking-wider text-luxury-muted font-sans block mb-4">
                  OFFICIAL SOCIALS
                </span>
                <div className="flex items-center space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 border border-luxury-border text-xs uppercase tracking-wider text-luxury-cream hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 border border-luxury-border text-xs uppercase tracking-wider text-luxury-cream hover:text-luxury-gold hover:border-luxury-gold transition-all duration-300"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Small Editorial Visual using MODEL_IMAGE */}
            <div className="p-4 bg-luxury-surface border border-luxury-border flex items-center space-x-4">
              <div className="w-20 h-20 overflow-hidden bg-luxury-black flex-shrink-0 border border-luxury-border">
                <img
                  src={MODEL_IMAGE}
                  alt="Shilpa portrait"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-xs">
                <span className="text-[10px] uppercase tracking-editorial text-luxury-gold font-sans block">
                  AGENCY COMP CARD
                </span>
                <span className="font-serif-display text-base text-luxury-cream font-medium block">
                  SHILPA — READY FOR CASTING
                </span>
                <span className="text-[11px] text-luxury-muted font-sans font-light">
                  Passport & International Visas Active
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-luxury-surface border border-luxury-border shadow-2xl relative">
              {/* Success Notification */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-6 bg-luxury-black border border-luxury-gold/60 text-luxury-cream flex items-start space-x-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-luxury-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif-display text-xl text-luxury-cream mb-1">
                        INQUIRY RECEIVED
                      </h4>
                      <p className="text-xs text-luxury-cream/80 font-sans font-light leading-relaxed">
                        Thank you for your booking inquiry. Our management team will review the details and respond within 24 business hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-3 text-[10px] uppercase tracking-widest text-luxury-gold hover:underline font-sans"
                      >
                        SEND ANOTHER MESSAGE
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-editorial text-luxury-muted font-sans mb-2"
                  >
                    YOUR NAME / ORGANIZATION *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Vogue Editorial Director / Brand Manager"
                    className={`w-full bg-luxury-black border px-4 py-3.5 text-sm text-luxury-cream font-sans placeholder-luxury-cream/25 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-500/80 focus:border-red-500' : 'border-luxury-border focus:border-luxury-gold'
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center space-x-1 font-sans">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </span>
                  )}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-editorial text-luxury-muted font-sans mb-2"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={`w-full bg-luxury-black border px-4 py-3.5 text-sm text-luxury-cream font-sans placeholder-luxury-cream/25 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500/80 focus:border-red-500' : 'border-luxury-border focus:border-luxury-gold'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[11px] text-red-400 mt-1 flex items-center space-x-1 font-sans">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-editorial text-luxury-muted font-sans mb-2"
                    >
                      PHONE NUMBER (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-luxury-black border border-luxury-border px-4 py-3.5 text-sm text-luxury-cream font-sans placeholder-luxury-cream/25 focus:outline-none focus:border-luxury-gold transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="block text-xs uppercase tracking-editorial text-luxury-muted font-sans mb-2"
                  >
                    PROJECT / INQUIRY TYPE
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-luxury-black border border-luxury-border px-4 py-3.5 text-sm text-luxury-cream font-sans focus:outline-none focus:border-luxury-gold transition-colors"
                  >
                    {PROJECT_TYPES.map((type) => (
                      <option key={type} value={type} className="bg-luxury-black text-luxury-cream">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-editorial text-luxury-muted font-sans mb-2"
                  >
                    PROJECT DETAILS & DATES *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details regarding the shoot dates, location, deliverables, and creative concept..."
                    className={`w-full bg-luxury-black border px-4 py-3.5 text-sm text-luxury-cream font-sans placeholder-luxury-cream/25 focus:outline-none transition-colors ${
                      errors.message ? 'border-red-500/80 focus:border-red-500' : 'border-luxury-border focus:border-luxury-gold'
                    }`}
                  />
                  {errors.message && (
                    <span className="text-[11px] text-red-400 mt-1 flex items-center space-x-1 font-sans">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-luxury-cream text-luxury-black hover:bg-luxury-gold transition-all duration-300 font-sans text-xs uppercase tracking-widest font-semibold flex items-center justify-center space-x-3 group disabled:opacity-50 shadow-xl"
                >
                  {isSubmitting ? (
                    <span className="tracking-widest">SENDING INQUIRY...</span>
                  ) : (
                    <>
                      <span>SEND INQUIRY</span>
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
