import React, { useEffect,useContext } from "react";
import { UserContext } from "../../context/UserContext";

const DeleteCard = ({ card, del }) => {
  const { allCards, setAllCards } = useContext(UserContext);
  
  
  return <button onClick={()=>del(card)}>x</button>;
};

export default DeleteCard;
