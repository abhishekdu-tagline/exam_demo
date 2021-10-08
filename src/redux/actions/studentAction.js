import axios from "axios";
import { EXAMS } from "../constaints/constaint";

const token = localStorage.getItem("jwt");
console.log(token);

const examHeaders = {
  "Content-Type": "application/json",
  "access-token": token,
};

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
