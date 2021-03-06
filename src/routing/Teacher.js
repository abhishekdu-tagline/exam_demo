import React from "react";
import CreateExam from "../component/CreateExam/CreateExam";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ViewExam from "../component/CreateExam/ViewExam";
import ViewStudent from "../component/CreateExam/ViewStudent";
import EditExam from "../component/CreateExam/EditExam";
import StudentResult from "../component/giveExam/StudentResult";

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
              <Link to="/view_student">View Student for Exam</Link>
            </li>
          </ul>
        </nav>

        <Route path="/create_exam" component={CreateExam} />
        <Route path="/view_exam" component={ViewExam} />
        <Route path="/view_student" component={ViewStudent} />
        <Route path="/edit_exam/:id" component={EditExam} />
        <Route path="/result/:id" component={StudentResult} />
      </div>
    </>
  );
};

export default Teacher;
