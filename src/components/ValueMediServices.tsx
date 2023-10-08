import analytics from "../assets/images/valuemedi/vm-analytics.png";

interface Props {
  heading: string;
  description: string;
  imageUrl: string;
  isReverse?: boolean;
}

const ValueMediServices = ({
  heading,
  description,
  imageUrl,
  isReverse,
}: Props) => {
  const contClassName = isReverse
    ? "flex flex-col md:flex-row-reverse justify-center items-center"
    : "flex flex-col md:flex-row justify-center items-center";

  return (
    <div className="container max-w-[1240px] my-8 md:my-12">
      <div className={contClassName}>
        <div className={isReverse ? "md:ml-12 lg:ml-16" : "md:mr-12 lg:mr-16"}>
          <h3 className="section-sub-heading mb-4">{heading}</h3>
          <p className="text-lg mb-4">{description}</p>
        </div>
        <div className="card bg-base-100 flex-shrink-0 p-4 shadow-xl">
          <figure>
            <img
              className="w-[320px] h-[250px] object-cover"
              src={imageUrl}
              alt={heading}
            />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ValueMediServices;
