import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { saveNewsStories, setLoading } from "../actions";
import { GET_NEWS_STORIES } from "../actions/types";

export function* getNewsStories() {
  yield put(setLoading(true));
  const result = yield axios({
    method: "get",
    url: "https://lifewindblog-api.com/news/stories",
  }).then((response) => response.data);
  yield put(saveNewsStories(result));
  yield put(setLoading(false));
}

export default function* takeGetNewsStories() {
  yield takeLatest(GET_NEWS_STORIES, getNewsStories);
}
