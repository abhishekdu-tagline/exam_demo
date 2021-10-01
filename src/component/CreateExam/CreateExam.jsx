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
  ] = useCreateExam();
  return (
    <>
      <h4> Create Exam </h4> <br /> <hr />
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
          />{" "}
          <br /> <br />
          <div>
            <label> OptionA</label> &nbsp; &nbsp;
            <input type="radio" name="answer" onChange={handleAnswer} />
            <input
              type="text"
              placeholder="Enter Option A"
              name="optionA"
              onChange={handleOptions}
            />
          </div>
          <div>
            <label> OptionB</label> &nbsp; &nbsp;
            <input type="radio" name="answer" onChange={handleAnswer} />
            <input
              type="text"
              placeholder="Enter Option B"
              name="optionB"
              onChange={handleOptions}
            />
          </div>
          <div>
            <label> OptionC</label> &nbsp; &nbsp;
            <input type="radio" name="answer" onChange={handleAnswer} />
            <input
              type="text"
              placeholder="Enter Option C"
              name="optionC"
              onChange={handleOptions}
            />
          </div>
          <div>
            <label> OptionD</label> &nbsp; &nbsp;
            <input type="radio" name="answer" onChange={handleAnswer} />
            <input
              type="text"
              placeholder="Enter Option D"
              name="optionD"
              onChange={handleOptions}
            />
          </div>{" "}
          <label>Answer</label>
          <br />
          <br />
          <div>
            <button>Prev</button> &nbsp;
            <button onClick={addQuestion}>Next</button> &nbsp;
            <button>Clear</button> &nbsp;
            <button>Submit</button>
          </div>
        </div>
      </form>
    </>
  );
});

export default CreateExam;
