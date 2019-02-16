import { LOGIN_TYPES } from "../actions/login-actions";

const loginReducerInitState = {};

export default function loginReducer(state = loginReducerInitState, action) {
  // console.log("state", state);
  // console.log("action", action);
  switch (action.type) {
    case LOGIN_TYPES.ADD_LOGIN:
      return { ...state, login: "entered login" };
    default:
      return state;
  }
}
