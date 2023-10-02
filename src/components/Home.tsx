import hero from "../assets/images/hero.svg";

const Home = () => {
  return (
    <div className="px-8 bg-gradient-to-b from-[#c4f0fe] to-transparent flex justify-center">
      <div className="container mt-8 grid grid-cols-1 md:grid-cols-2 place-items-center gap-2">
        <div className="flex-column text-center md:text-left justify-center items-center">
          <h1 className="text-6xl lg:text-8xl font-bold">Ennea Solutions</h1>
          <p className="text-xl md:text-2xl mt-4 font-medium text-slate-600">
            Rearchitecting the supply chain
          </p>
          <button className="btn-primary">Get Started</button>
        </div>
        <img className="w-full" src={hero} alt="hero image" />
      </div>
    </div>
  );
};

export default Home;
