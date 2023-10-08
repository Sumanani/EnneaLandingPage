import career from "../assets/images/career/career.png";

const Career = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container w-full max-w-[1240px] my-8 md:my-12 gap-20 flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-slate-500 font-semibold">Be a part of our team!</p>
          <h1 className="heading-primary mt-0 text-2xl">
            Join Us. We are Hiring !
          </h1>
          <img
            className="lg:hidden self-center my-8 w-full max-w-[500px]"
            src={career}
            alt="career image"
          />
          <p className="heading-career">Why Ennea ?</p>
          <p className="text-lg">
            Ennea Solutions Private Limited is a technology enabled
            pharmaceutical solutions enterprise, focused to enhance and aid the
            value chain of global pharma companies to the last mile. We are a
            Hyderabad based firm, driven by well experienced and focused
            individuals, who are leaders in their fields.
          </p>
          <p className="text-lg mt-4">
            The company helps in addressing some of the key questions industry
            leaders face today like relative importance of sales force coverage
            versus sales force capabilities, addressing revenue loss of 1
            million USD a day due to information delay, capabilities
            differentiating the leaders of tomorrow, which will be ‘tickets to
            play’ and edge required to establish undisputed leadership in this
            important market.
          </p>
        </div>
        <img
          className="hidden lg:flex max-w-[500px]"
          src={career}
          alt="career image"
        />
      </div>
    </div>
  );
};

export default Career;
