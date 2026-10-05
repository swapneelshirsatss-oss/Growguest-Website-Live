export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <a href="/" aria-label="GrowGuest Home">
              <img 
                className="footer-logo" 
                src="/assets/growguest-logo.svg" 
                alt="GrowGuest — Digital Growth for Hospitality" 
                width="490" 
                height="130" 
              />
            </a>
            <p>
              Boutique hospitality digital marketing consultancy. Helping independent hotels, homestays, and resorts establish high-margin direct booking pipelines.
            </p>
            <div style={{ fontSize: '12px', color: '#8fa69c', marginTop: '14px' }}>
              Director & Founder: <strong style={{ color: '#ffffff' }}>Swapneel Shirsat</strong> (18+ Yrs Marketing, 10+ Yrs Hospitality)
            </div>
            {/* Social Media Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '18px' }}>
              <a 
                href="https://www.facebook.com/profile.php?id=61593380557986" 
                target="_blank" 
                rel="noopener" 
                aria-label="Facebook" 
                style={{ color: '#8fa69c', display: 'flex', padding: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a 
                href="https://www.instagram.com/growguest/" 
                target="_blank" 
                rel="noopener" 
                aria-label="Instagram" 
                style={{ color: '#8fa69c', display: 'flex', padding: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a 
                href="https://x.com/Growguest" 
                target="_blank" 
                rel="noopener" 
                aria-label="X (Twitter)" 
                style={{ color: '#8fa69c', display: 'flex', padding: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/growguest-digital-growth-for-hospitality" 
                target="_blank" 
                rel="noopener" 
                aria-label="LinkedIn" 
                style={{ color: '#8fa69c', display: 'flex', padding: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/hotel-direct-booking-solutions/">OTA vs Direct</a></li>
              <li><a href="/approach/">Methodology</a></li>
              <li><a href="/hotel-digital-marketing-services/">Hospitality Services</a></li>
              <li><a href="/hospitality-marketing-case-studies/">Properties & Case Studies</a></li>
              <li><a href="/calculator/">ROI Calculator</a></li>
              <li><a href="/about-hospitality-marketing-agency/">About Swapneel</a></li>
              <li><a href="/hospitality-digital-marketing-blog/">Hospitality Blog</a></li>
              <li><a href="/contact-hospitality-digital-marketing-agency/">Contact Us</a></li>
            </ul>
          </div>

          {/* Key Solutions */}
          <div className="footer-col">
            <h4>Key Solutions</h4>
            <ul className="footer-links">
              <li><a href="/hotel-direct-booking-solutions/">Direct Booking Strategy</a></li>
              <li><a href="/hotel-digital-marketing-services/">Google Business Profile & Local SEO</a></li>
              <li><a href="/hotel-digital-marketing-services/">Conversion-Optimized Websites</a></li>
              <li><a href="/hotel-ota-management-services/">Hotel OTA Management</a></li>
              <li><a href="/hotel-paid-ads-google-meta/">Paid Ads (Google & Meta)</a></li>
              <li><a href="/hospitality-social-media-management/">Social Media Management</a></li>
              <li><a href="/free-hotel-digital-marketing-audit/">Free Direct Booking Audit</a></li>
            </ul>
          </div>

          {/* Headquarters */}
          <div className="footer-col">
            <h4>Headquarters</h4>
            <div className="footer-address">
              <p><strong style={{ color: '#ffffff' }}>GrowGuest Digital Growth for Hospitality</strong></p>
              <p>60, Swami samarth Nagari, Besa-Pipla Rd,</p>
              <p>Nagpur, Maharashtra 440034, India</p>
              <p style={{ marginTop: '10px' }}>
                <a href="https://www.google.com/maps/place/?cid=13593835757779847259" target="_blank" rel="noopener">
                  View on Google Maps (CID Profile) ↗
                </a>
              </p>
              <p style={{ marginTop: '8px' }}>
                WhatsApp / Tel: <a href="tel:+918956907343">+91 89569 07343</a>
              </p>
              <p>
                Email: <a href="mailto:hello@growguest.com">hello@growguest.com</a>
              </p>
              <p style={{ marginTop: '8px', fontSize: '11px', color: '#6d857a' }}>
                Coordinates: 21.0857691, 79.0977950
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} GrowGuest Digital Growth for Hospitality. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="/privacy-policy/" style={{ color: '#8fa69c' }}>Privacy Policy</a>
            <a href="/terms-of-service/" style={{ color: '#8fa69c' }}>Terms of Service</a>
            <a href="/sitemap-website.xml" style={{ color: '#8fa69c' }}>Sitemap XML</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
