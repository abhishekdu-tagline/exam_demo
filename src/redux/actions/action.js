import axios from "axios";
import {
  CREATE_EXAM,
  DELETE_EXAM,
  EXAM_DETAILS,
  EXAM_ONCHANGE,
  LOGIN,
  SIGNUP,
  VIEW_EXAM,
} from "../constaints/constaint";
const headers = {
  "Content-Type": "application/json",
};
const token = localStorage.getItem("jwt");
console.log(token);

const examHeaders = {
  "Content-Type": "application/json",
  "access-token": token,
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
          history.push("/student_exam");
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

//// Create Exam API call
export const createExamActions = (examObj) => {
  console.log("Action is called");

  console.log("Exam Object is action ", examObj);
  return async (dispatch) => {
    try {
      const result = await axios.post(
        "https://nodejsexamination.herokuapp.com/dashboard/Teachers/Exam",
        examObj,
        {
          headers: examHeaders,
        }
      );
      console.log("response of create exam API", result);

      if (result.data.statusCode === 200) {
        localStorage.setItem("createExam", result.data.data);
        dispatch({
          type: CREATE_EXAM,
          payload: examObj,
        });
      }
    } catch (err) {
      console.log("Error in Create exam API", err);
    }
  };
};

////  View Exam API call
export const viewExams = () => {
  return async (dispatch) => {
    try {
      const exams = await axios.get(
        "https://nodejsexamination.herokuapp.com/dashboard/Teachers/viewExam",
        {
          headers: examHeaders,
        }
      );

      console.log("Fetch Exams from server", exams);

      if (exams.data.statusCode === 200) {
        console.log("action successful");
        dispatch({
          type: VIEW_EXAM,
          payload: exams.data.data,
        });
      }
    } catch (err) {
      console.log("Fetchig Error", err);
    }
  };
};

/// Delete Exam API calls

export const deleteExams = (id) => {
  console.log("selected deleted id is " + id);
  return async (dispatch) => {
    try {
      const deleteResponse = await axios.delete(
        `https://nodejsexamination.herokuapp.com/dashboard/Teachers/deleteExam?id=${id}`,
        {
          headers: examHeaders,
        }
      );
      console.log("Delete Response is", deleteResponse);

      dispatch({
        type: DELETE_EXAM,
        payload: id,
      });
    } catch (err) {
      console.log("Delete API is not called", err);
    }
  };
};

//// Exam Detail

export const examDetails = (id, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://nodejsexamination.herokuapp.com/dashboard/Teachers/examDetail?id=${id}`,
        {
          headers: examHeaders,
        }
      );

      console.log(
        "Exam Details are List of Question and Answer",
        res.data.data
      );

      if (res.data.statusCode === 200) {
        console.log("action successful");
        dispatch({
          type: EXAM_DETAILS,
          payload: res.data.data,
        });
        history.push(`/edit_exam/${id}`);
      }
    } catch (err) {
      console.log("Fetchig Error", err);
    }
  };
};

/// onChange

export const onChangeExam = (value, index) => {
  console.log("Value is " + value + " and index is " + index);
  return {
    type: EXAM_ONCHANGE,
    inputValue: value,
    index: index,
  };
};
