import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import CardForm from "../cardForm/CardForm";

const UpdateCard = () => {
  const handleUpdate = () => {};
  return (
    <div>
      <CardForm handleUpdate={handleUpdate}></CardForm>
    </div>
  );
};

export default UpdateCard;
