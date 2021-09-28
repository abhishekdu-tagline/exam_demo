import React, { useState } from "react";
import useForm from "../containers/useFrom";
import validate from "../../utils/fromValidation";

export const Signup = () => {
  // Create initial State
  // const [user, setUser] = useState({});
  const { handleChange, handleSubmit, userData, errors } = useForm(validate);

  return (
    <>
      <h4> user Registration </h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name...."
          value={userData.name || ""}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Enter Email...."
          value={userData.email || ""}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          name="password"
          placeholder="Enter Password...."
          value={userData.password || ""}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        {errors.password && <p>{errors.password}</p>}
        <input
          type="role"
          name="role"
          placeholder="Enter Role...."
          value={userData.role || ""}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        {errors.role && <p>{errors.role}</p>}
        <button>Register</button>
      </form>
    </>
  );
};
