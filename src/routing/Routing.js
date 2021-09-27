import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../component/auth/Login";
import { Signup } from "../component/auth/Signup";
import CreateExam from "../component/CreateExam/CreateExam";

const Routing = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/create_exam" component={CreateExam} />
        </Switch>
      </Router>
    </>
  );
};

export default Routing;
