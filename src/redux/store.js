import { legacy_createStore as createStore, combineReducers } from "redux";
import todoReducers from "./reducers/todoReducers";

const rootReducer = combineReducers({ todos: todoReducers });

export const store = createStore(rootReducer);
