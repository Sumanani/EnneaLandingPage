import logo from "../assets/images/logo.png";

interface Props {
  company: string;
  reviewer: string;
  reviewText: string;
  reviewDescription: string;
}

const CarouselCard = ({
  company,
  reviewer,
  reviewText,
  reviewDescription,
}: Props) => {
  return (
    <div className="card bg-base-100 shadow-xl mx-0 ml-3 lg:mx-36">
      <div className="card-body md:px-16 py-10">
        <div className="flex justify-start items-center">
          <img className="w-[50px]" src={logo} alt="logo" />
          <div className="px-3">
            <h2 className="card-title text-lg sm:text-xl">{company}</h2>
            <p>{reviewer}</p>
          </div>
        </div>
        <p className="font-semibold mt-3 sm:text-lg">{reviewText}</p>
        <p className="text-base sm:text-lg">{reviewDescription}</p>
        <div className="card-actions">
          <a href="#" className="btn btn-youtube">
            Watch on Youtube
          </a>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
