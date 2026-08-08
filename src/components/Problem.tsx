import { motion } from 'motion/react';
import { TrendingDown, IndianRupee, AlertCircle } from 'lucide-react';

export default function Problem() {
  return (
    <section id="hotels" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold text-[#C99A2E] uppercase tracking-widest bg-[#C99A2E]/10 px-3 py-1 rounded-full border border-[#C99A2E]/30 mb-3">
            Hotel Problems vs Direct Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-3">
            Hotel Problems & Direct Booking Solutions
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#C99A2E] mb-4 leading-snug">
            Google और Website पर ना नंबर ना नाम — तो OTA को क्यों देना भारी दाम?
          </h3>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            देखें कि कैसे बिना सही सेटअप के होटल मालिक हर महीने भारी नुकसान उठाते हैं, और GrowGuest स्ट्रैटेजी से 100% प्रॉफ़िट अपनी जेब में रखते हैं।
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* PROBLEM SIDE */}
          <div className="bg-slate-50 rounded-3xl p-6 md:p-12 border border-slate-200/80 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500/10 text-red-600 border-l border-b border-red-500/20 px-4 py-2 rounded-bl-2xl font-bold text-xs flex items-center">
              <TrendingDown className="w-4 h-4 mr-1.5 text-red-500" /> HOTEL PROBLEMS
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-red-500">❌</span> बिना GrowGuest (समस्याएँ)
            </h3>
            
            <div className="space-y-6">
              <p className="text-slate-600 text-sm font-medium">जब आपकी प्रॉपर्टी Google Maps पर ऊपर नहीं दिखती:</p>
              
              <div className="flex items-start text-slate-700">
                <AlertCircle className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5"/>
                <span><strong>कस्टमर न मिलना:</strong> नागपुर या आपके एरिया में रुकने वाले सैकड़ों गेस्ट रोज Google पर ढूँढते हैं, लेकिन आपकी प्रॉपर्टी न दिखने से कॉम्पिटिटर के पास चले जाते हैं।</span>
              </div>
              
              <div className="w-full h-px bg-slate-200"></div>
              
              <div className="flex items-start text-slate-700">
                <AlertCircle className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5"/>
                <span><strong>OTA कमीशन की मार:</strong> जो थोड़े बहुत गेस्ट मिलते भी हैं, वे MakeMyTrip/Agoda से बुक करते हैं और आपको 15% से 25% कमिशन भरना पड़ता है।</span>
              </div>
            </div>
          </div>

          {/* SOLUTION SIDE */}
          <div className="bg-brand-teal text-white rounded-3xl p-6 md:p-12 shadow-xl relative overflow-hidden transform md:-translate-y-4 border border-brand-teal-light">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#C99A2E_0%,_transparent_60%)] opacity-20"></div>
            <div className="absolute top-0 right-0 bg-brand-gold text-brand-teal px-4 py-2 rounded-bl-2xl font-bold text-xs flex items-center shadow-md">
              <IndianRupee className="w-4 h-4 mr-1" /> DIRECT SOLUTION
            </div>
            <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
              <span className="text-emerald-400">✅</span> GrowGuest समाधान (Solutions)
            </h3>
            
            <div className="space-y-6 relative z-10">
              <p className="text-slate-200 text-sm font-medium">जब आपकी Google Maps रैंकिंग और direct WhatsApp बुकिंग एक्टिव होती है:</p>
              
              <div className="flex items-start text-white">
                <IndianRupee className="w-5 h-5 mr-3 text-brand-gold flex-shrink-0 mt-0.5"/>
                <span><strong>Google Maps Top-3 Rank:</strong> जब कोई "Best hotel near me" या "Homestay in Nagpur" सर्च करे, आपकी प्रॉपर्टी सबसे ऊपर दिखेगी।</span>
              </div>
              
              <div className="w-full h-px bg-white/20"></div>
              
              <div className="flex items-start text-white">
                <IndianRupee className="w-5 h-5 mr-3 text-brand-gold flex-shrink-0 mt-0.5"/>
                <span><strong>100% प्रॉफ़िट आपका:</strong> गेस्ट 1-Click में सीधे आपके WhatsApp या फोन पर संपर्क करके बुक करता है। Zero OTA Commission!</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <p className="text-brand-gold-light font-bold text-base leading-snug flex-1">
                  ज़्यादा डायरेक्ट बुकिंग्स + 100% प्रॉफ़िट मार्जिन
                </p>
                <div className="bg-white/10 rounded-xl p-4 border border-white/20 flex-shrink-0 relative">
                  <div className="absolute -top-3 -right-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                    100% YOURS
                  </div>
                  <div className="text-xs text-brand-gold uppercase tracking-wider font-bold mb-1">OTA Commission Saved</div>
                  <div className="text-3xl font-bold text-white flex items-center">
                    <IndianRupee className="w-6 h-6 mr-1" />
                    1,000<span className="text-sm font-normal text-slate-300 ml-1 mt-1"> / ₹5k booking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
