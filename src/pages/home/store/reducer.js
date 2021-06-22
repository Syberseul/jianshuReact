// import * as constants from "./actionTypes";
import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "Social",
      imgURL: "https://image.flaticon.com/icons/png/512/76/76304.png",
    },
    {
      id: 2,
      title: "School",
      imgURL: "https://image.flaticon.com/icons/png/128/981/981456.png",
    },
  ],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
