import * as constants from "./actionTypes";
import { fromJS } from "immutable";
import axios from "axios";

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
});

export const handleInputFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const handleInputBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
