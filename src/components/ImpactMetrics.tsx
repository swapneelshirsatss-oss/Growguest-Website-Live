import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Zap, Award, ArrowUpRight, MessageCircle } from 'lucide-react';

const stats = [
  {
    value: "15-25%",
    label: "OTA Commission Saved",
    description: "Transferred straight from MakeMyTrip & Agoda back into hotel owner profit margins.",
    icon: ShieldCheck,
    badge: "100% Profit Retained"
  },
  {
    value: "#1 - #3",
    label: "Google Maps Rank",
    description: "Dominating local search in Nagpur for 'hotels near me', homestays & dining.",
    icon: Zap,
    badge: "Top Visibility"
  },
  {
    value: "3.5x",
    label: "Direct WhatsApp Inquiries",
    description: "Instant 1-click booking flow directly from Google search to WhatsApp chat.",
    icon: MessageCircle,
    badge: "Zero Friction"
  },
  {
    value: "18+ Yrs",
    label: "Marketing Expertise",
    description: "Founder-led digital strategies crafted specifically for Indian hospitality.",
    icon: Award,
    badge: "Proven System"
  }
];

export default function ImpactMetrics() {
  return (
    <section className="py-16 bg-[#02291e] border-y border-emerald-500/20 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#095c44]/30 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#043f2e]/70 backdrop-blur-xl p-6 rounded-3xl border border-emerald-500/25 relative group shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#c8f169]/15 text-[#c8f169] border border-[#c8f169]/20 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[#c8f169]" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#c8f169]/10 text-[#c8f169] border border-[#c8f169]/20">
                      {stat.badge}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 flex items-center">
                    {stat.value}
                    <ArrowUpRight className="w-5 h-5 text-[#c8f169] opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                  </div>

                  <div className="text-base font-bold text-[#c8f169] mb-2">
                    {stat.label}
                  </div>

                  <p className="text-xs text-emerald-100/80 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center text-[11px] font-medium text-emerald-200/60">
                  <span className="w-2 h-2 rounded-full bg-[#c8f169] mr-2 animate-pulse" />
                  GrowGuest Metric Verified
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

