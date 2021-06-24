import axios from "axios";
import { fromJS } from "immutable";
import * as types from "./actionTypes";

const changeHomeData = (result) => ({
  type: types.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList,
  writterList: result.writterList,
});

const addHomeList = (list, nextPage) => ({
  type: types.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage,
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  };
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homeList.json?page=" + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page + 1));
    });
  };
};

export const toggleTopShow = (show) => ({
  type: types.TOGGLE_SCROLL_TOP,
  show,
});
