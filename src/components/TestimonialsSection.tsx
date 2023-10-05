import CarouselCard from "./CarouselCard";

const TestimonialsSection = () => {
  return (
    <div className="container md:p-0 my-8 md:mt-12 md:mb-20">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <CarouselCard
            company="Pragati Pharma"
            reviewer="Mr. Ramesh, Khammam"
            reviewText="Regular ordering feature is saving lots of time."
            reviewDescription="Valuedimedi application has increased my productivity from seeing offers to maintaining invoices by using valuemedi application i am saved by maintaining lots of paperwork everything is managed by application."
          />
          <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="bg-transparent btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="bg-transparent btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <CarouselCard
            company="A TO Z Medicals"
            reviewer="Mr. Anzi Reddy, Khammam"
            reviewText="Regular ordering feature is saving lots of time."
            reviewDescription="Customer support staff are really very good. They hear my concerns carefully and with patients. They help us very politely and resolve all our issues, the service is very much proficient and prompt."
          />
          <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="bg-transparent btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="bg-transparent btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <CarouselCard
            company="Sri Vasavi Medical"
            reviewer="Smt Bhawani, Khammam"
            reviewText="స్టాక్ నిర్వహణ ఫీచర్ అద్భుతమైనది"
            reviewDescription="డిస్ట్రిబ్యూటర్‌గా, నేను వివిధ తయారీదారుల నుండి స్టాక్‌ను కొనుగోలు చేస్తున్నాను మరియు వివిధ రిటైలర్‌లకు విక్రయిస్తున్నాను. మొత్తం ప్రక్రియ అవాంతరాలు లేకుండా మరియు ప్రాంప్ట్          "
          />
          <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="bg-transparent btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="bg-transparent btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <CarouselCard
            company="Chigrupati Bros. Medical"
            reviewer="Mr. Nageshwar Rao, Khammam"
            reviewText="सूची प्रबंधन और चालान-प्रक्रिया सुविधाएँ मेरा समय बचाती हैं"
            reviewDescription="ऑर्डर देने और इन्वेंट्री के प्रबंधन के लिए सर्वश्रेष्ठ ऐप। इसने मुझे तनाव मुक्त किया है और मेरे व्यवसाय में कई गुना सुधार किया है।"
          />
          <div className="hidden absolute md:flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="bg-transparent btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="bg-transparent btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
