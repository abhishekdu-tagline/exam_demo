import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExamPaper from "../component/giveExam/ExamPaper";
import { StudentExam } from "../component/giveExam/StudentExam";
import StudentProfile from "../component/giveExam/StudentProfile";

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
            <li>
              <Link to="/view_profile">View Profile</Link>
            </li>
          </ul>
        </nav>

        <Route path="/student_exam" component={StudentExam} />
        <Route path="/view_profile" component={StudentProfile} />
        <Route path="/view_paper/:id" component={ExamPaper} />
      </div>
    </>
  );
};

export default Student;
