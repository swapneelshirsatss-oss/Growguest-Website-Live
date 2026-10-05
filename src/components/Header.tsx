import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="site-header" id="site-header">
      <div className="container nav-wrapper">
        <a className="brand-link" href="/" aria-label="GrowGuest Home">
          <img 
            className="brand-logo" 
            src="/assets/growguest-logo.svg" 
            alt="GrowGuest — Digital Growth for Hospitality" 
            width="490" 
            height="130" 
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary Navigation">
          <a className="nav-link" href="/hotel-direct-booking-solutions/">OTA vs Direct</a>
          <a className="nav-link" href="/approach/">Methodology</a>
          <a className="nav-link" href="/hotel-digital-marketing-services/">Services</a>
          <a className="nav-link" href="/hospitality-marketing-case-studies/">Case Studies</a>
          <a className="nav-link" href="/calculator/">ROI Calculator</a>
          <a className="nav-link" href="/about-hospitality-marketing-agency/">About Us</a>
          <a className="nav-link" href="/hospitality-digital-marketing-blog/">Blog</a>
          <a className="nav-link" href="/contact-hospitality-digital-marketing-agency/">Contact</a>
        </nav>

        {/* Header CTA Group */}
        <div className="header-cta-group">
          <a className="btn btn-primary btn-sm" href="/free-hotel-digital-marketing-audit/">
            <span>Free Growth Audit</span>
            <span className="btn-arrow">↗</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button 
            className="menu-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Open navigation menu" 
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer active" id="mobile-nav" aria-label="Mobile Navigation" style={{ display: 'flex' }}>
          <a className="nav-link" href="/hotel-direct-booking-solutions/" onClick={() => setIsMobileMenuOpen(false)}>OTA vs Direct</a>
          <a className="nav-link" href="/approach/" onClick={() => setIsMobileMenuOpen(false)}>Methodology</a>
          <a className="nav-link" href="/hotel-digital-marketing-services/" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a className="nav-link" href="/hospitality-marketing-case-studies/" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a>
          <a className="nav-link" href="/calculator/" onClick={() => setIsMobileMenuOpen(false)}>ROI Calculator</a>
          <a className="nav-link" href="/about-hospitality-marketing-agency/" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <a className="nav-link" href="/hospitality-digital-marketing-blog/" onClick={() => setIsMobileMenuOpen(false)}>Blog</a>
          <a className="nav-link" href="/contact-hospitality-digital-marketing-agency/" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a className="btn btn-gold btn-sm" href="/free-hotel-digital-marketing-audit/" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: '12px', justifyContent: 'center' }}>
            <span>Get Free Audit</span>
            <span className="btn-arrow">↗</span>
          </a>
        </div>
      )}
    </header>
  );
}
