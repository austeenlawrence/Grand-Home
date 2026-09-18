import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, Phone, MessageCircle, MapPin, Search } from 'lucide-react';
import { BUSINESS_DETAILS } from '../data/furnitureData';
import { getCallUrl, getWhatsAppGeneralUrl } from '../utils/helpers';
import { PageId } from '../types/furniture';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenSearch?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate, onOpenSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(() =>
    typeof window !== 'undefined' && window.innerWidth < 640 ? 92 : 108
  );

  // Measure and update header height for exact pixel-perfect drawer placement
  const updateHeaderHeight = useCallback(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    updateHeaderHeight();
    const handleResize = () => {
      updateHeaderHeight();
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, [updateHeaderHeight]);

  // Prevent background page scrolling when the mobile menu is open
  useEffect(() => {
    updateHeaderHeight();
    if (mobileMenuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen, updateHeaderHeight]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close menu if currentPage changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPage]);

  const navLinks: { id: PageId; label: string; badge?: string }[] = [
    { id: 'collections', label: 'Collections' },
    { id: 'new-arrivals', label: 'New Arrivals', badge: 'New' },
    { id: 'custom-furniture', label: 'Custom Furniture' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'offers', label: 'Offers' },
    { id: 'about', label: 'About' },
    { id: 'visit-showroom', label: 'Visit Showroom' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      ref={headerRef}
      id="site-header"
      className={`sticky top-0 w-full bg-[#FBF9F5] border-b border-[#E6E1D8] transition-colors ${
        mobileMenuOpen ? 'z-50' : 'z-30'
      }`}
    >
      {/* Top Announcement / Showroom Bar */}
      <div className="bg-[#181615] text-[#D8C2A7] text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 border-b border-[#2C241E]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B8976C] animate-pulse shrink-0"></span>
            <span className="truncate">
              Sector 10, Noida Showroom • Hours: 11:00 AM – 9:00 PM (Daily)
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[12px] font-medium shrink-0">
            <a
              id="top-call-link"
              href={getCallUrl()}
              className="hover:text-white transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3 text-[#B8976C]" />
              <span>Call: {BUSINESS_DETAILS.phone}</span>
            </a>
            <span className="text-[#3A3530]">|</span>
            <a
              id="top-whatsapp-link"
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1 text-[#D8C2A7]"
            >
              <MessageCircle className="w-3 h-3 text-[#25D366]" />
              <span>WhatsApp Showroom</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand Wordmark / Logo */}
          <div
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="cursor-pointer group flex flex-col justify-center select-none min-w-0"
          >
            <span className="font-editorial text-xl sm:text-2xl md:text-[26px] font-medium tracking-[0.14em] text-[#181615] uppercase group-hover:text-[#B8976C] transition-colors leading-none truncate">
              GRAND HOME
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-[#736B63] font-sans font-medium mt-1 truncate">
              Modern Luxury Furniture
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" aria-label="Main Navigation" className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 py-2 text-xs xl:text-[13px] font-medium tracking-wider uppercase transition-colors rounded ${
                    isActive
                      ? 'text-[#181615] font-semibold'
                      : 'text-[#544E47] hover:text-[#181615]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="ml-1 text-[9px] px-1.5 py-0.2 rounded bg-[#B8976C]/15 text-[#8E6C3B] font-semibold border border-[#B8976C]/30">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#B8976C]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs: Search, WhatsApp & Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {onOpenSearch && (
              <button
                id="header-search-btn"
                onClick={onOpenSearch}
                aria-label="Search furniture collection"
                className="w-10 h-10 p-2 text-[#544E47] hover:text-[#181615] rounded hover:bg-[#EFEAE1]/60 transition-colors flex items-center justify-center shrink-0"
              >
                <Search className="w-4 h-4" />
              </button>
            )}

            <a
              id="header-enquire-whatsapp"
              href={getWhatsAppGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wider uppercase rounded bg-[#181615] text-[#FBF9F5] hover:bg-[#2B231D] active:scale-[0.98] transition-all border border-[#3A3530]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Enquire</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setMobileMenuOpen((prev) => !prev);
              }}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-drawer"
              className="lg:hidden relative z-50 w-11 h-11 min-w-[44px] min-h-[44px] p-2.5 text-[#181615] rounded hover:bg-[#EFEAE1] transition-colors flex items-center justify-center shrink-0 cursor-pointer touch-target"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-[#181615]/40 backdrop-blur-[2px] transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          style={{
            top: `${headerHeight}px`,
            height: `calc(100dvh - ${headerHeight}px)`,
          }}
          className="lg:hidden fixed inset-x-0 bottom-0 z-50 bg-[#FBF9F5] border-t border-[#E6E1D8] flex flex-col justify-between overflow-y-auto shadow-2xl transition-all"
        >
          <div className="p-4 sm:p-6 space-y-1">
            <button
              id="mobile-nav-home"
              onClick={() => handleNavClick('home')}
              className={`w-full text-left py-3 px-3.5 rounded text-sm font-medium tracking-wide uppercase transition-colors min-h-[44px] flex items-center touch-target cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-[#EFEAE1] text-[#181615] font-semibold'
                  : 'text-[#544E47] hover:bg-[#F5F2EB]'
              }`}
            >
              Home
            </button>

            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left py-3 px-3.5 rounded text-sm font-medium tracking-wide uppercase flex items-center justify-between transition-colors min-h-[44px] touch-target cursor-pointer ${
                    isActive
                      ? 'bg-[#EFEAE1] text-[#181615] font-semibold'
                      : 'text-[#544E47] hover:bg-[#F5F2EB]'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#B8976C]/15 text-[#8E6C3B] font-semibold border border-[#B8976C]/30">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}

            <button
              id="mobile-nav-faq"
              onClick={() => handleNavClick('faq')}
              className={`w-full text-left py-3 px-3.5 rounded text-sm font-medium tracking-wide uppercase transition-colors min-h-[44px] flex items-center touch-target cursor-pointer ${
                currentPage === 'faq'
                  ? 'bg-[#EFEAE1] text-[#181615] font-semibold'
                  : 'text-[#544E47] hover:bg-[#F5F2EB]'
              }`}
            >
              Frequently Asked Questions (FAQ)
            </button>
          </div>

          {/* Quick Direct Actions in Mobile Drawer */}
          <div className="p-4 sm:p-6 bg-[#F5F2EB] border-t border-[#E6E1D8] space-y-3 shrink-0 pb-8">
            <div className="text-xs text-[#736B63] space-y-1">
              <p className="font-semibold text-[#181615] tracking-wider uppercase">GRAND HOME SHOWROOM</p>
              <p className="text-[11px] leading-relaxed">{BUSINESS_DETAILS.address.fullFormatted}</p>
              <p className="text-[11px]">Showroom Hours: {BUSINESS_DETAILS.hours}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                id="mobile-drawer-call-btn"
                href={getCallUrl()}
                className="flex items-center justify-center gap-1.5 py-3 px-2 rounded bg-[#181615] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider touch-target active:scale-[0.98] min-h-[44px] transition-transform"
              >
                <Phone className="w-3.5 h-3.5 text-[#B8976C] shrink-0" />
                <span className="truncate">Call Showroom</span>
              </a>
              <a
                id="mobile-drawer-whatsapp-btn"
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 px-2 rounded bg-[#1C4328] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider touch-target active:scale-[0.98] min-h-[44px] transition-transform"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                <span className="truncate">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
