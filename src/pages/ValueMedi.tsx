import mobile from "../assets/images/valuemedi/mobile-screen.png";
import BookDemoCard from "../components/BookDemoCard";
import HeroSection from "../components/HeroSection";
import ValueMediDescription from "../components/ValueMediDescription";
import ValueMediServicesContainer from "../components/ValueMediServicesContainer";

const ValueMedi = () => {
  return (
    <div>
      <HeroSection
        heading="ValueMedi"
        description="Rearchitecting The Pharmaceutical Supply Chain"
        imageSrc={mobile}
      />
      <ValueMediDescription />
      <ValueMediServicesContainer />
      <BookDemoCard heading="Try ValueMedi Now!" bgGreen />
    </div>
  );
};

export default ValueMedi;
