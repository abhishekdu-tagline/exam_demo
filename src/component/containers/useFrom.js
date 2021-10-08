import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAction,
  setNewPassword,
  signupAction,
} from "../../redux/actions/action";

const useForm = (validate) => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  // const [isSubmit, setisSubmit] = useState(false);
  const location = useLocation();
  // console.log("location is", location);
  const searchToken = location.search;
  // console.log("search Token is", searchToken);

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
    dispatch(signupAction(userData));
  };

  /// Check Login Validation Method
  const handleLogin = (e, login) => {
    // console.log("login is called", login);
    e.preventDefault();
    setErrors(validate(userData, login));
    dispatch(loginAction(userData, history));
  };
  // console.log("Error Object is outside of function ", errors);

  const handleSetPassword = (e) => {
    e.preventDefault();

    setErrors(validate(userData));
    dispatch(setNewPassword(userData, searchToken, history));
  };

  //// handleChange function
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  console.log("Handle Change Event is", userData);

  return {
    handleChange,
    handleSubmit,
    handleLogin,
    handleSetPassword,
    userData,
    errors,
    state,
  };
};

export default useForm;
