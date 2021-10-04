import React, { useEffect, useState } from "react";

const useCreateExam = () => {
  /// Subject State Object
  let obj = {};
  const [examObj, setExamObj] = useState({});
  const [questionArray, setQuestionArray] = useState([]);
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
  // console.log("Subject Value  is", subjectName);

  //// handle Question
  const handleQuestion = (e) => {
    setQuestions(e.target.value);
  };
  // console.log("Question is " + questions);

  //// Handle Option
  const handleOptions = (e) => {
    const { name, value } = e.target;
    setOptionsObj({ ...optionsObj, [name]: value });
  };
  // console.log("Option log is", optionsObj);

  //// Handle Answer
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };
  // console.log("Handle Answer is " + answers);

  //// Add Main State
  const addQuestion = (e) => {
    e.preventDefault();
    const convertArray = Object.values(optionsObj);
    // console.log("Option  Object  is =======", convertArray);
    setOptions([...options, optionsObj]);
    setQuestionArray([
      ...questionArray,
      { questions, answers, options: [convertArray] },
    ]);
    setQuestions("");
    setAnswer("");
    setOptionsObj({ optionA: "", optionB: "", optionC: "", optionD: "" });
    setCount(count + 1);
  };
  // console.log("Question Array is ", questionArray);

  // console.log("Option Array is", options);

  return [
    handleSubject,
    handleQuestion,
    handleOptions,
    handleAnswer,
    addQuestion,
    optionsObj,
    count,
    questions,
    answers,
  ];
};

export default useCreateExam;
