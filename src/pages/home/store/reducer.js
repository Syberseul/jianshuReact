// import * as constants from "./actionTypes";
import { fromJS } from "immutable";
import * as types from "./actionTypes";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writterList: [],
  articlePage: 1,
  showScroll: false,
});

const changeHomeData = (state, action) => {
  return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
    recommendList: fromJS(action.recommendList),
    writterList: fromJS(action.writterList),
  });
};

const addArticleList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    articlePage: action.nextPage,
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_DATA:
      return changeHomeData(state, action);
    case types.ADD_ARTICLE_LIST:
      return addArticleList(state, action);
    case types.TOGGLE_SCROLL_TOP:
      return state.set("showScroll", action.show);
    default:
      return state;
  }
};
