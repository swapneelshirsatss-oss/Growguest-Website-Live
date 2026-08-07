import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="w-48">
              <Logo className="w-full h-auto" theme="dark" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Growguest is a boutique digital marketing consultancy specializing exclusively in hospitality (hotels, homestays, resorts, restaurants). We eliminate OTA commissions by building direct-booking engines powered by local SEO and conversion optimization.
            </p>
            <div className="pt-2 text-xs text-brand-gold flex items-center font-medium">
              <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
              <span>Founder-led in Nagpur & Uttarakhand Hill-Stations</span>
            </div>
          </div>

          {/* Column 2: Quick Links / Main Pages */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Main Pages</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/hospitality-digital-marketing-services" className="hover:text-brand-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/hotel-direct-booking-solutions" className="hover:text-brand-gold transition-colors">Direct Booking Solutions</Link>
              </li>
              <li>
                <Link to="/hospitality-marketing-case-studies" className="hover:text-brand-gold transition-colors">Case Studies & Results</Link>
              </li>
              <li>
                <Link to="/free-hotel-digital-marketing-audit" className="hover:text-brand-gold transition-colors">Free Direct Booking Audit</Link>
              </li>
              <li>
                <Link to="/about-hospitality-marketing-agency" className="hover:text-brand-gold transition-colors">About Growguest</Link>
              </li>
              <li>
                <Link to="/contact-hospitality-marketing-agency" className="hover:text-brand-gold transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Hospitality Insights & Blog */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Hospitality SEO Guides</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/hospitality-digital-marketing-blog" className="text-brand-gold font-medium hover:underline flex items-center">
                  Blog Index <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </li>
              <li>
                <Link to="/blog/google-business-profile-seo-homestays-resorts" className="hover:text-brand-gold transition-colors line-clamp-1">
                  Google Business Profile SEO
                </Link>
              </li>
              <li>
                <Link to="/blog/hotel-direct-booking-strategy-reduce-ota-commissions" className="hover:text-brand-gold transition-colors line-clamp-1">
                  Reduce OTA Commissions
                </Link>
              </li>
              <li>
                <Link to="/blog/hotel-website-conversion-rate-optimization" className="hover:text-brand-gold transition-colors line-clamp-1">
                  Website Conversion Fixes
                </Link>
              </li>
              <li>
                <Link to="/blog/local-seo-guide-resorts-hotels" className="hover:text-brand-gold transition-colors line-clamp-1">
                  Local SEO for Resorts
                </Link>
              </li>
              <li>
                <Link to="/blog/whatsapp-marketing-strategies-hotel-room-bookings" className="hover:text-brand-gold transition-colors line-clamp-1">
                  WhatsApp Booking Strategies
                </Link>
              </li>
              <li>
                <Link to="/blog/hotel-reputation-management-google-reviews" className="hover:text-brand-gold transition-colors line-clamp-1">
                  Google Reviews Reputation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Address */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Connect & Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="flex items-start text-slate-300">
                  <MapPin className="w-4 h-4 mr-2 text-brand-gold flex-shrink-0 mt-0.5" />
                  <span>60, Swami samarth Nagari, Besa-Pipla Rd, Nagpur</span>
                </div>
              </li>
              <li>
                <a href="https://wa.me/918956907343" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-brand-gold transition-colors">
                  <Phone className="w-4 h-4 mr-2 text-brand-gold flex-shrink-0" />
                  +91 89569 07343
                </a>
              </li>
              <li>
                <a href="mailto:hello@growguest.com" className="flex items-center hover:text-brand-gold transition-colors">
                  <Mail className="w-4 h-4 mr-2 text-brand-gold flex-shrink-0" />
                  hello@growguest.com
                </a>
              </li>
              <li className="pt-2 text-xs text-slate-400">
                <span className="text-white font-medium block mb-1">Key Focus Markets:</span>
                Nagpur (Wardha Road, Dharampeth, Civil Lines, Sadar) & Uttarakhand (Mukteshwar, Ramgarh, Nainital)
              </li>
            </ul>
          </div>

        </div>

        {/* Location & Embedded Map Section */}
        <div className="mb-12 p-6 rounded-2xl bg-slate-900/60 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-1 space-y-3">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-medium border border-brand-gold/20">
                <MapPin className="w-3.5 h-3.5 mr-1.5" />
                Nagpur Office Location
              </div>
              <h4 className="text-white font-semibold text-lg">Visit GrowGuest</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                60, Swami samarth Nagari, Besa-Pipla Rd, Nagpur, Maharashtra
              </p>
              <p className="text-xs text-slate-400">
                Book a face-to-face direct booking & local SEO audit for your hotel, resort, or restaurant in Nagpur.
              </p>
            </div>
            <div className="lg:col-span-2 overflow-hidden rounded-xl border border-white/10 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.6677174950273!2d79.0985166!3d21.0859296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bf26c05347f1%3A0xbca701993578885b!2sGrowGuest%20-%20Digital%20Growth%20for%20Hospitality!5e0!3m2!1sen!2sin!4v1785221263287!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="GrowGuest Office Location Map - Besa-Pipla Rd, Nagpur"
                className="w-full h-[240px] rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-slate-400">
          <p>&copy; {new Date().getFullYear()} Growguest — Digital Growth for Hospitality. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">XML Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
