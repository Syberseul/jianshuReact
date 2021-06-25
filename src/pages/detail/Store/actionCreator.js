import axios from "axios";
import * as actionTypes from "./actionTypes";

const changeDetail = (title, desc, imgURL) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  desc,
  imgURL,
});

export const getDetail = () => {
  return (dispatch) => {
    axios.get("/api/detail.json").then((res) => {
      const result = res.data.data;
      dispatch(changeDetail(result.title, result.desc, result.imgURL));
    });
  };
};
