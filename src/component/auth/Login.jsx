import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Login = () => {
  const [userLogin, setuserLogin] = useState({});
  //   const { handleChange } = useFrom();
  let history = useHistory();
  const headers = {
    "Content-Type": "application/json",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserLogin({ ...userLogin, [name]: value });
  };
  console.log("userLogin object is", userLogin);

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const userRes = await axios.post(
        "https://nodejsexamination.herokuapp.com/users/Login",
        userLogin,
        {
          headers: headers,
        }
      );
      console.log("Response is UserLogin", userRes);
      localStorage.setItem("jwt", userRes.data.data.token);
      console.log("Login APi is called", localStorage.getItem("jwt"));
      history.push("/create_exam");
    } catch (err) {
      console.log("Error in API calling ", err);
    }
  };
  return (
    <>
      <h4> Login </h4>
      <form onSubmit={handleUserLogin}>
        <input
          autoComplete="off"
          type="email"
          name="email"
          value={userLogin.email || ""}
          placeholder="Enter Email...."
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <input
          autoComplete="off"
          type="password"
          name="password"
          value={userLogin.password || ""}
          placeholder="Enter Password...."
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <button>Login</button>
        <div>
          Don't have an account yet?{" "}
          <p>
            {" "}
            <Link to="/signup"> Sign up now! </Link>{" "}
          </p>
        </div>
      </form>
    </>
  );
};

export default Login;
