import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { SevasSection } from "@/components/home/SevasSection";
import { AboutPreview } from "@/components/home/AboutPreview";
import { EventsPreview } from "@/components/home/EventsPreview";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <SevasSection />
      <AboutPreview />
      <EventsPreview />
      <Footer />
    </main>
  );
};

export default Index;
