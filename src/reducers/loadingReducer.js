import { setLoading } from "../selectors";
import { SET_LOADING } from "../actions/types";

const loadingReducer = (state = {}, { type, payload }) =>
  type === SET_LOADING && setLoading(state, payload);

export default loadingReducer;
