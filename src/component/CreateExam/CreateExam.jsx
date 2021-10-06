import React from "react";
import { useHistory } from "react-router";
import useCreateExam from "../containers/useCreateExam";

const CreateExam = React.memo(() => {
  // const { state } = useForm(validate);
  // const history = useHistory();
  // const handleLogout = () => {
  //   localStorage.removeItem("jwt");
  //   localStorage.removeItem("user");
  //   history.push("/");
  // };
  const [
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
  ] = useCreateExam();

  // console.log("option Object is CreateExam", optionsObj);

  const currentQuestion = questionArray[currentIndex];
  // console.log("Current Question  value is " + JSON.stringify(currentQuestion));
  console.log("option Object is :-", optionsObj);
  // console.log("Current Index is CreateExam Component", currentIndex);
  // console.log(questionArray[currentIndex]?.options[0]);
  return (
    <>
      <h4> Create Exam </h4> <br /> <hr />
      Question {count}
      <form>
        <label>Subject :-</label>
        <select name="subjectName" onChange={handleSubject}>
          <option value="ReactJS">ReactJS</option>
          <option value="AngularJS">AngularJS</option>
          <option value="Django">Django</option>
          <option value="Laravel">Laravel</option>
          <option value="Javascript">Javascript</option>
        </select>{" "}
        <br /> <br />
        <div>
          <label>Question :- </label>
          <input
            type="text"
            name="questions"
            placeholder="Enter Questions...."
            onChange={handleQuestion}
            value={questions}
          />
          <br /> <br />
          <div>
            <label> OptionA</label> &nbsp; &nbsp;
            <input
              type="radio"
              name="answer"
              value={optionsObj.optionA}
              onChange={handleAnswer}
            />
            <input
              type="text"
              placeholder="Enter Option A"
              name="optionA"
              onChange={handleOptions}
              value={optionsObj.optionA}
            />
          </div>
          <div>
            <label> OptionB</label> &nbsp; &nbsp;
            <input
              type="radio"
              name="answer"
              value={optionsObj.optionB}
              onChange={handleAnswer}
            />
            <input
              type="text"
              placeholder="Enter Option B"
              name="optionB"
              onChange={handleOptions}
              value={optionsObj.optionB}
            />
          </div>
          <div>
            <label> OptionC</label> &nbsp; &nbsp;
            <input
              type="radio"
              name="answer"
              value={optionsObj.optionC}
              onChange={handleAnswer}
            />
            <input
              type="text"
              placeholder="Enter Option C"
              name="optionC"
              value={optionsObj.optionC}
              onChange={handleOptions}
            />
          </div>
          <div>
            <label> OptionD</label> &nbsp; &nbsp;
            <input
              type="radio"
              name="answer"
              onChange={handleAnswer}
              value={optionsObj.optionD}
            />
            <input
              type="text"
              placeholder="Enter Option D"
              name="optionD"
              value={optionsObj.optionD}
              onChange={handleOptions}
            />
          </div>{" "}
          <label>Answer : - &nbsp;</label>
          {answers}
          <br />
          <br />
          <div>
            <button type="button" onClick={handlePrev}>
              Prev
            </button>{" "}
            &nbsp;
            <button type="button" onClick={addQuestion}>
              Next
            </button>{" "}
            &nbsp;
            <button
              type="button"
              onClick={() => {
                clearCurrentQuestion(currentIndex);
              }}
            >
              Clear
            </button>{" "}
            &nbsp;
            {buttonStatus === "prev" ? (
              <button
                type="button"
                onClick={() => {
                  updateQuestion(currentIndex);
                }}
              >
                {" "}
                Update
              </button>
            ) : (
              <button type="button" onClick={addQuestionList}>
                Submit
              </button>
            )}
          </div>
        </div>
      </form>
    </>
  );
});

export default CreateExam;
