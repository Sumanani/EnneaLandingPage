import BookDemoCard from "../BookDemoCard";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import NavBar from "../Navbar";
import ValueMediDescription from "../ValueMediDescription";
import ValueMediServicesContainer from "../ValueMediServicesContainer";
import mobile from "../../assets/images/valuemedi/mobile-screen.png";

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
