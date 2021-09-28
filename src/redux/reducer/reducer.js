import { LOGIN, SIGNUP } from "../constaints/constaint";

const initialState = {
  registerUsers: {},
  loginUser: {
    loading: false,
    data: null,
    message: null,
  },
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

    default:
      return state;
  }
}
