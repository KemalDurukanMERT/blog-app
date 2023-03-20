import { combineReducers } from "redux";
import authReducer from "./authReducer";
import langReducer from "./langReducer";
import markdownReducer from "./markdownReducer"

const rootreducer = combineReducers({
    auth: authReducer,
    lang: langReducer,
    markdownrdc: markdownReducer,
});

export default rootreducer