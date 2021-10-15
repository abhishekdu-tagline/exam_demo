import React from "react";
import { useSelector } from "react-redux";

const StudentResult = () => {
  const state = useSelector((state) => state.examReducer.studentResult) || [];
  console.log("Student Result are", state);
  return (
    <>
      {state.map((data) => {
        return (
          <>
            <h4>{data.name} Result</h4>
            Name : - {data.name} <br />
            Email : - {data.email} <br />
            <h4> Result </h4>
            <table
              border="1"
              style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <thead>
                <th>Subject Name</th>
                <th>Rank</th>
                <th>Score</th>
                <th>Result Status</th>
              </thead>
              <tbody>
                {data.Result.map((result, index) => {
                  return (
                    <tr key={index}>
                      <td>{result.subjectName}</td>
                      <td>{result.rank}</td>
                      <td>{result.score}</td>
                      <td>{result.resultStatus}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        );
      })}
    </>
  );
};

export default StudentResult;
