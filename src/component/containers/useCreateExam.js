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

  useEffect(() => {
    if (questionArray.length > 0) {
      setExamObj({ ...examObj, subjectName, question: questionArray });
    }
  }, [questionArray]);

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
    obj[name] = value;
    // console.log("obj", obj);
    let optionArray = Object.values(obj);
    // console.log("Obj Object Convert array ", optionArray);
    if (optionArray.length === 4) {
      setOptions([optionArray]);
    }
  };
  // console.log("option object is array", options);

  //// Handle Answer
  const handleAnswer = (e) => {
    setAnswer(e.target.value);
  };
  // console.log("Handle Answer is " + answers);

  //// Add Main State
  const addQuestion = (e) => {
    e.preventDefault();
    setQuestionArray([...questionArray, { questions, answers, options }]);
    // console.log("Subject Name is", subjectName);
  };
  console.log("Question Array is ", questionArray);
  console.log("Exam Obj is", examObj);

  return [
    handleSubject,
    handleQuestion,
    handleOptions,
    handleAnswer,
    addQuestion,
  ];
};

export default useCreateExam;
