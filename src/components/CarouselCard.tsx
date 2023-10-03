import logo from "../assets/images/logo.png";

const CarouselCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl lg:mx-36">
      <div className="card-body">
        <div className="flex justify-start items-center">
          <img className="w-[50px]" src={logo} alt="logo" />
          <div>
            <h2 className="card-title">A TO Z Medicals</h2>
            <p>Mr. Anzi Reddy, Khammam</p>
          </div>
        </div>
        <p>Regular ordering feature is saving lots of time.</p>
        <p>
          Customer support staff are really very good. They hear my concerns
          carefully and with patients. They help us very politely and resolve
          all our issues, the service is very much proficient and prompt.
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
