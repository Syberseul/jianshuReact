// import * as constants from "./actionTypes";
import { fromJS } from "immutable";
import * as types from "./actionTypes";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writterList: [],
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
    default:
      return state;
  }
};
