import { motion } from 'motion/react';
import { ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import HeroInfographic from './HeroInfographic';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#02291e] via-[#043f2e] to-[#02291e] text-white overflow-hidden py-16 lg:py-24 border-b border-emerald-500/20">
      {/* Premium Ambient Background Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#c8f169]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2a6f2b]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 max-w-2xl"
          >
            {/* Premium Eyebrow Badges */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold bg-[#c8f169]/15 text-[#c8f169] border border-[#c8f169]/30 backdrop-blur-md shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#c8f169] mr-2.5 animate-pulse" />
                Cut 15-25% OTA Fees
              </div>
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 mr-1.5 text-emerald-400" />
                WhatsApp Direct Booking
              </div>
              <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-bold bg-blue-500/15 text-blue-300 border border-blue-500/30 backdrop-blur-md">
                <Zap className="w-4 h-4 mr-1.5 text-blue-400" />
                Google Maps Rank #1
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] mb-6 tracking-tight text-white">
              Every month, a slice of your 20% revenue disappears into OTA commissions and <span className="font-serif italic font-normal text-[#c8f169] drop-shadow-[0_0_25px_rgba(200,241,105,0.25)]">Lack of Digital Visibility.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-emerald-100/90 mb-9 max-w-xl leading-relaxed font-normal">
              MakeMyTrip और Agoda को 15-25% कमीशन देना बंद करें। हम आपकी प्रॉपर्टी को Google Maps पर Top-3 में लाते हैं और सीधा WhatsApp बुकिंग से 100% प्रॉफ़िट आपकी जेब में रखते हैं।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#audit" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-extrabold rounded-full text-[#043f2e] bg-[#c8f169] hover:bg-[#d8f68e] transition-all shadow-[0_0_30px_rgba(200,241,105,0.35)] hover:shadow-[0_0_45px_rgba(200,241,105,0.55)] transform hover:-translate-y-1"
              >
                <Sparkles className="mr-2 h-5 w-5 text-[#043f2e]" />
                फ्री Direct Booking Audit पाएँ
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/918956907343?text=Namaste%20GrowGuest!%20I%20want%20a%20free%20Direct%20Booking%20Audit%20for%20my%20hotel/homestay."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-white/10 hover:bg-white/15 transition-all backdrop-blur-md border border-white/20 shadow-lg"
              >
                WhatsApp पर बात करें →
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative h-[480px] lg:h-[560px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#043f2e]/60 backdrop-blur-2xl"
          >
            <HeroInfographic />
            <div className="absolute inset-0 bg-gradient-to-t from-[#02291e] via-transparent to-transparent pointer-events-none" />
            
            {/* Ultra-Premium Glassmorphism Floating Badge Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-white/50"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-[#043f2e] font-extrabold text-sm tracking-wide">Direct Bookings Captured</div>
                <div className="text-[#043f2e] bg-[#c8f169] px-2.5 py-1 rounded-full text-xs font-extrabold shadow-sm">+68% Growth</div>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden shadow-inner">
                <div className="bg-[#043f2e] h-2 rounded-full w-[85%] transition-all duration-1000" />
              </div>
              <p className="text-xs text-slate-600 mt-3 font-medium">
                Captured 145 new direct inquiries from local search in Nagpur this month.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

