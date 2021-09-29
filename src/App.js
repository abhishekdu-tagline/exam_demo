import "./App.css";

import Teacher from "./routing/Teacher";
import Student from "./routing/Student";

import Login from "./component/auth/Login";
import { Signup } from "./component/auth/Signup";
import Routes from "./routing/route";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "./redux/constaints/constaint";

function App() {
  // const getUserData = localStorage.getItem("user");
  // console.log("getUserData", getUserData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: LOGIN,
      payload: {
        role: localStorage.getItem("user"),
        token: localStorage.getItem("jwt"),
      },
    });
  }, []);
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
