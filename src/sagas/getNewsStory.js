import { put, takeLeading } from "redux-saga/effects";
import axios from "axios";
import { saveNewsStory, setLoading } from "../actions";
import { GET_NEWS_STORY } from "../actions/types";

export function* getNewsStory({ id, payload }) {
  yield put(setLoading(true));
  const result = yield axios({
    method: "get",
    url: `https://lifewindblog-api.com/news/stories/${id || payload}`,
  }).then((response) => response.data);
  yield put(saveNewsStory(result));
  yield put(setLoading(false));
}

export default function* takeGetNewsStory() {
  yield takeLeading(GET_NEWS_STORY, getNewsStory);
}
