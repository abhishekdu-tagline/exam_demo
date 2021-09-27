import { useEffect, useState } from "react";
import axios from "axios";

const useForm = (validate) => {
  const [userData, setUserData] = useState({});
  const [errors, setErrors] = useState({});
  const headers = {
    "Content-Type": "application/json",
  };
  //   const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      handleUserRegistration();
    }
  }, [errors]);

  const handleUserRegistration = async () => {
    try {
      const res = await axios.post(
        "https://nodejsexamination.herokuapp.com/users/SignUp/",
        userData,
        {
          headers: headers,
        }
      );
      console.log("data is added", res.data);
    } catch (err) {
      console.log("API not called because of error", err);
    }

    // console.log("Successfully added");
  };

  /// Check Validations.
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(userData));
  };
  console.log("SetError return Error Object", errors);

  //// handleChange function
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  // console.log("State Variable  Data  outside fileHandleChange", values);

  return { handleChange, handleSubmit, userData, errors };
};

export default useForm;
