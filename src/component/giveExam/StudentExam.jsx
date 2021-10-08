import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { viewStudentExams } from "../../redux/actions/studentAction";

export const StudentExam = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewStudentExams());
  }, []);

  return <>Student Exam Component</>;
};
