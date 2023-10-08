import ValueMediServices from "./ValueMediServices";
import analytics from "../assets/images/valuemedi/vm-analytics.png";
import logistics from "../assets/images/valuemedi/vm-logistic.png";
import payment from "../assets/images/valuemedi/vm-payment.png";
import performance from "../assets/images/valuemedi/vm-performace.png";
import planning from "../assets/images/valuemedi/vm-planning.png";
import supplychain from "../assets/images/valuemedi/vm-supplychain.png";
import order from "../assets/images/valuemedi/vm-order.png";

const ValueMediServicesContainer = () => {
  return (
    <>
      <div className="flex bg-gradient-to-t from-[#e3f0d3] flex-col justify-center items-center">
        <h2 className="heading-primary mt-16">ValueMedi Services</h2>
        <ValueMediServices
          heading="Order Management"
          description="Our order management system helps to improve your order-to-cash cycle, which is how your business receives,process,manages,and completes customer experience. Set a reorder point and get updates on your stock level to avoid out-of-stock situations."
          imageUrl={order}
        />
        <ValueMediServices
          heading="Supply Chain Strategy"
          description="Monitor the status of packages after shipment and keep your customer updated. Create more satisfied customers with our order management system."
          imageUrl={supplychain}
          isReverse
        />
        <ValueMediServices
          heading="Payment Integration"
          description="Add your business account to start receiving online payments right away. Switch to easy, secure, convenient mode of accepting payments from your customers at the lowest rates with option of automatic Payment reconciliation process."
          imageUrl={payment}
        />
        <ValueMediServices
          heading="Logistics Management"
          description="Integrating with WMS across to assist in managing the inventory, pickup and movement. Smart solution which can help easy flow of information to all the partners involved movement of products. AI based dynamic routing algorithms."
          imageUrl={logistics}
          isReverse
        />
        <ValueMediServices
          heading="Data Analytics"
          description="Our Data Analytics platform can help identify savings opportunities or opportunities to increase the profitability. In the world where the intelligent use of data is competitive advantage, those that aren't equipped to analyze their data should establish a path to do so."
          imageUrl={analytics}
        />
        <ValueMediServices
          heading="Performance Management"
          description="Setting up two way communication with respect to performance target and accountability.Identify your most profitable item, or monitor purchase and sales order trends to make informed decisions and stay ahead of the competitors."
          imageUrl={performance}
          isReverse
        />
        <ValueMediServices
          heading="Order Planning"
          description="Forecasts and experience to estimate demand for various items at various points in the supply chain. In addition to making estimations, take part in inventory optimization ensure the available of products needed, and monitor the difference between forecast and actual sales."
          imageUrl={planning}
        />
      </div>
    </>
  );
};

export default ValueMediServicesContainer;
