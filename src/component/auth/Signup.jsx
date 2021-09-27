import React, { useState } from "react";
import useForm from "../containers/useFrom";
import validate from "../../utils/fromValidation";
export const Signup = () => {
  // Create initial State
  // const [user, setUser] = useState({});
  const { handleChange, handleSubmit, userData, errors } = useForm(validate);

  // Create OnChange Functions
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   // const name = e.target.name;
  //   // const value = e.target.value;
  //   console.log("Name and Value is", name, value);
  //   setUser({ ...user, [name]: value });
  // };
  // console.log("User Object is", user);

  // const addUser = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await axios.post(
  //       "https://nodejsexamination.herokuapp.com/users/SignUp/",
  //       user,
  //       {
  //         headers: headers,
  //       }
  //     );
  //     console.log("data is added", res.data);
  //   } catch (err) {
  //     console.log("API not called because of error", err);
  //   }
  // };
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
