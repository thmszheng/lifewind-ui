import { takeLeading, select, put } from "redux-saga/effects";
import { PUBLISH_STORY } from "../actions/types";
import { getSavedLogin } from "../selectors";
import { getBlogStories, getUserStories } from "../actions";
import axios from "axios";

function* publishStory({ payload: { id, title, body } }) {
  const { userId, username } = yield select(getSavedLogin);

  yield axios({
    method: "post",
    url: "http://localhost:8080/blog/stories",
    data: {
      ...(id && { id }),
      title,
      body,
      userId,
      username,
    },
  });

  if (userId) {
    yield put(getUserStories(userId));
  } else {
    yield put(getBlogStories());
  }
}

export default function* takePublishStory() {
  yield takeLeading(PUBLISH_STORY, publishStory);
}
