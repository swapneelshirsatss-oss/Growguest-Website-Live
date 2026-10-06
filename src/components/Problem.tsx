import { motion } from 'motion/react';
import { X, Check, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function Problem() {
  return (
    <section id="disparity" className="py-20 md:py-28 bg-[#fcfbf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/5 border border-emerald-900/15 text-[#043f2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#c99a2e]" />
            <span>THE REALITY CHECK FOR PROPERTY OWNERS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#071510] tracking-tight mb-4"
          >
            Why pay 20% on guests who{' '}
            <span className="font-serif italic font-normal text-[#c99a2e]">already know you?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Most travellers discover you on an OTA, then immediately search Google for your website and reviews. If your direct booking journey is slow or missing, you hand that booking back to MakeMyTrip or Booking.com—along with your hard-earned profits.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: The OTA Trap */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 mb-2">
                THE COMMODITY CHANNEL
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                The OTA Trap (MakeMyTrip, Agoda, Booking.com)
              </h3>
              <p className="text-sm text-slate-600 mb-8">
                High commission taxes eating directly into your gross operational margins.
              </p>

              <ul className="space-y-5">
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-slate-900">
                      18% to 25% Commission Bleed
                    </strong>
                    <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      On a ₹3,00,000 monthly room revenue, you sacrifice ₹54,000 to ₹75,000 every single month.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-slate-900">
                      Masked Guest Contact Data
                    </strong>
                    <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      OTAs hide the guest’s real phone and email, making repeat direct marketing and loyalty impossible.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-slate-900">
                      Delayed 15–45 Day Payout Cycles
                    </strong>
                    <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Your revenue sits in aggregator accounts instead of fueling your immediate operational cash flow.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✕
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-slate-900">
                      Competitor Ads on Your Listing
                    </strong>
                    <span className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      OTAs actively display cheaper neighboring hotels right under your photos to trigger price wars.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2: The GrowGuest Direct Engine */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0c2018] text-white rounded-3xl p-8 sm:p-10 border border-[#c99a2e]/40 shadow-2xl relative overflow-hidden flex flex-col justify-between"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c99a2e]/10 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#dfad3c] mb-2 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#dfad3c] animate-pulse" />
                THE HIGH-MARGIN PIPELINE
              </div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ color: '#ffffff' }}>
                The GrowGuest Direct Booking Engine
              </h3>
              <p className="text-sm text-emerald-200/80 mb-8">
                Direct reservations, zero commissions, and 100% guest database ownership.
              </p>

              <ul className="space-y-5">
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#25d366]/20 text-[#25d366] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-white">
                      0% Commission on Direct Stays
                    </strong>
                    <span className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed">
                      Keep 100% of your room revenue in your bank account, preserving your property's net profit.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#25d366]/20 text-[#25d366] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-white">
                      100% Direct Guest WhatsApp Ownership
                    </strong>
                    <span className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed">
                      Build a proprietary guest database for seasonal campaigns, birthdays, and high-margin repeat visits.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#25d366]/20 text-[#25d366] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-white">
                      Instant Direct Payments to Your Bank
                    </strong>
                    <span className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed">
                      UPI, netbanking, or direct advance transfers without holding periods or processing deductions.
                    </span>
                  </div>
                </li>

                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#25d366]/20 text-[#25d366] flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ✓
                  </div>
                  <div>
                    <strong className="block text-sm font-semibold text-white">
                      Google Maps 3-Pack & Brand Exclusivity
                    </strong>
                    <span className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed">
                      Dominate local search results and present your unique property story without distracting third-party ads.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
