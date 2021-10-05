import React, { useEffect, useState } from "react";

const useCreateExam = () => {
  /// Subject State Object
  let obj = {};
  const [examObj, setExamObj] = useState({});
  const [questionArray, setQuestionArray] = useState([]); ///// add 15 Question this Array
  const [subjectName, setSubjectName] = useState();
  const [questions, setQuestions] = useState();
  const [answers, setAnswer] = useState();
  const [options, setOptions] = useState([]);
  const [optionsObj, setOptionsObj] = useState({
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
  });
  const [count, setCount] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (questionArray.length > 0) {
      setExamObj({ ...examObj, subjectName, question: questionArray });
    }
  }, [questionArray]);

  console.log("Exam Object is", examObj);

  /// Handle Subject
  const handleSubject = (e) => {
    setSubjectName(e.target.value);
  };

  //// handle Question
  const handleQuestion = (e) => {
    setQuestions(e.target.value);
  };

  //// Handle Option
  const handleOptions = (e) => {
    const { name, value } = e.target;
    // console.log("Question: " + name + value);
    setOptionsObj({ ...optionsObj, [name]: value });
  };

  //// Handle Answer
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };
  // console.log("Handle Answer is " + answers);

  //// Add Main State
  const addQuestion = (e) => {
    e.preventDefault();
    const convertArray = Object.values(optionsObj);
    setOptions([...options, optionsObj]);

    if (currentIndex <= questionArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCount(count + 1);
      console.log(`Current Index inside if`, currentIndex);
      return questionArray[currentIndex + 1];
    } else {
      setCurrentIndex(currentIndex + 1);
      // console.log("Current index in else  " + currentIndex);
      setQuestionArray([
        ...questionArray,
        { questions, answers, options: convertArray },
      ]);
    }

    setQuestions("");
    setAnswer("");
    setOptionsObj({ optionA: "", optionB: "", optionC: "", optionD: "" });
    setCount(count + 1);
    // setCurrentIndex(currentIndex + 1);
  };

  // console.log(
  //   "Show Current Index Data is in Next Button ",
  //   questionArray[currentIndex]
  // );
  // console.log("Question Array is ", questionArray);
  // console.log("Current index in next of outSite of function : " + currentIndex);

  // console.log("Option Array is", options);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(questionArray.length);
    } else {
      setCurrentIndex(currentIndex - 1);
      setCount(count - 1);
      return questionArray[currentIndex];
    }
  };

  console.log(
    "Question Array is afther click PrevButton ===== ",
    questionArray[currentIndex]
  );
  // console.log("Current Index is ", currentIndex);

  return [
    handleSubject,
    handleQuestion,
    handleOptions,
    handleAnswer,
    addQuestion,
    handlePrev,
    optionsObj,
    count,
    questions,
    answers,
    questionArray,
    currentIndex,
  ];
};

export default useCreateExam;
