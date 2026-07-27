import { motion } from 'motion/react';
import { MonitorSmartphone, MessageCircle, UserCheck, TrendingUp, ArrowDown, ArrowRight, Equal } from 'lucide-react';

export default function ValueEquation() {
  const steps = [
    {
      id: 1,
      icon: <MonitorSmartphone className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Brand & Visibility",
      subtitle: "Website + GBP SEO",
    },
    {
      id: 2,
      icon: <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />,
      title: "New Leads",
      subtitle: "Direct Inquiries",
    },
    {
      id: 3,
      icon: <UserCheck className="w-7 h-7 md:w-8 md:h-8" />,
      title: "Customers",
      subtitle: "Direct Bookings",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-brand-teal mb-4"
          >
            The Growth & Profit Equation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            How we help you build a trusted brand online, capture new guests, and keep 100% of your revenue.
          </motion.p>
        </div>

        {/* Mobile: Vertical Flow, Desktop: Horizontal Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 max-w-5xl mx-auto">
          
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-col lg:flex-row items-center w-full lg:w-auto">
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
                whileTap={{ scale: 0.96 }}
                className="w-full max-w-[280px] lg:w-48 bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm relative z-10 transition-colors hover:bg-white cursor-default group"
              >
                <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-brand-teal mb-4 group-hover:scale-110 group-hover:text-brand-gold transition-all duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800">{step.title}</h3>
                <p className="text-sm text-slate-500 font-medium mt-1">{step.subtitle}</p>
              </motion.div>

              {/* Connecting Arrows */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.15 }}
                className="py-4 lg:py-0 lg:px-4 flex justify-center text-slate-300"
              >
                <ArrowDown className="w-8 h-8 lg:hidden" />
                <ArrowRight className="w-8 h-8 hidden lg:block" />
              </motion.div>
            </div>
          ))}

          {/* Equals Sign */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="hidden lg:flex items-center justify-center px-2 text-slate-300"
          >
            <Equal className="w-10 h-10" />
          </motion.div>

          {/* Result Card (Profit) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.9, type: "spring", stiffness: 120, damping: 15 }}
            whileHover={{ y: -8, boxShadow: "0 25px 35px -12px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.96 }}
            className="w-full max-w-[280px] lg:w-56 bg-brand-teal text-white rounded-2xl p-8 flex flex-col items-center text-center shadow-xl relative overflow-hidden mt-2 lg:mt-0 z-10 cursor-default group"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#C99A2E_0%,_transparent_60%)] opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            <motion.div 
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center text-brand-teal mb-4 relative z-10 shadow-lg"
            >
              <TrendingUp className="w-8 h-8" />
            </motion.div>
            
            <h3 className="text-2xl font-bold mb-2 relative z-10">PROFIT</h3>
            <div className="w-12 h-1 bg-brand-gold rounded-full mb-3 relative z-10"></div>
            <p className="text-sm text-slate-200 font-medium relative z-10">
              100% Revenue Kept.<br/>No OTA Commissions.
            </p>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
