import React from "react";
import { Route } from "react-router";
import CreateExam from "../component/CreateExam/CreateExam";

const Teacher = () => {
  return (
    <div>
      <Route path="/create_exam" component={CreateExam} />
    </div>
  );
};

export default Teacher;
