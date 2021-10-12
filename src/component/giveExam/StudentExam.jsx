import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  showExamPaper,
  viewStudentExams,
} from "../../redux/actions/studentAction";

export const StudentExam = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewStudentExams());
  }, []);

  const state = useSelector(
    (state) => state.studentExamReducer.studentExamsList
  );

  const history = useHistory();
  // console.log("Student Exam Component State is " + JSON.stringify(state));

  return (
    <>
      <h4> Exams List</h4>

      <table border="1">
        <thead>
          <tr>
            <td>Subject Name</td>
            <td>Teacher Email</td>
            <td>Notes</td>
            <td>Result</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.subjectName}</td>
                <td>{item.email}</td>
                <td>
                  {item.notes.map((note, index) => {
                    return <p key={index}> {note}</p>;
                  })}
                </td>
                <td></td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(showExamPaper(item._id, history));
                    }}
                  >
                    View Exam Paper
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
