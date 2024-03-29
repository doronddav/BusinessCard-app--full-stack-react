import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "reactstrap";
import CardForm from "../cardForm/CardForm";
import axios from 'axios';


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

    const requestMethods = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: getUserData.token,
      },
      body: JSON.stringify(card.bisCard),
    };
    

    try {
      // const response = await fetch(
      //   "http://localhost:8000/cards/create",
      //   requestMethods
      //   );

      const response = await axios.post("http://localhost:8000/cards/create",card.bisCard,{
        headers:{
          token: getUserData.token
        }
      })

        navigate('/customerPage')
      
    } catch (err) {
     console.log(err.response.data.result);
     alert(err.response.data.result);
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
  const handleChangeImg = (e) => {
    setBisCard({ ...bisCard, businessImage: e.target.value });
  };

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
