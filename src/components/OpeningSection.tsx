import CareerCard from "./CareerCard";

const OpeningSection = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="container max-w-[1240px] my-8 md:my-12">
        <h2 className="heading-career">Openings at Ennea</h2>
        <div className="mt-8">
          <h3 className="heading-career">IT</h3>
          <div className="career-card-grid">
            <CareerCard
              title="Fullstack Developer"
              description="We are looking for a fullstack engineer with a startup and engineering
            mindset who brings fresh ideas from various areas including building
            enterprise applications scale, low latency and high throughput,
            large-scale platform design..."
              experience="3"
            />
            <CareerCard
              title="Frontend Developer"
              description="We are looking for a frontend engineer with a startup and engineering 
              mindset who brings fresh ideas from various areas including building enterprise 
              applications.Worked on responsive web apps using Material UI, Bootstrap/..."
              experience="3"
            />
            <CareerCard
              title="Backend Developer"
              description="We are looking for a backend engineer with a startup and engineering 
              mindset who brings fresh ideas from various areas including building enterprise 
              applications..."
              experience="3"
            />
            <CareerCard
              title="Fresher"
              description="We at Ennea Solutions focus on solutions to make pharmaceutical 
              distribution faster and efficient. The company is based in Hyderabad, Telangana.
               We are looking to recruit SDE Interns with..."
              experience="0"
            />
            <CareerCard
              title="Product Analyst"
              description="We are looking for a Product Analyst focus on solutions to make 
              pharmaceutical distribution faster and efficient. The company is based in 
              Hyderabad, Telangana."
              experience="0"
            />
          </div>
          <div className="mt-8">
            <h3 className="heading-career">Sales</h3>
            <div className="career-card-grid">
              <CareerCard
                title="Sales Manager"
                description="We are seeking an innovative sales manager for a Pharmaceutical Technology Company in Hyderabad, 
              to promote our company's brand and services, pan India. In this role, you will be optimizing our sales 
              strategies, as well..."
                experience="4"
              />
              <CareerCard
                title="Sales Executive"
                description="We are looking to hire an experienced technology sales executive for a Pharmaceutical Technology 
              Company to help drive company sales – Saas sales, across India. In this position, you will be involved in 
              developing sales strategies..."
                experience="2"
              />
            </div>
          </div>
          <div className="mt-8">
            <h3 className="heading-career">Support</h3>
            <div className="career-card-grid">
              <CareerCard
                title="Tech Support"
                description="The pharmaceutical industry has been successful in creating life-saving drugs. But efficient 
              sourcing, transportation, and storage are important for ensuring that the products reach the end customer 
              in a timely manner"
                experience="0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningSection;
