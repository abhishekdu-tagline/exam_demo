import React from "react";
import CreateExam from "../component/CreateExam/CreateExam";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ViewExam from "../component/CreateExam/ViewExam";
import ViewStudent from "../component/CreateExam/ViewStudent";

const Teacher = () => {
  return (
    <>
      <h4> teacher component</h4>

      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create_exam">CreateExam</Link>
            </li>
            <li>
              <Link to="/view_exam">View Exam</Link>
            </li>
            <li>
              <Link to="/view_student">View Students</Link>
            </li>
          </ul>
        </nav>

        <Route path="/create_exam" component={CreateExam} />
        <Route path="/view_exam" component={ViewExam} />
        <Route path="/view_student" component={ViewStudent} />
      </div>
    </>
  );
};

export default Teacher;
