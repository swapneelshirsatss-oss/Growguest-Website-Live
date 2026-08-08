import { motion } from 'motion/react';
import { Search, MapPin, MessageSquare, ShieldAlert, Sparkles, Building2, PhoneCall } from 'lucide-react';

export default function DirectConnectionEngine() {
  return (
    <div className="relative w-full max-w-5xl mx-auto p-6 md:p-8 bg-[#0B1320] rounded-3xl shadow-2xl overflow-hidden border border-[#12312B] my-12">
      {/* Background Glow Effects */}
      <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#C99A2E]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#12312B]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[#12312B] text-[#C99A2E] border border-[#C99A2E]/30 shadow-md">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          Direct Connection Engine
        </span>
      </div>

      {/* 3-Node Connected Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
        
        {/* NODE 1: Searching Customer */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-lg transform transition hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold">
              <Search className="w-4 h-4 text-blue-400" />
              Google Searcher
            </div>
            <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full font-bold border border-blue-500/20">
              High Intent
            </span>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl text-xs font-mono text-slate-200 border border-slate-700/50 mb-2 flex items-center gap-2">
            <span className="text-emerald-400">🔍</span> "Best hotel in Nagpur"
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Guest actively searching for room reservations online right now.
          </p>
        </motion.div>

        {/* NODE 2: Growguest Engine (Center Bridge) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-b from-[#12312B] to-[#0A1D1A] border border-[#C99A2E]/50 p-6 rounded-2xl shadow-2xl text-center"
        >
          {/* OTA Fee Block Badge */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-red-500/20 text-red-300 border border-red-500/40 text-[10px] px-3 py-1 rounded-full flex items-center gap-1.5 font-bold shadow-md whitespace-nowrap">
            <ShieldAlert className="w-3.5 h-3.5 text-red-400" />
            <span className="line-through">OTA 20% Fee</span> ❌ Blocked
          </div>

          <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#C99A2E]/20 flex items-center justify-center text-[#C99A2E] text-xl font-bold border border-[#C99A2E]/40">
            📍
          </div>
          <h3 className="text-base font-extrabold text-white mb-1">
            Growguest Engine
          </h3>
          <p className="text-[11px] text-emerald-300 mb-4 font-medium">
            Google Maps #1 Rank + Direct Link
          </p>
          
          {/* Connecting Line Animation */}
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-[#C99A2E] via-emerald-400 to-[#C99A2E] h-full w-full animate-pulse" />
          </div>
        </motion.div>

        {/* NODE 3: Hotel Owner */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/90 border border-slate-800 p-5 rounded-2xl shadow-lg transform transition hover:-translate-y-1"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs text-[#C99A2E] font-bold">
              <span className="text-base">🏨</span> Hotel Owner
            </div>
            <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold border border-emerald-500/30">
              100% Revenue
            </span>
          </div>

          {/* Animated WhatsApp Inbound Card */}
          <div className="bg-emerald-950/40 border border-emerald-500/30 p-3 rounded-xl mb-2 flex items-start gap-2.5">
            <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-emerald-300">Direct WhatsApp Inquiry</p>
              <p className="text-[10px] text-slate-300">"Looking for 2 rooms this weekend."</p>
            </div>
          </div>
          <p className="text-[11px] text-emerald-400 font-semibold">
            Zero Commission Paid • Instant Booking
          </p>
        </motion.div>

      </div>

      {/* Bottom Proof Bar */}
      <div className="mt-8 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-400 gap-2 px-2">
        <div className="flex items-center gap-1.5">
          <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
          <span>Direct Phone Calls & WhatsApp Inquiries</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-blue-400" />
          <span>Nagpur & Uttarakhand Properties</span>
        </div>
        <div className="text-[#C99A2E] font-extrabold flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>100% Commission Saved</span>
        </div>
      </div>
    </div>
  );
}
