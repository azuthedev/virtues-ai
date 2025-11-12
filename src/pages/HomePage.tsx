import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Solution />
      <Benefits />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}
