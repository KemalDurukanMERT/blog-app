import { SET_LANGUAGE } from "../types/langTypes";

const initialState = {
  selectedLanguage: "English",
};

const langReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LANGUAGE:
        const {selectedLanguage} = payload
      let newLanguage = {
        ...state,
        selectedLanguage: selectedLanguage,
      };
      return newLanguage;

    default:
      return state;
  }
};

export default langReducer;
