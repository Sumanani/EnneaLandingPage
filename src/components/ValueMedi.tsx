import HeroSection from "./HeroSection";
import NavBar from "./Navbar";
import mobile from "../assets/images/valuemedi/mobile-screen.png";
import ValueMediDescription from "./ValueMediDescription";
import Home from "./Home";

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
      <Home />
    </div>
  );
};

export default ValueMedi;
