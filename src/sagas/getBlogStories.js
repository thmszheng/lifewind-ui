import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { saveBlogStories, setLoading } from "../actions";
import { GET_BLOG_STORIES } from "../actions/types";

export function* getBlogStories() {
  yield put(setLoading(true));
  const result = yield axios({
    method: "get",
    url: "http://localhost:8080/blog/stories",
  }).then((response) => response.data);
  yield put(saveBlogStories(result));
  yield put(setLoading(false));
}

export default function* takeGetBlogStories() {
  yield takeLatest(GET_BLOG_STORIES, getBlogStories);
}
