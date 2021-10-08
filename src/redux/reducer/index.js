import { combineReducers } from "redux";
import examReducer from "./reducer";
import studentExamReducer from "./studentReducer";
export default combineReducers({
  examReducer,
  studentExamReducer,
});
