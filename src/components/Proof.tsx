import { motion } from 'motion/react';
import { ArrowUpRight, TrendingUp, Sparkles } from 'lucide-react';

export default function Proof() {
  const caseStudies = [
    {
      title: "The Stone Heritage",
      location: "MUKTESHWAR, UTTARAKHAND",
      type: "HIMALAYAN RETREAT",
      image: "/Image/stone-heritage-mukteshwar.webp",
      url: "https://thestoneheritage.in/",
      metric: "+42% Direct Bookings via WhatsApp",
      description: "Traditional stone cottage retreat. Engineered custom direct rate packages and Google Maps optimization, diverting high-value weekend buyouts from OTAs."
    },
    {
      title: "Whispering Pines Resort",
      location: "RAMGARH, NAINITAL",
      type: "BOUTIQUE RESORT",
      image: "/Image/whispering-pines-casa-de-bello.webp",
      url: "https://whisperingpinesresort.in/",
      metric: "OTA Share Cut from 75% to 38%",
      description: "Tranquil orchard destination resort. Captured top 3 Google Business Profile rankings for Ramgarh family vacations and corporate retreats."
    },
    {
      title: "The Goan House",
      location: "ASSAGAO, NORTH GOA",
      type: "PRIVATE HERITAGE VILLA",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      url: "https://thegoanhouse.com/",
      metric: "100% Commission-Free Buyouts",
      description: "Exclusive Portuguese heritage villa. Deployed a friction-free WhatsApp concierge reservation pipeline for affluent family and group buyouts."
    }
  ];

  return (
    <section id="properties" className="py-20 md:py-28 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/5 border border-emerald-900/15 text-[#043f2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#c99a2e]" />
            <span>VERIFIED CASE STUDIES</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#071510] tracking-tight mb-4"
          >
            Hospitality comes in{' '}
            <span className="font-serif italic font-normal text-[#c99a2e]">many beautiful forms.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Explore authentic independent properties partnered with GrowGuest. Real results, direct bookings, and reduced commission overheads.
          </motion.p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {caseStudies.map((study, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
            >
              {/* Photo Frame */}
              <div className="relative h-60 overflow-hidden bg-slate-100">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-[#071510]/85 backdrop-blur-md text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {study.type}
                </span>
                <a 
                  href={study.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center font-bold text-sm shadow-md hover:bg-white transition-colors"
                  aria-label={`Visit ${study.title} website`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Details */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {study.location}
                </span>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {study.title}
                </h3>

                {/* Metric Pill */}
                <div className="inline-flex items-center gap-2 bg-[#f0f7f4] border border-[#d4eae1] text-[#043f2e] text-xs font-bold px-3 py-1.5 rounded-lg mb-4">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{study.metric}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 flex-grow">
                  {study.description}
                </p>

                <a 
                  href={study.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between text-xs sm:text-sm font-semibold text-[#043f2e] pt-4 border-t border-slate-100 group-hover:text-[#c99a2e] transition-colors"
                >
                  <span>Explore property website</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
