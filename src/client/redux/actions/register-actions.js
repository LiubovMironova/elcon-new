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
export const fetchRegisterThunkAC = userForm => {
  return async (dispatch, getState) => {
    dispatch(fetchRegisterStartAC());
    try {
      const userInfo = await fetch(PAGES.API.fetchRegister.path, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userForm)
      });
      const userInfoResult = await userInfo.json();
      dispatch(fetchRegisterSuccessAC(userInfoResult));
    } catch (e) {
      console.error(e);
      dispatch(fetchRegisterErrorAC());
    }
  };
};
