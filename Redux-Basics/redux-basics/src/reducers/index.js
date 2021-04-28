import isLoggedReducer from "./isLoggedIn/isloggedin";
import counterReducer from "./Counter/counter";
import { combineReducers } from "redux";

const allReducer = combineReducers({
    counter : counterReducer,
    isLogged: isLoggedReducer
});

export default allReducer;