import accountReducer from "./accountReducer";
import { reducer as form } from "redux-form";
import { combineReducers } from "redux";

export default combineReducers({
  account: accountReducer,
  form,
});
