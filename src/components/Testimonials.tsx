import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-6">
            Trusted by Nagpur's Hospitality Owners
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative">
            <div className="flex gap-1 mb-4 text-brand-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-lg text-slate-700 italic mb-6">
              "I used to think paying 22% to OTAs was just the cost of doing business. Growguest showed me how much traffic I was losing because my own website was broken. Within 3 months of the rebuild and SEO work, my direct WhatsApp bookings have doubled."
            </p>
            <div>
              <div className="font-bold text-brand-teal">Rajeev S.</div>
              <div className="text-sm text-slate-500">Owner, Nagpur Heritage Homestay</div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 relative">
            <div className="flex gap-1 mb-4 text-brand-gold">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <p className="text-lg text-slate-700 italic mb-6">
              "Most marketing agencies just promise 'likes' and 'reach'. Growguest is the only one that actually talked about reducing my OTA commissions. The new Google Business strategy brought us a lot of corporate direct bookings we were previously losing."
            </p>
            <div>
              <div className="font-bold text-brand-teal">Ananya M.</div>
              <div className="text-sm text-slate-500">Manager, The Wardha Road Resort</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
