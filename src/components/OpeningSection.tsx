import logo from "../assets/images/ennea-logo.png";
import CareerCard from "./CareerCard";

const OpeningSection = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="container max-w-[1240px] my-8 md:my-12">
        <h2 className="heading-career">Openings at Ennea</h2>
        <div className="mt-8">
          <h3 className="heading-career">IT</h3>
          <CareerCard
            title="Fullstack Developer"
            description="We are looking for a fullstack engineer with a startup and engineering
          mindset who brings fresh ideas from various areas including building
          enterprise applications scale, low latency and high throughput,
          large-scale platform design..."
            experience="3"
          />
        </div>
      </div>
    </div>
  );
};

export default OpeningSection;
