import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronDown, HelpCircle } from 'lucide-react';

export default function Testimonials() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do we have to completely stop using OTAs like MakeMyTrip?",
      a: "Not at all. OTAs serve as a discovery billboard for new travelers. Our goal is to capture travelers who discover your name on MakeMyTrip or Booking.com and then search Google to inspect your property directly. By offering an easier, faster, and better-incentivized direct booking route, you keep the 18%–25% commission in your pocket."
    },
    {
      q: "What exactly does the Free Growth Audit cover?",
      a: "We conduct a comprehensive 360° inspection: Google Business Profile visibility in your destination, mobile loading speed, room presentation clarity, rate disparity between OTAs and your own website, and the friction in your WhatsApp enquiry flow. You receive concrete, actionable recommendations."
    },
    {
      q: "Is GrowGuest suitable for small homestays or heritage villas?",
      a: "Yes! Boutique properties with 3 to 20 rooms benefit the most because OTAs take a huge portion of their operational margin. Shifting just 10 to 15 bookings each month directly to WhatsApp can save ₹40,000 to ₹1,00,000+ in annual commissions."
    },
    {
      q: "Why focus on WhatsApp rather than expensive booking engines?",
      a: "In India, leisure travelers want reassurance before paying ₹15,000–₹50,000 for a stay. They ask about mountain views, road conditions, child meals, and pet policies. WhatsApp provides immediate human reassurance with a 98% open rate, closing high-value reservations far more effectively than cold checkout forms."
    },
    {
      q: "How do you structure your consulting engagements and fees?",
      a: "Every property has different room inventory, seasonal peaks, and existing digital assets. Following your free audit, we provide a transparent, fixed-scope proposal with clear deliverables. There are no hidden fees or locked contracts."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/5 border border-emerald-900/15 text-[#043f2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#c99a2e]" />
            <span>OWNER EXPERIENCES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#071510] tracking-tight mb-4">
            Trusted by Hospitality Operators
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Real feedback from property owners taking control of their bookings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-24">
          <div className="bg-[#fcfbf9] p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-4 text-[#c99a2e]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed mb-6 font-serif">
                “I used to think paying 22% to OTAs was just the inevitable cost of running a homestay. GrowGuest showed us how many guests were searching for us on Google after finding our listing on Booking.com. Once our direct website and WhatsApp booking flow went live, direct bookings jumped dramatically.”
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="font-bold text-[#043f2e]">Rajeev S.</div>
              <div className="text-xs text-slate-500 font-mono">Heritage Homestay Owner • Uttarakhand</div>
            </div>
          </div>

          <div className="bg-[#fcfbf9] p-8 sm:p-10 rounded-3xl shadow-sm border border-slate-200/80 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 mb-4 text-[#c99a2e]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-base sm:text-lg text-slate-700 italic leading-relaxed mb-6 font-serif">
                “Most agencies talk about impressions and social media likes. Swapneel was the only consultant who sat down and looked at our OTA commission statements. The Google Business Profile ranking and automated WhatsApp inquiries brought us full weekend group buyouts with zero commission bleed.”
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200">
              <div className="font-bold text-[#043f2e]">Ananya M.</div>
              <div className="text-xs text-slate-500 font-mono">Boutique Resort Director • Maharashtra</div>
            </div>
          </div>
        </div>

        {/* FAQ Accordion Block */}
        <div className="max-w-4xl mx-auto pt-16 border-t border-slate-200/80">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/5 border border-emerald-900/15 text-[#043f2e] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#c99a2e]" />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-3xl font-extrabold text-[#071510] tracking-tight">
              Clear answers for <span className="font-serif italic font-normal text-[#c99a2e]">property owners.</span>
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div 
                  key={idx} 
                  className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-[#043f2e] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#043f2e]' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
