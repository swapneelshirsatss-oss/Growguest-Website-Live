// 1. Original Google Business Profile (GMB) Storefront Logo Icon
function GmbOriginalLogo() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 4-Color Storefront Canopy */}
      <path d="M6 18L24 6L42 18V22H6V18Z" fill="#4285F4" />
      <path d="M6 18L15 12V22H6V18Z" fill="#EA4335" />
      <path d="M33 12L42 18V22H33V12Z" fill="#34A853" />
      <path d="M24 6L33 12V22H24V6Z" fill="#FBBC05" />
      {/* Building Frame */}
      <path d="M8 22H40V40C40 41.1 39.1 42 38 42H10C8.9 42 8 41.1 8 40V22Z" fill="#FFFFFF" stroke="#4285F4" strokeWidth="2.5" />
      {/* GMB Entry Door */}
      <path d="M18 42V28C18 26.9 18.9 26 20 26H28C29.1 26 30 26.9 30 28V42" fill="#4285F4" />
      {/* Google Emblem */}
      <circle cx="24" cy="34" r="3" fill="#FBBC05" />
    </svg>
  );
}

// 2. Direct Booking Website / Mobile Engine Logo Icon
function MobileWebsiteLogo() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Smartphone Container */}
      <rect x="10" y="4" width="28" height="40" rx="5" fill="#0B1320" stroke="#C99A2E" strokeWidth="2.5" />
      {/* Web Screen */}
      <rect x="14" y="10" width="20" height="24" rx="2" fill="#12312B" />
      {/* Website Header Bar with Lock */}
      <rect x="16" y="12" width="16" height="3" rx="1" fill="#C99A2E" />
      {/* Direct Booking Green CTA Button */}
      <rect x="16" y="18" width="16" height="8" rx="2" fill="#25D366" />
      <path d="M20 22L22 24L28 20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Speed Thunderbolt Badge */}
      <path d="M24 28L21 32H24L23 35L27 31H24L25 28Z" fill="#FBBC05" />
      {/* Mobile Home Bar */}
      <line x1="20" y1="39" x2="28" y2="39" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 3. Google Mobile Search & Local SEO Logo Icon
function GoogleSearchLogo() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mobile Screen Frame */}
      <rect x="8" y="6" width="32" height="36" rx="4" fill="#FFFFFF" stroke="#4285F4" strokeWidth="2.5" />
      {/* Google Search Bar Box */}
      <rect x="12" y="12" width="24" height="8" rx="4" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
      {/* 4-Color Official Google G Logo */}
      <path d="M17.5 16C17.5 15.4 17.6 14.8 17.8 14.3H16V17.7H19.5C19.3 18.5 18.6 19.1 17.5 19.1C16.3 19.1 15.3 18.1 15.3 16.9C15.3 15.7 16.3 14.7 17.5 14.7C18.1 14.7 18.6 14.9 19 15.3L20.2 14.1C19.5 13.4 18.6 13 17.5 13C15.3 13 13.5 14.8 13.5 17C13.5 19.2 15.3 21 17.5 21C19.8 21 21.3 19.4 21.3 17.1C21.3 16.7 21.3 16.4 21.2 16H17.5Z" fill="#4285F4" />
      {/* Google Map Pack Rank #1 Red Pin */}
      <path d="M24 23C21.8 23 20 24.8 20 27C20 30 24 35 24 35C24 35 28 30 28 27C28 24.8 26.2 23 24 23Z" fill="#EA4335" />
      <circle cx="24" cy="27" r="2" fill="#FFFFFF" />
    </svg>
  );
}

// 4. Official WhatsApp Original Logo Icon
function WhatsAppOriginalLogo() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Official WhatsApp Green Circle */}
      <circle cx="24" cy="24" r="22" fill="#25D366" />
      {/* White Handset & Speech Bubble */}
      <path d="M34.1 14C31.4 11.3 27.9 9.8 24.1 9.8C16.3 9.8 9.9 16.2 9.9 24C9.9 26.5 10.5 28.9 11.7 31L9.5 39L17.7 36.8C19.7 37.9 21.9 38.5 24.1 38.5C31.9 38.5 38.3 32.1 38.3 24.3C38.3 20.5 36.8 16.7 34.1 14ZM24.1 36.1C22.1 36.1 20.1 35.6 18.4 34.6L17.9 34.3L13 35.6L14.3 30.8L14 30.3C12.9 28.5 12.3 26.3 12.3 24C12.3 17.5 17.6 12.2 24.1 12.2C27.3 12.2 30.2 13.4 32.4 15.7C34.7 18 35.9 20.9 35.9 24.1C35.9 30.7 30.6 36.1 24.1 36.1ZM30.6 27.5C30.2 27.3 28.3 26.4 27.9 26.2C27.6 26.1 27.3 26 27.1 26.4C26.9 26.7 26.2 27.5 26 27.7C25.8 27.9 25.6 28 25.2 27.8C24.8 27.6 23.5 27.2 22 25.8C20.8 24.7 20 23.4 19.8 23C19.6 22.6 19.8 22.4 20 22.2C20.2 22 20.4 21.7 20.6 21.5C20.8 21.3 20.9 21.1 21 20.8C21.1 20.5 21 20.3 20.9 20.1C20.8 19.9 20.1 18.1 19.8 17.3C19.5 16.5 19.2 16.6 19 16.6C18.8 16.6 18.5 16.6 18.2 16.6C17.9 16.6 17.5 16.7 17.2 17.1C16.8 17.5 15.8 18.4 15.8 20.3C15.8 22.2 17.2 24 17.4 24.3C17.6 24.6 20.2 28.5 24.1 30.2C25 30.6 25.7 30.8 26.3 31C27.2 31.3 28.1 31.2 28.8 31.1C29.6 31 31.2 30.1 31.6 29.1C31.9 28.1 31.9 27.2 31.8 27.1C31.7 26.9 31 26.8 30.6 27.5Z" fill="#FFFFFF" />
    </svg>
  );
}

const services = [
  {
    icon: <GmbOriginalLogo />,
    title: "Google Business Profile Fixes",
    description: "When someone searches 'Hotel near me', you need to show up first. We optimize your Google Maps listing, manage reviews, and ensure your contact details are one click away, so guests call you instead of scrolling past.",
    outcome: "More calls and walk-ins directly from Google Maps."
  },
  {
    icon: <MobileWebsiteLogo />,
    title: "Direct Booking Website",
    description: "OTAs look professional, which builds trust. If your website looks broken or old, guests go back to MakeMyTrip. We build fast, mobile-friendly websites that make it incredibly easy for guests to trust you and book directly.",
    outcome: "Higher conversion rate: Lookers turn into bookers."
  },
  {
    icon: <GoogleSearchLogo />,
    title: "Local SEO for Nagpur",
    description: "We make sure your property ranks high when people search for terms like 'Best resort in Nagpur' or 'Homestay for families'. We do the technical work in the background so your property stays visible year-round.",
    outcome: "Consistent, free traffic from Google search."
  },
  {
    icon: <WhatsAppOriginalLogo />,
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
              <div className="w-16 h-16 bg-slate-100/80 rounded-2xl flex items-center justify-center mb-6 border border-slate-200/60 shadow-inner">
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
