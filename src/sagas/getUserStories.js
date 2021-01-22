import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { saveUserStories, setLoading } from "../actions";
import { GET_USER_STORIES } from "../actions/types";

export function* getUserStories({ id, payload }) {
  yield put(setLoading(true));
  const result = yield axios({
    method: "get",
    url: `http://localhost:8080/blog/users/${id || payload}`,
  }).then((response) => response.data);
  yield put(saveUserStories(result));
  yield put(setLoading(false));
}

export default function* takeGetUserStories() {
  yield takeLatest(GET_USER_STORIES, getUserStories);
}
