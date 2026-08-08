import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import HeroInfographic from './HeroInfographic';

export default function Hero() {
  return (
    <section className="relative bg-brand-teal text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#C99A2E_0%,_transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 lg:pt-24 lg:pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex flex-wrap gap-2 mb-8">
              <div className="inline-flex items-center rounded-full px-3.5 py-1 text-xs sm:text-sm font-bold bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
                <span className="flex h-2 w-2 rounded-full bg-brand-gold mr-2 animate-pulse"></span>
                Save 15-25% OTA Fees
              </div>
              <div className="inline-flex items-center rounded-full px-3.5 py-1 text-xs sm:text-sm font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 mr-2"></span>
                WhatsApp Direct Booking
              </div>
              <div className="inline-flex items-center rounded-full px-3.5 py-1 text-xs sm:text-sm font-bold bg-blue-500/20 text-blue-300 border border-blue-500/30">
                <span className="flex h-2 w-2 rounded-full bg-blue-300 mr-2"></span>
                Google Maps Rank #1
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              अभी कोई गेस्ट Google पर होटल, होमस्टे या रेस्टोरेंट Search कर रहा है — <span className="text-brand-gold">और उसे आपके कॉम्पिटिटर मिल रहे हैं।</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl leading-relaxed font-medium">
              MakeMyTrip और Agoda को 15-25% कमीशन देना बंद करें। हम आपकी प्रॉपर्टी को Google Maps पर Top-3 में लाते हैं और सीधा WhatsApp बुकिंग से 100% प्रॉफ़िट आपकी जेब में रखते हैं।
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#audit" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-brand-teal bg-brand-gold hover:bg-brand-gold-light transition-all shadow-[0_0_20px_rgba(201,154,46,0.3)] hover:shadow-[0_0_30px_rgba(201,154,46,0.5)] transform hover:-translate-y-1"
              >
                फ्री Direct Booking Audit पाएँ
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/918956907343?text=Namaste%20GrowGuest!%20I%20want%20a%20free%20Direct%20Booking%20Audit%20for%20my%20hotel/homestay."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-emerald-600/90 hover:bg-emerald-500 transition-all backdrop-blur shadow-lg border border-emerald-400/40"
              >
                WhatsApp पर बात करें →
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 mt-12 lg:mt-0 bg-slate-900"
          >
            <HeroInfographic />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/90 via-transparent to-transparent pointer-events-none"></div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-brand-teal font-semibold">New Guests via Google</div>
                <div className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-sm font-bold">+68%</div>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-brand-gold h-2 rounded-full w-[85%]"></div>
              </div>
              <p className="text-sm text-slate-500 mt-4">
                Captured 145 new direct inquiries from local search this month.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
