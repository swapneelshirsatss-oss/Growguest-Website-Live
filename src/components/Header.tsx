import { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fcfcfc]/90 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-22">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" aria-label="Growguest Home" className="block w-40 lg:w-48 hover:opacity-90 transition-opacity">
              <Logo className="w-full h-auto" theme="light" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7">
            <a href="/hotel-digital-marketing-services" className="text-sm font-semibold text-[#242423] hover:text-[#043f2e] transition-colors">Services</a>
            <a href="/hotel-direct-booking-solutions" className="text-sm font-semibold text-[#242423] hover:text-[#043f2e] transition-colors">Direct Booking Solutions</a>
            <a href="/hospitality-marketing-case-studies" className="text-sm font-semibold text-[#242423] hover:text-[#043f2e] transition-colors">Case Studies</a>
            <a href="/about-hospitality-marketing-agency" className="text-sm font-semibold text-[#242423] hover:text-[#043f2e] transition-colors">About Us</a>
            <a href="/blog" className="text-sm font-semibold text-[#242423] hover:text-[#043f2e] transition-colors">Blog</a>
            <a href="/contact-hospitality-digital-marketing-agency" className="text-sm font-semibold text-[#242423] hover:text-[#043f2e] transition-colors">Contact</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <a href="https://wa.me/918956907343" target="_blank" rel="noopener noreferrer" className="hidden xl:flex items-center text-sm font-semibold text-[#242423] hover:text-[#043f2e] transition-colors">
              <Phone className="w-4 h-4 mr-2 text-[#043f2e]" />
              +91 89569 07343
            </a>
            <a
              href="/free-hotel-digital-marketing-audit"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full shadow-md text-xs sm:text-sm font-extrabold text-[#043f2e] bg-[#c8f169] hover:bg-[#d8f68e] transition-all transform hover:-translate-y-0.5"
            >
              Get Free Audit
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-600 hover:text-brand-teal focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="/hotel-digital-marketing-services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-md">Services</a>
            <a href="/hotel-direct-booking-solutions" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-md">Direct Booking Solutions</a>
            <a href="/hospitality-marketing-case-studies" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-md">Case Studies & Results</a>
            <a href="/about-hospitality-marketing-agency" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-md">About Us</a>
            <a href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-md">Blog</a>
            <a href="/contact-hospitality-digital-marketing-agency" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-md">Contact Us</a>
            
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4 px-3">
              <a href="https://wa.me/918956907343" target="_blank" rel="noopener noreferrer" className="flex items-center text-base font-medium text-brand-teal">
                <Phone className="w-5 h-5 mr-2" />
                +91 89569 07343
              </a>
              <a
                href="/free-hotel-digital-marketing-audit"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-bold text-brand-teal bg-brand-gold hover:bg-brand-gold-light transition-colors"
              >
                Get Free Audit
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
