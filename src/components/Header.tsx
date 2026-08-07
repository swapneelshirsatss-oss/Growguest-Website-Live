import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" aria-label="Growguest Home" className="block w-40 lg:w-48 hover:opacity-90 transition-opacity">
              <Logo className="w-full h-auto" theme="light" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#hotels" className="text-sm font-semibold text-slate-600 hover:text-brand-teal transition-colors">Solutions</a>
            <a href="/#services" className="text-sm font-semibold text-slate-600 hover:text-brand-teal transition-colors">What We Do</a>
            <a href="/#proof" className="text-sm font-semibold text-slate-600 hover:text-brand-teal transition-colors">Results</a>
            <Link to="/blog" className="text-sm font-semibold text-slate-600 hover:text-brand-teal transition-colors">Blog</Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <a href="https://wa.me/918956907343" target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center text-sm font-semibold text-slate-600 hover:text-brand-teal transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +91 89569 07343
            </a>
            <a
              href="/#audit"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full shadow-sm text-sm font-bold text-brand-teal bg-brand-gold hover:bg-brand-gold-light transition-all transform hover:-translate-y-0.5"
            >
              Get Free Audit
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="/#hotels" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-md">Solutions</a>
            <a href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-md">What We Do</a>
            <a href="/#proof" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-md">Results</a>
            <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-brand-teal hover:bg-slate-50 rounded-md">Blog</Link>
            
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4 px-3">
              <a href="https://wa.me/918956907343" target="_blank" rel="noopener noreferrer" className="flex items-center text-base font-medium text-brand-teal">
                <Phone className="w-5 h-5 mr-2" />
                +91 89569 07343
              </a>
              <a
                href="/#audit"
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
