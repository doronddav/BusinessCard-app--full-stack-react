import React from "react";

const DeleteCard = ({ card }) => {
  const handleDelete = async (e) => {
    const cardToDelete = card._id;
    //console.log(cardToDelete);
    const getUserData = JSON.parse(localStorage.getItem("data")).data;
    const { token } = getUserData;

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json", token: token },
      body: JSON.stringify(),
    };
    try {
      const response = await fetch(
        ` http://localhost:8000/cards/deleteone?cardid=${cardToDelete}`,
        requestOptions
      );
      if (response.ok) console.log(response);
      else {
        console.log(response.json());
      }
    } catch (err) {
      console.log("!!!!", err);
    }
  };

  return (
    <button id={card.id} onClick={handleDelete}>
      x
    </button>
  );
};

export default DeleteCard;
