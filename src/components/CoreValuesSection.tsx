import experience from "../assets/images/experience.svg";
import guarantee from "../assets/images/guaranteed.svg";
import growth from "../assets/images/growth.svg";
import Card from "./Card";

const CoreValuesSection = () => {
  return (
    <div className="container max-w-[1240px] my-8 md:my-12">
      <h2 className="section-heading">Our Core Values</h2>
      <div className="grid lg:grid-cols-3 place-items-center gap:5 lg:gap-10">
        <Card
          imageSrc={experience}
          cardTitle="Experience"
          altText="experience logo"
          cardDescription="Seamless integration across multiple technologies across entire supply chain"
        />
        <Card
          cardTitle="Guarantee"
          cardDescription="With priority support and lowest turnaround time, experience and guarantee of highest quality service"
          imageSrc={guarantee}
          altText="guarantee logo"
        />
        <Card
          cardTitle="Growth"
          cardDescription="Grow your business multi-folds with tech partner like us to ensure you have the right technology to scale and monitor your business"
          imageSrc={growth}
          altText="growth logo"
        />
      </div>
    </div>
  );
};

export default CoreValuesSection;
