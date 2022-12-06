import { combineReducers } from "redux";
import reducer from "./App";

const allReducers = combineReducers({
  myReducer: reducer,
});
export default allReducers;
