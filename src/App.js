import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Routing from "./routing/Comman";
import Teacher from "./routing/Teacher";
import Student from "./routing/Student";
import Comman from "./routing/Comman";
import Login from "./component/auth/Login";
import { Signup } from "./component/auth/Signup";
import CreateExam from "./component/CreateExam/CreateExam";
function App() {
  const getUserData = localStorage.getItem("user");
  console.log("getUserData", getUserData);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/create_exam" component={CreateExam} />

          {getUserData === "teacher" ? <Teacher /> : <Student />}
          {/* <Route path="/create_exam" component={CreateExam} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
