import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Button from "../button/button";

const CardForm = ({
  handleCreateCard,
  handleUpdate,
  handleChangeName,
  handleChangeDescription,
  handleChangeAdress,
  handleChangephone,
  handleChangeImg,
}) => {
  const { cardToUpdate } = useContext(UserContext);
  console.log(cardToUpdate);
  return (
    <form onSubmit={cardToUpdate === "" ? handleCreateCard : handleUpdate}>
      <div className="form-floating mb-3">
        <input
          type="businessName"
          name="businessName"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={handleChangeName}
        />
        <label htmlFor="floatingInput">
          {cardToUpdate === "" ? "Business Name" : cardToUpdate.businessName}
        </label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="businessDescription"
          name="businessDescription"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={handleChangeDescription}
        />
        <label htmlFor="floatingInput">
          {cardToUpdate === ""
            ? "Business Description"
            : cardToUpdate.businessDescription}
        </label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="businessAddress"
          name="businessAddress"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={handleChangeAdress}
        />
        <label htmlFor="floatingInput">
          {cardToUpdate === ""
            ? "Business Adress"
            : cardToUpdate.businessAddress}
        </label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="businessPhone"
          name="businessPhone"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={handleChangephone}
        />
        <label htmlFor="floatingInput">
          {cardToUpdate === "" ? "Business Phone" : cardToUpdate.businessPhone}
        </label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="businessImage"
          name="businessImage"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={handleChangeImg}
        />
        <label htmlFor="floatingInput">
          {cardToUpdate === "" ? "Business Image" : cardToUpdate.businessImage}
        </label>
      </div>

      <Button>{cardToUpdate === "" ? "Create card" : "Update Card"}</Button>
    </form>
  );
};

export default CardForm;
