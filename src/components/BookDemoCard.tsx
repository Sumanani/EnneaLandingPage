const BookDemoCard = () => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <p className="text-center">Join Us</p>
        <p className="text-center">Book your demo and experience the best!</p>
        <div className="card-actions justify-center">
          <button className="btn btn-custom">Book a Demo</button>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl"></div>
    </div>
  );
};

export default BookDemoCard;
