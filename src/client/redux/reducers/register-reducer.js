import { REGISTER_TYPES } from "../actions/register-actions";

const initialState = {
  userMyInfo: {
    email: "",
    password: ""
    // sequrityQuestion: ""
  },
  isFetching: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_TYPES.FETCH_REGISTER_START: {
      return {
        ...state,
        isFetching: true
      };
    }
    case REGISTER_TYPES.FETCH_REGISTER_SUCCESS: {
      return {
        userMyInfo: payload.userInfo,
        isFetching: false
      };
    }
    case REGISTER_TYPES.FETCH_REGISTER_ERROR: {
      return {
        ...state,
        isFetching: false
      };
    }
    default:
      return state;
  }
}
