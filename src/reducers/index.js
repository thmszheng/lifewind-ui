import accountReducer from "./accountReducer";
import blogReducer from "./blogReducer";
import loadingReducer from "./loadingReducer";
import newsReducer from "./newsReducer";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import { SAVE_LOGIN, CREATE_ACCOUNT_SUCCESS } from "../actions/types";

export default combineReducers({
  account: accountReducer,
  blog: blogReducer,
  loading: loadingReducer,
  news: newsReducer,
  form: formReducer.plugin({
    CREATE_ACCOUNT: (state, action) => {
      switch (action.type) {
        case CREATE_ACCOUNT_SUCCESS:
          return undefined;
        default:
          return state;
      }
    },
    LOGIN: (state, action) => {
      switch (action.type) {
        case SAVE_LOGIN:
          return undefined;
        default:
          return state;
      }
    },
  }),
});
