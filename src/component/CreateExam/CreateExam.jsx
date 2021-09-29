import React from "react";
import { useHistory } from "react-router";
import validate from "../../utils/fromValidation";
import useForm from "../containers/useFrom";

const CreateExam = () => {
  // const { state } = useForm(validate);
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <>
      <div>Create exam</div>
      <button onClick={handleLogout}> Logout </button>
    </>
  );
};

export default CreateExam;
