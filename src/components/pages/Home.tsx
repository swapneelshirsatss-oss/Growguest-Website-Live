import SEO from '../SEO';
import Hero from '../Hero';
import ImpactMetrics from '../ImpactMetrics';
import Problem from '../Problem';
import DirectConnectionEngine from '../DirectConnectionEngine';
import WhatsAppOtaBypass from '../WhatsAppOtaBypass';
import OtaCalculator from '../OtaCalculator';
import Services from '../Services';
import ValueEquation from '../ValueEquation';
import Partners from '../Partners';
import Proof from '../Proof';
import Process from '../Process';
import Testimonials from '../Testimonials';
import AuditForm from '../AuditForm';

export default function Home() {
  return (
    <main className="flex-grow">
      <SEO
        title="GrowGuest — Digital Marketing Agency for Hotels & Resorts"
        description="Nagpur-based digital marketing for hotels, resorts & homestays. Cut OTA commissions and grow direct bookings with GrowGuest."
        keywords="hospitality digital marketing agency, digital marketing for resorts, digital marketing for homestays, direct booking vs OTA commission, Google Business Profile for hotels, local SEO for homestays Nagpur, hotel website booking conversion, restaurant local SEO Nagpur, reduce OTA dependence"
        canonicalUrl="https://growguest.in/"
      />
      <Hero />
      <ImpactMetrics />
      <Problem />
      <DirectConnectionEngine />
      <WhatsAppOtaBypass />
      <OtaCalculator />
      <Services />
      <ValueEquation />
      <Partners />
      <Proof />
      <Process />
      <Testimonials />
      <AuditForm />
    </main>
  );
}

