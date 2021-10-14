import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { onChangeExam } from "../../redux/actions/action";

const EditExam = () => {
  const { id } = useParams();
  const state =
    useSelector((state) => state.examReducer.examDetail.questions) || [];
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  // const handleChange = (e, id) => {
  //   const { name, value } = e.target;
  //   console.log("value and id is", e.target.value, id);
  //   const updateArray = examData.map((data, index) => {
  //     if (index === id) {
  //       return { ...data, question: value };
  //     } else {
  //       return data;
  //     }
  //   });
  //   console.log("Updated Array is", updateArray);
  // };

  return (
    <>
      <h4>Exam Details</h4>

      <form>
        {state.map((item, index) => {
          if (index === currentIndex) {
            return (
              <div>
                <label>Question {index + 1} : - </label>
                <input
                  type="text"
                  value={item.question}
                  name="question"
                  onChange={(e) => {
                    dispatch(onChangeExam(e.target.value, index));
                  }}
                />{" "}
                <br />
                <br />
                {item.options.map((option, index) => {
                  return (
                    <>
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        checked={option === item.answer}
                      />{" "}
                      <input type="text" value={option} name="options" /> <br />
                      <br />
                    </>
                  );
                })}
                <button
                  type="button"
                  onClick={() => {
                    setCurrentIndex(currentIndex + 1);
                  }}
                >
                  Next
                </button>
              </div>
            );
          }
        })}
      </form>
    </>
  );
};

export default EditExam;
