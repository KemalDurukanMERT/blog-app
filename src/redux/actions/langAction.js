import { SET_LANGUAGE } from "../types/langTypes";

export function setLanguage(language) {
  return {
    type: SET_LANGUAGE,
    payload: {
      selectedLanguage: language
    }
  };
}
