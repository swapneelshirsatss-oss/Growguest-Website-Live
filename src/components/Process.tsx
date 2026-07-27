export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Free Direct Booking Audit",
      desc: "We analyze your current website and Google Business Profile to see exactly where you are losing bookings to OTAs. We show you the gaps, no strings attached."
    },
    {
      num: "02",
      title: "Fix the Fundamentals",
      desc: "If we partner up, we rebuild your website to be fast and trustworthy, optimize your Google Maps listing, and set up your direct WhatsApp booking flow."
    },
    {
      num: "03",
      title: "Ongoing Local SEO Growth",
      desc: "We don't just build it and leave. We continuously post updates, manage reviews, and build local links so you stay at the top of Google searches in Nagpur year-round."
    },
    {
      num: "04",
      title: "Monthly ROI Report",
      desc: "Every month, you get a simple report showing: How many people found you, how many clicked to call/WhatsApp, and how much OTA commission you saved."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-brand-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-slate-300">
            A simple, transparent process to take back control of your bookings.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-brand-gold/30" />
              )}
              <div className="text-5xl font-extrabold text-white/10 mb-6">{step.num}</div>
              <h3 className="text-xl font-bold text-brand-gold mb-4">{step.title}</h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
