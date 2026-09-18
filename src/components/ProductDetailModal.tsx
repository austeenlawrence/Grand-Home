import React, { useState } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, Ruler, Layers, Clock, Palette } from 'lucide-react';
import { Product } from '../types/furniture';
import { BUSINESS_DETAILS, PRODUCTS } from '../data/furnitureData';
import { getCallUrl, getWhatsAppProductUrl } from '../utils/helpers';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onSelectProduct,
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);

  // Related products from the same category
  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  const whatsappUrl = getWhatsAppProductUrl(product);

  return (
    <div
      id="product-detail-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#181615]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="product-detail-card"
        className="relative bg-[#FBF9F5] rounded-xl border border-[#E6E1D8] max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          id="close-product-detail"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[#181615]/80 text-[#FBF9F5] hover:bg-[#181615] transition-colors touch-target flex items-center justify-center"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-8">
          {/* Left Column: Image & Gallery */}
          <div className="space-y-3">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#EFEAE1] border border-[#E6E1D8]">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
              {product.badge && (
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#181615]/90 text-[#FBF9F5] border border-[#B8976C]/40">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail Gallery if multiple images exist */}
            {product.galleryImages && product.galleryImages.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`relative w-16 h-16 rounded overflow-hidden border-2 shrink-0 transition-all ${
                      activeImage === img ? 'border-[#B8976C]' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Showroom Verification Note */}
            <div className="p-3 bg-[#F5F2EB] rounded border border-[#E6E1D8] text-xs text-[#544E47] space-y-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#181615]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B8976C]" />
                <span>Showroom Viewing & Custom Orders</span>
              </div>
              <p>
                Visit our Sector 10 Noida showroom to inspect wood grains, test seating firmness, or customize dimensions and fabrics with our design architects.
              </p>
            </div>
          </div>

          {/* Right Column: Product Information & Specifications */}
          <div className="flex flex-col justify-between space-y-5">
            <div>
              {/* Category */}
              <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
                {product.categoryName}
              </span>

              {/* Title */}
              <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#181615] mt-1">
                {product.name}
              </h2>

              {/* Price */}
              <div className="mt-2 text-xl font-semibold text-[#181615] flex items-baseline gap-2">
                <span>{product.priceDisplay}</span>
                <span className="text-xs font-normal text-[#736B63]">(Taxes included / Customization options available)</span>
              </div>

              {/* Detailed Description */}
              <p className="mt-4 text-sm text-[#544E47] leading-relaxed font-sans">
                {product.fullDescription}
              </p>

              {/* Architectural Specifications */}
              <div className="mt-5 space-y-2.5 pt-4 border-t border-[#E6E1D8] text-xs sm:text-sm">
                <div className="flex items-start gap-2 text-[#4A453F]">
                  <Ruler className="w-4 h-4 text-[#B8976C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#181615]">Dimensions: </span>
                    <span>{product.dimensions}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-[#4A453F]">
                  <Layers className="w-4 h-4 text-[#B8976C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#181615]">Primary Materials: </span>
                    <span>{product.primaryMaterial}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-[#4A453F]">
                  <Palette className="w-4 h-4 text-[#B8976C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#181615]">Available Finishes: </span>
                    <span>{product.finishOptions.join(' • ')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-[#4A453F]">
                  <Clock className="w-4 h-4 text-[#B8976C] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#181615]">Lead Time: </span>
                    <span>{product.leadTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs: 1-Tap WhatsApp and Direct Call */}
            <div className="space-y-2.5 pt-4 border-t border-[#E6E1D8]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                  id="modal-whatsapp-enquire"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#1C4328] hover:bg-[#225532] text-[#FBF9F5] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all active:scale-[0.98] shadow-sm touch-target"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Enquire on WhatsApp</span>
                </a>

                <a
                  id="modal-call-showroom"
                  href={getCallUrl()}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-[#181615] hover:bg-[#2B231D] text-[#FBF9F5] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all active:scale-[0.98] border border-[#3A3530] touch-target"
                >
                  <Phone className="w-4 h-4 text-[#B8976C]" />
                  <span>Call {BUSINESS_DETAILS.phone}</span>
                </a>
              </div>

              <p className="text-[11px] text-center text-[#736B63]">
                Showroom Hours: {BUSINESS_DETAILS.hours} • Sector 10, Noida
              </p>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <div className="border-t border-[#E6E1D8] p-4 sm:p-8 bg-[#F5F2EB]">
            <h3 className="font-editorial text-lg font-semibold text-[#181615] mb-3">
              More in {product.categoryName}
            </h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    onSelectProduct(rel);
                    setActiveImage(rel.image);
                  }}
                  className="cursor-pointer group bg-[#FDFBF7] p-2 rounded border border-[#E6E1D8] hover:border-[#B8976C] transition-all"
                >
                  <div className="aspect-[4/3] rounded overflow-hidden bg-[#EFEAE1] mb-1.5">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <p className="font-editorial text-xs font-semibold text-[#181615] line-clamp-1 group-hover:text-[#B8976C]">
                    {rel.name}
                  </p>
                  <p className="text-[10px] text-[#736B63]">{rel.priceDisplay}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
