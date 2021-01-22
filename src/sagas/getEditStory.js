import { put, takeLeading, select } from "redux-saga/effects";
import { destroy, initialize } from "redux-form";
import axios from "axios";
import { saveStory, setLoading } from "../actions";
import { EDIT_STORY } from "../actions/types";
import { getSavedLogin } from "../selectors";

const FORM_NAME = "EDIT_STORY";

export function* getEditStory({ id, payload }) {
  yield put(setLoading(true));
  yield put(destroy(FORM_NAME));
  const { userId } = yield select(getSavedLogin);

  if (!userId) {
    yield put(setLoading(false));
    return;
  }

  const result = yield axios({
    method: "get",
    url: `https://lifewindblog-api.com/blog/stories/${id || payload}`,
  }).then((response) => response.data);

  if (userId === result.userId) {
    yield put(saveStory(result));
    yield put(initialize(FORM_NAME, result));
  }
  yield put(setLoading(false));
}

export default function* takeEditStory() {
  yield takeLeading(EDIT_STORY, getEditStory);
}
