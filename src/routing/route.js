import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForgotPsssword from "../component/auth/ForgotPsssword";
import Login from "../component/auth/Login";
import { Signup } from "../component/auth/Signup";
import Student from "./Student";
import Teacher from "./Teacher";

const Routes = () => {
  //   const getUserData = localStorage.getItem("user");
  //   console.log("getUserData", getUserData);

  const state = useSelector((state) => state.examReducer.loginUser.data);
  console.log("Redux Data is", state);

  //   console.log("Redux State", state.loginUser.data.data.role);
  //   const {
  //     loginUser: { data },
  //   } = state || {};

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/forgot_password" component={ForgotPsssword} />
          {/* {getUserData !== null && getUserData === "teacher" ? (
            <Teacher />
          ) : (
            <Student />
          )} */}

          {state?.role === "student" && <Student />}
          {state?.role === "teacher" && <Teacher />}
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
