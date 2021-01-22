import { SAVE_LOGIN } from "../actions/types";
import { saveLogin } from "../selectors";

const accountReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case SAVE_LOGIN:
      return saveLogin(state, payload);
    default:
      return state;
  }
};

export default accountReducer;
