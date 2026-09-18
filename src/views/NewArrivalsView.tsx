import React from 'react';
import { PRODUCTS } from '../data/furnitureData';
import { ProductCard } from '../components/ProductCard';
import { Product } from '../types/furniture';
import { Sparkles } from 'lucide-react';

interface NewArrivalsViewProps {
  onSelectProduct: (product: Product) => void;
}

export const NewArrivalsView: React.FC<NewArrivalsViewProps> = ({ onSelectProduct }) => {
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-[#E6E1D8] pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFEAE1] text-xs font-semibold uppercase tracking-wider text-[#8E6C3B]">
          <Sparkles className="w-3.5 h-3.5 text-[#B8976C]" />
          <span>Curated Contemporary Drops</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181615]">
          New Arrivals
        </h1>
        <p className="text-xs sm:text-sm text-[#544E47] max-w-2xl font-sans">
          The latest architectural designs introduced to our Sector 10, Noida showroom. Featuring tactile bouclé weaves, sintered Calacatta stone, and organic fluted woodwork.
        </p>
      </div>

      {/* 2-Column Mobile Grid, 3-4 Columns Desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
        {newArrivals.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
          />
        ))}
      </div>

      {/* Showroom Preview Note */}
      <div className="p-6 bg-[#F5F2EB] rounded-xl border border-[#E6E1D8] text-center space-y-2 max-w-xl mx-auto">
        <p className="font-editorial text-base font-semibold text-[#181615]">
          Experience These New Arrivals in Person
        </p>
        <p className="text-xs text-[#544E47]">
          All new releases are on display on the Second Floor of our Sector 10, Noida showroom. Open daily from 11:00 AM to 9:00 PM.
        </p>
      </div>
    </div>
  );
};
