import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStudentProfile,
  onChangeStudent,
  updateStudentProfile,
} from "../../redux/actions/studentAction";

const StudentProfile = () => {
  const [isEditable, setIsEditable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStudentProfile());
  }, []);
  const state = useSelector((state) => state.studentExamReducer.studentProfile);
  //   console.log("Student Profile Detail is", state);

  const editProfile = () => {
    setIsEditable(true);
  };
  const updateProfile = () => {
    setIsEditable(false);
    dispatch(updateStudentProfile(state));
  };

  return (
    <>
      <h4>Student Profile </h4> <br /> <br />
      <from>
        <label> Name</label> :- &nbsp;
        {isEditable ? (
          <>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={(e) => dispatch(onChangeStudent(e.target.value))}
            />
            <button
              type="button"
              onClick={() => {
                setIsEditable(false);
              }}
            >
              cancel
            </button>
          </>
        ) : (
          <>
            <span> {state.name}</span>
            <button type="button" onClick={editProfile}>
              Edit
            </button>
          </>
        )}{" "}
        <br /> <br />
        <label>Email Address</label> :- &nbsp;
        {state.email} <br /> <br />
        <label>Role</label> :- &nbsp;
        {state.role} <br /> <br />
        {isEditable ? (
          <button type="button" onClick={updateProfile}>
            Update Profile
          </button>
        ) : (
          ""
        )}
      </from>
    </>
  );
};

export default StudentProfile;
