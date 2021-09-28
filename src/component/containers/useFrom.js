import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, signupAction } from "../../redux/actions/action";

const useForm = (validate) => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  // let err = {};
  let history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  // console.log("Redux Store Data is", state);

  useEffect(() => {
    // console.log("Error Length is inside UseEffect", Object.keys(errors).length);
  }, [errors]);

  /// Check Validations.
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(userData));
    // console.log("Error Object is", errors);
    dispatch(signupAction(userData));
  };
  // console.log("Error Object is outside of function ", errors);

  /// Check Login Validation Method
  const handleLogin = (e) => {
    e.preventDefault();
    setErrors(validate(userData));
    dispatch(loginAction(userData, history));
  };

  //// handleChange function
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  // console.log("State Variable  Data  outside fileHandleChange", values);

  return { handleChange, handleSubmit, handleLogin, userData, errors, state };
};

export default useForm;
