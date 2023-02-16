import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../button/button";
import SignUpForm from "../signUpForm/SignUpForm";
import "./sign-up.style.scss";

const SignUp = () => {
  const [users, setUsers] = useState({
    email: "",
    name: "",
    password: "",
    isBusinessAccount: false,
  });
  const navigate = useNavigate();
  let title = "SIGN UP";
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    //validation

    //fetch to server
    const userData = { users };

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData.users),
    };
    try {
      const response = await fetch(
        "http://localhost:8000/customers/register",
        requestOptions
      );
      if (response.ok) {
        toast("sign up succesfully");
        navigate("/signin");
      }
    } catch (err) {
      
    }
  };

  const handleChangeEmail = (e) => {
    setUsers({ ...users, email: e.target.value });
  };
  const handleChangeName = (e) => {
    setUsers({ ...users, name: e.target.value });
  };
  const handleChangePassword = (e) => {
    setUsers({ ...users, password: e.target.value });
  };

  return (
    <SignUpForm
      title={title}
      handleSubmitForm={handleSubmitForm}
      handleChangeEmail={handleChangeEmail}
      handleChangeName={handleChangeName}
      handleChangePassword={handleChangePassword}
    />
  );
};

export default SignUp;
