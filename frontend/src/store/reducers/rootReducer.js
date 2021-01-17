import { combineReducers } from "redux";
import { sidebar } from "./sidebar";

export const rootReducer = combineReducers({
    sidebar: sidebar,
})