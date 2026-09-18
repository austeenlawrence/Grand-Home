import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, Compass, CheckCircle2, Car, Train } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/furnitureData';
import { getCallUrl, getWhatsAppGeneralUrl } from '../utils/helpers';

export const VisitShowroomView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      {/* 1. Page Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
          Sector 10, Noida
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181615]">
          Visit the Grand Home Showroom
        </h1>
        <p className="text-sm sm:text-base text-[#544E47] font-sans leading-relaxed">
          Step into our experiential luxury showroom. Explore full living, dining, and bedroom settings, inspect over 200+ upholstery fabrics, touch solid hardwoods, and discuss bespoke spatial requirements with our furniture consultants.
        </p>
      </div>

      {/* 2. Main Address & Action Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Essential Showroom Information & CTAs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#FDFBF7] border border-[#E6E1D8] space-y-6 shadow-sm">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#B8976C] font-semibold">
                Official Location
              </span>
              <h2 className="font-editorial text-xl sm:text-2xl font-semibold text-[#181615] mt-1">
                {BUSINESS_DETAILS.brandName}
              </h2>
              <p className="text-xs uppercase tracking-wider text-[#736B63] font-medium">
                {BUSINESS_DETAILS.tagline}
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#4A453F]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B8976C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#181615]">Full Showroom Address:</p>
                  <p>{BUSINESS_DETAILS.address.line1},</p>
                  <p>{BUSINESS_DETAILS.address.line2},</p>
                  <p>{BUSINESS_DETAILS.address.city}, {BUSINESS_DETAILS.address.state} {BUSINESS_DETAILS.address.pincode}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#EFEAE1]">
                <Clock className="w-5 h-5 text-[#B8976C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#181615]">Showroom Timings:</p>
                  <p className="text-base font-medium text-[#181615]">{BUSINESS_DETAILS.hours}</p>
                  <p className="text-xs text-[#B8976C] font-medium">{BUSINESS_DETAILS.days} (Monday to Sunday)</p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-[#EFEAE1]">
                <Phone className="w-5 h-5 text-[#B8976C] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#181615]">Direct Telephone:</p>
                  <a
                    href={getCallUrl()}
                    className="text-base font-semibold text-[#181615] hover:text-[#B8976C] transition-colors"
                  >
                    {BUSINESS_DETAILS.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Direct 3 Action Buttons */}
            <div className="pt-2 space-y-2">
              <a
                id="showroom-directions-cta"
                href={BUSINESS_DETAILS.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded bg-[#181615] hover:bg-[#2B231D] text-[#FBF9F5] text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-[0.98] shadow-sm touch-target"
              >
                <Navigation className="w-4 h-4 text-[#B8976C]" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <div className="grid grid-cols-2 gap-2">
                <a
                  id="showroom-call-cta"
                  href={getCallUrl()}
                  className="py-3 px-3 rounded bg-[#2B231D] hover:bg-[#382A21] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 border border-[#B8976C]/30 transition-colors touch-target"
                >
                  <Phone className="w-4 h-4 text-[#B8976C]" />
                  <span>Call Now</span>
                </a>

                <a
                  id="showroom-whatsapp-cta"
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 rounded bg-[#1C4328] hover:bg-[#235833] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors touch-target"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Transit & Access Notes */}
          <div className="p-5 rounded-xl bg-[#F5F2EB] border border-[#E6E1D8] space-y-3 text-xs text-[#544E47]">
            <div className="flex items-center gap-2 font-semibold text-[#181615]">
              <Train className="w-4 h-4 text-[#B8976C]" />
              <span>Metro & Road Connectivity</span>
            </div>
            <p>
              Conveniently connected to Sector 15 and Sector 16 Metro Stations on the Delhi Metro Blue Line. Easy 5-10 minute auto/cab ride from the station.
            </p>

            <div className="flex items-center gap-2 font-semibold text-[#181615] pt-2 border-t border-[#E6E1D8]">
              <Car className="w-4 h-4 text-[#B8976C]" />
              <span>Customer Parking</span>
            </div>
            <p>
              Ample street and dedicated parking available directly in front of the showroom building in Block A, Sector 10.
            </p>
          </div>
        </div>

        {/* Right Column: Google Maps Interactive Embed */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-2xl overflow-hidden border border-[#E6E1D8] shadow-md bg-[#EFEAE1] aspect-[16/11] sm:aspect-[16/10] w-full relative">
            <iframe
              title="Grand Home Showroom Location - Sector 10 Noida"
              src={BUSINESS_DETAILS.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Showroom Experience Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-lg bg-[#FDFBF7] border border-[#E6E1D8] space-y-1">
              <p className="font-editorial text-sm font-semibold text-[#181615]">Full Room Vignettes</p>
              <p className="text-[11px] text-[#635C54]">
                See how sectionals, coffee tables, and lighting harmonize in realistic living layouts.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#FDFBF7] border border-[#E6E1D8] space-y-1">
              <p className="font-editorial text-sm font-semibold text-[#181615]">Physical Fabric Swatches</p>
              <p className="text-[11px] text-[#635C54]">
                Over 200+ velvet, bouclé, leather, and stain-guarded performance textiles to touch.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#FDFBF7] border border-[#E6E1D8] space-y-1">
              <p className="font-editorial text-sm font-semibold text-[#181615]">Layout Consultation</p>
              <p className="text-[11px] text-[#635C54]">
                Discuss room proportions and customize millimeter dimensions with our specialists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
