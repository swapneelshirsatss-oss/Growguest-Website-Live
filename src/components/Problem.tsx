import { motion } from 'motion/react';
import { TrendingDown, IndianRupee, AlertCircle } from 'lucide-react';

export default function Problem() {
  return (
    <section id="hotels" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-3">
            The Digital Visibility Gap & The Commission Trap
          </h2>
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#C99A2E] mb-4 leading-snug">
            Google पर नाम न दिखना और OTA कमीशन का भारी जाल
          </h3>
          <p className="text-lg text-slate-600">
            80% of guests search Google before booking. If your website and Google Business Profile don't capture them instantly, they either book your competitor or use MakeMyTrip (costing you 20%). <strong className="text-brand-teal">You are losing both new guests and profit margins.</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="bg-slate-50 rounded-3xl p-6 md:p-12 border border-slate-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-slate-200 text-slate-700 px-4 py-2 rounded-bl-2xl font-semibold flex items-center">
              <TrendingDown className="w-4 h-4 mr-2" /> Invisible Online
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Without SEO & Website</h3>
            
            <div className="space-y-6">
              <p className="text-slate-600">When your property isn't visible on Google or has an outdated website:</p>
              
              <div className="flex items-start text-slate-700">
                <AlertCircle className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5"/>
                <span><strong>Lose New Guests:</strong> Hundreds of people searching for stays in Nagpur never even see your property.</span>
              </div>
              
              <div className="w-full h-px bg-slate-200"></div>
              
              <div className="flex items-start text-slate-700">
                <AlertCircle className="w-5 h-5 mr-3 text-red-500 flex-shrink-0 mt-0.5"/>
                <span><strong>Lose Margin:</strong> The few who do find you book via MakeMyTrip/Agoda, costing you 20% in commission.</span>
              </div>
            </div>
          </div>

          <div className="bg-brand-teal text-white rounded-3xl p-6 md:p-12 shadow-xl relative overflow-hidden transform md:-translate-y-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#C99A2E_0%,_transparent_60%)] opacity-20"></div>
            <div className="absolute top-0 right-0 bg-brand-gold text-brand-teal px-4 py-2 rounded-bl-2xl font-bold flex items-center shadow-md">
              <IndianRupee className="w-4 h-4 mr-1" /> Digital Growth
            </div>
            <h3 className="text-2xl font-bold mb-6">With Growguest Strategy</h3>
            
            <div className="space-y-6 relative z-10">
              <p className="text-slate-200">When your GBP is optimized and your website is fast and trustworthy:</p>
              
              <div className="flex items-start text-white">
                <IndianRupee className="w-5 h-5 mr-3 text-brand-gold flex-shrink-0 mt-0.5"/>
                <span><strong>Capture New Demand:</strong> You appear at the top when people search "best homestay near me" or "hotels in Nagpur".</span>
              </div>
              
              <div className="w-full h-px bg-white/20"></div>
              
              <div className="flex items-start text-white">
                <IndianRupee className="w-5 h-5 mr-3 text-brand-gold flex-shrink-0 mt-0.5"/>
                <span><strong>Keep 100% Profit:</strong> Guests contact you directly via WhatsApp or Phone to book. Zero commission paid to OTAs.</span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <p className="text-brand-gold-light font-medium text-lg leading-snug flex-1">
                  More overall bookings + Higher profit margin per booking.
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
