interface Props {
  imageSrc: string;
  altText: string;
  cardTitle: string;
  cardDescription?: string;
}
const Card = ({ imageSrc, altText, cardTitle, cardDescription }: Props) => {
  const cardBodyClassName = cardDescription
    ? "card-body items-center lg:h-[270px] text-center"
    : "card-body items-center text-center";
  return (
    <div className="my-4 card w-full max-w-xs bg-base-100 shadow-xl">
      <figure className={cardDescription ? "px-10 pt-10" : "px-5 pt-10"}>
        <img
          src={imageSrc}
          alt={altText}
          className={
            cardDescription
              ? "rounded-xl"
              : "rounded-xl w-[280px] h-[180px] object-cover"
          }
        />
      </figure>
      <div className={cardBodyClassName}>
        <h3 className="section-sub-heading">{cardTitle}</h3>
        {cardDescription && <p className="text-lg">{cardDescription}</p>}
      </div>
    </div>
  );
};

export default Card;
