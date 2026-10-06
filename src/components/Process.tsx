import { motion } from 'motion/react';
import { UserCheck, Shield, MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: "01",
      tag: "AUDIT",
      title: "Analyze The Bleed",
      desc: "We review your OTA commission spend, Google Maps rankings, mobile speed, and current enquiry conversion points."
    },
    {
      num: "02",
      tag: "BLUEPRINT",
      title: "Prioritize Opportunities",
      desc: "Develop a tailored plan addressing rate parity, high-margin direct perks, and immediate Google Business Profile fixes."
    },
    {
      num: "03",
      tag: "ACTIVATE",
      title: "Deploy The Channels",
      desc: "Upgrade your website speed, implement WhatsApp reservation funnels, and claim high-intent local search rankings."
    },
    {
      num: "04",
      tag: "RETAIN",
      title: "Scale Direct Bookings",
      desc: "Build a proprietary guest database to secure commission-free repeat visits and seasonal holiday buyouts."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#fcfbf9] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founder Editorial Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 mb-20 shadow-sm grid lg:grid-cols-12 gap-10 items-center"
        >
          {/* Left Column: Founder Bio */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/5 border border-emerald-900/15 text-[#043f2e] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#c99a2e]" />
              <span>DIRECTOR & FOUNDER</span>
            </div>

            <h3 className="text-3xl font-extrabold text-[#071510] tracking-tight mb-2">
              Swapneel Shirsat
            </h3>
            <p className="text-xs font-mono font-bold text-[#043f2e] tracking-wider uppercase mb-6">
              18+ YEARS DIGITAL MARKETING · 10+ YEARS EXCLUSIVELY HOSPITALITY
            </p>

            <blockquote className="font-serif italic text-lg sm:text-xl text-[#043f2e] border-l-4 border-[#c99a2e] pl-5 mb-6 leading-snug">
              “Independent properties have the authentic charm travelers crave. Our mission is to ensure owners don’t surrender 20% of their life’s work to aggregators just to get noticed.”
            </blockquote>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Based in Nagpur and consulting for premier retreats from Maharashtra to Uttarakhand, Swapneel works directly with property owners. No junior account managers, no generic automated reports—just practical hospitality engineering that fills rooms.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center text-xs font-bold text-[#043f2e] bg-[#f0f7f4] border border-[#d4eae1] px-3 py-1 rounded-full">
                📍 Nagpur HQ (440034)
              </span>
              <span className="inline-flex items-center text-xs font-bold text-[#043f2e] bg-[#f0f7f4] border border-[#d4eae1] px-3 py-1 rounded-full">
                🌲 Uttarakhand Specialist
              </span>
              <span className="inline-flex items-center text-xs font-bold text-[#043f2e] bg-[#f0f7f4] border border-[#d4eae1] px-3 py-1 rounded-full">
                ✓ 100% In-Person Audits
              </span>
            </div>
          </div>

          {/* Right Column: Key Differentiators */}
          <div className="lg:col-span-5 bg-[#071510] text-white p-7 sm:p-8 rounded-2xl border border-white/10 shadow-lg">
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2" style={{ color: '#ffffff' }}>
              <span className="text-[#c99a2e]">✦</span> Why Work With GrowGuest?
            </h4>

            <ul className="space-y-5 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-[#dfad3c] mt-0.5">01</span>
                <div>
                  <strong className="block text-white font-semibold">Zero Junior Delegates</strong>
                  <span className="text-emerald-100/75 leading-relaxed">
                    Swapneel personally inspects your Google visibility, OTA listings, and website.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-[#dfad3c] mt-0.5">02</span>
                <div>
                  <strong className="block text-white font-semibold">Hospitality-Only Focus</strong>
                  <span className="text-emerald-100/75 leading-relaxed">
                    We don’t do e-commerce or SaaS. We live and breathe ADR, RevPAR, and room nights.
                  </span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-[#dfad3c] mt-0.5">03</span>
                <div>
                  <strong className="block text-white font-semibold">WhatsApp-Native Workflows</strong>
                  <span className="text-emerald-100/75 leading-relaxed">
                    Systems built for how Indian travelers and frontline resort managers actually communicate.
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* 4-Step Process Section */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/5 border border-emerald-900/15 text-[#043f2e] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#c99a2e]" />
            <span>A PRACTICAL BLUEPRINT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#071510] tracking-tight">
            Less guesswork.{' '}
            <span className="font-serif italic font-normal text-[#c99a2e]">
              A clear path to direct growth.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:border-[#c99a2e] transition-colors"
            >
              <div className="text-xs font-mono font-bold text-[#c99a2e] tracking-wider mb-2">
                STEP {step.num} / {step.tag}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {step.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
