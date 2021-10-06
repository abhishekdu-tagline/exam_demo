import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createExamActions } from "../../redux/actions/action";

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
  const [buttonStatus, setButtonStatus] = useState();

  // const dispatch = useDispatch();
  useEffect(() => {
    if (questionArray.length > 0) {
      setExamObj({ ...examObj, subjectName, question: questionArray });
    }
  }, [questionArray]);

  const dispatch = useDispatch();

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
    setButtonStatus();
    const convertArray = Object.values(optionsObj);
    setOptions([...options, optionsObj]);

    if (currentIndex <= questionArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCount(count + 1);
      setQuestions(questionArray[currentIndex + 1]?.questions);
      setAnswer(questionArray[currentIndex + 1]?.answers);
      setOptionsObj({
        optionA: questionArray[currentIndex + 1]?.options[0],
        optionB: questionArray[currentIndex + 1]?.options[1],
        optionC: questionArray[currentIndex + 1]?.options[2],
        optionD: questionArray[currentIndex + 1]?.options[3],
      });
      // console.log(`Current Index inside if`, currentIndex);
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

  /// Handle Previous Question
  const handlePrev = () => {
    setButtonStatus("prev");
    if (currentIndex === 0) {
      setCurrentIndex(questionArray.length);
    } else {
      setCurrentIndex(currentIndex - 1);
      setCount(count - 1);
      setQuestions(questionArray[currentIndex - 1]?.questions);
      setAnswer(questionArray[currentIndex - 1]?.answers);
      setOptionsObj({
        optionA: questionArray[currentIndex - 1]?.options[0],
        optionB: questionArray[currentIndex - 1]?.options[1],
        optionC: questionArray[currentIndex - 1]?.options[2],
        optionD: questionArray[currentIndex - 1]?.options[3],
      });
      return questionArray[currentIndex];
    }
  };

  /// Handle Update Question
  const updateQuestion = (id) => {
    console.log("option Object is :-", optionsObj);
    const convertOptions = Object.values(optionsObj);
    console.log("Option Object Convert Array of Option", convertOptions);
    const updateQuestionObj = questionArray.map((item, index) => {
      if (index === id) {
        return { ...item, questions, answers, options: convertOptions };
      } else {
        return item;
      }
    });

    // console.log("Updated Questions is", updateQuestionObj);
    setQuestionArray(updateQuestionObj);
  };

  /// Clear Current Question
  const clearCurrentQuestion = (id) => {
    setButtonStatus("prev");
    console.log("Current index is", id);
    const upDatedQuestion = questionArray.map((item, index) => {
      if (index === id) {
        setQuestions("");
        setOptionsObj({ optionA: "", optionB: "", optionC: "", optionD: "" });
        setAnswer("");
        return { ...item, questions: "", answers: "", options: [] };
      } else {
        return item;
      }
    });

    console.log("Afther click clear button is", upDatedQuestion);
    setQuestionArray(upDatedQuestion);
  };

  const addQuestionList = () => {
    console.log(
      "Function is  called and Array length is ",
      questionArray.length
    );

    console.log("Exam Object is", examObj);
    if (questionArray.length === 15) {
      dispatch(createExamActions(examObj));
    }
  };

  return [
    handleSubject,
    handleQuestion,
    handleOptions,
    handleAnswer,
    addQuestion,
    handlePrev,
    clearCurrentQuestion,
    updateQuestion,
    addQuestionList,
    optionsObj,
    count,
    questions,
    answers,
    questionArray,
    currentIndex,
    buttonStatus,
  ];
};

export default useCreateExam;
