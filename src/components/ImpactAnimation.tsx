import { motion } from 'motion/react';
import { UserX, Users, ArrowRight, Home, CreditCard } from 'lucide-react';

export default function ImpactAnimation() {
  return (
    <section className="py-24 bg-brand-teal text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The Impact of a Professional Digital Presence
          </h2>
          <p className="text-lg text-slate-300">
            See what happens when 100 potential guests search for a place to stay in Nagpur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 md:gap-8 max-w-5xl mx-auto">
          
          {/* Bad Scenario */}
          <div className="relative">
            <h3 className="text-xl font-semibold text-center mb-8 text-slate-400">Without Growguest</h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full max-w-xs bg-slate-800 rounded-xl p-4 flex items-center justify-between opacity-80">
                <span className="text-slate-300">100 Google Searches</span>
                <Users className="w-5 h-5 text-slate-400" />
              </div>
              <ArrowRight className="w-6 h-6 text-slate-600 rotate-90" />
              
              <div className="w-full max-w-xs bg-slate-800 rounded-xl p-4 flex flex-col items-center opacity-70 border border-red-500/30">
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="text-slate-300">Find your weak GBP/Website</span>
                  <Home className="w-5 h-5 text-slate-400" />
                </div>
                <div className="text-sm text-red-400">90% leave because it looks untrustworthy</div>
              </div>
              <ArrowRight className="w-6 h-6 text-slate-600 rotate-90" />
              
              <div className="w-full max-w-xs bg-slate-800 rounded-xl p-4 flex items-center justify-between opacity-50">
                <span className="text-slate-300">10 go to MakeMyTrip to book you</span>
                <UserX className="w-5 h-5 text-red-400" />
              </div>
              <ArrowRight className="w-6 h-6 text-slate-600 rotate-90" />

              <div className="w-full max-w-xs bg-slate-800 rounded-xl p-6 text-center border-t-4 border-red-500">
                <div className="text-3xl font-bold text-white mb-2">2 Direct Bookings</div>
                <div className="text-sm text-slate-400">8 OTA Bookings (You pay 20% commission)</div>
              </div>
            </div>
          </div>

          {/* Good Scenario */}
          <div className="relative">
            <h3 className="text-xl font-semibold text-center mb-8 text-brand-gold">With Growguest</h3>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-full max-w-xs bg-brand-teal-light rounded-xl p-4 flex items-center justify-between border border-brand-teal-light">
                <span className="text-white">100 Google Searches</span>
                <Users className="w-5 h-5 text-white" />
              </div>
              <ArrowRight className="w-6 h-6 text-brand-teal-light rotate-90" />
              
              <div className="w-full max-w-xs bg-brand-teal-light rounded-xl p-4 flex flex-col items-center border border-brand-gold/30 shadow-[0_0_15px_rgba(201,154,46,0.1)]">
                <div className="flex items-center justify-between w-full mb-2">
                  <span className="text-white">Find your Premium Website</span>
                  <Home className="w-5 h-5 text-brand-gold" />
                </div>
                <div className="text-sm text-brand-gold-light">Builds instant trust & easy booking</div>
              </div>
              <ArrowRight className="w-6 h-6 text-brand-teal-light rotate-90" />
              
              <div className="w-full max-w-xs bg-brand-teal-light rounded-xl p-4 flex items-center justify-between border border-brand-teal-light">
                <span className="text-white">Contact directly via WhatsApp</span>
                <CreditCard className="w-5 h-5 text-emerald-400" />
              </div>
              <ArrowRight className="w-6 h-6 text-brand-teal-light rotate-90" />

              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-xs bg-white text-brand-teal rounded-xl p-6 text-center border-t-4 border-brand-gold shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#C99A2E_0%,_transparent_50%)] opacity-10"></div>
                <div className="text-4xl font-bold mb-2">15 Direct Bookings</div>
                <div className="text-sm font-semibold text-brand-teal-light mb-1">0% Commission Paid</div>
                <div className="text-xs text-slate-500">More overall bookings, higher profit margin.</div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
