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
      if (userRes.data.statusCode === 200) {
        localStorage.setItem("user", userRes.data.data.role);
        localStorage.setItem("jwt", userRes.data.data.token);
        dispatch({
          type: LOGIN,
          payload: userRes.data.data,
        });
        if (userRes.data.data.role === "teacher") {
          alert("Login successful");
          history.push("/create_exam");
        } else {
          history.push("/kuch-hai");
        }
      } else {
        alert("Login failed");
      }
    } catch (err) {
      console.log("Error in API calling ", err);
    }
  };
};

/// Forgot Password Action Method

export const forgotPasswordAction = (email, history) => {
  console.log("Email address is", email);
  return async () => {
    try {
      const res = await axios.post(
        "https://nodejsexamination.herokuapp.com/users/ForgotPassword",
        email,
        {
          headers: headers,
        }
      );
      // history.push("/");
      console.log("Forgot PassWord API response", res);
    } catch (err) {
      console.log("Forgot Password Failed", err);
    }
  };
};

//// Forgot Password and Gernet New Password API is called
export const setNewPassword = (data, searchToken, history) => {
  console.log("set New Password Action is called");
  return async () => {
    try {
      const res = await axios.post(
        `https://nodejsexamination.herokuapp.com/users/ForgotPassword/Verify${searchToken}`,
        data,
        {
          headers: headers,
        }
      );
      // console.log("Set New Password Responce is", res);
      if (res.data.statusCode === 200) {
        alert("ForgotPassword successful");
        history.push("/");
      } else {
        alert("Invalid Email");
      }
    } catch (err) {
      console.log("Error: ", err);
    }
  };
};

export const createExamActions = (examObj) => {
  console.log("Action is called");
  return async (dispatch) => {
    try {
      const result = await axios.post(
        "https://nodejsexamination.herokuapp.com/dashboard/Teachers/Exam",
        examObj,
        {
          headers: headers,
        }
      );
      console.log("response of create exam API", result);
    } catch (err) {
      console.log("Error in Create exam API", err);
    }
  };
};
