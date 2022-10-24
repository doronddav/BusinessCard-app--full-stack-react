import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import SignUpForm from "../signUpForm/SignUpForm";

const SignUpBusiness = () => {
  const [bisUsers, setBisUsers] = useState({
    email: "",
    name: "",
    password: "",
    isBusinessAccount: true,
  });
  const navigate = useNavigate();

  let title = "SIGN UP BUSINESS";
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    //validation

    //fetch to server
    const userData = { bisUsers };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData.bisUsers),
    };
    try {
      const response = await fetch(
        "http://localhost:8000/customers/register",
        requestOptions
      );
      if (response.ok) {
        navigate("signin");
      } else {
        console.log("user already registered");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleChangeEmail = (e) => {
    setBisUsers({ ...bisUsers, email: e.target.value });
  };
  const handleChangeName = (e) => {
    setBisUsers({ ...bisUsers, name: e.target.value });
  };
  const handleChangePassword = (e) => {
    setBisUsers({ ...bisUsers, password: e.target.value });
  };

  return (
    <>
      <SignUpForm
        title={title}
        handleSubmitForm={handleSubmitForm}
        handleChangeEmail={handleChangeEmail}
        handleChangeName={handleChangeName}
        handleChangePassword={handleChangePassword}
      />
    </>
  );
};

export default SignUpBusiness;
