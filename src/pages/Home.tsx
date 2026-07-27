import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Services from '../components/Services';
import ValueEquation from '../components/ValueEquation';
import Partners from '../components/Partners';
import Proof from '../components/Proof';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import AuditForm from '../components/AuditForm';

export default function Home() {
  return (
    <main className="flex-grow">
      <SEO
        title="Growguest | Hospitality Digital Marketing Agency Nagpur"
        description="Growguest helps hotels, resorts, and homestays maximize direct bookings, improve Google Maps ranking, and eliminate heavy OTA commissions."
        canonicalUrl="https://growguest.com/"
      />
      <Hero />
      <Problem />
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
