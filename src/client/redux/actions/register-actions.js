import { PAGES } from "../../routes/pages";

export const REGISTER_TYPES = {
  FETCH_REGISTER_START: "FETCH_REGISTER_START",
  FETCH_REGISTER_SUCCESS: "FETCH_REGISTER_SUCCESS",
  FETCH_REGISTER_ERROR: "FETCH_REGISTER_ERROR"
};

const fetchRegisterStartAC = () => ({
  type: REGISTER_TYPES.FETCH_REGISTER_START
});

const fetchRegisterSuccessAC = userInfo => ({
  type: REGISTER_TYPES.FETCH_REGISTER_SUCCESS,
  payload: {
    userInfo
  }
});

const fetchRegisterErrorAC = () => ({
  type: REGISTER_TYPES.FETCH_REGISTER_ERROR
});

// eslint-disable-next-line
export const fetchRegisterThunkAC = () => {
  return async (dispatch, getState) => {
    console.log("state", getState());
    dispatch(fetchRegisterStartAC());
    try {
      const userInfo = await fetch(PAGES.API.fetchRegister.path);
      const userInfoResult = await userInfo.json();
      console.log("userInfoResult", userInfoResult);
      dispatch(fetchRegisterSuccessAC(userInfoResult));
    } catch (e) {
      console.error(e);
      dispatch(fetchRegisterErrorAC());
    }
  };
};
