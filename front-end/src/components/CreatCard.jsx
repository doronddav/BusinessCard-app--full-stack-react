import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "reactstrap";
import CardForm from "./cardForm/CardForm";

function CreatCard() {
  const navigate = useNavigate();
  const getUserData = JSON.parse(localStorage.getItem("data")).data;

  const [bisCard, setBisCard] = useState({
    businessName: "",
    businessDescription: "",
    businessAddress: "",
    businessPhone: "",
    businessImage: "",
    userId: getUserData.id,
  });

  const handleCreateCard = async (e) => {
    e.preventDefault();

    const card = { bisCard };

    console.log(card.bisCard);
    const requestMethods = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: getUserData.token,
      },
      body: JSON.stringify(card.bisCard),
    };
    console.log(getUserData.token);
    try {
      const response = await fetch(
        "http://localhost:8000/cards/create",
        requestMethods
      );
      if (response.ok) navigate("/cusomerPage");
      else {
        console.log(response.json());
      }
    } catch (err) {
      console.log("!!!!", err);
    }
  };
  const handleChangeName = (e) =>
    setBisCard({ ...bisCard, businessName: e.target.value });
  const handleChangeDescription = (e) => {
    setBisCard({ ...bisCard, businessDescription: e.target.value });
  };
  const handleChangeAdress = (e) =>
    setBisCard({
      ...bisCard,
      businessAddress: e.target.value,
    });
  const handleChangephone = (e) =>
    setBisCard({ ...bisCard, businessPhone: e.target.value });
  const handleChangeImg = (e) =>
    setBisCard({ ...bisCard, businessImage: e.target.value });

  return (
    <div>
      <div className="creat-form-container">
        <CardForm
          handleCreateCard={handleCreateCard}
          handleChangeName={handleChangeName}
          handleChangeDescription={handleChangeDescription}
          handleChangeAdress={handleChangeAdress}
          handleChangephone={handleChangephone}
          handleChangeImg={handleChangeImg}
        />
        <div card-container></div>
      </div>
    </div>
  );
}

export default CreatCard;
