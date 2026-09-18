import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, Clock, Navigation } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/furnitureData';
import { getCallUrl, getWhatsAppGeneralUrl } from '../utils/helpers';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    // Direct to WhatsApp for instant showroom routing
    const text = `Hello Grand Home Showroom, my name is ${encodeURIComponent(
      name
    )} (Phone: ${encodeURIComponent(phone)}). Message: ${encodeURIComponent(
      message || 'I would like to enquire about your luxury furniture collections.'
    )}`;
    const whatsappUrl = `https://wa.me/${BUSINESS_DETAILS.whatsappRaw}?text=${text}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      {/* 1. Header */}
      <div className="max-w-2xl space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
          Get in Touch
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181615]">
          Connect with Grand Home
        </h1>
        <p className="text-sm sm:text-base text-[#544E47] font-sans leading-relaxed">
          Whether you are looking to furnish a new residence, customize a bespoke dining suite, or schedule an architectural walkthrough, our team is ready to assist you.
        </p>
      </div>

      {/* 2. Grid: Contact Form + Direct Channels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Clean Contact Form */}
        <div className="lg:col-span-7 bg-[#FDFBF7] p-6 sm:p-10 rounded-2xl border border-[#E6E1D8] shadow-sm">
          <h2 className="font-editorial text-2xl font-semibold text-[#181615] mb-2">
            Send Showroom Enquiry
          </h2>
          <p className="text-xs sm:text-sm text-[#736B63] mb-6">
            Enter your details below to connect with our furniture team immediately.
          </p>

          {submitted ? (
            <div className="p-6 rounded-xl bg-[#F5F2EB] border border-[#B8976C]/40 text-center space-y-3 animate-in fade-in">
              <CheckCircle2 className="w-10 h-10 text-[#1C4328] mx-auto" />
              <h3 className="font-editorial text-xl font-semibold text-[#181615]">
                Thank You, {name}!
              </h3>
              <p className="text-xs sm:text-sm text-[#544E47]">
                Your message has been initiated. Our showroom consultants at Sector 10, Noida will respond shortly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 px-4 py-2 rounded bg-[#181615] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#181615] mb-1.5">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rohan Sharma"
                  className="w-full px-4 py-3 rounded bg-[#FBF9F5] border border-[#E6E1D8] text-sm text-[#181615] placeholder-[#8C8379] focus:outline-none focus:border-[#B8976C] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-semibold uppercase tracking-wider text-[#181615] mb-1.5">
                  Phone Number (Call / WhatsApp) *
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9811XXXXXX"
                  className="w-full px-4 py-3 rounded bg-[#FBF9F5] border border-[#E6E1D8] text-sm text-[#181615] placeholder-[#8C8379] focus:outline-none focus:border-[#B8976C] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold uppercase tracking-wider text-[#181615] mb-1.5">
                  Message / Requirements
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about the pieces you are interested in, your room dimensions, or any custom finish requirements..."
                  className="w-full px-4 py-3 rounded bg-[#FBF9F5] border border-[#E6E1D8] text-sm text-[#181615] placeholder-[#8C8379] focus:outline-none focus:border-[#B8976C] transition-colors resize-none"
                />
              </div>

              <button
                id="contact-submit-btn"
                type="submit"
                className="w-full py-3.5 px-6 rounded bg-[#181615] hover:bg-[#2B231D] text-[#FBF9F5] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 active:scale-[0.98] shadow-sm touch-target"
              >
                <span>Submit Enquiry via WhatsApp</span>
                <Send className="w-4 h-4 text-[#B8976C]" />
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Direct Contact & Location Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F2EB] border border-[#E6E1D8] space-y-6">
            <h2 className="font-editorial text-xl font-semibold text-[#181615]">
              Direct Showroom Contacts
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-[#4A453F]">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#B8976C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#181615]">Telephone:</p>
                  <a href={getCallUrl()} className="text-base font-semibold text-[#181615] hover:text-[#B8976C]">
                    {BUSINESS_DETAILS.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#E6E1D8]">
                <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#181615]">WhatsApp:</p>
                  <a
                    href={getWhatsAppGeneralUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-[#1C4328] hover:underline"
                  >
                    {BUSINESS_DETAILS.whatsapp}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#E6E1D8]">
                <MapPin className="w-5 h-5 text-[#B8976C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#181615]">Showroom Address:</p>
                  <p>{BUSINESS_DETAILS.address.fullFormatted}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#E6E1D8]">
                <Clock className="w-5 h-5 text-[#B8976C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#181615]">Timings:</p>
                  <p>{BUSINESS_DETAILS.hours} (All 7 Days)</p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={getCallUrl()}
                className="py-3 px-3 rounded bg-[#181615] hover:bg-[#2B231D] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 touch-target"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8976C]" />
                <span>Call Now</span>
              </a>

              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded bg-[#1C4328] hover:bg-[#235833] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 touch-target"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </div>

            <a
              href={BUSINESS_DETAILS.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded bg-[#EFEAE1] hover:bg-[#E6E0D4] text-[#181615] text-xs font-medium flex items-center justify-center gap-1.5 transition-colors touch-target"
            >
              <Navigation className="w-3.5 h-3.5 text-[#B8976C]" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
