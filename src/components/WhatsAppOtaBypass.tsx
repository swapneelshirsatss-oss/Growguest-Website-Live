import { motion } from 'motion/react';
import { 
  MessageSquare, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  PhoneCall, 
  Ban 
} from 'lucide-react';

export default function WhatsAppOtaBypass() {
  const otaPlatforms = [
    {
      name: 'MakeMyTrip',
      tagline: 'MakeMyTrip / MMT',
      commission: '22% Commission',
      color: 'from-red-500/10 to-red-600/20 border-red-500/30 text-red-400',
      logoStyle: 'bg-gradient-to-r from-red-600 to-red-700 text-white font-extrabold tracking-tight px-3 py-1 rounded-md text-xs shadow-sm'
    },
    {
      name: 'Booking.com',
      tagline: 'Booking.com',
      commission: '18% Commission',
      color: 'from-blue-600/10 to-blue-700/20 border-blue-500/30 text-blue-400',
      logoStyle: 'bg-[#003580] text-white font-bold tracking-tight px-3 py-1 rounded-md text-xs shadow-sm'
    },
    {
      name: 'Agoda',
      tagline: 'Agoda Homes & Hotels',
      commission: '20% Commission',
      color: 'from-purple-600/10 to-purple-700/20 border-purple-500/30 text-purple-400',
      logoStyle: 'bg-gradient-to-r from-purple-700 to-indigo-800 text-white font-bold tracking-tight px-3 py-1 rounded-md text-xs shadow-sm'
    },
    {
      name: 'Goibibo',
      tagline: 'Goibibo / Yatra',
      commission: '15% Commission',
      color: 'from-orange-500/10 to-orange-600/20 border-orange-500/30 text-orange-400',
      logoStyle: 'bg-[#EC5B24] text-white font-black tracking-tight px-3 py-1 rounded-md text-xs shadow-sm'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-[#0B1320] text-white overflow-hidden relative border-y border-slate-800">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pill Badge */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shadow-lg backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            Direct OTA Bypass Technology
          </span>
        </div>

        {/* H2 Headline with Polished Spacing & High Readability */}
        <div className="text-center max-w-4xl mx-auto mb-16 px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.3] md:leading-[1.35] mb-8 tracking-tight"
          >
            <span className="inline-block">गेस्ट सीधा आपके <span className="text-[#25D366] font-black drop-shadow-[0_0_20px_rgba(37,211,102,0.35)]">WhatsApp</span> पर</span>{' '}
            <span className="text-slate-500 font-light mx-2 hidden sm:inline">—</span>
            <span className="inline-block mt-2 sm:mt-0">बिना किसी <span className="text-orange-400 font-black">OTA या एग्रीगेटर के!</span></span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block bg-[#c8f169]/10 border border-[#c8f169]/25 rounded-2xl px-6 py-3.5 mb-6 backdrop-blur-sm"
          >
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#c8f169] leading-relaxed">
              हर ₹1 लाख की बुकिंग पर ₹20,000 OTA को क्यों देना? अपनी मेहनत की कमाई खुद बचाएँ।
            </h3>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            MakeMyTrip, Booking.com, Agoda और Goibibo को <span className="text-red-300 font-semibold underline decoration-red-400/40 underline-offset-4">15% से 25% कमीशन देने के बजाय</span>, मेहमानों को सीधे आपके WhatsApp पर 100% डायरेक्ट बुक कराएं।
          </motion.p>
        </div>

        {/* Interactive Comparison & Flow Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* LEFT SIDE: OTAs & Aggregators (Crossed Out / Bypassed) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-xs font-bold text-red-400 uppercase tracking-widest flex items-center gap-1.5">
                <Ban className="w-4 h-4 text-red-400" />
                Middlemen & Commission Bleed
              </span>
              <span className="text-[11px] bg-red-500/20 text-red-300 px-2.5 py-0.5 rounded-full font-semibold border border-red-500/30">
                15% - 25% Lost Profit
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              {otaPlatforms.map((ota, idx) => (
                <div 
                  key={idx}
                  className={`bg-slate-900/80 border ${ota.color} rounded-2xl p-4 relative overflow-hidden group transition-all duration-300 hover:border-red-500/50 shadow-md`}
                >
                  {/* Diagonal Strike-through Line */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-500/20 to-transparent pointer-events-none" />
                  
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <span className={ota.logoStyle}>
                      {ota.name}
                    </span>
                    <XCircle className="w-4 h-4 text-red-400 opacity-90 flex-shrink-0" />
                  </div>

                  <div className="text-xs font-bold text-slate-300 mb-1 relative z-10">
                    {ota.tagline}
                  </div>
                  
                  <div className="flex items-center justify-between text-[11px] font-semibold text-red-400 relative z-10 pt-2 border-t border-slate-800/80">
                    <span className="line-through opacity-70">{ota.commission}</span>
                    <span className="bg-red-500/20 text-red-300 px-1.5 py-0.5 rounded text-[10px] font-bold border border-red-500/30">
                      BYPASSED ❌
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Negative Outcome Box */}
            <div className="bg-red-950/30 border border-red-500/30 rounded-2xl p-4 flex items-start gap-3">
              <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-red-200 leading-snug">
                <strong>Without WhatsApp Pipeline:</strong> Guests search Google, find broken site links, open MakeMyTrip, and you lose ₹600 to ₹1,200 commission per booking!
              </p>
            </div>
          </motion.div>

          {/* CENTER: Direct Connection Arrow */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center my-2 lg:my-0">
            <motion.div 
              animate={{ x: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="hidden lg:flex items-center justify-center w-14 h-14 bg-slate-800/90 border border-emerald-500/40 rounded-full text-emerald-400 shadow-xl shadow-emerald-950/50"
            >
              <ArrowRight className="w-7 h-7" />
            </motion.div>
            
            <div className="lg:hidden flex items-center justify-center w-12 h-12 bg-slate-800/90 border border-emerald-500/40 rounded-full text-emerald-400 shadow-xl my-2 mx-auto">
              <ArrowRight className="w-6 h-6 rotate-90" />
            </div>
            
            <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-wider mt-2 text-center bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              Zero Commission Flow
            </span>
          </div>

          {/* RIGHT SIDE: WhatsApp Direct Booking Engine (100% Revenue Kept) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="bg-gradient-to-b from-[#12312B] via-[#0E2823] to-[#0A1D1A] border-2 border-emerald-500/50 rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden">
              
              {/* Top Winner Ribbon */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-emerald-500 to-teal-600 text-slate-950 px-4 py-1.5 rounded-bl-2xl font-black text-xs uppercase tracking-wider flex items-center gap-1 shadow-md">
                <Sparkles className="w-3.5 h-3.5" /> 100% Profit Yours
              </div>

              {/* Title & WhatsApp Icon */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] shadow-lg flex-shrink-0">
                  <MessageSquare className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    WhatsApp Direct Engine
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </h3>
                  <p className="text-xs text-emerald-300 font-medium">
                    Instant 1-Click Guest Booking Pipeline
                  </p>
                </div>
              </div>

              {/* Simulated Live WhatsApp Chat Box */}
              <div className="bg-slate-950/80 border border-emerald-500/30 rounded-2xl p-4 space-y-3 mb-5 shadow-inner">
                {/* Guest Message */}
                <div className="flex flex-col items-start max-w-[85%]">
                  <div className="bg-slate-800 text-slate-200 text-xs rounded-2xl rounded-tl-none p-3 border border-slate-700/60 shadow-sm">
                    <p className="font-semibold text-emerald-400 text-[10px] mb-0.5">Guest from Google Maps</p>
                    "Namaste! Saw your property on Google. Looking for 2 Deluxe Rooms this Saturday. Best rate?"
                  </div>
                  <span className="text-[9px] text-slate-500 mt-1 ml-1">10:42 AM</span>
                </div>

                {/* Auto Response */}
                <div className="flex flex-col items-end max-w-[90%] ml-auto">
                  <div className="bg-[#12312B] text-emerald-100 text-xs rounded-2xl rounded-tr-none p-3 border border-emerald-500/40 shadow-sm">
                    <div className="flex items-center justify-between text-[10px] text-brand-gold font-bold mb-1 border-b border-emerald-500/30 pb-1">
                      <span>🏨 GrowGuest Auto-Response</span>
                      <span className="text-emerald-300">⚡ Instant</span>
                    </div>
                    <p className="leading-relaxed">
                      "Namaste! 🙏 Direct Booking Rate: <strong>₹3,200/night</strong> with free breakfast (vs ₹4,200 on MakeMyTrip). Click below to confirm directly!"
                    </p>
                    <div className="mt-2 pt-1.5 border-t border-emerald-500/20 text-[10px] font-bold text-emerald-300 flex items-center justify-between">
                      <span>✓ 0% Commission</span>
                      <span className="text-brand-gold">✓ Direct UPI Payment</span>
                    </div>
                  </div>
                  <span className="text-[9px] text-emerald-400 mt-1 mr-1">10:42 AM • Delivered</span>
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div className="space-y-2 mb-6 text-xs text-emerald-100 font-medium">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>No OTA Middleman — Guest contacts your team directly</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-brand-gold flex-shrink-0" />
                  <span>Build permanent guest database for repeat stays</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Instant front-desk booking & advance payment</span>
                </div>
              </div>

              {/* Call to Action Button */}
              <a 
                href="https://wa.me/918956907343?text=Hi%20GrowGuest!%20I%20want%20to%20setup%20Direct%20WhatsApp%20Booking%20for%20my%20hotel%20and%20bypass%20MakeMyTrip%20commissions."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/60 transition-all transform hover:-translate-y-0.5 text-sm text-center"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Fix Your Direct WhatsApp Pipeline →</span>
              </a>

            </div>
          </motion.div>

        </div>

        {/* Bottom Banner Feature Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 max-w-5xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center text-xs text-slate-400 font-semibold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-400" />
            <span>MakeMyTrip (22% Commission) ❌</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>Booking.com (18% Commission) ❌</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-400" />
            <span>Agoda (20% Commission) ❌</span>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>GrowGuest WhatsApp Direct (0% Commission) ✅</span>
          </div>
        </div>

      </div>
    </section>
  );
}
