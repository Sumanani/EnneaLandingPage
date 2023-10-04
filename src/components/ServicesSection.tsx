import analytics from "../assets/images/analytics.svg";
import payment from "../assets/images/payment.svg";
import order from "../assets/images/order.svg";
import tracking from "../assets/images/tracking.svg";
import supplychain from "../assets/images/supplychain.png";
import logistic from "../assets/images/logistic.svg";

import Card from "./Card";

const ServicesSection = () => {
  return (
    <div className="container max-w-[1240px] my-8 md:my-12">
      <h2 className="section-heading">Our Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap:5 lg:gap-10 mb-80">
        <Card
          imageSrc={analytics}
          altText="analytics logo"
          cardTitle="Data Analytics"
        />
        <Card
          imageSrc={analytics}
          altText="supplychain logo"
          cardTitle="Supply Chain Strategy"
        />
        <Card
          imageSrc={order}
          altText="order management logo"
          cardTitle="Order Management"
        />
        <Card
          imageSrc={logistic}
          altText="logistics logo"
          cardTitle="Logistic Management"
        />
        <Card
          imageSrc={tracking}
          altText="performance management logo"
          cardTitle="Performance Management"
        />
        <Card
          imageSrc={payment}
          altText="payment integration logo"
          cardTitle="Payment Integration"
        />
      </div>
    </div>
  );
};

export default ServicesSection;
