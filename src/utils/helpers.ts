import { BUSINESS_DETAILS } from '../data/furnitureData';
import { Product } from '../types/furniture';

export function getWhatsAppProductUrl(product: Product): string {
  const text = `Hello Grand Home, I am interested in enquiring about the "${product.name}" (${product.categoryName}). Please share details regarding pricing, finish customizations, and showroom availability.`;
  return `https://wa.me/${BUSINESS_DETAILS.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppCustomUrl(): string {
  const text = `Hello Grand Home, I would like to enquire about bespoke/custom furniture design for my residence/project in Delhi NCR. Could we discuss requirements?`;
  return `https://wa.me/${BUSINESS_DETAILS.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export function getWhatsAppGeneralUrl(): string {
  const text = `Hello Grand Home, I would like to know more about visiting your showroom in Sector 10, Noida and exploring your luxury furniture collections.`;
  return `https://wa.me/${BUSINESS_DETAILS.whatsappRaw}?text=${encodeURIComponent(text)}`;
}

export function getCallUrl(): string {
  return `tel:${BUSINESS_DETAILS.phone}`;
}

export function formatPrice(price?: number): string {
  if (!price) return 'Enquire for Price';
  return `₹${price.toLocaleString('en-IN')}`;
}
