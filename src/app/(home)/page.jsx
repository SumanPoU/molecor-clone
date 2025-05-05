import HeroSlider from "./_components/Heroslider";
import HighlightsSection from "./_components/Highlights";
import FeaturesSection from "./_components/Feature";
import AboutSection from "./_components/About";
import WhoSection from "./_components/Who";
import CertificationsSection from "./_components/CertificationSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <HighlightsSection />
      <FeaturesSection />
      <AboutSection />
      <WhoSection />
      <CertificationsSection />
    </div>
  );
}
