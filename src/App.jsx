import Hero from './components/Hero';
import Integrations from './components/Integrations';
import Features from './components/Features';
import Footer from './components/Footer';
import ParticlesBg from "./components/ParticlesBg";
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';

function App() {
  return (
    <div className="bg-primary min-h-screen overflow-x-hidden scrollbar-hide">
      <ParticlesBg />
      <img
        src="/glow.svg"
        alt="background glow"
        className="absolute top-0 left-1/2 -translate-x-1/2 z-0 opacity-30 blur-3xl"
      />
      <Hero />
      <Integrations />
      <Features />
      <UseCases />
      <Testimonials />
      <CtaSection />
      <Footer />
    </div>
  );
}

export default App;
