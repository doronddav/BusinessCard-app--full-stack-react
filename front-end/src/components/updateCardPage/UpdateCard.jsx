import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import CardForm from "../cardForm/CardForm";

const UpdateCard = () => {
  const { cardToUpdate, setCardToUpdate } = useContext(UserContext);
  console.log(cardToUpdate);

  const userData = JSON.parse(localStorage.getItem("data")).data;
  const { token } = userData;
  const { userId } = userData;
  const navigate = useNavigate();
  const [bisCard, setBisCard] = useState(cardToUpdate);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json", token: token },
      body: JSON.stringify(bisCard),
    };
    console.log(bisCard);
    try {
      const res = await fetch(
        `http://localhost:8000/cards/updatecard?cardid=${cardToUpdate._id}`,
        requestOptions
      );
      navigate("/customerPage");
      setCardToUpdate("");
      console.log(res);
    } catch (error) {
      console.log(error);
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
      <CardForm
        handleUpdate={handleUpdate}
        handleChangeName={handleChangeName}
        handleChangeDescription={handleChangeDescription}
        handleChangeAdress={handleChangeAdress}
        handleChangephone={handleChangephone}
        handleChangeImg={handleChangeImg}
      ></CardForm>
    </div>
  );
};

export default UpdateCard;
