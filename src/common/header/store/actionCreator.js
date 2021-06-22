import * as constants from "./actionTypes";
import { fromJS } from "immutable";
import axios from "axios";

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 5),
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

export const handleMouseEnter = () => ({
  type: constants.MOUSE_ENTER,
});

export const handleMouseLeave = () => ({
  type: constants.MOUSE_LEAVE,
});

export const handleChangePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page,
});

export const mouseEnterChange = () => ({
  type: constants.MOUSE_ENTER_CHANGE,
});

export const mouseLeaveChange = () => ({
  type: constants.MOUSE_LEAVE_CHANGE,
});
