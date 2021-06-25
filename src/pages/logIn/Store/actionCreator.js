import axios from "axios";
import * as actionTypes from "./actionTypes";

const changeLogin = () => ({
  type: actionTypes.CHANGE_LOGIN,
  value: true,
});

export const login = (acc, pwd) => {
  return (dispatch) => {
    axios.get("/api/login.json?acc=" + acc + "&pwd=" + pwd).then((res) => {
      const result = res.data.data;
      if (result) {
        dispatch(changeLogin());
      } else {
        alert("log in failed");
      }
    });
  };
};

export const logout = () => ({
  type: actionTypes.LOG_OUT,
  value: false,
});
