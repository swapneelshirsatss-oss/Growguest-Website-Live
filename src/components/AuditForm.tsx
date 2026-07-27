import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function AuditForm() {
  const [formData, setFormData] = useState({
    name: '',
    propertyName: '',
    whatsapp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="audit" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-teal/5 skew-y-3 transform origin-bottom-left z-0"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-16 border border-slate-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-4">
              Get Your Free Direct Booking Audit
            </h2>
            <p className="text-lg text-slate-600">
              Find out exactly how much commission you could be saving. Drop your details below and we'll send a quick audit to your WhatsApp.
            </p>
          </div>

          {isSuccess ? (
            <div className="bg-emerald-50 text-emerald-800 rounded-2xl p-8 text-center border border-emerald-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
              <p>We'll analyze your property's digital presence and message you on WhatsApp shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                  placeholder="e.g. Rahul Sharma"
                />
              </div>
              
              <div>
                <label htmlFor="propertyName" className="block text-sm font-semibold text-slate-700 mb-2">Property Name & Location</label>
                <input
                  type="text"
                  id="propertyName"
                  required
                  value={formData.propertyName}
                  onChange={(e) => setFormData({...formData, propertyName: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                  placeholder="e.g. Hotel Green View, Dharampeth"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-slate-700 mb-2">WhatsApp Number</label>
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition-all"
                  placeholder="+91"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl text-brand-teal font-bold text-lg transition-all ${
                  isSubmitting 
                    ? 'bg-brand-gold/70 cursor-not-allowed' 
                    : 'bg-brand-gold hover:bg-brand-gold-light shadow-[0_0_15px_rgba(201,154,46,0.3)] hover:shadow-[0_0_25px_rgba(201,154,46,0.5)] transform hover:-translate-y-0.5'
                }`}
              >
                {isSubmitting ? 'Requesting Audit...' : 'Send My Free Audit'}
              </button>
              <p className="text-xs text-center text-slate-500 mt-4">
                We respect your privacy. No spam, just a business analysis.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
