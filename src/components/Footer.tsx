import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DETAILS, CATEGORIES } from '../data/furnitureData';
import { getCallUrl, getWhatsAppGeneralUrl } from '../utils/helpers';
import { PageId } from '../types/furniture';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectCategory }) => {
  const handlePageClick = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (catId: string) => {
    if (onSelectCategory) {
      onSelectCategory(catId);
    }
    onNavigate('collections');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="site-footer" className="bg-[#181615] text-[#D8CFC4] pt-14 pb-24 md:pb-14 border-t border-[#2C241E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-[#2C241E]">
          {/* Col 1 & 2: Brand Identity & Showroom Commitment */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer" onClick={() => handlePageClick('home')}>
              <span className="font-editorial text-2xl sm:text-3xl font-normal tracking-[0.16em] text-[#FBF9F5] uppercase block">
                GRAND HOME
              </span>
              <span className="text-[10px] tracking-[0.26em] uppercase text-[#B8976C] font-sans font-medium mt-1 block">
                Modern Luxury Furniture
              </span>
            </div>

            <p className="text-sm text-[#A89E92] font-sans leading-relaxed max-w-md pt-1">
              Grand Home presents a curated architectural synthesis of contemporary design, solid hardwoods, Italian sintered stone, and bespoke craftsmanship. Crafted for distinguished residences, villas, and commercial spaces across Noida and Delhi NCR.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                id="footer-call-btn"
                href={getCallUrl()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#2B231D] hover:bg-[#382A21] text-[#FBF9F5] text-xs font-medium border border-[#B8976C]/30 transition-colors touch-target"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8976C]" />
                <span>Call: {BUSINESS_DETAILS.phone}</span>
              </a>

              <a
                id="footer-whatsapp-btn"
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#1C4328] hover:bg-[#235833] text-[#FBF9F5] text-xs font-medium border border-[#25D366]/30 transition-colors touch-target"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: {BUSINESS_DETAILS.whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-[#B8976C] font-semibold">
              Explore
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A89E92]">
              <li>
                <button
                  onClick={() => handlePageClick('home')}
                  className="hover:text-[#FBF9F5] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('collections')}
                  className="hover:text-[#FBF9F5] transition-colors text-left"
                >
                  All Collections
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('new-arrivals')}
                  className="hover:text-[#FBF9F5] transition-colors text-left"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('custom-furniture')}
                  className="hover:text-[#FBF9F5] transition-colors text-left"
                >
                  Custom Furniture Atelier
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('gallery')}
                  className="hover:text-[#FBF9F5] transition-colors text-left"
                >
                  Interior Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('offers')}
                  className="hover:text-[#FBF9F5] transition-colors text-left"
                >
                  Showroom Offers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('about')}
                  className="hover:text-[#FBF9F5] transition-colors text-left"
                >
                  About Grand Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('faq')}
                  className="hover:text-[#FBF9F5] transition-colors text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Categories */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-[#B8976C] font-semibold">
              Categories
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A89E92]">
              {CATEGORIES.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => handleCategoryClick(cat.id)}
                    className="hover:text-[#FBF9F5] transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handlePageClick('collections')}
                  className="text-[#B8976C] hover:underline transition-all flex items-center gap-1 text-xs"
                >
                  <span>View All Categories</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Showroom Address & Hours */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-[#B8976C] font-semibold">
              Showroom Location
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-[#A89E92]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B8976C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#FBF9F5] font-medium">{BUSINESS_DETAILS.brandName}</p>
                  <p>{BUSINESS_DETAILS.address.line1}</p>
                  <p>{BUSINESS_DETAILS.address.line2}</p>
                  <p>{BUSINESS_DETAILS.address.city}, {BUSINESS_DETAILS.address.state} {BUSINESS_DETAILS.address.pincode}</p>
                </div>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-[#B8976C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#FBF9F5] font-medium">Showroom Hours</p>
                  <p>{BUSINESS_DETAILS.hours}</p>
                  <p className="text-xs text-[#B8976C]">{BUSINESS_DETAILS.days}</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  id="footer-directions-link"
                  href={BUSINESS_DETAILS.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#B8976C] hover:text-[#D8C2A7] underline underline-offset-4"
                >
                  <span>Get Directions on Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Target Audience Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#736B63]">
          <p>
            © {new Date().getFullYear()} {BUSINESS_DETAILS.brandName} Modern Luxury Furniture. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Serving homeowners, architects, interior designers & commercial clients across Delhi NCR.
          </p>
        </div>
      </div>
    </footer>
  );
};
