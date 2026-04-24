import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="page-shell">
      {/* Hero card — big rounded white container, like reference */}
      <div className="hero-card" style={{ marginBottom: 16 }}>
        <Navbar />
        <Hero />
      </div>

      {/* Marquee — on gray background */}
      <div style={{ background: 'var(--white)', borderRadius: 20, overflow: 'hidden', marginBottom: 16 }}>
        <Marquee />
      </div>

      {/* Rest of page — white sections */}
      <main>
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
