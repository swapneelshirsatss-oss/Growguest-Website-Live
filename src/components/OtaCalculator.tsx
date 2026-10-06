import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, TrendingUp, ShieldCheck } from 'lucide-react';

export default function OtaCalculator() {
  const [revenue, setRevenue] = useState<number>(300000); // Monthly room revenue
  const [otaShare, setOtaShare] = useState<number>(65); // % booked via OTAs
  const [otaFee, setOtaFee] = useState<number>(18); // Average OTA commission %
  const [shiftPercent, setShiftPercent] = useState<number>(25); // % shifted to direct

  // Format currency in Indian Rupees
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Math calculations
  const monthlyOtaRev = revenue * (otaShare / 100);
  const shiftedRevenue = monthlyOtaRev * (shiftPercent / 100);
  const monthlySaved = shiftedRevenue * (otaFee / 100);
  const annualSaved = monthlySaved * 12;

  // Track background gradients for range sliders
  const getTrackBackground = (val: number, min: number, max: number) => {
    const percent = ((val - min) / (max - min)) * 100;
    return `linear-gradient(to right, #dfad3c 0%, #dfad3c ${percent}%, #1c3d31 ${percent}%, #1c3d31 100%)`;
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-[#071510] text-white relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Description */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/15 border border-[#dfad3c]/30 text-[#dfad3c] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#dfad3c] animate-pulse" />
              <span>INTERACTIVE FINANCIAL TOOL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6" style={{ color: '#ffffff' }}>
              What could more{' '}
              <em className="font-serif italic font-normal text-[#dfad3c] not-italic">
                direct bookings mean?
              </em>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed mb-8">
              Adjust the sliders to simulate shifting a percentage of your OTA revenue to direct website and WhatsApp channels. Watch how much commission you reclaim every year.
            </p>

            <div className="pt-6 border-t border-white/10 text-xs text-emerald-200/50 leading-relaxed">
              *Planning calculation based on gross room revenue. Illustrative model demonstrating direct commission savings. Excludes payment gateway fees and operating overheads.
            </div>
          </div>

          {/* Right Column: Interactive Sliders & Live Results Card */}
          <div className="lg:col-span-7 bg-[#102920] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            
            {/* Slider 1: Monthly Room Revenue */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs sm:text-sm font-medium text-emerald-100 mb-2">
                <label htmlFor="range-rev">Monthly Room Revenue</label>
                <span className="font-mono font-bold text-sm text-[#dfad3c] bg-[#dfad3c]/15 px-2.5 py-0.5 rounded border border-[#dfad3c]/30">
                  {formatINR(revenue)}
                </span>
              </div>
              <input
                id="range-rev"
                type="range"
                min="50000"
                max="2500000"
                step="10000"
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                style={{ background: getTrackBackground(revenue, 50000, 2500000) }}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#dfad3c] outline-none"
                aria-label="Monthly Room Revenue in INR"
              />
            </div>

            {/* Slider 2: OTA Share */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs sm:text-sm font-medium text-emerald-100 mb-2">
                <label htmlFor="range-ota">Current Share Booked via OTAs</label>
                <span className="font-mono font-bold text-sm text-[#dfad3c] bg-[#dfad3c]/15 px-2.5 py-0.5 rounded border border-[#dfad3c]/30">
                  {otaShare}%
                </span>
              </div>
              <input
                id="range-ota"
                type="range"
                min="10"
                max="100"
                step="5"
                value={otaShare}
                onChange={(e) => setOtaShare(Number(e.target.value))}
                style={{ background: getTrackBackground(otaShare, 10, 100) }}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#dfad3c] outline-none"
                aria-label="Current Share Booked via OTAs in Percentage"
              />
            </div>

            {/* Slider 3: Average OTA Commission */}
            <div className="mb-6">
              <div className="flex justify-between items-center text-xs sm:text-sm font-medium text-emerald-100 mb-2">
                <label htmlFor="range-fee">Average OTA Commission Rate</label>
                <span className="font-mono font-bold text-sm text-[#dfad3c] bg-[#dfad3c]/15 px-2.5 py-0.5 rounded border border-[#dfad3c]/30">
                  {otaFee}%
                </span>
              </div>
              <input
                id="range-fee"
                type="range"
                min="10"
                max="30"
                step="1"
                value={otaFee}
                onChange={(e) => setOtaFee(Number(e.target.value))}
                style={{ background: getTrackBackground(otaFee, 10, 30) }}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#dfad3c] outline-none"
                aria-label="Average OTA Commission Rate in Percentage"
              />
            </div>

            {/* Slider 4: Share Shifted to Direct */}
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs sm:text-sm font-medium text-emerald-100 mb-2">
                <label htmlFor="range-shift">Share of OTA Revenue Shifted to Direct</label>
                <span className="font-mono font-bold text-sm text-[#dfad3c] bg-[#dfad3c]/15 px-2.5 py-0.5 rounded border border-[#dfad3c]/30">
                  {shiftPercent}%
                </span>
              </div>
              <input
                id="range-shift"
                type="range"
                min="5"
                max="100"
                step="5"
                value={shiftPercent}
                onChange={(e) => setShiftPercent(Number(e.target.value))}
                style={{ background: getTrackBackground(shiftPercent, 5, 100) }}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#dfad3c] outline-none"
                aria-label="Share of OTA Revenue Shifted to Direct in Percentage"
              />
            </div>

            {/* Results Output Panel */}
            <div className="bg-[#071510]/80 border border-white/10 rounded-2xl p-6 sm:p-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-200/70 block mb-1">
                    Monthly Commission Avoided
                  </span>
                  <strong className="text-2xl sm:text-3xl font-extrabold text-[#dfad3c] tracking-tight block">
                    {formatINR(monthlySaved)} / mo
                  </strong>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-200/70 block mb-1">
                    Annual Profit Retained
                  </span>
                  <strong className="text-2xl sm:text-3xl font-extrabold text-[#dfad3c] tracking-tight block">
                    {formatINR(annualSaved)} / yr
                  </strong>
                </div>
              </div>

              <p className="text-xs text-emerald-200/60 font-mono pt-4 border-t border-white/10 mb-6 leading-relaxed">
                {formatINR(revenue)} revenue × {otaShare}% OTA share × {shiftPercent}% shifted × {otaFee}% commission rate saved.
              </p>

              <a
                href="#audit"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold text-[#071510] bg-gradient-to-r from-[#dfad3c] to-[#c99a2e] hover:from-[#e5b64c] hover:to-[#d3a131] transition-all shadow-[0_0_25px_rgba(223,173,60,0.3)] hover:shadow-[0_0_35px_rgba(223,173,60,0.45)] transform hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <span>Lock In These Direct Savings</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
