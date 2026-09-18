export type CategoryId =
  | 'all'
  | 'sofas'
  | 'beds'
  | 'dining-tables'
  | 'wardrobes'
  | 'tv-units'
  | 'coffee-tables'
  | 'office-furniture'
  | 'custom-furniture'
  | 'home-decor';

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  image: string;
  itemCount: number;
}

export type ProductBadge = 'NEW ARRIVAL' | 'CURATED' | 'BESPOKE' | 'SHOWROOM EXCLUSIVE' | 'LIMITED';

export interface Product {
  id: string;
  name: string;
  category: CategoryId;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  priceDisplay: string; // e.g. "Starting from ₹68,000" or "Enquire for Price"
  numericPrice?: number; // for sorting if applicable
  badge?: ProductBadge;
  image: string;
  galleryImages?: string[];
  dimensions: string;
  primaryMaterial: string;
  finishOptions: string[];
  leadTime: string;
  isNewArrival?: boolean;
  isFeatured?: boolean;
}

export interface BusinessDetails {
  brandName: string;
  tagline: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    fullFormatted: string;
  };
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  hours: string;
  days: string;
  googleMapsDirectionsUrl: string;
  googleMapsEmbedUrl: string;
}

export interface ShowroomOffer {
  id: string;
  title: string;
  tagline: string;
  description: string;
  eligibility: string;
  badge: string;
  actionText: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Living' | 'Dining' | 'Bedroom' | 'Office' | 'Bespoke';
  locationTag: string;
  image: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export interface Testimonial {
  id: string;
  clientName: string;
  residenceLocation: string; // e.g., "Jaypee Greens, Greater Noida", "Sector 44, Noida"
  projectScope: string;
  comment: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Showroom' | 'Customization' | 'Delivery' | 'Materials & Care';
}

export type PageId =
  | 'home'
  | 'collections'
  | 'product-detail'
  | 'custom-furniture'
  | 'gallery'
  | 'offers'
  | 'new-arrivals'
  | 'about'
  | 'visit-showroom'
  | 'contact'
  | 'faq';
