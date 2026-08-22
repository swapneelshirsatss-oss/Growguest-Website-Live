import React, { useState } from 'react';
import { Send, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AuditForm() {
  const [formData, setFormData] = useState({
    name: '',
    propertyName: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `Namaste GrowGuest! I want a Free Direct Booking Audit.%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Property:* ${encodeURIComponent(formData.propertyName)}%0A*WhatsApp:* ${encodeURIComponent(formData.whatsapp)}`;
    const url = `https://wa.me/918956907343?text=${message}`;
    setWhatsappUrl(url);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Attempt to open WhatsApp window
      try {
        window.open(url, '_blank', 'noopener,noreferrer');
      } catch (err) {
        // Fallback handled by the success screen button
      }
    }, 600);
  };

  return (
    <section id="audit" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-teal/5 skew-y-3 transform origin-bottom-left z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-16 border border-slate-100">
          <div className="text-center mb-12">
            <div className="inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold bg-[#c8f169]/20 text-[#043f2e] border border-[#c8f169]/40 mb-4">
              <Sparkles className="w-4 h-4 mr-2 text-[#043f2e]" />
              100% Free • Manual Analysis • Delivered to WhatsApp
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#043f2e] mb-4">
              फ्री Direct Booking Audit पाएँ
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-medium max-w-2xl mx-auto">
              अपनी प्रॉपर्टी की डिटेल्स डालें — आपकी WhatsApp पर 4-पॉइंट फ्री ऑडिट रिपोर्ट (OTA कमिशन सेविंग + Google Maps Rank रिपोर्ट) भेजेंगे।
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-emerald-50 text-emerald-900 rounded-2xl p-8 text-center border border-emerald-200 space-y-5">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">Audit Request Received!</h3>
              <p className="text-slate-700 leading-relaxed max-w-md mx-auto">
                We are analyzing <strong>{formData.propertyName}</strong>. If WhatsApp did not open automatically, click below to connect with us directly.
              </p>
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-extrabold rounded-full text-[#043f2e] bg-[#c8f169] hover:bg-[#d8f68e] transition-all shadow-md hover:shadow-lg"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Open WhatsApp to Confirm Audit →
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#78c51c] focus:border-[#78c51c] outline-none transition-all text-slate-900"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              
              <div>
                <label htmlFor="propertyName" className="block text-sm font-semibold text-slate-700 mb-2">Property Name & Location *</label>
                <input
                  type="text"
                  id="propertyName"
                  required
                  value={formData.propertyName}
                  onChange={(e) => setFormData({...formData, propertyName: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#78c51c] focus:border-[#78c51c] outline-none transition-all text-slate-900"
                  placeholder="e.g. Hotel Green View, Dharampeth"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp Number *</label>
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#78c51c] focus:border-[#78c51c] outline-none transition-all text-slate-900"
                  placeholder="+91 98765 43210"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl text-[#043f2e] font-extrabold text-lg transition-all ${
                  isSubmitting 
                    ? 'bg-[#c8f169]/70 cursor-not-allowed' 
                    : 'bg-[#c8f169] hover:bg-[#d8f68e] shadow-[0_0_20px_rgba(200,241,105,0.35)] hover:shadow-[0_0_30px_rgba(200,241,105,0.55)] transform hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting ? 'रिपोर्ट तैयार हो रही है...' : 'WhatsApp पर फ्री ऑडिट रिपोर्ट पाएँ →'}
              </button>
              <p className="text-xs text-center text-slate-500 mt-4 font-medium">
                100% नि:शुल्क • 0% स्पैम • सीधा आपकी WhatsApp पर डिलीवरी
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
