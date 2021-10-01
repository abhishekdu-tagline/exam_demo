import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { forgotPasswordAction } from "../../redux/actions/action";

const ForgotPsssword = React.memo(() => {
  const [email, setEmail] = useState({});
  // console.log("Fprgot Password Component is rendered");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ ...email, [name]: value });
  };

  return (
    <>
      <h4>Forgot Password</h4>
      <input
        type="email"
        placeholder="Enter Email... "
        onChange={handleChange}
        name="email"
      />
      <br /> <br />
      <button
        onClick={() => {
          dispatch(forgotPasswordAction(email, history));
        }}
      >
        Send Verification Link{" "}
      </button>{" "}
      <br /> <br />
      <Link to="/"> Back Login</Link>
    </>
  );
});

export default ForgotPsssword;
