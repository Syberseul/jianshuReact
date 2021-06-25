import axios from "axios";
import * as actionTypes from "./actionTypes";

const changeDetail = (title, desc, imgURL) => ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  desc,
  imgURL,
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get("/api/detail.json?id=" + id).then((res) => {
      res.data.data.forEach((obj) => {
        if (obj.id === id) {
          dispatch(changeDetail(obj.title, obj.desc, obj.imgURL));
        }
      });
    });
  };
};
