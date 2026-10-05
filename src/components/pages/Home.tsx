import SEO from '../SEO';
import Hero from '../Hero';
import Partners from '../Partners';
import ImpactMetrics from '../ImpactMetrics';
import Problem from '../Problem';
import DirectConnectionEngine from '../DirectConnectionEngine';
import WhatsAppOtaBypass from '../WhatsAppOtaBypass';
import Services from '../Services';
import Proof from '../Proof';
import OtaCalculator from '../OtaCalculator';
import Process from '../Process';
import Testimonials from '../Testimonials';
import AuditForm from '../AuditForm';

export default function Home() {
  return (
    <main className="flex-grow">
      <SEO
        title="GrowGuest — Boutique Digital Marketing & Direct Booking Consultancy"
        description="Stop 18–25% OTA commission bleed. GrowGuest helps boutique hotels, resorts, and homestays build high-converting direct booking pipelines through Google Business Profile optimization, website CRO, and WhatsApp automation."
        keywords="hospitality digital marketing agency, digital marketing for resorts, digital marketing for homestays, direct booking vs OTA commission, Google Business Profile for hotels, local SEO for homestays Nagpur, hotel website booking conversion, restaurant local SEO Nagpur, reduce OTA dependence"
        canonicalUrl="https://growguest.in/"
      />
      <Hero />
      <Partners />
      <ImpactMetrics />
      <Problem />
      <DirectConnectionEngine />
      <WhatsAppOtaBypass />
      <Services />
      <Proof />
      <OtaCalculator />
      <Process />
      <Testimonials />
      <AuditForm />
    </main>
  );
}
