import { takeLeading, select } from "redux-saga/effects";
import {PUBLISH_STORY} from "../actions/types";
import { getSavedLogin } from "../selectors";
import axios from 'axios';

function* publishStory({ payload: { title, body } }) {
  const { userId, username } = yield select(getSavedLogin);

  const result = yield axios({
    method: 'post',
    url: 'http://localhost:8080/api/v1/stories',
    data: {
      title,
      body,
      userId,
      username
    }
  });

  console.log(result);
}

function* takePublishStory() {
  yield takeLeading(PUBLISH_STORY, publishStory);
}

export default takePublishStory;
