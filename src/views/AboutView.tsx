import React from 'react';
import { Compass, Hammer, ShieldCheck, MapPin, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/furnitureData';
import { getCallUrl, getWhatsAppGeneralUrl } from '../utils/helpers';
import { PageId } from '../types/furniture';

interface AboutViewProps {
  onNavigate: (page: PageId) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12 sm:space-y-16">
      {/* 1. Header & Brand Philosophy */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
          About Grand Home
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181615] leading-tight">
          Modern Luxury, Rooted in Craftsmanship.
        </h1>
        <p className="text-sm sm:text-base text-[#544E47] font-sans leading-relaxed">
          Grand Home was conceived to bridge the divide between mass-produced furniture and unapproachable bespoke design. Located in Sector 10, Noida, our showroom is an experiential studio where contemporary architectural aesthetics meet seasoned joinery, authentic materials, and thoughtful personalization.
        </p>
      </div>

      {/* 2. Visual Editorial Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#EFEAE1] border border-[#E6E1D8]">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
            alt="Grand Home Craftsmanship and Aesthetics"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
            Our Approach
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#181615]">
            Quiet Luxury Over Flashiness
          </h2>
          <p className="text-xs sm:text-sm text-[#544E47] leading-relaxed font-sans">
            True luxury does not shout with ostentatious embellishments or hollow shine. It communicates through the warmth of kiln-dried solid teak, the silky matte touch of Italian sintered stone, the seamless glide of precision German drawer runners, and balanced proportions that bring calm to a room.
          </p>
          <p className="text-xs sm:text-sm text-[#544E47] leading-relaxed font-sans">
            Whether furnishing a compact modern urban apartment, a sprawling multi-level villa, or an executive boardroom, we tailor every dimension, texture, and detail to harmonize with the space.
          </p>
        </div>
      </div>

      {/* 3. Core Values (Strictly focused on materials, quality, showroom experience) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-[#FDFBF7] border border-[#E6E1D8] space-y-3">
          <div className="w-10 h-10 rounded bg-[#EFEAE1] flex items-center justify-center text-[#B8976C]">
            <Hammer className="w-5 h-5" />
          </div>
          <h3 className="font-editorial text-lg font-semibold text-[#181615]">
            Seasoned Hardwoods & Sintered Stone
          </h3>
          <p className="text-xs sm:text-sm text-[#544E47] leading-relaxed">
            We prioritize kiln-dried seasoned woods like Burma Teak, American Walnut, and Steam Beach, paired with thermal-resistant sintered stone surfaces that resist heat and stains effortlessly.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#FDFBF7] border border-[#E6E1D8] space-y-3">
          <div className="w-10 h-10 rounded bg-[#EFEAE1] flex items-center justify-center text-[#B8976C]">
            <Compass className="w-5 h-5" />
          </div>
          <h3 className="font-editorial text-lg font-semibold text-[#181615]">
            Customization to Your Blueprints
          </h3>
          <p className="text-xs sm:text-sm text-[#544E47] leading-relaxed">
            Every home possesses unique spatial constraints. We provide comprehensive millimeter customization across sectional sizes, headboard heights, dining table widths, and wardrobe layouts.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-[#FDFBF7] border border-[#E6E1D8] space-y-3">
          <div className="w-10 h-10 rounded bg-[#EFEAE1] flex items-center justify-center text-[#B8976C]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-editorial text-lg font-semibold text-[#181615]">
            Direct Showroom Experience
          </h3>
          <p className="text-xs sm:text-sm text-[#544E47] leading-relaxed">
            We believe you should see, touch, and test your furniture before ordering. Our Noida Sector 10 showroom allows you to experience real comfort and review physical material swatches in person.
          </p>
        </div>
      </div>

      {/* 4. Serving Diverse Clients */}
      <div className="bg-[#F5F2EB] rounded-2xl p-6 sm:p-10 border border-[#E6E1D8] space-y-4">
        <h2 className="font-editorial text-2xl font-semibold text-[#181615]">
          Designed for Everyone
        </h2>
        <p className="text-xs sm:text-sm text-[#544E47] leading-relaxed max-w-3xl">
          At Grand Home, we welcome homeowners, growing families, discerning premium buyers, budget-conscious connoisseurs seeking lasting value, independent interior designers, architects, and hospitality leaders. Our design team adapts to diverse functional briefs and project scales.
        </p>

        <div className="pt-2 flex flex-wrap gap-2 text-xs">
          {[
            'Homeowners & Families',
            'Luxury Penthouses & Villas',
            'Architects & Interior Designers',
            'Corporate Offices & Boardrooms',
            'Boutique Hotels & Restaurants',
          ].map((item, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded bg-[#EFEAE1] text-[#181615] font-medium border border-[#D8CFC4]"
            >
              ✓ {item}
            </span>
          ))}
        </div>
      </div>

      {/* 5. Showroom Address & Visit CTA */}
      <div className="p-8 rounded-2xl bg-[#181615] text-[#FBF9F5] border border-[#2C241E] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <p className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
            Visit Us in Noida
          </p>
          <h2 className="font-editorial text-2xl font-semibold text-[#FBF9F5]">
            {BUSINESS_DETAILS.brandName} Showroom
          </h2>
          <p className="text-xs sm:text-sm text-[#D8CFC4]">
            {BUSINESS_DETAILS.address.fullFormatted} • Open Daily {BUSINESS_DETAILS.hours}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate('visit-showroom')}
            className="px-5 py-3 rounded bg-[#B8976C] hover:bg-[#A38258] text-[#181615] text-xs font-semibold uppercase tracking-wider transition-colors touch-target"
          >
            Showroom Directions
          </button>
          <a
            href={getCallUrl()}
            className="px-5 py-3 rounded bg-[#2B231D] hover:bg-[#382A21] text-white text-xs font-semibold uppercase tracking-wider border border-[#B8976C]/30 touch-target"
          >
            Call {BUSINESS_DETAILS.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
