import { MapPin, Globe, Search, MessageSquare } from 'lucide-react';

const services = [
  {
    icon: <MapPin className="w-8 h-8 text-brand-gold" />,
    title: "Google Business Profile Fixes",
    description: "When someone searches 'Hotel near me', you need to show up first. We optimize your Google Maps listing, manage reviews, and ensure your contact details are one click away, so guests call you instead of scrolling past.",
    outcome: "More calls and walk-ins directly from Google Maps."
  },
  {
    icon: <Globe className="w-8 h-8 text-brand-gold" />,
    title: "Direct Booking Website",
    description: "OTAs look professional, which builds trust. If your website looks broken or old, guests go back to MakeMyTrip. We build fast, mobile-friendly websites that make it incredibly easy for guests to trust you and book directly.",
    outcome: "Higher conversion rate: Lookers turn into bookers."
  },
  {
    icon: <Search className="w-8 h-8 text-brand-gold" />,
    title: "Local SEO for Nagpur",
    description: "We make sure your property ranks high when people search for terms like 'Best resort in Nagpur' or 'Homestay for families'. We do the technical work in the background so your property stays visible year-round.",
    outcome: "Consistent, free traffic from Google search."
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-brand-gold" />,
    title: "WhatsApp Booking Flow",
    description: "Most owners miss out because they don't reply fast enough. We set up professional WhatsApp business profiles and automated greetings so when a guest clicks 'Chat on WhatsApp' from your site, they get an instant, professional response.",
    outcome: "Faster replies = Fewer lost bookings."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-6">
            What We Actually Do
          </h2>
          <p className="text-lg text-slate-600">
            No confusing marketing jargon. Just the practical digital fixes required to make your hotel, homestay, or restaurant generate its own bookings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-brand-teal/5 rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-teal mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <span className="block text-sm font-bold text-brand-teal mb-1">Business Outcome:</span>
                <span className="text-brand-gold-dark font-medium">{service.outcome}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
