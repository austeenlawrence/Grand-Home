import React from 'react';
import { MessageCircle, Phone, Compass, Ruler, Palette, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DETAILS, PRODUCTS } from '../data/furnitureData';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types/furniture';
import { getCallUrl, getWhatsAppCustomUrl } from '../utils/helpers';

interface CustomFurnitureViewProps {
  onSelectProduct: (product: Product) => void;
}

export const CustomFurnitureView: React.FC<CustomFurnitureViewProps> = ({ onSelectProduct }) => {
  const customPieces = PRODUCTS.filter((p) => p.category === 'custom-furniture');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12 sm:space-y-16">
      {/* 1. Atelier Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
          Bespoke Craftsmanship
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181615] leading-tight">
          Custom Furniture Atelier
        </h1>
        <p className="text-sm sm:text-base text-[#544E47] font-sans leading-relaxed">
          Standard catalog dimensions shouldn't constrain visionary architecture. At Grand Home, we tailor sofas, beds, dining monoliths, and master wardrobes to your exact room blueprints, interior aesthetic, and personal lifestyle.
        </p>

        {/* Simple Direct Actions */}
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            id="custom-whatsapp-cta"
            href={getWhatsAppCustomUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded bg-[#1C4328] hover:bg-[#235833] text-[#FBF9F5] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm touch-target active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>WhatsApp Enquiry</span>
          </a>

          <a
            id="custom-call-cta"
            href={getCallUrl()}
            className="px-6 py-3.5 rounded bg-[#181615] hover:bg-[#2B231D] text-[#FBF9F5] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all flex items-center gap-2 border border-[#3A3530] touch-target active:scale-[0.98]"
          >
            <Phone className="w-4 h-4 text-[#B8976C]" />
            <span>Call {BUSINESS_DETAILS.phone}</span>
          </a>
        </div>
      </div>

      {/* 2. Simple 4-Step Process */}
      <div className="bg-[#F5F2EB] rounded-2xl p-6 sm:p-10 border border-[#E6E1D8] space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-1">
          <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#181615]">
            How We Build Bespoke
          </h2>
          <p className="text-xs sm:text-sm text-[#736B63]">
            A seamless, transparent journey from floor plan to installation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-xl bg-[#FDFBF7] border border-[#E6E1D8] space-y-2">
            <span className="text-xs font-mono font-semibold text-[#B8976C]">STEP 01</span>
            <div className="w-8 h-8 rounded bg-[#EFEAE1] flex items-center justify-center text-[#B8976C] my-2">
              <Ruler className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-base font-semibold text-[#181615]">
              Blueprint & Sizing
            </h3>
            <p className="text-xs text-[#544E47] leading-relaxed">
              Share your room layout or builder floor plan. We calculate precise clearance, walkway widths, and seating ergonomics.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FDFBF7] border border-[#E6E1D8] space-y-2">
            <span className="text-xs font-mono font-semibold text-[#B8976C]">STEP 02</span>
            <div className="w-8 h-8 rounded bg-[#EFEAE1] flex items-center justify-center text-[#B8976C] my-2">
              <Palette className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-base font-semibold text-[#181615]">
              Material Curation
            </h3>
            <p className="text-xs text-[#544E47] leading-relaxed">
              Inspect 200+ fabric swatches, Italian aniline leathers, seasoned Burma teak, American walnut, and sintered ceramic slabs.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FDFBF7] border border-[#E6E1D8] space-y-2">
            <span className="text-xs font-mono font-semibold text-[#B8976C]">STEP 03</span>
            <div className="w-8 h-8 rounded bg-[#EFEAE1] flex items-center justify-center text-[#B8976C] my-2">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-base font-semibold text-[#181615]">
              3D CAD Verification
            </h3>
            <p className="text-xs text-[#544E47] leading-relaxed">
              We review 3D proportional renderings and joint details before carpentry begins, ensuring zero surprises upon delivery.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FDFBF7] border border-[#E6E1D8] space-y-2">
            <span className="text-xs font-mono font-semibold text-[#B8976C]">STEP 04</span>
            <div className="w-8 h-8 rounded bg-[#EFEAE1] flex items-center justify-center text-[#B8976C] my-2">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="font-editorial text-base font-semibold text-[#181615]">
              White-Glove Setup
            </h3>
            <p className="text-xs text-[#544E47] leading-relaxed">
              Handcrafted in our workshop and assembled on-site by our expert technicians across Noida and Delhi NCR.
            </p>
          </div>
        </div>
      </div>

      {/* 3. Featured Bespoke Portfolio Pieces */}
      <div className="space-y-6">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
            Bespoke Portfolio
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#181615] mt-1">
            Custom Commissions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customPieces.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </div>

      {/* 4. Simple Direct Contact Card */}
      <div className="p-8 rounded-2xl bg-[#181615] text-[#FBF9F5] border border-[#2C241E] text-center max-w-2xl mx-auto space-y-4">
        <h3 className="font-editorial text-2xl font-semibold text-[#FBF9F5]">
          Ready to Discuss Your Space?
        </h3>
        <p className="text-xs sm:text-sm text-[#D8CFC4] max-w-md mx-auto">
          No complex forms required. Simply send us a message on WhatsApp or call our Sector 10 showroom directly.
        </p>

        <div className="pt-2 flex flex-wrap justify-center gap-3">
          <a
            href={getWhatsAppCustomUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded bg-[#1C4328] hover:bg-[#235833] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 touch-target"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Send Floor Plan on WhatsApp</span>
          </a>

          <a
            href={getCallUrl()}
            className="px-5 py-3 rounded bg-[#2B231D] hover:bg-[#382A21] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 border border-[#B8976C]/30 touch-target"
          >
            <Phone className="w-4 h-4 text-[#B8976C]" />
            <span>Call Showroom ({BUSINESS_DETAILS.phone})</span>
          </a>
        </div>
      </div>
    </div>
  );
};
