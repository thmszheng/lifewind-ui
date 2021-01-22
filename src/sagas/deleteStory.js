import { put, takeLeading } from "redux-saga/effects";
import axios from "axios";
import { DELETE_STORY } from "../actions/types";
import { getUserStories } from "../actions";

export function* deleteStory({ payload: { id, userId } }) {
  yield axios({
    method: "delete",
    url: `http://localhost:8080/blog/stories/${id}`,
  }).then((response) => response.data);
  yield put(getUserStories(userId));
}

export default function* takeDeleteStory() {
  yield takeLeading(DELETE_STORY, deleteStory);
}
