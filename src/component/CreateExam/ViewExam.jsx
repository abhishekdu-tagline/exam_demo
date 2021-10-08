import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExams, viewExams } from "../../redux/actions/action";

const ViewExam = () => {
  const state = useSelector((state) => state.examReducer.viewExams);
  console.log("Redux State Data  in ViewExam", state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(viewExams());
  }, []);
  return (
    <>
      ViewExam Component
      <table border="1">
        <thead>
          <tr>
            <th>Subject Name</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map((exams) => {
            return (
              <tr key={exams._id}>
                <td>{exams.subjectName}</td>
                <td>{exams.notes}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteExams(exams._id))}
                  >
                    Delete Exam
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

export default ViewExam;
