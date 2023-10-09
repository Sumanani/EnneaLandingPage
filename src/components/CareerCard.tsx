import logo from "../assets/images/ennea-logo.png";

interface Props {
  title: string;
  description: string;
  experience: string;
}

const CareerCard = ({ title, description, experience }: Props) => {
  return (
    <div className="card max-w-[350px] bg-base-100 shadow-xl">
      <div className="card-body">
        <img className="w-[50px] mb-4" src={logo} alt="ennea logo" />
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions flex-col items-end">
          <div className="mt-4 flex justify-start self-start flex-wrap items-center">
            <div className="badge-custom">Full Time</div>
            <div className="badge-custom">{`Min.${experience} yrs`}</div>
            <div className="badge-custom">OnSite</div>
          </div>
          <button className="btn">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default CareerCard;
