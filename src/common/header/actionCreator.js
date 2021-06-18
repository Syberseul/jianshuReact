import { SEARCH_FOCUS, SEARCH_BLUR } from "./actionTypes";

export const handleInputFocus = () => {
  return {
    type: SEARCH_FOCUS,
  };
};

export const handleInputBlur = () => {
  return {
    type: SEARCH_BLUR,
  };
};
