import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  title: "",
  imgURL: "",
  desc: "",
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        desc: action.desc,
        imgURL: action.imgURL,
      });
    default:
      return state;
  }
};
