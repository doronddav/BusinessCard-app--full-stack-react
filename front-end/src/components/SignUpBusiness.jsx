import { useState } from "react";

const SignUpBusiness = () => {
  const [bisUsers, setBisUsers] = useState({
    email: "",
    name: "",
    password: "",
    isBusinessAccount: true,
  });
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
      if (response.ok) console.log(response);
      else {
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
      <h1>sign up bussiness</h1>
      <form onSubmit={handleSubmitForm}>
        <div className="form-floating mb-3">
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
            type="name"
            name="name"
            className="form-control"
            id="floatingName"
            placeholder="name"
            onChange={handleChangeName}
          />
          <label htmlFor="floatingName">User Name</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            onChange={handleChangePassword}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default SignUpBusiness;
