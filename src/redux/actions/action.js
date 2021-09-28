import axios from "axios";
import { LOGIN, SIGNUP } from "../constaints/constaint";
const headers = {
  "Content-Type": "application/json",
};
//// Signup Actions //
export const signupAction = (data) => {
  console.log("SignUp Action is called and Data is", data);

  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://nodejsexamination.herokuapp.com/users/SignUp/",
        data,
        {
          headers: headers,
        }
      );
      console.log("data is added", res.data);
      dispatch({
        type: SIGNUP,
        payload: res.data,
      });
    } catch (err) {
      console.log("Sign Up API is not called because of error", err);
    }
  };
};

/// Login Action //

export const loginAction = (data, history) => {
  console.log("login Action is called and Data is", data, history);
  return async (dispatch) => {
    try {
      const userRes = await axios.post(
        "https://nodejsexamination.herokuapp.com/users/Login",
        data,
        {
          headers: headers,
        }
      );
      console.log("Response is UserLogin", userRes);
      localStorage.setItem("user", userRes.data.data.role);
      localStorage.setItem("jwt", userRes.data.data.token);
      //   console.log("Login APi is called", localStorage.getItem("jwt"));

      dispatch({
        type: LOGIN,
        payload: userRes.data,
      });
      if (userRes.data.statusCode === 200) {
        if (userRes.data.data.role === "teacher") {
          history.push("/create_exam");
        } else {
          history.push("/kuch-hai");
        }
        alert("Login successful");
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.log("Error in API calling ", err);
    }
  };
};
