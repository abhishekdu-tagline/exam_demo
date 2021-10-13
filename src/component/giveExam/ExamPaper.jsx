import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { giveExams } from "../../redux/actions/studentAction";

const ExamPaper = () => {
  const [giveExam, setGiveExam] = useState({});
  const [currentIndex, setCurrentIndex] = useState(
    localStorage.getItem("index") || 0
  );

  // const [examArray, setExamArray] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);

  const { id } = useParams() || {};
  console.log("selected Exam id is " + id);

  const dispatch = useDispatch();
  //// useEffect for SuffleExam

  useEffect(() => {
    console.log("Current Index: " + currentIndex);

    localStorage.setItem("index", currentIndex);
  }, [currentIndex]);

  // const getIndex = JSON.parse(localStorage.getItem("index"));
  // console.log("Current Index fetch from local storage", getIndex);
  // setCurrentIndex(getIndex);

  /// useEffect for Add Data in Exam Array
  // useEffect(() => {
  //   console.log("useEffect call for set Exam Array");
  //   if (isChecked === true) {
  //     if (examArray.length !== 7) {
  //       setExamArray([...examArray, giveExam]);
  //     }
  //   }
  // }, [giveExam]);
  // console.log("Exam Array is", examArray);

  // const suffleExams = (examArray) => {
  //   for (let i = examArray.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = examArray[i];
  //     examArray[i] = examArray[j];
  //     examArray[j] = temp;
  //   }
  //   return examArray;
  // };

  const examData = JSON.parse(localStorage.getItem("exam")) || [];
  console.log("Exam Data is", examData);

  // console.log("Suffle Exam Question is", suffleExamQuestions);

  const handleChange = (e, id) => {
    // setIsChecked(true);
    // console.log("Exam Array is inside handleChange", examArray);
    // const newObj = { ...giveExam, question: id, answer: e.target.value };
    // setGiveExam(newObj);
  };

  const increaseIndex = () => {
    const getIndex = JSON.parse(localStorage.getItem("index"));
    console.log("getIndex is", getIndex);
    setCurrentIndex(getIndex + 1);
  };

  return (
    <>
      <h4>Exam Paper </h4>
      {examData.map((item, index) => {
        if (index === currentIndex) {
          if (currentIndex <= examData.length - 1) {
            return (
              <div key={item._id}>
                <lable> Question </lable> <br />
                <h4>{item.question}</h4> <br /> <br />
                <label>Option</label>
                {item.options.map((option, index) => {
                  return (
                    <div>
                      <input
                        type="radio"
                        name="answer"
                        value={option}
                        onChange={(e) => {
                          handleChange(e, item._id);
                        }}
                      />{" "}
                      &nbsp;&nbsp;
                      <span key={index}>{option}</span>
                    </div>
                  );
                })}
                <br />
                {currentIndex === examData.length - 1 ? (
                  <button type="button">Finish Exam</button>
                ) : (
                  <button type="button" onClick={increaseIndex}>
                    {" "}
                    Next
                  </button>
                )}
              </div>
            );
          }
        }
      })}
    </>
  );
};

export default ExamPaper;
