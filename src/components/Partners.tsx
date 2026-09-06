interface Partner {
  name: string;
  subtitle?: string;
  url: string;
  logo: string;
}

export default function Partners() {
  const partners: Partner[] = [
    {
      name: "The Stone Heritage",
      subtitle: "Mukteshwar, Uttarakhand",
      url: "https://thestoneheritage.in/",
      logo: "/Image/stone-heritage-mukteshwar.webp"
    },
    { 
      name: "Whispering Pines Resort",
      subtitle: "Ramgarh, Nainital",
      url: "https://whisperingpinesresort.in/",
      logo: "/Image/whispering-pines-casa-de-bello.webp"
    },
    { 
      name: "Casa De Bello Kainchi Dham",
      subtitle: "Kainchi Dham, Uttarakhand",
      url: "https://casadebello.com/",
      logo: "/Image/Casa-logo.webp"
    },
    { 
      name: "Ethnic Trail Resort",
      subtitle: "Kainchi Dham, Uttarakhand",
      url: "https://ethnictrailhomestay.com/",
      logo: "/Image/Ethanic-trail.webp" 
    },
    {
      name: "The Goan House",
      subtitle: "3 BHK Luxury Villa with Private Pool, Goa",
      url: "https://thegoanhouse.com/",
      logo: "/Image/the-goan-house-logo.webp"
    },
    { 
      name: "Anurra Hotel",
      subtitle: "Hotel Near Kainchi Dham",
      url: "https://anurrakainchidhamhotel.in/",
      logo: "/Image/anurra-hotel-logo.svg"
    },
    { 
      name: "The Mukteshwar Bungalow",
      subtitle: "3 BHK Luxury Mountain Villa, Mukteshwar",
      url: "https://themukteshwarbungalow.in/",
      logo: "/Image/the-mukteshwar-bungalow-logo.svg"
    },
    { 
      name: "And Many More",
      subtitle: "Hotels, Resorts & Luxury Stays",
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
            Trusted by independent hotels, luxury villas &amp; resorts across India
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8">
          {partners.map((partner, idx) => {
            const hasLink = Boolean(partner.url);
            const CardContent = () => (
              <>
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 bg-white text-brand-teal font-bold text-xl rounded-full flex items-center justify-center overflow-hidden border border-slate-200 shrink-0 shadow-xs">
                    {partner.logo ? (
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} Logo`} 
                        width="48" 
                        height="48" 
                        loading="lazy" 
                        className="w-full h-full object-contain p-1 bg-white" 
                      />
                    ) : (
                      partner.name.charAt(0)
                    )}
                  </div>
                  <div className="flex flex-col text-left min-w-0">
                    <span className={`font-semibold text-base md:text-lg leading-snug ${hasLink ? 'group-hover:text-brand-teal transition-colors' : 'text-slate-800'}`}>
                      {partner.name}
                    </span>
                    {partner.subtitle && (
                      <span className="text-xs text-slate-500 font-normal mt-0.5 leading-snug">
                        {partner.subtitle}
                      </span>
                    )}
                  </div>
                </div>
                {hasLink && (
                  <span className="text-xs text-brand-gold mt-3 font-medium flex items-center self-start ml-[62px]">
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
                className="bg-white p-5 rounded-xl shadow-xs border border-slate-200 flex flex-col justify-between w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[250px] max-w-[310px] hover:shadow-md hover:border-brand-teal/40 hover:-translate-y-0.5 transition-all group"
              >
                <CardContent />
              </a>
            ) : (
              <div 
                key={idx} 
                className="bg-white p-5 rounded-xl shadow-xs border border-slate-200 flex flex-col justify-between w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] min-w-[250px] max-w-[310px]"
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
