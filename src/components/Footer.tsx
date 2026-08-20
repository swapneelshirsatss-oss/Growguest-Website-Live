import Logo from './Logo';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61593380557986',
    icon: (props: { className?: string }) => (
      <svg className={props.className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
      </svg>
    )
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/growguest/',
    icon: (props: { className?: string }) => (
      <svg className={props.className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/channel/UCYfFotUC6n9Zgvv_V9LOXiA',
    icon: (props: { className?: string }) => (
      <svg className={props.className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    )
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/Growguest',
    icon: (props: { className?: string }) => (
      <svg className={props.className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    name: 'Pinterest',
    url: 'https://www.pinterest.com/growguest',
    icon: (props: { className?: string }) => (
      <svg className={props.className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146C10.07 23.83 11.016 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/growguest-digital-growth-for-hospitality',
    icon: (props: { className?: string }) => (
      <svg className={props.className || "w-4 h-4"} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    )
  }
];

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
            <div className="pt-1 text-xs text-brand-gold flex items-center font-medium">
              <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0" />
              <span>Founder-led in Nagpur & Uttarakhand Hill-Stations</span>
            </div>

            {/* Social Media Links */}
            <div className="pt-3">
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-400 block mb-3">
                Follow GrowGuest
              </span>
              <div className="flex items-center space-x-2.5 flex-wrap gap-y-2.5">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Growguest on ${social.name}`}
                    title={`Growguest on ${social.name}`}
                    className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-gold hover:border-brand-gold/50 hover:bg-slate-800 transition-all transform hover:-translate-y-0.5 shadow-sm"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links / Main Pages */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Main Pages</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" className="hover:text-brand-gold transition-colors">Home</a>
              </li>
              <li>
                <a href="/hotel-digital-marketing-services" className="hover:text-brand-gold transition-colors">Services</a>
              </li>
              <li>
                <a href="/hotel-direct-booking-solutions" className="hover:text-brand-gold transition-colors">Direct Booking Solutions</a>
              </li>
              <li>
                <a href="/hospitality-marketing-case-studies" className="hover:text-brand-gold transition-colors">Case Studies & Results</a>
              </li>
              <li>
                <a href="/free-hotel-digital-marketing-audit" className="hover:text-brand-gold transition-colors">Free Direct Booking Audit</a>
              </li>
              <li>
                <a href="/about-hospitality-marketing-agency" className="hover:text-brand-gold transition-colors">About Growguest</a>
              </li>
              <li>
                <a href="/contact-hospitality-marketing-agency" className="hover:text-brand-gold transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Hospitality Insights & Blog */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 tracking-wide">Hospitality SEO Guides</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/hospitality-digital-marketing-blog" className="text-brand-gold font-medium hover:underline flex items-center">
                  Blog Index <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </li>
              <li>
                <a href="/blog/google-business-profile-seo-homestays-resorts" className="hover:text-brand-gold transition-colors line-clamp-1">
                  Google Business Profile SEO
                </a>
              </li>
              <li>
                <a href="/blog/hotel-direct-booking-strategy-reduce-ota-commissions" className="hover:text-brand-gold transition-colors line-clamp-1">
                  Reduce OTA Commissions
                </a>
              </li>
              <li>
                <a href="/blog/hotel-website-conversion-rate-optimization" className="hover:text-brand-gold transition-colors line-clamp-1">
                  Website Conversion Fixes
                </a>
              </li>
              <li>
                <a href="/blog/local-seo-guide-resorts-hotels" className="hover:text-brand-gold transition-colors line-clamp-1">
                  Local SEO for Resorts
                </a>
              </li>
              <li>
                <a href="/blog/whatsapp-marketing-strategies-hotel-room-bookings" className="hover:text-brand-gold transition-colors line-clamp-1">
                  WhatsApp Booking Strategies
                </a>
              </li>
              <li>
                <a href="/blog/hotel-reputation-management-google-reviews" className="hover:text-brand-gold transition-colors line-clamp-1">
                  Google Reviews Reputation
                </a>
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
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">XML Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
