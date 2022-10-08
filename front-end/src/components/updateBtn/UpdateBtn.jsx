import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

import { useNavigate } from "react-router-dom";

const UpdateBtn = ({ card }) => {
  const { cardToUpdate, setCardToUpdate } = useContext(UserContext);
  const navigate = useNavigate();
  console.log(card);

  const handleUpdateCard = () => {
    setCardToUpdate(card);
    navigate("/update");
  };

  return <button onClick={handleUpdateCard}>Edit card</button>;
};

export default UpdateBtn;
