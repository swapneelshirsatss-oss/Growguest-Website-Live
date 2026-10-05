export default function Services() {
  const handleServiceClick = (serviceName: string) => {
    const goalSelect = document.getElementById('audit-goal') as HTMLSelectElement | null;
    if (goalSelect && serviceName) {
      goalSelect.value = serviceName;
    }
    const auditSection = document.getElementById('audit');
    if (auditSection) {
      auditSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">
            <span className="pulse-dot"></span>
            <span>END-TO-END HOSPITALITY SERVICES</span>
          </div>
          <h2 className="section-title">
            One growth partner.<br />
            <em>Every guest touchpoint.</em>
          </h2>
          <p className="section-subtitle">
            From making a memorable first impression on Google to converting enquiries in under 2 minutes. Click any service to tailor your free audit.
          </p>
        </div>

        <div className="services-bento">
          {/* Service 1 */}
          <div 
            className="service-card" 
            data-service="Direct Booking Strategy & Parity"
            onClick={() => handleServiceClick("Direct Booking Strategy & Parity")}
          >
            <div className="service-card-top">
              <div className="service-icon-box">↗</div>
              <span className="service-index">01</span>
            </div>
            <h3>Direct Booking Strategy & Parity</h3>
            <p>
              Audit your OTA rate parity, identify leakage points, and design direct booking perks (free breakfast, early check-in) that make booking on your website a no-brainer.
            </p>
            <div className="service-card-action">
              <span>Tailor Audit For Strategy</span>
              <span className="btn-arrow">↗</span>
            </div>
          </div>

          {/* Service 2 */}
          <div 
            className="service-card" 
            data-service="High-Converting Hospitality Website"
            onClick={() => handleServiceClick("High-Converting Hospitality Website")}
          >
            <div className="service-card-top">
              <div className="service-icon-box">▧</div>
              <span className="service-index">02</span>
            </div>
            <h3>Conversion-Optimized Websites</h3>
            <p>
              Fast, elegant, and mobile-first websites designed for hospitality. Highlighting room suites, experiential amenities, guest reviews, and frictionless enquiry triggers.
            </p>
            <div className="service-card-action">
              <span>Audit Your Website CRO</span>
              <span className="btn-arrow">↗</span>
            </div>
          </div>

          {/* Service 3 */}
          <div 
            className="service-card" 
            data-service="Google Business Profile & Local SEO"
            onClick={() => handleServiceClick("Google Business Profile & Local SEO")}
          >
            <div className="service-card-top">
              <div className="service-icon-box">⌕</div>
              <span className="service-index">03</span>
            </div>
            <h3>Google Business Profile & Local SEO</h3>
            <p>
              Rank in the coveted Google Maps 3-Pack for destination keywords. We audit categories, attributes, photo storytelling, and review velocity to drive organic calls.
            </p>
            <div className="service-card-action">
              <span>Inspect Google Maps Rank</span>
              <span className="btn-arrow">↗</span>
            </div>
          </div>

          {/* Service 4 */}
          <div 
            className="service-card" 
            data-service="High-ROI Performance Advertising"
            onClick={() => handleServiceClick("High-ROI Performance Advertising")}
          >
            <div className="service-card-top">
              <div className="service-icon-box">◎</div>
              <span className="service-index">04</span>
            </div>
            <h3>High-ROI Performance Advertising</h3>
            <p>
              Google Search Ads that protect your brand name against OTA bidding piracy, and visual Meta campaigns reaching families and couples planning weekend getaways.
            </p>
            <div className="service-card-action">
              <span>Scale Paid Guest Acquisition</span>
              <span className="btn-arrow">↗</span>
            </div>
          </div>

          {/* Service 5 */}
          <div 
            className="service-card" 
            data-service="Hospitality Content & Storytelling"
            onClick={() => handleServiceClick("Hospitality Content & Storytelling")}
          >
            <div className="service-card-top">
              <div className="service-icon-box">✳</div>
              <span className="service-index">05</span>
            </div>
            <h3>Content, Photography & Storytelling</h3>
            <p>
              Give travellers a visceral sense of arrival. Creative direction for property photography, culinary showcases, and authentic Instagram reels that justify premium room tariffs.
            </p>
            <div className="service-card-action">
              <span>Upgrade Visual Positioning</span>
              <span className="btn-arrow">↗</span>
            </div>
          </div>

          {/* Service 6 */}
          <div 
            className="service-card" 
            data-service="WhatsApp Concierge & OTA Distribution"
            onClick={() => handleServiceClick("WhatsApp Concierge & OTA Distribution")}
          >
            <div className="service-card-top">
              <div className="service-icon-box">⇄</div>
              <span className="service-index">06</span>
            </div>
            <h3>WhatsApp Concierge & Distribution</h3>
            <p>
              Connect OTA channel managers with 1-click WhatsApp enquiry funnels. Equip your reservations team with pre-written quotation templates that close bookings instantly.
            </p>
            <div className="service-card-action">
              <span>Deploy WhatsApp Engine</span>
              <span className="btn-arrow">↗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
