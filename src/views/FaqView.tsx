import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { FAQS, BUSINESS_DETAILS } from '../data/furnitureData';
import { getCallUrl, getWhatsAppGeneralUrl } from '../utils/helpers';

export const FaqView: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // first one open by default
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Showroom', 'Customization', 'Delivery', 'Materials & Care'];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = FAQS.filter(
    (faq) => selectedCategory === 'All' || faq.category === selectedCategory
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#B8976C] font-semibold">
          Help & Inquiries
        </span>
        <h1 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-semibold text-[#181615]">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-[#544E47] font-sans max-w-xl mx-auto">
          Clear answers about visiting our Sector 10 Noida showroom, custom furniture fabrication, timber seasoning, and regional delivery across Delhi NCR.
        </p>

        {/* Category Filter Chips */}
        <div className="pt-2 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded text-xs font-medium transition-all touch-target ${
                selectedCategory === cat
                  ? 'bg-[#181615] text-[#FBF9F5]'
                  : 'bg-[#FDFBF7] text-[#544E47] border border-[#E6E1D8] hover:border-[#B8976C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = !!openIds[faq.id];
          return (
            <div
              key={faq.id}
              className="rounded-xl border border-[#E6E1D8] bg-[#FDFBF7] overflow-hidden transition-colors"
            >
              <button
                id={`faq-btn-${faq.id}`}
                onClick={() => toggleFaq(faq.id)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-editorial text-base sm:text-lg font-semibold text-[#181615] hover:text-[#B8976C] transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#B8976C] shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#544E47] font-sans leading-relaxed border-t border-[#EFEAE1]/70 bg-[#FAF7F0]/40">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#F5F2EB] border border-[#E6E1D8] text-center space-y-4">
        <h3 className="font-editorial text-xl font-semibold text-[#181615]">
          Have a Specific Project or Blueprint Question?
        </h3>
        <p className="text-xs sm:text-sm text-[#544E47] max-w-md mx-auto">
          Our furniture design architects are on hand to guide you directly. Reach out via WhatsApp or phone call.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-1">
          <a
            href={getWhatsAppGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded bg-[#1C4328] hover:bg-[#235833] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 touch-target"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={getCallUrl()}
            className="px-5 py-3 rounded bg-[#181615] hover:bg-[#2B231D] text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 touch-target"
          >
            <Phone className="w-4 h-4 text-[#B8976C]" />
            <span>Call {BUSINESS_DETAILS.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
