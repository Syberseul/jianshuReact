import axios from "axios";
import * as types from "./actionTypes";

const changeHomeData = (result) => ({
  type: types.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList,
  writterList: result.writterList,
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};
