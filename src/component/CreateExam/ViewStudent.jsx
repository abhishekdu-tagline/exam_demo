import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { showStudent, studentResults } from "../../redux/actions/action";
const ViewStudent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("useEffect() called");
    dispatch(showStudent());
  }, []);

  const state = useSelector((state) => state.examReducer.studentData);
  console.log("State is " + JSON.stringify(state));

  const history = useHistory();

  const [searchTerm, setSearchTerm] = useState();
  return (
    <>
      <h4>View Student to give Example</h4>
      <input
        type="text"
        name="search"
        placeholder="Search...."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />{" "}
      <br />
      <br />
      <br />
      <table border="1" style={{ marginLeft: "auto", marginRight: "auto" }}>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>status</th>
            <th>Student Detail</th>
          </tr>
        </thead>
        <tbody>
          {state
            .filter(
              (data) =>
                data.name.includes(searchTerm) ||
                data.email.includes(searchTerm)
            )
            .map((student, index) => {
              return (
                <>
                  <tr>
                    <td>{student.name}</td>
                    <td>{student.email}</td>
                    <td>{student.status}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => {
                          dispatch(studentResults(student._id, history));
                        }}
                      >
                        View Student Exam
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ViewStudent;
