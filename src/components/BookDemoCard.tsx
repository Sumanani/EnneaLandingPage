const BookDemoCard = () => {
  return (
    <div className="flex justify-center items-center my-32">
      <div className="container max-w-[1120px]">
        <div className="card bg-gradient-to-tl from-transparent to-[#c4f0fe] bg-base-100 md:py-12 shadow-xl">
          <div className="card-body">
            <p className="text-center text-2xl font-medium">Join Us</p>
            <p className="text-center text-lg md:text-xl">
              Book your demo and experience the best!
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-custom rounded-md">Book a Demo</button>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default BookDemoCard;
