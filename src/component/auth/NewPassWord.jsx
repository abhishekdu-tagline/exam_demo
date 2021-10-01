import React from "react";
import { useLocation, useParams, useRouteMatch } from "react-router";
import validate from "../../utils/fromValidation";
import useForm from "../containers/useFrom";

export const NewPassWord = () => {
  const { handleChange, handleSetPassword, userData } = useForm(validate);

  //   let match = useRouteMatch("/newPassword");
  //   console.log("Match is", match);

  return (
    <>
      <h4> Set New PassWord</h4>
      <form onSubmit={handleSetPassword}>
        <input
          type="password"
          name="Password"
          value={userData.Password || ""}
          onChange={handleChange}
          placeholder="Enter your password"
        />{" "}
        <br /> <br />
        <input
          type="password"
          name="ConfirmPassword"
          onChange={handleChange}
          value={userData.ConfirmPassword || ""}
          placeholder="Enter confirm password"
        />{" "}
        <br /> <br />
        <button>Set New PassWord</button>
      </form>
    </>
  );
};
