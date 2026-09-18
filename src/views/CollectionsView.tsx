import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X, ArrowUpDown } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/furnitureData';
import { ProductCard } from '../components/ProductCard';
import { CategoryId, Product } from '../types/furniture';

interface CollectionsViewProps {
  initialCategory?: CategoryId;
  onSelectProduct: (product: Product) => void;
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc';

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  initialCategory = 'all',
  onSelectProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<SortOption>('featured');

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category Match
      const matchesCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      // Search Match
      const matchesSearch =
        !searchQuery.trim() ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.primaryMaterial.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortOption === 'price-asc') {
        return (a.numericPrice || 999999) - (b.numericPrice || 999999);
      }
      if (sortOption === 'price-desc') {
        return (b.numericPrice || 0) - (a.numericPrice || 0);
      }
      if (sortOption === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      // 'featured'
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });
  }, [selectedCategory, searchQuery, sortOption]);

  const allCategoryOptions: { id: CategoryId; name: string }[] = [
    { id: 'all', name: 'All Pieces' },
    ...CATEGORIES.map((c) => ({ id: c.id, name: c.name })),
  ];

  const currentCategoryInfo = CATEGORIES.find((c) => c.id === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header & Page Title */}
      <div className="space-y-2 border-b border-[#E6E1D8] pb-6">
        <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
          Grand Home Showroom Catalogue
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181615]">
          {selectedCategory === 'all'
            ? 'Complete Furniture Collections'
            : currentCategoryInfo?.name || 'Curated Collection'}
        </h1>
        <p className="text-xs sm:text-sm text-[#544E47] max-w-2xl font-sans">
          {selectedCategory === 'all'
            ? 'Browse our extensive showroom portfolio designed with solid hardwoods, sintered stone, and bespoke finish options.'
            : currentCategoryInfo?.tagline}
        </p>
      </div>

      {/* Search & Filter Controls (Engineered for Mobile & Desktop) */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C8379]" />
            <input
              id="catalogue-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, wood, fabric or style..."
              className="w-full pl-10 pr-9 py-2.5 rounded bg-[#FDFBF7] border border-[#E6E1D8] text-xs sm:text-sm text-[#181615] placeholder-[#8C8379] focus:outline-none focus:border-[#B8976C] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C8379] hover:text-[#181615]"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#8C8379]" />
            <select
              id="catalogue-sort-select"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as SortOption)}
              className="py-2.5 px-3 rounded bg-[#FDFBF7] border border-[#E6E1D8] text-xs font-medium text-[#181615] focus:outline-none focus:border-[#B8976C] transition-colors cursor-pointer"
            >
              <option value="featured">Sort by: Curated & Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Alphabetical: A to Z</option>
            </select>
          </div>
        </div>

        {/* Category Horizontal Scroll Pills (Optimized for Mobile Touch) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
          {allCategoryOptions.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-filter-${cat.id}`}
                onClick={() => setSelectedCategory(cat.id)}
                className={`shrink-0 px-3.5 py-2 rounded text-xs font-medium tracking-wide transition-all touch-target ${
                  isSelected
                    ? 'bg-[#181615] text-[#FBF9F5] shadow-sm'
                    : 'bg-[#FDFBF7] text-[#544E47] border border-[#E6E1D8] hover:border-[#B8976C]'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Results Summary */}
      <div className="flex items-center justify-between text-xs text-[#736B63] pt-1">
        <span>
          Showing <strong>{filteredProducts.length}</strong> items
          {searchQuery && ` for "${searchQuery}"`}
        </span>
        {(selectedCategory !== 'all' || searchQuery) && (
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="text-[#B8976C] hover:underline font-medium"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* 2-Column Mobile Grid, 3-4 Columns on Tablet/Desktop */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center bg-[#FDFBF7] rounded-xl border border-[#E6E1D8] space-y-3">
          <p className="font-editorial text-lg font-semibold text-[#181615]">
            No pieces found matching your criteria.
          </p>
          <p className="text-xs sm:text-sm text-[#736B63]">
            Try adjusting your search query or selecting a different category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="px-4 py-2 rounded bg-[#181615] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider"
          >
            Show All Products
          </button>
        </div>
      )}

      {/* Custom Enquiries Helper Note */}
      <div className="p-6 bg-[#F5F2EB] rounded-xl border border-[#E6E1D8] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-editorial text-base sm:text-lg font-semibold text-[#181615]">
            Looking for customized dimensions or fabrics?
          </h3>
          <p className="text-xs text-[#544E47] mt-0.5">
            Every standard piece in our catalogue can be adapted to your preferred size, timber stain, and upholstery.
          </p>
        </div>
        <a
          href={`https://wa.me/919354155527?text=${encodeURIComponent(
            'Hello Grand Home, I am browsing your furniture catalogue and have a custom sizing inquiry.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 px-4 py-2.5 rounded bg-[#1C4328] hover:bg-[#235833] text-white text-xs font-semibold uppercase tracking-wider transition-colors touch-target flex items-center justify-center gap-1.5"
        >
          <span>Enquire on WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
