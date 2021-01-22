import { put, takeLeading } from "redux-saga/effects";
import axios from "axios";
import { saveStory, setLoading } from "../actions";
import { GET_STORY } from "../actions/types";

export function* getBlogStory({ id, payload }) {
  yield put(setLoading(true));
  const result = yield axios({
    method: "get",
    url: `https://lifewindblog-api.com/blog/stories/${id || payload}`,
  }).then((response) => response.data);
  yield put(saveStory(result));
  yield put(setLoading(false));
}

export default function* takeGetStory() {
  yield takeLeading(GET_STORY, getBlogStory);
}
