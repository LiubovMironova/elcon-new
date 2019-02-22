import { PAGES } from "../../routes/pages";

export const LOGIN_TYPES = {
  FETCH_LOGIN_START: "FETCH_LOGIN_START",
  FETCH_LOGIN_SUCCESS: "FETCH_LOGIN_SUCCESS",
  FETCH_LOGIN_ERROR: "FETCH_LOGIN_ERROR"
};

const fetchLoginStartAC = () => ({
  type: LOGIN_TYPES.FETCH_LOGIN_START
});

const fetchLoginSuccessAC = userInfo => ({
  type: LOGIN_TYPES.FETCH_LOGIN_SUCCESS,
  payload: {
    userInfo
  }
});

const fetchLoginErrorAC = () => ({
  type: LOGIN_TYPES.FETCH_LOGIN_ERROR
});

// eslint-disable-next-line
export const fetchLoginThunkAC = userForm => {
  return async (dispatch, getState) => {
    dispatch(fetchLoginStartAC());
    try {
      const userInfo = await fetch(PAGES.API.fetchLogin.path, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userForm)
      });
      const userInfoResult = await userInfo.json();
      dispatch(fetchLoginSuccessAC(userInfoResult));
    } catch (e) {
      // console.error(e);
      dispatch(fetchLoginErrorAC());
    }
  };
};
