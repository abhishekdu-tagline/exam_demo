import { EXAMS } from "../constaints/constaint";

const initialState = {
  studentExamsList: [],
};

export default function studentExamReducer(state = initialState, action) {
  switch (action.type) {
    case EXAMS:
      return {
        ...state,
        studentExamsList: action.payload,
      };
    default:
      return state;
  }
}
