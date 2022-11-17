import { useLocation } from "react-router-dom";
import DeleteCard from "../deleteCard/DeleteCard";
import UpdateBtn from "../updateBtn/UpdateBtn";
import "./Card.scss";

const Card = ({ card }) => {
  const location = useLocation();
  console.log(location);
  return (
    <div className=" d-flex justify-content-center  flex-column">
      <div className="card col mt-3 card-border ">
        <img
          src={card.businessImage}
          className="img-size rounded card-img-top mt-4 rounded-circle  "
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
        </div>
      </div>
      {console.log(location)}
      {location.pathname === "/customerPage" && (
        <span>
          <DeleteCard card={card} />
          <UpdateBtn card={card} />
        </span>
      )}
    </div>
  );
};

export default Card;
