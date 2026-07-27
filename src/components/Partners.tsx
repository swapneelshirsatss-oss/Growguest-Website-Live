export default function Partners() {
  const partners = [
    {
      name: "The Stone Heritage",
      url: "https://thestoneheritage.in",
      logo: "https://images.unsplash.com/photo-1590251786576-905bfaf5dd40?q=80&w=200&auto=format&fit=crop" // fallback image or real logo
    },
    { 
      name: "Whispering Pines Resort",
      url: "https://whisperingpinesresort.in/",
      logo: "" // Leave empty to show initials
    },
    { 
      name: "Ethnic Trail",
      url: "",
      logo: "" 
    },
    { 
      name: "And Many More",
      url: "",
      logo: "" 
    }
  ];

  return (
    <section className="py-16 bg-slate-100 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-brand-teal">
            Our Partners - Success Stories
          </h2>
          <p className="text-slate-600 mt-2">
            Trusted by Nagpur's leading hospitality brands
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8">
          {partners.map((partner, idx) => {
            const hasLink = Boolean(partner.url);
            const CardContent = () => (
              <>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-50 text-brand-teal font-bold text-xl rounded-full flex items-center justify-center overflow-hidden border border-slate-200 shrink-0">
                    {partner.logo ? (
                      <img src={partner.logo} alt={`${partner.name} Logo`} className="w-full h-full object-cover" />
                    ) : (
                      partner.name.charAt(0)
                    )}
                  </div>
                  <span className={`font-semibold text-lg md:text-xl text-left ${hasLink ? 'group-hover:text-brand-teal transition-colors' : 'text-slate-800'}`}>
                    {partner.name}
                  </span>
                </div>
                {hasLink && (
                  <span className="text-xs text-brand-gold mt-3 font-medium flex items-center self-center sm:self-start sm:ml-[60px]">
                    Visit Website <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </span>
                )}
              </>
            );

            return hasLink ? (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white px-6 py-5 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-center w-full sm:w-auto min-w-[240px] md:min-w-[280px] hover:shadow-md hover:border-brand-teal/30 transition-all group"
              >
                <CardContent />
              </a>
            ) : (
              <div 
                key={idx} 
                className="bg-white px-6 py-5 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-center w-full sm:w-auto min-w-[240px] md:min-w-[280px]"
              >
                <CardContent />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
