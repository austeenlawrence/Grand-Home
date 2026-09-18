import React from 'react';
import { ArrowRight, Phone, MessageCircle, MapPin, Compass, Sparkles, ShieldCheck, Hammer } from 'lucide-react';
import { BUSINESS_DETAILS, CATEGORIES, PRODUCTS, TESTIMONIALS } from '../data/furnitureData';
import { ProductCard } from '../components/ProductCard';
import { Product, PageId, CategoryId } from '../types/furniture';
import { getCallUrl, getWhatsAppGeneralUrl, getWhatsAppCustomUrl } from '../utils/helpers';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (categoryId: CategoryId) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectProduct,
  onSelectCategory,
}) => {
  // Curated spotlight pieces for homepage
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 6);
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <div className="space-y-12 sm:space-y-20 pb-8">
      {/* 1. HERO SECTION: Controlled, editorial, mobile-optimized */}
      <section
        id="hero-section"
        className="relative bg-[#F5F2EB] border-b border-[#E6E1D8] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
              {/* Refined Brand Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEAE1] border border-[#D8CFC4] text-xs uppercase tracking-widest text-[#635C54]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8976C]"></span>
                <span>Noida Sector 10 Showroom</span>
              </div>

              {/* Refined Headline */}
              <div className="space-y-2">
                <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-[#181615] leading-[1.14] tracking-tight">
                  Furniture That Defines Your Space.
                </h1>
                <p className="text-sm sm:text-base text-[#544E47] font-sans leading-relaxed max-w-xl">
                  Discover handcrafted modern luxury furniture. From sculpted modular sectionals and sintered stone dining tables to bespoke master suites, engineered for distinguished homes, residences, and commercial interiors.
                </p>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  id="hero-explore-btn"
                  type="button"
                  onClick={() => onNavigate('collections')}
                  className="px-6 py-3.5 rounded bg-[#181615] hover:bg-[#2B231D] text-[#FBF9F5] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] touch-target"
                >
                  <span>Explore Collections</span>
                  <ArrowRight className="w-4 h-4 text-[#B8976C]" />
                </button>

                <button
                  id="hero-visit-btn"
                  type="button"
                  onClick={() => onNavigate('visit-showroom')}
                  className="px-6 py-3.5 rounded bg-transparent hover:bg-[#EFEAE1] text-[#181615] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all border border-[#181615]/30 flex items-center justify-center gap-2 active:scale-[0.98] touch-target"
                >
                  <MapPin className="w-4 h-4 text-[#B8976C]" />
                  <span>Visit Showroom</span>
                </button>
              </div>

              {/* Quick Contact Badges */}
              <div className="pt-2 flex items-center gap-4 text-xs text-[#736B63] border-t border-[#E6E1D8]">
                <a
                  href={getCallUrl()}
                  className="hover:text-[#181615] transition-colors flex items-center gap-1.5 font-medium"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B8976C]" />
                  <span>Call: {BUSINESS_DETAILS.phone}</span>
                </a>
                <span>•</span>
                <a
                  href={getWhatsAppGeneralUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#181615] transition-colors flex items-center gap-1.5 font-medium text-[#1C4328]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>
            </div>

            {/* Right Editorial Visual Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden shadow-2xl border border-[#E6E1D8]">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                  alt="Grand Home Luxury Furniture Living Setting"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />

                {/* Floating Architectural Note Overlay */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto sm:max-w-xs bg-[#181615]/90 backdrop-blur-md p-3 rounded text-[#FBF9F5] border border-[#B8976C]/30 text-xs shadow-lg">
                  <p className="font-editorial text-sm font-medium text-[#EFEAE1]">
                    Aria Modular & Calacatta Setting
                  </p>
                  <p className="text-[11px] text-[#A89E92] mt-0.5">
                    Available for experiential viewing at our Sector 10 Noida showroom.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE ARCHITECTURAL PILLARS (Clean, subtle, high contrast) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="p-5 sm:p-6 rounded-lg bg-[#FDFBF7] border border-[#E6E1D8] space-y-2">
            <div className="w-8 h-8 rounded bg-[#EFEAE1] flex items-center justify-center text-[#B8976C]">
              <Compass className="w-4 h-4" />
            </div>
            <h2 className="font-editorial text-lg font-semibold text-[#181615]">
              Architectural Proportions
            </h2>
            <p className="text-xs sm:text-sm text-[#635C54] leading-relaxed">
              Every curve, depth, and angle is balanced to harmonize with contemporary luxury apartments, duplexes, and independent bungalows.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-lg bg-[#FDFBF7] border border-[#E6E1D8] space-y-2">
            <div className="w-8 h-8 rounded bg-[#EFEAE1] flex items-center justify-center text-[#B8976C]">
              <Hammer className="w-4 h-4" />
            </div>
            <h2 className="font-editorial text-lg font-semibold text-[#181615]">
              Artisan Wood & Stone
            </h2>
            <p className="text-xs sm:text-sm text-[#635C54] leading-relaxed">
              Kiln-dried seasoned teak, American walnut, stain-proof Italian sintered ceramics, and high-density anti-sag memory foundations.
            </p>
          </div>

          <div className="p-5 sm:p-6 rounded-lg bg-[#FDFBF7] border border-[#E6E1D8] space-y-2">
            <div className="w-8 h-8 rounded bg-[#EFEAE1] flex items-center justify-center text-[#B8976C]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="font-editorial text-lg font-semibold text-[#181615]">
              Showroom Transparency
            </h2>
            <p className="text-xs sm:text-sm text-[#635C54] leading-relaxed">
              No hidden specifications. Experience fabric textures, drawer mechanisms, and wood grain finishes directly before making an investment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED COLLECTIONS: Asymmetric, editorial category layout */}
      <section id="featured-collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
              Curated Spaces
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181615] mt-1">
              Featured Collections
            </h2>
          </div>
          <button
            onClick={() => onNavigate('collections')}
            className="text-xs sm:text-sm font-semibold text-[#181615] hover:text-[#B8976C] transition-colors flex items-center gap-1 self-start sm:self-auto touch-target sm:min-h-0"
          >
            <span>View All Categories ({CATEGORIES.length})</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Asymmetric Category Grid: Large hero tile + supporting tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {/* Main Large Feature Tile: Sofas */}
          <div
            onClick={() => {
              onSelectCategory('sofas');
              onNavigate('collections');
            }}
            className="col-span-2 row-span-2 relative group rounded-xl overflow-hidden cursor-pointer bg-[#181615] aspect-[4/3] sm:aspect-auto border border-[#E6E1D8]"
          >
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80"
              alt="Sofas & Sectionals"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/90 via-[#181615]/30 to-transparent p-4 sm:p-8 flex flex-col justify-end">
              <span className="text-xs uppercase tracking-wider text-[#D8C2A7] font-medium">
                Core Collection
              </span>
              <h3 className="font-editorial text-xl sm:text-3xl font-semibold text-[#FBF9F5] mt-1">
                Sofas & Sectionals
              </h3>
              <p className="text-xs sm:text-sm text-[#D8CFC4] max-w-sm mt-1 hidden sm:block">
                Modular Italian bouclé suites, top-grain leather sectionals, and sculpted accent armchairs.
              </p>
              <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#B8976C] group-hover:translate-x-1 transition-transform">
                <span>Explore Sofas</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Supporting Tile: Beds */}
          <div
            onClick={() => {
              onSelectCategory('beds');
              onNavigate('collections');
            }}
            className="col-span-1 relative group rounded-xl overflow-hidden cursor-pointer bg-[#181615] aspect-square border border-[#E6E1D8]"
          >
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
              alt="Beds & Headboards"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/85 to-transparent p-3 sm:p-4 flex flex-col justify-end">
              <h3 className="font-editorial text-sm sm:text-lg font-semibold text-[#FBF9F5]">
                Beds & Headboards
              </h3>
              <span className="text-[11px] text-[#B8976C] mt-0.5">Explore Beds →</span>
            </div>
          </div>

          {/* Supporting Tile: Dining Tables */}
          <div
            onClick={() => {
              onSelectCategory('dining-tables');
              onNavigate('collections');
            }}
            className="col-span-1 relative group rounded-xl overflow-hidden cursor-pointer bg-[#181615] aspect-square border border-[#E6E1D8]"
          >
            <img
              src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80"
              alt="Dining Tables & Chairs"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/85 to-transparent p-3 sm:p-4 flex flex-col justify-end">
              <h3 className="font-editorial text-sm sm:text-lg font-semibold text-[#FBF9F5]">
                Dining Tables
              </h3>
              <span className="text-[11px] text-[#B8976C] mt-0.5">Explore Dining →</span>
            </div>
          </div>

          {/* Supporting Tile: Wardrobes */}
          <div
            onClick={() => {
              onSelectCategory('wardrobes');
              onNavigate('collections');
            }}
            className="col-span-1 relative group rounded-xl overflow-hidden cursor-pointer bg-[#181615] aspect-square border border-[#E6E1D8]"
          >
            <img
              src="https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=800&q=80"
              alt="Wardrobes & Storage"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/85 to-transparent p-3 sm:p-4 flex flex-col justify-end">
              <h3 className="font-editorial text-sm sm:text-lg font-semibold text-[#FBF9F5]">
                Wardrobes
              </h3>
              <span className="text-[11px] text-[#B8976C] mt-0.5">Explore Wardrobes →</span>
            </div>
          </div>

          {/* Supporting Tile: TV Units */}
          <div
            onClick={() => {
              onSelectCategory('tv-units');
              onNavigate('collections');
            }}
            className="col-span-1 relative group rounded-xl overflow-hidden cursor-pointer bg-[#181615] aspect-square border border-[#E6E1D8]"
          >
            <img
              src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80"
              alt="TV Units & Consoles"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181615]/85 to-transparent p-3 sm:p-4 flex flex-col justify-end">
              <h3 className="font-editorial text-sm sm:text-lg font-semibold text-[#FBF9F5]">
                TV Units
              </h3>
              <span className="text-[11px] text-[#B8976C] mt-0.5">Explore Media →</span>
            </div>
          </div>
        </div>

        {/* Quick Category Pills for Instant Navigation */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
          <span className="text-[#8C8379] font-medium shrink-0">Browse:</span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                onSelectCategory(cat.id);
                onNavigate('collections');
              }}
              className="shrink-0 px-3 py-1.5 rounded-full bg-[#EFEAE1] hover:bg-[#E6E0D4] text-[#181615] font-medium transition-colors"
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* 4. CURATED SHOWROOM SPOTLIGHT: 2-Column on mobile, 3-Column on desktop */}
      <section id="curated-spotlight" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
              Curated Furniture
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181615] mt-1">
              Showroom Highlights
            </h2>
            <p className="text-xs sm:text-sm text-[#635C54] mt-1">
              Selected designs available for tactile inspection at our Noida Sector 10 showroom.
            </p>
          </div>

          <button
            onClick={() => onNavigate('collections')}
            className="text-xs sm:text-sm font-semibold text-[#181615] hover:text-[#B8976C] transition-colors flex items-center gap-1 self-start sm:self-auto touch-target sm:min-h-0"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 2-Column Mobile Grid, 3-Column on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* 5. BESPOKE CUSTOM FURNITURE ATELIER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#221D19] rounded-2xl p-6 sm:p-10 lg:p-12 text-[#FBF9F5] border border-[#3A3028] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
              Grand Home Atelier
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight text-[#FBF9F5]">
              Tailored Furniture for Your Exact Floor Plan.
            </h2>
            <p className="text-xs sm:text-sm text-[#D8CFC4] leading-relaxed">
              Have specific room dimensions, unusual structural columns, or a distinct fabric palette in mind? Our master craftsmen collaborate with homeowners, architects, and interior designers to create custom furniture made to your exact millimeter specifications.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onNavigate('custom-furniture')}
                className="px-5 py-3 rounded bg-[#B8976C] hover:bg-[#A38258] text-[#181615] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors touch-target"
              >
                Learn About Custom Furniture
              </button>

              <a
                href={getWhatsAppCustomUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded bg-[#1C4328] hover:bg-[#235833] text-[#FBF9F5] text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors touch-target"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Design Query</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. NEW ARRIVALS PREVIEW */}
      <section id="home-new-arrivals" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 gap-2">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
              Fresh Releases
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181615] mt-1">
              New Arrivals
            </h2>
          </div>
          <button
            onClick={() => onNavigate('new-arrivals')}
            className="text-xs sm:text-sm font-semibold text-[#181615] hover:text-[#B8976C] transition-colors flex items-center gap-1 self-start sm:self-auto touch-target sm:min-h-0"
          >
            <span>See All New Arrivals</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {newArrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      </section>

      {/* 7. VISIT SHOWROOM INVITATION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F5F2EB] rounded-2xl border border-[#E6E1D8] p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
                Experiential Showroom
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl md:text-4xl font-semibold text-[#181615]">
                Experience Modern Luxury in Noida.
              </h2>
              <p className="text-xs sm:text-sm text-[#544E47] leading-relaxed">
                Furniture should be experienced in person. Test the ergonomics of our seating, feel the tactile grain of seasoned timber, and inspect stone veining under ambient light.
              </p>

              <div className="pt-2 text-xs sm:text-sm text-[#181615] space-y-1 font-medium">
                <p>📍 {BUSINESS_DETAILS.address.fullFormatted}</p>
                <p>⏰ Open Daily: {BUSINESS_DETAILS.hours}</p>
                <p>📞 Phone / WhatsApp: {BUSINESS_DETAILS.phone}</p>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => onNavigate('visit-showroom')}
                  className="px-5 py-3 rounded bg-[#181615] hover:bg-[#2B231D] text-[#FBF9F5] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors touch-target"
                >
                  Showroom Directions & Map
                </button>
                <a
                  href={getCallUrl()}
                  className="px-5 py-3 rounded bg-[#EFEAE1] hover:bg-[#E6E0D4] text-[#181615] text-xs sm:text-sm font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors touch-target"
                >
                  <Phone className="w-4 h-4 text-[#B8976C]" />
                  <span>Call {BUSINESS_DETAILS.phone}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[4/3] rounded-xl overflow-hidden border border-[#E6E1D8] shadow-md">
              <img
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80"
                alt="Grand Home Showroom Setting"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLIENT PERSPECTIVES / TESTIMONIALS (Realistic, zero fake claims or fake stars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
          <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
            Client Perspectives
          </span>
          <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#181615]">
            Craftsmanship in Real Spaces
          </h2>
          <p className="text-xs sm:text-sm text-[#635C54]">
            Experiences from homeowners, architects, and designers who selected Grand Home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-xl bg-[#FDFBF7] border border-[#E6E1D8] flex flex-col justify-between space-y-4 hover:border-[#B8976C]/40 transition-colors"
            >
              <p className="text-xs sm:text-sm text-[#544E47] italic font-sans leading-relaxed">
                "{t.comment}"
              </p>
              <div className="pt-3 border-t border-[#EFEAE1]">
                <p className="font-editorial text-sm font-semibold text-[#181615]">
                  {t.clientName}
                </p>
                <p className="text-[11px] text-[#736B63]">{t.residenceLocation}</p>
                <span className="inline-block mt-1 text-[10px] px-2 py-0.5 rounded bg-[#EFEAE1] text-[#544E47]">
                  {t.projectScope}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
