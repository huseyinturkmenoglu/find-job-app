import { combineReducers } from "redux";
import AppReducer from "./AppReducers";

export default combineReducers({
	app: AppReducer,
});
