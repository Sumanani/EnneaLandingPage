import CareerMain from "../components/CareerMain";
import OpeningSection from "../components/OpeningSection";

const Career = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-transparent to-[#c4f0fe] justify-center items-center">
      <CareerMain />
      <OpeningSection />
    </div>
  );
};

export default Career;
