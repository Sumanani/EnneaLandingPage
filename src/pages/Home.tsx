import BookDemoCard from "../components/BookDemoCard";
import CoreValuesSection from "../components/CoreValuesSection";
import HeroSection from "../components/HeroSection";
import MissionSection from "../components/MissionSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";

function Home() {
  return (
    <>
      <HeroSection />
      <MissionSection />
      <div className="bg-gradient-to-b from-transparent to-[#c4f0fe] flex flex-col items-center justify-center">
        <CoreValuesSection />
        <ServicesSection />
        <TestimonialsSection />
      </div>
      <BookDemoCard />
    </>
  );
}

export default Home;
