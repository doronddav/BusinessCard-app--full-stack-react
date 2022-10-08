import DeleteCard from "../deleteCard/DeleteCard";
import UpdateBtn from "../updateBtn/UpdateBtn";
import "./Card.scss";

const Card = ({ card }) => {
  return (
    <div className="card col my-2 mx-2 ">
      <DeleteCard card={card} />
      <img
        src={card.businessImage}
        className="img-size rounded card-img-top "
        alt="BussinessImage"
      />
      <div className="card-body">
        <h5 className="card-title">{card.businessName}</h5>
        <p className="card-text">
          <b> {card.businessPhone}</b>
        </p>
        <p className="card-text">{card.businessDescription}</p>
        <p className="card-text">
          <small className="text-muted">{card.businessAddress}</small>
        </p>
        <UpdateBtn card={card} />
      </div>
    </div>
  );
};

export default Card;
