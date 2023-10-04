import hero from "../assets/images/hero.svg";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#c4f0fe] to-transparent flex justify-center">
      <div className="container my-12 lg:my-36 max-w-[1240px] grid grid-cols-1 md:grid-cols-2 place-items-center lg:gap-10">
        <div className="flex-column text-center md:text-left justify-center items-center">
          <h1 className="text-6xl lg:text-8xl font-bold">Ennea Solutions</h1>
          <p className="text-xl md:text-2xl mt-4 font-medium text-slate-600">
            Rearchitecting the supply chain
          </p>
          <button className="btn-custom">Get Started</button>
        </div>
        <img className="w-full mt-6 lg:mt-0" src={hero} alt="hero image" />
      </div>
    </div>
  );
};

export default Home;
