// import * as constants from "./actionTypes";
import { fromJS } from "immutable";
import * as types from "./actionTypes";

const defaultState = fromJS({
  login: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_LOGIN:
      return state.set("login", action.value);
    case types.LOG_OUT:
      return state.set("login", action.value);
    default:
      return state;
  }
};
