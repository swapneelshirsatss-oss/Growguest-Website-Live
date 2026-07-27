export default function Proof() {
  const caseStudies = [
    {
      property: "Boutique Homestay in Civil Lines",
      metric: "Google Map Views",
      before: "450/month",
      after: "3,200/month",
      result: "Tripled their direct call volume in 60 days just by fixing GBP structure and local keywords."
    },
    {
      property: "Resort on Wardha Road",
      metric: "Direct Booking Ratio",
      before: "10% Direct / 90% OTA",
      after: "45% Direct / 55% OTA",
      result: "Saved over ₹1.2 Lakhs in OTA commissions in one quarter by driving traffic to a new, fast website."
    },
    {
      property: "Premium Restaurant in Dharampeth",
      metric: "Table Reservations",
      before: "Mostly via Zomato (Commission)",
      after: "60% via WhatsApp/Google",
      result: "Implemented a direct WhatsApp booking link on their optimized Google profile, bypassing aggregator fees."
    }
  ];

  return (
    <section id="proof" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-teal mb-6">
            Real Results for Nagpur Properties
          </h2>
          <p className="text-lg text-slate-600">
            We don't just sell "marketing services". We measure success by the reduction in your commission invoices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 flex flex-col">
              <h3 className="font-semibold text-slate-800 mb-6">{study.property}</h3>
              
              <div className="mb-6 flex-grow">
                <div className="text-sm text-slate-500 mb-1">{study.metric} Before</div>
                <div className="text-xl font-bold text-slate-400 line-through decoration-red-500 decoration-2">{study.before}</div>
                
                <div className="text-sm text-slate-500 mt-4 mb-1">{study.metric} After</div>
                <div className="text-2xl font-bold text-brand-teal">{study.after}</div>
              </div>
              
              <div className="bg-white p-4 rounded-xl border border-brand-gold/20 shadow-sm">
                <p className="text-sm text-slate-700 font-medium">
                  {study.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
