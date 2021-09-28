import React from "react";
import validate from "../../utils/fromValidation";
import useForm from "../containers/useFrom";

const CreateExam = () => {
  const { state } = useForm(validate);

  return <>Create Exam Component</>;
};

export default CreateExam;
