import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./updateCard.style.scss";

import { useNavigate } from "react-router-dom";

const UpdateBtn = ({ card }) => {
  const { cardToUpdate, setCardToUpdate } = useContext(UserContext);
  const navigate = useNavigate();

  const handleUpdateCard = () => {
    setCardToUpdate(card);
   
    navigate("/update");
  };

  return <button onClick={handleUpdateCard}>Edit</button>;
};

export default UpdateBtn;
