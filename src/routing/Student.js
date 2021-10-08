import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { StudentExam } from "../component/giveExam/StudentExam";

const Student = () => {
  // console.log("Student Component is called");
  return (
    <>
      {" "}
      STUDENT
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/student_exam">Exams</Link>
            </li>
          </ul>
        </nav>

        <Route path="/student_exam" component={StudentExam} />
      </div>
    </>
  );
};

export default Student;
