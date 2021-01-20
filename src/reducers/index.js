import accountReducer from "./accountReducer";
import blogReducer from './blogReducer';
import { reducer as form } from "redux-form";
import { combineReducers } from "redux";

export default combineReducers({
  account: accountReducer,
  blog: blogReducer,
  form
});
