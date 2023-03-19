import { combineReducers } from "redux";
import authReducer from "./authReducer";
import langReducer from "./langReducer";

const rootreducer = combineReducers({
    auth: authReducer,
    lang: langReducer
});

export default rootreducer