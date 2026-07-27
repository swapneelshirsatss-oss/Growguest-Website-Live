import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="mb-6 w-48">
              <Logo className="w-full h-auto" theme="dark" />
            </div>
            <p className="text-sm">
              Digital Growth for Hospitality. Helping hotels, homestays, and restaurants in Nagpur increase direct bookings and escape heavy OTA commissions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Service Area</h4>
            <ul className="space-y-2 text-sm">
              <li>Nagpur, Maharashtra</li>
              <li>Wardha Road</li>
              <li>Dharampeth</li>
              <li>Civil Lines</li>
              <li>Sadar</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">WhatsApp Business: +91 98765 43210</a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-gold transition-colors">hello@growguest.com</a>
              </li>
              <li className="pt-2">
                <a href="#" className="inline-flex items-center text-brand-gold hover:text-brand-gold-light transition-colors">
                  View our Google Business Profile &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Growguest. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
