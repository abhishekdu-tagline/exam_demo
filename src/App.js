import "./App.css";
import Routes from "./routing/route";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "./redux/constaints/constaint";
import Com from "./Com";

function App() {
  // const getUserData = localStorage.getItem("user");
  // console.log("getUserData", getUserData);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("App.js UseEffect called");
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
