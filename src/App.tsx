import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ValueProps from './components/ValueProps';
import Process from './components/Process';
import Founder from './components/Founder';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Closer from './components/Closer';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ValueProps />
        <Process />
        <Founder />
        <Testimonials />
        <FAQ />
        <Closer />
      </main>
      <Footer />
    </div>
  );
}
