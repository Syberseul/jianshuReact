import * as constants from "./actionTypes";

export const handleInputFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const handleInputBlur = () => ({
  type: constants.SEARCH_BLUR,
});
