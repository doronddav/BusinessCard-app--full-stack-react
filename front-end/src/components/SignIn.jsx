import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function SignIn() {
  //Signin
  const navigate = useNavigate();
  const { setIsLogdeIn } = useContext(UserContext);
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleChangePassword = (e) => {
    setUserData({ ...userData, password: e.target.value });
  };
  const handleChangeEmail = (e) => {
    setUserData({ ...userData, email: e.target.value });
  };
  const handleSubmitSignInForm = async (e) => {
    e.preventDefault();
    //validation

    //fetch
    const loginData = { userData };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData.userData),
    };
    try {
      const response = await fetch(
        "http://localhost:8000/customers/signin",
        requestOptions
      );
      //console.log(response.json());
      const resJson = await response.json();
      console.log(resJson);

      localStorage.setItem("data", JSON.stringify(resJson));

      //localStorage.setItem("mydog", "Nala");
      console.log(resJson);
      setIsLogdeIn(true);
      resJson.data.isBusinessAccount === true
        ? navigate("/customerPage")
        : navigate("/Home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="my-5">
      <form onSubmit={handleSubmitSignInForm}>
        <div className="form-floating ">
          <input
            type="email"
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={handleChangeEmail}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            name="password"
            className="form-control"
            id="floatingPassword"
            placeholder="password"
            onChange={handleChangePassword}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
