import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import validate from "../../utils/fromValidation";
import useForm from "../containers/useFrom";

const Login = () => {
  // const [userLogin, setuserLogin] = useState({});
  const { handleChange, handleLogin, userData, errors, state } =
    useForm(validate);
  // console.log("Redux Store Data is in Login Component", state);
  //   const { handleChange } = useFrom();
  console.log("Error in login Page", errors);
  return (
    <>
      <h4> Login </h4>
      <form
        onSubmit={(e) => {
          handleLogin(e, "login", "");
        }}
      >
        <input
          autoComplete="off"
          type="email"
          name="email"
          value={userData.email || ""}
          placeholder="Enter Email...."
          onChange={handleChange}
        />{" "}
        <br /> <br />
        {errors.email && <p>{errors.email}</p>}
        <input
          autoComplete="off"
          type="password"
          name="password"
          value={userData.password || ""}
          placeholder="Enter Password...."
          onChange={handleChange}
        />{" "}
        <br /> <br />
        {errors.password && <p>{errors.password}</p>}
        <br /> <br />
        <button>Login</button>
        <div>
          Don't have an account yet?{" "}
          <p>
            {" "}
            <Link to="/signup"> Sign up now! </Link> <br />
            <Link to="/forgot_password"> Forgot Password? </Link>{" "}
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
