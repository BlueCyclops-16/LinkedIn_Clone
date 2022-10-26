import { combineReducers } from "redux";

import useReducer from "./userReducer.js";

const rootReducer = combineReducers( {
    userState: useReducer,
})

export default rootReducer;