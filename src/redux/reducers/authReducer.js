import { CLEAR_CURRENT_USER, SET_CURRENT_USER } from "../types/authTypes";


const initialState = {
  currentUser: false,
};

const authReducer = (state = initialState, { type }) => {
  switch (type) {
    case SET_CURRENT_USER:
      let newUserState = {
        ...state,
        currentUser: true,
      }
      sessionStorage.setItem("currentUser", true)
      return newUserState
    case CLEAR_CURRENT_USER:
      let deleteUserState = {
        ...state,
        currentUser: false,
      }
      sessionStorage.setItem("currentUser", false)
      return deleteUserState;

    default:
      return state;
  }
};

export default authReducer;
