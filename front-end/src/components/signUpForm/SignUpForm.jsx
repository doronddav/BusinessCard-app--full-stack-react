import React from "react";
import Button from "../button/button";

const SignUpForm = ({
  title,
  handleSubmitForm,
  handleChangeEmail,
  handleChangeName,
  handleChangePassword,
}) => {
  return (
    <div className="my-4 form-container ">
      <form onSubmit={handleSubmitForm}>
        <h3>{title}</h3>
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

export default SignUpForm;
