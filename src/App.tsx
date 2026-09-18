/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ProductDetailModal } from './components/ProductDetailModal';
import { HomeView } from './views/HomeView';
import { CollectionsView } from './views/CollectionsView';
import { CustomFurnitureView } from './views/CustomFurnitureView';
import { GalleryView } from './views/GalleryView';
import { OffersView } from './views/OffersView';
import { NewArrivalsView } from './views/NewArrivalsView';
import { AboutView } from './views/AboutView';
import { VisitShowroomView } from './views/VisitShowroomView';
import { ContactView } from './views/ContactView';
import { FaqView } from './views/FaqView';
import { PageId, Product, CategoryId } from './types/furniture';
import { PRODUCTS } from './data/furnitureData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');

  // Synchronize hash routing for bookmarking and back button navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').split('?')[0];
      const validPages: PageId[] = [
        'home',
        'collections',
        'custom-furniture',
        'gallery',
        'offers',
        'new-arrivals',
        'about',
        'visit-showroom',
        'contact',
        'faq',
      ];

      if (validPages.includes(hash as PageId)) {
        setCurrentPage(hash as PageId);
      } else if (!hash) {
        setCurrentPage('home');
      }

      // Check if there is a product query
      if (window.location.hash.includes('product=')) {
        const params = new URLSearchParams(window.location.hash.split('?')[1]);
        const productId = params.get('product');
        if (productId) {
          const match = PRODUCTS.find((p) => p.id === productId);
          if (match) setSelectedProduct(match);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleSelectCategory = (categoryId: CategoryId) => {
    setActiveCategory(categoryId);
    navigateTo('collections');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1F1D1A]">
      {/* Site Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSearch={() => {
          navigateTo('collections');
          setTimeout(() => {
            const el = document.getElementById('catalogue-search-input');
            if (el) el.focus();
          }, 150);
        }}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomeView
            onNavigate={navigateTo}
            onSelectProduct={handleSelectProduct}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {currentPage === 'collections' && (
          <CollectionsView
            initialCategory={activeCategory}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'custom-furniture' && (
          <CustomFurnitureView onSelectProduct={handleSelectProduct} />
        )}

        {currentPage === 'gallery' && <GalleryView />}

        {currentPage === 'offers' && <OffersView onNavigate={navigateTo} />}

        {currentPage === 'new-arrivals' && (
          <NewArrivalsView onSelectProduct={handleSelectProduct} />
        )}

        {currentPage === 'about' && <AboutView onNavigate={navigateTo} />}

        {currentPage === 'visit-showroom' && <VisitShowroomView />}

        {currentPage === 'contact' && <ContactView />}

        {currentPage === 'faq' && <FaqView />}
      </main>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Luxury Dark Editorial Footer */}
      <Footer onNavigate={navigateTo} onSelectCategory={(catId) => handleSelectCategory(catId as CategoryId)} />

      {/* Mobile Sticky Quick Action Bar (CALL + WHATSAPP + VISIT) */}
      <MobileStickyBar onNavigate={navigateTo} currentPage={currentPage} />
    </div>
  );
}
