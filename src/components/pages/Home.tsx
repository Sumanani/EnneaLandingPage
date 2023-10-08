import BookDemoCard from "../BookDemoCard";
import CoreValuesSection from "../CoreValuesSection";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MissionSection from "../MissionSection";
import NavBar from "../Navbar";
import ServicesSection from "../ServicesSection";
import TestimonialsSection from "../TestimonialsSection";

function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <MissionSection />
      <div className="bg-gradient-to-b from-transparent to-[#c4f0fe] flex flex-col items-center justify-center">
        <CoreValuesSection />
        <ServicesSection />
        <TestimonialsSection />
      </div>
      <BookDemoCard />
      <Footer />
    </>
  );
}

export default Home;
