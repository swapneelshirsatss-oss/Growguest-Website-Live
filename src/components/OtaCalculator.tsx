import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, IndianRupee, TrendingUp, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export default function OtaCalculator() {
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(300000); // Default ₹3 Lakhs
  const [otaPercentage, setOtaPercentage] = useState<number>(60); // 60% bookings via OTAs
  const [commissionRate, setCommissionRate] = useState<number>(18); // 18% avg commission

  // Calculations
  const otaRevenue = (monthlyRevenue * otaPercentage) / 100;
  const monthlyCommission = (otaRevenue * commissionRate) / 100;
  const yearlyCommission = monthlyCommission * 12;
  const potentialSavings = Math.round(yearlyCommission * 0.7); // 70% direct booking shift

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#02291e] via-[#043f2e] to-[#02291e] text-white relative overflow-hidden border-t border-emerald-500/20">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#c8f169]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8f169]/15 border border-[#c8f169]/30 text-[#c8f169] text-sm font-semibold mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" />
            <span>Interactive Profit Simulator</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
          >
            How Much Commission are You <span className="font-serif italic font-normal text-[#c8f169]">Bleeding to OTAs?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-emerald-100/90 text-lg sm:text-xl"
          >
            Adjust the sliders below to calculate exact money lost to MakeMyTrip, Agoda & Booking.com — and calculate your direct booking profit potential.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#043f2e]/70 backdrop-blur-2xl border border-emerald-500/30 p-6 sm:p-8 rounded-3xl flex flex-col justify-between shadow-2xl"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="p-3 bg-[#c8f169]/15 text-[#c8f169] rounded-2xl border border-[#c8f169]/30">
                  <Calculator className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Property Financial Inputs</h3>
                  <p className="text-sm text-emerald-200/70">Slide values matching your current monthly operations</p>
                </div>
              </div>

              {/* Slider 1: Total Monthly Booking Revenue */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-emerald-100">Total Monthly Booking Revenue</span>
                  <span className="text-[#c8f169] text-lg font-extrabold">{formatCurrency(monthlyRevenue)}</span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={2000000}
                  step={25000}
                  value={monthlyRevenue}
                  onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                  className="w-full h-3 bg-[#02291e] rounded-lg appearance-none cursor-pointer accent-[#c8f169]"
                />
                <div className="flex justify-between text-xs text-emerald-200/50 font-medium">
                  <span>₹50,000</span>
                  <span>₹10,000,000</span>
                  <span>₹20,000,000+</span>
                </div>
              </div>

              {/* Slider 2: % Bookings via OTAs */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-emerald-100">% Bookings coming from OTAs</span>
                  <span className="text-emerald-300 text-lg font-extrabold">{otaPercentage}%</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={90}
                  step={5}
                  value={otaPercentage}
                  onChange={(e) => setOtaPercentage(Number(e.target.value))}
                  className="w-full h-3 bg-[#02291e] rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-xs text-emerald-200/50 font-medium">
                  <span>20% (Low)</span>
                  <span>60% (Avg)</span>
                  <span>90% (Dependent)</span>
                </div>
              </div>

              {/* Slider 3: OTA Commission Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-emerald-100">Average OTA Commission Fee</span>
                  <span className="text-red-400 text-lg font-extrabold">{commissionRate}%</span>
                </div>
                <input
                  type="range"
                  min={12}
                  max={25}
                  step={1}
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(Number(e.target.value))}
                  className="w-full h-3 bg-[#02291e] rounded-lg appearance-none cursor-pointer accent-red-400"
                />
                <div className="flex justify-between text-xs text-emerald-200/50 font-medium">
                  <span>12%</span>
                  <span>18% (Standard MMT/Agoda)</span>
                  <span>25% (Premium Listing)</span>
                </div>
              </div>
            </div>

            {/* Visual Breakdown Bar */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex justify-between text-xs font-semibold text-emerald-200/70 mb-2">
                <span>Revenue Breakdown</span>
                <span>OTA Cut vs Kept Profit</span>
              </div>
              <div className="h-4 w-full bg-[#02291e] rounded-full overflow-hidden flex shadow-inner border border-white/10">
                <div 
                  className="bg-red-500 h-full transition-all duration-300" 
                  style={{ width: `${(monthlyCommission / monthlyRevenue) * 100}%` }}
                />
                <div 
                  className="bg-[#c8f169] h-full transition-all duration-300" 
                  style={{ width: `${100 - ((monthlyCommission / monthlyRevenue) * 100)}%` }}
                />
              </div>
            </div>
          </motion.div>

          {/* Results & ROI Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#043f2e] via-[#02291e] to-[#02291e] p-6 sm:p-8 rounded-3xl border border-[#c8f169]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-[#c8f169] text-[#043f2e] px-4 py-1.5 rounded-bl-2xl font-extrabold text-xs flex items-center gap-1 shadow-lg">
              <TrendingUp className="w-3.5 h-3.5" />
              DIRECT BOOKING PIPELINE
            </div>

            <div className="space-y-6 pt-2">
              <div className="text-xs uppercase tracking-wider text-[#c8f169] font-extrabold">
                Estimated OTA Bleed Analysis
              </div>

              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-4">
                  <div className="text-xs text-red-300 font-semibold mb-1">Monthly Money Lost to Commissions</div>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={monthlyCommission}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      className="text-3xl font-extrabold text-red-400 flex items-center"
                    >
                      {formatCurrency(monthlyCommission)}
                      <span className="text-xs font-normal text-red-300/80 ml-2">/ month</span>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="bg-[#c8f169]/15 border border-[#c8f169]/30 rounded-2xl p-5 relative overflow-hidden">
                  <div className="absolute top-2 right-2 text-[#c8f169]/20">
                    <ShieldCheck className="w-16 h-16" />
                  </div>
                  <div className="text-xs font-bold text-[#c8f169] uppercase tracking-wide mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Your 1-Year Savings Potential
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                    {formatCurrency(potentialSavings)}
                  </div>
                  <p className="text-xs text-emerald-100/70 leading-relaxed">
                    *Based on transferring ~70% of bookings to direct WhatsApp & GBP channels with GrowGuest setup.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Action */}
            <div className="mt-8 space-y-3">
              <a
                href="#audit"
                className="w-full py-4 px-6 rounded-full bg-[#c8f169] hover:bg-[#d8f68e] text-[#043f2e] font-extrabold flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(200,241,105,0.4)] hover:shadow-[0_0_40px_rgba(200,241,105,0.6)] transition-all transform hover:-translate-y-0.5"
              >
                Claim Free Direct Booking Audit
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-center text-xs text-emerald-200/60">
                100% Free audit for Nagpur & surrounding hotel/resort owners.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

