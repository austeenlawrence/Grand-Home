import React from 'react';
import { MessageCircle, Phone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { BUSINESS_DETAILS, SHOWROOM_OFFERS } from '../data/furnitureData';
import { getCallUrl, getWhatsAppGeneralUrl } from '../utils/helpers';
import { PageId } from '../types/furniture';

interface OffersViewProps {
  onNavigate: (page: PageId) => void;
}

export const OffersView: React.FC<OffersViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
          Showroom Privileges
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181615]">
          Curated Showroom Arrangements
        </h1>
        <p className="text-xs sm:text-sm text-[#544E47] font-sans leading-relaxed">
          Transparent, enduring arrangements for homeowners, architects, and designers furnishing complete residences across Noida and Delhi NCR.
        </p>
      </div>

      {/* Offers Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SHOWROOM_OFFERS.map((offer) => (
          <div
            key={offer.id}
            className="p-6 sm:p-8 rounded-2xl bg-[#FDFBF7] border border-[#E6E1D8] flex flex-col justify-between space-y-6 hover:border-[#B8976C]/60 hover:shadow-lg transition-all duration-300"
          >
            <div className="space-y-3">
              <span className="inline-block text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded bg-[#EFEAE1] text-[#8E6C3B] border border-[#B8976C]/30">
                {offer.badge}
              </span>

              <h2 className="font-editorial text-xl sm:text-2xl font-semibold text-[#181615] leading-snug">
                {offer.title}
              </h2>

              <p className="text-xs font-semibold text-[#B8976C] uppercase tracking-wide">
                {offer.tagline}
              </p>

              <p className="text-xs sm:text-sm text-[#544E47] font-sans leading-relaxed pt-1">
                {offer.description}
              </p>

              <div className="pt-2 flex items-start gap-1.5 text-xs text-[#736B63]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8976C] shrink-0 mt-0.5" />
                <span>{offer.eligibility}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#EFEAE1] space-y-2">
              <a
                href={`https://wa.me/919354155527?text=${encodeURIComponent(
                  `Hello Grand Home, I am interested in inquiring about the "${offer.title}" privilege at your Sector 10 Noida showroom.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded bg-[#1C4328] hover:bg-[#235833] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors touch-target"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>{offer.actionText}</span>
              </a>

              <button
                type="button"
                onClick={() => onNavigate('visit-showroom')}
                className="w-full py-2 px-3 rounded bg-transparent hover:bg-[#EFEAE1] text-[#181615] text-xs font-medium transition-colors"
              >
                Visit Sector 10 Showroom
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Consultation Banner */}
      <div className="p-8 rounded-2xl bg-[#181615] text-[#FBF9F5] border border-[#2C241E] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
            Need Expert Sizing Assistance?
          </span>
          <h2 className="font-editorial text-2xl font-semibold text-[#FBF9F5]">
            Bring Your Architectural Layout
          </h2>
          <p className="text-xs sm:text-sm text-[#D8CFC4] max-w-lg">
            Our furniture architects are available daily between 11:00 AM and 9:00 PM to review blueprints and curate your space.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 shrink-0">
          <a
            href={getCallUrl()}
            className="px-5 py-3 rounded bg-[#2B231D] hover:bg-[#382A21] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 border border-[#B8976C]/30 touch-target"
          >
            <Phone className="w-3.5 h-3.5 text-[#B8976C]" />
            <span>Call {BUSINESS_DETAILS.phone}</span>
          </a>

          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded bg-[#1C4328] hover:bg-[#235833] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 touch-target"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};
