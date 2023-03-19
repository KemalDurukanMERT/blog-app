import { CLEAR_CURRENT_USER, SET_CURRENT_USER } from "../types/authTypes";

export function userLogin() {
  return {
    type: SET_CURRENT_USER,
  };
}

export function userLogout() {
  return {
    type: CLEAR_CURRENT_USER,
  };
}
