import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  title: "",
  imgURL: "",
  desc: "",
});

const changeDetail = (state, action) => {
  return state.merge({
    title: action.title,
    desc: action.desc,
    imgURL: action.imgURL,
  });
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return changeDetail(state, action);
    default:
      return state;
  }
};
