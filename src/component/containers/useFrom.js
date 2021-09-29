import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginAction, signupAction } from "../../redux/actions/action";

const useForm = (validate) => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  // const [isSubmit, setisSubmit] = useState(false);

  let history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  // useEffect(() => {
  //   if (Object.keys(state).length === 0 && isSubmit) {
  //     console.log("useEffect is called");
  //     dispatch(loginAction(userData, history));
  //   }
  // }, [errors]);

  /// Check Validations.
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(userData));
    // console.log("Error Object is", errors);
    // dispatch(signupAction(userData));
  };

  /// Check Login Validation Method
  const handleLogin = (e, login) => {
    console.log("login is called", login);
    e.preventDefault();
    setErrors(validate(userData, login));
    dispatch(loginAction(userData, history));
  };
  console.log("Error Object is outside of function ", errors);

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
