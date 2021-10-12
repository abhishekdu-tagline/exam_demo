import {
  EXAMS,
  ONCHANGE,
  STUDENT_PROFILE,
  UPDATE_PROFILE,
  VIEW_EXAM_PAPER,
} from "../constaints/constaint";

const initialState = {
  studentExamsList: [],
  studentProfile: {},
  isEditable: false,
  examPaper: [],
};

export default function studentExamReducer(state = initialState, action) {
  console.log("Action send Reducer Data", action.payload);
  switch (action.type) {
    case EXAMS:
      return {
        ...state,
        studentExamsList: action.payload,
      };

    case STUDENT_PROFILE:
      return {
        ...state,
        studentProfile: action.payload,
      };

    case ONCHANGE:
      return {
        ...state,
        studentProfile: { ...state.studentProfile, name: action.payload },
      };

    case UPDATE_PROFILE:
      return { ...state, studentProfile: action.payload };

    case VIEW_EXAM_PAPER:
      return { ...state, examPaper: action.payload };

    default:
      return state;
  }
}
