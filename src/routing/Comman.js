import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../component/auth/Login";
import { Signup } from "../component/auth/Signup";

const Comman = () => {
  return (
    <>
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
    </>
  );
};

export default Comman;
