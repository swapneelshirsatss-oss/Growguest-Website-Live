import React, { useState } from 'react';
import { Sparkles, CheckCircle2, PhoneCall, Send, ShieldCheck } from 'lucide-react';

export default function AuditForm() {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Boutique Hotel',
    propertyName: '',
    rooms: '',
    website: '',
    goal: 'Direct Booking vs OTA Strategy'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const messageLines = [
      "🏨 *GrowGuest Free Direct Booking Audit Request*",
      "-----------------------------------",
      `*Owner / Manager:* ${formData.name.trim()}`,
      `*Property & City:* ${formData.propertyName.trim()}`,
      `*Property Type:* ${formData.type}`,
      `*Total Room Keys:* ${formData.rooms.trim() || 'Not specified'}`,
      `*Website / Google Maps:* ${formData.website.trim() || 'Not provided yet'}`,
      `*Primary Focus:* ${formData.goal}`,
      "-----------------------------------",
      "Hi Swapneel, please review our property details and share practical audit recommendations to reduce our OTA commission bleed."
    ];

    const url = `https://wa.me/918956907343?text=${encodeURIComponent(messageLines.join('\n'))}`;
    setWhatsappUrl(url);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (err) {
        // Fallback handled by button
      }
    }, 400);
  };

  return (
    <section id="audit" className="py-20 md:py-28 bg-gradient-to-b from-[#071510] to-[#04241b] text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-700/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Hotline */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#dfad3c]/15 border border-[#dfad3c]/30 text-[#dfad3c] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#dfad3c] animate-pulse" />
              <span>GET STARTED IN 2 MINUTES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6">
              Let’s make room for{' '}
              <em className="font-serif italic font-normal text-[#dfad3c] not-italic">
                more direct growth.
              </em>
            </h2>

            <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed mb-8">
              Share a few details about your property. Swapneel will personally evaluate your Google Maps ranking, website conversion journey, and OTA commission leak.
            </p>

            {/* Direct Phone Call Hotline Box */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 backdrop-blur-md">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#dfad3c] block mb-2">
                PREFER A DIRECT PHONE CALL?
              </span>
              <a 
                href="tel:+918956907343" 
                className="text-xl sm:text-2xl font-extrabold text-white hover:text-[#dfad3c] transition-colors inline-flex items-center gap-2"
              >
                <PhoneCall className="w-5 h-5 text-[#25d366]" />
                <span>+91 89569 07343</span>
                <span className="text-sm font-normal text-emerald-300">↗</span>
              </a>
              <p className="text-xs text-emerald-200/60 mt-1">
                English & Hindi • Direct conversation with founder
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs text-emerald-200/70 pt-4 border-t border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#25d366] shrink-0" />
              <span>100% Confidential. Swapneel personally reviews your property within 24 hours.</span>
            </div>
          </div>

          {/* Right Column: High-Converting Audit Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 text-slate-900 shadow-2xl border border-slate-100">
            {isSuccess ? (
              <div className="text-center py-8 space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Audit Request Ready!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  We've prepared your audit briefing for <strong>{formData.propertyName}</strong>. Click below to continue directly to WhatsApp:
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-[#25d366] hover:bg-[#1ebd5b] transition-all shadow-lg hover:shadow-xl text-base"
                >
                  <span>Open WhatsApp to Confirm Audit</span>
                  <span className="text-lg">↗</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-1">
                    Request Free Direct Booking Audit
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Direct response delivered via WhatsApp within 24 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#043f2e] focus:ring-2 focus:ring-[#043f2e]/10 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Property Type *
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#043f2e] focus:ring-2 focus:ring-[#043f2e]/10 outline-none text-sm bg-white transition-all"
                    >
                      <option value="Boutique Hotel">Boutique Hotel</option>
                      <option value="Heritage Homestay">Heritage Homestay</option>
                      <option value="Luxury Resort">Luxury Resort</option>
                      <option value="Private Villa">Private Villa</option>
                      <option value="Restaurant / Dining">Restaurant / Dining</option>
                      <option value="Other Stay">Other Hospitality Stay</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Property Name & City / Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.propertyName}
                      onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                      placeholder="e.g. Pine Estate, Mukteshwar"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#043f2e] focus:ring-2 focus:ring-[#043f2e]/10 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Total Room Keys <span className="font-normal text-slate-400">(approx)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.rooms}
                      onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                      placeholder="e.g. 12 Rooms or 3 Villas"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#043f2e] focus:ring-2 focus:ring-[#043f2e]/10 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Website or Google Maps Link <span className="font-normal text-slate-400">(optional)</span>
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourproperty.com or Google Maps URL"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#043f2e] focus:ring-2 focus:ring-[#043f2e]/10 outline-none text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Primary Goal For Growth *
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#043f2e] focus:ring-2 focus:ring-[#043f2e]/10 outline-none text-sm bg-white transition-all"
                  >
                    <option value="Direct Booking vs OTA Strategy">Reduce OTA Commission Bleed</option>
                    <option value="Google Business Profile & Local SEO">Rank Higher on Google Maps (GBP 3-Pack)</option>
                    <option value="High-Converting Hospitality Website">Fix Website & Direct Booking Conversion</option>
                    <option value="WhatsApp Concierge & OTA Distribution">Set Up 1-Click WhatsApp Booking Funnel</option>
                    <option value="High-ROI Performance Advertising">Launch Profitable Google & Meta Ads</option>
                    <option value="Hospitality Content & Storytelling">Elevate Visual Branding & Storytelling</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full font-bold text-white bg-[#25d366] hover:bg-[#1ebd5b] transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm sm:text-base mt-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.18 8.18 0 0 1-5.82 2.41c-1.45 0-2.88-.39-4.14-1.13l-.3-.18-3.12.82.83-3.04-.19-.31c-.81-1.3-1.24-2.81-1.24-4.37 0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43l-.48-.01c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29z"/>
                  </svg>
                  <span>Send Details via WhatsApp</span>
                  <span className="text-base">↗</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                  Opens WhatsApp with your pre-filled inquiry. You can review and edit before sending.
                </p>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
