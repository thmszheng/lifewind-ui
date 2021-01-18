import { SAVE_LOGIN } from "../actions/types";
import { saveLogin } from "../selectors";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case SAVE_LOGIN:
      return saveLogin(state, payload);
    default:
      return state;
  }
};
