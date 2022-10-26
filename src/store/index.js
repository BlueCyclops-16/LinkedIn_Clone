import { legacy_createStore as createStore, applyMiddleware } from "redux";

import rootReducer from "../Reducers";

const store = createStore(rootReducer, {});

export default store;