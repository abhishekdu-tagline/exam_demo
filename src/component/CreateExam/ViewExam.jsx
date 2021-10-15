import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  deleteExams,
  examDetails,
  viewExams,
} from "../../redux/actions/action";

const ViewExam = () => {
  const [subjectName, setSubjectName] = useState();
  const [isEditable, setisEditable] = useState(false);

  const state = useSelector((state) => state.examReducer.viewExams);
  console.log("Redux State Data  in ViewExam", state);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(viewExams());
  }, []);

  const editableMode = (id) => {
    console.log("id is editable", id);
    // const data = state.map((item, index) => {
    //   if (index === id) {
    //     setisEditable(true);
    //   }
    // });
  };
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
          {state.map((exams, index) => {
            return (
              <tr key={exams._id}>
                {isEditable ? (
                  <input
                    type="text"
                    name="subjectName"
                    value={exams.subjectName}
                  />
                ) : (
                  <td>{exams.subjectName}</td>
                )}
                <td>{exams.notes}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteExams(exams._id))}
                  >
                    Delete Exam
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      history.push(`/edit_exam/${exams._id}`);
                    }}
                  >
                    Edit Exam
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
