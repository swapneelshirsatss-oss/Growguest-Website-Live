import { motion } from 'motion/react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#02291e] via-[#043f2e] to-[#02291e] text-white overflow-hidden py-16 lg:py-24 border-b border-emerald-500/20">
      {/* Premium Ambient Background Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#c8f169]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2a6f2b]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Eyebrow Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c8f169]/15 border border-[#c8f169]/30 text-[#c8f169] text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#c8f169] animate-pulse" />
              <span>HOSPITALITY DIGITAL GROWTH · NAGPUR · UTTARAKHAND · PAN-INDIA</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.12] tracking-tight text-white mb-6"
            >
              Beautiful stays.<br />
              Stronger brands.<br />
              <em className="font-serif italic font-normal text-[#c8f169] not-italic">
                More direct bookings.
              </em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-emerald-100/90 mb-8 max-w-xl leading-relaxed font-normal"
            >
              We help independent hotels, boutique resorts, and heritage homestays stop the 18%–25% OTA commission bleed. Transform passive searches into high-margin direct enquiries through Google Business Profile dominance, website conversion fixes, and automated WhatsApp booking pipelines.
            </motion.p>

            {/* Dual CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a 
                href="#audit" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-extrabold rounded-full text-[#043f2e] bg-[#c8f169] hover:bg-[#d8f68e] transition-all shadow-[0_0_30px_rgba(200,241,105,0.35)] hover:shadow-[0_0_45px_rgba(200,241,105,0.55)] transform hover:-translate-y-1"
              >
                <Sparkles className="mr-2 h-5 w-5 text-[#043f2e]" />
                Claim Free Growth Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#calculator" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 hover:bg-white/15 transition-all backdrop-blur-md border border-white/20 shadow-lg"
              >
                Calculate Commission Leak ↓
              </a>
            </motion.div>

            {/* 4-Item Trust Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10"
            >
              <div>
                <div className="text-2xl font-extrabold text-white tracking-tight">10+ Yrs</div>
                <div className="text-xs text-emerald-200/80 mt-0.5">Exclusively In Hospitality</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#c8f169] tracking-tight">₹4.8 Cr+</div>
                <div className="text-xs text-emerald-200/80 mt-0.5">Direct Revenue Unlocked</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white tracking-tight">18–25%</div>
                <div className="text-xs text-emerald-200/80 mt-0.5">OTA Bleed Stopped</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-[#c8f169] tracking-tight">100+</div>
                <div className="text-xs text-emerald-200/80 mt-0.5">Properties Audited</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[520px] lg:h-[580px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#043f2e]/60 backdrop-blur-2xl group"
            >
              {/* Resort Background Image */}
              <img 
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1500&q=85" 
                alt="Luxury sunlit boutique resort pool surrounded by lush tropical gardens" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                fetchPriority="high"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02291e] via-[#02291e]/40 to-black/30 pointer-events-none" />

              {/* Corner Tag: Showcase */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#043f2e] flex items-center gap-2 shadow-md">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>BOUTIQUE RESORT SHOWCASE</span>
              </div>

              {/* Corner Tag: 0% OTA Commission */}
              <div className="absolute top-5 right-5 bg-[#043f2e]/90 backdrop-blur-md border border-[#c8f169]/40 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-[#c8f169] shadow-md">
                ✦ 0% OTA COMMISSION
              </div>

              {/* Floating Live WhatsApp Direct Reservation Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl border border-white/60 text-slate-900">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#043f2e] bg-[#c8f169]/30 px-2.5 py-0.5 rounded-full">
                      DIRECT WHATSAPP RESERVATION
                    </span>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                    Saved ₹6,240 Commission
                  </span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug mb-3">
                  “Hi Swapneel, saw the direct rates for The Stone Heritage Himalayan cottage. We’d like to confirm the family suite for 3 nights next weekend!”
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                  <span className="font-medium">Mukteshwar, Nainital • Verified Guest</span>
                  <span className="font-bold text-[#1ebd5b] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Direct Channel · 0% Fee
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
