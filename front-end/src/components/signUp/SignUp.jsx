import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button";
import "./sign-up.style.scss";

const SignUp = () => {
  const [users, setUsers] = useState({
    email: "",
    name: "",
    password: "",
    isBusinessAccount: false,
  });
  const navigate = useNavigate();
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
        navigate("signin");
      }
    } catch (err) {
      console.log(err.message);
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
    <div className="my-4 form-container ">
      <form onSubmit={handleSubmitForm}>
        <h3>SIGN UP</h3>
        <div className="form-floating input-box ">
          <input
            type="email"
            name="email"
            className="input-size form-control my-2"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={handleChangeEmail}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating input-box">
          <input
            type="name"
            name="name"
            className="form-control my-2"
            id="floatingName"
            placeholder="name"
            onChange={handleChangeName}
          />
          <label htmlFor="floatingName">User Name</label>
        </div>
        <div className="form-floating input-box">
          <input
            type="password"
            name="password"
            className="form-control my-2"
            id="floatingPassword"
            placeholder="Password"
            onChange={handleChangePassword}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <Button buttonType="regularForm">Submit</Button>
      </form>
    </div>
  );
};

export default SignUp;
