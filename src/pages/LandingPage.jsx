import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ComponentsSection from '../components/landing/ComponentsSection';
import ValuesSection from '../components/landing/ValuesSection';

function LandingPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          'linear-gradient(180deg, #F0EEFC 0%, #F5EEFA 50%, #FBE7EF 100%)',
      }}
    >
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ComponentsSection />
        <ValuesSection />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
