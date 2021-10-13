import axios from "axios";
import {
  EXAMS,
  ONCHANGE,
  STUDENT_PROFILE,
  UPDATE_PROFILE,
  VIEW_EXAM_PAPER,
} from "../constaints/constaint";

const token = localStorage.getItem("jwt");
console.log(token);

const examHeaders = {
  "Content-Type": "application/json",
  "access-token": token,
};

/// View Student Exam
export const viewStudentExams = () => {
  return async (dispatch) => {
    try {
      console.log("API is called");
      const res = await axios.get(
        "https://nodejsexamination.herokuapp.com/student/studentExam",
        {
          headers: examHeaders,
        }
      );

      console.log("Student Exam API Response is :-", res.data.data);

      if (res.data.statusCode === 200) {
        dispatch({
          type: EXAMS,
          payload: res.data.data,
        });
      }
    } catch (err) {
      console.log("Student Exam API Error is :-", err);
    }
  };
};

/// View Student Profile
export const getStudentProfile = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        "https://nodejsexamination.herokuapp.com/student/getStudentDetail",
        {
          headers: examHeaders,
        }
      );

      console.log("Student API is called ", res.data.data);
      if (res.data.statusCode === 200) {
        dispatch({
          type: STUDENT_PROFILE,
          payload: res.data.data,
        });
      }
    } catch (err) {
      console.log("Error in Student API call", err);
    }
  };
};

/// Detect OnChange events from to update Profile
export const onChangeStudent = (data) => {
  console.log("Data is onChange Student", data);
  return {
    type: ONCHANGE,
    payload: data,
  };
};

/// update Student Profile
export const updateStudentProfile = (studentObj) => {
  console.log("Action Method is called and Data is", studentObj);
  return async (dispatch) => {
    try {
      const res = await axios.put(
        "https://nodejsexamination.herokuapp.com/student/studentProfile",
        studentObj,
        {
          headers: examHeaders,
        }
      );

      console.log("Student Update Profile API call successful", res);
      if (res.data.statusCode === 200) {
        if (res.data.message) {
          alert(res.data.message);
          dispatch({
            type: UPDATE_PROFILE,
            payload: studentObj,
          });
        }
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.log("API call failed", err);
    }
  };
};

/// Show Exam Paper

export const showExamPaper = (id, history) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://nodejsexamination.herokuapp.com/student/examPaper?id=${id}`,

        {
          headers: examHeaders,
        }
      );
      console.log("Display Exam Pepar Response is", res.data.data);
      if (res.data.statusCode === 200) {
        localStorage.setItem("exam", JSON.stringify(res.data.data));
        // localStorage.setItem("index", res.data.data[0]);
        dispatch({
          type: VIEW_EXAM_PAPER,
          payload: res.data.data,
        });
        history.push(`/view_paper/${id}`);
      }

      if (res.data.statusCode === 500) {
        alert(res.data.message);
      }
    } catch (err) {
      console.log("API Calling Error is : -", err);
    }
  };
};

/// Give Exam API is called

export const giveExams = (id, examsData) => {
  return async (dispatch) => {
    console.log("API call");
    try {
      const res = await axios.post(
        `https://nodejsexamination.herokuapp.com/student/giveExam?id=${id}`,
        examsData,
        {
          headers: examHeaders,
        }
      );
      console.log("Exam API call Sucessfully", res);
    } catch (err) {
      console.log("API Calling Error is : -", err);
    }
  };
};
