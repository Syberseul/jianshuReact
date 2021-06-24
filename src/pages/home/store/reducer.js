// import * as constants from "./actionTypes";
import { fromJS } from "immutable";
import * as types from "./actionTypes";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writterList: [],
  articlePage: 1,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writterList: fromJS(action.writterList),
      });
    case types.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get("articleList").concat(action.list),
        articlePage: action.nextPage,
      });
    default:
      return state;
  }
};
