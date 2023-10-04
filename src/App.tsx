import BookDemoCard from "./components/BookDemoCard";
import CoreValuesSection from "./components/CoreValuesSection";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MissionSection from "./components/MissionSection";
import NavBar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";

function App() {
  return (
    <>
      <NavBar />
      <Home />
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

export default App;
