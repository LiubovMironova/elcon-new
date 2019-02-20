import { LOGIN_TYPES } from "../actions/login-actions";

const initialState = {
  userMyInfo: {
    email: "",
    password: ""
  },
  isFetching: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_TYPES.FETCH_LOGIN_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case LOGIN_TYPES.FETCH_LOGIN_SUCCESS: {
      return {
        userMyInfo: payload.userInfo,
        isFetching: false
      };
    }
    case LOGIN_TYPES.FETCH_LOGIN_ERROR: {
      return {
        ...state,
        isFetching: false
      };
    }
    default:
      return state;
  }
}
