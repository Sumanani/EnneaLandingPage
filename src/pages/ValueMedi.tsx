import mobile from "../assets/images/valuemedi/mobile-screen.png";
import BookDemoCard from "../components/BookDemoCard";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavBar from "../components/Navbar";
import ValueMediDescription from "../components/ValueMediDescription";
import ValueMediServicesContainer from "../components/ValueMediServicesContainer";

const ValueMedi = () => {
  return (
    <div>
      <NavBar backgroundColor="#e3f0d3" />
      <HeroSection
        heading="ValueMedi"
        description="Rearchitecting The Pharmaceutical Supply Chain"
        imageSrc={mobile}
      />
      <ValueMediDescription />
      <ValueMediServicesContainer />
      <BookDemoCard heading="Try ValueMedi Now!" bgGreen />
      <Footer />
    </div>
  );
};

export default ValueMedi;
