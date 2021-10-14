import {
  CREATE_EXAM,
  DELETE_EXAM,
  EXAM_DETAILS,
  EXAM_ONCHANGE,
  LOGIN,
  SIGNUP,
  VIEW_EXAM,
} from "../constaints/constaint";

const initialState = {
  registerUsers: {},
  loginUser: {
    loading: false,
    data: null,
    message: null,
  },
  createExams: [],
  viewExams: [],
  examDetail: {},
};

export default function examReducer(state = initialState, action) {
  //   console.log("Action send Data to reducer", action.payload);
  // console.log("In API calling Error send action to reducer", action.payload);

  switch (action.type) {
    case SIGNUP:
      //   console.log("SIgnUp Dispatch action is called");
      return {
        ...state,
        registerUsers: action.payload,
      };

    case LOGIN:
      //   console.log("Login Dispatch is called");
      return {
        ...state,
        loginUser: {
          loading: true,
          data: action.payload,
          message: action.payload.message,
        },
      };

    case CREATE_EXAM:
      return {
        ...state,
        createExams: [...state.createExams, action.payload],
      };

    case VIEW_EXAM:
      return { ...state, viewExams: action.payload };

    case DELETE_EXAM:
      console.log("Action send deleted id is", action.payload);
      const updatedExam = state.viewExams.filter((item) => {
        console.log("item");
        return item._id !== action.payload;
      });

      console.log("Updated Exam", updatedExam);

      return { ...state, viewExams: updatedExam };

    case EXAM_DETAILS:
      console.log("Action send Reducer Data", action.payload);
      return { ...state, examDetail: action.payload };

    case EXAM_ONCHANGE:
      console.log("Action log is", action.index);
      const updateArray = state.examDetail.questions.map((item, index) => {
        if (index === action.index) {
          return { ...item, question: action.value };
        } else {
          return item;
        }
      });
      console.log("Update Array: ", updateArray);

    default:
      return state;
  }
}
