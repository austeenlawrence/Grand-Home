import React, { useState } from 'react';
import { Maximize2, X, MessageCircle, MapPin } from 'lucide-react';
import { GALLERY_ITEMS, BUSINESS_DETAILS } from '../data/furnitureData';
import { GalleryItem } from '../types/furniture';
import { getWhatsAppGeneralUrl } from '../utils/helpers';

export const GalleryView: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Living', 'Dining', 'Bedroom', 'Office', 'Bespoke'];

  const filteredGallery = GALLERY_ITEMS.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
          Architectural Portfolio
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181615]">
          Interior Spaces & Showroom Gallery
        </h1>
        <p className="text-xs sm:text-sm text-[#544E47] font-sans">
          A visual record of styled living rooms, master bedrooms, dining halls, and executive offices featuring Grand Home modern luxury furniture.
        </p>

        {/* Filter Pills */}
        <div className="pt-2 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded text-xs font-medium tracking-wide transition-all touch-target ${
                activeCategory === cat
                  ? 'bg-[#181615] text-[#FBF9F5] shadow-sm'
                  : 'bg-[#FDFBF7] text-[#544E47] border border-[#E6E1D8] hover:border-[#B8976C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid (Carefully composed aspect ratios) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredGallery.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative rounded-xl overflow-hidden cursor-pointer bg-[#181615] aspect-[4/3] border border-[#E6E1D8] shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/85 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4 sm:p-5">
              <span className="text-[10px] uppercase tracking-wider text-[#B8976C] font-semibold">
                {item.category}
              </span>
              <h3 className="font-editorial text-base sm:text-lg font-medium text-[#FBF9F5] mt-0.5">
                {item.title}
              </h3>
              <p className="text-[11px] text-[#A89E92] flex items-center gap-1 mt-1">
                <MapPin className="w-3 h-3 text-[#B8976C] shrink-0" />
                <span className="truncate">{item.locationTag}</span>
              </p>
            </div>

            <div className="absolute top-3 right-3 p-2 rounded-full bg-[#181615]/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#181615]/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FBF9F5] rounded-xl overflow-hidden shadow-2xl border border-[#E6E1D8]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close preview"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#181615]/80 text-[#FBF9F5] hover:bg-[#181615] transition-colors touch-target flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/10] bg-[#181615] overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4 sm:p-6 bg-[#FBF9F5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#B8976C] font-semibold">
                  {selectedImage.category} Collection
                </span>
                <h2 className="font-editorial text-xl font-semibold text-[#181615] mt-0.5">
                  {selectedImage.title}
                </h2>
                <p className="text-xs text-[#736B63] mt-1">{selectedImage.locationTag}</p>
              </div>

              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded bg-[#1C4328] hover:bg-[#235833] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 touch-target"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Showroom Visit Invitation Bar */}
      <div className="p-6 sm:p-8 bg-[#F5F2EB] rounded-xl border border-[#E6E1D8] text-center space-y-3">
        <h3 className="font-editorial text-xl font-semibold text-[#181615]">
          Visit Our Sector 10 Noida Showroom
        </h3>
        <p className="text-xs sm:text-sm text-[#544E47] max-w-xl mx-auto">
          Experience our full living room vignettes, bedroom suites, and material library in person. Open daily from 11:00 AM to 9:00 PM.
        </p>
        <div className="pt-1">
          <p className="text-xs font-semibold text-[#181615]">{BUSINESS_DETAILS.address.fullFormatted}</p>
        </div>
      </div>
    </div>
  );
};
