import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/furnitureData';
import { getCallUrl, getWhatsAppGeneralUrl } from '../utils/helpers';
import { PageId } from '../types/furniture';

interface MobileStickyBarProps {
  onNavigate: (page: PageId) => void;
  currentPage: PageId;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onNavigate, currentPage }) => {
  return (
    <aside
      id="mobile-sticky-action-bar"
      aria-label="Quick contact bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#181615]/95 backdrop-blur-md border-t border-[#382A21] px-3 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] transition-transform duration-300"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        <a
          id="mobile-call-cta"
          href={getCallUrl()}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-[#2B231D] hover:bg-[#382A21] text-[#FBF9F5] text-xs font-semibold tracking-wide border border-[#B8976C]/30 active:scale-[0.98] transition-all touch-target"
        >
          <Phone className="w-4 h-4 text-[#B8976C] shrink-0" />
          <span>CALL</span>
        </a>

        <a
          id="mobile-whatsapp-cta"
          href={getWhatsAppGeneralUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded bg-[#1C4328] hover:bg-[#1f4e2f] text-[#FBF9F5] text-xs font-semibold tracking-wide border border-[#25D366]/30 active:scale-[0.98] transition-all touch-target"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
          <span>WHATSAPP</span>
        </a>

        <button
          id="mobile-visit-showroom-cta"
          type="button"
          onClick={() => onNavigate('visit-showroom')}
          className={`flex items-center justify-center gap-1.5 py-2.5 px-3 rounded text-xs font-semibold tracking-wide transition-all touch-target ${
            currentPage === 'visit-showroom'
              ? 'bg-[#B8976C] text-[#181615]'
              : 'bg-[#221F1D] text-[#D8C2A7] hover:text-[#FBF9F5] border border-[#3A3530]'
          }`}
        >
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          <span>VISIT</span>
        </button>
      </div>
    </aside>
  );
};
