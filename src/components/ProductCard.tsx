import React from 'react';
import { MessageCircle, ArrowUpRight } from 'lucide-react';
import { Product } from '../types/furniture';
import { getWhatsAppProductUrl } from '../utils/helpers';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  compact?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct, compact = false }) => {
  const whatsappUrl = getWhatsAppProductUrl(product);

  return (
    <article
      id={`product-card-${product.id}`}
      className="group bg-[#FDFBF7] rounded-lg border border-[#E6E1D8] overflow-hidden flex flex-col justify-between hover:border-[#B8976C]/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 relative"
    >
      {/* Top Image Container */}
      <div
        className="relative overflow-hidden cursor-pointer bg-[#F0EBE1] aspect-[4/3] sm:aspect-[4/3] w-full"
        onClick={() => onSelectProduct(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold tracking-wider uppercase bg-[#181615]/85 backdrop-blur-sm text-[#EFEAE1] border border-[#B8976C]/30 shadow-sm">
            {product.badge}
          </span>
        )}

        {/* Quick View Overlay on Desktop */}
        <div className="absolute inset-0 bg-[#181615]/20 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex items-center justify-center">
          <span className="px-3 py-1.5 rounded-full bg-[#FBF9F5] text-[#181615] text-xs font-medium tracking-wide shadow-md flex items-center gap-1 scale-95 group-hover:scale-100 transition-transform">
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category micro label */}
          <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-[#8C8379] font-medium truncate">
            {product.categoryName}
          </p>

          {/* Product Title */}
          <h3
            onClick={() => onSelectProduct(product)}
            className="font-editorial text-sm sm:text-base font-semibold text-[#181615] hover:text-[#B8976C] transition-colors line-clamp-1 mt-0.5 cursor-pointer"
            title={product.name}
          >
            {product.name}
          </h3>

          {/* Short Description (Visible on larger or non-compact, trimmed on mobile for density) */}
          {!compact && (
            <p className="text-xs text-[#635C54] line-clamp-2 mt-1 hidden sm:block font-sans leading-relaxed">
              {product.shortDescription}
            </p>
          )}
        </div>

        {/* Pricing and CTAs */}
        <div className="mt-3 pt-2.5 border-t border-[#EFEAE1] flex items-center justify-between gap-1.5">
          <div className="truncate">
            <span className="text-[10px] text-[#8C8379] block uppercase tracking-tight">Price</span>
            <span className="text-xs sm:text-sm font-semibold text-[#181615] tracking-tight truncate block">
              {product.priceDisplay}
            </span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {/* 1-Tap WhatsApp Enquiry */}
            <a
              id={`whatsapp-enquire-${product.id}`}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`Enquire about ${product.name} on WhatsApp`}
              aria-label={`Enquire about ${product.name} on WhatsApp`}
              className="p-2 sm:px-2.5 sm:py-1.5 rounded bg-[#1C4328] hover:bg-[#235833] text-white text-[11px] font-medium flex items-center gap-1 transition-colors touch-target sm:min-h-0 sm:min-w-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="hidden xl:inline">Enquire</span>
            </a>

            {/* Details Button for Mobile & Desktop */}
            <button
              id={`details-btn-${product.id}`}
              type="button"
              onClick={() => onSelectProduct(product)}
              className="p-2 sm:px-2.5 sm:py-1.5 rounded bg-[#EFEAE1] hover:bg-[#E6E0D4] text-[#181615] text-[11px] font-medium transition-colors touch-target sm:min-h-0 sm:min-w-0"
              aria-label={`View specifications for ${product.name}`}
            >
              <span className="text-xs">Info</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
