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
