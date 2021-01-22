import { setLoading } from "../selectors";
import { SET_LOADING } from "../actions/types";

export default (state = {}, { type, payload }) =>
  type === SET_LOADING && setLoading(state, payload);
