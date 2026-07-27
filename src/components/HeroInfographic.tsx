import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Globe, MessageCircle, Star, CheckCircle2 } from 'lucide-react';

export default function HeroInfographicContainer() {
  const [key, setKey] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setKey(prev => prev + 1);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full bg-slate-900 overflow-hidden">
      <AnimatePresence>
        <HeroInfographic key={key} />
      </AnimatePresence>
    </div>
  );
}

function HeroInfographic() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 flex flex-col items-center justify-center p-8 font-sans"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#12312B_0%,_#0f172a_100%)]"></div>
      
      {/* 1. Google Search */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: -80, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full max-w-sm bg-white rounded-full p-4 flex items-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] relative z-10 border border-slate-200"
      >
        <Search className="w-5 h-5 text-slate-400 mr-3" />
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
          className="overflow-hidden whitespace-nowrap"
        >
          <span className="text-slate-700 font-medium">hotels in Nagpur near me</span>
        </motion.div>
      </motion.div>

      {/* 2. Google Business Profile pops up */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: -20 }}
        animate={{ scale: 1, opacity: 1, y: -20 }}
        transition={{ duration: 0.6, delay: 3.5, type: "spring" }}
        className="w-full max-w-sm bg-white rounded-2xl p-5 shadow-2xl relative z-20 border border-slate-100"
      >
        <div className="flex items-start mb-4">
          <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mr-4">
            <MapPin className="w-7 h-7 text-brand-teal" />
          </div>
          <div>
            <div className="font-bold text-lg text-slate-800">Your Property Name</div>
            <div className="flex text-brand-gold text-sm my-1">
              <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              <span className="text-slate-500 ml-2">(128)</span>
            </div>
            <div className="text-xs text-slate-500">Nagpur, Maharashtra</div>
          </div>
        </div>
        
        <div className="flex gap-3 mt-4">
          <motion.div 
            initial={{ backgroundColor: "rgba(18, 49, 43, 0.05)" }}
            animate={{ backgroundColor: ["rgba(18, 49, 43, 0.05)", "rgba(201, 154, 46, 0.2)", "rgba(18, 49, 43, 0.05)"] }}
            transition={{ duration: 1, delay: 5.5 }}
            className="flex-1 bg-brand-teal/5 text-brand-teal text-center py-2.5 rounded-lg text-sm font-semibold flex items-center justify-center border border-brand-teal/10"
          >
            <Globe className="w-4 h-4 mr-2" /> Website
          </motion.div>
          <div className="flex-1 bg-slate-50 text-slate-600 text-center py-2.5 rounded-lg text-sm font-medium flex items-center justify-center border border-slate-200">
            Directions
          </div>
        </div>
      </motion.div>

      {/* 3. Website & WhatsApp Booking Success */}
      <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ duration: 0.6, delay: 6.5, type: "spring" }}
        className="absolute w-full max-w-sm bg-brand-teal text-white rounded-2xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] z-30 border border-brand-gold/30"
      >
        <div className="flex items-center">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 7.2, type: "spring" }}
            className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center mr-4 shrink-0 shadow-lg"
          >
            <CheckCircle2 className="w-6 h-6 text-brand-teal" />
          </motion.div>
          <div>
            <div className="font-bold text-lg mb-0.5 text-white">Direct Booking Confirmed</div>
            <div className="text-sm text-emerald-300 font-medium flex items-center">
              <MessageCircle className="w-4 h-4 mr-1.5" /> Via WhatsApp
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 8.5 }}
          className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center"
        >
          <span className="text-sm text-slate-300">Revenue: ₹5,000</span>
          <span className="text-sm font-bold text-brand-gold bg-brand-gold/10 px-2 py-1 rounded">OTA Comm: ₹0</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
