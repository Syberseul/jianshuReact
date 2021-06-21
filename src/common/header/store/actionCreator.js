import * as constants from "./actionTypes";
// 引入 fromJS
import { fromJS } from "immutable";
import axios from "axios";

export const handleInputFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const handleInputBlur = () => ({
  type: constants.SEARCH_BLUR,
});

const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  // 传值时将data从普通数据类型变为immutable数据类型
  data: fromJS(data),
});

export const getList = () => {
  return (dispatch) => {
    axios
      .get("/api/headerList.json")
      .then((res) => {
        // 由外部api引入的数据，其定义一定是普通数据类型，而不是immutable数据类型，此时应在最上方import { fromJS } from 'immutable'，并在传值时，将对应数据变为immutable数据类型
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
