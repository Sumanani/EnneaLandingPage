const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-transparent to-[#c4f0fe] flex flex-col justify-center items-center">
      <h2 className="heading-primary m-8 text-xl">GET IN TOUCH WITH US</h2>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-full flex flex-col md:flex-row gap-3">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered input-info w-full max-w-xs"
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered input-info w-full max-w-xs"
          />
          <input
            type="number"
            placeholder="Phone"
            className="input input-bordered input-info w-full max-w-xs"
          />
        </div>
        <textarea
          placeholder="Message"
          className="input md:mt-6 input-bordered input-info w-full h-24 md:h-40 max-w-xs md:max-w-lg"
        />
      </div>
      <button className="btn btn-primary m-8 bg-blue-400 border-0 text-white px-5">
        Send
      </button>
    </div>
  );
};

export default ContactUs;
