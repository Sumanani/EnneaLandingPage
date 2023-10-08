import hero from "../assets/images/home/hero.svg";

interface Props {
  heading?: string;
  imageSrc?: string;
  description?: string;
}

const HeroSection = ({
  heading = "Ennea Solutions",
  imageSrc = hero,
  description = "Rearchitecting The Supply Chain",
}: Props) => {
  const isHome = heading === "Ennea Solutions";
  const bgClassName = isHome
    ? `min-h-[90vh] bg-gradient-to-b from-[#c4f0fe] flex justify-center items-center`
    : `min-h-[90vh] bg-gradient-to-b from-[#e3f0d3] flex justify-center items-center`;

  return (
    <div className={bgClassName}>
      <div className="container my-16 lg:my-36  max-w-[1240px] grid grid-cols-1 md:grid-cols-2 place-items-center lg:gap-10">
        <div className="flex-column text-center md:text-left justify-center items-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            {heading}
          </h1>
          <p className="text-xl md:text-2xl mt-4 font-medium text-slate-600">
            {description}
          </p>
          {isHome ? (
            <button className="btn-custom">Know More</button>
          ) : (
            <div className="flex flex-row justify-center md:justify-start items-center">
              <button className="btn-custom-square mr-4 lg:mr-8">
                Download App
              </button>
              <button className="btn-custom-square">Website</button>
            </div>
          )}
        </div>
        <img className="w-full mt-10 lg:mt-0" src={imageSrc} alt="hero image" />
      </div>
    </div>
  );
};

export default HeroSection;
